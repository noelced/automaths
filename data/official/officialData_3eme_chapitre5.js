// ============================================================
// data/official/officialData_3eme_chapitre5.js
// Niveau : 3ème — Thème : ORGANISATION ET GESTION DE DONNÉES
// Chapitre 5 : Statistiques
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.

var chapterData_3eme_5 = {
    themeName: "ORGANISATION ET GESTION DE DONNÉES",
    chapter: {
        id: 5,
        title: "Statistiques",
        quiz: { q: "Si une série a pour valeurs 10, 20 et 30, quelle est sa moyenne ?", a: "20" },
        eleve: "non",
        content: `
                    <div class="course-container">
                    <!-- SECTION : OBJECTIFS -->
                    <section class="course-section">
                        <p><strong>Objectifs :</strong></p>
                        <ul>
                            <li>Je sais calculer des effectifs et des fréquences</li>
                            <li>Je sais calculer des moyennes et des médianes</li>
                            <li>Je sais calculer une étendue</li>
                            <li>Je sais lire et interpréter des données statiques présentées sous la forme de données brutes, d’un tableau, d’un diagramme en bâton, d’un diagramme circulaire ou d’un histogramme.</li>
                            <li>Je sais représenter des données sous la forme d’histogrammes pour des classes de même amplitude.</li>
                        </ul>
                    </section>

                    <!-- SECTION : DONNÉES BRUTES -->
                    <section class="course-section">
                        <h2 class="section-title">A quelle heure vous couchez-vous le soir ?</h2>
                        <p>Les réponses à la question posée sont appelées <font color="blue"><strong>valeurs du caractère</strong></font>.
                        <p> La liste de ces <strong>valeurs</strong> écrites les unes à côté des autres, s'apelle <font color="blue"><strong>une série statistique</strong></font>:</p>
                        <br>
                        <p>22h30 - 22h30 - 22h15 - 22h30 - 22h30 - 24h30 - 24h30 - 22h30 - 22h00 - 24h30 - 23h30 - 25h00 - 23h00 - 24h30 - 23h00 - 24h30 - 24h30 - 24h00 - 23h00 - 25h00 - 22h30 - 22h00 - 24h00 - 22h00</p>
                        <br>
                        <p>Tu remarqueras des valeurs bizares comme 25h00 qui correspond à 1h du matin. Nous avons transformé les valeurs pour ne pas fausser les calculs de moyenne par exemple (1h du matin doit être plus tard que 23h)</p>
                        <br>
                        <p>A partir de cette liste nous pouvons déja calculer une donnée statistique : l'effectif total.</p>
                        <font color="blue"><strong>L'effectif total</strong></font> c'est <strong>combien de</strong> valeurs avons nous récupéré <strong>en tout</strong> en posant notre question.</p>
                        <p>(ici effectif total = 24 car on a 24 réponses dans la liste.)</p>
                    </section>

                    <!-- SECTION : EFFECTIFS ET FRÉQUENCES -->
                    <section class="course-section">
                        <h2 class="section-title">Vocabulaire et Tableaux</h2>
                        <div class="notion-box">
                        <p><strong></strong> <font color="blue"><strong>l'effectif de 22h00</strong></font>  signifie <strong>combien de</strong> valeurs 22h00 y a t'il dans la série statistique. </p>
                        <br>
                        <p><strong class="section-title"><font color="blue">Tableau d'effectifs :</font> c'est notre premier outil utile pour résumer les valeurs sans perdre d'information.</strong></p>
                        </div>
                        <p> Imagine qu'on pose cette question aux 600 élèves du collège, la liste serait de 600 valeurs !</p>
                        <p> En organisant les données dans un tableau (appelé : tableau d'effectifs) 16 valeurs (8 horaires, et 8 effectifs) suffisent pour savoir quelles étaient les 600 réponses.</p>
                        
                       <div class="table-container">
                        <table class="custom-table">
                            <thead>
                                <tr>
                                    <th>Valeurs du caractère</th>
                                    <th>22h00</th>
                                    <th>22h15</th>
                                    <th>22h30</th>
                                    <th>23h00</th>
                                    <th>23h30</th>
                                    <th>24h00</th>
                                    <th>24h30</th>
                                    <th>25h00</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Effectif</strong></td>
                                    <td>3</td>
                                    <td>1</td>
                                    <td>6</td>
                                    <td>3</td>
                                    <td>1</td>
                                    <td>3</td>
                                    <td>5</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td><strong>Effectifs cumulés croissants</strong></td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>10</td>
                                    <td>13</td>
                                    <td>14</td>
                                    <td>17</td>
                                    <td>22</td>
                                    <td>24</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                        <p> Quand on crée un tableau d'effectif, il n'est pas rare d'oublier une valeur.</p>
                        <p>On peut vérifier cela en additionnant toute la ligne effectif du tableau : $3+1+6+3+1+3+5+2 = 24$</p> pour retrouver l'effectif total. </p>
                        <p>La ligne <strong>effectif cumulés croissant</strong> est utile pour trouver plus facilement la médiane de la série statistique. Elle n'est pas obligatoire mais permet de savoir en un coup d'oeil que, de la 11ème à la 13ème valeur, nous avons des 23h00 dans la série. On la construit en additionnant tous les effectifs des valeurs inférieures ou égales à la valeur regardée. Exemple pour 23h00 on a fait 3+1+6+3=13</p>
                        </div>
                        <button class="btn-check-understanding"
                        data_quiz_target="quiz-area-statseffectifs"
                        onclick="startQuizFromButton('quiz-area-statseffectifs', '35201')">
                        Ai-je bien compris ?
                        </button>
                        <div id="quiz-area-statseffectifs"></div>

                        <h3 class="section-title">Fréquence</h3>
                        <p>La fréquence correspond à la proportion de la valeur dans la série statistique. Pour répondre à la question : Est-ce fréquent que les élèves se couchent à 22h30? On pourrait répondre par oui ou non, mais cette réponse manquerait de précision. Il est préférable de donner une valeur chiffrée. 22h30 apparait $6$ fois dans la liste. Mais 6 n'apporte pas assez d'informations, en effet 6 fois sur 10 serait très fréquent, mais 6 fois sur 1000 serait très rare. C'est pour cela qu'il faut préciser le nombre de valeurs totales. Ici on a $6$ fois 22h30 sur $24$ valeurs en tout. Donc la fréquence de 22h30 sera : $\\frac{6}{24}=6 \\div 24=0,25$.</p>

                        <div class="notion-box">
                        <p><strong style="color: var(--primary);">Formule :</strong></p>
    
                            
                            <div class="formula-container">
                                $\\text{Fréquence d'une valeur} = \\frac{\\text{effectif de la valeur}}{\\text{effectif total}}$
                            </div>

                            <p><strong style="color: var(--text-main);">Remarques :</strong></p>
                            <ul>
                                <li>La fréquence est toujours un nombre entre 0 et 1.</li>
                                <li>Lorsqu'on multiplie la fréquence par 100 on obtient directement un pourcentage.</li>
                            </ul>
                        </div>
                        <div class="method-box">
                        <span class="method-badge">🚀 Méthode</span>
                        <p>Exemple : Quelle est la fréquence de 24h en pourcentage?</p>
                        <p>Fréquence de 24h = $\\frac{3}{24}=3 \\div 24=0,125$.</p>
                        <p>Soit $0,125 \\times 100 = 12,5$. Il y a $12,5$ % des élèves interrogés qui se couchent à minuit.</p>
                        </div>
                        <button class="btn-check-understanding"
                        data_quiz_target="quiz-area-statfrequence"
                        onclick="startQuizFromButton('quiz-area-statfrequence', '35211')">
                        Ai-je bien compris ?
                        </button>
                        <div id="quiz-area-statfrequence"></div>
                        

                    </section>


                    <!-- SECTION : MOYENNE -->
                    <section class="course-section">
                        <h2 class="section-title">Caractéristiques de position</h2>

                        <p>La moyenne comme la médiane donnent une indication sur une valeur autour de laquelle sont positionnées les valeurs de la liste.</p>
                        <br>
                        <p>On utilisera principalement <strong>la moyenne</strong> lorsque les valeurs extrêmes (les très petites et les très grandes) ont une importance pour notre situation.
                        <p>Par exemple, à l'école, toutes vos notes sont importantes. Même si on apprécierait qu'un 0 ne compte pas, il serait regrettable que nos 20 ne comptent pas non plus. C'est pourquoi on calcule ta <strong>moyenne</strong> générale.</p>
                        <br>
                        <p>On utilisera principalement <strong>la médiane</strong> lorsque les valeurs extêmes ne sont pas importantes ou pertinentes.</p>
                        <p> Dans le cas de mesures, comme en sciences physiques pr exemple, les valeurs trop petites ou trop grandes sont très probablement des erreurs de mesures. On ne veut pas qu'elles impactent le résultat final. Donc on préférera dire que la tension médiane est de 230 Volts.</p>
                        <p> Tu entendras également parler de salaire médian aux informations. Je te laisse deviner pourquoi. </p>
                        <h3 class="section-title">Calcul de moyenne</h3>
                        <br>
                        <p> Lorsqu'on dit qu'il y a 40 personnes en moyenne dans chaque bus, cela ne signifie pas qu'on a 40 personnes dans chaque bus.</p>
                        <p> Il peut y en avoir plus (53 dans un bus bien chargé) ou moins (34 dans un autre bus moins apprécié).</p>
                        <p> Mais si on faisait descendre toutes les personnes de tous les bus, qu'on les partageait équitablement dans des groupes, et qu'on faisait remonter chaque groupe dauns chaque bus, alors il y aurait exactement 40 personnes par bus.</p>
                        <br>
                        <p><strong class="section-title">Moyenne simple (sans effectifs ou coefficients) : Elle est utilisée lorsqu'on travaille sur une liste de valeurs</strong></p>
                        <div class="notion-box">
                            On additionne toutes les valeurs et on divise par l’effectif total.
                        </div>
                        <p><em>Exemple :</em> Leny a eu 5 notes au deuxième trimestre : 11, 15, 14, 9, 12. <br>
                        $(11+15+14+9+12) \\div 5 = 12,2$. La moyenne est de $12,2$.</p>
                        <button class="btn-check-understanding"
                        data_quiz_target="quiz-area-statmoyennesimple"
                        onclick="startQuizFromButton('quiz-area-statmoyennesimple', '35311')">
                        Ai-je bien compris ?
                        </button>
                        <div id="quiz-area-statmoyennesimple"></div>

                        <p><strong class="section-title">Moyenne pondérée : c'est le même principe de calcul mais on l'utilise lorsque on a un tableau d'effectif ou des coefficients</strong></p>
                        <div class="notion-box">
                            On multiplie chaque valeur par son effectif (pour tenir compte de TOUTES les valeurs de la liste) et on divise par l’effectif total.
                        </div>
                        <p><em>Exemple (Heure de coucher) :</em> <br>
                        $(22 \\times 3 + 22,25 \\times 1 + 22,5 \\times 6 + 23 \\times 3 + 23,5 \\times 1 + 24 \\times 3 + 24,5 \\times 5 + 25 \\times 2) \\div 24 = 23,34$.<br>
                        Ce qui correspond à une heure de coucher de $23\\text{h}$ et $0,34 \\times 60 = 20\\text{min}$, soit $23\\text{h}20$.</p>
                        <button class="btn-check-understanding"
                        data_quiz_target="quiz-area-statmoyennepond"
                        onclick="startQuizFromButton('quiz-area-statmoyennepond', '35312')">
                        Ai-je bien compris ?
                        </button>
                        <div id="quiz-area-statmoyennepond"></div>
                    </section>

                    <!-- SECTION : MEDIANE -->
                    <section class="course-section">
                        <h3 class="section-title">Médiane</h3>
                        <p>La médiane est la valeur qui partage la série statistique en deux séries de même effectif, de sorte que $50\\%$ des effectifs ont une valeur inférieure ou égale à la médiane et $50\\%$ des effectifs ont une valeur supérieure ou égale.</p>
                        <div class="notion-box">
                            <strong style="color: var(--secondary);">💡 Astuce :</strong> C'est la valeur « du milieu » lorsque les valeurs sont rangées dans l’ordre croissant.
                        </div>

                        <p> Pour trouver la médiane, d'une série statistique, on range les valeurs dans l'odre croissant.</p>
                        <p> (sinon le "milieu" pourrait être n'importe quelle valeur...)<p>
                        <br>
                        <div>
                            <p><span><strong>Cas ou le nombre de valeurs est impair</strong></span></p>
                            <div class="case-content">
                                <div>
                                    <span>$ 10 \\quad $</span> <span>$ 11 \\quad $</span> <span class="text-blue"> $ 13 \\quad $ </span> <span> $ 14 \\quad $ </span> <span> $ 15 \\quad $ </span>
                                </div>
                                <p> La médiane est <span class="text-blue">13</span> car c'est la valeur du milieu</p>
                            </div>
                        </div>
                        <button class="btn-check-understanding"
                        data_quiz_target="quiz-area-medianesimple"
                        onclick="startQuizFromButton('quiz-area-medianesimple', '35321')">
                        Ai-je bien compris ?
                        </button>
                        <div id="quiz-area-medianesimple"></div>
                        <br>

                        <div>
                            <p><span><strong>Cas ou le nombre de valeurs est impair</strong></span></p>
                            <div class="case-content">
                                <div>
                                    <span>$ 10 \\quad $</span> <span class="text-blue"> $ 11 \\quad $ </span><span class="text-blue"> $ 14 \\quad $ </span>  <span> $ 15 \\quad $ </span>
                                </div>
                                <p> Il y a deux valeurs au milieu <span class="text-blue">$11$ et $14$</span> donc on crée la médiane en calculant la <strong>demi-somme</strong> des deux valeurs</p>
                                <p> Médiane $= (11+14) \\div 2 =$ <span class="text-blue">$12,5$</span></p>
                            </div>
                        </div>                           
                        <br>
                        <div>
                            <p><span><strong>Cas ou on a un tableau d'effectifs</strong></span></p>
                            <br>
                            <div class="table-container">
                        <table class="custom-table">
                            <thead>
                                <tr>
                                    <th>Valeurs du caractère</th>
                                    <th>22h00</th>
                                    <th>22h15</th>
                                    <th>22h30</th>
                                    <th>23h00</th>
                                    <th>23h30</th>
                                    <th>24h00</th>
                                    <th>24h30</th>
                                    <th>25h00</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Effectif</strong></td>
                                    <td>3</td>
                                    <td>1</td>
                                    <td>6</td>
                                    <td>3</td>
                                    <td>1</td>
                                    <td>3</td>
                                    <td>5</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td><strong>Effectifs cumulés croissants</strong></td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>10</td>
                                    <td>13</td>
                                    <td>14</td>
                                    <td>17</td>
                                    <td>22</td>
                                    <td>24</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="method-box">
                    <span class="method-badge">🚀 Méthode</span>
                    <p> on voit que dans ce tableau il y a 24 valeurs en tout (effectif total)</p>
                    <p> 24 est pair donc il n'y aura pas de valeur au milieu, il faudra faire la demi-somme.</p>
                    <p> La moitié (milieu des valeurs) de 24 c'est 12. On aura donc besoin de la 12ème et de la 13ème valeur du tableau pour faire la demi-somme</p>
                    <p> En regardant la ligne des effectifs cumulés croissants, on voit que la 12ème valeur est 23h00, la 13ème valeur est aussi 23h00. </p>
                    <p> Donc la médiane sera $(23+23) \\div 2=23h00$</p>
                    <p> <strong>Interprétation : </strong> On peut donc dire que la moitié des élèves vont se coucher à 23h00 ou plus tôt que 23h00, et que l'autre moitié des élèves va se coucher à 23h00 ou plus tard que 23h00. </p>
                    </div>    
                </div>    

                       <button class="btn-check-understanding"
                        data_quiz_target="quiz-area-statmedianepond"
                        onclick="startQuizFromButton('quiz-area-statmedianepond', '35322')">
                        Ai-je bien compris ?
                        </button>
                        <div id="quiz-area-statmedianepond"></div>
                    </section>

                    <!-- SECTION : ETENDUE -->
                    <section class="course-section">
                        <h2 class="section-title">Caractéristique de dispersion</h2>
                        <h3 class="section-title">L'Étendue</h3>
                        <p>L’étendue mesure l’écart entre les grandeurs d’une série statistique.</p>
                        <div class="notion-box">
                            <strong style="color: var(--primary);">Formule :</strong> $\\text{Étendue} = \\text{Valeur Max} - \\text{Valeur Min}$
                        </div>
                        <p><em>Exemple comparatif :</em> <br>
                        <p>L'étendue permet de différentier ces deux élèves :</p>
                        <p>Notes de l’élève A : $9 \\quad   9 \\quad   9 \\quad   10 \\quad   11 \\quad   11 \\quad   11 $</p>
                        <p>Notes de l’élève B : $0 \\quad   0 \\quad   0 \\quad   10 \\quad   20 \\quad   20 \\quad   20 $</p> 
                        <br>
                        <p>Ces deux élèves ont 10 de moyenne et 10 de médiane. On pourrait penser qu’ils sont similaires.</p>
                        <br>
                        <p>Élève A (notes régulières) : Étendue = $11 - 9 = 2$.</p>                        
                        <p>Élève B (notes dispersées) : Étendue = $20 - 0 = 20$.</p>
                        <br>
                        <p>Cependant, l’étendue de l’élève A est de 2 (11-9) et celle de l’élève B est de 20 (20-0)</p>
                        <p>L’étendue permet de dire que l’élève A a des difficultés, mais que son travail est très régulier car il n’y a que deux points d’écarts entre ses notes.</p>
                        <p>Par contre l’élève B a des facilités puisqu’il est capable d’avoir des 20, mais il ne travaille pas régulièrement car ses notes sont très dispersées (étendue de 20 !)</p>
                        <br>
                        <p>En résumé, l'étendue complète la moyenne ou la médiane en redonnant un peu d'information perdue avec un "résumé" de l'ensemble des valeurs trop agressif.</p>

                        <button class="btn-check-understanding"
                        data_quiz_target="quiz-area-statetendue"
                        onclick="startQuizFromButton('quiz-area-statetendue', '35411')">
                        Ai-je bien compris ?
                        </button>
                        <div id="quiz-area-statetendue"></div>
                    </section>

                    <!-- SECTION : HISTOGRAMME -->
                    <section class="course-section">
                        <h2 class="section-title">Classes d’amplitude et histogramme</h2>
                        <h3 class="section-title">Classes d'amplitude</h3>

                        <p><strong class="section-title">Exemple :</strong> Le professeur de SVT a relevé la taille (en cm) de tous les élèves d’une classe de cinquième.</p>
                        <p>Série : 150 – 165 – 169 – 155 – 164 – 149 – 150 – 162 – 160 – 164 – 164 – 170 – 172 – 164 – 135 – 165 – 163 – 160 – 161 - 158 – 155 – 142 – 158 – 150 – 140 – 147 – 175 – 138</p>
                        
                        <p>Etant donné que peu d'élèves ont la même taille, faire un tableau d'effectifs ne résumerait pas les données. Au contraire, on aurait plus de nombres dans le tableau que dans la série statistique : aucun intérêt !</p>
                        <p>Pour résumer les données, on décide de regrouper les élèves dans des <strong>classes d'amplitude 10</strong>. Ce qui signifie qu'on va regrouper les élèves faisant à peu près la même taille, avec $10$cm d'écart entre eux.</p>
                        <!-- Conteneur pour le défilement sur mobile -->
                        <div class="table-container">
                            <table class="custom-table">
                                <thead>
                                    <tr>
                                        <th>Taille (en cm)</th>
                                        <th>\\(130 \\le T < 140\\)</th>
                                        <th>\\(140 \\le T < 150\\)</th>
                                        <th>\\(150 \\le T < 160\\)</th>
                                        <th>\\(160 \\le T < 170\\)</th>
                                        <th>\\(170 \\le T < 180\\)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Effectif</strong></td>
                                        <td>2</td>
                                        <td>4</td>
                                        <td>7</td>
                                        <td>12</td>
                                        <td>3</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <br>
                        <strong>Remarque :</strong>
                        <p>Chaque donnée de la série n’appartient qu’à une seule « classe » :<p>
                        <p>L’écriture 130 ≤ T < 140 est la « classe » des élèves dont la taille T est comprise entre 130 cm et 140 cm. La valeur 130 cm est comprise dans cette classe et la valeur 140 cm n’est pas comprise dans cette classe. On peut aussi noter : [130;140[ </p>
                        <br>
                        <h3 class="section-title">Histogramme</h3>
                        <br>
                        <p>Un histogramme est une représentation graphique utilisée dans le cas d'une série regroupée en classe; <strong>La largeur de la barre</strong> dépend de la largeur de la classe. </p>
                        <p>Un histogramme ressemble à un diagramme en barres, mais il n'est pas construit de la même manière. Dans un digramme en barres (ou en bâton) l'effectif est représenté sur l'axe des ordonnées. La hauteur de la barre représente l'effectif.</p>
                        <p>Dans un histogramme, c'est <strong>l'aire</strong> de la barre (pas la hauteur) qui représente l'effectif. L'histogramme n'a pas d'axe des ordonnées.</p>
                        <p>L'histogramme est vraiement pertinent lorsque les classes n'ont pas toutes la même amplitude, ce qui n'est jamais le cas en troisième. D'ou ta difficulté à différencier les deux types de diagrammes.</p>

                        <div class="chart-container" style="position: relative; height:40vh; width:100%; max-width:600px; margin: 20px auto;">
                        <canvas id="histogrammeTailles"></canvas>
                        </div>





                        <div class="notion-box">
                            <strong style="color: var(--secondary);">📊 Construction de l'histogramme :</strong><br>
                            Pour construire un histogramme, on place les classes sur l'axe des abscisses. L'<strong>aire</strong> du rectangle est proportionnelle à l'effectif (et non la hauteur seule).
                        </div>
                    </section>
                </div>
            `
    }
};
