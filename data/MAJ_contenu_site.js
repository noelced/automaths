// ============================================================
// data/MAJ_contenu_site.js — Générateur unique (cours + quiz)
// ============================================================
//
// À QUOI ÇA SERT
// ----------------------------------------------------------------
// Remplace à la fois l'ancien MAJquizMeta.js et l'ancien
// MAJcourseOutline.js par UN SEUL script, à lancer après avoir
// ajouté/modifié un chapitre de cours (data/official/officialData_*.js)
// ou un fichier de quiz (data/localQuestions_<niveau>_chapitreNN.js).
//
// Pour CHAQUE chapitre connu de officialStructure.js (quel que soit son
// nombre — ce script ne suppose JAMAIS un nombre fixe de chapitres par
// niveau, il lit toujours la liste réelle dans officialStructure.js) :
//
//   1) COURS  : si data/official/officialData_<niveau>_chapitreN.js
//      existe, il est scanné pour en extraire le vrai plan (<h2>/<h3>
//      + clés de quiz via startQuizFromButton) -> alimente
//      courseOutline.js, exactement comme faisait MAJcourseOutline.js.
//
//   2) QUIZ   : si data/localQuestions_<niveau>_chapitreNN.js existe
//      (NN = id du chapitre sur 2 chiffres, ex. "01", "14"), il est
//      scanné pour en extraire chaque clé + son nombre de questions ->
//      alimente quizMeta.js. Le NIVEAU et le CHAPITRE de chaque clé sont
//      déduits du NOM DU FICHIER (fiable à 100%, contrairement à
//      l'ancienne détection par commentaire "CHAPITRE n (Nom)" qui
//      pouvait être ratée) — le format 6 chiffres de la clé elle-même
//      sert uniquement de VÉRIFICATION CROISÉE (avertissement si la clé
//      ne correspond pas au fichier qui la contient).
//
//   3) TITRES : quizMeta.titles est entièrement DÉRIVÉ de la position
//      réelle de chaque clé dans courseOutline (titre du <h3>, ou du
//      <h2> à défaut) — plus besoin d'entretenir à la main des
//      commentaires "// clé : Titre" dans les fichiers de quiz.
//
// COMPORTEMENT — FUSION, PAS D'ÉCRASEMENT AVEUGLE
// ----------------------------------------------------------------
// Si le fichier d'un chapitre (cours OU quiz) est introuvable sur le
// disque, ce chapitre précis est simplement laissé inchangé dans
// courseOutline.js / quizMeta.js — jamais supprimé. Chaque chapitre est
// donc mis à jour indépendamment des autres.
//
// COMMENT L'UTILISER
// ----------------------------------------------------------------
//   node MAJ_contenu_site.js            → régénère quizMeta.js + courseOutline.js
//   node MAJ_contenu_site.js --dry-run  → affiche le résultat sans rien écrire
//
// Placez ce script dans /data/, à côté de officialStructure.js, du
// dossier official/, et des fichiers localQuestions_*_chapitreNN.js.
// ============================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DATA_DIR = __dirname;
const STRUCTURE_FILE = path.join(DATA_DIR, 'officialStructure.js');
const QUIZMETA_FILE = path.join(DATA_DIR, 'quizMeta.js');
const COURSEOUTLINE_FILE = path.join(DATA_DIR, 'courseOutline.js');
const DRY_RUN = process.argv.includes('--dry-run');

// 1er chiffre d'une clé 6-chiffres -> niveau (sert uniquement à la
// vérification croisée avec le nom du fichier qui contient la clé).
const NIVEAU_DIGIT = { '3': '3ème', '4': '4ème', '5': '5ème', '6': '6ème' };


// ── UTILITAIRES ────────────────────────────────────────────────────────

