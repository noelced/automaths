// ============================================================
// data/official/officialData_5eme_chapitre14.js
// Niveau : 5ème — Thème : PROPORTIONNALITÉ, FONCTIONS
// Chapitre 14 : Proportionnalité
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.
// NOTE : les codes des quiz ("btn-check-understanding") sont des
// identifiants prévisionnels (514xxx) à créer/associer dans la
// banque de quiz du site avant mise en ligne.
// Cette version s'appuie notamment sur les « Attendus de fin
// d'année de 5e » (rubrique Organisation et gestion de données,
// fonctions > Résoudre des problèmes de proportionnalité)
// fournis par l'enseignant. Ce chapitre ouvre le thème
// « Proportionnalité, fonctions ».

var chapterData_5eme_14 = {
    themeName: "PROPORTIONNALITÉ, FONCTIONS",
    chapter: {
        id: 14,
        title: "Proportionnalité",
        eleve: "non",
        content: `
                            <div class="course-container">
                                <!-- SECTION : OBJECTIFS -->
                                <section class="course-section">
                                    <p><strong>Objectifs :</strong></p>
                                    <ul>
                                        <li>Je sais identifier une situation de proportionnalité dans un contexte concret (prix, recettes, distances, échelles...)</li>
                                        <li>Je sais utiliser un coefficient de proportionnalité</li>
                                        <li>Je sais mobiliser différentes procédures pour résoudre un problème de proportionnalité</li>
                                        <li>Je sais représenter une situation de proportionnalité par un tableau ou un graphique</li>
                                        <li>Je sais reconnaître une situation de proportionnalité à partir d'un tableau, d'un graphique ou d'un nuage de points</li>
                                        <li>Je sais calculer et appliquer des pourcentages</li>
                                        <li>Je sais partager une quantité selon un ratio donné</li>
                                    </ul>
                                </section>

                                <!-- SECTION : RECONNAITRE UNE SITUATION DE PROPORTIONNALITE -->
                                <section class="course-section">
                                    <h2 class="section-title">Reconnaître une situation de proportionnalité</h2>
                                    <div class="notion-box">
                                        <p>Deux grandeurs sont <strong>proportionnelles</strong> lorsque l'on passe des valeurs de l'une aux valeurs de l'autre en multipliant <strong>toujours par le même nombre</strong>, appelé <strong>coefficient de proportionnalité</strong>.</p>
                                    </div>
                                    <p><strong>Exemple (situation proportionnelle) :</strong> le prix de tomates selon leur masse.</p>
                                    <table style="width:100%; border-collapse: collapse; text-align: center;">
                                        <thead>
                                            <tr>
                                                <th style="border-right: 1px solid black; padding: 8px;">Masse (kg)</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">1</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">2</th>
                                                <th style="border-right: 1px solid black; padding: 8px;">3</th>
                                                <th style="padding: 8px;">5</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 8px;">Prix (€)</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">2,50</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">5</td>
                                                <td style="border-right: 1px solid black; padding: 8px;">7,50</td>
                                                <td style="padding: 8px;">12,50</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br>
                                    <p class="indent-text">On passe toujours de la masse au prix en multipliant par $2,5$ (le coefficient de proportionnalité) : $1 \\times 2,5 = 2,5$ ; $2 \\times 2,5 = 5$ ; $3 \\times 2,5 = 7,5$... Ce tableau est donc un <strong>tableau de proportionnalité</strong>.</p>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Exemple de situation NON proportionnelle :</strong> l'aire d'un carré en fonction de son côté. Un carré de côté $2$ a une aire de $4$, un carré de côté $4$ (deux fois plus grand) a une aire de $16$ (quatre fois plus grande, pas deux fois) : il n'y a pas de coefficient unique.
                                    </div>
                                    <p><strong>D'autres exemples classiques :</strong></p>
                                    <ul>
                                        <li>proportionnels : le côté et le périmètre d'un carré, le diamètre et la longueur d'un cercle, la masse et le prix d'une denrée ;</li>
                                        <li>non proportionnels : le côté et l'aire d'un carré, l'âge et la taille d'une personne.</li>
                                    </ul>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PROPreconnaitre"
                                        onclick="startQuizFromButton('quiz-area-PROPreconnaitre', '514101')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PROPreconnaitre"></div>
                                </section>

                                <!-- SECTION : PROCEDURES DE RESOLUTION -->
                                <section class="course-section">
                                    <h2 class="section-title">Résoudre un problème de proportionnalité</h2>
                                    <div class="notion-box">
                                        <p>Il existe plusieurs méthodes pour compléter un tableau de proportionnalité. On peut choisir celle qui est la plus pratique selon les nombres en jeu.</p>
                                    </div>

                                    <h3 class="section-title">Le coefficient de proportionnalité</h3>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> $4$ stylos coûtent $6$ €. Combien coûtent $10$ stylos ?
                                        <ul>
                                            <li>Coefficient de proportionnalité : $6 \\div 4 = 1,5$ (le prix d'un stylo).</li>
                                            <li>Prix de $10$ stylos : $10 \\times 1,5 = 15$ €.</li>
                                        </ul>
                                    </div>

                                    <h3 class="section-title">Le retour à l'unité</h3>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Une recette pour $4$ personnes utilise $300$ g de farine. Quelle quantité de farine pour $6$ personnes ?
                                        <ul>
                                            <li>On calcule la quantité pour $1$ personne : $300 \\div 4 = 75$ g.</li>
                                            <li>On calcule la quantité pour $6$ personnes : $75 \\times 6 = 450$ g.</li>
                                        </ul>
                                    </div>

                                    <h3 class="section-title">La linéarité (multiplicative ou additive)</h3>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Une recette pour $4$ personnes utilise $300$ g de farine. Quelle quantité pour $2$ personnes ? Pour $6$ personnes ?
                                        <ul>
                                            <li><strong>Linéarité multiplicative :</strong> pour $2$ personnes (moitié de $4$), on prend la moitié : $300 \\div 2 = 150$ g.</li>
                                            <li><strong>Linéarité additive :</strong> pour $6$ personnes ($4 + 2$), on additionne les quantités pour $4$ et pour $2$ personnes : $300 + 150 = 450$ g.</li>
                                        </ul>
                                    </div>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> ces différentes procédures donnent toujours le <strong>même résultat</strong> ! Le tout est de choisir celle qui est la plus rapide selon les nombres de l'énoncé.
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PROPprocedures"
                                        onclick="startQuizFromButton('quiz-area-PROPprocedures', '514201')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PROPprocedures"></div>
                                </section>

                                <!-- SECTION : REPRESENTER ET RECONNAITRE GRAPHIQUEMENT -->
                                <section class="course-section">
                                    <h2 class="section-title">Représenter et reconnaître une situation de proportionnalité</h2>
                                    <div class="notion-box">
                                        <p>Dans un repère, une situation de proportionnalité se représente toujours par des points <strong>alignés avec l'origine</strong> du repère (ou par une droite qui passe par l'origine).</p>
                                    </div>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 690 270" xmlns="http://www.w3.org/2000/svg" style="max-width:640px; display:block; margin:0 auto; font-family:sans-serif;">
<line x1="60" y1="40" x2="60" y2="190" stroke="#1A1A1A" stroke-width="1.5"/><line x1="60" y1="190" x2="210" y2="190" stroke="#1A1A1A" stroke-width="1.5"/><polyline points="60.0,190.0 200.0,50.0" fill="none" stroke="#2E5C8A" stroke-width="2"/><circle cx="81.0" cy="169.0" r="4.5" fill="#2E5C8A"/><circle cx="102.0" cy="148.0" r="4.5" fill="#2E5C8A"/><circle cx="130.0" cy="120.0" r="4.5" fill="#2E5C8A"/><circle cx="158.0" cy="92.0" r="4.5" fill="#2E5C8A"/><circle cx="186.0" cy="64.0" r="4.5" fill="#2E5C8A"/><text x="125.0" y="238" font-size="13" fill="#1A1A1A" text-anchor="middle" font-weight="bold">Proportionnelle</text>
<line x1="280" y1="40" x2="280" y2="190" stroke="#1A1A1A" stroke-width="1.5"/><line x1="280" y1="190" x2="430" y2="190" stroke="#1A1A1A" stroke-width="1.5"/><polyline points="280.0,155.0 420.0,85.0" fill="none" stroke="#2F7D3C" stroke-width="2"/><circle cx="294.0" cy="148.0" r="4.5" fill="#2F7D3C"/><circle cx="322.0" cy="134.0" r="4.5" fill="#2F7D3C"/><circle cx="350.0" cy="120.0" r="4.5" fill="#2F7D3C"/><circle cx="378.0" cy="106.0" r="4.5" fill="#2F7D3C"/><circle cx="406.0" cy="92.0" r="4.5" fill="#2F7D3C"/><text x="345.0" y="238" font-size="13" fill="#1A1A1A" text-anchor="middle" font-weight="bold">Non proportionnelle (affine)</text>
<line x1="500" y1="40" x2="500" y2="190" stroke="#1A1A1A" stroke-width="1.5"/><line x1="500" y1="190" x2="650" y2="190" stroke="#1A1A1A" stroke-width="1.5"/><circle cx="540.7" cy="115.0" r="4.5" fill="#B5651D"/><circle cx="555.4" cy="108.4" r="4.5" fill="#B5651D"/><circle cx="584.1" cy="168.7" r="4.5" fill="#B5651D"/><circle cx="515.5" cy="82.2" r="4.5" fill="#B5651D"/><circle cx="543.0" cy="149.8" r="4.5" fill="#B5651D"/><circle cx="625.5" cy="123.3" r="4.5" fill="#B5651D"/><text x="565.0" y="238" font-size="13" fill="#1A1A1A" text-anchor="middle" font-weight="bold">Aucun lien</text>
</svg>
                                    </div>
                                    <div class="notion-box">
                                        <ul>
                                            <li>Si les points sont alignés <strong>et</strong> que la droite passe par l'origine $(0;0)$ : la situation <strong>est proportionnelle</strong>.</li>
                                            <li>Si les points sont alignés mais que la droite <strong>ne passe pas</strong> par l'origine : la situation n'est <strong>pas proportionnelle</strong> (on parle de situation <strong>affine</strong>, par exemple un tarif avec un forfait de départ).</li>
                                            <li>Si les points ne sont même pas alignés (un <strong>nuage de points</strong> quelconque) : il n'y a <strong>aucun lien de proportionnalité</strong> entre les deux grandeurs.</li>
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PROPgraphique"
                                        onclick="startQuizFromButton('quiz-area-PROPgraphique', '514301')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PROPgraphique"></div>
                                </section>

                                <!-- SECTION : POURCENTAGES -->
                                <section class="course-section">
                                    <h2 class="section-title">Calculer et appliquer un pourcentage</h2>
                                    <div class="notion-box">
                                        <p>Calculer $t\\%$ d'une quantité, c'est appliquer un coefficient de proportionnalité égal à $\\dfrac{t}{100}$.</p>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Calculer $25\\%$ de $80$ €
                                        <ul>
                                            <li>$25\\% = \\dfrac{25}{100} = 0,25$.</li>
                                            <li>$25\\%$ de $80$ € $= 0,25 \\times 80 = 20$ €.</li>
                                        </ul>
                                    </div>
                                    <p><strong>Appliquer une remise ou une augmentation :</strong></p>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <p>Un article à $80$ € affiche $30\\%$ de remise</p>
                                            <p>Remise $= 0,3 \\times 80 = 24$ €</p>
                                            <p>Nouveau prix $= 80 - 24 = 56$ €</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>Un article à $50$ € augmente de $10\\%$</p>
                                            <p>Augmentation $= 0,1 \\times 50 = 5$ €</p>
                                            <p>Nouveau prix $= 50 + 5 = 55$ €</p>
                                        </div>
                                    </div>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> il faut savoir calculer sans réfléchir les pourcentages simples : $50\\%$ (la moitié), $25\\%$ (le quart), $10\\%$ (le dixième).
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PROPpourcentages"
                                        onclick="startQuizFromButton('quiz-area-PROPpourcentages', '514401')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PROPpourcentages"></div>
                                </section>

                                <!-- SECTION : PARTAGER SELON UN RATIO -->
                                <section class="course-section">
                                    <h2 class="section-title">Partager une quantité selon un ratio donné</h2>
                                    <div class="notion-box">
                                        <p>Partager une quantité selon un <strong>ratio</strong> $a : b$, c'est la diviser en $a + b$ parts égales, puis en attribuer $a$ parts à la première partie et $b$ parts à la seconde.</p>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Partager $10$ € selon le ratio $2 : 3$
                                        <ul>
                                            <li>Nombre total de parts : $2 + 3 = 5$.</li>
                                            <li>Valeur d'une part : $10 \\div 5 = 2$ €.</li>
                                            <li>Première partie : $2 \\times 2 = 4$ €. Deuxième partie : $3 \\times 2 = 6$ €.</li>
                                        </ul>
                                    </div>
                                    <div style="text-align:center; margin: 15px 0;">
                                        <svg viewBox="0 0 430 210" xmlns="http://www.w3.org/2000/svg" style="max-width:460px; display:block; margin:0 auto; font-family:sans-serif;">
<text x="215.0" y="30" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">10 € partagés selon le ratio 2 : 3</text>
<rect x="40" y="60" width="140" height="70" fill="#2E5C8A" stroke="white" stroke-width="2"/>
<rect x="180" y="60" width="210" height="70" fill="#B5651D" stroke="white" stroke-width="2"/>
<line x1="110" y1="60" x2="110" y2="130" stroke="white" stroke-width="1.5" stroke-dasharray="3,3"/>
<line x1="180" y1="60" x2="180" y2="130" stroke="white" stroke-width="1.5" stroke-dasharray="3,3"/>
<line x1="250" y1="60" x2="250" y2="130" stroke="white" stroke-width="1.5" stroke-dasharray="3,3"/>
<line x1="320" y1="60" x2="320" y2="130" stroke="white" stroke-width="1.5" stroke-dasharray="3,3"/>
<text x="110.0" y="101.0" font-size="16" fill="white" text-anchor="middle" font-weight="bold">4 €</text>
<text x="285.0" y="101.0" font-size="16" fill="white" text-anchor="middle" font-weight="bold">6 €</text>
<text x="110.0" y="152" font-size="12" fill="#2E5C8A" text-anchor="middle">2 parts</text>
<text x="285.0" y="152" font-size="12" fill="#B5651D" text-anchor="middle">3 parts</text>
<text x="215.0" y="180" font-size="12" fill="#1A1A1A" text-anchor="middle">1 part = 10 € ÷ 5 = 2 €</text>
</svg>
                                    </div>
                                    <p>Autre exemple : pour réaliser $500$ mL de vinaigrette dans le ratio huile : vinaigre $= 3 : 1$, on a $3+1=4$ parts, une part $= 500 \\div 4 = 125$ mL, donc $375$ mL d'huile et $125$ mL de vinaigre.</p>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PROPratio"
                                        onclick="startQuizFromButton('quiz-area-PROPratio', '514501')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PROPratio"></div>
                                </section>

                                <!-- SECTION : ECHELLES -->
                                <section class="course-section">
                                    <h2 class="section-title">Utiliser une échelle</h2>
                                    <div class="notion-box">
                                        <p>L'<strong>échelle</strong> d'une carte ou d'un plan est le coefficient de proportionnalité entre une distance mesurée <strong>sur le document</strong> et la distance <strong>réelle</strong> correspondante (dans la même unité).</p>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Sur une carte à l'échelle $1 : 25\\,000$, deux villes sont distantes de $8$ cm. Quelle est la distance réelle ?
                                        <ul>
                                            <li>L'échelle $1:25\\,000$ signifie que $1$ cm sur la carte représente $25\\,000$ cm dans la réalité.</li>
                                            <li>Distance réelle $= 8 \\times 25\\,000 = 200\\,000$ cm $= 2\\,000$ m $= 2$ km.</li>
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PROPechelles"
                                        onclick="startQuizFromButton('quiz-area-PROPechelles', '514601')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PROPechelles"></div>
                                </section>

                                <!-- SECTION : POUR ALLER PLUS LOIN -->
                                <section class="course-section">
                                    <h2 class="section-title">Pour aller plus loin (culture mathématique)</h2>
                                    <div class="notion-box">
                                        <p>Pendant des siècles, la méthode de référence pour résoudre les problèmes de proportionnalité s'appelait la <strong>règle de trois</strong> : elle a été diffusée en Europe notamment grâce au <em>Liber Abaci</em> (« Livre du calcul »), écrit en $1202$ par le mathématicien italien <strong>Leonardo Fibonacci</strong>, qui a aussi introduit en Europe les chiffres arabes que nous utilisons encore aujourd'hui !</p>
                                    </div>
                                </section>
                            </div>
                        `
    }
};
