// ============================================================
// js/gamification.js — Logique de gamification AutoMaths
// Rangs (Bronze→Master), étoiles, badges, formatage visuel
// Dépend de : auth.js (supabaseClient, currentUser)
// ============================================================

// ── DÉFINITION DES RANGS (façon League of Legends / Brawl Stars) ──────────
// Chaque rang a 3 paliers (I, II, III) sauf Master (palier unique).
// Le seuil est en XP cumulé total.
const RANK_TIERS = [
    { key: 'bronze',   label: 'Bronze',   color: '#a86a3d', glow: '#cd8a5e', icon: '🥉', minXp: 0    },
    { key: 'argent',   label: 'Argent',   color: '#9aa5b1', glow: '#c9d2db', icon: '🥈', minXp: 150  },
    { key: 'or',       label: 'Or',       color: '#d4af37', glow: '#f4d160', icon: '🥇', minXp: 400  },
    { key: 'platine',  label: 'Platine',  color: '#3fb8af', glow: '#7eded6', icon: '💎', minXp: 800  },
    { key: 'diamant',  label: 'Diamant',  color: '#5b8cff', glow: '#9bb8ff', icon: '💠', minXp: 1400 },
    { key: 'master',   label: 'Master',   color: '#b042ff', glow: '#e29bff', icon: '👑', minXp: 2200 },
];

// Sous-paliers (I/II/III) à l'intérieur de chaque rang (sauf Master)
const SUB_TIERS = ['III', 'II', 'I'];


// ── AVATARS DÉBLOQUABLES PAR PALIER ────────────────────────────────────────
// À chaque rang atteint (Bronze, Argent, Or, Platine, Diamant, Master),
// l'élève débloque 2 nouvelles icônes (une pensée plutôt "fille", une plutôt
// "garçon" — mais chacun peut choisir librement n'importe laquelle des icônes
// déjà débloquées, sans distinction). Le renard 🦊 reste offert dès le départ.
const AVATAR_TIERS = [
    { rankKey: 'bronze',  icons: ['🦊'] },
    { rankKey: 'argent',  icons: ['🐱', '🐺'] },
    { rankKey: 'or',      icons: ['🦄', '🐉'] },
    { rankKey: 'platine', icons: ['🦋', '🦁'] },
    { rankKey: 'diamant', icons: ['🧚', '🐯'] },
    { rankKey: 'master',  icons: ['🦢', '🦅'] },
];

/**
 * Renvoie la liste (à plat) des icônes déjà débloquées pour un total d'XP donné.
 */
function getUnlockedAvatars(totalXp) {
    const rank = getRankFromXp(totalXp);
    const rankIndex = RANK_TIERS.findIndex(r => r.key === rank.key);
    let unlocked = [];
    for (let i = 0; i <= rankIndex; i++) {
        const tier = AVATAR_TIERS.find(t => t.rankKey === RANK_TIERS[i].key);
        if (tier) unlocked = unlocked.concat(tier.icons);
    }
    return unlocked;
}

/**
 * Renvoie TOUTES les icônes (débloquées + à venir) avec leur statut, pour
 * affichage dans le sélecteur d'avatar (icônes verrouillées visibles mais
 * grisées, avec le rang nécessaire pour les débloquer — effet motivant).
 * Retourne : [{ icon, unlocked, rankKey, rankLabel }, ...]
 */
function getAllAvatarsWithStatus(totalXp) {
    const rank = getRankFromXp(totalXp);
    const rankIndex = RANK_TIERS.findIndex(r => r.key === rank.key);
    const result = [];
    AVATAR_TIERS.forEach((tier, i) => {
        const tierRank = RANK_TIERS.find(r => r.key === tier.rankKey);
        const unlocked = i <= rankIndex;
        tier.icons.forEach(icon => {
            result.push({ icon, unlocked, rankKey: tier.rankKey, rankLabel: tierRank.label });
        });
    });
    return result;
}


/**
 * Détermine le rang complet d'un élève à partir de son XP total.
 * Retourne { key, label, color, glow, icon, subTier, progressToNext, xpToNext }
 */
