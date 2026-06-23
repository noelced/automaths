// ============================================================
// js/quiz.js — Moteur de quiz (rendu, navigation, validation)
// Dépend de : app.js (trainingSession, currentMode)
// ============================================================

function showFinalScoreInjected(container, score, total, containerId) {
    // ── GAMIFICATION : enregistre le résultat dès l'affichage du score final ──
    if (typeof trackerSaveResult === 'function') {
        trackerSaveResult(score, total);
    }

    container.innerHTML = `
        <div class="card" style="text-align:center; padding: 3rem 2rem;">
            <div style="font-size: 4rem; margin-bottom: 10px;">🎉</div>
            <h2 style="font-size: 2.2rem; color: var(--primary); margin-bottom: 10px;">Session terminée !</h2>
            <p style="font-size: 1.2rem; color: var(--text-muted); margin-bottom: 30px;">Ton résultat final :</p>
            <div style="background: var(--bg); padding: 20px; border-radius: var(--radius); margin-bottom: 40px; display: inline-block; min-width: 200px;">
                <span style="font-size: 3rem; font-weight: 800; color: var(--secondary);">
                    ${score} <span style="font-size: 1.5rem; color: var(--text-muted);">/</span> ${total}
                </span>
            </div>
            <div style="display: block;">
                <button class="action-btn" onclick="closeInjectedQuiz('${containerId}')" style="max-width: 250px; margin: 0 auto;">Fermer le quiz</button>
            </div>
        </div>
    `;
}



// --- 2. FONCTION DE FERMETURE (Nettoyage complet) ---
function closeInjectedQuiz(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = ""; 
    }
    activeInjectedQuizId = null; // Libère le verrou pour permettre un nouveau quiz
    
    // Remet le bouton original à son état initial
    const btn = document.querySelector(`[data-quiz-target="${containerId}"]`);
    if (btn) {
        btn.innerText = "Ai-je bien compris ?";
    }
    console.log("Quiz fermé et interface réinitialisée.");
}
// FONCTION UTILITAIRE pour mélanger les boutons des QCM
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


