// ============================================================
// data/localQuestions_3eme_chapitre05.js — 3ème, chapitre 5 : Statistiques
// ============================================================
// Généré à partir de l'ancien data/localQuestions.js.
// Clés renumérotées au format 6 chiffres : [niveau][chapitre 2 chiffres]
// [n° partie H2][n° sous-partie H3][n° questionnaire dans la sous-partie].
// Contenu des questions strictement inchangé, seule la clé a changé —
// voir le rapport de correspondance mapping_3eme.csv pour
// retrouver l'ancienne clé de chaque questionnaire.
// ============================================================

const localQuestions_3eme_chapitre05 = {
    "305211": [
    // --- PARTIE 1 : SÉRIES DE VALEURS BRUTES (Comptage manuel) ---
    {
        quiz: { q: 'Dans la série suivante, quel est l\'effectif de la valeur 12 ? <br> $8 - 12 - 5 - 12 - 10 - 12 - 15 - 7 - 12 - 3$', a: '4' },
        options: '48 ¤ 12 ¤ 4 ¤ 10',
        explanation: 'Il faut compter combien de fois le nombre $12$ apparaît dans la liste. On le trouve : 1, 2, 3 et 4 fois. L\'effectif est donc 4.'
    },
    {
        quiz: { q: 'Quel est l\'effectif total de cette série ? <br> $10 - 5 - 8 - 12 - 7 - 15 - 10 - 9 - 11 - 6$', a: '10' },
        options: '93 ¤ 96 ¤ 10 ¤ 92',
        explanation: 'L\'effectif total est le nombre de valeurs présentes dans la liste. Si on compte chaque nombre un par un, on en trouve bien qu\'il y a 10 valeurs dans la liste.'
    },
    {
        quiz: { q: "Dans la série suivante, quel est l'effectif de la valeur 5 ? <br> $5 - 8 - 5 - 12 - 5 - 10 - 7 - 15 - 5 - 9$", a: "4" },
        options: "3 \\ 4 \\ 5 \\ 6",
        explanation: "On compte les combien de fois le nombre $5$ apparaît dans la liste : il apparaît 4 fois dans la liste."
    },
    {
        quiz: { q: "Quel est l'effectif total de cette série ? <br> $4 - 6 - 8 - 10 - 12 - 14 - 16 - 18 - 20$", a: "9" },
        options: "1 \\ 4 \\ 9 \\ 20",
        explanation: "Il suffit de compter le nombre d'éléments dans la liste. Il y a 9 nombres au total."
    },
    {
        quiz: { q: "Dans la série : $1 - 3 - 5 - 7 - 9 - 11 - 13 - 15 - 17 - 19$, quel est l'effectif de la valeur 11 ?", a: "1" },
        options: "0 \\ 1 \\ 2 \\ 3",
        explanation: "Le nombre '11' n'apparaît qu'une seule fois dans cette liste. Son effectif est donc 1."
    },

    // --- PARTIE 2 : TABLEAUX D'EFFECTIFS (Lecture de tableaux HTML) ---
        {
        quiz: { q: 'Regarde ce tableau. Quel est l\'effectif total ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Valeur</th><th>8</th><th>12</th><th>15</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>3</td><td>5</td><td>7</td></tr></tbody></table></div>', a: '15' },
        options: '3 ¤ 189 ¤ 15 ¤ 35',
        explanation: 'Pour trouver l\'effectif total, on additionne les effectifs de chaque valeur : $3 + 5 + 7 = 15$.'
    },
    {
        quiz: { q: 'Dans ce tableau, quel est l\'effectif de la valeur 12 ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Valeur</th><th>8</th><th>12</th><th>15</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>3</td><td>8</td><td>7</td></tr></tbody></table></div>', a: '8' },
        options: '2 ¤ 96 ¤ 8 ¤ 18',
        explanation: 'On regarde la colonne \'12\' et on lit l\'effectif correspondant sur la ligne du bas. On trouve bien 8.'
    },
    {
        quiz: { q: 'Quelle serait la position dans la liste de la dernière valeur 15 si tu retransformais ce tableau d\'effectifs en série statistique ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Valeur</th><th>8</th><th>12</th><th>15</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>2</td><td>5</td><td>3</td></tr></tbody></table></div>', a: '10ème' },
        options: '7ème ¤ 8ème ¤ 10ème ¤ 3ème',
        explanation: 'L\'effectif cumulé de 15 est de 10. Cela signifie que la dernière valeur (le dernier 15) occupe la 10ème position dans la liste.'
    },
    {
        quiz: { q: 'Quelle serait la position dans la liste de la première valeur \'20\' ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Valeur</th><th>10</th><th>15</th><th>20</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>4</td><td>3</td><td>6</td></tr><tr><td><strong>Cumulé</strong></td><td>4</td><td>7</td><td>13</td></tr></tbody></table></div>', a: '8ème' },
        options: '3ème ¤ 7ème ¤ 8ème ¤ 13ème',
        explanation: 'L\'effectif cumulé de la valeur 15 est 7. Cela signifie que les 7 premières valeurs sont des 10 et des 15. La valeur 20 commence donc juste après, à la 8ème position.'
    },
    {
        quiz: { q: 'Quel est l\'effectif total de ce tableau ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Valeur</th><th>5</th><th>10</th><th>15</th><th>20</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>2</td><td>5</td><td>3</td><td>6</td></tr></tbody></table></div>', a: '16' },
        options: '10 ¤ 14 ¤ 16 ¤ 20',
        explanation: 'On additionne tous les effectifs de la ligne : $2 + 5 + 3 + 6 = 16$.'
    }

],

    "305221": [ // questions sur la fréquence
    {
        quiz: { q: 'On a relevé les notes de 20 élèves : $10 - 15 - 10 - 20 - 10 - 0 - 10 - 15 - 10 - 10 - 12 - 14 - 10 - 18 - 10 - 11 - 10 - 13 - 10 - 16$. Quelle est la fréquence de la note 10 (sous forme décimale) ?', a: '0,5' },
        options: '0,4 ¤ 0,5 ¤ 0,6 ¤ 0,7',
        explanation: 'La valeur 10 apparaît 10 fois sur un total de 20 élèves. La fréquence est $10 / 20 = 0,5$.'
    },
    {
        quiz: { q: 'Dans une série de 20 températures relevées, la valeur 20°C apparaît 5 fois. Quelle est sa fréquence ?', a: '0,25' },
        options: '0,2 ¤ 0,25 ¤ 0,3 ¤ 0,5',
        explanation: 'La fréquence est le rapport entre l\'effectif (5) et le total (20). $5 / 20 = 1/4 = 0,25$.'
    },
    {
        quiz: { q: 'Dans une liste de 40 objets, 10 sont rouges. Quelle est la fréquence des objets rouges ?', a: '1/4' },
        options: '1/2 ¤ 1/3 ¤ 1/4 ¤ 1/5',
        explanation: 'La fréquence est $10 / 40$. En simplifiant par 10, on obtient $1/4$.'
    },
    {
        quiz: { q: 'Dans la série suivante, quelle est la fréquence de la valeur 7 (en pourcentage) ? <br> $7 - 7 - 7 - 3 - 7 - 9 - 7 - 7 - 7 - 13$', a: '70%' },
        options: '40% ¤ 50% ¤ 60% ¤ 70%',
        explanation: 'La valeur 7 apparaît 7 fois sur un total de 10. $7 / 10 = 0,7$, soit $70\\%$.'
    },
    {
        quiz: { q: 'Quelle est la fréquence de la valeur 15 dans cette série ? <br> $15 - 15 - 15 - 15 - 20 - 20 - 20 - 20 - 20 - 20$', a: '4/10' },
        options: '3/10 ¤ 4/10 ¤ 5/10 ¤ 6/10',
        explanation: 'La valeur 15 apparaît 4 fois sur un total de 10. La fréquence est donc $4 / 10$, ce qui se simplifie en $2/5$ ou s\'écrit $4/10$.'
    },
    {
        quiz: { q: 'Regarde ce tableau. Quelle est la fréquence de 10mm (sous forme décimale) ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Pluie tombée (mm)</th><th>5</th><th>10</th><th>15</th></tr></thead><tbody><tr><td><strong>Nombre de jours</strong></td><td>1</td><td>6</td><td>3</td></tr></tbody></table></div>', a: '0,6' },
        options: '0,3 ¤ 0,4 ¤ 0,5 ¤ 0,6',
        explanation: 'L\'effectif de 10 est 6. L\'effectif total est $1+6+3=10$. La fréquence est $6/10 = 0,6$.'
    },
    {
        quiz: { q: 'Dans ce tableau, quelle est la fréquence de la valeur 5km (en pourcentage) ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Distance (km) </th><th>5</th><th>10</th><th>15</th></tr></thead><tbody><tr><td><strong>Nombre de coureurs</strong></td><td>4</td><td>6</td><td>5</td></tr></tbody></table></div>', a: '26,6%' },
        options: '20% ¤ 25% ¤ 26,6% ¤ 30%',
        explanation: 'L\'effectif de 5 est 4. Le total est 15. La fréquence est $4/15 \\approx 0,266$, soit environ $26,6\\%$.'
    },
    {
        quiz: { q: 'Dans ce tableau, quelle est la fréquence de la valeur 4 cousins(nes) (en pourcentage) ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Nombre de cousins(nes)</th><th>2</th><th>4</th><th>6</th></tr></thead><tbody><tr><td><strong>Nombre de familles</strong></td><td>1</td><td>3</td><td>2</td></tr></</tbody>></table></div>', a: '50%' },
        options: '33% ¤ 40% ¤ 50% ¤ 60%',
        explanation: 'L\'effectif de 4 est 3. Le total est 6. La fréquence est $3/6 = 0,5$, soit $50\\%$.'
    },
    {
        quiz: { q: 'Regarde ce tableau. Quelle est la fréquence de la valeur 10 (sous forme décimale) ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Valeur</th><th>5</th><th>10</th><th>15</th><th>20</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>2</td><td>4</td><td>3</td><td>7</td></tr></tbody></table></div>', a: '0,25' },
        options: '0,2 ¤ 0,25 ¤ 0,3 ¤ 0,5',
        explanation: 'L\'effectif de 10 est 4. Le total est $2+4+3+7=16$. La fréquence est $4/16 = 1/4 = 0,25$.'
    },
    {
        quiz: { q: 'Dans ce tableau, quelle est la fréquence de la valeur 5 (sous forme fractionnaire) ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Valeur</th><th>5</th><th>10</th><th>15</th><th>20</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>2</td><td>5</td><td>3</td><td>6</td></tr></</tbody>></table></div>', a: '1/8' },
        options: '1/8 ¤ 0,125 ¤ 12,5% ¤ 0,25',
        explanation: 'L\'effectif de 5 est 2. Le total est 16. La fréquence est $2/16 = 1/8. 0,125 et 12,5% seraient également corrects mais on demande la forme fractionnaire !'
    }
],

    "305311": [
    // --- QUESTIONS SUR LA MOYENNE SIMPLE ---
    {
        quiz: { q: 'Un musicien joue 4 morceaux avec les durées suivantes (en minutes) : $5 - 10 - 20 - 5$. Quelle est la durée moyenne de ses morceaux ?', a: '10' },
        options: '36,25 ¤ 10 ¤ 8 ¤ 15',
        explanation: 'Il faut d\'abord faire la somme : $5 + 10 + 20 + 5 = 40$. Ensuite, on divise par le nombre de morceaux (4). $40 / 4 = 10$. Attention au piège : $5+10+20+(5/4)$ ne donne pas la moyenne !'
    },
    {
        quiz: { q: 'Un athlète court 4 distances : $100\\text{m} - 200\\text{m} - 300\\text{m} - 400\\text{m}$. Quelle est la distance moyenne parcourue ?', a: '250' },
        options: '250 ¤ 100 ¤ 250 ¤ 50',
        explanation: 'Somme des distances : $100 + 200 + 300 + 400 = 1000$. Moyenne : $1000 / 4 = 250\\text{m}$.'
    },
    {
        quiz: { q: 'Un artiste vend 4 tableaux à ces prix : 10€ ; 20€ ; 30€ ; 40€. Quel est le prix moyen d\'un tableau ?', a: '25' },
        options: '25 ¤ 25,5 ¤ 20 ¤ 15',
        explanation: 'Somme : $10 + 20 + 30 + 40 = 100$. Moyenne : $100 / 4 = 25$€.'
    },
    {
        quiz: { q: 'Quatre voitures roulent à ces vitesses : $50 - 60 - 70 - 80 \\text{ km/h}$. Quelle est la vitesse moyenne ?', a: '65' },
        options: '60 ¤ 65 ¤ 70 ¤ 55',
        explanation: 'Somme des vitesses : $50 + 60 + 70 + 80 = 260$. Moyenne : $260 / 4 = 65\\text{ km/h}$.'
    },
    {
        quiz: { q: 'Un élève a obtenu ces notes : $12 - 14 - 16 - 18$. Quelle est sa moyenne ?', a: '15' },
        options: '14 ¤ 15 ¤ 16 ¤ 13',
        explanation: 'Somme des notes : $12 + 14 + 16 + 18 = 60$. Moyenne : $60 / 4 = 15$.'
    },
    {
        quiz: { q: 'Un jardinier plante 4 arbres de hauteurs différentes : $1\\text{m} - 2\\text{m} - 3\\text{m} - 4\\text{m}$. Quelle est la hauteur moyenne ?', a: '2,5' },
        options: '2 ¤ 2,5 ¤ 3 ¤ 1,5',
        explanation: 'Somme : $1 + 2 + 3 + 4 = 10$. Moyenne : $10 / 4 = 2,5\\text{m}$.'
    },
    {
        quiz: { q: 'Quatre chats pèsent : $3\\text{kg} - 4\\text{kg} - 5\\text{kg} - 6\\text{kg}$. Quel est le poids moyen d\'un chat ?', a: '4,5' },
        options: '4 ¤ 4,5 ¤ 5 ¤ 3,5',
        explanation: 'Somme : $3 + 4 + 5 + 6 = 18$. Moyenne : $18 / 4 = 4,5\\text{kg}$.'
    },
    {
        quiz: { q: 'Un joueur de basket marque ces points sur 4 matchs : $10 - 20 - 10 - 20$. Quelle est sa moyenne ?', a: '15' },
        options: '10 ¤ 15 ¤ 20 ¤ 12',
        explanation: 'Somme : $10 + 20 + 10 + 20 = 60$. Moyenne : $60 / 4 = 15$.'
    },
    {
        quiz: { q: 'Quatre températures sont relevées : $10^\\circ\\text{C} - 12^\\circ\\text{C} - 14^\\circ\\text{C} - 16^\\circ\\text{C}$. Quelle est la température moyenne ?', a: '13' },
        options: '12 ¤ 13 ¤ 14 ¤ 15',
        explanation: 'Somme : $10 + 12 + 14 + 16 = 52$. Moyenne : $52 / 4 = 13^\\circ\\text{C}$.'
    },
    {
        quiz: { q: 'Dans une série de 4 nombres : $10 - 20 - 30 - 40$, quelle est la moyenne ?', a: '25' },
        options: '20 ¤ 25 ¤ 30 ¤ 15',
        explanation: 'Somme : $10 + 20 + 30 + 40 = 100$. Moyenne : $100 / 4 = 25$.'
    }
],

    "305312": [
    // --- QUESTIONS AVEC TABLEAUX D'EFFECTIFS (Progression de difficulté) ---
    {
        quiz: { q: 'Calcule la moyenne de ces notes : <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Note</th><th>10</th><th>15</th></tr></thead><tbody><tr><td>Effectif</td><td>2</td><td>3</td></tr></tbody></table></div>', a: '13' },
        options: '12 ¤ 12,5 ¤ 13 ¤ 14',
        explanation: 'On multiplie chaque note par son effectif : $(10 \\times 2) + (15 \\times 3) = 20 + 45 = 65$. L\'effectif total est $2 + 3 = 5$. La moyenne est $65 / 5 = 13$.'
    },
    {
        quiz: { q: 'Quelle est la moyenne de ces températures ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Temp (°C)</th><th>10</th><th>20</th></tr></thead><tbody><tr><td>Effectif</td><td>3</td><td>1</td></tr></tbody></table></div>', a: '12,5' },
        options: '12 ¤ 12,5 ¤ 13 ¤ 15',
        explanation: 'Somme des températures : $(10 \\times 3) + (20 \\times 1) = 30 + 20 = 50$. Effectif total : $3 + 1 = 4$. Moyenne : $50 / 4 = 12,5$.'
    },
    {
        quiz: { q: 'Calcule la moyenne de ces âges : <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Âge</th><th>5</th><th>10</th></tr></thead><tbody><tr><td>Effectif</td><td>4</td><td>4</td></tr></tbody></table></div>', a: '7,5' },
        options: '7 ¤ 7,5 ¤ 8 ¤ 9',
        explanation: 'Somme : $(5 \\times 4) + (10 \\times 4) = 20 + 40 = 60$. Effectif total : $4 + 4 = 8$. Moyenne : $60 / 8 = 7,5$.'
    },
    {
        quiz: { q: 'Quelle est la moyenne de ces prix ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Prix (€)</th><th>2</th><th>4</th><th>6</th></tr></thead><tbody><tr><td>Effectif</td><td>1</td><td>2</td><td>1</td></tr></tbody></table></div>', a: '4' },
        options: '3 ¤ 4 ¤ 5 ¤ 4,5',
        explanation: 'Somme : $(2 \\times 1) + (4 \\ 2) + (6 \\times 1) = 2 + 8 + 6 = 16$. Effectif total : $1 + 2 + 1 = 4$. Moyenne : $16 / 4 = 4$.'
    },
    {
        quiz: { q: 'Dans ce tableau, quelle est la moyenne des points marqués ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead style=\'background:#eee;\'><tr><th>Points</th><th>10</th><th>20</th><th>30</th></tr></thead><tbody><tr><td>Effectif</td><td>2</td><td>2</td><td>1</td></tr></tbody></table></div>', a: '18' },
        options: '15 ¤ 18 ¤ 20 ¤ 22',
        explanation: 'Somme des points : $(10 \\times 2) + (20 \\ 2) + (30 \\times 1) = 20 + 40 + 30 = 90$. Effectif total : $2 + 2 + 1 = 5$. Moyenne : $90 / 5 = 18$.'
    },
    {
        quiz: { q: 'Calcule la moyenne de ces vitesses (en km/h) : <br> <div class=\'table-container\'><table class=\'custom-table\'><thead style=\'background:#eee;\'><tr><th>Vitesse</th><th>50</th><th>100</th></tr></thead><tbody><tr><td>Effectif</td><td>3</td><td>1</td></tr></tbody></table></div>', a: '62,5' },
        options: '60 ¤ 62,5 ¤ 75 ¤ 50',
        explanation: 'Somme : $(50 \\times 3) + (100 \\times 1) = 150 + 100 = 250$. Effectif total : $3 + 1 = 4$. Moyenne : $250 / 4 = 62,5$.'
    },
    {
        quiz: { q: 'Quelle est la moyenne de ces longueurs ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead style=\'background:#eee;\'><tr><th>Longueur (m)</th><th>2</th><th>4</th><th>6</th><th>8</th></tr></thead><tbody><tr><td>Effectif</td><td>1</td><td>1</td><td>1</td><td>1</td></tr></tbody></table></div>', a: '5' },
        options: '4 ¤ 5 ¤ 6 ¤ 7',
        explanation: 'Somme : $2 + 4 + 6 + 8 = 20$. Effectif total : $4$. Moyenne : $20 / 4 = 5$.'
    },
    {
        quiz: { q: 'Dans ce tableau, quelle est la moyenne des notes ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead style=\'background:#eee;\'><tr><th>Note</th><th>10</th><th>12</th></tr></thead><tbody><tr><td>Effectif</td><td>8</td><td>2</td></tr></tbody></table></div>', a: '10,4'},
        options: '10 ¤ 10,4 ¤ 11,4 ¤ 82,4',
        explanation: 'Somme : $(10 \\times 8) + (12 \\times 2) = 80 + 24 = 104$. Effectif total : $8 + 2 = 10$. Moyenne : $104 / 10 = 10,4$.'
    },
    {
        quiz: { q: 'Calcule la moyenne de ces poids : <br> <div class=\'table-container\'><table class=\'custom-table\'><thead style=\'background:#eee;\'><tr><th>Poids (kg)</th><th>5</th><th>10</th></tr></thead><tbody><tr><td>Effectif</td><td>1</td><td>3</td></tr></tbody></table></div>', a: '8,75'},
        options: '7 ¤ 7,5 ¤ 8,75 ¤ 10',
        explanation: 'Somme : $(5 \\times 1) + (10 \\ 3) = 5 + 30 = 35$. Effectif total : $1 + 3 = 4$. Moyenne : $35 / 4 = 8,75$.'
    },
    {
        quiz: { q: 'Quelle est la moyenne de ces âges ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead style=\'background:#eee;\'><tr><th>Âge</th><th>10</th><th>20</th></tr></thead><tbody><tr><td>Effectif</td><td>1</td><td>3</td></tr></tbody></table></div>', a: '17,5'},
        options: '12 ¤ 15 ¤ 17,5 ¤ 20',
        explanation: 'Somme : $(10 \\times 1) + (20 \\times 3) = 10 + 60 = 70$. Effectif total : $1 + 3 = 4$. Moyenne : $70 / 4 = 17,5$.'
    }
],

    "305321": [
    // --- PARTIE 1 : EFFECTIF IMPAIR (La valeur centrale est directe) ---
    {
        quiz: { q: 'Trouve la médiane de cette série : $12 - 5 - 7 - 10 - 8$', a: '8' },
        options: '10 ¤ 8 ¤ 7 ¤ 5',
        explanation: 'Étape 1 : On range les valeurs par ordre croissant : $5 - 7 - 8 - 10 - 12$. Étape 2 : La valeur au milieu est le 3ème nombre, soit $8$.'
    },
    {
        quiz: { q: 'Quelle est la médiane de cette série   : $15 - 2 - 10 - 15 - 15$', a: '15' },
        options: '10 ¤ 15 ¤ 2 ¤ 12,5', // Le piège est le 10 qui est au milieu visuellement
        explanation: 'Étape 1 : On range les valeurs : $2 - 10 - 15 - 15 - 15$. Étape 2 : La valeur centrale (3ème) est $15$.'
    },
    {
        quiz: { q: 'Trouve la médiane de cette série : $20 - 18 - 22 - 19 - 21$', a: '20' },
        options: '18 ¤ 20 ¤ 22 ¤ 19',
        explanation: 'Étape 1 : On range les valeurs : $18 - 19 - 20 - 21 - 22$. Étape 2 : La valeur centrale est $20$.'
    },
    {
        quiz: { q: 'Quelle est la médiane de cette série  : $3 - 1 - 8 - 1 - 5$', a: '3' },
        options: '8 ¤ 1 ¤ 3 ¤ 5', // Le piège est le 8 qui est au milieu visuellement
        explanation: 'Étape 1 : On range les valeurs : $1 - 1 - 3 - 5 - 8$. Étape 2 : La valeur centrale est $3$.'
    },
    {
        quiz: { q: 'Trouve la médiane de cette série : $40 - 30 - 10 - 20 - 50$', a: '30' },
        options: '20 ¤ 30 ¤ 40 ¤ 10',
        explanation: 'Étape 1 : On range les valeurs : $10 - 20 - 30 - 40 - 50$. Étape 2 : La valeur centrale est $30$.'
    },

    // --- PARTIE 2 : EFFECTIF PAIR (Calcul de la demi-somme) ---
    {
        quiz: { q: 'Quelle est la médiane de cette série ? $10 - 12 - 14 - 16$', a: '13' },
        options: '12 ¤ 14 ¤ 13 ¤ 15',
        explanation: 'Étape 1 : La liste est déjà rangée. Étape 2 : L\'effectif est pair (4). On prend les deux valeurs du milieu ($12$ et $14$) et on fait la moyenne : $(12 + 14) / 2 = 13$.'
    },
    {
        quiz: { q: 'Trouve la médiane de cette série  : $5 - 20 - 10 - 5$', a: '7,5' },
        options: '10 ¤ 7,5 ¤ 15 ¤ 5', // Le piège est le 10 qui est au milieu visuellement
        explanation: 'Étape 1 : On range les valeurs : $5 - 5 - 10 - 20$. Étape 2 : L\'effectif est pair (4). Les deux valeurs centrales sont $5$ et $10$. La médiane est $(5 + 10) / 2 = 7,5$.'
    },
    {
        quiz: { q: 'Quelle est la médiane de cette série ? $2 - 8 - 4 - 6$', a: '5' },
        options: '4 ¤ 5 ¤ 6 ¤ 7',
        explanation: 'Étape 1 : On range les valeurs : $2 - 4 - 6 - 8$. Étape 2 : L\'effectif est pair (4). Les deux valeurs centrales sont $4$ et $6$. La médiane est $(4 + 6) / 2 = 5$.'
    },
    {
        quiz: { q: 'Trouve la médiane de cette série : $100 - 20 - 80 - 40$', a: '60' },
        options: '20 ¤ 60 ¤ 80 ¤ 50', // Le piège est le 20 qui est au milieu visuellement
        explanation: 'Étape 1 : On range les valeurs : $20 - 40 - 80 - 100$. Étape 2 : L\'effectif est pair (4). Les deux valeurs centrales sont $40$ et $80$. La médiane est $(40 + 80) / 2 = 60$.'
    },
    {
        quiz: { q: 'Quelle est la médiane de cette série ? $1 - 3 - 5 - 7 - 9 - 11$', a: '6' },
        options: '5 ¤ 6 ¤ 7 ¤ 8',
        explanation: 'Étape 1 : La liste est déjà rangée. Étape 2 : L\'effectif est pair (6). Les deux valeurs centrales sont la 3ème ($5$) et la 4ème ($7$). La médiane est $(5 + 7) / 2 = 6$.'
    }
],

    "305322": [
    // --- CAS IMPAIR (La médiane est une valeur de la liste, mais pas celle du milieu visuel) ---
    {
        quiz: { q: 'Trouve la médiane de ce tableau : <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Valeur</th><th>10</th><th>12</th><th>14</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>3</td><td>1</td><td>7</td></tr></tbody></table></div>', a: '14' },
        options: '10 ¤ 12 ¤ 14 ¤ 11',
        explanation: 'L\'effectif total est $3 + 1 + 7 = 11$ (impair). La médiane est la 11/2=5,5 => 6ème valeur. En comptant : les trois premiers sont des 10, le quatrième est donc 12. Les suivant sont tous des 14, donc la médiane est 14.'
    },
    {
        quiz: { q: 'Quelle est la médiane de ce tableau ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Valeur</th><th>4</th><th>8</th><th>10</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>5</td><td>2</td><td>2</td></tr></tbody></table></div>', a: '4' },
        options: '5 ¤ 8 ¤ 10 ¤ 7',
        explanation: 'L\'effectif total est $5 + 2 + 2 = 9$ (impair). La médiane est la 9/2=4,5 => 5ème valeur. Les 5 premières valeurs sont des 4, donc la médiane est un 4.'
    },
    {
        quiz: { q: 'Trouve la médiane de ce tableau : <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Valeur</th><th>10</th><th>20</th><th>30</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>3</td><td>1</td><td>5</td></tr></tbody></table></div>', a: '30' },
        options: '10 ¤ 20 ¤ 30 ¤ 15',
        explanation: 'L\'effectif total est $3 + 1 + 5 = 9$ (impair). La médiane est la 9/2=4,5 => 5ème valeur. Les trois premiers sont des 10, le quatrième est 20. Donc la 5ème valeur sera un 30.'
    },
    {
        quiz: { q: 'Quelle est la médiane de ce tableau ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Valeur</th><th>1</th><th>2</th><th>3</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>3</td><td>3</td><td>3</td></tr></tbody></table></div>', a: '2' },
        options: '1 ¤ 2 ¤ 3 ¤ 2,5',
        explanation: 'L\'effectif total est $3 + 3 + 3 = 9$ (impair). La médiane est la 5ème valeur. Les trois premiers sont des 1, les deux suivants sont des 2. La médiane est donc 2.'
    },
    {
        quiz: { q: 'Trouve la médiane de ce tableau : <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Valeur</th><th>10</th><th>20</th><th>30</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>15</td><td>5</td><td>5</td></tr></tbody></table></div>', a: '10' },
        options: '10 ¤ 20 ¤ 30 ¤ 15',
        explanation: 'L\'effectif total est $15 + 5 + 5 = 25$ (impair). La médiane est la 25/2=12,5 => 13ème valeur. Les quinze premières valeurs sont des 10, donc la médiane sera un 10.'
    },

    // --- PARTIE 2 : CAS PAIR (Calcul de la demi-somme avec logique d'effectif total pair) ---
    {
        quiz: { q: 'Quelle est la médiane de ce tableau ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead style=\'background:#eee;\'><tr><th>Valeur</th><th>10</th><th>20</th><th>30</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>5</td><td>4</td><td>3</td></tr></tbody></table></div>', a: '15' },
        options: '15 ¤ 20 ¤ 16 ¤ 10',
        explanation: 'L\'effectif total est $5 + 4 + 3 = 12$ (pair). Les deux valeurs centrales sont la 6ème et la 7ème. En comptant : les 6 premiers sont des 10, le 7ème est un 20. La médiane est $(10 + 20) / 2 = 15$. La médiane est 15.'
    },
    {
        quiz: { q: 'Trouve la médiane de ce tableau : <br> <div class=\'table-container\'><table class=\'custom-table\'><thead style=\'background:#eee;\'><tr><th>Valeur</th><th>5</th><th>10</th><th>15</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>2</td><td>6</td><td>8</td></tr></tbody></table></div>', a: '12,5' },
        options: '7 ¤ 10 ¤ 12 ¤ 15',
        explanation: 'L\'effectif total est $2 + 6 + 8 = 16$ (pair). Les deux valeurs centrales sont la 8ème et la 9ème. Jusqu\'à la 2ème valeur ce sont des 5, de la 3ème à la 8ème sont des 10, donc la 8ème valeur est un 10, la 9ème est un 15. Donc la médiane est $(10 + 15) / 2 = 12,5$.'
    },
    {
        quiz: { q: 'Quelle est la médiane de ce tableau ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead style=\'background:#eee;\'><tr><th>Valeur</th><th>12</th><th>18</th><th>25</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>5</td><td>1</td><td>8</td></tr></tbody></table></div>', a: '25' },
        options: '25 ¤ 18 ¤ 20 ¤ 21,5',
        explanation: 'L\'effectif total est $5 + 1 + 8 = 16$ (pair). Les deux valeurs centrales sont la 16/2=8ème et la 9ème. La 8ème est un 25 et la 9ème est aussi un 25. La médiane est $(25+25) / 2 = 25$.'
    },
    {
        quiz: { q: 'Trouve la médiane de ce tableau : <br> <div class=\'table-container\'><table class=\'custom-table\'><thead style=\'background:#eee;\'><tr><th>Valeur</th><th>2</th><th>5</th><th>8</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>7</td><td>1</td><td>6</td></tr></tbody></table></div>', a: '3,5' },
        options: '2 ¤ 3,5 ¤ 5 ¤ 7,5',
        explanation: 'L\'effectif total est $7 + 1 + 6 = 14$ (pair). Les deux valeurs centrales sont la 14/2=7ème et la 8ème. La 7ème est un 2 et la 8ème est aussi un 5. La médiane est $(5 + 2) / 2 = 3,5$.'
    },
    {
        quiz: { q: 'Quelle est la médiane de ce tableau ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead style=\'background:#eee;\'><tr><th>Valeur</th><th>10</th><th>15</th><th>30</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>4</td><td>2</td><td>4</td></tr></tbody></table></div>', a: '20' },
        options: '15 ¤ 20 ¤ 30 ¤ 10',
        explanation: 'L\'effectif total est $4 + 0 + 4 = 8$ (pair). Les deux valeurs centrales sont la 4ème et la 5ème. La 4ème est un 10 et la 5ème est un 30. En effet il n\'y a pas de valeur 15 dans la liste! La médiane est $(10 + 30) / 2 = 20$.'
    }
],

    "305411": [
    // --- PARTIE 1 : LISTES DE VALEURS DÉSORDONNÉES (Piège du milieu visuel) ---
    {
        quiz: { q: 'Quelle est l\'étendue de cette série ? <br> $12 - 5 - 18 - 7 - 10$', a: '13' },
        options: '5 ¤ 13 ¤ 18 ¤ 11',
        explanation: 'Il faut trouver la plus grande valeur (18) et la plus petite (5). L\'étendue est $18 - 5 = 13$.'
    },
    {
        quiz: { q: 'Calcule l\'étendue de ces températures : <br> 22°C - 15°C - 28°C - 10°C$', a: '18' },
        options: '13 ¤ 15 ¤ 18 ¤ 28',
        explanation: 'La valeur maximale est $28$ et la minimale est $10$. L\'étendue est $28 - 10 = 18$°C.'
    },
    {
        quiz: { q: 'Quelle est l\'étendue de cette série ? <br> $5 - 10 - 2 - 15$', a: '13' },
        options: '5 ¤ 8 ¤ 13 ¤ 15',
        explanation: 'Le maximum est $15$ et le minimum est $2$. L\'étendue est donc $15 - 2 = 13$.'
    },
    {
        quiz: { q: 'Trouve l\'étendue de ces notes : <br> $14 - 08 - 19 - 11$', a: '11' },
        options: '6 ¤ 11 ¤ 14 ¤ 19',
        explanation: 'Le maximum est $19$ et le minimum est $8$. L\'étendue est $19 - 8 = 11$ points sur 20.'
    },
    {
        quiz: { q: 'Quelle est l\'étendue de cette série ? <br> $30 - 10 - 50 - 20$', a: '40' },
        options: '20 ¤ 30 ¤ 40 ¤ 50',
        explanation: 'Le maximum est $50$ et le minimum est $10$. L\'étendue est $50 - 10 = 40$.'
    },

    // --- PARTIE 2 : TABLEAUX D'EFFECTIFS (Valeurs rangées) ---
    {
        quiz: { q: 'Calcule l\'étendue de ce tableau : <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Valeur</th><th>10</th><th>20</th><th>30</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>2</td><td>5</td><td>3</td></tr></tbody></table></div>', a: '20' },
        options: '10 ¤ 20 ¤ 30 ¤ 15',
        explanation: 'La plus grande valeur est $30$ et la plus petite est $10$. L\'étendue est $30 - 10 = 20$.'
    },
    {
        quiz: { q: 'Quelle est l\'étendue de cette série de mesures ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Mesure</th><th>5</th><th>15</th><th>25</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>4</td><td>2</td><td>4</td></tr></tbody></table></div>', a: '20' },
        options: '10 ¤ 15 ¤ 20 ¤ 25',
        explanation: 'La valeur max est $25$ et la min est $5$. L\'étendue est $25 - 5 = 20$.'
    },
    {
        quiz: { q: 'Trouve l\'étendue de ce tableau d\'âges : <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Âge</th><th>12</th><th>13</th><th>14</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>5</td><td>2</td><td>5</td></tr></tbody></table></div>', a: '2' },
        options: '1 ¤ 2 ¤ 3 ¤ 14',
        explanation: 'La valeur max est $14$ et la min est $12$. L\'étendue est $14 - 12 = 2$ ans.'
    },
    {
        quiz: { q: 'Quelle est l\'étendue de ces prix ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead style=\'background:#eee;\'><tr><th>Prix (€)</th><th>1</th><th>5</th><th>10</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>3</td><td>2</td><td>1</td></tr></tbody></table></div>', a: '9' },
        options: '4 ¤ 7 ¤ 9 ¤ 10',
        explanation: 'La valeur max est $10$ et la min est $1$. L\'étendue est $10 - 1 = 9$ €.'
    },
    {
        quiz: { q: 'Calcule l\'étendue de ce tableau : <br> <div class=\'table-container\'><table class=\'custom-table\'><thead style=\'background:#eee;\'><tr><th>Valeur</th><th>100</th><th>200</th><th>300</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>1</td><td>4</td><td>1</td></tr></tbody></table></div>', a: '200' },
        options: '100 ¤ 200 ¤ 300 ¤ 150',
        explanation: 'La valeur max est $300$ et la min est $100$. L\'étendue est $300 - 100 = 200$.'
    }
]
};
