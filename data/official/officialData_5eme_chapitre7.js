// ============================================================
// data/official/officialData_5eme_chapitre7.js
// Niveau : 5ème — Thème : ESPACE ET GÉOMÉTRIE
// Chapitre 7 : Représentation de l'espace
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.
// NOTE : les codes des quiz ("btn-check-understanding") sont des
// identifiants prévisionnels (57xxx) à créer/associer dans la
// banque de quiz du site avant mise en ligne.
// Cette version s'appuie notamment sur les « Attendus de fin
// d'année de 5e » (rubriques Grandeurs et mesures, et Espace et
// géométrie > Représenter l'espace) fournis par l'enseignant.

var chapterData_5eme_7 = {
    themeName: "ESPACE ET GÉOMÉTRIE",
    chapter: {
        id: 7,
        title: "Représentation de l'espace",
        eleve: "non",
        content: `
                            <div class="course-container">
                                <!-- SECTION : OBJECTIFS -->
                                <section class="course-section">
                                    <p><strong>Objectifs :</strong></p>
                                    <ul>
                                        <li>Je sais construire et mettre en relation différentes représentations en perspective cavalière du pavé droit, du cube, du cylindre de révolution et du prisme droit</li>
                                        <li>Je sais mettre en relation une représentation en perspective cavalière et un patron d'un pavé, d'un prisme droit ou d'un cylindre de révolution</li>
                                        <li>Je sais calculer le volume du cube, du pavé droit et du prisme droit</li>
                                        <li>Je connais et je sais convertir les unités usuelles de volume et de capacité</li>
                                        <li>Je sais calculer l'aire du disque et le volume du cylindre de révolution</li>
                                    </ul>
                                </section>

                                <!-- SECTION : PERSPECTIVE CAVALIÈRE -->
                                <section class="course-section">
                                    <h2 class="section-title">Représenter un solide en perspective cavalière</h2>
                                    <div class="notion-box">
                                        <p>La <strong>perspective cavalière</strong> est une façon de représenter un solide en trois dimensions sur une feuille plane, en respectant quelques règles :</p>
                                        <ul>
                                            <li>les <strong>arêtes visibles</strong> sont tracées en <strong>traits pleins</strong> ;</li>
                                            <li>les <strong>arêtes cachées</strong> sont tracées en <strong>pointillés</strong> ;</li>
                                            <li>les arêtes qui sont parallèles et de même longueur sur le solide réel le restent sur le dessin (les faces avant et arrière d'un pavé restent identiques et parallèles) ;</li>
                                            <li>les <strong>fuyantes</strong> (les arêtes qui représentent la profondeur) sont tracées obliquement, souvent en réduisant leur longueur.</li>
                                        </ul>
                                    </div>
                                    <p><strong>Exemple : un pavé droit de longueur $L$, largeur $l$ et hauteur $h$</strong></p>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 440 320" xmlns="http://www.w3.org/2000/svg" style="max-width:420px; display:block; margin:0 auto; font-family:sans-serif;">
<line x1="100" y1="250" x2="280" y2="250" stroke="#2E5C8A" stroke-width="2.5" stroke-linecap="round"/>
<line x1="280" y1="250" x2="280" y2="150" stroke="#2E5C8A" stroke-width="2.5" stroke-linecap="round"/>
<line x1="280" y1="150" x2="100" y2="150" stroke="#2E5C8A" stroke-width="2.5" stroke-linecap="round"/>
<line x1="100" y1="150" x2="100" y2="250" stroke="#2E5C8A" stroke-width="2.5" stroke-linecap="round"/>
<line x1="100" y1="150" x2="160" y2="110" stroke="#2E5C8A" stroke-width="2.5" stroke-linecap="round"/>
<line x1="160" y1="110" x2="340" y2="110" stroke="#2E5C8A" stroke-width="2.5" stroke-linecap="round"/>
<line x1="280" y1="150" x2="340" y2="110" stroke="#2E5C8A" stroke-width="2.5" stroke-linecap="round"/>
<line x1="340" y1="110" x2="340" y2="210" stroke="#2E5C8A" stroke-width="2.5" stroke-linecap="round"/>
<line x1="340" y1="210" x2="280" y2="250" stroke="#2E5C8A" stroke-width="2.5" stroke-linecap="round"/>
<line x1="100" y1="250" x2="160" y2="210" stroke="#888" stroke-width="2.5" stroke-dasharray="6,4" stroke-linecap="round"/>
<line x1="160" y1="210" x2="160" y2="110" stroke="#888" stroke-width="2.5" stroke-dasharray="6,4" stroke-linecap="round"/>
<line x1="160" y1="210" x2="340" y2="210" stroke="#888" stroke-width="2.5" stroke-dasharray="6,4" stroke-linecap="round"/>
<text x="190.0" y="272" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">L</text>
<text x="82" y="205.0" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">h</text>
<text x="326.0" y="234.0" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">l</text>
</svg>
                                    </div>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> le <strong>cube</strong> est un pavé droit particulier dont les trois dimensions $L$, $l$ et $h$ sont égales.
                                    </div>
                                    <p>On représente de la même façon un <strong>cylindre de révolution</strong> : les deux bases sont des disques (dessinés en <strong>ellipses</strong> pour donner l'effet de la profondeur), et la partie cachée de la base arrière est tracée en pointillés.</p>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width:380px; display:block; margin:0 auto; font-family:sans-serif;">
<line x1="110" y1="90" x2="110" y2="230" stroke="#2E5C8A" stroke-width="2.5"/>
<line x1="290" y1="90" x2="290" y2="230" stroke="#2E5C8A" stroke-width="2.5"/>
<path d="M 110 230 A 90 28 0 0 0 290 230" fill="none" stroke="#888" stroke-width="2" stroke-dasharray="5,4"/>
<path d="M 110 230 A 90 28 0 0 1 290 230" fill="none" stroke="#2E5C8A" stroke-width="2.5"/>
<ellipse cx="200" cy="90" rx="90" ry="28" fill="#EAF1F8" stroke="#2E5C8A" stroke-width="2.5"/>
<line x1="200" y1="90" x2="290" y2="90" stroke="#B5651D" stroke-width="2" stroke-dasharray="4,3"/>
<circle cx="200" cy="90" r="2.5" fill="#B5651D"/>
<text x="245.0" y="82" font-size="14" fill="#B5651D" text-anchor="middle" font-weight="bold">r</text>
<line x1="85" y1="90" x2="85" y2="230" stroke="#1A1A1A" stroke-width="1.5"/>
<line x1="80" y1="90" x2="90" y2="90" stroke="#1A1A1A" stroke-width="1.5"/>
<line x1="80" y1="230" x2="90" y2="230" stroke="#1A1A1A" stroke-width="1.5"/>
<text x="72" y="165.0" font-size="15" fill="#1A1A1A" text-anchor="middle" font-weight="bold">h</text>
</svg>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-REPESreconnaitre"
                                        onclick="startQuizFromButton('quiz-area-REPESreconnaitre', '57101')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-REPESreconnaitre"></div>
                                </section>

                                <!-- SECTION : PATRONS -->
                                <section class="course-section">
                                    <h2 class="section-title">Le patron d'un solide</h2>
                                    <div class="notion-box">
                                        <p>Le <strong>patron</strong> d'un solide est une figure plane que l'on peut découper puis plier pour reconstituer ce solide. Il représente toutes les <strong>faces</strong> du solide, à plat, reliées par certaines de leurs arêtes.</p>
                                    </div>
                                    <p><strong>Le patron d'un pavé droit</strong> (les $6$ faces sont des rectangles, opposées deux à deux et identiques) :</p>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 460 330" xmlns="http://www.w3.org/2000/svg" style="max-width:420px; display:block; margin:0 auto; font-family:sans-serif;">
<rect x="20" y="150" width="70" height="80" fill="#EAF1F8" stroke="#2E5C8A" stroke-width="2.5"/>
<rect x="90" y="150" width="140" height="80" fill="#EAF1F8" stroke="#2E5C8A" stroke-width="2.5"/>
<rect x="230" y="150" width="70" height="80" fill="#EAF1F8" stroke="#2E5C8A" stroke-width="2.5"/>
<rect x="300" y="150" width="140" height="80" fill="#EAF1F8" stroke="#2E5C8A" stroke-width="2.5"/>
<rect x="90" y="80" width="140" height="70" fill="#EAF1F8" stroke="#2E5C8A" stroke-width="2.5"/>
<rect x="90" y="230" width="140" height="70" fill="#EAF1F8" stroke="#2E5C8A" stroke-width="2.5"/>
<text x="160.0" y="72" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">L</text>
<text x="12" y="195.0" font-size="14" fill="#1A1A1A" text-anchor="end" font-weight="bold">h</text>
<text x="55.0" y="318" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">l</text>
</svg>
                                    </div>
                                    <p class="indent-text">On retrouve bien les $3$ paires de faces rectangulaires : deux faces $L \\times h$, deux faces $l \\times h$ et deux faces $L \\times l$.</p>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-REPESpatronpave"
                                        onclick="startQuizFromButton('quiz-area-REPESpatronpave', '57201')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-REPESpatronpave"></div>

                                    <p><strong>Le patron d'un cylindre de révolution</strong> (deux disques identiques et un rectangle) :</p>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 543 150" xmlns="http://www.w3.org/2000/svg" style="max-width:460px; display:block; margin:0 auto; font-family:sans-serif;">
<circle cx="55" cy="70.0" r="45" fill="#EAF1F8" stroke="#2E5C8A" stroke-width="2.5"/>
<line x1="55" y1="70.0" x2="100" y2="70.0" stroke="#B5651D" stroke-width="1.8" stroke-dasharray="3,3"/>
<text x="77.5" y="64.0" font-size="13" fill="#B5651D" text-anchor="middle" font-weight="bold">r</text>
<rect x="130" y="20.0" width="282.7433388230814" height="100" fill="#FBEEE0" stroke="#2F7D3C" stroke-width="2.5"/>
<text x="271.37166941154067" y="10.0" font-size="14" fill="#2F7D3C" text-anchor="middle" font-weight="bold">2πr</text>
<text x="122" y="74.0" font-size="14" fill="#1A1A1A" text-anchor="end" font-weight="bold">h</text>
<circle cx="487.7433388230814" cy="70.0" r="45" fill="#EAF1F8" stroke="#2E5C8A" stroke-width="2.5"/>
</svg>
                                    </div>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> la <strong>largeur du rectangle</strong> (la surface latérale) est égale au <strong>périmètre du disque</strong>, c'est-à-dire à $2 \\pi r$ ! C'est en effet ce rectangle qui, enroulé, forme le tour du cylindre.
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-REPESpatroncyl"
                                        onclick="startQuizFromButton('quiz-area-REPESpatroncyl', '57202')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-REPESpatroncyl"></div>
                                </section>

                                <!-- SECTION : VOLUME DU CUBE ET DU PAVÉ DROIT -->
                                <section class="course-section">
                                    <h2 class="section-title">Calculer le volume du cube et du pavé droit</h2>
                                    <div class="notion-box">
                                        <blockquote>Volume du cube d'arête $c$ : $V = c^3$</blockquote>
                                        <blockquote>Volume du pavé droit de dimensions $L$, $l$ et $h$ : $V = L \\times l \\times h$</blockquote>
                                    </div>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <p>cube d'arête $5$ cm</p>
                                            <p>$V = 5^3$</p>
                                            <p>$V = 125$ cm³</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>pavé $4$ cm $\\times$ $3$ cm $\\times$ $2$ cm</p>
                                            <p>$V = 4 \\times 3 \\times 2$</p>
                                            <p>$V = 24$ cm³</p>
                                        </div>
                                    </div>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Attention aux unités :</strong> un volume s'exprime toujours dans une unité <strong>au cube</strong> (cm³, m³...), jamais dans une unité au carré ! Écrire « $27$ cm² » pour le volume d'un cube de $3$ cm de côté est une erreur : le résultat correct est $3^3 = 27$ <strong>cm³</strong>.
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-REPESvolumecubepave"
                                        onclick="startQuizFromButton('quiz-area-REPESvolumecubepave', '57301')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-REPESvolumecubepave"></div>
                                </section>

                                <!-- SECTION : VOLUME DU PRISME DROIT -->
                                <section class="course-section">
                                    <h2 class="section-title">Calculer le volume du prisme droit</h2>
                                    <div class="notion-box">
                                        <p>Un <strong>prisme droit</strong> est un solide formé de deux <strong>bases identiques</strong> (des polygones, par exemple un triangle ou un trapèze) reliées par des <strong>faces rectangulaires</strong>. Le pavé droit est un prisme droit particulier dont la base est un rectangle.</p>
                                        <blockquote>$V_{prisme} = \\text{Aire de la base} \\times \\text{hauteur}$</blockquote>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Calculer le volume d'un prisme droit dont la base est un triangle d'aire $12$ cm² et dont la hauteur du prisme est $7$ cm
                                        <ul>
                                            <li>On applique la formule : $V = \\text{Aire de la base} \\times \\text{hauteur du prisme}$.</li>
                                            <li>$V = 12 \\times 7$.</li>
                                            <li>$V = 84$ cm³.</li>
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-REPESvolumeprisme"
                                        onclick="startQuizFromButton('quiz-area-REPESvolumeprisme', '57302')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-REPESvolumeprisme"></div>
                                </section>

                                <!-- SECTION : AIRE DU DISQUE ET VOLUME DU CYLINDRE -->
                                <section class="course-section">
                                    <h2 class="section-title">Aire du disque et volume du cylindre de révolution</h2>
                                    <div class="notion-box">
                                        <blockquote>Aire d'un disque de rayon $r$ : $A = \\pi \\times r^2$</blockquote>
                                    </div>
                                    <p>Exemple : l'aire d'un disque de rayon $3$ cm est $A = \\pi \\times 3^2 = 9\\pi \\approx 28,3$ cm².</p>
                                    <div class="notion-box">
                                        <p>Le cylindre de révolution est aussi un prisme particulier, dont la base est un disque. On applique donc la même idée pour son volume :</p>
                                        <blockquote>$V_{cylindre} = \\text{Aire de la base} \\times \\text{hauteur} = \\pi \\times r^2 \\times h$</blockquote>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Calculer le volume d'un cylindre de rayon $3$ cm et de hauteur $10$ cm
                                        <ul>
                                            <li>On calcule d'abord l'aire de la base : $A = \\pi \\times 3^2 = 9\\pi$ cm².</li>
                                            <li>On multiplie par la hauteur : $V = 9\\pi \\times 10 = 90\\pi$.</li>
                                            <li>$V \\approx 282,7$ cm³ (avec $\\pi \\approx 3,14$).</li>
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-REPESairevolumecyl"
                                        onclick="startQuizFromButton('quiz-area-REPESairevolumecyl', '57401')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-REPESairevolumecyl"></div>
                                </section>

                                <!-- SECTION : UNITÉS DE VOLUME ET DE CAPACITÉ -->
                                <section class="course-section">
                                    <h2 class="section-title">Unités de volume et de capacité</h2>
                                    <div class="notion-box">
                                        <p>Comme pour les aires, chaque fois que l'on passe d'une unité de volume à l'unité immédiatement inférieure, on multiplie par $1\\,000$ (et on divise par $1\\,000$ pour passer à l'unité supérieure), car on passe d'un cube d'arête $1$ à un cube d'arête $10$ fois plus petite.</p>
                                    </div>
                                    <table style="width:100%; border-collapse: collapse; text-align: center;">
                                        <thead>
                                            <tr>
                                                <th style="border-right: 1px solid black; padding: 8px;">km³</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">hm³</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">dam³</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">m³</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">dm³</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">cm³</th>
                                                <th style="padding: 8px;">mm³</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 8px;">000</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">000</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">000</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">000</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">000</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">000</td>
                                                <td style="padding: 8px;">&nbsp;</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br>
                                    <p class="indent-text">Chaque unité de volume « occupe » $3$ colonnes (car un volume a $3$ dimensions), contre $2$ colonnes pour une aire et $1$ seule pour une longueur.</p>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span>
                                        <ul>
                                            <li>Convertir $0,05$ m³ en cm³ : on multiplie par $1\\,000\\,000$ (m³ &rarr; dm³ &rarr; cm³, soit $2$ passages), donc $0,05$ m³ $= 50\\,000$ cm³.</li>
                                            <li>Convertir $12$ hm³ en dm³ : on multiplie par $1\\,000^3 = 10^9$ ... soit $12$ hm³ $= 12\\,000\\,000\\,000$ dm³.</li>
                                        </ul>
                                    </div>
                                    <div class="notion-box">
                                        <p>Les unités de volume et les unités de <strong>capacité</strong> (litres) sont liées par la correspondance suivante :</p>
                                        <blockquote>$1$ L $= 1$ dm³      et      $1\\,000$ L $= 1$ m³</blockquote>
                                    </div>
                                    <p><strong>Exemples :</strong></p>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <p>convertir $33$ cL en cm³</p>
                                            <p>$33$ cL $= 330$ mL</p>
                                            <p>$330$ mL $= 330$ cm³</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>convertir $1\\,500$ cm³ en L</p>
                                            <p>$1\\,500$ cm³ $= 1\\,500$ mL</p>
                                            <p>$1\\,500$ mL $= 1,5$ L</p>
                                        </div>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-REPESunites"
                                        onclick="startQuizFromButton('quiz-area-REPESunites', '57501')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-REPESunites"></div>
                                </section>

                                <!-- SECTION : POUR ALLER PLUS LOIN -->
                                <section class="course-section">
                                    <h2 class="section-title">Pour aller plus loin (culture mathématique)</h2>
                                    <div class="notion-box">
                                        <p>Les <strong>solides de Platon</strong> sont les seuls polyèdres dont toutes les faces sont des polygones réguliers identiques, et dont tous les sommets sont entourés du même nombre de faces : il en existe exactement <strong>cinq</strong> (le tétraèdre, le cube, l'octaèdre, le dodécaèdre et l'icosaèdre). Le mathématicien suisse <strong>Euler</strong> a découvert une relation étonnante, valable pour tous les polyèdres convexes, entre leur nombre de sommets ($S$), de faces ($F$) et d'arêtes ($A$) : $S + F - A = 2$.</p>
                                        <p>L'artiste néerlandais <strong>M.C. Escher</strong> est célèbre pour ses œuvres qui jouent avec la perception de l'espace, des volumes et de la perspective, créant des constructions impossibles en apparence tout à fait cohérentes sur le papier.</p>
                                    </div>
                                </section>
                            </div>
                        `
    }
};