// --- 3. FONCTION DE RENDU PRINCIPALE (Corrigée avec 4 arguments) ---
function renderInjectedQuiz(container, questions, containerId) {
    const currentCard = trainingSession.currentCards[trainingSession.currentIndex];
    
    if (!currentCard) {
        // Appel de la fonction de fin unifiée
        showFinalScoreInjected(container, trainingSession.score, trainingSession.totalAnswered, containerId);
        return;
    }

    // Construction de la structure de base
    container.innerHTML = `
        <div class="injected-quiz-container">
            <div class="quiz-header" style="display:flex; justify-content:space-between; font-size:0.8rem; color:var(--text-muted); margin-bottom:10px;">
                <span>Score: ${trainingSession.score}/${trainingSession.totalAnswered}</span>
                <span>${trainingSession.currentIndex + 1}/${trainingSession.currentCards.length}</span>
            </div>
            <p class="quiz-question-text" style="font-size:1.1rem; margin-bottom:15px;">${currentCard.quiz.q}</p>
            
            <!-- Conteneur dédié au SVG pour éviter les conflits de parsing -->
            <div id="svg-target" class="quiz-figure" style="display:flex; justify-content:center; margin-bottom:15px; min-height: 60px;"></div>
            
            <div id="local-interaction-zone"></div>
        </div>
    `;

    // Injection du SVG dans son conteneur dédié
    const svgTarget = container.querySelector('#svg-target');
    if (currentCard.figure && svgTarget) {
        svgTarget.innerHTML = currentCard.figure;
    }

    const zone = container.querySelector('#local-interaction-zone');

    // ── Cas spécial : la question EST une balance d'équation ──────────────
    // Si quiz.q ne contient (presque) que le tag [[BALANCE:...]], on
    // n'affiche pas la zone de réponse classique (input/QCM/bouton Valider) :
    // la balance interactive est auto-validante, il n'y a pas de réponse
    // séparée à saisir. L'élève passe à la suite via le bouton "Suivant"
    // qu'on ajoute spécifiquement pour ce cas.
    const isPureBalanceQuestion = /^\s*\[\[BALANCE(?::[^\]]*)?\]\]\s*$/.test(currentCard.quiz.q || '');

    if (isPureBalanceQuestion) {
        zone.innerHTML = `
            <div style="margin-top:15px; text-align:center;">
                <button class="action-btn btn-next-question" data-container="${containerId}">
                    Question suivante ➔
                </button>
            </div>
        `;
        zone.querySelector('.btn-next-question').addEventListener('click', () => {
            // Une balance n'a pas de notion de score juste/faux classique :
            // on compte la tentative comme "vue" sans impacter le score.
            trainingSession.totalAnswered++;
            trainingSession.score++;
            nextLocalQuestion(containerId);
        });
    }
    // MODE AIDE (Après une erreur)
    else if (trainingSession.isReviewMode) {
        zone.innerHTML = `
            <div class="feedback help-mode" style="display:block; margin-bottom:15px;">
                La réponse était : <strong>${currentCard.quiz.a}</strong>
            </div>
            <div class="notion-box" style="font-size: 0.9rem; margin-bottom: 15px;">
                <strong style="color: var(--secondary);">💡 Explication :</strong><br>
                ${currentCard.explanation || "Consultez votre cours pour comprendre la méthode."}
            </div>
            <button class="action-btn btn-next-question" data-container="${containerId}">Question suivante ➔</button>
        `;
        // Ajout de l'écouteur pour le bouton "Suivant" en mode aide
        zone.querySelector('.btn-next-question').addEventListener('click', () => {
            nextLocalQuestion(containerId);
        });

    } else {
        // MODE QUESTION (QCM ou Texte)
        let optionsArray = [];
        if (currentCard.options) {
            optionsArray = Array.isArray(currentCard.options) ? currentCard.options : currentCard.options.split('\\').map(opt => opt.trim());
        }
        if (optionsArray.length > 0) optionsArray = shuffleArray(optionsArray);
        if (optionsArray.length > 0) {
            // Affichage QCM
            let qcmHTML = `<div style="display:grid; gap:10px; margin-bottom:20px;">`;
            optionsArray.forEach(opt => {
                qcmHTML += `<button class="action-btn" style="background:white; color:var(--primary); border:2px solid var(--primary);" 
                            onclick="checkFullQuiz('${currentCard.quiz.a}', '${containerId}', '${opt}')">${opt}</button>`;
            });
            qcmHTML += `</div>`;
            zone.innerHTML = qcmHTML;
        } else {
            // Affichage Texte
            zone.innerHTML = `
                <input type="text" id="local-user-answer" placeholder="Votre réponse...">
                <div class="math-keyboard" style="margin-top:15px;">
                    <button type="button" class="math-key" onclick="insertMathChar('√', this)">√</button>
                    <button type="button" class="math-key" onclick="insertMathChar('^', this)">^</button>
                    <button type="button" class="math-key" onclick="insertMathChar('/', this)">/</button>
                    <button type="button" class="math-key" onclick="insertMathChar('-', this)">-</button>
                </div>
                <button class="action-btn" style="margin-top:15px;" onclick="checkLocalAnswer('${currentCard.quiz.a}', '${containerId}')">Valider</button>
                <div id="local-feedback" class="feedback"></div>
            `;
            setTimeout(() => {
                const input = document.getElementById('local-user-answer');
                if (input) input.focus();
            }, 50);
        }
    }

    // ── Détection et activation des balances d'équations [[BALANCE:...]] ──
    // (peut apparaître dans le texte de la question elle-même)
    if (typeof initEquationBalances === 'function') {
        initEquationBalances(container);
    }

    // Lancement MathJax pour le nouveau contenu injecté
    if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise([container]).catch((err) => console.log("MathJax error:", err));
    }
}

// --- 4. FONCTIONS DE NAVIGATION ET VALIDATION CORRIGÉES ---

function nextLocalQuestion(containerId) {
    trainingSession.currentIndex++;
    trainingSession.isReviewMode = false; 
    const container = document.getElementById(containerId);
    if (container) {
        renderInjectedQuiz(container, trainingSession.currentCards, containerId);
    }
}

