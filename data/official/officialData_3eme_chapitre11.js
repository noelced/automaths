// ============================================================
// data/official/officialData_3eme_chapitre11.js
// Niveau : 3ème — Thème : ESPACE ET GÉOMÉTRIE
// Chapitre 11 : Triangles et parallèles
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.

var chapterData_3eme_11 = {
    themeName: "ESPACE ET GÉOMÉTRIE",
    chapter: {
        id: 11,
        title: "Triangles et parallèles",
        quiz: { q: "Si $\\frac{AM}{AB} = \\frac{AN}{AC}$, les droites (MN) et (BC) sont-elles parallèles ?", a: "oui" },
        eleve: "non",
        content: `
                <div class="course-container">
                    <!-- OBJECTIFS -->
                    <section class="course-section">
                        <h2 class="section-title">Objectifs</h2>
                        <ul>
                            <li>Je sais démontrer que deux triangles sont semblables et en déduire des valeurs de longueurs ou d’angles</li>
                            <li>Je sais calculer une longueur dans une configuration de Thalès</li>
                            <li>Je sais démontrer que deux droites sont parallèles en utilisant la réciproque du théorème de Thalès</li>
                        </ul>
                    </section>

                    <!-- SECTION I : TRIANGLES SEMBLABLES -->
                    <section class="course-section">
                        <h2 class="section-title">Triangles semblables</h2>
                        <p>Deux triangles sont semblables s’ils ont la même « forme » mais pas forcément la même « taille ».</p>
                        
                        <h3 class="section-title">Définition</h3>
                        <p>On appelle triangles semblables des triangles qui ont des angles deux à deux de même mesure.</p>

                        <div class="notion-box">
                            <p><u style="color: var(--primary);">Exemple :</u> Les triangles ABC et DEF sont semblables, en effet :</p>
                            <p>(image ici)</p>
                            <p><strong>Sommets homologues</strong> (image ici)</p>
                        </div>

                        <p><u style="color: var(--secondary);">Vocabulaire :</u> Lorsque deux triangles sont semblables on dit que leurs angles de même mesure sont homologues. De même les sommets ou les côtés opposés aux sommets peuvent être qualifiés d’homologues.</p>
                        
                        <p><strong>Angles homologues</strong></p>
                        <p>Dans notre exemple, on peut dire que :</p>
                        <ul>
                            <li>L’angle $$\\widehat{BAC}$$ est homologue à l’angle $$\\widehat{EDF}$$</li>
                            <li>Le sommet B est homologue au sommet F</li>
                            <li>Le côté [AC] est homologue au côté [DE]</li>
                        </ul>

                        <div class="notion-box">
                            <p><strong>En pratique :</strong></p>
                            <p>Pour montrer que deux triangles sont semblables, il suffit de vérifier que deux couples d’angles sont égaux deux à deux. En effet, d’après la règle de la somme des 3 angles égale à $180^\\circ$, le dernier couple d’angles le sera aussi obligatoirement.</p>
                        </div>

                        <h3 class="section-title">Propriétés</h3>
                        <p>Si deux triangles sont semblables, alors les longueurs de leurs côtés sont deux à deux proportionnelles.</p>
                        <p><u style="color: var(--secondary);">Remarque :</u> les côtés proportionnels sont ceux qui sont opposés aux angles égaux.</p>
                        
                        <p>(image ici)</p>
                        <p>Ici, ABC et DEF sont semblables. Les côtés [AB], [AC] et [BC] sont proportionnels respectivement aux côtés [DF], [DE] et [EF].</p>
                        <p>On a : $$\\frac{DF}{AB} = \\frac{DE}{AC} = \\frac{EF}{BC} = 1,5$$</p>
                        <p>Ce qui revient à dire que $$EF = 1,5 \\times BC$$, $$FD = 1,5 \\times BA$$ et $$ED = 1,5 \\times AC$$</p>
                        <p>Le grand triangle DEF est alors un <u>agrandissement</u> du petit ABC, et le petit est une <u>réduction</u> du grand. Le coefficient de proportionnalité est le coefficient d’aggrandissement (si $>1$) ou de réduction (si $<1$).</p>

                        <div class="notion-box" style="border-left-color: var(--secondary);">
                            <p><strong>METHODE : Ce que je dois savoir faire en exercice</strong></p>
                            <p><u>Exemple :</u></p>
                            <p>1. Prouver que les triangles ABC et DEF sont des triangles semblables.</p>
                            <p><em>D’après les codages</em> $$\\widehat{FDE} = \\widehat{BAC}$$</p>
                            <p><em>La somme des angles d’un triangle est égale à $180^\\circ$</em></p>
                            <p><em>Donc</em> $$\\widehat{EFD} = 180 - 90 - \\widehat{FDE}$$</p>
                            <p><em>De même</em> $$\\widehat{CBA} = 180 - 90 - \\widehat{BAC} = \\widehat{EFD}$$</p>
                            <p><em>Les 3 angles des triangles sont de même mesure donc ABC et DEF sont semblables.</em></p>
                            <br>
                            <p>2. En déduire les longueurs CB et AB.</p>
                            <p><em>Comme les deux triangles sont semblables, les longueurs de leurs côtés sont proportionnelles.</em></p>
                            <p><em>On voit que ED est homologue à CA donc $$ED \\times k = CA$$ or $$8 \\times k = 1,6 \\implies k = 1,6 \\div 8 = 0,2$$</em></p>
                            <p><em>BC est homologue à EF donc $$BC = EF \\times k = 6 \\times 0,2 = 1,2$$</em></p>
                            <p><em>BA est homologue à FD donc $$BA = FD \\times k = 10 \\times 0,2 = 2$$</em></p>
                        </div>

                        <button class="btn-check-understanding" data-quiz-target="quiz-area-semblables" onclick="startQuizFromButton('quiz-area-semblables', 13)">Ai-je bien compris ?</button>
                        <div id="quiz-area-semblables"></div>
                    </section>

                    <!-- SECTION II : THÉORÈME DE THALÈS -->
                    <section class="course-section">
                        <h2 class="section-title">Cas particulier : Théorème de Thalès</h2>
                        
                        <h3 class="section-title">Utilité et domaine d’application</h3>
                        <div class="notion-box">
                            <p>Le théorème de Thalès sert à calculer des longueurs dans un triangle (ou une forme papillon) contenant deux droites parallèles (Configuration de triangles semblables).</p>
                            <p>De plus on a besoin de connaître 3 longueurs minimum : deux qui nous donneront le rapport de Thalès (proportionnalité) et celle qui est liée à la longueur cherchée.</p>
                        </div>

                        <h3 class="section-title">Situations de Thalès</h3>
                        <p>On peut distinguer deux cas qui se résolvent de la même manière : La configuration des triangles emboîtés et la configuration « papillon ».</p>
                        <p>Dans les deux cas les triangles AMN et ABC sont semblables avec M homologue à B, et N homologue à C.</p>
                        <p>(image ici)</p>

                        <div class="notion-box">
                            <p>Utilisant les propriétés des angles vues en 5ème :</p>
                            <p>$$\\widehat{ADE} = \\widehat{GDB}$$ car ils sont opposés par le sommet.</p>
                            <p>$$\\widehat{GDB} = \\widehat{ABC}$$ car ce sont des angles alternes internes.</p>
                            <p>Donc $$\\widehat{ADE} = \\widehat{ABC}$$</p>
                            <p>De même de l’autre côté de la figure $$\\widehat{AED} = \\widehat{HEC} = \\widehat{ACB}$$ $\\implies$ donc les triangles ADE et ABC ont leurs trois angles égaux, ils sont semblables.</p>
                        </div>

                        <div class="notion-box" style="border-left-color: var(--secondary);">
                            <p><strong>Dans la configuration papillon :</strong></p>
                            <p>Comme (BC) // (NM), la droite (d) est sécante aux deux parallèles donc les angles $$\\widehat{B}$$ et $$\\widehat{M}$$ sont alternes internes. On a $$\\widehat{B} = \\widehat{M}$$. De même avec (d’) on aura $$\\widehat{C} = \\widehat{N}$$ car ils sont alternes internes.</p>
                            <p><u>Remarque :</u> pour repérer les côtés homologues il faut regarder les angles égaux. [AM] est homologue à [AB] pas à [AC] !!!</p>
                                                <p><u style="color: var(--secondary);">Remarque 2 :</u> On peut aussi se ramener à la configuration des triangles emboîtés en effectuant une symétrie centrale de centre A pour le triangle AMN, de cette manière on remarque que le côté [AM] se situe sur la droite (AB) et pas (AC).</p>
                        </div>

                        <h3 class="section-title">Théorème de Thalès</h3>
                        <p><em style="color: var(--primary);">Ce qui signifie que les triangles ABC et AMN sont semblables.</em></p>
                        <p>Si deux droites (CN) et (BM) sont sécantes en A et telles que les deux droites (BC) et (MN) sont parallèles,</p>
                        <p><em style="color: var(--primary);">Ce qui signifie que les longueurs des deux triangles sont deux à deux proportionnelles.</em></p>
                        
                        <div class="notion-box">
                            <p><strong>Alors :</strong> $$\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}$$</p>
                            <p><u style="color: var(--secondary);">Remarque :</u> pour bien écrire la relation de proportionnalité il faut penser à vérifier les correspondances suivantes :</p>
                            <ul style="display: flex; justify-content: space-around; list-style: none; padding: 0;">
                                <li>Triangle AMN</li>
                                <li>Triangle ABC</li>
                            </ul>
                            <p>Côtés homologues (opposés à A) | Côtés homologues (Opposés à N et C) | Côtés homologues (Opposés à M et B)</p>
                        </div>

                        <div class="notion-box" style="border-left-color: var(--secondary);">
                            <p><strong>METHODE : Ce que je dois savoir faire en exercice</strong></p>
                            <p><u style="color: var(--primary);">Exemple :</u> Calculez AC sachant que (BC) // (MN) ; AB = 5m ; AN = 6 m ; AM = 15m.</p>
                            <p><em style="font-size: 0.9rem;">Les droites (CN) et (BM) sont sécantes en A. (BC) et (MN) sont parallèles.</em></p>
                            <blockquote>
                                <p><em style="color: var(--primary);">D’après le Théorème de Thalès on a :</em> $$\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}$$</p>
                            </blockquote>
                            <p><em style="color: var(--primary);">Donc :</em> $$\\frac{15}{5} = \\frac{6}{AC}$$ <br>
                            J’utilise le produit en croix : $$AC = \\frac{6 \\times 5}{15} = \\frac{30}{15} = 2\\text{m}$$</p>
                        </div>

                        <button class="btn-check-understanding" data-quiz-target="quiz-area-thalès" onclick="startQuizFromButton('quiz-area-thalès', 14)">Ai-je bien compris ?</button>
                        <div id="quiz-area-thalès"></div>
                    </section>

                    <!-- SECTION III : RÉCIPROQUE DU THÉORÈME DE THALÈS -->
                    <section class="course-section">
                        <h2 class="section-title">Réciproque du théorème de Thalès</h2>
                        <div class="notion-box" style="background-color: rgba(0,0,0,0.05);">
                            <p><strong>Utilité :</strong> Je connais les longueurs, je souhaite savoir si les droites sont parallèles ou non.</p>
                        </div>

                        <p>Si A, M, B et A, N, C sont alignés dans le même ordre et si $$\\frac{AM}{AB} = \\frac{AN}{AC}$$</p>
                        <blockquote>
                            <p>Alors les droites (MN) et (BC) sont parallèles.</p>
                            <p>(image ici)</p>
                        </blockquote>

                        <div class="notion-box" style="border-left-color: var(--secondary);">
                            <p><strong style="color: var(--primary);">METHODE : Ce que je dois savoir faire en exercice</strong></p>
                            <p><u style="color: var(--primary);">Exemple :</u> les droites (AB) et (DE) sont-elles parallèles ?</p>
                            <p>(image ici)</p>
                            <p>A ; C ; E et B ; C ; D sont alignés dans le même ordre.</p>
                            <blockquote>
                                <p>D’une part $$\\frac{CE}{CA} = \\frac{3,2}{2} = 1,6$$</p>
                                <p>D’autre part $$\\frac{CD}{CB} = \\frac{2,4}{1,5} = 1,6$$</p>
                                <p>On remarque que $$\\frac{CE}{CA} = \\frac{CD}{CB}$$ donc d’après la réciproque du théorème de Thalès, (AB) // (DE).</p>
                            </blockquote>
                        </div>

                        <button class="btn-check-understanding" data-quiz-target="quiz-area-reciproque-thalès" onclick="startQuizFromButton('quiz-area-reciproque-thalès', 15)">Ai-je bien compris ?</button>
                        <div id="quiz-area-reciproque-thalès"></div>
                    </section>

                    <!-- OBJECTIF FINAL -->
                    <div style="margin-top: 20px; font-style: italic; color: var(--text-muted);">
                        <p>✅ Objectif 3 : Je sais démontrer que deux droites sont parallèles en utilisant la réciproque du théorème de Thalès</p>
                    </div>
                </div>
            `
    }
};
