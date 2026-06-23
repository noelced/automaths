// ============================================================
// js/app.js — Configuration, état, navigation, rendu des vues
// ============================================================

// ============================================================
// js/app.js — Configuration Supabase, état de l'app, navigation, rendu
// ============================================================

// NOTE : la connexion Supabase (supabaseClient) est créée dans js/auth.js
// auth.js est chargé AVANT app.js dans index.html, donc supabaseClient
// est déjà disponible ici de façon globale.


 // 1. BASE DE DONNÉES DU PROJET (Contenu pédagogique)
    // Cette variable contient tous les chapitres organisés par niveau et par thème.
    // 1. BASE DE DONNÉES DU PROJET (Contenu pédagogique officiel écrit en dur)


  // 3. VARIABLES D'ÉTAT ET INITIALISATION
    let data = []; // La variable qui contiendra le mélange (Officiel + Élèves)
    let currentLevel = "";
    let currentMode = "cours";
    let studentCardsGlobal = [];

    // Cache des chapitres déjà chargés dynamiquement, pour ne jamais
    // re-télécharger un fichier déjà récupéré pendant la session (ex: si
    // l'élève revient plusieurs fois sur le même chapitre).
    const _loadedChapterContents = {}; // clé: "<slug>_<id>" -> contenu complet du chapitre

    // Fonction pour copier la STRUCTURE LÉGÈRE (sans le contenu HTML) dans
    // notre variable de travail. Le contenu complet de chaque chapitre n'est
    // chargé qu'à la demande, voir loadChapterContent() plus bas — c'est ce
    // qui permet de ne pas télécharger tout le programme d'un coup (important
    // en 4G avec une connexion moyenne).
    function initializeData() {
        data = JSON.parse(JSON.stringify(officialStructure));
    }
    // NOTE : on n'appelle PAS initializeData() ici au chargement du script.
    // officialStructure (data/officialStructure.js) peut être chargé avant ou
    // après app.js selon l'ordre des <script> ; appeler la fonction
    // immédiatement créerait une dépendance d'ordre fragile. selectLevel()
    // (plus bas) appelle déjà initializeData() à chaque clic sur un niveau,
    // ce qui suffit : à ce moment-là, tous les scripts sont chargés.

    /**
     * Charge dynamiquement le contenu complet d'UN SEUL chapitre (celui que
     * l'élève vient de cliquer), via injection d'une balise <script> pointant
     * vers data/official/officialData_<niveau>_chapitreN.js. Cette balise
     * expose une variable globale (ex: chapterData_3eme_5) qui contient le
     * contenu (.chapter.content, .chapter.quiz, etc.) — on la récupère, on
     * la met en cache, puis on la fusionne dans l'entrée correspondante de
     * `data` pour que le reste du code (launchChapter, etc.) la trouve au
     * même endroit que si tout avait été chargé d'un coup.
     *
     * @param {object} chapterSkeleton - l'entrée de `data` correspondant au
     *        chapitre cliqué (contient ._file et ._varName, posés par
     *        officialStructure.js)
     * @returns {Promise<object>} le chapitre complet (avec .content, .quiz)
     */
    function loadChapterContent(chapterSkeleton) {
        const cacheKey = chapterSkeleton._varName;

        // Déjà en cache (chargé précédemment pendant cette session) ?
        if (_loadedChapterContents[cacheKey]) {
            return Promise.resolve(_loadedChapterContents[cacheKey]);
        }

        // Le script a-t-il déjà été injecté par un clic précédent (variable
        // globale déjà présente), même si on n'avait pas mis en cache ?
        if (window[cacheKey]) {
            const fullChapter = window[cacheKey].chapter;
            _loadedChapterContents[cacheKey] = fullChapter;
            return Promise.resolve(fullChapter);
        }

        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = chapterSkeleton._file;
            script.onload = () => {
                const loaded = window[cacheKey];
                if (!loaded || !loaded.chapter) {
                    reject(new Error(`Le fichier ${chapterSkeleton._file} n'a pas défini ${cacheKey} comme attendu.`));
                    return;
                }
                _loadedChapterContents[cacheKey] = loaded.chapter;
                resolve(loaded.chapter);
            };
            script.onerror = () => reject(new Error(`Impossible de charger ${chapterSkeleton._file}`));
            document.head.appendChild(script);
        });
    }

       // Variables pour gérer la session d'entraînement
    let trainingSession = {
        score: 0,
        totalAnswered: 0,
         currentCards: [], // Les cartes tirées au sort pour cette session
        currentIndex: 0,
        isReviewMode: false // Pour savoir si on affiche l'aide après une erreur
    };

    // 4. LOGIQUE DE DONNÉES (Le lien avec le serveur)
    
