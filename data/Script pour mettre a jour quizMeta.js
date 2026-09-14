// ============================================================
// data/MAJquizMeta.js — Générateur automatique de data/quizMeta.js
// ============================================================
//
// À QUOI ÇA SERT
// ----------------------------------------------------------------
// Ce script scanne les fichiers de questions (localQuestions*.js)
// et reconstruit automatiquement data/quizMeta.js : pour chaque
// quiz_key trouvé, il déduit :
//   - le niveau            (fixé par fichier, voir CONFIG plus bas)
//   - le chapitre          (dernier commentaire "CHAPITRE n (Nom)"
//                            rencontré avant la clé — "sticky")
//   - le titre du QCM      (dernier commentaire "// xxxx : Titre"
//                            rencontré avant la clé)
//   - le nombre de questions (comptage des objets {quiz: ...} dans
//                            le tableau de la clé)
//
// COMMENT L'UTILISER
// ----------------------------------------------------------------
//   node MAJquizMeta.js            → régénère data/quizMeta.js
//   node MAJquizMeta.js --dry-run  → affiche juste le résultat,
//                                    n'écrit rien sur le disque
//
// Placez ce script dans le même dossier /data/ que vos fichiers
// localQuestions*.js et data/quizMeta.js.
//
// COMPORTEMENT IMPORTANT — FUSION, PAS D'ÉCRASEMENT AVEUGLE
// ----------------------------------------------------------------
// Si un fichier listé dans CONFIG n'existe pas encore sur le disque
// (ex: localQuestions4eme.js avant sa création), le script l'ignore
// simplement (avec un avertissement) et CONSERVE les données déjà
// présentes pour ce niveau dans l'actuel data/quizMeta.js, s'il en
// existe. Rien n'est donc jamais perdu : chaque niveau n'est mis à
// jour que lorsque son fichier source est réellement scanné.
//
// Pour ajouter le niveau 4ème ou 6ème : créez le fichier
// localQuestions4eme.js / localQuestions6eme.js, puis décommentez
// la ligne correspondante dans CONFIG ci-dessous.
// ============================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DATA_DIR = __dirname;

// ── CONFIGURATION DES FICHIERS SOURCES À SCANNER ──────────────────────────
// Chaque entrée : { file: 'nom du fichier', level: 'niveau affiché' }
// Le niveau est fixé ici (et non déduit du contenu) car un fichier entier
// correspond toujours à un seul niveau.
const CONFIG = [
    { file: 'localQuestions.js', level: '3ème' },
    { file: 'localQuestions5eme.js', level: '5ème' },

    // À décommenter une fois les fichiers créés :
    // { file: 'localQuestions4eme.js', level: '4ème' },
    // { file: 'localQuestions6eme.js', level: '6ème' },
];

const OUTPUT_FILE = path.join(DATA_DIR, 'quizMeta.js');
const DRY_RUN = process.argv.includes('--dry-run');


// ── CHARGEMENT DE L'ANCIEN quizMeta.js (POUR FUSION / CONSERVATION) ───────
function loadExistingQuizMeta() {
    const empty = { byKey: {}, questionCount: {}, titles: {}, totalByLevel: {} };
    if (!fs.existsSync(OUTPUT_FILE)) return empty;

    try {
        const code = fs.readFileSync(OUTPUT_FILE, 'utf8');
        const sandbox = {};
        vm.createContext(sandbox);
        vm.runInContext(code + '\n;this.__quizMeta = quizMeta;', sandbox);
        const existing = sandbox.__quizMeta || {};
        return {
            byKey: existing.byKey || {},
            questionCount: existing.questionCount || {},
            titles: existing.titles || {},
            totalByLevel: existing.totalByLevel || {},
        };
    } catch (e) {
        console.warn(`⚠️  Impossible de lire l'ancien ${OUTPUT_FILE} (${e.message}). Il sera recréé de zéro.`);
        return empty;
    }
}


