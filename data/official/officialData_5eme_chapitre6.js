// ============================================================
// data/official/officialData_5eme_chapitre6.js
// Niveau : 5ème — Thème : ESPACE ET GÉOMÉTRIE
// Chapitre 6 : Repérage sur une droite et dans le plan
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.
// NOTE : les codes des quiz ("btn-check-understanding") sont des
// identifiants prévisionnels (56xxx) à créer/associer dans la
// banque de quiz du site avant mise en ligne.
// Cette version s'appuie notamment sur les « Attendus de fin
// d'année de 5e » (rubrique Espace et géométrie > Représenter
// l'espace) fournis par l'enseignant.

var chapterData_5eme_6 = {
    themeName: "ESPACE ET GÉOMÉTRIE",
    chapter: {
        id: 6,
        title: "Repérage sur une droite et dans le plan",
        eleve: "non",
        content: `
                            <div class="course-container">
                                <!-- SECTION : OBJECTIFS (masquée : ne doit pas s'afficher sur la leçon) -->
                                <!--
                                <section class="course-section">
                                    <p><strong>Objectifs :</strong></p>
                                    <ul>
                                        <li>Sur une droite graduée, je sais lire l'abscisse d'un point donné</li>
                                        <li>Sur une droite graduée, je sais placer un point d'abscisse donnée</li>
                                        <li>Dans le plan muni d'un repère orthogonal, je sais lire les coordonnées d'un point donné</li>
                                        <li>Dans le plan muni d'un repère orthogonal, je sais placer un point de coordonnées données</li>
                                    </ul>
                                </section>
                                -->

                                <!-- SECTION : DROITE GRADUÉE -->
                                <section class="course-section">
                                    <h2 class="section-title">Se repérer sur une droite graduée</h2>
                                    <h3 class="section-title">Lire une abscisse</h3>
                                    <div class="notion-box">
                                        <p>Rappel : sur une <strong>droite graduée</strong>, chaque point est associé à un nombre appelé son <strong>abscisse</strong>. Cette abscisse peut être un nombre <strong>décimal</strong>, positif ou négatif.</p>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Lire l'abscisse d'un point sur une droite graduée
                                        <ul>
                                            <li>On repère la position de l'origine ($0$) et l'unité choisie.</li>
                                            <li>Si l'unité choisie n'est pas visible au premier coup d'œil il faut compter les graduations et trouver combien vaut <strong>une</strong> graduation.</li>
                                            <li>On compte le nombre d'unités (et de fractions d'unité s'il le faut) entre l'origine et le point, en tenant compte du sens (à droite : positif, à gauche : négatif).</li>
                                        </ul>
                                    </div>
                                    <p class="indent-text">Par exemple, un point situé $2,5$ unités à droite de l'origine a pour abscisse $2,5$ ; un point situé $1,5$ unité à gauche de l'origine a pour abscisse $-1,5$.</p>

                                    <p class="indent-text"><strong>Exemple 1</strong> — droite graduée <strong>de 1 en 1</strong>, avec des nombres relatifs (positifs et négatifs) :</p>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 464 170" xmlns="http://www.w3.org/2000/svg" style="max-width:464px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="arrL1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="90" x2="464" y2="90" stroke="#333" stroke-width="2" marker-end="url(#arrL1)"/>
<line x1="40" y1="82" x2="40" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="40" y="112" font-size="12" fill="#333" text-anchor="middle">-6</text>
<line x1="72" y1="82" x2="72" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="72" y="112" font-size="12" fill="#333" text-anchor="middle">-5</text>
<line x1="104" y1="82" x2="104" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="104" y="112" font-size="12" fill="#333" text-anchor="middle">-4</text>
<line x1="136" y1="82" x2="136" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="136" y="112" font-size="12" fill="#333" text-anchor="middle">-3</text>
<line x1="168" y1="82" x2="168" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="168" y="112" font-size="12" fill="#333" text-anchor="middle">-2</text>
<line x1="200" y1="82" x2="200" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="200" y="112" font-size="12" fill="#333" text-anchor="middle">-1</text>
<line x1="232" y1="82" x2="232" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="232" y="112" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="264" y1="82" x2="264" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="264" y="112" font-size="12" fill="#333" text-anchor="middle">1</text>
<line x1="296" y1="82" x2="296" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="296" y="112" font-size="12" fill="#333" text-anchor="middle">2</text>
<line x1="328" y1="82" x2="328" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="328" y="112" font-size="12" fill="#333" text-anchor="middle">3</text>
<line x1="360" y1="82" x2="360" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="360" y="112" font-size="12" fill="#333" text-anchor="middle">4</text>
<line x1="392" y1="82" x2="392" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="392" y="112" font-size="12" fill="#333" text-anchor="middle">5</text>
<line x1="424" y1="82" x2="424" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="424" y="112" font-size="12" fill="#333" text-anchor="middle">6</text>
<circle cx="312" cy="90" r="4.5" fill="#2E5C8A"/>
<text x="312" y="76" font-size="13" fill="#2E5C8A" font-weight="bold" text-anchor="middle">A</text>
<circle cx="184" cy="90" r="4.5" fill="#B5651D"/>
<text x="184" y="76" font-size="13" fill="#B5651D" font-weight="bold" text-anchor="middle">B</text>
<circle cx="72" cy="90" r="4.5" fill="#1F7A4C"/>
<text x="72" y="128" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">C</text>
</svg>
                                    </div>
                                    <p class="indent-text">Ici, $A$ a pour abscisse $2,5$, $B$ a pour abscisse $-1,5$ et $C$ a pour abscisse $-5$.</p>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> lorsque $A$ a pour abscisse $2,5$, on utilise la notation $A(2,5)$.
                                    </div>

                                    <p class="indent-text"><strong>Exemple 2</strong> — droite graduée <strong>de 2 en 2</strong> (les nombres relatifs peuvent aussi être pairs et plus grands) :</p>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 392 170" xmlns="http://www.w3.org/2000/svg" style="max-width:392px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="arrL2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="90" x2="392" y2="90" stroke="#333" stroke-width="2" marker-end="url(#arrL2)"/>
<line x1="40" y1="82" x2="40" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="40" y="112" font-size="12" fill="#333" text-anchor="middle">-12</text>
<line x1="66" y1="82" x2="66" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="66" y="112" font-size="12" fill="#333" text-anchor="middle">-10</text>
<line x1="92" y1="82" x2="92" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="92" y="112" font-size="12" fill="#333" text-anchor="middle">-8</text>
<line x1="118" y1="82" x2="118" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="118" y="112" font-size="12" fill="#333" text-anchor="middle">-6</text>
<line x1="144" y1="82" x2="144" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="144" y="112" font-size="12" fill="#333" text-anchor="middle">-4</text>
<line x1="170" y1="82" x2="170" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="170" y="112" font-size="12" fill="#333" text-anchor="middle">-2</text>
<line x1="196" y1="82" x2="196" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="196" y="112" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="222" y1="82" x2="222" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="222" y="112" font-size="12" fill="#333" text-anchor="middle">2</text>
<line x1="248" y1="82" x2="248" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="248" y="112" font-size="12" fill="#333" text-anchor="middle">4</text>
<line x1="274" y1="82" x2="274" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="274" y="112" font-size="12" fill="#333" text-anchor="middle">6</text>
<line x1="300" y1="82" x2="300" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="300" y="112" font-size="12" fill="#333" text-anchor="middle">8</text>
<line x1="326" y1="82" x2="326" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="326" y="112" font-size="12" fill="#333" text-anchor="middle">10</text>
<line x1="352" y1="82" x2="352" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="352" y="112" font-size="12" fill="#333" text-anchor="middle">12</text>
<circle cx="92" cy="90" r="4.5" fill="#2E5C8A"/>
<text x="92" y="76" font-size="13" fill="#2E5C8A" font-weight="bold" text-anchor="middle">D</text>
<circle cx="274" cy="90" r="4.5" fill="#B5651D"/>
<text x="274" y="76" font-size="13" fill="#B5651D" font-weight="bold" text-anchor="middle">E</text>
<circle cx="144" cy="90" r="4.5" fill="#1F7A4C"/>
<text x="144" y="128" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">F</text>
</svg>
                                    </div>
                                    <p class="indent-text">Ici, la graduation avance de $2$ en $2$ : $D(-8)$, $E(6)$ et $F(-4)$.</p>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-REPlireabscisse"
                                        onclick="startQuizFromButton('quiz-area-REPlireabscisse', '56111')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-REPlireabscisse"></div>

                                    <h3 class="section-title">Placer un point d'abscisse donnée</h3>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Placer le point $A$ d'abscisse $-3,5$
                                        <ul>
                                            <li>On repère l'origine ($0$) et l'unité.</li>
                                            <li>Comme $-3,5$ est négatif, on se déplace vers la <strong>gauche</strong> de l'origine.</li>
                                            <li>On compte $3,5$ unités vers la gauche, et on place le point $A$ à cet endroit.</li>
                                        </ul>
                                    </div>

                                    <p class="indent-text"><strong>Exemple 1</strong> — Place les points $G(0,4)$ ; $H(-0,7)$ ; $I(1,2)$ sur l'axe gradué ci-dessous</p>
                                    <p class="indent-text">Je cherche à savoir combien vaut une graduation : entre $0$ et $1$ il y a $10$ espaces donc une graduation vaut $1 : 10 = 0,1$.</p>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 860 170" xmlns="http://www.w3.org/2000/svg" style="max-width:520px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="arrL3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="90" x2="860" y2="90" stroke="#333" stroke-width="2" marker-end="url(#arrL3)"/>
<line x1="40" y1="82" x2="40" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="40" y="112" font-size="12" fill="#333" text-anchor="middle">-1,5</text>
<line x1="66" y1="82" x2="66" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="92" y1="82" x2="92" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="118" y1="82" x2="118" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="144" y1="82" x2="144" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="170" y1="82" x2="170" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="170" y="112" font-size="12" fill="#333" text-anchor="middle">-1,0</text>
<line x1="196" y1="82" x2="196" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="222" y1="82" x2="222" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="248" y1="82" x2="248" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="274" y1="82" x2="274" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="300" y1="82" x2="300" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="300" y="112" font-size="12" fill="#333" text-anchor="middle">-0,5</text>
<line x1="326" y1="82" x2="326" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="352" y1="82" x2="352" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="378" y1="82" x2="378" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="404" y1="82" x2="404" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="430" y1="82" x2="430" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="430" y="112" font-size="12" fill="#333" text-anchor="middle">0,0</text>
<line x1="456" y1="82" x2="456" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="482" y1="82" x2="482" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="508" y1="82" x2="508" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="534" y1="82" x2="534" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="560" y1="82" x2="560" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="560" y="112" font-size="12" fill="#333" text-anchor="middle">0,5</text>
<line x1="586" y1="82" x2="586" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="612" y1="82" x2="612" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="638" y1="82" x2="638" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="664" y1="82" x2="664" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="690" y1="82" x2="690" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="690" y="112" font-size="12" fill="#333" text-anchor="middle">1,0</text>
<line x1="716" y1="82" x2="716" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="742" y1="82" x2="742" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="768" y1="82" x2="768" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="794" y1="82" x2="794" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="820" y1="82" x2="820" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="820" y="112" font-size="12" fill="#333" text-anchor="middle">1,5</text>
<circle cx="534" cy="90" r="4.5" fill="#2E5C8A"/>
<text x="534" y="76" font-size="13" fill="#2E5C8A" font-weight="bold" text-anchor="middle">G</text>
<circle cx="248" cy="90" r="4.5" fill="#B5651D"/>
<text x="248" y="76" font-size="13" fill="#B5651D" font-weight="bold" text-anchor="middle">H</text>
<circle cx="742" cy="90" r="4.5" fill="#1F7A4C"/>
<text x="742" y="128" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">I</text>
</svg>
                                    </div>
                                    <p class="indent-text">Comme chaque intervalle vaut $0,1$ je compte $4$ intervalles vers la droite pour placer $G$, $7$ intervalles vers la gauche pour placer $H$ et $2$ intervalles après le $1$ pour placer $I$.</p>

                                    <p class="indent-text"><strong>Exemple 2</strong> — Place les points $J(0,05)$ ; $K(-0,07)$ ; $L(0,02)$ sur l'axe gradué ci-dessous</p>
                                    <p class="indent-text">Je cherche à savoir combien vaut une graduation : entre $0$ et $0,10$ il y a $10$ espaces donc une graduation vaut $0,10 : 10 = 0,01$.</p>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 680 170" xmlns="http://www.w3.org/2000/svg" style="max-width:520px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="arrL4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="90" x2="680" y2="90" stroke="#333" stroke-width="2" marker-end="url(#arrL4)"/>
<line x1="40" y1="82" x2="40" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="40" y="112" font-size="12" fill="#333" text-anchor="middle">-0,10</text>
<line x1="70" y1="82" x2="70" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="100" y1="82" x2="100" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="100" y="112" font-size="12" fill="#333" text-anchor="middle">-0,08</text>
<line x1="130" y1="82" x2="130" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="160" y1="82" x2="160" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="160" y="112" font-size="12" fill="#333" text-anchor="middle">-0,06</text>
<line x1="190" y1="82" x2="190" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="220" y1="82" x2="220" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="220" y="112" font-size="12" fill="#333" text-anchor="middle">-0,04</text>
<line x1="250" y1="82" x2="250" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="280" y1="82" x2="280" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="280" y="112" font-size="12" fill="#333" text-anchor="middle">-0,02</text>
<line x1="310" y1="82" x2="310" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="340" y1="82" x2="340" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="340" y="112" font-size="12" fill="#333" text-anchor="middle">0,00</text>
<line x1="370" y1="82" x2="370" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="400" y1="82" x2="400" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="400" y="112" font-size="12" fill="#333" text-anchor="middle">0,02</text>
<line x1="430" y1="82" x2="430" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="460" y1="82" x2="460" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="460" y="112" font-size="12" fill="#333" text-anchor="middle">0,04</text>
<line x1="490" y1="82" x2="490" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="520" y1="82" x2="520" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="520" y="112" font-size="12" fill="#333" text-anchor="middle">0,06</text>
<line x1="550" y1="82" x2="550" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="580" y1="82" x2="580" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="580" y="112" font-size="12" fill="#333" text-anchor="middle">0,08</text>
<line x1="610" y1="82" x2="610" y2="98" stroke="#333" stroke-width="1.3"/>
<line x1="640" y1="82" x2="640" y2="98" stroke="#333" stroke-width="1.3"/>
<text x="640" y="112" font-size="12" fill="#333" text-anchor="middle">0,10</text>
<circle cx="490" cy="90" r="4.5" fill="#2E5C8A"/>
<text x="490" y="76" font-size="13" fill="#2E5C8A" font-weight="bold" text-anchor="middle">J</text>
<circle cx="130" cy="90" r="4.5" fill="#B5651D"/>
<text x="130" y="76" font-size="13" fill="#B5651D" font-weight="bold" text-anchor="middle">K</text>
<circle cx="400" cy="90" r="4.5" fill="#1F7A4C"/>
<text x="400" y="128" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">L</text>
</svg>
                                    </div>
                                    <p class="indent-text">Comme chaque intervalle vaut $0,01$ je compte $5$ intervalles vers la droite pour placer $J$, $7$ intervalles vers la gauche pour placer $K$ et $2$ intervalles vers la droite pour placer $L$.</p>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-REPplacerabscisse"
                                        onclick="startQuizFromButton('quiz-area-REPplacerabscisse', '56121')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-REPplacerabscisse"></div>
                                </section>

                                <!-- SECTION : LE REPÈRE ORTHOGONAL -->
                                <section class="course-section">
                                    <h2 class="section-title">Se repérer dans le plan : le repère orthogonal</h2>
                                    <div class="notion-box">
                                        <p>Pour repérer un point dans le <strong>plan</strong> (et non plus seulement sur une droite), on utilise <strong>deux droites graduées perpendiculaires</strong> qui se coupent en un point appelé <strong>origine</strong> $O$ : c'est un <strong>repère orthogonal</strong>.</p>
                                        <ul>
                                            <li>La droite <strong>horizontale</strong> est l'<strong>axe des abscisses</strong>.</li>
                                            <li>La droite <strong>verticale</strong> est l'<strong>axe des ordonnées</strong>.</li>
                                        </ul>
                                    </div>
                                    <div class="notion-box">
                                        <p>Chaque point $M$ du plan est alors repéré par un <strong>couple de nombres</strong> $(x ; y)$ appelé les <strong>coordonnées</strong> de $M$ :</p>
                                        <ul>
                                            <li>$x$ est l'<strong>abscisse</strong> de $M$ (lue sur l'axe horizontal) ;</li>
                                            <li>$y$ est l'<strong>ordonnée</strong> de $M$ (lue sur l'axe vertical).</li>
                                        </ul>
                                    </div>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> l'ordre est important ! On écrit toujours l'abscisse <strong>en premier</strong>, puis l'ordonnée : $M(x ; y)$. L'origine $O$ a pour coordonnées $(0 ; 0)$.
                                    </div>
                                </section>

                                <!-- SECTION : LIRE DES COORDONNÉES -->
                                <section class="course-section">
                                    <h3 class="section-title">Lire les coordonnées d'un point donné</h3>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Lire les coordonnées d'un point $M$ placé dans le repère
                                        <ul>
                                            <li>On trace (mentalement ou au crayon) une ligne verticale passant par $M$ jusqu'à l'axe des abscisses : on lit l'<strong>abscisse</strong> de $M$.</li>
                                            <li>On trace une ligne horizontale passant par $M$ jusqu'à l'axe des ordonnées : on lit l'<strong>ordonnée</strong> de $M$.</li>
                                            <li>On écrit les coordonnées sous la forme $M(x ; y)$.</li>
                                        </ul>
                                    </div>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" style="max-width:420px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="400" stroke="#e0e0e0" stroke-width="1"/>
<line x1="40" y1="0" x2="40" y2="400" stroke="#e0e0e0" stroke-width="1"/>
<line x1="80" y1="0" x2="80" y2="400" stroke="#e0e0e0" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="400" stroke="#e0e0e0" stroke-width="1"/>
<line x1="160" y1="0" x2="160" y2="400" stroke="#e0e0e0" stroke-width="1"/>
<line x1="200" y1="0" x2="200" y2="400" stroke="#e0e0e0" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="400" stroke="#e0e0e0" stroke-width="1"/>
<line x1="280" y1="0" x2="280" y2="400" stroke="#e0e0e0" stroke-width="1"/>
<line x1="320" y1="0" x2="320" y2="400" stroke="#e0e0e0" stroke-width="1"/>
<line x1="360" y1="0" x2="360" y2="400" stroke="#e0e0e0" stroke-width="1"/>
<line x1="400" y1="0" x2="400" y2="400" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="400" x2="400" y2="400" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="360" x2="400" y2="360" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="320" x2="400" y2="320" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="280" x2="400" y2="280" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="240" x2="400" y2="240" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="200" x2="400" y2="200" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="160" x2="400" y2="160" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="120" x2="400" y2="120" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="80" x2="400" y2="80" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="40" x2="400" y2="40" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="0" x2="400" y2="0" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="200" x2="400" y2="200" stroke="#333" stroke-width="2" marker-end="url(#arrow)"/>
<line x1="200" y1="400" x2="200" y2="0" stroke="#333" stroke-width="2" marker-end="url(#arrow)"/>
<line x1="0" y1="196" x2="0" y2="204" stroke="#333" stroke-width="1.5"/>
<text x="0" y="218" font-size="13" fill="#333" text-anchor="middle">-5</text>
<line x1="40" y1="196" x2="40" y2="204" stroke="#333" stroke-width="1.5"/>
<text x="40" y="218" font-size="13" fill="#333" text-anchor="middle">-4</text>
<line x1="80" y1="196" x2="80" y2="204" stroke="#333" stroke-width="1.5"/>
<text x="80" y="218" font-size="13" fill="#333" text-anchor="middle">-3</text>
<line x1="120" y1="196" x2="120" y2="204" stroke="#333" stroke-width="1.5"/>
<text x="120" y="218" font-size="13" fill="#333" text-anchor="middle">-2</text>
<line x1="160" y1="196" x2="160" y2="204" stroke="#333" stroke-width="1.5"/>
<text x="160" y="218" font-size="13" fill="#333" text-anchor="middle">-1</text>
<line x1="240" y1="196" x2="240" y2="204" stroke="#333" stroke-width="1.5"/>
<text x="240" y="218" font-size="13" fill="#333" text-anchor="middle">1</text>
<line x1="280" y1="196" x2="280" y2="204" stroke="#333" stroke-width="1.5"/>
<text x="280" y="218" font-size="13" fill="#333" text-anchor="middle">2</text>
<line x1="320" y1="196" x2="320" y2="204" stroke="#333" stroke-width="1.5"/>
<text x="320" y="218" font-size="13" fill="#333" text-anchor="middle">3</text>
<line x1="360" y1="196" x2="360" y2="204" stroke="#333" stroke-width="1.5"/>
<text x="360" y="218" font-size="13" fill="#333" text-anchor="middle">4</text>
<line x1="400" y1="196" x2="400" y2="204" stroke="#333" stroke-width="1.5"/>
<text x="400" y="218" font-size="13" fill="#333" text-anchor="middle">5</text>
<line x1="196" y1="400" x2="204" y2="400" stroke="#333" stroke-width="1.5"/>
<text x="190" y="404" font-size="13" fill="#333" text-anchor="end">-5</text>
<line x1="196" y1="360" x2="204" y2="360" stroke="#333" stroke-width="1.5"/>
<text x="190" y="364" font-size="13" fill="#333" text-anchor="end">-4</text>
<line x1="196" y1="320" x2="204" y2="320" stroke="#333" stroke-width="1.5"/>
<text x="190" y="324" font-size="13" fill="#333" text-anchor="end">-3</text>
<line x1="196" y1="280" x2="204" y2="280" stroke="#333" stroke-width="1.5"/>
<text x="190" y="284" font-size="13" fill="#333" text-anchor="end">-2</text>
<line x1="196" y1="240" x2="204" y2="240" stroke="#333" stroke-width="1.5"/>
<text x="190" y="244" font-size="13" fill="#333" text-anchor="end">-1</text>
<line x1="196" y1="160" x2="204" y2="160" stroke="#333" stroke-width="1.5"/>
<text x="190" y="164" font-size="13" fill="#333" text-anchor="end">1</text>
<line x1="196" y1="120" x2="204" y2="120" stroke="#333" stroke-width="1.5"/>
<text x="190" y="124" font-size="13" fill="#333" text-anchor="end">2</text>
<line x1="196" y1="80" x2="204" y2="80" stroke="#333" stroke-width="1.5"/>
<text x="190" y="84" font-size="13" fill="#333" text-anchor="end">3</text>
<line x1="196" y1="40" x2="204" y2="40" stroke="#333" stroke-width="1.5"/>
<text x="190" y="44" font-size="13" fill="#333" text-anchor="end">4</text>
<line x1="196" y1="0" x2="204" y2="0" stroke="#333" stroke-width="1.5"/>
<text x="190" y="4" font-size="13" fill="#333" text-anchor="end">5</text>
<text x="190" y="218" font-size="13" fill="#333" text-anchor="end">0</text>
<text x="390" y="192" font-size="14" fill="#333" text-anchor="end">x</text>
<text x="212" y="14" font-size="14" fill="#333">y</text>
<line x1="320" y1="200" x2="320" y2="120" stroke="#2E5C8A" stroke-width="1.5" stroke-dasharray="4,3"/>
<line x1="200" y1="120" x2="320" y2="120" stroke="#2E5C8A" stroke-width="1.5" stroke-dasharray="4,3"/>
<circle cx="320" cy="120" r="4.5" fill="#B5651D"/>
<text x="330" y="112" font-size="15" fill="#B5651D" font-weight="bold">M(3 ; 2)</text>
</svg>
                                    </div>
                                    <p class="indent-text">Sur le graphique ci-dessus, le point $M$ a pour abscisse $3$ et pour ordonnée $2$ : on écrit $M(3 ; 2)$.</p>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> comme pour la droite graduée, l'abscisse et l'ordonnée peuvent être des nombres <strong>relatifs</strong> (positifs ou négatifs) selon la position du point par rapport à l'origine.
                                    </div>

                                    <p class="indent-text"><strong>Exemple 1</strong> — repère gradué <strong>de 1 en 1</strong> sur les deux axes, avec des points dans différentes zones du plan (nombres relatifs) :</p>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" style="max-width:360px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="arrP1x" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="arrP1y" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="360" stroke="#e0e0e0" stroke-width="1"/>
<line x1="36" y1="0" x2="36" y2="360" stroke="#e0e0e0" stroke-width="1"/>
<line x1="72" y1="0" x2="72" y2="360" stroke="#e0e0e0" stroke-width="1"/>
<line x1="108" y1="0" x2="108" y2="360" stroke="#e0e0e0" stroke-width="1"/>
<line x1="144" y1="0" x2="144" y2="360" stroke="#e0e0e0" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="360" stroke="#e0e0e0" stroke-width="1"/>
<line x1="216" y1="0" x2="216" y2="360" stroke="#e0e0e0" stroke-width="1"/>
<line x1="252" y1="0" x2="252" y2="360" stroke="#e0e0e0" stroke-width="1"/>
<line x1="288" y1="0" x2="288" y2="360" stroke="#e0e0e0" stroke-width="1"/>
<line x1="324" y1="0" x2="324" y2="360" stroke="#e0e0e0" stroke-width="1"/>
<line x1="360" y1="0" x2="360" y2="360" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="360" x2="360" y2="360" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="324" x2="360" y2="324" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="288" x2="360" y2="288" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="252" x2="360" y2="252" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="216" x2="360" y2="216" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="180" x2="360" y2="180" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="144" x2="360" y2="144" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="108" x2="360" y2="108" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="72" x2="360" y2="72" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="36" x2="360" y2="36" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="0" x2="360" y2="0" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="180" x2="360" y2="180" stroke="#333" stroke-width="2" marker-end="url(#arrP1x)"/>
<line x1="180" y1="360" x2="180" y2="0" stroke="#333" stroke-width="2" marker-end="url(#arrP1y)"/>
<line x1="0" y1="175" x2="0" y2="185" stroke="#333" stroke-width="1.2"/>
<text x="0" y="198" font-size="11" fill="#333" text-anchor="middle">-5</text>
<line x1="36" y1="175" x2="36" y2="185" stroke="#333" stroke-width="1.2"/>
<text x="36" y="198" font-size="11" fill="#333" text-anchor="middle">-4</text>
<line x1="72" y1="175" x2="72" y2="185" stroke="#333" stroke-width="1.2"/>
<text x="72" y="198" font-size="11" fill="#333" text-anchor="middle">-3</text>
<line x1="108" y1="175" x2="108" y2="185" stroke="#333" stroke-width="1.2"/>
<text x="108" y="198" font-size="11" fill="#333" text-anchor="middle">-2</text>
<line x1="144" y1="175" x2="144" y2="185" stroke="#333" stroke-width="1.2"/>
<text x="144" y="198" font-size="11" fill="#333" text-anchor="middle">-1</text>
<line x1="216" y1="175" x2="216" y2="185" stroke="#333" stroke-width="1.2"/>
<text x="216" y="198" font-size="11" fill="#333" text-anchor="middle">1</text>
<line x1="252" y1="175" x2="252" y2="185" stroke="#333" stroke-width="1.2"/>
<text x="252" y="198" font-size="11" fill="#333" text-anchor="middle">2</text>
<line x1="288" y1="175" x2="288" y2="185" stroke="#333" stroke-width="1.2"/>
<text x="288" y="198" font-size="11" fill="#333" text-anchor="middle">3</text>
<line x1="324" y1="175" x2="324" y2="185" stroke="#333" stroke-width="1.2"/>
<text x="324" y="198" font-size="11" fill="#333" text-anchor="middle">4</text>
<line x1="360" y1="175" x2="360" y2="185" stroke="#333" stroke-width="1.2"/>
<text x="360" y="198" font-size="11" fill="#333" text-anchor="middle">5</text>
<line x1="175" y1="360" x2="185" y2="360" stroke="#333" stroke-width="1.2"/>
<text x="172" y="364" font-size="11" fill="#333" text-anchor="end">-5</text>
<line x1="175" y1="324" x2="185" y2="324" stroke="#333" stroke-width="1.2"/>
<text x="172" y="328" font-size="11" fill="#333" text-anchor="end">-4</text>
<line x1="175" y1="288" x2="185" y2="288" stroke="#333" stroke-width="1.2"/>
<text x="172" y="292" font-size="11" fill="#333" text-anchor="end">-3</text>
<line x1="175" y1="252" x2="185" y2="252" stroke="#333" stroke-width="1.2"/>
<text x="172" y="256" font-size="11" fill="#333" text-anchor="end">-2</text>
<line x1="175" y1="216" x2="185" y2="216" stroke="#333" stroke-width="1.2"/>
<text x="172" y="220" font-size="11" fill="#333" text-anchor="end">-1</text>
<line x1="175" y1="144" x2="185" y2="144" stroke="#333" stroke-width="1.2"/>
<text x="172" y="148" font-size="11" fill="#333" text-anchor="end">1</text>
<line x1="175" y1="108" x2="185" y2="108" stroke="#333" stroke-width="1.2"/>
<text x="172" y="112" font-size="11" fill="#333" text-anchor="end">2</text>
<line x1="175" y1="72" x2="185" y2="72" stroke="#333" stroke-width="1.2"/>
<text x="172" y="76" font-size="11" fill="#333" text-anchor="end">3</text>
<line x1="175" y1="36" x2="185" y2="36" stroke="#333" stroke-width="1.2"/>
<text x="172" y="40" font-size="11" fill="#333" text-anchor="end">4</text>
<line x1="175" y1="0" x2="185" y2="0" stroke="#333" stroke-width="1.2"/>
<text x="172" y="4" font-size="11" fill="#333" text-anchor="end">5</text>
<text x="172" y="198" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="354" y="172" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="190" y="12" font-size="12" fill="#333">y</text>
<line x1="72" y1="180" x2="72" y2="108" stroke="#B5651D" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="180" y1="108" x2="72" y2="108" stroke="#B5651D" stroke-width="1.3" stroke-dasharray="4,3"/>
<circle cx="72" cy="108" r="4.5" fill="#B5651D"/>
<text x="80" y="100" font-size="14" fill="#B5651D" font-weight="bold">P(-3 ; 2)</text>
<line x1="324" y1="180" x2="324" y2="252" stroke="#2E5C8A" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="180" y1="252" x2="324" y2="252" stroke="#2E5C8A" stroke-width="1.3" stroke-dasharray="4,3"/>
<circle cx="324" cy="252" r="4.5" fill="#2E5C8A"/>
<text x="264" y="244" font-size="14" fill="#2E5C8A" font-weight="bold">Q(4 ; -2)</text>
</svg>
                                    </div>
                                    <p class="indent-text">Ici, $P$ a pour coordonnées $(-3 ; 2)$ (à gauche de l'axe des ordonnées, au-dessus de l'axe des abscisses) et $Q$ a pour coordonnées $(4 ; -2)$ (à droite, en dessous).</p>

                                    <p class="indent-text"><strong>Exemple 2</strong> — repère gradué <strong>de 2 en 2</strong> sur les deux axes :</p>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg" style="max-width:280px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="arrP2x" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="arrP2y" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="280" stroke="#e0e0e0" stroke-width="1"/>
<line x1="28" y1="0" x2="28" y2="280" stroke="#e0e0e0" stroke-width="1"/>
<line x1="56" y1="0" x2="56" y2="280" stroke="#e0e0e0" stroke-width="1"/>
<line x1="84" y1="0" x2="84" y2="280" stroke="#e0e0e0" stroke-width="1"/>
<line x1="112" y1="0" x2="112" y2="280" stroke="#e0e0e0" stroke-width="1"/>
<line x1="140" y1="0" x2="140" y2="280" stroke="#e0e0e0" stroke-width="1"/>
<line x1="168" y1="0" x2="168" y2="280" stroke="#e0e0e0" stroke-width="1"/>
<line x1="196" y1="0" x2="196" y2="280" stroke="#e0e0e0" stroke-width="1"/>
<line x1="224" y1="0" x2="224" y2="280" stroke="#e0e0e0" stroke-width="1"/>
<line x1="252" y1="0" x2="252" y2="280" stroke="#e0e0e0" stroke-width="1"/>
<line x1="280" y1="0" x2="280" y2="280" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="280" x2="280" y2="280" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="252" x2="280" y2="252" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="224" x2="280" y2="224" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="196" x2="280" y2="196" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="168" x2="280" y2="168" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="140" x2="280" y2="140" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="112" x2="280" y2="112" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="84" x2="280" y2="84" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="56" x2="280" y2="56" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="28" x2="280" y2="28" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="0" x2="280" y2="0" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="140" x2="280" y2="140" stroke="#333" stroke-width="2" marker-end="url(#arrP2x)"/>
<line x1="140" y1="280" x2="140" y2="0" stroke="#333" stroke-width="2" marker-end="url(#arrP2y)"/>
<line x1="0" y1="135" x2="0" y2="145" stroke="#333" stroke-width="1.2"/>
<text x="0" y="158" font-size="11" fill="#333" text-anchor="middle">-10</text>
<line x1="28" y1="135" x2="28" y2="145" stroke="#333" stroke-width="1.2"/>
<text x="28" y="158" font-size="11" fill="#333" text-anchor="middle">-8</text>
<line x1="56" y1="135" x2="56" y2="145" stroke="#333" stroke-width="1.2"/>
<text x="56" y="158" font-size="11" fill="#333" text-anchor="middle">-6</text>
<line x1="84" y1="135" x2="84" y2="145" stroke="#333" stroke-width="1.2"/>
<text x="84" y="158" font-size="11" fill="#333" text-anchor="middle">-4</text>
<line x1="112" y1="135" x2="112" y2="145" stroke="#333" stroke-width="1.2"/>
<text x="112" y="158" font-size="11" fill="#333" text-anchor="middle">-2</text>
<line x1="168" y1="135" x2="168" y2="145" stroke="#333" stroke-width="1.2"/>
<text x="168" y="158" font-size="11" fill="#333" text-anchor="middle">2</text>
<line x1="196" y1="135" x2="196" y2="145" stroke="#333" stroke-width="1.2"/>
<text x="196" y="158" font-size="11" fill="#333" text-anchor="middle">4</text>
<line x1="224" y1="135" x2="224" y2="145" stroke="#333" stroke-width="1.2"/>
<text x="224" y="158" font-size="11" fill="#333" text-anchor="middle">6</text>
<line x1="252" y1="135" x2="252" y2="145" stroke="#333" stroke-width="1.2"/>
<text x="252" y="158" font-size="11" fill="#333" text-anchor="middle">8</text>
<line x1="280" y1="135" x2="280" y2="145" stroke="#333" stroke-width="1.2"/>
<text x="280" y="158" font-size="11" fill="#333" text-anchor="middle">10</text>
<line x1="135" y1="280" x2="145" y2="280" stroke="#333" stroke-width="1.2"/>
<text x="132" y="284" font-size="11" fill="#333" text-anchor="end">-10</text>
<line x1="135" y1="252" x2="145" y2="252" stroke="#333" stroke-width="1.2"/>
<text x="132" y="256" font-size="11" fill="#333" text-anchor="end">-8</text>
<line x1="135" y1="224" x2="145" y2="224" stroke="#333" stroke-width="1.2"/>
<text x="132" y="228" font-size="11" fill="#333" text-anchor="end">-6</text>
<line x1="135" y1="196" x2="145" y2="196" stroke="#333" stroke-width="1.2"/>
<text x="132" y="200" font-size="11" fill="#333" text-anchor="end">-4</text>
<line x1="135" y1="168" x2="145" y2="168" stroke="#333" stroke-width="1.2"/>
<text x="132" y="172" font-size="11" fill="#333" text-anchor="end">-2</text>
<line x1="135" y1="112" x2="145" y2="112" stroke="#333" stroke-width="1.2"/>
<text x="132" y="116" font-size="11" fill="#333" text-anchor="end">2</text>
<line x1="135" y1="84" x2="145" y2="84" stroke="#333" stroke-width="1.2"/>
<text x="132" y="88" font-size="11" fill="#333" text-anchor="end">4</text>
<line x1="135" y1="56" x2="145" y2="56" stroke="#333" stroke-width="1.2"/>
<text x="132" y="60" font-size="11" fill="#333" text-anchor="end">6</text>
<line x1="135" y1="28" x2="145" y2="28" stroke="#333" stroke-width="1.2"/>
<text x="132" y="32" font-size="11" fill="#333" text-anchor="end">8</text>
<line x1="135" y1="0" x2="145" y2="0" stroke="#333" stroke-width="1.2"/>
<text x="132" y="4" font-size="11" fill="#333" text-anchor="end">10</text>
<text x="132" y="158" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="274" y="132" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="150" y="12" font-size="12" fill="#333">y</text>
<line x1="56" y1="140" x2="56" y2="28" stroke="#B5651D" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="140" y1="28" x2="56" y2="28" stroke="#B5651D" stroke-width="1.3" stroke-dasharray="4,3"/>
<circle cx="56" cy="28" r="4.5" fill="#B5651D"/>
<text x="64" y="20" font-size="14" fill="#B5651D" font-weight="bold">R(-6 ; 8)</text>
<line x1="252" y1="140" x2="252" y2="196" stroke="#2E5C8A" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="140" y1="196" x2="252" y2="196" stroke="#2E5C8A" stroke-width="1.3" stroke-dasharray="4,3"/>
<circle cx="252" cy="196" r="4.5" fill="#2E5C8A"/>
<text x="192" y="188" font-size="14" fill="#2E5C8A" font-weight="bold">S(8 ; -4)</text>
</svg>
                                    </div>
                                    <p class="indent-text">Ici, chaque carreau vaut $2$ unités : $R$ a pour coordonnées $(-6 ; 8)$ et $S$ a pour coordonnées $(8 ; -4)$.</p>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-REPlirecoord"
                                        onclick="startQuizFromButton('quiz-area-REPlirecoord', '56211')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-REPlirecoord"></div>
                                </section>

                                <!-- SECTION : PLACER UN POINT -->
                                <section class="course-section">
                                    <h3 class="section-title">Placer un point de coordonnées données</h3>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Placer le point $N(-2 ; 3)$
                                        <ul>
                                            <li>On part de l'origine $O$.</li>
                                            <li>On se déplace de $-2$ sur l'axe des abscisses (donc $2$ unités vers la <strong>gauche</strong>).</li>
                                            <li>Puis on se déplace de $3$ sur l'axe des ordonnées (donc $3$ unités vers le <strong>haut</strong>).</li>
                                            <li>On place le point $N$ à l'endroit obtenu.</li>
                                        </ul>
                                    </div>

                                    <p class="indent-text"><strong>Exemple 1</strong> — repère gradué <strong>en dixièmes</strong> ($0,1$ en $0,1$) sur les deux axes, avec des coordonnées décimales relatives :</p>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 720 720" xmlns="http://www.w3.org/2000/svg" style="max-width:460px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="arrP3x" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="arrP3y" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="24" y1="0" x2="24" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="48" y1="0" x2="48" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="72" y1="0" x2="72" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="96" y1="0" x2="96" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="144" y1="0" x2="144" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="168" y1="0" x2="168" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="192" y1="0" x2="192" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="216" y1="0" x2="216" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="264" y1="0" x2="264" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="288" y1="0" x2="288" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="312" y1="0" x2="312" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="336" y1="0" x2="336" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="360" y1="0" x2="360" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="384" y1="0" x2="384" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="408" y1="0" x2="408" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="432" y1="0" x2="432" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="456" y1="0" x2="456" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="480" y1="0" x2="480" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="504" y1="0" x2="504" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="528" y1="0" x2="528" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="552" y1="0" x2="552" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="576" y1="0" x2="576" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="600" y1="0" x2="600" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="624" y1="0" x2="624" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="648" y1="0" x2="648" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="672" y1="0" x2="672" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="696" y1="0" x2="696" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="720" y1="0" x2="720" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="720" x2="720" y2="720" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="696" x2="720" y2="696" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="672" x2="720" y2="672" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="648" x2="720" y2="648" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="624" x2="720" y2="624" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="600" x2="720" y2="600" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="576" x2="720" y2="576" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="552" x2="720" y2="552" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="528" x2="720" y2="528" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="504" x2="720" y2="504" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="480" x2="720" y2="480" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="456" x2="720" y2="456" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="432" x2="720" y2="432" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="408" x2="720" y2="408" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="384" x2="720" y2="384" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="360" x2="720" y2="360" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="336" x2="720" y2="336" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="312" x2="720" y2="312" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="288" x2="720" y2="288" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="264" x2="720" y2="264" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="240" x2="720" y2="240" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="216" x2="720" y2="216" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="192" x2="720" y2="192" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="168" x2="720" y2="168" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="144" x2="720" y2="144" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="120" x2="720" y2="120" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="96" x2="720" y2="96" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="72" x2="720" y2="72" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="48" x2="720" y2="48" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="24" x2="720" y2="24" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="0" x2="720" y2="0" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="360" x2="720" y2="360" stroke="#333" stroke-width="2" marker-end="url(#arrP3x)"/>
<line x1="360" y1="720" x2="360" y2="0" stroke="#333" stroke-width="2" marker-end="url(#arrP3y)"/>
<line x1="0" y1="355" x2="0" y2="365" stroke="#333" stroke-width="1.2"/>
<text x="0" y="378" font-size="11" fill="#333" text-anchor="middle">-1,5</text>
<line x1="120" y1="355" x2="120" y2="365" stroke="#333" stroke-width="1.2"/>
<text x="120" y="378" font-size="11" fill="#333" text-anchor="middle">-1,0</text>
<line x1="240" y1="355" x2="240" y2="365" stroke="#333" stroke-width="1.2"/>
<text x="240" y="378" font-size="11" fill="#333" text-anchor="middle">-0,5</text>
<line x1="480" y1="355" x2="480" y2="365" stroke="#333" stroke-width="1.2"/>
<text x="480" y="378" font-size="11" fill="#333" text-anchor="middle">0,5</text>
<line x1="600" y1="355" x2="600" y2="365" stroke="#333" stroke-width="1.2"/>
<text x="600" y="378" font-size="11" fill="#333" text-anchor="middle">1,0</text>
<line x1="720" y1="355" x2="720" y2="365" stroke="#333" stroke-width="1.2"/>
<text x="720" y="378" font-size="11" fill="#333" text-anchor="middle">1,5</text>
<line x1="355" y1="720" x2="365" y2="720" stroke="#333" stroke-width="1.2"/>
<text x="352" y="724" font-size="11" fill="#333" text-anchor="end">-1,5</text>
<line x1="355" y1="600" x2="365" y2="600" stroke="#333" stroke-width="1.2"/>
<text x="352" y="604" font-size="11" fill="#333" text-anchor="end">-1,0</text>
<line x1="355" y1="480" x2="365" y2="480" stroke="#333" stroke-width="1.2"/>
<text x="352" y="484" font-size="11" fill="#333" text-anchor="end">-0,5</text>
<line x1="355" y1="240" x2="365" y2="240" stroke="#333" stroke-width="1.2"/>
<text x="352" y="244" font-size="11" fill="#333" text-anchor="end">0,5</text>
<line x1="355" y1="120" x2="365" y2="120" stroke="#333" stroke-width="1.2"/>
<text x="352" y="124" font-size="11" fill="#333" text-anchor="end">1,0</text>
<line x1="355" y1="0" x2="365" y2="0" stroke="#333" stroke-width="1.2"/>
<text x="352" y="4" font-size="11" fill="#333" text-anchor="end">1,5</text>
<text x="352" y="378" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="714" y="352" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="370" y="12" font-size="12" fill="#333">y</text>
<line x1="528" y1="360" x2="528" y2="456" stroke="#B5651D" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="360" y1="456" x2="528" y2="456" stroke="#B5651D" stroke-width="1.3" stroke-dasharray="4,3"/>
<circle cx="528" cy="456" r="4.5" fill="#B5651D"/>
<text x="536" y="448" font-size="14" fill="#B5651D" font-weight="bold">T(0,7 ; -0,4)</text>
<line x1="144" y1="360" x2="144" y2="216" stroke="#2E5C8A" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="360" y1="216" x2="144" y2="216" stroke="#2E5C8A" stroke-width="1.3" stroke-dasharray="4,3"/>
<circle cx="144" cy="216" r="4.5" fill="#2E5C8A"/>
<text x="152" y="208" font-size="14" fill="#2E5C8A" font-weight="bold">U(-0,9 ; 0,6)</text>
</svg>
                                    </div>
                                    <p class="indent-text">Ici, chaque carreau vaut $0,1$ : le point $T(0,7 ; -0,4)$ est placé en avançant de $0,7$ vers la droite puis $0,4$ vers le bas ; le point $U(-0,9 ; 0,6)$ est placé en avançant de $0,9$ vers la gauche puis $0,6$ vers le haut.</p>

                                    <p class="indent-text"><strong>Exemple 2</strong> — repère gradué <strong>de 2 en 2</strong>, placement d'un point aux deux coordonnées négatives :</p>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" style="max-width:240px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="arrP4x" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="arrP4y" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="240" stroke="#e0e0e0" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="240" stroke="#e0e0e0" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="240" stroke="#e0e0e0" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="240" stroke="#e0e0e0" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="240" stroke="#e0e0e0" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="240" stroke="#e0e0e0" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="240" stroke="#e0e0e0" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="240" stroke="#e0e0e0" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="240" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="240" x2="240" y2="240" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="210" x2="240" y2="210" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="180" x2="240" y2="180" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="150" x2="240" y2="150" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="120" x2="240" y2="120" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="90" x2="240" y2="90" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="60" x2="240" y2="60" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="30" x2="240" y2="30" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="0" x2="240" y2="0" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="120" x2="240" y2="120" stroke="#333" stroke-width="2" marker-end="url(#arrP4x)"/>
<line x1="120" y1="240" x2="120" y2="0" stroke="#333" stroke-width="2" marker-end="url(#arrP4y)"/>
<line x1="0" y1="115" x2="0" y2="125" stroke="#333" stroke-width="1.2"/>
<text x="0" y="138" font-size="11" fill="#333" text-anchor="middle">-8</text>
<line x1="30" y1="115" x2="30" y2="125" stroke="#333" stroke-width="1.2"/>
<text x="30" y="138" font-size="11" fill="#333" text-anchor="middle">-6</text>
<line x1="60" y1="115" x2="60" y2="125" stroke="#333" stroke-width="1.2"/>
<text x="60" y="138" font-size="11" fill="#333" text-anchor="middle">-4</text>
<line x1="90" y1="115" x2="90" y2="125" stroke="#333" stroke-width="1.2"/>
<text x="90" y="138" font-size="11" fill="#333" text-anchor="middle">-2</text>
<line x1="150" y1="115" x2="150" y2="125" stroke="#333" stroke-width="1.2"/>
<text x="150" y="138" font-size="11" fill="#333" text-anchor="middle">2</text>
<line x1="180" y1="115" x2="180" y2="125" stroke="#333" stroke-width="1.2"/>
<text x="180" y="138" font-size="11" fill="#333" text-anchor="middle">4</text>
<line x1="210" y1="115" x2="210" y2="125" stroke="#333" stroke-width="1.2"/>
<text x="210" y="138" font-size="11" fill="#333" text-anchor="middle">6</text>
<line x1="240" y1="115" x2="240" y2="125" stroke="#333" stroke-width="1.2"/>
<text x="240" y="138" font-size="11" fill="#333" text-anchor="middle">8</text>
<line x1="115" y1="240" x2="125" y2="240" stroke="#333" stroke-width="1.2"/>
<text x="112" y="244" font-size="11" fill="#333" text-anchor="end">-8</text>
<line x1="115" y1="210" x2="125" y2="210" stroke="#333" stroke-width="1.2"/>
<text x="112" y="214" font-size="11" fill="#333" text-anchor="end">-6</text>
<line x1="115" y1="180" x2="125" y2="180" stroke="#333" stroke-width="1.2"/>
<text x="112" y="184" font-size="11" fill="#333" text-anchor="end">-4</text>
<line x1="115" y1="150" x2="125" y2="150" stroke="#333" stroke-width="1.2"/>
<text x="112" y="154" font-size="11" fill="#333" text-anchor="end">-2</text>
<line x1="115" y1="90" x2="125" y2="90" stroke="#333" stroke-width="1.2"/>
<text x="112" y="94" font-size="11" fill="#333" text-anchor="end">2</text>
<line x1="115" y1="60" x2="125" y2="60" stroke="#333" stroke-width="1.2"/>
<text x="112" y="64" font-size="11" fill="#333" text-anchor="end">4</text>
<line x1="115" y1="30" x2="125" y2="30" stroke="#333" stroke-width="1.2"/>
<text x="112" y="34" font-size="11" fill="#333" text-anchor="end">6</text>
<line x1="115" y1="0" x2="125" y2="0" stroke="#333" stroke-width="1.2"/>
<text x="112" y="4" font-size="11" fill="#333" text-anchor="end">8</text>
<text x="112" y="138" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="234" y="112" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="130" y="12" font-size="12" fill="#333">y</text>
<line x1="60" y1="120" x2="60" y2="210" stroke="#B5651D" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="120" y1="210" x2="60" y2="210" stroke="#B5651D" stroke-width="1.3" stroke-dasharray="4,3"/>
<circle cx="60" cy="210" r="4.5" fill="#B5651D"/>
<text x="68" y="202" font-size="14" fill="#B5651D" font-weight="bold">V(-4 ; -6)</text>
</svg>
                                    </div>
                                    <p class="indent-text">Ici, chaque carreau vaut $2$ unités : pour placer $V(-4 ; -6)$, on avance de $4$ unités vers la gauche (soit $2$ carreaux) puis de $6$ unités vers le bas (soit $3$ carreaux).</p>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-REPplacercoord"
                                        onclick="startQuizFromButton('quiz-area-REPplacercoord', '56221')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-REPplacercoord"></div>
                                </section>

                                <!-- SECTION : APPLICATION -->
                                <section class="course-section">
                                    <h2 class="section-title">Résoudre un problème avec des coordonnées</h2>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Dans un repère orthogonal, on a placé les points $A(-4 ; -2)$, $B(2 ; -3)$ et $C(4 ; 2)$. Quelles seraient les coordonnées du point $D$ si l'on souhaite que $ABCD$ soit un parallélogramme ?
                                        <ul>
                                            <li>Dans un parallélogramme $ABCD$, le côté $[BC]$ est parallèle et de même longueur que le côté $[AD]$.</li>
                                            <li>On calcule le <strong>déplacement</strong> pour aller de $B$ à $C$ : l'abscisse augmente de $4 - 2 = 2$, l'ordonnée augmente de $2 - (-3) = 5$.</li>
                                            <li>On applique ce même déplacement à partir de $A$ pour trouver $D$ : $D$ a pour abscisse $-4 + 2 = -2$ et pour ordonnée $-2 + 5 = 3$.</li>
                                            <li>Donc $D(-2 ; 3)$.</li>
                                        </ul>
                                    </div>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 408 340" xmlns="http://www.w3.org/2000/svg" style="max-width:440px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="arrow2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="340" stroke="#e0e0e0" stroke-width="1"/>
<line x1="34" y1="0" x2="34" y2="340" stroke="#e0e0e0" stroke-width="1"/>
<line x1="68" y1="0" x2="68" y2="340" stroke="#e0e0e0" stroke-width="1"/>
<line x1="102" y1="0" x2="102" y2="340" stroke="#e0e0e0" stroke-width="1"/>
<line x1="136" y1="0" x2="136" y2="340" stroke="#e0e0e0" stroke-width="1"/>
<line x1="170" y1="0" x2="170" y2="340" stroke="#e0e0e0" stroke-width="1"/>
<line x1="204" y1="0" x2="204" y2="340" stroke="#e0e0e0" stroke-width="1"/>
<line x1="238" y1="0" x2="238" y2="340" stroke="#e0e0e0" stroke-width="1"/>
<line x1="272" y1="0" x2="272" y2="340" stroke="#e0e0e0" stroke-width="1"/>
<line x1="306" y1="0" x2="306" y2="340" stroke="#e0e0e0" stroke-width="1"/>
<line x1="340" y1="0" x2="340" y2="340" stroke="#e0e0e0" stroke-width="1"/>
<line x1="374" y1="0" x2="374" y2="340" stroke="#e0e0e0" stroke-width="1"/>
<line x1="408" y1="0" x2="408" y2="340" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="340" x2="408" y2="340" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="306" x2="408" y2="306" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="272" x2="408" y2="272" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="238" x2="408" y2="238" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="204" x2="408" y2="204" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="170" x2="408" y2="170" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="136" x2="408" y2="136" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="102" x2="408" y2="102" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="68" x2="408" y2="68" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="34" x2="408" y2="34" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="0" x2="408" y2="0" stroke="#e0e0e0" stroke-width="1"/>
<line x1="0" y1="170" x2="408" y2="170" stroke="#333" stroke-width="2" marker-end="url(#arrow2)"/>
<line x1="204" y1="340" x2="204" y2="0" stroke="#333" stroke-width="2" marker-end="url(#arrow2)"/>
<line x1="0" y1="166" x2="0" y2="174" stroke="#333" stroke-width="1.2"/>
<text x="0" y="186" font-size="11" fill="#333" text-anchor="middle">-6</text>
<line x1="34" y1="166" x2="34" y2="174" stroke="#333" stroke-width="1.2"/>
<text x="34" y="186" font-size="11" fill="#333" text-anchor="middle">-5</text>
<line x1="68" y1="166" x2="68" y2="174" stroke="#333" stroke-width="1.2"/>
<text x="68" y="186" font-size="11" fill="#333" text-anchor="middle">-4</text>
<line x1="102" y1="166" x2="102" y2="174" stroke="#333" stroke-width="1.2"/>
<text x="102" y="186" font-size="11" fill="#333" text-anchor="middle">-3</text>
<line x1="136" y1="166" x2="136" y2="174" stroke="#333" stroke-width="1.2"/>
<text x="136" y="186" font-size="11" fill="#333" text-anchor="middle">-2</text>
<line x1="170" y1="166" x2="170" y2="174" stroke="#333" stroke-width="1.2"/>
<text x="170" y="186" font-size="11" fill="#333" text-anchor="middle">-1</text>
<line x1="238" y1="166" x2="238" y2="174" stroke="#333" stroke-width="1.2"/>
<text x="238" y="186" font-size="11" fill="#333" text-anchor="middle">1</text>
<line x1="272" y1="166" x2="272" y2="174" stroke="#333" stroke-width="1.2"/>
<text x="272" y="186" font-size="11" fill="#333" text-anchor="middle">2</text>
<line x1="306" y1="166" x2="306" y2="174" stroke="#333" stroke-width="1.2"/>
<text x="306" y="186" font-size="11" fill="#333" text-anchor="middle">3</text>
<line x1="340" y1="166" x2="340" y2="174" stroke="#333" stroke-width="1.2"/>
<text x="340" y="186" font-size="11" fill="#333" text-anchor="middle">4</text>
<line x1="374" y1="166" x2="374" y2="174" stroke="#333" stroke-width="1.2"/>
<text x="374" y="186" font-size="11" fill="#333" text-anchor="middle">5</text>
<line x1="408" y1="166" x2="408" y2="174" stroke="#333" stroke-width="1.2"/>
<text x="408" y="186" font-size="11" fill="#333" text-anchor="middle">6</text>
<line x1="200" y1="340" x2="208" y2="340" stroke="#333" stroke-width="1.2"/>
<text x="196" y="344" font-size="11" fill="#333" text-anchor="end">-5</text>
<line x1="200" y1="306" x2="208" y2="306" stroke="#333" stroke-width="1.2"/>
<text x="196" y="310" font-size="11" fill="#333" text-anchor="end">-4</text>
<line x1="200" y1="272" x2="208" y2="272" stroke="#333" stroke-width="1.2"/>
<text x="196" y="276" font-size="11" fill="#333" text-anchor="end">-3</text>
<line x1="200" y1="238" x2="208" y2="238" stroke="#333" stroke-width="1.2"/>
<text x="196" y="242" font-size="11" fill="#333" text-anchor="end">-2</text>
<line x1="200" y1="204" x2="208" y2="204" stroke="#333" stroke-width="1.2"/>
<text x="196" y="208" font-size="11" fill="#333" text-anchor="end">-1</text>
<line x1="200" y1="136" x2="208" y2="136" stroke="#333" stroke-width="1.2"/>
<text x="196" y="140" font-size="11" fill="#333" text-anchor="end">1</text>
<line x1="200" y1="102" x2="208" y2="102" stroke="#333" stroke-width="1.2"/>
<text x="196" y="106" font-size="11" fill="#333" text-anchor="end">2</text>
<line x1="200" y1="68" x2="208" y2="68" stroke="#333" stroke-width="1.2"/>
<text x="196" y="72" font-size="11" fill="#333" text-anchor="end">3</text>
<line x1="200" y1="34" x2="208" y2="34" stroke="#333" stroke-width="1.2"/>
<text x="196" y="38" font-size="11" fill="#333" text-anchor="end">4</text>
<line x1="200" y1="0" x2="208" y2="0" stroke="#333" stroke-width="1.2"/>
<text x="196" y="4" font-size="11" fill="#333" text-anchor="end">5</text>
<text x="196" y="186" font-size="11" fill="#333" text-anchor="end">0</text>
<polygon points="68,238 272,272 340,102" fill="none" stroke="#2E5C8A" stroke-width="2.5"/>
<line x1="340" y1="102" x2="136" y2="68" stroke="#B5651D" stroke-width="2.5" stroke-dasharray="6,4"/>
<line x1="136" y1="68" x2="68" y2="238" stroke="#B5651D" stroke-width="2.5" stroke-dasharray="6,4"/>
<circle cx="68" cy="238" r="4" fill="#2E5C8A"/>
<text x="58" y="254" font-size="14" fill="#2E5C8A" font-weight="bold" text-anchor="middle">A</text>
<circle cx="272" cy="272" r="4" fill="#2E5C8A"/>
<text x="282" y="288" font-size="14" fill="#2E5C8A" font-weight="bold" text-anchor="middle">B</text>
<circle cx="340" cy="102" r="4" fill="#2E5C8A"/>
<text x="350" y="92" font-size="14" fill="#2E5C8A" font-weight="bold" text-anchor="middle">C</text>
<circle cx="136" cy="68" r="4" fill="#B5651D"/>
<text x="126" y="58" font-size="14" fill="#B5651D" font-weight="bold" text-anchor="middle">D</text>
</svg>
                                    </div>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> on retrouve le même résultat en utilisant une autre propriété du parallélogramme : ses deux diagonales $[AC]$ et $[BD]$ se coupent en leur <strong>milieu</strong> commun.
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-REPparallelogramme"
                                        onclick="startQuizFromButton('quiz-area-REPparallelogramme', '56301')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-REPparallelogramme"></div>
                                </section>
                            </div>
                        `
    }
};