async function loadDataFromSupabase() {
    // On ne met pas de message "Chargement" car le cours est déjà affiché
    
    let studentCards = [];
    try {
        const { data: remoteData, error } = await supabaseClient
            .from('chapters')
            .select('*')
            .eq('level', currentLevel);

        if (error) throw error;
        studentCards = remoteData || [];
    } catch (e) {
        console.error("Erreur Supabase:", e);
        return; 
    }

    // 1. On stocke les cartes dans la variable globale pour le mode entraînement
    studentCardsGlobal = studentCards;

    // 2. On met à jour les compteurs de badges sur l'officiel (pour l'affichage visuel)
    const currentLevelData = data.find(item => item.name === currentLevel);
    if (currentLevelData && Array.isArray(currentLevelData.themes)) {
        currentLevelData.themes.forEach(theme => {
            theme.chapters.forEach(officialChap => {
                // On compte combien de cartes élèves correspondent à ce titre
                officialChap.studentCount = studentCards.filter(card => 
                    card.title && card.title.trim().toLowerCase() === officialChap.title.trim().toLowerCase()
                ).length;
            });
        });
    }

    // 3. On rafraîchit l'affichage pour que les badges ✨ apparaissent sur la grille
    renderContent(); 
}




  async function saveNewCard() {
    const selectedId = document.getElementById('new-chap-select').value;
    const type = document.getElementById('new-question-type').value;
    const content = document.getElementById('new-chap-content').value;
    const q = document.getElementById('new-quiz-q').value;

    let a = "";
    let optionsStr = ""; 

    if (type === 'ouverte') {
        a = document.getElementById('new-quiz-a').value.trim();
    } else {
        a = document.getElementById('new-qcm-correct').value.trim();
        optionsStr = document.getElementById('new-qcm-options').value; 
    }

    if (!selectedId || !q || !a) {
        alert("Erreur : Veuillez remplir les champs obligatoires.");
        return;
    }

    // 4. Préparation de l'interface utilisateur (bouton en chargement)
    const btn = document.querySelector('#view-creator .action-btn');
    const originalBtnText = btn.innerText;
    btn.innerText = "Envoi en cours...";
    btn.disabled = true;

    // 5. Recherche du titre et du thème officiel pour la cohérence de la base
    let targetThemeName = "";
    let targetChapterTitle = "";
    const levelsOrder = ["6ème", "5ème", "4ème", "3ème"];
    const levelIndex = levelsOrder.indexOf(currentLevel);
    const levelData = officialStructure[levelIndex];

    for (let theme of levelData.themes) {
        const chap = theme.chapters.find(c => c.id == selectedId);
        if (chap) {
            targetThemeName = theme.name;
            targetChapterTitle = chap.title;
            break;
        }
    }

    // 6. Construction de l'objet conforme à la table Supabase
    const newRow = {
        level: currentLevel,
        theme_name: targetThemeName,
        title: targetChapterTitle,
        content: content,
        question: q,
        answer: a, // Contient soit le texte simple, soit le code LaTeX \frac{}{}
        type: type,
        options: optionsStr,
        eleve: "oui" 
    };

    // 7. Envoi vers Supabase
    try {
        const { error } = await supabaseClient
            .from('chapters')
            .insert([newRow]);

        if (error) throw error;

        alert("Bravo ! Ta question a été publiée.");
        
        // Réinitialisation du formulaire
        document.getElementById('new-chap-content').value = "";
        document.getElementById('new-quiz-q').value = "";
        document.getElementById('new-quiz-a').value = ""; // Champ texte classique
        document.getElementById('new-qcm-correct').value = "";
        document.getElementById('new-qcm-options').value = "";
        // Réinitialisation de l'éditeur de fraction
        if(document.getElementById('visual-fraction-container')) {
            document.getElementById('visual-fraction-container').style.display = 'none';
            document.getElementById('frac-num').value = "";
            document.getElementById('frac-den').value = "";
        }

        // Rechargement des données et retour à l'application
        await loadDataFromSupabase(); 
        document.getElementById('view-creator').classList.remove('active');
        document.getElementById('view-app').classList.add('active');
        setMode('cours');

    } catch (error) {
        console.error("Erreur Supabase:", error);
        alert("Erreur lors de l'enregistrement : " + error.message);
    } finally {
        // Remise en état du bouton
        btn.innerText = originalBtnText;
        btn.disabled = false;
    }
}

/**
 * Génère un SVG de triangle rectangle avec rotation et gestion intelligente des textes
 * @param {Object} config - Configuration du triangle
 * @param {number} config.rotation - Rotation en degrés (0 par défaut)
 */
