// ============================================================
// data/localQuestions_3eme_chapitre06.js — 3ème, chapitre 6 : Probabilités
// ============================================================
// Généré à partir de l'ancien data/localQuestions.js.
// Clés renumérotées au format 6 chiffres : [niveau][chapitre 2 chiffres]
// [n° partie H2][n° sous-partie H3][n° questionnaire dans la sous-partie].
// Contenu des questions strictement inchangé, seule la clé a changé —
// voir le rapport de correspondance mapping_3eme.csv pour
// retrouver l'ancienne clé de chaque questionnaire.
// ============================================================

const localQuestions_3eme_chapitre06 = {
    "306101": [
    {
        quiz: { q: 'On lance un dé équilibré à 6 faces. Comment appelle-t-on l\'action de lancer le dé ?', a: 'Une expérience aléatoire' },
        options: 'Une issue ¤ Une expérience aléatoire ¤ Un événement ¤ Une probabilité',
        explanation: 'L\'action de lancer le dé est l\'expérience que l\'on réalise, on l\'appelle une expérience aléatoire car on ne peut pas prédire le résultat avec certitude.'
    },
    {
        quiz: { q: 'Dans une urne, il y a 3 boules jaunes, 2 rouges et 1 verte. Si je tire une boule, quelles sont les "issues" possibles ?', a: 'Jaune, Rouge ou Verte' },
        options: 'Jaune, Rouge ou Verte ¤ 3 jaunes, 2 rouges, 1 verte ¤ Tirer une boule ¤ L\'urne',
        explanation: 'Les issues sont les différents résultats possibles de l\'expérience. Ici, on peut obtenir soit une boule jaune, soit une rouge, soit une verte.'
    },
    {
        quiz: { q: 'Dans une classe, on choisit un élève au hasard. L\'événement "L\'élève choisi porte des lunettes" est réalisé si l\'élève a effectivement des lunettes. Comment appelle-t-on cet ensemble de résultats ?', a: 'Un événement' },
        options: 'Une issue ¤ Une expérience ¤ Un événement ¤ Une probabilité',
        explanation: 'Un événement est constitué par un ou plusieurs issues (ici, tous les élèves qui portent des lunettes).'
    },
    {
        quiz: { q: 'On tire une boule dans une urne contenant des boules Bleues, Vertes et Jaunes. Si l\'événement A est "Tirer une boule Bleue", quel est l\'événement contraire de A ?', a: 'Tirer une boule verte ou jaune' },
        options: 'Tirer une boule Verte ¤ Tirer une boule Jaune ¤ Tirer une boule verte ou jaune ¤ Ne pas tirer de boule',
        explanation: 'Le contraire d\'un événement contient TOUTES les issues qui ne sont pas dans l\'événement A. Si A est "Bleu", $\\overline{A}$ est "Tout ce qui n\'est pas bleu".'
    },
    {
        quiz: { q: 'On lance un dé à 6 faces. Soit l\'événement A : "Obtenir un nombre pair". Quel est l\'événement contraire de A ?', a: 'Obtenir un nombre impair' },
        options: 'Obtenir un 2 ou un 4 ¤ Obtenir un nombre impair ¤ Obtenir un nombre supérieur à 3 ¤ Obtenir un 6',
        explanation: 'Les nombres pairs sont $\{2; 4; 6\}$. Les issues qui ne sont pas dans cet ensemble sont $\{1; 3; 5\}$, ce qui correspond aux nombres impairs.'
    },
    {
        quiz: { q: 'Dans une trousse, il y a 5 stylos et 2 gommes. On tire un objet au hasard. L\'événement "Tirer un crayon" est :', a: 'Un événement impossible' },
        options: 'Un événement certain ¤ Un événement impossible ¤ Un événement probable ¤ Une issue',
        explanation: 'Comme il n\'y a aucun crayon dans la trousse, l\'événement ne peut jamais se produire. Sa probabilité est de $0$, c\'est donc un événement impossible.'
    },
    {
        quiz: { q: 'On lance un dé à 6 faces. L\'événement "Obtenir un nombre entre 1 et 6 (inclus)" est :', a: 'Un événement certain' },
        options: 'Un événement impossible ¤ Un événement certain ¤ Un événement incompatible ¤ Une issue',
        explanation: 'Le résultat sera forcément compris entre 1 et 6. L\'événement se produira à chaque fois, sa probabilité est de $1$. C\'est un événement certain.'
    },
    {
        quiz: { q: 'On tire une carte dans un jeu de 32 cartes. Soit l\'événement A : "Tirer un Coeur" et l\'événement B : "Tirer un Trèfle". Ces deux événements sont :', a: 'Incompatibles' },
        options: 'Incompatibles ¤ Certains ¤ Contraires ¤ Identiques',
        explanation: 'Deux événements sont incompatibles s\'ils ne peuvent pas se produire en même temps. Une carte ne peut pas être à la fois un Coeur et un Trèfle.'
    },
    {
        quiz: { q: 'Si la probabilité d\'un événement est P = 0,9, comment peut-on qualifier cet événement ?', a: 'Il a beaucoup de chances de se produire' },
        options: 'Il a très peu de chances de se produire ¤ Il est impossible ¤ Il a beaucoup de chances de se produire ¤ Il est certain',
        explanation: 'Une probabilité proche de 1 ($0,9$) signifie que l\'événement a de très fortes chances de se réaliser.'
    },
    {
        quiz: { q: 'Si la probabilité d\'un événement est de 0,5, cela signifie qu\'il se produit :', a: '1 fois sur 2' },
        options: '1 fois sur 10 ¤ 1 fois sur 2 ¤ 9 fois sur 10 ¤ Toujours',
        explanation: 'Une probabilité de $0,5$ équivaut à $\\frac{1}{2}$, soit une chance sur deux.'
    }
],

    "306211": [
    {
        quiz: { q: 'On lance un dé équilibré à 6 faces. Quelle est la probabilité d\'obtenir le chiffre 4 ?', a: '1/6' },
        options: '1/6 ¤ 1/2 ¤ 4/6 ¤ 1/4',
        explanation: 'Il y a 1 seule issue favorable (le chiffre 4) sur 6 issues possibles au total. La probabilité est donc $\\frac{1}{6}$.'
    },
    {
        quiz: { q: 'Dans une urne, il y a 10 boules : 3 rouges, 5 bleues et 2 vertes. Quelle est la probabilité de tirer une boule rouge ?', a: '3/10' },
        options: '3/10 ¤ 3/7 ¤ 5/10 ¤ 2/10',
        explanation: 'Il y a 3 issues favorables (les boules rouges) sur un total de 10 issues possibles. La probabilité est $\\frac{3}{10}$.'
    },
    {
        quiz: { q: 'On lance une pièce de monnaie. Quelle est la probabilité d\'obtenir Face ?', a: '0,5' },
        options: '0 ¤ 0,5 ¤ 1 ¤ 1,2',
        explanation: 'Il y a 1 issue favorable (Face) sur 2 issues possibles (Pile ou Face). $\\frac{1}{2} = 0,5$.'
    },
    {
        quiz: { q: 'On lance un dé à 6 faces. Quelle est la probabilité d\'obtenir un nombre pair ?', a: '3/6' },
        options: '1/6 ¤ 2/6 ¤ 3/6 ¤ 4/6',
        explanation: 'Les issues favorables sont $\{2 ; 4 ; 6\}$, il y en a donc 3. Le total est de 6. La probabilité est $\\frac{3}{6}$ (ou $0,5$).'
    },
    {
        quiz: { q: 'Dans une classe de 25 élèves, il y a 12 filles et 13 garçons. Quelle est la probabilité de choisir une fille au hasard ?', a: '12/25' },
        options: '12/13 ¤ 12/25 ¤ 13/25 ¤ 0,5',
        explanation: 'Il y a 12 issues favorables (les filles) sur un total de 25 élèves. La probabilité est $\\frac{12}{25}$.'
    },
     {
        quiz: { q: 'On tire une carte dans un jeu de 32 cartes. Quelle est la probabilité de tirer un As ? (Il y a 4 As dans le jeu)', a: '4/32' },
        options: '1/32 ¤ 4/32 ¤ 4/28 ¤ 1/8',
        explanation: 'Il y a 4 issues favorables (les 4 As) sur 32 issues possibles. La probabilité est $\\frac{4}{32}$.'
    },
    {
        quiz: { q: 'On lance un dé à 6 faces. Quelle est la probabilité d\'obtenir le chiffre 8 ?', a: '0' },
        options: '0 ¤ 1 ¤ 1/6 ¤ 8/6',
        explanation: 'Le chiffre 8 n\'existe pas sur un dé à 6 faces. Il y a 0 issue favorable, donc la probabilité est $0$.'
    },
    {
        quiz: { q: 'Dans une boîte de chocolats, tous les chocolats sont au lait. Quelle est la probabilité de tirer un chocolat au lait ?', a: '1' },
        options: '0 ¤ 0,5 ¤ 1 ¤ 1/2',
        explanation: 'L\'événement est certain car toutes les issues sont favorables. La probabilité est donc $1$.'
    },
    {
        quiz: { q: 'Si la probabilité d\'un événement est de 7/10, combien y a-t-il d\'issues favorables sur 100 issues possibles ?', a: '70' },
        options: '7 ¤ 10 ¤ 70 ¤ 700',
        explanation: 'Si on multiplie le total par 10 (de 10 à 100), on doit aussi multiplier les issues favorables par 10. $7 \\times 10 = 70$.'
    },
    {
        quiz: { q: 'Une urne contient des boules noires et blanches. La probabilité de tirer une boule noire est 4/9. Quelle est la probabilité de tirer une boule blanche ?', a: '5/9' },
        options: '4/9 ¤ 5/9 ¤ 1/9 ¤ 0',
        explanation: 'Le total des probabilités est toujours égal à $1$. La probabilité de la boule blanche est donc $1 - \\frac{4}{9} = \\frac{5}{9}$.'
    }
],

    "306221": [
    {
        quiz: { q: 'On lance un dé à 6 faces. Soit l\'événement A : "Obtenir un 1" et l\'événement B : "Obtenir un 2". Quelle est la probabilité d\'obtenir un 1 OU un 2 ?', a: '2/6' },
        options: '1/6 ¤ 2/6 ¤ 3/6 ¤ 0' ,
        explanation: 'Les événements sont incompatibles. On additionne : $P(1 \\text{ ou } 2) = P(1) + P(2) = \\frac{1}{6} + \\frac{1}{6} = \\frac{2}{6}$.'
    },
    {
        quiz: { q: 'Dans une urne, il y a 2 boules rouges, 3 bleues et 5 vertes. Quelle est la probabilité de tirer une rouge OU une bleue ?', a: '5/10' },
        options: '5/10 ¤ 2/10 ¤ 3/10 ¤ 10/5' ,
        explanation: 'On additionne les issues favorables : $P(\\text{rouge ou bleu}) = \\frac{2}{10} + \\frac{3}{10} = \\frac{5}{10}$.'
    },
    {
        quiz: { q: 'On lance un dé à 6 faces. Quelle est la probabilité d\'obtenir un nombre inférieur à 3 ?', a: '2/6' },
        options: '1/6 ¤ 2/6 ¤ 3/6 ¤ 1/3',
        explanation: 'Les issues favorables sont $\{1 ; 2\}$. La probabilité est $P(1) + P(2) = \\frac{1}{6} + \\frac{1}{6} = \\frac{2}{6}$.'
    },
    {
        quiz: { q: 'La probabilité qu\'il pleuve demain est de 0,3. Quelle est la probabilité qu\'il ne pleuve pas ?', a: '0,7' },
        options: '0,3 ¤ 0,7 ¤ 1 ¤ 0,5',
        explanation: 'On utilise l\'événement contraire : $P(\\text{ne pas pleuvoir}) = 1 - P(\\text{pleuvoir}) = 1 - 0,3 = 0,7$.'
    },
    {
        quiz: { q: 'On lance un dé à 6 faces. La probabilité d\'obtenir un nombre supérieur ou égal à 5 est 2/6. Quelle est la probabilité de son événement contraire ?', a: '4/6' },
        options: '2/6 ¤ 4/6 ¤ 1/6 ¤ 1',
        explanation: 'L\'événement contraire a pour probabilité $1 - P(A)$. Donc $1 - \\frac{2}{6} = \\frac{4}{6}$.'
    },
    {
        quiz: { q: 'Dans un sac, la probabilité de tirer un bonbon à la fraise est 3/8. Quelle est la probabilité de ne PAS tirer un bonbon à la fraise ?', a: '5/8' },
        options: '3/8 ¤ 5/8 ¤ 1/8 ¤ 0',
        explanation: 'On fait $1 - P(\\text{fraise}) = 1 - \\frac{3}{8} = \\frac{5}{8}$.'
    },
    {
        quiz: { q: 'Si la probabilité d\'un événement est de 0,95, quelle est la probabilité de son événement contraire ?', a: '0,05' },
        options: '0,95 ¤ 0,5 ¤ 0,05 ¤ 1',
        explanation: 'Le calcul est $1 - 0,95 = 0,05$.'
    },
    {
        quiz: { q: 'Une probabilité de 0,25 correspond à quel pourcentage de chances ?', a: '25%' },
        options: '2,5% ¤ 25% ¤ 50% ¤ 0,25%',
        explanation: 'Pour transformer une probabilité en pourcentage, on multiplie par 100 : $0,25 \\times 100 = 25\\%$.'
    },
    {
        quiz: { q: 'Si un événement a 80% de chances de se produire, quelle est sa probabilité sous forme décimale ?', a: '0,8' },
        options: '8 ¤ 0,8 ¤ 0,08 ¤ 80',
        explanation: 'On divise le pourcentage par 100 pour retrouver la probabilité : $80 / 100 = 0,8$.'
    },
    {
        quiz: { q: 'La probabilité d\'obtenir un nombre pair avec un dé est 3/6 = 0,5. Quel est le pourcentage de chances ?', a: '50%' },
        options: '5% ¤ 50% ¤ 0,5% ¤ 100%',
        explanation: '$0,5 \\times 100 = 50\\%$.'
    }
],

    "306311": [
    {
        quiz: { q: 'Dans un arbre des possibles, que représente une "branche" ?', a: 'Une issue possible'},       
        options: 'Une expérience ¤ Une épreuve ¤ Une issue possible ¤ Un résultat total',
        explanation: 'Chaque branche de l\'arbre correspond à une issue (un résultat) possible pour une étape donnée.'
    },
    {
        quiz: { q: 'Pour calculer la probabilité d\'un chemin complet dans un arbre, on doit :', a: 'Multiplier les probabilités'},
        options: 'Additionner les probabilités ¤ Multiplier les probabilités ¤ Soustraire les probabilités ¤ Diviser les probabilités',
        explanation: 'La règle de calcul est le produit : la probabilité de l\'issue finale est égale au produit des probabilités rencontrées le long du chemin.'
    },
    {
        quiz: { q: 'Épreuve 1 : Probabilité de tirer une boule rouge = $\\frac{1}{3}$.<br>Épreuve 2 : Probabilité d\'obtenir Pile = $\\frac{1}{2}$.<br>Quelle est la probabilité d\'avoir (Rouge ET Pile) ?',a: '1/6' },        
        options: '1/5 ¤ 2/3 ¤ 1/6 ¤ 1/3',
        explanation: 'On multiplie les probabilités des deux épreuves : $\\frac{1}{3} \\times \\frac{1}{2} = \\frac{1}{6}$.'
    },
    {
        quiz: { q: 'Dans un arbre, si une branche a une probabilité de $0,4$ et la suivante $0,5$, quelle est la probabilité du chemin ?',a: '0,2' },        
        options: '0,9 ¤ 0,2 ¤ 0,25 ¤ 0,45',
        explanation: 'On multiplie : $0,4 \\times 0,5 = 0,2$.'
    },
    {
        quiz: { q: 'Dans un tableau à double entrée, comment peut-on remplir les cases inconnues ?', a: 'En commençant par la ligne ou colonne ou il manque une seule valeur'},   
        options: 'En multipliant tout ¤ En commençant par la ligne ou colonne ou il manque une seule valeur ¤ En additionnant les totaux ¤ On ne peut pas remplir un tableau',
        explanation: 'La méthode consiste à identifier une ligne ou une colonne où il n\'y a qu\'une seule case inconnue pour déduire sa valeur.'
    },
    {
        quiz: { q: 'Si je lance un dé (6 faces) et que je tire une carte (32 cartes), combien y a-t-il d\'issues au total ?',a: '192' },
        options: '38 ¤ 6 ¤ 32 ¤ 192',
        explanation: 'Le nombre total d\'issues est le produit des possibilités : $6 \\times 32 = 192$.'
    },
    {
        quiz: { q: 'Dans un arbre, la somme des probabilités des branches partant d\'un même nœud doit être égale à :', a: '1'},
        options: '0 ¤ 0,5 ¤ 1 ¤ 100',
        explanation: 'La somme des probabilités de toutes les issues partant d\'un même point doit TOUJOURS être égale à $1$.'
    },
    {
        quiz: { q: 'On a un tableau. Ligne A : 4 cas. Ligne B : 6 cas. Total : 10 cas.<br>Quelle est la probabilité de tomber sur la ligne A ?', a: '0,4' },       
        options: '0,4 ¤ 0,6 ¤ 4 ¤ 10',
        explanation: 'On divise le nombre de cas de la ligne par le total : $\\frac{4}{10} = 0,4$.'
    },
    {
        quiz: { q: 'Dans un collège, on étudie le statut des élèves et leur langue. <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th></th><th>Allemand</th><th>Espagnol</th><th>Total</th></tr></thead><tbody><tr><td>Externes</td><td>50</td><td>?</td><td>200</td></tr><tr><td>DP</td><td>?</td><td>?</td><td>400</td></tr><tr><td>Total</td><td>150</td><td>450</td><td>600</td></tr></tbody></table></div><br>Quelle est la probabilité de choisir un élève qui est DP et fait Espagnol ?', a: '300/600' },
        options: '150/600 ¤ 450/600 ¤ 300/600 ¤ 100/600',
        explanation: 'D\'abord, complétons le tableau. Si le total des Allemand est 150 alors 100 élèves sont Dp et allemand. Donc 300 sont Dp et espagnol. La probabilité est donc $\\frac{300}{600}$.'
    },
    {
        quiz: { q: 'Dans un collège. <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th></th><th>Allemand</th><th>Espagnol</th><th>Total</th></tr></thead><tbody><tr><td>Externes</td><td>50</td><td>150</td><td>200</td></tr><tr><td>DP</td><td>100</td><td>300</td><td>400</td></tr><tr><td>Total</td><td>150</td><td>450</td><td>600</td></tr></tbody></table></div><br>Quelle est la probabilité que si je choisisse un élève parmi ceux qui font Allemand, il soit DP ?', a: '100/150' },
        options: '100/400 ¤ 100/600 ¤ 100/150 ¤ 150/600',
        explanation: 'C\'est une probabilité conditionnelle. On ne regarde QUE la colonne "Allemand". Il y a 150 élèves en allemand, et parmi eux, 100 sont DP. La probabilité est $\\frac{100}{150}$.'
    },
    {
        quiz: { q: 'Dans un club de sport : <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th></th><th>Garçons</th><th>Filles</th><th>Total</th></tr></thead><tbody><tr><td>Tennis</td><td>12</td><td>8</td><td>20</td></tr><tr><td>Foot</td><td>?</td><td>10</td><td>30</td></tr><tr><td>Total</td><td>32</td><td>18</td><td>50</td></tr></tbody></table></div><br>Quelle est la probabilité de choisir un élève qui fait du Foot ?', a: '30/50' },
        options: '20/50 ¤ 30/50 ¤ 25/50 ¤ 18/50',
        explanation: 'Le nombre total d\'élèves est 50. Le nombre d\'élèves faisant du foot est 30. La probabilité est $\\frac{30}{50}$.'
    },
    {
        quiz: { q: 'Dans un club de sport. <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th></th><th>Garçons</th><th>Filles</th><th>Total</th></tr></thead><tbody><tr><td>Tennis</td><td>12</td><td>8</td><td>20</td></tr><tr><td>Foot</td><td>20</td><td>10</td><td>30</td></tr><tr><td>Total</td><td>32</td><td>18</td><td>50</td></tr></tbody></table></div><br>Quelle est la probabilité de choisir une fille qui fait du Tennis ?', a: '8/50' },
        options: '8/20 ¤ 8/50 ¤ 10/50 ¤ 18/50',
        explanation: 'On cherche l\'intersection "Filles" et "Tennis", qui est 8. Le total des élèves est 50. La probabilité est $\\frac{8}{50}$.'
    },
    {
        quiz: { q: 'Une usine produit deux types de pièces (A et B) avec deux défauts possibles. <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th></th><th>Défaut</th><th>Sans défaut</th><th>Total</th></tr></thead><tbody><tr><td>Type A</td><td>5</td><td>95</td><td>100</td></tr><tr><td>Type B</td><td>15</td><td>185</td><td>200</td></tr><tr><td>Total</td><td>20</td><td>280</td><td>300</td></tr></tbody></table></div><br>Quelle est la probabilité de tirer une pièce de Type B qui n\'a aucun défaut ?', a: '185/300' },
        options: '15/300 ¤ 185/200 ¤ 185/300 ¤ 200/300',
        explanation: 'On cherche la case intersection Type B et Sans défaut, soit 185. Le total est 300. La probabilité est $\\frac{185}{300}$.'
    },
    {
        quiz: { q: 'Dans une bibliothèque : <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th></th><th>Roman</th><th>BD</th><th>Total</th></tr></thead><tbody><tr><td>Adulte</td><td>40</td><td>10</td><td>50</td></tr><tr><td>Enfant</td><td>30</td><td>20</td><td>50</td></tr><tr><td>Total</td><td>70</td><td>30</td><td>100</td></tr></tbody></table></div><br>Quelle est la probabilité de choisir un enfant qui lit des BD ?', a: '20/100' },
        options: '20/50 ¤ 20/100 ¤ 30/100 ¤ 10/100',
        explanation: 'L\'intersection Enfant et BD est 20. Le total des usagers est 100. La probabilité est $\\frac{20}{100}$.'
    },
]
};
