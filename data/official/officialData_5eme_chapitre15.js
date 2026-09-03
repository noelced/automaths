// ============================================================
// data/official/officialData_5eme_chapitre15.js
// Niveau : 5ème — Thème : PROPORTIONNALITÉ, FONCTIONS
// Chapitre 15 : Fonctions
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.
// NOTE : les codes des quiz ("btn-check-understanding") sont des
// identifiants prévisionnels (515xxx) à créer/associer dans la
// banque de quiz du site avant mise en ligne.
// Cette version s'appuie notamment sur les « Attendus de fin
// d'année de 5e » (rubrique Organisation et gestion de données,
// fonctions > Comprendre et utiliser la notion de fonction)
// fournis par l'enseignant. Ce chapitre clôt le thème
// « Proportionnalité, fonctions ».

var chapterData_5eme_15 = {
    themeName: "PROPORTIONNALITÉ, FONCTIONS",
    chapter: {
        id: 15,
        title: "Fonctions",
        eleve: "non",
        content: `
                            <div class="course-container">
                                <!-- SECTION : OBJECTIFS -->
                                <section class="course-section">
                                    <p><strong>Objectifs :</strong></p>
                                    <ul>
                                        <li>Je sais utiliser l'expression « en fonction de » dans des contextes concrets ou mathématiques</li>
                                        <li>Je sais produire, lire et interpréter un tableau de valeurs</li>
                                        <li>Je sais placer dans un repère des points correspondant à un tableau de valeurs</li>
                                        <li>Je sais lire et interpréter un graphique cartésien donné par une courbe ou un nuage de points</li>
                                        <li>Je sais traduire la relation de dépendance entre deux grandeurs par un tableau de valeurs à partir d'une formule</li>
                                        <li>Je sais produire une formule simple représentant la dépendance de deux grandeurs</li>
                                        <li>Je sais caractériser graphiquement la proportionnalité</li>
                                    </ul>
                                </section>

                                <!-- SECTION : "EN FONCTION DE" -->
                                <section class="course-section">
                                    <h2 class="section-title">L'expression « en fonction de »</h2>
                                    <div class="notion-box">
                                        <p>Dans de nombreuses situations, une grandeur <strong>dépend</strong> d'une autre : on dit qu'elle est <strong>fonction de</strong> l'autre, ou qu'elle s'exprime <strong>en fonction de</strong> l'autre.</p>
                                    </div>
                                    <p><strong>Exemples :</strong></p>
                                    <ul>
                                        <li>le prix à payer dépend de la quantité achetée : le prix est fonction de la quantité ;</li>
                                        <li>l'aire d'un carré dépend de la longueur de son côté : l'aire est fonction du côté ;</li>
                                        <li>la distance de freinage d'une voiture dépend de sa vitesse : la distance de freinage est fonction de la vitesse.</li>
                                    </ul>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> la grandeur qui « dépend » (par exemple l'aire) varie en fonction de la grandeur de départ (par exemple le côté). Si l'on change le côté, l'aire change automatiquement en conséquence.
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-FONCTvocabulaire"
                                        onclick="startQuizFromButton('quiz-area-FONCTvocabulaire', '515101')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-FONCTvocabulaire"></div>
                                </section>

                                <!-- SECTION : TABLEAU DE VALEURS -->
                                <section class="course-section">
                                    <h2 class="section-title">Produire et lire un tableau de valeurs</h2>
                                    <div class="notion-box">
                                        <p>Un <strong>tableau de valeurs</strong> permet de résumer, pour plusieurs valeurs de la grandeur de départ, la valeur correspondante de la grandeur qui en dépend.</p>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Produire un tableau de valeurs pour l'aire d'un carré $A(c) = c^2$, en fonction de son côté $c$ (en cm)
                                        <ul>
                                            <li>On choisit plusieurs valeurs pour $c$ : $1, 2, 3, 4, 5$.</li>
                                            <li>On calcule l'aire correspondante pour chacune, à l'aide de la formule.</li>
                                        </ul>
                                    </div>
                                    <table style="width:100%; border-collapse: collapse; text-align: center;">
                                        <thead>
                                            <tr>
                                                <th style="border-right: 1px solid black; padding: 8px;">Côté $c$ (cm)</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">1</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">2</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">3</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">4</th>
                                                <th style="padding: 8px;">5</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 8px;">Aire $A(c)$ (cm²)</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">1</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">4</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">9</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">16</td>
                                                <td style="padding: 8px;">25</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br>
                                    <p class="indent-text">Ce tableau permet de <strong>lire directement</strong> l'aire correspondant à un côté donné : par exemple, un carré de côté $4$ cm a une aire de $16$ cm².</p>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-FONCTtableau"
                                        onclick="startQuizFromButton('quiz-area-FONCTtableau', '515201')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-FONCTtableau"></div>
                                </section>

                                <!-- SECTION : PLACER DES POINTS -->
                                <section class="course-section">
                                    <h2 class="section-title">Placer dans un repère les points d'un tableau de valeurs</h2>
                                    <div class="notion-box">
                                        <p>Chaque colonne d'un tableau de valeurs fournit les coordonnées d'un point : on place en <strong>abscisse</strong> la valeur de la grandeur de départ, et en <strong>ordonnée</strong> la valeur de la grandeur qui en dépend.</p>
                                    </div>
                                    <p class="indent-text">Par exemple, pour le tableau de l'aire du carré ci-dessus, on placerait les points $(1;1)$, $(2;4)$, $(3;9)$, $(4;16)$ et $(5;25)$ dans un repère (voir le graphique de la partie suivante).</p>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-FONCTplacerpoints"
                                        onclick="startQuizFromButton('quiz-area-FONCTplacerpoints', '515301')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-FONCTplacerpoints"></div>
                                </section>

                                <!-- SECTION : LIRE UN GRAPHIQUE -->
                                <section class="course-section">
                                    <h2 class="section-title">Lire et interpréter un graphique cartésien</h2>
                                    <div class="notion-box">
                                        <p>Un graphique cartésien peut représenter une fonction par une <strong>courbe continue</strong> (quand toutes les valeurs intermédiaires ont un sens) ou par un <strong>nuage de points</strong> (quand seules certaines valeurs sont pertinentes).</p>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Lire, sur le graphique suivant, la distance de freinage pour une vitesse de $80$ km/h
                                        <ul>
                                            <li>On repère $80$ sur l'axe des abscisses (vitesse).</li>
                                            <li>On remonte verticalement jusqu'à la courbe, puis on lit horizontalement la valeur sur l'axe des ordonnées.</li>
                                            <li>On lit une distance de freinage d'environ $64$ m.</li>
                                        </ul>
                                    </div>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" style="max-width:460px; display:block; margin:0 auto; font-family:sans-serif;">
<line x1="60" y1="20" x2="60" y2="270" stroke="#1A1A1A" stroke-width="1.5"/>
<line x1="60" y1="270" x2="460" y2="270" stroke="#1A1A1A" stroke-width="1.5"/>
<line x1="60.0" y1="270" x2="60.0" y2="275" stroke="#1A1A1A" stroke-width="1.2"/>
<text x="60.0" y="288" font-size="11" fill="#1A1A1A" text-anchor="middle">0</text>
<line x1="121.5" y1="270" x2="121.5" y2="275" stroke="#1A1A1A" stroke-width="1.2"/>
<text x="121.5" y="288" font-size="11" fill="#1A1A1A" text-anchor="middle">20</text>
<line x1="183.1" y1="270" x2="183.1" y2="275" stroke="#1A1A1A" stroke-width="1.2"/>
<text x="183.1" y="288" font-size="11" fill="#1A1A1A" text-anchor="middle">40</text>
<line x1="244.6" y1="270" x2="244.6" y2="275" stroke="#1A1A1A" stroke-width="1.2"/>
<text x="244.6" y="288" font-size="11" fill="#1A1A1A" text-anchor="middle">60</text>
<line x1="306.2" y1="270" x2="306.2" y2="275" stroke="#1A1A1A" stroke-width="1.2"/>
<text x="306.2" y="288" font-size="11" fill="#1A1A1A" text-anchor="middle">80</text>
<line x1="367.7" y1="270" x2="367.7" y2="275" stroke="#1A1A1A" stroke-width="1.2"/>
<text x="367.7" y="288" font-size="11" fill="#1A1A1A" text-anchor="middle">100</text>
<line x1="429.2" y1="270" x2="429.2" y2="275" stroke="#1A1A1A" stroke-width="1.2"/>
<text x="429.2" y="288" font-size="11" fill="#1A1A1A" text-anchor="middle">120</text>
<line x1="55" y1="270.0" x2="60" y2="270.0" stroke="#1A1A1A" stroke-width="1.2"/>
<text x="51" y="274.0" font-size="11" fill="#1A1A1A" text-anchor="end">0</text>
<line x1="55" y1="240.6" x2="60" y2="240.6" stroke="#1A1A1A" stroke-width="1.2"/>
<text x="51" y="244.6" font-size="11" fill="#1A1A1A" text-anchor="end">20</text>
<line x1="55" y1="211.2" x2="60" y2="211.2" stroke="#1A1A1A" stroke-width="1.2"/>
<text x="51" y="215.2" font-size="11" fill="#1A1A1A" text-anchor="end">40</text>
<line x1="55" y1="181.8" x2="60" y2="181.8" stroke="#1A1A1A" stroke-width="1.2"/>
<text x="51" y="185.8" font-size="11" fill="#1A1A1A" text-anchor="end">60</text>
<line x1="55" y1="152.4" x2="60" y2="152.4" stroke="#1A1A1A" stroke-width="1.2"/>
<text x="51" y="156.4" font-size="11" fill="#1A1A1A" text-anchor="end">80</text>
<line x1="55" y1="122.9" x2="60" y2="122.9" stroke="#1A1A1A" stroke-width="1.2"/>
<text x="51" y="126.9" font-size="11" fill="#1A1A1A" text-anchor="end">100</text>
<line x1="55" y1="93.5" x2="60" y2="93.5" stroke="#1A1A1A" stroke-width="1.2"/>
<text x="51" y="97.5" font-size="11" fill="#1A1A1A" text-anchor="end">120</text>
<line x1="55" y1="64.1" x2="60" y2="64.1" stroke="#1A1A1A" stroke-width="1.2"/>
<text x="51" y="68.1" font-size="11" fill="#1A1A1A" text-anchor="end">140</text>
<line x1="55" y1="34.7" x2="60" y2="34.7" stroke="#1A1A1A" stroke-width="1.2"/>
<text x="51" y="38.7" font-size="11" fill="#1A1A1A" text-anchor="end">160</text>
<polyline points="60.0,270.0 66.2,269.9 72.3,269.8 78.5,269.5 84.6,269.1 90.8,268.5 96.9,267.9 103.1,267.1 109.2,266.2 115.4,265.2 121.5,264.1 127.7,262.9 133.8,261.5 140.0,260.1 146.2,258.5 152.3,256.8 158.5,254.9 164.6,253.0 170.8,250.9 176.9,248.8 183.1,246.5 189.2,244.1 195.4,241.5 201.5,238.9 207.7,236.1 213.8,233.2 220.0,230.2 226.2,227.1 232.3,223.9 238.5,220.5 244.6,217.1 250.8,213.5 256.9,209.8 263.1,205.9 269.2,202.0 275.4,197.9 281.5,193.8 287.7,189.5 293.8,185.1 300.0,180.5 306.2,175.9 312.3,171.1 318.5,166.2 324.6,161.2 330.8,156.1 336.9,150.9 343.1,145.5 349.2,140.1 355.4,134.5 361.5,128.8 367.7,122.9 373.8,117.0 380.0,110.9 386.2,104.8 392.3,98.5 398.5,92.1 404.6,85.5 410.8,78.9 416.9,72.1 423.1,65.2 429.2,58.2 435.4,51.1 441.5,43.9 447.7,36.5 453.8,29.1 460.0,21.5" fill="none" stroke="#2E5C8A" stroke-width="2.5"/>
<line x1="306.2" y1="270" x2="306.2" y2="175.9" stroke="#B5651D" stroke-width="1.8" stroke-dasharray="5,4"/>
<line x1="60" y1="175.9" x2="306.2" y2="175.9" stroke="#B5651D" stroke-width="1.8" stroke-dasharray="5,4"/>
<circle cx="306.2" cy="175.9" r="5" fill="#B5651D"/>
<text x="306.2" y="304.0" font-size="11" fill="#B5651D" text-anchor="middle" font-weight="bold">80</text>
<text x="51" y="167.9" font-size="11" fill="#B5651D" text-anchor="end" font-weight="bold">64</text>
<text x="240.0" y="312" font-size="12" fill="#1A1A1A" text-anchor="middle">Vitesse (km/h)</text>
<text x="60" y="14" font-size="12" fill="#1A1A1A" text-anchor="start">Distance de freinage (m)</text>
</svg>
                                    </div>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> ce graphique n'est <strong>pas une droite</strong> : la distance de freinage <strong>n'est pas proportionnelle</strong> à la vitesse (rouler deux fois plus vite ne multiplie pas la distance de freinage par $2$, mais par $4$ !).
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-FONCTlireGraph"
                                        onclick="startQuizFromButton('quiz-area-FONCTlireGraph', '515401')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-FONCTlireGraph"></div>
                                </section>

                                <!-- SECTION : PRODUIRE UNE FORMULE -->
                                <section class="course-section">
                                    <h2 class="section-title">Produire une formule représentant une dépendance</h2>
                                    <div class="notion-box">
                                        <p>Lorsque l'on connaît la règle de calcul qui relie deux grandeurs, on peut l'écrire sous la forme d'une <strong>formule</strong> utilisant une lettre pour la grandeur de départ.</p>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Exprimer le volume d'un cylindre de rayon $3$ cm en fonction de sa hauteur $h$
                                        <ul>
                                            <li>On rappelle la formule générale du volume d'un cylindre : $V = \\pi \\times r^2 \\times h$.</li>
                                            <li>On remplace $r$ par $3$ (le rayon est fixé) : $V = \\pi \\times 3^2 \\times h$.</li>
                                            <li>On simplifie : $V(h) = 9\\pi \\times h$.</li>
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-FONCTformule"
                                        onclick="startQuizFromButton('quiz-area-FONCTformule', '515501')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-FONCTformule"></div>
                                </section>

                                <!-- SECTION : CARACTERISER GRAPHIQUEMENT LA PROPORTIONNALITE -->
                                <section class="course-section">
                                    <h2 class="section-title">Caractériser graphiquement la proportionnalité</h2>
                                    <div class="notion-box">
                                        <p>Le graphique d'une fonction permet de voir immédiatement si la grandeur qui en dépend est <strong>proportionnelle</strong> à la grandeur de départ :</p>
                                        <ul>
                                            <li>si les points sont <strong>alignés avec l'origine</strong> du repère (une droite qui passe par $(0;0)$), la fonction représente une situation de <strong>proportionnalité</strong> ;</li>
                                            <li>si les points forment une <strong>courbe</strong> (ou une droite qui ne passe pas par l'origine), la fonction <strong>n'est pas</strong> une situation de proportionnalité.</li>
                                        </ul>
                                    </div>
                                    <p>Comparons l'aire d'un carré en fonction de son côté (non proportionnelle) et le volume d'un cylindre de rayon $3$ cm en fonction de sa hauteur (proportionnelle) :</p>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 630 305" xmlns="http://www.w3.org/2000/svg" style="max-width:600px; display:block; margin:0 auto; font-family:sans-serif;">
<line x1="70" y1="40" x2="70" y2="220" stroke="#1A1A1A" stroke-width="1.5"/><line x1="70" y1="220" x2="280" y2="220" stroke="#1A1A1A" stroke-width="1.5"/><polyline points="70.0,220.0 74.0,219.9 78.0,219.7 82.0,219.4 86.0,218.9 90.0,218.3 94.0,217.6 98.0,216.7 102.0,215.6 106.0,214.5 110.0,213.2 114.0,211.8 118.0,210.2 122.0,208.5 126.0,206.7 130.0,204.7 134.0,202.6 138.0,200.3 142.0,198.0 146.0,195.5 150.0,192.8 154.0,190.0 158.0,187.1 162.0,184.0 166.0,180.8 170.0,177.5 174.0,174.0 178.0,170.4 182.0,166.7 186.0,162.8 190.0,158.8 194.0,154.7 198.0,150.4 202.0,145.9 206.0,141.4 210.0,136.7 214.0,131.9 218.0,126.9 222.0,121.8 226.0,116.6 230.0,111.2 234.0,105.7 238.0,100.0 242.0,94.3 246.0,88.4 250.0,82.3 254.0,76.1 258.0,69.8 262.0,63.3 266.0,56.7 270.0,50.0" fill="none" stroke="#B5651D" stroke-width="2.2"/><circle cx="110.0" cy="213.2" r="4.5" fill="#B5651D"/><circle cx="150.0" cy="192.8" r="4.5" fill="#B5651D"/><circle cx="190.0" cy="158.8" r="4.5" fill="#B5651D"/><circle cx="230.0" cy="111.2" r="4.5" fill="#B5651D"/><circle cx="270.0" cy="50.0" r="4.5" fill="#B5651D"/><text x="160.0" y="270" font-size="13" fill="#1A1A1A" text-anchor="middle" font-weight="bold">Aire A(c) = c² (non proportionnelle)</text><text x="276" y="236" font-size="10.5" fill="#1A1A1A" text-anchor="end">côté c (cm)</text><text x="74" y="48" font-size="10.5" fill="#1A1A1A" text-anchor="start">aire (cm²)</text>
<line x1="380" y1="40" x2="380" y2="220" stroke="#1A1A1A" stroke-width="1.5"/><line x1="380" y1="220" x2="590" y2="220" stroke="#1A1A1A" stroke-width="1.5"/><polyline points="380.0,220.0 580.0,58.1" fill="none" stroke="#2E5C8A" stroke-width="2.2"/><circle cx="420.0" cy="187.6" r="4.5" fill="#2E5C8A"/><circle cx="460.0" cy="155.2" r="4.5" fill="#2E5C8A"/><circle cx="500.0" cy="122.9" r="4.5" fill="#2E5C8A"/><circle cx="540.0" cy="90.5" r="4.5" fill="#2E5C8A"/><circle cx="580.0" cy="58.1" r="4.5" fill="#2E5C8A"/><text x="470.0" y="270" font-size="13" fill="#1A1A1A" text-anchor="middle" font-weight="bold">Volume V(h) = 9πh (proportionnelle)</text><text x="586" y="236" font-size="10.5" fill="#1A1A1A" text-anchor="end">hauteur h (cm)</text><text x="384" y="48" font-size="10.5" fill="#1A1A1A" text-anchor="start">volume (cm³)</text>
</svg>
                                    </div>
                                    <p class="indent-text">Le premier graphique est une <strong>courbe</strong> : l'aire n'est pas proportionnelle au côté. Le second est une <strong>droite passant par l'origine</strong> : le volume est proportionnel à la hauteur (car le rayon est fixé, seule la hauteur varie).</p>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-FONCTcaracteriser"
                                        onclick="startQuizFromButton('quiz-area-FONCTcaracteriser', '515601')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-FONCTcaracteriser"></div>
                                </section>

                                <!-- SECTION : POUR ALLER PLUS LOIN -->
                                <section class="course-section">
                                    <h2 class="section-title">Pour aller plus loin (culture mathématique)</h2>
                                    <div class="notion-box">
                                        <p>L'idée de représenter des grandeurs par des points dans un repère revient au mathématicien et philosophe français <strong>René Descartes</strong> (1596-1650), qui a eu l'idée géniale de relier l'<strong>algèbre</strong> (les calculs, les formules) à la <strong>géométrie</strong> (les figures, les courbes) : c'est pour cela que l'on appelle aujourd'hui « coordonnées cartésiennes » les coordonnées $(x;y)$ d'un point. Le mot « fonction » lui-même a été popularisé un peu plus tard par le mathématicien allemand <strong>Gottfried Wilhelm Leibniz</strong>, à la fin du $XVII^e$ siècle.</p>
                                    </div>
                                </section>
                            </div>
                        `
    }
};
