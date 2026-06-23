// ============================================================
// data/official/officialData_3eme_chapitre9.js
// Niveau : 3ème — Thème : GRANDEURS ET MESURES
// Chapitre 9 : Grandeurs et mesures
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.

var chapterData_3eme_9 = {
    themeName: "GRANDEURS ET MESURES",
    chapter: {
        id: 9,
        title: "Grandeurs et mesures",
        quiz: { q: "Convertir 2h 30min en secondes", a: "9000" },
        eleve: "non",
        content: `
        <div class="course-container">
            <!-- SECTION : OBJECTIFS -->
            <section class="course-section">
                <h2 class="section-title">Objectifs</h2>
                <ul>
                    <li>Je sais convertir des grandeurs composées</li>
                    <li>Je sais mener des calculs sur des grandeurs composées et exprimer les résultats dans les unités adaptées.</li>
                    <li>Je sais calculer le volume d’une boule</li>
                    <li>Je sais calculer le volume d’assemblages de solides</li>
                    <li>Je connais l’effet des agrandissements et réductions sur les grandeurs (longueurs, aires, et volumes)</li>
                </ul>
            </section>

            <!-- SECTION : GRANDEURS SIMPLES -->
            <section class="course-section">
                <h2 class="section-title">Grandeurs simples et conversion d’unités</h2>
                <p><strong style="color: var(--primary);">💡 Méthode :</strong> On doit placer le chiffre unité du nombre dans la colonne de l’unité indiquée. Puis on place les autres chiffres (un par colonne).</p>
                
                <!-- IMAGE : Tableau de conversion des grandeurs simples -->
                <div class="notion-box">
                    <p>La démarche est la même pour la plupart des grandeurs simples que tu vas rencontrer à l’exception des durées.</p>
                </div>

                <!-- IMAGE : Exemple de conversion de durée -->
                <p><strong>Exemples :</strong></p>
                <ul>
                    <li>13 heures représentent : $13 \\times 60 \\text{ (min)} \\times 60 \\text{ (s)} = 46800 \\text{ s}$</li>
                    <li>$6890 \\text{ s}$ équivaut à $6890 = 144 \\times 60 + 50$ donc $144 \\text{ min}$ et $50 \\text{ sec}$</li>
                </ul>
                <p>$= 2 \\times 60 \\text{ min} + 24 \\text{ min} + 50 \\text{ sec} = 2	ext{h } 24	ext{min } 50	ext{sec}$</p>

                <!-- IMAGE : Tableau de conversion des unités de temps -->
                <button class="btn-check-understanding" data-quiz-target="quiz-area-conversions" onclick="startQuizFromButton('quiz-area-conversions', 10)">Ai-je bien compris ?</button>
                <div id="quiz-area-conversions"></div>
            </section>

            <!-- SECTION : PÉRIMÈTRE -->
            <section class="course-section">
                <h2 class="section-title">Le périmètre d’une figure</h2>
                <p>Le périmètre représente la longueur du tour de la figure, c’est donc une grandeur « simple ».</p>
                
                <div class="notion-box">
                    <strong style="color: var(--secondary);">📏 À connaître par cœur</strong><br>
                    Pour la calculer on distingue deux cas :
                    <ul>
                        <li><strong>Périmètre d’un polygone :</strong> il suffit d’effectuer la somme de ses côtés.</li>
                        <li><strong>Périmètre du cercle :</strong> on applique une formule $P = 2\\pi r$ ou $P = \\pi d$</li>
                    </ul>
                    <p><small>avec $r = \\text{rayon}$ et $d = \\text{diamètre}$</small></p>
                </div>

                <!-- IMAGE : Figure complexe avec périmètre -->
                <p>Lorsque la figure est complexe on la découpe en morceaux plus simples et on additionne le tout !</p>
                <p>Exemple de calcul pour une figure composée :</p>
                <blockquote>
                    Soit $P \\approx 6,28 + 10,5 + 4,72 \\approx 21,5 \\text{ cm}$
                </blockquote>

                <button class="btn-check-understanding" data-quiz-target="quiz-area-perimetre" onclick="startQuizFromButton('quiz-area-perimetre', 11)">Ai-je bien compris ?</button>
                <div id="quiz-area-perimetre"></div>
            </section>

            <!-- SECTION : GRANDEUR PRODUIT -->
            <section class="course-section">
                <h2 class="section-title">Grandeur produit</h2>
                <p>Une grandeur produit est obtenue en multipliant deux grandeurs.</p>
                <div class="notion-box">
                    <strong>Exemples :</strong>
                    <ul>
                        <li>Une aire : $1 \\text{ m}^2 = 1\\text{m} \\times 1\\text{m}$</li>
                        <li>Une énergie électrique (kilowattheure) : $1 \\text{ kWh} = 1\\text{ kW} \\times 1\\text{ h}$</li>
                        <li>Un temps de travail (Homme-jour) : $\\text{nombre d'hommes} \\times \\text{jours de travail}$</li>
                    </ul>
                </div>

                <p><strong>Exemple de conversion :</strong> convertir $15 \\text{ kWh}$ en $	ext{Ws}$</p>
                <p>$15 \\text{ kW} = 15\\,000 \\text{ W}$ et $1 \\text{ h} = 3600 \\text{ s}$ <br> Donc $15 \\text{ kWh} = 15\\,000 \\times 3600 = 54\\,000\\,000 \\text{ Ws}$</p>

                <div class="notion-box" style="border-left-color: var(--secondary);">
                    <strong style="color: var(--secondary);">💡 MÉTHODE :</strong> Pour retrouver une grandeur simple connaissant une grandeur produit, il suffit de poser la multiplication à trou et de la transformer en division.
                    <br><br>
                    <em>Exemple :</em> Un foyer a consommé $34 \\text{ kWh}$ sur un total de $20 \\text{ heures}$. Quelle est la puissance en $\\text{kW}$ ? <br>
                    $34 \\text{ kWh} = ?\\text{ kW} \\times 20 \\text{ h} \\implies 34 \\div 20 = 1,7 \\text{ kW}$
                </div>

                <h3 class="section-title">Cas particulier : Les Aires</h3>
                <p>L’unité d’une aire est le $\\text{m}^2$, elle est donc formée par le produit de deux longueurs.</p>
                <div class="notion-box">
                    <strong>⚠️ Attention à la cohérence :</strong> On confond souvent les formules du périmètre et de l'aire.<br>
                    • Périmètre (longueur) : $2\\pi r$ <br>
                    • Aire (surface) : $\\pi r^2$
                </div>

                <h3 class="section-title">Cas particulier : Les Volumes</h3>
                <!-- IMAGE : Schéma volume -->
                <div class="notion-box">
                    <strong>Chaque formule de volume (en $\\text{m}^3$) doit comporter trois longueurs qui se multiplient.</strong>
                </div>

                <button class="btn-check-understanding" data-quiz-target="quiz-area-produit" onclick="startQuizFromButton('quiz-area-produit', 12)">Ai-je bien compris ?</button>
                <div id="quiz-area-produit"></div>
            </section>

            <!-- SECTION : GRANDEUR QUOTIENT -->
            <section class="course-section">
                <h2 class="section-title">Grandeur quotient</h2>
                <p>Une grandeur quotient est obtenue en divisant deux grandeurs.</p>
                <ul>
                    <li>Vitesse moyenne : $\\text{v} = \\frac{\\text{distance}}{\\text{temps}}$</li>
                    <li>Débit : $\\text{débit} = \\frac{\\text{volume}}{\\text{temps}}$</li>
                    <li>Densité de population : $\\text{hab/km}^2$</li>
                </ul>

                <div class="notion-box">
                    <strong>💡 MÉTHODE :</strong> Pour calculer une grandeur simple à partir d'un quotient, utilisez un tableau de proportionnalité en utilisant les unités les plus petites.
                </div>

                                <!-- TABLEAU DE PROPORTIONNALITÉ -->
                <p>Exemple : si j’ai une fuite d’eau de $15\\text{ L/s}$ pendant $20\\text{ min}$, combien d'eau ai-je perdue (en $\\text{m}^3$) ?</p>
                <div class="notion-box">
                    <p>Conversion préalable : <br>
                    $1\\text{ m}^3 = 1000\\text{ L}$ <br>
                    $1\\text{ min} = 60\\text{ s}$</p>
                </div>

                <table style="width:100%; border-collapse: collapse; margin: 1em 0;">
                    <thead>
                        <tr style="background-color: #f2f2f2;">
                            <th style="border: 1px solid #ccc; padding: 8px;">L (Litres)</th>
                            <th style="border: 1px solid #ccc; padding: 8px;">15</th>
                            <th style="border: 1px solid #ccc; padding: 8px;">V (Volume)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="border: 1px solid #ccc; padding: 8px;">s (secondes)</td>
                            <td style="border: 1px solid #ccc; padding: 8px;">1</td>
                            <td style="border: 1px solid #ccc; padding: 8px;">$60 \\times 20 = 120$</td>
                        </tr>
                    </tbody>
                </table>

                <p>Calcul du volume : $V = 120 \\times 15 \\div 1 = 1800\\text{ L}$, soit $1,8\\text{ m}^3$.</p>
                <p><strong style="color: #d9534f;">⚠️ Attention :</strong> Il faut toujours convertir les unités pour qu'elles soient cohérentes avant de calculer.</p>

                <button class="btn-check-understanding" data-quiz-target="quiz-area-quotient" onclick="startQuizFromButton('quiz-area-quotient', 13)">Ai-je bien compris ?</button>
                <div id="quiz-area-quotient"></div>
            </section>

            <!-- SECTION : EFFET DES TRANSFORMATIONS -->
            <section class="course-section">
                <h2 class="section-title">Effet des transformations sur les grandeurs</h2>
                <p><strong style="color: var(--primary);">Définition :</strong> Agrandir ou réduire une figure, c’est construire une figure de même forme en multipliant toutes les longueurs par un nombre $k$ strictement positif.</p>

                <div class="notion-box">
                    <strong style="color: var(--secondary);">📏 Propriété : Effet sur les grandeurs</strong>
                    <p>Si le rapport d'agrandissement ou de réduction est $k$ :</p>
                    <ul>
                        <li>Les <strong>longueurs</strong> sont multipliées par $k$</li>
                        <li>Les <strong>mesures des angles</strong> sont conservées</li>
                        <li>Les <strong>aires</strong> sont multipliées par $k^2$</li>
                        <li>Les <strong>volumes</strong> sont multipliés par $k^3$</li>
                    </ul>
                </div>

                <button class="btn-check-understanding" data-quiz-target="quiz-area-transformations" onclick="startQuizFromButton('quiz-area-transformations', 14)">Ai-je bien compris ?</button>
                <div id="quiz-area-transformations"></div>
            </section>
        </div>
    `
    }
};
