// ============================================================
// data/official/officialData_5eme_chapitre13.js
// Niveau : 5ème — Thème : ORGANISATION ET GESTION DE DONNÉES ET PROBABILITÉS
// Chapitre 13 : Probabilités
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.
// NOTE : les codes des quiz ("btn-check-understanding") sont des
// identifiants prévisionnels (513xxx) à créer/associer dans la
// banque de quiz du site avant mise en ligne.
// Cette version s'appuie notamment sur les « Attendus de fin
// d'année de 5e » (rubrique Organisation et gestion de données,
// fonctions > Comprendre et utiliser des notions élémentaires de
// probabilités) fournis par l'enseignant. Ce chapitre clôt le
// thème « Organisation et gestion de données et probabilités ».

var chapterData_5eme_13 = {
    themeName: "ORGANISATION ET GESTION DE DONNÉES ET PROBABILITÉS",
    chapter: {
        id: 13,
        title: "Probabilités",
        eleve: "non",
        content: `
                            <div class="course-container">
                                <!-- SECTION : OBJECTIFS -->
                                <section class="course-section">
                                    <p><strong>Objectifs :</strong></p>
                                    <ul>
                                        <li>J'aborde les questions relatives au hasard à partir de problèmes simples</li>
                                        <li>Je sais utiliser le vocabulaire des probabilités : expérience aléatoire, issue, évènement</li>
                                        <li>Je sais attribuer des probabilités dans des cas simples (équiprobabilité)</li>
                                        <li>Je sais placer un évènement sur une échelle de probabilité</li>
                                        <li>Je sais exprimer une probabilité sous forme de fraction, décimale ou de pourcentage</li>
                                        <li>Je sais répéter matériellement une expérience aléatoire simple et enregistrer les résultats dans un tableau d'effectifs et de fréquences</li>
                                    </ul>
                                </section>

                                <!-- SECTION : VOCABULAIRE -->
                                <section class="course-section">
                                    <h2 class="section-title">Le vocabulaire des probabilités</h2>
                                    <div class="notion-box">
                                        <ul>
                                            <li>Une <strong>expérience aléatoire</strong> est une expérience dont on ne peut pas prévoir le résultat à l'avance (lancer un dé, tirer une carte, lancer une pièce...).</li>
                                            <li>Une <strong>issue</strong> est un résultat possible de cette expérience (par exemple, obtenir « $4$ » en lançant un dé).</li>
                                            <li>Un <strong>évènement</strong> est un ensemble d'issues qui partagent une même propriété (par exemple, « obtenir un nombre pair » regroupe les issues $2$, $4$ et $6$).</li>
                                        </ul>
                                    </div>
                                    <p class="indent-text">Exemple : on lance un dé à $6$ faces. Les issues possibles sont $1, 2, 3, 4, 5, 6$. L'évènement « obtenir un multiple de $3$ » est réalisé par les issues $3$ et $6$.</p>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PROBvocabulaire"
                                        onclick="startQuizFromButton('quiz-area-PROBvocabulaire', '513101')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PROBvocabulaire"></div>
                                </section>

                                <!-- SECTION : ECHELLE DE PROBABILITE -->
                                <section class="course-section">
                                    <h2 class="section-title">L'échelle de probabilité</h2>
                                    <div class="notion-box">
                                        <p>La <strong>probabilité</strong> d'un évènement mesure sa <strong>chance de se réaliser</strong>. C'est un nombre compris entre $0$ et $1$ :</p>
                                        <ul>
                                            <li>une probabilité de $0$ correspond à un évènement <strong>impossible</strong> ;</li>
                                            <li>une probabilité de $1$ correspond à un évènement <strong>certain</strong> ;</li>
                                            <li>plus la probabilité est proche de $1$, plus l'évènement a de chances de se réaliser.</li>
                                        </ul>
                                    </div>
                                    <p>On peut placer différents évènements sur une <strong>échelle de probabilité</strong> :</p>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 540 280" xmlns="http://www.w3.org/2000/svg" style="max-width:520px; display:block; margin:0 auto; font-family:sans-serif;">
<line x1="60" y1="130" x2="480" y2="130" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="60.0" y1="124" x2="60.0" y2="136" stroke="#1A1A1A" stroke-width="2"/>
<text x="60.0" y="154" font-size="13" fill="#1A1A1A" text-anchor="middle" font-weight="bold">0</text>
<line x1="165.0" y1="124" x2="165.0" y2="136" stroke="#1A1A1A" stroke-width="2"/>
<line x1="270.0" y1="124" x2="270.0" y2="136" stroke="#1A1A1A" stroke-width="2"/>
<text x="270.0" y="154" font-size="13" fill="#1A1A1A" text-anchor="middle" font-weight="bold">1/2</text>
<line x1="375.0" y1="124" x2="375.0" y2="136" stroke="#1A1A1A" stroke-width="2"/>
<line x1="480.0" y1="124" x2="480.0" y2="136" stroke="#1A1A1A" stroke-width="2"/>
<text x="480.0" y="154" font-size="13" fill="#1A1A1A" text-anchor="middle" font-weight="bold">1</text>
<text x="60.0" y="172" font-size="12" fill="#B5651D" text-anchor="middle" font-weight="bold">IMPOSSIBLE</text>
<text x="480.0" y="172" font-size="12" fill="#2F7D3C" text-anchor="middle" font-weight="bold">CERTAIN</text>
<circle cx="72.6" cy="130" r="5" fill="#8E44AD"/>
<line x1="72.6" y1="122" x2="72.6" y2="56.0" stroke="#8E44AD" stroke-width="1.3" stroke-dasharray="3,2"/>
<text x="72.6" y="66.0" font-size="11.5" fill="#8E44AD" text-anchor="middle" font-weight="bold">10 fois de suite</text>
<text x="72.6" y="80.0" font-size="11.5" fill="#8E44AD" text-anchor="middle" font-weight="bold">le 6 (dé)</text>
<circle cx="130.1" cy="130" r="5" fill="#2E5C8A"/>
<line x1="130.1" y1="122" x2="130.1" y2="96.0" stroke="#2E5C8A" stroke-width="1.3" stroke-dasharray="3,2"/>
<text x="130.1" y="106.0" font-size="11.5" fill="#2E5C8A" text-anchor="middle" font-weight="bold">obtenir un 2</text>
<text x="130.1" y="120.0" font-size="11.5" fill="#2E5C8A" text-anchor="middle" font-weight="bold">(dé à 6 faces)</text>
<circle cx="270.0" cy="130" r="5" fill="#2E5C8A"/>
<line x1="270.0" y1="138" x2="270.0" y2="170.0" stroke="#2E5C8A" stroke-width="1.3" stroke-dasharray="3,2"/>
<text x="270.0" y="176.0" font-size="11.5" fill="#2E5C8A" text-anchor="middle" font-weight="bold">obtenir pile</text>
<text x="270.0" y="190.0" font-size="11.5" fill="#2E5C8A" text-anchor="middle" font-weight="bold">(pièce)</text>
<circle cx="467.4" cy="130" r="5" fill="#2F7D3C"/>
<line x1="467.4" y1="122" x2="467.4" y2="96.0" stroke="#2F7D3C" stroke-width="1.3" stroke-dasharray="3,2"/>
<text x="467.4" y="106.0" font-size="11.5" fill="#2F7D3C" text-anchor="middle" font-weight="bold">ne pas gagner</text>
<text x="467.4" y="120.0" font-size="11.5" fill="#2F7D3C" text-anchor="middle" font-weight="bold">au loto</text>
</svg>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PROBechelle"
                                        onclick="startQuizFromButton('quiz-area-PROBechelle', '513201')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PROBechelle"></div>
                                </section>

                                <!-- SECTION : EQUIPROBABILITE -->
                                <section class="course-section">
                                    <h2 class="section-title">Calculer une probabilité en situation d'équiprobabilité</h2>
                                    <div class="notion-box">
                                        <p>On dit qu'il y a <strong>équiprobabilité</strong> lorsque toutes les issues d'une expérience aléatoire ont la <strong>même probabilité</strong> de se réaliser (un dé ou une pièce non truqués, par exemple). Dans ce cas :</p>
                                        <blockquote>$P(\\text{évènement}) = \\dfrac{\\text{nombre d'issues favorables}}{\\text{nombre d'issues possibles}}$</blockquote>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> On lance un dé équilibré à $6$ faces. Quelle est la probabilité d'obtenir le nombre $2$ ?
                                        <ul>
                                            <li>Il y a $6$ issues possibles ($1, 2, 3, 4, 5, 6$), toutes équiprobables.</li>
                                            <li>Une seule issue est favorable (« obtenir $2$ »).</li>
                                            <li>$P(\\text{« obtenir } 2 \\text{ »}) = \\dfrac{1}{6}$.</li>
                                        </ul>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Une urne contient $3$ boules vertes et $4$ boules jaunes, indiscernables au toucher. On tire une boule au hasard. Quelle est la probabilité de tirer une boule verte ?
                                        <ul>
                                            <li>Il y a $3 + 4 = 7$ boules en tout, donc $7$ issues possibles équiprobables.</li>
                                            <li>$3$ issues sont favorables (les $3$ boules vertes).</li>
                                            <li>$P(\\text{« boule verte »}) = \\dfrac{3}{7}$.</li>
                                        </ul>
                                    </div>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 320 300" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:0 auto; font-family:sans-serif;">
<path d="M 50,60 L 70,260 L 250,260 L 270,60" fill="#F7F7F7" stroke="#1A1A1A" stroke-width="3" stroke-linejoin="round"/>
<line x1="40" y1="60" x2="280" y2="60" stroke="#1A1A1A" stroke-width="3"/>
<circle cx="110" cy="100" r="16" fill="#2F7D3C" stroke="#1A1A1A" stroke-width="1.5"/>
<circle cx="170" cy="95" r="16" fill="#2F7D3C" stroke="#1A1A1A" stroke-width="1.5"/>
<circle cx="140" cy="140" r="16" fill="#2F7D3C" stroke="#1A1A1A" stroke-width="1.5"/>
<circle cx="90" cy="180" r="16" fill="#F1C40F" stroke="#1A1A1A" stroke-width="1.5"/>
<circle cx="150" cy="190" r="16" fill="#F1C40F" stroke="#1A1A1A" stroke-width="1.5"/>
<circle cx="200" cy="175" r="16" fill="#F1C40F" stroke="#1A1A1A" stroke-width="1.5"/>
<circle cx="170" cy="225" r="16" fill="#F1C40F" stroke="#1A1A1A" stroke-width="1.5"/>
<text x="160.0" y="285" font-size="14" fill="#1A1A1A" text-anchor="middle">3 boules vertes + 4 boules jaunes</text>
</svg>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PROBequiprobabilite"
                                        onclick="startQuizFromButton('quiz-area-PROBequiprobabilite', '513301')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PROBequiprobabilite"></div>
                                </section>

                                <!-- SECTION : FORMES D'UNE PROBABILITE -->
                                <section class="course-section">
                                    <h2 class="section-title">Exprimer une probabilité sous différentes formes</h2>
                                    <div class="notion-box">
                                        <p>Une probabilité peut s'exprimer sous forme <strong>fractionnaire</strong>, <strong>décimale</strong>, ou de <strong>pourcentage</strong> — exactement comme une fréquence.</p>
                                    </div>
                                    <p><strong>Exemple :</strong> la probabilité d'obtenir « pile » en lançant une pièce équilibrée est $\\dfrac{1}{2} = 0,5 = 50\\%$.</p>
                                    <div class="notion-box">
                                        <p>L'expression <strong>« une chance sur quatre »</strong> signifie qu'il y a $1$ issue favorable parmi $4$ issues équiprobables : elle correspond donc à la probabilité $\\dfrac{1}{4}$ (soit $0,25$, soit $25\\%$).</p>
                                    </div>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style="max-width:280px; display:block; margin:0 auto; font-family:sans-serif;">
<path d="M 150,150 L 150.0,30.0 A 120,120 0 0 1 270.0,150.0 Z" fill="#B5651D" stroke="#1A1A1A" stroke-width="2"/>
<path d="M 150,150 L 270.0,150.0 A 120,120 0 0 1 150.0,270.0 Z" fill="#EAF1F8" stroke="#1A1A1A" stroke-width="2"/>
<path d="M 150,150 L 150.0,270.0 A 120,120 0 0 1 30.0,150.0 Z" fill="#EAF1F8" stroke="#1A1A1A" stroke-width="2"/>
<path d="M 150,150 L 30.0,150.0 A 120,120 0 0 1 150.0,30.0 Z" fill="#EAF1F8" stroke="#1A1A1A" stroke-width="2"/>
<circle cx="150" cy="150" r="120" fill="none" stroke="#1A1A1A" stroke-width="2.5"/>
<polygon points="142,26 158,26 150,44" fill="#1A1A1A"/>
</svg>
                                    </div>
                                    <p class="indent-text">Sur cette roue divisée en $4$ parts égales, la probabilité que la flèche s'arrête sur la part colorée est de $\\dfrac{1}{4}$, c'est-à-dire « une chance sur quatre ».</p>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PROBformes"
                                        onclick="startQuizFromButton('quiz-area-PROBformes', '513401')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PROBformes"></div>
                                </section>

                                <!-- SECTION : REPETER UNE EXPERIENCE ALEATOIRE -->
                                <section class="course-section">
                                    <h2 class="section-title">Répéter une expérience aléatoire</h2>
                                    <div class="notion-box">
                                        <p>On peut estimer la probabilité d'un évènement en <strong>répétant plusieurs fois</strong> une expérience aléatoire, et en enregistrant les résultats dans un tableau d'effectifs et de fréquences. La <strong>fréquence observée</strong> se rapproche alors de la <strong>probabilité théorique</strong> lorsque le nombre de répétitions augmente.</p>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> On lance $50$ fois une pièce, et on obtient $27$ fois « pile » et $23$ fois « face ».
                                        <ul>
                                            <li>Fréquence observée de « pile » : $\\dfrac{27}{50} = 0,54 = 54\\%$.</li>
                                            <li>La probabilité théorique de « pile » est $\\dfrac{1}{2} = 50\\%$.</li>
                                            <li>La fréquence observée ($54\\%$) est proche de la probabilité théorique ($50\\%$) : c'est cohérent avec une pièce équilibrée. Avec davantage de lancers, on s'attend à se rapprocher encore plus de $50\\%$.</li>
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PROBrepeter"
                                        onclick="startQuizFromButton('quiz-area-PROBrepeter', '513501')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PROBrepeter"></div>
                                </section>

                                <!-- SECTION : POUR ALLER PLUS LOIN -->
                                <section class="course-section">
                                    <h2 class="section-title">Pour aller plus loin (culture mathématique)</h2>
                                    <div class="notion-box">
                                        <p>La théorie des probabilités trouve ses origines au <strong>XVII<sup>e</sup> siècle</strong>, dans une correspondance célèbre entre les mathématiciens français <strong>Blaise Pascal</strong> et <strong>Pierre de Fermat</strong>. Un joueur, le chevalier de Méré, leur avait posé des questions sur les jeux de dés et sur le partage équitable des mises lorsqu'une partie est interrompue avant la fin : en cherchant à y répondre, Pascal et Fermat ont posé les bases mathématiques du calcul des probabilités que tu utilises aujourd'hui !</p>
                                    </div>
                                </section>
                            </div>
                        `
    }
};
