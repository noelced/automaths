// ============================================================
// data/official/officialData_3eme_chapitre14.js
// Niveau : 3ème — Thème : ESPACE ET GÉOMÉTRIE
// Chapitre 14 : Espace
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.

var chapterData_3eme_14 = {
    themeName: "ESPACE ET GÉOMÉTRIE",
    chapter: {
        id: 14,
        title: "Espace",
        quiz: { q: "Sur la Terre, comment appelle-t-on les cercles qui passent par les pôles ?", a: "méridiens" },
        eleve: "non",
        content: `
                            <div class="course-container">
                                <!-- OBJECTIFS -->
                                <section class="course-section">
                                    <h2 class="section-title">Objectifs</h2>
                                    <ul>
                                        <li>Je sais représenter des solides en perspective cavalière ; selon différentes vues (face, dessus...) et tracer leurs patrons</li>
                                        <li>Je sais tracer et déterminer les longueurs des sections planes des solides.</li>
                                        <li>Je sais me repérer sur une sphère</li>
                                        <li>Je connais le vocabulaire relatif à la sphère</li>
                                    </ul>
                                </section>

                                <!-- SECTION I : VOCABULAIRE ET VISUALISATION -->
                                <section class="course-section">
                                    <h2 class="section-title">Rappels : Vocabulaire et visualisation des solides</h2>
                                    <div class="notion-box">
                                        <p>À l’aide du module 3D de Géogébra, réaliser les figures suivantes :</p>
                                        <img src="images/chap14_geogebra_solides.png" alt="Interface Géogébra 3D pour la création de solides" style="max-width: 100%; margin: 10px 0;">
                                    </div>

                                    <ul>
                                        <li>Un <strong style="color: var(--primary);">cube</strong> de $4\\text{ cm}$ d’arête.</li>
                                    </ul>
                                    <img src="images/chap14_cube.png" alt="Représentation d'un cube" style="max-width: 100%; margin: 10px 0;">

                                    <ul>
                                        <li>Un <strong style="color: var(--primary);">parallélépipède rectangle (pavé droit)</strong> de $5\\text{ cm}$ de longueur, $3\\text{ cm}$ de largeur et $4\\text{ cm}$ de hauteur.</li>
                                    </ul>
                                    <img src="images/chap14_pave_droit.png" alt="Représentation d'un pavé droit" style="max-width: 100%; margin: 10px 0;">

                                    <div class="notion-box">
                                        <p>Un <strong style="color: var(--primary);">prisme droit</strong> ayant pour base un triangle équilatéral de $3\\text{ cm}$ de côté et de hauteur $4\\text{ cm}$.</p>
                                    </div>
                                    <img src="images/chap14_prisme_droit.png" alt="Représentation d'un prisme droit" style="max-width: 100%; margin: 10px 0;">

                                    <ul>
                                        <li>Un <strong style="color: var(--primary);">cylindre</strong> de rayon $2\\text{ cm}$ et de hauteur $4\\text{ cm}$.</li>
                                    </ul>
                                    <img src="images/chap14_cylindre.png" alt="Représentation d'un cylindre" style="max-width: 100%; margin: 10px 0;">

                                    <ul>
                                        <li>Une <strong style="color: var(--primary);">pyramide régulière</strong> à base triangulaire d’arête $3\\text{ cm}$ et de hauteur $4\\text{ cm}$.</li>
                                    </ul>
                                    <img src="images/chap14_pyramide.png" alt="Représentation d'une pyramide" style="max-width: 100%; margin: 10px 0;">

                                    <ul>
                                        <li>Un <strong style="color: var(--primary);">cône de révolution</strong> dont le rayon de base est égal à $1\\text{ cm}$ et de hauteur $4\\text{ cm}$.</li>
                                    </ul>
                                    <img src="images/chap14_cone.png" alt="Représentation d'un cône de révolution" style="max-width: 100%; margin: 10px 0;">

                                    <ul>
                                        <li>Une <strong style="color: var(--primary);">sphère</strong> de rayon $3\\text{ cm}$.</li>
                                    </ul>
                                    <img src="images/chap14_sphere.png" alt="Représentation d'une sphère" style="max-width: 100%; margin: 10px 0;">

                                    <button class="btn-check-understanding" data-quiz-target="quiz-area-solides" onclick="startQuizFromButton('quiz-area-solides', 14)">Ai-je bien compris ?</button>
                                    <div id="quiz-area-solides"></div>
                                </section>

                                <!-- SECTION II : PATRONS -->
                                <section class="course-section">
                                    <h2 class="section-title">Patrons</h2>
                                    <ol type="a">
                                        <li>Toujours à l’aide de Géogébra, utilisez la commande patron pour visualiser et reproduire le patron du pavé droit, de la pyramide à base triangulaire et du prisme droit. Dessinez les ci-dessous à main levée et codez les figures.</li>
                                        <li>Dessinez à main levée le patron du cylindre que Géogébra ne parvient pas à tracer. Précisez les longueurs sur le schéma.</li>
                                    </ol>
                                </section>

                                <!-- SECTION III : SECTIONS -->
                                <section class="course-section">
                                    <h2 class="section-title">Sections</h2>
                                    <div class="notion-box">
                                        <p>À l’aide des fichiers dans votre espace classe (dossiers Chapitre 14  Géogébra), représentez :</p>
                                    </div>
                                    <ul>
                                        <li>La section d’un pavé droit par un plan parallèle à une face <em style="font-size:0.9rem;">(qui reste identique à cette face)</em></li>
                                        <li>La section d’un pavé droit par un plan parallèle à une arête <em style="font-size:0.9rem;">(qui est un rectangle)</em></li>
                                        <li>La section d’un cylindre par un plan parallèle à la base <em style="font-size:0.9rem;">(qui est une réduction de la base)</em></li>
                                        <li>La section d’un cylindre par un plan parallèle à l’axe de révolution <em style="font-size:0.9rem;">(qui est un rectangle)</em></li>
                                        <li>La section d’une pyramide par un plan à la base <em style="font-size:0.9rem;">(qui est une réduction de la base)</em></li>
                                        <li>La section d’un cône par un plan parallèle à la base <em style="font-size:0.9rem;">(qui est une réduction de la base)</em></li>
                                    </ul>
                                </section>

                                <!-- SECTION IV : LA SPHÈRE -->
                                <section class="course-section">
                                    <h2 class="section-title">La sphère : Vocabulaire</h2>
                                    <img src="images/chap14_sphere_vocab.png" alt="Schéma de la sphère avec ses éléments" style="max-width: 100%; margin: 10px 0;">
                                    
                                    <div class="notion-box">
                                        <p>Soit $O$ un point de l’espace.<br />
                                        On appelle <strong>sphère</strong> de centre $O$ et de rayon $R$ l’ensemble de tous les points de l’espace qui sont situés à une distance $R$ du point $O$.</p>
                                    </div>

                                    <p><strong style="color: var(--secondary);">Remarques :</strong></p>
                                    <ul>
                                        <li>Les segments $[AB]$, $[CD]$ et $[EF]$ sont des diamètres de la sphère. On dit que les points $A$ et $B$ sont diamétralement opposés.</li>
                                        <li>Un grand cercle d’une sphère de centre $O$ et de rayon $R$ est un cercle, également de centre $O$ et de rayon $R$.</li>
                                    </ul>

                                    <h3 class="section-title">Boule</h3>
                                    <div class="notion-box" style="border-left-color: var(--secondary);">
                                        <p>Soit $O$ un point de l’espace.<br />
                                        On appelle <strong>boule</strong> de centre $O$ et de rayon $R$ l’ensemble de tous les points de l’espace qui sont situés à une distance du point $O$ inférieure ou égale à $R$.</p>
                                    </div>
                                                    <button class="btn-check-understanding" data-quiz-target="quiz-area-sphere" onclick="startQuizFromButton('quiz-area-sphere', 16)">Ai-je bien compris ?</button>
                                    <div id="quiz-area-sphere"></div>
                                </section>

                                <!-- SECTION V : REPÉRAGE DANS L'ESPACE -->
                                <section class="course-section">
                                    <h2 class="section-title">Repérage dans l’espace</h2>
                                    
                                    <h3 class="section-title">Repérage dans un parallélépipède rectangle (Rappel de 4ème)</h3>
                                    <img src="images/chap14_repere_3d.png" alt="Représentation d'un repère dans l'espace avec un pavé droit" style="max-width: 100%; margin: 10px 0;">
                                    
                                    <div class="notion-box">
                                        <p><em style="font-size: 0.9rem;">Consigne Géogébra : Placer les points suivants :</em></p>
                                        <p>$A(0 ; 0 ; 0)$ | $B(0 ; 10 ; 0)$ | $C(4 ; 10 ; 0)$ | $D(4 ; 0 ; 0)$</p>
                                        <p>Formez un polygone avec ces quatre points. Allez sur la vue 3D et utilisez la commande extrusion prisme de hauteur $5$.</p>
                                    </div>

                                    <p>En manipulant le solide, notez les coordonnées des sommets :</p>
                                    <div class="notion-box">
                                        <p>$A( ; ; )$ | $B( ; ; )$ | $C( ; ; )$ | $D( ; ; )$</p>
                                        <p>$E( ; ; )$ | $F( ; ; )$ | $G( ; ; )$ | $H( ; ; )$</p>
                                    </div>

                                    <p>Placez le point $M$ milieu de $[GH]$ et notez ses coordonnées : $M( ; ; )$</p>
                                    <p><em style="font-size: 0.8rem; color: var(--text-muted);">Remarque : on peut imaginer une section bien choisie pour mieux voir la coordonnée recherchée.</em></p>
                                    <p>Placez le point $S$ milieu de la face $BCHF$ et notez ses coordonnées : $S( ; ; )$</p>

                                    <button class="btn-check-understanding" data-quiz-target="quiz-area-repere" onclick="startQuizFromButton('quiz-area-repere', 17)">Ai-je bien compris ?</button>
                                    <div id="quiz-area-repere"></div>
                                </section>

                                <!-- SECTION VI : LA SPHÈRE ET LA TERRE -->
                                <section class="course-section">
                                    <h2 class="section-title">Repérage sur une sphère</h2>
                                    <img src="images/chap14_sphere_repere.png" alt="Schéma de la Terre montrant longitude et latitude" style="max-width: 100%; margin: 10px 0;">
                                    
                                    <p>Sur une sphère, il est plus simple de se repérer avec deux angles qu’avec trois coordonnées. Pour la Terre, ces angles sont appelés <strong style="color: var(--primary);">longitude</strong> et <strong style="color: var(--primary);">latitude</strong>.</p>

                                    <div class="notion-box">
                                        <p><strong style="color: var(--secondary);">Les cercles imaginaires :</strong></p>
                                        <ul style="margin-bottom: 0;">
                                            <li>Les <strong style="text-decoration: underline;">méridiens</strong> qui passent par les deux pôles. Tous les points d’un même méridien ont la même <strong style="text-decoration: underline;">longitude</strong>.</li>
                                            <li>Les <strong style="text-decoration: underline;">parallèles</strong> qui sont tous parallèles à l’équateur. Tous les points d’un même parallèle ont la même <strong style="text-decoration: underline;">latitude</strong>.</li>
                                        </ul>
                                    </div>

                                    <h3 class="section-title">Courbes de niveau</h3>
                                    <p>Une <strong style="color: var(--primary);">courbe de niveau</strong> est en cartographie, une ligne formée par les points du relief situés à la même <a href="https://fr.wikipedia.org/wiki/Altitude" target="_blank" style="color: inherit;">altitude</a>.</p>
                                    <img src="images/chap14_courbes_niveau.png" alt="Exemple de courbes de niveau sur une montagne" style="max-width: 100%; margin: 10px 0;">
                                    
                                    <div class="notion-box" style="border-left-color: var(--secondary);">
                                        <p>En pratique, on réalise la section de la montagne par des plans horizontaux séparés par la même altitude (Equidistance).</p>
                                    </div>

                                    <button class="btn-check-understanding" data-quiz-target="quiz-area-sphere_repere" onclick="startQuizFromButton('quiz-area-sphere_repere', 18)">Ai-je bien compris ?</button>
                                    <div id="quiz-area-sphere_repere"></div>
                                </section>
                            </div>
                        `
    }
};