function getRankFromXp(totalXp) {
    let current = RANK_TIERS[0];
    let next = RANK_TIERS[1];

    for (let i = 0; i < RANK_TIERS.length; i++) {
        if (totalXp >= RANK_TIERS[i].minXp) {
            current = RANK_TIERS[i];
            next = RANK_TIERS[i + 1] || null;
        }
    }

    // Calcul du sous-palier (I/II/III) à l'intérieur du rang courant
    let subTier = '';
    let progressToNext = 1;
    let xpToNext = 0;

    if (next) {
        const span = next.minXp - current.minXp;
        const earned = totalXp - current.minXp;
        progressToNext = Math.min(1, earned / span);
        xpToNext = Math.max(0, next.minXp - totalXp);

        // Sous-palier basé sur la progression dans le rang (sauf Master qui n'en a pas)
        const subIndex = Math.min(2, Math.floor(progressToNext * 3));
        subTier = SUB_TIERS[subIndex];
    } else {
        subTier = ''; // Master = pas de sous-palier
        progressToNext = 1;
    }

    return {
        ...current,
        subTier,
        progressToNext,
        xpToNext,
        nextRankLabel: next ? next.label : null,
        totalXp
    };
}


/**
 * Calcule le nombre d'étoiles (0 à 5) à partir d'un pourcentage de progression.
 * Chaque étoile = 20%. Permet des demi-étoiles pour plus de granularité visuelle.
 */
function getStarsFromProgress(progressPct) {
    const totalStars = 5;
    const starValue = progressPct / 100 * totalStars;
    const fullStars = Math.floor(starValue);
    const hasHalfStar = (starValue - fullStars) >= 0.5;
    return { fullStars, hasHalfStar, emptyStars: totalStars - fullStars - (hasHalfStar ? 1 : 0) };
}


/**
 * Génère le HTML d'une rangée d'étoiles (pleine / demi / vide), façon jeu mobile.
 */
function renderStarsHTML(progressPct, size = '1.3rem') {
    const { fullStars, hasHalfStar, emptyStars } = getStarsFromProgress(progressPct);
    let html = `<span style="font-size:${size}; letter-spacing:2px;">`;
    for (let i = 0; i < fullStars; i++) html += '<span class="star star-full">★</span>';
    if (hasHalfStar) html += '<span class="star star-half">★</span>';
    for (let i = 0; i < emptyStars; i++) html += '<span class="star star-empty">★</span>';
    html += '</span>';
    return html;
}


/**
 * Génère le HTML complet d'une bannière de rang (icône + dégradé + label),
 * destinée à entourer le pseudo de l'élève façon jeu vidéo compétitif.
 */
function renderRankBannerHTML(totalXp, options = {}) {
    const rank = getRankFromXp(totalXp);
    const size = options.size || 'normal'; // 'normal' | 'large' | 'small'

    const sizes = {
        small:  { padding: '4px 10px',  fontSize: '0.75rem', iconSize: '1rem'  },
        normal: { padding: '6px 16px',  fontSize: '0.9rem',  iconSize: '1.3rem' },
        large:  { padding: '10px 24px', fontSize: '1.1rem',  iconSize: '1.8rem' },
    };
    const s = sizes[size] || sizes.normal;

    return `
        <div class="rank-banner" style="
            display:inline-flex; align-items:center; gap:8px;
            padding:${s.padding};
            background: linear-gradient(135deg, ${rank.color}, ${rank.glow});
            border-radius: 30px;
            box-shadow: 0 0 16px ${rank.glow}66, inset 0 1px 1px rgba(255,255,255,0.4);
            border: 2px solid ${rank.glow};
            font-weight: 800;
            color: white;
            text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        ">
            <span style="font-size:${s.iconSize};">${rank.icon}</span>
            <span style="font-size:${s.fontSize};">${rank.label}${rank.subTier ? ' ' + rank.subTier : ''}</span>
        </div>
    `;
}


