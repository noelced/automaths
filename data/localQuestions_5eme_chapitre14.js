// ============================================================
// data/localQuestions_5eme_chapitre14.js — 5ème, chapitre 14 : Proportionnalité
// ============================================================
// Généré à partir de l'ancien data/localQuestions5eme.js.
// Clés renumérotées au format 6 chiffres : [niveau][chapitre 2 chiffres]
// [n° partie H2][n° sous-partie H3][n° questionnaire dans la sous-partie].
// Contenu des questions strictement inchangé, seule la clé a changé —
// voir le rapport de correspondance mapping_5eme.csv pour
// retrouver l'ancienne clé de chaque questionnaire.
// ============================================================

const localQuestions_5eme_chapitre14 = {
    "514101": [
            {
                quiz: { q: 'Le prix à payer pour des baguettes de pain est-il proportionnel au nombre de baguettes achetées ?', a: 'Oui' },
                options: 'Oui ¤ Non ¤ On ne peut pas savoir ¤ Cela dépend du jour',
                explanation: 'Chaque baguette a le <strong>même prix</strong> : le prix total s\'obtient en multipliant toujours par le même nombre (le prix d\'une baguette). C\'est donc une situation de <strong>proportionnalité</strong>.'
            },
            {
                quiz: { q: 'L\'âge d\'une personne et sa taille sont-ils proportionnels ?', a: 'Non' },
                options: 'Oui ¤ Non ¤ On ne peut pas savoir ¤ Cela dépend de la personne',
                explanation: 'On ne passe pas de l\'âge à la taille en multipliant toujours par le même nombre (une personne de $20$ ans n\'est pas deux fois plus grande qu\'une personne de $10$ ans) : ce n\'est <strong>pas proportionnel</strong>.'
            },
            {
                quiz: { q: 'Voici un tableau. Est-ce un tableau de proportionnalité ? <div class="table-container" style="margin:10px 0;"><table class="custom-table"><tbody><tr><th>Masse (kg)</th><td>2</td><td>4</td><td>6</td></tr><tr><th>Prix (€)</th><td>3</td><td>6</td><td>9</td></tr></tbody></table></div>', a: 'Oui' },
                options: 'Oui ¤ Non ¤ Impossible à dire ¤ Seulement pour la première colonne',
                explanation: 'On vérifie les quotients : $3 \\div 2 = 1,5$ ; $6 \\div 4 = 1,5$ ; $9 \\div 6 = 1,5$. Tous les quotients sont <strong>égaux</strong> : c\'est bien un tableau de proportionnalité, de coefficient $1,5$.'
            },
            {
                quiz: { q: 'Voici un tableau. Est-ce un tableau de proportionnalité ? <div class="table-container" style="margin:10px 0;"><table class="custom-table"><tbody><tr><th>Côté (cm)</th><td>2</td><td>3</td><td>4</td></tr><tr><th>Aire (cm²)</th><td>4</td><td>9</td><td>16</td></tr></tbody></table></div>', a: 'Non' },
                options: 'Oui ¤ Non ¤ Impossible à dire ¤ Seulement pour la première colonne',
                explanation: 'On vérifie les quotients : $4 \\div 2 = 2$ mais $9 \\div 3 = 3$. Les quotients ne sont <strong>pas égaux</strong> : ce n\'est pas un tableau de proportionnalité (l\'aire d\'un carré n\'est pas proportionnelle à son côté).'
            },
            {
                quiz: { q: 'Le périmètre d\'un carré est-il proportionnel à la longueur de son côté ?', a: 'Oui' },
                options: 'Oui ¤ Non ¤ Cela dépend du carré ¤ Impossible à dire',
                explanation: 'Le périmètre d\'un carré de côté $c$ vaut $4 \\times c$ : on multiplie toujours le côté par le même nombre $4$. C\'est donc une situation de <strong>proportionnalité</strong>.'
            },
            {
                quiz: { q: 'Pour vérifier qu\'un tableau à deux lignes est un tableau de proportionnalité, que doit-on faire ?', a: 'Calculer le quotient de chaque colonne dans le même sens, et vérifier qu\'ils sont tous égaux' },
                options: 'Additionner tous les nombres du tableau ¤ Calculer le quotient de chaque colonne dans le même sens, et vérifier qu\'ils sont tous égaux ¤ Vérifier que tous les nombres sont entiers ¤ Comparer uniquement la première colonne',
                explanation: 'On calcule le quotient (par exemple « nombre du bas $\\div$ nombre du haut ») pour chaque colonne, toujours <strong>dans le même sens</strong> : si tous ces quotients sont égaux, le tableau est un tableau de proportionnalité.'
            },
            {
                quiz: { q: 'Voici un tableau. Est-ce un tableau de proportionnalité ? <div class="table-container" style="margin:10px 0;"><table class="custom-table"><tbody><tr><th>Masse (kg)</th><td>2</td><td>4</td><td>6</td></tr><tr><th>Prix (€)</th><td>4</td><td>8</td><td>11</td></tr></tbody></table></div>', a: 'Non' },
                options: 'Oui ¤ Non ¤ On ne peut pas savoir ¤ Cela dépend de l\'article',
                explanation: 'On calcule les quotients : $4 \\div 2 = 2$ ; $8 \\div 4 = 2$ ; mais $11 \\div 6 \\approx 1,83$. Le dernier quotient est <strong>différent</strong> des deux premiers : ce n\'est pas un tableau de proportionnalité.'
            },
            {
                quiz: { q: 'Le diamètre d\'un cercle et sa longueur (son périmètre) sont-ils proportionnels ?', a: 'Oui' },
                options: 'Oui ¤ Non ¤ Cela dépend du cercle ¤ Impossible à dire',
                explanation: 'La longueur d\'un cercle s\'obtient en multipliant son diamètre par le nombre $\\pi$ (toujours le même nombre) : c\'est une situation de <strong>proportionnalité</strong>, de coefficient $\\pi$.'
            },
            {
                quiz: { q: 'Si on divise « masse ÷ prix » pour certaines colonnes d\'un tableau et « prix ÷ masse » pour d\'autres, peut-on conclure correctement si le tableau est proportionnel ?', a: 'Non, il faut toujours diviser dans le même sens' },
                options: 'Oui, cela ne change rien ¤ Non, il faut toujours diviser dans le même sens ¤ Oui, à condition d\'arrondir ¤ Non, il ne faut jamais diviser',
                explanation: 'Mélanger le sens du quotient peut donner des résultats incohérents. Il faut <strong>toujours diviser dans le même sens</strong> (par exemple toujours « prix $\\div$ masse ») pour comparer correctement les colonnes entre elles.'
            },
            {
                quiz: { q: 'Un menu au restaurant coûte le même prix quel que soit le nombre de plats choisis dans la formule (prix fixe de 15 €). Le prix payé est-il proportionnel au nombre de plats ?', a: 'Non' },
                options: 'Oui ¤ Non ¤ Cela dépend du restaurant ¤ On ne peut pas savoir',
                explanation: 'Le prix reste <strong>fixe</strong> (toujours $15$ €), il ne s\'obtient pas en multipliant le nombre de plats par un nombre constant : ce n\'est <strong>pas une situation de proportionnalité</strong>.'
            }
        ],

    "514211": [
            {
                quiz: { q: '3 cahiers coûtent 9 €. Quel est le coefficient de proportionnalité permettant de passer du nombre de cahiers au prix ?', a: '3' },
                options: '3 ¤ 6 ¤ 9 ¤ 12',
                explanation: 'Le coefficient de proportionnalité s\'obtient en divisant le prix par le nombre de cahiers : $9 \\div 3 = 3$. Un cahier coûte $3$ €.'
            },
            {
                quiz: { q: '5 tickets de bus coûtent 7,50 €. Combien coûtent 8 tickets, en utilisant le coefficient de proportionnalité ?', a: '12 €' },
                options: '10 € ¤ 12 € ¤ 15 € ¤ 8 €',
                explanation: 'Coefficient : $7,50 \\div 5 = 1,5$. Prix de $8$ tickets : $8 \\times 1,5 = 12$ €.'
            },
            {
                quiz: { q: '4 kg de pommes coûtent 6 €. Quel est le coefficient de proportionnalité qui permet de passer de la masse au prix ?', a: '1,5' },
                options: '1,5 ¤ 2 ¤ 2,5 ¤ 4',
                explanation: 'Coefficient $= 6 \\div 4 = 1,5$ : chaque kg de pommes coûte $1,5$ €.'
            },
            {
                quiz: { q: '6 places de cinéma coûtent 48 €. Quel est le coefficient de proportionnalité (prix d\'une place) ?', a: '8' },
                options: '6 ¤ 7 ¤ 8 ¤ 9',
                explanation: 'Coefficient $= 48 \\div 6 = 8$ : une place coûte $8$ €.'
            },
            {
                quiz: { q: 'Avec un coefficient de proportionnalité de $8$ € par place, combien coûtent $11$ places ?', a: '88 €' },
                options: '80 € ¤ 84 € ¤ 88 € ¤ 96 €',
                explanation: 'Prix de $11$ places $= 11 \\times 8 = 88$ €.'
            },
            {
                quiz: { q: 'Pour calculer un coefficient de proportionnalité entre deux grandeurs A et B (où B = k × A), quelle opération doit-on effectuer ?', a: 'Diviser une valeur de B par la valeur de A correspondante' },
                options: 'Additionner A et B ¤ Diviser une valeur de B par la valeur de A correspondante ¤ Multiplier A par B ¤ Soustraire A de B',
                explanation: 'Puisque $B = k \\times A$, on retrouve $k$ en calculant $B \\div A$ pour une ligne du tableau.'
            },
            {
                quiz: { q: '1 kg de tomates coûte 2,80 €. Quel est le prix de 3 kg de tomates ?', a: '8,40 €' },
                options: '7,80 € ¤ 8,20 € ¤ 8,40 € ¤ 9 €',
                explanation: 'Le coefficient de proportionnalité est $2,80$ (prix d\'1 kg). Prix de $3$ kg $= 3 \\times 2,80 = 8,40$ €.'
            },
            {
                quiz: { q: 'Avec le même prix de 2,80 € le kilogramme, quel est le prix de 4,3 kg de tomates ?', a: '12,04 €' },
                options: '11,20 € ¤ 12,04 € ¤ 12,40 € ¤ 13 €',
                explanation: 'Prix de $4,3$ kg $= 4,3 \\times 2,80 = 12,04$ €. Le coefficient de proportionnalité fonctionne avec n\'importe quelle quantité, même non entière.'
            },
            {
                quiz: { q: 'Une voiture roule à vitesse constante et parcourt 150 km en 2 h. Quel est le coefficient de proportionnalité, c\'est-à-dire sa vitesse moyenne (en km/h) ?', a: '75' },
                options: '65 ¤ 70 ¤ 75 ¤ 80',
                explanation: 'Vitesse $= 150 \\div 2 = 75$ km/h : c\'est le coefficient de proportionnalité entre la distance parcourue et le temps.'
            },
            {
                quiz: { q: 'Voici un tableau de proportionnalité. <div class="table-container" style="margin:10px 0;"><table class="custom-table"><tbody><tr><th>Billets</th><td>4</td><td>9</td></tr><tr><th>Prix (€)</th><td>20</td><td>?</td></tr></tbody></table></div> Quel est le prix de 9 billets ?', a: '45 €' },
                options: '40 € ¤ 42 € ¤ 45 € ¤ 50 €',
                explanation: 'Coefficient $= 20 \\div 4 = 5$ (prix d\'un billet). Prix de $9$ billets $= 9 \\times 5 = 45$ €.'
            },
            {
                quiz: { q: 'Voici un tableau de proportionnalité. <div class="table-container" style="margin:10px 0;"><table class="custom-table"><tbody><tr><th>Paquets de bonbons</th><td>2</td><td>6</td></tr><tr><th>Prix (€)</th><td>3</td><td>?</td></tr></tbody></table></div> Quel est le prix de 6 paquets ?', a: '9 €' },
                options: '6 € ¤ 8 € ¤ 9 € ¤ 12 €',
                explanation: 'Coefficient $= 3 \\div 2 = 1,5$ (prix d\'un paquet). Prix de $6$ paquets $= 6 \\times 1,5 = 9$ €.'
            },
            {
                quiz: { q: 'Voici un tableau de proportionnalité. <div class="table-container" style="margin:10px 0;"><table class="custom-table"><tbody><tr><th>Mètres de tissu</th><td>2</td><td>5</td></tr><tr><th>Prix (€)</th><td>7</td><td>17,5</td></tr></tbody></table></div> Quel est le coefficient de proportionnalité (prix d\'1 mètre) ?', a: '3,5' },
                options: '2,5 ¤ 3 ¤ 3,5 ¤ 4',
                explanation: 'Coefficient $= 7 \\div 2 = 3,5$. On vérifie avec l\'autre colonne : $5 \\times 3,5 = 17,5$. ✓'
            },
            {
                quiz: { q: 'Voici un tableau de proportionnalité. <div class="table-container" style="margin:10px 0;"><table class="custom-table"><tbody><tr><th>Litres d\'eau</th><td>4</td><td>9</td></tr><tr><th>Prix (€)</th><td>3</td><td>?</td></tr></tbody></table></div> Quel est le prix de 9 litres ?', a: '6,75 €' },
                options: '5,75 € ¤ 6,25 € ¤ 6,75 € ¤ 7 €',
                explanation: 'Coefficient $= 3 \\div 4 = 0,75$ (prix d\'un litre). Prix de $9$ litres $= 9 \\times 0,75 = 6,75$ €.'
            }
        ],

    "514221": [
            {
                quiz: { q: 'La méthode du "retour à l\'unité" consiste à calculer d\'abord...', a: 'la valeur correspondant à 1 unité de la première grandeur' },
                options: 'la valeur correspondant à 1 unité de la première grandeur ¤ la somme de toutes les valeurs ¤ la moyenne des valeurs ¤ le double de la première valeur',
                explanation: 'On calcule la valeur « pour $1$ » (par exemple le prix d\'un seul objet), puis on multiplie par le nombre voulu.'
            },
            {
                quiz: { q: '5 croissants coûtent 6 €. Par le retour à l\'unité, combien coûte 1 croissant ?', a: '1,20 €' },
                options: '1 € ¤ 1,20 € ¤ 1,50 € ¤ 6 €',
                explanation: 'Prix d\'un croissant $= 6 \\div 5 = 1,20$ €.'
            },
            {
                quiz: { q: 'Avec un croissant à 1,20 €, combien coûtent 9 croissants ?', a: '10,80 €' },
                options: '9,60 € ¤ 10,20 € ¤ 10,80 € ¤ 12 €',
                explanation: 'Prix de $9$ croissants $= 9 \\times 1,20 = 10,80$ €.'
            },
            {
                quiz: { q: 'Une recette pour 6 personnes utilise 180 g de chocolat. Quelle quantité de chocolat pour 1 personne ?', a: '30 g' },
                options: '20 g ¤ 30 g ¤ 36 g ¤ 40 g',
                explanation: 'Quantité pour $1$ personne $= 180 \\div 6 = 30$ g.'
            },
            {
                quiz: { q: 'Avec 30 g de chocolat par personne, quelle quantité faut-il pour 5 personnes ?', a: '150 g' },
                options: '120 g ¤ 150 g ¤ 160 g ¤ 180 g',
                explanation: 'Quantité pour $5$ personnes $= 5 \\times 30 = 150$ g.'
            },
            {
                quiz: { q: '8 billets de train coûtent 96 €. Par le retour à l\'unité, quel est le prix d\'un billet ?', a: '12 €' },
                options: '10 € ¤ 11 € ¤ 12 € ¤ 14 €',
                explanation: 'Prix d\'un billet $= 96 \\div 8 = 12$ €.'
            },
            {
                quiz: { q: 'Avec un billet à 12 €, combien coûtent 13 billets ?', a: '156 €' },
                options: '144 € ¤ 150 € ¤ 156 € ¤ 160 €',
                explanation: 'Prix de $13$ billets $= 13 \\times 12 = 156$ €.'
            },
            {
                quiz: { q: '3 litres d\'essence coûtent 5,25 €. Quel est le prix d\'un litre ?', a: '1,75 €' },
                options: '1,50 € ¤ 1,75 € ¤ 2 € ¤ 2,25 €',
                explanation: 'Prix d\'un litre $= 5,25 \\div 3 = 1,75$ €.'
            },
            {
                quiz: { q: 'Avec un litre à 1,75 €, combien coûtent 12 litres d\'essence ?', a: '21 €' },
                options: '18 € ¤ 19,50 € ¤ 21 € ¤ 24 €',
                explanation: 'Prix de $12$ litres $= 12 \\times 1,75 = 21$ €.'
            },
            {
                quiz: { q: 'Quel est l\'intérêt principal de la méthode du retour à l\'unité ?', a: 'Elle permet ensuite de calculer facilement n\'importe quelle quantité' },
                options: 'Elle évite tout calcul ¤ Elle permet ensuite de calculer facilement n\'importe quelle quantité ¤ Elle ne fonctionne que pour les petits nombres ¤ Elle remplace le tableau de proportionnalité',
                explanation: 'Une fois la valeur « pour $1$ » connue, il suffit de la multiplier par n\'importe quel nombre pour trouver la valeur correspondante, quelle que soit la quantité demandée.'
            },
            {
                quiz: { q: 'Une recette pour 4 personnes utilise 300 g de farine (soit 75 g pour 1 personne). <div class="table-container" style="margin:10px 0;"><table class="custom-table"><tbody><tr><th>Personnes</th><td>4</td><td>1</td><td>2</td></tr><tr><th>Farine (g)</th><td>300</td><td>75</td><td>?</td></tr></tbody></table></div> Quelle quantité de farine pour 2 personnes ?', a: '150 g' },
                options: '100 g ¤ 125 g ¤ 150 g ¤ 200 g',
                explanation: 'On multiplie la quantité pour $1$ personne par $2$ : $75 \\times 2 = 150$ g.'
            },
            {
                quiz: { q: 'Avec la même recette (75 g de farine par personne), quelle quantité pour 8 personnes ? <div class="table-container" style="margin:10px 0;"><table class="custom-table"><tbody><tr><th>Personnes</th><td>1</td><td>8</td></tr><tr><th>Farine (g)</th><td>75</td><td>?</td></tr></tbody></table></div>', a: '600 g' },
                options: '525 g ¤ 560 g ¤ 600 g ¤ 640 g',
                explanation: 'Quantité pour $8$ personnes $= 8 \\times 75 = 600$ g.'
            }
        ],

    "514231": [
            {
                quiz: { q: 'Une recette pour 8 personnes utilise 400 g de riz. Par linéarité multiplicative, quelle quantité pour 4 personnes (moitié de 8) ? <div class="table-container" style="margin:10px 0;"><table class="custom-table"><tbody><tr><th>Personnes</th><td>8</td><td>4</td></tr><tr><th>Riz (g)</th><td>400</td><td>?</td></tr></tbody></table></div>', a: '200 g' },
                options: '150 g ¤ 200 g ¤ 250 g ¤ 300 g',
                explanation: '<p style="text-align:center; color:#2563eb; font-weight:bold; margin:6px 0;">8 ⟶ 4 &nbsp;(on divise par 2)</p><div class="table-container" style="margin:6px 0;"><table class="custom-table"><tbody><tr><th>Personnes</th><td>8</td><td>4</td></tr><tr><th>Riz (g)</th><td>400</td><td>200</td></tr></tbody></table></div><p style="text-align:center; color:#2563eb; font-weight:bold; margin:6px 0;">400 ⟶ 200 &nbsp;(on divise par 2)</p><p>$4$ personnes, c\'est la <strong>moitié</strong> de $8$ personnes : on prend donc la moitié de la quantité de riz, $400 \\div 2 = 200$ g.</p>'
            },
            {
                quiz: { q: 'Avec 200 g de riz pour 4 personnes et 400 g pour 8 personnes, quelle quantité pour 12 personnes (4 + 8) par linéarité additive ? <div class="table-container" style="margin:10px 0;"><table class="custom-table"><tbody><tr><th>Personnes</th><td>4</td><td>8</td><td>12</td></tr><tr><th>Riz (g)</th><td>200</td><td>400</td><td>?</td></tr></tbody></table></div>', a: '600 g' },
                options: '500 g ¤ 550 g ¤ 600 g ¤ 800 g',
                explanation: '<p style="text-align:center; color:#7c3aed; font-weight:bold; margin:6px 0;">4 + 8 ⟶ 12</p><div class="table-container" style="margin:6px 0;"><table class="custom-table"><tbody><tr><th>Personnes</th><td>4</td><td>8</td><td>12</td></tr><tr><th>Riz (g)</th><td>200</td><td>400</td><td>600</td></tr></tbody></table></div><p style="text-align:center; color:#7c3aed; font-weight:bold; margin:6px 0;">200 + 400 ⟶ 600</p><p>$12 = 4 + 8$ : par linéarité additive, on additionne les quantités correspondantes, $200 + 400 = 600$ g.</p>'
            },
            {
                quiz: { q: 'La linéarité multiplicative consiste à...', a: 'multiplier ou diviser les deux grandeurs par le même nombre' },
                options: 'ajouter le même nombre aux deux grandeurs ¤ multiplier ou diviser les deux grandeurs par le même nombre ¤ soustraire les deux grandeurs ¤ ne rien faire',
                explanation: 'Si on multiplie (ou divise) la première grandeur par un nombre, alors la seconde grandeur est multipliée (ou divisée) par ce <strong>même nombre</strong>.'
            },
            {
                quiz: { q: 'La linéarité additive consiste à...', a: 'additionner ou soustraire deux lignes du tableau pour en obtenir une nouvelle' },
                options: 'multiplier deux lignes entre elles ¤ additionner ou soustraire deux lignes du tableau pour en obtenir une nouvelle ¤ diviser toutes les valeurs par 2 ¤ ignorer une des deux grandeurs',
                explanation: 'Si on connaît les valeurs correspondant à deux quantités, on peut les additionner (ou les soustraire) pour obtenir la valeur correspondant à la somme (ou la différence) de ces quantités.'
            },
            {
                quiz: { q: '10 stylos coûtent 15 €. Par linéarité multiplicative, combien coûtent 5 stylos (moitié de 10) ? <div class="table-container" style="margin:10px 0;"><table class="custom-table"><tbody><tr><th>Stylos</th><td>10</td><td>5</td></tr><tr><th>Prix (€)</th><td>15</td><td>?</td></tr></tbody></table></div>', a: '7,50 €' },
                options: '6 € ¤ 7 € ¤ 7,50 € ¤ 8 €',
                explanation: '<p style="text-align:center; color:#2563eb; font-weight:bold; margin:6px 0;">10 ⟶ 5 &nbsp;(on divise par 2)</p><div class="table-container" style="margin:6px 0;"><table class="custom-table"><tbody><tr><th>Stylos</th><td>10</td><td>5</td></tr><tr><th>Prix (€)</th><td>15</td><td>7,50</td></tr></tbody></table></div><p style="text-align:center; color:#2563eb; font-weight:bold; margin:6px 0;">15 ⟶ 7,50 &nbsp;(on divise par 2)</p><p>$5$ stylos, c\'est la moitié de $10$ stylos : on prend donc la moitié du prix, $15 \\div 2 = 7,50$ €.</p>'
            },
            {
                quiz: { q: 'Avec 15 € pour 10 stylos et 7,50 € pour 5 stylos, combien coûtent 15 stylos (10 + 5) par linéarité additive ? <div class="table-container" style="margin:10px 0;"><table class="custom-table"><tbody><tr><th>Stylos</th><td>10</td><td>5</td><td>15</td></tr><tr><th>Prix (€)</th><td>15</td><td>7,50</td><td>?</td></tr></tbody></table></div>', a: '22,50 €' },
                options: '20 € ¤ 22,50 € ¤ 25 € ¤ 30 €',
                explanation: '<p style="text-align:center; color:#7c3aed; font-weight:bold; margin:6px 0;">10 + 5 ⟶ 15</p><div class="table-container" style="margin:6px 0;"><table class="custom-table"><tbody><tr><th>Stylos</th><td>10</td><td>5</td><td>15</td></tr><tr><th>Prix (€)</th><td>15</td><td>7,50</td><td>22,50</td></tr></tbody></table></div><p style="text-align:center; color:#7c3aed; font-weight:bold; margin:6px 0;">15 + 7,50 ⟶ 22,50</p><p>$15 = 10 + 5$ : par linéarité additive, on additionne les prix, $15 + 7,50 = 22,50$ €.</p>'
            },
            {
                quiz: { q: 'Une voiture roule à vitesse constante : elle parcourt 60 km en 1 h. Par linéarité multiplicative, quelle distance en 3 h (3 fois plus) ? <div class="table-container" style="margin:10px 0;"><table class="custom-table"><tbody><tr><th>Temps (h)</th><td>1</td><td>3</td></tr><tr><th>Distance (km)</th><td>60</td><td>?</td></tr></tbody></table></div>', a: '180 km' },
                options: '120 km ¤ 150 km ¤ 180 km ¤ 200 km',
                explanation: '<p style="text-align:center; color:#2563eb; font-weight:bold; margin:6px 0;">1 ⟶ 3 &nbsp;(on multiplie par 3)</p><div class="table-container" style="margin:6px 0;"><table class="custom-table"><tbody><tr><th>Temps (h)</th><td>1</td><td>3</td></tr><tr><th>Distance (km)</th><td>60</td><td>180</td></tr></tbody></table></div><p style="text-align:center; color:#2563eb; font-weight:bold; margin:6px 0;">60 ⟶ 180 &nbsp;(on multiplie par 3)</p><p>$3$ h, c\'est $3$ fois $1$ h : on multiplie donc la distance par $3$, $60 \\times 3 = 180$ km.</p>'
            },
            {
                quiz: { q: 'Avec 60 km en 1 h et 180 km en 3 h, quelle distance en 4 h (1 h + 3 h) par linéarité additive ? <div class="table-container" style="margin:10px 0;"><table class="custom-table"><tbody><tr><th>Temps (h)</th><td>1</td><td>3</td><td>4</td></tr><tr><th>Distance (km)</th><td>60</td><td>180</td><td>?</td></tr></tbody></table></div>', a: '240 km' },
                options: '220 km ¤ 230 km ¤ 240 km ¤ 250 km',
                explanation: '<p style="text-align:center; color:#7c3aed; font-weight:bold; margin:6px 0;">1 + 3 ⟶ 4</p><div class="table-container" style="margin:6px 0;"><table class="custom-table"><tbody><tr><th>Temps (h)</th><td>1</td><td>3</td><td>4</td></tr><tr><th>Distance (km)</th><td>60</td><td>180</td><td>240</td></tr></tbody></table></div><p style="text-align:center; color:#7c3aed; font-weight:bold; margin:6px 0;">60 + 180 ⟶ 240</p><p>$4 = 1 + 3$ : par linéarité additive, on additionne les distances, $60 + 180 = 240$ km.</p>'
            },
            {
                quiz: { q: 'Pourquoi peut-on utiliser aussi bien la linéarité que le retour à l\'unité pour un même problème de proportionnalité ?', a: 'Parce que toutes les méthodes correctes donnent le même résultat' },
                options: 'Parce que ce sont deux problèmes différents ¤ Parce que toutes les méthodes correctes donnent le même résultat ¤ Parce que la linéarité est toujours fausse ¤ Parce que le retour à l\'unité est réservé aux grands nombres',
                explanation: 'Dans une situation de proportionnalité, toutes les procédures correctes (coefficient, retour à l\'unité, linéarité, produit en croix) mènent au <strong>même résultat</strong> ; on choisit celle qui est la plus pratique.'
            },
            {
                quiz: { q: '4 places de concert coûtent 100 €. Par linéarité multiplicative, combien coûtent 2 places (moitié de 4) ? <div class="table-container" style="margin:10px 0;"><table class="custom-table"><tbody><tr><th>Places</th><td>4</td><td>2</td></tr><tr><th>Prix (€)</th><td>100</td><td>?</td></tr></tbody></table></div>', a: '50 €' },
                options: '25 € ¤ 40 € ¤ 50 € ¤ 60 €',
                explanation: '<p style="text-align:center; color:#2563eb; font-weight:bold; margin:6px 0;">4 ⟶ 2 &nbsp;(on divise par 2)</p><div class="table-container" style="margin:6px 0;"><table class="custom-table"><tbody><tr><th>Places</th><td>4</td><td>2</td></tr><tr><th>Prix (€)</th><td>100</td><td>50</td></tr></tbody></table></div><p style="text-align:center; color:#2563eb; font-weight:bold; margin:6px 0;">100 ⟶ 50 &nbsp;(on divise par 2)</p><p>$2$ places, c\'est la moitié de $4$ places : $100 \\div 2 = 50$ €.</p>'
            },
            {
                quiz: { q: 'Une recette pour 4 personnes utilise 300 g de farine, et 150 g suffisent pour 2 personnes. Quelle est la valeur manquante ? <div class="table-container" style="margin:10px 0;"><table class="custom-table"><tbody><tr><th>Personnes</th><td>4</td><td>2</td><td>6</td></tr><tr><th>Farine (g)</th><td>300</td><td>150</td><td>?</td></tr></tbody></table></div>', a: '450 g' },
                options: '350 g ¤ 400 g ¤ 450 g ¤ 500 g',
                explanation: '<p style="text-align:center; color:#7c3aed; font-weight:bold; margin:6px 0;">4 + 2 ⟶ 6</p><div class="table-container" style="margin:6px 0;"><table class="custom-table"><tbody><tr><th>Personnes</th><td>4</td><td>2</td><td>6</td></tr><tr><th>Farine (g)</th><td>300</td><td>150</td><td>450</td></tr></tbody></table></div><p style="text-align:center; color:#7c3aed; font-weight:bold; margin:6px 0;">300 + 150 ⟶ 450</p><p>$6 = 4 + 2$ : par linéarité additive, on additionne les quantités pour $4$ et pour $2$ personnes : $300 + 150 = 450$ g.</p>'
            }
        ],

    "514241": [
            {
                quiz: { q: 'Dans la méthode du produit en croix, on multiplie deux nombres situés...', a: 'sur la même diagonale du tableau que le nombre cherché' },
                options: 'dans la même colonne ¤ sur la même diagonale du tableau que le nombre cherché ¤ dans la même ligne ¤ au hasard',
                explanation: 'On multiplie les deux nombres reliés au nombre cherché $x$ « en croix » (sur la diagonale), puis on divise par le nombre restant du tableau.'
            },
            {
                quiz: { q: '6 baguettes coûtent 7,20 €. En utilisant le produit en croix, quel est le prix de 10 baguettes ?', a: '12 €' },
                options: '10 € ¤ 11 € ¤ 12 € ¤ 14 €',
                explanation: '$x = \\dfrac{7,20 \\times 10}{6} = \\dfrac{72}{6} = 12$ €.'
            },
            {
                quiz: { q: 'Une recette pour 5 personnes utilise 250 g de sucre. Par produit en croix, quelle quantité de sucre pour 8 personnes ?', a: '400 g' },
                options: '350 g ¤ 380 g ¤ 400 g ¤ 420 g',
                explanation: '$x = \\dfrac{250 \\times 8}{5} = \\dfrac{2\\,000}{5} = 400$ g.'
            },
            {
                quiz: { q: 'Voici un tableau de proportionnalité incomplet. Quel calcul permet de trouver $x$ par produit en croix ? <div class="table-container" style="margin:10px 0;"><table class="custom-table"><tbody><tr><th>Grandeur A</th><td>4</td><td>10</td></tr><tr><th>Grandeur B</th><td>6</td><td>$x$</td></tr></tbody></table></div>', a: '$x = 6 \\times 10 \\div 4$' },
                options: '$x = 4 \\times 6 \\div 10$ ¤ $x = 6 \\times 10 \\div 4$ ¤ $x = 4 \\times 10 \\div 6$ ¤ $x = 4 + 6 + 10$',
                explanation: 'On multiplie en croix les deux nombres reliés à $x$ (le $6$ et le $10$), puis on divise par le nombre restant (le $4$) : $x = 6 \\times 10 \\div 4$.'
            },
            {
                quiz: { q: 'Un robinet verse 15 L en 3 min à débit constant. Par produit en croix, quel volume en 7 min ?', a: '35 L' },
                options: '30 L ¤ 32 L ¤ 35 L ¤ 40 L',
                explanation: '$x = \\dfrac{15 \\times 7}{3} = \\dfrac{105}{3} = 35$ L.'
            },
            {
                quiz: { q: '9 tickets de manège coûtent 22,50 €. Par produit en croix, quel est le prix de 4 tickets ?', a: '10 €' },
                options: '8 € ¤ 9 € ¤ 10 € ¤ 12 €',
                explanation: '$x = \\dfrac{22,50 \\times 4}{9} = \\dfrac{90}{9} = 10$ €.'
            },
            {
                quiz: { q: 'Dans la méthode du produit en croix, à quoi correspond le signe « ÷ » ?', a: 'à la colonne qui reste dans le tableau' },
                options: 'à la diagonale du tableau ¤ à la colonne qui reste dans le tableau ¤ à la ligne du haut uniquement ¤ à rien de particulier',
                explanation: 'Le signe « $\\times$ » correspond à la diagonale (les deux nombres reliés à $x$), et le signe « $\\div$ » correspond au nombre de la <strong>colonne restante</strong> du tableau.'
            },
            {
                quiz: { q: 'Une voiture parcourt 180 km avec 12 L d\'essence. Par produit en croix, quelle distance peut-elle parcourir avec 20 L (à consommation constante) ?', a: '300 km' },
                options: '260 km ¤ 280 km ¤ 300 km ¤ 320 km',
                explanation: '$x = \\dfrac{180 \\times 20}{12} = \\dfrac{3\\,600}{12} = 300$ km.'
            },
            {
                quiz: { q: '14 œufs pèsent 840 g. Par produit en croix, quel est le poids de 5 œufs (à masse identique par œuf) ?', a: '300 g' },
                options: '280 g ¤ 300 g ¤ 320 g ¤ 350 g',
                explanation: '$x = \\dfrac{840 \\times 5}{14} = \\dfrac{4\\,200}{14} = 300$ g.'
            },
            {
                quiz: { q: 'Quel est l\'avantage du produit en croix par rapport aux autres méthodes ?', a: 'Il fonctionne directement, même quand les nombres ne se divisent pas "joliment" entre eux' },
                options: 'Il ne demande jamais de division ¤ Il fonctionne directement, même quand les nombres ne se divisent pas "joliment" entre eux ¤ Il ne fonctionne que pour les pourcentages ¤ Il donne un résultat différent des autres méthodes',
                explanation: 'Le produit en croix se calcule toujours de la même façon (une multiplication puis une division), ce qui est pratique même quand le coefficient ou le passage à l\'unité ne donnent pas des nombres "ronds".'
            }
        ],

    "514301": [
            {
                quiz: { q: 'Dans un repère, une situation de proportionnalité se représente toujours par...', a: 'des points alignés avec l\'origine du repère' },
                options: 'des points alignés avec l\'origine du repère ¤ des points formant un cercle ¤ des points quelconques ¤ une courbe qui ne passe jamais par l\'origine',
                explanation: 'Dans une situation de proportionnalité, les points représentés sont toujours <strong>alignés</strong> avec l\'<strong>origine</strong> du repère $(0\\,;0)$.'
            },
            {
                quiz: { q: 'Un graphique est une droite qui NE passe PAS par l\'origine du repère. Que peut-on en conclure ?', a: 'La situation n\'est pas proportionnelle' },
                options: 'La situation est proportionnelle ¤ La situation n\'est pas proportionnelle ¤ On ne peut rien conclure ¤ Il manque des données',
                explanation: 'Même si les points sont alignés, si la droite ne passe pas par l\'origine, la situation n\'est <strong>pas proportionnelle</strong> (c\'est une situation affine, par exemple un tarif avec un forfait de départ).'
            },
            {
                quiz: { q: 'Un nuage de points n\'est pas aligné du tout. Que peut-on en conclure sur la proportionnalité ?', a: 'Il n\'y a aucun lien de proportionnalité entre les deux grandeurs' },
                options: 'Les deux grandeurs sont proportionnelles ¤ Il n\'y a aucun lien de proportionnalité entre les deux grandeurs ¤ Il faut ajouter d\'autres points ¤ Le graphique est incorrect',
                explanation: 'Quand les points ne sont même pas alignés, il n\'y a <strong>aucun lien de proportionnalité</strong> visible entre les deux grandeurs.'
            },
            {
                quiz: { q: 'Que doit-on vérifier en plus de l\'alignement des points pour conclure à une situation de proportionnalité ?', a: 'Que la droite passe par l\'origine du repère' },
                options: 'Que tous les points ont une abscisse positive ¤ Que la droite passe par l\'origine du repère ¤ Qu\'il y a au moins 5 points ¤ Que les points sont espacés régulièrement',
                explanation: 'Il faut <strong>deux conditions</strong> pour la proportionnalité : les points alignés <strong>et</strong> la droite qui passe par l\'origine $(0\\,;0)$.'
            },
            {
                quiz: { q: 'Un abonnement de téléphone coûte 10 € par mois, plus 0,50 € par appel. Le graphique du prix en fonction du nombre d\'appels passera-t-il par l\'origine ?', a: 'Non' },
                options: 'Oui ¤ Non ¤ Cela dépend du nombre d\'appels ¤ On ne peut pas savoir',
                explanation: 'Même sans passer aucun appel, il faut déjà payer les $10$ € d\'abonnement : le prix ne part pas de $0$, donc la droite ne passe pas par l\'origine, ce n\'est <strong>pas proportionnel</strong>.'
            },
            {
                quiz: { q: 'Le prix d\'un plein d\'essence en fonction du nombre de litres achetés (sans abonnement) est représenté par une droite qui passe par l\'origine. Que peut-on conclure ?', a: 'Le prix est proportionnel au nombre de litres' },
                options: 'Le prix est proportionnel au nombre de litres ¤ Le prix n\'est pas proportionnel ¤ Il manque des informations ¤ Le graphique est faux',
                explanation: 'Une droite qui passe par l\'origine indique une situation de <strong>proportionnalité</strong> : le prix est proportionnel à la quantité d\'essence.'
            },
            {
                quiz: { q: 'Peut-on avoir des points alignés qui NE représentent PAS une situation de proportionnalité ?', a: 'Oui, si la droite ne passe pas par l\'origine' },
                options: 'Non, jamais ¤ Oui, si la droite ne passe pas par l\'origine ¤ Oui, si les points sont trop nombreux ¤ Non, l\'alignement suffit toujours',
                explanation: 'L\'alignement seul ne suffit pas : il faut aussi que la droite passe par l\'origine du repère pour parler de proportionnalité.'
            },
            {
                quiz: { q: 'On trace le graphique de « la distance parcourue en fonction du temps » pour un cycliste roulant à vitesse constante depuis son départ. La droite obtenue passe-t-elle par l\'origine ?', a: 'Oui' },
                options: 'Oui ¤ Non ¤ Cela dépend de la vitesse ¤ On ne peut pas savoir',
                explanation: 'Au départ (temps $= 0$), la distance parcourue est $0$ : le point $(0\\,;0)$ appartient bien au graphique, qui est une droite passant par l\'origine.'
            },
            {
                quiz: { q: 'Un graphique en forme de courbe (pas une droite) qui passe par l\'origine représente-t-il une situation de proportionnalité ?', a: 'Non' },
                options: 'Oui, car il passe par l\'origine ¤ Non ¤ Cela dépend de la forme de la courbe ¤ Oui, toujours',
                explanation: 'Il faut que le graphique soit une <strong>droite</strong> ET qu\'elle passe par l\'origine. Une courbe qui n\'est pas une droite, même passant par l\'origine, n\'indique pas une proportionnalité.'
            },
            {
                quiz: { q: 'Pour reconnaître une situation de proportionnalité sur un graphique, quels sont les DEUX éléments à vérifier ?', a: 'Les points sont alignés, et la droite passe par l\'origine' },
                options: 'Les points sont alignés, et la droite passe par l\'origine ¤ Les points sont nombreux, et les valeurs sont entières ¤ La droite est verticale, et elle est longue ¤ Les points sont colorés, et le repère est gradué',
                explanation: 'Les deux conditions indispensables sont : les points <strong>alignés</strong> entre eux, et la droite qui passe par l\'<strong>origine</strong> du repère.'
            }
        ],

    "514401": [
            {
                quiz: { q: 'Calculer un pourcentage revient à appliquer un coefficient de proportionnalité égal à...', a: '$t \\div 100$' },
                options: '$t \\times 100$ ¤ $t \\div 100$ ¤ $100 \\div t$ ¤ $t + 100$',
                explanation: 'Calculer $t\\%$ d\'une quantité, c\'est multiplier cette quantité par $\\dfrac{t}{100}$.'
            },
            {
                quiz: { q: 'Quel est 50 % de 60 € ?', a: '30 €' },
                options: '20 € ¤ 25 € ¤ 30 € ¤ 35 €',
                explanation: '$50\\%$ correspond à la <strong>moitié</strong> : $60 \\div 2 = 30$ €.'
            },
            {
                quiz: { q: 'Quel est 25 % de 200 € ?', a: '50 €' },
                options: '40 € ¤ 50 € ¤ 60 € ¤ 75 €',
                explanation: '$25\\%$ correspond au <strong>quart</strong> : $200 \\div 4 = 50$ €.'
            },
            {
                quiz: { q: 'Quel est 10 % de 90 € ?', a: '9 €' },
                options: '8 € ¤ 9 € ¤ 10 € ¤ 12 €',
                explanation: '$10\\%$ correspond au <strong>dixième</strong> : $90 \\div 10 = 9$ €.'
            },
            {
                quiz: { q: 'Un article à 120 € affiche une remise de 20 %. Quel est le montant de la remise ?', a: '24 €' },
                options: '20 € ¤ 22 € ¤ 24 € ¤ 30 €',
                explanation: 'Remise $= 0,2 \\times 120 = 24$ €.'
            },
            {
                quiz: { q: 'Avec une remise de 24 € sur un article à 120 €, quel est le nouveau prix ?', a: '96 €' },
                options: '90 € ¤ 94 € ¤ 96 € ¤ 100 €',
                explanation: 'Nouveau prix $= 120 - 24 = 96$ €.'
            },
            {
                quiz: { q: 'Un article à 40 € augmente de 15 %. Quel est le montant de l\'augmentation ?', a: '6 €' },
                options: '4 € ¤ 5 € ¤ 6 € ¤ 8 €',
                explanation: 'Augmentation $= 0,15 \\times 40 = 6$ €.'
            },
            {
                quiz: { q: 'Avec une augmentation de 6 € sur un article à 40 €, quel est le nouveau prix ?', a: '46 €' },
                options: '44 € ¤ 46 € ¤ 48 € ¤ 50 €',
                explanation: 'Nouveau prix $= 40 + 6 = 46$ €.'
            },
            {
                quiz: { q: 'En utilisant un tableau de proportionnalité avec 100, comment calcule-t-on 30 % de 50 € ?', a: '$50 \\times 30 \\div 100$' },
                options: '$50 \\times 100 \\div 30$ ¤ $50 \\times 30 \\div 100$ ¤ $30 \\times 100 \\div 50$ ¤ $50 + 30$',
                explanation: 'Dans le tableau, $x$ est relié en croix à $50$ et $30$ : $x = 50 \\times 30 \\div 100 = 15$ €.'
            },
            {
                quiz: { q: 'Sans calcul écrit, à quelle fraction correspond 50 % ?', a: 'La moitié' },
                options: 'Le quart ¤ La moitié ¤ Le dixième ¤ Le double',
                explanation: 'Connaître les pourcentages simples de mémoire est très utile : $50\\%$ est la <strong>moitié</strong>, $25\\%$ est le <strong>quart</strong>, $10\\%$ est le <strong>dixième</strong>.'
            },
            {
                quiz: { q: 'Lors de l\'élection des délégués de classe (24 votants), voici les résultats. Quel pourcentage de voix a obtenu Chloé ? <div class="table-container" style="margin:10px 0;"><table class="custom-table"><tbody><tr><th>Candidat</th><td>Alexis</td><td>Chloé</td><td>Salma</td><td>Djibril</td><td><strong>Total</strong></td></tr><tr><th>Voix</th><td>6</td><td>12</td><td>3</td><td>3</td><td><strong>24</strong></td></tr><tr><th>Pourcentage (%)</th><td>?</td><td>?</td><td>?</td><td>?</td><td><strong>100</strong></td></tr></tbody></table></div>', a: '50 %' },
                options: '25 % ¤ 40 % ¤ 50 % ¤ 60 %',
                explanation: 'Chloé a obtenu $12$ voix sur $24$ : $\\dfrac{12}{24} = 0,5$ voix « pour 1 » votant. Comme un pourcentage est « pour $100$ », on multiplie par $100$ : $0,5 \\times 100 = 50\\%$.'
            },
            {
                quiz: { q: 'Avec les mêmes résultats (24 votants au total), quel pourcentage de voix a obtenu Alexis ? <div class="table-container" style="margin:10px 0;"><table class="custom-table"><tbody><tr><th>Candidat</th><td>Alexis</td><td>Chloé</td><td>Salma</td><td>Djibril</td><td><strong>Total</strong></td></tr><tr><th>Voix</th><td>6</td><td>12</td><td>3</td><td>3</td><td><strong>24</strong></td></tr><tr><th>Pourcentage (%)</th><td>?</td><td>?</td><td>?</td><td>?</td><td><strong>100</strong></td></tr></tbody></table></div>', a: '25 %' },
                options: '15 % ¤ 20 % ¤ 25 % ¤ 30 %',
                explanation: 'Alexis a obtenu $6$ voix sur $24$ : $\\dfrac{6}{24} = 0,25$ voix « pour 1 » votant. On multiplie par $100$ : $0,25 \\times 100 = 25\\%$.'
            },
            {
                quiz: { q: 'Dans un club de sport de 40 membres, 8 pratiquent le tennis. <div class="table-container" style="margin:10px 0;"><table class="custom-table"><tbody><tr><th>Total des membres</th><td>40</td></tr><tr><th>Joueurs de tennis</th><td>8</td></tr></tbody></table></div> Quel pourcentage de membres pratique le tennis ?', a: '20 %' },
                options: '10 % ¤ 15 % ¤ 20 % ¤ 25 %',
                explanation: '$\\dfrac{8}{40} = 0,2$ joueur « pour 1 » membre. On multiplie par $100$ : $0,2 \\times 100 = 20\\%$.'
            }
        ],

    "514501": [
            {
                quiz: { q: 'L\'échelle d\'une carte est le coefficient de proportionnalité entre...', a: 'une distance sur le document et la distance réelle correspondante' },
                options: 'la longueur et la largeur de la carte ¤ une distance sur le document et la distance réelle correspondante ¤ le nombre de villes et leur population ¤ la date et l\'échelle de la carte',
                explanation: 'L\'échelle relie une distance mesurée <strong>sur le document</strong> (carte, plan) à la distance <strong>réelle</strong> correspondante, dans la même unité.'
            },
            {
                quiz: { q: 'Sur une carte à l\'échelle 1 : 50 000, que représente 1 cm sur la carte, dans la réalité ?', a: '50 000 cm' },
                options: '5 000 cm ¤ 50 000 cm ¤ 500 000 cm ¤ 50 cm',
                explanation: 'L\'échelle $1 : 50\\,000$ signifie que $1$ cm sur la carte représente $50\\,000$ cm ($=500$ m) dans la réalité.'
            },
            {
                quiz: { q: 'Sur une carte à l\'échelle 1 : 10 000, deux points sont distants de 6 cm sur la carte. Quelle est la distance réelle en cm ?', a: '60 000 cm' },
                options: '6 000 cm ¤ 60 000 cm ¤ 600 000 cm ¤ 16 000 cm',
                explanation: 'Distance réelle $= 6 \\times 10\\,000 = 60\\,000$ cm.'
            },
            {
                quiz: { q: 'Avec 60 000 cm de distance réelle, quelle est cette distance en mètres ?', a: '600 m' },
                options: '60 m ¤ 600 m ¤ 6 000 m ¤ 6 km',
                explanation: '$60\\,000$ cm $= 600$ m (on divise par $100$ pour convertir des cm en m).'
            },
            {
                quiz: { q: 'Sur un plan à l\'échelle 1 : 200, une pièce mesure 8 cm de longueur sur le plan. Quelle est sa longueur réelle en cm ?', a: '1 600 cm' },
                options: '800 cm ¤ 1 600 cm ¤ 2 000 cm ¤ 200 cm',
                explanation: 'Longueur réelle $= 8 \\times 200 = 1\\,600$ cm.'
            },
            {
                quiz: { q: 'Avec 1 600 cm de longueur réelle, quelle est cette longueur en mètres ?', a: '16 m' },
                options: '1,6 m ¤ 16 m ¤ 160 m ¤ 8 m',
                explanation: '$1\\,600$ cm $= 16$ m.'
            },
            {
                quiz: { q: 'Un bâtiment mesure 30 m de haut dans la réalité. Sur une maquette à l\'échelle 1 : 100, quelle sera sa hauteur en cm ?', a: '30 cm' },
                options: '3 cm ¤ 30 cm ¤ 300 cm ¤ 3 000 cm',
                explanation: 'On convertit d\'abord $30$ m $= 3\\,000$ cm, puis on divise par $100$ (échelle inversée) : $3\\,000 \\div 100 = 30$ cm.'
            },
            {
                quiz: { q: 'Sur une échelle 1 : 25 000, quelle distance réelle (en km) représente 4 cm sur la carte ?', a: '1 km' },
                options: '0,5 km ¤ 1 km ¤ 2 km ¤ 4 km',
                explanation: 'Distance réelle $= 4 \\times 25\\,000 = 100\\,000$ cm $= 1\\,000$ m $= 1$ km.'
            },
            {
                quiz: { q: 'Une échelle 1 : 1 000 000 est-elle adaptée pour représenter une petite pièce d\'appartement ?', a: 'Non, elle est bien trop petite (adaptée à des cartes de très grande région)' },
                options: 'Oui, parfaitement ¤ Non, elle est bien trop petite (adaptée à des cartes de très grande région) ¤ Cela dépend de la pièce ¤ Toutes les échelles conviennent',
                explanation: 'Une échelle $1 : 1\\,000\\,000$ signifie que $1$ cm représente $10$ km dans la réalité : c\'est une échelle utilisée pour de <strong>très grandes zones</strong> (pays, régions), pas pour une pièce d\'appartement, où l\'on utilise plutôt une échelle comme $1 : 50$ ou $1 : 100$.'
            },
            {
                quiz: { q: 'Deux villes sont réellement distantes de 45 km. Sur une carte à l\'échelle 1 : 500 000, quelle distance (en cm) les sépare sur la carte ?', a: '9 cm' },
                options: '4,5 cm ¤ 9 cm ¤ 45 cm ¤ 90 cm',
                explanation: 'On convertit d\'abord $45$ km $= 4\\,500\\,000$ cm, puis on divise par $500\\,000$ : $4\\,500\\,000 \\div 500\\,000 = 9$ cm.'
            }
        ]
};
