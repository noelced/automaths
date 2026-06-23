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

    // CAS 1 : Comparaison de nombres purs (ex: "7" vs "7")
    const isPureNumber = (s) => /^[0-9./\-+()]+$/.test(s);

    if (isPureNumber(cleanUser) && isPureNumber(cleanTarget)) {
        return parseFloat(cleanUser) === parseFloat(cleanTarget);
    }

    // CAS 2 : Comparaison d'expressions littérales
    // Note : Cette comparaison reste stricte. "2(n+1)" sera différent de "2n+2"
    return cleanUser === cleanTarget;
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

