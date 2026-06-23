// ============================================================
// data/official/officialData_3eme_chapitre3.js
// Niveau : 3ème — Thème : NOMBRES ET CALCULS
// Chapitre 3 : Calcul littéral
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.

var chapterData_3eme_3 = {
    themeName: "NOMBRES ET CALCULS",
    chapter: {
        id: 3,
        title: "Calcul littéral",
        eleve: "non",
        content: `
                            <div class="course-container">
                                <!-- SECTION : OBJECTIFS -->
                                <section class="course-section">
                                    <p><strong>Objectifs :</strong></p>
                                    <ul>
                                        <li>Je sais transformer un problème en expression littérale</li>
                                        <li>Je connais la structure d’une expression littérale</li>
                                        <li>Je sais déterminer l’opposé d’une expression littérale</li>
                                        <li>Je sais réduire une expression littérale contenant des parenthèses</li>
                                        <li>Je sais factoriser une expression littérale</li>
                                    </ul>
                                </section>

                                <!-- SECTION : INTRODUCTION -->
                                <section class="course-section">
                                    <h2 class="section-title">Introduction - substituer</h2>
                                    <div class="notion-box">
                                    <p>Une <strong>expression algébrique</strong> (ou expression littérale) est une manière d’écrire un calcul où certains nombres sont représentés par des lettres.</p>
                                    </div>
                                    <p><strong class="section-title">Exemples :</strong> Le périmètre du carré = $4 \\times c$ et l’aire du carré = $c \\times c$.<p>
                                    <p class="indent-text">Ici la lettre « c » représente la longueur du côté du carré.</p>
                                    <br>
                                    <p>On dit que « $4 \\times c$ » est l’<strong>expression littérale</strong> qui calcule le périmètre du carré <strong class="section-title">en fonction de</strong> la <strong class="section-title">variable</strong> $c$.</p>
                                    <br>
                                    <p>Faire du calcul littéral permet de résoudre des problèmes compliqués en créant des formules qui donneront les solutions du problème pour toutes les valeurs (<strong class="section-title">variables</strong>) que l’on souhaite.</p>
                                    <br>
                                    <div class="quiz-header">
                                        <span>Modéliser un problème de géométrie</span>
                                        <button class="btn-check-understanding"
                                                data_quiz_target="quiz-area-CLmodeliserG"
                                                onclick="startQuizFromButton('quiz-area-CLmodeliserG', '33101')">
                                            Ai-je bien compris ?
                                        </button>
                                    </div>
                                    <div id="quiz-area-CLmodeliserG"></div>
                                   
                                    
                                    <div class="quiz-header">
                                        <span>Modéliser un programme de calcul</span>
                                        <button class="btn-check-understanding"
                                                data_quiz_target="quiz-area-CLmodeliserP"
                                                onclick="startQuizFromButton('quiz-area-CLmodeliserP', '33102')">
                                            Ai-je bien compris ?
                                        </button>
                                    </div>
                                    <div id="quiz-area-CLmodeliserP"></div>

                                    <br>
                                    <div class="quiz-header">
                                        <span>Modéliser un problème écrit en français</span>
                                        <button class="btn-check-understanding"
                                                data_quiz_target="quiz-area-CLmodeliserF"
                                                onclick="startQuizFromButton('quiz-area-CLmodeliserF', '33103')">
                                            Ai-je bien compris ?
                                        </button>
                                    </div>
                                    <div id="quiz-area-CLmodeliserF"></div>
   
                                    <div class="notion-box">
                                    <p>Pour calculer la valeur d’une expression littérale, il suffit de remplacer les lettres par leurs valeurs numériques.</p>
                                    </div> 
                                    <p class="indent-text">Si le côté du carré mesure 3cm alors il suffira de remplacer tous les «c» de l’expression $Perimètre=4 \\times c$ par 3. Le périmètre vaudra $4 \\times 3 = 12\\text{cm}$ et l’aire vaudra $3 \\times 3 = 9\\text{ cm}^2$.</p>
                                    <br>
                                   
                                    
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarques : dans une expression littérale :</strong>
                                        <ul>
                                            <li>Une même lettre représente le même nombre ; Si tu vois $4c \\times (c-2)$ et que $c=3$ alors il faudra rempalcer tous les $c$ de l'expression par 3 : $4 \\times 3 \\times (3-2)$</li>
                                            <li>On a le droit de ne pas écrire le symbole $\\times$ entre :
                                            <p class="indent-text">    deux lettres : $a \\times b = ab$  
                                            <p class="indent-text">    entre un nombre et une lettre : $3 \\times r = 3r$
                                            <p class="indent-text">    ou avant une parenthèse ouvrante : $3 \\times (c+2) = 3(c+2)$</li>
                                            <p class="indent-text"><strong> donc si tu vois $ab$ avant de remplacer $a$ et $b$ par leurs valeurs il faudra penser à remettre le symbole de multiplication $\\times $  Ex : si $a=2$ et $b=3$ alors $ab=2 \\times 3$ et pas 23 !</strong>
                                            <li> doit respecter les priorités habituelles de calculs :</li>                     
                                            <p class="indent-text"> (parenthèses $\\rightarrow$ puissances $\\rightarrow$ multiplications/divisions $\\rightarrow$ additions/soustractions)</p>                                                                                                       
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                    data_quiz_target="quiz-area-CLsubstituer"
                                    onclick="startQuizFromButton('quiz-area-CLsubstituer', '33104')">
                                    Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-CLsubstituer"></div>
                                </section>

                                <!-- SECTION : STRUCTURE -->
                                <section class="course-section">
                                    <h2 class="section-title">Structure d’une expression littérale</h2>
                                    <div class="notion-box">
                                    <p><strong>Pour connaître la structure d’une expression littérale</strong>, il faut identifier la dernière opération que l'on serait amené à faire en respectant les règles de priorité de calculs.</p>
                                    </div>
                                    <p>Si cette dernière opération est :</p>
                                    <ul>
                                        <li><u>une addition ou une soustraction</u>, alors l'expression est une <u>somme</u>.</li>
                                        <li><u>une multiplication ou une division ou une élévation à la puissance</u>, alors l'expression est <u>un produit</u>.</li>
                                    </ul>
                                    
                                    <div class="method-box">
                                    <span class="method-badge">🚀 Méthode</span>
                                        <strong style="color: var(--primary);">💡 MÉTHODE : À savoir utiliser en exercice</strong><br>
                                        <strong>Exemples :</strong><br>
                                        <p>$3(10 - 5x)$ : c'est <strong>un produit</strong> car on commencerait par calculer la parenthèse PUIS on finirait le calcul par $\\times 3$:</p>
                                        <p>$(x + 3)(2 - 3x) - 4$ : c'est <strong>une somme</strong> car on calcule le parenthèses ensuite on les multiplie et enfin on termine par $-4$:</p>
                                        <p>$3x^2 - 5x + 2$ :  c'est <strong>une somme</strong> car on calcule les produits en premier ($3x²$ et $5x$ ) puis on fait les + et - en dernier.:</p>
                                        <p>$(6 - 4x)(8 - 9x)$ : c'est <strong>un produit</strong> car on commencerait par calculer l'intérieur des parenthèses PUIS on finirait le calcul par la multiplication "cachée" entre les deux parenthèses.:</p>
                                    </div>
                                    <button class="btn-check-understanding"
                                    data_quiz_target="quiz-area-CLstructure"
                                    onclick="startQuizFromButton('quiz-area-CLstructure', '33201')">
                                    Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-CLstructure"></div>
                                </section>

                                <!-- SECTION : OPPOSÉ -->
                                <section class="course-section">
                                    <h2 class="section-title">Opposé d’une expression algébrique</h2>
                                    <p>Rappel : l’opposé de $-10$ est $+10$ car $-10 + 10 = 0$.</p>
                                    <div class="notion-box">
                                    <p>Pour connaître l’opposé d’une expression littérale il suffit de mettre toute l’expression entre parenthèses et de la faire précéder d’un signe « $-$ ».</p>
                                    </div>
                                    <p>Exemple : L’Opposé de $3x + 2$ est $-(3x + 2)$ en effet $3x + 2 - (3x + 2) = 0$.</p>
                                    <div class="notion-box">
                                    <p>Lorsqu’on cherche à enlever cette parenthèse, il faut bien penser à changer tous les signes à l’intérieur de la parenthèse. $-(3x + 2) = -3x - 2$.</p>
                                    <p> Si je vous prend votre trousse symbolisée par les parenthèses $-(stylo+colle+effaceur)$ je vous prends votre stylo, votre colle, votre effaceur $\\rightarrow -stylo -colle-effaceur$ 
                                    </div>
                                    <table style="width:100%; border-collapse: collapse; text-align: center;">
                                    <thead>
                                        <tr>
                                            <!-- Bordure à droite pour séparer Col 1 et Col 2 -->
                                            <th style="border-right: 1px solid black; padding: 10px;">Expression littérale</th>
                                            <!-- Bordure à droite pour séparer Col 2 et Col 3 -->
                                            <th style="border-right: 1px solid black; padding: 10px;">Opposé</th>
                                            <th style="padding: 10px;">Opposé (Expression réduite)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="border-right: 1px solid black; padding: 10px;">$5x - 4$</td>
                                            <td style="border-right: 1px solid black; padding: 10px;">$-(5x - 4)$</td>
                                            <td style="padding: 10px;">$-5x + 4$</td>
                                        </tr>
                                        <tr>
                                            <td style="border-right: 1px solid black; padding: 10px;">$3 - 2x$</td>
                                            <td style="border-right: 1px solid black; padding: 10px;">$-(3 - 2x)$</td>
                                            <td style="padding: 10px;">$-3 + 2x$</td>
                                        </tr>
                                        <tr>
                                            <td style="border-right: 1px solid black; padding: 10px;">$-5x - 7$</td>
                                            <td style="border-right: 1px solid black; padding: 10px;">$-(-5x - 7)$</td>
                                            <td style="padding: 10px;">$5x + 7$</td>
                                        </tr>
                                    </tbody>
                                    </table>


                                    <button class="btn-check-understanding"
                                    data-quiz-target="quiz-area-CLoppose"
                                    onclick="startQuizFromButton('quiz-area-CLoppose', '33301')">
                                    Ai-je bien compris ?</button>
                                    <div id="quiz-area-CLoppose"></div>
                                </section>

                                <!-- SECTION : RÉDUIRE -->
                                <section class="course-section">
                                    <h2 class="section-title">Réduire une expression algébrique</h2>
                                        <div class="notion-box">
                                            <p>Réduire une expression algébrique c’est l’écrire avec le moins de termes possibles.</p>
                                        </div>                                    
                                    <h3 class="section-title">Réduire une somme</h3>
                                        <br>                                   
                                        <em>Attention lorsqu’on bouge un terme, on garde le signe avec le nombre qui suit (les règles de relatifs s’appliquent aussi en calcul littéral !)</em>
                                        <div class="method-box">
                                            <span class="method-badge">🚀 Méthode</span>
                                            <table style="width:100%; border-collapse: collapse; text-align: center;">
                                                <thead>
                                                    <tr>
                                                        <!-- Bordure uniquement à droite pour créer la séparation centrale -->
                                                        <th style="border-right: 1px solid black; padding: 10px;">Calcul</th>
                                                        <th style="padding: 10px;">Explication</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style="border-right: 1px solid black; padding: 10px;">$F = 5a² - 2a - 10 + 3a² - 2 - 4a + 8 + 10 + 8a$</td>
                                                        <td style="padding: 10px;">On regroupe les termes semblables (lettres identiques ensemble et si possible on trie aussi par signe).</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="border-right: 1px solid black; padding: 10px;">$F =$ <font color="red">$5a² + 3a²$</font> <font color="blue">$+ 8a - 4a - 2a$</font><font color="purple">$+ 10 + 8 - 10 - 2$</font></td>
                                                        <td style="padding: 10px;"></td> <!-- Cellule vide pour maintenir la structure -->
                                                    </tr>
                                                    <tr>
                                                        <td style="border-right: 1px solid black; padding: 10px;">$F =$ <font color="red">$a² \\times (5+3)$</font><font color="blue">$ + a \\times (8-4-2) $</font><font color="purple">$+ 18 - 12$</font></td>
                                                        <td style="padding: 10px;">On factorise les lettres attention un carré est considéré comme une lettre différente !</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="border-right: 1px solid black; padding: 10px;">$F = 8a^2 + 2a + 6$</td>
                                                        <td style="padding: 10px;">On arrive à une expression impossible à simplifier davantage : c'est la forme réduite.</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                        <button class="btn-check-understanding"
                                            data_quiz_target="quiz-area-CLredsom"
                                            onclick="startQuizFromButton('quiz-area-CLredsom', '33411')">
                                            Ai-je bien compris ?
                                        </button>
                                        <div id="quiz-area-CLredsom"></div>
                                    <h3 class="section-title">Réduire un produit</h3>
                                        <p>On peut se souvenir que dans une multiplication l’ordre des facteurs ne modifie pas le produit.</p>
                                        <p>$3 \\times 4 = 4 \\times 3 = 12$</p>
                                        <p>Donc on peut aussi modifier l’ordre d’un produit en calcul littéral :</p>
                                        <blockquote>
                                            <p>$A = -3 \\times a \\times 2 \\times (-5) \\times a$</p>
                                            <p>et on va le modifier pour regrouper les signes entre eux en premier, puis les nombres et enfin les lettres<p>
                                            <p>$A = -- 3 \\times 2 \\times 5 \\times a \\times a$</p>    
                                            <p>$A = +30a^2$</p>
                                        </blockquote>

                                        <div class="method-box">
                                            <span class="method-badge">🚀 Méthode : </span>    Calculer un produit en une seule ligne</strong>
                                            <p>Calculons : $-5x \\times 7 \\times (-x)$
                                                <ol style="margin-left: 20px;"">
                                                    <li>Quel sera le signe du résultat ?  $ - \\times -=+$</li>
                                                    <li>Quelle sera la valeur du nombre ?  $ 5 \\times 7 =35$</li>
                                                    <li>Quelle sera la lettre associée ?   $ x \\times x = x²$</li>
                                                </ol>
                                            Le résultat s'écrira donc : (Signe, Nombre, Lettre) $+35x²$ </p>
                                        </div>
                                        <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-CLredpro"
                                        onclick="startQuizFromButton('quiz-area-CLredpro', '33421')">
                                        Ai-je bien compris ?
                                        </button>
                                        <div id="quiz-area-CLredpro"></div>
                                

                                    <h3 class="section-title">Réduire une expression algébrique</h3>
                                        <p> Méthode générale : on respecte les priorités à chaque ligne de calcul</p>
                                        <br>
                                        <ul>
                                            <li>Ligne 1) On supprime les parenthèses s'il y en a (attention aux signes devant)
                                            <li>Ligne 2) On réduit tous les produits (signe, nombre, lettre) sera la valeur du nombre ?</li>
                                            <li>Ligne 3) On réduit les sommes en regroupant les termes ayant la <strong> même lettre</strong></li>
                                        </ul>
                                        <br>
                                        <div class="method-box">
                                            <span class="method-badge">🚀 Méthode</span>
                                            Exemples :                                
                                            <div class="calculation-container">					
                                                <div class="calculation-block">
                                                    <p>$A=3d+5$<font color="blue">$-(5d+3)$</font></p>
                                                    <p>$A=3d+5-5d$<font color="blue">$-3$</font></p>
                                                    <p>$A=$<font color="purple">$3d-5d$</font>$+5-3$</p>
                                                    <p>$A=$<font color="purple">$-2d$</font>$+2$</p>
                                                </div>
                                                <div class="calculation-block">
                                                    <p>$B=5a²-3a$<font color="blue">$+(15+7a)$</font>$-7a \\times 3a$</p>
                                                    <p>$B=5a²-3a+15+7a$<font color="purple">$-7a \\times 3a$</font></p>
                                                    <p>$B=5a²-3a+15+7a-21a²$</p>
                                                    <p>$B=-16a²+4a+15$</p>
                                                </div>
                                            </div>                                                              
                                        </div>
                                        <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-CLredExp"
                                        onclick="startQuizFromButton('quiz-area-CLredExp', '33431')">
                                        Ai-je bien compris ?
                                        </button>
                                        <div id="quiz-area-CLredExp"></div>
                                 </section>

                                <!-- SECTION : DÉVELOPPER -->
                                <section class="course-section">
                                    <h2 class="section-title">Développer</h2>
                                    <div class="notion-box">
                                    <p><strong class="section-title">Définition :</strong> Développer c’est transformer un produit en somme.</p>
                                    </div>
                                    <p><em> Si vous avez 3 trousses identiques qui contiennent chacune un stylo une colle et un effaceur, vous avez $3(stylo+colle+effaceur)$ (cette expression à une structure de produit).</em></p>
                                    <p><em> On peut également dire que vous avez $\\rightarrow 3 stylos + 3 colles + 3 effaceurs$ (cette expression à une structure de somme)</em></p>
                                    <p> La seconde expression est la forme développée de la première </p>
                                                     
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> Développer sert à enlever des parenthèses en calcul littéral lorsqu’elles sont précédées d’une multiplication (ou d'un signe caché), cela permet de respecter les priorités de calcul tout en réduisant les expressions.
                                    </div>

                                    <h3 class="section-title">Simple distributivité</h3>
                                    <div class="notion-box">
                                    <blockquote>$a \\times (b + c) = ab + ac$ ou $a(b + c) = ab + ac$</blockquote>
                                    <p><em>Attention : Il est préférable de garder les signes avec les nombres qui suivent pour faciliter la simplification.</em></p>
                                    </div>
                                    <p> Exemples : </p>
                                    <div class="calculation-container">					
                                        <div class="calculation-block">
                                            <p>$A=$<font color="blue">$3$</font>$(2x + 4)$</p>
                                            <p>$A=$<font color="blue">$3$</font>$ \\times 2x + $<font color="blue">$3$</font>$ \\times 4$</p>
                                            <p>$A= 6x + 12$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>$B=$<font color="blue">$-3$</font>$(2x - 4)$</p>
                                            <p>$B=$<font color="blue">$ (-3)$</font>$ \\times 2x +$<font color="blue">$ (-3)$</font>$ \\times (-4)$</p>
                                            <p>$B= -6x + 12$</p>
                                        </div>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-CLsimpleDistrib"
                                        onclick="startQuizFromButton('quiz-area-CLsimpleDistrib', '33511')">
                                        Ai-je bien compris ?
                                        </button>
                                        <div id="quiz-area-CLsimpleDistrib"></div>

                                    

                                    <h3 class="section-title">Double distributivité</h3>
                                    <div class="notion-box">
                                    <blockquote>$(a+b)(c+d) = ac + ad + bc + bd$</blockquote>
                                    </div>
                                    <p> Exemple : </p>
                                    <p>$C=($<font color="blue">$-3x$</font><font color="purple">$+5$</font>$)(2x - 4)$
                                    <p>$C= $<font color="blue">$(-3x)$</font>$ \\times 2x + $<font color="blue">$(-3x)$</font>$ \\times (-4) +$<font color="purple">$ 5$</font>$ \\times 2x +$<font color="purple">$ 5$</font>$\\times (-4)$</p>
                                    <p>$C=        -6x²      +        12x         +      10x     +      (-20)$</p>
                                    <p>$C= -6x² +22x -20$</p>

                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-CLdoubleDistrib"
                                        onclick="startQuizFromButton('quiz-area-CLdoubleDistrib', '33521')">
                                        Ai-je bien compris ?
                                        </button>
                                        <div id="quiz-area-CLdoubleDistrib"></div>

                                </section>

                                <!-- SECTION : IDENTITÉS REMARQUABLES -->
                                <section class="course-section">
                                    <h2 class="section-title">Développer une identité remarquable</h2>
                                    <div class="notion-box" style="border: 2px solid var(--primary);">
                                        <strong style="font-size: 1.2rem;">🚀 FORMULE À APPRENDRE PAR CŒUR :</strong><br>
                                        $(a + b)(a - b) = a^2 - b^2$
                                    </div>
                                    <p><strong>Exemples :</strong></p>
                                    <p>$(2x + 3)(2x - 3) = (2x)^2 - 3^2 = 4x^2 - 9$</p>
                                    <p>$(5 - 3a)(5 + 3a) = 5^2 - (3a)^2 = 25 - 9a^2$</p>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-CLdevIDrem"
                                        onclick="startQuizFromButton('quiz-area-CLdevIDrem', '33601')">
                                        Ai-je bien compris ?
                                        </button>
                                        <div id="quiz-area-CLdevIDrem"></div>
                                </section>

                                <!-- SECTION : FACTORISER -->
                                <section class="course-section">
                                    <h2 class="section-title">Factoriser</h2>
                                    <div class="notion-box">
                                    <p><strong class="section-title">Définition :</strong> Factoriser c’est transformer une somme en produit.</p>
                                    </div>
                                    <br>
                                    
                                    <div class="method-box">
                                    <span class="method-badge">🚀 Méthode</span> Factoriser $6x + 12$
                                        <ul>
                                            <li>Repérer les additions/soustractions principales. $6x$ <strong><font color="blue">$ + $</font></strong> $12$</li>
                                            <li>Chercher un facteur commun (utiliser décomp si besoin).$6x + 12 = $<strong><font color="blue">$3$</font></strong>$ \\times 2x  + $<strong><font color="blue">$3$</font></strong>$ \\times 4 $</li>
                                            <li>Mettre le facteur commun devant la parenthèse et recopier le reste. $\\rightarrow$ <strong><font color="blue">$ 3 $</font></strong>$(2x+4)$</li>
                                        </ul>
                                    </div>

                                    <p><strong>Exemples de factorisation :</strong></p>
                                    <p>$A = 7a + 7b - 7c \\rightarrow A = 7(a + b - c)$</p>
                                    <p>$B = 3y^2 + 2y \\rightarrow B = y(3y + 2)$</p>
                                    <p>$C = 4b - 16 \\rightarrow C = 4(b - 4)$</p>
                                    <p>$D = 3y^2 + 6y \\rightarrow D = 3y(y + 2)$</p>
                                    <p>$E = (2a - 1)(a + 3) - (4a - 5)(a + 3) \\rightarrow E = (a+3)[(2a-1)-(4a-5)]$</p>
                                    
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-CLfactoriser"
                                        onclick="startQuizFromButton('quiz-area-CLfactoriser', '33701')">
                                        Ai-je bien compris ?
                                        </button>
                                        <div id="quiz-area-CLfactoriser"></div>

                                    <div class="notion-box">
                                        <strong style="color: var(--primary);">✨ Identité remarquable :</strong><br>
                                        $a^2 - b^2 = (a + b)(a - b)$
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-CLfactorIDrem"
                                        onclick="startQuizFromButton('quiz-area-CLfactorIDrem', '33702')">
                                        Ai-je bien compris ?
                                        </button>
                                        <div id="quiz-area-CLfactorIDrem"></div>
                                </section>
                            </div>
                        `
    }
};