// ── SCAN D'UN FICHIER localQuestionsXXX.js ────────────────────────────────
// Analyse purement textuelle (pas d'exécution du fichier) : robuste même
// si le fichier utilise var/const, des espaces irréguliers, etc.
function scanFile(filePath, level) {
    const text = fs.readFileSync(filePath, 'utf8');
    const lines = text.split('\n');

    const byKey = {};
    const questionCount = {};
    const titles = {};
    const warnings = [];

    let currentChapter = null;
    let currentChapterDigit = null;
    let pendingTitle = null;

    // Ligne de commentaire "CHAPITRE n (Nom du chapitre)" — reste valable
    // ("sticky") jusqu'au prochain commentaire de ce type.
    const chapterRe = /CHAPITRE\s+(\d+)\s*\(([^)]+)\)/i;

    // Ligne de commentaire "// 51101 : Titre du QCM" — s'applique à la
    // PROCHAINE clé rencontrée, même si le numéro ne correspond pas
    // exactement (les auteurs corrigent parfois la clé sans mettre à jour
    // le commentaire).
    const titleRe = /^\s*\/\/\s*[0-9][0-9_]*\s*:\s*(.+)$/;

    // Ligne définissant une clé de QCM : "51111": [   ou  "3_10_101":[
    const keyRe = /^\s*"([0-9][0-9_]*)"\s*:\s*\[/;

    let charOffset = 0;
    const lineOffsets = [];
    lines.forEach(l => { lineOffsets.push(charOffset); charOffset += l.length + 1; });

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        const chapMatch = line.match(chapterRe);
        if (chapMatch) {
            currentChapterDigit = chapMatch[1];
            currentChapter = chapMatch[2].trim();
            continue;
        }

        const titleMatch = line.match(titleRe);
        if (titleMatch && !keyRe.test(line)) {
            // Nettoie le titre : on coupe avant une parenthèse ou une virgule
            // finale de phrase coupée sur plusieurs lignes, pour garder un
            // libellé court et présentable sur un bouton.
            let t = titleMatch[1].trim();
            t = t.split('(')[0].trim();
            t = t.replace(/[,.;:]+$/, '').trim();
            if (t) pendingTitle = t;
            continue;
        }

        const keyMatch = line.match(keyRe);
        if (keyMatch) {
            const key = keyMatch[1];

            if (!currentChapter) {
                warnings.push(`[${level}] clé "${key}" : aucun commentaire "CHAPITRE n (Nom)" trouvé avant elle — chapitre marqué "Chapitre non identifié".`);
            }
            byKey[key] = { level, chapter: currentChapter || 'Chapitre non identifié' };

            if (pendingTitle) {
                titles[key] = pendingTitle;
            }
            pendingTitle = null;

            // Vérification de cohérence : le 2e caractère de la clé (chiffre
            // de chapitre selon la convention [niveau][chapitre]...) doit
            // correspondre au numéro de chapitre du commentaire sticky.
            if (currentChapterDigit && /^[0-9][0-9]/.test(key)) {
                const keyChapterDigit = key[1];
                if (keyChapterDigit !== currentChapterDigit) {
                    warnings.push(`[${level}] clé "${key}" : préfixe suggère le chapitre ${keyChapterDigit}, mais le commentaire le plus proche indique le chapitre ${currentChapterDigit} ("${currentChapter}"). À vérifier.`);
                }
            }

            // Comptage du nombre de questions : on repère la position du
            // "[" de cette ligne, puis on compte les objets {quiz: ...}
            // jusqu'au "]" correspondant (en ignorant le contenu des
            // chaînes de caractères pour ne pas être perturbé par des
            // crochets/accolades présents dans un texte, ex: "[3;5]").
            const startIdx = lineOffsets[i] + line.indexOf('[', line.indexOf('"' + key + '"'));
            const { endIdx, count } = countQuestionsInArray(text, startIdx);
            questionCount[key] = count;

            if (count === 0) {
                warnings.push(`[${level}] clé "${key}" : 0 question détectée — vérifier le fichier source.`);
            }
        }
    }

    return { byKey, questionCount, titles, warnings };
}

// Compte les objets top-niveau { ... } à l'intérieur d'un tableau [ ... ]
// en partant de l'index du "[" d'ouverture. Ignore le contenu des chaînes
// de caractères (', ", `) pour ne pas être perturbé par des crochets ou
// accolades apparaissant dans un texte de question.
function countQuestionsInArray(text, openBracketIdx) {
    let i = openBracketIdx;
    let bracketDepth = 0;
    let braceDepth = 0;
    let count = 0;
    let inString = null; // ', ", ` ou null

    for (; i < text.length; i++) {
        const c = text[i];
        const prev = text[i - 1];

        if (inString) {
            if (c === inString && prev !== '\\') inString = null;
            continue;
        }

        if (c === '"' || c === "'" || c === '`') { inString = c; continue; }

        if (c === '[') bracketDepth++;
        else if (c === ']') {
            bracketDepth--;
            if (bracketDepth === 0) { i++; break; } // fin du tableau de cette clé
        } else if (c === '{') {
            braceDepth++;
            if (braceDepth === 1) count++; // nouvel objet-question de premier niveau
        } else if (c === '}') {
            braceDepth--;
        }
    }

    return { endIdx: i, count };
}


