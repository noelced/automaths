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


// ── BADGES (trophées événementiels) ────────────────────────────────────────
const BADGE_DEFINITIONS = {
    first_quiz:      { icon: '🎯', label: 'Premier pas',       desc: 'Premier QCM terminé' },
    streak_3:        { icon: '🔥', label: 'En feu',             desc: '3 jours d\'affilée' },
    streak_7:        { icon: '🌟', label: 'Semaine parfaite',  desc: '7 jours d\'affilée' },
    streak_30:       { icon: '🏆', label: 'Inarrêtable',       desc: '30 jours d\'affilée' },
    perfect_chapter: { icon: '💯', label: 'Sans faute',         desc: '100% sur un chapitre' },
    night_owl:       { icon: '🦉', label: 'Couche-tard',        desc: 'QCM fait après 21h' },
    early_bird:      { icon: '🐤', label: 'Lève-tôt',           desc: 'QCM fait avant 8h' },
    speedrun:        { icon: '⚡', label: 'Éclair',             desc: 'QCM réussi en moins de 30s' },
    comeback:        { icon: '💪', label: 'Revanche',           desc: 'Score 100% après un échec' },
};

/**
 * Vérifie et débloque les badges mérités après un résultat de QCM.
 * Insère dans student_badges via Supabase (idempotent grâce à la contrainte UNIQUE).
 */
async function checkAndUnlockBadges(score, total, durationSeconds, currentStreak) {
    if (!currentUser) return [];
    const unlocked = [];
    const pct = total > 0 ? score / total : 0;
    const hour = new Date().getHours();

    const toCheck = [];
    toCheck.push('first_quiz');
    if (pct === 1) toCheck.push('perfect_chapter');
    if (durationSeconds && durationSeconds < 30 && pct === 1) toCheck.push('speedrun');
    if (hour >= 21 || hour < 1) toCheck.push('night_owl');
    if (hour >= 5 && hour < 8) toCheck.push('early_bird');
    if (currentStreak === 3) toCheck.push('streak_3');
    if (currentStreak === 7) toCheck.push('streak_7');
    if (currentStreak === 30) toCheck.push('streak_30');

    for (const badgeKey of toCheck) {
        const { error } = await supabaseClient
            .from('student_badges')
            .insert([{ user_id: currentUser.id, badge_key: badgeKey }]);
        // error.code 23505 = violation de contrainte UNIQUE = déjà débloqué, on ignore
        if (!error) {
            unlocked.push(BADGE_DEFINITIONS[badgeKey]);
        }
    }
    return unlocked;
}


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

        const oldRank = window._lastKnownRank;
        const newRank = getRankFromXp(result.new_total_xp);
        window._lastKnownRank = newRank.key + (newRank.subTier || '');

        // Toast : XP gagné
        showGameToast({
            icon: '✨',
            title: `+${result.xp_earned} XP`,
            subtitle: `Série en cours : ${result.new_streak} jour(s) 🔥`,
            color: '#ffd23f'
        });

        // Toast : montée de rang (si changement détecté)
        if (oldRank && oldRank !== (newRank.key + (newRank.subTier || ''))) {
            setTimeout(() => {
                showGameToast({
                    icon: newRank.icon,
                    title: `Rang ${newRank.label} ${newRank.subTier || ''} !`,
                    subtitle: 'Nouvelle progression débloquée',
                    color: newRank.color
                });
            }, 600);
        }

        // Badges
        const badges = await checkAndUnlockBadges(score, total, durationSeconds, result.new_streak);
        badges.forEach((badge, i) => {
            setTimeout(() => {
                showGameToast({
                    icon: badge.icon,
                    title: `Badge débloqué : ${badge.label}`,
                    subtitle: badge.desc,
                    color: '#b042ff'
                });
            }, 1200 + i * 900);
        });

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