function generateTriangleSVG(config) {
    if (!config) return `<div style="color:red;">Erreur de configuration</div>`;

    const viewWidth = 300;
    const viewHeight = 250;
    const padding = 60;

    let {
        labelA = 'A', labelB = 'B', labelC = 'C',
        angleA, angleB, angleC,
        ABLen, ACLen, BCLen,
        rotation = 0
    } = config;

    const inputAngleA = angleA;
    const inputAngleB = angleB;
    const inputAngleC = angleC;
    const inputABLen = ABLen;
    const inputACLen = ACLen;
    const inputBCLen = BCLen;
    const clamp = (val, min, max) => Math.max(min, Math.min(max, val));
    const safeParse = (val) => {
        if (val === null || val === undefined || val === '') return null;
        const parsed = parseFloat(val);
        return isNaN(parsed) ? null : parsed;
    };

    const toRad = (v) => {
        const num = safeParse(v);
        return (num !== null) ? (num * Math.PI / 180) : null;
    };

    // Initialisation sécurisée des variables de calcul
    let rA = toRad(angleA), rB = toRad(angleB), rC = toRad(angleC);
    let c = safeParse(ABLen); // Côté AB
    let b = safeParse(ACLen); // Côté AC
    let a = safeParse(BCLen); // Côté BC

    // --- 2. MOTEUR DE RÉSOLUTION AVEC TRAÇAGE PAS À PAS ---
    let solved = false;
    let iterations = 0;

    console.log("--- DÉBUT DU TRAÇAGE ---", { a, b, c, rA, rB, rC });

    while (!solved && iterations < 20) {
        iterations++;
        console.log(`Iteration ${iterations}:`, { a, b, c, rA: rA?rA*180/Math.PI:null, rB: rB?rB*180/Math.PI:null, rC: rC?rC*180/Math.PI:null });

        // A. Compléter les angles
        if (rA && rB && !rC) { 
            rC = Math.PI - rA - rB; 
            console.log("-> Complétion rC via rA, rB");
        }
        else if (rA && rC && !rB) { 
            rB = Math.PI - rA - rC; 
            console.log("-> Complétion rB via rA, rC");
        }
        else if (rB && rC && !rA) { 
            rA = Math.PI - rB - rC; 
            console.log("-> Complétion rA via rB, rC");
        }

        // B. CAS SSS
        if (a && b && c && !rA && !rB && !rC) {
            console.log("-> Tentative SSS");
            rA = Math.acos(clamp((b * b + c * c - a * a) / (2 * b * c), -1, 1));
            rB = Math.acos(clamp((a * a + c * c - b * b) / (2 * a * c), -1, 1));
            rC = Math.PI - rA - rB;
        }
        // C. CAS SAS
        else if (rA && b && c && !a) { 
            console.log("-> Tentative SAS (trouver a)");
            a = Math.sqrt(clamp(b * b + c * c - 2 * b * c * Math.cos(rA), 0, Infinity));
        } else if (rB && a && c && !b) { 
            console.log("-> Tentative SAS (trouver b)");
            b = Math.sqrt(clamp(a * a + c * c - 2 * a * c * Math.cos(rB), 0, Infinity));
        } else if (rC && a && b && !c) { 
            console.log("-> Tentative SAS (trouver c)");
            c = Math.sqrt(clamp(a * a + b * b - 2 * a * b * Math.cos(rC), 0, Infinity));
        }

        // D. CAS ASA / AAS
        else if (rA && rB && c && !a && !b) {
            console.log("-> Tentative ASA/AAS (trouver a, b)");
            const ratio = c / Math.sin(clamp(Math.PI - rA - rB, 0.001, Math.PI - 0.001));
            a = ratio * Math.sin(rA); b = ratio * Math.sin(rB);
        } else if (rA && rB && a && !b && !c) {
            console.log("-> Tentative ASA/AAS (trouver b, c)");
            const ratio = a / Math.sin(rA);
            b = ratio * Math.sin(rB); c = ratio * Math.sin(Math.PI - rA - rB);
        } else if (rA && rB && b && !a && !c) {
            console.log("-> Tentative ASA/AAS (trouver a, c)");
            const ratio = b / Math.sin(rB);
            a = ratio * Math.sin(rA); c = ratio * Math.sin(Math.PI - rA - rB);
        }

 // 4. CAS : On a deux côtés et un angle opposé (SSA)
        else if (rA && a && b && !rB && !rC) { // Angle A opposé à a
            let sinB = (b * Math.sin(rA)) / a;
            if (sinB <= 1) { rB = Math.asin(clamp(sinB, -1, 1)); rC = Math.PI - rA - rB; }
        } else if (rA && a && c && !rC && !rB) { // Angle A opposé à a
            let sinC = (c * Math.sin(rA)) / a;
            if (sinC <= 1) { rC = Math.asin(clamp(sinC, -1, 1)); rB = Math.PI - rA - rC; }
        } else if (rB && b && a && !rA && !rC) { // Angle B opposé à b
            let sinA = (a * Math.sin(rB)) / b;
            if (sinA <= 1) { rA = Math.asin(clamp(sinA, -1, 1)); rC = Math.PI - rA - rB; }
        } else if (rB && b && c && !rC && !rA) { // Angle B opposé à b
            let sinC = (c * Math.sin(rB)) / b;
            if (sinC <= 1) { rC = Math.asin(clamp(sinC, -1, 1)); rA = Math.PI - rB - rC; }
        } else if (rC && c && a && !rA && !rB) { // Angle C opposé à c
            let sinA = (a * Math.sin(rC)) / c;
            if (sinA <= 1) { rA = Math.asin(clamp(sinA, -1, 1)); rB = Math.PI - rA - rC; }
        } else if (rC && c && b && !rB && !rA) { // Angle C opposé à c
            let sinB = (b * Math.sin(rC)) / c;
            if (sinB <= 1) { rB = Math.asin(clamp(sinB, -1, 1)); rA = Math.PI - rB - rC; }
        }

        // F. Finalisation (Stabilisation)
        if (a && b && c && !rA) {
            console.log("-> Stabilisation rA");
            rA = Math.acos(clamp((b * b + c * c - a * a) / (2 * b * c), -1, 1));
        }
        if (a && b && c && !rB) {
            console.log("-> Stabilisation rB");
            rB = Math.acos(clamp((a * a + c * c - b * b) / (2 * a * c), -1, 1));
        }
        if (a && b && c && !rC) {
            console.log("-> Stabilisation rC");
            rC = Math.PI - rA - rB;
        }
        if (rA && rB && rC && c && !a) {
            console.log("-> Stabilisation a via sinus");
            a = (c * Math.sin(rA)) / Math.sin(clamp(rC, 0.001, Math.PI - 0.001));
        }
        if (rA && rB && rC && c && !b) {
            console.log("-> Stabilisation b via sinus");
            b = (c * Math.sin(rB)) / Math.sin(clamp(rC, 0.001, Math.PI - 0.001));
        }

        if (a && b && c && rA && rB && rC) {
            console.log("-> SUCCÈS !");
            solved = true;
        }
    }


    // --- 3. VÉRIFICATIONS DE VALIDITÉ ---
    const isInvalid = !a || !b || !c || isNaN(a) || isNaN(b) || isNaN(c) || 
                      isNaN(rA) || isNaN(rB) || isNaN(rC) || rA <= 0 || rB <= 0 || rC <= 0 ||
                      (a + b <= c + 0.001) || (a + c <= b + 0.001) || (b + c <= a + 0.001);
    console.log("DEBUG TRIANGLE:", { a, b, c, rA: rA*180/Math.PI, rB: rB*180/Math.PI, rC: rC*180/Math.PI, isInvalid });

    // --- 3. VÉRIFICATIONS DE VALIDITÉ DÉTAILLÉES ---

let errorReason = "";

if (!a || !b || !c || isNaN(a) || isNaN(b) || isNaN(c)) {
    errorReason = "Côté impossible (calcul NaN ou valeur manquante)";
} else if (isNaN(rA) || isNaN(rB) || isNaN(rC)) {
    errorReason = "Angle impossible (calcul NaN - vérifiez vos données)";
} else if (a + b <= c + 0.001 || a + c <= b + 0.001 || b + c <= a + 0.001) {
    errorReason = "Inégalité triangulaire non respectée (un côté est trop long)";
} else if (rA <= 0 || rB <= 0 || rC <= 0) {
    errorReason = "Angle invalide (doit être > 0)";
}

if (errorReason !== "") {
    // On affiche l'erreur précise à l'utilisateur et on log les détails pour le développeur
    console.error("ÉCHEC CONSTRUCTION:", { a, b, c, rA: rA*180/Math.PI, rB: rB*180/Math.PI, rC: rC*180/Math.PI, errorReason });
    return `<div style="color:red; font-family:Arial; padding:10px;">Triangle inconstructible : ${errorReason}</div>`;
}
    angleA = rA * 180 / Math.PI;
    angleB = rB * 180 / Math.PI;
    angleC = rC * 180 / Math.PI;

    // --- 4. COORDONNÉES ET CENTRAGE ---
    const pA = { x: 0, y: 0 };
    const pB = { x: c, y: 0 };
    const pC = { x: b * Math.cos(rA), y: -b * Math.sin(rA) };

    const allPoints = [pA, pB, pC];
const minX = Math.min(...allPoints.map(p => p.x)), maxX = Math.max(...allPoints.map(p => p.x));
    const minY = Math.min(...allPoints.map(p => p.y)), maxY = Math.max(...allPoints.map(p => p.y));
    const triW = maxX - minX, triH = Math.abs(maxY - minY);
    const scale = Math.min((viewWidth - padding * 2) / (triW || 1), (viewHeight - padding * 2) / (triH || 1));

    const transform = (p) => ({
        x: (p.x - minX) * scale + padding,
        y: (p.y - minY) * scale + padding
    });

    const A = transform(pA), B = transform(pB), C = transform(pC);
    const triCenter = { x: (A.x + B.x + C.x) / 3, y: (A.y + B.y + C.y) / 3 };

    // --- 5. CONSTRUCTION DU SVG ---
    let svg = `<svg width="${viewWidth}" height="${viewHeight}" viewBox="0 0 ${viewWidth} ${viewHeight}" xmlns="http://www.w3.org/2000/svg">`;
    svg += `<defs><clipPath id="triClip"><polygon points="${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}" /></clipPath></defs>`;
    
    // Groupe de rotation globale
    svg += `<g transform="rotate(${rotation}, ${viewWidth/2}, ${viewHeight/2})">`;
    
    // Le triangle
    svg += `<polygon points="${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}" fill="rgba(0, 123, 255, 0.1)" stroke="#333" stroke-width="2" />`;

    // --- FONCTIONS DE DESSIN ---
const drawAngleIndicator = (v, deg, isRight, p1, p2) => {
    if (!deg || deg <= 0) return;
    const size = 15; // Taille du côté du carré

    if (isRight) {
        // 1. Calculer les angles directionnels des deux segments partant du sommet v
        const angle1 = Math.atan2(p1.y - v.y, p1.x - v.x);
        const angle2 = Math.atan2(p2.y - v.y, p2.x - v.x);

        // 2. Calculer les points sur les côtés (P1 et P2)
        const x1 = v.x + Math.cos(angle1) * size;
        const y1 = v.y + Math.sin(angle1) * size;
        const x2 = v.x + Math.cos(angle2) * size;
        const y2 = v.y + Math.sin(angle2) * size;

        // 3. CALCUL DU 4ème POINT (P3)
        // Dans un angle droit, le 4ème point est simplement la somme vectorielle des deux points
        // car le sommet est l'origine (0,0) du calcul local.
        // P3 = Sommet + (Vecteur1) + (Vecteur2)
        const x3 = x1 + (x2 - v.x);
        const y3 = y1 + (y2 - v.y);

        // 4. Dessiner le carré avec une polyline à 4 points
        // Ordre : Sommet -> Point sur côté 1 -> 4ème point -> Point sur côté 2 -> Retour sommet
        svg += `<polyline points="${v.x},${v.y} ${x1},${y1} ${x3},${y3} ${x2},${y2} ${v.x},${v.y}" 
                fill="rgba(0,0,0,0.05)" stroke="#333" stroke-width="1.5" />`;

    } else {
        // Pour les angles non droits (arcs de cercle)
        const radius = 18;
        svg += `<circle cx="${v.x}" cy="${v.y}" r="${radius}" fill="none" stroke="red" stroke-width="2" clip-path="url(#triClip)" />`;
    }
};




    const getOutwardVector = (v, triCenter) => {
        const dx = v.x - triCenter.x;
        const dy = v.y - triCenter.y;
        const len = Math.sqrt(dx * dx + dy * dy);
        return { x: dx / len, y: dy / len };
    };

    const drawVertexLabel = (v, label, triCenter) => {
        if (!label) return;
        const dir = getOutwardVector(v, triCenter);
        const offset = 25;
        const tx = v.x + dir.x * offset;
        const ty = v.y + dir.y * offset;
        const invRot = -rotation;
        svg += `<text x="${tx}" y="${ty}" fill="black" font-family="Arial" font-size="16px" font-weight="bold" text-anchor="middle" transform="rotate(${invRot}, ${tx}, ${ty})">${label}</text>`;
    };

    const drawAngleText = (v, deg, p1, p2, triCenter) => {
        if (!deg || deg <= 0) return;
        const a1 = Math.atan2(p1.y - v.y, p1.x - v.x);
        const a2 = Math.atan2(p2.y - v.y, p2.x - v.x);
        let bisector = (a1 + a2) / 2;

        const dx = Math.cos(bisector), dy = Math.sin(bisector);
        const testX = v.x + dx * 5, testY = v.y + dy * 5;
        const distToCenterTest = Math.sqrt((testX - triCenter.x)**2 + (testY - triCenter.y)**2);
        const distVertexToCenter = Math.sqrt((v.x - triCenter.x)**2 + (v.y - triCenter.y)**2);

        if (distToCenterTest < distVertexToCenter) bisector += Math.PI;

        const tx = v.x + Math.cos(bisector) * 12;
        const ty = v.y + Math.sin(bisector) * 12;
        const invRot = -rotation;
        svg += `<text x="${tx}" y="${ty}" fill="red" font-family="Arial" font-size="12px" font-weight="bold" text-anchor="middle" transform="rotate(${invRot}, ${tx}, ${ty})">${Math.round(deg)}°</text>`;
    };

    const drawSideLabel = (p1, p2, val) => {
        if (!val) return;
        const midX = (p1.x + p2.x) / 2;
        const midY = (p1.y + p2.y) / 2;
        const angleRad = Math.atan2(p2.y - p1.y, p2.x - p1.x);
        let pushAngle = angleRad + Math.PI / 2;
        const testX = midX + Math.cos(pushAngle) * 10, testY = midY + Math.sin(pushAngle) * 10;
        const distToCenterTest = Math.sqrt((testX - triCenter.x)**2 + (testY - triCenter.y)**2);
        const distMidToCenter = Math.sqrt((midX - triCenter.x)**2 + (midY - triCenter.y)**2);
        if (distToCenterTest < distMidToCenter) pushAngle += Math.PI;

        const tx = midX + Math.cos(pushAngle) * 18;
        const ty = midY + Math.sin(pushAngle) * 18;
        const invRot = -rotation;
        svg += `<text x="${tx}" y="${ty}" fill="black" font-family="Arial" font-size="14px" text-anchor="middle" transform="rotate(${invRot}, ${tx}, ${ty})">${val}m</text>`;
    };

    // --- 6. EXÉCUTION DU DESSIN ---
        // --- 5. EXÉCUTION DU DESSIN (Ordre des couches) ---

    // A. Indicateurs d'angles (Arcs/Carrés)
    // On passe impérativement le sommet (v), la valeur (deg), l'état (isRight) 
    // ET les deux points voisins (p1, p2) pour que le carré soit bien orienté.
    if (inputAngleA) drawAngleIndicator(A, angleA, Math.abs(angleA - 90) < 0.1, B, C);
    if (inputAngleB) drawAngleIndicator(B, angleB, Math.abs(angleB - 90) < 0.1, A, C);
    if (inputAngleC) drawAngleIndicator(C, angleC, Math.abs(angleC - 90) < 0.1, A, B);


    if (inputAngleA && inputAngleA !== 90) drawAngleText(A, angleA, B, C, triCenter);
    if (inputAngleB && inputAngleB !== 90) drawAngleText(B, angleB, A, C, triCenter);
    if (inputAngleC && inputAngleC !== 90) drawAngleText(C, angleC, A, B, triCenter);

    drawVertexLabel(A, labelA, triCenter);
    drawVertexLabel(B, labelB, triCenter);
    drawVertexLabel(C, labelC, triCenter);

    if (inputABLen) drawSideLabel(A, B, ABLen);
    if (inputBCLen) drawSideLabel(B, C, BCLen);
    if (inputACLen) drawSideLabel(A, C, ACLen);

    svg += `</g></svg>`;
    return svg;
}

