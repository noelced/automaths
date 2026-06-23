// ============================================================
// js/charts.js — Construction des graphiques du cours (SVG pur)
// ============================================================
// Séparé des fichiers de chapitre (data/official/) pour faciliter l'édition des graphiques
// indépendamment du contenu pédagogique (voir data/chartsData.js
// pour les données affichées).
//
// AUCUNE LIBRAIRIE EXTERNE : tout est dessiné en SVG natif. Pas de
// Chart.js, pas de Plotly — ces librairies pèsent 200 Ko à plusieurs
// Mo pour un usage qui reste ici très simple (histogrammes, barres).
// Le SVG généré à la main reste largement suffisant et beaucoup plus
// léger.
//
// Chaque graphique est une fonction drawXxx() qui :
//   1. Cherche son conteneur <div id="..."> dans le DOM
//   2. Ne fait rien si le conteneur n'est pas encore présent (le
//      chapitre contenant ce graphique n'est peut-être pas affiché)
//   3. Génère le SVG et l'injecte dans le conteneur
//
// renderAllCharts() appelle toutes les fonctions drawXxx() d'un
// coup ; elle est invoquée automatiquement après l'injection du
// contenu d'un chapitre (voir js/app.js, fonction launchChapter).
// ============================================================


/**
 * Dessine un histogramme façon "diagramme en aire" pédagogique : classes
 * jointives (sans espace entre les barres), grille de fond façon papier
 * quadrillé, et un petit carré "1 élève = 1 carreau" en légende, pour
 * faire le lien entre l'aire de la barre et l'effectif (notion clé de
 * l'histogramme en 3ème).
 *
 * @param {string} containerId - ID du <div> conteneur (pas un <canvas> :
 *        ce module dessine directement du SVG, pas de contexte 2D requis)
 * @param {Array<{label: string, value: number}>} bins - les classes
 * @param {object} [options]
 * @param {string} [options.legendText] - texte de la légende (carré d'unité)
 * @param {string} [options.fillColor]   - couleur de remplissage des barres
 * @param {string} [options.strokeColor] - couleur du contour des barres
 * @param {string} [options.yAxisLabel]  - texte au-dessus de l'axe Y (optionnel)
 */
