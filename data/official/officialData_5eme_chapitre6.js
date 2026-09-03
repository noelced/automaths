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
                                <!-- SECTION : OBJECTIFS -->
                                <section class="course-section">
                                    <p><strong>Objectifs :</strong></p>
                                    <ul>
                                        <li>Sur une droite graduée, je sais lire l'abscisse d'un point donné</li>
                                        <li>Sur une droite graduée, je sais placer un point d'abscisse donnée</li>
                                        <li>Dans le plan muni d'un repère orthogonal, je sais lire les coordonnées d'un point donné</li>
                                        <li>Dans le plan muni d'un repère orthogonal, je sais placer un point de coordonnées données</li>
                                    </ul>
                                </section>

                                <!-- SECTION : DROITE GRADUÉE -->
                                <section class="course-section">
                                    <h2 class="section-title">Se repérer sur une droite graduée</h2>
                                    <div class="notion-box">
                                        <p>Rappel : sur une <strong>droite graduée</strong>, chaque point est associé à un nombre appelé son <strong>abscisse</strong>. Cette abscisse peut être un nombre <strong>décimal</strong>, positif ou négatif.</p>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Lire l'abscisse d'un point sur une droite graduée
                                        <ul>
                                            <li>On repère la position de l'origine ($0$) et l'unité choisie.</li>
                                            <li>On compte le nombre d'unités (et de fractions d'unité s'il le faut) entre l'origine et le point, en tenant compte du sens (à droite : positif, à gauche : négatif).</li>
                                        </ul>
                                    </div>
                                    <p class="indent-text">Par exemple, un point situé $2,5$ unités à droite de l'origine a pour abscisse $2,5$ ; un point situé $1,5$ unité à gauche de l'origine a pour abscisse $-1,5$.</p>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-REPlireabscisse"
                                        onclick="startQuizFromButton('quiz-area-REPlireabscisse', '56101')">
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
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-REPplacerabscisse"
                                        onclick="startQuizFromButton('quiz-area-REPplacerabscisse', '56102')">
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
                                    <h2 class="section-title">Lire les coordonnées d'un point donné</h2>
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
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-REPlirecoord"
                                        onclick="startQuizFromButton('quiz-area-REPlirecoord', '56201')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-REPlirecoord"></div>
                                </section>

                                <!-- SECTION : PLACER UN POINT -->
                                <section class="course-section">
                                    <h2 class="section-title">Placer un point de coordonnées données</h2>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Placer le point $N(-2 ; 3)$
                                        <ul>
                                            <li>On part de l'origine $O$.</li>
                                            <li>On se déplace de $-2$ sur l'axe des abscisses (donc $2$ unités vers la <strong>gauche</strong>).</li>
                                            <li>Puis on se déplace de $3$ sur l'axe des ordonnées (donc $3$ unités vers le <strong>haut</strong>).</li>
                                            <li>On place le point $N$ à l'endroit obtenu.</li>
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-REPplacercoord"
                                        onclick="startQuizFromButton('quiz-area-REPplacercoord', '56202')">
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
