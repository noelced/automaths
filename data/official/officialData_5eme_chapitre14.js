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
// ------------------------------------------------------------
// OBJECTIFS : repris strictement du programme officiel fourni
// par l'enseignant (aucun ajout, aucune notion hors-programme
// dans les objectifs — ex. pas de "ratio", qui relève du
// programme de 3e).
// ------------------------------------------------------------
// CONTENU : le coefficient de proportionnalité et le produit en
// croix sont conservés comme méthodes de résolution (demande
// explicite de l'enseignant), même si le produit en croix n'est
// pas un attendu formel de 5e — c'est un outil supplémentaire
// proposé aux élèves, en plus du retour à l'unité et de la
// linéarité qui sont, eux, les automatismes officiels.
// ------------------------------------------------------------
// PÉDAGOGIE : tous les tableaux de données utilisent désormais
// la classe .custom-table du site (plus de tableaux "faits
// maison" en CSS inline). Chaque fois que le texte évoque un
// tableau ("on lit dans le tableau..."), le tableau est
// effectivement affiché, pas seulement décrit. Le vocabulaire et
// les exemples sont volontairement très détaillés et concrets,
// pensés pour des élèves de 12 ans en difficulté.
// Un bouton "Ai-je bien compris ?" est présent pour chaque
// partie H2 et chaque sous-partie H3.

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
                                        <li>Je sais utiliser des proportions, des pourcentages.</li>
                                        <li>Je sais calculer et appliquer des proportions, des pourcentages.</li>
                                        <li>Je sais identifier des situations de proportionnalité dans des contextes concrets (prix, recettes, distances, échelles).</li>
                                        <li>Je sais utiliser un coefficient de proportionnalité dans des contextes concrets (prix unitaire, vitesse moyenne, échelle, etc.).</li>
                                        <li>Je sais représenter une situation de proportionnalité par un tableau ou un graphique.</li>
                                        <li>Je sais reconnaître une situation de proportionnalité à partir d'un tableau ou d'un graphique.</li>
                                        <li>Je sais reconnaître graphiquement qu'un nuage de points est ou n'est pas associé à une situation de proportionnalité.</li>
                                    </ul>
                                </section>

                                <!-- SECTION : RECONNAITRE UNE SITUATION DE PROPORTIONNALITE -->
                                <section class="course-section">
                                    <h2 class="section-title">Reconnaître une situation de proportionnalité</h2>

                                    <div class="notion-box">
                                        <p>Deux grandeurs sont <strong>proportionnelles</strong> quand on passe des valeurs de l'une aux valeurs de l'autre en multipliant <strong>toujours par le même nombre</strong>.</p>
                                        <p>Ce nombre s'appelle le <strong>coefficient de proportionnalité</strong>.</p>
                                    </div>

                                    <p><strong>Exemple :</strong> le prix de tomates selon leur masse.</p>

                                    <div class="table-container" style="margin:10px 0;">
                                        <table class="custom-table">
                                            <tbody>
                                                <tr>
                                                    <th>Masse (kg)</th>
                                                    <td>1</td>
                                                    <td>2</td>
                                                    <td>3</td>
                                                    <td>5</td>
                                                </tr>
                                                <tr>
                                                    <th>Prix (€)</th>
                                                    <td>2,50</td>
                                                    <td>5</td>
                                                    <td>7,50</td>
                                                    <td>12,50</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <p class="indent-text">Pour passer de la masse au prix, on multiplie <strong>toujours</strong> par $2,5$ :</p>
                                    <ul>
                                        <li>$1 \\times 2,5 = 2,5$</li>
                                        <li>$2 \\times 2,5 = 5$</li>
                                        <li>$3 \\times 2,5 = 7,5$</li>
                                        <li>$5 \\times 2,5 = 12,5$</li>
                                    </ul>
                                    <p class="indent-text">C'est toujours le même nombre ($2,5$) : ce tableau est donc un <strong>tableau de proportionnalité</strong>, et $2,5$ est le coefficient de proportionnalité.</p>

                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Vérifier si un tableau est un tableau de proportionnalité
                                        <ol>
                                            <li>Dans chaque colonne, on calcule le quotient <strong>(nombre du bas) $\\div$ (nombre du haut)</strong>.</li>
                                            <li>On calcule ce quotient <strong>toujours dans le même sens</strong> pour toutes les colonnes.</li>
                                            <li>Si tous les quotients trouvés sont <strong>égaux</strong>, alors c'est un tableau de proportionnalité.</li>
                                        </ol>
                                        <p>Avec l'exemple des tomates : $2,5 \\div 1 = 2,5$ ; $\\ 5 \\div 2 = 2,5$ ; $\\ 7,5 \\div 3 = 2,5$ ; $\\ 12,5 \\div 5 = 2,5$.</p>
                                        <p>Les $4$ quotients sont égaux à $2,5$ : c'est bien un tableau de proportionnalité.</p>
                                    </div>

                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Attention :</strong>
                                        <p>il faut toujours diviser dans le <strong>même sens</strong>.</p>
                                        <p>Par exemple, on fait toujours « prix $\\div$ masse ». On ne fait jamais « prix $\\div$ masse » pour une colonne puis « masse $\\div$ prix » pour une autre colonne.</p>
                                    </div>

                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Exemple de situation NON proportionnelle :</strong>
                                        <p>l'aire d'un carré selon son côté.</p>
                                    </div>

                                    <div class="table-container" style="margin:10px 0;">
                                        <table class="custom-table">
                                            <tbody>
                                                <tr>
                                                    <th>Côté (cm)</th>
                                                    <td>2</td>
                                                    <td>4</td>
                                                </tr>
                                                <tr>
                                                    <th>Aire (cm²)</th>
                                                    <td>4</td>
                                                    <td>16</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <p class="indent-text">Un carré de côté $4$ cm est <strong>deux fois</strong> plus grand qu'un carré de côté $2$ cm. Pourtant, son aire ($16$ cm²) n'est pas deux fois plus grande, mais <strong>quatre fois</strong> plus grande ($4 \\times 4 = 16$). Il n'y a pas de coefficient unique : ce n'est <strong>pas</strong> une situation de proportionnalité.</p>

                                    <p><strong>D'autres exemples classiques à connaître :</strong></p>
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
                                        <p>Il existe plusieurs méthodes pour compléter un tableau de proportionnalité.</p>
                                        <p>On peut choisir celle qui est la plus pratique selon les nombres de l'énoncé.</p>
                                    </div>

                                    <h3 class="section-title">Le coefficient de proportionnalité</h3>
                                    <p><strong>Exemple :</strong> $4$ stylos coûtent $6$ €. Combien coûtent $10$ stylos ?</p>

                                    <div class="table-container" style="margin:10px 0;">
                                        <table class="custom-table">
                                            <tbody>
                                                <tr>
                                                    <th>Stylos</th>
                                                    <td>4</td>
                                                    <td>10</td>
                                                </tr>
                                                <tr>
                                                    <th>Prix (€)</th>
                                                    <td>6</td>
                                                    <td>?</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Utiliser le coefficient
                                        <ol>
                                            <li>On cherche le coefficient de proportionnalité : $6 \\div 4 = 1,5$ (c'est le prix d'<strong>un seul</strong> stylo).</li>
                                            <li>On multiplie par ce coefficient pour trouver le prix de $10$ stylos : $10 \\times 1,5 = 15$.</li>
                                            <li>Prix de $10$ stylos : <strong>$15$ €</strong>.</li>
                                        </ol>
                                    </div>

                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PROPcoefficient"
                                        onclick="startQuizFromButton('quiz-area-PROPcoefficient', '514211')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PROPcoefficient"></div>

                                    <h3 class="section-title">Le retour à l'unité</h3>
                                    <p><strong>Exemple :</strong> une recette pour $4$ personnes utilise $300$ g de farine. Quelle quantité de farine pour $6$ personnes ?</p>

                                    <div class="table-container" style="margin:10px 0;">
                                        <table class="custom-table">
                                            <tbody>
                                                <tr>
                                                    <th>Personnes</th>
                                                    <td>4</td>
                                                    <td>1</td>
                                                    <td>6</td>
                                                </tr>
                                                <tr>
                                                    <th>Farine (g)</th>
                                                    <td>300</td>
                                                    <td>?</td>
                                                    <td>?</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Passer par « 1 personne »
                                        <ol>
                                            <li>On cherche d'abord la quantité pour <strong>1 seule</strong> personne : $300 \\div 4 = 75$ g.</li>
                                            <li>On multiplie ensuite par le nombre de personnes voulu : $75 \\times 6 = 450$.</li>
                                            <li>Quantité pour $6$ personnes : <strong>$450$ g</strong>.</li>
                                        </ol>
                                    </div>

                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">💡 Astuce :</strong>
                                        <p>« retour à l'unité » veut simplement dire : on calcule d'abord la valeur pour <strong>1</strong>, avant de calculer la valeur demandée.</p>
                                    </div>

                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PROPretourunite"
                                        onclick="startQuizFromButton('quiz-area-PROPretourunite', '514221')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PROPretourunite"></div>

                                    <h3 class="section-title">La linéarité (multiplicative ou additive)</h3>
                                    <p><strong>Exemple :</strong> une recette pour $4$ personnes utilise $300$ g de farine. Quelle quantité pour $2$ personnes ? Pour $6$ personnes ?</p>

                                    <div class="table-container" style="margin:10px 0;">
                                        <table class="custom-table">
                                            <tbody>
                                                <tr>
                                                    <th>Personnes</th>
                                                    <td>4</td>
                                                    <td>2</td>
                                                    <td>6</td>
                                                </tr>
                                                <tr>
                                                    <th>Farine (g)</th>
                                                    <td>300</td>
                                                    <td>?</td>
                                                    <td>?</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Utiliser des liens entre les colonnes
                                        <p><strong>Pour 2 personnes (linéarité multiplicative) :</strong></p>
                                        <ol>
                                            <li>$2$ personnes, c'est <strong>la moitié</strong> de $4$ personnes.</li>
                                            <li>On prend donc la moitié de la farine : $300 \\div 2 = 150$ g.</li>
                                        </ol>
                                        <p><strong>Pour 6 personnes (linéarité additive) :</strong></p>
                                        <ol>
                                            <li>$6$ personnes, c'est $4$ personnes <strong>+</strong> $2$ personnes.</li>
                                            <li>On additionne donc les quantités de farine : $300 + 150 = 450$ g.</li>
                                        </ol>
                                    </div>

                                    <div class="table-container" style="margin:10px 0;">
                                        <table class="custom-table">
                                            <tbody>
                                                <tr>
                                                    <th>Personnes</th>
                                                    <td>4</td>
                                                    <td>2</td>
                                                    <td>6</td>
                                                </tr>
                                                <tr>
                                                    <th>Farine (g)</th>
                                                    <td>300</td>
                                                    <td>150</td>
                                                    <td>450</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PROPlinearite"
                                        onclick="startQuizFromButton('quiz-area-PROPlinearite', '514231')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PROPlinearite"></div>

                                    <h3 class="section-title">Le produit en croix</h3>
                                    <div class="notion-box">
                                        <p>Le <strong>produit en croix</strong> est une autre méthode, qui fonctionne <strong>toujours</strong>, même quand les nombres ne sont pas pratiques.</p>
                                    </div>

                                    <p><strong>Exemple :</strong> une recette pour $4$ personnes utilise $300$ g de farine. Quelle quantité de farine pour $7$ personnes ?</p>

                                    <div class="table-container" style="margin:10px 0;">
                                        <table class="custom-table">
                                            <tbody>
                                                <tr>
                                                    <th>Personnes</th>
                                                    <td>4</td>
                                                    <td>7</td>
                                                </tr>
                                                <tr>
                                                    <th>Farine (g)</th>
                                                    <td>300</td>
                                                    <td>$x$</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Multiplier en croix, puis diviser
                                        <ol>
                                            <li><span class="text-blue"><strong>On multiplie en diagonale</strong></span> les deux nombres reliés au nombre cherché $x$ : $300 \\times 7 = 2\\,100$.</li>
                                            <li><span class="text-red"><strong>On divise</strong></span> ce résultat par le nombre qui reste dans le tableau : $2\\,100 \\div 4 = 525$.</li>
                                            <li>Il faut donc <strong>$525$ g</strong> de farine pour $7$ personnes.</li>
                                        </ol>
                                    </div>

                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">💡 Astuce :</strong>
                                        <p><span class="text-blue"><strong>Diagonale = multiplication</strong></span> (les deux nombres reliés à $x$).</p>
                                        <p><span class="text-red"><strong>Colonne restante = division</strong></span> (le seul nombre qui n'a pas encore servi).</p>
                                    </div>

                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PROPproduitcroix"
                                        onclick="startQuizFromButton('quiz-area-PROPproduitcroix', '514241')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-PROPproduitcroix"></div>

                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong>
                                        <p>ces différentes méthodes (coefficient, retour à l'unité, linéarité, produit en croix) donnent toujours le <strong>même résultat</strong> !</p>
                                        <p>On choisit celle qui est la plus rapide et la plus facile selon les nombres de l'énoncé.</p>
                                    </div>
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
                                        <p>Un <strong>pourcentage</strong> est une proportion "sur 100". Calculer $t\\%$ d'une quantité, c'est appliquer le coefficient de proportionnalité $\\dfrac{t}{100}$.</p>
                                    </div>

                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Calculer $25\\%$ de $80$ €
                                        <ol>
                                            <li>$25\\%$, c'est $\\dfrac{25}{100} = 0,25$.</li>
                                            <li>On multiplie : $0,25 \\times 80 = 20$.</li>
                                            <li>$25\\%$ de $80$ € $= \\textbf{20 €}$.</li>
                                        </ol>
                                    </div>

                                    <div class="notion-box">
                                        <p><strong>Autre méthode : le tableau avec 100.</strong> On ajoute une colonne « $100$ » dans un tableau de proportionnalité, puis on utilise le produit en croix.</p>
                                    </div>

                                    <div class="table-container" style="margin:10px 0;">
                                        <table class="custom-table">
                                            <tbody>
                                                <tr>
                                                    <th>Pourcentage</th>
                                                    <td>100</td>
                                                    <td>25</td>
                                                </tr>
                                                <tr>
                                                    <th>Quantité (€)</th>
                                                    <td>80</td>
                                                    <td>$x$</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Retrouver $25\\%$ de $80$ € avec le tableau
                                        <ol>
                                            <li>On multiplie en croix : $80 \\times 25 = 2\\,000$.</li>
                                            <li>On divise par le nombre restant : $2\\,000 \\div 100 = 20$.</li>
                                            <li>On retrouve bien <strong>$20$ €</strong>, comme avec l'autre méthode !</li>
                                        </ol>
                                    </div>

                                    <p><strong>Calculer un pourcentage à partir d'un effectif (l'inverse) :</strong></p>
                                    <div class="notion-box">
                                        <p>On peut aussi devoir faire l'inverse : à partir d'un <strong>nombre</strong> parmi un <strong>total</strong>, retrouver le <strong>pourcentage</strong> qu'il représente.</p>
                                    </div>

                                    <p><strong>Exemple :</strong> lors de l'élection des délégués de classe, $4$ élèves se présentent. Il y a $24$ votants au total.</p>

                                    <div class="table-container" style="margin:10px 0;">
                                        <table class="custom-table">
                                            <tbody>
                                                <tr>
                                                    <th>Candidat</th>
                                                    <td>Alexis</td>
                                                    <td>Chloé</td>
                                                    <td>Salma</td>
                                                    <td>Djibril</td>
                                                    <td><strong>Total</strong></td>
                                                </tr>
                                                <tr>
                                                    <th>Voix</th>
                                                    <td>6</td>
                                                    <td>12</td>
                                                    <td>3</td>
                                                    <td>3</td>
                                                    <td><strong>24</strong></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Calculer le pourcentage de voix de Chloé
                                        <ol>
                                            <li>Chloé a obtenu $12$ voix sur $24$ votants.</li>
                                            <li>On calcule : $\\dfrac{12 \\times 100}{24} = \\dfrac{1\\,200}{24} = 50$.</li>
                                            <li>Chloé a obtenu <strong>$50\\%$</strong> des voix.</li>
                                        </ol>
                                    </div>

                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">💡 Astuce :</strong>
                                        <p>pour trouver un pourcentage à partir d'un nombre parmi un total, on calcule toujours : $\\dfrac{\\text{nombre} \\times 100}{\\text{total}}$.</p>
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

                                <!-- SECTION : ECHELLES -->
                                <section class="course-section">
                                    <h2 class="section-title">Utiliser une échelle</h2>
                                    <div class="notion-box">
                                        <p>L'<strong>échelle</strong> d'une carte ou d'un plan est le coefficient de proportionnalité entre une distance mesurée <strong>sur le document</strong> et la distance <strong>réelle</strong> correspondante (dans la même unité).</p>
                                    </div>

                                    <p><strong>Exemple :</strong> sur une carte à l'échelle $1 : 25\\,000$, deux villes sont distantes de $8$ cm. Quelle est la distance réelle ?</p>

                                    <div class="table-container" style="margin:10px 0;">
                                        <table class="custom-table">
                                            <tbody>
                                                <tr>
                                                    <th>Sur la carte (cm)</th>
                                                    <td>1</td>
                                                    <td>8</td>
                                                </tr>
                                                <tr>
                                                    <th>Dans la réalité (cm)</th>
                                                    <td>25 000</td>
                                                    <td>?</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Trouver la distance réelle
                                        <ol>
                                            <li>L'échelle $1 : 25\\,000$ signifie que $1$ cm sur la carte représente $25\\,000$ cm dans la réalité.</li>
                                            <li>On multiplie donc par $25\\,000$ : $8 \\times 25\\,000 = 200\\,000$.</li>
                                            <li>Distance réelle $= 200\\,000$ cm.</li>
                                            <li>On convertit en unité plus pratique : $200\\,000$ cm $= 2\\,000$ m $= 2$ km.</li>
                                        </ol>
                                    </div>

                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-PROPechelles"
                                        onclick="startQuizFromButton('quiz-area-PROPechelles', '514501')">
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