// ── BADGES (trophées événementiels) — MOTEUR DE RÈGLES DÉCLARATIF ──────────
// Chaque badge est une entrée { icon, label, desc, condition(ctx) }. Pour
// ajouter un nouveau badge, il suffit d'ajouter une entrée ici — AUCUNE
// autre partie du code n'a besoin d'être modifiée (voir buildBadgeContext
// et checkAndUnlockBadges juste en dessous, qui restent génériques et se
// contentent d'évaluer condition(ctx) pour chaque entrée de cette table).
// `ctx` est calculé UNE SEULE FOIS par appel (voir buildBadgeContext), donc
// une condition ne doit jamais faire ses propres requêtes réseau : tout ce
// dont elle a besoin doit déjà être dans ctx (l'ajouter à
// buildBadgeContext si besoin d'une nouvelle donnée).
const BADGE_DEFINITIONS = {
    first_quiz: {
        icon: '🎯', label: 'Premier pas', desc: 'Premier QCM terminé',
        condition: (ctx) => true, // toujours vrai ; l'unicité (déjà obtenu ou non) est gérée séparément
    },
    streak_3: {
        icon: '🔥', label: 'En feu', desc: '3 jours d\'affilée',
        condition: (ctx) => ctx.currentStreak === 3,
    },
    streak_7: {
        icon: '🌟', label: 'Semaine parfaite', desc: '7 jours d\'affilée',
        condition: (ctx) => ctx.currentStreak === 7,
    },
    streak_30: {
        icon: '🏆', label: 'Inarrêtable', desc: '30 jours d\'affilée',
        condition: (ctx) => ctx.currentStreak === 30,
    },
    speedrun: {
        icon: '⚡', label: 'Éclair', desc: 'QCM réussi en moins de 30s',
        condition: (ctx) => ctx.pct === 1 && ctx.durationSeconds != null && ctx.durationSeconds < 30,
    },
    night_owl: {
        icon: '🦉', label: 'Couche-tard', desc: 'QCM fait après 20h',
        condition: (ctx) => ctx.hour >= 20 || ctx.hour < 1,
    },
    early_bird: {
        icon: '🐤', label: 'Lève-tôt', desc: 'QCM fait avant 8h',
        condition: (ctx) => ctx.hour >= 5 && ctx.hour < 8,
    },
    comeback: {
        icon: '💪', label: 'Revanche', desc: 'Score 100% après un échec sur ce QCM',
        condition: (ctx) => ctx.pct === 1 && ctx.hadFailureOnThisQuiz,
    },
    flawless_10: {
        icon: '🎖️', label: 'Dix sur dix', desc: '10 QCM d\'affilée réussis à 100% (sans faute)',
        condition: (ctx) => ctx.last10AllPerfect,
    },
    perfect_chapter: {
        icon: '💯', label: 'Sans faute', desc: 'Un chapitre entier validé à 100% (tous les QCM au programme)',
        condition: (ctx) => ctx.pct === 1 && ctx.thisChapterJustValidated,
    },
    chapters_2: {
        icon: '📗', label: 'Deux chapitres maîtrisés', desc: '2 chapitres validés à 100%',
        condition: (ctx) => ctx.pct === 1 && ctx.thisChapterJustValidated && ctx.validatedChaptersCount >= 2,
    },
    chapters_5: {
        icon: '📘', label: 'Cinq chapitres maîtrisés', desc: '5 chapitres validés à 100%',
        condition: (ctx) => ctx.pct === 1 && ctx.thisChapterJustValidated && ctx.validatedChaptersCount >= 5,
    },
    chapters_10: {
        icon: '📙', label: 'Dix chapitres maîtrisés', desc: '10 chapitres validés à 100%',
        condition: (ctx) => ctx.pct === 1 && ctx.thisChapterJustValidated && ctx.validatedChaptersCount >= 10,
    },
    chapters_all: {
        icon: '🎓', label: 'Programme maîtrisé', desc: 'Tous les chapitres au programme validés à 100%',
        condition: (ctx) => ctx.pct === 1 && ctx.thisChapterJustValidated &&
            ctx.totalChaptersInProgram > 0 && ctx.validatedChaptersCount >= ctx.totalChaptersInProgram,
    },
};

/**
 * Détermine la liste des chapitres (level + chapter) entièrement validés
 * à 100% par l'élève connecté. Un chapitre compte comme "validé" quand
 * TOUS ses QCM "au programme" ont été réussis à 100% (meilleure tentative).
 *
 * "Au programme" = QCM cochés dans l'onglet Progression du prof pour la
 * classe de l'élève, SI le prof a coché au moins une case pour cette
 * classe (sinon, comme pour l'XP et le classement, aucune restriction :
 * tous les QCM du chapitre comptent — comportement historique).
 *
 * Nécessite que data/quizMeta.js soit chargé (sinon renvoie []).
 */
