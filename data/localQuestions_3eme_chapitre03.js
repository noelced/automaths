// ============================================================
// data/localQuestions_3eme_chapitre03.js — 3ème, chapitre 3 : Calcul littéral
// ============================================================
// Généré à partir de l'ancien data/localQuestions.js.
// Clés renumérotées au format 6 chiffres : [niveau][chapitre 2 chiffres]
// [n° partie H2][n° sous-partie H3][n° questionnaire dans la sous-partie].
// Contenu des questions strictement inchangé, seule la clé a changé —
// voir le rapport de correspondance mapping_3eme.csv pour
// retrouver l'ancienne clé de chaque questionnaire.
// ============================================================

const localQuestions_3eme_chapitre03 = {
    "303111": [
    {
        quiz: { q: 'Soit le segment $[AC]$ composé de plusieurs segments de même longueur $x$. Si $AB = x$, quelle est l\'expression de la longueur $AC$ ?', a: '$3x$' },
        figure: `<svg viewBox="0 0 200 60"><polyline points="20,30 60,30 100,30 140,30 180,30" fill="none" stroke="black" stroke-width="2"/><line x1="20" y1="25" x2="20" y2="35" stroke="black"/><line x1="60" y1="25" x2="60" y2="35" stroke="black"/><line x1="100" y1="25" x2="100" y2="35" stroke="black"/><line x1="140" y1="25" x2="140" y2="35" stroke="black"/><text x="15" y="20" font-size="14">A</text><text x="55" y="20" font-size="14">B</text><text x="145" y="20" font-size="14">C</text><text x="95" y="50" font-size="12">$x$</text></svg>`,
        options: '$2x$ ¤ $3x$ ¤ $4x$ ¤ $x+3$ ¤ $x+2$',
        explanation: 'On compte les intervalles entre les graduations : de A à B il y a 1 segment, de B à C il y a 2 segments. Total : $1 + 2 = 3$ segments de longueur $x$, soit $3x$.'
    },

    // --- NIVEAU 2 : Sommes et combinaisons (ex: x + constante) ---
    {
        quiz: { q: 'Le segment $[AB]$ mesure $x$. Le segment $[BC]$ mesure $3$ cm. Exprime la longueur totale $[AC]$ en fonction de $x$.', a: '$x+3$' },
        figure: `<svg viewBox="0 0 200 60"><polyline points="20,30 80,30 140,30" fill="none" stroke="black" stroke-width="2"/><line x1="20" y1="25" x2="20" y2="35" stroke="black"/><line x1="80" y1="25" x2="80" y2="35" stroke="black"/><line x1="140" y1="25" x2="140" y2="35" stroke="black"/><text x="15" y="20" font-size="14">A</text><text x="75" y="20" font-size="14">B</text><text x="135" y="20" font-size="14">C</text><text x="45" y="50" font-size="12">$x$</text><text x="105" y="50" font-size="12">$3$</text></svg>`,
        options: '$3x$ ¤ $x+3$ ¤ $x * 3$ ¤ $4x$ ¤ $x-3$',
        explanation: 'La longueur totale est la somme des deux parties : la partie variable $x$ et la partie fixe $3$. Soit $x + 3$. Si tu marches en partant du point A pour aller jusqu\'au point C et marches $x$m entre A et B ET (donc +) 3m entre B et C'
    },
    {
        quiz: { q: 'Si le segment $[AB]$ vaut $2x$ et $[BC]$ vaut $5$ fois la longueur $[AB]$, exprime $[AC]$ en fonction de $x$.', a: '$12x$' },
        figure: `<svg viewBox="0 0 200 60"><polyline points="20,30 100,30 180,30" fill="none" stroke="black" stroke-width="2"/><line x1="20" y1="25" x2="20" y2="35" stroke="black"/><line x1="100" y1="25" x2="100" y2="35" stroke="black"/><line x1="180" y1="25" x2="180" y2="35" stroke="black"/><text x="15" y="20" font-size="14">A</text><text x="95" y="20" font-size="14">B</text><text x="175" y="20" font-size="14">C</text><text x="55" y="50" font-size="12">$2x$</text><text x="135" y="50" font-size="12">$5$</text></svg>`,
        options: '$7x$ ¤ $2x+5$ ¤ $10x$ ¤ $2(x+5)$ ¤ $12x$',
        explanation: 'On calcule $BC = 5 \\times AB = 5 \\times 2x=10x$ puis les deux longueurs : $AB+BC=2x+10x=12x$'
    },
        // Variante 1 : Le point C est situé à l'intérieur du segment [AB]
    {
    quiz: { q: 'Le segment $[AB]$ mesure $3x$. Le point $C$ est placé sur ce segment tel que $[BC] = 4$. Exprime la longueur $[AC]$ en fonction de $x$.', a: '$3x-4$' },
    figure: `<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
        <!-- Le segment principal [AB] -->
        <polyline points="20,30 180,30" fill="none" stroke="black" stroke-width="2"/>
        
        <!-- Graduations aux extrémités A et B -->
        <line x1="20" y1="25" x2="20" y2="35" stroke="black" stroke-width="1"/>
        <line x1="180" y1="25" x2="180" y2="35" stroke="black" stroke-width="1"/>
        
        <!-- Le point C (élément visuel ajouté) -->
        <circle cx="145" cy="30" r="4" fill="black"/>
        
        <!-- Étiquettes des sommets -->
        <text x="15" y="20" font-size="14" font-weight="bold">A</text>
        <text x="185" y="20" font-size="14" font-weight="bold">B</text>
        <text x="145" y="18" font-size="14" font-weight="bold" text-anchor="middle">C</text>
        
        <!-- Étiquettes des longueurs -->
        <text x="95" y="50" font-size="12" text-anchor="middle">$3x$</text>
        <text x="162" y="50" font-size="12">$4$</text>
    </svg>`,
    options: '$3x+4$ ¤ $3x-4$ ¤ $7x$ ¤ $3(x-4)$',
    explanation: 'Le segment total $[AB]$ est de $3x$. Comme le point $C$ est situé sur le segment et que la distance entre $B$ et $C$ est de $4$, la partie restante $[AC]$ correspond à la soustraction : $3x - 4$.'
},


    // Variante 2 : Comparaison de deux segments (Différence de longueur)
   {
    quiz: { q: 'Soit deux segments $[AB]$ de longueur $5x$ et $[CD]$ de longueur $2$. Exprime la différence de longueur entre ces deux segments en fonction de $x$.', a: '$5x-2$' },
    figure: `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <!-- Segment AB (en haut) -->
        <polyline points="20,30 160,30" fill="none" stroke="black" stroke-width="2"/>
        <line x1="20" y1="25" x2="20" y2="35" stroke="black" stroke-width="1"/>
        <line x1="160" y1="25" x2="160" y2="35" stroke="black" stroke-width="1"/>
        <text x="15" y="20" font-size="14" font-weight="bold">A</text>
        <text x="165" y="20" font-size="14" font-weight="bold">B</text>
        <text x="80" y="45" font-size="14">$5x$</text>

        <!-- Segment CD (en bas, environ la moitié de AB) -->
        <polyline points="30,70 110,70" fill="none" stroke="black" stroke-width="2"/>
        <line x1="30" y1="65" x2="30" y2="75" stroke="black" stroke-width="1"/>
        <line x1="110" y1="65" x2="110" y2="75" stroke="black" stroke-width="1"/>
        <text x="25" y="60" font-size="14" font-weight="bold">C</text>
        <text x="115" y="60" font-size="14" font-weight="bold">D</text>
        <text x="65" y="85" font-size="14">$2$</text>
    </svg>`,
    options: '$5x+2$ ¤ $3x$ ¤ $5x-2$ ¤ $7x$',
    explanation: 'Pour trouver la différence de longueur entre deux segments, on soustrait la plus petite valeur de la plus grande : $5x - 2$.'
},



    // --- NIVEAU 3 : Lignes brisées (changements de direction) et périmètres ---
    {
    quiz: { q: 'Exprime le périmètre total de cette ligne brisée en fonction de $a$.', a: '$4a$' },
    figure: `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <!-- La ligne brisée : points ajustés pour ne pas dépasser -->
        <polyline points="40,80 40,50 80,50 80,20 120,20" fill="none" stroke="black" stroke-width="2"/>
        
        <!-- Graduations (traits de mesure) -->
        <line x1="35" y1="60" x2="45" y2="65" stroke="blue" stroke-width="1"/>
        <line x1="60" y1="45" x2="60" y2="55" stroke="blue" stroke-width="1"/>
        <line x1="75" y1="35" x2="85" y2="30" stroke="blue" stroke-width="1"/>
        <line x1="100" y1="15" x2="100" y2="25" stroke="blue" stroke-width="1"/>

        <!-- Étiquettes de longueur $x$ sur chaque segment -->
        <text x="55" y="40" font-size="12">a</text>

        <!-- Sommets A et B -->
        <text x="30" y="90" font-size="14" font-weight="bold">A</text>
        <text x="125" y="15" font-size="14" font-weight="bold">B</text>
    </svg>`,
    options: '$3a$ ¤ $4a$ ¤ $a+3$ ¤ $a^4$',
    explanation: 'La ligne est composée de 4 segments et d\'après les codages bleus ils font tous la même longueur $a$. Donc la longueur total est $a+a+a+a=4a$.'
},


    // --- CARTE 1 : Division simple (C est sur la 1ère graduation) ---
    {
        quiz: { q: 'Le segment $[AB]$ a pour longueur $x$ il est divisé en 4 segments de même longueur. Le point $C$ se trouve sur la première graduation. Exprime la longueur $[AC]$ en fonction de $x$.', a: '$x/4$' },
        figure: `<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
            <polyline points="20,30 180,30" fill="none" stroke="black" stroke-width="2"/>
            <!-- Graduations -->
            <line x1="20" y1="25" x2="20" y2="35" stroke="black" stroke-width="1"/><text x="15" y="20" font-size="14">A</text>
            <line x1="56" y1="25" x2="56" y2="35" stroke="black" stroke-width="1"/>
            <line x1="92" y1="25" x2="92" y2="35" stroke="black" stroke-width="1"/>
            <line x1="128" y1="25" x2="128" y2="35" stroke="black" stroke-width="1"/>
            <line x1="160" y1="25" x2="160" y2="35" stroke="black" stroke-width="1"/><text x="165" y="20" font-size="14">B</text>
            <!-- Point C sur la 1ère graduation -->
            <circle cx="56" cy="30" r="4" fill="blue"/>
            <text x="52" y="18" font-size="14" font-weight="bold">C</text>
            <!-- Étiquettes de longueur -->
            <text x="95" y="50" font-size="12" text-anchor="middle">$5x$</text>
        </svg>`,
        options: '$x+4$ ¤ $x/4$ ¤ $4/x$ ¤ $x-4$',
        explanation: 'Le segment $[AB]$ est divisé en 4 parts égales. Chaque part vaut donc $x \\div 4$, soit $\\frac{x}{4}$ ou $\\frac{1}{4} \\times x$. Comme $C$ est sur la première graduation, $[AC] = \\frac{x}{4}$.'
    },

    // --- CARTE 2 : Division avec position intermédiaire (C est sur la 3ème graduation) ---
    {
        quiz: { q: 'Le segment $[AB]$ mesure $x$. Le point $C$ est placé sur la deuxième graduation. Exprime la longueur $[AC]$ en fonction de $x$.', a: '$2x/3$' },
        figure: `<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
            <polyline points="20,30 180,30" fill="none" stroke="black" stroke-width="2"/>
            <!-- Graduations (4 segments) -->
            <line x1="20" y1="25" x2="20" y2="35" stroke="black" stroke-width="1"/><text x="15" y="20" font-size="14">A</text>
            <line x1="60" y1="25" x2="60" y2="35" stroke="black" stroke-width="1"/>
            <line x1="100" y1="25" x2="100" y2="35" stroke="black" stroke-width="1"/>
            <line x1="140" y1="25" x2="140" y2="35" stroke="black" stroke-width="1"/><text x="145" y="20" font-size="14">B</text>
            <!-- Point C sur la 3ème graduation -->
            <circle cx="100" cy="30" r="4" fill="blue"/>
            <text x="100" y="18" font-size="14" font-weight="bold" text-anchor="middle">C</text>
            <!-- Étiquettes -->
            <text x="95" y="50" font-size="12" text-anchor="middle">$4x$</text>
        </svg>`,
        options: '$2/3x$ ¤ $2x/3$ ¤ $x/3$ ¤ $3x/2$',
        explanation: 'Le segment est divisé en 3 parts. Chaque part vaut $\\frac{x}{3}$. Le point $C$ est à la 2ème graduation, donc $[AC] = 2 \\times \\frac{x}{3} = \\frac{2x}{3}$. On évide d\'écrire 2/3x car ca peut vouloir dire $\\frac{2}{3x}$'
    },

    // --- CARTE 3 : Division avec un segment de départ connu (Modélisation inverse) ---
    {
        quiz: { q: 'Le point $C$ est situé sur le segment $[AB]$. On sait que $[AC] = x$ et que $C$ est la moitié du segment $[AB]$. Exprime $[AB]$ en fonction de $x$.', a: '$2x$' },
        figure: `<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
            <polyline points="20,30 180,30" fill="none" stroke="black" stroke-width="2"/>
            <line x1="20" y1="25" x2="20" y2="35" stroke="black" stroke-width="1"/><text x="15" y="20" font-size="14">A</text>
            <line x1="180" y1="25" x2="180" y2="35" stroke="black" stroke-width="1"/><text x="185" y="20" font-size="14">B</text>
            <!-- Point C au milieu -->
            <circle cx="100" cy="30" r="4" fill="blue"/>
            <text x="100" y="18" font-size="14" font-weight="bold" text-anchor="middle">C</text>
            <!-- Étiquettes -->
            <text x="55" y="50" font-size="12" text-anchor="middle">$x$</text>
            <text x="140" y="50" font-size="12" text-anchor="middle">$x$</text>
        </svg>`,
        options: '$x/2$ ¤ $x+2$ ¤ $2x$ ¤ $x^2$',
        explanation: 'Si $C$ est le milieu et que $[AC] = x$, alors la moitié du segment vaut $x$. Le segment total $[AB]$ est donc $x \\times 2 = 2x$.'
    },
 // --- CARTE 4 : Division avec un nombre constant (C est sur une graduation) ---
    {
    quiz: { q: 'Le segment $[AB]$ mesure $10$ cm. Il est divisé en $x$ segments égaux. Si le point $C$ est sur la première graduation, exprime $[AC]$ en fonction de $x$.', a: '$10/x$' },
    figure: `<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
        <!-- Le segment principal [AB] -->
        <polyline points="20,30 180,30" fill="none" stroke="black" stroke-width="2"/>
        
        <!-- Graduations : Pour x segments, il faut x+1 graduations. 
             Ici on en dessine 6 pour illustrer un cas où x=5 -->
        <line x1="20" y1="25" x2="20" y2="35" stroke="black" stroke-width="1"/><text x="15" y="20" font-size="14">A</text>
        <line x1="56" y1="25" x2="56" y2="35" stroke="black" stroke-width="1"/>
        <line x1="92" y1="25" x2="92" y2="35" stroke="black" stroke-width="1"/>
        <line x1="128" y1="25" x2="128" y2="35" stroke="black" stroke-width="1"/>
        <line x1="164" y1="25" x2="164" y2="35" stroke="black" stroke-width="1"/>
        <line x1="180" y1="25" x2="180" y2="35" stroke="black" stroke-width="1"/><text x="185" y="20" font-size="14">B</text>
        
        <!-- Point C sur la PREMIÈRE graduation après A (la graduation 1) -->
        <circle cx="56" cy="30" r="4" fill="blue"/>
        <text x="52" y="18" font-size="14" font-weight="bold">C</text>
        
        <!-- Étiquette de la longueur totale -->
        <text x="100" y="50" font-size="12" text-anchor="middle">10</text>
    </svg>`,
    options: '$10x$ ¤ $10/x$ ¤ $x/10$ ¤ $10-x$',
    explanation: 'Le segment $[AB]$ de $10$ cm est divisé en $x$ parts égales. La longueur d\'une seule part est donc $10 \div x$, soit $\\frac{10}{x}$. Comme le point $C$ est sur la première graduation après $A$, la distance $[AC]$ est égale à une part, soit $\\frac{10}{x}$.'
}
,
     // --- SECTION 1 : RECTANGLES (Lien entre variable et constante) ---
    {
        quiz: { q: 'Exprime le périmètre $P$ de ce rectangle en fonction de $a$.', a: '$2a + 10$' },
        figure: `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="30" width="120" height="40" fill="none" stroke="black" stroke-width="2"/>
            <text x="105" y="25" font-size="14" text-anchor="middle">a</text>
            <text x="170" y="55" font-size="14" text-anchor="middle">5</text>           
        </svg>`,
        options: '$2a + 10$ ¤ $a + 10$ ¤ $2(a-5)$ ¤ $10a$',
        explanation: 'Le périmètre signifie la longueur du tour de la figure. Donc la somme des côtés vaut : $a + a + 5 + 5 = 2a + 10$.'
    },
    {
        quiz: { q: 'Exprime l\'aire du rectangle ABDC en fonction de $x$.', a: '$3x$' },
        figure: `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="30" width="100" height="40" fill="none" stroke="black" stroke-width="2"/>
            <text x="95" y="25" font-size="14" text-anchor="middle">x</text>
            <text x="150" y="55" font-size="14" text-anchor="middle">3</text>
            <text x="35" y="85" font-size="14" text-anchor="middle">A</text>
            <text x="145" y="85" font-size="14" text-anchor="middle">B</text>
            <text x="35" y="15" font-size="14" text-anchor="middle">C</text>
            <text x="145" y="15" font-size="14" text-anchor="middle">D</text>
        </svg>`,
        options: '$3x$ ¤ $x^2 + 9x$ ¤ $3x^2$ ¤ $x(x+3)$',
        explanation: 'L\'aire d\'un rectangle est Longueur $\\times$ Largeur. Ici : $x \\times 3 = 3x$.'
    },

    // --- SECTION 2 : TRIANGLES RECTANGLES (Aires) ---
    {
        quiz: { q: 'Exprime l\'aire de ce triangle rectangle en fonction de $h$.', a: '$4h$' },
        figure: `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="40,80 40,20 120,80" fill="none" stroke="black" stroke-width="2"/>
            <text x="25" y="50" font-size="14">h</text>
            <text x="85" y="95" font-size="14">8</text>
        </svg>`,
        options: '$8h$ ¤ $4h$ ¤ $8h/2$ ¤ $h+8$', 
        // Note: 8h/2 est aussi correct, mais on attend la forme réduite 4h.
        explanation: 'L\'aire d\'un triangle rectangle est $\\frac{Base \\times Hauteur}{2}$. Ici : $\\frac{8 \\times h}{2} = 4h$. 8h/2 est aussi correct, mais on donne toujours la forme réduite'
    },
    {
        quiz: { q: 'Exprime l\'aire de ce triangle rectangle en fonction de $b$.', a: '$3b^2/2$' },
        figure: `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="40,80 40,20 100,80" fill="none" stroke="black" stroke-width="2"/>
            <text x="35" y="95" font-size="14" font-weight="bold">A</text>
            <text x="105" y="85" font-size="14" font-weight="bold">B</text>
            <text x="35" y="15" font-size="14" font-weight="bold">C</text>
            <text x="25" y="50" font-size="14">b</text>
            <text x="75" y="95" font-size="14">3b</text>
        </svg>`,
        options: '$3b^2/2$ ¤ $6b$ ¤ $3b/2$ ¤ $b^2 + 3$',
        explanation: 'L\'aire est $\\frac{base \\times hauteur}{2}$. Ici : $\\frac{3b \\times b}{2} = \\frac{3b^2}{2}$.'
    },

    // --- SECTION 3 : TRIANGLES ISOCÈLES ET ÉQUILATÉRAUX (Périmètres) ---
    {
        quiz: { q: 'Exprime le périmètre $P$ de ce triangle isocèle en fonction de $a$.', a: '$2a + 10$' },
        figure: `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="40,80 160,80 100,20" fill="none" stroke="black" stroke-width="2"/>
            <text x="95" y="95" font-size="14">10</text>
            <text x="30" y="50" font-size="14">a</text>
            <text x="155" y="50" font-size="14">a</text>
        </svg>`,
        options: '$3a$ ¤ $2a + 10$ ¤ $a + 10$ ¤ $2(a+10)$',
        explanation: 'Le triangle a deux côtés de longueur $a$ et une base de $10$. Le périmètre est $a + a + 10 = 2a + 10$.'
    }
    
],

    "303112": [
    {
      quiz: { q: 'Traduire ce programme de calcul par une expression littérale (on notera $N$ le nombre de départ) : "Choisir un nombre, puis lui ajouter 3".', a: '$N + 3$' },
      options: "$N + 3$ \\ $3N$ \\ $N - 3$ \\ $N / 3$",
      explanation: "Pour traduire 'ajouter 3', on utilise l'opération d'addition : $N + 3$."
    },
    {
      quiz: { q: 'Traduire ce programme de calcul par une expression littérale (on notera $N$ le nombre de départ) : "Choisir un nombre, puis lui soustraire 6".', a: "$N - 6$" },
      options: '$N - 6$ ¤ $6 - N$ ¤ $N / 6$ ¤ $N + 6$',
      explanation: 'Pour traduire "soustraire 6", on utilise l\'opération de soustraction : $N - 6$.'
    },
{
    quiz: { q: 'Traduire ce programme de calcul par une expression littérale (on notera $N$ le nombre de départ) : "Choisir un nombre, le multiplier par 2, puis lui ajouter 1".', a: '$2N + 1$' },
    options: '$2N + 1$ ¤ $2(N + 1)$ ¤ $N^2 + 1$ ¤ $2 + N + 1$',
    explanation: 'On multiplie d\'abord $N$ par 2 ($2N$), puis on ajoute 1. L\'expression est donc $2N + 1$.'
  },
  {
    quiz: { q: 'Traduire ce programme de calcul par une expression littérale (on notera $N$ le nombre de départ) : "Choisir un nombre, lui ajouter 1, puis multiplier le tout par 2".', a: '$2(N + 1)$' },
    options: '$2(N + 1)$ ¤ $2N + 1$ ¤ $N + 2$ ¤ $N + 1 * 2$',
    explanation: 'L\'expression "multiplier le tout" indique qu\'il faut utiliser des parenthèses pour que l\'addition (le tout) soit faite avant la multiplication : $2(N + 1)$.'
  },
  {
    quiz: { q: 'Traduire ce programme de calcul par une expression littérale (on notera $N$ le nombre de départ) : "Choisir un nombre, lui ajouter son double, puis soustraire 5".', a: '$3N - 5$' },
    options: '$3N - 5$ ¤ $2N - 5$ ¤ $N + 2 - 5$ ¤ $3(N - 5)$',
    explanation: 'Le nombre est $N$. Son double est $2N$. Si on les ajoute, on obtient $N + 2N = 3N$. Enfin, on soustrait 5, ce qui donne $3N - 5$.'
  },
  {
    quiz: { q: 'Si on applique le programme "Multiplier par 3 puis ajouter 4" au nombre de départ $a$, quel est le résultat ?', a: '$3a+4$' },
    options: '$a+12$ ¤ $3(a+4)$ ¤ $3a+4$ ¤ $12a$',
    explanation: 'On multiplie d\'abord $a$ par 3 : $a \\times 3 = 3 \\times a=3a$ puis on ajoute 4 : $3a+4$.'
  },
  {
    quiz: { q: 'Ecrire l\'expression algébrique du programme de calcul suivant : "Choisir un nombre. L\'élever au carré, lui ajouter 5 et multiplier le tout par 2.', a: '$2(N²+5)$' },
    options: '2(N²+5) ¤ N²+5x2 ¤ (N+5)² x2 ¤ $2N+10$',
    explanation: 'Choisir un nomnre : N, L\'élever au carré : N², lui ajouter 5 : N²+5, le tout : (N²+5) et multiplier par 2 : 2(N²+5).'
  },
  {
    quiz: { q: 'Traduire ce programme de calcul (on notera $n$ le nombre entier) : "Le nombre qui suit le nombre entier $n$".', a: '$n + 1$' },
    options: '$n + 1$ ¤ $n - 1$ ¤ $2n$ ¤ $n^2$',
    explanation: 'Le nombre suivant un entier est obtenu en ajoutant 1 à cet entier.'
  },
  {
    quiz: { q: 'Traduire ce programme de calcul (on notera $k$ le nombre entier) : "Un nombre pair".', a: '$2k$' },
    options: '$2k$ ¤ $2k + 1$ ¤ $k^2$ ¤ $k/2$',
    explanation: 'Par définition, un nombre pair est un multiple de 2. On utilise donc la forme $2k$ (où $k$ est un entier). Comme k est multiplié par 2 son résultat sera forcément divisible par 2'
  },
  {
    quiz: { q: 'Traduire ce programme de calcul (on notera $k$ le nombre entier) : "Un nombre impair".', a: '$2k + 1$' },
    options: '$2k + 1$ ¤ $2k$ ¤ $k + 1$ ¤ $2(k + 1)$',
    explanation: 'Un nombre impair est un nombre pair auquel on ajoute 1. On utilise donc la forme $2k + 1$.'
  }
],

    "303113": [
  {
    quiz: { q: 'Un stylo coûte $s$ euros. Un cahier coûte 2 euros de plus que le stylo. Exprime le prix du cahier en fonction de $s$.', a: '$s + 2$' },
    options: '$2 - s$ ¤ $2s$ ¤ $s - 2$ ¤ $s + 2$ ',
    explanation: 'Le prix du cahier est égal au prix du stylo ($s$) auquel on ajoute 2 euros : $s + 2$.'
  },
  {
    quiz: { q: 'Une baguette de pain coûte $b$ euros. Le prix de 5 baguettes est...', a: '$5b$' },
    options: ' $5 + b$ ¤ $b + 5$ ¤ $5b$ ¤ $b / 5$',
    explanation: 'Acheter 5 baguettes c\'est comme acheter 5 fois une baguette, on multiplie le prix unitaire ($b$) par la quantité (5) : $5b$.'
  },
  {
    quiz: { q: 'Julie a $j$ billes. Son frère en a le triple. Exprime le nombre de billes du frère en fonction de $j$.', a: '$3j$' },
    options: ' $j / 3$ ¤ $j + 3$ ¤ $3j$ ¤ $j^3$',
    explanation: 'Le terme "le triple" signifie que l\'on multiplie la quantité initiale par 3 : $3j$.'
  },
  {
    quiz: { q: 'Un rectangle a une longueur de $L$ cm et une largeur qui est la moitié de sa longueur. Exprime la largeur en fonction de $L$.', a: '$L / 2$' },
    options: ' $L / 0,5$ ¤ $2L$ ¤ $L - 2$ ¤ $L / 2$',
    explanation: 'La moitié d\'une valeur se calcule en divisant cette valeur par 2 : $L / 2$.'
  },
  {
    quiz: { q: 'Un article coûte $P$ euros. Lors des soldes, il bénéficie d\'une réduction de 10 euros. Exprime le nouveau prix en fonction de $P$.', a: '$P - 10$' },
    options: '$P - 10$ ¤ $P + 10$ ¤ $10P$ ¤ $P / 10$',
    explanation: 'Une réduction signifie que l\'on soustrait une somme au prix initial : $P - 10$.'
  },
  {
    quiz: { q: 'Un taxi prend une prise en charge de 5 euros, puis 2 euros par kilomètre parcouru. Si on note $d$ la distance en km, exprime le prix total $T$ en fonction de $d$.', a: '$2d + 5$' },
    options: '$2d + 5$ ¤ $5d + 2$ ¤ $7d$ ¤ $2(d + 5)$',
    explanation: 'On part de la base fixe (5) et on ajoute le coût variable ($2 \times d$) : $2d + 5$.'
  },
  {
    quiz: { q: 'Un carré a un côté de longueur $c$. Exprime son périmètre en fonction de $c$.', a: '$4c$' },
    options: ' $c^2$ ¤ $4c$ ¤ $c + 4$ ¤ $4 + c$',
    explanation: 'Le périmètre d\'un carré est la somme de ses quatre côtés égaux : $c + c + c + c = 4c$.'
  },
  {
    quiz: { q: 'Marc a $x$ euros. Il dépense la moitié de sa somme pour un livre. Exprime la somme qu\'il lui reste en fonction de $x$.', a: '$x / 2$' },
    options: ' $2x$ ¤ $x - 2$ ¤ $x / 0,5$ ¤ $x / 2$',
    explanation: 'S\'il dépense la moitié, il lui reste l\'autre moitié. La moitié de $x$ s\'écrit $x / 2$.'
  },
  {
    quiz: { q: 'Une boîte contient $n$ chocolats. On achète 4 boîtes identiques et on en mange 3. Exprime le nombre de chocolats restants en fonction de $n$.', a: '$4n - 3$' },
    options: '$4n - 3$ ¤ $4(n - 3)$ ¤ $n + 4 - 3$ ¤ $4n + 3$',
    explanation: 'Le nombre total de chocolats achetés est $4 \times n$. Après en avoir mangé 3, il reste $4n - 3$.'
  },
  {
    quiz: { q: 'La longueur d\'un terrain est le double de sa largeur $w$. Exprime la longueur en fonction de $w$.', a: '$2w$' },
    options: '$2w$ ¤ $w + 2$ ¤ $w / 2$ ¤ $w^2$',
    explanation: 'Le "double" d\'une valeur correspond à une multiplication par 2 : $2w$.'
  }
],

    "303114": [
  {
    quiz: { q: 'Calcule l\'expression $3a + 5$ pour $a = 4$.', a: '$17$' },
    options: '$39$ ¤ $17$ ¤ $12$ ¤ $9$',
    explanation: 'On remplace $a$ par 4 : $(3 \\times 4) + 5 = 12 + 5 = 17$.'
  },
  {
    quiz: { q: 'Calcule l\'expression $5x - 2$ pour $x = 3$.', a: '$13$' },
    options: '$15$ ¤ $13$ ¤ $51$ ¤ $17$',
    explanation: 'On remplace $x$ par 3 : $(5 \\times 3) - 2 = 15 - 2 = 13$.'
  },
  {
    quiz: { q: 'Calcule l\'expression $2(b + 7)$ pour $b = 5$.', a: '$24$' },
    options: '$24$ ¤ $17$ ¤ $19$ ¤ $30$',
    explanation: 'On remplace $b$ par 5 : $2 \\times (5 + 7) = 2 \\times 12 = 24$.'
  },
  {
    quiz: { q: 'Calcule l\'expression $n^2 + 3$ pour $n = 4$.', a: '$19$' },
    options: '$19$ ¤ $16$ ¤ $7$ ¤ $25$', 
    explanation: 'On remplace $n$ par 4 : $(4^2) + 3 = 4 \\times 4 +3 = 16 + 3 = 19$.'
  },
  {
    quiz: { q: 'Calcule l\'expression $10 - 3y$ pour $y = 2$.', a: '$4$' },
    options: '$4$ ¤ $16$ ¤ $7$ ¤ $1$',
    explanation: 'On remplace $y$ par 2 : $10 - (3 \\times 2) = 10 - 6 = 4$.'
  },
  {
    quiz: { q: 'Calcule l\'expression $4(x - 3)$ pour $x = 10$.', a: '$28$' },
    options: '$28$ ¤ $7$ ¤ $40$ ¤ $13$',
    explanation: 'On remplace $x$ par 10 : $4 \\times (10 - 3) = 4 \\times 7 = 28$.'
  },
  {
    quiz: { q: 'Calcule l\'expression $m / 2 + 5$ pour $m = 14$.', a: '$12$' },
    options: '$12$ ¤ $7$ ¤ $19$ ¤ $9$',
    explanation: 'On remplace $m$ par 14 : $(14 / 2) + 5 = 7 + 5 = 12$.'
  },
  {
    quiz: { q: 'Calcule l\'expression $10 - 3y$ pour $y = 2$.', a: '$4$' },
    options: '$4$ ¤ $16$ ¤ $7$ ¤ $1$',
    explanation: 'On remplace $y$ par 2 : $10 - (3 \\times 2) = 10 - 6 = 4$.'
  },
  {
    quiz: { q: 'Calcule l\'expression $(a+2)(b-1)$ pour $a = 3$ et $b = 5$.', a: '$20$' },
    options: '$20$ ¤ $96$ ¤ $4$ ¤ $128$',
    explanation: 'On remplace $a$ par 3 et $b$ par 5 : $(3+2) \\times (5-1)= 5 \\times 4 = 20$.'
  },
  {
    quiz: { q: 'Calcule l\'expression $x^2 - x$ pour $x = -5$.', a: '$30$' },
    options: '$-20$ ¤ $25$ ¤ $20$ ¤ $30$',
    explanation: 'On remplace $x$ par -5 : $(-5)² -(-5) = -5 \\times (-5) + 5 = 25 + 5 = 30$.'
  }
],

    "303211": [
  {
    quiz: { q: 'Quelle est la structure de l\'expression $5(12 - 4x)$ ?', a: 'Produit' },
    options: 'Somme ¤ Produit ¤ Je ne sais pas',
    explanation: 'C\'est un produit car on commencerait par calculer la parenthèse PUIS on finirait le calcul par $\\times 5$.'
  },
  {
    quiz: { q: 'Quelle est la structure de l\'expression $(x + 5)(3 - 2x) - 7$ ?', a: 'Somme' },
    options: 'Somme ¤ Produit ¤ Je ne sais pas',
    explanation: 'C\'est une somme car on calcule les parenthèses, ensuite on les multiplie et enfin on termine par $-7$.'
  },
  {
    quiz: { q: 'Quelle est la structure de l\'expression $4x^2 - 2x + 8$ ?', a: 'Somme' },
    options: 'Somme ¤ Produit ¤ Je ne sais pas',
    explanation: 'C\'est une somme car on calcule les produits en premier ($4x^2$ et $2x$) puis on fait les $+$ et $-$ en dernier.'
  },
  {
    quiz: { q: 'Quelle est la structure de l\'expression $(7 - 3x)(5 - 2x)$ ?', a: 'Produit' },
    options: 'Somme ¤ Produit ¤ Je ne sais pas',
    explanation: 'C\'est un produit car on commencerait par calculer l\'intérieur des parenthèses PUIS on finirait le calcul par la multiplication "cachée" entre les deux parenthèses.'
  },
  {
    quiz: { q: 'Quelle est la structure de l\'expression $12 + 4x$ ?', a: 'Somme' },
    options: 'Somme ¤ Produit ¤ Je ne sais pas',
    explanation: 'C\'est une somme car la dernière opération que l\'on effectue est l\'addition.'
  },
  {
    quiz: { q: 'Quelle est la structure de l\'expression $7(x + 1)$ ?', a: 'Produit' },
    options: 'Somme ¤ Produit ¤ Je ne sais pas',
    explanation: 'C\'est un produit car on multiplie le résultat de la parenthèse par 7 en dernier.'
  },
  {
    quiz: { q: 'Quelle est la structure de l\'expression $x^3$ ?', a: 'Produit' },
    options: 'Somme ¤ Produit ¤ Je ne sais pas',
    explanation: 'C\'est un produit car une puissance est une multiplication répétée (ici $x \\times x \\times x$).'
  },
  {
    quiz: { q: 'Quelle est la structure de l\'expression $15 - (x + 2)$ ?', a: 'Somme' },
    options: 'Somme ¤ Produit ¤ Je ne sais pas',
    explanation: 'C\'est une somme car la dernière opération est la soustraction entre 15 et le bloc parenthèse.'
  },
  {
    quiz: { q: 'Quelle est la structure de l\'expression $2x \\times 3y$ ?', a: 'Produit' },
    options: 'Somme ¤ Produit ¤ Je ne sais pas',
    explanation: 'C\'est un produit car on multiplie les deux blocs ($2x$ et $3y$) entre eux.'
  },
  {
    quiz: { q: 'Quelle est la structure de l\'expression $(x + 1) + (x + 2)$ ?', a: 'Somme' },
    options: 'Somme ¤ Produit ¤ Je ne sais pas',
    explanation: 'C\'est une somme car on calcule d\'abord les parenthèses, puis on termine par l\'addition des deux résultats.'
  }
],

    "303311": [
  {
    quiz: { q: 'Quel est l\'opposé de l\'expression suivante : $5x - 4$ ?', a: '$-5x + 4$' },
    options: '$-5x + 4$ ¤ $5x + 4$ ¤ $-5x - 4$ ¤ $5x - 4$',
    explanation: 'L\'opposé de $5x - 4$ est $-(5x - 4)$. En enlevant la parenthèse, on change les signes : $-5x + 4$.'
  },
  {
    quiz: { q: 'Quel est l\'opposé de l\'expression suivante : $3 - 2x$ ?', a: '$-3 + 2x$' },
    options: '$-3 + 2x$ ¤ $3 + 2x$ ¤ $-3 - 2x$ ¤ $3 - 2x$',
    explanation: 'L\'opposé de $3 - 2x$ est $-(3 - 2x)$. En changeant les signes, on obtient $-3 + 2x$.'
  },
  {
    quiz: { q: 'Quel est l\'opposé de l\'expression suivante : $-5x - 7$ ?', a: '$5x + 7$' },
    options: '$5x + 7$ ¤ $-5x + 7$ ¤ $5x - 7$ ¤ $-5x - 7$',
    explanation: 'L\'opposé de $-5x - 7$ est $-(-5x - 7)$. Les deux signes changent, ce qui donne $5x + 7$.'
  },
  {
    quiz: { q: 'Quel est l\'opposé de l\'expression suivante : $x + 10$ ?', a: '$-x - 10$' },
    options: '$-x - 10$ ¤ $-x + 10$ ¤ $x - 10$ ¤ $-x$',
    explanation: 'L\'opposé de $x + 10$ est $-(x + 10)$. On change les signes : $-x - 10$.'
  },
  {
    quiz: { q: 'Quel est l\'opposé de l\'expression suivante : $-4x + 3$ ?', a: '$4x - 3$' },
    options: '$4x - 3$ ¤ $-4x - 3$ ¤ $4x + 3$ ¤ $4x$',
    explanation: 'L\'opposé de $-4x + 3$ est $-(-4x + 3)$. On change les signes : $4x - 3$.'
  },
  {
    quiz: { q: 'Quel est l\'opposé de l\'expression suivante : $2x^2 - 5$ ?', a: '$-2x^2 + 5$' },
    options: '$-2x^2 + 5$ ¤ $2x^2 + 5$ ¤ $-2x^2 - 5$ ¤ $-2x^2$',
    explanation: 'L\'opposé de $2x^2 - 5$ est $-(2x^2 - 5)$. En changeant les signes, on obtient $-2x^2 + 5$.'
  },
  {
    quiz: { q: 'Quel est l\'opposé de l\'expression suivante : $-a - b$ ?', a: '$a + b$' },
    options: '$a + b$ ¤ $-a + b$ ¤ $a - b$ ¤ $-a - b$',
    explanation: 'L\'opposé de $-a - b$ est $-(-a - b)$. Les deux signes s\'inversent, ce qui donne $a + b$.'
  },
  {
    quiz: { q: 'Quel est l\'opposé de l\'expression suivante : $7x + 1$ ?', a: '$-7x - 1$' },
    options: '$-7x - 1$ ¤ $-7x + 1$ ¤ $7x - 1$ ¤ $7x + 1$',
    explanation: 'L\'opposé de $7x + 1$ est $-(7x + 1)$. On change les signes : $-7x - 1$.'
  },
  {
    quiz: { q: 'Quel est l\'opposé de l\'expression suivante : $12 - x$ ?', a: '$-12 + x$' },
    options: '$-12 + x$ ¤ $12 + x$ ¤ $-12 - x$ ¤ $x - 12$',
    explanation: 'L\'opposé de $12 - x$ est $-(12 - x)$. En changeant les signes, on obtient $-12 + x$.'
  },
  {
    quiz: { q: 'Quel est l\'opposé de l\'expression suivante : $-x^2 - x - 1$ ?', a: '$x^2 + x + 1$' },
    options: '$x^2 + x + 1$ ¤ $-x^2 + x + 1$ ¤ $x^2 - x - 1$ ¤ $x^2 + x - 1$',
    explanation: 'L\'opposé de $-x^2 - x - 1$ est $-(-x^2 - x - 1)$. Tous les signes changent, ce qui donne $x^2 + x + 1$.'
  }
],

    "303411": [
  {
    quiz: { q: 'Réduis l\'expression suivante : $5x + 3x$', a: '$8x$' },
    options: '$8x$ ¤ $15x$ ¤ $2x$ ¤ $8$' ,
    explanation: 'On regroupe les termes en $x$ : $(5 + 3)x = 8x$.'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $10a - 4a$', a: '$6a$' },
    options: '$6a$ ¤ $14a$ ¤ $-6a$ ¤ $6$' ,
    explanation: 'On regroupe les termes en $a$ : $(10 - 4)a = 6a$.'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $7x + 5 - 2x$', a: '$5x + 5$' },
    options: '$5x + 5$ ¤ $10x$ ¤ $5x - 5$ ¤ $5x$' ,
    explanation: 'On regroupe les termes en $x$ ($7x - 2x = 5x$) et on garde le terme constant $+5$.'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $4a + 3b + 2a - b$', a: '$6a + 2b$' },
    options: '$6a + 2b$ ¤ $6a + 4b$ ¤ $2a + 2b$ ¤ $6ab$' ,
    explanation: 'On regroupe les $a$ ($4a + 2a = 6a$) et les $b$ ($3b - b = 2b$).'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $x^2 + 5x - 3x^2$', a: '$-2x^2 + 5x$' },
    options: '$-2x^2 + 5x$ ¤ $2x^2 + 2x$ ¤ $-2x^2 + 2x$ ¤ $4x^2 + 5x$' ,
    explanation: 'On regroupe les $x^2$ ($1x^2 - 3x^2 = -2x^2$) et on garde le terme $+5x$.'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $12 - 5y + 2y$', a: '$12 - 3y$' },
    options: '$12 - 3y$ ¤ $12 + 3y$ ¤ $9y$ ¤ $12 - 7y$' ,
    explanation: 'On regroupe les $y$ : $-5y + 2y = -3y$. Le terme constant reste $12$.'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $3a^2 + 4a - a^2 + 2$', a: '$2a^2 + 4a + 2$' },
    options: '$2a^2 + 4a + 2$ ¤ $3a^2 + 4a + 2$ ¤ $2a^2 + 6a$ ¤ $4a^2 + 4a + 2$' ,
    explanation: 'On regroupe les $a^2$ ($3a^2 - a^2 = 2a^2$), les $a$ ($4a$) et les constantes ($+2$).'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $10 - (x + 3)$', a: '$7 - x$' },
    options: '$7 - x$ ¤ $13 - x$ ¤ $7 + x$ ¤ $10 - x - 3$' ,
    explanation: 'On supprime la parenthèse en changeant les signes : $10 - x - 3$. On réduit ensuite : $10 - 3 = 7$, donc $7 - x$.'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $2x + 5y - 2x + y$', a: '$6y$' },
    options: '$6y$ ¤ $4x + 6y$ ¤ $0x + 6y$ ¤ $6xy$' ,
    explanation: 'Les $x$ s\'annulent ($2x - 2x = 0$) et on regroupe les $y$ ($5y + y = 6y$).'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $-4a^2 + 3a - a^2$', a: '$-5a^2 + 3a$' },
    options: '$-5a^2 + 3a$ ¤ $-3a^2 + 3a$ ¤ $5a^2 + 3a$ ¤ $-5a^2 - 3a$' ,
    explanation: 'On regroupe les $a^2$ : $-4a^2 - a^2 = -5a^2$. On garde le terme $+3a$.'
  }
],

    "303421": [
  {
    quiz: { q: 'Réduis le produit suivant : $(-3) \\times 2 \\times a \\times (-5) \\times a$', a: '$30a^2$' },
    options: '$30a^2$ ¤ $-30a^2$ ¤ $30a$ ¤ $15a^2$' ,
    explanation: 'On regroupe les signes : $(-3) \\times (-5) = +15$. On multiplie par 2 : $15 \\times 2 = 30$. Enfin, on regroupe les lettres : $a \\times a = a^2$. Le résultat est $30a^2$.'
  },
  {
    quiz: { q: 'Réduis le produit suivant : $4 \\times (-2) \\times x \\times 3 \\times x$', a: '$-24x^2$' },
    options: '$-24x^2$ ¤ $24x^2$ ¤ $-24x$ ¤ $-24x^3$' ,
    explanation: 'On regroupe les signes : $(+) \\times (-) \\times (+) = (-)$. On multiplie les nombres : $4 \\times 2 \\times 3 = 24$. On regroupe les lettres : $x \\times x = x^2$. Le résultat est $-24x^2$.'
  },
  {
    quiz: { q: 'Réduis le produit suivant : $(-1) \\times (-1) \\times a \\times b \\times a$', a: '$a^2b$' },
    options: '$a^2b$ ¤ $-a^2b$ ¤ $2ab$ ¤ $a^2b^2$' ,
    explanation: 'On regroupe les signes : $(-1) \\times (-1) = +1$. On regroupe les lettres : $a \\times a = a^2$ et on garde le $b$. Le résultat est $a^2b$.'
  },
  {
    quiz: { q: 'Réduis le produit suivant : $5 \\times 3 \\times (-2) \\times y \\times y$', a: '$-30y^2$' },
    options: '$-30y^2$ ¤ $30y^2$ ¤ $-30y$ ¤ $-10y^2$' ,
    explanation: 'On regroupe les signes : $(+) \\times (+) \\times (-) = (-)$. On multiplie les nombres : $5 \\times 3 \\times 2 = 30$. On regroupe les lettres : $y \\times y = y^2$. Le résultat est $-30y^2$.'
  },
  {
    quiz: { q: 'Réduis le produit suivant : $(-4) \\times (-a) \\times 2$', a: '$8a$' },
    options: '$8a$ ¤ $-8a$ ¤ $8$ ¤ $-8$' ,
    explanation: 'On regroupe les signes : $(-4) \\times (-1) \\times 2 = +8$. On multiplie par la lettre $a$. Le résultat est $8a$.'
  },
  {
    quiz: { q: 'Réduis le produit suivant : $x \\times 5 \\times (-3) \\times x$', a: '$-15x^2$' },
    options: '$-15x^2$ ¤ $15x^2$ ¤ $-15x$ ¤ $-8x^2$' ,
    explanation: 'On regroupe les signes : $(+) \\times (+) \\times (-) = (-)$. On multiplie les nombres : $5 \\times 3 = 15$. On regroupe les lettres : $x \\times x = x^2$. Le résultat est $-15x^2$.'
  },
  {
    quiz: { q: 'Réduis le produit suivant : $(-2) \\times (-2) \\times (-2) \\ a$', a: '$-8a$' },
    options: '$-8a$ ¤ $8a$ ¤ $-6a$ ¤ $8$' ,
    explanation: 'On regroupe les signes : $(-2) \\times (-2) \\times (-2) = -8$. On multiplie par la lettre $a$. Le résultat est $-8a$.'
  },
  {
    quiz: { q: 'Réduis le produit suivant : $10 \\times a \\times 0,5 \\times b$', a: '$5ab$' },
    options: '$5ab$ ¤ $15ab$ ¤ $5a+b$ ¤ $5.5ab$' ,
    explanation: 'On multiplie les nombres : $10 \\times 0,5 = 5$. On regroupe les lettres $a$ et $b$. Le résultat est $5ab$.'
  },
  {
    quiz: { q: 'Réduis le produit suivant : $(-x) \\times (-x) \\times (-x)$', a: '$-x^3$' },
    options: '$-x^3$ ¤ $x^3$ ¤ $-x^2$ ¤ $3x$' ,
    explanation: 'On regroupe les signes : $(-1) \\times (-1) \\times (-1) = -1$. On regroupe les lettres : $x \\times x \\times x = x^3$. Le résultat est $-x^3$.'
  },
  {
    quiz: { q: 'Réduis le produit suivant : $2 \\times 3 \\times 4 \\times a^2$', a: '$24a^2$' },
    options: '$24a^2$ ¤ $9a^2$ ¤ $24a$ ¤ $24a^4$' ,
    explanation: 'On multiplie les nombres : $2 \\times 3 \\times 4 = 24$. On garde la lettre $a^2$. Le résultat est $24a^2$.'
  }
],

    "303431": [
  {
    quiz: { q: 'Réduis l\'expression suivante : $2(x + 3) + 4x$', a: '$6x + 6$' },
    options: '$6x + 6$ ¤ $6x + 3$ ¤ $10x$ ¤ $6x - 6$',
    explanation: 'Étape 1 : On supprime la parenthèse ($2x + 6$). Étape 2 : On regroupe les $x$ ($2x + 4x = 6x$) et le nombre ($+6$).'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $5(a - 2) - 3a$', a: '$2a - 10$' },
    options: '$2a - 10$ ¤ $2a + 10$ ¤ $-2a - 10$ ¤ $8a - 10$',
    explanation: 'Étape 1 : On supprime la parenthèse ($5a - 10$). Étape 2 : On regroupe les $a$ ($5a - 3a = 2a$) et on garde $-10$.'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $-(x + 4) + 7$', a: '$-x + 3$' },
    options: '$-x + 3$ ¤ $-x - 11$ ¤ $x + 3$ ¤ $-x + 11$',
    explanation: 'Étape 1 : On supprime la parenthèse en changeant les signes ($-x - 4$). Étape 2 : On regroupe les nombres ($-4 + 7 = 3$).'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $3(2x + 1) - (x - 5)$', a: '$5x + 8$' },
    options: '$5x + 8$ ¤ $5x - 4$ ¤ $7x + 8$ ¤ $5x + 2$',
    explanation: 'Étape 1 : On développe et on supprime les parenthèses ($6x + 3 - x + 5$). Étape 2 : On regroupe ($6x - x = 5x$) et ($3 + 5 = 8$).'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $4(x^2 - 2) + 3x^2$', a: '$7x^2 - 8$' },
    options: '$7x^2 - 8$ ¤ $7x^2 - 2$ ¤ $1x^2 - 8$ ¤ $7x^2 + 8$',
    explanation: 'Étape 1 : On développe ($4x^2 - 8$). Étape 2 : On regroupe les $x^2$ ($4x^2 + 3x^2 = 7x^2$) et on garde $-8$.'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $-(2a - 3) + 5a$', a: '$3a + 3$' },
    options: '$3a + 3$ ¤ $7a - 3$ ¤ $-7a + 3$ ¤ $3a - 3$',
    explanation: 'Étape 1 : On supprime la parenthèse ($-2a + 3$). Étape 2 : On regroupe les $a$ ($-2a + 5a = 3a$) et on garde $+3$.'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $x(x + 4) - x^2$', a: '$4x$' },
    options: '$4x$ ¤ $2x^2 + 4x$ ¤ $4x^2$ ¤ $0$',
    explanation: 'Étape 1 : On développe le produit ($x^2 + 4x$). Étape 2 : On soustrait $x^2$ ($x^2 - x^2 = 0$), il reste $4x$.'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $2(3x - 1) + 3(x + 2)$', a: '$9x + 4$' },
    options: '$9x + 4$ ¤ $9x + 8$ ¤ $5x + 4$ ¤ $9x - 4$',
    explanation: 'Étape 1 : On développe les deux produits ($6x - 2 + 3x + 6$). Étape 2 : On regroupe ($6x + 3x = 9x$) et ($-2 + 6 = 4$).'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $10 - 2(x - 5)$', a: '$20 - 2x$' },
    options: '$20 - 2x$ ¤ $0 - 2x$ ¤ $20 + 2x$ ¤ $10 - 2x + 10$',
    explanation: 'Étape 1 : On développe le produit ($10 - 2x + 10$). Étape 2 : On regroupe les nombres ($10 + 10 = 20$), il reste $-2x$.'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $a(b + 2) - ab$', a: '$2a$' },
    options: '$2a$ ¤ $2ab$ ¤ $0$ ¤ $a + 2$',
    explanation: 'Étape 1 : On développe le produit ($ab + 2a$). Étape 2 : On soustrait $ab$ ($ab - ab = 0$), il reste $2a$.'
  }
],

    "303511": [
  {
    quiz: { q: 'Développe l\'expression suivante : $4(x + 5)$', a: '$4x + 20$' },
    options: '$4x + 20$ ¤ $4x + 5$ ¤ $9x$ ¤ $4x + 9$',
    explanation: 'On distribue le 4 : $(4 \\times x) + (4 \\times 5) = 4x + 20$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $3(2y - 6)$', a: '$6y - 18$' },
    options: '$6y - 18$ ¤ $6y - 6$ ¤ $5y - 18$ ¤ $6y + 18$',
    explanation: 'On distribue le 3 : $(3 \\times 2y) + (3 \\times -6) = 6y - 18$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $-2(x + 4)$', a: '$-2x - 8$' },
    options: '$-2x - 8$ ¤ $-2x + 8$ ¤ $2x - 8$ ¤ $-2x - 4$' ,
    explanation: 'On distribue le -2 : $(-2 \\times x) + (-2 \\times 4) = -2x - 8$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $-5(3a - 2)$', a: '$-15a + 10$' },
    options: '$-15a + 10$ ¤ $-15a - 10$ ¤ $15a + 10$ ¤ $-15a - 2$' ,
    explanation: 'On distribue le -5 : $(-5 \\times 3a) + (-5 \\times -2) = -15a + 10$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $x(x + 7)$', a: '$x^2 + 7x$' },
    options: '$x^2 + 7x$ ¤ $x^2 + 7$ ¤ $7x^2$ ¤ $x + 7x$' ,
    explanation: 'On distribue le x : $(x \\times x) + (x \\times 7) = x^2 + 7x$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $6(2 - 3y)$', a: '$12 - 18y$' },
    options: '$12 - 18y$ ¤ $12 - 3y$ ¤ $12 + 18y$ ¤ $-12 - 18y$' ,
    explanation: 'On distribue le 6 : $(6 \\times 2) + (6 \\times -3y) = 12 - 18y$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $-a(4 - 5a)$', a: '$-4a + 5a^2$' },
    options: '$-4a + 5a^2$ ¤ $-4a - 5a^2$ ¤ $4a - 5a^2$ ¤ $5a^2 - 4a$' ,
    explanation: 'On distribue le -a : $(-a \\times 4) + (-a \\times -5a) = -4a + 5a^2$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $10(0,5x + 2)$', a: '$5x + 20$' },
    options: '$5x + 20$ ¤ $5x + 2$ ¤ $10,5x + 20$ ¤ $5x + 20$' ,
    explanation: 'On distribue le 10 : $(10 \\times 0,5x) + (10 \\times 2) = 5x + 20$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $2x(3x - 4)$', a: '$6x^2 - 8x$' },
    options: '$6x^2 - 8x$ ¤ $6x - 8x$ ¤ $5x^2 - 8x$ ¤ $6x^2 - 4$' ,
    explanation: 'On distribue le 2x : $(2x \\times 3x) + (2x \\times -4) = 6x^2 - 8x$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $-3(x^2 - 5)$', a: '$-3x^2 + 15$' },
    options: '$-3x^2 + 15$ ¤ $-3x^2 - 15$ ¤ $3x^2 + 15$ ¤ $-3x^2 + 5$',
    explanation: 'On distribue le -3 : $(-3 \\times x^2) + (-3 \\times -5) = -3x^2 + 15$.'
  }
],

    "303521": [
  {
    quiz: { q: 'Développe l\'expression suivante : $(x + 2)(x + 3)$', a: '$x^2 + 5x + 6$' },
    options: '$x^2 + 5x + 6$ ¤ $x^2 + 6x + 5$ ¤ $x^2 + 5$ ¤ $2x + 5$' ,
    explanation: 'On distribue chaque terme : $(x \\times x) + (x \\times 3) + (2 \\times x) + (2 \\times 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(x - 4)(x + 5)$', a: '$x^2 + x - 20$' },
    options: '$x^2 + x - 20$ ¤ $x^2 - x - 20$ ¤ $x^2 + 9x - 20$ ¤ $x^2 - 20$' ,
    explanation: 'On distribue : $(x \\times x) + (x \\times 5) + (-4 \\times x) + (-4 \\times 5) = x^2 + 5x - 4x - 20 = x^2 + x - 20$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(2x + 1)(x - 3)$', a: '$2x^2 - 5x - 3$' },
    options: '$2x^2 - 5x - 3$ ¤ $2x^2 - 3x - 3$ ¤ $2x^2 + 5x - 3$ ¤ $2x^2 - 5$' ,
    explanation: 'On distribue : $(2x \\times x) + (2x \\times -3) + (1 \\times x) + (1 \\times -3) = 2x^2 - 6x + x - 3 = 2x^2 - 5x - 3$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(3x + 2)(x - 4)$', a: '$3x^2 - 10x - 8$' },
    options: '$3x^2 - 10x - 8$ ¤ $3x^2 + 10x - 8$ ¤ $3x^2 - 10x + 8$ ¤ $3x^2 - 5x - 8$' ,
    explanation: 'On distribue : $(3x \\times x) + (3x \\times -4) + (2 \\times x) + (2 \\times -4) = 3x^2 - 12x + 2x - 8 = 3x^2 - 10x - 8$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(2x - 5)(2x + 5)$', a: '$4x^2 - 25$' },
    options: '$4x^2 - 25$ ¤ $4x^2 + 25$ ¤ $4x^2 - 10x - 25$ ¤ $4x^2 - 20$' ,
    explanation: 'On distribue : $(2x \\times 2x) + (2x \\times 5) + (-5 \\times 2x) + (-5 \\times 5) = 4x^2 + 10x - 10x - 25 = 4x^2 - 25$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(x + 6)(3x - 1)$', a: '$3x^2 + 17x - 6$' },
    options: '$3x^2 + 17x - 6$ ¤ $3x^2 + 18x - 6$ ¤ $3x^2 + 17x + 6$ ¤ $3x^2 - 6$' ,
    explanation: 'On distribue : $(x \\times 3x) + (x \\times -1) + (6 \\times 3x) + (6 \\times -1) = 3x^2 - x + 18x - 6 = 3x^2 + 17x - 6$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(5 - x)(2x + 3)$', a: '$10x + 15 - 2x^2 - 3x$' },
    options: '$10x + 15 - 2x^2 - 3x$ ¤ $10x + 15 - 2x^2 + 3x$ ¤ $-2x^2 + 7x + 15$ ¤ $10x - 15 - 2x^2 - 3x$' ,
    explanation: 'On distribue : $(5 \\times 2x) + (5 \\times 3) + (-x \\times 2x) + (-x \\times 3) = 10x + 15 - 2x^2 - 3x$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(4x - 1)(x - 2)$', a: '$4x^2 - 9x + 2$' },
    options: '$4x^2 - 9x + 2$ ¤ $4x^2 - 8x - 1$ ¤ $4x^2 - 9x - 2$ ¤ $4x^2 + 9x + 2$' ,
    explanation: 'On distribue : $(4x \\times x) + (4x \\times -2) + (-1 \\times x) + (-1 \\times -2) = 4x^2 - 8x - x + 2 = 4x^2 - 9x + 2$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(x - 5)(x - 5)$', a: '$x^2 - 10x + 25$' },
    options: '$x^2 - 10x + 25$ ¤ $x^2 + 10x + 25$ ¤ $x^2 - 25$ ¤ $x^2 - 10x - 25$' ,
    explanation: 'On distribue : $(x \\times x) + (x \\times -5) + (-5 \\times x) + (-5 \\times -5) = x^2 - 5x - 5x + 25 = x^2 - 10x + 25$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(3x - 2)(x + 4)$', a: '$3x^2 + 10x - 8$' },
    options: '$3x^2 + 10x - 8$ ¤ $3x^2 + 14x - 8$ ¤ $3x^2 - 10x - 8$ ¤ $3x^2 + 10x + 8$' ,
    explanation: 'On distribue : $(3x \\times x) + (3x \\times 4) + (-2 \\times x) + (-2 \\times 4) = 3x^2 + 12x - 2x - 8 = 3x^2 + 10x - 8$.'
  }
],

    "303611": [
  {
    quiz: { q: 'Développe l\'expression suivante : $(x + 4)(x - 4)$', a: '$x^2 - 16$' },
    options: '$x^2 - 16$ ¤ $x^2 + 16$ ¤ $x^2 - 8$ ¤ $x^2 - 8x + 16$',
    explanation: 'On utilise l\'identité $(a+b)(a-b) = a^2 - b^2$. Ici $a=x$ et $b=4$, donc $x^2 - 4^2 = x^2 - 16$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(3x + 2)(3x - 2)$', a: '$9x^2 - 4$' },
    options: '$9x^2 - 4$ ¤ $6x^2 - 4$ ¤ $9x^2 + 4$ ¤ $9x^2 - 6x - 4$',
    explanation: 'On applique la formule : $(3x)^2 - 2^2 = 9x^2 - 4$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(5 - 2a)(5 + 2a)$', a: '$25 - 4a^2$' },
    options: '$25 - 4a^2$ ¤ $25 - 4a$ ¤ $25 + 4a^2$ ¤ $5 - 4a^2$' ,
    explanation: 'On applique la formule : $5^2 - (2a)^2 = 25 - 4a^2$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(7x - 1)(7x + 1)$', a: '$49x^2 - 1$' },
    options: '$49x^2 - 1$ ¤ $49x^2 + 1$ ¤ $14x^2 - 1$ ¤ $49x - 1$' ,
    explanation: 'On applique la formule : $(7x)^2 - 1^2 = 49x^2 - 1$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(a - 10)(a + 10)$', a: '$a^2 - 100$' },
    options: '$a^2 - 100$ ¤ $a^2 + 100$ ¤ $a^2 - 20$ ¤ $a^2 - 10$' ,
    explanation: 'On applique la formule : $a^2 - 10^2 = a^2 - 100$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(4x + 5y)(4x - 5y)$', a: '$16x^2 - 25y^2$' },
    options: '$16x^2 - 25y^2$ ¤ $8x^2 - 25y^2$ ¤ $16x^2 + 25y^2$ ¤ $16x^2 - 10xy - 25y^2$' ,
    explanation: 'On applique la formule : $(4x)^2 - (5y)^2 = 16x^2 - 25y^2$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(1 - 6x)(1 + 6x)$', a: '$1 - 36x^2$' },
    options: '$1 - 36x^2$ ¤ $1 + 36x^2$ ¤ $1 - 12x$ ¤ $1 - 6x^2$',
    explanation: 'On applique la formule : $1^2 - (6x)^2 = 1 - 36x^2$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(2a - 9)(2a + 9)$', a: '$4a^2 - 81$' },
    options: '$4a^2 - 81$ ¤ $4a^2 + 81$ ¤ $4a^2 - 18$ ¤ $4a^2 - 81a$',
    explanation: 'On applique la formule : $(2a)^2 - 9^2 = 4a^2 - 81$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(0,5x + 1)(0,5x - 1)$', a: '$0,25x^2 - 1$' },
    options: '$0,25x^2 - 1$ ¤ $0,25x^2 + 1$ ¤ $x^2 - 1$ ¤ $0,5x^2 - 1$',
    explanation: 'On applique la formule : $(0,5x)^2 - 1^2 = 0,25x^2 - 1$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(10 - x)(10 + x)$', a: '$100 - x^2$' },
    options: '$100 - x^2$ ¤ $100 + x^2$ ¤ $10 - x^2$ ¤ $100 - 2x$',
    explanation: 'On applique la formule : $10^2 - x^2 = 100 - x^2$.'
  }
],

    "303711": [
  {
    quiz: { q: 'Factorise l\'expression suivante : $5x + 15$', a: '$5(x + 3)$' },
    options: '$5(x + 3)$ ¤ $5x(1 + 3)$ ¤ $5(x + 15)$ ¤ $5x + 3$' ,
    explanation: 'Le facteur commun est 5. On le met devant la parenthèse et on recopie le reste : $5 \\times x + 5 \\times 3 = 5(x + 3)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $x^2 - 7x$', a: '$x(x - 7)$' },
    options: '$x(x - 7)$ ¤ $x(x - 7x)$ ¤ $x^2(1 - 7)$ ¤ $7x(x - 1)$' ,
    explanation: 'Le facteur commun est $x$. On le met devant la parenthèse : $x \\times x - x \\times 7 = x(x - 7)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $4y^2 + 12y$', a: '$4y(y + 3)$' },
    options: '$4y(y + 3)$ ¤ $4y(y + 12)$ ¤ $y(4y + 12)$ ¤ $4y^2(1 + 3)$' ,
    explanation: 'Le facteur commun est $4y$. On factorise : $4y \\times y + 4y \\times 3 = 4y(y + 3)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $10a - 15b$', a: '$5(2a - 3b)$' },
    options: '$5(2a - 3b)$ ¤ $5(2a - 3b)$ ¤ $10(a - 1,5b)$ ¤ $5a(2 - 3b)$' ,
    explanation: 'Le facteur commun est 5. On écrit : $5 \\times 2a - 5 \\times 3b = 5(2a - 3b)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $x^2 + x$', a: '$x(x + 1)$' },
    options: '$x(x + 1)$ ¤ $x(x + x)$ ¤ $x^2(1 + 1)$ ¤ $x(1 + 1)$' ,
    explanation: 'Le facteur commun est $x$. On a $x \\times x + x \\times 1 = x(x + 1)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $8a^2 - 4a$', a: '$4a(2a - 1)$' },
    options: '$4a(2a - 1)$ ¤ $4(2a^2 - a)$ ¤ $4a(2a + 1)$ ¤ $8a(a - 0,5)$' ,
    explanation: 'Le facteur commun est $4a$. On factorise : $4a \\times 2a - 4a \\times 1 = 4a(2a - 1)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $3x^2 + 6x + 9$', a: '$3(x^2 + 2x + 3)$' },
    options: '$3(x^2 + 2x + 3)$ ¤ $3(x^2 + 2x + 9)$ ¤ $3x(x + 2) + 9$ ¤ $3(x^2 + 6x + 3)$' ,
    explanation: 'Le facteur commun est 3. On le met devant la parenthèse : $3 \\times x^2 + 3 \\times 2x + 3 \\times 3 = 3(x^2 + 2x + 3)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $a(x + 1) - b(x + 1)$', a: '$(x + 1)(a - b)$' },
    options: '$(x + 1)(a - b)$ ¤ $(x + 1)(a + b)$ ¤ $(a - b)(x + 1)$ ¤ $(x + 1)(a - b - 1)$' ,
    explanation: 'Le facteur commun est la parenthèse $(x + 1)$. On la met devant et on recopie le reste : $(x + 1)(a - b)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $(2x - 3)(x + 5) + (2x - 3)(4x - 1)$', a: '$(2x - 3)(5x + 4)$' },
    options: '$(2x - 3)(5x + 4)$ ¤ $(2x - 3)(5x + 6)$ ¤ $(2x - 3)(5x - 4)$ ¤ $(2x - 3)(6x + 4)$' ,
    explanation: 'Le facteur commun est $(2x - 3)$. On factorise : $(2x - 3) [ (x + 5) + (4x - 1) ] = (2x - 3)(5x + 4)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $14y^2 - 7y$', a: '$7y(2y - 1)$' },
    options: '$7y(2y - 1)$ ¤ $7(2y^2 - y)$ ¤ $7y(2y + 1)$ ¤ $14y(y - 0,5)$' ,
    explanation: 'Le facteur commun est $7y$. On factorise : $7y \\times 2y - 7y \\times 1 = 7y(2y - 1)$.'
  }
],

    "303712": [
  {
    quiz: { q: 'Factorise l\'expression suivante : $x^2 - 25$', a: '$(x - 5)(x + 5)$' },
    options: '$(x - 5)(x + 5)$ ¤ $(x - 5)^2$ ¤ $(x + 5)^2$ ¤ $x(x - 25)$' ,
    explanation: 'On reconnaît la forme $a^2 - b^2$ avec $a=x$ et $b=5$. La factorisation est $(x-5)(x+5)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $9x^2 - 16$', a: '$(3x - 4)(3x + 4)$' },
    options: '$(3x - 4)(3x + 4)$ ¤ $(9x - 4)(9x + 4)$ ¤ $(3x - 4)^2$ ¤ $3x^2 - 16$' ,
    explanation: 'On reconnaît $a^2 - b^2$ avec $a=3x$ et $b=4$. La factorisation est $(3x-4)(3x+4)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $a^2 - 81$', a: '$(a - 9)(a + 9)$' },
    options: '$(a - 9)(a + 9)$ ¤ $(a - 9)^2$ ¤ $(a + 9)^2$ ¤ $a(a - 81)$' ,
    explanation: 'On reconnaît $a^2 - b^2$ avec $a=a$ et $b=9$. La factorisation est $(a-9)(a+9)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $4x^2 - 49$', a: '$(2x - 7)(2x + 7)$' },
    options: '$(2x - 7)(2x + 7)$ ¤ $(4x - 7)(4x + 7)$ ¤ $(2x - 7)^2$ ¤ $4x^2 - 49$' ,
    explanation: 'On reconnaît $a^2 - b^2$ avec $a=2x$ et $b=7$. La factorisation est $(2x-7)(2x+7)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $100 - 9y^2$', a: '$(10 - 3y)(10 + 3y)$' },
    options: '$(10 - 3y)(10 + 3y)$ ¤ $(10 - 3y)^2$ ¤ $(100 - 3y)(100 + 3y)$ ¤ $10 - 9y^2$' ,
    explanation: 'On reconnaît $a^2 - b^2$ avec $a=10$ et $b=3y$. La factorisation est $(10-3y)(10+3y)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $x^2 - 1$', a: '$(x - 1)(x + 1)$' },
    options: '$(x - 1)(x + 1)$ ¤ $(x - 1)^2$ ¤ $(x + 1)^2$ ¤ $x(x - 1)$' ,
    explanation: 'On reconnaît $a^2 - b^2$ avec $a=x$ et $b=1$. La factorisation est $(x-1)(x+1)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $36a^2 - 25b^2$', a: '$(6a - 5b)(6a + 5b)$' },
    options: '$(6a - 5b)(6a + 5b)$ ¤ $(36a - 25b)(36a + 25b)$ ¤ $(6a - 5b)^2$ ¤ $6a^2 - 5b^2$' ,
    explanation: 'On reconnaît $a^2 - b^2$ avec $a=6a$ et $b=5b$. La factorisation est $(6a-5b)(6a+5b)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $0,25x^2 - 9$', a: '$(0,5x - 3)(0,5x + 3)$' },
    options: '$(0,5x - 3)(0,5x + 3)$ ¤ $(0,25x - 3)(0,25x + 3)$ ¤ $(0,5x - 9)(0,5x + 9)$ ¤ $0,5x^2 - 9$' ,
    explanation: 'On reconnaît $a^2 - b^2$ avec $a=0,5x$ et $b=3$. La factorisation est $(0,5x-3)(0,5x+3)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $16 - 49y^2$', a: '$(4 - 7y)(4 + 7y)$' },
    options: '$(4 - 7y)(4 + 7y)$ ¤ $(16 - 7y)(16 + 7y)$ ¤ $(4 - 7y)^2$ ¤ $4 - 49y^2$' ,
    explanation: 'On reconnaît $a^2 - b^2$ avec $a=4$ et $b=7y$. La factorisation est $(4-7y)(4+7y)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $x^2 - 0,49$', a: '$(x - 0,7)(x + 0,7)$' },
    options: '$(x - 0,7)(x + 0,7)$ ¤ $(x - 0,49)(x + 0,49)$ ¤ $(x - 0,7)^2$ ¤ $x^2 - 0,7$' ,
    explanation: 'On reconnaît $a^2 - b^2$ avec $a=x$ et $b=0,7$ (car $0,7 \\times 0,7 = 0,49$). La factorisation est $(x-0,7)(x+0,7)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $81 - a^2$', a: '$(9 - a)(9 + a)$' },
    options: '$(9 - a)(9 + a)$ ¤ $(81 - a)(81 + a)$ ¤ $(9 - a)^2$ ¤ $9 - a^2$' ,
    explanation: 'On reconnaît $a^2 - b^2$ avec $a=9$ et $b=a$. La factorisation est $(9-a)(9+a)$.'
  }
]
};