function drawAreaHistogram(containerId, bins, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const {
        legendText = '1 élève = 1 carreau',
        fillColor = 'rgba(124, 58, 237, 0.4)',
        strokeColor = 'rgba(124, 58, 237, 1)',
    } = options;

    if (!bins || bins.length === 0) {
        container.innerHTML = '<p style="color:#94a3b8; text-align:center; padding:20px;">Aucune donnée à afficher.</p>';
        return;
    }

    // ── Dimensions et échelles ────────────────────────────────────────────
    const width = 600, height = 360;
    const margin = { top: 50, right: 20, bottom: 40, left: 20 };
    const plotWidth  = width  - margin.left - margin.right;   // 560
    const plotHeight = height - margin.top  - margin.bottom;  // 270

    const maxValue = Math.max(...bins.map(b => b.value));
    const yMax     = maxValue + 1;
    const barWidth = plotWidth / bins.length;

    const xScale    = (i) => margin.left + i * barWidth;
    const yScale    = (v) => margin.top + plotHeight - (v / yMax) * plotHeight;
    const barHeight = (v) => (v / yMax) * plotHeight;
    const zeroY     = yScale(0);

    // Pas de la grille horizontale (garantit un nb de lignes raisonnable)
    const gridStep = Math.max(1, Math.ceil(yMax / 8));
    // Hauteur d'un carreau = gridStep unités → sert à dimensionner le rectangle-unité
    const carreauH = (gridStep / yMax) * plotHeight;
    // Largeur d'un carreau = moitié de barre (ligne de milieu ajoutée ci-dessous)
    const carreauW = barWidth / 2;

    // ── Grille horizontale ────────────────────────────────────────────────
    let gridLines = '';
    for (let v = 0; v <= yMax; v += gridStep) {
        const y = yScale(v);
        gridLines += `<line x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}"
                            stroke="rgba(0,0,0,0.1)" stroke-width="1" />`;
    }

    // ── Grille verticale ──────────────────────────────────────────────────
    // Lignes aux bords de chaque barre (déjà présentes dans la version initiale)
    for (let i = 0; i <= bins.length; i++) {
        const x = xScale(i);
        gridLines += `<line x1="${x}" y1="${margin.top}" x2="${x}" y2="${zeroY}"
                            stroke="rgba(0,0,0,0.1)" stroke-width="1" />`;
    }
    // Lignes supplémentaires au MILIEU de chaque barre (objectif pédagogique :
    // subdiviser chaque barre en deux demi-classes, ce qui permet aux élèves de
    // "compter les carreaux" pour retrouver l'effectif de la barre par son aire,
    // pas par sa hauteur — exactement la notion clé de l'histogramme en 3ème).
    for (let i = 0; i < bins.length; i++) {
        const xMid = xScale(i) + barWidth / 2;
        gridLines += `<line x1="${xMid}" y1="${margin.top}" x2="${xMid}" y2="${zeroY}"
                            stroke="rgba(0,0,0,0.1)" stroke-width="1" />`;
    }

    // ── Axe zéro ─────────────────────────────────────────────────────────
    const axisLine = `<line x1="${margin.left}" y1="${zeroY}" x2="${width - margin.right}" y2="${zeroY}"
                            stroke="#000" stroke-width="1.5" />`;

    // ── Barres jointives ──────────────────────────────────────────────────
    let bars = '';
    bins.forEach((bin, i) => {
        const x = xScale(i);
        const h = barHeight(bin.value);
        const y = zeroY - h;
        bars += `<rect x="${x}" y="${y}" width="${barWidth}" height="${h}"
                       fill="${fillColor}" stroke="${strokeColor}" stroke-width="2" />`;
    });

    // ── Labels sous chaque classe ─────────────────────────────────────────
    let labels = '';
    bins.forEach((bin, i) => {
        const xCenter = xScale(i) + barWidth / 2;
        labels += `<text x="${xCenter}" y="${zeroY + 22}" text-anchor="middle"
                         font-size="13" fill="#475569" font-family="inherit">${escapeXml(bin.label)}</text>`;
    });

    // ── Rectangle-unité d'aire (légende pédagogique) ──────────────────────
    // Ce rectangle représente UN élève = UNE unité d'aire.
    // Ses 4 côtés sont EXACTEMENT alignés sur les lignes de grille :
    //   Gauche = bord gauche de la 2ème barre (140-150)
    //   Droite = milieu de la 2ème barre         (ligne verticale ajoutée ci-dessus)
    //   Haut   = ligne horizontale v=8
    //   Bas    = ligne horizontale v=6
    // Cette position est dans la zone libre au-dessus de la 2ème barre
    // (effectif=4, sommet à v=4 → il y a 2 carreaux de dégagement libre).
    const unitRectX = margin.left + barWidth;   // début de la 2ème colonne
    const unitRectY = yScale(gridStep * 4);     // bord haut = ligne v=8
    const unitRectW = carreauW;                 // = barWidth/2 = 1 demi-barre
    const unitRectH = carreauH;                 // = gridStep unités = 1 carreau

    // Texte à droite du rectangle, centré verticalement
    const legend = `
        <rect x="${unitRectX}" y="${unitRectY}" width="${unitRectW}" height="${unitRectH}"
              fill="${fillColor}" stroke="${strokeColor}" stroke-width="1.5" />
        <text x="${unitRectX + unitRectW + 8}" y="${unitRectY + unitRectH / 2 + 5}"
              font-size="13" fill="#1e293b" font-weight="bold" font-family="inherit">${escapeXml(legendText)}</text>
    `;

    const svg = `
        <svg viewBox="0 0 ${width} ${height}" width="100%"
             style="max-width:700px; display:block; margin:0 auto; font-family:'Segoe UI',sans-serif;">
            ${gridLines}
            ${axisLine}
            ${bars}
            ${labels}
            ${legend}
        </svg>
    `;

    container.innerHTML = svg;
}

function escapeXml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}


// ── GRAPHIQUE : Histogramme des tailles (Statistiques, 3ème) ──────────────
function drawHistogramme() {
    const dataToUse = (typeof chartData !== 'undefined') ? chartData.histogrammeTailles : null;
    if (!dataToUse) return;

    const bins = dataToUse.labels.map((label, i) => ({
        label,
        value: dataToUse.values[i]
    }));

    drawAreaHistogram('histogrammeTailles', bins, {
        legendText: '1 élève = 1 carreau'
    });
}


// ── POINT D'ENTRÉE : appelle tous les graphiques d'un coup ─────────────────
// Ajoutez ici l'appel de chaque nouvelle fonction drawXxx() que vous créez.
// Chaque fonction vérifie elle-même la présence de son conteneur, donc
// appeler toutes les fonctions à chaque chapitre ne pose aucun problème :
// celles dont le conteneur n'est pas dans la page ne font simplement rien.
function renderAllCharts() {
    drawHistogramme();
    // drawMonProchainGraphique();
    // drawEncoreUnAutre();
}