// NOTE : checkFullQuiz et displayTrainingQuestion étaient définies ici en
// double (une copie ici, une copie dans app.js). Comme app.js est chargé
// APRÈS quiz.js, c'était toujours sa version qui s'exécutait réellement —
// celle-ci ne servait à rien d'autre qu'à risquer de diverger silencieusement
// de la version active (ce qui a effectivement causé un bug : un containerId
// vide passé à showFinalScoreInjected, uniquement dans cette copie-ci).
// Supprimées pour n'avoir plus qu'une seule source de vérité : voir
// js/app.js pour les définitions réelles de checkFullQuiz et
// displayTrainingQuestion.

function checkLocalAnswer(correctAnswer, containerId) {
    const input = document.getElementById('local-user-answer');
    if (!input) return;

    trainingSession.totalAnswered++;

    if (compareAnswers(input.value, correctAnswer)) {
        trainingSession.score++;
        nextLocalQuestion(containerId);
    } else {
        trainingSession.isReviewMode = true;
        renderInjectedQuiz(document.getElementById(containerId), trainingSession.currentCards, containerId);
    }
}

// --- FONCTIONS DE NAVIGATION POUR LE MODE ENTRAÎNEMENT (SUPABASE) ---
// nextQuestion et displayTrainingQuestion sont définies dans js/app.js
 














    



    // -------------------------------------------------------------------------
    // TODO: ENREGISTREMENT DES RÉSULTATS (À implémenter lors de la création des comptes)
    // -------------------------------------------------------------------------
    /*  dans function closeinjectedquiz
    const dataToSave = {
        user_id: currentUserId,          // ID de l'élève connecté
        manager_id: currentManagerId,    // ID du gestionnaire/professeur
        chapter_id: currentChapterId,    // L'ID du chapitre (ex: '33101')
        score: finalScore,               // Score obtenu
        total: totalAnswered,            // Nombre de questions tentées
        timestamp: new Date().toISOString() // Date et heure de la session
    };

    supabaseClient
        .from('user_scores')
        .insert([dataToSave])
        .then(({ error }) => {
            if (error) console.error("Erreur lors de l'enregistrement du score:", error);
            else console.log("Score enregistré avec succès !");
        });
    */




// --- 1. INSERTION ET MISE À JOUR DES APERÇUS ---

