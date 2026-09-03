// ============================================================
// data/official/officialData_5eme_chapitre12.js
// Niveau : 5ème — Thème : ORGANISATION ET GESTION DE DONNÉES, FONCTIONS
// Chapitre 12 : Statistiques
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.
// NOTE : les codes des quiz ("btn-check-understanding") sont des
// identifiants prévisionnels (512xxx) à créer/associer dans la
// banque de quiz du site avant mise en ligne.
// Cette version s'appuie notamment sur les « Attendus de fin
// d'année de 5e » (rubrique Organisation et gestion de données,
// fonctions > Interpréter, représenter et traiter des données)
// fournis par l'enseignant. Ce chapitre ouvre le thème
// « Organisation et gestion de données et probabilités ».

var chapterData_5eme_12 = {
    themeName: "ORGANISATION ET GESTION DE DONNÉES ET PROBABILITÉS",
    chapter: {
        id: 12,
        title: "Statistiques",
        eleve: "non",
        content: `
                            <div class="course-container">
                                <!-- SECTION : OBJECTIFS -->
                                <section class="course-section">
                                    <p><strong>Objectifs :</strong></p>
                                    <ul>
                                        <li>Je sais recueillir et organiser des données</li>
                                        <li>Je sais calculer des effectifs et des fréquences (sous forme décimale, fractionnaire ou de pourcentage)</li>
                                        <li>Je sais lire et interpréter des informations présentées sous forme de tableaux, de diagrammes et de graphiques</li>
                                        <li>Je sais représenter des données sous la forme d'un tableau, d'un diagramme (en bâtons, circulaire) ou d'un graphique cartésien</li>
                                        <li>Je sais choisir une représentation adaptée à ce qu'il convient de mettre en avant</li>
                                        <li>Je sais calculer et interpréter la moyenne simple d'une série de données</li>
                                    </ul>
                                </section>

                                <!-- SECTION : RECUEILLIR ET ORGANISER -->
                                <section class="course-section">
                                    <h2 class="section-title">Recueillir et organiser des données</h2>
                                    <div class="notion-box">
                                        <p>Une <strong>série statistique</strong> est un ensemble de données recueillies sur une <strong>population</strong> (des élèves, des objets...) à propos d'un <strong>caractère</strong> étudié (une pointure, une couleur, une note...).</p>
                                        <ul>
                                            <li>L'<strong>effectif</strong> d'une valeur est le nombre de fois où elle apparaît dans la série.</li>
                                            <li>L'<strong>effectif total</strong> est le nombre total de données de la série (la somme de tous les effectifs).</li>
                                        </ul>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> On demande à des élèves leur pointure de pieds ; voici les résultats : $38 ; 36 ; 38 ; 35 ; 34 ; 37 ; 37 ; 40 ; 39 ; 41 ; 39 ; 41 ; 37 ; 36 ; 36 ; 42 ; 41 ; 37 ; 39 ; 38$. Organiser ces données dans un tableau d'effectifs.
                                        <ul>
                                            <li>On compte, pour chaque pointure, le nombre de fois où elle apparaît dans la liste.</li>
                                            <li>On obtient le tableau suivant :</li>
                                        </ul>
                                    </div>
                                    <table style="width:100%; border-collapse: collapse; text-align: center;">
                                        <thead>
                                            <tr>
                                                <th style="border-right: 1px solid black; padding: 6px;">Pointure</th>
                                                <th style="border-right: 1px solid black; padding: 6px;">34</th>
                                                <th style="border-right: 1px solid black; padding: 6px;">35</th>
                                                <th style="border-right: 1px solid black; padding: 6px;">36</th>
                                                <th style="border-right: 1px solid black; padding: 6px;">37</th>
                                                <th style="border-right: 1px solid black; padding: 6px;">38</th>
                                                <th style="border-right: 1px solid black; padding: 6px;">39</th>
                                                <th style="border-right: 1px solid black; padding: 6px;">40</th>
                                                <th style="border-right: 1px solid black; padding: 6px;">41</th>
                                                <th style="padding: 6px;">42</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 6px;">Effectif</td>
                                                <td style="border-right: 1px solid black; padding: 6px;">1</td>
                                                <td style="border-right: 1px solid black; padding: 6px;">1</td>
                                                <td style="border-right: 1px solid black; padding: 6px;">3</td>
                                                <td style="border-right: 1px solid black; padding: 6px;">4</td>
                                                <td style="border-right: 1px solid black; padding: 6px;">3</td>
                                                <td style="border-right: 1px solid black; padding: 6px;">3</td>
                                                <td style="border-right: 1px solid black; padding: 6px;">1</td>
                                                <td style="border-right: 1px solid black; padding: 6px;">3</td>
                                                <td style="padding: 6px;">1</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br>
                                    <p class="indent-text">L'effectif total est $1+1+3+4+3+3+1+3+1 = 20$ : on retrouve bien les $20$ élèves interrogés.</p>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-STATrecueillir"
                                        onclick="startQuizFromButton('quiz-area-STATrecueillir', '512101')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-STATrecueillir"></div>
                                </section>

                                <!-- SECTION : EFFECTIFS ET FREQUENCES -->
                                <section class="course-section">
                                    <h2 class="section-title">Calculer des effectifs et des fréquences</h2>
                                    <div class="notion-box">
                                        <p>La <strong>fréquence</strong> d'une valeur est la proportion que représente son effectif par rapport à l'effectif total :</p>
                                        <blockquote>$\\text{fréquence} = \\dfrac{\\text{effectif}}{\\text{effectif total}}$</blockquote>
                                        <p>Elle peut s'exprimer sous forme <strong>fractionnaire</strong>, <strong>décimale</strong>, ou sous forme de <strong>pourcentage</strong>.</p>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Dans un collège, on a interrogé $80$ élèves sur leur sport principal : $26$ pratiquent le football, $15$ le tennis, $23$ le basket-ball, et le reste l'athlétisme.
                                        <ul>
                                            <li>Effectif « athlétisme » $= 80 - 26 - 15 - 23 = 16$.</li>
                                            <li>Fréquence du football : $\\dfrac{26}{80} = 0,325 = 32,5\\%$.</li>
                                            <li>Fréquence du tennis : $\\dfrac{15}{80} = 0,1875 = 18,75\\%$.</li>
                                        </ul>
                                    </div>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> la somme de toutes les fréquences d'une série vaut toujours $1$ (soit $100\\%$).
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-STATfrequences"
                                        onclick="startQuizFromButton('quiz-area-STATfrequences', '512201')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-STATfrequences"></div>
                                </section>

                                <!-- SECTION : REPRESENTER : DIAGRAMME EN BATONS -->
                                <section class="course-section">
                                    <h2 class="section-title">Le diagramme en bâtons</h2>
                                    <div class="notion-box">
                                        <p>Un <strong>diagramme en bâtons</strong> représente chaque valeur du caractère par un bâton (une barre) dont la <strong>hauteur est proportionnelle</strong> à l'effectif (ou à la fréquence).</p>
                                    </div>
                                    <p>Voici le diagramme en bâtons correspondant au tableau des pointures étudié plus haut :</p>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 460 270" xmlns="http://www.w3.org/2000/svg" style="max-width:460px; display:block; margin:0 auto; font-family:sans-serif;">
<line x1="50" y1="30" x2="50" y2="230" stroke="#1A1A1A" stroke-width="1.5"/>
<line x1="50" y1="230" x2="440" y2="230" stroke="#1A1A1A" stroke-width="1.5"/>
<line x1="46" y1="230.0" x2="50" y2="230.0" stroke="#1A1A1A" stroke-width="1.2"/>
<text x="42" y="234.0" font-size="11" fill="#1A1A1A" text-anchor="end">0</text>
<line x1="46" y1="180.0" x2="50" y2="180.0" stroke="#1A1A1A" stroke-width="1.2"/>
<text x="42" y="184.0" font-size="11" fill="#1A1A1A" text-anchor="end">1</text>
<line x1="50" y1="180.0" x2="440" y2="180.0" stroke="#eee" stroke-width="1"/>
<line x1="46" y1="130.0" x2="50" y2="130.0" stroke="#1A1A1A" stroke-width="1.2"/>
<text x="42" y="134.0" font-size="11" fill="#1A1A1A" text-anchor="end">2</text>
<line x1="50" y1="130.0" x2="440" y2="130.0" stroke="#eee" stroke-width="1"/>
<line x1="46" y1="80.0" x2="50" y2="80.0" stroke="#1A1A1A" stroke-width="1.2"/>
<text x="42" y="84.0" font-size="11" fill="#1A1A1A" text-anchor="end">3</text>
<line x1="50" y1="80.0" x2="440" y2="80.0" stroke="#eee" stroke-width="1"/>
<line x1="46" y1="30.0" x2="50" y2="30.0" stroke="#1A1A1A" stroke-width="1.2"/>
<text x="42" y="34.0" font-size="11" fill="#1A1A1A" text-anchor="end">4</text>
<line x1="50" y1="30.0" x2="440" y2="30.0" stroke="#eee" stroke-width="1"/>
<rect x="50.0" y="180.0" width="34.4" height="50.0" fill="#2E5C8A"/>
<text x="67.2" y="246.0" font-size="12" fill="#1A1A1A" text-anchor="middle">34</text>
<text x="67.2" y="175.0" font-size="11" fill="#2E5C8A" text-anchor="middle" font-weight="bold">1</text>
<rect x="94.4" y="180.0" width="34.4" height="50.0" fill="#2E5C8A"/>
<text x="111.7" y="246.0" font-size="12" fill="#1A1A1A" text-anchor="middle">35</text>
<text x="111.7" y="175.0" font-size="11" fill="#2E5C8A" text-anchor="middle" font-weight="bold">1</text>
<rect x="138.9" y="80.0" width="34.4" height="150.0" fill="#2E5C8A"/>
<text x="156.1" y="246.0" font-size="12" fill="#1A1A1A" text-anchor="middle">36</text>
<text x="156.1" y="75.0" font-size="11" fill="#2E5C8A" text-anchor="middle" font-weight="bold">3</text>
<rect x="183.3" y="30.0" width="34.4" height="200.0" fill="#2E5C8A"/>
<text x="200.6" y="246.0" font-size="12" fill="#1A1A1A" text-anchor="middle">37</text>
<text x="200.6" y="25.0" font-size="11" fill="#2E5C8A" text-anchor="middle" font-weight="bold">4</text>
<rect x="227.8" y="80.0" width="34.4" height="150.0" fill="#2E5C8A"/>
<text x="245.0" y="246.0" font-size="12" fill="#1A1A1A" text-anchor="middle">38</text>
<text x="245.0" y="75.0" font-size="11" fill="#2E5C8A" text-anchor="middle" font-weight="bold">3</text>
<rect x="272.2" y="80.0" width="34.4" height="150.0" fill="#2E5C8A"/>
<text x="289.4" y="246.0" font-size="12" fill="#1A1A1A" text-anchor="middle">39</text>
<text x="289.4" y="75.0" font-size="11" fill="#2E5C8A" text-anchor="middle" font-weight="bold">3</text>
<rect x="316.7" y="180.0" width="34.4" height="50.0" fill="#2E5C8A"/>
<text x="333.9" y="246.0" font-size="12" fill="#1A1A1A" text-anchor="middle">40</text>
<text x="333.9" y="175.0" font-size="11" fill="#2E5C8A" text-anchor="middle" font-weight="bold">1</text>
<rect x="361.1" y="80.0" width="34.4" height="150.0" fill="#2E5C8A"/>
<text x="378.3" y="246.0" font-size="12" fill="#1A1A1A" text-anchor="middle">41</text>
<text x="378.3" y="75.0" font-size="11" fill="#2E5C8A" text-anchor="middle" font-weight="bold">3</text>
<rect x="405.6" y="180.0" width="34.4" height="50.0" fill="#2E5C8A"/>
<text x="422.8" y="246.0" font-size="12" fill="#1A1A1A" text-anchor="middle">42</text>
<text x="422.8" y="175.0" font-size="11" fill="#2E5C8A" text-anchor="middle" font-weight="bold">1</text>
<text x="230.0" y="264" font-size="12" fill="#1A1A1A" text-anchor="middle">Pointure</text>
<text x="50" y="16" font-size="12" fill="#1A1A1A" text-anchor="start">Effectif</text>
</svg>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-STATbatons"
                                        onclick="startQuizFromButton('quiz-area-STATbatons', '512301')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-STATbatons"></div>
                                </section>

                                <!-- SECTION : REPRESENTER : DIAGRAMME CIRCULAIRE -->
                                <section class="course-section">
                                    <h2 class="section-title">Le diagramme circulaire</h2>
                                    <div class="notion-box">
                                        <p>Un <strong>diagramme circulaire</strong> représente chaque valeur par une <strong>part d'un disque</strong>, dont l'angle au centre est proportionnel à l'effectif (ou à la fréquence). On calcule cet angle avec la formule :</p>
                                        <blockquote>$\\text{angle} = \\text{fréquence} \\times 360°$</blockquote>
                                    </div>
                                    <p>En reprenant l'exemple des $80$ élèves et de leur sport principal, on obtient le diagramme circulaire suivant :</p>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 460 340" xmlns="http://www.w3.org/2000/svg" style="max-width:440px; display:block; margin:0 auto; font-family:sans-serif;">
<path d="M 190,170 L 190.0,40.0 A 130,130 0 0 1 305.8,229.0 Z" fill="#2E5C8A" stroke="white" stroke-width="2"/>
<text x="262.0" y="125.8" font-size="13" fill="white" text-anchor="middle" font-weight="bold">32.5%</text>
<path d="M 190,170 L 305.8,229.0 A 130,130 0 0 1 179.8,299.6 Z" fill="#2F7D3C" stroke="white" stroke-width="2"/>
<text x="231.3" y="243.7" font-size="13" fill="white" text-anchor="middle" font-weight="bold">18.8%</text>
<path d="M 190,170 L 179.8,299.6 A 130,130 0 0 1 66.4,129.8 Z" fill="#B5651D" stroke="white" stroke-width="2"/>
<text x="119.7" y="216.9" font-size="13" fill="white" text-anchor="middle" font-weight="bold">28.7%</text>
<path d="M 190,170 L 66.4,129.8 A 130,130 0 0 1 190.0,40.0 Z" fill="#8E44AD" stroke="white" stroke-width="2"/>
<text x="140.3" y="101.6" font-size="13" fill="white" text-anchor="middle" font-weight="bold">20.0%</text>
<rect x="330" y="30" width="14" height="14" fill="#2E5C8A"/>
<text x="350" y="42" font-size="13" fill="#1A1A1A">Football (26)</text>
<rect x="330" y="56" width="14" height="14" fill="#2F7D3C"/>
<text x="350" y="68" font-size="13" fill="#1A1A1A">Tennis (15)</text>
<rect x="330" y="82" width="14" height="14" fill="#B5651D"/>
<text x="350" y="94" font-size="13" fill="#1A1A1A">Basket-ball (23)</text>
<rect x="330" y="108" width="14" height="14" fill="#8E44AD"/>
<text x="350" y="120" font-size="13" fill="#1A1A1A">Athlétisme (16)</text>
</svg>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Calculer l'angle de la part « Football » ($26$ élèves sur $80$)
                                        <ul>
                                            <li>Fréquence $= \\dfrac{26}{80} = 0,325$.</li>
                                            <li>Angle $= 0,325 \\times 360° = 117°$.</li>
                                        </ul>
                                    </div>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> il existe aussi le <strong>diagramme semi-circulaire</strong>, qui fonctionne exactement sur le même principe, mais avec un demi-disque : on calcule alors l'angle avec $\\text{fréquence} \\times 180°$.
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-STATcirculaire"
                                        onclick="startQuizFromButton('quiz-area-STATcirculaire', '512401')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-STATcirculaire"></div>
                                </section>

                                <!-- SECTION : GRAPHIQUE CARTESIEN -->
                                <section class="course-section">
                                    <h2 class="section-title">Le graphique cartésien</h2>
                                    <div class="notion-box">
                                        <p>Un <strong>graphique cartésien</strong> représente des données dans un repère : on place un point pour chaque donnée, souvent relié au suivant par un segment. Il est particulièrement adapté pour montrer l'<strong>évolution</strong> d'une grandeur (au fil du temps, par exemple).</p>
                                    </div>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" style="max-width:460px; display:block; margin:0 auto; font-family:sans-serif;">
<line x1="50" y1="20" x2="50" y2="240" stroke="#1A1A1A" stroke-width="1.5"/>
<line x1="50" y1="240" x2="440" y2="240" stroke="#1A1A1A" stroke-width="1.5"/>
<line x1="46" y1="240.0" x2="50" y2="240.0" stroke="#1A1A1A" stroke-width="1.2"/>
<text x="42" y="244.0" font-size="11" fill="#1A1A1A" text-anchor="end">10</text>
<line x1="50" y1="240.0" x2="440" y2="240.0" stroke="#eee" stroke-width="1"/>
<line x1="46" y1="203.3" x2="50" y2="203.3" stroke="#1A1A1A" stroke-width="1.2"/>
<text x="42" y="207.3" font-size="11" fill="#1A1A1A" text-anchor="end">12</text>
<line x1="50" y1="203.3" x2="440" y2="203.3" stroke="#eee" stroke-width="1"/>
<line x1="46" y1="166.7" x2="50" y2="166.7" stroke="#1A1A1A" stroke-width="1.2"/>
<text x="42" y="170.7" font-size="11" fill="#1A1A1A" text-anchor="end">14</text>
<line x1="50" y1="166.7" x2="440" y2="166.7" stroke="#eee" stroke-width="1"/>
<line x1="46" y1="130.0" x2="50" y2="130.0" stroke="#1A1A1A" stroke-width="1.2"/>
<text x="42" y="134.0" font-size="11" fill="#1A1A1A" text-anchor="end">16</text>
<line x1="50" y1="130.0" x2="440" y2="130.0" stroke="#eee" stroke-width="1"/>
<line x1="46" y1="93.3" x2="50" y2="93.3" stroke="#1A1A1A" stroke-width="1.2"/>
<text x="42" y="97.3" font-size="11" fill="#1A1A1A" text-anchor="end">18</text>
<line x1="50" y1="93.3" x2="440" y2="93.3" stroke="#eee" stroke-width="1"/>
<line x1="46" y1="56.7" x2="50" y2="56.7" stroke="#1A1A1A" stroke-width="1.2"/>
<text x="42" y="60.7" font-size="11" fill="#1A1A1A" text-anchor="end">20</text>
<line x1="50" y1="56.7" x2="440" y2="56.7" stroke="#eee" stroke-width="1"/>
<line x1="46" y1="20.0" x2="50" y2="20.0" stroke="#1A1A1A" stroke-width="1.2"/>
<text x="42" y="24.0" font-size="11" fill="#1A1A1A" text-anchor="end">22</text>
<line x1="50" y1="20.0" x2="440" y2="20.0" stroke="#eee" stroke-width="1"/>
<path d="M 50.0,166.7 L 115.0,130.0 L 180.0,148.3 L 245.0,93.3 L 310.0,56.7 L 375.0,75.0 L 440.0,111.7" fill="none" stroke="#2E5C8A" stroke-width="2.5"/>
<circle cx="50.0" cy="166.7" r="4" fill="#B5651D"/>
<text x="50.0" y="156.7" font-size="11" fill="#B5651D" text-anchor="middle" font-weight="bold">14</text>
<text x="50.0" y="258.0" font-size="11" fill="#1A1A1A" text-anchor="middle">Lun</text>
<circle cx="115.0" cy="130.0" r="4" fill="#B5651D"/>
<text x="115.0" y="120.0" font-size="11" fill="#B5651D" text-anchor="middle" font-weight="bold">16</text>
<text x="115.0" y="258.0" font-size="11" fill="#1A1A1A" text-anchor="middle">Mar</text>
<circle cx="180.0" cy="148.3" r="4" fill="#B5651D"/>
<text x="180.0" y="138.3" font-size="11" fill="#B5651D" text-anchor="middle" font-weight="bold">15</text>
<text x="180.0" y="258.0" font-size="11" fill="#1A1A1A" text-anchor="middle">Mer</text>
<circle cx="245.0" cy="93.3" r="4" fill="#B5651D"/>
<text x="245.0" y="83.3" font-size="11" fill="#B5651D" text-anchor="middle" font-weight="bold">18</text>
<text x="245.0" y="258.0" font-size="11" fill="#1A1A1A" text-anchor="middle">Jeu</text>
<circle cx="310.0" cy="56.7" r="4" fill="#B5651D"/>
<text x="310.0" y="46.7" font-size="11" fill="#B5651D" text-anchor="middle" font-weight="bold">20</text>
<text x="310.0" y="258.0" font-size="11" fill="#1A1A1A" text-anchor="middle">Ven</text>
<circle cx="375.0" cy="75.0" r="4" fill="#B5651D"/>
<text x="375.0" y="65.0" font-size="11" fill="#B5651D" text-anchor="middle" font-weight="bold">19</text>
<text x="375.0" y="258.0" font-size="11" fill="#1A1A1A" text-anchor="middle">Sam</text>
<circle cx="440.0" cy="111.7" r="4" fill="#B5651D"/>
<text x="440.0" y="101.7" font-size="11" fill="#B5651D" text-anchor="middle" font-weight="bold">17</text>
<text x="440.0" y="258.0" font-size="11" fill="#1A1A1A" text-anchor="middle">Dim</text>
<text x="50" y="14" font-size="12" fill="#1A1A1A">Température (°C)</text>
<text x="230.0" y="276" font-size="12" fill="#1A1A1A" text-anchor="middle">Jour</text>
</svg>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-STATcartesien"
                                        onclick="startQuizFromButton('quiz-area-STATcartesien', '512501')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-STATcartesien"></div>
                                </section>

                                <!-- SECTION : CHOISIR UNE REPRESENTATION ADAPTEE -->
                                <section class="course-section">
                                    <h2 class="section-title">Choisir une représentation adaptée</h2>
                                    <table style="width:100%; border-collapse: collapse; text-align: center;">
                                        <thead>
                                            <tr>
                                                <th style="border-right: 1px solid black; padding: 10px;">Représentation</th>
                                                <th style="padding: 10px;">Ce qu'elle met en avant</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">Diagramme en bâtons</td>
                                                <td style="padding: 10px;">comparer facilement les effectifs de chaque valeur</td>
                                            </tr>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">Diagramme circulaire</td>
                                                <td style="padding: 10px;">visualiser la part de chaque valeur dans un ensemble (le tout = $100\\%$)</td>
                                            </tr>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">Graphique cartésien</td>
                                                <td style="padding: 10px;">montrer l'évolution d'une grandeur dans le temps</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-STATchoisir"
                                        onclick="startQuizFromButton('quiz-area-STATchoisir', '512601')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-STATchoisir"></div>
                                </section>

                                <!-- SECTION : MOYENNE -->
                                <section class="course-section">
                                    <h2 class="section-title">Calculer et interpréter la moyenne d'une série</h2>
                                    <div class="notion-box">
                                        <blockquote>$\\text{moyenne} = \\dfrac{\\text{somme de toutes les valeurs}}{\\text{effectif total}}$</blockquote>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Calculer la moyenne des notes suivantes : $12 ; 15 ; 9 ; 14 ; 10$
                                        <ul>
                                            <li>Somme des valeurs : $12+15+9+14+10 = 60$.</li>
                                            <li>Effectif total : $5$ notes.</li>
                                            <li>Moyenne $= \\dfrac{60}{5} = 12$.</li>
                                        </ul>
                                    </div>
                                    <div class="notion-box">
                                        <p>La moyenne permet de résumer une série de données par un seul nombre, qui donne une idée de sa <strong>valeur centrale</strong>. Elle ne correspond pas forcément à une valeur réellement présente dans la série.</p>
                                    </div>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> quand une valeur apparaît plusieurs fois, on peut aussi calculer la moyenne directement à partir d'un tableau d'effectifs, en multipliant chaque valeur par son effectif avant de faire la somme.
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-STATmoyenne"
                                        onclick="startQuizFromButton('quiz-area-STATmoyenne', '512701')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-STATmoyenne"></div>
                                </section>

                                <!-- SECTION : POUR ALLER PLUS LOIN -->
                                <section class="course-section">
                                    <h2 class="section-title">Pour aller plus loin (culture mathématique)</h2>
                                    <div class="notion-box">
                                        <p><strong>Florence Nightingale</strong> (1820-1910), infirmière et statisticienne britannique, a révolutionné l'usage des statistiques en santé publique. Pendant la guerre de Crimée, elle a inventé un diagramme original en forme de <strong>rosace</strong> (aujourd'hui appelé « diagramme de Nightingale » ou <em>coxcomb chart</em>) pour montrer, de façon spectaculaire et facile à comprendre même pour des non-spécialistes, que la grande majorité des soldats mouraient de <strong>maladies évitables</strong> plutôt que de leurs blessures au combat. Ses graphiques ont convaincu le gouvernement britannique de réformer les conditions d'hygiène dans les hôpitaux militaires.</p>
                                    </div>
                                </section>
                            </div>
                        `
    }
};
