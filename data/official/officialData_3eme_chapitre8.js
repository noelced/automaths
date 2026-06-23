// ============================================================
// data/official/officialData_3eme_chapitre8.js
// Niveau : 3ème — Thème : ORGANISATION ET GESTION DE DONNÉES
// Chapitre 8 : Fonctions
// ============================================================
// Généré par découpage de officialData.js. Modifiez ce fichier
// pour éditer ce chapitre précis sans toucher aux autres.
// Le contenu HTML est en template string (backticks) pour rester
// lisible et facile à éditer directement.

var chapterData_3eme_8 = {
    themeName: "ORGANISATION ET GESTION DE DONNÉES",
    chapter: {
        id: 8,
        title: "Fonctions",
        eleve: "non",
        content: `
                                <div class="course-container">
                                    <!-- INTRODUCTION ET OBJECTIFS -->
                                    <section class="course-section">
                                        <br>
                                        <p><strong>Objectifs :</strong></p>
                                        <ul>
                                            <li>Je sais utiliser les notations et le vocabulaire fonctionnel</li>
                                            <li>Je sais calculer image et antécédent à partir de la forme algébrique d’une fonction</li>
                                            <li>Je sais déterminer une image et un antécédent à partir d’une <strong class="text-primary">représentation graphique</strong> ou <strong class="text-primary">tableau</strong> d’une fonction</li>
                                            <li>Je sais modéliser une situation de proportionnalité</li>
                                            <li>Je sais représenter graphiquement et interpréter les paramètres d’une <strong class="text-primary">fonction linéaire</strong></li>
                                            <li>Je sais modéliser un pourcentage à l’aide d’une fonction linéaire</li>
                                            <li>Je sais représenter graphiquement, interpréter les paramètres, d’une <strong class="text-primary">fonction affine</strong></li>
                                        </ul>
                                    </section>

                                    <!-- NOTION DE FONCTION -->
<section class="course-section">

    <h2 class="section-title">
        Notion de fonction
    </h2>

    <h3 class="section-title">
        Définition
    </h3>

    <div class="notion-box">

        <p>
            Une fonction est un procédé qui associe
            à chaque nombre de départ
            un unique nombre d'arrivée.
        </p>

    </div>

    <div style="text-align:center;margin:25px 0;">

        <svg width="900" height="220">
<defs>

    <marker id="arrowFunc"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto">

        <polygon points="0,0 6,3 0,6"
                 fill="var(--primary-medium)"/>

    </marker>

    <filter id="shadow"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%">

        <feDropShadow
            dx="0"
            dy="3"
            stdDeviation="4"
            flood-opacity="0.18"/>

    </filter>

</defs>

<!-- ANTÉCÉDENT -->

<rect x="40"
      y="60"
      width="220"
      height="90"
      rx="18"
      fill="#eff6ff"
      stroke="var(--primary)"
      stroke-width="3"
      filter="url(#shadow)"/>

<text x="150"
      y="95"
      text-anchor="middle"
      fill="var(--primary-dark)"
      font-size="24"
      font-weight="bold">
    ANTÉCÉDENT
</text>

<text x="150"
      y="125"
      text-anchor="middle"
      fill="#666"
      font-size="18">
    nombre de départ
</text>

<!-- FONCTION -->

<rect x="340"
      y="50"
      width="220"
      height="110"
      rx="20"
      fill="var(--primary-light)"
      stroke="var(--primary)"
      stroke-width="3"
      filter="url(#shadow)"/>

<text x="450"
      y="118"
      text-anchor="middle"
      fill="var(--primary-dark)"
      font-size="30"
      font-weight="bold">
    FONCTION
</text>

<!-- IMAGE -->

<rect x="640"
      y="60"
      width="220"
      height="90"
      rx="18"
      fill="#eff6ff"
      stroke="var(--primary)"
      stroke-width="3"
      filter="url(#shadow)"/>

<text x="750"
      y="95"
      text-anchor="middle"
      fill="var(--primary-dark)"
      font-size="24"
      font-weight="bold">
    IMAGE
</text>

<text x="750"
      y="125"
      text-anchor="middle"
      fill="#666"
      font-size="18">
    nombre d'arrivée
</text>

<!-- FLÈCHE GAUCHE -->

<line x1="260"
      y1="105"
      x2="340"
      y2="105"
      stroke="var(--primary-medium)"
      stroke-width="4"
      marker-end="url(#arrowFunc)"/>

<!-- FLÈCHE DROITE -->

<line x1="560"
      y1="105"
      x2="640"
      y2="105"
      stroke="var(--primary-medium)"
      stroke-width="4"
      marker-end="url(#arrowFunc)"/>

    </div>

    <div class="notion-box">

        <p>
            Une fonction transforme donc un nombre
            de départ appelé
            <strong>antécédent</strong>
            en un nombre d'arrivée appelé
            <strong>image</strong>.
        </p>

    </div>

    <h3 class="section-title">
        Notation
    </h3>

    <p>
        Les fonctions sont généralement notées
        par une lettre :
        <strong>$f$</strong>,
        <strong>$g$</strong>,
        <strong>$h$</strong>...
    </p>

    <p>
        Une fonction peut être notée :
    </p>

    <p style="text-align:center;font-size:1.5em;">
        $f : x \\mapsto f(x)$
    </p>

    <div style="text-align:center;margin:35px 0;">

        <svg width="900" height="180">
<defs>

    <filter id="shadowNotation"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%">

        <feDropShadow
            dx="0"
            dy="3"
            stdDeviation="4"
            flood-opacity="0.18"/>

    </filter>

</defs>

<!-- Carte centrale -->

<rect x="300"
      y="20"
      width="300"
      height="60"
      rx="15"
      fill="#eff6ff"
      stroke="var(--primary)"
      stroke-width="3"
      filter="url(#shadowNotation)"/>

<!-- Expression -->

<text x="450"
      y="60"
      text-anchor="middle"
      fill="var(--primary-dark)"
      font-size="32"
      font-style="italic">

    f : x → f(x)

</text>

<!-- Trait vers f -->

<line x1="382"
      y1="70"
      x2="240"
      y2="150"
      stroke="var(--primary-medium)"
      stroke-width="3"/>

<text x="90"
      y="175"
      fill="var(--primary-dark)"
      font-size="24">
    nom de la fonction
</text>

<!-- Trait vers x -->

<line x1="425"
      y1="70"
      x2="448"
      y2="145"
      stroke="var(--primary-medium)"
      stroke-width="3"/>

<text x="375"
      y="175"
      fill="var(--primary-dark)"
      font-size="24">
    antécédent
</text>

<!-- Trait vers f(x) -->

<line x1="490"
      y1="70"
      x2="690"
      y2="150"
      stroke="var(--primary-medium)"
      stroke-width="3"/>

<text x="655"
      y="175"
      fill="var(--primary-dark)"
      font-size="24">
    image
</text>
        </svg>

    </div>

    <div class="method-box">

        <span class="method-badge">
            🚀 Exemple
        </span>

        <p style="text-align:center;font-size:1.3em;">
            $f(3)=7$
        </p>

        <p>
            Cette écriture signifie que : on a rentré  le nombre $3$ comme nombre de départ dans la fonction $f$ et il en est sorti le nombre $7$ comme nombre d'arrivée.
        </p>

        <ul>
            <li>
                3 est un antécédent de 7 ;
            </li>

            <li>
                7 est l'image de 3 par la fonction f.
            </li>
        </ul>

    </div>

    <div class="notion-box">

        <strong style="color:var(--primary);">
            À retenir
        </strong>

        <ul>
            <li>
                L'antécédent est le nombre de départ.
            </li>

            <li>
                L'image est le nombre d'arrivée.
            </li>

            <li>
                Une fonction associe un unique nombre
                d'arrivée à chaque nombre de départ.
            </li>
        </ul>

    </div>
    <button class="btn-check-understanding"
                                    data_quiz_target="quiz-area-fonctionsgene"
                                    onclick="startQuizFromButton('quiz-area-fonctionsgene', '38121')">
                                    Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-fonctionsgene"></div>
    <h3 class="section-title">
    Représentation des fonctions
</h3>

<p>
    Une fonction peut être représentée de plusieurs façons différentes.
</p>

<p>
    Ces différentes représentations décrivent exactement la même fonction.
</p>

<p>
    On peut connaitre une fonction :
</p>

<ul>
    <li>grâce à son <strong>expression algébrique</strong> (sa formule) ;</li>
    <li>grâce à un <strong>tableau de valeurs</strong> ;</li>
    <li>grâce à sa <strong>représentation graphique</strong>.</li>
</ul>

<div class="notion-box">

    <p>
        Une fonction peut être définie sous l'une de ces trois formes.
    </p>

    <p>
        Si l'on connait l'une d'entre elles, il est souvent possible de retrouver les deux autres.
    </p>

</div>

<h4 class="section-title">
    Expression algébrique
</h4>

<p>Une fonction peut être définie à l'aide d'une formule mathématique.</p>
<p>Cette formule permet de calculer l'image d'un nombre ou de rechercher un antécédent.</p>

<div class="notion-box">
<p><strong>Déterminer une image : </strong>Je remplace la variable par sa valeur puis je calcule.</p>
</div>

<p>
    Exemple :
</p>

<p>
    La fonction <strong>g</strong> transforme tout nombre
    <strong>x</strong> en son image <strong>g(x)</strong>.
</p>

<p>
    Dans notre cas :
</p>

<p style="text-align:center;">
    $g(x)=x^2+2$
</p>

<p>
    <stonrg>Calculer l'image de 4 par la fonction g.</strong>
</p>
<div style="display:flex;justify-content:center;margin:15px 0;">
<svg width="280" height="60" viewBox="0 0 280 60">

    <defs>
        <marker id="miniArrow"
                markerWidth="6"
                markerHeight="6"
                refX="5"
                refY="3"
                orient="auto">

            <polygon points="0,0 6,3 0,6"
                     fill="var(--primary-medium)"/>

        </marker>
    </defs>

    <!-- 4 -->

    <rect x="10"
          y="10"
          width="60"
          height="40"
          rx="10"
          fill="#eff6ff"
          stroke="var(--primary)"/>

    <text x="40"
          y="36"
          text-anchor="middle"
          fill="var(--primary-dark)"
          font-size="20"
          font-weight="bold">
        x=4
    </text>

    <!-- flèche -->

    <line x1="70"
          y1="30"
          x2="110"
          y2="30"
          stroke="var(--primary-medium)"
          stroke-width="3"
          marker-end="url(#miniArrow)"/>

    <!-- fonction -->

    <rect x="110"
          y="10"
          width="60"
          height="40"
          rx="10"
          fill="var(--primary-light)"
          stroke="var(--primary)"/>

    <text x="140"
          y="36"
          text-anchor="middle"
          fill="var(--primary-dark)"
          font-size="20"
          font-weight="bold">
          x²+2
    </text>

    <!-- flèche -->

    <line x1="170"
          y1="30"
          x2="210"
          y2="30"
          stroke="var(--primary-medium)"
          stroke-width="3"
          marker-end="url(#miniArrow)"/>

    <!-- image -->

    <rect x="210"
          y="10"
          width="60"
          height="40"
          rx="10"
          fill="#eff6ff"
          stroke="var(--primary)"/>

    <text x="240"
          y="36"
          text-anchor="middle"
          fill="var(--primary-dark)"
          font-size="20"
          font-weight="bold">
        g(x)=?
    </text>

</svg>
</div>
<p style="text-align:center;">
    $g(x)=x^2+2$
</p>

<p style="text-align:center;">
    Donc :
</p>

<p style="text-align:center;">
    $g(4)=4^2+2$
</p>

<p style="text-align:center;">
    $g(4)=16+2$
</p>

<p style="text-align:center;">
    $g(4)=18$
</p>



<p>
    L'image de 4 par la fonction g est 18. $\\quad g(4)=18$
</p>



</div>

<hr>

<div class="notion-box"><p><strong>Déterminer un antécédent : </strong>J'écris une équation puis je la résous.</p></div>

<p>Exemple :</p>

<p>
    Considérons la fonction : $\\quad h(x)=2x+5$
</p>

 
<p>
    Pour déterminer un antécédent de 17, on cherche le nombre dont l'image vaut 17.
</p>
<div style="display:flex;justify-content:center;margin:15px 0;">
<svg width="280" height="60" viewBox="0 0 280 60">

    <defs>
        <marker id="miniArrow"
                markerWidth="6"
                markerHeight="6"
                refX="5"
                refY="3"
                orient="auto">

            <polygon points="0,0 6,3 0,6"
                     fill="var(--primary-medium)"/>

        </marker>
    </defs>

    <!-- 4 -->

    <rect x="10"
          y="10"
          width="60"
          height="40"
          rx="10"
          fill="#eff6ff"
          stroke="var(--primary)"/>

    <text x="40"
          y="36"
          text-anchor="middle"
          fill="var(--primary-dark)"
          font-size="20"
          font-weight="bold">
        x=?
    </text>

    <!-- flèche -->

    <line x1="70"
          y1="30"
          x2="110"
          y2="30"
          stroke="var(--primary-medium)"
          stroke-width="3"
          marker-end="url(#miniArrow)"/>

    <!-- fonction -->

    <rect x="110"
          y="10"
          width="60"
          height="40"
          rx="10"
          fill="var(--primary-light)"
          stroke="var(--primary)"/>

    <text x="140"
          y="36"
          text-anchor="middle"
          fill="var(--primary-dark)"
          font-size="20"
          font-weight="bold">
            2x+5
    </text>

    <!-- flèche -->

    <line x1="170"
          y1="30"
          x2="210"
          y2="30"
          stroke="var(--primary-medium)"
          stroke-width="3"
          marker-end="url(#miniArrow)"/>

    <!-- image -->

    <rect x="210"
          y="10"
          width="60"
          height="40"
          rx="10"
          fill="#eff6ff"
          stroke="var(--primary)"/>

    <text x="240"
          y="36"
          text-anchor="middle"
          fill="var(--primary-dark)"
          font-size="20"
          font-weight="bold">
        17
    </text>

</svg>
</div>
<p>
    On écrit donc l'équation :
</p>

<p style="text-align:center;">
    $h(x)=17$
</p>

<p style="text-align:center;">
    $2x+5=17$
</p>

<p style="text-align:center;">
    $2x=12$
</p>

<p style="text-align:center;">
    $x=6$
</p>
<p>
    6 est un antécédent de 17. on a bien $\\quad h(6)=17$
</p>

<button class="btn-check-understanding"
                                    data_quiz_target="quiz-area-fonctionsexpresimante"
                                    onclick="startQuizFromButton('quiz-area-fonctionsexpresimante', '38131')">
                                    Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-fonctionsexpresimante"></div>
<h4 class="section-title">
    Tableau de valeurs
</h4>

<p>
    Une fonction peut être représentée par un tableau associant des antécédents à leurs images.
</p>

<p>
    Chaque colonne du tableau correspond à un couple :
</p>

<p style="text-align:center;">
    (antécédent ; image)
</p>
<p>
    Voici un tableau correspondant à la fonction :
</p>

<p style="text-align:center;">
    $h(x)=2x+5$
</p>

<div class="table-container">


<table class="custom-table">

    <thead>
        <tr>
            <th>$x$</th>
            <th>-2</th>
            <th>0</th>
            <th>2</th>
            <th>4</th>
            <th>6</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <th>$h(x)$</th>
            <td>1</td>
            <td>5</td>
            <td>9</td>
            <td>13</td>
            <td>17</td>
        </tr>
    </tbody>

</table>


</div>

<div class="notion-box">


<p>
    <strong>Déterminer une image dans un tableau</strong>
</p>

<p>
    Je repère l'antécédent sur la première ligne puis je lis son image sur la deuxième ligne dans la même colonne.
</p>


</div>

<p>
    Exemple :
</p>

<p>
    Déterminer l'image de 4.
</p>

<p>
    Je cherche 4 sur la première ligne.
</p>

<p>
    Dans la même colonne, je lis :
</p>

<p style="text-align:center;">
    $h(4)=13$
</p>

<div style="display:flex;justify-content:center;margin:15px 0;">

<svg width="280" height="60" viewBox="0 0 280 60">


<defs>
    <marker id="miniArrowTab1"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto">

        <polygon points="0,0 6,3 0,6"
                 fill="var(--primary-medium)"/>

    </marker>
</defs>

<rect x="10" y="10"
      width="60" height="40"
      rx="10"
      fill="#eff6ff"
      stroke="var(--primary)"/>

<text x="40" y="36"
      text-anchor="middle"
      fill="var(--primary-dark)"
      font-size="20"
      font-weight="bold">
    4
</text>

<line x1="70" y1="30"
      x2="110" y2="30"
      stroke="var(--primary-medium)"
      stroke-width="3"
      marker-end="url(#miniArrowTab1)"/>

<rect x="110" y="10"
      width="60" height="40"
      rx="10"
      fill="var(--primary-light)"
      stroke="var(--primary)"/>

<text x="140" y="36"
      text-anchor="middle"
      fill="var(--primary-dark)"
      font-size="20"
      font-weight="bold">
    h
</text>

<line x1="170" y1="30"
      x2="210" y2="30"
      stroke="var(--primary-medium)"
      stroke-width="3"
      marker-end="url(#miniArrowTab1)"/>

<rect x="210" y="10"
      width="60" height="40"
      rx="10"
      fill="#eff6ff"
      stroke="var(--primary)"/>

<text x="240" y="36"
      text-anchor="middle"
      fill="var(--primary-dark)"
      font-size="20"
      font-weight="bold">
    13
</text>


</svg>

</div>

<hr>

<div class="notion-box">


<p>
    <strong>Déterminer un antécédent dans un tableau</strong>
</p>

<p>
    Je repère l'image sur la deuxième ligne puis je lis l'antécédent correspondant sur la première ligne dans la même colonne.
</p>


</div>

<p>
    Exemple :
</p>

<p>
    Déterminer un antécédent de 17.
</p>

<p>
    Je cherche 17 sur la deuxième ligne.
</p>

<p>
    Dans la même colonne, je lis :
</p>

<p style="text-align:center;">
    $h(6)=17$
</p>

<p>
    Donc :
</p>

<p style="text-align:center;">
    6 est un antécédent de 17.
</p>

<div style="display:flex;justify-content:center;margin:15px 0;">

<svg width="280" height="60" viewBox="0 0 280 60">


<defs>
    <marker id="miniArrowTab2"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto">

        <polygon points="0,0 6,3 0,6"
                 fill="var(--primary-medium)"/>

    </marker>
</defs>

<rect x="10" y="10"
      width="60" height="40"
      rx="10"
      fill="#eff6ff"
      stroke="var(--primary)"/>

<text x="40" y="36"
      text-anchor="middle"
      fill="var(--primary-dark)"
      font-size="20"
      font-weight="bold">
    6
</text>

<line x1="70" y1="30"
      x2="110" y2="30"
      stroke="var(--primary-medium)"
      stroke-width="3"
      marker-end="url(#miniArrowTab2)"/>

<rect x="110" y="10"
      width="60" height="40"
      rx="10"
      fill="var(--primary-light)"
      stroke="var(--primary)"/>

<text x="140" y="36"
      text-anchor="middle"
      fill="var(--primary-dark)"
      font-size="20"
      font-weight="bold">
    h
</text>

<line x1="170" y1="30"
      x2="210" y2="30"
      stroke="var(--primary-medium)"
      stroke-width="3"
      marker-end="url(#miniArrowTab2)"/>

<rect x="210" y="10"
      width="60" height="40"
      rx="10"
      fill="#eff6ff"
      stroke="var(--primary)"/>

<text x="240" y="36"
      text-anchor="middle"
      fill="var(--primary-dark)"
      font-size="20"
      font-weight="bold">
    17
</text>
</svg>
</div>

<button class="btn-check-understanding"
                                    data_quiz_target="quiz-area-fonctionstabimante"
                                    onclick="startQuizFromButton('quiz-area-fonctionstabimante', '38132')">
                                    Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-fonctionstabimante"></div>
<h4 class="section-title">
    Représentation graphique
</h4>

<p>
    Une fonction peut également être représentée par une courbe dans un repère.
    Chaque point de la courbe possède des coordonnées :
    (antécédent ; image) qu'on peut aussi écrire $(x ; f(x))$</p>
    <p>L'abscisse du point correspond à l'antécédent et son ordonnée correspond à l'image.
</p>



<div style="display:flex;justify-content:center;margin:25px 0;">

$(x ,; f(x))$

</div>

<div class="notion-box">

    <p>
        Pour déterminer une image sur un graphique :
    </p>

    <ul>
        <li>je pars de l'antécédent sur l'axe horizontal ;</li>
        <li>je rejoins la courbe ;</li>
        <li>je lis l'image sur l'axe vertical.</li>
    </ul>

</div>

<p>
    Reprenons la fonction déjà étudiée :
</p>

<p style="text-align:center;">
    $h(x)=2x+5$
</p>

<p>
    Déterminer l'image de 4.
</p>

<div style="display:flex;justify-content:center;margin:25px 0;">

<svg width="700" height="430" viewBox="0 0 700 430">

    <!-- AXES -->

    <line x1="80" y1="340"
          x2="640" y2="340"
          stroke="#444"
          stroke-width="2"/>

    <line x1="80" y1="340"
          x2="80" y2="40"
          stroke="#444"
          stroke-width="2"/>

    <!-- FLÈCHES DES AXES -->

    <polygon points="640,340 628,334 628,346"
             fill="#444"/>

    <polygon points="80,40 74,52 86,52"
             fill="#444"/>

    <!-- GRADUATIONS X -->

    <g font-size="16" fill="#444">

        <line x1="130" y1="335" x2="130" y2="345" stroke="#444"/>
        <text x="125" y="365">1</text>

        <line x1="180" y1="335" x2="180" y2="345" stroke="#444"/>
        <text x="175" y="365">2</text>

        <line x1="230" y1="335" x2="230" y2="345" stroke="#444"/>
        <text x="225" y="365">3</text>

        <line x1="280" y1="335" x2="280" y2="345" stroke="#444"/>
        <text x="275" y="365">4</text>

        <line x1="330" y1="335" x2="330" y2="345" stroke="#444"/>
        <text x="325" y="365">5</text>

        <line x1="380" y1="335" x2="380" y2="345" stroke="#444"/>
        <text x="375" y="365">6</text>

        <line x1="430" y1="335" x2="430" y2="345" stroke="#444"/>
        <text x="425" y="365">7</text>

    </g>

    <!-- GRADUATIONS Y -->

    <g font-size="16" fill="#444">

        <line x1="75" y1="265" x2="85" y2="265" stroke="#444"/>
        <text x="55" y="270">5</text>

        <line x1="75" y1="235" x2="85" y2="235" stroke="#444"/>
        <text x="50" y="240">7</text>

        <line x1="75" y1="205" x2="85" y2="205" stroke="#444"/>
        <text x="50" y="210">9</text>

        <line x1="75" y1="175" x2="85" y2="175" stroke="#444"/>
        <text x="45" y="180">11</text>

        <line x1="75" y1="145" x2="85" y2="145" stroke="#444"/>
        <text x="40" y="150">13</text>

        <line x1="75" y1="115" x2="85" y2="115" stroke="#444"/>
        <text x="40" y="120">15</text>

        <line x1="75" y1="85" x2="85" y2="85" stroke="#444"/>
        <text x="40" y="90">17</text>

    </g>

    <!-- DROITE h(x)=2x+5 -->

    <line x1="80"
          y1="265"
          x2="480"
          y2="25"
          stroke="black"
          stroke-width="3"/>

    <!-- POINT THÉORIQUE M(x ; h(x)) -->

    <circle cx="130"
            cy="235"
            r="5"
            fill="#add0fc87"/>

    <line x1="130"
          y1="235"
          x2="130"
          y2="340"
          stroke="#add0fc87"
          stroke-width="2"
          stroke-dasharray="6 6"/>

    <line x1="80"
          y1="235"
          x2="130"
          y2="235"
          stroke="#add0fc87"
          stroke-width="2"
          stroke-dasharray="6 6"/>

    <!-- BULLE M(x ; h(x)) -->

    <rect x="135"
          y="270"
          width="115"
          height="40"
          rx="10"
          fill="#eff6ff"/>

    <text x="185"
          y="296"
          text-anchor="middle"
          fill="var(--primary)"
          font-size="18"
          font-weight="bold">
        M(x ; h(x))
    </text>


    <!-- IMAGE DE 4 -->

    <line x1="280"
          y1="340"
          x2="280"
          y2="145"
          stroke="var(--primary)"
          stroke-width="3"
          stroke-dasharray="8 8"/>

    <line x1="80"
          y1="145"
          x2="280"
          y2="145"
          stroke="var(--primary)"
          stroke-width="3"
          stroke-dasharray="8 8"/>

    <circle cx="280"
            cy="145"
            r="6"
            fill="var(--primary)"/>

    <text x="290"
          y="170"
          fill="var(--primary)"
          font-size="22"
          font-weight="bold">
        h(4)=13
    </text>

    <!-- ANTÉCÉDENT DE 17 -->

    <line x1="80"
          y1="85"
          x2="380"
          y2="85"
          stroke="var(--secondary)"
          stroke-width="3"
          stroke-dasharray="8 8"/>

    <line x1="380"
          y1="85"
          x2="380"
          y2="340"
          stroke="var(--secondary)"
          stroke-width="3"
          stroke-dasharray="8 8"/>

    <circle cx="380"
            cy="85"
            r="6"
            fill="var(--secondary)"/>

    <text x="405"
          y="90"
          fill="var(--secondary)"
          font-size="22"
          font-weight="bold">
        h(6)=17
    </text>

    <!-- NOM DE LA COURBE -->

    <text x="500"
          y="40"
          fill="black"
          font-size="22"
          font-style="italic">
        Cₕ
    </text>

    <!-- NOMS DES AXES -->

    <text x="-5"
          y="70"
          font-size="20"
          fill="#444">
        Axe des images
    </text>

    <text x="445"
          y="392"
          font-size="20"
          fill="#444">
        Axe des antécédents
    </text>

</svg>

</div>

    <p>
        L'image de 4 est 13.
    </p>

    <p style="text-align:center;">
        $h(4)=13$
    </p>


    <p>
        Pour déterminer un antécédent sur un graphique :
    </p>

    <ul>
        <li>je pars de l'image sur l'axe vertical ;</li>
        <li>je rejoins la courbe ;</li>
        <li>je lis l'antécédent sur l'axe horizontal.</li>
    </ul>


<p>
    Déterminer un antécédent de 17.
</p>



    <p>
        6 est un antécédent de 17.
    </p>

    <p style="text-align:center;">
        $h(6)=17$
    </p>


<button class="btn-check-understanding"
                                    data_quiz_target="quiz-area-fonctionsgraphimante"
                                    onclick="startQuizFromButton('quiz-area-fonctionsgraphimante', '38133')">
                                    Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-fonctionsgraphimante"></div>





</section>
                                    <!-- FONCTION LINÉAIRE -->
                                    <section class="course-section">
                                        <h2 class="section-title">Fonction linéaire</h2>
                                        <h3 class="section-title">Définition</h3>

                                        <p>
                                            Une fonction linéaire est une fonction qui
                                            multiplie toujours le nombre de départ
                                            par un même nombre.
                                        </p>

                                        <div class="notion-box">
                                            <p>Une fonction linéaire s'écrit  :</p>
                                            <p style="text-align:center;font-size:1.2rem;">$f : x \\rightarrow ax$ $\\quad$   ou $\\quad$   $f(x)=ax$</p>
                                            <p>Le nombre réél <strong>a</strong> est appelé <strong>coefficient de linéarité</strong>.</p>
                                        </div>

                                        <p>Exemple :</p>
                                        <p style="text-align:center;">$f(x)=3x$</p>

                                        <p>Cette fonction multiplie tous les nombres de départ par 3.</p>

                                    <div style="text-align:center;margin:20px 0;">

                                        <svg width="700" height="120" viewBox="0 0 700 120">


                                        <rect x="40"
                                            y="25"
                                            width="170"
                                            height="60"
                                            rx="12"
                                            fill="#eff6ff"
                                            stroke="var(--primary)"
                                            stroke-width="2"/>

                                        <text x="125"
                                            y="50"
                                            text-anchor="middle"
                                            font-size="24"
                                            font-weight="bold"
                                            fill="var(--primary-dark)">
                                            Antécédent
                                        </text>

                                        <text x="125"
                                            y="72"
                                            text-anchor="middle"
                                            font-size="16"
                                            fill="#666">
                                            nombre de départ
                                        </text>

                                        <line x1="210"
                                            y1="55"
                                            x2="320"
                                            y2="55"
                                            stroke="var(--primary-medium)"
                                            stroke-width="5"/>

                                        <polygon points="320,55 305,47 305,63"
                                                fill="var(--primary-medium)"/>

                                        <rect x="320"
                                            y="15"
                                            width="120"
                                            height="80"
                                            rx="12"
                                            fill="var(--primary-light)"
                                            stroke="var(--primary)"
                                            stroke-width="2"/>

                                        <text x="380"
                                            y="63"
                                            text-anchor="middle"
                                            font-size="28"
                                            font-weight="bold"
                                            fill="var(--primary-dark)">
                                            × 3
                                        </text>

                                        <line x1="440"
                                            y1="55"
                                            x2="550"
                                            y2="55"
                                            stroke="var(--primary-medium)"
                                            stroke-width="5"/>

                                        <polygon points="550,55 535,47 535,63"
                                                fill="var(--primary-medium)"/>

                                        <rect x="550"
                                            y="25"
                                            width="110"
                                            height="60"
                                            rx="12"
                                            fill="#eff6ff"
                                            stroke="var(--primary)"
                                            stroke-width="2"/>

                                        <text x="605"
                                            y="50"
                                            text-anchor="middle"
                                            font-size="24"
                                            font-weight="bold"
                                            fill="var(--primary-dark)">
                                            Image
                                        </text>

                                        <text x="605"
                                            y="72"
                                            text-anchor="middle"
                                            font-size="16"
                                            fill="#666">
                                            résultat
                                        </text>
                                        </svg>

                                    </div>

                                    <div class="notion-box">
                                        <p>Une fonction linéaire de coefficient $a$ est la fonction qui à tout nombre $x$ associe le nombre $a \\times x$</p>
                                    </div>                                    
                                    <div style="display:flex;gap:30px;flex-wrap:wrap;align-items:flex-start;">
                                        <div style="flex:1; min-width:260px;">

                                            <h5 style="color:var(--primary);margin-top:0;">exemples :</h5>
                                            <p>$g(x) = -3x$</p>
                                            <p>$h(x) = 5x$ </p>
                                            <p>$j(x) = \\frac{3}{2} x$ </p>
                                            <p>sont des fonctions linéaires car elles sont bien de la forme « un nombre multiplié par la variable » </p>
                                            <p>on dit que -3 ; 5 et $\\frac{3}{2}$ sont leurs coefficient de linéarité</p>
                                        </div>
                                        <div style="flex:1; min-width:260px;">
                                            <h5 style="color:var(--primary);margin-top:0;">Contre exemples :</h5>                                              
                                            <p>$k(x) = 3x + 2$ n’est pas une fonction linéaire car +2</p>
                                            <p>$l(x) = 2x^2$ n’est pas une fonction linéaire car $x^2$</p>
                                            <p>$m(x) = -3\\sqrt{x}$ n’est pas une fonction linéaire car $\\sqrt{x}$</p>
                                            <br>
                                            <br>
                                        </div>
                                    </div>
                                    <br>                                  
<div class="method-box">

    <span class="method-badge">
        🚀 Méthodes essentielles
    </span>

    <div style="display:flex;gap:30px;flex-wrap:wrap;align-items:flex-start;">

        <!-- IMAGE -->

        <div style="flex:1; min-width:260px;">

            <h5 style="color:var(--primary);margin-top:0;text-align:center;">Trouver une image</h5>

            <p>Soit :</p>
            <p style="text-align:center;">$f(x)=3x$</p>
            <p>Calculer l'image de 5.</p>
            <p style="text-align:center;">$f(5)=3\\times5$</p>
            <p style="text-align:center;">$f(5)=15$</p>
            <br>
            <div class="notion-box" style="margin-top:15px;">
                <strong style="color:var(--primary);"> Méthode</strong>
                <p>Je remplace x par sa valeur puis je calcule.</p>
            </div>

        </div>

        <!-- ANTÉCÉDENT -->

        <div style="flex:1; min-width:260px;">

            <h5 style="
                color:var(--secondary);
                margin-top:0;
                text-align:center;
            ">
                Trouver un antécédent
            </h5>

            <p>
                Soit :
            </p>

            <p style="text-align:center;">
                $f(x)=3x$
            </p>

            <p>
                Trouver l'antécédent de 15.
            </p>

            <p style="text-align:center;">$3x=15$ </p>
            <p style="text-align:center;">$x=15\\div3$</p>
            <p style="text-align:center;">$x=5$</p>
            <div class="notion-box" style="margin-top:15px;">
                <strong style="color:var(--secondary);">Méthode</strong>
                <p>J'écris une équationpuis je la résous.</p>
            </div>
        </div>

    </div>
<!-- COEFICIENT -->
<h5 style="
                color:var(--secondary);
                margin-top:0;
                text-align:center;
            ">
                Trouver le coeficient
            </h5>
            <p> pour trouver le coefficient tu auras besoin de deux valeurs (l'antécédent  et l'image ) qui seront forcément données sous une forme ou sous une autre par le sujet.</p>
            <p> tu pourras avoir la valeur initiale (5 par exemple) et la valeur finale (8 par exemple), ou tu pourras avoir $f(5)=8$, ou encore la fonction passe par le point A(5;8)</p>
            <p> toutes ces façons de présenter les choses reviennet au même; Tu sais que   $f(x)=a \\times x$</p> 
            <p> Donc en remplaçant $x$ l'antécédent par sa valeur et $f(x)$ l'image par sa valeur dans l'équation ci dessus tu auras : $8 = a \\times 5$ et il ne te resteras plus qu'a résoudre l'équation comme pour une recherche d'antécédent. Ici $x=\\frac{8}{5}</p>


</div>
<button class="btn-check-understanding"
                                    data_quiz_target="quiz-area-fonctionslineimante"
                                    onclick="startQuizFromButton('quiz-area-fonctionslineimante', '38211')">
                                    Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-fonctionslineimante"></div>


<h4 class="section-title">
    Tableau de valeurs
</h4>

<p>
    Une fonction peut être représentée par un
    tableau de proportionnalité car on multiplie toujours par le même nombre.
    Chaque colonne associe un antécédent à son image.
</p>

<div style="overflow-x:auto;margin:20px 0;">

    <table style="
        border-collapse:collapse;
        margin:auto;
        text-align:center;
        min-width:600px;
    ">

        <tr>
        </tr>

        <tr>

            <th style="
                border:2px solid var(--primary);
                padding:10px 15px;
                background:#eff6ff;
            ">
                Antécédent
            </th>

            <th style="
                border:2px solid var(--primary);
                padding:10px 15px;
                background:#eff6ff;
            ">
                $x$
            </th>

            <td style="border:1px solid #ccc;padding:10px;">0</td>
            <td style="border:1px solid #ccc;padding:10px;">1</td>
            <td style="border:1px solid #ccc;padding:10px;">2</td>
            <td style="border:1px solid #ccc;padding:10px;">3</td>
            <td style="
                border:2px solid var(--primary);
                padding:10px;
                font-weight:bold;
            ">5</td>

        </tr>

        <tr>

            <th style="
                border:2px solid var(--primary);
                padding:10px 15px;
                background:#eff6ff;
            ">
                Image
            </th>

            <th style="
                border:2px solid var(--primary);
                padding:10px 15px;
                background:#eff6ff;
            ">
                $f(x)=3x$
            </th>

            <td style="border:1px solid #ccc;padding:10px;">0</td>
            <td style="border:1px solid #ccc;padding:10px;">3</td>
            <td style="border:1px solid #ccc;padding:10px;">6</td>
            <td style="border:1px solid #ccc;padding:10px;">9</td>
            <td style="
                border:2px solid var(--primary);
                padding:10px;
                font-weight:bold;
            ">
                15
            </td>

        </tr>

    </table>

</div>

<p>
    Dans ce tableau, on retrouve par exemple :
</p>

<ul>
    <li>$f(5)=15$</li>
    <li>5 est un antécédent de 15</li>
    <li>15 est l'image de 5</li>
</ul>


<h4 class="section-title">
    Représentation graphique et coefficient
</h4>

<p> Une fonction linéaire est représentée par une droite passant par l'origine du repère. Son coefficient détermine la pente de cette droite.</p>

<div style="text-align:center;margin:25px 0;">

<svg width="650"
     height="420"
     viewBox="0 0 650 420">

    <!-- AXES -->

    <line x1="80" y1="340"
          x2="600" y2="340"
          stroke="#444"
          stroke-width="2"/>

    <line x1="80" y1="340"
          x2="80" y2="40"
          stroke="#444"
          stroke-width="2"/>

    <polygon points="600,340 588,334 588,346"
             fill="#444"/>

    <polygon points="80,40 74,52 86,52"
             fill="#444"/>

    <!-- ORIGINE -->

    <circle cx="80"
            cy="340"
            r="5"
            fill="#444"/>

    <text x="62"
          y="362"
          font-size="16"
          fill="#444">
        O
    </text>

    <!-- GRADUATIONS -->

    <line x1="200"
          y1="335"
          x2="200"
          y2="345"
          stroke="#444"/>

    <text x="194"
          y="365"
          font-size="16">
        2
    </text>

    <line x1="75"
          y1="220"
          x2="85"
          y2="220"
          stroke="#444"/>

    <text x="55"
          y="225"
          font-size="16">
        6
    </text>

    <!-- DROITE PASSANT EXACTEMENT PAR O ET A -->

    <!-- DROITE -->

<line x1="80"
      y1="340"
      x2="520"
      y2="-100"
      stroke="var(--primary)"
      stroke-width="4"/>

    <!-- POINT A -->

    <circle cx="200"
            cy="220"
            r="7"
            fill="var(--secondary)"/>

    <text x="215"
          y="215"
          fill="var(--secondary)"
          font-size="18"
          font-weight="bold">
        A(2 ; 6)
    </text>

    <!-- FLÈCHE HORIZONTALE -->

    <line x1="80"
          y1="340"
          x2="188"
          y2="340"
          stroke="var(--secondary)"
          stroke-width="4"/>

    <polygon points="200,340 186,332 186,348"
             fill="var(--secondary)"/>

    <!-- FLÈCHE VERTICALE -->

    <line x1="200"
          y1="340"
          x2="200"
          y2="232"
          stroke="var(--secondary)"
          stroke-width="4"/>

    <polygon points="200,220 192,234 208,234"
             fill="var(--secondary)"/>

    <!-- VALEURS -->

    <text x="140"
          y="323"
          fill="var(--secondary)"
          font-size="20"
          font-weight="bold">
        2
    </text>

    <text x="215"
          y="285"
          fill="var(--secondary)"
          font-size="20"
          font-weight="bold">
        6
    </text>

    <!-- NOM DE LA FONCTION -->

    <text x="530"
          y="85"
          fill="var(--primary)"
          font-size="22"
          font-weight="bold">
        f(x)=3x
    </text>

    <!-- ENCADRÉ COEFFICIENT -->

    <rect x="375"
          y="150"
          width="200"
          height="130"
          rx="12"
          fill="#eff6ff"
          stroke="var(--primary)"
          stroke-width="1.5"/>

    <text x="475"
          y="182"
          text-anchor="middle"
          fill="var(--primary)"
          font-size="18"
          font-weight="bold">
        Coefficient
    </text>

    <text x="475"
          y="220"
          text-anchor="middle"
          fill="#444"
          font-size="18">
        a = y ÷ x
    </text>

    <text x="475"
          y="255"
          text-anchor="middle"
          fill="var(--secondary)"
          font-size="20"
          font-weight="bold">
        a = 6 ÷ 2 = 3
    </text>

</svg>

</div>

<div class="notion-box">
<strong style="color:var(--primary);">
        Lien avec la proportionnalité
    </strong>

    <p>Une fonction linéaire représente une situation de proportionnalité.</p>
    <p> Sa représentation graphique est donc une droite qui psse par l'orignie du repère.</p>
    <p>Retrouver le coefficient d'une fonction linéaire revient à retrouver le coefficient de proportionnalité.</p>
    <p>Si l'on avance de 1 unité sur l'axe des antécédents, on monte (ou descend) toujours de <strong>a</strong> unités.</p>
    <p>Si l'on avance de 2 unités,on monte (ou descend) de <strong>2a</strong> unités.</p>
    <p>Si l'on avance de x unités, on monte (ou descend) de y unités.</p>

</div>

<div class="method-box">

    <span class="method-badge">
        🚀 Retrouver le coefficient
    </span>

    <p>
        On lit les coordonnées d'un point de la droite
        autre que l'origine.
    </p>

    <p style="text-align:center;">
        $A(2;6)$
    </p>

    <p>
        Puis on applique :
    </p>

    <p style="text-align:center;">
        $a=\\frac{y}{x}$
    </p>

    <p style="text-align:center;">
        $a=\\frac{6}{2}=3$
    </p>

    <p>
        Le coefficient de cette fonction est donc 3.
    </p>

    <p style="text-align:center;">
        $f(x)=3x$
    </p>
<div class="notion-box">
                                            <p>Vocabulaire :</p>
                                            <p>On dit que (OA) est la <strong>droite d'équation</strong> $y = ax$</p>
                                            <p>Dans laquelle $a$ est appelé <strong>coefficient directeur</strong> de la droite</p>
                                        </div>
</div>
<button class="btn-check-understanding"
                                    data_quiz_target="quiz-area-fonctionslinecoef"
                                    onclick="startQuizFromButton('quiz-area-fonctionslinecoef', '38212')">
                                    Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-fonctionslinecoef"></div>
<h4 class="section-title">
    Modéliser une situation 
</h4>

                                        <p>A toute situation de proportionnalité, correspond une fonction linéaire. On dit qu’on peut modéliser le problème par une fonction linéaire.</p>
                                        <p>Exemple : Je souhaite faire un gâteau. Pour 2 personnes il me faut...</p>

                                        <p>Cette situation est modélisable par la fonction linéaire $f : x \\rightarrow 50x$</p>
                                        <p>Le coefficient de la fonction linéaire correspond au coefficient de proportionnalité.</p>

                                        <p>Je souhaite faire un gâteau. Pour 2 personnes il me faut 100g de farine. Ce problème est proportionnel. (Si je veux tripler le nombre de personnes je vais tripler la quantité de farine.)</p>
                                        <p>L’image $f(x) = 50x$ donne la quantité de farine à utiliser en fonction du nombre de personnes</p>
                                        <p>L’égalité $f(7) = 350$ signifie, pour cette situation, que pour 7 personnes j’aurai besoin de 350g de farine.</p>

                                        (pour davantage d'explications voir le chapitre 7 : proportionnalité)

                                        <h3 class="section-title">Calculer un pourcentage d’augmentation ou de diminution avec les fonctions linéaires</h3>
                                        <p>Une augmentation ou diminution de prix en pourcentage est une fonction linéaire, ce qui les rend plus simple à calculer.</p>
                                        <div class="notion-box">
                                            <p>En effet augmenter de 35% revient à utiliser la fonction $p(x) = 1,35x$</p>
                                            <p>Diminuer de 20% revient à utiliser la fonction $p(x) = 0,8x$</p>
                                            <p>Prendre 30% du prix revient à utiliser $0,30x$</p>
                                        </div>
                                        (pour davantage d'explications voir le chapitre 7 : proportionnalité)
                                        
                                    <button class="btn-check-understanding"
                                    data_quiz_target="quiz-area-fonctionslinemodel"
                                    onclick="startQuizFromButton('quiz-area-fonctionslinemodel', '38213')">
                                    Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-fonctionslinemodel"></div>
                                   
                                    <!-- FONCTION AFFINE -->
                                                <section class="course-section">
                                                    <h2 class="section-title">Fonction affine</h2>
                                                    <h3 class="section-title" style="font-size: 1.2rem;">Définition – Notation :</h3>
                                                    <p>Soit $a$ et $b$ deux nombres fixés.</p>
                                                    <p>En associant à chaque nombre « $x$ » un nombre « $ax + b$ » appelé image de $x$, on définit <strong class="text-primary">une fonction affine</strong>.</p>
                                                    <p>On notera cette fonction ainsi : $f : x \\rightarrow ax + b$.</p>
                                                    <p>L’image de $x$ sera notée : $f(x)$.</p>

                                                    <div class="notion-box">
                                                        <p><strong style="color: var(--primary);">Exemple :</strong> Soit $f$ est la fonction affine définie par : $f : x \\rightarrow 2x – 3$.</p>
                                                        <p>Alors :</p>
                                                        <ul style="list-style-type: none; padding-left: 0;">
                                                            <li>• L’image de $0$ est : $f(0) = 2 \\times 0 – 3 = 0 – 3 = –3$. C’est « $b$ »</li>
                                                            <li>• L’image de $5$ est : $f(5) = 2 \\times 5 – 3 = 10 – 3 = 7$.</li>
                                                            <li>• L’antécédent de $-5$ est : $f(x) = 2 \\times x – 3 = – 5$ alors $2x – 3 = - 5$ soit $2x = - 5 + 3$ et $x = -1$</li>
                                                        </ul>
                                                    </div>

                                                    <div class="notion-box" style="border-left-color: var(--secondary);">
                                                        <p><strong style="color: var(--secondary);">Remarques :</strong></p>
                                                        <p>- Si $b = 0$, on a : $f : x \\rightarrow ax$. On retrouve une fonction linéaire.</p>
                                                        <p>- Si $a = 0$, on a : $f : x \\rightarrow b$. On dit que c’est une fonction constante.</p>
                                                    </div>


                                    <button class="btn-check-understanding"
                                    data_quiz_target="quiz-area-fonctionsafinesdef"
                                    onclick="startQuizFromButton('quiz-area-fonctionsafinesdef', '38311')">
                                    Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-fonctionsafinesdef"></div>







                                                    <h3 class="section-title" style="font-size: 1.2rem;">Représentation graphique</h3>
                                                    <p>Soit $g$ la fonction affine définie par : $f : x \\rightarrow ax + b$.</p>
                                                    <p>L’ensemble des points de coordonnées $(x ; ax + b)$ est appelé représentation graphique de la fonction affine.</p>
                                                    

<h3 class="section-title" style="font-size: 1.2rem;">
    Représentation graphique
</h3>

<p>
    Soit la fonction affine définie par :
</p>

<p style="text-align:center;">
    $f(x)=2x-3$
</p>

<p>
    La représentation graphique d'une fonction affine est une droite.
</p>

<div style="text-align:center;margin:25px 0;">

<svg width="700" height="420" viewBox="0 0 700 420">

    <!-- AXES -->

    <line x1="80" y1="240"
          x2="650" y2="240"
          stroke="#444"
          stroke-width="2"/>

    <line x1="80" y1="370"
          x2="80"
          y2="40"
          stroke="#444"
          stroke-width="2"/>

    <polygon points="650,240 638,234 638,246"
             fill="#444"/>

    <polygon points="80,40 74,52 86,52"
             fill="#444"/>

    <!-- ORIGINE -->

    <text x="60"
          y="260"
          font-size="18">
        O
    </text>

    <!-- DROITE -->

    <line x1="80"
          y1="300"
          x2="600"
          y2="40"
          stroke="var(--primary)"
          stroke-width="4"/>

    <!-- POINT B -->

    <circle cx="80"
            cy="300"
            r="7"
            fill="var(--primary)"/>

    <text x="115"
          y="295"
          fill="var(--primary)"
          font-size="20"
          font-weight="bold">
        B(0 ; -3)
    </text>

    <!-- ORDONNÉE À L'ORIGINE -->

    <text x="95"
          y="325"
          fill="var(--primary)"
          font-size="20"
          font-weight="bold">
        b = -3
    </text>

    <text x="95"
          y="347"
          fill="var(--primary)"
          font-size="16">
        ordonnée à l'origine
    </text>

    <!-- POINT M -->

    <circle cx="300"
            cy="190"
            r="5"
            fill="var(--secondary)"/>

    <text x="280"
          y="178"
          fill="var(--secondary)"
          font-size="18"
          font-weight="bold">
        M
    </text>

    <!-- POINT A -->

    <circle cx="360"
            cy="160"
            r="7"
            fill="var(--secondary)"/>

    <text x="358"
          y="125"
          fill="var(--secondary)"
          font-size="18"
          font-weight="bold">
        A(5 ; 7)
    </text>

    <!-- DÉPLACEMENT HORIZONTAL -->

    <line x1="300"
          y1="190"
          x2="348"
          y2="190"
          stroke="var(--secondary)"
          stroke-width="4"/>

    <polygon points="360,190 346,182 346,198"
             fill="var(--secondary)"/>

    <!-- DÉPLACEMENT VERTICAL -->

    <line x1="360"
          y1="190"
          x2="360"
          y2="172"
          stroke="var(--secondary)"
          stroke-width="4"/>

    <polygon points="360,160 352,174 368,174"
             fill="var(--secondary)"/>

    <!-- ÉTIQUETTES -->

    <text x="320"
          y="200"
          fill="var(--secondary)"
          font-size="20"
          font-weight="bold">
        +1
    </text>

    <text x="375"
          y="182"
          fill="var(--secondary)"
          font-size="20"
          font-weight="bold">
        +2
    </text>

    <!-- NOM DE LA FONCTION -->

    <text x="500"
          y="35"
          fill="var(--primary)"
          font-size="24"
          font-weight="bold">
        f(x)=2x-3
    </text>

    <!-- ENCADRÉ COEFFICIENT -->

    <rect x="450"
          y="165"
          width="220"
          height="135"
          rx="12"
          fill="#eff6ff"
          stroke="var(--secondary)"
          stroke-width="1.5"/>

    <text x="560"
          y="205"
          text-anchor="middle"
          fill="var(--secondary)"
          font-size="20"
          font-weight="bold">
        Coefficient directeur
    </text>

    <text x="560"
          y="242"
          text-anchor="middle"
          fill="#444"
          font-size="18">
        avancer de 1
    </text>

    <text x="560"
          y="268"
          text-anchor="middle"
          fill="#444"
          font-size="18">
        fait monter de 2
    </text>

    <text x="560"
          y="295"
          text-anchor="middle"
          fill="var(--secondary)"
          font-size="22"
          font-weight="bold">
        2 ÷ 1 = 2
    </text>

</svg>

</div>

<div class="notion-box">

    <p>
        <strong style="color:var(--primary);">
            Ordonnée à l'origine
        </strong>
    </p>

    <p>
        Le nombre <strong>b</strong> indique l'endroit où la droite coupe l'axe des ordonnées.
    </p>

    <p style="text-align:center;">
        $f(x)=ax+b$
    </p>

    <p style="text-align:center;">
        $b=f(0)$
    </p>

</div>

<div class="notion-box">

    <p>
        <strong style="color:var(--secondary);">
            Coefficient directeur
        </strong>
    </p>

    <p>
        Le coefficient directeur indique la pente de la droite.
    </p>

    <p>
        Lorsque l'on avance de 1 unité horizontalement, il indique de combien la droite monte ou descend.
    </p>

</div>

<div style="display:flex;gap:20px;justify-content:center;flex-wrap:wrap;margin-top:20px;">

    <div class="notion-box" style="width:180px;text-align:center;">
        <p><strong>$a>0$</strong></p>
        <p style="font-size:2rem;color:var(--primary);">↗</p>
        <p>La droite monte.</p>
    </div>

    <div class="notion-box" style="width:180px;text-align:center;">
        <p><strong>$a=0$</strong></p>
        <p style="font-size:2rem;color:var(--primary);">→</p>
        <p>La droite est horizontale.</p>
    </div>

    <div class="notion-box" style="width:180px;text-align:center;">
        <p><strong>$a<0$</strong></p>
        <p style="font-size:2rem;color:var(--primary);">↘</p>
        <p>La droite descend.</p>
    </div>

</div>








                                                    <div class="notion-box">
                                                        <p>Dans un repère, cette représentation est <strong class="text-primary">LA droite</strong> qui passant par le point de coordonnées $(0 ; b)$</p>
                                                        <p>On dit que cette droite a pour <strong class="text-primary">équation</strong> : $y = ax + b$</p>
                                                        <p>$a$ est le <strong class="text-primary">coefficient directeur</strong>.</p>
                                                        <p>$b$ est l’<strong class="text-primary">ordonnée à l’origine</strong>. Il indique la « hauteur » à laquelle la droite coupe l’axe des ordonnées.</p>
                                                    </div>

                                                    <div class="notion-box" style="border-left-color: var(--secondary);">
                                                        <p><strong style="color: var(--secondary);">Remarques :</strong></p>
                                                        <p>- Si $a = 0$, la droite d’équation $y = b$ est parallèle à l’axe des abscisses.</p>
                                                        <p>- <strong class="text-primary">Toute droite non parallèle à l’axe des ordonnées admet une équation de la forme $y = ax + b$, et représente donc une fonction affine.</strong></p>
                                                    </div>

                                                                                    <button class="btn-check-understanding"
                                    data_quiz_target="quiz-area-fonctionsafinesgraphique"
                                    onclick="startQuizFromButton('quiz-area-fonctionsafinesgraphique', '38321')">
                                    Ai-je bien compris ?
                                    </button>
                                    <div id="quiz-area-fonctionsafinesgraphique"></div>    
                                                </section>
                                            </div>
                                        `
    }
};