function insertMathChar(char, btn) {
    // 1. On essaie d'abord de récupérer l'élément qui a le focus (le comportement normal)
    let activeInput = document.activeElement;

    // 2. SI LE FOCUS EST PERDU (cas où le clic sur le bouton a déplacé le focus)
    if (!activeInput || (activeInput.tagName !== 'INPUT' && activeInput.tagName !== 'TEXTAREA')) {
        
        // On cherche le bloc parent (la carte ou la vue)
        const parentBlock = btn.closest('.card') || btn.closest('.view');
        
        if (parentBlock) {
            const inputsInBlock = Array.from(parentBlock.querySelectorAll('input[type="text"], textarea'));
            
            if (inputsInBlock.length > 0) {
                // --- LA CORRECTION EST ICI ---
                // Au lieu de prendre le dernier, on cherche l'input qui est le plus proche du bouton cliqué
                let closestInput = inputsInBlock[0];
                let minDistance = Infinity;

                inputsInBlock.forEach(input => {
                    // On calcule la distance entre le centre du bouton et le centre de l'input
                    const btnRect = btn.getBoundingClientRect();
                    const inputRect = input.getBoundingClientRect();
                    
                    const btnCenter = {
                        x: btnRect.left + btnRect.width / 2,
                        y: btnRect.top + btnRect.height / 2
                    };
                    const inputCenter = {
                        x: inputRect.left + inputRect.width / 2,
                        y: inputRect.top + inputRect.height / 2
                    };

                    const distance = Math.sqrt(Math.pow(btnCenter.x - inputCenter.x, 2) + Math.pow(btnCenter.y - inputCenter.y, 2));

                    if (distance < minDistance) {
                        minDistance = distance;
                        closestInput = input;
                    }
                });
                activeInput = closestInput;
            }
        }
    }

    // 3. Vérification finale de validité
    if (!activeInput || typeof activeInput.setSelectionRange !== 'function') {
        console.error("Erreur : Aucun champ de saisie valide trouvé.");
        return;
    }

    const start = activeInput.selectionStart;
    const end = activeInput.selectionEnd;
    const value = activeInput.value;
    const id = activeInput.id;

    // 4. DÉTERMINATION DU PROFIL (Identique)
    const isCreationQuestion = id.includes('new-quiz-q') || id.includes('new-chap-content');
    const isCreationAnswer  = id.includes('new-quiz-a') || id.includes('new-qcm-correct');
    const isStudentAnswer   = id.includes('local-user-answer') || id.includes('mini-quiz-answer');

    let insertion = char;

    // 5. LOGIQUE DE CONVERSION (Identique)
    if (isCreationQuestion) {
        if (char === '√') insertion = '$\\sqrt{ }$';
        else if (char === '^') insertion = '$^{ }$';
        else if (char === '/') insertion = '$\\frac{ }{ }$';
        else if (char === '×') insertion = '$\\times$';
    } 
    else if (isCreationAnswer || isStudentAnswer) {
        if (char === '\\sqrt{}' || char === '√') insertion = '√';
        else if (char === '^{}' || char === '^') insertion = '^';
        else if (char === '\\frac{}{}' || char === '/') insertion = '/';
        else if (char === '\\times') insertion = '×';
    }

    // 6. INSERTION ET GESTION DU CURSEUR
    activeInput.value = value.substring(0, start) + insertion + value.substring(end);

    let newPos = start + insertion.length;
    if (isCreationQuestion && insertion.includes('{}')) {
        newPos = start + insertion.indexOf('{}') + 1;
    }

    activeInput.setSelectionRange(newPos, newPos);
    activeInput.focus();
    // 7. MISE À JOUR DE L'APERÇU
    updateSpecificPreview(id);
}






   function updateSpecificPreview(inputId) {
    let previewId = "";
    
    // 1. Identification du conteneur de prévisualisation correspondant à l'input
    if (inputId === 'new-quiz-q') {
        previewId = "preview-q";
    } else if (inputId === 'new-quiz-a') {
        previewId = "preview-a";
    } else if (inputId === 'new-chap-content') {
        previewId = "preview-content";
    }

    const previewElement = document.getElementById(previewId);
    const inputElement = document.getElementById(inputId);

    // Sécurité : si l'input ou le preview n'existe pas, on arrête
    if (!previewElement || !inputElement) return;

    const content = inputElement.value;

    // 2. LOGIQUE D'AFFICHAGE DIFFÉRENCIÉE
    if (inputId === 'new-quiz-a') {
        // MODE RÉPONSE : On affiche le texte brut (ex: 1/2 ou √2)
        // On ne passe PAS par MathJax pour éviter de transformer la saisie 
        // et pour que l'élève voie exactement ce qu'il écrit.
        previewElement.innerHTML = content;
    } else {
        // MODE QUESTION & COURS : On affiche le rendu LaTeX magnifique
        // On utilise innerHTML car le contenu contient des symboles mathématiques
        previewElement.innerHTML = content;

        // On demande à MathJax de traiter le nouveau contenu LaTeX
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise([previewElement]).catch((err) => {
                console.error("Erreur MathJax lors de l'aperçu :", err);
            });
        }
    }
}


// --- 2. ÉCOUTEURS D'ÉVÉNEMENTS POUR LA MISE À JOUR EN TEMPS RÉEL ---
// Cette partie permet de mettre à jour l'aperçu dès que l'élève tape au clavier (sans le clavier virtuel)
document.addEventListener('input', (e) => {
    if (e.target.id === 'new-quiz-q') {
        updateSpecificPreview('new-quiz-q');
    } else if (e.target.id === 'new-quiz-a') {
        updateSpecificPreview('new-quiz-a');
    } else if (e.target.id === 'new-chap-content') {
        updateSpecificPreview('new-chap-content');
    }
});

