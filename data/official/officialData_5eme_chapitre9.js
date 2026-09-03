// ============================================================
// data/official/officialData_5eme_chapitre9.js
// Niveau : 5ème — Thème : ESPACE ET GÉOMÉTRIE
// Chapitre 9 : Angles
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.
// NOTE : les codes des quiz ("btn-check-understanding") sont des
// identifiants prévisionnels (59xxx) à créer/associer dans la
// banque de quiz du site avant mise en ligne.
// Cette version s'appuie notamment sur les « Attendus de fin
// d'année de 5e » (rubrique Espace et géométrie > Utiliser les
// notions de géométrie plane pour démontrer, caractérisations
// angulaires du parallélisme) fournis par l'enseignant.

var chapterData_5eme_9 = {
    themeName: "ESPACE ET GÉOMÉTRIE",
    chapter: {
        id: 9,
        title: "Angles",
        eleve: "non",
        content: `
                            <div class="course-container">
                                <!-- SECTION : OBJECTIFS -->
                                <section class="course-section">
                                    <p><strong>Objectifs :</strong></p>
                                    <ul>
                                        <li>Je révise le vocabulaire des angles : nul, aigu, droit, obtus, plat, plein</li>
                                        <li>Je révise les angles opposés par le sommet, adjacents et supplémentaires</li>
                                        <li>Je révise la notion de bissectrice</li>
                                        <li>Je connais les mesures des angles de mon équerre</li>
                                        <li>Je sais reconnaître des angles alternes-internes et des angles correspondants</li>
                                        <li>Je sais caractériser le parallélisme de deux droites par les angles</li>
                                    </ul>
                                </section>

                                <!-- SECTION : RAPPELS VOCABULAIRE DES ANGLES -->
                                <section class="course-section">
                                    <h2 class="section-title">Rappels : le vocabulaire des angles</h2>
                                    <table style="width:100%; border-collapse: collapse; text-align: center;">
                                        <thead>
                                            <tr>
                                                <th style="border-right: 1px solid black; padding: 10px;">Angle</th>
                                                <th style="padding: 10px;">Mesure</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">nul</td>
                                                <td style="padding: 10px;">$0°$</td>
                                            </tr>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">aigu</td>
                                                <td style="padding: 10px;">entre $0°$ et $90°$</td>
                                            </tr>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">droit</td>
                                                <td style="padding: 10px;">$90°$</td>
                                            </tr>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">obtus</td>
                                                <td style="padding: 10px;">entre $90°$ et $180°$</td>
                                            </tr>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">plat</td>
                                                <td style="padding: 10px;">$180°$</td>
                                            </tr>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">plein</td>
                                                <td style="padding: 10px;">$360°$</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> les équerres utilisées en classe ont pour mesures d'angles $30°$-$60°$-$90°$ ou bien $45°$-$45°$-$90°$.
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-ANGvocabulaire"
                                        onclick="startQuizFromButton('quiz-area-ANGvocabulaire', '59101')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-ANGvocabulaire"></div>

                                    <h3 class="section-title">Angles opposés par le sommet, adjacents, supplémentaires</h3>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width:380px; display:block; margin:0 auto; font-family:sans-serif;">
<polygon points="200.0,150.0 235.7,163.0 234.9,165.1 234.0,167.1 232.9,169.0 231.7,170.9 230.5,172.7 229.1,174.4 227.6,176.1 226.1,177.6 224.4,179.1 222.7,180.5 220.9,181.7 219.0,182.9 217.1,184.0 215.1,184.9 213.0,185.7 210.9,186.4 208.8,187.0 206.6,187.4 204.4,187.7 202.2,187.9 200.0,188.0 197.8,187.9 195.6,187.7 193.4,187.4" fill="#2E5C8A" fill-opacity="0.35"/>
<polygon points="200.0,150.0 164.3,137.0 165.1,134.9 166.0,132.9 167.1,131.0 168.3,129.1 169.5,127.3 170.9,125.6 172.4,123.9 173.9,122.4 175.6,120.9 177.3,119.5 179.1,118.3 181.0,117.1 182.9,116.0 184.9,115.1 187.0,114.3 189.1,113.6 191.2,113.0 193.4,112.6 195.6,112.3 197.8,112.1 200.0,112.0 202.2,112.1 204.4,112.3 206.6,112.6" fill="#2E5C8A" fill-opacity="0.35"/>
<polygon points="200.0,150.0 193.4,187.4 190.7,186.8 188.0,186.1 185.5,185.1 182.9,184.0 180.5,182.6 178.2,181.1 176.0,179.5 173.9,177.6 172.0,175.7 170.2,173.6 168.6,171.3 167.1,169.0 165.8,166.6 164.7,164.0 163.8,161.4 163.0,158.8 162.5,156.1 162.1,153.3 162.0,150.6 162.1,147.8 162.3,145.0 162.8,142.3 163.4,139.6 164.3,137.0" fill="#B5651D" fill-opacity="0.35"/>
<polygon points="200.0,150.0 206.6,112.6 209.3,113.2 212.0,113.9 214.5,114.9 217.1,116.0 219.5,117.4 221.8,118.9 224.0,120.5 226.1,122.4 228.0,124.3 229.8,126.4 231.4,128.7 232.9,131.0 234.2,133.4 235.3,136.0 236.2,138.6 237.0,141.2 237.5,143.9 237.9,146.7 238.0,149.4 237.9,152.2 237.7,155.0 237.2,157.7 236.6,160.4 235.7,163.0" fill="#B5651D" fill-opacity="0.35"/>
<line x1="59.0" y1="98.7" x2="341.0" y2="201.3" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="226.0" y1="2.3" x2="174.0" y2="297.7" stroke="#1A1A1A" stroke-width="2.5"/>
<circle cx="200" cy="150" r="3" fill="#1A1A1A"/>
<text x="230.0" y="202.0" font-size="15" fill="#2E5C8A" text-anchor="middle" font-weight="bold">a</text>
<text x="170.0" y="98.0" font-size="15" fill="#2E5C8A" text-anchor="middle" font-weight="bold">a</text>
<text x="148.0" y="180.0" font-size="15" fill="#B5651D" text-anchor="middle" font-weight="bold">b</text>
<text x="252.0" y="120.0" font-size="15" fill="#B5651D" text-anchor="middle" font-weight="bold">b</text>
</svg>
                                    </div>
                                    <div class="notion-box">
                                        <ul>
                                            <li>Deux angles <strong>opposés par le sommet</strong> (les deux angles $a$, ou les deux angles $b$, sur la figure) ont la <strong>même mesure</strong>.</li>
                                            <li>Deux angles <strong>adjacents</strong> ont le même sommet, un côté commun, et sont situés de part et d'autre de ce côté commun (par exemple, un angle $a$ et l'angle $b$ voisin).</li>
                                            <li>Deux angles <strong>supplémentaires</strong> ont une somme de mesures égale à $180°$ : ici, $a + b = 180°$.</li>
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-ANGopposesadjacents"
                                        onclick="startQuizFromButton('quiz-area-ANGopposesadjacents', '59102')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-ANGopposesadjacents"></div>

                                    <h3 class="section-title">La bissectrice d'un angle</h3>
                                    <div class="notion-box">
                                        <p>La <strong>bissectrice</strong> d'un angle est la demi-droite qui partage cet angle en <strong>deux angles de même mesure</strong>.</p>
                                    </div>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 320 300" xmlns="http://www.w3.org/2000/svg" style="max-width:320px; display:block; margin:0 auto; font-family:sans-serif;">
<line x1="80" y1="250" x2="148.4" y2="62.1" stroke="#2E5C8A" stroke-width="2.5"/>
<line x1="80" y1="250" x2="277.0" y2="215.3" stroke="#2E5C8A" stroke-width="2.5"/>
<line x1="80" y1="250" x2="217.9" y2="134.3" stroke="#B5651D" stroke-width="2.5" stroke-dasharray="6,4"/>
<path d="M 93.7,212.4 L 94.5,212.7 L 95.3,213.0 L 96.1,213.4 L 96.9,213.7 L 97.7,214.1 L 98.5,214.5 L 99.2,214.9 L 100.0,215.4 L 100.8,215.8 L 101.5,216.3 L 102.2,216.7 L 102.9,217.2 L 103.7,217.7 L 104.4,218.3 L 105.0,218.8 L 105.7,219.4 L 106.4,219.9 L 107.0,220.5 L 107.7,221.1 L 108.3,221.7 L 108.9,222.3 L 109.5,223.0 L 110.1,223.6 L 110.6,224.3" fill="none" stroke="#2F7D3C" stroke-width="1.8"/><line x1="98.0" y1="213.8" x2="107.9" y2="220.7" stroke="#2F7D3C" stroke-width="2"/>
<path d="M 110.6,224.3 L 111.2,225.0 L 111.7,225.6 L 112.3,226.3 L 112.8,227.1 L 113.3,227.8 L 113.7,228.5 L 114.2,229.2 L 114.6,230.0 L 115.1,230.8 L 115.5,231.5 L 115.9,232.3 L 116.3,233.1 L 116.6,233.9 L 117.0,234.7 L 117.3,235.5 L 117.6,236.3 L 117.9,237.1 L 118.1,238.0 L 118.4,238.8 L 118.6,239.6 L 118.9,240.5 L 119.1,241.3 L 119.2,242.2 L 119.4,243.1" fill="none" stroke="#2F7D3C" stroke-width="1.8"/><line x1="113.7" y1="227.7" x2="118.8" y2="238.5" stroke="#2F7D3C" stroke-width="2"/>
<circle cx="80" cy="250" r="3.5" fill="#1A1A1A"/>
<text x="60" y="258" font-size="16" fill="#1A1A1A" font-weight="bold">O</text>
<text x="156.4" y="58.1" font-size="16" fill="#2E5C8A" font-weight="bold">A</text>
<text x="283.0" y="231.3" font-size="16" fill="#2E5C8A" font-weight="bold">B</text>
<text x="225.9" y="130.3" font-size="16" fill="#B5651D" font-weight="bold">C</text>
</svg>
                                    </div>
                                    <p class="indent-text">Sur la figure ci-dessus, $[OC)$ est la bissectrice de l'angle $\\widehat{AOB}$ : on a donc $\\widehat{AOC} = \\widehat{COB}$.</p>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-ANGbissectrice"
                                        onclick="startQuizFromButton('quiz-area-ANGbissectrice', '59103')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-ANGbissectrice"></div>
                                </section>

                                <!-- SECTION : ANGLES FORMÉS PAR DEUX DROITES ET UNE SÉCANTE -->
                                <section class="course-section">
                                    <h2 class="section-title">Angles formés par deux droites coupées par une sécante</h2>
                                    <div class="notion-box">
                                        <p>Lorsqu'une droite $(\\Delta)$ (la <strong>sécante</strong>) coupe deux autres droites $(d_1)$ et $(d_2)$, elle forme $4$ angles à chaque point d'intersection, soit $8$ angles au total. Parmi eux, certaines paires portent un nom particulier.</p>
                                    </div>
                                    <p><strong>Les angles alternes-internes</strong> sont situés <strong>entre</strong> les droites $(d_1)$ et $(d_2)$ (du côté « intérieur »), et de <strong>part et d'autre</strong> de la sécante :</p>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width:420px; display:block; margin:0 auto; font-family:sans-serif;">
<line x1="20" y1="80" x2="380" y2="80" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="20" y1="220" x2="380" y2="220" stroke="#1A1A1A" stroke-width="2.5"/>
<polygon points="340,74 352,80 340,86" fill="#1A1A1A"/>
<polygon points="340,214 352,220 340,226" fill="#1A1A1A"/>
<line x1="94.7" y1="35.9" x2="305.3" y2="264.1" stroke="#1A1A1A" stroke-width="2.5"/>
<polygon points="135.4,80.0 161.4,80.0 161.4,80.9 161.3,81.8 161.3,82.7 161.2,83.6 161.0,84.4 160.8,85.3 160.7,86.2 160.4,87.1 160.2,87.9 159.9,88.8 159.6,89.6 159.2,90.4 158.8,91.2 158.4,92.0 158.0,92.8 157.6,93.6 157.1,94.4 156.6,95.1 156.0,95.8 155.5,96.5 154.9,97.2 154.3,97.8 153.7,98.5 153.0,99.1" fill="#2E5C8A" fill-opacity="0.45"/>
<polygon points="264.6,220.0 238.6,220.0 238.6,219.1 238.7,218.2 238.7,217.3 238.8,216.4 239.0,215.6 239.2,214.7 239.3,213.8 239.6,212.9 239.8,212.1 240.1,211.2 240.4,210.4 240.8,209.6 241.2,208.8 241.6,208.0 242.0,207.2 242.4,206.4 242.9,205.6 243.4,204.9 244.0,204.2 244.5,203.5 245.1,202.8 245.7,202.2 246.3,201.5 247.0,200.9" fill="#2E5C8A" fill-opacity="0.45"/>
<circle cx="135.4" cy="80" r="3" fill="#1A1A1A"/>
<circle cx="264.6" cy="220" r="3" fill="#1A1A1A"/>
<text x="113.4" y="70" font-size="15" fill="#1A1A1A" font-weight="bold">A</text>
<text x="274.6" y="242" font-size="15" fill="#1A1A1A" font-weight="bold">B</text>
<text x="30" y="72" font-size="14" fill="#1A1A1A">(d1)</text>
<text x="30" y="212" font-size="14" fill="#1A1A1A">(d2)</text>
<text x="275.3" y="280.1" font-size="14" fill="#1A1A1A">(Δ)</text>
</svg>
                                    </div>
                                    <p><strong>Les angles correspondants</strong> sont situés <strong>du même côté</strong> de la sécante, et à la <strong>même position</strong> par rapport à chacune des deux droites :</p>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width:420px; display:block; margin:0 auto; font-family:sans-serif;">
<line x1="20" y1="80" x2="380" y2="80" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="20" y1="220" x2="380" y2="220" stroke="#1A1A1A" stroke-width="2.5"/>
<polygon points="340,74 352,80 340,86" fill="#1A1A1A"/>
<polygon points="340,214 352,220 340,226" fill="#1A1A1A"/>
<line x1="94.7" y1="35.9" x2="305.3" y2="264.1" stroke="#1A1A1A" stroke-width="2.5"/>
<polygon points="135.4,80.0 161.4,80.0 161.4,80.9 161.3,81.8 161.3,82.7 161.2,83.6 161.0,84.4 160.8,85.3 160.7,86.2 160.4,87.1 160.2,87.9 159.9,88.8 159.6,89.6 159.2,90.4 158.8,91.2 158.4,92.0 158.0,92.8 157.6,93.6 157.1,94.4 156.6,95.1 156.0,95.8 155.5,96.5 154.9,97.2 154.3,97.8 153.7,98.5 153.0,99.1" fill="#B5651D" fill-opacity="0.45"/>
<polygon points="264.6,220.0 290.6,220.0 290.6,220.9 290.5,221.8 290.5,222.7 290.4,223.6 290.2,224.4 290.0,225.3 289.9,226.2 289.6,227.1 289.4,227.9 289.1,228.8 288.8,229.6 288.4,230.4 288.0,231.2 287.6,232.0 287.2,232.8 286.8,233.6 286.3,234.4 285.8,235.1 285.2,235.8 284.7,236.5 284.1,237.2 283.5,237.8 282.9,238.5 282.2,239.1" fill="#B5651D" fill-opacity="0.45"/>
<circle cx="135.4" cy="80" r="3" fill="#1A1A1A"/>
<circle cx="264.6" cy="220" r="3" fill="#1A1A1A"/>
<text x="113.4" y="70" font-size="15" fill="#1A1A1A" font-weight="bold">A</text>
<text x="274.6" y="242" font-size="15" fill="#1A1A1A" font-weight="bold">B</text>
<text x="30" y="72" font-size="14" fill="#1A1A1A">(d1)</text>
<text x="30" y="212" font-size="14" fill="#1A1A1A">(d2)</text>
<text x="275.3" y="280.1" font-size="14" fill="#1A1A1A">(Δ)</text>
</svg>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-ANGvocsecante"
                                        onclick="startQuizFromButton('quiz-area-ANGvocsecante', '59201')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-ANGvocsecante"></div>
                                </section>

                                <!-- SECTION : CARACTÉRISER LE PARALLÉLISME PAR LES ANGLES -->
                                <section class="course-section">
                                    <h2 class="section-title">Caractériser le parallélisme par les angles</h2>
                                    <div class="notion-box">
                                        <p><strong>Propriété (sens direct) :</strong> si deux droites sont <strong>parallèles</strong>, alors :</p>
                                        <ul>
                                            <li>les angles alternes-internes qu'elles forment avec une sécante sont <strong>égaux</strong> ;</li>
                                            <li>les angles correspondants qu'elles forment avec une sécante sont <strong>égaux</strong>.</li>
                                        </ul>
                                    </div>
                                    <div class="notion-box">
                                        <p><strong>Propriété réciproque :</strong> si deux droites coupées par une sécante forment des angles alternes-internes égaux (ou des angles correspondants égaux), alors ces deux droites sont <strong>parallèles</strong>.</p>
                                    </div>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> la réciproque est particulièrement utile pour <strong>démontrer</strong> que deux droites sont parallèles à partir de mesures d'angles, sans avoir à les tracer avec précision.
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode 1 (sens direct)</span> Les droites $(d_1)$ et $(d_2)$ sont parallèles. La sécante $(\\Delta)$ forme avec $(d_1)$ un angle de $65°$. Quelle est la mesure de l'angle correspondant sur $(d_2)$ ?
                                        <ul>
                                            <li>Comme $(d_1) /\\!/ (d_2)$, les angles correspondants formés par la sécante sont égaux.</li>
                                            <li>L'angle correspondant sur $(d_2)$ mesure donc aussi $65°$.</li>
                                        </ul>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode 2 (réciproque, pour démontrer un parallélisme)</span> Une sécante coupe $(d_1)$ en formant un angle de $72°$ et $(d_2)$ en formant un angle alterne-interne de $72°$. Que peut-on en conclure ?
                                        <ul>
                                            <li>Les deux angles alternes-internes formés sont égaux (tous deux $72°$).</li>
                                            <li>D'après la propriété réciproque, on peut donc conclure que $(d_1)$ et $(d_2)$ sont <strong>parallèles</strong>.</li>
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-ANGcaracteriser"
                                        onclick="startQuizFromButton('quiz-area-ANGcaracteriser', '59301')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-ANGcaracteriser"></div>
                                </section>

                                <!-- SECTION : POUR ALLER PLUS LOIN -->
                                <section class="course-section">
                                    <h2 class="section-title">Pour aller plus loin (culture mathématique)</h2>
                                    <div class="notion-box">
                                        <p>Ces propriétés sur les angles et le parallélisme sont déjà démontrées dans les <strong>Éléments</strong> d'<strong>Euclide</strong>, un ouvrage écrit vers $300$ avant J.-C. qui pose les fondations de la géométrie. Les propositions $27$ et $28$ du <strong>Livre I</strong> établissent précisément que des angles alternes-internes (ou correspondants) égaux entraînent le parallélisme de deux droites : la propriété que tu utilises aujourd'hui est donc vieille de plus de $2\\,300$ ans !</p>
                                    </div>
                                </section>
                            </div>
                        `
    }
};