async function getValidatedChapters() {
    if (!currentUser || typeof quizMeta === 'undefined' || !quizMeta.byKey) return [];

    // 1) Regrouper tous les quiz_key connus par (niveau, chapitre)
    const byChapter = {};
    Object.entries(quizMeta.byKey).forEach(([key, meta]) => {
        const chapterKey = meta.level + '||' + meta.chapter;
        if (!byChapter[chapterKey]) byChapter[chapterKey] = [];
        byChapter[chapterKey].push(key);
    });

    // 2) Classe de l'élève + éventuelle restriction de progression
    const { data: profile } = await supabaseClient
        .from('profiles').select('class_id').eq('id', currentUser.id).single();
    const classId = profile && profile.class_id;

    let checkedMap = null; // null = aucune restriction (comportement historique)
    if (classId) {
        const { data: progressRows } = await supabaseClient
            .from('class_progress').select('quiz_key, checked').eq('class_id', classId);
        if (progressRows && progressRows.length > 0) {
            checkedMap = {};
            progressRows.forEach(r => { checkedMap[r.quiz_key] = r.checked; });
        }
    }

    // 3) Meilleur pourcentage de l'élève sur chaque quiz_key déjà tenté
    const { data: attempts } = await supabaseClient
        .from('quiz_results').select('quiz_key, score, total').eq('user_id', currentUser.id);
    const bestPctByKey = {};
    (attempts || []).forEach(a => {
        if (a.total > 0) {
            const p = a.score / a.total;
            if (!(a.quiz_key in bestPctByKey) || p > bestPctByKey[a.quiz_key]) bestPctByKey[a.quiz_key] = p;
        }
    });

    // 4) Un chapitre est validé si tous ses QCM "au programme" sont à 100%
    // (et qu'il y en a au moins un — un chapitre sans QCM coché ne compte pas).
    const validated = [];
    Object.entries(byChapter).forEach(([chapterKey, keys]) => {
        const inScope = checkedMap ? keys.filter(k => checkedMap[k] === true) : keys;
        if (inScope.length === 0) return;
        if (inScope.every(k => bestPctByKey[k] === 1)) validated.push(chapterKey);
    });

    return validated;
}

/**
 * Rassemble en UNE fois toutes les données dont les conditions de
 * BADGE_DEFINITIONS peuvent avoir besoin. C'est le seul endroit qui fait
 * des requêtes réseau pour l'évaluation des badges — les conditions,
 * elles, ne font que lire ce contexte (voir checkAndUnlockBadges).
 * Ajouter un champ ici pour qu'un futur badge puisse s'en servir.
 */
async function buildBadgeContext(quizKey, score, total, durationSeconds, currentStreak) {
    const pct = total > 0 ? score / total : 0;
    const ctx = {
        quizKey, score, total, durationSeconds, currentStreak, pct,
        hour: new Date().getHours(),
        hadFailureOnThisQuiz: false,
        last10AllPerfect: false,
        thisChapterJustValidated: false,
        validatedChaptersCount: 0,
        totalChaptersInProgram: 0,
    };

    // "comeback" : score de 100% sur ce QCM après avoir déjà échoué dessus
    // (une tentative précédente à moins de 50%). Nécessite l'historique
    // des tentatives sur CE quiz_key précis.
    if (pct === 1 && quizKey) {
        const { data: attempts } = await supabaseClient
            .from('quiz_results')
            .select('score, total')
            .eq('user_id', currentUser.id)
            .eq('quiz_key', String(quizKey));
        ctx.hadFailureOnThisQuiz =
            !!(attempts && attempts.length > 1 && attempts.some(a => a.total > 0 && (a.score / a.total) < 0.5));
    }

    // "flawless_10" : les 10 dernières tentatives (tous QCM confondus,
    // toutes dates) sont-elles TOUTES à 100% ? On redemande les 10
    // dernières lignes après l'enregistrement du résultat courant (déjà
    // inséré par record_quiz_result au moment où ce contexte est
    // construit), donc la tentative en cours est bien incluse.
    {
        const { data: last10 } = await supabaseClient
            .from('quiz_results')
            .select('score, total')
            .eq('user_id', currentUser.id)
            .order('completed_at', { ascending: false })
            .limit(10);
        ctx.last10AllPerfect =
            !!(last10 && last10.length === 10 && last10.every(a => a.total > 0 && a.score === a.total));
    }

    // "perfect_chapter" et paliers "N chapitres maîtrisés" : uniquement
    // pertinents si CE QCM est à 100% (voir getValidatedChapters, qui
    // respecte la restriction de Progression du prof).
    if (pct === 1 && quizKey && typeof quizMeta !== 'undefined' && quizMeta.byKey && quizMeta.byKey[quizKey]) {
        const meta = quizMeta.byKey[quizKey];
        const thisChapterKey = meta.level + '||' + meta.chapter;
        const validatedChapters = await getValidatedChapters();

        ctx.thisChapterJustValidated = validatedChapters.includes(thisChapterKey);
        ctx.validatedChaptersCount = validatedChapters.length;
        ctx.totalChaptersInProgram =
            new Set(Object.values(quizMeta.byKey).map(m => m.level + '||' + m.chapter)).size;
    }

    return ctx;
}

