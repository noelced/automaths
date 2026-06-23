// ============================================================
// data/official/officialData_3eme_chapitre13.js
// Niveau : 3ème — Thème : ESPACE ET GÉOMÉTRIE
// Chapitre 13 : Transformations
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.

var chapterData_3eme_13 = {
    themeName: "ESPACE ET GÉOMÉTRIE",
    chapter: {
        id: 13,
        title: "Transformations",
        quiz: { q: "Si une figure subit une homothétie de rapport $k=2$, par combien son aire est-elle multipliée ?", a: "4" },
        eleve: "non",
        content: `
                            <div class="course-container">
                                <!-- OBJECTIFS -->
                                <section class="course-section">
                                    <h2 class="section-title">Objectifs</h2>
                                    <ul>
                                        <li>Je connais les 5 transformations vues au collège (symétrie axiale ; symétrie centrale ; translation ; rotation ; homothétie)</li>
                                        <li>Je sais reconnaitre ces transformations à partir d’une figure et de son image.</li>
                                        <li>Je suis capable de faire une phrase qui définit tous les paramètres d’une transformation.</li>
                                        <li>A partir d’une transformation donnée, Je suis capable de tracer l’image d’une figure.</li>
                                    </ul>
                                </section>

                                <!-- SECTION I : RAPPELS (SYMÉTRIES) -->
                                <section class="course-section">
                                    <h2 class="section-title">Rappels</h2>
                                    
                                    <h3 class="section-title">Symétrie axiale</h3>
                                    <div class="notion-box">
                                        <p><strong style="color: var(--primary);">Définition :</strong> Un point A’ est le symétrique d’un point A par rapport à une droite (d) lorsque (d) est la médiatrice du segment [AA']</p>
                                    </div>
                                    <img src="images/chap13_symetrie_axiale.png" alt="Schéma de la symétrie axiale montrant la médiatrice" style="max-width: 100%; margin: 10px 0;">
                                    <p>Symétrique de cette figure <strong style="text-decoration: underline;">par la symétrie axiale d’axe (d)</strong></p>

                                    <h3 class="section-title">Symétrie centrale</h3>
                                    <img src="images/chap13_symetrie_centrale.png" alt="Schéma de la symétrie centrale montrant le milieu du segment" style="max-width: 100%; margin: 10px 0;">
                                    <div class="notion-box">
                                        <p>A’ est le symétrique d’un point A par rapport à un point O lorsque O est le milieu du segment [AA']</p>
                                    </div>
                                    <img src="images/chap13_symetrie_centrale_exemple.png" alt="Exemple de symétrie centrale" style="max-width: 100%; margin: 10px 0;">
                                    <p>Symétrique de cette figure <strong style="text-decoration: underline;">par la symétrie centrale de centre O</strong></p>

                                    <button class="btn-check-understanding" data-quiz-target="quiz-area-symetries" onclick="startQuizFromButton('quiz-area-symetries', 13)">Ai-je bien compris ?</button>
                                    <div id="quiz-area-symetries"></div>
                                </section>

                                <!-- SECTION II : TRANSLATION ET ROTATION -->
                                <section class="course-section">
                                    <h2 class="section-title">Translation et Rotation</h2>
                                    
                                    <div class="notion-box" style="border-left-color: var(--secondary);">
                                        <p><strong style="color: var(--secondary);">Définition (Translation) :</strong> Quand on fait glisser une figure d’un point A à un point A’ on dit qu’on effectue une <strong style="text-decoration: underline;">translation de A vers A’</strong>.</p>
                                        <p>Pour cela on définit :</p>
                                        <ul>
                                            <li>Une direction : parallèle à la droite (AA')</li>
                                            <li>Un sens : de A vers A’</li>
                                            <li>Une longueur de déplacement : AA’</li>
                                        </ul>
                                    </div>
                                    <img src="images/chap13_translation.png" alt="Schéma d'une translation avec vecteur" style="max-width: 100%; margin: 10px 0;">
                                    <p>Ce déplacement par une flèche appelée <strong style="text-decoration: underline;">vecteur</strong></p>
                                    <p><em style="font-size: 0.9rem;">Exemple : Tracer l’image de cette figure <strong style="text-decoration: underline;">par la translation qui transforme O en O’</strong></em></p>

                                    <h3 class="section-title">Rotation</h3>
                                    <img src="images/chap13_rotation_def.png" alt="Schéma d'une rotation autour d'un point" style="max-width: 100%; margin: 10px 0;">
                                    <div class="notion-box">
                                        <p><strong style="color: var(--secondary);">Définition (Rotation) :</strong> Quand on fait tourner une figure autour d’un point O, en restant toujours à la même distance de O, on dit qu’on effectue une <strong style="text-decoration: underline;">rotation de centre O</strong>.</p>
                                    </div>
                                    <img src="images/chap13_rotation_exemple.png" alt="Exemple de rotation avec angle et sens" style="max-width: 100%; margin: 10px 0;">
                                    <ul>
                                        <li>Un centre de rotation : O par exemple</li>
                                        <li>Un angle de rotation : $120^\\circ$ par exemple</li>
                                        <li>Un sens de rotation : horaire ou anti-horaire</li>
                                    </ul>
                                    <p><em style="font-size: 0.9rem;">Exemple : Tracer l’image de cette figure <strong style="text-decoration: underline;">par la rotation de centre O, d’angle $120^\\circ$, et de sens horaire</strong></em></p>

                                    <div class="notion-box">
                                        <p><strong style="color: var(--primary);">⚠️ Propriétés :</strong> Ces quatre transformations (symétries, translation, rotation) conservent : les longueurs, les angles, l’alignement des points, le parallélisme, les aires et périmètres.</p>
                                        <p>En effet, une figure et son image sont superposables.</p>
                                    </div>

                                    <button class="btn-check-understanding" data-quiz-target="quiz-area-mouvements" onclick="startQuizFromButton('quiz-area-mouvements', 14)">Ai-je bien compris ?</button>
                                    <div id="quiz-area-mouvements"></div>
                                </section>

                                <!-- SECTION III : HOMOTHÉTIE -->
                                <section class="course-section">
                                    <h2 class="section-title">Homothétie</h2>
                                    <div class="notion-box">
                                        <p><strong style="color: var(--secondary);">Définition :</strong> Une homothétie de rapport $k$ (avec $k$ nombre relatif non nul) permet d’agrandir ou réduire une figure à partir d’un point choisi comme centre.</p>
                                    </div>

                                    <h3 class="section-title">Homothétie de rapport positif</h3>
                                    <p>M’ est l’image de M par l’homothétie de <strong style="text-decoration: underline;">centre O</strong> et de <strong style="text-decoration: underline;">rapport k</strong> $> 0$ signifie que :</p>
                                    <img src="images/chap13_homo_positif.png" alt="Schéma homothétie rapport positif" style="max-width: 100%; margin: 10px 0;">
                                    <ul>
                                        <li>O, M et M’ sont alignés</li>
                                        <li>M et M’ sont du même côté par rapport à O.</li>
                                        <li>$OM' = k \\times OM$</li>
                                    </ul>
                                    <p><em style="font-size: 0.9rem;">Exemple : Homothétie de centre O et de rapport $0,5$$</em></p>

                                    <h3 class="section-title">Homothétie de rapport négatif</h3>
                                    <img src="images/chap13_homo_negatif.png" alt="Schéma homothétie rapport négatif" style="max-width: 100%; margin: 10px 0;">
                                    <div class="notion-box">
                                        <p>L’homothétie de <strong style="text-decoration: underline;">centre O</strong> et de <strong style="text-decoration: underline;">rapport  <p>$k < 0$ signifie que :</p>
                                    <div class="notion-box">
                                        <ul style="margin-bottom: 0;">
                                            <li>O, M et M’ sont alignés</li>
                                            <li>M et M’ ne sont pas du même côté par rapport à O</li>
                                        </ul>
                                        <p>On a : $$OM' = -k \\times OM$$ (car $k < 0$ alors $-k > 0$)</p>
                                    </div>
                                    <p><em style="font-size: 0.9rem;">Exemple : Homothétie de centre O et de rapport $-\\frac{3}{4}$$</em></p>

                                    <h3 class="section-title">Propriétés de l'homothétie</h3>
                                    <div class="notion-box">
                                        <p>Dans une homothétie de rapport $k$ :</p>
                                        <ul>
                                            <li>Si $-1 < k < 1$, alors l’image de la figure est <strong style="color: var(--primary);">une réduction</strong> de la figure de départ.</li>
                                            <li>Si $k > 1$ ou $k < -1$, l’image de la figure est <strong style="color: var(--primary);">un agrandissement</strong> de la figure de départ.</li>
                                        </ul>
                                    </div>

                                    <div class="notion-box" style="border-left-color: #e74c3c;">
                                        <p><strong style="color: #e74c3c;">⚠️ Attention :</strong> L’homothétie <strong style="text-decoration: underline;">conserve</strong> l’alignement des points et les angles (parallèles, perpendiculaires...), <strong style="text-decoration: underline;">MAIS</strong> elle <strong style="color: #e74c3c;">ne conserve PAS</strong> les longueurs et les aires.</p>
                                        <p>Les longueurs sont multipliées par $|k|$, les aires par $k^2$ et les volumes par $|k|^3$.</p>
                                    </div>

                                    <div class="notion-box">
                                        <p><strong style="color: var(--primary);">Exemple :</strong> Une figure a un périmètre de $5\\text{ cm}$ et une aire de $2,5\\text{ cm}^2$. Elle est transformée par une homothétie de rapport $4$. Quel sera l’aire et le périmètre de son image ?</p>
                                        <p>• Périmètre = $5 \\times 4 = 20\\text{ cm}$ <br>
                                        • Aire = $2,5 \\times 4^2 = 2,5 \\times 16 = 40\\text{ cm}^2$</p>
                                    </div>

                                    <button class="btn-check-understanding" data-quiz-target="quiz-area-homothety" onclick="startQuizFromButton('quiz-area-homothety', 15)">Ai-je bien compris ?</button>
                                    <div id="quiz-area-homothety"></div>
                                </section>

                                <!-- SECTION IV : EFFET SUR LES MESURES -->
                                <section class="course-section">
                                    <h2 class="section-title">Effet d’un agrandissement ou d’une réduction sur une figure</h2>
                                    <p>Comme toute homothétie, lorsqu’une figure est agrandie ou réduite d’un coefficient « $k$ » (k étant un nombre réel) :</p>
                                    <div class="notion-box">
                                        <ul style="margin-bottom: 0;">
                                            <li>Les longueurs sont multipliées par $|k|$</li>
                                            <li>Les aires par $k^2$</li>
                                            <li>Les volumes par $|k|^3$</li>
                                        </ul>
                                    </div>

                                    <div class="notion-box" style="border-left-color: var(--secondary);">
                                        <p><strong style="color: var(--primary);">Exemple concret :</strong> Si j’agrandis 3 fois la taille d’une pyramide.</p>
                                        <ul>
                                            <li>Les longueurs de la pyramide sont à multiplier par $3$.</li>
                                            <li>L’aire des faces (quantité de peinture pour la peindre par exemple) sera multipliée par $9$ ! ($3^2$)</li>
                                            <li>Son volume (quantité d’eau pouvant contenir la pyramide) sera multiplié par $27$ !!! ($3^3$)</li>
                                        </ul>
                                    </div>

                                    <button class="btn-check-understanding" data-quiz-target="quiz-area-mesures" onclick="startQuizFromButton('quiz-area-mesures', 16)">Ai-je bien compris ?</button>
                                    <div id="quiz-area-mesures"></div>
                                </section>
                            </div>
                        `
    }
};
