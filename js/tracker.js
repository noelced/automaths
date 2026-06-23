// ============================================================
// tracker.js — Enregistrement des résultats de QCM dans Supabase
// Dépendances : auth.js (supabaseClient, currentUser, currentProfile)
// ============================================================

// Horodatage de début du quiz (mis à jour à chaque lancement)
let _quizStartTime = null;

// Clé et titre du quiz en cours (pour l'enregistrement final)
let _currentQuizKey   = null;
let _currentQuizTitle = null;
let _currentLevel     = null;


// ============================================================
// DÉMARRE LE CHRONOMÈTRE (à appeler au lancement d'un quiz)
// ============================================================
function trackerStartQuiz(quizKey, chapterTitle, levelName) {
    _quizStartTime    = Date.now();
    _currentQuizKey   = String(quizKey);
    _currentQuizTitle = chapterTitle;
    _currentLevel     = levelName;
}


// ============================================================
// ENREGISTRE LE RÉSULTAT FINAL (à appeler à la fin d'un quiz)
// ============================================================
// Délègue à gamifiedSaveResult() (js/gamification.js) qui appelle la
// fonction sécurisée Supabase record_quiz_result() : elle insère le
// résultat ET met à jour l'XP / le streak / les badges en une seule
// opération côté serveur (impossible à falsifier depuis la console).
async function trackerSaveResult(score, total) {
    // Silencieux si l'élève n'est pas connecté (mode démo / prof)
    if (!currentUser || !currentProfile || currentProfile.role === 'teacher') return;
    if (!_currentQuizKey) return;

    const durationSeconds = _quizStartTime
        ? Math.round((Date.now() - _quizStartTime) / 1000)
        : null;

    if (typeof gamifiedSaveResult === 'function') {
        await gamifiedSaveResult(
            _currentQuizKey,
            _currentQuizTitle || 'Inconnu',
            _currentLevel || 'Inconnu',
            score,
            total,
            durationSeconds
        );
    } else {
        // Repli si gamification.js n'est pas chargé : insertion simple sans XP
        const { error } = await supabaseClient.from('quiz_results').insert([{
            user_id: currentUser.id,
            quiz_key: _currentQuizKey,
            chapter_title: _currentQuizTitle || 'Inconnu',
            level_name: _currentLevel || 'Inconnu',
            score, total, duration_seconds: durationSeconds
        }]);
        if (error) console.error('[AutoMaths Tracker] Erreur enregistrement :', error.message);
    }

    // Reset
    _quizStartTime  = null;
    _currentQuizKey = null;
}