// 1. Gère l'affichage/masquage de l'éditeur de fraction
function toggleFractionEditor() {
    const editor = document.getElementById('visual-fraction-container');
    editor.style.display = (editor.style.display === 'none' || editor.style.display === '') ? 'flex' : 'none';
}

// 2. Synchronise les cases num/den avec l'input texte principal
function syncFraction() {
    const num = document.getElementById('frac-num').value.trim();
    const den = document.getElementById('frac-den').value.trim();
    
    // On cherche quel input est actuellement utilisé par l'élève (Question ou Réponse)
    let activeInput = document.activeElement;
    let targetInput;

    if (activeInput && activeInput.id.includes('new-quiz-q')) {
        targetInput = document.getElementById('new-quiz-q');
    } else {
        targetInput = document.getElementById('new-quiz-a');
    }

    if (num !== "" && den !== "") {
        targetInput.value = `\\frac{${num}}{${den}}`;
    } else {
        targetInput.value = "";
    }
    
    updatePreview(); // Mise à jour de l'aperçu
}







  // 4. FONCTIONS DE NAVIGATION et VUES(ce qui change l'écran)
function selectLevel(index) {
    const levelsOrder = ["6ème", "5ème", "4ème", "3ème"];
    currentLevel = levelsOrder[index];
    
    document.getElementById('level-display').innerText = currentLevel;
    document.getElementById('view-levels').classList.remove('active');
    document.getElementById('view-app').classList.add('active');

    const container = document.getElementById('content-area');
    if (container) {
        container.innerHTML = "<p style='text-align:center; margin-top:50px;'>Chargement du programme...</p>";
    }

    // 1. On prépare l'officiel immédiatement
    initializeData(); 

    // 2. On affiche le mode cours (l'élève voit les chapitres officiels instantanément)
    setMode('cours'); 

    // 3. On lance la récupération des cartes élèves en arrière-plan
    // On ne met PAS 'await' pour ne pas bloquer l'affichage du cours
    loadDataFromSupabase();
}




    function resetApp() {                                                                   /** Revient à l'écran de sélection des niveaux et nettoie toutes les vues **/
         // 1. On cache TOUTES les vues pour éviter les superpositions
        document.getElementById('view-levels').classList.remove('active');
        document.getElementById('view-app').classList.remove('active');
        document.getElementById('view-creator').classList.remove('active');

        // 2. On affiche uniquement la vue des niveaux (le menu principal)
        document.getElementById('view-levels').classList.add('active');
    
        // 3. Réinitialisation du titre du header
        document.getElementById('level-display').innerText = "";

        // 4. Optionnel : On vide le formulaire de création pour la prochaine fois
        document.getElementById('new-chap-content').value = "";
        document.getElementById('new-quiz-q').value = "";
        document.getElementById('new-quiz-a').value = "";
        document.getElementById('new-qcm-correct').value = "";
        document.getElementById('new-qcm-options').value = "";
    }


    function setMode(mode) {
    currentMode = mode;
    // Mise à jour visuelle des onglets
    document.getElementById('btn-cours').classList.toggle('active', mode === 'cours');
    document.getElementById('btn-entrainement').classList.toggle('active', mode === 'entrainement');
    
    // --- CORRECTION : Gestion de la visibilité du bouton Créer une carte ---
    const btnCreate = document.getElementById('btn-create-card');
    if (btnCreate) {
        // Le bouton n'est visible que si le mode est 'entrainement'
        btnCreate.style.display = (mode === 'entrainement') ? 'block' : 'none';
    }

    renderContent();
    }


    function openCreator() {
        // 1. On cache TOUTES les vues pour repartir de zéro
        document.getElementById('view-levels').classList.remove('active');
        document.getElementById('view-app').classList.remove('active');
        document.getElementById('view-creator').classList.remove('active');

        const selectElement = document.getElementById('new-chap-select');
        selectElement.innerHTML = ""; 
    
        const levelsOrder = ["6ème", "5ème", "4ème", "3ème"];
        const levelIndex = levelsOrder.indexOf(currentLevel);
        const levelData = data[levelIndex];

        if (levelData && levelData.themes.length > 0) {
        levelData.themes.forEach(theme => {
            theme.chapters.forEach(chap => {
                const option = document.createElement('option');
                option.value = chap.id;
                option.text = chap.title; 
                selectElement.appendChild(option);
            });
        });
        } else {
        const option = document.createElement('option');
        option.text = "Aucun chapitre disponible";
        selectElement.appendChild(option);
        }

         // 2. On affiche uniquement la vue création
        document.getElementById('view-creator').classList.add('active');
    }

    function toggleQuestionType() {                        // --- GESTION DU FORMULAIRE DE CRÉATION ---
        const type = document.getElementById('new-question-type').value;
        const zoneOuverte = document.getElementById('zone-reponse-ouverte');
        const zoneQcm = document.getElementById('zone-reponse-qcm');

        if (type === 'qcm') {
            zoneOuverte.style.display = 'none';
            zoneQcm.style.display = 'block';
        } else {
            zoneOuverte.style.display = 'block';
            zoneQcm.style.display = 'none';
        }
    }

    // Variable pour suivre si un quiz est actuellement ouvert
    let activeInjectedQuizId = null;



    // SINON -> On lance le quiz normalement
    



