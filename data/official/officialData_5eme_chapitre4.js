// ============================================================
// data/official/officialData_5eme_chapitre4.js
// Niveau : 5ème — Thème : NOMBRES ET CALCULS
// Chapitre 4 : Puissances
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.
// NOTE : les codes des quiz ("btn-check-understanding") sont des
// identifiants prévisionnels (54xxx) à créer/associer dans la
// banque de quiz du site avant mise en ligne.

var chapterData_5eme_4 = {
    themeName: "NOMBRES ET CALCULS",
    chapter: {
        id: 4,
        title: "Puissances",
        eleve: "non",
        content: `
                            <div class="course-container">
                                <!-- SECTION : OBJECTIFS -->
                                <section class="course-section">
                                    <p><strong>Objectifs :</strong></p>
                                    <ul>
                                        <li>Je découvre la notion de puissance d'un nombre et sa notation dans le cas du carré et du cube</li>
                                        <li>Je connais les carrés des entiers de 0 à 12</li>
                                        <li>Je connais le cube de 10</li>
                                        <li>Je sais écrire un nombre sous la forme d'une puissance 2 ou 3</li>
                                        <li>Je sais calculer la valeur numérique d'expressions contenant des puissances simples, additions, soustractions et produits</li>
                                        <li>Je sais calculer la valeur d'une expression littérale contenant une puissance simple</li>
                                    </ul>
                                </section>

                                <!-- SECTION : LE CARRÉ D'UN NOMBRE -->
                                <section class="course-section">
                                    <h2 class="section-title">Le carré d'un nombre</h2>
                                    <div class="notion-box">
                                        <p>Le <strong>carré</strong> d'un nombre $a$ est le produit de ce nombre par lui-même. On le note $a^2$ (on lit « $a$ au carré ») :</p>
                                        <blockquote>$a^2 = a \\times a$</blockquote>
                                        <p>$a$ est appelé la <strong>base</strong>, et $2$ est appelé l'<strong>exposant</strong>.</p>
                                    </div>
                                    <p>Exemple : $7^2 = 7 \\times 7 = 49$.</p>
                                    <div class="notion-box">
                                        <p>Le carré d'un nombre correspond aussi à l'<strong>aire d'un carré</strong> dont le côté mesure ce nombre.</p>
                                    </div>
                                    <p class="indent-text">Un carré de côté $6$ cm a une aire de $6^2 = 36$ cm².</p>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Attention :</strong> $a^2$ ne veut pas dire « $a \\times 2$ » ! Par exemple, $5^2 = 5 \\times 5 = 25$, alors que $5 \\times 2 = 10$.
                                    </div>
                                    <p><strong>Il faut connaître par cœur les carrés des entiers de 0 à 12 :</strong></p>
                                    <table style="width:100%; border-collapse: collapse; text-align: center;">
                                        <thead>
                                            <tr>
                                                <th style="border-right: 1px solid black; padding: 8px;">$a$</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">0</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">1</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">2</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">3</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">4</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">5</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">6</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">7</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">8</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">9</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">10</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">11</th>
                                                <th style="padding: 8px;">12</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 8px;">$a^2$</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">0</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">1</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">4</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">9</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">16</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">25</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">36</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">49</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">64</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">81</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">100</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">121</td>
                                                <td style="padding: 8px;">144</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PUcarre"
                                        onclick="startQuizFromButton('quiz-area-PUcarre', '54101')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PUcarre"></div>

                                    <h3 class="section-title">Le carré, une aire</h3>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Un jardin carré a un côté de $9$ m. Quelle est son aire ?
                                        <ul>
                                            <li>L'aire d'un carré de côté $c$ est $c^2$.</li>
                                            <li>Ici, l'aire est $9^2 = 9 \\times 9 = 81$ m².</li>
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PUcarreaire"
                                        onclick="startQuizFromButton('quiz-area-PUcarreaire', '54102')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PUcarreaire"></div>
                                </section>

                                <!-- SECTION : LE CUBE D'UN NOMBRE -->
                                <section class="course-section">
                                    <h2 class="section-title">Le cube d'un nombre</h2>
                                    <div class="notion-box">
                                        <p>Le <strong>cube</strong> d'un nombre $a$ est le produit de trois facteurs égaux à ce nombre. On le note $a^3$ (on lit « $a$ au cube ») :</p>
                                        <blockquote>$a^3 = a \\times a \\times a$</blockquote>
                                    </div>
                                    <p>Exemple : $4^3 = 4 \\times 4 \\times 4 = 64$.</p>
                                    <div class="notion-box">
                                        <p>Le cube d'un nombre correspond aussi au <strong>volume d'un cube</strong> dont l'arête mesure ce nombre.</p>
                                    </div>
                                    <p class="indent-text">Un cube d'arête $2$ cm a un volume de $2^3 = 8$ cm³.</p>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> il faut connaître $10^3 = 10 \\times 10 \\times 10 = 1\\,000$, très utile pour les conversions d'unités de volume (par exemple $1$ dm³ $= 1\\,000$ cm³, puisque $1$ dm $= 10$ cm).
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PUcube"
                                        onclick="startQuizFromButton('quiz-area-PUcube', '54201')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PUcube"></div>

                                    <h3 class="section-title">Le cube, un volume</h3>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Un dé à jouer a une arête de $1,5$ cm. Quel est son volume ?
                                        <ul>
                                            <li>Le volume d'un cube d'arête $c$ est $c^3$.</li>
                                            <li>Ici, le volume est $1,5^3 = 1,5 \\times 1,5 \\times 1,5 = 3,375$ cm³.</li>
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PUcubevolume"
                                        onclick="startQuizFromButton('quiz-area-PUcubevolume', '54202')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PUcubevolume"></div>
                                </section>

                                <!-- SECTION : ÉCRIRE UN NOMBRE SOUS FORME DE PUISSANCE -->
                                <section class="course-section">
                                    <h2 class="section-title">Écrire un nombre sous la forme d'une puissance</h2>
                                    <div class="notion-box">
                                        <p>Pour écrire un nombre sous la forme d'une puissance $2$ ou $3$, il faut reconnaître qu'il est le produit de deux (ou trois) facteurs égaux.</p>
                                    </div>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <p>$49 = 7 \\times 7$</p>
                                            <p>donc $49 = 7^2$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>$125 = 5 \\times 5 \\times 5$</p>
                                            <p>donc $125 = 5^3$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>$100 = 10 \\times 10$</p>
                                            <p>donc $100 = 10^2$</p>
                                        </div>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PUecriture"
                                        onclick="startQuizFromButton('quiz-area-PUecriture', '54301')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PUecriture"></div>
                                </section>

                                <!-- SECTION : CALCULER AVEC DES PUISSANCES -->
                                <section class="course-section">
                                    <h2 class="section-title">Calculer une expression contenant des puissances</h2>
                                    <div class="notion-box">
                                        <p>Les puissances s'intègrent dans les <strong>priorités opératoires</strong> : elles se calculent <strong>juste après les parenthèses</strong>, et <strong>avant</strong> les multiplications, les divisions, les additions et les soustractions.</p>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Règle</span>
                                        <ol style="margin-left: 20px;">
                                            <li>On calcule d'abord ce qui est entre <strong>parenthèses</strong>.</li>
                                            <li>Puis on calcule les <strong>puissances</strong>.</li>
                                            <li>Puis on effectue les <strong>multiplications et divisions</strong>.</li>
                                            <li>Enfin on effectue les <strong>additions et soustractions</strong>.</li>
                                        </ol>
                                    </div>
                                    <p><strong>Exemples :</strong></p>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <p>$A = 3 + 2^2 \\times 5$</p>
                                            <p>$A = 3 +$<font color="blue">$ 4$</font>$\\times 5$</p>
                                            <p>$A = 3 +$<font color="purple">$ 20$</font></p>
                                            <p>$A = 23$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>$B = (4 + 1)^2 - 3^2$</p>
                                            <p>$B =$<font color="blue">$ 5^2$</font>$ - 3^2$</p>
                                            <p>$B =$<font color="purple">$ 25 - 9$</font></p>
                                            <p>$B = 16$</p>
                                        </div>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PUcalculer"
                                        onclick="startQuizFromButton('quiz-area-PUcalculer', '54401')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PUcalculer"></div>

                                    <h3 class="section-title">Calculer une expression littérale avec une puissance</h3>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Calculer $C = a^2 + 3a$ pour $a = 5$
                                        <ul>
                                            <li>On remplace $a$ par $5$ : $C = 5^2 + 3 \\times 5$.</li>
                                            <li>On applique les priorités : $C =$ <font color="blue">$25$</font> $+$ <font color="purple">$15$</font>.</li>
                                            <li>$C = 40$.</li>
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PUlitteral"
                                        onclick="startQuizFromButton('quiz-area-PUlitteral', '54402')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PUlitteral"></div>
                                </section>
                            </div>
                        `
    }
};
