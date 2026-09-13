// ============================================================
// data/official/officialData_5eme_chapitre4.js
// Niveau : 5ème — Thème : NOMBRES ET CALCULS
// Chapitre 4 : Puissances
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.
// NOTE : les codes des quiz ("btn-check-understanding") sont des
// identifiants prévisionnels (54xxx) à créer/associer dans la
// banque de quiz du site avant mise en ligne.

var chapterData_5eme_4 = {
    themeName: "NOMBRES ET CALCULS",
    chapter: {
        id: 4,
        title: "Puissances",
        eleve: "non",
        content: `
                            <div class="course-container">
                                <!-- SECTION : OBJECTIFS -->
<!--                                <section class="course-section">
                                    <p><strong>Objectifs :</strong></p>
                                    <ul>
                                        <li>Je découvre la notion de puissance d'un nombre et sa notation dans le cas du carré et du cube</li>
                                        <li>Je connais les carrés des entiers de 0 à 12</li>
                                        <li>Je connais le cube de 10</li>
                                        <li>Je sais écrire un nombre sous la forme d'une puissance 2 ou 3</li>
                                        <li>Je sais calculer la valeur numérique d'expressions contenant des puissances simples, additions, soustractions et produits</li>
                                        <li>Je sais calculer la valeur d'une expression littérale contenant une puissance simple</li>
                                    </ul>
                                </section>
-->
                                <!-- ================================================ -->
                                <!-- I) DÉFINITION D'UNE PUISSANCE -->
                                <!-- ================================================ -->
                                <section class="course-section">
                                    <h2 class="section-title">Définition d'une puissance</h2>

                                    <div class="notion-box">
                                        <p>Rappel : la <strong>multiplication</strong> est une écriture raccourcie de l'<strong>addition répétée</strong>.</p>
                                        
                                    </div>
                                    <div>
                                        <p>Nous ne connaissons pas la date précise ou elle à été inventée mais on a retrouvé des tablettes babyloniennes (an -4000 environ) ou elle était déjà présente.
                                        <p>Pour calculer $5 + 5 + 5 + 5 + 5 + 5 + 5 + 5 + 5 = 45$</p>
                                        <p>il y a $9$ termes égaux à $5$ : c'est long à écrire et à calculer.</p>
                                        <p>On préfère donc écrire $5 \\times 9 = 45$.</p>
                                    </div>
                                    <div>
                                        <p>Avant le 17ème siècle, pour écrire un produit comme $a \\times a \\times a$, les mathématiciens devaient répéter la lettre ($aaa$) ou utiliser des mots comme « carré » ou « cube ». C'est le mathématicien et philosophe français <strong>René Descartes</strong> qui, en 1637 dans son livre <em>La Géométrie</em>, a l'idée d'écrire le nombre de répétitions en petit, en haut à droite : $a^3$ à la place de $aaa$.</p>
                                        <p>Cette notation en exposant est beaucoup plus pratique, surtout quand le facteur se répète de nombreuses fois (imagine écrire $a \\times a \\times \\dots \\times a$, $10$ fois, plutôt que simplement $a^{10}$ !).</p>
                                    </div>
                                    <div class="notion-box">
                                        <p>Lorsqu'un <strong>même facteur</strong> se répète plusieurs fois dans une <strong>multiplication</strong>, on peut utiliser une écriture encore plus courte : la <strong>puissance</strong>.</p>
                                        <p style="text-align:center;">$5 \\times 5 \\times 5 \\times 5 \\times 5 \\times 5 \\times 5 \\times 5 \\times 5 = 5^9$ (on lit 5 puissance 9)</p>
                                        </br>
                                        <p>Dans ce cours de 5ème nous allons uniquement calculer avec des puissances 2 et 3 qui portent des noms que tu connais déjà : le carré et le cube.</p>
                                    </div>
                                    

                                    <!-- LE CARRÉ -->
                                    <h3 class="section-title">Le carré</h3>
                                    <div class="notion-box">
                                        <p>Le <strong>carré</strong> d'un nombre $a$ est le produit de ce nombre par lui-même. On le note $a^2$ (on lit « $a$ au carré ») :</p>
                                        <blockquote>$a^2 = a \\times a$</blockquote>
                                        <p>$a$ est appelé la <strong>base</strong>, et $2$ est appelé l'<strong>exposant</strong>.</p>
                                    </div>
                                    <p><strong>Exemple :</strong> $7^2 = 7 \\times 7 = 49$. (à l'oral on dira que 7 au carré est égal à 49)</p>
                                    <div class="notion-box">
                                        <p>A l'origine, le nom carré, provient de la géométrie car il correspond à l'aire d'un <strong>carré</strong>.</p>
                                        <p>L'unité d'aire que tu connais 1 cm² correspond à l'aire d'un carré de côté 1cm. En effet $Aire carré= côté \\times côté = 1 \\times 1 = 1^2 =1 cm^2$ </p>
                                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="max-width:60px; height:auto; display:block; margin:15px auto;">
                                            <defs>
                                                <pattern id="hatchBlue1cm" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45)">
                                                    <line x1="0" y1="0" x2="0" y2="4" stroke="#2563eb" stroke-width="0.8"/>
                                                </pattern>
                                            </defs>
                                            <!-- carré hachuré -->
                                            <rect x="33" y="28" width="34" height="34" fill="url(#hatchBlue1cm)" stroke="#1e3a8a" stroke-width="1"/>
                                            <!-- cote du haut -->
                                            <line x1="33" y1="18" x2="67" y2="18" stroke="#1e3a8a" stroke-width="0.8"/>
                                            <line x1="33" y1="15" x2="33" y2="21" stroke="#1e3a8a" stroke-width="0.8"/>
                                            <line x1="67" y1="15" x2="67" y2="21" stroke="#1e3a8a" stroke-width="0.8"/>
                                            <text x="50" y="13" text-anchor="middle" font-size="8" fill="#1e3a8a" font-family="sans-serif">1 cm</text>
                                            <!-- cote de gauche -->
                                            <line x1="22" y1="28" x2="22" y2="62" stroke="#1e3a8a" stroke-width="0.8"/>
                                            <line x1="19" y1="28" x2="25" y2="28" stroke="#1e3a8a" stroke-width="0.8"/>
                                            <line x1="19" y1="62" x2="25" y2="62" stroke="#1e3a8a" stroke-width="0.8"/>
                                            <text x="12" y="45" text-anchor="middle" font-size="8" fill="#1e3a8a" font-family="sans-serif" transform="rotate(-90 12 45)">1 cm</text>
                                            <!-- indication de l'aire -->
                                            <text x="50" y="47" text-anchor="middle" font-size="8" fill="var(--secondary)" font-family="sans-serif" font-weight="bold">1cm²</text>
                                        </svg>
                                        </div>
                                        <p> <strong>Exemple :</strong> Calcule l'aire d'un carré de côté 6cm</p>                                       
                                        </br>
                                        <p>Pour trouver l'aire d'une figure on compte (ou on calcule) combien de petits carrés de côté 1cm on peut mettre à l'intérieur.</p>
                                        <svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg" style="max-width:280px; height:auto; display:block; margin:15px auto;">
                                            <!-- carré exterieur 6cm -->
                                            <rect x="60" y="40" width="180" height="180" fill="#eff6ff" stroke="#1e3a8a" stroke-width="2.5"/>
                                            <!-- quadrillage : petits carres de 1cm -->
                                            <g stroke="#93c5fd" stroke-width="1">
                                                <line x1="90" y1="40" x2="90" y2="220"/>
                                                <line x1="120" y1="40" x2="120" y2="220"/>
                                                <line x1="150" y1="40" x2="150" y2="220"/>
                                                <line x1="180" y1="40" x2="180" y2="220"/>
                                                <line x1="210" y1="40" x2="210" y2="220"/>
                                                <line x1="60" y1="70" x2="240" y2="70"/>
                                                <line x1="60" y1="100" x2="240" y2="100"/>
                                                <line x1="60" y1="130" x2="240" y2="130"/>
                                                <line x1="60" y1="160" x2="240" y2="160"/>
                                                <line x1="60" y1="190" x2="240" y2="190"/>
                                            </g>
                                            <!-- cote du haut : 6cm -->
                                            <line x1="60" y1="22" x2="240" y2="22" stroke="#1e3a8a" stroke-width="1.5"/>
                                            <line x1="60" y1="17" x2="60" y2="27" stroke="#1e3a8a" stroke-width="1.5"/>
                                            <line x1="240" y1="17" x2="240" y2="27" stroke="#1e3a8a" stroke-width="1.5"/>
                                            <text x="150" y="14" text-anchor="middle" font-size="16" fill="#1e3a8a" font-family="sans-serif" font-weight="bold">6 cm</text>
                                            <!-- cote de gauche : 6cm -->
                                            <line x1="42" y1="40" x2="42" y2="220" stroke="#1e3a8a" stroke-width="1.5"/>
                                            <line x1="37" y1="40" x2="47" y2="40" stroke="#1e3a8a" stroke-width="1.5"/>
                                            <line x1="37" y1="220" x2="47" y2="220" stroke="#1e3a8a" stroke-width="1.5"/>
                                            <text x="25" y="134" text-anchor="middle" font-size="16" fill="#1e3a8a" font-family="sans-serif" font-weight="bold" transform="rotate(-90 25 134)">6 cm</text>
                                        </svg>
                                        <p> On peut compter le nombre de carrés à l'intérieur et on trouve 36 carrés, donc 36 cm²</p>
                                        <p> Si chaque carré à un côté de 1cm on peut également calculer ce qui va plus vite</p>
                                        <p> class="indent-text"> Je mesure le côté du carré : $6$ cm donc à l'intérieur il y a $6 \\times 6$ carrés.</p>
                                        <p> L'aire est donc de $6 \\times 6 = 6^2 = 36$ cm².</p>
                                   
                                    <div>
                                    <p> <strong>Exemple :</strong> Un jardin carré a un côté de $9$ m. Quelle est son aire ?</p>
                                    <p class="indent-text"> L'aire d'un carré de côté $c$ est $c^2$. Ici, l'aire est $9^2 = 9 \\times 9 = 81$ m².</p>
                                    </div>

                                    <div class="notion-box">
                                        <p> <strong style="color: var(--secondary);">⚠️ Attention : L'erreur classique que ton cerveau va avoir très envie de faire est :</strong> $a^2 \\neq$ « $a \\times 2$ » !</p>
                                        <p> Par exemple, $5^2 = 5 \\times 5 = 25$, ce n'est pas du tout égal à $5 \\times 2 = 10$.</p>
                                    </div>

                                    <p><strong>Il faut connaître par cœur les carrés des entiers de 0 à 12 :</strong></p>
                                    <table style="width:100%; border-collapse: collapse; text-align: center;">
                                        <thead>
                                            <tr>
                                                <th style="border-right: 1px solid black; padding: 8px;">$a$</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">0</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">1</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">2</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">3</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">4</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">5</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">6</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">7</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">8</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">9</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">10</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">11</th>
                                                <th style="padding: 8px;">12</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 8px;">$a^2$</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">0</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">1</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">4</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">9</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">16</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">25</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">36</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">49</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">64</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">81</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">100</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">121</td>
                                                <td style="padding: 8px;">144</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PUcarre"
                                        onclick="startQuizFromButton('quiz-area-PUcarre', '54111')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PUcarre"></div>
        

                                    <!-- LE CUBE -->
                                    <h3 class="section-title" style="margin-top: 25px;">Le cube</h3>
                                    <div class="notion-box">
                                        <p>Le <strong>cube</strong> d'un nombre $a$ est le produit de trois facteurs égaux à ce nombre. On le note $a^3$ (on lit « $a$ au cube ») :</p>
                                        <blockquote>$a^3 = a \\times a \\times a$</blockquote>
                                    </div>
                                    <p><strong>Exemple :</strong>$4^3 = 4 \\times 4 \\times 4 = 64$.</p>
                                    <div class="notion-box">
                                        <p>Le cube d'un nombre correspond aussi au <strong>volume d'un cube</strong> dont l'arête mesure ce nombre.</p>
                                        <p> Comme on a donné le nom carré à la puissance 2, on à également donné le nom cube à la puissance 3.</p>
                                        <p> En effet, en géométrie, lorsqu'on cherche le volume d'un cube on va compter combien de petits cubes d'1 cm de côté on peut faire rentrer dans le solide.</p>
                                        <p> En calculant cela donne : $Volume cube=côté \\times côté \\times côté$ $=  1 \\times 1 \\times 1 = 1^3 = 1 cm^3$
                                        <svg viewBox="0 0 170 130" xmlns="http://www.w3.org/2000/svg" style="max-width:110px; height:auto; display:block; margin:15px auto;">
                                            <defs>
                                                <pattern id="hatchBlueCube1" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45)">
                                                    <line x1="0" y1="0" x2="0" y2="4" stroke="#2563eb" stroke-width="1"/>
                                                </pattern>
                                            </defs>
                                            <!-- face du dessus -->
                                            <polygon points="50,40 90,40 104,26 64,26" fill="#dbeafe" stroke="#1e3a8a" stroke-width="1"/>
                                            <!-- face de droite -->
                                            <polygon points="90,80 90,40 104,26 104,66" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="1"/>
                                            <!-- face avant hachurée -->
                                            <polygon points="50,80 90,80 90,40 50,40" fill="url(#hatchBlueCube1)" stroke="#1e3a8a" stroke-width="1.3"/>
                                            <!-- arêtes cachées -->
                                            <g stroke="#1e3a8a" stroke-width="0.8" stroke-dasharray="3,2">
                                                <line x1="50" y1="80" x2="64" y2="66"/>
                                                <line x1="64" y1="66" x2="104" y2="66"/>
                                                <line x1="64" y1="66" x2="64" y2="26"/>
                                            </g>
                                            <!-- dimension largeur -->
                                            <line x1="50" y1="90" x2="90" y2="90" stroke="#1e3a8a" stroke-width="0.8"/>
                                            <line x1="50" y1="87" x2="50" y2="93" stroke="#1e3a8a" stroke-width="0.8"/>
                                            <line x1="90" y1="87" x2="90" y2="93" stroke="#1e3a8a" stroke-width="0.8"/>
                                            <text x="70" y="103" text-anchor="middle" font-size="10" fill="#1e3a8a" font-family="sans-serif">1 cm</text>
                                            <!-- dimension hauteur -->
                                            <line x1="36" y1="40" x2="36" y2="80" stroke="#1e3a8a" stroke-width="0.8"/>
                                            <line x1="33" y1="40" x2="39" y2="40" stroke="#1e3a8a" stroke-width="0.8"/>
                                            <line x1="33" y1="80" x2="39" y2="80" stroke="#1e3a8a" stroke-width="0.8"/>
                                            <text x="24" y="60" text-anchor="middle" font-size="10" fill="#1e3a8a" font-family="sans-serif" transform="rotate(-90 24 60)">1 cm</text>
                                            <!-- dimension profondeur (en bas, le long de l'arête visible) -->
                                            <line x1="98" y1="88" x2="112" y2="74" stroke="#1e3a8a" stroke-width="0.8"/>
                                            <line x1="96" y1="90" x2="100" y2="86" stroke="#1e3a8a" stroke-width="0.8"/>
                                            <line x1="110" y1="76" x2="114" y2="72" stroke="#1e3a8a" stroke-width="0.8"/>
                                            <text x="112" y="87" text-anchor="middle" font-size="10" fill="#1e3a8a" font-family="sans-serif" transform="rotate(-45 112 87)">1 cm</text>
                                        </svg>
                                    </div>
                                    <div>
                                    <p> <strong>Exemple :</strong> calcule le volume d'un cube d'arête $2$ cm</p>
                                    </br>
                                    <p> Je peux compter le nombre de petits cubes de 1cm de côté à l'intérieur de celui ci et je trouve 8 cubes donc 8 cm$^3$.                                    
                                    <svg viewBox="0 0 300 270" xmlns="http://www.w3.org/2000/svg" style="max-width:280px; height:auto; display:block; margin:15px auto;">
                                        <!-- face du dessus -->
                                        <polygon points="60,70 200,70 250,20 110,20" fill="#dbeafe" stroke="#1e3a8a" stroke-width="2"/>
                                        <!-- face de droite -->
                                        <polygon points="200,210 200,70 250,20 250,160" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="2"/>
                                        <!-- face avant -->
                                        <polygon points="60,210 200,210 200,70 60,70" fill="#eff6ff" stroke="#1e3a8a" stroke-width="2.5"/>

                                        <!-- quadrillage face avant (visible) -->
                                        <g stroke="#93c5fd" stroke-width="1.2">
                                            <line x1="130" y1="70" x2="130" y2="210"/>
                                            <line x1="60" y1="140" x2="200" y2="140"/>
                                        </g>
                                        <!-- quadrillage face du dessus (visible) -->
                                        <g stroke="#93c5fd" stroke-width="1.2">
                                            <line x1="130" y1="70" x2="180" y2="20"/>
                                            <line x1="85" y1="45" x2="225" y2="45"/>
                                        </g>
                                        <!-- quadrillage face de droite (visible) -->
                                        <g stroke="#93c5fd" stroke-width="1.2">
                                            <line x1="200" y1="140" x2="250" y2="90"/>
                                            <line x1="225" y1="45" x2="225" y2="185"/>
                                        </g>

                                        <!-- quadrillage caché (pointillés) : découpage à l'intérieur/derrière le cube -->
                                        <g stroke="#93c5fd" stroke-width="1.2" stroke-dasharray="4,3">
                                            <line x1="180" y1="20" x2="180" y2="160"/>
                                            <line x1="180" y1="160" x2="130" y2="210"/>
                                            <line x1="250" y1="90" x2="110" y2="90"/>
                                            <line x1="110" y1="90" x2="60" y2="140"/>
                                            <line x1="85" y1="185" x2="225" y2="185"/>
                                            <line x1="85" y1="45" x2="85" y2="185"/>
                                        </g>

                                        <!-- arêtes cachées du cube -->
                                        <g stroke="#1e3a8a" stroke-width="1.3" stroke-dasharray="5,4">
                                            <line x1="60" y1="210" x2="110" y2="160"/>
                                            <line x1="110" y1="160" x2="250" y2="160"/>
                                            <line x1="110" y1="160" x2="110" y2="20"/>
                                        </g>

                                        <!-- dimension largeur -->
                                        <line x1="60" y1="225" x2="200" y2="225" stroke="#1e3a8a" stroke-width="1.3"/>
                                        <line x1="60" y1="219" x2="60" y2="231" stroke="#1e3a8a" stroke-width="1.3"/>
                                        <line x1="200" y1="219" x2="200" y2="231" stroke="#1e3a8a" stroke-width="1.3"/>
                                        <text x="130" y="245" text-anchor="middle" font-size="15" fill="#1e3a8a" font-family="sans-serif" font-weight="bold">2 cm</text>

                                        <!-- dimension hauteur -->
                                        <line x1="38" y1="70" x2="38" y2="210" stroke="#1e3a8a" stroke-width="1.3"/>
                                        <line x1="32" y1="70" x2="44" y2="70" stroke="#1e3a8a" stroke-width="1.3"/>
                                        <line x1="32" y1="210" x2="44" y2="210" stroke="#1e3a8a" stroke-width="1.3"/>
                                        <text x="20" y="140" text-anchor="middle" font-size="15" fill="#1e3a8a" font-family="sans-serif" font-weight="bold" transform="rotate(-90 20 140)">2 cm</text>

                                        <!-- dimension profondeur (en bas, le long de l'arête visible) -->
                                        <line x1="215" y1="225" x2="265" y2="175" stroke="#1e3a8a" stroke-width="1.3"/>
                                        <line x1="211" y1="229" x2="219" y2="221" stroke="#1e3a8a" stroke-width="1.3"/>
                                        <line x1="261" y1="179" x2="269" y2="171" stroke="#1e3a8a" stroke-width="1.3"/>
                                        <text x="248" y="192" text-anchor="middle" font-size="15" fill="#1e3a8a" font-family="sans-serif" font-weight="bold" transform="rotate(-45 248 192)">2 cm</text>
                                    </svg>
                                    <p> Je peux aussi mesurer les côtés, voire qu'ils font 2cm, puis calculer : </p>
                                    <p class="indent-text"> Le volume d'un cube d'arête $2$ cm est $2^3=2 \\times 2 \\times 2 = 8 cm^3$.</p>
                                    </br>
                                    <p> <strong>Exemple 2 :</strong> Un dé à jouer a une arête de $1,5$ cm. Quel est son volume ?</p>
                                    <p class="indent-text"> Le volume d'un cube d'arête $c$ est $c^3$. Ici, le volume est $1,5^3 = 1,5 \\times 1,5 \\times 1,5 = 3,375$ cm³.</p>
                                    </div>
                                    
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> il faut connaître $10^3 = 10 \\times 10 \\times 10 = 1\\,000$, très utile pour les conversions d'unités de volume (par exemple $1$ dm³ $= 1\\,000$ cm³, puisque $1$ dm $= 10$ cm).
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PUcube"
                                        onclick="startQuizFromButton('quiz-area-PUcube', '54121')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PUcube"></div>

                                    
                                    
                                </section>

                                <!-- ================================================ -->
                                <!-- II) CALCULER EN UTILISANT LES PUISSANCES -->
                                <!-- ================================================ -->
                                <section class="course-section">
                                    <h2 class="section-title">Calculer en utilisant les puissances</h2>

                                    <!-- ÉCRIRE UN NOMBRE SOUS FORME DE PUISSANCE -->
                                    <h3 class="section-title">Écrire un nombre sous la forme d'une puissance</h3>
                                    <div class="notion-box">
                                        <p>Pour écrire un nombre sous la forme d'une puissance $2$ ou $3$, il faut reconnaître qu'il est le produit de deux (ou trois) facteurs égaux.</p>
                                    </div>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <p>$49 = 7 \\times 7$</p>
                                            <p>donc $49 = 7^2$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>$125 = 5 \\times 5 \\times 5$</p>
                                            <p>donc $125 = 5^3$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>$100 = 10 \\times 10$</p>
                                            <p>donc $100 = 10^2$</p>
                                        </div>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PUecriture"
                                        onclick="startQuizFromButton('quiz-area-PUecriture', '54211')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PUecriture"></div>

                                    <!-- 2.2 CALCULER UNE EXPRESSION NUMÉRIQUE -->
                                    <h3 class="section-title" style="margin-top: 25px;">Calculer une expression contenant des puissances</h3>
                                    <div class="notion-box">
                                        <p> Si tu te souviens des priorités du chapitre 1 : opérations, nous calculions les multiplications avant les additions car la multiplication est un raccourci d'écriture de l'addition qui se répète. </p>
                                        <p> De la même façon comme les puissances sont un raccourci d'écriture des multiplications qui se répétent, il faudra les calculer <strong>avant</strong> de faire les multiplications et divisions.</p>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Règle : PRIORITES OPERATOIRES</span>
                                        <ol style="margin-left: 20px;">
                                            <li>On calcule d'abord ce qui est entre <strong>parenthèses</strong>.</li>
                                            <li>Puis on calcule les <strong>puissances</strong>.</li>
                                            <li>Puis on effectue les <strong>multiplications et divisions</strong>.</li>
                                            <li>Enfin on effectue les <strong>additions et soustractions</strong>.</li>
                                        </ol>
                                    </div>
                                    <p><strong>Exemples :</strong></p>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <p>$A = 3 + 2^2 \\times 5$</p>
                                            <p>$A = 3 +$<font color="blue">$ 4$</font>$\\times 5$</p>
                                            <p>$A = 3 +$<font color="purple">$ 20$</font></p>
                                            <p>$A = 23$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>$B = (4 + 1)^2 - 3^2$</p>
                                            <p>$B =$<font color="blue">$ 5^2$</font>$ - 3^2$</p>
                                            <p>$B =$<font color="purple">$ 25 - 9$</font></p>
                                            <p>$B = 16$</p>
                                        </div>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PUcalculer"
                                        onclick="startQuizFromButton('quiz-area-PUcalculer', '54221')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PUcalculer"></div>

                                    <!-- 2.3 CALCULER UNE EXPRESSION LITTÉRALE -->
                                    <h3 class="section-title" style="margin-top: 25px;">Calculer une expression littérale avec une puissance</h3>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Calculer $C = a^2 + 3a$ pour $a = 5$
                                        <ul>
                                            <li>On remplace $a$ par $5$ : $C = 5^2 + 3 \\times 5$.</li>
                                            <li>On applique les priorités : $C =$ <font color="blue">$25$</font> $+$ <font color="purple">$15$</font>.</li>
                                            <li>$C = 40$.</li>
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PUlitteral"
                                        onclick="startQuizFromButton('quiz-area-PUlitteral', '54231')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PUlitteral"></div>                                   
                                </section>
                            </div>
                        `
    }
};
