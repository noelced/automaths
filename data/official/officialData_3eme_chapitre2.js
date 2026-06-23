// ============================================================
// data/official/officialData_3eme_chapitre2.js
// Niveau : 3ème — Thème : NOMBRES ET CALCULS
// Chapitre 2 : Arithmétique
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.

var chapterData_3eme_2 = {
    themeName: "NOMBRES ET CALCULS",
    chapter: {
        id: 2,
        title: "Arithmétique",
        eleve: "non",
        content: `
        <div class="course-container">
            <!-- SECTION : OBJECTIFS -->
            <section class="course-section">
                <p><strong>Objectifs :</strong></p>
                <ul>
                    <li>Je sais décomposer un nombre entier en produit de facteurs premiers</li>
                    <li>Je sais simplifier une fraction pour la rendre irréductible</li>
                    <li>Je sais modéliser et résoudre des problèmes mettant en jeu la divisibilité</li>
                </ul>
            </section>

            <!-- SECTION : RAPPELS -->
            <section class="course-section">
                <h2 class="section-title">Rappels</h2>
                <h3 class="section-title">Nombres</h3>
                <p>Jusqu’à présent nous avons rencontré plusieurs types de nombres :</p>
                <br>
                <ul>
                    <li>Les <strong>entiers naturels</strong> (toujours positifs ou nuls) ou <strong>relatifs</strong> (peuvent être négatifs) Ex : $2$ ; -$\\sqrt{9}$=-3 ; $\\frac{16}{4}$=4</li>
                    <li>Les <strong>décimaux</strong> (nombre fini de chiffres après la virgule) Ex :  $2,8$   ou   $\\frac{154}{1000}$=0,154</li>
                    <li>Les <strong>nombres rationnels</strong> (infinité de chiffres après la virgule) Ex : $\\frac{2}{3}$</li>  aux précédents.
                    <li>Les <strong>irrationnels</strong> (qui ne sont aucun des autres cas) Ex : $\\pi$</li>
                </ul>
                <p> Dans ce chapitre nous allons utiliser uniquement des entiers naturels. </p>
            </section>

            <!-- SECTION : DIVISION EUCLIDIENNE -->
           <section class="course-section">
                <h3 class="section-title">Division euclidienne</h3>
                <div class="notion-box">
                                <p><em>a, b, q et r</em> sont des entiers naturels où $b \\neq 0$, la division euclidienne de $a$ par $b$ est :
                                <img src="images/3eme_ch02_division_euclidienne.webp" alt="Schéma d'une division euclidienne" style="display: inline-block; vertical-align: middle; max-height: 2em; margin-left: 10px;">
                                </p>
                                <p>On a : <strong>$a = b \\times q + r$</strong> ou <strong>$a - b \\times q = r$</strong> où $r$ positif strictement inférieur à $b$.</p>
                                <p>« Dans <strong>$a$</strong>, il y a <strong>$q$</strong> fois le nombre <strong>$b$</strong>, et il reste <strong>$r$</strong> »</p>
                </div>
                <p><u>Exemple :</u></p>
                <img role="img" src="images/3eme_ch02_exemple_division.webp" alt="Schéma division" style="width:100%" />              
                <div class="methode-box">
                <p>Cette division se résume à l’égalité suivante : $86 - 3 \\times 28 = 2$</p>
                <p>Que nous préférons écrire sous cette forme : $86 = 3 \\times 28 + 2$</p>
                <p>   « Dans 86, il y a 3 fois le nombre 28, et il reste 2 »</p>
                <p><u>Exemple (à la calculatrice) :</u> Avec la touche : Ⱶ  on a directement $q =60 $ et $r = 5$</p>  ou si vous n'avez pas cette touche : 
                <p>On calcule le <strong>quotient</strong> : $785 : 13 \\approx 60,3846\\dots$ Donc le quotient <strong>$q = 60$</strong>.</p>
                <p>On calcule le <strong>reste</strong> : $785 - 13 \\times 60 = 5$. Donc le reste <strong>$r = 5$</strong></p>
                </div>
                <div class="method-box">
                <span class="method-badge">🚀 Méthode</span>
                    <br>
                    <p><strong><em>Je dispose de 233 billes à partager équitablement entre 3 enfants.</em></strong></p>
                    <p><strong><em>Combien de billes obtiendra chaque enfant ? </em></strong></p>
                    <p class="indent-text"><em>    233Ⱶ3 la calculatrice donne q=77 r=2 Chaque enfant aura 77 billes</em></p>
                    <p><strong><em>En restera-t-il à la fin ? si oui, combien ?</em></strong></p>
                    <p class="indent-text"><em>Oui, il en restera 2.</em></p>
                    <p><strong><em>Ecrire 233 sous la forme d’un produit et d’une somme.</em></strong></p>
                    <p class="indent-text"><em> $233 = 77 \\times 3 + 2$ </em></p>
                </div>
               <button class="btn-check-understanding" 
                    data_quiz_target="quiz-area-division" 
                    onclick="startQuizFromButton('quiz-area-division', '32121')">
                    Ai-je bien compris ?
                </button>
                <div id="quiz-area-division"></div>
            </section>

            <!-- SECTION : MULTIPLES ET DIVISEURS -->
                <section class="course-section">
                <h2 class="section-title">Multiples et diviseurs</h2>
                    <h3 class="section-title"> Vocabulaire </h3>
                        <p>Soient $a$ et $b$ deux nombres entiers non nuls et $b < a$ :</p>
                        <ul>
                            <li>$a$ est <strong>divisible par</strong> $b$</li>
                            <li>$a$ est un <strong>multiple de</strong> $b$</li>
                            <li>$b$ est un <strong>diviseur de</strong> $a$</li>
                            <li>$b$ <strong>divise</strong> $a$</li>
                        </ul>
                        <p>Toutes ces phrases signifient qu’il existe un nombre entier $q$ tel que : $a = b \\times q$</p>
                        <br>
                        <p><u>Exemples :</u> $60 = 5 \\times 12$. Je peux dire que : </p>
                        <p class="indent-text"><em> 60 est divisible par 5 ou 12</em><p>
                        <p class="indent-text"><em> 60 est un multiple de 5 ou 12</em><p>
                        <p class="indent-text"><em> 5 ou 12 sont des diviseurs de 60</em><p>
                        <p class="indent-text"><em> 5 ou 12 divisent 60</em><p>
                        <br>
                        
                        <button class="btn-check-understanding"
                        data_quiz_target="quiz-area-vocab"
                        onclick="startQuizFromButton('quiz-area-vocab', '32211')">
                        Ai-je bien compris ?
                        </button>
                        <div id="quiz-area-vocab"></div>
                        
                        <div class="notion-box">       
                        <p>Un <strong><u>diviseur commun</u></strong> à deux entiers, est un nombre entier non nul qui divise chacun d’eux.</p>
                        </div>
                        <p>Exemple : 1, 2, 3 et 6 sont les diviseurs communs à 12 et 18. En effet 1,2,3 et 6 divisent à la fois 12 mais aussi 18. </p>
                        <button class="btn-check-understanding"
                         data_quiz_target="quiz-area-divcommun"
                          onclick="startQuizFromButton('quiz-area-divcommun', '32212')">
                          Ai-je bien compris ?
                          </button>
                        <div id="quiz-area-divcommun"></div>
                        </section>

                    <!-- SECTION : CRITERES -->
                    <section class="course-section">
                    <h3 class="section-title">Critères de divisibilités</h3>
                        <ul>
                            <li>Un nombre est <strong><u>divisible par 2</u></strong> si son chiffre des unités est pair (0, 2, 4, 6 ou 8).</li>
                            <li>Un nombre est <strong><u>divisible par 5</u></strong> si son chiffre des unités est 0 ou 5.</li>
                            <li>Un nombre est <strong><u>divisible par 10</u></strong> si son chiffre des unités est 0.</li>
                            <li>Un nombre est <strong><u>divisible par 3</u></strong> si la somme de tous ses chiffres est divisible par 3.</li>
                            <li>Un nombre est <strong><u>divisible par 9</u></strong> si la somme de tous ses chiffres est divisible par 9.</li>
                        </ul>
                        <div class="method-box">
                        <span class="method-badge">🚀 Méthode</span>
                        <p><u>Exemple :</u> 3 528 est divisible par :</p>
                        <p class="indent-text"><em> 2 car c'est un nombre pair</em></p>
                        <p class="indent-text"><em> 3 car 3+5+2+8=18 et que 1+8=9</em></p>
                        <p class="indent-text"><em> 6 car il est divisible par 2 et par 3 donc il sera forcement divisible par 2 $\\times$ 3</em></p>
                        <p class="indent-text"><em> 9 car 3+5+2+8=18 et que 1+8=9</em></p>
                        <p class="indent-text"><em> 2$\\times$9=18 car divisible par 2 et par 9</em></p>
                        </div>
                        <button class="btn-check-understanding"
                         data-quiz-target="quiz-area-critere"
                          onclick="startQuizFromButton('quiz-area-critere', '32221')">
                          Ai-je bien compris ?
                          </button>
                        <div id="quiz-area-critere"></div>                      
                        <div class="notion-box">           
                            <strong style="color: var(--secondary);">✍️ Exercice :</strong> Montrer que la somme de trois entiers consécutifs est divisible par 3.
                        </div>
                        
                        <p class="indent-text"><em> Pour prouver que cela fonctionne avec tous les nombres on va utiliser le calcul littéral : Si cela fonctionne avec une lettre comme "$x$" cela fonctionnera avec n'importe quelle valeur de "$x$", donc n'importe quel nombre. Soit $x$ un nombre entier, le nombre d'avant s'écrit $x-1$, le nombre d'après s'écrit $x+1$ donc $(x-1)+x+(x+1)=3x$ qui est bien toujours divisible par 3 car il y a un facteur 3 devant !</em></p>
                        </section>

            <!-- SECTION : DETERMINER LES DIVISEURS -->
            <section class="course-section">
                <h3 class="section-title">Déterminer tous les diviseurs d’un nombre entier</h3>
                <div class="notion-box">
                <p>Pour trouver tous les diviseurs d’un nombre entier $N$, on teste la divisibilité de $N$ par tous les nombres entiers inférieurs ou égaux à $\\sqrt{N}$ (Penser à utiliser les critères de divisibilité !)</p>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <p><em><strong><u>Exemple :</u></strong></em> Déterminer tous les diviseurs de 45.</p>
                                <p>$\\sqrt{45} \\approx 6,7$. Il faut tester la divisibilité par 1 ; 2 ; 3 ; 4 ; 5 et 6.</p>
                                <p>On a : $45 = 1 \\times 45$ | $= 3 \\times 15$ | $= 5 \\times 9$</p>
                                <p>Les diviseurs de 45 sont 1 ; 3 ; 5 ; 9 ; 15 et 45.</p>
                            </th>
                            
                            <th>
                            <img src="images/3eme_ch02_exemple_diviseurs45.webp" alt="Schéma d'une division euclidienne" style="display: inline-block; vertical-align: middle; margin-left: 10px;">
                            </th>
                        </tr>
                    </thead>
                </table>

                <button class="btn-check-understanding"
                 data_quiz_target="quiz-area-alldiv"
                 onclick="startQuizFromButton('quiz-area-alldiv', '32231')">
                 Ai-je bien compris ?
                 </button>
                <div id="quiz-area-alldiv"></div>
            </section>

            <!-- SECTION : NOMBRES PREMIERS -->
            <section class="course-section">
                <h2 class="section-title">Nombres premiers</h2>
                <div class="notion-box">  
                <p><strong><u>Définition</u></strong> : Un <strong>nombre premier</strong> est un nombre entier qui admet exactement deux <strong>diviseurs 1 et lui-même</strong>.</p>
                </div>
                
                <p><strong><u>Exemples :</u></strong>                   
                <p>6 n’est pas un nombre premier : il admet aussi 2 et 3 comme diviseurs.</p>
                <p>7 est un nombre premier : il n’est divisible que par 1 et par 7.</p>
                <br>
                    <strong style="color: var(--secondary);">⚠️ Remarques :</strong>
                    <ul>
                        <li>0 n’est pas un nombre premier, car il possède une infinité de diviseurs.</li>
                        <li>1 n’est pas un nombre premier car il possède un seul diviseur : lui-même.</li>
                        <li>2 est le seul nombre premier pair, car tous les nombres pairs sont divisibles par 2.</li>
                    </ul>
                
                <div class="notion-box">
                <p>Liste des nombres premiers inférieurs à 30 : 2 ; 3 ; 5 ; 7 ; 11 ; 13 ; 17 ; 19 ; 23 ; 29.</p>
                </div>
                <button class="btn-check-understanding"
                 data_quiz_target="quiz-area-premier"
                  onclick="startQuizFromButton('quiz-area-premier', '32301')">
                  Ai-je bien compris ?
                  </button>
                <div id="quiz-area-premier"></div>
                <div class="notion-box">
                <p><strong class="section-title">Méthode :</strong> Soit $N$ un nombre entier supérieur ou égal à 2. Pour montrer qu’un nombre $N$ est premier, il suffit de montrer qu’il n’est divisible par aucun nombre premier inférieur ou égal à $\\sqrt{N}$.</p>
                </div>
                <p><em><strong class="section-title">Exemple :</strong></em> On veut savoir si 157 est un nombre premier. On a : $\\sqrt{157} = 12,5$. Il faut donc tester la divisibilité de 157 par 2, par 3, par 5, par 7 et par 11. 157 n’est divisible par aucun de ces 5 nombres, donc 157 est premier.</p>
                
                <div class="method-box">
                <span class="method-badge">🚀 Méthode</span>
                    <strong style="color: var(--primary);">📝 Exercice :</strong> Décomposer en produit de facteurs premiers le nombre suivant : 33915.
                    <p class="indent-text"><em> 33915 n'est pas divisible par 2, par contre il est divisible par 3 donc $33915/3=11305$</em></p>
                    <p class="indent-text"><em> 11305 n'est pas divisible par 3, donc on teste le prochain nombre premier qui est 5 :$11305/5=2261$</em></p>
                    <p class="indent-text"><em> 2261 n'est pas divisible par 5, donc on teste le prochain nombre premier qui est 7 :$2261/7=323$</em></p>
                    <p class="indent-text"><em> 323 n'est pas divisible par 7 (environ 46,14), ni par 11 (environ 29,3)</em></p>
                    <p class="indent-text"><em> Pour être sûrs que 321 n'est pas un nombre premier on teste jusqu'à $\\sqrt(321)=17,9$...</em></p>
                    <p class="indent-text"><em> On teste donc 17 on obtient $321/17=19$</em></p>
                    <p class="indent-text"><em> On a pu diviser 33915 par 3, 5,7, 17 et on obtient 19</em></p>
                    <p class="indent-text"><em> Donc la décomposition  en produits de facteurs premiers de $33915=3\\times5\\times7\\times17\\times19$</em></p>                    
                    </div>
                    <button class="btn-check-understanding"
                     data_quiz_target="quiz-area-decomp"
                      onclick="startQuizFromButton('quiz-area-decomp', '32302')">
                      Ai-je bien compris ?
                      </button>
                    <div id="quiz-area-decomp"></div>
            </section>

            <!-- SECTION : FRACTIONS IRREDUCTIBLES -->
            <section class="course-section">
                <h2 class="section-title">Fractions irréductibles</h2>
                <div class="notion-box">
                <p><strong><u class="section-title">Définition :</u></strong> Une fraction est dite <strong>irréductible</strong> si son numérateur et son dénominateur n’ont pas de diviseur commun autre que 1.</p>
                </div>
                <p><em><strong class="section-title">Exemple :</strong></em> $\\frac{55}{65}$ n’est pas une fraction irréductible : on peut la simplifier par 5. $\\frac{55}{65}$=$\\frac{5\\times 11}{5\\times 13}$ = $\\frac{11}{13}$ </p>
                
                    <strong style="color: var(--secondary);">💡 Méthode :</strong>
                    <ul>
                        <li>Décomposer le numérateur et le dénominateur en produits de facteurs premiers, puis simplifier par les facteurs communs.</li>
                        <li>Utiliser les critères de divisibilité pour simplifier une fraction.</li>
                    </ul>
                <div class="method-box">
                <span class="method-badge">🚀 Méthode</span>
                <p><em><strong class="section-title">Exercice :</strong></em> Simplifier les fractions suivantes pour les rendre irréductibles : $\\frac{120}{84}$    et    $\\frac{5^{3} \\times 7^{2} \\times 11^{3}}{5^{2} \\times 7^{3} \\times 11^{4}}$</p>
                <p>On a : $120 = 2^3 \\times 3 \\times 5$ et $84 = 2^2 \\times 3 \\times 7$, donc $\\frac{120}{84} = \\frac{2 \\times 2 \\times 2 \\times 3 \\times 5}{2 \\times 2 \\times 3 \\times 7} = \\frac{2 \\times 5}{7} = \\frac{10}{7}$</p>
                <p>On a : $\\frac{5^{3} \\times 7^{2} \\times 11^{3}}{5^{2} \\times 7^{3} \\times 11^{4}}$ contient 3 facteurs 5 au numérateur et seulement 2 au dénominateur donc il en restera un au numérateur. De même il restera un seul 7 au dénominateur et un 11 au dénominateur.</p>
                <p>il reste donc  $\\frac{5}{7\\times 11}$ = $\\frac{5}{77}$ </p>
                </div>
                <button class="btn-check-understanding"
                 data_quiz_target="quiz-area-irreduct"
                  onclick="startQuizFromButton('quiz-area-irreduct', '32401')">
                  Ai-je bien compris ?
                  </button>
                <div id="quiz-area-irreduct"></div>
                </section>

            <!-- SECTION : PROBLEMES DE DIVISIBILITE -->
            <section class="course-section">
                <h2 class="section-title">Problèmes de divisibilité</h2>
                <p>Il existe deux grands types de problèmes mettant en jeu la divisibilité :</p>
                <ul>
                    <li><strong>Problèmes de diviseur commun</strong> (souvent le plus grand possible).</li>
                    <li><strong>Problèmes de multiple commun</strong> (souvent le plus petit possible).</li>
                </ul>
                <button class="btn-check-understanding"
                 data_quiz_target="quiz-area-recopb"
                  onclick="startQuizFromButton('quiz-area-recopb', '32501')">
                  Ai-je bien compris ?
                  </button>
                  <div id="quiz-area-recopb"></div>
                <h3 class="section-title">Exemple type (diviseur) :</h3>
                <p><em>On souhaite partager 630 bonbons et 270 sucettes dans des petits sachets identiques... Quel est le nombre maximum de sachets possibles ?</em></p>
                <div class="notion-box">
                    <strong>Méthode :</strong> Nous recherchons un diviseur car le nombre de sachets sera forcément plus petit que 630 et 270. Il doit diviser 630 mais également 270.
                </div>
                <div class="method-box">
                <span class="method-badge">🚀 Méthode</span>
                <p>Décomposition en produit de facteurs premiers :</p>
                <p>630 = $2 \\times 3 \\times 3 \\times 5 \\times 7$ | 270 = $2 \\times 3 \\times 3 \\times 3 \\times 5$</p>
                <p>Les facteurs premiers communs sont : $2 \\times 3 \\times 3 \\times 5 = 90$. Il y aura donc <strong>90 sachets</strong>.</p>
                <p>Chaque sachet contiendra 630/90= <strong>7 bonbons</strong> et 270/90= <strong>3 sucettes</strong></p>
                </div>
                <button class="btn-check-understanding"
                 data_quiz_target="quiz-area-pbdiv"
                  onclick="startQuizFromButton('quiz-area-pbdiv', '32511')">
                  Ai-je bien compris ?
                  </button>
                  <div id="quiz-area-pbdiv"></div>

                <h3 class="section-title">Exemple type (multiple) :</h3>

                <p><em>Un cycliste met 24min pour faire le tour d'un circuit. Un autre met 36min... Au bout de combien de temps se retrouveront-ils ensemble ?</em></p>
                <div class="notion-box">
                    <strong>Méthode :</strong> Nous recherchons un multiple car le temps sera plus grand que 24 et 36.
                </div>
                <div class="method-box">
                <span class="method-badge">🚀 Méthode</span>
                <p>Décomposition : 24 = $2 \\times 2 \\times 2 \\times 3$ | 36 = $2 \\times 2 \\times 3 \\times 3$.</p>
                <p>Le plus petit multiple commun est $2 \\times 2 \\times 2 \\times 3 = 72$. Ils se retrouveront après <strong>72 min</strong>.</p>
                <p>Au bout de 72min le cycliste A aura fait 72/24= <strong>3 tours</strong> de 24min et le cycliste B aura fait 72/36=<strong>2 tours</strong> de 36min</p>
                </div>
                <button class="btn-check-understanding"
                data_quiz_target="quiz-area-pbmul"
                onclick="startQuizFromButton('quiz-area-pbmul', '32521')">
                Ai-je bien compris ?
                </button>
                <div id="quiz-area-pbmul"></div>
            </section>
        </div>
            `
    }
};
