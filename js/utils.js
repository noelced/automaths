// ============================================================
// js/utils.js — Fonctions utilitaires
// compareAnswers, insertMathChar, updateSpecificPreview
// ============================================================

function compareAnswers(userAnsRaw, targetAnsRaw) {
    if (!userAnsRaw || !targetAnsRaw) return false;

    const cleanMath = (str) => {
        return str.toString()
            // ── Étape 1 : débaliser le LaTeX ──────────────────────────────
            .replace(/\$([^$]*)\$/g, '$1')
            .replace(/\\\(([^)]*)\\\)/g, '$1')
            // ── Étape 2 : commandes LaTeX → notation lisible ───────────────
            .replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g, '($1)/($2)')
            // Simplification : (\frac{3}{4} → (3)/(4) → 3/4 si num/den sont des entiers
            .replace(/\((-?[0-9]+)\)\/\((-?[0-9]+)\)/g, '$1/$2')
            .replace(/\\sqrt\{([^}]*)\}/g, '√($1)')
            .replace(/\\sqrt/g, '√')
            .replace(/\\times/g, '*')
            .replace(/\\cdot/g, '*')
            .replace(/\\div/g, '/')
            .replace(/\\left\(/g, '(').replace(/\\right\)/g, ')')
            .replace(/\\left\[/g, '[').replace(/\\right\]/g, ']')
            .replace(/\\infty/g, 'infini')
            .replace(/[{}]/g, '')           // accolades LaTeX résiduelles
            .replace(/\\[a-zA-Z]+/g, '')    // commandes LaTeX résiduelles
            // ── Étape 3 : normalisation ────────────────────────────────────
            .replace(/,/g, '.')             // virgule décimale → point
            .replace(/[×x·]/g, '*')         // ×, x, · → * (AVANT le filtre)
            .replace(/\s+/g, '')            // supprime les espaces
            // ── Étape 4 : filtre de sécurité ──────────────────────────────
            // Garde : chiffres, lettres (variables/infini), opérateurs, √, ^
            .replace(/[^0-9a-z./\-+<>√^()*/]/gi, '');
    };

    let cleanUser   = cleanMath(userAnsRaw);
    let cleanTarget = cleanMath(targetAnsRaw);

    // --- Résolution des racines simples (√(49) → 7) ───────────────────────
    const solveRoots = (s) => s.replace(/√\(([0-9.]+)\)/g, (_, n) => Math.sqrt(parseFloat(n)).toString())
                                .replace(/√([0-9.]+)/g,    (_, n) => Math.sqrt(parseFloat(n)).toString());
    cleanUser   = solveRoots(cleanUser);
    cleanTarget = solveRoots(cleanTarget);

    // --- LOGIQUE DE COMPARAISON ────────────────────────────────────────────

    // CAS 1A : Fraction simple a/b → textuelle (forme irréductible requise)
    const isSimpleFraction = (s) => /^-?[0-9]+\/[0-9]+$/.test(s);
    if (isSimpleFraction(cleanUser) || isSimpleFraction(cleanTarget)) {
        return cleanUser === cleanTarget;
    }

    // CAS 1B : Expression numérique pure → numérique tolérante
    // isPureNumber accepte *, ^ pour évaluer des expressions comme 1.25*10^5
    const isPureNumber = (s) => /^[0-9./\-+()*/^]+$/.test(s);
    if (isPureNumber(cleanUser) && isPureNumber(cleanTarget)) {
        const userVal   = evalNumericExpression(cleanUser);
        const targetVal = evalNumericExpression(cleanTarget);
        if (!isNaN(userVal) && !isNaN(targetVal)) {
            return Math.abs(userVal - targetVal) < 1e-9;
        }
        return cleanUser === cleanTarget;
    }

    // CAS 2 : Expression littérale → textuelle stricte
    return cleanUser === cleanTarget;
}

/**
 * Évalue une expression arithmétique simple (chiffres, + - * / et
 * parenthèses uniquement) de façon sûre, SANS jamais utiliser eval()
 * directement sur une chaîne non validée. La regex de garde n'autorise
 * que des caractères numériques/arithmétiques avant toute évaluation,
 * donc aucune exécution de code arbitraire n'est possible ici — c'est
 * un calcul, pas une porte d'entrée vers du JS quelconque.
 *
 * Corrige le bug historique où parseFloat("1/4") retournait 1 (il
 * s'arrête au premier caractère non numérique, ignorant tout le
 * dénominateur), ce qui faisait accepter N'IMPORTE QUELLE fraction
 * de numérateur 1 comme bonne réponse.
 */
function evalNumericExpression(str) {
    if (str === '' || !/^[0-9+\-*/.()^]+$/.test(str)) return NaN;
    if (!/[0-9]/.test(str)) return NaN;
    try {
        // ^ en mathématique = puissance, mais en JS ^ = XOR.
        // On convertit a^b → (a)**(b) avant d'évaluer.
        // Regex : remplace X^Y par X**Y (gère les cas avec parenthèses et nombres).
        const jsExpr = str.replace(/(\d+(?:\.\d+)?)\^(-?\d+(?:\.\d+)?)/g, '($1)**($2)')
                          .replace(/\)\^(\d+)/g, ')**($1)');
        const result = Function('"use strict"; return (' + jsExpr + ')')();
        return (typeof result === 'number' && isFinite(result)) ? result : NaN;
    } catch (e) {
        return NaN;
    }
}





function checkLocalAnswer(correctAnswer, containerId) {
    const input = document.getElementById('local-user-answer');
    if (!input) return;

    trainingSession.totalAnswered++;

    if (compareAnswers(input.value, correctAnswer)) {
        trainingSession.score++;
        nextLocalQuestion(containerId); // Utilise la fonction locale
    } else {
        trainingSession.isReviewMode = true;
renderInjectedQuiz(document.getElementById(containerId), trainingSession.currentCards, containerId);     }
}




/* fonction débug  celle sans débug est en commentaire en dessous*/
function nextLocalQuestion(containerId) {
    console.log("Tentative de passage à la question suivante..."); // TEST 1
    
    trainingSession.currentIndex++;
    trainingSession.isReviewMode = false; 
    
    const container = document.getElementById(containerId);
    console.log("Conteneur trouvé ?", container); // TEST 2

    if (!container) {
        console.error("Erreur : Le conteneur avec l'ID " + containerId + " est introuvable !");
        return;
    }

    // On passe le conteneur et les cartes stockées dans la session
    renderInjectedQuiz(container, trainingSession.currentCards, containerId);
}

/*function nextLocalQuestion(containerId) {
    // 1. On passe à la question suivante
    trainingSession.currentIndex++;
    
    // 2. TRÈS IMPORTANT : On sort du mode "Aide" pour que la 
    // prochaine question soit affichée avec le champ de saisie
    trainingSession.isReviewMode = false; 
    
    // 3. On relance le rendu
    renderInjectedQuiz(document.getElementById(containerId), trainingSession.currentCards, containerId);
} */


// 5. MOTEUR D AFFICHAGE (le rendu HTML)

