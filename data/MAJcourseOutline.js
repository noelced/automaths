// ============================================================
// data/MAJcourseOutline.js — Générateur de data/courseOutline.js
// ============================================================
//
// À QUOI ÇA SERT
// ----------------------------------------------------------------
// Scanne tous les fichiers data/official/officialData_*.js (listés via
// leur "_file" dans officialStructure.js) pour extraire, DANS L'ORDRE
// RÉEL DU COURS :
//   - les titres <h2 class="section-title"> (= "Parties")
//   - les titres <h3 class="section-title"> qu'ils contiennent (= "Sous-
//     parties"), ou directement les QCM si un <h2> n'a pas de <h3>
//   - le quiz_key associé à chaque section, via
//     startQuizFromButton('quiz-area-XXX', 'CLÉ')
//
// Ça donne le VRAI plan du chapitre (contrairement à une déduction par
// le format numérique de la clé, qui peut être trompeuse — voir les
// avertissements affichés en fin de scan).
//
// COMMENT L'UTILISER
// ----------------------------------------------------------------
//   node MAJcourseOutline.js            → régénère data/courseOutline.js
//   node MAJcourseOutline.js --dry-run  → affiche le résultat sans écrire
//
// Placez ce script dans /data/, à côté de officialStructure.js et du
// dossier official/. Relancez-le après avoir ajouté ou modifié un
// fichier officialData_*.js.
//
// COMPORTEMENT — FUSION, PAS D'ÉCRASEMENT AVEUGLE
// ----------------------------------------------------------------
// Si le fichier d'un chapitre est introuvable sur le disque (ex : les
// chapitres 4ème/6ème pas encore rédigés), ce chapitre est simplement
// ignoré et ce qui existait déjà pour lui dans courseOutline.js est
// conservé tel quel. Rien n'est donc jamais perdu.
// ============================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DATA_DIR = __dirname;
const STRUCTURE_FILE = path.join(DATA_DIR, 'officialStructure.js');
const OUTPUT_FILE = path.join(DATA_DIR, 'courseOutline.js');
const DRY_RUN = process.argv.includes('--dry-run');


// ── CHARGEMENT DE officialStructure.js (liste des chapitres à scanner) ────
function loadOfficialStructure() {
    const code = fs.readFileSync(STRUCTURE_FILE, 'utf8');
    const sandbox = {};
    vm.createContext(sandbox);
    vm.runInContext(code + '\n;this.__structure = officialStructure;', sandbox);
    return sandbox.__structure || [];
}

// ── CHARGEMENT DE L'ANCIEN courseOutline.js (pour fusion / conservation) ──
function loadExistingOutline() {
    if (!fs.existsSync(OUTPUT_FILE)) return {};
    try {
        const code = fs.readFileSync(OUTPUT_FILE, 'utf8');
        const sandbox = {};
        vm.createContext(sandbox);
        vm.runInContext(code + '\n;this.__outline = courseOutline;', sandbox);
        return sandbox.__outline || {};
    } catch (e) {
        console.warn(`⚠️  Impossible de lire l'ancien ${OUTPUT_FILE} (${e.message}). Il sera recréé de zéro.`);
        return {};
    }
}


