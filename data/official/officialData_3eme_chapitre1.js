// ============================================================
// data/official/officialData_3eme_chapitre1.js
// Niveau : 3ème — Thème : NOMBRES ET CALCULS
// Chapitre 1 : Nombres et calculs (Relatifs, fractions, racine carrée, puissances)
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.

var chapterData_3eme_1 = {
    themeName: "NOMBRES ET CALCULS",
    chapter: {
        id: 1,
        title: "Nombres et calculs (Relatifs, fractions, racine carrée, puissances)",
        quiz: { q: "Calculer : $\\sqrt{64} + 10^2$", a: "108" },
        eleve: "non",
        content: `
                            <div class="course-container">
                                <!-- SECTION I : NOMBRES RELATIFS -->
                                <section class="course-section">
                                    <h2 class="section-title">Rappels : Nombres relatifs</h2>
                                    <p>Les nombres relatifs incluent les entiers naturels (positifs) et les nombres négatifs.</p>
                                    <div class="notion-box">
                                        <strong style="color: var(--primary); font-size: 1.1rem;">📏 Les Règles de Signes</strong><br><br>
                                        <div style="margin-bottom: 15px;">
                                            <strong>1. Sommes et différences (Addition/Soustraction) :</strong><br>
                                            • Deux nombres de même signe $\\rightarrow$ on additionne leurs valeurs et on garde le signe.<br>
                                            • Deux nombres de signes différents $\\rightarrow$ on soustrait la plus petite valeur de la plus grande et on garde le signe du plus grand.
                                        </div>
                                        <div style="margin-bottom: 5px;">
                                            <strong>2. Produits et quotients (Multiplication/Division) :</strong><br>
                                            • Même signe $\\rightarrow$ Résultat POSITIF ($+$)<br>
                                            • Signes différents $\\rightarrow$ Résultat NÉGATIF ($-$)
                                        </div>
                                    </div>
                                    <div class="notion-box" style="border-left-color: var(--secondary);">
                                        <strong style="color: var(--secondary);">⚠️ Priorités Opératoires</strong><br>
                                        Dans un calcul complexe, respecte toujours cet ordre :
                                        <ol style="margin-top: 10px; margin-bottom: 10px;">
                                            <li>Les parenthèses (les plus intérieures d'abord)</li>
                                            <li>Les multiplications et divisions</li>
                                            <li>Les additions et soustractions</li>
                                        </ol>
                                        <p><strong>Exemple :</strong><br>
                                        $5 + (-3) \\times 8 = ?$<br>
                                        $\\rightarrow 5 + (-24) = -19$ <span style="font-size:0.8rem; color:var(--text-muted);">(On fait la multiplication avant l'addition)</span>
                                        </p>
                                    </div>
                                </section>

                                <!-- BOUTON 31101 -->
                                <button class="btn-check-understanding" data-quiz-target="quiz-area-relatifs" onclick="startQuizFromButton('quiz-area-relatifs', '31101')">Ai-je bien compris ?</button>
                                <div id="quiz-area-relatifs"></div>

                                <!-- SECTION II : FRACTIONS -->
                                <section class="course-section">
                                    <h2 class="section-title">Rappels : Fractions</h2>
                                    <p><strong>1. Simplification :</strong> Pour rendre une fraction irréductible, décomposez le numérateur et le dénominateur en produits de facteurs premiers et barrez les facteurs communs. Ex : $\\frac{15}{35}=\\frac{3\\times \\cancel{5}}{7\\times \\cancel{5}}=\\frac{3}{7}$</p>
                                                                        <p><strong>2. Addition/Soustraction :</strong> Il faut impérativement mettre les fractions au <strong>même dénominateur</strong> avant d'additionner ou soustraire uniquement les numérateurs.</p>
                                    <div class="notion-box">
                                        <strong>💡 Règle de la division :</strong> Diviser par une fraction revient à multiplier par son <strong>inverse</strong>.<br>
                                        Exemple : $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$
                                    </div>
                                </section>

                                <!-- BOUTON 31201 -->
                                <button class="btn-check-understanding" data-quiz-target="quiz-area-fractions" onclick="startQuizFromButton('quiz-area-fractions', '31201')">Ai-je bien compris ?</button>
                                <div id="quiz-area-fractions"></div>

                                <!-- SECTION III : RACINES CARRÉES -->
                                <section class="course-section">
                                    <h2 class="section-title">Racines carrées</h2>
                                    <p>La racine carrée d'un nombre positif « n », notée $\\sqrt{n}$, est le nombre dont le carré est égal à « n ».</p>
                                    <div class="notion-box">
                                        <strong>💡 Exemples :</strong> $\\sqrt{1}=1$ | $\\sqrt{4}=2$ | $\\sqrt{9}=3$ | $\\sqrt{16}=4$ | $\\sqrt{25}=5$ | $\\sqrt{36}=6$ | $\\sqrt{49}=7$ | $\\sqrt{64}=8$ | $\\sqrt{81}=9$ | $\\sqrt{100}=10$
                                    </div>
                                    <p><strong>À savoir :</strong></p>
                                    <ul>
                                        <li>Retrouver mentalement la racine carrée d'un carré parfait.</li>
                                        <li>Encadrer une racine carrée : ex, pour $\\sqrt{61}$, on sait que $\\sqrt{49} < \\sqrt{61} < \\sqrt{64}$, donc $7 < \\sqrt{61} < 8$.</li>
                                    </ul>
                                </section>

                                <!-- BOUTON 31301 -->
                                <button class="btn-check-understanding" data-quiz-target="quiz-area-racines" onclick="startQuizFromButton('quiz-area-racines', '31301')">Ai-je bien compris ?</button>
                                <div id="quiz-area-racines"></div>

                                <!-- SECTION IV : PUISSANCES -->
                                <section class="course-section">
                                    <h2 class="section-title">Puissances et écriture scientifique</h2>
                                    <p><strong>Définition :</strong> Soit $a$ un nombre relatif non nul et $n$ un entier positif. Le produit de $n$ facteurs égaux à $a$ est noté $a^n$.</p>
                                    <div class="notion-box">
                                        <strong>📏 Formules clés :</strong><br>
                                        • $a^n \\times a^m = a^{n+m}$ <br>
                                        • $(a^n)^m = a^{n \\times m}$ <br>
                                        • $a^n / a^m = a^{n-m}$ <br>
                                        • $a^{-n} = \\frac{1}{a^n}$
                                    </div>
                                    <p><strong>Puissances de 10 :</strong></p>
                                    <ul>
                                        <li>$10^4 = 10,000$ (4 zéros)</li>
                                        <li>$10^{-2} = 0,01$ (2 chiffres après la virgule)</li>
                                    </ul>
                                </section>

                                <!-- BOUTON 31401 -->
                                <button class="btn-check-understanding" data-quiz-target="quiz-area-puissances" onclick="startQuizFromButton('quiz-area-puissances', '31401')">Ai-je bien compris ?</button>
                                <div id="quiz-area-puissances"></div>

                                <!-- SECTION V : ÉCRITURE SCIENTIFIQUE -->
                                <section class="course-section">
                                    <h2 class="section-title">Écriture scientifique</h2>
                                    <p>Un nombre est en notation scientifique s'il est écrit sous la forme $a \\times 10^n$, où $a$ est un nombre décimal tel que $1 \\le a < 10$.</p>
                                    <div class="notion-box">
                                        <strong>📝 Exemples :</strong><br>
                                        • $125,000,000 = 1,25 \\times 10^8$<br>
                                        • $0,000,000,256 = 2,56 \\times 10^{-7}$
                                    </div>
                                </section>

                                <!-- BOUTON 31501 -->
                                <button class="btn-check-understanding" data-quiz-target="quiz-area-scientifique" onclick="startQuizFromButton('quiz-area-scientifique', '31501')">Ai-je bien compris ?</button>
                                <div id="quiz-area-scientifique"></div>
                            </div>
                        `
    }
};
