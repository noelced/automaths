// ============================================================
// js/avatar-art.js — Illustrations d'avatars "animaux en armure"
// (rangs Grand Maître → Légende) + rendu unifié emoji / illustration.
//
// Principe : profiles.avatar_emoji reste une simple chaîne de texte.
//   - '🦊'                → emoji classique (avatars historiques)
//   - 'art:loup_chevalier' → illustration SVG définie ci-dessous
// Partout où un avatar est affiché, utiliser renderAvatarHTML(valeur)
// au lieu d'injecter la chaîne directement (textContent / ${emoji}).
// ============================================================

// Compteur pour donner des identifiants uniques aux dégradés : sans ça,
// deux illustrations identiques sur la même page (ex. classement) auraient
// des id dupliqués, ce qui casse les url(#...) dès que l'une est masquée.
let _avatarArtUid = 0;

// Dessine la moitié GAUCHE (x ≤ 50) puis la reflète automatiquement :
// garantit des visages parfaitement symétriques avec 2× moins de code.
function _mirror(inner) {
    return `<g>${inner}</g><g transform="matrix(-1 0 0 1 100 0)">${inner}</g>`;
}
function _grad(id, c1, c2, vertical = true) {
    return `<linearGradient id="${id}" x1="0" y1="0" x2="${vertical ? 0 : 1}" y2="${vertical ? 1 : 0}">` +
           `<stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient>`;
}

