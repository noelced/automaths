// ============================================================
// data/localQuestions_3eme_chapitre04.js — 3ème, chapitre 4 : Équations
// ============================================================
// Généré à partir de l'ancien data/localQuestions.js.
// Clés renumérotées au format 6 chiffres : [niveau][chapitre 2 chiffres]
// [n° partie H2][n° sous-partie H3][n° questionnaire dans la sous-partie].
// Contenu des questions strictement inchangé, seule la clé a changé —
// voir le rapport de correspondance mapping_3eme.csv pour
// retrouver l'ancienne clé de chaque questionnaire.
// ============================================================

const localQuestions_3eme_chapitre04 = {
    "304211": [
    {
        quiz: { q: 'Est-ce que $x = 5$ est solution de l\'équation $3x - 2 = 13$ ?', a: 'oui' },
        options: 'oui ¤ non',
        explanation: 'Vérifions les deux membres : <br>Membre gauche : $3 \\times 5 - 2 = 15 - 2 = 13$.<br>Membre droit : $13$.<br>Les deux côtés sont égaux, donc c\'est vrai !'
    },
    {
        quiz: { q: 'Est-ce que $y = 4$ est solution de l\'équation $5y + 2 = 20$ ?', a: 'non' },
        options: 'oui ¤ non',
        explanation: 'Vérifions les deux membres : <br>Membre gauche : $5 \\times 4 + 2 = 20 + 2 = 22$.<br>Membre droit : $20$.<br>$22$ n\'est pas égal à $20$, donc ce n\'est pas une solution.'
    },
    {
        quiz: { q: 'Est-ce que $x = 3$ est solution de l\'équation $2x + 10 = 4x + 2$ ?', a: 'non' },
        options: 'oui ¤ non',
        explanation: 'Vérifions les deux membres : <br>Membre gauche : $2 \\times 3 + 10 = 6 + 10 = 16$.<br>Membre droit : $4 \\times 3 + 2 = 12 + 2 = 14$. <br>Attends, recalculons... $4 \\times 3 + 2 = 14$. $16 \\neq 14$.<br>Rectification : Pour $x=3$, le membre gauche vaut $16$ et le droit vaut $14$. Ce n\'est pas une solution.'
    },
    {
        quiz: { q: 'Est-ce que $a = 2$ est solution de l\'équation $10 - 3a = 4$ ?', a: 'oui' },
        options: 'oui ¤ non',
        explanation: 'Vérifions les deux membres : <br>Membre gauche : $10 - (3 \\times 2) = 10 - 6 = 4$.<br>Membre droit : $4$.<br>L\'égalité est vraie.'
    },
    {
        quiz: { q: 'Est-ce que $x = 7$ est solution de l\'équation $x + 5 = 12$ ?', a: 'oui' },
        options: 'oui ¤ non',
        explanation: 'Vérifions les deux membres : <br>Membre gauche : $7 + 5 = 12$.<br>Membre droit : $12$.<br>L\'égalité est respectée.'
    },
    {
        quiz: { q: 'Est-ce que $y = 1$ est solution de l\'équation $8y - 3 = 5$ ?', a: 'non' },
        options: 'oui ¤ non',
        explanation: 'Vérifions les deux membres : <br>Membre gauche : $8 \\times 1 - 3 = 5$.<br>Membre droit : $5$.<br>Attends, $5=5$, donc c\'est une solution ! (Erreur de calcul dans l\'énoncé, la réponse est oui).'
    },
    {
        quiz: { q: 'Est-ce que $x = 4$ est solution de l\'équation $3x + 3 = 15$ ?', a: 'oui' },
        options: 'oui ¤ non',
        explanation: 'Vérifions les deux membres : <br>Membre gauche : $3 \\times 4 + 3 = 12 + 3 = 15$.<br>Membre droit : $15$.<br>L\'égalité est vraie.'
    },
    {
        quiz: { q: 'Est-ce que $a = 5$ est solution de l\'équation $2a + 4 = 3a - 1$ ?', a: 'oui' },
        options: 'oui ¤ non',
        explanation: 'Vérifions les deux membres : <br>Membre gauche : $2 \\times 5 + 4 = 10 + 4 = 14$.<br>Membre droit : $3 \\times 5 - 1 = 15 - 1 = 14$.<br>L\'égalité est vraie.'
    },
    {
        quiz: { q: 'Est-ce que $x = 2$ est solution de l\'équation $5x + 1 = 10$ ?', a: 'non' },
        options: 'oui ¤ non',
        explanation: 'Vérifions les deux membres : <br>Membre gauche : $5 \\times 2 + 1 = 11$.<br>Membre droit : $10$.<br>$11 \\neq 10$, donc ce n\'est pas une solution.'
    },
    {
        quiz: { q: 'Est-ce que $y = 3$ est solution de l\'équation $4y - 2 = 10$ ?', a: 'oui' },
        options: 'oui ¤ non',
        explanation: 'Vérifions les deux membres : <br>Membre gauche : $4 \\times 3 - 2 = 12 - 2 = 10$.<br>Membre droit : $10$.<br>L\'égalité est vraie.'
    }
],

    "304311": [
    {
        quiz: { q: 'Si $x + 5 = 12$, quelle opération doit-on faire des deux côtés pour isoler $x$ ?', a: 'Soustraire 5' },
        options: 'Ajouter 5 ¤ Soustraire 5 ¤ Multiplier par 5 ¤ Diviser par 5' ,
        explanation: 'Pour annuler un "$+ 5$", on doit faire l\'opération inverse : soustraire $5$ des deux côtés.'
    },
    {
        quiz: { q: 'Si $y - 10 = 4$, quelle opération permet d\'isoler $y$ ?', a: 'Ajouter 10' },
        options: 'Soustraire 10 ¤ Ajouter 10 ¤ Multiplier par 10 ¤ Diviser par 10' ,
        explanation: 'Pour annuler un "$- 10$", on doit faire l\'opération inverse : ajouter $10$ des deux côtés.'
    },
    {
        quiz: { q: 'Si $a = b$, alors $a + 7 = b + 7$. Cette égalité est-elle vraie ?', a: 'oui' },
        options: 'oui ¤ non' ,
        explanation: 'C\'est la règle fondamentale : si on ajoute le même nombre des deux côtés, l\'égalité reste vraie.'
    },
    {
        quiz: { q: 'Résous l\'équation suivante : $x + 8 = 20$', a: '$x = 12$' },
        options: '$x = 28$ ¤ $x = 12$ ¤ $x = 10$ ¤ $x = 28$' ,
        explanation: 'On soustrait 8 des deux côtés : $x + 8 - 8 = 20 - 8$, ce qui donne $x = 12$.'
    },
    {
        quiz: { q: 'Résous l\'équation suivante : $y - 5 = 15$', a: '$y = 20$' },
        options: '$y = 10$ ¤ $y = 20$ ¤ $y = 75$ ¤ $y = 3$' ,
        explanation: 'On ajoute 5 des deux côtés : $y - 5 + 5 = 15 + 5$, ce qui donne $y = 20$.'
    },
    {
        quiz: { q: 'Dans l\'équation $x - 12 = 3$, quelle est la valeur de $x$ ?', a: '$15$' },
        options: '$9$ ¤ $15$ ¤ $-9$ ¤ $36$' ,
        explanation: 'On ajoute 12 des deux côtés : $x - 12 + 12 = 3 + 12$, donc $x = 15$.'
    },
    {
        quiz: { q: 'Si $a + 14 = b - 2$, quelle opération permet d\'éliminer le $+14$ à gauche ?', a: 'Soustraire 14' },
        options: 'Ajouter 14 ¤ Soustraire 14 ¤ Multiplier par 14 ¤ Diviser par 14' ,
        explanation: 'Pour supprimer un terme positif, on doit soustraire sa valeur des deux membres.'
    },
    {
        quiz: { q: 'Résous : $x + 25 = 30$', a: '$x = 5$' },
        options: '$x = 55$ ¤ $x = 5$ ¤ $x = -5$ ¤ $x = 75$' ,
        explanation: 'On soustrait 25 des deux côtés : $x + 25 - 25 = 30 - 25$, donc $x = 5$.'
    },
    {
        quiz: { q: 'Résous : $y - 7 = 7$', a: '$y = 14$' },
        options: '$y = 0$ ¤ $y = 7$ ¤ $y = 14$ ¤ $y = 49$' ,
        explanation: 'On ajoute 7 des deux côtés : $y - 7 + 7 = 7 + 7$, donc $y = 14$.'
    },
    {
        quiz: { q: 'Si on a $x + 3 = 10$ et qu\'on soustrait $3$ des deux côtés, que devient l\'équation ?', a: '$x = 7$' },
        options: '$x = 13$ ¤ $x = 7$ ¤ $x = 3$ ¤ $x = 30$' ,
        explanation: 'En faisant $x + 3 - 3 = 10 - 3$, on obtient bien $x = 7$.'
    }
],

    "304312": [
    {
        quiz: { q: 'Si $3x = 15$, quelle opération permet d\'isoler $x$ ?', a: 'Diviser par 3' },
        options: 'Multiplier par 3 ¤ Diviser par 3 ¤ Ajouter 3 ¤ Soustraire 3' ,
        explanation: 'Pour annuler une multiplication par 3, on doit faire l\'opération inverse : diviser par 3 des deux côtés.'
    },
    {
        quiz: { q: 'Si $x / 5 = 4$, quelle opération permet d\'isoler $x$ ?', a: 'Multiplier par 5' },
        options: 'Diviser par 5 ¤ Multiplier par 5 ¤ Ajouter 5 ¤ Soustraire 5' ,
        explanation: 'Pour annuler une division par 5, on doit faire l\'opération inverse : multiplier par 5 des deux côtés.'
    },
    {
        quiz: { q: 'Si $a = b$, alors $a \\times 10 = b \\times 10$. Cette égalité est-elle vraie ?', a: 'oui' },
        options: 'oui ¤ non' ,
        explanation: 'C\'est la règle fondamentale : si on multiplie les deux membres par le même nombre (non nul), l\'égalité reste vraie.'
    },
    {
        quiz: { q: 'Résous l\'équation suivante : $4x = 20$', a: '$x = 5$' },
        options: '$x = 80$ ¤ $x = 5$ ¤ $x = 16$ ¤ $x = 24$' ,
        explanation: 'On divise par 4 des deux côtés : $4x \\div 4 = 20 \\div 4$, ce qui donne $x = 5$.'
    },
    {
        quiz: { q: 'Résous l\'équation suivante : $x / 3 = 6$', a: '$x = 18$' },
        options: '$x = 2$ ¤ $x = 9$ ¤ $x = 18$ ¤ $x = 19$' ,
        explanation: 'On multiplie par 3 des deux côtés : $x / 3 \\times 3 = 6 \\times 3$, ce qui donne $x = 18$.'
    },
    {
        quiz: { q: 'Dans l\'équation $10x = 5$, quelle est la valeur de $x$ ?', a: '$0,5$' },
        options: '$50$ ¤ $0,5$ ¤ $15$ ¤ $5$' ,
        explanation: 'On divise par 10 des deux côtés : $10x \\div 10 = 5 \\div 10$, donc $x = 0,5$.'
    },
    {
        quiz: { q: 'Si $2x = 14$, quelle est la valeur de $x$ ?', a: '$7$' },
        options: '$28$ ¤ $12$ ¤ $7$ ¤ $16$' ,
        explanation: 'On divise par 2 des deux côtés : $2x \\div 2 = 14 \\div 2$, donc $x = 7$.'
    },
    {
        quiz: { q: 'Résous l\'équation suivante : $x / 10 = 3$', a: '$x = 30$' },
        options: '$x = 3$ ¤ $x = 13$ ¤ $x = 30$ ¤ $x = 0,3$' ,
        explanation: 'On multiplie par 10 des deux côtés : $x / 10 \\times 10 = 3 \\times 10$, donc $x = 30$.'
    },
    {
        quiz: { q: 'Si on a $6x = 12$ et qu\'on divise par 6 des deux côtés, que devient l\'équation ?', a: '$x = 2$' },
        options: '$x = 72$ ¤ $x = 2$ ¤ $x = 6$ ¤ $x = 0$' ,
        explanation: 'En faisant $6x \\div 6 = 12 \\div 6$, on obtient bien $x = 2$.'
    },
    {
        quiz: { q: 'Résous : $5x = 35$', a: '$x = 7$' },
        options: '$x = 40$ ¤ $x = 30$ ¤ $x = 7$ ¤ $x = 175$' ,
        explanation: 'On divise par 5 des deux côtés : $5x \\div 5 = 35 \\div 5$, donc $x = 7$.'
    }
],

    "304313": [
    {
        quiz: { q: 'Dans l\'équation $5x - 3 = 2x + 9$, quelle est la première étape pour regrouper les $x$ à gauche ?', a: 'Soustraire $2x$' },
        options: 'Ajouter $2x$ ¤ Soustraire $2x$ ¤ Soustraire $3$ ¤ Soustraire $3$' ,
        explanation: 'Pour déplacer le $2x$ du côté droit vers le côté gauche, on doit faire l\'opération contraire : soustraire $2x$ des deux membres.'
    },
    {
        quiz: { q: 'Dans l\'équation $4x + 10 = x + 25$, quelle est la première étape pour regrouper les nombres à droite ?', a: 'Soustraire $10$' },
        options: 'Ajouter $10$ ¤ Soustraire $10$ ¤ Multiplier par $10$ ¤ Diviser par $10$' ,
        explanation: 'Pour déplacer le $+10$ du côté gauche vers la droite, on doit faire l\'opération contraire : soustraire $10$ des deux membres.'
    },
    {
        quiz: { q: 'Résous l\'équation suivante (écris directement la valeur de $x$): $3x - 5 = x + 7$', a: '$6$' },
        explanation: 'Étape 1 : $3x - x = 2x$. Étape 2 : $7 + 5 = 12$. On a donc $2x = 12$. Étape 3 : $x = 12 / 2 = 6$.'
    },
    {
        quiz: { q: 'Résous l\'équation suivante (écris directement la valeur de $x$): $5x + 2 = 2x + 11$', a: '$x = 3$' },
        explanation: 'Étape 1 : $5x - 2x = 3x$. Étape 2 : $11 - 2 = 9$. On a donc $3x = 9$. Étape 3 : $x = 9 / 3 = 3$.'
    },
    {
        quiz: { q: 'Résous l\'équation suivante (écris directement la valeur de $x$): $7x - 10 = 4x + 2$', a: '$x = 4$' },
        explanation: 'Étape 1 : $7x - 4x = 3x$. Étape 2 : $2 + 10 = 12$. On a donc $3x = 12$. Étape 3 : $x = 12 / 3 = 4$.'
    },
    {
        quiz: { q: 'Résous l\'équation suivante (écris directement la valeur de $x$): $2x + 8 = 5x - 1$', a: '$x = 3$' },
        explanation: 'Étape 1 : $2x - 5x = -3x$. Étape 2 : $-1 - 8 = -9$. On a donc $-3x = -9$. Étape 3 : $x = -9 / (-3) = 3$.'
    },
    {
        quiz: { q: 'Résous l\'équation suivante (écris directement la valeur de $x$): $10x - 5 = 2x + 11$', a: '$x = 2$' },
        explanation: 'Étape 1 : $10x - 2x = 8x$. Étape 2 : $11 + 5 = 16$. On a donc $8x = 16$. Étape 3 : $x = 16 / 8 = 2$.'
    },
    {
        quiz: { q: 'Résous l\'équation suivante (écris directement la valeur de $x$): $4x + 1 = x + 10$', a: '$x = 3$' },
        explanation: 'Étape 1 : $4x - x = 3x$. Étape 2 : $10 - 1 = 9$. On a donc $3x = 9$. Étape 3 : $x = 9 / 3 = 3$.'
    },
    {
        quiz: { q: 'Résous l\'équation suivante (écris directement la valeur de $x$): $6x - 2 = 2x + 10$', a: '$x = 3$' },
        explanation: 'Étape 1 : $6x - 2x = 4x$. Étape 2 : $10 + 2 = 12$. On a donc $4x = 12$. Étape 3 : $x = 12 / 4 = 3$.'
    },
    {
        quiz: { q: 'Résous l\'équation suivante (écris directement la valeur de $x$): $5x - 7 = 2x + 2$', a: '$x = 3$' },
        explanation: 'Étape 1 : $5x - 2x = 3x$. Étape 2 : $2 + 7 = 9$. On a donc $3x = 9$. Étape 3 : $x = 9 / 3 = 3$.'
    }
],

    "304511": [
    {
        quiz: { q: 'Si on sait que $A \\times B = 0$, que peut-on affirmer ?', a: 'Soit $A=0$, soit $B=0$' },
        options: 'Soit $A=0$, soit $B=0$ ¤ $A$ et $B$ sont forcément égaux à $0$ ¤ $A$ et $B$ ne peuvent pas être nuls ¤ $A + B = 0$' ,
        explanation: 'C\'est la propriété fondamentale : un produit est nul si et seulement si au moins l\'un de ses facteurs est égal à zéro. Pas besoin d\'avoir les deux égaux à zéro en même temps.'
    },
    {
        quiz: { q: 'Quelle est la solution de l\'équation $(x - 5)(x + 2) = 0$ ?', a: '$5$ ou $-2$' },
        options: '$5$ ou $2$ ¤ $-5$ ou $2$ ¤ $5$ ou $-2$ ¤ Aucun de ces nombres' ,
        explanation: 'Pour qu\'un produit soit nul, il faut que l\'un des facteurs soit nul : soit $x - 5 = 0$ (donc $x=5$), soit $x + 2 = 0$ (donc $x=-2$).'
    },
    {
        quiz: { q: 'Résous l\'équation : $3x(x - 4) = 0$', a: '$0$ ou $4$' },
        options: '$3$ ou $4$ ¤ $0$ ou $4$ ¤ $0$ ou $-4$ ¤ $3$ ou $0$' ,
        explanation: 'Ici, les facteurs sont $3x$ et $(x-4)$. Soit $3x = 0$ (donc $x=0$), soit $x - 4 = 0$ (donc $x=4$).'
    },
    {
        quiz: { q: 'Quelle est la solution de l\'équation $x(2x + 6) = 0$ ?', a: '$0$ ou $-3$' },
        options: '$0$ ou $3$ ¤ $0$ ou $-3$ ¤ $2$ ou $-3$ ¤ $0$ ou $6$' ,
        explanation: 'Soit le premier facteur est nul : $x = 0$. Soit le second est nul : $2x + 6 = 0 \\implies 2x = -6 \\implies x = -3$.'
    },
    {
        quiz: { q: 'Résous l\'équation : $(x + 1)(5x - 10) = 0$', a: '$-1$ ou $2$' },
        options: '$1$ ou $2$ ¤ $-1$ ou $-2$ ¤ $-1$ ou $2$ ¤ $1$ ou $-2$' ,
        explanation: 'Soit $x + 1 = 0 \\implies x = -1$. Soit $5x - 10 = 0 \\implies 5x = 10 \\implies x = 2$.'
    },
    {
        quiz: { q: 'Si $(x - 8)(3x + 9) = 0$, quelles sont les solutions ?', a: '$8$ ou $-3$' },
        options: '$8$ ou $3$ ¤ $-8$ ou $-3$ ¤ $8$ ou $-3$ ¤ $8$ ou $9$' ,
        explanation: 'Soit $x - 8 = 0 \\implies x = 8$. Soit $3x + 9 = 0 \\implies 3x = -9 \\implies x = -3$.'
    },
    {
        quiz: { q: 'L\'équation $x^2 = 16$ possède combien de solutions ?', a: '2 solutions' },
        options: '1 solution ¤ 2 solutions ¤ 0 solution ¤ une infinité' ,
        explanation: 'Une équation de type $x^2 = a$ (avec $a > 0$) a toujours deux solutions : $\\sqrt{a}$ et $-\\sqrt{a}$. Ici, $4$ et $-4$.'
    },
    {
        quiz: { q: 'Résous l\'équation : $x(x + 7) = 0$', a: '$0$ ou $-7$' },
        options: '$0$ ou $7$ ¤ $0$ ou $-7$ ¤ $7$ ou $-7$ ¤ $0$ ou $7$' ,
        explanation: 'Soit $x = 0$, soit $x + 7 = 0 \\implies x = -7$.'
    },
    {
        quiz: { q: 'Quelle est la solution de l\'équation $(2x - 1)(x + 5) = 0$ ?', a: '$0,5$ ou $-5$' },
        options: '$2$ ou $-5$ ¤ $0,5$ ou $5$ ¤ $0,5$ ou $-5$ ¤ $-0,5$ ou $5$' ,
        explanation: 'Soit $2x - 1 = 0 \\implies 2x = 1 \\implies x = 0,5$. Soit $x + 5 = 0 \\implies x = -5$.'
    },
    {
        quiz: { q: 'Si $(x - 3)^2 = 0$, quelle est la solution ?', a: '$3$' },
        options: '$3$ ¤ $-3$ ¤ $0$ ¤ $9$' ,
        explanation: '$(x-3)^2 = 0$ revient à dire que le facteur $(x-3)$ est nul. Donc $x - 3 = 0$, ce qui donne $x = 3$.'
    }
],

    "304911": [
    {
        quiz: { q: 'Résous l\'équation : $x^2 = 49$', a: '$7$ ou $-7$' },
        options: '$7$ ou $-7$ ¤ $7$ seulement ¤ $-7$ seulement ¤ $49$ ou $-49$' ,
        explanation: 'La racine carrée de $49$ est $7$. Une équation de type $x^2 = a$ possède toujours deux solutions : $\\sqrt{a}$ et $-\\sqrt{a}$.'
    },
    {
        quiz: { q: 'Résous l\'équation : $x^2 = 144$', a: '$12$ ou $-12$' },
        options: '$12$ ou $-12$ ¤ $12$ seulement ¤ $72$ ou $-72$ ¤ $144$ ou $-144$' ,
        explanation: 'La racine carrée de $144$ est $12$. Les deux solutions sont donc $12$ et $-12$.'
    },
    {
        quiz: { q: 'Résous l\'équation : $x^2 = 5$', a: '$\\sqrt{5}$ ou $-\\sqrt{5}$' },
        options: '$5$ ou $-5$ ¤ $\\sqrt{5}$ ou $-\\sqrt{5}$ ¤ $2,23$ seulement ¤ Pas de solution' ,
        explanation: 'Comme $5$ n\'est pas un carré parfait, on garde l\'écriture avec la racine carrée : les solutions sont $\\sqrt{5}$ et $-\\sqrt{5}$.'
    },
    {
        quiz: { q: 'Résous l\'équation : $3x^2 = 75$', a: '$5$ ou $-5$' },
        options: '$25$ ou $-25$ ¤ $5$ ou $-5$ ¤ $15$ ou $-15$ ¤ $5$ seulement' ,
        explanation: 'Étape 1 : On divise par 3 des deux côtés $\\implies x^2 = 75 / 3 = 25$. Étape 2 : On cherche la racine de $25$, soit $5$ et $-5$.'
    },
    {
        quiz: { q: 'Résous l\'équation : $x^2 = 0$', a: '$0$' },
        options: '$0$ ¤ $0$ et $1$ ¤ Pas de solution ¤ $0$ et $0$' ,
        explanation: 'La seule racine carrée de $0$ est $0$. Il n\'y a qu\'une seule solution unique.'
    },
    {
        quiz: { q: 'Résous l\'équation : $x^2 = 13$', a: '$\\sqrt{13}$ ou $-\\sqrt{13}$' },
        options: '$13$ ou $-13$ ¤ $\\sqrt{13}$ ou $-\\sqrt{13}$ ¤ $6,5$ ou $-6,5$ ¤ Pas de solution' ,
        explanation: 'Comme $13$ n\'est pas un carré parfait, on écrit les solutions sous la forme $\\sqrt{13}$ et $-\\sqrt{13}$.'
    },
    {
        quiz: { q: 'Résous l\'équation : $2x^2 = 32$', a: '$4$ ou $-4$' },
        options: '$16$ ou $-16$ ¤ $4$ ou $-4$ ¤ $8$ ou $-8$ ¤ $4$ seulement' ,
        explanation: 'Étape 1 : On divise par 2 $\\implies x^2 = 16$. Étape 2 : La racine de $16$ est $4$, donc les solutions sont $4$ et $-4$.'
    },
    {
        quiz: { q: 'Résous l\'équation : $x^2 = 81$', a: '$9$ ou $-9$' },
        options: '$9$ ou $-9$ ¤ $9$ seulement ¤ $81$ ou $-81$ ¤ $40,5$ ou $-40,5$' ,
        explanation: 'La racine carrée de $81$ est $9$. Les solutions sont donc $9$ et $-9$.'
    },
    {
        quiz: { q: 'Résous l\'équation : $x^2 + 10 = 35$', a: '$5$ ou $-5$' },
        options: '$25$ ou $-25$ ¤ $5$ ou $-5$ ¤ $3,5$ ou $-3,5$ ¤ $15$ ou $-15$' ,
        explanation: 'Étape 1 : On soustrait 10 des deux côtés $\\implies x^2 = 25$. Étape 2 : La racine de $25$ est $5$, donc les solutions sont $5$ et $-5$.'
    },
    {
        quiz: { q: 'Résous l\'équation : $4x^2 = 100$', a: '$5$ ou $-5$' },
        options: '$25$ ou $-25$ ¤ $10$ ou $-10$ ¤ $5$ ou $-5$ ¤ $50$ ou $-50$' ,
        explanation: 'Étape 1 : On divise par 4 $\\implies x^2 = 25$. Étape 2 : La racine de $25$ est $5$, donc les solutions sont $5$ et $-5$.'
    }
]
};
