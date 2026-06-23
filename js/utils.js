// ============================================================
// js/utils.js — Fonctions utilitaires
// compareAnswers, insertMathChar, updateSpecificPreview
// ============================================================

function compareAnswers(userAnsRaw, targetAnsRaw) {
    if (!userAnsRaw || !targetAnsRaw) return false;

    const cleanMath = (str) => {
        return str.toString()
            // 1. Conversion LaTeX vers texte simple
            .replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g, '($1)/($2)')
            .replace(/\\sqrt\{([^}]*)\}/g, '√$1')
            // 2. Normalisation des décimaux (virgule -> point)
            .replace(/,/g, '.')
            // 3. Suppression de TOUS les espaces pour éviter "5 x 2" vs "5x2"
            .replace(/\s+/g, '')
            // 4. NETTOYAGE SÉCURISÉ :
            // J'ai ajouté "(" et ")" dans la liste des caractères autorisés
            // On garde : chiffres, lettres (a-z), opérateurs (+, -, *, /, ^), 
            // symboles de comparaison (<, >), racine (√), point (.) et PARENTHÈSES ()
            .replace(/[^0-9a-z./\-+<>√^()]/gi, ''); 
    };

    let cleanUser = cleanMath(userAnsRaw);
    let cleanTarget = cleanMath(targetAnsRaw);

    // --- ÉTAPE DE RÉSOLUTION DES RACINES ---
    const solveSimpleRoots = (str) => {
        if (str.includes('√')) {
            // On essaie d'extraire le nombre après la racine pour un calcul simple
            let numPart = str.replace('√', '');
            let val = parseFloat(numPart);
            if (!isNaN(val)) return Math.sqrt(val).toString();
        }
        return str;
    };

    cleanUser = solveSimpleRoots(cleanUser);
    cleanTarget = solveSimpleRoots(cleanTarget);

    console.log("DEBUG COMPARISON:", { user: cleanUser, target: cleanTarget });

    // --- LOGIQUE DE DÉCISION ---

    // CAS 1A : Fraction simple "a/b" (UN SEUL "/", pas d'autre opérateur,
    // pas de parenthèses) → comparaison TEXTUELLE stricte, pas numérique.
    // Raison : quand une question demande de simplifier une fraction
    // (ex: "simplifier 12/18"), la forme exacte compte pédagogiquement.
    // "6/9" est numériquement égal à "2/3" mais n'est PAS la bonne réponse
    // si la consigne demande la forme irréductible — accepter toute
    // fraction équivalente rendrait ce type de question toujours juste,
    // quelle que soit l'option choisie par l'élève.
    const isSimpleFraction = (s) => /^-?[0-9]+\/[0-9]+$/.test(s);

    if (isSimpleFraction(cleanUser) || isSimpleFraction(cleanTarget)) {
        return cleanUser === cleanTarget;
    }

    // CAS 1B : Comparaison de nombres ou d'expressions numériques pures
    // avec opérateurs combinés ou parenthèses (ex: "7" vs "7",
    // "(1+2)/4" vs "0.75") → comparaison NUMÉRIQUE tolérante, pour
    // accepter différentes écritures d'un même résultat de calcul.
    const isPureNumber = (s) => /^[0-9./\-+()]+$/.test(s);

    if (isPureNumber(cleanUser) && isPureNumber(cleanTarget)) {
        const userVal = evalNumericExpression(cleanUser);
        const targetVal = evalNumericExpression(cleanTarget);
        // Si l'une des deux expressions ne s'évalue pas en nombre valide
        // (ex: chaîne vide, expression malformée), on ne peut pas conclure
        // à une égalité — on retombe sur la comparaison textuelle stricte.
        if (isNaN(userVal) || isNaN(targetVal)) {
            return cleanUser === cleanTarget;
        }
        // Tolérance epsilon pour les imprécisions de calcul flottant
        // (ex: 1/3 + 1/3 + 1/3 peut donner 0.9999999999999999 en JS)
        return Math.abs(userVal - targetVal) < 1e-9;
    }

    // CAS 2 : Comparaison d'expressions littérales
    // Note : Cette comparaison reste stricte. "2(n+1)" sera différent de "2n+2"
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
    if (str === '' || !/^[0-9+\-*/.()]+$/.test(str)) return NaN;
    // Évite les expressions vides ou des opérateurs seuls qui passeraient
    // la regex mais planteraient ou donneraient un résultat absurde
    if (!/[0-9]/.test(str)) return NaN;
    try {
        const result = Function('"use strict"; return (' + str + ')')();
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

