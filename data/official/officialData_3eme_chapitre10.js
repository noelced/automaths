// ============================================================
// data/official/officialData_3eme_chapitre10.js
// Niveau : 3ème — Thème : ESPACE ET GÉOMÉTRIE
// Chapitre 10 : Triangle rectangle
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.

var chapterData_3eme_10 = {
    themeName: "ESPACE ET GÉOMÉTRIE",
    chapter: {
        id: 10,
        title: "Triangle rectangle",
        quiz: { q: "Si un triangle a des côtés de 3cm, 4cm et 5cm, est-il rectangle ?", a: "oui" },
        eleve: "non",
        content: `
                                        <div class="course-container">
                                            <!-- SECTION I : VOCABULAIRE -->
                                            <section class="course-section">
                                                <h2 class="section-title">Rappel de vocabulaire</h2>
                                                <div class="notion-box">
                                                    <p>Dans un triangle rectangle, l’hypoténuse est le côté situé en face de l'angle droit. C’est aussi le plus grand des trois côtés.</p>
                                                </div>
                                                <p><strong><u>Hypoténuse</u></strong></p>
                                                <p><strong><u>Côtés de l'angle droit</u></strong></p>
                                                
                                                <button class="btn-check-understanding" data-quiz-target="quiz-area-vocabulaire" onclick="startQuizFromButton('quiz-area-vocabulaire', 10)">Ai-je bien compris ?</button>
                                                <div id="quiz-area-vocabulaire"></div>
                                            </section>

                                            <!-- SECTION II : THÉORÈME DE PYTHAGORE -->
                                            <section class="course-section">
                                                <h2 class="section-title">Calculer une longueur manquante : Le théorème de Pythagore</h2>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <p><strong>Si</strong> un triangle est rectangle</p>
                                                                <p><strong>Alors</strong> la somme des carrés des côtés de l’angle droit est égale au carré de l’hypoténuse.</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <p><strong>Si</strong> ABC est un triangle rectangle en B</p>
                                                <p><strong>Alors</strong> $$AB^2 + BC^2 = AC^2$$</p>
                                                <p>(Rappel : $$AB^2 = AB \\times AB$$)</p>

                                                <div class="notion-box">
                                                    <p><strong><u>Exemple 1 :</u> On cherche la longueur de l’hypoténuse</strong></p>
                                                    <p><strong>EFG triangle rectangle en F et EF = 3 cm, FG = 4 cm.</strong></p>
                                                    <p><strong>Réponse :</strong></p>
                                                    <p>on sait que : EFG triangle rectangle en F</p>
                                                    <p>Son hypoténuse est [EG]</p>
                                                    <p><strong>Donc,</strong> d’après le théorème de Pythagore,</p>
                                                    <blockquote>
                                                        <p>$$EF^2 + FG^2 = EG^2$$</p>
                                                        <p>$$3^2 + 4^2 = EG^2$$</p>
                                                        <p>$$9 + 16 = EG^2$$</p>
                                                        <p>$$EG^2 = 25$$</p>
                                                        <p><strong>EG =</strong> $$\\sqrt{25}$$ <strong>= 5 cm</strong>. (car $$EG^2 = 5^2 = 5 \\times 5 = 25$$)</p>
                                                    </blockquote>
                                                </div>

                                                <div class="notion-box" style="border-left-color: var(--secondary);">
                                                    <p><strong><u>Exemple 2 :</u> On recherche la longueur d'un côté de l'angle droit.</strong></p>
                                                    <p><strong>MNP triangle rectangle en M et MN = 5 cm, NP = 13 cm.</strong></p>
                                                    <p><strong>Réponse :</strong></p>
                                                    <p>on sait que : MNP triangle rectangle en M,</p>
                                                    <p>Son hypoténuse est [NP]</p>
                                                    <p>Donc, d’après le théorème de Pythagore,</p>
                                                    <p>$$MN^2 + MP^2 = NP^2$$</p>
                                                    <p>$$5^2 + MP^2 = 13^2$$</p>
                                                    <p>$$25 + MP^2 = 169$$</p>
                                                    <p>$$MP^2 = 169 - 25$$</p>
                                                    <p>$$MP^2 = 144$$</p>
                                                    <p>$$MP = \\sqrt{144} = 12 \\text{ cm}.$$</p>
                                                </div>

                                                <button class="btn-check-understanding" data-quiz-target="quiz-area-pythagore" onclick="startQuizFromButton('quiz-area-pythagore', 11)">Ai-je bien compris ?</button>
                                                <div id="quiz-area-pythagore"></div>
                                            </section>

                                            <!-- SECTION III : MONTRER QU'UN TRIANGLE EST RECTANGLE -->
                                            <section class="course-section">
                                                <h2 class="section-title">Montrer qu’un triangle est rectangle</h2>
                                                
                                                <h3 class="section-title">Avec les angles</h3>
                                                <p>Propriété : Dans un triangle, la somme des angles mesure $180^\\circ$.</p>
                                                <p>Donc si on connaît deux des angles on peut savoir si le troisième mesure $90^\\circ$ ou pas.</p>
                                                <div class="notion-box">
                                                    <p><u>Exemple 1 :</u> Sachant que $$\\widehat{ABC}=32^\\circ$$ et $$\\widehat{ACB}=58^\\circ$$ Le triangle ABC est-il rectangle ?</p>
                                                    <p><u>Exemple 2 :</u> Sachant que $$\\widehat{RST}=35^\\circ$$ et $$\\widehat{RTS}=58^\\circ$$ Le triangle RST est-il rectangle ?</p>
                                                </div>

                                                <h3 class="section-title">Avec la réciproque du théorème de Pythagore</h3>
                                                <div class="notion-box">
                                                    <p>Dans un triangle,</p>
                                                    <p>Si la longueur du plus grand côté au carré est égale à la somme des carrés des deux autres côtés</p>
                                                    <p>Alors le triangle est rectangle et le plus grand côté est son hypoténuse.</p>
                                                </div>

                                                <div class="notion-box">
                                                    <p><u>Exemple 1 :</u> Soit ABC un triangle tel que AB=6m BC=8m et AC=10m. Démontre que ce triangle est rectangle.</p>
                                                    <p>Si le triangle était rectangle, son hypoténuse serait AC=10m (car c’est le plus grand côté)</p>
                                                    <blockquote>
                                                        <p>D’une part $$AC^2 = 10^2 = 100$$</p>
                                                        <p>D’autre part $$AB^2 + BC^2 = 6^2 + 8^2 = 36 + 64 = 100$$</p>
                                                        <p>Je vois que $$AC^2 = AB^2 + BC^2$$</p>
                                                        <p>donc d’après la réciproque du théorème de Pythagore, ABC est un triangle rectangle en B</p>
                                                    </blockquote>
                                                </div>

                                                <div class="notion-box" style="border-left-color: var(--secondary);">
                                                    <p><u>Exemple 2 :</u> Soit RST un triangle tel que RS=15 ST=24 et RT=29cm. Ce triangle est-il rectangle ? Si oui, en quel sommet ?</p>
                                                    <p>D’une part $$RS^2 + ST^2 = 15^2 + 24^2 = 801$$</p>
                                                    <p>D’autre part $$RT^2 = 29^2 = 841$$</p>
                                                    <p>Je vois que $$RT^2 \\neq RS^2 + ST^2$$</p>
                                                    <p>L’égalité de Pythagore n’est pas vraie donc RST n’est pas un triangle rectangle.</p>
                                                </div>

                                                <button class="btn-check-understanding" data-quiz-target="quiz-area-reciproque" onclick="startQuizFromButton('quiz-area-reciproque', 12)">Ai-je bien compris ?</button>
                                                <div id="quiz-area-reciproque"></div>
                                            </section>
                                        </div>
                                    `
    }
};