// "3ème" -> "3eme", "6ème" -> "6eme" (insensible aux accents) — utilisé
// pour construire le nom de fichier attendu d'un niveau donné.
function levelSlug(level) {
    return level.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function loadJsObject(file, varName, fallback) {
    if (!fs.existsSync(file)) return fallback;
    try {
        const code = fs.readFileSync(file, 'utf8');
        const sandbox = {};
        vm.createContext(sandbox);
        vm.runInContext(code + `\n;this.__out = ${varName};`, sandbox);
        return sandbox.__out !== undefined ? sandbox.__out : fallback;
    } catch (e) {
        console.warn(`⚠️  Impossible de lire ${file} (${e.message}). Valeur de repli utilisée.`);
        return fallback;
    }
}

function cleanTitle(html) {
    return html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}


// ── SCAN D'UN FICHIER DE COURS (officialData_*.js) ────────────────────
// Identique à l'ancien MAJcourseOutline.js : extrait les <h2>/<h3> et les
// clés de startQuizFromButton(...) OU startPlacementQuiz(..., {quizKey:'...'})
// (quiz de placement sur figure — voir js/quizPlacementEngine.js), DANS
// L'ORDRE RÉEL du cours. Les deux types de clés sont traités de façon
// identique ensuite (courseOutline ne fait aucune différence entre eux) :
// seule l'étape 2 (QUIZ -> quizMeta) doit les compter différemment, car
// un quiz de placement ne vit pas dans un fichier de quiz sous la forme
// "clé": [...] mais comme un tableau à part (voir scanPlacementArrays).
function extractOutline(fileContent, warnings, chapterLabel) {
    const text = fileContent.replace(/<!--[\s\S]*?-->/g, '');
    const tagRe = /<h2 class="section-title"[^>]*>([\s\S]*?)<\/h2>|<h3 class="section-title"[^>]*>([\s\S]*?)<\/h3>|startQuizFromButton\(\s*'[^']*'\s*,\s*'([^']+)'\s*\)|startPlacementQuiz\([^)]*\{([^}]*)\}\s*\)/g;

    const h2Sections = [];
    let currentH2 = null;
    let currentH3Title = null;
    const seenKeys = new Set();

    let match;
    while ((match = tagRe.exec(text)) !== null) {
        if (match[1] !== undefined) {
            currentH2 = { title: cleanTitle(match[1]), items: [] };
            h2Sections.push(currentH2);
            currentH3Title = null;
        } else if (match[2] !== undefined) {
            currentH3Title = cleanTitle(match[2]);
        } else if (match[3] !== undefined || match[4] !== undefined) {
            // match[3] : clé d'un QCM classique (startQuizFromButton).
            // match[4] : contenu de l'objet d'options d'un quiz de placement
            // (startPlacementQuiz(...)) — on en extrait quizKey.
            let key = match[3];
            if (key === undefined) {
                const km = /quizKey\s*:\s*'([^']+)'/.exec(match[4] || '');
                if (!km) {
                    warnings.push(`[${chapterLabel}] startPlacementQuiz(...) trouvé sans "quizKey" dans son objet d'options, ignoré.`);
                    continue;
                }
                key = km[1];
            }
            if (!currentH2) {
                warnings.push(`[${chapterLabel}] clé "${key}" : trouvée avant tout <h2>, ignorée.`);
                continue;
            }
            if (seenKeys.has(key)) {
                warnings.push(`[${chapterLabel}] clé "${key}" : utilisée PLUSIEURS FOIS dans ce chapitre.`);
            }
            seenKeys.add(key);
            currentH2.items.push({ h3Title: currentH3Title, quizKey: key });
        }
    }
    return h2Sections;
}


