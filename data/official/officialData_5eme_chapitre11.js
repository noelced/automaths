// ============================================================
// data/official/officialData_5eme_chapitre11.js
// Niveau : 5ème — Thème : ESPACE ET GÉOMÉTRIE
// Chapitre 11 : Parallélogrammes
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.
// NOTE : les codes des quiz ("btn-check-understanding") sont des
// identifiants prévisionnels (511xxx) à créer/associer dans la
// banque de quiz du site avant mise en ligne.
// Cette version s'appuie notamment sur les « Attendus de fin
// d'année de 5e » (rubriques Grandeurs et mesures, et Espace et
// géométrie > Utiliser les notions de géométrie plane pour
// démontrer) fournis par l'enseignant.
// Ce chapitre clôt le thème « Espace et géométrie » du sommaire.

var chapterData_5eme_11 = {
    themeName: "ESPACE ET GÉOMÉTRIE",
    chapter: {
        id: 11,
        title: "Parallélogrammes",
        eleve: "non",
        content: `
                            <div class="course-container">
                                <!-- SECTION : OBJECTIFS -->
                                <section class="course-section">
                                    <p><strong>Objectifs :</strong></p>
                                    <ul>
                                        <li>Je révise la reconnaissance des quadrilatères usuels dans des figures complexes</li>
                                        <li>Je sais définir et construire un parallélogramme</li>
                                        <li>Je connais les propriétés caractéristiques des côtés opposés et des diagonales d'un parallélogramme</li>
                                        <li>Je sais utiliser une propriété caractéristique pour construire un parallélogramme ou donner la nature d'un quadrilatère</li>
                                        <li>Je sais définir les parallélogrammes particuliers (rectangle, losange, carré) et j'en connais les propriétés</li>
                                        <li>Je sais calculer l'aire d'un parallélogramme et de figures complexes</li>
                                        <li>Je sais résoudre des problèmes faisant appel à des conversions d'unités de longueur et d'aire</li>
                                    </ul>
                                </section>

                                <!-- SECTION : RAPPEL QUADRILATERES -->
                                <section class="course-section">
                                    <h2 class="section-title">Rappel : les quadrilatères usuels</h2>
                                    <div class="notion-box">
                                        <p>Un <strong>quadrilatère</strong> est un polygone à $4$ côtés. Parmi les quadrilatères, certains ont des noms particuliers selon leurs propriétés : <strong>parallélogramme</strong>, <strong>rectangle</strong>, <strong>losange</strong>, <strong>carré</strong>, <strong>trapèze</strong>. Un polygone à $5$ côtés est un <strong>pentagone</strong>, à $6$ côtés un <strong>hexagone</strong>.</p>
                                    </div>
                                    <p class="indent-text">Pour reconnaître un quadrilatère particulier dans une figure complexe, on s'appuie sur le <strong>codage</strong> de la figure (traits égaux, angles droits...) et on <strong>justifie</strong> toujours sa réponse en citant la propriété observée.</p>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PARArappelquadri"
                                        onclick="startQuizFromButton('quiz-area-PARArappelquadri', '511101')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PARArappelquadri"></div>
                                </section>

                                <!-- SECTION : DEFINIR ET CONSTRUIRE UN PARALLELOGRAMME -->
                                <section class="course-section">
                                    <h2 class="section-title">Définir et construire un parallélogramme</h2>
                                    <div class="notion-box">
                                        <p>Un <strong>parallélogramme</strong> est un quadrilatère dont les côtés opposés sont <strong>parallèles deux à deux</strong>.</p>
                                        <blockquote>$ABCD$ est un parallélogramme si $(AB) /\\!/ (DC)$ et $(AD) /\\!/ (BC)$.</blockquote>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Construire un parallélogramme à l'aide des diagonales
                                        <ul>
                                            <li>On trace deux segments $[AC]$ et $[BD]$ qui se coupent en leur <strong>milieu</strong> commun $O$.</li>
                                            <li>On relie les $4$ extrémités dans l'ordre $A$, $B$, $C$, $D$ : le quadrilatère $ABCD$ obtenu est un parallélogramme.</li>
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PARAdefconstruire"
                                        onclick="startQuizFromButton('quiz-area-PARAdefconstruire', '511201')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PARAdefconstruire"></div>
                                </section>

                                <!-- SECTION : PROPRIÉTÉS CARACTÉRISTIQUES -->
                                <section class="course-section">
                                    <h2 class="section-title">Les propriétés caractéristiques du parallélogramme</h2>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width:400px; display:block; margin:0 auto; font-family:sans-serif;">
<polygon points="70.0,230.0 280.0,250.0 340.0,110.0 130.0,90.0" fill="none" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="70" y1="230" x2="340.0" y2="110.0" stroke="#8E44AD" stroke-width="1.6" stroke-dasharray="6,4"/>
<line x1="280" y1="250" x2="130" y2="90" stroke="#8E44AD" stroke-width="1.6" stroke-dasharray="6,4"/>
<line x1="175.6" y1="234.0" x2="174.4" y2="246.0" stroke="#2E5C8A" stroke-width="2"/>
<line x1="235.6" y1="94.0" x2="234.4" y2="106.0" stroke="#2E5C8A" stroke-width="2"/>
<line x1="93.7" y1="159.5" x2="104.7" y2="164.2" stroke="#2F7D3C" stroke-width="2"/><line x1="95.3" y1="155.8" x2="106.3" y2="160.5" stroke="#2F7D3C" stroke-width="2"/>
<line x1="303.7" y1="179.5" x2="314.7" y2="184.2" stroke="#2F7D3C" stroke-width="2"/><line x1="305.3" y1="175.8" x2="316.3" y2="180.5" stroke="#2F7D3C" stroke-width="2"/>
<line x1="135.5" y1="195.4" x2="139.5" y2="204.6" stroke="#8E44AD" stroke-width="2"/>
<line x1="270.5" y1="135.4" x2="274.5" y2="144.6" stroke="#8E44AD" stroke-width="2"/>
<line x1="239.9" y1="214.5" x2="247.2" y2="207.7" stroke="#B5651D" stroke-width="2"/><line x1="237.8" y1="212.3" x2="245.1" y2="205.5" stroke="#B5651D" stroke-width="2"/>
<line x1="164.9" y1="134.5" x2="172.2" y2="127.7" stroke="#B5651D" stroke-width="2"/><line x1="162.8" y1="132.3" x2="170.1" y2="125.5" stroke="#B5651D" stroke-width="2"/>
<circle cx="205.0" cy="170.0" r="3" fill="#8E44AD"/>
<text x="213.0" y="164.0" font-size="14" fill="#8E44AD" font-weight="bold">O</text>
<circle cx="70.0" cy="230.0" r="3.5" fill="#1A1A1A"/>
<text x="52.0" y="240.0" font-size="15" fill="#1A1A1A" font-weight="bold">A</text>
<circle cx="280.0" cy="250.0" r="3.5" fill="#1A1A1A"/>
<text x="290.0" y="260.0" font-size="15" fill="#1A1A1A" font-weight="bold">B</text>
<circle cx="340.0" cy="110.0" r="3.5" fill="#1A1A1A"/>
<text x="350.0" y="104.0" font-size="15" fill="#1A1A1A" font-weight="bold">C</text>
<circle cx="130.0" cy="90.0" r="3.5" fill="#1A1A1A"/>
<text x="112.0" y="84.0" font-size="15" fill="#1A1A1A" font-weight="bold">D</text>
</svg>
                                    </div>
                                    <div class="notion-box">
                                        <p>Dans un parallélogramme $ABCD$ :</p>
                                        <ul>
                                            <li>les côtés opposés sont parallèles <strong>et de même longueur</strong> : $AB = DC$ et $AD = BC$ ;</li>
                                            <li>les diagonales $[AC]$ et $[BD]$ se coupent en leur <strong>milieu</strong> commun $O$.</li>
                                        </ul>
                                    </div>
                                    <div class="notion-box">
                                        <p><strong>Réciproques (très utiles pour démontrer !)</strong></p>
                                        <ul>
                                            <li>Si un quadrilatère a ses <strong>diagonales qui se coupent en leur milieu</strong>, alors c'est un parallélogramme.</li>
                                            <li>Si un quadrilatère a ses <strong>côtés opposés de même longueur et parallèles</strong>, deux à deux, alors c'est un parallélogramme.</li>
                                        </ul>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> $ABCD$ est un quadrilatère tel que les diagonales $[AC]$ et $[BD]$ se coupent en un point $O$ avec $OA = OC = 4$ cm et $OB = OD = 3$ cm. Que peut-on dire de $ABCD$ ?
                                        <ul>
                                            <li>Les diagonales de $ABCD$ se coupent en leur milieu $O$ (car $OA=OC$ et $OB=OD$).</li>
                                            <li>D'après la propriété réciproque, $ABCD$ est donc un <strong>parallélogramme</strong>.</li>
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PARAproprietes"
                                        onclick="startQuizFromButton('quiz-area-PARAproprietes', '511301')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PARAproprietes"></div>
                                </section>

                                <!-- SECTION : PARALLELOGRAMMES PARTICULIERS -->
                                <section class="course-section">
                                    <h2 class="section-title">Les parallélogrammes particuliers</h2>

                                    <h3 class="section-title">Le rectangle</h3>
                                    <div class="notion-box">
                                        <p>Un <strong>rectangle</strong> est un parallélogramme qui a un <strong>angle droit</strong> (il en a alors automatiquement $4$).</p>
                                    </div>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 390 280" xmlns="http://www.w3.org/2000/svg" style="max-width:380px; display:block; margin:0 auto; font-family:sans-serif;">
<polygon points="70.0,220.0 320.0,220.0 320.0,90.0 70.0,90.0" fill="none" stroke="#1A1A1A" stroke-width="2.5"/>
<rect x="70" y="208" width="12" height="12" fill="none" stroke="#555" stroke-width="1.3"/>
<rect x="308" y="208" width="12" height="12" fill="none" stroke="#555" stroke-width="1.3"/>
<rect x="308" y="90" width="12" height="12" fill="none" stroke="#555" stroke-width="1.3"/>
<rect x="70" y="90" width="12" height="12" fill="none" stroke="#555" stroke-width="1.3"/>
<line x1="70" y1="220" x2="320" y2="90" stroke="#8E44AD" stroke-width="1.8" stroke-dasharray="6,4"/>
<line x1="320" y1="220" x2="70" y2="90" stroke="#8E44AD" stroke-width="1.8" stroke-dasharray="6,4"/>
<line x1="129.7" y1="182.2" x2="135.3" y2="192.8" stroke="#8E44AD" stroke-width="2"/>
<line x1="254.7" y1="117.2" x2="260.3" y2="127.8" stroke="#8E44AD" stroke-width="2"/>
<line x1="254.7" y1="192.8" x2="260.3" y2="182.2" stroke="#8E44AD" stroke-width="2"/>
<line x1="129.7" y1="127.8" x2="135.3" y2="117.2" stroke="#8E44AD" stroke-width="2"/>
<circle cx="195.0" cy="155.0" r="3" fill="#8E44AD"/>
<text x="203.0" y="149.0" font-size="14" fill="#8E44AD" font-weight="bold">O</text>
<circle cx="70.0" cy="220.0" r="3.5" fill="#1A1A1A"/>
<text x="52.0" y="226.0" font-size="15" fill="#1A1A1A" font-weight="bold">A</text>
<circle cx="320.0" cy="220.0" r="3.5" fill="#1A1A1A"/>
<text x="330.0" y="226.0" font-size="15" fill="#1A1A1A" font-weight="bold">B</text>
<circle cx="320.0" cy="90.0" r="3.5" fill="#1A1A1A"/>
<text x="330.0" y="86.0" font-size="15" fill="#1A1A1A" font-weight="bold">C</text>
<circle cx="70.0" cy="90.0" r="3.5" fill="#1A1A1A"/>
<text x="52.0" y="86.0" font-size="15" fill="#1A1A1A" font-weight="bold">D</text>
</svg>
                                    </div>
                                    <div class="notion-box">
                                        <p>Propriété caractéristique : les diagonales d'un rectangle ont la <strong>même longueur</strong> (en plus de se couper en leur milieu).</p>
                                    </div>

                                    <h3 class="section-title">Le losange</h3>
                                    <div class="notion-box">
                                        <p>Un <strong>losange</strong> est un parallélogramme qui a deux côtés consécutifs de <strong>même longueur</strong> (il a alors automatiquement ses $4$ côtés égaux).</p>
                                    </div>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 380 280" xmlns="http://www.w3.org/2000/svg" style="max-width:360px; display:block; margin:0 auto; font-family:sans-serif;">
<polygon points="190.0,240.0 300.0,150.0 190.0,60.0 80.0,150.0" fill="none" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="241.2" y1="190.4" x2="248.8" y2="199.6" stroke="#2E5C8A" stroke-width="2"/>
<line x1="241.2" y1="109.6" x2="248.8" y2="100.4" stroke="#2E5C8A" stroke-width="2"/>
<line x1="138.8" y1="109.6" x2="131.2" y2="100.4" stroke="#2E5C8A" stroke-width="2"/>
<line x1="138.8" y1="190.4" x2="131.2" y2="199.6" stroke="#2E5C8A" stroke-width="2"/>
<line x1="190" y1="240" x2="190" y2="60" stroke="#8E44AD" stroke-width="1.8" stroke-dasharray="6,4"/>
<line x1="300" y1="150" x2="80" y2="150" stroke="#8E44AD" stroke-width="1.8" stroke-dasharray="6,4"/>
<polyline points="180.0,150.0 180.0,140.0 190.0,140.0" fill="none" stroke="#555" stroke-width="1.3"/>
<circle cx="190.0" cy="150.0" r="3" fill="#8E44AD"/>
<text x="200.0" y="142.0" font-size="14" fill="#8E44AD" font-weight="bold">O</text>
<circle cx="190.0" cy="240.0" r="3.5" fill="#1A1A1A"/>
<text x="184.0" y="260.0" font-size="15" fill="#1A1A1A" font-weight="bold">A</text>
<circle cx="300.0" cy="150.0" r="3.5" fill="#1A1A1A"/>
<text x="314.0" y="154.0" font-size="15" fill="#1A1A1A" font-weight="bold">B</text>
<circle cx="190.0" cy="60.0" r="3.5" fill="#1A1A1A"/>
<text x="184.0" y="50.0" font-size="15" fill="#1A1A1A" font-weight="bold">C</text>
<circle cx="80.0" cy="150.0" r="3.5" fill="#1A1A1A"/>
<text x="58.0" y="154.0" font-size="15" fill="#1A1A1A" font-weight="bold">D</text>
</svg>
                                    </div>
                                    <div class="notion-box">
                                        <p>Propriété caractéristique : les diagonales d'un losange sont <strong>perpendiculaires</strong> (en plus de se couper en leur milieu).</p>
                                    </div>

                                    <h3 class="section-title">Le carré</h3>
                                    <div class="notion-box">
                                        <p>Un <strong>carré</strong> est à la fois un <strong>rectangle</strong> et un <strong>losange</strong> : il a donc $4$ angles droits, $4$ côtés égaux, et des diagonales qui sont à la fois <strong>égales</strong>, <strong>perpendiculaires</strong>, et qui se coupent en leur milieu.</p>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PARAparticuliers"
                                        onclick="startQuizFromButton('quiz-area-PARAparticuliers', '511401')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PARAparticuliers"></div>
                                </section>

                                <!-- SECTION : AIRE DU PARALLELOGRAMME -->
                                <section class="course-section">
                                    <h2 class="section-title">Calculer l'aire d'un parallélogramme et de figures complexes</h2>
                                    <div class="notion-box">
                                        <blockquote>$\\text{Aire du parallélogramme} = \\text{base} \\times \\text{hauteur}$</blockquote>
                                    </div>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" style="max-width:400px; display:block; margin:0 auto; font-family:sans-serif;">
<polygon points="60.0,240.0 300.0,240.0 380.0,90.0 140.0,90.0" fill="none" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="140" y1="90" x2="140" y2="240" stroke="#B5651D" stroke-width="2" stroke-dasharray="6,4"/>
<polyline points="130,240 130,230 140,230" fill="none" stroke="#555" stroke-width="1.3"/>
<circle cx="60.0" cy="240.0" r="3.5" fill="#1A1A1A"/>
<text x="44.0" y="246.0" font-size="15" fill="#1A1A1A" font-weight="bold">P</text>
<circle cx="300.0" cy="240.0" r="3.5" fill="#1A1A1A"/>
<text x="310.0" y="246.0" font-size="15" fill="#1A1A1A" font-weight="bold">Q</text>
<circle cx="380.0" cy="90.0" r="3.5" fill="#1A1A1A"/>
<text x="390.0" y="84.0" font-size="15" fill="#1A1A1A" font-weight="bold">R</text>
<circle cx="140.0" cy="90.0" r="3.5" fill="#1A1A1A"/>
<text x="134.0" y="80.0" font-size="15" fill="#1A1A1A" font-weight="bold">S</text>
<text x="180.0" y="262.0" font-size="15" fill="#1A1A1A" text-anchor="middle" font-weight="bold">base</text>
<text x="126.0" y="165.0" font-size="15" fill="#B5651D" text-anchor="end" font-weight="bold">hauteur</text>
<text x="146.0" y="258.0" font-size="13" fill="#B5651D" font-weight="bold">H</text>
</svg>
                                    </div>
                                    <p>Exemple : un parallélogramme de base $12$ cm et de hauteur $7$ cm a pour aire $12 \\times 7 = 84$ cm².</p>
                                    <div class="notion-box">
                                        <p>Pour calculer l'aire d'une <strong>figure complexe</strong> (un assemblage de plusieurs figures), on la <strong>décompose</strong> en figures usuelles (rectangles, triangles, parallélogrammes...), on calcule l'aire de chaque morceau, puis on additionne (ou on soustrait, si une partie est retirée).</p>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Calculer l'aire d'une figure en forme de « L », composée d'un rectangle de $10$ cm $\\times$ $6$ cm auquel on a retiré un rectangle de $4$ cm $\\times$ $3$ cm dans un coin
                                        <ul>
                                            <li>Aire du grand rectangle : $10 \\times 6 = 60$ cm².</li>
                                            <li>Aire du petit rectangle retiré : $4 \\times 3 = 12$ cm².</li>
                                            <li>Aire de la figure en L : $60 - 12 = 48$ cm².</li>
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PARAaire"
                                        onclick="startQuizFromButton('quiz-area-PARAaire', '511501')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PARAaire"></div>
                                </section>

                                <!-- SECTION : CONVERSIONS -->
                                <section class="course-section">
                                    <h2 class="section-title">Résoudre des problèmes avec des conversions d'unités</h2>
                                    <div class="notion-box">
                                        <p>Pour résoudre un problème d'aire, il faut souvent commencer par convertir toutes les <strong>longueurs</strong> dans la <strong>même unité</strong> avant de calculer, puis vérifier que le résultat final est exprimé dans une <strong>unité d'aire</strong> adaptée.</p>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Calculer, en m², l'aire d'un parallélogramme de base $3,2$ m et de hauteur $60$ cm
                                        <ul>
                                            <li>On convertit dans la même unité : $60$ cm $= 0,6$ m.</li>
                                            <li>Aire $= 3,2 \\times 0,6 = 1,92$ m².</li>
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PARAconversions"
                                        onclick="startQuizFromButton('quiz-area-PARAconversions', '511601')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PARAconversions"></div>
                                </section>

                                <!-- SECTION : POUR ALLER PLUS LOIN -->
                                <section class="course-section">
                                    <h2 class="section-title">Pour aller plus loin (culture mathématique)</h2>
                                    <div class="notion-box">
                                        <p>Le <strong>théorème de Varignon</strong>, découvert par le mathématicien français Pierre Varignon, énonce un résultat surprenant : si l'on relie les <strong>milieux des côtés</strong> d'un quadrilatère <strong>quelconque</strong> (même s'il n'est ni convexe, ni régulier), on obtient toujours... un <strong>parallélogramme</strong> !</p>
                                    </div>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width:380px; display:block; margin:0 auto; font-family:sans-serif;">
<polygon points="60.0,220.0 220.0,260.0 340.0,120.0 160.0,40.0" fill="none" stroke="#999" stroke-width="1.8" stroke-dasharray="5,4"/>
<polygon points="140.0,240.0 280.0,190.0 250.0,80.0 110.0,130.0" fill="none" stroke="#2E5C8A" stroke-width="2.5"/>
<circle cx="60.0" cy="220.0" r="3" fill="#555"/>
<text x="42.0" y="226.0" font-size="14" fill="#555" font-weight="bold">A</text>
<circle cx="220.0" cy="260.0" r="3" fill="#555"/>
<text x="230.0" y="270.0" font-size="14" fill="#555" font-weight="bold">B</text>
<circle cx="340.0" cy="120.0" r="3" fill="#555"/>
<text x="350.0" y="112.0" font-size="14" fill="#555" font-weight="bold">C</text>
<circle cx="160.0" cy="40.0" r="3" fill="#555"/>
<text x="142.0" y="34.0" font-size="14" fill="#555" font-weight="bold">D</text>
<circle cx="140.0" cy="240.0" r="3.5" fill="#2E5C8A"/>
<text x="132.0" y="260.0" font-size="14" fill="#2E5C8A" font-weight="bold">M1</text>
<circle cx="280.0" cy="190.0" r="3.5" fill="#2E5C8A"/>
<text x="294.0" y="194.0" font-size="14" fill="#2E5C8A" font-weight="bold">M2</text>
<circle cx="250.0" cy="80.0" r="3.5" fill="#2E5C8A"/>
<text x="258.0" y="70.0" font-size="14" fill="#2E5C8A" font-weight="bold">M3</text>
<circle cx="110.0" cy="130.0" r="3.5" fill="#2E5C8A"/>
<text x="82.0" y="130.0" font-size="14" fill="#2E5C8A" font-weight="bold">M4</text>
</svg>
                                    </div>
                                    <div class="notion-box">
                                        <p>Le parallélogramme est aussi central en <strong>physique</strong> : la <strong>règle du parallélogramme</strong> permet d'additionner deux forces (ou deux vitesses) représentées par des flèches, en construisant le parallélogramme qu'elles engendrent.</p>
                                    </div>
                                </section>
                            </div>
                        `
    }
};
