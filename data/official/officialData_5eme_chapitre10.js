// ============================================================
// data/official/officialData_5eme_chapitre10.js
// Niveau : 5ème — Thème : ESPACE ET GÉOMÉTRIE
// Chapitre 10 : Triangles
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.
// NOTE : les codes des quiz ("btn-check-understanding") sont des
// identifiants prévisionnels (5A xxx, ici notés 5-10 -> "510xxx")
// à créer/associer dans la banque de quiz du site avant mise en
// ligne.
// Cette version s'appuie notamment sur les « Attendus de fin
// d'année de 5e » (rubriques Grandeurs et mesures, et Espace et
// géométrie > Utiliser les notions de géométrie plane pour
// démontrer) fournis par l'enseignant.

var chapterData_5eme_10 = {
    themeName: "ESPACE ET GÉOMÉTRIE",
    chapter: {
        id: 10,
        title: "Triangles",
        eleve: "non",
        content: `
                            <div class="course-container">
                                <!-- SECTION : OBJECTIFS -->
                                <section class="course-section">
                                    <p><strong>Objectifs :</strong></p>
                                    <ul>
                                        <li>Je révise les triangles isocèle, équilatéral et rectangle (schéma codé)</li>
                                        <li>Je connais la somme des angles d'un triangle et je sais la démontrer</li>
                                        <li>Je sais construire un triangle à partir de données partielles</li>
                                        <li>Je sais définir et tracer les hauteurs d'un triangle, et je sais qu'elles sont concourantes</li>
                                        <li>Je sais définir et tracer les médianes d'un triangle</li>
                                        <li>Je sais démontrer qu'une médiane partage un triangle en deux triangles de même aire</li>
                                        <li>Je connais les propriétés des médiatrices et du cercle circonscrit, y compris pour des triangles particuliers</li>
                                        <li>Je sais calculer l'aire d'un triangle</li>
                                    </ul>
                                </section>

                                <!-- SECTION : RAPPEL TYPES DE TRIANGLES -->
                                <section class="course-section">
                                    <h2 class="section-title">Rappel : les différents types de triangles</h2>
                                    <table style="width:100%; border-collapse: collapse; text-align: center;">
                                        <thead>
                                            <tr>
                                                <th style="border-right: 1px solid black; padding: 10px;">Triangle</th>
                                                <th style="padding: 10px;">Ce qui le caractérise</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;"><strong>isocèle</strong></td>
                                                <td style="padding: 10px;">$2$ côtés de même longueur (codés par un seul trait identique)</td>
                                            </tr>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;"><strong>équilatéral</strong></td>
                                                <td style="padding: 10px;">$3$ côtés de même longueur</td>
                                            </tr>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;"><strong>rectangle</strong></td>
                                                <td style="padding: 10px;">un angle droit (codé par un petit carré)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> un triangle peut être à la fois <strong>isocèle et rectangle</strong> ! En revanche, un triangle équilatéral a toujours ses $3$ angles égaux à $60°$, il n'est donc jamais rectangle.
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-TRIrappeltypes"
                                        onclick="startQuizFromButton('quiz-area-TRIrappeltypes', '510101')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-TRIrappeltypes"></div>
                                </section>

                                <!-- SECTION : SOMME DES ANGLES -->
                                <section class="course-section">
                                    <h2 class="section-title">La somme des angles d'un triangle</h2>
                                    <div class="notion-box">
                                        <blockquote>Dans un triangle $ABC$ : $\\widehat{A} + \\widehat{B} + \\widehat{C} = 180°$</blockquote>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Démonstration</span> Pourquoi la somme des angles d'un triangle vaut-elle toujours $180°$ ?
                                        <ul>
                                            <li>On trace la droite $(d)$ parallèle à $[BC]$ passant par $A$.</li>
                                            <li>L'angle en $A$ entre $(d)$ et $[AB]$ est <strong>alterne-interne</strong> avec l'angle $\\widehat{B}$ (sécante $(AB)$ coupant les deux parallèles) : ils sont donc égaux.</li>
                                            <li>De même, l'angle en $A$ entre $(d)$ et $[AC]$ est alterne-interne avec l'angle $\\widehat{C}$ : ils sont égaux.</li>
                                            <li>Ces deux angles alternes-internes, plus l'angle $\\widehat{A}$ du triangle, forment ensemble un <strong>angle plat</strong> le long de $(d)$, donc leur somme vaut $180°$.</li>
                                            <li>On a donc bien $\\widehat{A} + \\widehat{B} + \\widehat{C} = 180°$.</li>
                                        </ul>
                                    </div>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> cette démonstration utilise directement les propriétés des angles alternes-internes vues au chapitre précédent !
                                    </div>
                                    <p><strong>Exemple :</strong> dans un triangle, deux angles mesurent $50°$ et $75°$. Le troisième angle mesure $180° - 50° - 75° = 55°$.</p>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-TRIsommeangles"
                                        onclick="startQuizFromButton('quiz-area-TRIsommeangles', '510201')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-TRIsommeangles"></div>
                                </section>

                                <!-- SECTION : CONSTRUIRE UN TRIANGLE -->
                                <section class="course-section">
                                    <h2 class="section-title">Construire un triangle à partir de données partielles</h2>
                                    <div class="notion-box">
                                        <p>On peut construire un triangle à partir de différentes données, par exemple : $2$ longueurs et l'angle qu'elles forment, ou $1$ longueur et les $2$ angles adjacents à ce côté.</p>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Construire le triangle $ABC$ isocèle en $B$ tel que $AB = 5$ cm et $\\widehat{ABC} = 130°$
                                        <ul>
                                            <li>On trace le segment $[AB]$ de longueur $5$ cm.</li>
                                            <li>On trace en $B$ un angle de $130°$ à l'aide du rapporteur.</li>
                                            <li>Comme le triangle est isocèle en $B$, on a $BA = BC$ : on place $C$ sur le second côté de l'angle, à $5$ cm de $B$.</li>
                                            <li>On relie $A$ et $C$ pour terminer le triangle.</li>
                                        </ul>
                                    </div>
                                    <div class="notion-box">
                                        <p><strong>L'inégalité triangulaire :</strong> pour qu'un triangle $ABC$ existe, chaque côté doit être <strong>plus petit que la somme des deux autres</strong> :</p>
                                        <blockquote>$AB < AC + CB$   (et de même pour les deux autres côtés)</blockquote>
                                    </div>
                                    <p class="indent-text">Si cette condition n'est pas respectée (par exemple si on essaie de construire un triangle de côtés $3$ cm, $4$ cm et $9$ cm), le triangle ne peut pas exister : les deux petits côtés sont trop courts pour se rejoindre !</p>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-TRIconstruire"
                                        onclick="startQuizFromButton('quiz-area-TRIconstruire', '510301')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-TRIconstruire"></div>
                                </section>

                                <!-- SECTION : HAUTEURS -->
                                <section class="course-section">
                                    <h2 class="section-title">Les hauteurs d'un triangle</h2>
                                    <div class="notion-box">
                                        <p>La <strong>hauteur</strong> issue d'un sommet est la droite qui passe par ce sommet et qui est <strong>perpendiculaire</strong> au côté opposé (ou à son prolongement).</p>
                                    </div>
                                    <p>Un triangle possède $3$ hauteurs, une par sommet. Elles sont toujours <strong>concourantes</strong> : elles se coupent en un même point, appelé <strong>orthocentre</strong> du triangle.</p>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg" style="max-width:380px; display:block; margin:0 auto; font-family:sans-serif;">
<polygon points="60.0,250.0 320.0,270.0 190.0,50.0" fill="none" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="51.4" y1="255.1" x2="256.9" y2="133.7" stroke="#2E5C8A" stroke-width="2" stroke-dasharray="6,4"/>
<line x1="328.4" y1="275.4" x2="115.5" y2="137.1" stroke="#2F7D3C" stroke-width="2" stroke-dasharray="6,4"/>
<line x1="190.8" y1="40.0" x2="172.8" y2="273.7" stroke="#B5651D" stroke-width="2" stroke-dasharray="6,4"/>
<polyline points="248.0,148.2 241.1,152.3 237.1,145.4" fill="none" stroke="#555" stroke-width="1.3"/>
<polyline points="123.7,152.0 130.4,156.3 134.8,149.6" fill="none" stroke="#555" stroke-width="1.3"/>
<polyline points="181.9,259.4 182.5,251.4 174.6,250.8" fill="none" stroke="#555" stroke-width="1.3"/>
<circle cx="180.1" cy="179.0" r="4" fill="#8E44AD"/>
<text x="188.1" y="173.0" font-size="15" fill="#8E44AD" font-weight="bold">H</text>
<circle cx="60.0" cy="250.0" r="3.5" fill="#1A1A1A"/>
<text x="42.0" y="260.0" font-size="15" fill="#1A1A1A" font-weight="bold">A</text>
<circle cx="320.0" cy="270.0" r="3.5" fill="#1A1A1A"/>
<text x="330.0" y="284.0" font-size="15" fill="#1A1A1A" font-weight="bold">B</text>
<circle cx="190.0" cy="50.0" r="3.5" fill="#1A1A1A"/>
<text x="184.0" y="40.0" font-size="15" fill="#1A1A1A" font-weight="bold">C</text>
</svg>
                                    </div>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> l'orthocentre n'est pas toujours à l'intérieur du triangle ! Dans un triangle <strong>obtusangle</strong> (qui a un angle obtus), il se trouve à l'extérieur.
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-TRIhauteurs"
                                        onclick="startQuizFromButton('quiz-area-TRIhauteurs', '510401')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-TRIhauteurs"></div>
                                </section>

                                <!-- SECTION : MEDIANES -->
                                <section class="course-section">
                                    <h2 class="section-title">Les médianes d'un triangle</h2>
                                    <div class="notion-box">
                                        <p>La <strong>médiane</strong> issue d'un sommet est le segment qui relie ce sommet au <strong>milieu du côté opposé</strong>.</p>
                                    </div>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg" style="max-width:380px; display:block; margin:0 auto; font-family:sans-serif;">
<polygon points="60.0,250.0 320.0,270.0 255.0,160.0" fill="#2E5C8A" fill-opacity="0.35" stroke="none"/>
<polygon points="60.0,250.0 255.0,160.0 190.0,50.0" fill="#B5651D" fill-opacity="0.35" stroke="none"/>
<polygon points="60.0,250.0 320.0,270.0 190.0,50.0" fill="none" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="60" y1="250" x2="255.0" y2="160.0" stroke="#1A1A1A" stroke-width="2.2"/>
<line x1="282.3" y1="218.1" x2="292.7" y2="211.9" stroke="#1A1A1A" stroke-width="2"/>
<line x1="217.3" y1="108.1" x2="227.7" y2="101.9" stroke="#1A1A1A" stroke-width="2"/>
<circle cx="60.0" cy="250.0" r="3.5" fill="#1A1A1A"/>
<text x="42.0" y="260.0" font-size="15" fill="#1A1A1A" font-weight="bold">A</text>
<circle cx="320.0" cy="270.0" r="3.5" fill="#1A1A1A"/>
<text x="330.0" y="284.0" font-size="15" fill="#1A1A1A" font-weight="bold">B</text>
<circle cx="190.0" cy="50.0" r="3.5" fill="#1A1A1A"/>
<text x="184.0" y="40.0" font-size="15" fill="#1A1A1A" font-weight="bold">C</text>
<circle cx="255.0" cy="160.0" r="3.5" fill="#2F7D3C"/>
<text x="263.0" y="180.0" font-size="15" fill="#2F7D3C" font-weight="bold">M</text>
</svg>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Démonstration</span> Pourquoi la médiane $[AM]$ partage-t-elle le triangle $ABC$ en deux triangles de même aire ?
                                        <ul>
                                            <li>Les triangles $ABM$ et $ACM$ ont chacun pour base $BM$ et $MC$, avec $BM = MC$ (car $M$ est le milieu de $[BC]$).</li>
                                            <li>Ils ont aussi la <strong>même hauteur</strong> : la hauteur issue de $A$ dans le triangle $ABC$ tout entier.</li>
                                            <li>Comme l'aire d'un triangle est $\\dfrac{\\text{base} \\times \\text{hauteur}}{2}$, et que $ABM$ et $ACM$ ont la même base et la même hauteur, ils ont la <strong>même aire</strong>.</li>
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-TRImedianes"
                                        onclick="startQuizFromButton('quiz-area-TRImedianes', '510501')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-TRImedianes"></div>
                                </section>

                                <!-- SECTION : MEDIATRICES ET CERCLE CIRCONSCRIT -->
                                <section class="course-section">
                                    <h2 class="section-title">Les médiatrices et le cercle circonscrit</h2>
                                    <div class="notion-box">
                                        <p>Rappel : la <strong>médiatrice</strong> d'un segment est la droite perpendiculaire à ce segment, passant par son milieu. Tout point de la médiatrice de $[AB]$ est <strong>équidistant</strong> de $A$ et de $B$.</p>
                                    </div>
                                    <p>Dans un triangle, les $3$ médiatrices des côtés sont elles aussi <strong>concourantes</strong> : elles se coupent en un point $O$ qui est équidistant des $3$ sommets du triangle. Ce point $O$ est donc le centre d'un cercle qui passe par les $3$ sommets, appelé <strong>cercle circonscrit</strong> au triangle.</p>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 380 320" xmlns="http://www.w3.org/2000/svg" style="max-width:380px; display:block; margin:0 auto; font-family:sans-serif;">
<circle cx="187.2" cy="183.2" r="126.2" fill="none" stroke="#8E44AD" stroke-width="2"/>
<polygon points="70.0,230.0 300.0,240.0 160.0,60.0" fill="none" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="187.6" y1="175.1" x2="182.4" y2="294.9" stroke="#2E5C8A" stroke-width="1.8" stroke-dasharray="5,4"/>
<line x1="182.6" y1="186.8" x2="277.4" y2="113.2" stroke="#2F7D3C" stroke-width="1.8" stroke-dasharray="5,4"/>
<line x1="62.0" y1="116.9" x2="168.0" y2="173.1" stroke="#B5651D" stroke-width="1.8" stroke-dasharray="5,4"/>
<circle cx="187.2" cy="183.2" r="4" fill="#8E44AD"/>
<text x="195.2" y="177.2" font-size="15" fill="#8E44AD" font-weight="bold">O</text>
<circle cx="70.0" cy="230.0" r="3.5" fill="#1A1A1A"/>
<text x="52.0" y="238.0" font-size="15" fill="#1A1A1A" font-weight="bold">A</text>
<circle cx="300.0" cy="240.0" r="3.5" fill="#1A1A1A"/>
<text x="310.0" y="254.0" font-size="15" fill="#1A1A1A" font-weight="bold">B</text>
<circle cx="160.0" cy="60.0" r="3.5" fill="#1A1A1A"/>
<text x="154.0" y="50.0" font-size="15" fill="#1A1A1A" font-weight="bold">C</text>
</svg>
                                    </div>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Cas particulier du triangle rectangle :</strong> le centre du cercle circonscrit à un triangle rectangle est le <strong>milieu de son hypoténuse</strong>.
                                    </div>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg" style="max-width:360px; display:block; margin:0 auto; font-family:sans-serif;">
<circle cx="195.0" cy="150.0" r="154.0" fill="none" stroke="#8E44AD" stroke-width="2"/>
<polygon points="70.0,60.0 320.0,240.0 70.0,240.0" fill="none" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="70" y1="60" x2="320" y2="240" stroke="#2E5C8A" stroke-width="2" stroke-dasharray="6,4"/>
<polyline points="84,240 84,226 70,226" fill="none" stroke="#555" stroke-width="1.3"/>
<circle cx="195.0" cy="150.0" r="4" fill="#8E44AD"/>
<text x="205.0" y="142.0" font-size="15" fill="#8E44AD" font-weight="bold">O</text>
<circle cx="70.0" cy="60.0" r="3.5" fill="#1A1A1A"/>
<text x="50.0" y="64.0" font-size="15" fill="#1A1A1A" font-weight="bold">A</text>
<circle cx="320.0" cy="240.0" r="3.5" fill="#1A1A1A"/>
<text x="330.0" y="244.0" font-size="15" fill="#1A1A1A" font-weight="bold">B</text>
<circle cx="70.0" cy="240.0" r="3.5" fill="#1A1A1A"/>
<text x="50.0" y="254.0" font-size="15" fill="#1A1A1A" font-weight="bold">C</text>
</svg>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-TRImediatrices"
                                        onclick="startQuizFromButton('quiz-area-TRImediatrices', '510601')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-TRImediatrices"></div>
                                </section>

                                <!-- SECTION : AIRE DU TRIANGLE -->
                                <section class="course-section">
                                    <h2 class="section-title">Calculer l'aire d'un triangle</h2>
                                    <div class="notion-box">
                                        <blockquote>$\\text{Aire} = \\dfrac{\\text{base} \\times \\text{hauteur}}{2}$</blockquote>
                                    </div>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 380 280" xmlns="http://www.w3.org/2000/svg" style="max-width:380px; display:block; margin:0 auto; font-family:sans-serif;">
<polygon points="220.0,60.0 60.0,240.0 320.0,240.0" fill="none" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="220" y1="60" x2="220.0" y2="240.0" stroke="#B5651D" stroke-width="2" stroke-dasharray="6,4"/>
<polyline points="210.0,240.0 210.0,230.0 220.0,230.0" fill="none" stroke="#555" stroke-width="1.3"/>
<circle cx="220.0" cy="60.0" r="3.5" fill="#1A1A1A"/>
<text x="214.0" y="48.0" font-size="15" fill="#1A1A1A" font-weight="bold">A</text>
<circle cx="60.0" cy="240.0" r="3.5" fill="#1A1A1A"/>
<text x="42.0" y="250.0" font-size="15" fill="#1A1A1A" font-weight="bold">B</text>
<circle cx="320.0" cy="240.0" r="3.5" fill="#1A1A1A"/>
<text x="330.0" y="250.0" font-size="15" fill="#1A1A1A" font-weight="bold">C</text>
<circle cx="220.0" cy="240.0" r="3" fill="#B5651D"/>
<text x="226.0" y="260.0" font-size="14" fill="#B5651D" font-weight="bold">H</text>
<text x="190.0" y="264.0" font-size="15" fill="#1A1A1A" text-anchor="middle" font-weight="bold">base</text>
<text x="236.0" y="150.0" font-size="15" fill="#B5651D" text-anchor="start" font-weight="bold">hauteur</text>
</svg>
                                    </div>
                                    <p>Exemple : un triangle a une base de $8$ cm et une hauteur (relative à cette base) de $5$ cm. Son aire est $\\dfrac{8 \\times 5}{2} = \\dfrac{40}{2} = 20$ cm².</p>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> n'importe quel côté peut servir de « base », à condition d'utiliser la hauteur qui lui correspond (celle qui est perpendiculaire à cette base et qui passe par le sommet opposé) !
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-TRIaire"
                                        onclick="startQuizFromButton('quiz-area-TRIaire', '510701')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-TRIaire"></div>
                                </section>

                                <!-- SECTION : CAS DES TRIANGLES PARTICULIERS -->
                                <section class="course-section">
                                    <h2 class="section-title">Cas des triangles particuliers</h2>
                                    <div class="notion-box">
                                        <p>Dans un triangle <strong>isocèle</strong> en $A$, la hauteur, la médiane et la médiatrice issues de $A$ (relative au côté $[BC]$) sont <strong>confondues</strong> : c'est aussi l'axe de symétrie du triangle.</p>
                                    </div>
                                    <div class="notion-box">
                                        <p>Dans un triangle <strong>équilatéral</strong>, les $3$ hauteurs, les $3$ médianes et les $3$ médiatrices sont confondues deux à deux (chaque sommet a sa propre droite qui joue les trois rôles à la fois), et l'orthocentre, le centre de gravité et le centre du cercle circonscrit sont <strong>le même point</strong>.</p>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-TRIparticuliers"
                                        onclick="startQuizFromButton('quiz-area-TRIparticuliers', '510801')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-TRIparticuliers"></div>
                                </section>

                                <!-- SECTION : POUR ALLER PLUS LOIN -->
                                <section class="course-section">
                                    <h2 class="section-title">Pour aller plus loin (culture mathématique)</h2>
                                    <div class="notion-box">
                                        <p>Dans un triangle quelconque, l'orthocentre, le centre de gravité (point de concours des médianes) et le centre du cercle circonscrit sont toujours <strong>alignés</strong> sur une même droite, appelée la <strong>droite d'Euler</strong>. Il existe même un cercle remarquable, le <strong>cercle des neuf points</strong>, qui passe par neuf points particuliers du triangle (les milieux des côtés, les pieds des hauteurs, et les milieux des segments reliant l'orthocentre à chaque sommet) !</p>
                                        <p>La règle et le compas permettent des constructions étonnantes : on peut par exemple construire un <strong>pentagone régulier</strong> en suivant un programme de construction précis, ou dessiner des <strong>rosaces trilobées</strong> et le célèbre <strong>triangle de Reuleaux</strong> (une forme de largeur constante, utilisée par exemple dans certains forets de perceuse pour percer des trous presque carrés !). Les <strong>ogives</strong> de l'art gothique, ces arcs en pointe que l'on voit dans les cathédrales, se construisent elles aussi à partir d'arcs de cercle et de triangles.</p>
                                    </div>
                                </section>
                            </div>
                        `
    }
};
