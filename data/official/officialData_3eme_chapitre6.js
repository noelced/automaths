// ============================================================
// data/official/officialData_3eme_chapitre6.js
// Niveau : 3ème — Thème : ORGANISATION ET GESTION DE DONNÉES
// Chapitre 6 : Probabilités
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.

var chapterData_3eme_6 = {
    themeName: "ORGANISATION ET GESTION DE DONNÉES",
    chapter: {
        id: 6,
        title: "Probabilités",
        eleve: "non",
        content:`
                            <div class="course-container">
                                <!-- SECTION : OBJECTIFS -->
                                <section class="course-section">
                                    <p><strong class="section-title">Objectifs :</strong></p>
                                    <ul>
                                        <li>Je connais le vocabulaire des probabilités (Issues ; les différents types d’événements…)</li>
                                        <li>Je sais calculer une probabilité (d’une issue, d’un événement, d’un événement contraire)</li>
                                        <li>Je sais calculer la probabilité d’une expérience aléatoire à deux épreuves.</li>
                                        <li>Je comprends la loi des grands nombres et le lien entre stabilisation des fréquences et probabilités</li>
                                    </ul>
                                </section>

                                <!-- SECTION : VOCABULAIRE -->
                                <section class="course-section">
                                    <h2 class="section-title">Vocabulaire</h2>
                                    
                                    <div class="notion-box">
                                    <p><strong class="section-title">Expérience aléatoire :</strong> Une expérience aléatoire est une expérience dont on ne peut pas connaître le résultat d’une façon certaine (notion de hasard).</p>
                                    <p><strong class="section-title">Issues :</strong> Les issues d’une expérience aléatoire sont les différents résultats possibles de l’expérience.</p>
                                    <p><strong class="section-title">Probabilité :</strong> La probabilité est un nombre décimal compris entre 0 et 1 qui caractérise la possibilité que l’événement considéré se produise.</p>           
                                    <ol>$\\quad$ Si $P=0,1$ l'événement a très peu de chances de se produire (1 fois sur 10)</ol>
                                    <ol>$\\quad$Si $P=0,5$ l'événement se produit 1 fois sur 2</ol>
                                    <ol>$\\quad$Si $P=0,9$ l'événement a beaucoup de chances de se produire (9 fois sur 10)</ol>
                                    </div>

                                    
                                    <strong style="color: var(--primary);">💡 Exemples :</strong><br>
                                    <p>Expérience aléatoire : je lance une pièce en l’air et je regarde le côté sur lequel la pièce retombe.</p>
                                    <p>Issues : Pile ou Face.<br></p>
                                    <p>Probabilité : $0,5$.</p>
                                    

                                    <div class="notion-box">
                                    <p><strong class="section-title">Événement :</strong> Un événement est constitué par certaines issues d’une expérience aléatoire. Chacune de ces issues réalise l’événement.</p>
                                    </div>
                                    <strong style="color: var(--primary);">💡 Exemple :</strong><br>
                                    <p>Expérience aléatoire : je lance un dé de 6 et je regarde le numéro obtenu.</p>
                                    <p>Issues : Je peux tomber sur $1 ; 2 ; 3 ; 4 ; 5 ; 6$.</p>
                                    <br>
                                    <p><strong>Événement A : obtenir un nombre pair.</strong></p>
                                    <p><strong>Événement B : obtenir un nombre supérieur ou égal à 5.</strong></p>
                                    <p>Si je tombe sur 4, ou sur 5, ou sur 6 on dira que l'évenement A sera <strong>réalisé</strong>.</p>
                                    <p>Si je tombe sur 5 par exemple, on dira que l'évenement A <strong>n'est pas réalisé</strong>.</p>
                                    <p>L’événement B est réalisé si je tombe sur 5, l’événement B est aussi réalisé si je tombe sur 6.</p>
                                    <br>
                                    <p><strong class="section-title">Événement contraire :</strong> L’événement contraire de A est noté $\\overline{A}$. Il est constitué de toutes les issues qui ne sont pas dans l’événement A.</p>
                                    <p>Dans notre exemple précédent, $\\overline{A}$ serait obtenir un nombre impair et $\\overline{B}$ serait obtenir un nombre strictement inférieur à 5 ($1 ; 2 ; 3$ ou $4$) car 5 et 6 sont dans l’événement B.</p>
                                    <p> ⚠️ Attention : "contraire" n'a pas tout à fait le même sens qu'en français. En probabilités, le contraire de rouge c'est ... toutes les couleurs qui ne sont pas rouges !</p>
                                    </br>
                                    <p><strong>Événement impossible :</strong> Un évènement est dit impossible s’il ne peut jamais se produire. Sa probabilité est égale à $0$. (Exemple : Obtenir un 7 avec le dé de 6).</p>
                                    <p><strong>Événement certain :</strong> Un évènement est dit certain s’il se produit toujours. Sa probabilité est égale à $1$. (Exemple : Obtenir un nombre inférieur à 10 avec le dé de 6).</p>
                                    <p><strong>Événements incompatibles :</strong> Deux évènements sont dits incompatibles s’ils ne peuvent pas se produire en même temps.</p>
                                    
                                    <button class="btn-check-understanding"
                                    data_quiz_target="quiz-area-probavocab"
                                    onclick="startQuizFromButton('quiz-area-probavocab', '36101')">
                                    Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-probavocab"></div>
                                </section>

                                <!-- SECTION : CALCUL DE PROBABILITÉ -->
                                <section class="course-section">
                                    <h2 class="section-title">Calcul de probabilité</h2>
                                    <h3 class="section-title">Définition</h3>
                                    <div class="notion-box">
                                    La probabilité d’un événement est calculée en divisant le nombre d’issues favorables à un événement par le nombre d’issues possibles.</p>
                                    <strong style="color: var(--primary);">Formule :</strong> $P(A) = \\frac{\\text{nombre d'issues favorables}}{\\text{nombre d'issues possibles}}$
                                    </div>
                                    <p><em class="section-title">Exemple :</em> $P(\\text{Pile}) = \\frac{1}{2} = 0,5$. (1 issue favorable sur 2 issues possibles).</p>
                                    <button class="btn-check-understanding"
                                    data_quiz_target="quiz-area-probadef"
                                    onclick="startQuizFromButton('quiz-area-probadef', '36211')">
                                    Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-probadef"></div>

                                    <h3 class="section-title">Propriétés</h3>
                                    <div class="notion-box">                                    
                                    <p>Lorsque les issues d'un évenement sont <strong>incompatibles</strong> (je ne peux pas avoir un 5 et en même temps avoir un 6)</p>
                                    <p>la probabilité d’un événement est la somme des probabilités des issues qui composent l’évènement.</p>
                                    </div>
                                    <p> Comme l’événement A est réalisé si je tombe sur 2 ou 4 ou 6, alors $P(A)=P(2)+P(4)+P(6).</p>
                                    <p> Comme ces issues sont <strong>équiprobables</strong> (on a autant de chances de tomer sur le 2 que sur le 1 ou le 4...), $P(2)=P(4)=P(6)=\\frac{1}{6}$</p>
                                    <br>
                                    <p> Alors $P(A) = \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} = \\frac{3}{6} = 0,5$ </p>
                                    <br>
                                    <p><strong>Événement B : obtenir un nombre supérieur ou égal à 5.</strong></p>
                                    <p>L’événement B est réalisé si je tombe sur 5 ou 6, donc <p>Événement B (obtenir 5 ou 6 avec le dé) : $P(B) = P(5) + P(6) = \\frac{1}{6} + \\frac{1}{6} = \\frac{2}{6} = \\frac{1}{3} \\approx 0,333$.</p>
                                    <br>
                                    <div class="notion-box">    
                                    <p>La somme de la probabilité de tous les événements est toujours égale à $1$.</p>
                                    <p>Donc la somme des probabilités d’un événement et de son événement contraire vaut $1$ : $P(A) + P(\\overline{A}) = 1$, ou plus souvent $P(\\overline{A}) = 1 - P(A)$.</p>
                                    </div>
                                    <p>$P(\\text{pile}) + P(\\text{face}) = 0,5 + 0,5 = 1$.</p>
                                    <p>$P(1)+P(2)+P(3)+P(4)+P(5)+P(6)=\\frac {1}{6} \\times 6 = \\frac{6}{6} = 1$</p>
                                    <br>
                                    <p>Pour trouver $P(\\overline{B})$, on peut faire :  $P(\\overline{B}) = 1 - P(B) = 1 - \\frac{1}{3} = \\frac{2}{3}$.</p>
                                    <p>C'est souvent beaucoup plus rapide et praque que de faire $P(\\overline{B}) = P(1)+P(2)+P(3)+P(4)$</p>
                                    <p>Et dans certains cas il nous manque des valeurs donc passer par le contraire pour trouver une probabilité manquante est une astuce courante</p>
                                    <br> 
                                    <div class="notion-box">
                                    Le pourcentage de chance qu’un événement se produise se calcule en multipliant la probabilité par $100$.
                                    </div>
                                    <p>J’ai $0,5 \\times 100 = 50\\%$ de chances de tomber sur pile.</p>
                                        
                                    

                                    <button class="btn-check-understanding"
                                    data_quiz_target="quiz-area-probapropri"
                                    onclick="startQuizFromButton('quiz-area-probapropri', '36221')">
                                    Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-probapropri"></div>
                                </section>

                                <!-- SECTION : DEUX ÉPREUVES -->
                                <section class="course-section">
                                    <h2 class="section-title">Probabilité d’une expérience aléatoire à deux épreuves</h2>
                                    <p>Lorsqu’on recherche une probabilité qui lie deux expériences on utilise soit <strong class="section-title">un talbeau à double entrée</strong> soit <strong class="section-title">un arbre des possibles</strong>.</p>
                                    <h3 class="section-title">Tableau à double entrée</h3>
                                    <div class="notion-box">
                                    <p>Le tableau a double entrée est outil puissant pour calculer des probabilités lorsque deux données ne sont pas incompatibles entre elles.</p>
                                    </div>
                                    <br>
                                    <p>Dans un tableau a double entrée, on place une des données sur les lignes et l'autre sur les colonnes. On remplit partiellement le tableau avec les valeurs connues, puis on calcule petit à petit les valeurs inconnues en commençant toujours par la ligne ou la colonne ou on a le plus d'information (une seule case inconnue).</p>
                                    <p>Une fois le tableau rempli les probabilités apparaissent assez naturellement à condition de faire attention au dénominateur qui n'est pas toujours la case total/total.<p>
                                    <div class='table-container'>
                                    <table class='custom-table'>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Avec lunettes</th>
                                                <th>Sans lunettes</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>Yeux Noirs</strong></td>
                                                <td>?</td>
                                                <td>?</td>
                                                <td>7</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Yeux Bruns</strong></td>
                                                <td>4</td>
                                                <td>?</td>
                                                <td>14</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Yeux Bleus</strong></td>
                                                <td>3</td>
                                                <td>6</td>
                                                <td>9</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Total</strong></td>
                                                <td>9</td>
                                                <td>21</td>
                                                <td>?</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                    <p> Dans cet exemple il est assez facile de savoir qu'il y a 30 élèves en tout (9+21), qu'il y a 10 personnes sans lunettes qui ont les yeux bruns (14-4) et 2 personnes qui ont les yeux noirs et des lunettes (9-3-4). Enfin on peut en déduire que 5 personnes ont les yeux noirs mais n'ont pas de lunettes.</p>
                                    <p> Une fois le tableau complété on peut trouver des probabilités assez complexes.</p>
                                    <div class="method-box">
                                    <span class="method-badge">🚀 Méthode</span>
                                    <p> Exemple :</p>
                                    <p> Soit l'expérience aléatoire suivante : je tire au hasard une personne et je regarde ses caractéristiques occulaires.
                                    <p> Evénement A : L'élève a les yeux noirs.</p>
                                    <p> Evénement B : L'élève a des lunettes.</p>
                                    <p> Calculer P(A) si je tire l'élève au hasard parmi les élèves qui ont des lunettes. P(A)=$\\frac{2}{9}</p>
                                    <p> Calculer P(B) sachant que l'élève a des yeux bruns. P(B)=$\\frac{4}{14}</p>
                                    <p> Calculer la probabilité que l'élève aie les yeux noirs et des lunettes en même temps. P(A ET B)=$\\frac{2}{30}   ici  nous n'avons pas précisé de condition donc c'est forcément parmi toute la classe (30 élèves) </p>
                                    </div>
                                    
                                    <h3 class="section-title">Arbre des  possibles</h3>
                                    <p>L'arbre permet de représenter très visuellement toutes les issues possibles de deux expériences aléatoires successives (qui s'enchaînent / l'une après l'autre)</p>
                                    <p>Chaque <strong class="section-title">branche</strong> de l’arbre correspond à une <strong class="section-title">issue</strong> possible. (Attention à ne pas confondre avec les expériences ou épreuves).</p>
                                    

                                    <div class="notion-box">
                                        <strong style="color: var(--primary);">💡 Règle de calcul :</strong>
                                        <p>Avec un arbre, la probabilité de l’issue au bout d'un chemin est égale au <strong class="section-title">produit des probabilités</strong> rencontrées le long de ce chemin.</p>
                                    </div>

                                    
                                        <p><strong style="color: var(--primary);">📝 Exemple :</strong></p>
                                        <p>Je pioche une boule dans une urne (3 jaunes, 2 rouges), puis je lance un dé coloré (2 faces jaunes, 1 bleue, 3 noires).</p>
                                        
                                        <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
                                        <!-- Définition des styles -->
                                        <style>
                                            .line { stroke: #4A90E2; stroke-width: 2; fill: none; }
                                            .text-label { font-family: Arial, sans-serif; font-size: 16px; fill: #333; }
                                            .text-prob { font-family: 'Times New Roman', serif; font-style: italic; font-size: 18px; fill: #d0021b; }
                                            .node-label { font-family: Arial, sans-serif; font-weight: bold; font-size: 18px; fill: #000; }
                                        </style>

                                        <!-- ÉTAPE 1 : Branche principale -->
                                        <!-- Branche vers R (2/5) -->
                                        <path d="M 50 150 L 200 80" class="line" />
                                        <text x="100" y="100" class="text-prob">2/5</text>
                                        
                                        <!-- Branche vers J (3/5) -->
                                        <path d="M 50 150 L 200 220" class="line" />
                                        <text x="100" y="190" class="text-prob">3/5</text>

                                        <!-- Nœuds de l'étape 1 -->
                                        <text x="185" y="75" class="node-label">R</text>
                                        <text x="185" y="240" class="node-label">J</text>

                                        <!-- ÉTAPE 2 : Depuis R (Branches J, B, N) -->
                                        <path d="M 200 80 L 450 30" class="line" />
                                        <text x="300" y="50" class="text-prob">2/6</text> <!-- Probabilité illustrative -->
                                        
                                        <path d="M 200 80 L 450 80" class="line" />
                                        <text x="300" y="70" class="text-prob">1/6</text>
                                        
                                        <path d="M 200 80 L 450 130" class="line" />
                                        <text x="300" y="110" class="text-prob">3/6</text>

                                        <!-- Nœuds finaux de la branche R -->
                                        <text x="460" y="35" class="node-label">J</text>
                                        <text x="460" y="85" class="node-label">B</text>
                                        <text x="460" y="135" class="node-label">N</text>

                                        <!-- ÉTAPE 2 : Depuis J (Branches J, B, N avec la probabilité 2/6 affichée) -->
                                        <path d="M 200 220 L 450 180" class="line" />
                                        <text x="300" y="195" class="text-prob">2/6</text>
                                        
                                        <path d="M 200 220 L 450 220" class="line" />
                                        <text x="300" y="215" class="text-prob">1/6</text>
                                        
                                        <path d="M 200 220 L 450 260" class="line" />
                                        <text x="300" y="245" class="text-prob">3/6</text>

                                        <!-- Nœuds finaux de la branche J -->
                                        <text x="460" y="185" class="node-label">J</text>
                                        <text x="460" y="225" class="node-label">B</text>
                                        <text x="460" y="265" class="node-label">N</text>

                                        <!-- Point de départ -->
                                        <circle cx="50" cy="150" r="5" fill="#333" />
                                        </svg>

                                        <p>Probabilité d'obtenir {une boule jaune ET une face jaune} :</p>
                                        <p>On suit le chemin J puis J</p>
                                        <br>
                                        <p> donc $P(A) = \\frac{3}{5} \\times \\frac{2}{6} = \\frac{3 \\times 2}{5 \\times 6} = \\frac{6}{30} = \\frac{1}{5}$. </p>
                                    
                                    <button class="btn-check-understanding"
                                    data_quiz_target="quiz-area-probadouble"
                                    onclick="startQuizFromButton('quiz-area-probadouble', '36321')">
                                    Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-probadouble"></div>
                                </section>

                                <!-- SECTION : LOI DES GRANDS NOMBRES -->
                                <section class="course-section">
                                    <h2 class="section-title">Loi des grands nombres</h2>
                                    <p>Lorsqu’on répète une expérience aléatoire un grand nombre de fois, la fréquence d’apparition d’un événement se rapproche de la probabilité théorique.</p>
                                    
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">💡 Remarque :</strong> Pour trouver une probabilité qu'on ne peut pas calculer mathématiquement, on peut répéter l’expérience un grand nombre de fois et d’assimiler la fréquence d’apparition de chaque événement à sa probabilité.
                                    </div>

                                    <p><em class="section-title">Exemple :</em> Si je lance un dé truqué 1000 fois, je remarque que je tombe 350 fois sur le nombre 6. La probabilité d’obtenir un 6 se rapproche de $\\frac{350}{1000} = 0,35$ (soit $35\\%$).</p>
                                    
                                    <button class="btn-check-understanding"
                                    data_quiz_target="quiz-area-probagrdnbr"
                                    onclick="startQuizFromButton('quiz-area-probagrdnbr', '36401')">
                                    Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-probagrdnbr"></div>
                                </section>
                            </div>
                        `,
    }
};
