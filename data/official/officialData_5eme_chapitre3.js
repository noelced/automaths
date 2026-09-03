// ============================================================
// data/official/officialData_5eme_chapitre3.js
// Niveau : 5ème — Thème : NOMBRES ET CALCULS
// Chapitre 3 : Nombres rationnels
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.
// NOTE : les codes des quiz ("btn-check-understanding") sont des
// identifiants prévisionnels (53xxx) à créer/associer dans la
// banque de quiz du site avant mise en ligne.

var chapterData_5eme_3 = {
    themeName: "NOMBRES ET CALCULS",
    chapter: {
        id: 3,
        title: "Nombres rationnels",
        eleve: "non",
        content: `
                            <div class="course-container">
                                <!-- SECTION : OBJECTIFS -->
                                <section class="course-section">
                                    <p><strong>Objectifs :</strong></p>
                                    <ul>
                                        <li>Je connais le vocabulaire d'une fraction et je sais reconnaître des fractions égales</li>
                                        <li>Je sais simplifier une fraction</li>
                                        <li>Je sais décomposer une fraction sous la forme d'une somme (ou d'une différence) d'un entier et d'une fraction</li>
                                        <li>Je sais comparer des fractions</li>
                                        <li>Je sais ranger et encadrer des fractions</li>
                                        <li>Je sais additionner et soustraire des fractions de dénominateurs quelconques</li>
                                        <li>Je sais résoudre des problèmes avec des additions et soustractions de fractions</li>
                                    </ul>
                                </section>

                                <!-- SECTION : RAPPELS -->
                                <section class="course-section">
                                    <h2 class="section-title">Rappels sur les fractions</h2>
                                    <div class="notion-box">
                                        <p>Une <strong>fraction</strong> $\\frac{a}{b}$ (avec $b \\neq 0$) représente le résultat de la division de $a$ (le <strong>numérateur</strong>) par $b$ (le <strong>dénominateur</strong>). C'est aussi la part que l'on obtient en partageant une unité en $b$ parts égales et en en prenant $a$.</p>
                                    </div>
                                    <p>Exemple : $\\frac{3}{4}$ signifie que l'on partage une unité en $4$ parts égales et que l'on en prend $3$. On a aussi $\\frac{3}{4} = 3 \\div 4 = 0,75$.</p>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-NRAvocabulaire"
                                        onclick="startQuizFromButton('quiz-area-NRAvocabulaire', '53101')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-NRAvocabulaire"></div>

                                    <h3 class="section-title">Décomposer une fraction</h3>
                                    <div class="notion-box">
                                        <p>Lorsque le numérateur d'une fraction est plus grand que le dénominateur, on peut <strong>décomposer</strong> cette fraction sous la forme de la somme (ou de la différence) d'un <strong>nombre entier</strong> et d'une <strong>fraction</strong> plus simple.</p>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Décomposer $\\frac{15}{7}$
                                        <ul>
                                            <li>On cherche le multiple de $7$ le plus proche de $15$ sans le dépasser : $2 \\times 7 = 14$.</li>
                                            <li>On écrit $15 = 14 + 1$, donc $\\frac{15}{7} = \\frac{14}{7} + \\frac{1}{7} = 2 + \\frac{1}{7}$.</li>
                                            <li>On peut aussi utiliser le multiple juste au-dessus : $3 \\times 7 = 21$, donc $15 = 21 - 6$ et $\\frac{15}{7} = 3 - \\frac{6}{7}$.</li>
                                        </ul>
                                    </div>
                                    <p>On a donc bien $\\frac{15}{7} = 2 + \\frac{1}{7}$ ou $\\frac{15}{7} = 3 - \\frac{6}{7}$.</p>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-NRAdecomposer"
                                        onclick="startQuizFromButton('quiz-area-NRAdecomposer', '53102')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-NRAdecomposer"></div>
                                </section>

                                <!-- SECTION : FRACTIONS ÉGALES ET SIMPLIFICATION -->
                                <section class="course-section">
                                    <h2 class="section-title">Fractions égales et simplification</h2>
                                    <div class="notion-box">
                                        <p>On ne change pas la valeur d'une fraction si on multiplie (ou si on divise) son numérateur <strong>et</strong> son dénominateur par un même nombre non nul.</p>
                                        <blockquote>$\\frac{a}{b} = \\frac{a \\times k}{b \\times k}$</blockquote>
                                    </div>
                                    <p><strong>Exemple :</strong> pour reconnaître les fractions égales à $\\frac{6}{14}$ parmi $\\frac{28}{6}$ ; $\\frac{3}{7}$ ; $\\frac{140}{60}$ ; $\\frac{7}{15}$ ; $\\frac{24}{56}$ :</p>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <p>$\\frac{6}{14} = \\frac{6 \\div 2}{14 \\div 2} = \\frac{3}{7}$</p>
                                            <p>donc $\\frac{3}{7}$ est bien égale à $\\frac{6}{14}$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>$\\frac{6}{14} = \\frac{6 \\times 4}{14 \\times 4} = \\frac{24}{56}$</p>
                                            <p>donc $\\frac{24}{56}$ est bien égale à $\\frac{6}{14}$</p>
                                        </div>
                                    </div>
                                    <p><strong>Simplifier</strong> une fraction, c'est trouver une fraction égale avec un numérateur et un dénominateur plus petits, en divisant les deux par un même diviseur commun.</p>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Simplifier $\\frac{39}{12}$
                                        <ul>
                                            <li>$39$ et $12$ sont tous les deux divisibles par $3$.</li>
                                            <li>$\\frac{39}{12} = \\frac{39 \\div 3}{12 \\div 3} = \\frac{13}{4}$</li>
                                            <li>$13$ et $4$ n'ont plus de diviseur commun (autre que $1$) : la fraction est <strong>irréductible</strong>.</li>
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-NRAegalessimplif"
                                        onclick="startQuizFromButton('quiz-area-NRAegalessimplif', '53201')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-NRAegalessimplif"></div>
                                </section>

                                <!-- SECTION : COMPARER ET RANGER -->
                                <section class="course-section">
                                    <h2 class="section-title">Comparer, ranger et encadrer des fractions</h2>
                                    <h3 class="section-title">Fractions de même dénominateur</h3>
                                    <div class="notion-box">
                                        <p>Quand deux fractions ont le <strong>même dénominateur</strong>, la plus grande est celle qui a le <strong>plus grand numérateur</strong>.</p>
                                    </div>
                                    <p>Exemple : $\\frac{5}{9} < \\frac{7}{9}$ car $5 < 7$.</p>

                                    <h3 class="section-title">Fractions de dénominateurs multiples</h3>
                                    <div class="notion-box">
                                        <p>Quand les dénominateurs sont <strong>multiples l'un de l'autre</strong>, on ramène les deux fractions au <strong>même dénominateur</strong> (le plus grand des deux), puis on compare les numérateurs.</p>
                                    </div>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <p>Comparer $\\frac{5}{6}$ et $\\frac{7}{3}$</p>
                                            <p>$\\frac{7}{3} = \\frac{7 \\times 2}{3 \\times 2} = \\frac{14}{6}$</p>
                                            <p>$\\frac{5}{6} < \\frac{14}{6}$ donc $\\frac{5}{6} < \\frac{7}{3}$</p>
                                        </div>
                                    </div>

                                    <h3 class="section-title">Fractions de dénominateurs quelconques</h3>
                                    <div class="notion-box">
                                        <p>Quand les dénominateurs n'ont pas de lien évident, on peut toujours se ramener à un <strong>dénominateur commun</strong> en multipliant chaque fraction par le dénominateur de l'autre.</p>
                                        <blockquote>$\\frac{a}{b}$ et $\\frac{c}{d}$ &rarr; $\\frac{a \\times d}{b \\times d}$ et $\\frac{c \\times b}{d \\times b}$</blockquote>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Comparer $\\frac{2}{5}$ et $\\frac{3}{7}$
                                        <ul>
                                            <li>Dénominateur commun : $5 \\times 7 = 35$.</li>
                                            <li>$\\frac{2}{5} = \\frac{2 \\times 7}{5 \\times 7} = \\frac{14}{35}$</li>
                                            <li>$\\frac{3}{7} = \\frac{3 \\times 5}{7 \\times 5} = \\frac{15}{35}$</li>
                                            <li>$\\frac{14}{35} < \\frac{15}{35}$ donc $\\frac{2}{5} < \\frac{3}{7}$.</li>
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-NRAcomparer"
                                        onclick="startQuizFromButton('quiz-area-NRAcomparer', '53301')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-NRAcomparer"></div>

                                    <h3 class="section-title">Ranger des fractions</h3>
                                    <p>Pour ranger plusieurs fractions dans l'ordre, on les ramène toutes au même dénominateur, puis on les compare.</p>
                                    <p>Exemple : ranger dans l'ordre croissant $\\frac{1}{3}$ ; $\\frac{25}{6}$ ; $2$ ; $\\frac{5}{3}$. Avec le dénominateur commun $6$ : $\\frac{1}{3} = \\frac{2}{6}$ ; $2 = \\frac{12}{6}$ ; $\\frac{5}{3} = \\frac{10}{6}$ ; $\\frac{25}{6}$ reste $\\frac{25}{6}$. On obtient $\\frac{2}{6} < \\frac{10}{6} < \\frac{12}{6} < \\frac{25}{6}$, donc $\\frac{1}{3} < \\frac{5}{3} < 2 < \\frac{25}{6}$.</p>

                                    <h3 class="section-title">Encadrer une fraction par deux entiers consécutifs</h3>
                                    <div class="notion-box">
                                        <p>Encadrer une fraction, c'est trouver les deux entiers <strong>consécutifs</strong> entre lesquels elle se situe. On utilise pour cela la décomposition de la fraction.</p>
                                    </div>
                                    <p>Exemple : encadrer $\\frac{15}{7}$ par deux entiers consécutifs. On a vu que $\\frac{15}{7} = 2 + \\frac{1}{7}$, et comme $0 < \\frac{1}{7} < 1$, on en déduit que $2 < \\frac{15}{7} < 3$.</p>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-NRArangerencadrer"
                                        onclick="startQuizFromButton('quiz-area-NRArangerencadrer', '53302')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-NRArangerencadrer"></div>
                                </section>

                                <!-- SECTION : ADDITIONNER ET SOUSTRAIRE -->
                                <section class="course-section">
                                    <h2 class="section-title">Additionner et soustraire des fractions</h2>
                                    <h3 class="section-title">Fractions de même dénominateur</h3>
                                    <div class="notion-box">
                                        <blockquote>$\\frac{a}{b} + \\frac{c}{b} = \\frac{a+c}{b}$   et   $\\frac{a}{b} - \\frac{c}{b} = \\frac{a-c}{b}$</blockquote>
                                        <p>Quand les fractions ont le <strong>même dénominateur</strong>, on additionne (ou on soustrait) simplement les numérateurs, et on garde le dénominateur commun.</p>
                                    </div>
                                    <p>Exemple : $\\frac{1}{5} + \\frac{2}{5} = \\frac{1+2}{5} = \\frac{3}{5}$.</p>

                                    <h3 class="section-title">Fractions de dénominateurs multiples</h3>
                                    <div class="notion-box">
                                        <p>Quand les dénominateurs sont <strong>multiples l'un de l'autre</strong>, on ramène d'abord les deux fractions au même dénominateur (le plus grand des deux), puis on applique la règle précédente.</p>
                                    </div>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <p>$A = \\frac{5}{12} + \\frac{3}{4}$</p>
                                            <p>$A = \\frac{5}{12} +$<font color="blue">$ \\frac{3 \\times 3}{4 \\times 3}$</font></p>
                                            <p>$A = \\frac{5}{12} +$<font color="blue">$ \\frac{9}{12}$</font></p>
                                            <p>$A = \\frac{14}{12} = \\frac{7}{6}$</p>
                                        </div>
                                    </div>

                                    <h3 class="section-title">Fractions de dénominateurs quelconques</h3>
                                    <div class="notion-box">
                                        <p>Quand les dénominateurs n'ont pas de lien évident, on se ramène à un <strong>dénominateur commun</strong> en multipliant chaque fraction par le dénominateur de l'autre, comme pour la comparaison.</p>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Calculer $\\frac{2}{5} + \\frac{3}{7}$
                                        <ul>
                                            <li>Dénominateur commun : $5 \\times 7 = 35$.</li>
                                            <li>$\\frac{2}{5} = \\frac{2 \\times 7}{5 \\times 7} = \\frac{14}{35}$ et $\\frac{3}{7} = \\frac{3 \\times 5}{7 \\times 5} = \\frac{15}{35}$</li>
                                            <li>$\\frac{2}{5} + \\frac{3}{7} = \\frac{14}{35} + \\frac{15}{35} = \\frac{29}{35}$</li>
                                        </ul>
                                    </div>
                                    <p><strong>Autres exemples :</strong></p>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <p>$B = \\frac{23}{10} - \\frac{5}{10}$</p>
                                            <p>même dénominateur</p>
                                            <p>$B = \\frac{23-5}{10} = \\frac{18}{10} = \\frac{9}{5}$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>$C = \\frac{11}{9} - \\frac{1}{3}$</p>
                                            <p>$C = \\frac{11}{9} -$<font color="blue">$ \\frac{3}{9}$</font></p>
                                            <p>$C = \\frac{8}{9}$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>$D = \\frac{5}{2} - \\frac{1}{4}$</p>
                                            <p>$D =$<font color="blue">$ \\frac{10}{4}$</font>$ - \\frac{1}{4}$</p>
                                            <p>$D = \\frac{9}{4}$</p>
                                        </div>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-NRAadditionsoustraction"
                                        onclick="startQuizFromButton('quiz-area-NRAadditionsoustraction', '53401')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-NRAadditionsoustraction"></div>
                                </section>

                                <!-- SECTION : RÉSOUDRE DES PROBLÈMES -->
                                <section class="course-section">
                                    <h2 class="section-title">Résoudre des problèmes avec des fractions</h2>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Léa a mangé $\\frac{1}{4}$ d'une tarte le midi et $\\frac{3}{8}$ de la même tarte le soir. Quelle fraction de la tarte a-t-elle mangée en tout ? Quelle fraction reste-t-il ?
                                        <ul>
                                            <li>On additionne les deux fractions mangées : $\\frac{1}{4} + \\frac{3}{8} =$<font color="blue">$ \\frac{2}{8}$</font>$+ \\frac{3}{8} = \\frac{5}{8}$.</li>
                                            <li>Léa a donc mangé $\\frac{5}{8}$ de la tarte.</li>
                                            <li>Il reste $1 - \\frac{5}{8} =$<font color="blue">$ \\frac{8}{8}$</font>$- \\frac{5}{8} = \\frac{3}{8}$ de la tarte.</li>
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-NRAproblemes"
                                        onclick="startQuizFromButton('quiz-area-NRAproblemes', '53501')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-NRAproblemes"></div>
                                </section>
                            </div>
                        `
    }
};