// ── SÉRIALISATION AU FORMAT DU FICHIER quizMeta.js ────────────────────────
function indentBlock(jsonText, spaces) {
    const pad = ' '.repeat(spaces);
    return jsonText.split('\n').map((l, idx) => idx === 0 ? l : pad + l).join('\n');
}

function buildFileContent(merged) {
    const byKeyJson = indentBlock(JSON.stringify(merged.byKey, null, 4), 4);
    const countJson = indentBlock(JSON.stringify(merged.questionCount, null, 4), 4);
    const titlesJson = indentBlock(JSON.stringify(merged.titles, null, 4), 4);
    const totalJson = indentBlock(JSON.stringify(merged.totalByLevel, null, 4), 4);

    return `// ============================================================
// data/quizMeta.js — Métadonnées des questionnaires
// ============================================================
// ⚙️  Fichier généré automatiquement par data/MAJquizMeta.js
//     Ne modifiez pas ce fichier à la main : relancez plutôt
//     "node MAJquizMeta.js" depuis le dossier data/ après avoir
//     mis à jour vos fichiers localQuestionsXXX.js.
//
// Mapping : quiz_key -> { level, chapter } + comptages + titres
// Utilisé par student-dashboard.html et dashboard.html.
// ============================================================

const quizMeta = {
    // Mapping quiz_key -> niveau et chapitre
    byKey: ${byKeyJson},

    // Nombre de questions par quiz_key
    questionCount: ${countJson},

    // Titre lisible de chaque QCM (affiché sur les boutons du tableau de bord).
    // Absent pour une clé => "QCM <clé>" sera affiché par défaut.
    titles: ${titlesJson},

    // Total de questions par niveau (pour la barre de progression globale)
    totalByLevel: ${totalJson}
};
`;
}


// ── PROGRAMME PRINCIPAL ────────────────────────────────────────────────────
function main() {
    const existing = loadExistingQuizMeta();

    // On part de l'existant, puis on remplace niveau par niveau ce qui a
    // pu être scanné avec succès.
    const merged = {
        byKey: { ...existing.byKey },
        questionCount: { ...existing.questionCount },
        titles: { ...existing.titles },
        totalByLevel: { ...existing.totalByLevel },
    };

    let allWarnings = [];
    const scannedLevels = [];

    CONFIG.forEach(({ file, level }) => {
        const filePath = path.join(DATA_DIR, file);

        if (!fs.existsSync(filePath)) {
            console.warn(`⏭️  ${file} introuvable — niveau "${level}" laissé inchangé dans quizMeta.js.`);
            return;
        }

        console.log(`🔍 Scan de ${file} (niveau ${level})…`);
        const result = scanFile(filePath, level);

        // Retire les anciennes entrées de ce niveau avant de les remplacer,
        // pour ne pas garder d'entrées obsolètes (QCM supprimés du fichier).
        Object.keys(merged.byKey).forEach(k => {
            if (merged.byKey[k].level === level) {
                delete merged.byKey[k];
                delete merged.questionCount[k];
                delete merged.titles[k];
            }
        });

        Object.assign(merged.byKey, result.byKey);
        Object.assign(merged.questionCount, result.questionCount);
        Object.assign(merged.titles, result.titles);

        const total = Object.keys(result.byKey)
            .reduce((sum, k) => sum + (result.questionCount[k] || 0), 0);
        merged.totalByLevel[level] = total;

        scannedLevels.push({ level, nbQuiz: Object.keys(result.byKey).length, total });
        allWarnings = allWarnings.concat(result.warnings);

        console.log(`   ✅ ${Object.keys(result.byKey).length} QCM trouvés, ${total} questions au total.`);
    });

    const output = buildFileContent(merged);

    console.log('\n── RÉSUMÉ ──────────────────────────────────────────────');
    scannedLevels.forEach(s => console.log(`  ${s.level} : ${s.nbQuiz} QCM, ${s.total} questions`));

    if (allWarnings.length) {
        console.log(`\n⚠️  ${allWarnings.length} avertissement(s) :`);
        allWarnings.forEach(w => console.log('  - ' + w));
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

main();
