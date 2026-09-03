// ============================================================
// data/official/officialData_5eme_chapitre2.js
// Niveau : 5ème — Thème : NOMBRES ET CALCULS
// Chapitre 2 : Nombres relatifs
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.
// NOTE : les codes des quiz ("btn-check-understanding") sont des
// identifiants prévisionnels (52xxx) à créer/associer dans la
// banque de quiz du site avant mise en ligne.

var chapterData_5eme_2 = {
    themeName: "NOMBRES ET CALCULS",
    chapter: {
        id: 2,
        title: "Nombres relatifs",
        eleve: "non",
        content: `
                            <div class="course-container">
                                <!-- SECTION : OBJECTIFS -->
                                <section class="course-section">
                                    <p><strong>Objectifs :</strong></p>
                                    <ul>
                                        <li>Je sais définir un nombre relatif, positif, strictement positif, négatif, strictement négatif</li>
                                        <li>J'utilise les nombres relatifs pour représenter des grandeurs pouvant être inférieures à zéro</li>
                                        <li>Je sais lire et placer l'abscisse d'un nombre relatif sur une droite graduée</li>
                                        <li>Je sais comparer et ranger des nombres décimaux relatifs</li>
                                        <li>Je sais définir l'opposé et la valeur absolue d'un nombre</li>
                                        <li>Je sais additionner deux ou plusieurs nombres décimaux relatifs</li>
                                        <li>Je sais soustraire deux nombres décimaux relatifs</li>
                                        <li>Je sais quand des parenthèses sont indispensables et je sais simplifier l'écriture d'une somme</li>
                                        <li>Je sais enchaîner additions et soustractions de nombres décimaux relatifs</li>
                                    </ul>
                                </section>

                                <!-- SECTION : DÉCOUVRIR LES NOMBRES RELATIFS -->
                                <section class="course-section">
                                    <h2 class="section-title">Découvrir les nombres relatifs</h2>
                                    <div class="notion-box">
                                        <p>Un <strong>nombre relatif</strong> est un nombre précédé d'un signe « $+$ » ou d'un signe « $-$ ».</p>
                                        <ul>
                                            <li>S'il est précédé du signe « $+$ », on dit qu'il est <strong>positif</strong> (on peut ne pas écrire le « $+$ »).</li>
                                            <li>S'il est précédé du signe « $-$ », on dit qu'il est <strong>négatif</strong> (on doit toujours écrire le « $-$ »).</li>
                                        </ul>
                                    </div>
                                    <p>Exemples : $+5$ (ou $5$) est un nombre <strong>positif</strong> ; $-5$ est un nombre <strong>négatif</strong>.</p>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> le nombre $0$ est le seul nombre à la fois positif <strong>et</strong> négatif. On dit qu'un nombre est <strong>strictement positif</strong> (resp. <strong>strictement négatif</strong>) lorsqu'il est positif (resp. négatif) et différent de $0$.
                                    </div>
                                    <p>Les nombres relatifs permettent de représenter des grandeurs qui peuvent prendre des valeurs <strong>inférieures à zéro</strong> :</p>
                                    <ul>
                                        <li>une <strong>température</strong> : $-4°C$ signifie 4 degrés en dessous de zéro ;</li>
                                        <li>une <strong>altitude</strong> : $-35$ m signifie 35 mètres sous le niveau de la mer ;</li>
                                        <li>un <strong>temps</strong> historique : l'an $-52$ signifie 52 ans avant J.-C. ;</li>
                                        <li>un <strong>solde bancaire</strong> : $-120$ € signifie un compte débiteur de 120 €.</li>
                                    </ul>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-NRdefinition"
                                        onclick="startQuizFromButton('quiz-area-NRdefinition', '52101')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-NRdefinition"></div>

                                    <h3 class="section-title">Résoudre un problème avec des nombres relatifs</h3>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> À 6h du matin, il faisait $-3°C$ à Grenoble. À 14h, la température a augmenté de $8°C$. Quelle température fait-il à 14h ?
                                        <ul>
                                            <li>On part de $-3$ et on ajoute $8$ (une augmentation).</li>
                                            <li>La température à 14h est donc de $-3 + 8 = 5°C$.</li>
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-NRprobleme"
                                        onclick="startQuizFromButton('quiz-area-NRprobleme', '52102')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-NRprobleme"></div>
                                </section>

                                <!-- SECTION : DROITE GRADUÉE -->
                                <section class="course-section">
                                    <h2 class="section-title">Repérer un nombre relatif sur une droite graduée</h2>
                                    <div class="notion-box">
                                        <p>Une <strong>droite graduée</strong> est une droite sur laquelle on a placé une <strong>origine</strong> (le point qui représente $0$) et une <strong>unité de longueur</strong> régulière.</p>
                                        <p>Le nombre associé à un point de la droite s'appelle l'<strong>abscisse</strong> de ce point.</p>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Placer les nombres $-3,5$ ; $2$ ; $-1$ et $4,5$ sur une droite graduée
                                        <ul>
                                            <li>On trace la droite, on place l'origine ($0$) et on choisit une unité (par exemple, 1 carreau).</li>
                                            <li>Les nombres <strong>positifs</strong> se placent <strong>à droite</strong> de $0$, les nombres <strong>négatifs</strong> se placent <strong>à gauche</strong> de $0$.</li>
                                            <li>On compte les unités (et les fractions d'unité pour les nombres décimaux) à partir de l'origine.</li>
                                        </ul>
                                    </div>
                                    <p class="indent-text">Plus un point est loin de l'origine vers la droite, plus le nombre qu'il représente est grand. Plus un point est loin de l'origine vers la gauche, plus le nombre qu'il représente est petit.</p>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-NRdroitegraduee"
                                        onclick="startQuizFromButton('quiz-area-NRdroitegraduee', '52201')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-NRdroitegraduee"></div>
                                </section>

                                <!-- SECTION : COMPARER ET RANGER -->
                                <section class="course-section">
                                    <h2 class="section-title">Comparer et ranger des nombres relatifs</h2>
                                    <div class="notion-box">
                                        <p>Sur une droite graduée, un nombre est <strong>plus grand</strong> qu'un autre s'il est situé <strong>plus à droite</strong> que lui.</p>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Règle</span>
                                        <ul>
                                            <li>Tout nombre <strong>positif</strong> est plus grand que tout nombre <strong>négatif</strong>.</li>
                                            <li>Entre deux nombres <strong>positifs</strong>, le plus grand est celui qui a la plus grande valeur (comme d'habitude).</li>
                                            <li>Entre deux nombres <strong>négatifs</strong>, le plus grand est celui qui est <strong>le plus proche de zéro</strong>.</li>
                                        </ul>
                                    </div>
                                    <p><strong>Exemples :</strong></p>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <p>$5,2$ et $8,1$</p>
                                            <p>ce sont deux nombres positifs</p>
                                            <p>$5,2 < 8,1$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>$-2$ et $-7$</p>
                                            <p>$-2$ est plus proche de $0$</p>
                                            <p>$-2 > -7$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>$-9$ et $3$</p>
                                            <p>$3$ est positif, $-9$ est négatif</p>
                                            <p>$-9 < 3$</p>
                                        </div>
                                    </div>
                                    <p>On range dans l'ordre croissant : $-7 ; -2 ; 0 ; 3 ; 5,2 ; 8,1$.</p>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-NRcomparer"
                                        onclick="startQuizFromButton('quiz-area-NRcomparer', '52301')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-NRcomparer"></div>
                                </section>

                                <!-- SECTION : OPPOSÉ ET VALEUR ABSOLUE -->
                                <section class="course-section">
                                    <h2 class="section-title">Opposé et valeur absolue d'un nombre</h2>
                                    <div class="notion-box">
                                        <p>Deux nombres relatifs sont <strong>opposés</strong> lorsqu'ils ont la <strong>même distance à zéro</strong> mais des <strong>signes différents</strong>. Sur la droite graduée, ils sont symétriques par rapport à l'origine.</p>
                                    </div>
                                    <p>Exemples : l'opposé de $7$ est $-7$ ; l'opposé de $-4,3$ est $4,3$ ; l'opposé de $0$ est $0$.</p>
                                    <div class="notion-box">
                                        <p>La <strong>valeur absolue</strong> d'un nombre relatif est sa <strong>distance à zéro</strong> sur la droite graduée. Elle se note entre deux barres verticales et elle est toujours <strong>positive</strong>.</p>
                                    </div>
                                    <table style="width:100%; border-collapse: collapse; text-align: center;">
                                        <thead>
                                            <tr>
                                                <th style="border-right: 1px solid black; padding: 10px;">Nombre</th>
                                                <th style="border-right: 1px solid black; padding: 10px;">Opposé</th>
                                                <th style="padding: 10px;">Valeur absolue</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">$6$</td>
                                                <td style="border-right: 1px solid black; padding: 10px;">$-6$</td>
                                                <td style="padding: 10px;">$|6| = 6$</td>
                                            </tr>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">$-3,8$</td>
                                                <td style="border-right: 1px solid black; padding: 10px;">$3,8$</td>
                                                <td style="padding: 10px;">$|-3,8| = 3,8$</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> deux nombres opposés ont toujours la <strong>même valeur absolue</strong>.
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-NRoppose"
                                        onclick="startQuizFromButton('quiz-area-NRoppose', '52401')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-NRoppose"></div>
                                </section>

                                <!-- SECTION : ADDITIONNER -->
                                <section class="course-section">
                                    <h2 class="section-title">Additionner des nombres relatifs</h2>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Règle</span>
                                        <ul>
                                            <li><strong>Nombres de même signe</strong> : on additionne leurs valeurs absolues et on garde le signe commun.</li>
                                            <li><strong>Nombres de signes différents</strong> : on soustrait la plus petite valeur absolue à la plus grande, et on garde le signe du nombre qui a la plus grande valeur absolue.</li>
                                        </ul>
                                    </div>
                                    <p><strong>Exemples :</strong></p>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <p>$A = (-3) + (-5)$</p>
                                            <p>mêmes signes : $3 + 5 = 8$</p>
                                            <p>$A = -8$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>$B = (+4) + (+7)$</p>
                                            <p>mêmes signes : $4 + 7 = 11$</p>
                                            <p>$B = 11$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>$C = (-9) + (+6)$</p>
                                            <p>signes différents : $9 - 6 = 3$</p>
                                            <p>$C = -3$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>$D = (+2,5) + (-7)$</p>
                                            <p>signes différents : $7 - 2,5 = 4,5$</p>
                                            <p>$D = -4,5$</p>
                                        </div>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-NRadditionner2"
                                        onclick="startQuizFromButton('quiz-area-NRadditionner2', '52501')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-NRadditionner2"></div>

                                    <h3 class="section-title">Additionner plusieurs nombres relatifs</h3>
                                    <div class="notion-box">
                                        <p>Pour additionner plusieurs nombres relatifs, on peut <strong>regrouper les nombres positifs entre eux</strong> et <strong>les nombres négatifs entre eux</strong>, puis additionner les deux résultats obtenus.</p>
                                    </div>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <p>$E = (-4) + (+7) + (-2) + (+3)$</p>
                                            <p>$E =$<font color="blue">$ (+7) + (+3)$</font>$ +$<font color="purple">$ (-4) + (-2)$</font></p>
                                            <p>$E =$<font color="blue">$ 10$</font>$ +$<font color="purple">$ (-6)$</font></p>
                                            <p>$E = 4$</p>
                                        </div>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-NRadditionnerN"
                                        onclick="startQuizFromButton('quiz-area-NRadditionnerN', '52502')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-NRadditionnerN"></div>
                                </section>

                                <!-- SECTION : SOUSTRAIRE -->
                                <section class="course-section">
                                    <h2 class="section-title">Soustraire des nombres relatifs</h2>
                                    <div class="notion-box">
                                        <p><strong>Soustraire un nombre relatif revient à additionner son opposé.</strong></p>
                                        <blockquote>$a - b = a + (-b)$</blockquote>
                                    </div>
                                    <p><strong>Exemples :</strong></p>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <p>$F = (+5) - (+8)$</p>
                                            <p>$F = (+5) +$<font color="blue">$ (-8)$</font></p>
                                            <p>$F = -3$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>$G = (-6) - (-2)$</p>
                                            <p>$G = (-6) +$<font color="blue">$ (+2)$</font></p>
                                            <p>$G = -4$</p>
                                        </div>
                                    </div>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque : pourquoi les parenthèses sont indispensables</strong>
                                        <p class="indent-text">Sans parenthèses, une écriture comme $5 - - 3$ ou $5 + - 3$ n'a pas de sens clair (deux signes qui se suivent). Les parenthèses permettent de bien séparer le <strong>signe de l'opération</strong> (addition ou soustraction) du <strong>signe du nombre</strong> relatif.</p>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-NRsoustraire"
                                        onclick="startQuizFromButton('quiz-area-NRsoustraire', '52601')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-NRsoustraire"></div>

                                    <h3 class="section-title">Simplifier l'écriture d'une somme</h3>
                                    <div class="notion-box">
                                        <p>Une fois qu'on a bien compris le sens des parenthèses, on peut <strong>simplifier l'écriture</strong> en utilisant la règle des signes :</p>
                                    </div>
                                    <table style="width:100%; border-collapse: collapse; text-align: center;">
                                        <thead>
                                            <tr>
                                                <th style="border-right: 1px solid black; padding: 10px;">Signes qui se suivent</th>
                                                <th style="padding: 10px;">Signe simplifié</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">$+$ et $+$</td>
                                                <td style="padding: 10px;">$+$</td>
                                            </tr>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">$-$ et $-$</td>
                                                <td style="padding: 10px;">$+$</td>
                                            </tr>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">$+$ et $-$ (ou $-$ et $+$)</td>
                                                <td style="padding: 10px;">$-$</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <p>$(+5) + (-3)$</p>
                                            <p>signes $+$ et $-$ &rarr; $-$</p>
                                            <p>$= 5 - 3 = 2$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>$(-5) - (-3)$</p>
                                            <p>signes $-$ et $-$ &rarr; $+$</p>
                                            <p>$= -5 + 3 = -2$</p>
                                        </div>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-NRsimplifier"
                                        onclick="startQuizFromButton('quiz-area-NRsimplifier', '52602')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-NRsimplifier"></div>
                                </section>

                                <!-- SECTION : ENCHAÎNER ADDITIONS ET SOUSTRACTIONS -->
                                <section class="course-section">
                                    <h2 class="section-title">Enchaîner additions et soustractions de nombres relatifs</h2>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span>
                                        <ul>
                                            <li>Ligne 1) On transforme chaque soustraction en addition de l'opposé, puis on simplifie l'écriture (on enlève les parenthèses en appliquant la règle des signes).</li>
                                            <li>Ligne 2) On regroupe les nombres positifs entre eux et les nombres négatifs entre eux.</li>
                                            <li>Ligne 3) On calcule et on donne le résultat.</li>
                                        </ul>
                                    </div>
                                    <p><strong>Exemple :</strong></p>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <p>$H = 4 - 9 + (-6) - (-3)$</p>
                                            <p>$H = 4 - 9$<font color="blue">$ - 6$</font>$ +$<font color="blue">$ 3$</font></p>
                                            <p>$H =$<font color="purple">$ 4 + 3$</font>$ -$<font color="purple">$ 9 - 6$</font></p>
                                            <p>$H = 7 - 15$</p>
                                            <p>$H = -8$</p>
                                        </div>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-NRenchainer"
                                        onclick="startQuizFromButton('quiz-area-NRenchainer', '52701')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-NRenchainer"></div>
                                </section>

                                <!-- SECTION : POUR ALLER PLUS LOIN -->
                                <section class="course-section">
                                    <h2 class="section-title">Pour aller plus loin (culture mathématique)</h2>
                                    <div class="notion-box">
                                        <p>Les nombres négatifs sont apparus pour la première fois avec le mathématicien indien <strong>Brahmagupta</strong>, vers l'an $600$. Pourtant, leur existence a longtemps été contestée par les mathématiciens européens : certains niaient encore qu'un nombre puisse être « inférieur à rien » jusqu'au <strong>XVII<sup>e</sup> siècle</strong> !</p>
                                    </div>
                                </section>
                            </div>
                        `
    }
};