// ── SCAN D'UN FICHIER DE QUIZ (localQuestions_<niveau>_chapitreNN.js) ──
// Extrait chaque clé + compte ses questions (même algorithme de
// profondeur de crochets/accolades que l'ancien MAJquizMeta.js).
// Renvoie aussi les tableaux "de placement" trouvés dans le même
// fichier (voir scanPlacementArrays) : ils ne sont pas indexés par clé
// (une clé de quiz de placement ne vit que dans le fichier de COURS,
// via startPlacementQuiz(..., {quizKey:'...'})) donc l'association avec
// leur clé se fait plus loin, dans main(), par ordre d'apparition.
function scanQuizFile(filePath) {
    const text = fs.readFileSync(filePath, 'utf8');
    const keyRe = /"([0-9_]+)"\s*:\s*\[/g;
    const counts = {};
    let m;
    while ((m = keyRe.exec(text)) !== null) {
        const key = m[1];
        const openIdx = text.indexOf('[', m.index);
        const { count } = countQuestionsInArray(text, openIdx);
        counts[key] = count;
    }
    const placementArrays = scanPlacementArrays(text);
    return { counts, placementArrays };
}

// Repère les tableaux de questions "de placement" (const placementQuestions...
// = [ ... ], voir js/quizPlacementEngine.js) : contrairement aux QCM
// classiques, ce ne sont pas des entrées "clé": [...] d'un objet, mais
// une constante à part entière, une par quiz de placement. Retourne la
// liste dans l'ORDRE D'APPARITION dans le fichier — c'est cet ordre qui
// permet de les associer aux clés correspondantes (voir main()).
function scanPlacementArrays(text) {
    const re = /const\s+(placementQuestions[A-Za-z0-9_]*)\s*=\s*\[/g;
    const arrays = [];
    let m;
    while ((m = re.exec(text)) !== null) {
        const openIdx = text.indexOf('[', m.index);
        const { count } = countQuestionsInArray(text, openIdx);
        arrays.push({ name: m[1], count });
    }
    return arrays;
}

// Même algorithme que l'ancien MAJquizMeta.js, avec UN AJOUT IMPORTANT :
// la reconnaissance des commentaires JS (// et /* */). Sans ça, une
// apostrophe française dans un commentaire (ex. "// pas d'axe") est prise
// pour le début d'une vraie chaîne de caractères et décale tout le
// comptage des questions suivantes — bug détecté sur le fichier de quiz
// "de placement" du chapitre Transformations (5ème), dont plusieurs
// commentaires contenaient des apostrophes non protégées.
function countQuestionsInArray(text, openBracketIdx) {
    let i = openBracketIdx;
    let bracketDepth = 0;
    let braceDepth = 0;
    let count = 0;
    let inString = null;
    let inLineComment = false;
    let inBlockComment = false;

    for (; i < text.length; i++) {
        const c = text[i];
        const next = text[i + 1];
        const prev = text[i - 1];

        if (inLineComment) {
            if (c === '\n') inLineComment = false;
            continue;
        }
        if (inBlockComment) {
            if (c === '*' && next === '/') { inBlockComment = false; i++; }
            continue;
        }
        if (inString) {
            if (c === inString && prev !== '\\') inString = null;
            continue;
        }
        if (c === '/' && next === '/') { inLineComment = true; i++; continue; }
        if (c === '/' && next === '*') { inBlockComment = true; i++; continue; }
        if (c === '"' || c === "'" || c === '`') { inString = c; continue; }
        if (c === '[') bracketDepth++;
        else if (c === ']') {
            bracketDepth--;
            if (bracketDepth === 0) { i++; break; }
        } else if (c === '{') {
            braceDepth++;
            if (braceDepth === 1) count++;
        } else if (c === '}') {
            braceDepth--;
        }
    }
    return { endIdx: i, count };
}


// ── PROGRAMME PRINCIPAL ────────────────────────────────────────────────
function main() {
    const officialStructure = loadJsObject(STRUCTURE_FILE, 'officialStructure', []);
    if (!officialStructure.length) {
        console.error(`❌ ${STRUCTURE_FILE} introuvable ou vide — impossible de continuer.`);
        process.exit(1);
    }

    const existingQuizMeta = loadJsObject(QUIZMETA_FILE, 'quizMeta',
        { byKey: {}, questionCount: {}, titles: {}, totalByLevel: {} });
    const existingOutline = loadJsObject(COURSEOUTLINE_FILE, 'courseOutline', {});

    // On part de l'existant : chaque chapitre non re-scanné cette fois-ci
    // (fichier absent du disque) garde exactement ses données précédentes.
    const quizMetaOut = {
        byKey: { ...existingQuizMeta.byKey },
        questionCount: { ...existingQuizMeta.questionCount },
        titles: {}, // entièrement recalculé en fin de script depuis courseOutline
        totalByLevel: { ...existingQuizMeta.totalByLevel },
    };
    const outlineOut = { ...existingOutline };

    const warnings = [];
    let coursesScanned = 0, quizFilesScanned = 0, coursesSkipped = 0, quizSkipped = 0;

    // Aucune limite codée en dur sur le nombre de chapitres : on boucle
    // sur TOUS ceux réellement listés dans officialStructure.js, quel
    // que soit leur nombre (14 aujourd'hui, 17 demain, peu importe).
    officialStructure.forEach(levelObj => {
        const level = levelObj.name;
        const slug = levelSlug(level);
        if (!outlineOut[level]) outlineOut[level] = {};

        (levelObj.themes || []).forEach(theme => {
            (theme.chapters || []).forEach(chap => {
                const chapterLabel = `${level} — ${chap.title}`;
                const chapStr = String(chap.id).padStart(2, '0');

                // ── 1) COURS -> courseOutline ──────────────────────────
                const courseFile = chap._file ? path.join(DATA_DIR, '..', chap._file) : null;
                let courseKeys = null; // clés référencées par startQuizFromButton dans ce chapitre
                if (courseFile && fs.existsSync(courseFile)) {
                    console.log(`📘 Cours  : ${chapterLabel} (${chap._file})`);
                    const content = fs.readFileSync(courseFile, 'utf8');
                    const h2Sections = extractOutline(content, warnings, chapterLabel);
                    outlineOut[level][chap.title] = { chapterId: chap.id, h2Sections };
                    coursesScanned++;
                    const nbQuiz = h2Sections.reduce((s, h2) => s + h2.items.length, 0);
                    console.log(`           ✅ ${h2Sections.length} partie(s), ${nbQuiz} QCM référencés.`);
                    courseKeys = new Set();
                    h2Sections.forEach(h2 => h2.items.forEach(it => courseKeys.add(it.quizKey)));
                } else {
                    coursesSkipped++;
                }

                // ── 2) QUIZ -> quizMeta ─────────────────────────────────
                const quizFileName = `localQuestions_${slug}_chapitre${chapStr}.js`;
                const quizFile = path.join(DATA_DIR, quizFileName);
                if (fs.existsSync(quizFile)) {
                    console.log(`📝 Quiz   : ${chapterLabel} (${quizFileName})`);
                    const { counts, placementArrays } = scanQuizFile(quizFile);

                    // Retire d'abord les anciennes clés DE CE CHAPITRE
                    // précis (pas de tout le niveau) pour ne pas laisser
                    // traîner une clé supprimée du fichier source.
                    Object.keys(quizMetaOut.byKey).forEach(k => {
                        const meta = quizMetaOut.byKey[k];
                        if (meta.level === level && meta.chapter === chap.title) {
                            delete quizMetaOut.byKey[k];
                            delete quizMetaOut.questionCount[k];
                        }
                    });

                    let nbQuestionsChapitre = 0;
                    Object.entries(counts).forEach(([key, count]) => {
                        // Vérification croisée clé <-> fichier (best-effort ;
                        // les clés spéciales type "3_10_101" ne sont pas
                        // vérifiées, leur format ne s'y prête pas).
                        if (/^[0-9]{6}$/.test(key)) {
                            const keyLevel = NIVEAU_DIGIT[key[0]];
                            const keyChap = parseInt(key.slice(1, 3), 10);
                            if (keyLevel && keyLevel !== level) {
                                warnings.push(`⚠️  ${key} (dans ${quizFileName}) : le 1er chiffre indique le niveau "${keyLevel}", pas "${level}" — vérifier.`);
                            }
                            if (keyChap !== chap.id) {
                                warnings.push(`⚠️  ${key} (dans ${quizFileName}) : les chiffres 2-3 indiquent le chapitre ${keyChap}, pas ${chap.id} — vérifier.`);
                            }
                        }

                        quizMetaOut.byKey[key] = { level, chapter: chap.title };
                        quizMetaOut.questionCount[key] = count;
                        nbQuestionsChapitre += count;
                        if (count === 0) {
                            warnings.push(`⚠️  ${key} : 0 question détectée dans ${quizFileName}.`);
                        }
                    });

                    // ── Quiz de placement : les clés référencées par le cours
                    // via startPlacementQuiz(...) n'apparaissent JAMAIS dans
                    // "counts" ci-dessus (elles ne sont pas au format "clé":
                    // [...]). On les associe ici aux tableaux "placementQuestions*"
                    // trouvés dans le même fichier, dans l'ordre d'apparition
                    // des uns et des autres — fiable tant qu'il y a AU PLUS UN
                    // quiz de placement par chapitre (cas actuel). Si plusieurs
                    // apparaissent un jour dans le même chapitre, garder le
                    // même ordre (haut en bas) des deux côtés (cours et data).
                    if (courseKeys) {
                        const orphanPlacementKeys = [...courseKeys].filter(k => !(k in counts));
                        let pIdx = 0;
                        orphanPlacementKeys.forEach(key => {
                            if (pIdx < placementArrays.length) {
                                const arr = placementArrays[pIdx++];
                                if (/^[0-9]{6}$/.test(key)) {
                                    const keyLevel = NIVEAU_DIGIT[key[0]];
                                    const keyChap = parseInt(key.slice(1, 3), 10);
                                    if (keyLevel && keyLevel !== level) {
                                        warnings.push(`⚠️  ${key} (placement, dans ${quizFileName}) : le 1er chiffre indique le niveau "${keyLevel}", pas "${level}" — vérifier.`);
                                    }
                                    if (keyChap !== chap.id) {
                                        warnings.push(`⚠️  ${key} (placement, dans ${quizFileName}) : les chiffres 2-3 indiquent le chapitre ${keyChap}, pas ${chap.id} — vérifier.`);
                                    }
                                }
                                quizMetaOut.byKey[key] = { level, chapter: chap.title };
                                quizMetaOut.questionCount[key] = arr.count;
                                counts[key] = arr.count; // pour la comparaison cours<->quiz ci-dessous
                                nbQuestionsChapitre += arr.count;
                                console.log(`           ➕ Quiz de placement : "${key}" -> tableau "${arr.name}" (${arr.count} question(s)).`);
                                if (arr.count === 0) {
                                    warnings.push(`⚠️  ${key} : 0 question détectée dans le tableau "${arr.name}" (${quizFileName}).`);
                                }
                            } else {
                                warnings.push(`⚠️  ${key} (référencé par startPlacementQuiz dans ${chap._file}) : aucun tableau "placementQuestions*" correspondant trouvé dans ${quizFileName}.`);
                            }
                        });
                        if (pIdx < placementArrays.length) {
                            for (let i = pIdx; i < placementArrays.length; i++) {
                                warnings.push(`ℹ️  Tableau "${placementArrays[i].name}" (dans ${quizFileName}) : présent mais aucune clé orpheline correspondante trouvée dans le cours (vérifier qu'un startPlacementQuiz(...) y fait bien référence).`);
                            }
                        }
                    }

                    quizFilesScanned++;
                    console.log(`           ✅ ${Object.keys(counts).length} QCM, ${nbQuestionsChapitre} questions.`);

                    // ── Comparaison cours <-> quiz : détecte une migration
                    // de clés pas encore répercutée dans le fichier de cours
                    // (le cas le plus courant pendant une transition de
                    // format de clé) — sans ça, les titres de ce chapitre
                    // disparaîtraient silencieusement (aucune clé en commun
                    // entre courseOutline et quizMeta = aucun titre dérivable).
                    if (courseKeys) {
                        const quizKeys = new Set(Object.keys(counts));
                        const inCourseNotInQuiz = [...courseKeys].filter(k => !quizKeys.has(k));
                        const inQuizNotInCourse = [...quizKeys].filter(k => !courseKeys.has(k));
                        const overlap = [...courseKeys].filter(k => quizKeys.has(k)).length;

                        if (overlap === 0 && courseKeys.size > 0 && quizKeys.size > 0) {
                            warnings.push(`🔴 ${chapterLabel} : AUCUNE clé en commun entre le cours et le fichier de quiz — le fichier de cours référence probablement encore les ANCIENNES clés. Titres indisponibles pour ce chapitre tant que ce n'est pas corrigé. Anciennes clés à remplacer dans ${chap._file} : ${inCourseNotInQuiz.join(', ')}`);
                        } else if (inCourseNotInQuiz.length > 0) {
                            warnings.push(`⚠️  ${chapterLabel} : ${inCourseNotInQuiz.length} clé(s) référencée(s) par le cours mais absente(s) du fichier de quiz (à corriger dans ${chap._file}) : ${inCourseNotInQuiz.join(', ')}`);
                        }
                        if (inQuizNotInCourse.length > 0) {
                            warnings.push(`ℹ️  ${chapterLabel} : ${inQuizNotInCourse.length} clé(s) du fichier de quiz non (encore) référencée(s) dans le cours (normal si le cours n'y fait pas encore de bouton "Ai-je bien compris ?") : ${inQuizNotInCourse.join(', ')}`);
                        }
                    }
                } else {
                    quizSkipped++;
                }
            });
        });
    });

    // ── 3) TITRES : dérivés à 100% de la position réelle dans courseOutline ──
    // (titre du <h3> contenant la clé, ou du <h2> si la clé est directement
    // sous un <h2> sans <h3>). Une clé absente de courseOutline n'a pas de
    // titre : "QCM <clé>" sera affiché par défaut, comme avant.
    Object.entries(outlineOut).forEach(([level, chapters]) => {
        Object.values(chapters).forEach(chapObj => {
            (chapObj.h2Sections || []).forEach(h2 => {
                h2.items.forEach(item => {
                    if (quizMetaOut.byKey[item.quizKey]) {
                        quizMetaOut.titles[item.quizKey] = item.h3Title || h2.title;
                    }
                });
            });
        });
    });

    // ── totalByLevel : recalculé entièrement depuis byKey/questionCount ──
    const freshTotals = {};
    Object.entries(quizMetaOut.byKey).forEach(([key, meta]) => {
        freshTotals[meta.level] = (freshTotals[meta.level] || 0) + (quizMetaOut.questionCount[key] || 0);
    });
    quizMetaOut.totalByLevel = freshTotals;

    // ── ÉCRITURE ────────────────────────────────────────────────────────
    const quizMetaContent = buildQuizMetaFile(quizMetaOut);
    const outlineContent = buildOutlineFile(outlineOut);

    console.log(`\n── RÉSUMÉ ──────────────────────────────────────────────`);
    console.log(`  Cours : ${coursesScanned} chapitre(s) scanné(s), ${coursesSkipped} laissé(s) inchangé(s) (fichier absent).`);
    console.log(`  Quiz  : ${quizFilesScanned} fichier(s) scanné(s), ${quizSkipped} laissé(s) inchangé(s) (fichier absent).`);
    console.log(`  Total : ${Object.keys(quizMetaOut.byKey).length} QCM, ${Object.values(quizMetaOut.totalByLevel).reduce((a,b)=>a+b,0)} questions.`);

    if (warnings.length) {
        console.log(`\n⚠️  ${warnings.length} avertissement(s) :`);
        warnings.forEach(w => console.log('  - ' + w));
    } else {
        console.log('\n✅ Aucun avertissement.');
    }

    if (DRY_RUN) {
        console.log(`\n(--dry-run) Rien n'a été écrit.`);
    } else {
        fs.writeFileSync(QUIZMETA_FILE, quizMetaContent, 'utf8');
        fs.writeFileSync(COURSEOUTLINE_FILE, outlineContent, 'utf8');
        console.log(`\n💾 ${QUIZMETA_FILE} et ${COURSEOUTLINE_FILE} mis à jour.`);
    }
}

function indentBlock(jsonText, spaces) {
    const pad = ' '.repeat(spaces);
    return jsonText.split('\n').map((l, i) => i === 0 ? l : pad + l).join('\n');
}

function buildQuizMetaFile(m) {
    const byKeyJson = indentBlock(JSON.stringify(m.byKey, null, 4), 4);
    const countJson = indentBlock(JSON.stringify(m.questionCount, null, 4), 4);
    const titlesJson = indentBlock(JSON.stringify(m.titles, null, 4), 4);
    const totalJson = indentBlock(JSON.stringify(m.totalByLevel, null, 4), 4);

    return `// ============================================================
// data/quizMeta.js — Métadonnées des questionnaires
// ============================================================
// ⚙️  Fichier généré automatiquement par data/MAJ_contenu_site.js
//     Ne modifiez pas ce fichier à la main : relancez plutôt
//     "node MAJ_contenu_site.js" depuis le dossier data/.
//
// Mapping : quiz_key -> { level, chapter } + comptages + titres.
// "chapter" et "level" sont déduits du NOM du fichier localQuestions_*
// qui contient la clé (fiable à 100%) ; "titles" est dérivé de la
// position réelle de la clé dans courseOutline.js (titre du <h3>, ou du
// <h2> à défaut). Utilisé par student-dashboard.html et dashboard.html.
// ============================================================

const quizMeta = {
    byKey: ${byKeyJson},

    questionCount: ${countJson},

    titles: ${titlesJson},

    totalByLevel: ${totalJson}
};
`;
}

function buildOutlineFile(o) {
    const json = indentBlock(JSON.stringify(o, null, 4), 0);
    return `// ============================================================
// data/courseOutline.js — Plan détaillé des cours (H2/H3 réels)
// ============================================================
// ⚙️  Fichier généré automatiquement par data/MAJ_contenu_site.js
//     Ne modifiez pas ce fichier à la main : relancez plutôt
//     "node MAJ_contenu_site.js" depuis le dossier data/.
//
// Structure : courseOutline[niveau][titreChapitre] = {
//     chapterId,
//     h2Sections: [
//         { title: "...", items: [ { h3Title: "..."|null, quizKey: "..." } ] }
//     ]
// }
// Utilisé par l'onglet "Progression" de dashboard.html, et par
// quizMeta.titles (voir MAJ_contenu_site.js) pour les titres de QCM.
// ============================================================

const courseOutline = ${json};
`;
}

main();