const AVATAR_ART = {

    // ───────────── GRAND MAÎTRE ─────────────
    loup_chevalier: {
        label: 'Loup chevalier', glow: '#e5384f',
        svg: (u) => `
        <defs>${_grad(u+'s', '#f3f6fb', '#7d8aa0')}${_grad(u+'f', '#9aa4b5', '#5d6677')}</defs>
        ${_mirror(`
            <path d="M18 40 L24 4 L47 24Z" fill="#4f5766"/>
            <path d="M25 32 L27 14 L38 24Z" fill="#1f2430"/>
            <path d="M0 100 L2 84 Q12 72 30 76 L42 92 L40 100Z" fill="url(#${u}s)"/>
            <path d="M2 84 Q12 72 30 76" stroke="#e5384f" stroke-width="2.4" fill="none"/>
            <path d="M6 82 L0 66 L17 76Z" fill="url(#${u}s)"/>
            <path d="M50 20 L34 24 L21 38 L19 55 L28 71 L40 84 L50 90Z" fill="url(#${u}f)"/>
            <path d="M19 55 L30 52 L38 65 L36 77 L28 71Z" fill="#b6bfcc"/>
            <path d="M50 46 L40 54 L36 68 L42 80 L50 86Z" fill="#dde2ea"/>
            <path d="M50 64 L43 61 L45 69 L50 74Z" fill="#14171d"/>
            <path d="M50 10 L36 15 L25 31 L33 43 L50 34Z" fill="url(#${u}s)"/>
            <path d="M50 10 L36 15 L25 31 L29 33 L38 19 L50 14Z" fill="#e5384f"/>
            <path d="M25 42 L46 46 L46 48 L25 44.4Z" fill="#1f2430"/>
            <path d="M28 46 L43 49 L42 54 L30 52Z" fill="#ffc933"/>
            <circle cx="39" cy="51" r="1.7" fill="#fff"/>
            <path d="M36 86 L50 92 L50 100 L40 100Z" fill="#4f5766"/>
        `)}
        <path d="M50 0 L45 13 L50 30 L55 13Z" fill="#e5384f"/>
        <path d="M50 74 L50 79" stroke="#14171d" stroke-width="1.8"/>`
    },

    panthere_samourai: {
        label: 'Panthère samouraï', glow: '#e5384f',
        svg: (u) => `
        <defs>${_grad(u+'r', '#d4333f', '#7a1220')}${_grad(u+'g', '#ffe27a', '#c8921a')}</defs>
        ${_mirror(`
            <path d="M0 100 L6 82 Q16 76 30 82 L42 94 L40 100Z" fill="url(#${u}r)"/>
            <path d="M6 82 Q16 76 30 82" stroke="url(#${u}g)" stroke-width="2.4" fill="none"/>
            <path d="M8 92 L38 98 M10 86 L34 91" stroke="#ffe27a" stroke-width="1" opacity=".7"/>
            <path d="M16 58 L4 70 L8 84 L24 78 L30 70Z" fill="url(#${u}r)"/>
            <path d="M18 62 L8 72 M20 68 L11 78" stroke="#ffe27a" stroke-width="1.1" opacity=".8"/>
            <path d="M20 38 L18 18 L36 28Z" fill="#1c1f2b"/>
            <path d="M50 24 L32 28 L20 42 L19 58 L28 74 L40 84 L50 87Z" fill="#232738"/>
            <path d="M26 56 L36 60 L38 74 L30 72Z" fill="#323852"/>
            <path d="M50 54 L42 59 L39 72 L45 82 L50 84Z" fill="#43496a"/>
            <path d="M50 60 L45 58 L47 65 L50 67Z" fill="#ff7a90"/>
            <path d="M50 14 L30 20 L22 34 L34 38 L50 32Z" fill="url(#${u}r)"/>
            <path d="M50 14 L30 20 L22 34 L26 35 L33 24 L50 18Z" fill="url(#${u}g)"/>
            <path d="M42 22 Q28 0 14 4 Q28 8 36 24Z" fill="url(#${u}g)"/>
            <path d="M24 42 L44 46 L42 51 L27 48Z" fill="#7dff6b"/>
            <path d="M31 44 L35 48" stroke="#0b2a07" stroke-width="2.4" stroke-linecap="round"/>
        `)}
        <path d="M50 14 L46 8 L50 2 L54 8Z" fill="url(#${u}g)"/>
        <path d="M50 67 L50 73" stroke="#10121a" stroke-width="1.8"/>`
    },

    // ───────────── CHAMPION ─────────────
    lion_spartiate: {
        label: 'Lion spartiate', glow: '#ff9d1f',
        svg: (u) => `
        <defs>${_grad(u+'b', '#f7d98a', '#a8741a')}${_grad(u+'m', '#f08a1c', '#a34a08')}</defs>
        ${_mirror(`
            <path d="M50 8 L36 8 L22 16 L10 30 L4 48 L8 66 L18 80 L34 90 L50 92Z" fill="url(#${u}m)"/>
            <path d="M6 40 L0 52 L8 56Z M10 24 L2 30 L12 38Z M10 66 L2 74 L14 74Z M22 80 L18 92 L30 88Z" fill="#c4620c"/>
            <path d="M0 100 L6 88 Q18 82 30 88 L40 98 L38 100Z" fill="url(#${u}b)"/>
            <path d="M50 22 L35 27 L27 42 L28 58 L36 72 L50 80Z" fill="#f6cf72"/>
            <path d="M50 52 L40 58 L38 70 L46 78 L50 80Z" fill="#fff0c2"/>
            <path d="M50 58 L45 56 L47 63 L50 66Z" fill="#b4472b"/>
            <path d="M50 4 L34 8 L26 22 L32 30 L50 26Z" fill="url(#${u}b)"/>
            <path d="M26 22 L22 40 L28 52 L33 36Z" fill="url(#${u}b)"/>
            <path d="M30 42 L45 46 L44 51 L32 49Z" fill="#fff"/>
            <circle cx="40" cy="48" r="2.4" fill="#3a1f05"/>
        `)}
        <path d="M46 26 L46 56 L50 60 L54 56 L54 26Z" fill="url(#${u}b)"/>
        <path d="M28 16 Q28 -6 50 -6 Q72 -6 72 16 L60 10 L50 14 L40 10Z" fill="#d6283a"/><path d="M36 10 Q50 -2 64 10" stroke="#ff7a85" stroke-width="1.6" fill="none"/><path d="M42 6 Q50 0 58 6" stroke="#ff7a85" stroke-width="1.2" fill="none"/>
        <path d="M50 66 L50 74" stroke="#3a1f05" stroke-width="1.8"/>`
    },

    aigle_royal: {
        label: 'Aigle royal', glow: '#f5b301',
        svg: (u) => `
        <defs>${_grad(u+'s', '#f7fafc', '#8497b0')}${_grad(u+'g', '#ffe27a', '#c8921a')}</defs>
        ${_mirror(`
            <path d="M26 38 L2 22 L8 34 L0 40 L9 45 L4 53 L14 54 L10 62 L26 56Z" fill="url(#${u}s)"/>
            <path d="M24 42 L8 34 M24 48 L9 45 M24 54 L12 54" stroke="#8497b0" stroke-width="1.2"/>
            <path d="M0 100 L4 86 Q16 78 30 84 L42 96 L40 100Z" fill="url(#${u}g)"/>
            <path d="M50 22 L34 26 L26 40 L28 56 L38 70 L50 76Z" fill="#f4f6fa"/>
            <path d="M28 56 L36 52 L40 66 L34 66Z" fill="#dfe4ee"/>
            <path d="M50 44 L40 50 L44 64 L50 82Z" fill="#f5b301"/>
            <path d="M50 44 L46 48 L50 54Z" fill="#c78a00"/>
            <path d="M50 12 L34 18 L27 32 L50 27Z" fill="url(#${u}s)"/>
            <path d="M50 12 L34 18 L27 32 L30 33 L36 22 L50 17Z" fill="url(#${u}g)"/>
            <path d="M29 38 L45 43 L43 49 L32 46Z" fill="#ffd23f"/>
            <circle cx="39" cy="45" r="2.6" fill="#1a1100"/>
            <path d="M27 36 L47 41 L47 43 L27 38Z" fill="#6b7a92"/>
        `)}
        <path d="M50 8 L46 18 L50 28 L54 18Z" fill="url(#${u}g)"/>
        <circle cx="50" cy="94" r="3.6" fill="#38bdf8"/>`
    },

    // ───────────── IMMORTEL ─────────────
    cerf_spectral: {
        label: 'Cerf spectral', glow: '#2de0b0',
        svg: (u) => `
        <defs>${_grad(u+'a', '#d9fff3', '#4cbfa3')}${_grad(u+'d', '#1a6b66', '#0c2f33')}</defs>
        ${_mirror(`
            <g stroke="#7dffd9" stroke-width="3.4" stroke-linecap="round" fill="none">
                <path d="M39 28 L32 14 L28 2 M32 14 L20 10 M34 20 L22 24 M30 8 L38 2" />
            </g>
            <g stroke="#2de0b0" stroke-width="7" stroke-linecap="round" fill="none" opacity=".25">
                <path d="M39 28 L32 14 L28 2 M32 14 L20 10 M34 20 L22 24 M30 8 L38 2" />
            </g>
            <path d="M33 40 L8 30 L22 48Z" fill="#14575a"/>
            <path d="M0 100 L6 86 Q16 78 30 84 L42 96 L40 100Z" fill="url(#${u}a)"/>
            <path d="M6 86 Q16 78 30 84" stroke="#2de0b0" stroke-width="2.2" fill="none"/>
            <path d="M50 26 L38 30 L32 46 L38 70 L46 86 L50 90Z" fill="url(#${u}d)"/>
            <path d="M50 54 L42 60 L40 74 L46 86 L50 88Z" fill="#2a8c85"/>
            <path d="M50 20 L38 28 L40 42 L50 46Z" fill="url(#${u}a)"/>
            <path d="M33 46 L45 50 L44 54 L35 52Z" fill="#9dfff0"/>
            <path d="M50 70 L46 68 L47 74 L50 76Z" fill="#0a1e22"/>
        `)}
        <path d="M50 28 L45 35 L50 44 L55 35Z" fill="#ff4fa3"/>
        <path d="M50 28 L47 35 L50 40Z" fill="#ffd1e8" opacity=".8"/>`
    },

    phenix: {
        label: 'Phénix', glow: '#ff7a1a',
        svg: (u) => `
        <defs>${_grad(u+'f', '#ffe36e', '#ff4d1a')}${_grad(u+'g', '#ffe27a', '#c8921a')}</defs>
        ${_mirror(`
            <path d="M38 48 L6 24 L12 44 L0 48 L14 60 L6 74 L38 70Z" fill="url(#${u}f)"/>
            <path d="M36 52 L14 40 L18 54 L8 60 L20 66 L16 72 L36 66Z" fill="#ffe36e" opacity=".7"/>
            <path d="M44 28 Q30 14 36 0 Q44 14 48 12Z" fill="url(#${u}f)"/>
            <path d="M36 66 L38 92 L50 98 L50 70Z" fill="#ff7a1a"/>
            <path d="M50 28 L40 32 L36 46 L42 58 L50 62Z" fill="#ff8a1f"/>
            <path d="M36 62 L50 66 L50 80 L40 80Z" fill="url(#${u}g)"/>
            <path d="M50 44 L43 50 L50 64Z" fill="#ffd23f"/>
            <path d="M37 44 L47 47 L46 51 L39 49Z" fill="#fff"/>
            <circle cx="44" cy="48" r="1.8" fill="#6b1400"/>
        `)}
        <path d="M50 4 Q44 14 50 26 Q56 14 50 4Z" fill="#ffe36e"/>
        <circle cx="50" cy="88" r="3.4" fill="#e11d48"/>`
    },

    // ───────────── PRÉDATEUR ─────────────
    ours_guerre: {
        label: 'Ours de guerre', glow: '#ff6a2a',
        svg: (u) => `
        <defs>${_grad(u+'i', '#8a93a6', '#3a4050')}</defs>
        ${_mirror(`
            <circle cx="20" cy="26" r="10" fill="#6b4425"/>
            <circle cx="20" cy="26" r="5" fill="#2a1a0c"/>
            <path d="M0 100 L0 80 L12 66 Q20 74 30 80 L42 92 L40 100Z" fill="url(#${u}i)"/>
            <path d="M12 66 L6 56 L20 62Z M4 78 L-2 66 L10 72Z" fill="url(#${u}i)"/>
            <path d="M12 66 Q20 74 30 80" stroke="#ff6a2a" stroke-width="2.4" fill="none"/>
            <path d="M50 22 L30 26 L19 40 L19 60 L29 76 L50 84Z" fill="#7a4f2e"/>
            <path d="M50 52 L38 57 L35 70 L44 79 L50 80Z" fill="#d7b48a"/>
            <path d="M50 60 L44 58 L46 66 L50 69Z" fill="#17110a"/>
            <path d="M50 12 L30 17 L21 34 L29 41 L50 37Z" fill="url(#${u}i)"/>
            <circle cx="30" cy="25" r="1.6" fill="#c3cad8"/><circle cx="40" cy="20" r="1.6" fill="#c3cad8"/>
            <path d="M26 41 L46 45 L46 47 L26 43Z" fill="#20242e"/>
            <path d="M29 47 L42 50 L41 54 L31 52Z" fill="#ff8a1f"/>
        `)}
        <path d="M50 2 L45 16 L50 36 L55 16Z" fill="#ff6a2a"/>
        <path d="M50 69 L50 74" stroke="#17110a" stroke-width="1.8"/>`
    },

    minotaure: {
        label: 'Minotaure', glow: '#ff2a3a',
        svg: (u) => `
        <defs>${_grad(u+'h', '#fff4d6', '#b9a06a')}${_grad(u+'k', '#4a4f5e', '#14161d')}</defs>
        ${_mirror(`
            <path d="M32 32 Q6 32 4 4 Q20 12 36 24Z" fill="url(#${u}h)"/>
            <path d="M4 4 Q8 14 20 20" stroke="#b9a06a" stroke-width="1.4" fill="none"/>
            <path d="M0 100 L4 86 Q16 80 30 86 L42 98 L40 100Z" fill="url(#${u}k)"/>
            <path d="M4 86 Q16 80 30 86" stroke="#ff2a3a" stroke-width="2.2" fill="none"/>
            <path d="M8 84 L0 70 L16 80Z" fill="url(#${u}k)"/>
            <path d="M32 40 L12 36 L26 52Z" fill="#4a2420"/>
            <path d="M50 22 L34 26 L26 38 L29 56 L38 76 L50 82Z" fill="#5a2a26"/>
            <path d="M50 54 L38 60 L37 76 L50 84Z" fill="#8f4a42"/>
            <path d="M50 20 L38 26 L40 42 L50 48Z" fill="url(#${u}k)"/>
            <path d="M43 30 L40 34 L44 40" stroke="#ff2a3a" stroke-width="1.6" fill="none"/>
            <path d="M28 46 L44 50 L42 55 L31 52Z" fill="#ff2a3a"/>
            <circle cx="42" cy="52" r="1.4" fill="#fff"/>
            <circle cx="44" cy="72" r="1.8" fill="#2a100e"/>
        `)}
        <path d="M50 8 L45 22 L50 50 L55 22Z" fill="url(#${u}k)"/>
        <circle cx="50" cy="78" r="6.4" fill="none" stroke="#ffd23f" stroke-width="2.6"/>`
    },

    // ───────────── LÉGENDE ─────────────
    dragon_dore: {
        label: 'Dragon doré', glow: '#ffd23f',
        svg: (u) => `
        <defs>${_grad(u+'g', '#fff0a0', '#d08f12')}${_grad(u+'w', '#6d3bff', '#1b0f5a')}</defs>
        ${_mirror(`
            <path d="M30 48 L0 14 L8 44 L0 60 L14 64 L10 80 L32 68Z" fill="url(#${u}w)"/>
            <circle cx="12" cy="40" r="1.2" fill="#fff"/><circle cx="6" cy="22" r="1" fill="#fff"/>
            <circle cx="18" cy="60" r="1" fill="#9be7ff"/><circle cx="10" cy="52" r="1.1" fill="#fff"/>
            <path d="M36 28 L22 10 L12 -2 L30 8 L40 20Z" fill="url(#${u}g)"/>
            <path d="M30 44 L10 40 L24 54Z" fill="#c8921a"/>
            <path d="M50 20 L36 26 L28 40 L33 58 L41 72 L50 90Z" fill="url(#${u}g)"/>
            <path d="M36 34 L30 42 M34 46 L32 52" stroke="#c8921a" stroke-width="1.4"/>
            <path d="M50 52 L42 60 L42 74 L50 90Z" fill="#ffe27a"/>
            <circle cx="45" cy="70" r="1.8" fill="#8a5a05"/>
            <path d="M30 42 L45 46 L44 52 L33 49Z" fill="#ff3b6b"/>
            <path d="M36 44 L39 50" stroke="#2a0a00" stroke-width="2.2" stroke-linecap="round"/>
            <path d="M30 70 Q20 80 14 96" stroke="#ffd23f" stroke-width="1.6" fill="none"/>
        `)}
        <path d="M50 14 L43 28 L50 44 L57 28Z" fill="url(#${u}g)"/>
        <path d="M50 22 L47 28 L50 34 L53 28Z" fill="#38e1ff"/>
        <path d="M50 4 L46 12 L50 14 L54 12Z" fill="#ffd23f"/>`
    },

    kitsune_cosmique: {
        label: 'Kitsune cosmique', glow: '#ff4fd8',
        svg: (u) => `
        <defs>${_grad(u+'t', '#ff4fd8', '#38e1ff')}${_grad(u+'g', '#ffe27a', '#c8921a')}</defs>
        ${_mirror(`
            <path d="M30 44 Q-2 38 2 6 Q22 18 36 34Z" fill="url(#${u}t)" opacity=".9"/>
            <path d="M28 54 Q-4 56 0 28 Q18 40 32 48Z" fill="url(#${u}t)" opacity=".7"/>
            <path d="M28 64 Q-2 74 -2 48 Q14 58 30 58Z" fill="url(#${u}t)" opacity=".55"/>
            <path d="M24 42 L18 2 L45 28Z" fill="#f4ecff"/>
            <path d="M25 34 L22 12 L38 28Z" fill="#c26bff"/>
            <path d="M0 100 L6 88 Q18 82 30 88 L40 98 L38 100Z" fill="url(#${u}g)"/>
            <path d="M50 28 L34 34 L18 54 L28 72 L50 86Z" fill="#f4ecff"/>
            <path d="M50 56 L38 62 L40 74 L50 86Z" fill="#fff"/>
            <path d="M22 54 L30 56 M24 60 L32 61" stroke="#ff2a8a" stroke-width="2" stroke-linecap="round"/>
            <path d="M50 70 L46 68 L47 74 L50 76Z" fill="#2a1240"/>
            <path d="M28 46 L46 50 L44 55 L31 52Z" fill="#ffd23f"/>
            <path d="M36 47 L38 53" stroke="#2a1240" stroke-width="2.2" stroke-linecap="round"/>
        `)}
        <path d="M50 30 L46 38 L50 48 L54 38Z" fill="#ff2a8a"/>
        <circle cx="50" cy="39" r="2" fill="#fff"/>
        <path d="M50 18 L51.6 22 L56 22.6 L52.6 25.4 L53.6 30 L50 27.6 L46.4 30 L47.4 25.4 L44 22.6 L48.4 22Z" fill="#ffe27a"/>`
    },
};

// ── RENDU UNIFIÉ ────────────────────────────────────────────────────────
// value : '🦊' (emoji) ou 'art:cle' (illustration). size : taille CSS
// de l'illustration (ex. '1.2em') — ignorée pour les emojis, qui suivent
// la font-size de leur conteneur comme avant.
function renderAvatarHTML(value, size = '1.15em') {
    const v = value || '🦊';
    if (typeof v === 'string' && v.indexOf('art:') === 0) {
        const art = AVATAR_ART[v.slice(4)];
        if (art) {
            const u = 'av' + (++_avatarArtUid) + '_';
            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="${size}" height="${size}" ` +
                   `style="display:inline-block;vertical-align:middle;overflow:visible;` +
                   `filter:drop-shadow(0 0 3px ${art.glow}aa);" role="img" aria-label="${art.label}">` +
                   `<circle cx="50" cy="52" r="50" fill="#0b1020" opacity=".38"/>` + art.svg(u) + `</svg>`;
        }
    }
    return v; // emoji (ou clé inconnue → affichée telle quelle, jamais d'erreur)
}
