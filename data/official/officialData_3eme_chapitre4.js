// ============================================================
// data/official/officialData_3eme_chapitre4.js
// Niveau : 3ème — Thème : NOMBRES ET CALCULS
// Chapitre 4 : Équations
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.

var chapterData_3eme_4 = {
    themeName: "NOMBRES ET CALCULS",
    chapter: {
        id: 4,
        title: "Équations",
        eleve: "non",
        content: `
        <div class="course-container">
            <!-- SECTION : OBJECTIFS -->
            <section class="course-section">
                <p><strong>Objectifs :</strong></p>
                <ul>
                    <li>Je sais résoudre une équation de forme $ax + b = cx + d$</li>
                    <li>Je sais résoudre une équation produit</li>
                    <li>Je sais résoudre une équation de forme $x^2 = a$</li>
                    <li>Je sais mettre un problème en équation et le résoudre</li>
                </ul>
            </section>

            <!-- SECTION : VOCABULAIRE -->
            <section class="course-section">
                <h2 class="section-title">Vocabulaire</h2>
                <div class="notion-box">
                <p><strong class="section-title">Définition :</strong> Une équation est une égalité dans laquelle intervient un nombre inconnu, désigné par une lettre : $x, y, a, b, t \\dots$</p>
                </div>

                <p><strong class="section-title">Exemples :</strong></p>
                
                <div class="calculation-container">					
	                <div class="calculation-block">
                        $7 + x = 15$
	                </div>
	                <div class="calculation-block">
                        $9,5y = 38$
	                </div>
                    <div class="calculation-block">
                        $x^2 + 3x = 25$
	                </div>
                    <div class="calculation-block">
                        sont des équations car elles comportent une égalité (signe=)
	                </div>
                </div>
                <hr style="border: 0; border-top: 1px solid black; margin: 20px 0;">

                <div class="calculation-container">					
	                <div class="calculation-block">
                        $5x$
	                </div>
	                <div class="calculation-block">
                        $5x + 4y$
	                </div>
                    <div class="calculation-block">
                        $x^2 - 3$
	                </div>
                    <div class="calculation-block">
                        ne sont pas des équations car il n'y a pas d'égalité !
	                </div>
                </div>
                
                <div class="notion-box">
                <p><strong class="section-title">Résoudre une équation</strong>, c’est trouver toutes les valeurs possibles du nombre inconnu $(x,y, ...)$ telles que l’égalité soit vraie.</p>
                </div>
                <p><em class="section-title">Exemples :</em></p>
                <ul>
                    <li>L’équation $x - 1 = 0$ admet une seule et unique solution évidente : $x = 1$.</li>
                    <li>L’équation $m^2 = 4$ admet deux solutions : $m_1 = 2$ et $m_2 = -2$.</li>
                    <li>L’équation $7 + y = 4$ admet une seule et unique solution $y = -3$.</li>
                </ul>
                <p>Lorsqu'on remplace $x$ par la(les) solution(s) de l'équation l'égalité est vraie. Lorsqu'on remplace $x$ par n'importe quelle autre valeur l'égalité est fausse.<p>
                <p>Dans $x - 1 = 0$ si je remplace $x$ par $1$ on a bien $1-1=0$ ce qui est vrai. Si je remplace $x$ par 5 on a $5-1=0$ ce qui est faux.</p>
            </section>

            <!-- SECTION : TESTER UNE SOLUTION -->
            <section class="course-section">
                <h2 class="section-title">Tester, vérifier une solution</h2>
                <div class="notion-box">
                <p>Pour tester si une valeur peut être solution d'une équation, il suffit de remplacer la lettre par la valeur souhaitée et de calculer les deux côtés de l'égalité séparément. C'est très utile pour vérifier ses résultats !</p>
                </div>
                
                    
                    <div class="method-box">
                        <span class="method-badge">🚀 Méthode</span>
                        <p><em class="section-title">Exemples :</em></p>
                        <br>
                        <ul>
                        <li>$-2$ est-il solution de l'équation $2x + 15 = 5$ ?</li>
                                                             
                        $2 \\times (-2) + 15 = -4 + 15 = 11 \\neq 5$. Donc $-2$ n'est pas solution de cette équation.
                        </ul>                         
                        <br>
                        <ul>
                        <li>$-3$ est-il solution de l’équation $4y + 8 = 5y + 11$ ?</li>                                        
                        D'une part : $4 \\times (-3) + 8 = -12 + 8 = -4$<br>
                        D'autre part : $5 \\times (-3) + 11 = -15 + 11 = -4$<br>
                        Donc $-3$ est solution de l’équation $4y + 8 = 5y + 11$.
                        
                        </ul>
                    </div>
                    <button class="btn-check-understanding"
                        data_quiz_target="quiz-area-Equatester"
                        onclick="startQuizFromButton('quiz-area-Equatester', '34201')">
                        Ai-je bien compris ?
                        </button>
                        <div id="quiz-area-Equatester"></div>
            </section>

            <!-- SECTION : MÉTHODE DE BASE -->
            <section class="course-section">
                <h2 class="section-title">Méthode de résolution d'une équation de base</h2>
                <div class="notion-box">
                <p><strong>Règle 1 :</strong> On peut ajouter (ou soustraire) un même nombre aux deux membres d'une équation. L'égalité restera vraie.</strong></p>        
                </div>
                <p>Soient $a, b$ et $c$ trois nombres réels quelconques :</p>
                    <blockquote>
                    <p>Si $a = b$, alors $a $<font color="blue">$+ c$</font>$ = b $<font color="blue">$+ c$</font>$</p>
                    <p>Si $a = b$, alors $a $<font color="blue">$- c$</font>$ = b $<font color="blue">$- c$</font>$</p>
                    <br>
                </blockquote>
                <p><em class="section-title">Exemple :</em> $15 + y = 25 \\implies 15 + y - 15 = 25 - 15 \\implies y = 10$.</p>
                <p> [[BALANCE:x+7=20]]</p>
                <p> [[BALANCE:x-15=30]]</p>
                <br>
                <button class="btn-check-understanding"
                        data_quiz_target="quiz-area-Equasomme"
                        onclick="startQuizFromButton('quiz-area-Equasomme', '34301')">
                        Ai-je bien compris ?
                        </button>
                        <div id="quiz-area-Equasomme"></div>
                <br>
                <div class="notion-box">
                <p><strong>Règle 2 :</strong> On peut multiplier ou diviser par un même nombre non nul les deux membres d'une équation. Soient $a, b$ et $c$ trois nombres réels :</p>
                <blockquote>
                    <p>Si $a = b$, alors $a$<font color="blue">$ \\times c$</font>$ = b$<font color="blue">$ \\times c$</font></p>
                    <p>Si $a = b$, alors $a$<font color="blue">$ \\div c$</font>$ = b$<font color="blue">$ \\div c$</font> avec $c \\neq 0$</p>
                </blockquote>
                </div>
                <br>
                <p><em class="section-title">Exemple :</em> $5y = 100 \\implies 5y \\div 5 = 100 \\div 5 \\implies y = 20$.</p>
                <p> [[BALANCE:5*x=20]]</p>
                <p> [[BALANCE:x/4=10]]</p>
                <br>
                        <button class="btn-check-understanding"
                        data_quiz_target="quiz-area-Equaprod"
                        onclick="startQuizFromButton('quiz-area-Equaprod', '34302')">
                        Ai-je bien compris ?
                        </button>
                        <div id="quiz-area-Equaprod"></div>
                <br>
                <div class="notion-box">
                    <strong style="color: var(--secondary);">🚀 Application des règles :</strong>
                    <ol>
                        <li>On regroupe les termes avec l'inconnue dans un même membre (gauche ou droite) et on réduit.</li>
                        <li>On regroupe les termes sans inconnue dans l’autre membre et on réduit.</li>
                        <li>On résout avec une division ou une multiplication.</li>
                    </ol>
                </div>
                <p><em class="section-title">Exemple :</em> Résoudre : $6x - 8 = 9x - 7$</p>
                <!-- Bloc d'équation aligné par tableau -->
                    <div style="display: flex; justify-content: center; margin: 20px 0;">
                    <table style="border-collapse: collapse; font-size: 1.4rem; text-align: right;">
        
                    <!-- LIGNE 1 : Équation de départ (Noir) -->
                    <tr>
                        <td style="padding: 2px 5px;">$6x$</td>
                        <td style="padding: 2px 5px;">$-8$</td>
                        <td style="padding: 2px 15px; font-weight: bold;">$=$</td>
                        <td style="padding: 2px 5px;">$9x$</td>
                        <td style="padding: 2px 5px;">$-7$</td> 
                    </tr>
                    
                    <tr style="color: #007bff;">
                        <td></td>
                        <td style="padding: 2px 5px;">$+8$</td>
                        <td style="padding: 2px 15px; font-weight: bold;">$=$</td>
                        <td style="padding: 2px 5px;">$\\quad$</td>
                        <td style="padding: 2px 5px;">$+8$</td>
                    </tr>

                    <!-- LIGNE 3 : Résultat (Noir) -->
                    <tr style="font-weight: bold; border-top: 1px solid #ccc;">
                        <td>$6x$</td>
                        <td></td>
                        <td style="padding: 2px 15px;">$=$</td>
                        <td>$9x$</td>
                        <td>$+1$</td>
                    </tr>
                    
                    <!-- LIGNE 4 : Action -9x (Bleu) -->
                    <tr style="color: #007bff; font-style: italic;">                      
                        <td>$-9x$</td>
                        <td></td>
                        <td style="padding: 2px 15px; font-weight: bold;">$=$</td>
                        <td>$-9x$</td>
                        <td></td>
                    </tr>

                    <!-- LIGNE 5 : Résultat (Noir) -->
                    <tr style="font-weight: bold; border-top: 1px solid #ccc;">
                        <td>$-3x$</td>
                        <td></td>
                        <td style="padding: 2px 15px;">$=$</td>
                        <td></td>
                        <td style="padding: 2px 10px;">$+1$</td>
                    </tr>

                    <!-- LIGNE 6 : Action /(-3) (Bleu) -->
                    <tr style="color: #007bff; font-style: italic;">                       
                        <td>$\\div(-3)$</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>$\\div(-3)$</td>
                    </tr>

                    <!-- LIGNE 7 : SOLUTION FINALE (Encadrée) -->
                    <tr>
                        <td style="padding: 2px 5px;">$x$</td>
                        <td></td>
                        <td style="padding: 2px 15px; font-weight: bold;">$=$</td>
                        <td colspan="3" style="border: 2px solid #333; padding: 5px 20px; border-radius: 5px;">$-\\frac{1}{3}$</td>
                    </tr>
                </table>
                </div>
                <br>
                <p><strong>Raisonnement : j'ai envie de de mettre tous les termes en $x$ à gauche et tous les nombres à droite.</strong></p>
                <p>Le -8 gêne il est du côté ou je veux regrouper les $x$ je vais l'enlever en faisant l'opération contraire +8</p>
                <p>Le $+9x$ gêne il est du côté ou je veux regrouper les nombres je vais l'enlever en faisant l'opération contraire $-9x$</p>
                <p>Le $\\times (-3)$ devant le $x$ gêne il est du côté ou je ne veux que le $x$ je vais l'enlever en faisant l'opération contraire $\\div (-3)$</p>


                <br>
                <p><strong> Teste et comprends la méthode de résolution d'une équationen utilisant le laboratoire ci dessous.</strong> </p>
                <p> Tu peux cliquer sur Réinitialiser l'expérience pour obtenir une nouvelle équation choisie au hasard.</p>
                [[BALANCE:]]
                <br>
                <div class="notion-box">
                    <strong style="color: var(--primary);">📝 Objectif 1 :</strong> Je sais résoudre une équation de forme $ax + b = cx + d$.
                </div>
                <button class="btn-check-understanding"
                        data_quiz_target="quiz-area-Equabase"
                        onclick="startQuizFromButton('quiz-area-Equabase', '34303')">
                        Ai-je bien compris ?
                        </button>
                        <div id="quiz-area-Equabase"></div>
            </section>

            <!-- SECTION : ÉQUATION PRODUIT -->
            <section class="course-section">
                <h2 class="section-title">Résoudre une équation produit</h2>
                <p>Les équations contenant un terme inconnu au carré sont appelées équations du second degré. Elles diffèrent des équations du premier degré car elles peuvent avoir deux solutions différentes.</p>
                <p>Pour les résoudre, on utilise la forme factorisée des expressions littérales.</p>
                <div class="notion-box">
                    <strong style="color: var(--secondary);">💡 Propriété :</strong> Si $a \\times b = 0$, alors soit $a = 0$, soit $b = 0$. Un produit est nul si l'un de ses facteurs est nul.
                </div>
                <p><em class="section-title">Exemple :</em> Résoudre $(x + 3)(x - 7) = 0$.</p>
                <p>Le produit est nul si $(x + 3) = 0$ ou $(x - 7) = 0$.<br>
                Soit $x = -3$ ou $x = 7$.</p>

                <div class="notion-box">
                    <strong style="color: var(--primary);">📝 Objectif 2 :</strong> Je sais résoudre une équation produit.
                </div>
                <button class="btn-check-understanding"
                        data_quiz_target="quiz-area-Equaproduitnul"
                        onclick="startQuizFromButton('quiz-area-Equaproduitnul', '34401')">
                        Ai-je bien compris ?
                        </button>
                <div id="quiz-area-Equaproduitnul"></div>
            </section>

            <!-- SECTION : ÉQUATION X²=A -->
            <section class="course-section">
                <h2 class="section-title">Résoudre une équation du type $x^2 = a$</h2>
                <p>Soit $a$ un nombre réel. Si on part de l'équation $x^2 = a$, en retranchant $a$ dans chaque membre, on obtient : $x^2 - a = 0$.</p>
                <p>En utilisant l'identité remarquable $a^2 - b^2 = (a+b)(a-b)$, on transforme l'équation en équation produit : $(x + \\sqrt{a})(x - \\sqrt{a}) = 0$.</p>
                <p>Donc les solutions de l'équation $x^2 = a$ sont $x=+\\sqrt{a}$ et $x=-\\sqrt{a}$
                
                    <div class="method-box">
                    <span class="method-badge">🚀 Méthode</span>
                    En pratique tu n'as pas a redémontrer les deux solutions avec équation produit. Tu peux directement calculer la racine carrée et donner les deux réponses. 
                    <strong style="color: var(--secondary);">💡 Exemples :</strong>
                    <ul class="mt-2">
                        <li>$x^2 = 36 \\implies x = 6$ ou $x = -6$  car $sqrt{36}=6$</li>
                        <li>$2x^2 + 3 = 131 \\implies 2x^2 = 128 \\implies x^2 = 64 \\implies x = 8$ ou $x = -8$</li>
                    </ul>
                    </div>
                </div>

                <p><em class="section-title">Exemple avec identité remarquable :</em></p>
                <p>$(x - 2)^2 = 49$
                $\\implies (x - 2)^2 - 49 = 0$<br>
                $\\implies [(x - 2) + 7][(x - 2) - 7] = 0$<br>
                $\\implies (x + 5)(x - 9) = 0$<br>
                Les solutions sont $x = -5$ ou $x = 9$.</p>

                <div class="notion-box">
                    <strong style="color: var(--primary);">📝 Objectif 3 :</strong> Je sais résoudre une équation $x^2 = a$.
                </div>
                <button class="btn-check-understanding"
                        data_quiz_target="quiz-area-Equaxcarre"
                        onclick="startQuizFromButton('quiz-area-Equaxcarre', '34401')">
                        Ai-je bien compris ?
                        </button>
                        <div id="quiz-area-Equaxcarre"></div>
            </section>
        </div>
    `
    }
};