/**
 * Vérifie et débloque les badges mérités après un résultat de QCM.
 * Moteur générique : évalue condition(ctx) pour CHAQUE badge de
 * BADGE_DEFINITIONS (voir plus haut) — ajouter un badge n'importe où dans
 * cette table suffit, ce moteur n'a jamais besoin d'être modifié.
 * Insère dans student_badges via Supabase — on vérifie D'ABORD les badges
 * déjà obtenus pour ne tenter d'insérer que les nouveaux (évite de
 * solliciter Supabase pour rien et de générer des erreurs de contrainte
 * UNIQUE en boucle).
 */
async function checkAndUnlockBadges(quizKey, score, total, durationSeconds, currentStreak) {
    if (!currentUser) return [];

    const ctx = await buildBadgeContext(quizKey, score, total, durationSeconds, currentStreak);

    const toCheck = Object.entries(BADGE_DEFINITIONS)
        .filter(([badgeKey, def]) => {
            try {
                return !!def.condition(ctx);
            } catch (e) {
                console.error(`[Gamification] Erreur d'évaluation du badge "${badgeKey}":`, e);
                return false;
            }
        })
        .map(([badgeKey]) => badgeKey);

    // Ne tente d'insérer que les badges pas déjà obtenus.
    const { data: alreadyEarned } = await supabaseClient
        .from('student_badges').select('badge_key').eq('user_id', currentUser.id);
    const earnedSet = new Set((alreadyEarned || []).map(b => b.badge_key));
    const toInsert = [...new Set(toCheck)].filter(k => !earnedSet.has(k));

    const unlocked = [];
    for (const badgeKey of toInsert) {
        const { error } = await supabaseClient
            .from('student_badges')
            .insert([{ user_id: currentUser.id, badge_key: badgeKey }]);
        // error.code 23505 = violation de contrainte UNIQUE (rare, cas de
        // concurrence) = déjà débloqué entre-temps, on ignore simplement.
        if (!error) {
            unlocked.push(BADGE_DEFINITIONS[badgeKey]);
        }
    }
    return unlocked;
}


// ── RÉCOMPENSES SURPRISES (contenu variable, existence garantie) ──────────
// Le tirage a lieu côté serveur (roll_surprise_reward, voir schema SQL v15) :
// dès que le seuil de performance est atteint (100% sur un QCM d'au moins 5
// questions, 1×/jour), une récompense est TOUJOURS accordée — seul son
// contenu varie selon ces poids. Cette table ne sert qu'à l'affichage :
// icône/titre/texte associés à chaque reward_key renvoyée par le serveur.
const SURPRISE_REWARD_DEFINITIONS = {
    bonus_xp_small:  { icon: '✨', title: 'Bonus surprise !',  descFn: r => `+${r.xp_bonus} XP offerts pour ce sans-faute` },
    bonus_xp_medium: { icon: '🎁', title: 'Joli cadeau !',      descFn: r => `+${r.xp_bonus} XP offerts` },
    bonus_xp_big:    { icon: '🎉', title: 'Gros bonus !',       descFn: r => `+${r.xp_bonus} XP offerts, bravo !` },
    streak_freeze:   { icon: '❄️', title: 'Gel de série offert !', descFn: r => 'Un gel de série en plus dans ta réserve' },
    jackpot_xp:      { icon: '💎', title: 'JACKPOT !',           descFn: r => `+${r.xp_bonus} XP — récompense rare !` },
};


/**
 * Affiche une notification "toast" de déblocage de badge ou de montée de rang,
 * façon notification de jeu vidéo (slide-in, auto-disparition).
 */
