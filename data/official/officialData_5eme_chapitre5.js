// ============================================================
// data/official/officialData_5eme_chapitre5.js
// Niveau : 5ème — Thème : NOMBRES ET CALCULS
// Chapitre 5 : Calcul littéral et algébrique
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.
// NOTE : les codes des quiz ("btn-check-understanding") sont des
// identifiants prévisionnels (55xxx) à créer/associer dans la
// banque de quiz du site avant mise en ligne.

var chapterData_5eme_5 = {
    themeName: "NOMBRES ET CALCULS",
    chapter: {
        id: 5,
        title: "Calcul littéral et algébrique",
        eleve: "non",
        content: `
                            <div class="course-container">
                                <!-- SECTION : OBJECTIFS -->
                                <section class="course-section">
                                    <p><strong>Objectifs :</strong></p>
                                    <ul>
                                        <li>Je sais produire une formule (double, triple, carré, successeur, prédécesseur, aire, périmètre...)</li>
                                        <li>Je sais calculer la valeur d'une expression littérale par substitution</li>
                                        <li>Je sais tester si une égalité entre deux expressions est vraie ou fausse pour une valeur donnée</li>
                                        <li>Je sais déterminer si une expression littérale est une somme ou un produit</li>
                                        <li>Je sais développer et factoriser une expression littérale simple</li>
                                        <li>Je sais réduire une expression littérale de la forme $ax + b$</li>
                                        <li>Je sais démontrer une propriété générale par le calcul littéral</li>
                                        <li>Je sais utiliser un contre-exemple pour montrer qu'une affirmation est fausse</li>
                                        <li>Je sais donner à la lettre le statut d'inconnue et modéliser un problème par une équation</li>
                                        <li>Je sais résoudre une équation du type $ax = c$ ou $x + b = c$</li>
                                    </ul>
                                </section>

                                <!-- SECTION : PRODUIRE DES FORMULES -->
                                <section class="course-section">
                                    <h2 class="section-title">Produire des formules</h2>
                                    <div class="notion-box">
                                        <p>Une <strong>expression littérale</strong> est une manière d'écrire un calcul dans lequel un nombre inconnu ou qui peut varier est représenté par une <strong>lettre</strong> (on l'appelle une <strong>variable</strong>).</p>
                                    </div>
                                    <p>On utilise très souvent des lettres pour écrire des <strong>formules</strong> :</p>
                                    <table style="width:100%; border-collapse: collapse; text-align: center;">
                                        <thead>
                                            <tr>
                                                <th style="border-right: 1px solid black; padding: 10px;">On veut calculer...</th>
                                                <th style="padding: 10px;">Formule (avec $n$ le nombre de départ)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">le double de $n$</td>
                                                <td style="padding: 10px;">$2n$</td>
                                            </tr>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">le triple de $n$</td>
                                                <td style="padding: 10px;">$3n$</td>
                                            </tr>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">le carré de $n$</td>
                                                <td style="padding: 10px;">$n^2$</td>
                                            </tr>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">le successeur de $n$ (l'entier juste après)</td>
                                                <td style="padding: 10px;">$n + 1$</td>
                                            </tr>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">le prédécesseur de $n$ (l'entier juste avant)</td>
                                                <td style="padding: 10px;">$n - 1$</td>
                                            </tr>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">le périmètre d'un carré de côté $c$</td>
                                                <td style="padding: 10px;">$4c$</td>
                                            </tr>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">l'aire d'un carré de côté $c$</td>
                                                <td style="padding: 10px;">$c^2$</td>
                                            </tr>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">l'aire d'un rectangle de longueur $L$ et largeur $l$</td>
                                                <td style="padding: 10px;">$L \\times l$</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br>
                                    <div class="quiz-header">
                                        <span>Produire une formule géométrique</span>
                                        <button class="btn-check-understanding"
                                                data_quiz_target="quiz-area-CAformuleG"
                                                onclick="startQuizFromButton('quiz-area-CAformuleG', '55101')">
                                            Ai-je bien compris ?
                                        </button>
                                    </div>
                                    <div id="quiz-area-CAformuleG"></div>

                                    <div class="quiz-header">
                                        <span>Traduire un programme de calcul par une formule</span>
                                        <button class="btn-check-understanding"
                                                data_quiz_target="quiz-area-CAformuleP"
                                                onclick="startQuizFromButton('quiz-area-CAformuleP', '55102')">
                                            Ai-je bien compris ?
                                        </button>
                                    </div>
                                    <div id="quiz-area-CAformuleP"></div>

                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> on a le droit de ne pas écrire le symbole $\\times$ entre un nombre et une lettre ($3 \\times n = 3n$), entre deux lettres ($a \\times b = ab$), ou avant une parenthèse ($3 \\times (n+2) = 3(n+2)$).
                                    </div>
                                </section>

                                <!-- SECTION : SUBSTITUER -->
                                <section class="course-section">
                                    <h2 class="section-title">Calculer la valeur d'une expression littérale</h2>
                                    <div class="notion-box">
                                        <p>Pour calculer la valeur d'une expression littérale pour une valeur donnée, il suffit de <strong>remplacer</strong> chaque lettre par sa valeur numérique, puis de calculer en respectant les <strong>priorités opératoires</strong> (parenthèses &rarr; puissances &rarr; multiplications/divisions &rarr; additions/soustractions).</p>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Calculer $E = 3x + 5y$ pour $x = 2$ et $y = 1$
                                        <ul>
                                            <li>On remplace $x$ par $2$ et $y$ par $1$ : $E = 3 \\times 2 + 5 \\times 1$.</li>
                                            <li>On applique les priorités : $E =$ <font color="blue">$6$</font> $+$ <font color="purple">$5$</font>.</li>
                                            <li>$E = 11$.</li>
                                        </ul>
                                    </div>
                                    <p><strong>Autres exemples :</strong></p>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <p>calculer $7a$ et $a + 17$ pour $a = 8$</p>
                                            <p>$7a = 7 \\times 8 = 56$</p>
                                            <p>$a + 17 = 8 + 17 = 25$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>calculer $P = 4c$ pour $c = 3,5$</p>
                                            <p>$P = 4 \\times 3,5$</p>
                                            <p>$P = 14$</p>
                                        </div>
                                    </div>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> si tu vois une écriture comme $ab$, pense bien à remettre le signe $\\times$ avant de remplacer les lettres par leurs valeurs. Si $a = 2$ et $b = 3$, alors $ab = 2 \\times 3 = 6$, et surtout pas $23$ !
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-CAsubstituer"
                                        onclick="startQuizFromButton('quiz-area-CAsubstituer', '55201')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-CAsubstituer"></div>
                                </section>

                                <!-- SECTION : TESTER UNE ÉGALITÉ / CONTRE-EXEMPLE -->
                                <section class="course-section">
                                    <h2 class="section-title">Tester une égalité, utiliser un contre-exemple</h2>
                                    <div class="notion-box">
                                        <p>Pour savoir si une égalité entre deux expressions littérales est <strong>vraie</strong> ou <strong>fausse</strong> pour une valeur donnée, on calcule séparément la valeur de chaque expression pour cette valeur, puis on compare les deux résultats.</p>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> L'égalité $4 + 3x = 7x$ est-elle vraie pour $x = 2$ ?
                                        <ul>
                                            <li>On calcule le membre de gauche : $4 + 3 \\times 2 = 4 + 6 = 10$.</li>
                                            <li>On calcule le membre de droite : $7 \\times 2 = 14$.</li>
                                            <li>$10 \\neq 14$, donc l'égalité est <strong>fausse</strong> pour $x = 2$.</li>
                                        </ul>
                                    </div>
                                    <div class="notion-box">
                                        <p>Le fait d'avoir trouvé <strong>une seule</strong> valeur de $x$ pour laquelle l'égalité est fausse suffit à prouver qu'elle n'est <strong>pas toujours vraie</strong>. On dit que $x = 2$ est un <strong>contre-exemple</strong>.</p>
                                    </div>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> à l'inverse, vérifier qu'une égalité est vraie pour une ou deux valeurs particulières <strong>ne prouve pas</strong> qu'elle est vraie pour toutes les valeurs. Il faudrait le démontrer par le calcul littéral (voir plus loin).
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-CAtestercontre"
                                        onclick="startQuizFromButton('quiz-area-CAtestercontre', '55301')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-CAtestercontre"></div>
                                </section>

                                <!-- SECTION : SOMME OU PRODUIT -->
                                <section class="course-section">
                                    <h2 class="section-title">Somme ou produit ?</h2>
                                    <div class="notion-box">
                                        <p>Pour connaître la <strong>structure</strong> d'une expression littérale, il faut identifier la <strong>dernière opération</strong> que l'on ferait en respectant les priorités de calcul.</p>
                                    </div>
                                    <p>Si cette dernière opération est :</p>
                                    <ul>
                                        <li><u>une addition ou une soustraction</u>, alors l'expression est une <strong>somme</strong> ;</li>
                                        <li><u>une multiplication (ou une division)</u>, alors l'expression est un <strong>produit</strong>.</li>
                                    </ul>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span>
                                        <p>$5x + 3$ : c'est <strong>une somme</strong>, car on calculerait d'abord $5x$, puis on terminerait par $+3$.</p>
                                        <p>$5(x + 3)$ : c'est <strong>un produit</strong>, car on calculerait d'abord la parenthèse, puis on terminerait par $\\times 5$.</p>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-CAsommeproduit"
                                        onclick="startQuizFromButton('quiz-area-CAsommeproduit', '55401')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-CAsommeproduit"></div>
                                </section>

                                <!-- SECTION : DÉVELOPPER, FACTORISER, RÉDUIRE -->
                                <section class="course-section">
                                    <h2 class="section-title">Développer et factoriser</h2>
                                    <div class="notion-box">
                                        <blockquote>$k(a + b) = ka + kb$   et   $k(a - b) = ka - kb$</blockquote>
                                    </div>
                                    <p><strong>Développer</strong>, c'est transformer un produit en somme, en utilisant cette relation de gauche à droite :</p>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <p>$A =$<font color="blue">$5$</font>$(x + 3)$</p>
                                            <p>$A =$<font color="blue">$5$</font>$ \\times x +$<font color="blue">$5$</font>$ \\times 3$</p>
                                            <p>$A = 5x + 15$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>$B =$<font color="blue">$4$</font>$(2x - 1)$</p>
                                            <p>$B =$<font color="blue">$4$</font>$ \\times 2x -$<font color="blue">$4$</font>$ \\times 1$</p>
                                            <p>$B = 8x - 4$</p>
                                        </div>
                                    </div>
                                    <p><strong>Factoriser</strong>, c'est transformer une somme en produit, en utilisant la même relation de droite à gauche :</p>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Factoriser $6x + 12$
                                        <ul>
                                            <li>On cherche un facteur commun aux deux termes : $6x + 12 =$<font color="blue">$ 6$</font>$ \\times x +$<font color="blue">$ 6$</font>$ \\times 2$.</li>
                                            <li>On met ce facteur commun devant une parenthèse : $6x + 12 =$<font color="blue">$ 6$</font>$(x + 2)$.</li>
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-CAdevfact"
                                        onclick="startQuizFromButton('quiz-area-CAdevfact', '55501')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-CAdevfact"></div>

                                    <h3 class="section-title">Réduire une expression de la forme $ax + b$</h3>
                                    <div class="notion-box">
                                        <p><strong>Réduire</strong> une expression littérale, c'est l'écrire avec le moins de termes possible, en regroupant les termes qui contiennent la <strong>même lettre</strong>.</p>
                                    </div>
                                    <p><strong>Exemples :</strong></p>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <p>$C = 5,2x + 3,4x$</p>
                                            <p>on additionne les coefficients</p>
                                            <p>$C = 8,6x$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>$D = 2,4x - 2,1x$</p>
                                            <p>on soustrait les coefficients</p>
                                            <p>$D = 0,3x$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>$E = 3x + 5 + 4x - 2$</p>
                                            <p>$E =$<font color="blue">$3x + 4x$</font>$ +$<font color="purple">$5 - 2$</font></p>
                                            <p>$E = 7x + 3$</p>
                                        </div>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-CAreduire"
                                        onclick="startQuizFromButton('quiz-area-CAreduire', '55502')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-CAreduire"></div>
                                </section>

                                <!-- SECTION : DÉMONTRER -->
                                <section class="course-section">
                                    <h2 class="section-title">Démontrer une propriété par le calcul littéral</h2>
                                    <div class="notion-box">
                                        <p>Pour <strong>démontrer</strong> qu'une propriété est vraie pour <strong>tous les nombres</strong> (et pas seulement pour un exemple), on utilise une lettre pour représenter n'importe quel nombre, puis on transforme l'expression par le calcul littéral.</p>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Démontrer que la somme de deux entiers consécutifs est toujours impaire
                                        <ul>
                                            <li>On appelle $n$ le premier entier ; le suivant s'écrit alors $n + 1$.</li>
                                            <li>Leur somme est $S = n + (n + 1) = 2n + 1$.</li>
                                            <li>$2n$ est toujours un nombre pair (c'est un multiple de $2$), donc $2n + 1$ est toujours un nombre <strong>impair</strong>.</li>
                                            <li>On a bien démontré que la somme de deux entiers consécutifs est toujours impaire, quel que soit $n$.</li>
                                        </ul>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Démontrer que la somme de trois entiers consécutifs est toujours un multiple de 3
                                        <ul>
                                            <li>On appelle $n$ le premier entier ; les deux suivants s'écrivent $n+1$ et $n+2$.</li>
                                            <li>Leur somme est $S = n + (n+1) + (n+2) = 3n + 3 = 3(n+1)$.</li>
                                            <li>$S$ s'écrit sous la forme $3 \\times (n+1)$, c'est donc toujours un <strong>multiple de 3</strong>.</li>
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-CAdemontrer"
                                        onclick="startQuizFromButton('quiz-area-CAdemontrer', '55601')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-CAdemontrer"></div>
                                </section>

                                <!-- SECTION : LA LETTRE COMME INCONNUE, ÉQUATIONS -->
                                <section class="course-section">
                                    <h2 class="section-title">Donner à la lettre le statut d'inconnue : les équations</h2>
                                    <div class="notion-box">
                                        <p>Jusqu'ici, la lettre représentait <strong>n'importe quel nombre</strong> (une variable). Dans une <strong>équation</strong>, la lettre représente au contraire <strong>un seul nombre bien précis, que l'on ne connaît pas encore</strong> : on l'appelle l'<strong>inconnue</strong>. Résoudre une équation, c'est trouver la valeur de cette inconnue qui rend l'égalité vraie.</p>
                                    </div>
                                    <h3 class="section-title">Modéliser un problème par une équation</h3>
                                    <p>Beaucoup de problèmes qui contiennent une opération « à trou » peuvent se traduire par une équation du type $x + b = c$ ou $ax = c$.</p>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <p>« Un nombre augmenté de 7 donne 15 »</p>
                                            <p>$x + 7 = 15$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>« Le triple d'un nombre vaut 24 »</p>
                                            <p>$3x = 24$</p>
                                        </div>
                                    </div>
                                    <div class="quiz-header">
                                        <span>Modéliser un problème par une équation</span>
                                        <button class="btn-check-understanding"
                                                data_quiz_target="quiz-area-CAmodeliserEq"
                                                onclick="startQuizFromButton('quiz-area-CAmodeliserEq', '55701')">
                                            Ai-je bien compris ?
                                        </button>
                                    </div>
                                    <div id="quiz-area-CAmodeliserEq"></div>

                                    <h3 class="section-title">Résoudre une équation du type $x + b = c$</h3>
                                    <div class="notion-box">
                                        <p>Pour isoler $x$, on utilise l'<strong>opération inverse</strong> de l'addition, qui est la <strong>soustraction</strong>.</p>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Résoudre $x + 7 = 15$
                                        <ul>
                                            <li>Pour « défaire » le « $+ 7$ », on soustrait $7$ : $x = 15 - 7$.</li>
                                            <li>$x = 8$.</li>
                                            <li>On vérifie : $8 + 7 = 15$. ✓</li>
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-CAequationAdd"
                                        onclick="startQuizFromButton('quiz-area-CAequationAdd', '55702')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-CAequationAdd"></div>

                                    <h3 class="section-title">Résoudre une équation du type $ax = c$</h3>
                                    <div class="notion-box">
                                        <p>Pour isoler $x$, on utilise l'<strong>opération inverse</strong> de la multiplication, qui est la <strong>division</strong>.</p>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Résoudre $3x = 24$
                                        <ul>
                                            <li>Pour « défaire » le « $\\times 3$ », on divise par $3$ : $x = 24 \\div 3$.</li>
                                            <li>$x = 8$.</li>
                                            <li>On vérifie : $3 \\times 8 = 24$. ✓</li>
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-CAequationMult"
                                        onclick="startQuizFromButton('quiz-area-CAequationMult', '55703')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-CAequationMult"></div>
                                </section>

                                <!-- SECTION : POUR ALLER PLUS LOIN -->
                                <section class="course-section">
                                    <h2 class="section-title">Pour aller plus loin (culture mathématique)</h2>
                                    <div class="notion-box">
                                        <p>Le mot « algèbre » vient du mathématicien perse <strong>Al-Khwârizmî</strong> (IX<sup>e</sup> siècle), qui résolvait des problèmes en appelant « la chose » (<em>shay</em> en arabe) le nombre inconnu que l'on cherche à déterminer — exactement comme on utilise aujourd'hui la lettre $x$ ! Il avait même donné un nom à chacune des deux opérations que l'on utilise pour résoudre une équation : « <strong>al-jabr</strong> » pour la résolution du type $x + b = c$ (le mot « algèbre » vient de là), et « <strong>al-hatt</strong> » pour la résolution du type $ax = c$.</p>
                                    </div>
                                </section>
                            </div>
                        `
    }
};