// ── EXTRACTION D'UN CHAPITRE (analyse textuelle, pas d'exécution) ─────────
// Repère les <h2>, <h3> et startQuizFromButton(...) DANS L'ORDRE
// D'APPARITION dans le texte, pour reconstruire le plan réel.
function extractOutline(fileContent, warnings, chapterLabel) {
    // On retire les commentaires HTML <!-- ... --> pour ne pas capter de
    // faux titres ou de faux boutons laissés en commentaire dans le cours.
    const text = fileContent.replace(/<!--[\s\S]*?-->/g, '');

    const tagRe = /<h2 class="section-title"[^>]*>([\s\S]*?)<\/h2>|<h3 class="section-title"[^>]*>([\s\S]*?)<\/h3>|startQuizFromButton\(\s*'[^']*'\s*,\s*'([^']+)'\s*\)/g;

    const h2Sections = [];
    let currentH2 = null;
    let currentH3Title = null;
    const seenKeys = new Set();

    let match;
    while ((match = tagRe.exec(text)) !== null) {
        if (match[1] !== undefined) {
            // Nouveau <h2>
            currentH2 = { title: cleanTitle(match[1]), items: [] };
            h2Sections.push(currentH2);
            currentH3Title = null;
        } else if (match[2] !== undefined) {
            // Nouveau <h3>
            currentH3Title = cleanTitle(match[2]);
        } else if (match[3] !== undefined) {
            // Bouton de QCM
            const key = match[3];
            if (!currentH2) {
                warnings.push(`[${chapterLabel}] clé "${key}" : trouvée avant tout <h2>, ignorée (structure inattendue).`);
                continue;
            }
            if (seenKeys.has(key)) {
                warnings.push(`[${chapterLabel}] clé "${key}" : utilisée PLUSIEURS FOIS dans ce chapitre (sous des titres différents ?) — à vérifier dans le fichier source.`);
            }
            seenKeys.add(key);
            currentH2.items.push({ h3Title: currentH3Title, quizKey: key });
        }
    }

    return h2Sections;
}

function cleanTitle(html) {
    return html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}


// ── PROGRAMME PRINCIPAL ────────────────────────────────────────────────────
function main() {
    const structure = loadOfficialStructure();
    const outline = loadExistingOutline();
    const warnings = [];
    let scannedCount = 0;

    structure.forEach(levelObj => {
        const level = levelObj.name;
        if (!outline[level]) outline[level] = {};

        (levelObj.themes || []).forEach(theme => {
            (theme.chapters || []).forEach(chap => {
                const chapterLabel = `${level} — ${chap.title}`;
                const filePath = chap._file ? path.join(DATA_DIR, '..', chap._file) : null;

                if (!filePath || !fs.existsSync(filePath)) {
                    console.warn(`⏭️  ${chapterLabel} : fichier introuvable (${chap._file || '?'}) — laissé inchangé.`);
                    return;
                }

                console.log(`🔍 Scan de ${chapterLabel} (${chap._file})…`);
                const content = fs.readFileSync(filePath, 'utf8');
                const h2Sections = extractOutline(content, warnings, chapterLabel);

                outline[level][chap.title] = {
                    chapterId: chap.id,
                    h2Sections
                };
                scannedCount++;

                const nbQuiz = h2Sections.reduce((sum, h2) => sum + h2.items.length, 0);
                console.log(`   ✅ ${h2Sections.length} partie(s), ${nbQuiz} QCM référencés.`);
            });
        });
    });

    const output = buildFileContent(outline);

    console.log(`\n── RÉSUMÉ ────────────────────────────────────────────────`);
    console.log(`  ${scannedCount} chapitre(s) scanné(s) avec succès.`);

    if (warnings.length) {
        console.log(`\n⚠️  ${warnings.length} avertissement(s) :`);
        warnings.forEach(w => console.log('  - ' + w));
    } else {
        console.log('\n✅ Aucun avertissement.');
    }

    if (DRY_RUN) {
        console.log(`\n(--dry-run) Rien n'a été écrit. Voici le contenu qui aurait été généré :\n`);
        console.log(output);
    } else {
        fs.writeFileSync(OUTPUT_FILE, output, 'utf8');
        console.log(`\n💾 ${OUTPUT_FILE} mis à jour avec succès.`);
    }
}

function indentBlock(jsonText, spaces) {
    const pad = ' '.repeat(spaces);
    return jsonText.split('\n').map((l, i) => i === 0 ? l : pad + l).join('\n');
}

function buildFileContent(outline) {
    const json = indentBlock(JSON.stringify(outline, null, 4), 0);
    return `// ============================================================
// data/courseOutline.js — Plan détaillé des cours (H2/H3 réels)
// ============================================================
// ⚙️  Fichier généré automatiquement par data/MAJcourseOutline.js
//     Ne modifiez pas ce fichier à la main : relancez plutôt
//     "node MAJcourseOutline.js" depuis le dossier data/ après avoir
//     modifié un fichier officialData_*.js.
//
// Structure : courseOutline[niveau][titreChapitre] = {
//     chapterId,
//     h2Sections: [
//         { title: "...", items: [ { h3Title: "..."|null, quizKey: "..." } ] }
//     ]
// }
// Utilisé par l'onglet "Progression" de dashboard.html.
// ============================================================

const courseOutline = ${json};
`;
}

main();