// --- 1. FONCTION DE FIN DE SESSION (Design unifié) ---

   function renderContent() {
    const container = document.getElementById('content-area');
    if (!container) return;
    container.innerHTML = "";

    const levelData = data.find(item => item.name === currentLevel);
    if (!levelData) {
        container.innerHTML = "<p>Contenu en cours de préparation...</p>";
        return;
    }

    levelData.themes.forEach(group => {
        const section = document.createElement('div');
        section.className = 'theme-section';
        section.innerHTML = `<h2 class="theme-title">${group.name}</h2>`;

        const grid = document.createElement('div');
        grid.className = 'chapters-grid';

                group.chapters.forEach(chap => {
            const card = document.createElement('div');
            card.className = 'chapter-item';
            card.style.position = 'relative'; 
            
            const displayTitle = chap.title;

            // Construction du contenu HTML de base
            let contentHTML = `
                <span class="chapter-icon">${chap.id}</span>
                <span class="chapter-name">${displayTitle}</span>
            `;

            // CONDITION : On n'affiche le badge QUE si on est en mode entraînement 
            // ET qu'il y a des questions disponibles
 
            if (currentMode === 'entrainement' && chap.studentCount > 0) {
                contentHTML += `
                 <span class="chapter-badge">${chap.studentCount} Q</span>
                `;
                }


            card.innerHTML = contentHTML;
            card.onclick = () => launchChapter(chap);
            grid.appendChild(card);
        });


        section.appendChild(grid);
        container.appendChild(section);
    });
}


