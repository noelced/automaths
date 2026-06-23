// ============================================================
// data/official/officialData_3eme_chapitre12.js
// Niveau : 3ème — Thème : ESPACE ET GÉOMÉTRIE
// Chapitre 12 : Trigonométrie
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.

var chapterData_3eme_12 = {
    themeName: "ESPACE ET GÉOMÉTRIE",
    chapter: {
        id: 12,
        title: "Trigonométrie",
        quiz: { q: "Dans un triangle rectangle, le rapport $\\frac{\\text{Opposé}}{\\text{Hypoténuse}}$ correspond à quelle fonction ?", a: "sinus" },
        eleve: "non",
        content: `
                                <div class="course-container">
                                    <!-- OBJECTIFS -->
                                    <section class="course-section">
                                        <h2 class="section-title">Objectifs</h2>
                                        <ul>
                                            <li>Je sais identifier le côté opposé et le côté adjacent à un angle dans un triangle rectangle</li>
                                            <li>Je connais mes formules de trigonométrie</li>
                                            <li>Je sais calculer une longueur dans un triangle rectangle connaissant un angle et une autre longueur</li>
                                            <li>Je sais calculer les angles d’un triangle rectangle dont je connais deux longueurs</li>
                                        </ul>
                                        <p><em style="color: var(--text-muted);">Vidéo : Histoire de la trigonométrie</em></p>
                                    </section>

                                    <!-- SECTION I : VOCABULAIRE -->
                                    <section class="course-section">
                                        <h2 class="section-title">Vocabulaire</h2>
                                        <p><strong style="color: var(--primary);">Adjacent</strong> signifie « à côté de ».</p>
                                        <div class="notion-box">
                                            <p>Le côté adjacent à un angle est donc le côté qui touche le sommet de l’angle mais qui n’est pas l’hypoténuse.</p>
                                        </div>
                                        <button class="btn-check-understanding" data-quiz-target="quiz-area-vocabulaire" onclick="startQuizFromButton('quiz-area-vocabulaire', 12)">Ai-je bien compris ?</button>
                                        <div id="quiz-area-vocabulaire"></div>
                                    </section>

                                    <!-- SECTION II : DÉFINITION ET FORMULES -->
                                    <section class="course-section">
                                        <h2 class="section-title">Définition</h2>
                                        <p><em style="font-size: 0.9rem;">(Activité géogébra)</em></p>
                                        <ul>
                                            <li><u style="color: var(--secondary);">Le rapport</u> des longueurs d’un triangle rectangle ne dépend que de la valeur de l’angle.</li>
                                            <li>Nous avons donc pu créer des fonctions (cos ; sin ; tan), sous forme de tableau, reliant la valeur de l’angle et le rapport entre les longueurs.</li>
                                        </ul>

                                        <div class="notion-box" style="border-left-color: #e74c3c;">
                                            <p><strong style="color: #e74c3c;">⚠️ Attention : ces formules ne sont vraies <u style="color: #e74c3c;">que dans un triangle rectangle.</u></strong></p>
                                            <p>$$\\text{Cosinus}(\\text{angle}) = \\frac{\\text{côté Adjacent}}{\\text{Hypoténuse}}$$</p>
                                            <p>$$\\text{Sinus}(\\text{angle}) = \\frac{\\text{côté Opposé}}{\\text{Hypoténuse}}$$</p>
                                            <p>$$\\text{Tangente}(\\text{angle}) = \\frac{\\text{côté Opposé}}{\\text{côté Adjacent}}$$</p>
                                            <p><strong style="text-align: center; display: block; margin-top: 10px;">(Astuce mnémotechnique : CAH SOH TOA)</strong></p>
                                        </div>

                                        <button class="btn-check-understanding" data-quiz-target="quiz-area-formules" onclick="startQuizFromButton('quiz-area-formules', 13)">Ai-je bien compris ?</button>
                                        <div id="quiz-area-formules"></div>
                                    </section>

                                    <!-- SECTION III : CALCULER UNE LONGUEUR -->
                                    <section class="course-section">
                                        <h2 class="section-title">Application : calculer une longueur</h2>
                                        <p><em style="font-size: 0.9rem;">(Connaissant un angle et une autre longueur du triangle rectangle)</em></p>
                                        
                                        <div class="notion-box">
                                            <p><strong>Exemple : Calculer AB</strong></p>
                                            <p>Le triangle ABC est rectangle en B. Donc :</p>
                                            <blockquote>
                                                <p>$$\\cos(\\widehat{ACB}) = \\frac{BC}{AC}$$</p>
                                                <p>$$\\cos(60^\\circ) = \\frac{BC}{8}$$</p>
                                                <p>$$\\frac{\\cos(60^circ)}{1} = \\frac{BC}{8}$$</p>
                                                <p>Produit en croix (ou équation) : $$BC = 8 \\times \\cos(60^\\circ) \\div 1 = 4\\text{ cm}$$</p>
                                            </blockquote>
                                        </div>

                                        <button class="btn-check-understanding" data-quiz-target="quiz-area-longueur" onclick="startQuizFromButton('quiz-area-longueur', 14)">Ai-je bien compris ?</button>
                                        <div id="quiz-area-longueur"></div>
                                    </section>

                                    <!-- SECTION IV : CALCULER UN ANGLE -->
                                    <section class="course-section">
                                        <h2 class="section-title">Application : calculer un angle</h2>
                                        <p><em style="font-size: 0.9rem;">(Connaissant deux longueurs d’un triangle rectangle)</em></p>
                                        <p>Pour calculer un angle, nous connaissons déjà les longueurs, nous allons donc dans le tableau des fonctions (cos ; sin ; tan) rechercher un antécédent du rapport de longueurs (qui est l’angle).</p>
                                        <p>Sur la calculatrice on obtient l’angle en utilisant les fonctions réciproques : <strong>Arccos</strong> ; <strong>Arcsin</strong> et <strong>Arctan</strong> qui donnent directement les antécédents (angles) des rapports de longueurs.</p>

                                        <div class="notion-box" style="border-left-color: var(--secondary);">
                                            <p><strong>Exemple : Calculer l’angle $\\widehat{ACB}$</strong></p>
                                            <p>On donne $BC = 2\\text{ cm}$ et $AC = 6\\text{ cm}$. Le triangle ABC est rectangle en B.</p>
                                            <blockquote>
                                                <p>$$\\cos(\\widehat{ACB}) = \\frac{BC}{AC}$$</p>
                                                <p>$$\\cos(\\widehat{ACB}) = \\frac{2}{6}$$</p>
                                                <p>$$\\widehat{ACB} = \\text{Arccos}\\left(\\frac{2}{6}\\right) \\approx 70,5^\\circ$$</p>
                                            </blockquote>
                                        </div>

                                        <button class="btn-check-understanding" data-quiz-target="quiz-area-angle" onclick="startQuizFromButton('quiz-area-angle', 15)">Ai-je bien compris ?</button>
                                        <div id="quiz-area-angle"></div>
                                    </section>
                                </div>
                            `
    }
};
