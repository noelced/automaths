// ============================================================
// data/official/officialData_5eme_chapitre8.js
// Niveau : 5ème — Thème : ESPACE ET GÉOMÉTRIE
// Chapitre 8 : Transformations
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.
// NOTE : les codes des quiz ("btn-check-understanding") sont des
// identifiants prévisionnels (58xxx) à créer/associer dans la
// banque de quiz du site avant mise en ligne.
// Cette version s'appuie notamment sur les « Attendus de fin
// d'année de 5e » (rubrique Espace et géométrie > Comprendre
// l'effet de quelques transformations sur les figures
// géométriques / Utiliser les notions de géométrie plane pour
// démontrer) fournis par l'enseignant.

var chapterData_5eme_8 = {
    themeName: "ESPACE ET GÉOMÉTRIE",
    chapter: {
        id: 8,
        title: "Transformations",
        eleve: "non",
        content: `
                            <div class="course-container">
                                <!-- SECTION : OBJECTIFS -->
                                <section class="course-section">
                                    <p><strong>Objectifs :</strong></p>
                                    <ul>
                                        <li>Je révise la symétrie axiale : reconnaître et construire le symétrique d'une figure par rapport à un axe</li>
                                        <li>Je sais définir le demi-tour, ou symétrie centrale</li>
                                        <li>Je connais les propriétés du demi-tour (conservation des longueurs, des angles, du parallélisme)</li>
                                        <li>Je sais construire l'image d'une figure par symétrie centrale</li>
                                        <li>Je sais identifier des symétries dans des frises, des pavages et des rosaces</li>
                                    </ul>
                                </section>

                                <!-- SECTION : RAPPEL SYMÉTRIE AXIALE -->
                                <section class="course-section">
                                    <h2 class="section-title">Rappel : la symétrie axiale</h2>
                                    <div class="notion-box">
                                        <p>Deux points $A$ et $A'$ sont <strong>symétriques par rapport à une droite $(d)$</strong> lorsque $(d)$ est la <strong>médiatrice</strong> du segment $[AA']$ : elle passe par le milieu de $[AA']$ et lui est <strong>perpendiculaire</strong>.</p>
                                    </div>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" style="max-width:440px; display:block; margin:0 auto; font-family:sans-serif;">
<line x1="0" y1="0" x2="0" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="330" y1="0" x2="330" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="360" y1="0" x2="360" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="360" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="360" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="360" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="360" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="360" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="360" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="360" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="180" stroke="#B5651D" stroke-width="3"/>
<text x="188" y="16" font-size="14" fill="#B5651D" font-weight="bold">axe (d)</text>
<polygon points="60,120 120,120 90,60" fill="none" stroke="#2E5C8A" stroke-width="2.5"/>
<polygon points="300,120 240,120 270,60" fill="none" stroke="#2F7D3C" stroke-width="2.5"/>
<line x1="60" y1="120" x2="300" y2="120" stroke="#888" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="120.0" y1="115" x2="120.0" y2="125" stroke="#888" stroke-width="1.3"/>
<line x1="240.0" y1="115" x2="240.0" y2="125" stroke="#888" stroke-width="1.3"/>
<line x1="120" y1="120" x2="240" y2="120" stroke="#888" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="150.0" y1="115" x2="150.0" y2="125" stroke="#888" stroke-width="1.3"/>
<line x1="210.0" y1="115" x2="210.0" y2="125" stroke="#888" stroke-width="1.3"/>
<line x1="90" y1="60" x2="270" y2="60" stroke="#888" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="135.0" y1="55" x2="135.0" y2="65" stroke="#888" stroke-width="1.3"/>
<line x1="225.0" y1="55" x2="225.0" y2="65" stroke="#888" stroke-width="1.3"/>
<circle cx="60" cy="120" r="3" fill="#2E5C8A"/>
<text x="46" y="134" font-size="14" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="120" cy="120" r="3" fill="#2E5C8A"/>
<text x="106" y="134" font-size="14" fill="#2E5C8A" font-weight="bold">B</text>
<circle cx="90" cy="60" r="3" fill="#2E5C8A"/>
<text x="76" y="52" font-size="14" fill="#2E5C8A" font-weight="bold">C</text>
<circle cx="300" cy="120" r="3" fill="#2F7D3C"/>
<text x="310" y="134" font-size="14" fill="#2F7D3C" font-weight="bold">A'</text>
<circle cx="240" cy="120" r="3" fill="#2F7D3C"/>
<text x="250" y="134" font-size="14" fill="#2F7D3C" font-weight="bold">B'</text>
<circle cx="270" cy="60" r="3" fill="#2F7D3C"/>
<text x="280" y="52" font-size="14" fill="#2F7D3C" font-weight="bold">C'</text>
</svg>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Construire le symétrique d'un point sur un quadrillage
                                        <ul>
                                            <li>On compte le nombre de carreaux qui séparent le point de l'axe, en suivant une ligne perpendiculaire à l'axe.</li>
                                            <li>On reporte le même nombre de carreaux de l'autre côté de l'axe, sur la même ligne perpendiculaire.</li>
                                        </ul>
                                    </div>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> cette méthode fonctionne quelle que soit l'orientation de l'axe sur le quadrillage : vertical, horizontal, ou même en diagonale !
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-TRANSaxialerappel"
                                        onclick="startQuizFromButton('quiz-area-TRANSaxialerappel', '58101')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-TRANSaxialerappel"></div>
                                </section>

                                <!-- SECTION : DÉCOUVRIR LA SYMÉTRIE CENTRALE -->
                                <section class="course-section">
                                    <h2 class="section-title">Découvrir la symétrie centrale (le demi-tour)</h2>
                                    <div class="notion-box">
                                        <p>Deux points $A$ et $A'$ sont <strong>symétriques par rapport à un point $O$</strong> lorsque $O$ est le <strong>milieu</strong> du segment $[AA']$. On dit aussi que $A'$ est l'image de $A$ par la <strong>symétrie centrale</strong> de centre $O$.</p>
                                    </div>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" style="max-width:380px; display:block; margin:0 auto; font-family:sans-serif;">
<line x1="70" y1="160" x2="350" y2="60" stroke="#2E5C8A" stroke-width="2.5"/>
<line x1="137.6456452210129" y1="128.40780661883613" x2="142.3543547789871" y2="141.59219338116387" stroke="#1A1A1A" stroke-width="2"/>
<line x1="277.6456452210129" y1="78.40780661883613" x2="282.3543547789871" y2="91.59219338116387" stroke="#1A1A1A" stroke-width="2"/>
<circle cx="70" cy="160" r="4.5" fill="#2E5C8A"/>
<circle cx="210" cy="110" r="4.5" fill="#B5651D"/>
<circle cx="350" cy="60" r="4.5" fill="#2F7D3C"/>
<text x="50" y="168" font-size="16" fill="#2E5C8A" font-weight="bold">A</text>
<text x="202" y="134" font-size="16" fill="#B5651D" font-weight="bold">O</text>
<text x="362" y="64" font-size="16" fill="#2F7D3C" font-weight="bold">A'</text>
</svg>
                                    </div>
                                    <div class="notion-box">
                                        <p>On appelle aussi cette transformation le <strong>demi-tour</strong> de centre $O$ : c'est comme si l'on faisait pivoter la figure d'un <strong>demi-tour</strong> (soit $180°$) autour du point $O$.</p>
                                    </div>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> les points $A$, $O$ et $A'$ sont toujours <strong>alignés</strong>, et $O$ est équidistant de $A$ et de $A'$ : $OA = OA'$.
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-TRANSdefinir"
                                        onclick="startQuizFromButton('quiz-area-TRANSdefinir', '58201')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-TRANSdefinir"></div>
                                </section>

                                <!-- SECTION : PROPRIÉTÉS -->
                                <section class="course-section">
                                    <h2 class="section-title">Les propriétés du demi-tour</h2>
                                    <div class="notion-box">
                                        <p>La symétrie centrale <strong>conserve</strong> :</p>
                                        <ul>
                                            <li>les <strong>longueurs</strong> : l'image d'un segment est un segment de même longueur ;</li>
                                            <li>les <strong>angles</strong> : l'image d'un angle est un angle de même mesure ;</li>
                                            <li>le <strong>parallélisme</strong> : l'image d'une droite est une droite qui lui est <strong>parallèle</strong> ;</li>
                                            <li>les <strong>aires</strong> : l'image d'une figure a la même aire que la figure de départ.</li>
                                        </ul>
                                    </div>
                                    <p class="indent-text">Autrement dit, l'image d'une figure par symétrie centrale est une figure <strong>superposable</strong> à la figure de départ (même forme, mêmes dimensions), mais elle a « tourné » d'un demi-tour.</p>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:440px; display:block; margin:0 auto; font-family:sans-serif;">
<line x1="0" y1="0" x2="0" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="330" y1="0" x2="330" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="360" y1="0" x2="360" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="360" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="360" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="360" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="360" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="360" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="360" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="360" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="360" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="360" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="210" x2="300" y2="30" stroke="#999" stroke-width="1.2" stroke-dasharray="4,3"/>
<line x1="150" y1="210" x2="210" y2="30" stroke="#999" stroke-width="1.2" stroke-dasharray="4,3"/>
<line x1="90" y1="150" x2="270" y2="90" stroke="#999" stroke-width="1.2" stroke-dasharray="4,3"/>
<polygon points="60,210 150,210 90,150" fill="none" stroke="#2E5C8A" stroke-width="2.5"/>
<polygon points="300,30 210,30 270,90" fill="none" stroke="#2F7D3C" stroke-width="2.5"/>
<circle cx="180" cy="120" r="4.5" fill="#B5651D"/>
<text x="188" y="112" font-size="15" fill="#B5651D" font-weight="bold">O</text>
<circle cx="60" cy="210" r="3.5" fill="#2E5C8A"/>
<text x="44" y="224" font-size="14" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="150" cy="210" r="3.5" fill="#2E5C8A"/>
<text x="158" y="228" font-size="14" fill="#2E5C8A" font-weight="bold">B</text>
<circle cx="90" cy="150" r="3.5" fill="#2E5C8A"/>
<text x="74" y="144" font-size="14" fill="#2E5C8A" font-weight="bold">C</text>
<circle cx="300" cy="30" r="3.5" fill="#2F7D3C"/>
<text x="308" y="22" font-size="14" fill="#2F7D3C" font-weight="bold">A'</text>
<circle cx="210" cy="30" r="3.5" fill="#2F7D3C"/>
<text x="190" y="20" font-size="14" fill="#2F7D3C" font-weight="bold">B'</text>
<circle cx="270" cy="90" r="3.5" fill="#2F7D3C"/>
<text x="278" y="104" font-size="14" fill="#2F7D3C" font-weight="bold">C'</text>
</svg>
                                    </div>
                                    <p class="indent-text">Sur la figure ci-dessus, le triangle $A'B'C'$ est l'image du triangle $ABC$ par la symétrie centrale de centre $O$ : on remarque que $[A'B']$ est parallèle à $[AB]$, que $[B'C']$ est parallèle à $[BC]$, et que les deux triangles ont la même taille.</p>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> ces propriétés (conservation des longueurs, des angles et du parallélisme) sont très utiles pour <strong>démontrer</strong> qu'une droite est parallèle à une autre, ou qu'une longueur ou un angle a une valeur donnée, sans avoir besoin de la mesurer.
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-TRANSproprietes"
                                        onclick="startQuizFromButton('quiz-area-TRANSproprietes', '58301')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-TRANSproprietes"></div>
                                </section>

                                <!-- SECTION : CONSTRUIRE UNE IMAGE -->
                                <section class="course-section">
                                    <h2 class="section-title">Construire l'image d'une figure par symétrie centrale</h2>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Construire l'image d'un triangle $ABC$ par la symétrie centrale de centre $O$
                                        <ul>
                                            <li>Pour chaque sommet (par exemple $A$), on trace la <strong>droite $(AO)$</strong>.</li>
                                            <li>On place le point $A'$ sur cette droite, <strong>de l'autre côté</strong> de $O$, tel que $OA' = OA$ (à la règle graduée, ou au compas).</li>
                                            <li>On recommence pour les points $B$ et $C$, afin d'obtenir $B'$ et $C'$.</li>
                                            <li>On relie $A'$, $B'$ et $C'$ pour obtenir le triangle image.</li>
                                        </ul>
                                    </div>
                                    <div class="notion-box">
                                        <p>Sur un <strong>quadrillage</strong>, la construction est plus rapide : pour chaque point, on compte le nombre de carreaux qui le séparent de $O$ horizontalement et verticalement, puis on reporte le <strong>même déplacement</strong> de l'autre côté de $O$.</p>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-TRANSconstruire"
                                        onclick="startQuizFromButton('quiz-area-TRANSconstruire', '58401')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-TRANSconstruire"></div>
                                </section>

                                <!-- SECTION : IDENTIFIER DES SYMÉTRIES -->
                                <section class="course-section">
                                    <h2 class="section-title">Identifier des symétries dans l'art et la nature</h2>
                                    <div class="notion-box">
                                        <p>On retrouve des symétries axiales et centrales tout autour de nous :</p>
                                        <ul>
                                            <li>dans les <strong>frises</strong> (motifs qui se répètent le long d'une bande) ;</li>
                                            <li>dans les <strong>pavages</strong> (motifs qui recouvrent tout le plan sans trou ni chevauchement) ;</li>
                                            <li>dans les <strong>rosaces</strong> (motifs qui tournent autour d'un centre).</li>
                                        </ul>
                                    </div>
                                    <p class="indent-text">Pour identifier une symétrie centrale dans un motif, on cherche un point autour duquel le motif « tourne » d'un demi-tour sans changer d'aspect. Pour identifier une symétrie axiale, on cherche une droite le long de laquelle le motif se replie parfaitement sur lui-même.</p>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-TRANSidentifier"
                                        onclick="startQuizFromButton('quiz-area-TRANSidentifier', '58501')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-TRANSidentifier"></div>
                                </section>

                                <!-- SECTION : POUR ALLER PLUS LOIN -->
                                <section class="course-section">
                                    <h2 class="section-title">Pour aller plus loin (culture mathématique)</h2>
                                    <div class="notion-box">
                                        <p>Les artisans et architectes du <strong>Moyen Âge</strong> maîtrisaient déjà parfaitement les symétries : les <strong>rosaces</strong> des cathédrales gothiques et les <strong>pavages géométriques</strong> de l'art islamique (notamment dans l'Alhambra de Grenade) utilisent des symétries axiales et centrales d'une grande complexité, obtenues sans aucun outil mathématique moderne.</p>
                                        <p>Ces symétries se retrouvent aussi partout dans la <strong>nature</strong> : les branches d'un <strong>flocon de neige</strong> présentent une symétrie centrale d'ordre $6$, les <strong>alvéoles</strong> d'une ruche d'abeilles s'organisent selon un pavage hexagonal très régulier, et de nombreuses <strong>fleurs</strong> présentent plusieurs axes de symétrie autour de leur centre.</p>
                                    </div>
                                </section>
                            </div>
                        `
    }
};