async function launchChapter(chapter) {
    const container = document.getElementById('content-area');
    container.innerHTML = "";
 // --- MODE COURS
if (currentMode === 'cours') {
        // ── Chargement à la demande du contenu de CE chapitre uniquement ──
        // `chapter` ici vient de la structure légère (officialStructure.js) :
        // il a .id/.title mais PAS .content ni .quiz pour l'instant. On
        // affiche un état de chargement, on récupère le fichier du chapitre
        // (data/official/officialData_<niveau>_chapitreN.js), puis on
        // continue avec le contenu complet une fois reçu.
        container.innerHTML = `
            <div class="card" style="text-align:center; padding:60px 20px;">
                <p style="color:var(--text-muted);">Chargement du chapitre…</p>
            </div>`;

        let fullChapter;
        try {
            fullChapter = await loadChapterContent(chapter);
        } catch (e) {
            console.error('[launchChapter] Erreur de chargement du chapitre :', e);
            container.innerHTML = `
                <div class="card" style="text-align:center;">
                    <h1 style="color:var(--secondary);">Erreur de chargement</h1>
                    <p>Impossible de charger ce chapitre. Vérifiez votre connexion puis réessayez.</p>
                    <button class="action-btn" onclick="renderContent()" style="margin-top:20px;">Retour aux chapitres</button>
                </div>`;
            return;
        }

        // Si l'élève a changé de chapitre/mode pendant le chargement (réseau
        // lent), on annule l'affichage pour éviter d'écraser la vue actuelle
        // avec un contenu obsolète.
        if (currentMode !== 'cours') return;

        container.innerHTML = "";
        const card = document.createElement('div');
        card.className = 'card';
        
        let quizHTML = "";
        if (fullChapter.quiz) {
            quizHTML = `
                <div class="quiz-container">
                    <p style="font-weight:bold; margin-bottom:10px;">${fullChapter.quiz.q}</p>
                    <input type="text" id="mini-quiz-answer" placeholder="Votre réponse...">
                    <!-- Clavier harmonisé pour le mini-quiz de cours -->
                    <div class="math-keyboard" style="margin-top:10px; margin-bottom:15px;">
                        <button type="button" class="math-key" onclick="insertMathChar('√', this)">√</button>
                        <button type="button" class="math-key" onclick="insertMathChar('^', this)">^</button>
                        <button type="button" class="math-key" onclick="insertMathChar('/', this)">/</button>
                        <button type="button" class="math-key" onclick="insertMathChar('<', this)">&lt;</button>
                        <button type="button" class="math-key" onclick="insertMathChar('>', this)">&gt;</button>
                        <button type="button" class="math-key" onclick="insertMathChar('*', this)">×</button>
                        <button type="button" class="math-key" onclick="insertMathChar('.', this)">.</button>
                        <button type="button" class="math-key" onclick="insertMathChar('-', this)">-</button>
                    </div>
                    <button class="action-btn" onclick="checkMiniQuiz('${fullChapter.quiz.a}')">Vérifier</button>
                    <div id="mini-quiz-feedback" class="feedback"></div>
                </div>`;
        } else {
            quizHTML = `<p>Pas de question disponible pour ce test rapide.</p>`;
        }

        card.innerHTML = `
            <h1 style="margin-bottom:15px;">${fullChapter.title || chapter.title}</h1>
            <div class="course-content">${fullChapter.content || "Aucun contenu de cours disponible."}</div>
            <div class="notion-box"><strong>💡 Petit test rapide :</strong></div>
            ${quizHTML}
        `;
        container.appendChild(card);
        applyAutomaticNumbering(card);

        // ── Détection et activation des balances d'équations [[BALANCE:...]] ──
        if (typeof initEquationBalances === 'function') {
            initEquationBalances(card, (solutionValue, eqString) => {
                // Petite récompense de gamification si l'élève est connecté
                // (purement informatif, n'affecte pas le score d'un QCM)
                if (typeof currentProfile !== 'undefined' && currentProfile && currentProfile.role === 'student'
                    && typeof showGameToast === 'function') {
                    showGameToast({
                        icon: '🧪',
                        title: 'Équation résolue !',
                        subtitle: eqString ? `Tu as résolu ${eqString}` : 'Bravo pour cet entraînement',
                        color: '#22c55e'
                    });
                }
            });
        }

        // ── Construction des graphiques du chapitre (histogrammes, etc.) ──
        if (typeof renderAllCharts === 'function') {
            renderAllCharts();
        }

        if (window.MathJax) {
            MathJax.typesetPromise([container]).catch((err) => console.log(err));
        }

    } else {
        // --- MODE ENTRAÎNEMENT ---
        
        // On filtre les cartes de Supabase en étant très souple sur le titre
        let trainingCards = studentCardsGlobal.filter(card => {
            if (!card.title) return false;
            // On compare les titres en minuscules et sans espaces inutiles au début/fin
            return card.title.trim().toLowerCase() === chapter.title.trim().toLowerCase();
        }).map(card => ({
            quiz: { 
                q: card.question || "Sans question", 
                a: card.answer || "" 
            },
            content: card.content || "",
            type: card.type || 'ouverte',
            options: (card.options && typeof card.options === 'string') ? card.options.split('\\') : []
        }));

        if (trainingCards.length === 0) {
            container.innerHTML = `
                <div class="card" style="text-align:center;">
                    <h1 style="color:var(--secondary);">Entraînement indisponible</h1>
                    <p>Aucune question d'élève n'a été trouvée pour le chapitre : <br><strong>"${chapter.title}"</strong></p>
                    <p style="font-size:0.8rem; color:gray; margin-top:10px;">(Vérifiez que le titre dans Supabase est identique)</p>
                    <button class="action-btn" onclick="renderContent()" style="margin-top:20px;">Retour aux chapitres</button>
                </div>`;
            return;
        }

        // Initialisation de la session
        trainingSession.score = 0;
        trainingSession.totalAnswered = 0;
        trainingSession.isReviewMode = false;
        trainingSession.currentCards = [...trainingCards].sort(() => Math.random() - 0.5);
        trainingSession.currentIndex = 0;

        displayTrainingQuestion(chapter.title);
    }
}








    
 function displayTrainingQuestion(chapterTitle) {
    const container = document.getElementById('content-area');
    const currentCard = trainingSession.currentCards[trainingSession.currentIndex];

        if (!currentCard) {
        // On utilise la même fonction pour que le design soit identique partout
        showFinalScoreInjected(container, trainingSession.score, trainingSession.totalAnswered);
        return;
    }


    // On vérifie si la question vient d'un élève (on peut utiliser une propriété ou simplement 
    // savoir qu'en mode entraînement, toutes les cartes sont des cartes élèves)
    const sparkle = "✨ "; 

    container.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
            <span style="font-weight:bold; color:var(--primary);">Score: ${trainingSession.score}/${trainingSession.totalAnswered}</span>
            <span style="font-size:0.8rem; color:var(--text-muted);">Question ${trainingSession.currentIndex + 1}/${trainingSession.currentCards.length}</span>
        </div>
        <div class="card">
            <h2 style="margin-bottom:15px;">Entraînement</h2>
            <p style="margin-bottom:15px; color:var(--text-muted);">${chapterTitle}</p>
            <hr style="margin-bottom:20px; opacity:0.2">
            <!-- On ajoute le sparkle ici -->
            <p style="font-size:1.2rem; margin-bottom:20px;">${sparkle}${currentCard.quiz.q}</p>
            <div id="quiz-interaction-zone"></div>
        </div>`;

    const zone = document.getElementById('quiz-interaction-zone');



        if (trainingSession.isReviewMode) {
    // MODE AIDE : On affiche la réponse avec le nouveau style rouge pâle
    zone.innerHTML = `
        <div class="feedback help-mode" style="display:block; margin-bottom:15px;">
            La réponse était : <strong>${currentCard.quiz.a}</strong>
        </div>
        <div class="notion-box">
            <strong>📖 Aide :</strong><br>
            ${currentCard.content || "Consultez votre cours pour plus de détails."}
        </div>
        <button class="action-btn" onclick="nextQuestion('${chapterTitle}')">Question suivante ➔</button>
        `;
        } else {

        // MODE QUESTION : On affiche les inputs ou le QCM
        if (currentCard.type === 'qcm' && currentCard.options && currentCard.options.length > 0) {
            let qcmHTML = `<div style="display:grid; gap:10px; margin-bottom:20px;">`;
            currentCard.options.forEach(opt => {
                qcmHTML += `<button class="action-btn" style="background:white; color:var(--primary); border:2px solid var(--primary);" onclick="checkFullQuiz('${currentCard.quiz.a}', '${chapterTitle}', '${opt}')">${opt}</button>`;
            });
            qcmHTML += `</div>`;
            zone.innerHTML = qcmHTML;
         } else {
            zone.innerHTML = `
                <input type="text" id="user-answer" placeholder="Votre réponse...">
                <button class="action-btn" onclick="checkFullQuiz('${currentCard.quiz.a}', '${chapterTitle}')">Valider</button>
                <div id="feedback" class="feedback"></div>
            `;
            }
        }
        if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise([container]).catch((err) => console.log(err));
        }
    }

function showFinalScore() {    // Affiche le score final proprement
    const container = document.getElementById('content-area');
    container.innerHTML = `
        <div class="card" style="text-align:center; padding: 3rem 2rem;">
            <div style="font-size: 4rem; margin-bottom: 10px;">🎉</div>
            <h2 style="font-size: 2.2rem; color: var(--primary); margin-bottom: 10px;">Session terminée !</h2>
            
            <p style="font-size: 1.2rem; color: var(--text-muted); margin-bottom: 30px;">
                Ton résultat final :
            </p>
            
            <div style="background: var(--bg); padding: 20px; border-radius: var(--radius); margin-bottom: 40px; display: inline-block; min-width: 200px;">
                <span style="font-size: 3rem; font-weight: 800; color: var(--secondary);">
                    ${trainingSession.score} <span style="font-size: 1.5rem; color: var(--text-muted);">/</span> ${trainingSession.totalAnswered}
                </span>
            </div>

            <div style="display: block;">
                <button class="action-btn" onclick="resetApp()" style="max-width: 250px; margin: 0 auto;">
                    Retour au menu principal
                </button>
            </div>
        </div>
    `;
}


  // 6. LOGIQUE DES CHAPITRES ET QUIZ (Launch, Check, ShowCourse)

    function checkMiniQuiz(correctAnswer) {
        const input = document.getElementById('mini-quiz-answer');
        const feedback = document.getElementById('mini-quiz-feedback');
        
        if (!input || !feedback) return;

        // Utilisation de votre fonction de comparaison robuste qui gère le LaTeX et les décimaux
        if (compareAnswers(input.value, correctAnswer)) {
            feedback.innerText = "Bravo ! ✅";
            feedback.className = "feedback success";
        } else {
            feedback.innerText = "Réessaie encore ! ❌";
            feedback.className = "feedback error";
        }
    }


   function checkFullQuiz(correctAnswer, identifier, userAnsInput = null) {
    let userAns = "";

    // 1. Si c'est un QCM (on a reçu la valeur directement du bouton)
    if (userAnsInput !== null && userAnsInput !== undefined) {
        userAns = userAnsInput;
    } else {
        // 2. Sinon, on cherche l'input texte dans le DOM
        // On cherche les deux IDs possibles pour couvrir les deux modes
        const inputEl = document.getElementById('user-answer') || document.getElementById('local-user-answer');
        userAns = inputEl ? inputEl.value : "";
    }

    trainingSession.totalAnswered++;

    if (compareAnswers(userAns, correctAnswer)) {
        trainingSession.score++;
        // Navigation selon le mode
        if (identifier.startsWith('quiz-area-')) {
            nextLocalQuestion(identifier);
        } else {
            nextQuestion(identifier);
        }
    } else {
        trainingSession.isReviewMode = true;
        // Affichage de l'aide selon le mode
        if (identifier.startsWith('quiz-area-')) {
            renderInjectedQuiz(document.getElementById(identifier), trainingSession.currentCards, identifier);
        } else {
            displayTrainingQuestion(identifier);
        }
    }
}




    function nextQuestion(chapterTitle) {      // Passe à la question suivante ou finit la session
        trainingSession.currentIndex++;
        trainingSession.isReviewMode = false; // Reset le mode aide pour la prochaine question
        displayTrainingQuestion(chapterTitle);
    }



    function showCourse(chapterTitle) {
        setMode('cours');
        const levelData = data.find(item => item.name === currentLevel);
        const chapter = levelData.themes.flatMap(g => g.chapters).find(c => c.title === chapterTitle);
            
        if (chapter) {
            launchChapter(chapter);
        }
    }

    function applyAutomaticNumbering(container) {
    // On définit les compteurs pour chaque niveau
    let counters = {
        h2: 0,
        h3: 0,
        h4: 0
    };

    /**
     * Fonction récursive qui parcourt tous les éléments du conteneur
     * @param {HTMLElement} element - L'élément actuel à analyser
     */
    function traverse(element) {
        // On vérifie si l'élément est un titre que nous voulons numéroter
        const tagName = element.tagName.toLowerCase();

        if (tagName === 'h2' || tagName === 'h3' || tagName === 'h4') {
            
            if (tagName === 'h2') {
                counters.h2++;      // Incrémente H2
                counters.h3 = 0;    // Réinitialise H3
                counters.h4 = 0;    // Réinitialise H4
                
                const span = document.createElement('span');
                span.className = 'auto-number';
                span.innerText = counters.h2 + ". ";
                element.prepend(span);

            } else if (tagName === 'h3') {
                counters.h3++;      // Incrémente H3
                counters.h4 = 0;    // Réinitialise H4
                
                const span = document.createElement('span');
                span.className = 'auto-number';
                span.innerText = counters.h2 + "." + counters.h3 + ". ";
                element.prepend(span);

            } else if (tagName === 'h4') {
                counters.h4++;      // Incrémente H4
                
                const span = document.createElement('span');
                span.className = 'auto-number';
                span.innerText = counters.h2 + "." + counters.h3 + "." + counters.h4 + ". ";
                element.prepend(span);
            }
        }

        // On parcourt ensuite tous les enfants de l'élément (récursion)
        // Cela permet de trouver des titres même s'ils sont dans une <div> ou <section>
        for (let i = 0; i < element.children.length; i++) {
            traverse(element.children[i]);
        }
    }

    // On lance la traversée à partir du conteneur principal de la carte
    traverse(container);
}

function launchLocalQuiz(containerId, questions) {
    // 1. SI UN AUTRE QUIZ EST DÉJÀ OUVERT : On le ferme d'abord
    if (activeInjectedQuizId && activeInjectedQuizId !== containerId) {
        const oldContainer = document.getElementById(activeInjectedQuizId);
        if (oldContainer) {
            oldContainer.innerHTML = ""; 
            const oldBtn = document.querySelector(`[data-quiz-target="${activeInjectedQuizId}"]`);
            if(oldBtn) oldBtn.innerText = "Ai-je bien compris ?";
        }
    }

    // 2. On définit le nouveau quiz comme étant l'ID actif
    activeInjectedQuizId = containerId;
    const targetContainer = document.getElementById(containerId);
    if (!targetContainer) return;

    // 3. Initialisation de la session (Reset complet)
    trainingSession.score = 0;
    trainingSession.totalAnswered = 0;
    trainingSession.currentIndex = 0;
    trainingSession.isReviewMode = false;
    trainingSession.currentCards = [...questions].sort(() => Math.random() - 0.5);

    // 4. Mise à jour du bouton pour l'afficher en mode "Masquer"
    const btn = document.querySelector(`[data-quiz-target="${containerId}"]`);
    if(btn) btn.innerText = "Masquer le quizz";

    // 5. Rendu initial
    renderInjectedQuiz(targetContainer, questions, containerId);
}





function startQuizFromButton(containerId, quizKey) {
    if (activeInjectedQuizId === containerId) {
        const targetContainer = document.getElementById(containerId);
        targetContainer.innerHTML = "";
        activeInjectedQuizId = null;
        const btn = document.querySelector(`[data-quiz-target="${containerId}"]`);
        if(btn) btn.innerText = "Ai-je bien compris ?";
        return;
    }

    // CORRECTION : On force la conversion de quizKey en String pour correspondre à allLocalQuestions
    const stringKey = String(quizKey);
    const selectedQuestions = allLocalQuestions[stringKey]; 
    
    if (selectedQuestions) {
        // ── GAMIFICATION : démarre le chronomètre pour le suivi élève ──────
        // Le titre du chapitre est récupéré depuis le titre affiché en haut
        // de la carte de cours (toujours un <h1>, voir launchChapter), avec
        // h2/h3/.chapter-title en repli pour d'autres contextes éventuels.
        const cardEl = document.querySelector(`[data-quiz-target="${containerId}"]`)?.closest('.card');
        const chapterTitleEl = cardEl?.querySelector('h1, h2, h3, .chapter-title');
        const chapterTitle = chapterTitleEl ? chapterTitleEl.textContent.trim() : stringKey;

        if (typeof trackerStartQuiz === 'function') {
            trackerStartQuiz(stringKey, chapterTitle, currentLevel || '');
        }

        launchLocalQuiz(containerId, selectedQuestions);
    } else {
        console.error("Aucun quiz trouvé pour la clé : " + stringKey);
    }
}

// L'animation de balance pour les équations
let state = 0; // 0: équilibre, 1: penché à gauche, 2: équilibré après ajout

    function addWeight() {
        const beam = document.getElementById('balance-beam');
        if (state === 0) {
            // On fait pencher la balance vers la gauche (rotation de -15 degrés par exemple)
            beam.style.transform = "rotate(-15deg)";
            state = 1;
        } else if (state === 1) {
            // On remet la balance droite
            beam.style.transform = "rotate(0deg)";
            state = 2;
        }
    }

    function resetBalance() {
        const beam = document.getElementById('balance-beam');
        beam.style.transform = "rotate(0deg)";
        state = 0;
    }
