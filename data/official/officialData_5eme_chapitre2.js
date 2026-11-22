// ============================================================
// data/official/officialData_5eme_chapitre2.js
// Niveau : 5ème — Thème : NOMBRES ET CALCULS
// Chapitre 2 : Nombres relatifs
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.
// NOTE : les codes des quiz ("btn-check-understanding") sont des
// identifiants prévisionnels (52xxx) à créer/associer dans la
// banque de quiz du site avant mise en ligne.

var chapterData_5eme_2 = {
    themeName: "NOMBRES ET CALCULS",
    chapter: {
        id: 2,
        title: "Nombres relatifs",
        eleve: "non",
        content: `
                            <div class="course-container">
                                <!-- SECTION : OBJECTIFS -->
 <!--                                  <section class="course-section">
                                     <p><strong>Objectifs :</strong></p>
                                    <ul>
                                        <li>Je sais définir un nombre relatif, positif, strictement positif, négatif, strictement négatif</li>
                                        <li>J'utilise les nombres relatifs pour représenter des grandeurs pouvant être inférieures à zéro</li>
                                        <li>Je sais lire et placer l'abscisse d'un nombre relatif sur une droite graduée</li>
                                        <li>Je sais comparer et ranger des nombres décimaux relatifs</li>
                                        <li>Je sais définir l'opposé et la valeur absolue d'un nombre</li>
                                        <li>Je sais additionner deux ou plusieurs nombres décimaux relatifs</li>
                                        <li>Je sais soustraire deux nombres décimaux relatifs</li>
                                        <li>Je sais quand des parenthèses sont indispensables et je sais simplifier l'écriture d'une somme</li>
                                        <li>Je sais enchaîner additions et soustractions de nombres décimaux relatifs</li>
                                    </ul>
                                </section>
-->
                                <!-- SECTION : DÉCOUVRIR LES NOMBRES RELATIFS -->
                                <section class="course-section">
                                    <h2 class="section-title">Découvrir les nombres relatifs</h2>
                                    <div class="notion-box">
                                        <p>Un <strong>nombre relatif</strong> est un nombre précédé d'un signe « $+$ » ou d'un signe « $-$ ».</p>
                                        <ul>
                                            <li>S'il est précédé du signe « $+$ », on dit qu'il est <strong>positif</strong> (on peut ne pas écrire le « $+$ »).</li>
                                            <li>S'il est précédé du signe « $-$ », on dit qu'il est <strong>négatif</strong> (on doit toujours écrire le « $-$ »).</li>
                                            <li>Le nombre $0$ est le seul nombre à la fois positif <strong>et</strong> négatif. Tu peux mettre le signe que tu veux devant, cela ne change rien.</li>
                                        </ul>
                                    </div>
                                    <p>Exemples : $+5$ (ou $5$) est un nombre <strong>positif</strong> ; $-5$ est un nombre <strong>négatif</strong>.</p>
                                    
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong>
                                        <ul>
                                            <li> Lorsqu'on dit qu'un nombre "a" est positif, il peut être égal à +0,1 ou +5 ou +1000 <strong>mais aussi il peut être a=0 !!!</strong> On utilisera le symbole $a \\geq 0$ ce qui signifie que le nombre $a$ est <strong>supérieur ou égal</strong> à zéro.</li>
                                            <li> Lorsqu'on veut qu'un nombre soit positif mais qu'il ne puisse pas être égal à zéro, on dira qu'il est <strong>strictement positif</strong>. Le symbole pour dire qu'un nombre a est <strong>strictement positif</strong> est celui que tu connais déjà $a > 0$. (Le symbole > signifie strictement supérieur à)</li>
                                            <li> De la même façon si je veux une liste de nombres négatifs il y aura 0; -5 ;-10 j'écrirai $a \\leq 0$. (Le symbole $\\leq$ signifie inférieur ou égal)</li>
                                            <li> Lorsqu'on veut qu'un nombre soit négatif mais qu'il ne puisse pas être égal à zéro, on utilisera le mot de vocabulaire <strong> strictement négatif </strong>. Le sybmbole pour dire strictement négatif est $a < 0$. (Le symbole < signifie strictement inférieur à)</li>
                                        </ul>
                                        </div>
                                    <p>Les nombres relatifs permettent de représenter des grandeurs qui peuvent prendre des valeurs <strong>inférieures à zéro</strong> :</p>
                                    <ul>
                                        <li>une <strong>température</strong> : $-4°C$ signifie 4 degrés en dessous de zéro ;</li>
                                        <li>une <strong>altitude</strong> : $-35$ m signifie 35 mètres sous le niveau de la mer ;</li>
                                        <li>un <strong>temps</strong> historique : l'an $-52$ signifie 52 ans avant J.-C. ;</li>
                                        <li>un <strong>solde bancaire</strong> : $-120$ € signifie un compte débiteur de 120 €.</li>
                                    </ul>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-NRdefinition"
                                        onclick="startQuizFromButton('quiz-area-NRdefinition', '502111')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-NRdefinition"></div>

                                    <h3 class="section-title">Résoudre un problème avec des nombres relatifs</h3>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> À 6h du matin, il faisait $-3°C$ à Grenoble. À 14h, la température a augmenté de $8°C$. Quelle température fait-il à 14h ?
                                        <ul>
                                            <li>Pour comprendre ce genre de problèmes il faut s'imaginer dans sa têtre un axe gradué (comme un thérmomètre)
                                            <li>On part de $-3$ et on ajoute $8$ (une augmentation).</li>
                                            <li>La température à 14h est donc de $-3 + 8 = 5°C$.</li>
                                        </ul>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-NRprobleme"
                                        onclick="startQuizFromButton('quiz-area-NRprobleme', '502121')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-NRprobleme"></div>
                                </section>

                                <!-- SECTION : DROITE GRADUÉE -->
                                <section class="course-section">
                                    <h2 class="section-title">Repérer un nombre relatif sur une droite graduée</h2>
                                    <div class="notion-box">
                                        <p>Une <strong>droite graduée</strong> est une droite sur laquelle on a placé une <strong>origine</strong> (le point qui représente $0$) et une <strong>unité de longueur</strong> régulière.</p>
                                        <p>Le nombre associé à un point de la droite s'appelle l'<strong>abscisse</strong> de ce point.</p>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span> Placer les nombres $-3,5$ ; $2$ ; $-1$ et $4,5$ sur une droite graduée
                                        <ul>
                                            <li>On trace la droite, on place l'origine ($0$) et on choisit une unité (par exemple, 1 carreau).</li>
                                            <li>Les nombres <strong>positifs</strong> se placent <strong>à droite</strong> de $0$, les nombres <strong>négatifs</strong> se placent <strong>à gauche</strong> de $0$.</li>
                                            <li>On compte les unités (et les fractions d'unité pour les nombres décimaux) à partir de l'origine.</li>
                                        </ul>
                                    </div>
                                    <p class="indent-text">Plus un point est loin de l'origine vers la droite, plus le nombre qu'il représente est grand. Plus un point est loin de l'origine vers la gauche, plus le nombre qu'il représente est petit.</p>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-NRdroitegraduee"
                                        onclick="startQuizFromButton('quiz-area-NRdroitegraduee', '502211')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-NRdroitegraduee"></div>
                                </section>

                                <!-- SECTION : COMPARER ET RANGER -->
                                <section class="course-section">
                                    <h2 class="section-title">Comparer et ranger des nombres relatifs</h2>
                                    <div class="notion-box">
                                        <p>Sur une droite graduée, un nombre est <strong>plus grand</strong> qu'un autre s'il est situé <strong>plus à droite</strong> que lui.</p>
                                    </div>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Règle</span>
                                        <ul>
                                            <li>Tout nombre <strong>positif</strong> est plus grand que tout nombre <strong>négatif</strong>.</li>
                                            <li>Entre deux nombres <strong>positifs</strong>, le plus grand est celui qui a la plus grande valeur (comme d'habitude).</li>
                                            <li>Entre deux nombres <strong>négatifs</strong>, le plus grand est celui qui est <strong>le plus proche de zéro</strong>.</li>
                                        </ul>
                                    </div>
                                    <p><strong>Exemples :</strong></p>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <p>$5,2$ et $8,1$</p>
                                            <p>ce sont deux nombres positifs</p>
                                            <p>$5,2 < 8,1$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>$-2$ et $-7$</p>
                                            <p>$-2$ est plus proche de $0$</p>
                                            <p>$-2 > -7$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>$-9$ et $3$</p>
                                            <p>$3$ est positif, $-9$ est négatif</p>
                                            <p>$-9 < 3$</p>
                                        </div>
                                    </div>
                                    <p>On range dans l'ordre croissant : $-7 ; -2 ; 0 ; 3 ; 5,2 ; 8,1$.</p>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-NRcomparer"
                                        onclick="startQuizFromButton('quiz-area-NRcomparer', '502311')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-NRcomparer"></div>
                                </section>

                                <!-- SECTION : OPPOSÉ ET VALEUR ABSOLUE -->
                                <section class="course-section">
                                    <h2 class="section-title">Opposé et valeur absolue d'un nombre</h2>
                                    <div class="notion-box">
                                        <p>Deux nombres relatifs sont <strong>opposés</strong> lorsqu'ils ont la <strong>même distance à zéro</strong> mais des <strong>signes différents</strong>. Sur la droite graduée, ils sont symétriques par rapport à l'origine.</p>
                                    </div>
                                    <p>Exemples : l'opposé de $7$ est $-7$ ; l'opposé de $-4,3$ est $4,3$ ; l'opposé de $0$ est $0$.</p>
                                    <div class="notion-box">
                                        <p>La <strong>valeur absolue</strong> d'un nombre relatif est sa <strong>distance à zéro</strong> sur la droite graduée. Elle se note entre deux barres verticales et elle est toujours <strong>positive</strong>.</p>
                                    </div>
                                    <table style="width:100%; border-collapse: collapse; text-align: center;">
                                        <thead>
                                            <tr>
                                                <th style="border-right: 1px solid black; padding: 10px;">Nombre</th>
                                                <th style="border-right: 1px solid black; padding: 10px;">Opposé</th>
                                                <th style="padding: 10px;">Valeur absolue</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">$6$</td>
                                                <td style="border-right: 1px solid black; padding: 10px;">$-6$</td>
                                                <td style="padding: 10px;">$|6| = 6$</td>
                                            </tr>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">$-3,8$</td>
                                                <td style="border-right: 1px solid black; padding: 10px;">$3,8$</td>
                                                <td style="padding: 10px;">$|-3,8| = 3,8$</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque :</strong> deux nombres opposés ont toujours la <strong>même valeur absolue</strong>.
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-NRoppose"
                                        onclick="startQuizFromButton('quiz-area-NRoppose', '502411')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-NRoppose"></div>
                                </section>

                                <!-- SECTION : CALCULS SANS PARENTHÈSES -->
                                <section class="course-section">
                                    <h2 class="section-title">Calculs sans parenthèses</h2>

                                    <h3 class="section-title">Règle</h3>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Règle</span>
                                        <ul>
                                            <li><strong>Nombres de même signe</strong> : on additionne leurs valeurs absolues et on garde le signe commun.</li>
                                            <li><strong>Nombres de signes différents</strong> : on soustrait la plus petite valeur absolue à la plus grande, et on garde le signe du nombre qui a la plus grande valeur absolue.</li>
                                        </ul>
                                    </div>
                                    <p><strong>Exemples :</strong></p>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <table style="border-collapse:collapse; border:none; margin:6px auto;">
<tr><td style="border:none; padding:2px 4px;" align="right">$A$</td><td style="border:none; padding:2px 4px;">$=$</td><td style="border:none; padding:2px 4px;" align="left">$-5$<span style="color: var(--secondary);">&nbsp;$+$&nbsp;</span>$7$</td></tr>
<tr><td style="border:none; padding:2px 4px;" align="right">$A$</td><td style="border:none; padding:2px 4px;">$=$</td><td style="border:none; padding:2px 4px;" align="left">$+2$</td></tr>
</table>
                                            <p>Signes différents : on soustrait la plus petite valeur absolue à la plus grande, $7 - 5 = 2$, et on garde le signe du nombre qui a la plus grande valeur absolue ($7$ est positif).</p>
                                        </div>
                                        <div class="calculation-block">
                                            <table style="border-collapse:collapse; border:none; margin:6px auto;">
<tr><td style="border:none; padding:2px 4px;" align="right">$B$</td><td style="border:none; padding:2px 4px;">$=$</td><td style="border:none; padding:2px 4px;" align="left">$-3$<span style="color: var(--secondary);">&nbsp;$-$&nbsp;</span>$5$</td></tr>
<tr><td style="border:none; padding:2px 4px;" align="right">$B$</td><td style="border:none; padding:2px 4px;">$=$</td><td style="border:none; padding:2px 4px;" align="left">$-8$</td></tr>
</table>
                                            <p>Même signe : on additionne les valeurs absolues, $3 + 5 = 8$, et on garde le signe commun ($-$).</p>
                                        </div>
                                    </div>

                                    <h3 class="section-title">Une méthode plus visuelle</h3>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span>
                                        <p>On imagine un axe gradué, on place le premier nombre du calcul sur l'axe, puis on effectue mentalement les déplacements avec les opérations qui suivent :</p>
                                        <ul>
                                            <li><strong>$+$</strong> : on avance dans le sens de l'axe (vers la droite) ;</li>
                                            <li><strong>$-$</strong> : on recule (vers la gauche).</li>
                                        </ul>
                                    </div>
                                    <p><strong>Exemples :</strong></p>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <table style="border-collapse:collapse; border:none; margin:6px auto;">
<tr><td style="border:none; padding:2px 4px;" align="right">$A$</td><td style="border:none; padding:2px 4px;">$=$</td><td style="border:none; padding:2px 4px;" align="left">$-5$<span style="color: var(--secondary);">&nbsp;$+$&nbsp;</span>$7$</td></tr>
<tr><td style="border:none; padding:2px 4px;" align="right">$A$</td><td style="border:none; padding:2px 4px;">$=$</td><td style="border:none; padding:2px 4px;" align="left">$+2$</td></tr>
</table>
                                            <p>On part de $-5$ et on <span style="color: var(--secondary);"><strong>avance</strong></span> de $7$.</p>
                                            <svg viewBox="0 0 400 110" xmlns="http://www.w3.org/2000/svg" style="max-width:380px; width:100%; display:block; margin:8px auto; font-family:sans-serif;">
<defs><marker id="flecheA" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><polygon points="0,0 10,5 0,10" style="fill:var(--secondary);"/></marker></defs>
<line x1="15" y1="75" x2="380" y2="75" stroke="#333" stroke-width="2"/>
<polygon points="385,75 374,70 374,80" fill="#333"/>
<line x1="200" y1="69" x2="200" y2="81" stroke="#333" stroke-width="2"/>
<text x="200" y="97" font-size="14" text-anchor="middle" fill="#333">0</text>
<circle cx="50" cy="75" r="4.5" fill="#2E5C8A"/>
<text x="50" y="97" font-size="14" text-anchor="middle" fill="#2E5C8A" font-weight="bold">-5</text>
<circle cx="260" cy="75" r="4.5" fill="#2E5C8A"/>
<text x="260" y="97" font-size="14" text-anchor="middle" fill="#2E5C8A" font-weight="bold">+2</text>
<line x1="50" y1="52" x2="260" y2="52" style="stroke:var(--secondary);" stroke-width="3" marker-end="url(#flecheA)"/>
<text x="155" y="40" font-size="15" text-anchor="middle" style="fill:var(--secondary);" font-weight="bold">+7</text>
</svg>
                                        </div>
                                        <div class="calculation-block">
                                            <table style="border-collapse:collapse; border:none; margin:6px auto;">
<tr><td style="border:none; padding:2px 4px;" align="right">$B$</td><td style="border:none; padding:2px 4px;">$=$</td><td style="border:none; padding:2px 4px;" align="left">$-3$<span style="color: var(--secondary);">&nbsp;$-$&nbsp;</span>$5$</td></tr>
<tr><td style="border:none; padding:2px 4px;" align="right">$B$</td><td style="border:none; padding:2px 4px;">$=$</td><td style="border:none; padding:2px 4px;" align="left">$-8$</td></tr>
</table>
                                            <p>On part de $-3$ et on <span style="color: var(--secondary);"><strong>recule</strong></span> de $5$.</p>
                                            <svg viewBox="0 0 400 110" xmlns="http://www.w3.org/2000/svg" style="max-width:380px; width:100%; display:block; margin:8px auto; font-family:sans-serif;">
<defs><marker id="flecheB" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><polygon points="0,0 10,5 0,10" style="fill:var(--secondary);"/></marker></defs>
<line x1="15" y1="75" x2="380" y2="75" stroke="#333" stroke-width="2"/>
<polygon points="385,75 374,70 374,80" fill="#333"/>
<line x1="290" y1="69" x2="290" y2="81" stroke="#333" stroke-width="2"/>
<text x="290" y="97" font-size="14" text-anchor="middle" fill="#333">0</text>
<circle cx="200" cy="75" r="4.5" fill="#2E5C8A"/>
<text x="200" y="97" font-size="14" text-anchor="middle" fill="#2E5C8A" font-weight="bold">-3</text>
<circle cx="50" cy="75" r="4.5" fill="#2E5C8A"/>
<text x="50" y="97" font-size="14" text-anchor="middle" fill="#2E5C8A" font-weight="bold">-8</text>
<line x1="200" y1="52" x2="50" y2="52" style="stroke:var(--secondary);" stroke-width="3" marker-end="url(#flecheB)"/>
<text x="125" y="40" font-size="15" text-anchor="middle" style="fill:var(--secondary);" font-weight="bold">-5</text>
</svg>
                                        </div>
                                    </div>
                                </section>

                                <!-- SECTION : CALCULS AVEC PARENTHÈSES -->
                                <section class="course-section">
                                    <h2 class="section-title">Calculs avec parenthèses</h2>
                                    <p>En mathématiques, on aime bien quelquefois <strong>différencier l'opération du signe du nombre</strong>. C'est pourquoi on peut écrire les nombres relatifs <strong>entre parenthèses</strong>.</p>
                                    <div class="notion-box">
                                        <strong style="color: var(--secondary);">⚠️ Remarque : pourquoi les parenthèses sont indispensables</strong>
                                        <p class="indent-text">Sans parenthèses, une écriture comme $5 - - 3$ ou $5 + - 3$ n'a pas de sens clair (deux signes qui se suivent). Les parenthèses permettent de bien séparer le <strong>signe de l'opération</strong> (addition ou soustraction) du <strong>signe du nombre</strong> relatif.</p>
                                    </div>

                                    <h3 class="section-title">Additionner des nombres relatifs</h3>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Règle</span>
                                        <ul>
                                            <li><strong>Nombres de même signe</strong> : on additionne leurs valeurs absolues et on garde le signe commun.</li>
                                            <li><strong>Nombres de signes différents</strong> : on soustrait la plus petite valeur absolue à la plus grande, et on garde le signe du nombre qui a la plus grande valeur absolue.</li>
                                        </ul>
                                    </div>
                                    <p><strong>Exemples :</strong></p>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <p>$C = (-3) + (-5)$</p>
                                            <p>mêmes signes : $3 + 5 = 8$</p>
                                            <p>$C = -8$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>$D = (-9) + (+6)$</p>
                                            <p>signes différents : $9 - 6 = 3$</p>
                                            <p>$D = -3$</p>
                                        </div>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-NRadditionner2"
                                        onclick="startQuizFromButton('quiz-area-NRadditionner2', '502511')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-NRadditionner2"></div>

                                    <h3 class="section-title">Soustraire des nombres relatifs</h3>
                                    <div class="notion-box">
                                        <p><strong>Soustraire un nombre relatif revient à additionner son opposé.</strong></p>
                                        <blockquote>$a - b = a + (-b)$</blockquote>
                                    </div>
                                    <p><strong>Exemples :</strong></p>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <p>$E = (+5) - (+8)$</p>
                                            <p>$E = (+5) +$<font color="blue">$ (-8)$</font></p>
                                            <p>$E = -3$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>$F = (-6) - (-2)$</p>
                                            <p>$F = (-6) +$<font color="blue">$ (+2)$</font></p>
                                            <p>$F = -4$</p>
                                        </div>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-NRsoustraire"
                                        onclick="startQuizFromButton('quiz-area-NRsoustraire', '502611')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-NRsoustraire"></div>

                                    <h3 class="section-title">Simplifier l'écriture d'une somme</h3>
                                    <div class="notion-box">
                                        <p>Une fois qu'on a bien compris le sens des parenthèses, on peut <strong>simplifier l'écriture</strong> en utilisant la règle des signes :</p>
                                    </div>
                                    <table style="width:100%; border-collapse: collapse; text-align: center;">
                                        <thead>
                                            <tr>
                                                <th style="border-right: 1px solid black; padding: 10px;">Signes qui se suivent</th>
                                                <th style="padding: 10px;">Signe simplifié</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">$+$ et $+$</td>
                                                <td style="padding: 10px;">$+$</td>
                                            </tr>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">$-$ et $-$</td>
                                                <td style="padding: 10px;">$+$</td>
                                            </tr>
                                            <tr>
                                                <td style="border-right: 1px solid black; padding: 10px;">$+$ et $-$ (ou $-$ et $+$)</td>
                                                <td style="padding: 10px;">$-$</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <p>$(+5) + (-3)$</p>
                                            <p>signes $+$ et $-$ &rarr; $-$</p>
                                            <p>$= 5 - 3 = 2$</p>
                                        </div>
                                        <div class="calculation-block">
                                            <p>$(-5) - (-3)$</p>
                                            <p>signes $-$ et $-$ &rarr; $+$</p>
                                            <p>$= -5 + 3 = -2$</p>
                                        </div>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-NRsimplifier"
                                        onclick="startQuizFromButton('quiz-area-NRsimplifier', '502621')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-NRsimplifier"></div>
                                </section>

                                <!-- SECTION : ENCHAÎNEMENT DE CALCULS -->
                                <section class="course-section">
                                    <h2 class="section-title">Enchaînement de calculs</h2>
                                    <div class="method-box">
                                        <span class="method-badge">🚀 Méthode</span>
                                        <ul>
                                            <li>Ligne 1) On supprime toutes les parenthèses et on simplifie les signes.</li>
                                            <li>Ligne 2) On regroupe les nombres positifs entre eux et les nombres négatifs entre eux.</li>
                                            <li>Ligne 3) On calcule et on donne le résultat.</li>
                                        </ul>
                                    </div>
                                    <p><strong>Exemples :</strong></p>
                                    <div class="calculation-container">
                                        <div class="calculation-block">
                                            <table style="border-collapse:collapse; border:none; margin:4px 0;">
<tr><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$G$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$=$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$($</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$-$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$4$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$)$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$+$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$($</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$+$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$7$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$)$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$+$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$($</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$-$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$2$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$)$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$-$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$($</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$+$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$3$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$)$</td></tr>
<tr><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$G$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$=$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"><font color="red">$-$</font></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$4$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;" colspan="3"><font color="red">$+$</font></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$7$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;" colspan="3"><font color="red">$-$</font></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$2$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;" colspan="3"><font color="red">$-$</font></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$3$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td></tr>
<tr><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$G$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$=$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"><span style="color: var(--primary);">$7$</span></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;" colspan="3"><span style="color: var(--secondary);">$-$</span></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"><span style="color: var(--secondary);">$4$</span></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;" colspan="3"><span style="color: var(--secondary);">$-$</span></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"><span style="color: var(--secondary);">$2$</span></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;" colspan="3"><span style="color: var(--secondary);">$-$</span></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"><span style="color: var(--secondary);">$3$</span></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td></tr>
<tr><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$G$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$=$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"><span style="color: var(--primary);">$7$</span></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;" colspan="3"><span style="color: var(--secondary);">$-$</span></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"><span style="color: var(--secondary);">$9$</span></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td></tr>
<tr><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$G$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$=$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$-$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$2$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td></tr>
</table>
                                        </div>
                                        <div class="calculation-block">
                                            <table style="border-collapse:collapse; border:none; margin:4px 0;">
<tr><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$H$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$=$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$4$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$-$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$9$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$+$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$($</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$-$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$6$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$)$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$-$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$($</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$-$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$3$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$)$</td></tr>
<tr><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$H$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$=$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$4$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$-$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$9$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;" colspan="3"><font color="red">$-$</font></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$6$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;" colspan="3"><font color="red">$+$</font></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$3$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td></tr>
<tr><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$H$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$=$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"><span style="color: var(--primary);">$4$</span></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;" colspan="3"><span style="color: var(--primary);">$+$</span></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"><span style="color: var(--primary);">$3$</span></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;" colspan="3"><span style="color: var(--secondary);">$-$</span></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"><span style="color: var(--secondary);">$9$</span></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;" colspan="3"><span style="color: var(--secondary);">$-$</span></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"><span style="color: var(--secondary);">$6$</span></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td></tr>
<tr><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$H$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$=$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"><span style="color: var(--primary);">$7$</span></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;" colspan="3"><span style="color: var(--secondary);">$-$</span></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"><span style="color: var(--secondary);">$15$</span></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td></tr>
<tr><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$H$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$=$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$-$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;">$8$</td><td style="border:none; padding:2px 1px; text-align:center; white-space:nowrap;"></td></tr>
</table>
                                        </div>
                                    </div>
                                    <button class="btn-check-understanding"
                                        data_quiz_target="quiz-area-NRenchainer"
                                        onclick="startQuizFromButton('quiz-area-NRenchainer', '502711')">
                                        Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-NRenchainer"></div>
                                </section>

                                <!-- SECTION : POUR ALLER PLUS LOIN -->
                                <section class="course-section">
                                    <h2 class="section-title">Pour aller plus loin (culture mathématique)</h2>
                                    <div class="notion-box">
                                        <p>Les nombres négatifs sont apparus pour la première fois avec le mathématicien indien <strong>Brahmagupta</strong>, vers l'an $600$. Pourtant, leur existence a longtemps été contestée par les mathématiciens européens : certains niaient encore qu'un nombre puisse être « inférieur à rien » jusqu'au <strong>XVII<sup>e</sup> siècle</strong> !</p>
                                    </div>
                                </section>
                            </div>
                        `
    }
};
