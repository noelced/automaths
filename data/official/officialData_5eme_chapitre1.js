// ============================================================
// data/official/officialData_5eme_chapitre1.js
// Niveau : 5ème — Thème : NOMBRES ET CALCULS
// Chapitre 1 : Opérations
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.
// NOTE : les codes des quiz ("btn-check-understanding") sont des
// identifiants prévisionnels (51xxx) à créer/associer dans la
// banque de quiz du site avant mise en ligne.

var chapterData_5eme_1 = {
    themeName: "NOMBRES ET CALCULS",
    chapter: {
        id: 1,
        title: "Opérations",
        eleve: "non",
        content: `
                            <div class="course-container">
                                <!-- SECTION : OBJECTIFS (désactivée, ne doit plus apparaître sur le site) -->
                                <!--
                                <section class="course-section">
                                    <p><strong>Objectifs :</strong></p>
                                    <ul>
                                        <li>Je connais le sens et le vocabulaire des 4 opérations</li>
                                        <li>Je sais additionner, soustraire, multiplier et diviser pour résoudre des problèmes</li>
                                        <li>Je sais contrôler la vraisemblance d'un résultat</li>
                                        <li>Je sais traduire un programme de calcul en une expression, avec ou sans parenthèses</li>
                                        <li>Je connais et j'utilise les priorités opératoires</li>
                                        <li>Je connais et j'utilise la distributivité simple sur des exemples numériques</li>
                                        <li>Je sais diviser par un nombre décimal</li>
                                        <li>Je sais déterminer le quotient et le reste d'une division euclidienne</li>
                                        <li>J'utilise les notions de multiples et de diviseurs</li>
                                        <li>Je connais les critères de divisibilité par 2, 3, 5, 9 et 10</li>
                                    </ul>
                                </section>
                                -->

                                <!-- SECTION : VOCABULAIRE ET SENS DES OPÉRATIONS -->
                                <section class="course-section">
                                    <h2 class="section-title">Vocabulaire et sens des 4 opérations</h2>
                                    <h3 class="section-title">Vocabulaire</h3>
                                    <div class="notion-box">
                                        <p>Chaque opération a un <strong>nom</strong>, un <strong>résultat</strong> qui porte un nom particulier, et sert à <strong>résoudre un type de situation</strong> bien précis.</p>
                                    </div>
                                    <table style="width:100%; border-collapse: collapse; text-align: center;">
                                        <thead>
                                            <tr style="background-color: var(--primary-light, #e8f0fe);">
                                                <th style="border-right: 1px solid black; border-bottom: 2px solid black; padding: 10px;">Opération</th>
                                                <th style="border-right: 1px solid black; border-bottom: 2px solid black; padding: 10px;">Éléments</th>
                                                <th style="border-right: 1px solid black; border-bottom: 2px solid black; padding: 10px;">Résultat</th>
                                                <th style="border-bottom: 2px solid black; padding: 10px;">On l'utilise pour...</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">Addition $3,5 + 2$</td>
                                                <td style="border-right: 1px solid black; padding: 10px;">des <strong>termes</strong></td>
                                                <td style="border-right: 1px solid black; padding: 10px;">une <strong>somme</strong></td>
                                                <td style="padding: 10px;">réunir, rassembler, augmenter</td>
                                            </tr>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">Soustraction $3,5 - 2$</td>
                                                <td style="border-right: 1px solid black; padding: 10px;">des <strong>termes</strong></td>
                                                <td style="border-right: 1px solid black; padding: 10px;">une <strong>différence</strong></td>
                                                <td style="padding: 10px;">enlever, comparer, reculer, diminuer</td>
                                            </tr>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">Multiplication $3,5 \\times 2$</td>
                                                <td style="border-right: 1px solid black; padding: 10px;">des <strong>facteurs</strong></td>
                                                <td style="border-right: 1px solid black; padding: 10px;">un <strong>produit</strong></td>
                                                <td style="padding: 10px;">répéter un même ajout, agrandir</td>
                                            </tr>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">Division $7 \\div 2$</td>
                                                <td style="border-right: 1px solid black; padding: 10px;">dividende / diviseur</td>
                                                <td style="border-right: 1px solid black; padding: 10px;">un <strong>quotient</strong></td>
                                                <td style="padding: 10px;">partager équitablement, chercher combien de fois</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> avant de te lancer dans un calcul, demande-toi toujours <em>« qu'est-ce que je cherche ? »</em>. C'est le sens du problème qui te dit quelle opération choisir, pas l'inverse !
                                    </div>

                                    <div class="quiz-header">
                                        <span>Identifier l'opération à utiliser dans un problème</span>
                                        <button class="btn-check-understanding"
                                                data_quiz_target="quiz-area-OPsens"
                                                onclick="startQuizFromButton('quiz-area-OPsens', '51101')">
                                            Ai-je bien compris ?
                                        </button>
                                    </div>
                                    <div id="quiz-area-OPsens"></div>

                                    <div class="quiz-header">
                                        <span>Utiliser les bons mots de vocabulaire</span>
                                        <button class="btn-check-understanding"
                                                data_quiz_target="quiz-area-OPvocabulaire"
                                                onclick="startQuizFromButton('quiz-area-OPvocabulaire', '51102')">
                                            Ai-je bien compris ?
                                        </button>
                                    </div>
                                    <div id="quiz-area-OPvocabulaire"></div>

                                    <h3 class="section-title">Contrôler la vraisemblance d'un résultat</h3>
                                    <div class="notion-box">
                                        <p>Avant (ou après) de poser un calcul, on peut estimer un <strong>ordre de grandeur</strong> du résultat en arrondissant les nombres. Cela permet de repérer une erreur de calcul ou de virgule.</p>
                                    </div>
                                    <p>Exemple : pour calculer $19,8 \\times 5,1$, on estime d'abord $20 \\times 5 = 100$. Le résultat exact ($100,98$) doit donc être proche de $100$. Si la calculatrice affiche $10,098$ ou $1009,8$, on sait immédiatement qu'il y a une erreur de virgule.</p>
                                    <p class="indent-text">De la même façon, on rejette une réponse aberrante comme $8,12$ m pour la taille d'une personne ou $15$ cm² pour l'aire d'un champ : le résultat doit toujours être cohérent avec la situation.</p>

                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-OPvraisemblance"
                                        onclick="startQuizFromButton('quiz-area-OPvraisemblance', '51103')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-OPvraisemblance"></div>
                                </section>

                                <!-- SECTION : PRIORITÉS OPÉRATOIRES -->
                                <section class="course-section">
                                    <h2 class="section-title">Enchaîner des opérations : les priorités opératoires</h2>
                                    <div class="notion-box">
                                        <p>Quand une expression contient plusieurs opérations, on ne calcule pas forcément dans l'ordre où elles sont écrites. Il faut respecter les <strong>priorités opératoires</strong> :</p>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Règle</span>
                                        <ol style="margin-left: 20px;">
                                            <li>On calcule d'abord ce qui est <strong>entre parenthèses</strong>.</li>
                                            <li>Puis on effectue les <strong>multiplications et divisions</strong>, dans l'ordre où elles apparaissent.</li>
                                            <li>Enfin on effectue les <strong>additions et soustractions</strong>, dans l'ordre où elles apparaissent.</li>
                                        </ol>
                                    </div>
                                    <p><strong>Exemples :</strong></p>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <p>$A = 5 + 3 \\times 4$</p>
                                            <p>$A = 5 +$<font color="blue">$ 12$</font></p>
                                            <p>$A = 17$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>$B = 10 - (1 + 6)$</p>
                                            <p>$B = 10 -$<font color="blue">$ 7$</font></p>
                                            <p>$B = 3$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>$C = 12 - 8 + 2$</p>
                                            <p>$C =$<font color="blue">$ 4$</font>$ + 2$</p>
                                            <p>$C = 6$</p>
                                        </div>
                                    </div>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> quand il n'y a que des additions et des soustractions (ou que des multiplications et des divisions), on calcule <strong>de gauche à droite</strong> : $C = 12 - 8 + 2$ ne vaut pas $12 - 10 = 2$ !
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-OPpriorites"
                                        onclick="startQuizFromButton('quiz-area-OPpriorites', '51201')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-OPpriorites"></div>

                                    <h3 class="section-title">Traduire un programme de calcul en une expression</h3>
                                    <div class="notion-box">
                                        <p>Un <strong>programme de calcul</strong> décrit une suite d'étapes en français. Pour le traduire en une seule expression, on utilise des <strong>parenthèses</strong> chaque fois que l'on doit forcer le calcul à se faire dans un ordre différent des priorités habituelles.</p>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Traduire le programme de calcul :
                                        <blockquote>« Choisir un nombre ; lui ajouter 3 ; multiplier le résultat par 9 ; soustraire 5 »</blockquote>
                                        <ul>
                                            <li>On choisit un nombre, par exemple $7$.</li>
                                            <li>« lui ajouter 3 » : il faut que l'addition soit calculée <strong>avant</strong> la multiplication qui suit &rarr; on doit donc l'entourer de parenthèses.</li>
                                            <li>On obtient : $(7 + 3) \\times 9 - 5$</li>
                                        </ul>
                                    </div>
                                    <p>Si on effectue ce programme sur le nombre $7$ : $(7 + 3) \\times 9 - 5 =$<font color="blue">$ 10$</font>$\\times 9 - 5 =$<font color="blue">$ 90$</font>$- 5 = 85$.</p>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-OPprogramme"
                                        onclick="startQuizFromButton('quiz-area-OPprogramme', '51202')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-OPprogramme"></div>
                                </section>

                                <!-- SECTION : DISTRIBUTIVITÉ SIMPLE -->
                                <section class="course-section">
                                    <h2 class="section-title">Distributivité simple sur des exemples numériques</h2>
                                    <div class="notion-box">
                                        <blockquote>$k \\times (a + b) = k \\times a + k \\times b$</blockquote>
                                        <blockquote>$k \\times (a - b) = k \\times a - k \\times b$</blockquote>
                                    </div>
                                    <p>Cette propriété permet parfois de <strong>calculer plus rapidement, mentalement</strong>, en remplaçant un nombre par une somme ou une différence bien choisie.</p>
                                    <p><strong>Exemples :</strong></p>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <p>$A = 5 \\times 98$</p>
                                            <p>$A = 5 \\times (100 - 2)$</p>
                                            <p>$A = 5 \\times 100 - 5 \\times 2$</p>
                                            <p>$A = 500 - 10 = 490$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>$B = 12 \\times 103$</p>
                                            <p>$B = 12 \\times (100 + 3)$</p>
                                            <p>$B = 12 \\times 100 + 12 \\times 3$</p>
                                            <p>$B = 1200 + 36 = 1236$</p>
                                        </div>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-OPdistributivite"
                                        onclick="startQuizFromButton('quiz-area-OPdistributivite', '51301')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-OPdistributivite"></div>
                                </section>

                                <!-- SECTION : DIVISER PAR UN NOMBRE DÉCIMAL -->
                                <section class="course-section">
                                    <h2 class="section-title">Diviser par un nombre décimal</h2>
                                    <div class="notion-box">
                                        <p>On ne sait poser une division que par un <strong>nombre entier</strong>. Pour diviser par un nombre décimal, on utilise la propriété suivante : le quotient de deux nombres <strong>ne change pas</strong> si on multiplie le dividende ET le diviseur par un même nombre.</p>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Calculer $15,6 \\div 1,2$
                                        <ul>
                                            <li>Le diviseur $1,2$ a un chiffre après la virgule &rarr; on multiplie le dividende et le diviseur par $10$.</li>
                                            <li>$15,6 \\div 1,2 = (15,6 \\times 10) \\div (1,2 \\times 10) = 156 \\div 12$</li>
                                            <li>On pose alors la division de deux nombres entiers : $156 \\div 12 = 13$.</li>
                                        </ul>
                                    </div>
                                    <p>Exemple : $4,25 \\div 0,05 = (4,25 \\times 100) \\div (0,05 \\times 100) = 425 \\div 5 = 85$.</p>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-OPdiviserdecimal"
                                        onclick="startQuizFromButton('quiz-area-OPdiviserdecimal', '51401')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-OPdiviserdecimal"></div>
                                </section>

                                <!-- SECTION : DIVISION EUCLIDIENNE, MULTIPLES ET DIVISEURS -->
                                <section class="course-section">
                                    <h2 class="section-title">Division euclidienne, multiples et diviseurs</h2>
                                    <div class="notion-box">
                                        <p>Effectuer la <strong>division euclidienne</strong> d'un nombre entier $a$ (le <strong>dividende</strong>) par un nombre entier $b$ (le <strong>diviseur</strong>), c'est trouver un <strong>quotient</strong> $q$ et un <strong>reste</strong> $r$ tels que :</p>
                                        <blockquote>$a = b \\times q + r$ avec $r < b$</blockquote>
                                    </div>
                                    <p>Exemple : $17 = 3 \\times 5 + 2$. Ici le dividende est $17$, le diviseur est $3$, le quotient est $5$ et le reste est $2$ (on vérifie bien que $2 < 3$).</p>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Un club compte 147 élèves répartis par équipes de 16 pour un concours. Combien d'équipes complètes peut-on constituer ? Combien manquerait-il d'élèves pour la dernière équipe ?
                                        <ul>
                                            <li>On effectue la division euclidienne de $147$ par $16$ : $147 = 16 \\times 9 + 3$.</li>
                                            <li>On peut donc constituer $9$ équipes complètes.</li>
                                            <li>Il reste $3$ élèves, il en manquerait $16 - 3 = 13$ pour former une $10^{\\text{e}}$ équipe complète.</li>
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-OPdivisioneuclid"
                                        onclick="startQuizFromButton('quiz-area-OPdivisioneuclid', '51501')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-OPdivisioneuclid"></div>

                                    <h3 class="section-title">Multiples et diviseurs</h3>
                                    <div class="notion-box">
                                        <p>Quand le <strong>reste</strong> d'une division euclidienne est <strong>nul</strong> ($r = 0$), on dit que :</p>
                                        <ul>
                                            <li>$a$ est un <strong>multiple</strong> de $b$ (car $a = b \\times q$) ;</li>
                                            <li>$b$ est un <strong>diviseur</strong> de $a$.</li>
                                        </ul>
                                    </div>
                                    <p>Exemple : $28 = 7 \\times 4$, donc $28$ est un multiple de $7$ (et de $4$), et $7$ (comme $4$) est un diviseur de $28$.</p>
                                    <p>Les diviseurs de $28$ sont : $1$ ; $2$ ; $4$ ; $7$ ; $14$ ; $28$.</p>
                                    <p>Les multiples de $14$ sont : $14$ ; $28$ ; $42$ ; $56$... Parmi $56$ ; $141$ ; $280$, seuls $56$ et $280$ sont des multiples de $14$.</p>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-OPmultdiv"
                                        onclick="startQuizFromButton('quiz-area-OPmultdiv', '51502')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-OPmultdiv"></div>
                                </section>

                                <!-- SECTION : CRITÈRES DE DIVISIBILITÉ -->
                                <section class="course-section">
                                    <h2 class="section-title">Critères de divisibilité</h2>
                                    <div class="notion-box">
                                        <p>Un <strong>critère de divisibilité</strong> permet de savoir si un nombre est un multiple d'un autre <strong>sans poser la division</strong>, juste en observant ses chiffres.</p>
                                    </div>
                                    <table style="width:100%; border-collapse: collapse; text-align: center;">
                                        <thead>
                                            <tr>
                                                <th style="border-right: 1px solid black; padding: 10px;">Un nombre est divisible par...</th>
                                                <th style="padding: 10px;">si...</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">$2$</td>
                                                <td style="padding: 10px;">son chiffre des unités est $0, 2, 4, 6$ ou $8$ (nombre pair)</td>
                                            </tr>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">$5$</td>
                                                <td style="padding: 10px;">son chiffre des unités est $0$ ou $5$</td>
                                            </tr>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">$10$</td>
                                                <td style="padding: 10px;">son chiffre des unités est $0$</td>
                                            </tr>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">$3$</td>
                                                <td style="padding: 10px;">la somme de ses chiffres est un multiple de $3$</td>
                                            </tr>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">$9$</td>
                                                <td style="padding: 10px;">la somme de ses chiffres est un multiple de $9$</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Parmi $2, 3, 5, 9$ et $10$, quels sont les diviseurs de $456$ ?
                                        <ul>
                                            <li>Chiffre des unités $= 6$ &rarr; nombre pair &rarr; <strong>divisible par 2</strong>.</li>
                                            <li>Chiffre des unités $\\ne 0$ et $\\ne 5$ &rarr; <strong>pas divisible par 5 ni par 10</strong>.</li>
                                            <li>Somme des chiffres : $4 + 5 + 6 = 15$, qui est un multiple de $3$ mais pas de $9$ &rarr; <strong>divisible par 3</strong>, mais <strong>pas par 9</strong>.</li>
                                            <li>Conclusion : les diviseurs de $456$ parmi cette liste sont $2$ et $3$.</li>
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-OPcriteres"
                                        onclick="startQuizFromButton('quiz-area-OPcriteres', '51601')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-OPcriteres"></div>
                                </section>

                                <!-- SECTION : POUR ALLER PLUS LOIN -->
                                <section class="course-section">
                                    <h2 class="section-title">Pour aller plus loin (culture mathématique)</h2>
                                    <div class="notion-box">
                                        <p>La notion de <strong>nombre premier</strong> (un nombre qui n'a que $1$ et lui-même comme diviseurs) sera étudiée plus en détail au collège. On sait depuis l'Antiquité, grâce à <strong>Euclide</strong>, qu'il existe une <strong>infinité</strong> de nombres premiers. Le mathématicien grec <strong>Ératosthène</strong> a inventé une méthode, le <em>crible d'Ératosthène</em>, pour les retrouver facilement parmi une liste de nombres.</p>
                                    </div>
                                </section>
                            </div>
                        `
    }
};