function showGameToast({ icon, title, subtitle, color = '#5b8cff' }) {
    const toast = document.createElement('div');
    toast.className = 'game-toast';
    toast.style.cssText = `
        position: fixed; top: 24px; right: 24px; z-index: 9999;
        display: flex; align-items: center; gap: 14px;
        background: linear-gradient(135deg, #1e293b, #0f172a);
        border: 2px solid ${color};
        box-shadow: 0 0 24px ${color}88, 0 8px 24px rgba(0,0,0,0.3);
        border-radius: 16px;
        padding: 14px 20px;
        min-width: 280px;
        animation: gameToastIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    `;
    toast.innerHTML = `
        <div style="font-size:2.2rem; filter: drop-shadow(0 0 8px ${color});">${icon}</div>
        <div>
            <div style="color:white; font-weight:800; font-size:1rem;">${title}</div>
            <div style="color:#94a3b8; font-size:0.8rem;">${subtitle}</div>
        </div>
    `;

    // Injection du keyframe une seule fois
    if (!document.getElementById('game-toast-style')) {
        const style = document.createElement('style');
        style.id = 'game-toast-style';
        style.textContent = `
            @keyframes gameToastIn {
                from { transform: translateX(120%); opacity: 0; }
                to   { transform: translateX(0);     opacity: 1; }
            }
            @keyframes gameToastOut {
                from { transform: translateX(0);     opacity: 1; }
                to   { transform: translateX(120%); opacity: 0; }
            }
            .star-full  { color: #ffd23f; text-shadow: 0 0 6px #ffd23f88; }
            .star-half  { color: #ffd23f; opacity: 0.5; }
            .star-empty { color: #475569; }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'gameToastOut 0.35s ease-in forwards';
        setTimeout(() => toast.remove(), 350);
    }, 3800);
}


// ── MASCOTTE RÉACTIVE ───────────────────────────────────────────────────
// Rapport gamification, point "Mascotte/personnage animé réactif". Reprend
// l'avatar (emoji) déjà choisi par l'élève — voir AVATAR_TIERS — et lui
// donne une petite animation + une bulle de dialogue qui varie selon le
// résultat du QCM. Toujours encourageante, même sur un mauvais score :
// jamais de mascotte "triste"/déçue, pour ne jamais donner l'impression
// de juger l'élève — seulement des degrés d'enthousiasme différents.
const MASCOT_REACTIONS = [
    { min: 1,    mood: 'ecstatic',    messages: ['Parfait, sans faute ! 🎉', 'Excellent, tu assures !', 'Score parfait, bravo !'] },
    { min: 0.7,  mood: 'happy',       messages: ['Bien joué, continue comme ça !', 'Beau travail !', 'Tu progresses bien !'] },
    { min: 0.4,  mood: 'encouraging', messages: ['Pas mal ! Encore un petit effort 💪', 'Tu y es presque, continue !', 'Bonne base, on peaufine !'] },
    { min: 0,    mood: 'supportive',  messages: ['Courage, on progresse à chaque essai 🌱', 'Ce n\'est qu\'un début, retente !', 'On apprend de chaque tentative !'] },
];

function showMascotReaction(pct) {
    const emoji = (typeof currentProfile !== 'undefined' && currentProfile && currentProfile.avatar_emoji) || '🦊';
    const reaction = MASCOT_REACTIONS.find(r => pct >= r.min) || MASCOT_REACTIONS[MASCOT_REACTIONS.length - 1];
    const message = reaction.messages[Math.floor(Math.random() * reaction.messages.length)];

    if (!document.getElementById('mascot-style')) {
        const style = document.createElement('style');
        style.id = 'mascot-style';
        style.textContent = `
            .mascot-widget{
                position: fixed; left: 20px; bottom: 20px; z-index: 9998;
                display: flex; flex-direction: column; align-items: center;
                animation: mascotIn 0.45s cubic-bezier(.34,1.56,.64,1) forwards;
                pointer-events: none;
            }
            .mascot-widget.mascot-out{ animation: mascotOut 0.35s ease-in forwards; }
            @keyframes mascotIn{ from{ transform: translateY(40px) scale(.6); opacity:0; } to{ transform: translateY(0) scale(1); opacity:1; } }
            @keyframes mascotOut{ from{ transform: translateY(0) scale(1); opacity:1; } to{ transform: translateY(40px) scale(.6); opacity:0; } }
            .mascot-char{ font-size: 3.4rem; filter: drop-shadow(0 6px 10px rgba(0,0,0,.35)); display:inline-block; }
            .mascot-bubble{
                background: #fff; color: #1e293b; font-weight: 700; font-size: 0.78rem;
                padding: 8px 14px; border-radius: 14px; margin-bottom: 6px; max-width: 200px;
                text-align: center; position: relative; box-shadow: 0 4px 14px rgba(0,0,0,.25);
            }
            .mascot-bubble::after{
                content:''; position:absolute; bottom:-7px; left:50%; transform:translateX(-50%);
                border:7px solid transparent; border-top-color:#fff;
            }
            .mascot-ecstatic .mascot-char{ animation: mascotJump .55s ease-in-out infinite; }
            @keyframes mascotJump{ 0%,100%{ transform: translateY(0) rotate(-4deg); } 50%{ transform: translateY(-18px) rotate(4deg); } }
            .mascot-happy .mascot-char{ animation: mascotBounce .7s ease-in-out infinite; }
            @keyframes mascotBounce{ 0%,100%{ transform: translateY(0); } 50%{ transform: translateY(-8px); } }
            .mascot-encouraging .mascot-char{ animation: mascotNod .9s ease-in-out infinite; }
            @keyframes mascotNod{ 0%,100%{ transform: rotate(-6deg); } 50%{ transform: rotate(6deg); } }
            .mascot-supportive .mascot-char{ animation: mascotSway 1.6s ease-in-out infinite; }
            @keyframes mascotSway{ 0%,100%{ transform: translateX(0) rotate(0); } 50%{ transform: translateX(4px) rotate(3deg); } }
            @media(max-width:640px){ .mascot-char{ font-size:2.6rem; } .mascot-bubble{ font-size:0.7rem; max-width:150px; } }
        `;
        document.head.appendChild(style);
    }

    // Évite l'empilement si l'élève enchaîne plusieurs QCM très vite.
    const old = document.getElementById('mascot-widget');
    if (old) old.remove();

    const el = document.createElement('div');
    el.id = 'mascot-widget';
    el.className = 'mascot-widget mascot-' + reaction.mood;
    el.innerHTML =
        '<div class="mascot-bubble">' + message + '</div>' +
        '<div class="mascot-char">' + emoji + '</div>';
    document.body.appendChild(el);

    setTimeout(() => {
        el.classList.add('mascot-out');
        setTimeout(() => el.remove(), 350);
    }, 3400);
}


/**
 * Point d'entrée appelé après chaque QCM terminé : enregistre le résultat
 * via la fonction RPC sécurisée, vérifie les badges, affiche les toasts.
 * Remplace l'appel direct à trackerSaveResult dans le flux gamifié.
 */
async function gamifiedSaveResult(quizKey, chapterTitle, levelName, score, total, durationSeconds) {
    if (!currentUser || !currentProfile || currentProfile.role === 'teacher') return null;

    try {
        const { data, error } = await supabaseClient.rpc('record_quiz_result', {
            p_quiz_key: String(quizKey),
            p_chapter_title: chapterTitle,
            p_level_name: levelName,
            p_score: score,
            p_total: total,
            p_duration_seconds: durationSeconds
        });

        if (error) {
            console.error('[Gamification] Erreur record_quiz_result:', error.message, error);
            // Erreur visible (et pas juste en console) : sans ça, un résultat
            // non enregistré passe totalement inaperçu pour l'élève ET pour
            // vous lors des tests. Le code d'erreur Postgres/PostgREST aide
            // à diagnostiquer : 42501 = permission refusée (RLS), PGRST202 =
            // fonction RPC introuvable (schéma SQL pas à jour côté Supabase),
            // 23503 = clé étrangère invalide (profil élève manquant), etc.
            if (typeof showGameToast === 'function') {
                showGameToast({
                    icon: '⚠️',
                    title: 'Résultat non sauvegardé',
                    subtitle: `Erreur Supabase : ${error.code || '?'} — ${error.message || 'inconnue'}`,
                    color: '#ef4444'
                });
            }
            return null;
        }

        const result = data && data[0];
        if (!result) return null;

        // Réaction immédiate de la mascotte (voir plus haut) — se base sur
        // le pourcentage réel de CE QCM, indépendamment du fait qu'il
        // compte ou non pour le classement (l'encouragement n'a pas à
        // dépendre du gating XP/classement).
        showMascotReaction(total > 0 ? score / total : 0);

        const oldRank = window._lastKnownRank;
        const oldMainRankKey = window._lastKnownMainRankKey;
        const oldFreezes = window._lastKnownFreezes; // undefined au tout premier appel de la session
        const newRank = getRankFromXp(result.new_total_xp);
        window._lastKnownRank = newRank.key + (newRank.subTier || '');
        window._lastKnownMainRankKey = newRank.key;
        window._lastKnownFreezes = result.streak_freezes_left;

        // Récompense surprise (voir roll_surprise_reward, AJOUT v15) : ne
        // tente le tirage QUE si le seuil est déjà atteint côté client
        // (évite un aller-retour réseau inutile) — le serveur revérifie de
        // toute façon tout (seuil ET anti-farming 1×/jour) avant de piocher.
        let rewardResult = null;
        if (total >= 5 && score === total) {
            const { data: rewardData, error: rewardErr } = await supabaseClient.rpc('roll_surprise_reward', {
                p_quiz_key: String(quizKey), p_score: score, p_total: total
            });
            if (rewardErr) {
                console.error('[Gamification] Erreur roll_surprise_reward:', rewardErr.message, rewardErr);
            } else if (rewardData && rewardData[0]) {
                rewardResult = rewardData[0];
                window._lastKnownFreezes = rewardResult.new_streak_freezes;
            }
        }

        // Toast : XP gagné (mentionne le gel de série s'il vient d'être
        // utilisé pour sauver la série malgré un jour manqué).
        showGameToast({
            icon: '✨',
            title: `+${result.xp_earned} XP`,
            subtitle: result.freeze_used
                ? `Série sauvée par un gel ❄️ — ${result.new_streak} jour(s) 🔥`
                : `Série en cours : ${result.new_streak} jour(s) 🔥`,
            color: '#ffd23f'
        });

        // Les toasts suivants s'enchaînent avec un délai croissant (plutôt
        // que des constantes fixes) pour ne jamais se chevaucher, même
        // maintenant qu'un événement "gel" peut s'intercaler avant le
        // rang/avatars/badges.
        let delay = 700;
        const STEP = 900;

        // Toast : récompense surprise (loot pondéré, voir plus haut) —
        // affiché tôt dans la séquence, c'est l'événement le plus "fun".
        if (rewardResult && rewardResult.reward_key) {
            const def = SURPRISE_REWARD_DEFINITIONS[rewardResult.reward_key];
            if (def) {
                setTimeout(() => {
                    showGameToast({
                        icon: def.icon,
                        title: def.title,
                        subtitle: def.descFn(rewardResult),
                        color: '#f472b6'
                    });
                }, delay);
                delay += STEP;
            }
        }

        // Toast dédié : gel de série consommé (mis en avant séparément,
        // pour que l'élève comprenne bien pourquoi sa série n'est pas
        // repartie à 1 malgré un jour d'absence).
        if (result.freeze_used) {
            setTimeout(() => {
                showGameToast({
                    icon: '❄️',
                    title: 'Gel de série utilisé',
                    subtitle: `Il t'en reste ${result.streak_freezes_left} — continue pour en regagner`,
                    color: '#38bdf8'
                });
            }, delay);
            delay += STEP;
        }

        // Toast : nouveau gel gagné (palier de 7 jours de série atteint et
        // stock effectivement monté — donc pas déjà au plafond de 2).
        if (typeof oldFreezes === 'number' && result.streak_freezes_left > oldFreezes && !result.freeze_used) {
            setTimeout(() => {
                showGameToast({
                    icon: '🧊',
                    title: 'Nouveau gel de série gagné !',
                    subtitle: `${result.new_streak} jours de suite — ${result.streak_freezes_left} gel(s) en stock`,
                    color: '#38bdf8'
                });
            }, delay);
            delay += STEP;
        }

        // Toast : montée de rang (si changement détecté, palier I/II/III inclus)
        if (oldRank && oldRank !== (newRank.key + (newRank.subTier || ''))) {
            setTimeout(() => {
                showGameToast({
                    icon: newRank.icon,
                    title: `Rang ${newRank.label} ${newRank.subTier || ''} !`,
                    subtitle: 'Nouvelle progression débloquée',
                    color: newRank.color
                });
            }, delay);
            delay += STEP;
        }

        // Toast : nouveaux avatars débloqués (uniquement lors d'un changement
        // de RANG PRINCIPAL — Bronze→Argent, Argent→Or, etc. — pas à chaque
        // sous-palier I/II/III, puisque les avatars se débloquent par rang).
        if (oldMainRankKey && oldMainRankKey !== newRank.key && typeof AVATAR_TIERS !== 'undefined') {
            const tier = AVATAR_TIERS.find(t => t.rankKey === newRank.key);
            if (tier && tier.icons.length) {
                setTimeout(() => {
                    showGameToast({
                        icon: tier.icons.join(' '),
                        title: 'Nouveaux avatars débloqués !',
                        subtitle: 'Va les choisir dans ton profil 🎨',
                        color: newRank.color
                    });
                }, delay);
                delay += STEP;
            }
        }

        // Badges (décalés pour laisser la place aux toasts précédents)
        const badges = await checkAndUnlockBadges(quizKey, score, total, durationSeconds, result.new_streak);
        badges.forEach((badge) => {
            setTimeout(() => {
                showGameToast({
                    icon: badge.icon,
                    title: `Badge débloqué : ${badge.label}`,
                    subtitle: badge.desc,
                    color: '#b042ff'
                });
            }, delay);
            delay += STEP;
        });

        // Rafraîchit la couleur des boutons "Ai-je bien compris ?" avec le
        // nouveau résultat (voir index.html) — sans attendre, pour ne pas
        // retarder l'affichage des toasts déjà programmés ci-dessus.
        if (typeof refreshQuizButtonStates === 'function') {
            refreshQuizButtonStates();
        }

        return result;
    } catch (e) {
        console.error('[Gamification] Exception:', e);
        if (typeof showGameToast === 'function') {
            showGameToast({
                icon: '⚠️',
                title: 'Résultat non sauvegardé',
                subtitle: `Erreur inattendue : ${e.message || e}`,
                color: '#ef4444'
            });
        }
        return null;
    }
}
