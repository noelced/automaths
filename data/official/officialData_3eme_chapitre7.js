// ============================================================
// data/official/officialData_3eme_chapitre7.js
// Niveau : 3ème — Thème : ORGANISATION ET GESTION DE DONNÉES
// Chapitre 7 : Proportionnalité
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.

var chapterData_3eme_7 = {
    themeName: "ORGANISATION ET GESTION DE DONNÉES",
    chapter: {
        id: 7,
        title: "Proportionnalité",
        eleve: "non",
        content: `
        <div class="course-container">

            <!-- SECTION : OBJECTIFS -->
            <section class="course-section">
                <p><strong class="section-title">Objectifs :</strong></p>
                <ul>
                    <li>Je sais reconnaitre un problème proportionnel.</li>
                    <li>Je sais calculer une valeur manquante dans un problème proportionnel.</li>
                    <li>Je sais modéliser une situation de proportionnalité à l’aide d’une fonction linéaire.</li>
                    <li>Je sais calculer des pourcentages d’évolution avec le coefficient multiplicateur.</li>
                </ul>
            </section>

            <!-- SECTION : DEFINITIONS -->
            <section class="course-section">

                <h2 class="section-title">Définitions</h2>

                <div class="notion-box">
                    <p>
                        Deux grandeurs sont proportionnelles lorsqu’il existe un lien entre elles
                        et que ce lien est une multiplication.
                    </p>

                    <p>
                        Les listes :
                        <strong>{1 kg ; 3 kg ; 4 kg ; 10 kg}</strong>
                        et
                        <strong>{2 € ; 6 € ; 8 € ; 20 €}</strong>
                        sont proportionnelles car il existe un nombre
                        <strong>2</strong>
                        permettant de passer de la première liste à la seconde.
                    </p>

                    <p>
                        Ce nombre est appelé
                        <strong>coefficient de proportionnalité</strong>.
                    </p>

                    <p>
                        On peut dire que le prix est proportionnel à la masse.
                    </p>

                    <p style="text-align:center;">
                        <strong>Prix = 2 × Masse</strong>
                    </p>
                </div>

            </section>

            <!-- SECTION : RECONNAITRE -->
            <section class="course-section">

                <h2 class="section-title">
                    Reconnaitre une situation de proportionnalité
                </h2>

                <h3 class="section-title">
                    Dans un tableau
                </h3>

                <p>
                    Ces tableaux sont-ils des tableaux de proportionnalité ?
                    Justifier.
                </p>

                <div style="display:flex;align-items:center;justify-content:center;gap:20px;margin:25px 0;flex-wrap:nowrap;">

                    <!-- FLECHE ROUGE -->
                    <svg width="90" height="90" viewBox="0 0 90 90">

                        <defs>
                            <marker id="arrowRedTableau"
                                    markerWidth="10"
                                    markerHeight="10"
                                    refX="6"
                                    refY="3"
                                    orient="auto">

                                <path d="M0,0 L0,6 L6,3 z"
                                    fill="#e74c3c"/>
                            </marker>
                        </defs>

                            <path d="
                                M70 65
                                Q30 65 30 45
                                Q30 25 70 25"
                                fill="none"
                                stroke="#e74c3c"
                                stroke-width="3"
                                marker-end="url(#arrowRedTableau)"
                            />

                            <text x="12"
                                y="50"
                                fill="#e74c3c"
                                font-size="22"
                                font-weight="bold">
                                ?
                            </text>

                    </svg>

                    <!-- TABLEAU -->

                    <div class="table-container" style="margin:0;">
                        <table class="custom-table">
                            <tbody>
                                <tr>
                                    <th>Stylos</th>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                </tr>

                                <tr>
                                    <th>Prix (€)</th>
                                    <td>5</td>
                                    <td>7,5</td>
                                    <td>10</td>
                                    <td>12,5</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- FLECHE BLEUE -->

                    <svg width="90" height="90" viewBox="0 0 90 90">

                        <defs>
                            <marker id="arrowBlueTableau"
                                    markerWidth="10"
                                    markerHeight="10"
                                    refX="6"
                                    refY="3"
                                    orient="auto">

                                <path d="M0,0 L0,6 L6,3 z"
                                    fill="#3498db"/>
                            </marker>
                        </defs>

                        <path d="
                            M20 25
                            Q60 25 60 45
                            Q60 65 20 65"
                            fill="none"
                            stroke="#3498db"
                            stroke-width="3"
                            marker-end="url(#arrowBlueTableau)"
                        />

                        <text x="75"
                            y="50"
                            fill="#3498db"
                            font-size="22"
                            font-weight="bold">
                            ?
                        </text>

                    </svg>

                </div>


                <p> Pour savoir si c'est un tableau de proportionnalité, je vais calculer ce nombre caché.</p>
                 <p>   5 ÷ 2 = 2,5
                </p>

                <p>
                    7,5 ÷ 3 = 2,5
                </p>

                <p>
                    10 ÷ 4 = 2,5
                </p>

                <p>
                    12,5 ÷ 5 = 2,5
                </p>

                <div class="notion-box">
                    <p>
                        Tous les quotients sont égaux. On a donc bien le même coefficient qui s'applique sur TOUT le tableau
                    </p>

                    <p>
                        Ce tableau est donc un tableau de proportionnalité.
                    </p>

                    <p>
                        Le coefficient de proportionnalité est :
                        <strong>k = 2,5</strong>.
                    </p>
                </div>

                <div class="table-container">
                    <table class="custom-table">
                        <tbody>
                            <tr>
                                <th>Temps (jours)</th>
                                <td>0,8</td>
                                <td>1,5</td>
                                <td>1,7</td>
                            </tr>
                            <tr>
                                <th>Taille (mm)</th>
                                <td>2,4</td>
                                <td>4,5</td>
                                <td>4,76</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p>
                    2,4 ÷ 0,8 = 3
                </p>

                <p>
                    4,5 ÷ 1,5 = 3
                </p>

                <p>
                    4,76 ÷ 1,7 = 2,8
                </p>

                <div class="notion-box">
                    <p>
                        Les quotients ne sont pas tous égaux.
                    </p>

                    <p>
                        Ce tableau n'est donc pas un tableau de proportionnalité.
                    </p>

                    <p>
                        Dans cet exemple, la taille n'est pas proportionnelle au temps.
                    </p>
                </div>

                <p>
                    ⚠️ Attention au sens de la flèche lorsque l'on calcule le quotient.
                </p>

                <button class="btn-check-understanding"
                data_quiz_target="quiz-area-prop-tableau"
                onclick="startQuizFromButton('quiz-area-prop-tableau', '37101')">
                Ai-je bien compris ?
                </button>

                <div id="quiz-area-prop-tableau"></div>

                <h3 class="section-title">
                    Sur un graphique
                </h3>

                <div class="notion-box">
                    <p>
                        Dans une situation de proportionnalité,
                        la représentation graphique est une droite
                        qui passe par l'origine du repère.
                    </p>
                </div>
                <p>Quel(s) graphique(s) représentent une situation de proportionnalité ?</p>
                <div style="display:flex;flex-wrap:wrap;gap:25px;justify-content:center;margin:20px 0;">

                    <!-- Graphique A -->
                    <div>
                        <p style="text-align:center;"><strong>a)</strong></p>

                        <svg width="220" height="220" viewBox="0 0 220 220">
                            <line x1="30" y1="190" x2="200" y2="190" stroke="black"/>
                            <line x1="30" y1="190" x2="30" y2="20" stroke="black"/>

                            <line x1="30" y1="140" x2="190" y2="50"
                            stroke="#3498db"
                            stroke-width="3"/>
                        </svg>
                    </div>

                    <!-- Graphique B -->
                    <div>
                        <p style="text-align:center;"><strong>b)</strong></p>

                        <svg width="220" height="220" viewBox="0 0 220 220">

                            <line x1="30" y1="190" x2="200" y2="190" stroke="black"/>
                            <line x1="30" y1="190" x2="30" y2="20" stroke="black"/>

                            <path d="
                            M30 190
                            Q70 120 110 90
                            Q150 65 190 50"
                            fill="none"
                            stroke="#3498db"
                            stroke-width="3"/>
                        </svg>
                    </div>


                    <!-- Graphique C -->
                    <div>
                        <p style="text-align:center;"><strong>c)</strong></p>

                        <svg width="220" height="220" viewBox="0 0 220 220">

                            <!-- Axe des abscisses -->
                            <line x1="20" y1="110"
                                x2="200" y2="110"
                                stroke="black"
                                stroke-width="2"/>

                            <!-- Axe des ordonnées -->
                            <line x1="110" y1="20"
                                x2="110" y2="200"
                                stroke="black"
                                stroke-width="2"/>

                            <!-- flèche axe x -->
                            <polygon points="200,110 192,106 192,114"
                                    fill="black"/>

                            <!-- flèche axe y -->
                            <polygon points="110,20 106,28 114,28"
                                    fill="black"/>

                            <!-- origine -->
                            <circle cx="110"
                                    cy="110"
                                    r="3"
                                    fill="black"/>

                            <!-- droite de proportionnalité décroissante -->
                            <line x1="40"
                                y1="40"
                                x2="180"
                                y2="180"
                                stroke="#3498db"
                                stroke-width="3"/>

                        </svg>
                    </div>
                </div>
                <p>
                a) N'est pas une situation de proportionnalité
                car la droite ne passe pas par l'origine du repère.
                </p>

                <p>
                b) N'est pas une situation de proportionnalité
                car la courbe n'est pas une droite.
                </p>

                <p>
                c) Est une situation de proportionnalité
                car la représentation graphique est une droite
                qui passe par l'origine du repère.

                Le fait que la droite soit décroissante ne change rien :
                une situation de proportionnalité peut être représentée
                par une droite montante ou descendante.
                </p>
                            

                <button class="btn-check-understanding"
                data_quiz_target="quiz-area-prop-graph"
                onclick="startQuizFromButton('quiz-area-prop-graph', '37102')">
                Ai-je bien compris ?
                </button>

                <div id="quiz-area-prop-graph"></div>

            </section>

            <!-- SECTION : CALCULS -->
            <section class="course-section">

                <h2 class="section-title">
                    Rappels sur les méthodes de calculs
                    de quatrième proportionnelle
                </h2>

                <p>
                    Dans une situation de proportionnalité,
                    il est possible de résoudre un problème
                    de plusieurs façons différentes.
                </p>

                <p>
                    Toutes ces méthodes donnent exactement
                    le même résultat.
                </p>

                <div class="method-box">
                    <span class="method-badge">
                        🚀 Exemple
                    </span>

                    <p>
                        J'ai acheté 4 stylos pour 5 €.
                    </p>

                    <p>
                        2 stylos coûtent 2,50 €.
                    </p>

                    <p>
                        Combien vais-je payer pour 7 stylos ?
                    </p>
                </div>
                <p>
                    Si j'achète deux fois plus de stylos,
                    je paierai deux fois plus cher. Donc ce problème est bien proportionnel. Je peux utiliser n'importe laquelle des techinques ci-dessous pour le résoudre.
                </p>

                <h3 class="section-title">
                    Passage par l'unité
                </h3>

                

 <div class="notion-box">

<p>
On connaît le prix de 4 stylos :
<strong>5 €</strong>.
</p>

<p>
Pour trouver le prix d'un seul stylo,
il faut partager ces 5 € entre les 4 stylos.
</p>

<p style="text-align:center;">
5 ÷ 4 = 1,25 €
</p>

<p>
On divise donc par 4 car on passe de
<strong>4 stylos</strong>
à
<strong>1 stylo</strong>.
</p>

<p>
Un stylo coûte donc
<strong>1,25 €</strong>.
</p>

</div>
                <p>
                    Alors :
                </p>

                <p style="text-align:center;">
                    7 × 1,25 = 8,75 €
                </p>

                <div class="notion-box">
                    Prix de 7 stylos = 8,75 €
                </div>

                <button class="btn-check-understanding"
                data_quiz_target="quiz-area-passageunite"
                onclick="startQuizFromButton('quiz-area-passageunite', '37211')">
                Ai-je bien compris ?
                </button>

                <div id="quiz-area-passageunite"></div>

                <h3 class="section-title">
                    Coefficient de proportionnalité
                </h3>

<div style="
display:flex;
align-items:center;
justify-content:center;
gap:20px;
margin:25px 0;
flex-wrap:nowrap;
">

    <!-- FLECHE ROUGE -->
    <svg width="110" height="90" viewBox="0 0 110 90">

        <defs>

            <marker id="arrowRed"
                    markerWidth="10"
                    markerHeight="10"
                    refX="6"
                    refY="3"
                    orient="auto">

                <path d="M0,0 L0,6 L6,3 z"
                      fill="#e74c3c"/>

            </marker>

        </defs>

        <path d="
            M80 65
            Q35 65 35 45
            Q35 25 80 25"
            fill="none"
            stroke="#e74c3c"
            stroke-width="3"
            marker-end="url(#arrowRed)"
        />

        <text x="40"
              y="50"
              fill="#e74c3c"
              font-size="18"
              font-weight="bold">
            ÷1,25
        </text>

    </svg>

    <!-- TABLEAU -->
    <div class="table-container" style="margin:0;">
        <table class="custom-table">
            <thead>
                <tr>
                    <th>STYLOS</th>
                    <th>2</th>
                    <th>4</th>
                    <th>7</th>
                    <th>12</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th>PRIX (€)</th>
                    <td>2,50</td>
                    <td>5</td>
                    <td>8,75</td>
                    <td>15</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- FLECHE BLEUE -->
    <svg width="110" height="90" viewBox="0 0 110 90">

        <defs>

            <marker id="arrowBlue"
                    markerWidth="10"
                    markerHeight="10"
                    refX="6"
                    refY="3"
                    orient="auto">

                <path d="M0,0 L0,6 L6,3 z"
                      fill="#3498db"/>

            </marker>

        </defs>

        <path d="
            M30 25
            Q75 25 75 45
            Q75 65 30 65"
            fill="none"
            stroke="#3498db"
            stroke-width="3"
            marker-end="url(#arrowBlue)"
        />

        <text x="20"
              y="50"
              fill="#3498db"
              font-size="18"
              font-weight="bold">
            ×1,25
        </text>

    </svg>

</div>
                <p>
                    2,50 ÷ 2 = 1,25
                </p>

                <p>
                    5 ÷ 4 = 1,25
                </p>

                <div class="notion-box">

<p>
Le coefficient de proportionnalité est :
<strong>k = 1,25</strong>
</p>

<p>
Pour passer de la ligne « Stylos »
à la ligne « Prix »,
on multiplie toujours par 1,25.
</p>

<p>
Pour effectuer le trajet inverse,
on divise toujours par 1,25.
</p>

</div>

                <p>
                    Pour obtenir le prix,
                    il suffit de multiplier le nombre
                    de stylos par 1,25.
                </p>
				                <button class="btn-check-understanding"
                data_quiz_target="quiz-area-coeffprop"
                onclick="startQuizFromButton('quiz-area-coeffprop', '37221')">
                Ai-je bien compris ?
                </button>

                <div id="quiz-area-coeffprop"></div>

                <h3 class="section-title">
                    Linéarité
                </h3>

                <div class="notion-box">
                    <p>
                        Si je peux effectuer une opération
                        sur une ligne du tableau,
                        alors je peux effectuer exactement
                        la même opération sur l'autre ligne.
                    </p>
                </div>

                <div class="table-container">
<table class="custom-table">
    <thead>
        <tr>
            <th>Stylos</th>
            <th>1</th>
            <th>2</th>
            <th>4</th>
            <th>7</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <th>Prix (€)</th>
            <td>1,25</td>
            <td>2,50</td>
            <td>5</td>
            <td>?</td>
        </tr>
    </tbody>
</table>
</div>

<svg width="600" height="90">

    <text x="75" y="30" font-size="18">1</text>
    <text x="145" y="30" font-size="18">+</text>
    <text x="190" y="30" font-size="18">2</text>
    <text x="260" y="30" font-size="18">+</text>
    <text x="305" y="30" font-size="18">4</text>

    <path d="M70 40 Q190 85 310 40"
          fill="none"
          stroke="#3498db"
          stroke-width="3"/>

    <polygon points="310,40 300,35 300,45"
             fill="#3498db"/>

    <text x="175"
          y="82"
          fill="#3498db"
          font-weight="bold">
        = 7 stylos
    </text>

</svg>

                
<p>
Comme 7 stylos peuvent être obtenus en additionnant
1 stylo, 2 stylos et 4 stylos,
on peut additionner les prix correspondants.
</p>

<p>
Cette propriété s'appelle la <strong>linéarité</strong>.
</p>

<div class="notion-box">
Dans un tableau de proportionnalité,
une addition, une soustraction ou une multiplication
effectuée sur une ligne peut être reproduite
sur l'autre ligne.
</div>

<p>Donc : 1,25 + 2,50 + 5 = 8,75 Le prix de 7 stylos est de : <strong>8,75 €</strong></p>

               

                <button class="btn-check-understanding"
                data_quiz_target="quiz-area-linearite"
                onclick="startQuizFromButton('quiz-area-linearite', '37231')">
                Ai-je bien compris ?
                </button>

                <div id="quiz-area-linearite"></div>

                <h3 class="section-title">
    Lecture graphique
</h3>

<p>
    On peut également résoudre le problème
    en utilisant la représentation graphique.
</p>

<p>
    Il suffit de repérer 7 stylos sur l’axe horizontal,
    de rejoindre la droite puis de lire le prix correspondant
    sur l’axe vertical.
</p>

<svg viewBox="0 0 700 420"
     xmlns="http://www.w3.org/2000/svg"
     style="max-width:100%;">

    <!-- AXES -->

    <line x1="80" y1="340"
          x2="640" y2="340"
          stroke="black"
          stroke-width="2"/>

    <line x1="80" y1="340"
          x2="80" y2="40"
          stroke="black"
          stroke-width="2"/>

    <!-- flèches -->

    <polygon points="640,340 628,334 628,346"
             fill="black"/>

    <polygon points="80,40 74,52 86,52"
             fill="black"/>

    <!-- graduations X -->

    <g font-size="14">

        <line x1="80" y1="335" x2="80" y2="345" stroke="black"/>
        <text x="76" y="365">0</text>

        <line x1="170" y1="335" x2="170" y2="345" stroke="black"/>
        <text x="166" y="365">2</text>

        <line x1="260" y1="335" x2="260" y2="345" stroke="black"/>
        <text x="256" y="365">4</text>

        <line x1="350" y1="335" x2="350" y2="345" stroke="black"/>
        <text x="346" y="365">6</text>

        <line x1="440" y1="335" x2="440" y2="345" stroke="black"/>
        <text x="436" y="365">8</text>

        <line x1="530" y1="335" x2="530" y2="345" stroke="black"/>
        <text x="522" y="365">10</text>

        <line x1="620" y1="335" x2="620" y2="345" stroke="black"/>
        <text x="612" y="365">12</text>

    </g>

    <!-- graduations Y -->

    <g font-size="14">

        <line x1="75" y1="340" x2="85" y2="340" stroke="black"/>
        <text x="58" y="345">0</text>

        <line x1="75" y1="290" x2="85" y2="290" stroke="black"/>
        <text x="38" y="295">2,5</text>

        <line x1="75" y1="240" x2="85" y2="240" stroke="black"/>
        <text x="48" y="245">5</text>

        <line x1="75" y1="190" x2="85" y2="190" stroke="black"/>
        <text x="38" y="195">7,5</text>

        <line x1="75" y1="140" x2="85" y2="140" stroke="black"/>
        <text x="42" y="145">10</text>

        <line x1="75" y1="90" x2="85" y2="90" stroke="black"/>
        <text x="34" y="95">12,5</text>

        <line x1="75" y1="40" x2="85" y2="40" stroke="black"/>
        <text x="42" y="45">15</text>

    </g>

    <!-- droite de proportionnalité -->

    <line x1="80"
          y1="340"
          x2="620"
          y2="40"
          stroke="#4A90E2"
          stroke-width="3"/>

    <!-- points connus -->

    <circle cx="170" cy="290" r="5" fill="#4A90E2"/>
    <circle cx="260" cy="240" r="5" fill="#4A90E2"/>
    <circle cx="620" cy="40" r="5" fill="#4A90E2"/>

    <!-- lecture de 7 stylos -->

    <line x1="395"
          y1="340"
          x2="395"
          y2="165"
          stroke="red"
          stroke-width="2"
          stroke-dasharray="6 6"/>

    <line x1="80"
          y1="165"
          x2="395"
          y2="165"
          stroke="red"
          stroke-width="2"
          stroke-dasharray="6 6"/>

    <circle cx="395"
            cy="165"
            r="6"
            fill="red"/>

    <text x="410"
          y="170"
          fill="red"
          font-weight="bold">
        (7 ; 8,75)
    </text>

    <!-- titres axes -->

    <text x="300"
          y="405"
          font-size="16"
          font-weight="bold">
        Nombre de stylos
    </text>

    <text x="10"
          y="30"
          font-size="16"
          font-weight="bold">
        Prix (€)
    </text>

</svg>
<p>
        Pour 7 stylos, on lit environ
        <strong>8,75 €</strong>.
    </p>

<div class="notion-box">

    <p>
        Pour lire une valeur sur un graphique de proportionnalité :
    </p>

    <ol>
        <li>On repère la valeur connue sur l'axe horizontal.</li>
        <li>On monte jusqu'à la droite.</li>
        <li>On rejoint ensuite l'axe vertical.</li>
        <li>On lit la valeur correspondante.</li>
    </ol>
</div>
    

                

                <button class="btn-check-understanding"
                data_quiz_target="quiz-area-lecturegraph"
                onclick="startQuizFromButton('quiz-area-lecturegraph', '37241')">
                Ai-je bien compris ?
                </button>

                <div id="quiz-area-lecturegraph"></div>

<h3 class="section-title">
    Produit en croix
</h3>

<div class="notion-box">
    <p>
        Pour déterminer une quatrième proportionnelle,
        on peut utiliser la méthode du produit en croix.
    </p>

    <p>
        On multiplie d'abord les deux nombres connus
        situés sur une même diagonale.
    </p>

    <p>
        Puis on divise le résultat obtenu
        par le nombre situé dans la même colonne
        que l'inconnue.
    </p>
</div>

<div style="position:relative; width:700px; margin:auto;">

    <div class="table-container">
        <table class="custom-table">
            <tbody>
                <tr>
                    <th>STYLOS</th>
                    <td>2</td>
                    <td>7</td>
                </tr>
                <tr>
                    <th>PRIX (€)</th>
                    <td>2,5</td>
                    <td>?</td>
                </tr>
            </tbody>
        </table>
    </div>

    <svg
    viewBox="0 0 700 120"
    style="
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    pointer-events:none;
    overflow:visible;
    ">

        <!-- diagonale bleue -->
<line
    x1="500"
    y1="88"
    x2="650"
    y2="38"
    stroke="#3498db"
    stroke-width="4"
/>

<polygon
    points="
    650,38
    638,34
    642,46"
    fill="#3498db"
/>

<text
    x="525"
    y="10"
    fill="#3498db"
    font-size="18"
    font-weight="bold">
    multiplication
</text>

<!-- diagonale rouge -->
<line
    x1="500"
    y1="38"
    x2="650"
    y2="88"
    stroke="#e74c3c"
    stroke-width="4"
/>

<polygon
    points="
    650,88
    638,81
    637,95"
    fill="#e74c3c"
/>

<text
    x="560"
    y="110"
    fill="#e74c3c"
    font-size="18"
    font-weight="bold">
    division
</text>
    </svg>

</div>

<p style="text-align:center;">
    ? = 2,5 × 7 ÷ 2
</p>

<p style="text-align:center;">
    ? = 17,5 ÷ 2
</p>

<p style="text-align:center;">
    ? = 8,75 €
</p>

<div class="notion-box">

    <p>
        La diagonale bleue relie les deux nombres connus
        que l'on doit multiplier.
    </p>

    <p style="text-align:center;">
        2,5 × 7 = 17,5
    </p>

    <p>
        La diagonale rouge indique ensuite le nombre
        par lequel il faut diviser.
    </p>

    <p style="text-align:center;">
        17,5 ÷ 2 = 8,75
    </p>

    <p>
        Le prix de 7 stylos est donc :
        <strong>8,75 €</strong>.
    </p>

</div>

<button class="btn-check-understanding"
data_quiz_target="quiz-area-produitcroix"
onclick="startQuizFromButton('quiz-area-produitcroix', '37251')">
Ai-je bien compris ?
</button>

<div id="quiz-area-produitcroix"></div>

            <!-- SECTION : FONCTION LINEAIRE -->
            <section class="course-section">

                <h2 class="section-title">
                    Modéliser la proportionnalité
                    par une fonction linéaire
                </h2>
                <p>
                    La représentation graphique d'une situation
                    de proportionnalité est une droite passant
                    par l'origine du repère.
                </p>

                <p>
                    Une situation de proportionnalité
                    peut donc être modélisée par
                    une <strong>fonction linéaire</strong>.
                </p>
                <br>
				    <p>
    La situation étudiée est proportionnelle :
</p>

<div class="table-container">
    <table class="custom-table">
        <thead>
            <tr>
                <th>Stylos</th>
                <th>2</th>
                <th>4</th>
                <th>7</th>
                <th>12</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <th>Prix (€)</th>
                <td>2,50</td>
                <td>5</td>
                <td>8,75</td>
                <td>15</td>
            </tr>
        </tbody>
    </table>
</div>

<p>
    On a vu précédemment que le coefficient de proportionnalité
    est :
</p>

<p style="text-align:center;">
    <strong>k = 1,25</strong>
</p>

<div class="notion-box">

    <p>
        Cela signifie que pour obtenir le prix,
        il suffit toujours de multiplier
        le nombre de stylos par 1,25.
    </p>

    <p>
        Si un élève achète :
    </p>

    <ul>
        <li>3 stylos → 3 × 1,25 €</li>
        <li>8 stylos → 8 × 1,25 €</li>
        <li>20 stylos → 20 × 1,25 €</li>
    </ul>

</div>

<p>
    On peut donc traduire cette règle par une fonction.
</p>

<div class="notion-box">

    <p style="text-align:center;font-size:1.2em;">
        <strong>P(s)=1,25×s</strong>
    </p>

    <p>
        où :
    </p>

    <ul>
        <li><strong>s</strong> représente le nombre de stylos ;</li>
        <li><strong>P(s)</strong> représente le prix à payer.</li>
    </ul>

</div>

<p>
    Cette fonction permet de calculer directement le prix
    pour n'importe quel nombre de stylos.
</p>

<div class="method-box">

    <span class="method-badge">
        Exemple
    </span>

    <p>
        Pour 12 stylos :
    </p>

    <p style="text-align:center;">
        P(12)=1,25×12
    </p>

    <p style="text-align:center;">
        P(12)=15
    </p>

</div>

<div class="notion-box">

    <strong>
        Toute situation de proportionnalité peut être modélisée
        par une fonction linéaire.
    </strong>

</div>
 

                <p>
                    Le prix dépend donc du nombre de stylos.
                </p>

                <button class="btn-check-understanding"
                data_quiz_target="quiz-area-fonctionlineaire"
                onclick="startQuizFromButton('quiz-area-fonctionlineaire', '37301')">
                Ai-je bien compris ?
                </button>

                <div id="quiz-area-fonctionlineaire"></div>

            </section>

            <!-- SECTION : POURCENTAGES -->
            <section class="course-section">

                <h2 class="section-title">
                    Pourcentages d'évolution
                    et fonctions linéaires
                </h2>

                <p>
                    Un pourcentage est une proportion.
                </p>

                <p>
                    Il peut donc être modélisé
                    par une fonction linéaire.
                </p>

                <div class="method-box">

                    <span class="method-badge">
                        🚀 Exemple général
                    </span>

                    <p>
                        Un produit coûtant x euros
                        subit une augmentation de 10%.
                    </p>

    <p>
        Un produit coûte <strong>x €</strong>.
    </p>

    <p>
        Il augmente de <strong>10%</strong>.
    </p>

    <p>
        Beaucoup d'élèves de 6ème pensent qu'il suffit
        d'ajouter 10 au prix.
    </p>

    <p>
        C'est faux car 10% signifie :
        <strong>10 pour 100 = $\\frac{10}{100}$ </strong>.
    </p>

    <p>
        On commence donc par calculer
        10% du prix :
    </p>

    <p style="text-align:center;">
        $\\frac{10}{100} \\times x$
    </p>

    <p>
        Puis on ajoute cette augmentation
        au prix de départ :
    </p>

    <p style="text-align:center;">
        $x + \\frac{10}{100} \\times x$
    </p>

    <p>
        On factorise par $x$ :
    </p>

    <p style="text-align:center;">
        $x(1 + \\frac{10}{100})$
    </p>

    <p style="text-align:center;">
        $x \\times 1,10$
    </p>

    <p>
        Augmenter de 10% revient donc
        à multiplier par :
    </p>

    <p style="text-align:center;">
        <strong>1,10</strong>
    </p>

</div>
<div class="notion-box">

    <p style="text-align:center;">
        <strong>
            Toutes les situations de pourcentage
            peuvent être résumées par le schéma suivant :
        </strong>
    </p>

<svg
viewBox="0 0 1000 220"
style="
width:100%;
max-width:1000px;
height:auto;
display:block;
margin:20px auto;
">

    <!-- valeur initiale -->

    <text
        x="35"
        y="105"
        font-size="28"
        font-weight="bold"
        fill="#2c3e50">
        Valeur
    </text>

    <text
        x="35"
        y="145"
        font-size="28"
        font-weight="bold"
        fill="#2c3e50">
        initiale
    </text>

    <!-- flèche -->

    <line
        x1="165"
        y1="120"
        x2="280"
        y2="120"
        stroke="#3498db"
        stroke-width="5"/>

    <polygon
        points="280,120 260,110 260,130"
        fill="#3498db"/>


    <rect
        x="300"
        y="25"
        width="470"
        height="170"
        rx="12"
        ry="12"
        fill="white"
        stroke="#3498db"
        stroke-width="4"/>

    <!-- ligne 1 -->

    <text
        x="340"
        y="75"
        font-size="26"
        font-weight="bold">
        × (
        <tspan fill="var(--primary)">t</tspan>
        /100 )
    </text>

    <text
        x="570"
        y="75"
        font-size="24"
        fill="#2e2ef4">
        prendre t %
    </text>

    <!-- ligne 2 -->

    <text
        x="340"
        y="120"
        font-size="26"
        font-weight="bold">
        × (1 +
        <tspan fill="var(--primary)">t</tspan>
        /100)
    </text>

    <text
        x="570"
        y="120"
        font-size="24"
        fill="#2e2ef4">
        augmenter de t %
    </text>

    <!-- ligne 3 -->

    <text
        x="340"
        y="165"
        font-size="26"
        font-weight="bold">
        × (1 -
        <tspan fill="var(--primary)">t</tspan>
        /100)
    </text>

    <text
        x="570"
        y="165"
        font-size="24"
        fill="#2e2ef4">
        diminuer de t %
    </text>


    <!-- flèche sortante -->
    <line
    x1="780"
    y1="120"
    x2="840"
    y2="120"
    stroke="#3498db"
    stroke-width="5"/>

<polygon
    points="860,120 840,110 840,130"
    fill="#3498db"/>

    <!-- valeur finale -->

    <text
        x="860"
        y="105"
        font-size="28"
        font-weight="bold"
        fill="#2c3e50">
        Valeur
    </text>

    <text
        x="860"
        y="145"
        font-size="28"
        font-weight="bold"
        fill="#2c3e50">
        finale
    </text>

</svg>

    <p style="text-align:center;">
        <strong>
            Valeur initiale × coefficient multiplicateur
            = valeur finale
        </strong>
    </p>

</div>

<h3 class="section-title">
    Exemples d'application
</h3>

<div class="method-box">

    <span class="method-badge">
        🚀 Exemple 1 : prendre un pourcentage
    </span>

    <p>
        25% des 280 élèves vont participer
        à une sortie cinéma.
    </p>

    <svg width="850" height="120">

        <text x="40"
              y="75"
              font-size="32">
            280
        </text>

        <line x1="90"
              y1="65"
              x2="230"
              y2="65"
              stroke="var(--secondary)"
              stroke-width="4"/>

        <polygon points="230,65 215,57 215,73"
                 fill="var(--secondary)"/>

        <text x="120"
              y="45"
              font-size="24"
              fill="var(--primary)">
            × 25 %
        </text>

        <text x="280"
              y="78"
              font-size="42"
              fill="var(--primary)">
            =
        </text>

        <text x="360"
              y="75"
              font-size="32">
            70
        </text>

    </svg>

    <p style="text-align:center;">
        $280 \\times \\frac{25}{100}=70$
    </p>

    <p>
        70 élèves participeront à la sortie.
    </p>

</div>

<div class="method-box">

    <span class="method-badge">
        🚀 Exemple 2 : augmenter de 17%
    </span>

    <p>
        Un ordinateur coûte 1354 €.
    </p>

    <p>
        Son prix augmente de 17%.
    </p>

    <svg width="850" height="120">

        <text x="40"
              y="75"
              font-size="32">
            1354
        </text>

        <line x1="110"
              y1="65"
              x2="290"
              y2="65"
              stroke="var(--secondary)"
              stroke-width="4"/>

        <polygon points="290,65 275,57 275,73"
                 fill="var(--secondary)"/>

        <text x="120"
              y="45"
              font-size="24"
              fill="var(--primary)">
            × 1,17
        </text>

        <text x="340"
              y="78"
              font-size="42"
              fill="var(--primary)">
            =
        </text>

        <text x="420"
              y="75"
              font-size="32">
            1584,18
        </text>

    </svg>

    <p style="text-align:center;">
        $1354\\times\\left(1+\\frac{17}{100}\\right)=1584,18$
    </p>

    <p>
        Augmenter de 17% revient à multiplier par 1,17.
    </p>

</div>

<div class="method-box">

    <span class="method-badge">
        🚀 Exemple 3 : diminuer de 35%
    </span>

    <p>
        Un blouson coûte 160 €.
    </p>

    <p>
        Il est soldé de 35%.
    </p>

    <svg width="850" height="120">

        <text x="40"
              y="75"
              font-size="32">
            160
        </text>

        <line x1="90"
              y1="65"
              x2="250"
              y2="65"
              stroke="var(--secondary)"
              stroke-width="4"/>

        <polygon points="250,65 235,57 235,73"
                 fill="var(--secondary)"/>

        <text x="115"
              y="45"
              font-size="24"
              fill="var(--primary)">
            × 0,65
        </text>

        <text x="300"
              y="78"
              font-size="42"
              fill="var(--primary)">
            =
        </text>

        <text x="380"
              y="75"
              font-size="32">
            104
        </text>

    </svg>

    <p style="text-align:center;">
        $160\\times\\left(1-\\frac{35}{100}\\right)=104$
    </p>

    <p>
        Diminuer de 35% revient à multiplier par 0,65.
    </p>

</div>

<h3 class="section-title">
    Attention au sens du problème
</h3>

<div class="notion-box">

    <p>
        Dans certains exercices,
        la valeur donnée est déjà le résultat
        après l'augmentation ou la diminution.
    </p>

    <p>
        Il faut alors retrouver la valeur de départ.
    </p>

</div>

<p>
    La facture d'électricité de Bertrand
    a augmenté de 20%.
</p>

<p>
    Cette année il a payé 99 €.
</p>

<p>
    Combien payait-il l'an dernier ?
</p>

<div class="method-box">

    <span class="method-badge">
        🚀 Méthode
    </span>

    <svg width="900" height="220">

        <!-- ALLER -->

        <text x="40"
              y="80"
              font-size="32">
            x
        </text>

        <line x1="75"
              y1="70"
              x2="240"
              y2="70"
              stroke="var(--secondary)"
              stroke-width="4"/>

        <polygon points="240,70 225,62 225,78"
                 fill="var(--secondary)"/>

        <text x="110"
              y="45"
              font-size="24"
              fill="var(--primary)">
            × 1,20
        </text>

        <text x="300"
              y="85"
              font-size="42"
              fill="var(--primary)">
            =
        </text>

        <text x="380"
              y="80"
              font-size="32">
            99
        </text>

        <!-- RETOUR -->

        <text x="380"
              y="170"
              font-size="32">
            99
        </text>

        <line x1="350"
              y1="160"
              x2="180"
              y2="160"
              stroke="var(--secondary)"
              stroke-width="4"/>

        <polygon points="180,160 195,152 195,168"
                 fill="var(--secondary)"/>

        <text x="230"
              y="135"
              font-size="24"
              fill="var(--primary)">
            ÷ 1,20
        </text>

        <text x="95"
              y="175"
              font-size="32">
            x
        </text>

    </svg>

    <div class="notion-box">

        <p>
            Pour passer du prix de l'an dernier
            au prix de cette année,
            on multiplie par 1,20.
        </p>

        <p>
            Pour retrouver le prix de l'an dernier,
            il faut effectuer l'opération inverse :
            diviser par 1,20.
        </p>

    </div>

    <p>
        On cherche donc la valeur de départ <strong>x</strong>.
    </p>

    <p style="text-align:center;">
        $x\\times1,20=99$
    </p>

    <p>
        Pour annuler la multiplication par 1,20,
        on effectue l'opération inverse :
        une division par 1,20.
    </p>

    <p style="text-align:center;">
        $x=\\frac{99}{1,20}$
    </p>

    <p style="text-align:center;">
        $x=82,50$
    </p>

    <p>
        L'année dernière,
        Bertrand payait donc 82,50 €.
    </p>

</div>



    <strong>
        ⚠️ Erreur fréquente
    </strong>

    <p>
        Beaucoup d'élèves pensent qu'il suffit
        d'enlever 20% à 99 €.
    </p>

    <p style="text-align:center;">
        $99-20\\%$
    </p>

    <p>
        Cette méthode est fausse.
    </p>

    <p>
        Les 20% ont été calculés sur le prix
        de l'année dernière et non sur 99 €.
    </p>

    <p>
        La valeur 99 € est déjà le résultat
        après l'augmentation.
    </p>

    <p>
        Lorsque la valeur donnée est la valeur finale,
        il faut remonter le calcul en utilisant
        l'opération inverse.
    </p>

    <p>
        Ici :
    </p>

    <p style="text-align:center;">
        multiplier par 1,20 ↔ diviser par 1,20
    </p>



<button class="btn-check-understanding"
data_quiz_target="quiz-area-pourcentage"
onclick="startQuizFromButton('quiz-area-pourcentage', '37401')">
Ai-je bien compris ?
</button>
            </section>

        </div>
        `
    }
};
