// ============================================================
// data/localQuestions5eme.js — Questions des boutons "Ai-je bien compris ?"
// Clé = identifiant du QCM (ex: "51101")
// Format de la clé : [niveau][chapitre][titre H2][titre H3][n° questionnaire dans le titre H3]
//   - niveau        : 5 (5ème)
//   - chapitre      : n° du chapitre (ici 1 : Opérations)
//   - titre H2      : n° du titre H2 dans le chapitre (ici 1 : Vocabulaire et sens des 4 opérations)
//   - titre H3      : n° du titre H3 dans le titre H2 (ici 0 : pas de titre H3 dans cette partie)
//   - n° questionnaire : n° du questionnaire dans le titre H3 (ici 1, 2 ou 3)
// ============================================================

const allLocalQuestions5eme = {
        // 5EME - CHAPITRE 1 (Opérations) - TITRE H2 1 (Vocabulaire et sens des 4 opérations) - pas de TITRE H3 - n° questionnaire

        // ------------------------------------------------------------
        // 51101 : Identifier l'opération à utiliser dans un problème
        // 20 petits problèmes — l'élève doit uniquement reconnaître
        // l'opération à effectuer, PAS calculer le résultat.
        // ------------------------------------------------------------
        "51111": [
            {
                quiz: { q: 'Léa a acheté 5 paquets de bonbons contenant chacun 8 bonbons. Quelle opération permet de trouver le nombre total de bonbons ?', a: 'Multiplication' },
                options: 'Addition ¤ Soustraction ¤ Multiplication ¤ Division',
                explanation: 'On répète $8$ bonbons $5$ fois : additionner $8$ cinq fois de suite revient à faire une <strong>multiplication</strong> ($5 \\times 8$). Dès que l\'on répète un même groupe plusieurs fois, on multiplie.'
            },
            {
                quiz: { q: 'Un fermier possède 120 pommes qu\'il doit répartir équitablement dans 4 paniers. Quelle opération permet de trouver le nombre de pommes par panier ?', a: 'Division' },
                options: 'Addition ¤ Soustraction ¤ Multiplication ¤ Division',
                explanation: 'Le mot-clé « <strong>répartir équitablement</strong> » signale un partage en parts égales : c\'est une <strong>division</strong> ($120 \\div 4$).'
            },
            {
                quiz: { q: 'Karim avait 45 €. Il a dépensé 18 € pour un livre. Quelle opération permet de trouver combien il lui reste ?', a: 'Soustraction' },
                options: 'Addition ¤ Soustraction ¤ Multiplication ¤ Division',
                explanation: 'On <strong>enlève</strong> une somme dépensée à un montant de départ : c\'est une <strong>soustraction</strong> ($45 - 18$).'
            },
            {
                quiz: { q: 'Une classe de 24 élèves accueille 3 nouveaux élèves. Quelle opération permet de trouver le nouvel effectif de la classe ?', a: 'Addition' },
                options: 'Addition ¤ Soustraction ¤ Multiplication ¤ Division',
                explanation: 'On <strong>réunit</strong> deux groupes d\'élèves (les 24 déjà présents et les 3 nouveaux) : c\'est une <strong>addition</strong> ($24 + 3$).'
            },
            {
                quiz: { q: 'Un cycliste roule à une vitesse constante de 15 km/h pendant 3 heures. Quelle opération permet de trouver la distance parcourue ?', a: 'Multiplication' },
                options: 'Addition ¤ Soustraction ¤ Multiplication ¤ Division',
                explanation: 'Parcourir $15$ km à chaque heure, pendant $3$ heures, revient à répéter $15$ km trois fois : c\'est une <strong>multiplication</strong> ($15 \\times 3$).'
            },
            {
                quiz: { q: 'Sarah a économisé 12 € la semaine dernière et 15 € cette semaine. Quelle opération permet de trouver le total économisé ?', a: 'Addition' },
                options: 'Addition ¤ Soustraction ¤ Multiplication ¤ Division',
                explanation: 'On <strong>rassemble</strong> deux sommes économisées à des moments différents : c\'est une <strong>addition</strong> ($12 + 15$).'
            },
            {
                quiz: { q: 'Un sac de 5 kg de riz doit être partagé équitablement entre 5 familles. Quelle opération permet de trouver la quantité reçue par chaque famille ?', a: 'Division' },
                options: 'Addition ¤ Soustraction ¤ Multiplication ¤ Division',
                explanation: 'On partage une quantité totale en parts égales entre plusieurs familles : c\'est une <strong>division</strong> ($5 \\div 5$).'
            },
            {
                quiz: { q: 'Un stylo coûte 2 €. Quelle opération permet de trouver le prix de 12 stylos ?', a: 'Multiplication' },
                options: 'Addition ¤ Soustraction ¤ Multiplication ¤ Division',
                explanation: 'Le prix d\'un stylo ($2$ €) se répète $12$ fois : c\'est une <strong>multiplication</strong> ($2 \\times 12$).'
            },
            {
                quiz: { q: 'Une piscine contenait 800 L d\'eau. On en a retiré 250 L. Quelle opération permet de trouver le volume d\'eau restant ?', a: 'Soustraction' },
                options: 'Addition ¤ Soustraction ¤ Multiplication ¤ Division',
                explanation: 'On <strong>enlève</strong> un volume d\'eau retiré à un volume de départ : c\'est une <strong>soustraction</strong> ($800 - 250$).'
            },
            {
                quiz: { q: 'Un immeuble compte 8 étages avec 6 appartements par étage. Quelle opération permet de trouver le nombre total d\'appartements ?', a: 'Multiplication' },
                options: 'Addition ¤ Soustraction ¤ Multiplication ¤ Division',
                explanation: 'Le même nombre d\'appartements ($6$) se répète sur chacun des $8$ étages : c\'est une <strong>multiplication</strong> ($8 \\times 6$).'
            },
            {
                quiz: { q: 'Théo mesurait 142 cm l\'année dernière. Il mesure maintenant 150 cm. Quelle opération permet de trouver de combien il a grandi ?', a: 'Soustraction' },
                options: 'Addition ¤ Soustraction ¤ Multiplication ¤ Division',
                explanation: 'On <strong>compare</strong> deux tailles pour trouver un écart : c\'est une <strong>soustraction</strong> ($150 - 142$).'
            },
            {
                quiz: { q: 'On souhaite répartir 96 chocolats dans des boîtes contenant chacune 8 chocolats. Quelle opération permet de trouver le nombre de boîtes nécessaires ?', a: 'Division' },
                options: 'Addition ¤ Soustraction ¤ Multiplication ¤ Division',
                explanation: 'On cherche <strong>combien de fois</strong> $8$ est contenu dans $96$ : c\'est une <strong>division</strong> ($96 \\div 8$).'
            },
            {
                quiz: { q: 'Trois amis se partagent équitablement une pizza coupée en 12 parts. Quelle opération permet de trouver le nombre de parts pour chacun ?', a: 'Division' },
                options: 'Addition ¤ Soustraction ¤ Multiplication ¤ Division',
                explanation: 'Un partage équitable entre plusieurs personnes est toujours une <strong>division</strong> ($12 \\div 3$).'
            },
            {
                quiz: { q: 'Un jardinier plante 7 rangées de 9 plants de tomates. Quelle opération permet de trouver le nombre total de plants ?', a: 'Multiplication' },
                options: 'Addition ¤ Soustraction ¤ Multiplication ¤ Division',
                explanation: '$9$ plants se répètent sur chacune des $7$ rangées : c\'est une <strong>multiplication</strong> ($7 \\times 9$).'
            },
            {
                quiz: { q: 'Le compteur d\'une voiture indiquait 34 210 km avant un trajet, et 34 580 km après. Quelle opération permet de trouver la distance parcourue lors de ce trajet ?', a: 'Soustraction' },
                options: 'Addition ¤ Soustraction ¤ Multiplication ¤ Division',
                explanation: 'On trouve un écart entre deux relevés du compteur : c\'est une <strong>soustraction</strong> ($34\\,580 - 34\\,210$).'
            },
            {
                quiz: { q: 'Un cinéma a vendu 45 billets adultes et 32 billets enfants aujourd\'hui. Quelle opération permet de trouver le nombre total de billets vendus ?', a: 'Addition' },
                options: 'Addition ¤ Soustraction ¤ Multiplication ¤ Division',
                explanation: 'On <strong>rassemble</strong> deux catégories de billets vendus : c\'est une <strong>addition</strong> ($45 + 32$).'
            },
            {
                quiz: { q: 'Une boulangère a préparé 156 croissants qu\'elle range dans des sachets de 6. Quelle opération permet de trouver le nombre de sachets qu\'elle peut remplir ?', a: 'Division' },
                options: 'Addition ¤ Soustraction ¤ Multiplication ¤ Division',
                explanation: 'On cherche combien de groupes de $6$ on peut former avec $156$ croissants : c\'est une <strong>division</strong> ($156 \\div 6$).'
            },
            {
                quiz: { q: 'Un marathon mesure 42 km. Un athlète a déjà parcouru 30 km. Quelle opération permet de trouver la distance qu\'il lui reste à parcourir ?', a: 'Soustraction' },
                options: 'Addition ¤ Soustraction ¤ Multiplication ¤ Division',
                explanation: 'On <strong>enlève</strong> la distance déjà parcourue à la distance totale : c\'est une <strong>soustraction</strong> ($42 - 30$).'
            },
            {
                quiz: { q: 'Chaque classe de 5ᵉ compte 28 élèves, et il y a 6 classes de 5ᵉ dans le collège. Quelle opération permet de trouver le nombre total d\'élèves de 5ᵉ ?', a: 'Multiplication' },
                options: 'Addition ¤ Soustraction ¤ Multiplication ¤ Division',
                explanation: 'Le même effectif ($28$) se répète pour chacune des $6$ classes : c\'est une <strong>multiplication</strong> ($6 \\times 28$).'
            },
            {
                quiz: { q: 'Un vidéaste a 4 500 abonnés et en gagne 320 en une semaine. Quelle opération permet de trouver son nouveau nombre d\'abonnés ?', a: 'Addition' },
                options: 'Addition ¤ Soustraction ¤ Multiplication ¤ Division',
                explanation: 'On <strong>ajoute</strong> les nouveaux abonnés au nombre déjà existant : c\'est une <strong>addition</strong> ($4\\,500 + 320$).'
            }
        ],

        // ------------------------------------------------------------
        // 51102 : Connaître le vocabulaire des opérations
        // 10 questions variées sur : somme, différence, produit,
        // quotient, termes, facteurs, diviseurs, dividendes.
        // ------------------------------------------------------------
        "51112": [
            {
                quiz: { q: 'Comment appelle-t-on le résultat d\'une addition ?', a: 'Une somme' },
                options: 'Une somme ¤ Une différence ¤ Un produit ¤ Un quotient',
                explanation: 'Le résultat d\'une <strong>addition</strong> s\'appelle une <strong>somme</strong>. Par exemple, dans $5 + 3 = 8$, le nombre $8$ est la somme.'
            },
            {
                quiz: { q: 'Comment appelle-t-on le résultat d\'une soustraction ?', a: 'Une différence' },
                options: 'Une somme ¤ Une différence ¤ Un produit ¤ Un quotient',
                explanation: 'Le résultat d\'une <strong>soustraction</strong> s\'appelle une <strong>différence</strong>. Par exemple, dans $9 - 4 = 5$, le nombre $5$ est la différence.'
            },
            {
                quiz: { q: 'Comment appelle-t-on le résultat d\'une multiplication ?', a: 'Un produit' },
                options: 'Une somme ¤ Une différence ¤ Un produit ¤ Un quotient',
                explanation: 'Le résultat d\'une <strong>multiplication</strong> s\'appelle un <strong>produit</strong>. Par exemple, dans $6 \\times 7 = 42$, le nombre $42$ est le produit.'
            },
            {
                quiz: { q: 'Comment appelle-t-on le résultat d\'une division ?', a: 'Un quotient' },
                options: 'Une somme ¤ Une différence ¤ Un produit ¤ Un quotient',
                explanation: 'Le résultat d\'une <strong>division</strong> s\'appelle un <strong>quotient</strong>. Par exemple, dans $20 \\div 4 = 5$, le nombre $5$ est le quotient.'
            },
            {
                quiz: { q: 'Dans le calcul $8 + 13$, comment appelle-t-on les nombres $8$ et $13$ ?', a: 'Des termes' },
                options: 'Des termes ¤ Des facteurs ¤ Des diviseurs ¤ Des quotients',
                explanation: 'Les nombres que l\'on additionne (ou que l\'on soustrait) s\'appellent des <strong>termes</strong>. Ici, $8$ et $13$ sont les termes de l\'addition.'
            },
            {
                quiz: { q: 'Dans le calcul $7 \\times 4$, comment appelle-t-on les nombres $7$ et $4$ ?', a: 'Des facteurs' },
                options: 'Des termes ¤ Des facteurs ¤ Des diviseurs ¤ Des produits',
                explanation: 'Les nombres que l\'on multiplie s\'appellent des <strong>facteurs</strong>. Ici, $7$ et $4$ sont les facteurs de la multiplication.'
            },
            {
                quiz: { q: 'Dans la division $63 \\div 9 = 7$, quel est le dividende ?', a: '63' },
                options: '63 ¤ 9 ¤ 7 ¤ 56',
                explanation: 'Le <strong>dividende</strong> est le nombre que l\'on divise, celui qui est placé <strong>avant</strong> le symbole $\\div$. Ici, c\'est $63$ (le $9$ est le diviseur et le $7$ est le quotient).'
            },
            {
                quiz: { q: 'Dans la division $63 \\div 9 = 7$, quel est le diviseur ?', a: '9' },
                options: '63 ¤ 9 ¤ 7 ¤ 54',
                explanation: 'Le <strong>diviseur</strong> est le nombre par lequel on divise, celui qui est placé <strong>après</strong> le symbole $\\div$. Ici, c\'est $9$ (le $63$ est le dividende et le $7$ est le quotient).'
            },
            {
                quiz: { q: 'Dans le calcul $17 - 5 = 12$, comment appelle-t-on le nombre $12$ ?', a: 'Une différence' },
                options: 'Une différence ¤ Une somme ¤ Un produit ¤ Un terme',
                explanation: 'Le nombre $12$ est le <strong>résultat</strong> d\'une soustraction : on l\'appelle une <strong>différence</strong>. $17$ et $5$ sont, eux, les termes de cette soustraction.'
            },
            {
                quiz: { q: 'Que signifie l\'affirmation « 3 est un diviseur de 12 » ?', a: '12 ÷ 3 donne un résultat exact, sans reste' },
                options: '12 ÷ 3 donne un résultat exact, sans reste ¤ 3 × 12 donne un nombre entier ¤ 12 est plus petit que 3 ¤ 3 est la moitié de 12',
                explanation: 'Dire que $3$ est un <strong>diviseur</strong> de $12$ signifie que la division $12 \\div 3$ tombe juste, sans reste : $12 \\div 3 = 4$. On dit aussi que $12$ est un <strong>multiple</strong> de $3$.'
            }
        ],

        // ------------------------------------------------------------
        // 51103 : Contrôler la vraisemblance d'un résultat
        // 10 questions pour estimer un ordre de grandeur, sans
        // calculatrice, en arrondissant les nombres.
        // ------------------------------------------------------------
        "51121": [
            {
                quiz: { q: 'Sans calculatrice, donne un ordre de grandeur de $19,8 \\times 5,1$', a: '100' },
                options: '10 ¤ 100 ¤ 1000 ¤ 25',
                explanation: 'On arrondit chaque nombre : $19,8 \\approx 20$ et $5,1 \\approx 5$. On calcule ensuite $20 \\times 5 = 100$. L\'ordre de grandeur est donc $100$ (le résultat exact, $100,98$, est proche).'
            },
            {
                quiz: { q: 'Sans calculatrice, donne un ordre de grandeur de $9,8 + 30,3$', a: '40' },
                options: '30 ¤ 40 ¤ 20 ¤ 300',
                explanation: 'On arrondit : $9,8 \\approx 10$ et $30,3 \\approx 30$. On calcule $10 + 30 = 40$. L\'ordre de grandeur est donc $40$.'
            },
            {
                quiz: { q: 'Sans calculatrice, donne un ordre de grandeur de $402 \\times 2,9$', a: '1200' },
                options: '1200 ¤ 120 ¤ 800 ¤ 12000',
                explanation: 'On arrondit : $402 \\approx 400$ et $2,9 \\approx 3$. On calcule $400 \\times 3 = 1200$. L\'ordre de grandeur est donc $1\\,200$.'
            },
            {
                quiz: { q: 'Sans calculatrice, donne un ordre de grandeur de $987 \\div 5,2$', a: '200' },
                options: '20 ¤ 200 ¤ 2000 ¤ 50',
                explanation: 'On arrondit : $987 \\approx 1\\,000$ et $5,2 \\approx 5$. On calcule $1\\,000 \\div 5 = 200$. L\'ordre de grandeur est donc $200$.'
            },
            {
                quiz: { q: 'Sans calculatrice, donne un ordre de grandeur de $61 \\times 39$', a: '2400' },
                options: '2400 ¤ 1800 ¤ 240 ¤ 3000',
                explanation: 'On arrondit : $61 \\approx 60$ et $39 \\approx 40$. On calcule $60 \\times 40 = 2\\,400$. L\'ordre de grandeur est donc $2\\,400$.'
            },
            {
                quiz: { q: 'Sans calculatrice, donne un ordre de grandeur de $199 + 301$', a: '500' },
                options: '400 ¤ 500 ¤ 600 ¤ 50',
                explanation: 'On arrondit : $199 \\approx 200$ et $301 \\approx 300$. On calcule $200 + 300 = 500$. L\'ordre de grandeur est donc $500$ (le résultat exact est $500$ !).'
            },
            {
                quiz: { q: 'Sans calculatrice, donne un ordre de grandeur de $4,9 \\times 21,2$', a: '100' },
                options: '50 ¤ 100 ¤ 10 ¤ 1000',
                explanation: 'On arrondit : $4,9 \\approx 5$ et $21,2 \\approx 20$. On calcule $5 \\times 20 = 100$. L\'ordre de grandeur est donc $100$.'
            },
            {
                quiz: { q: 'Sans calculatrice, donne un ordre de grandeur de $1005 - 498$', a: '500' },
                options: '500 ¤ 1500 ¤ 600 ¤ 50',
                explanation: 'On arrondit : $1\\,005 \\approx 1\\,000$ et $498 \\approx 500$. On calcule $1\\,000 - 500 = 500$. L\'ordre de grandeur est donc $500$.'
            },
            {
                quiz: { q: 'Sans calculatrice, donne un ordre de grandeur de $8,1 \\times 11,9$', a: '96' },
                options: '96 ¤ 960 ¤ 9,6 ¤ 20',
                explanation: 'On arrondit : $8,1 \\approx 8$ et $11,9 \\approx 12$. On calcule $8 \\times 12 = 96$. L\'ordre de grandeur est donc $96$ (proche du résultat exact, $96,39$).'
            },
            {
                quiz: { q: 'Sans calculatrice, donne un ordre de grandeur de $250 \\div 48$', a: '5' },
                options: '5 ¤ 50 ¤ 0,5 ¤ 20',
                explanation: 'On arrondit : $48 \\approx 50$. On calcule $250 \\div 50 = 5$. L\'ordre de grandeur est donc $5$.'
            }
        ],

        // 5EME - CHAPITRE 1 (Opérations) - TITRE H2 2 (Enchaîner des opérations : les priorités opératoires) - pas de TITRE H3 - n° questionnaire

        // ------------------------------------------------------------
        // 51201 : Calculer en respectant les priorités opératoires
        // 20 questions, avec et sans parenthèses.
        // ------------------------------------------------------------
        "51211": [
            {
                quiz: { q: 'Calcule : $5 + 3 \\times 4$', a: '17' },
                options: '17 ¤ 32 ¤ 12 ¤ 8',
                explanation: 'On calcule d\'abord la multiplication : $3 \\times 4 = 12$. Puis l\'addition : $5 + 12 = 17$.'
            },
            {
                quiz: { q: 'Calcule : $12 - 2 \\times 3$', a: '6' },
                options: '6 ¤ 30 ¤ 10 ¤ 4',
                explanation: 'On calcule d\'abord la multiplication : $2 \\times 3 = 6$. Puis la soustraction : $12 - 6 = 6$.'
            },
            {
                quiz: { q: 'Calcule : $20 - 4 \\div 2$', a: '18' },
                options: '18 ¤ 8 ¤ 16 ¤ 22',
                explanation: 'On calcule d\'abord la division : $4 \\div 2 = 2$. Puis la soustraction : $20 - 2 = 18$.'
            },
            {
                quiz: { q: 'Calcule : $6 \\times 2 + 5$', a: '17' },
                options: '17 ¤ 42 ¤ 7 ¤ 30',
                explanation: 'On calcule d\'abord la multiplication : $6 \\times 2 = 12$. Puis l\'addition : $12 + 5 = 17$.'
            },
            {
                quiz: { q: 'Calcule : $18 \\div 3 - 2$', a: '4' },
                options: '4 ¤ 12 ¤ 6 ¤ 9',
                explanation: 'On calcule d\'abord la division : $18 \\div 3 = 6$. Puis la soustraction : $6 - 2 = 4$.'
            },
            {
                quiz: { q: 'Calcule : $7 + 6 \\div 2$', a: '10' },
                options: '10 ¤ 6,5 ¤ 13 ¤ 3,5',
                explanation: 'On calcule d\'abord la division : $6 \\div 2 = 3$. Puis l\'addition : $7 + 3 = 10$.'
            },
            {
                quiz: { q: 'Calcule : $9 \\times 2 - 4 \\times 3$', a: '6' },
                options: '6 ¤ 42 ¤ 18 ¤ 30',
                explanation: 'On calcule d\'abord les deux multiplications : $9 \\times 2 = 18$ et $4 \\times 3 = 12$. Puis la soustraction : $18 - 12 = 6$.'
            },
            {
                quiz: { q: 'Calcule : $15 - 3 \\times 4 + 1$', a: '4' },
                options: '4 ¤ 49 ¤ 13 ¤ 7',
                explanation: 'On calcule d\'abord la multiplication : $3 \\times 4 = 12$. Puis, de gauche à droite : $15 - 12 + 1 = 3 + 1 = 4$.'
            },
            {
                quiz: { q: 'Calcule : $8 \\div 4 + 3 \\times 2$', a: '8' },
                options: '8 ¤ 10 ¤ 7 ¤ 11',
                explanation: 'On calcule d\'abord les deux opérations prioritaires : $8 \\div 4 = 2$ et $3 \\times 2 = 6$. Puis l\'addition : $2 + 6 = 8$.'
            },
            {
                quiz: { q: 'Calcule : $10 - 6 + 2$', a: '6' },
                options: '6 ¤ 2 ¤ 18 ¤ 14',
                explanation: 'Il n\'y a que des additions et des soustractions : on calcule <strong>de gauche à droite</strong> : $10 - 6 = 4$, puis $4 + 2 = 6$.'
            },
            {
                quiz: { q: 'Calcule : $(5 + 3) \\times 4$', a: '32' },
                options: '32 ¤ 17 ¤ 20 ¤ 12',
                explanation: 'On calcule d\'abord la parenthèse : $5 + 3 = 8$. Puis la multiplication : $8 \\times 4 = 32$.'
            },
            {
                quiz: { q: 'Calcule : $(12 - 2) \\times 3$', a: '30' },
                options: '30 ¤ 6 ¤ 34 ¤ 10',
                explanation: 'On calcule d\'abord la parenthèse : $12 - 2 = 10$. Puis la multiplication : $10 \\times 3 = 30$.'
            },
            {
                quiz: { q: 'Calcule : $20 - (4 + 2)$', a: '14' },
                options: '14 ¤ 18 ¤ 22 ¤ 12',
                explanation: 'On calcule d\'abord la parenthèse : $4 + 2 = 6$. Puis la soustraction : $20 - 6 = 14$.'
            },
            {
                quiz: { q: 'Calcule : $(6 + 2) \\times (5 - 3)$', a: '16' },
                options: '16 ¤ 37 ¤ 10 ¤ 40',
                explanation: 'On calcule d\'abord chaque parenthèse : $6 + 2 = 8$ et $5 - 3 = 2$. Puis la multiplication : $8 \\times 2 = 16$.'
            },
            {
                quiz: { q: 'Calcule : $18 \\div (3 - 1)$', a: '9' },
                options: '9 ¤ 5 ¤ 18 ¤ 6',
                explanation: 'On calcule d\'abord la parenthèse : $3 - 1 = 2$. Puis la division : $18 \\div 2 = 9$.'
            },
            {
                quiz: { q: 'Calcule : $100 - (7 + 3) \\times 5$', a: '50' },
                options: '50 ¤ 480 ¤ 65 ¤ 15',
                explanation: 'On calcule d\'abord la parenthèse : $7 + 3 = 10$. Puis la multiplication : $10 \\times 5 = 50$. Enfin la soustraction : $100 - 50 = 50$.'
            },
            {
                quiz: { q: 'Calcule : $(9 - 4) \\times (3 + 2)$', a: '25' },
                options: '25 ¤ 17 ¤ 45 ¤ 5',
                explanation: 'On calcule d\'abord chaque parenthèse : $9 - 4 = 5$ et $3 + 2 = 5$. Puis la multiplication : $5 \\times 5 = 25$.'
            },
            {
                quiz: { q: 'Calcule : $2 \\times (6 + 4) - 5$', a: '15' },
                options: '15 ¤ 11 ¤ 25 ¤ 7',
                explanation: 'On calcule d\'abord la parenthèse : $6 + 4 = 10$. Puis la multiplication : $2 \\times 10 = 20$. Enfin la soustraction : $20 - 5 = 15$.'
            },
            {
                quiz: { q: 'Calcule : $(15 - 9) \\div 3 + 4$', a: '6' },
                options: '6 ¤ 16 ¤ 3 ¤ 10',
                explanation: 'On calcule d\'abord la parenthèse : $15 - 9 = 6$. Puis la division : $6 \\div 3 = 2$. Enfin l\'addition : $2 + 4 = 6$.'
            },
            {
                quiz: { q: 'Calcule : $50 - (2 + 3) \\times (4 - 1)$', a: '35' },
                options: '35 ¤ 203 ¤ 65 ¤ 15',
                explanation: 'On calcule d\'abord chaque parenthèse : $2 + 3 = 5$ et $4 - 1 = 3$. Puis la multiplication : $5 \\times 3 = 15$. Enfin la soustraction : $50 - 15 = 35$.'
            }
        ],

        // 5EME - CHAPITRE 1 (Opérations) - TITRE H2 2 (Enchaîner des opérations : les priorités opératoires) - TITRE H3 1 (Traduire un programme de calcul en une expression) - n° questionnaire

        // ------------------------------------------------------------
        // 51211 : Traduire un programme de calcul en une expression
        // 10 questions.
        // ------------------------------------------------------------
        "51221": [
            {
                quiz: { q: 'En choisissant le nombre 4, écris le calcul en une seule ligne qui correspond au programme suivant : « Choisir un nombre ; lui ajouter 5 ; multiplier le résultat par 3 »', a: '$(4 + 5) \\times 3$' },
                options: '$(4 + 5) \\times 3$ ¤ $4 + 5 \\times 3$ ¤ $4 \\times 3 + 5$ ¤ $4 \\times (3 + 5)$',
                explanation: 'L\'addition doit être calculée <strong>avant</strong> la multiplication : il faut donc l\'entourer de parenthèses. On obtient $(4 + 5) \\times 3$ (qui vaut $27$).'
            },
            {
                quiz: { q: 'En choisissant le nombre 5, écris le calcul en une seule ligne qui correspond au programme suivant : « Choisir un nombre ; le multiplier par 4 ; soustraire 7 au résultat »', a: '$5 \\times 4 - 7$' },
                options: '$5 \\times 4 - 7$ ¤ $5 \\times 4$ ¤ $5 \\times 4 + 7$ ¤ $(5 + 7) \\times 4$',
                explanation: 'La multiplication est calculée en premier <strong>naturellement</strong> (elle est prioritaire), donc aucune parenthèse n\'est nécessaire : $5 \\times 4 - 7$ (qui vaut $13$).'
            },
            {
                quiz: { q: 'En choisissant le nombre 3, écris le calcul en une seule ligne qui correspond au programme suivant : « Choisir un nombre ; ajouter 2 au nombre ; multiplier le résultat par lui-même »', a: '$(3 + 2) \\times (3 + 2)$' },
                options: '$(3 + 2) \\times (3 + 2)$ ¤ $3 \\times 3 + 2$ ¤ $(3 + 2) \\times 2$ ¤ $3 + 2 \\times 3 + 2$',
                explanation: '« Multiplier le résultat par lui-même » signifie multiplier $(3+2)$ par $(3+2)$ : il faut mettre des parenthèses autour de l\'addition, effectuée en premier. On obtient $(3+2) \\times (3+2)$ (qui vaut $25$).'
            },
            {
                quiz: { q: 'En choisissant le nombre 8, écris le calcul en une seule ligne qui correspond au programme suivant : « Choisir un nombre ; le diviser par 2 ; ajouter 6 au résultat »', a: '$8 \\div 2 + 6$' },
                options: '$8 \\div 2 + 6$ ¤ $8 \\div (2 + 6)$ ¤ $(8 + 6) \\div 2$ ¤ $8 \\div 2$',
                explanation: 'La division est prioritaire sur l\'addition : elle se calcule donc naturellement en premier, sans qu\'on ait besoin de parenthèses : $8 \\div 2 + 6$ (qui vaut $10$).'
            },
            {
                quiz: { q: 'En choisissant le nombre 13, écris le calcul en une seule ligne qui correspond au programme suivant : « Choisir un nombre ; soustraire 3 au nombre ; diviser le résultat par 5 »', a: '$(13 - 3) \\div 5$' },
                options: '$(13 - 3) \\div 5$ ¤ $13 - 3$ ¤ $(13 - 3) \\times 5$ ¤ $13 - 3 \\div 5$',
                explanation: 'La soustraction doit être calculée <strong>avant</strong> la division : il faut donc l\'entourer de parenthèses. On obtient $(13 - 3) \\div 5$ (qui vaut $2$).'
            },
            {
                quiz: { q: 'En choisissant le nombre 2, écris le calcul en une seule ligne qui correspond au programme suivant : « Choisir un nombre ; multiplier ce nombre par 6 ; ajouter 9 ; multiplier le tout par 2 »', a: '$(2 \\times 6 + 9) \\times 2$' },
                options: '$(2 \\times 6 + 9) \\times 2$ ¤ $2 \\times 6 + 9 \\times 2$ ¤ $2 \\times (6 + 9) \\times 2$ ¤ $2 \\times 6 + 9$',
                explanation: '« Multiplier <strong>le tout</strong> par 2 » signifie que toute l\'expression précédente ($2 \\times 6 + 9$) doit être calculée avant d\'être multipliée par 2 : il faut donc l\'entourer de parenthèses. On obtient $(2 \\times 6 + 9) \\times 2$ (qui vaut $42$).'
            },
            {
                quiz: { q: 'En choisissant le nombre 5, écris le calcul en une seule ligne qui correspond au programme suivant : « Choisir un nombre ; ajouter 4 ; diviser le résultat par 3 ; soustraire 1 »', a: '$(5 + 4) \\div 3 - 1$' },
                options: '$(5 + 4) \\div 3 - 1$ ¤ $(5 + 4) \\div 3$ ¤ $(5 + 4) \\times 3 - 1$ ¤ $5 + 4 \\div 3 - 1$',
                explanation: 'L\'addition doit être calculée avant la division : on met $(5+4)$ entre parenthèses. La soustraction finale, elle, n\'a pas besoin de parenthèses car elle est déjà la dernière étape. On obtient $(5 + 4) \\div 3 - 1$ (qui vaut $2$).'
            },
            {
                quiz: { q: 'En choisissant le nombre 4, écris le calcul en une seule ligne qui correspond au programme suivant : « Choisir un nombre ; multiplier par 3 ; soustraire ce résultat à 20 »', a: '$20 - 4 \\times 3$' },
                options: '$20 - 4 \\times 3$ ¤ $(20 - 4) \\times 3$ ¤ $4 \\times (20 - 3)$ ¤ $20 - 4$',
                explanation: '« Soustraire ce résultat à 20 » signifie que l\'on part de $20$ et que l\'on enlève le résultat précédent : $20 - 4 \\times 3$ (qui vaut $8$). La multiplication reste prioritaire, pas besoin de parenthèses.'
            },
            {
                quiz: { q: 'En choisissant le nombre 2, écris le calcul en une seule ligne qui correspond au programme suivant : « Choisir un nombre ; lui ajouter 8 ; multiplier le résultat par lui-même ; soustraire 10 »', a: '$(2 + 8) \\times (2 + 8) - 10$' },
                options: '$(2 + 8) \\times (2 + 8) - 10$ ¤ $2 \\times 2 + 8 - 10$ ¤ $(2 + 8) \\times 2 - 10$ ¤ $2 + 8 \\times 2 + 8 - 10$',
                explanation: 'On met des parenthèses autour de $(2+8)$ car cette addition doit être calculée avant d\'être multipliée par elle-même. La soustraction finale de $10$ n\'a pas besoin de parenthèses. On obtient $(2 + 8) \\times (2 + 8) - 10$ (qui vaut $90$).'
            },
            {
                quiz: { q: 'En choisissant le nombre 11, écris le calcul en une seule ligne qui correspond au programme suivant : « Choisir un nombre ; lui retrancher 5 ; diviser le résultat par 2 ; ajouter le nombre de départ »', a: '$(11 - 5) \\div 2 + 11$' },
                options: '$(11 - 5) \\div 2 + 11$ ¤ $(11 - 5) \\div 2$ ¤ $(11 - 5) \\times 2 + 11$ ¤ $11 - 5 \\div 2 + 11$',
                explanation: 'La soustraction $(11-5)$ doit être calculée avant la division : on l\'entoure de parenthèses. On ajoute ensuite le nombre de départ $11$, sans parenthèses supplémentaires. On obtient $(11 - 5) \\div 2 + 11$ (qui vaut $14$).'
            }
        ],

        // 5EME - CHAPITRE 1 (Opérations) - TITRE H2 3 (Distributivité simple sur des exemples numériques) - pas de TITRE H3 - n° questionnaire

        // ------------------------------------------------------------
        // 51301 : Distributivité simple sur des exemples numériques
        // 10 questions, uniquement numériques (pas de calcul littéral).
        // ------------------------------------------------------------
        "51301": [
            {
                quiz: { q: 'Calcule $4 \\times 99$ grâce à la décomposition $99 = 100 - 1$.', a: '396' },
                options: '396 ¤ 400 ¤ 399 ¤ 392',
                explanation: '$4 \\times 99 = 4 \\times (100 - 1) = 4\\times100 - 4\\times1 = 400 - 4 = 396$.'
            },
            {
                quiz: { q: 'Calcule $6 \\times 102$ grâce à la décomposition $102 = 100 + 2$.', a: '612' },
                options: '612 ¤ 600 ¤ 602 ¤ 120',
                explanation: '$6 \\times 102 = 6 \\times (100 + 2) = 6\\times100 + 6\\times2 = 600 + 12 = 612$.'
            },
            {
                quiz: { q: 'Quelle décomposition permet de calculer $9 \\times 1001$ le plus facilement de tête ?', a: '1001 = 1000 + 1' },
                options: '1001 = 1000 + 1 ¤ 1001 = 1002 - 1 ¤ 1001 = 900 + 101 ¤ 1001 = 500 + 501',
                explanation: 'On choisit toujours le nombre rond le plus proche : $1000$ est très proche de $1001$, donc $1001 = 1000 + 1$ est la décomposition la plus pratique pour calculer mentalement.'
            },
            {
                quiz: { q: 'Complète : $7 \\times 96 = 7 \\times (100 - 4) = 7\\times100 - 7\\times4 = 700 - 28 = ...$', a: '672' },
                options: '672 ¤ 696 ¤ 704 ¤ 728',
                explanation: '$700 - 28 = 672$. Attention à bien multiplier <strong>le $4$ aussi</strong> par $7$ (et pas seulement le $100$) !'
            },
            {
                quiz: { q: 'Calcule $3 \\times 998$ grâce à la décomposition $998 = 1000 - 2$.', a: '2994' },
                options: '2994 ¤ 3000 ¤ 2998 ¤ 2997',
                explanation: '$3 \\times 998 = 3 \\times (1000 - 2) = 3\\times1000 - 3\\times2 = 3000 - 6 = 2994$.'
            },
            {
                quiz: { q: 'Quelle égalité correspond à la distributivité appliquée à $12 \\times 21$, avec $21 = 20 + 1$ ?', a: '12 × 20 + 12 × 1' },
                options: '12 × 20 + 12 × 1 ¤ 12 × 20 + 1 ¤ 12 + 20 × 12 + 1 ¤ 12 × 20 - 12 × 1',
                explanation: 'On multiplie $12$ par <strong>chacun</strong> des deux termes de la somme $20 + 1$, puis on additionne : $12 \\times 20 + 12 \\times 1$.'
            },
            {
                quiz: { q: 'Calcule $15 \\times 11$ grâce à la décomposition $11 = 10 + 1$.', a: '165' },
                options: '165 ¤ 150 ¤ 151 ¤ 160',
                explanation: '$15 \\times 11 = 15 \\times (10 + 1) = 15\\times10 + 15\\times1 = 150 + 15 = 165$.'
            },
            {
                quiz: { q: 'Complète : $8 \\times 25 = 8 \\times (20 + 5) = 8\\times20 + 8\\times5 = 160 + 40 = ...$', a: '200' },
                options: '200 ¤ 196 ¤ 164 ¤ 240',
                explanation: '$160 + 40 = 200$.'
            },
            {
                quiz: { q: 'Calcule $6 \\times 999$ grâce à la décomposition $999 = 1000 - 1$.', a: '5994' },
                options: '5994 ¤ 6000 ¤ 5999 ¤ 5988',
                explanation: '$6 \\times 999 = 6 \\times (1000 - 1) = 6\\times1000 - 6\\times1 = 6000 - 6 = 5994$.'
            },
            {
                quiz: { q: 'Quelle égalité correspond à la distributivité appliquée à $9 \\times 48$, avec $48 = 50 - 2$ ?', a: '9 × 50 - 9 × 2' },
                options: '9 × 50 - 9 × 2 ¤ 9 × 50 - 2 ¤ 9 × 50 + 9 × 2 ¤ 9 - 50 × 2',
                explanation: 'On multiplie $9$ par <strong>chacun</strong> des deux termes de la différence $50 - 2$, puis on soustrait : $9 \\times 50 - 9 \\times 2$.'
            }
        ],

        // 5EME - CHAPITRE 1 (Opérations) - TITRE H2 4 (Diviser par un nombre décimal) - pas de TITRE H3 - n° questionnaire

        // ------------------------------------------------------------
        // 51401 : Diviser par un nombre décimal
        // 10 questions.
        // ------------------------------------------------------------
        "51421": [
            {
                quiz: { q: 'Pour calculer $15,6 \\div 1,2$, par quel nombre faut-il multiplier le dividende et le diviseur pour obtenir un diviseur entier ?', a: '10' },
                options: '10 ¤ 100 ¤ 1000 ¤ 1',
                explanation: 'Le diviseur $1,2$ a $1$ chiffre après la virgule : on multiplie donc le dividende et le diviseur par $10$.'
            },
            {
                quiz: { q: 'Pour calculer $4,25 \\div 0,05$, par quel nombre faut-il multiplier le dividende et le diviseur pour obtenir un diviseur entier ?', a: '100' },
                options: '10 ¤ 100 ¤ 1000 ¤ 1',
                explanation: 'Le diviseur $0,05$ a $2$ chiffres après la virgule : on multiplie donc le dividende et le diviseur par $100$.'
            },
            {
                quiz: { q: 'Pour calculer $6 \\div 0,125$, par quel nombre faut-il multiplier le dividende et le diviseur pour obtenir un diviseur entier ?', a: '1000' },
                options: '10 ¤ 100 ¤ 1000 ¤ 10000',
                explanation: 'Le diviseur $0,125$ a $3$ chiffres après la virgule : on multiplie donc le dividende et le diviseur par $1\\,000$.'
            },
            {
                quiz: { q: 'Transforme $8,4 \\div 0,2$ en une division équivalente à diviseur entier.', a: '84 ÷ 2' },
                options: '84 ÷ 2 ¤ 8,4 ÷ 2 ¤ 84 ÷ 20 ¤ 840 ÷ 2',
                explanation: '$0,2$ a $1$ chiffre après la virgule, donc on multiplie le dividende <strong>et</strong> le diviseur par $10$ : $8,4 \\times 10 = 84$ et $0,2 \\times 10 = 2$.'
            },
            {
                quiz: { q: 'Transforme $3,6 \\div 0,4$ en une division équivalente à diviseur entier.', a: '36 ÷ 4' },
                options: '36 ÷ 4 ¤ 3,6 ÷ 4 ¤ 36 ÷ 40 ¤ 360 ÷ 4',
                explanation: '$0,4$ a $1$ chiffre après la virgule, donc on multiplie le dividende <strong>et</strong> le diviseur par $10$ : $3,6 \\times 10 = 36$ et $0,4 \\times 10 = 4$.'
            },
            {
                quiz: { q: 'Transforme $12,5 \\div 0,25$ en une division équivalente à diviseur entier.', a: '1250 ÷ 25' },
                options: '1250 ÷ 25 ¤ 125 ÷ 25 ¤ 1250 ÷ 250 ¤ 12,5 ÷ 25',
                explanation: '$0,25$ a $2$ chiffres après la virgule, donc on multiplie le dividende <strong>et</strong> le diviseur par $100$ : $12,5 \\times 100 = 1\\,250$ et $0,25 \\times 100 = 25$.'
            },
            {
                quiz: { q: 'Calcule $9,6 \\div 1,2$.', a: '8' },
                options: '8 ¤ 0,8 ¤ 80 ¤ 96',
                explanation: 'On multiplie le dividende <strong>et</strong> le diviseur par $10$ : $9,6 \\div 1,2 = 96 \\div 12 = 8$. Attention à bien multiplier les <strong>deux</strong> nombres, sinon on change la valeur du quotient !'
            },
            {
                quiz: { q: 'Calcule $5,4 \\div 0,6$.', a: '9' },
                options: '9 ¤ 90 ¤ 0,9 ¤ 3,6',
                explanation: 'On multiplie le dividende <strong>et</strong> le diviseur par $10$ : $5,4 \\div 0,6 = 54 \\div 6 = 9$.'
            },
            {
                quiz: { q: 'Calcule $2,4 \\div 0,08$.', a: '30' },
                options: '30 ¤ 3000 ¤ 0,3 ¤ 3',
                explanation: '$0,08$ a $2$ chiffres après la virgule : on multiplie le dividende <strong>et</strong> le diviseur par $100$ : $2,4 \\div 0,08 = 240 \\div 8 = 30$.'
            },
            {
                quiz: { q: 'Calcule $14 \\div 0,25$.', a: '56' },
                options: '56 ¤ 0,56 ¤ 5600 ¤ 3,5',
                explanation: '$0,25$ a $2$ chiffres après la virgule : on multiplie le dividende <strong>et</strong> le diviseur par $100$ : $14 \\div 0,25 = 1\\,400 \\div 25 = 56$.'
            }
        ],

        // 5EME - CHAPITRE 1 (Opérations) - TITRE H2 5 (Division euclidienne, multiples et diviseurs) - pas de TITRE H3 - n° questionnaire

        // ------------------------------------------------------------
        // 51501 : Problèmes de division euclidienne (quotient, reste,
        // ou combinaison des deux). 20 questions.
        // ------------------------------------------------------------
        "51411": [
            {
                quiz: { q: 'Léa range 95 bonbons dans des sachets de 6 bonbons chacun. Combien de sachets complets peut-elle remplir ?', a: '15' },
                options: '15 ¤ 16 ¤ 5 ¤ 14',
                explanation: '$95 = 6 \\times 15 + 5$. On peut donc remplir $15$ sachets complets (il restera $5$ bonbons).'
            },
            {
                quiz: { q: 'Un autocar peut transporter 9 personnes. On fait monter les 188 personnes d\'un groupe par autocars complets. Combien de personnes ne pourront pas monter dans un autocar complet ?', a: '8' },
                options: '8 ¤ 9 ¤ 20 ¤ 1',
                explanation: '$188 = 9 \\times 20 + 8$. Il restera $8$ personnes qui ne pourront pas remplir un autocar complet.'
            },
            {
                quiz: { q: 'On veut répartir 250 élèves en groupes de 40 pour une sortie. Après avoir formé le plus de groupes complets possible, combien d\'élèves manque-t-il pour compléter un dernier groupe ?', a: '30' },
                options: '30 ¤ 10 ¤ 6 ¤ 40',
                explanation: '$250 = 40 \\times 6 + 10$ : il reste $10$ élèves. Il en manquerait $40 - 10 = 30$ pour former un $7^{\\text{e}}$ groupe complet.'
            },
            {
                quiz: { q: 'Quel est le reste de la division euclidienne de 73 par 5 ?', a: '3' },
                options: '3 ¤ 14 ¤ 2 ¤ 4',
                explanation: '$73 = 5 \\times 14 + 3$. Le reste est $3$ (on vérifie bien que $3 < 5$).'
            },
            {
                quiz: { q: 'Un fleuriste dispose de 312 roses. Il souhaite former des bouquets de 25 roses. Combien de bouquets complets peut-il former ?', a: '12' },
                options: '12 ¤ 13 ¤ 11 ¤ 25',
                explanation: '$312 = 25 \\times 12 + 12$. Il peut former $12$ bouquets complets.'
            },
            {
                quiz: { q: 'Quelle égalité correspond à la division euclidienne de 145 par 12 ?', a: '145 = 12 × 12 + 1' },
                options: '145 = 12 × 12 + 1 ¤ 145 = 12 × 11 + 13 ¤ 145 = 12 × 13 - 11 ¤ 145 = 12 × 12 + 12',
                explanation: 'Dans une division euclidienne, le reste doit toujours être <strong>strictement inférieur</strong> au diviseur. Seule $145 = 12 \\times 12 + 1$ respecte cette condition (le reste $1$ est bien inférieur à $12$).'
            },
            {
                quiz: { q: 'Un traiteur doit livrer 500 petits fours en boîtes de 60. Combien de boîtes complètes peut-il remplir ?', a: '8' },
                options: '8 ¤ 9 ¤ 7 ¤ 20',
                explanation: '$500 = 60 \\times 8 + 20$. Il peut remplir $8$ boîtes complètes.'
            },
            {
                quiz: { q: 'Un traiteur doit livrer 500 petits fours en boîtes de 60. Après avoir rempli le plus de boîtes complètes possible, combien de petits fours manque-t-il pour remplir une boîte supplémentaire ?', a: '40' },
                options: '40 ¤ 20 ¤ 8 ¤ 60',
                explanation: '$500 = 60 \\times 8 + 20$ : il reste $20$ petits fours. Il en manquerait $60 - 20 = 40$ pour remplir une boîte de plus.'
            },
            {
                quiz: { q: 'Quel est le reste de la division euclidienne de 84 par 11 ?', a: '7' },
                options: '7 ¤ 8 ¤ 4 ¤ 77',
                explanation: '$84 = 11 \\times 7 + 7$. Le reste est $7$.'
            },
            {
                quiz: { q: 'Une usine conditionne 215 objets produits dans la journée en cartons de 18. Combien d\'objets ne rentrent pas dans un carton complet à la fin de la journée ?', a: '17' },
                options: '17 ¤ 18 ¤ 11 ¤ 1',
                explanation: '$215 = 18 \\times 11 + 17$. Il reste $17$ objets qui ne rentrent pas dans un carton complet.'
            },
            {
                quiz: { q: 'Combien de fois le nombre 13 est-il contenu dans 99 ?', a: '7' },
                options: '7 ¤ 8 ¤ 6 ¤ 13',
                explanation: '$99 = 13 \\times 7 + 8$. Le nombre $13$ est contenu $7$ fois entières dans $99$.'
            },
            {
                quiz: { q: 'Une année compte 365 jours. Combien de semaines complètes cette année compte-t-elle ?', a: '52' },
                options: '52 ¤ 53 ¤ 51 ¤ 7',
                explanation: '$365 = 7 \\times 52 + 1$. Cette année compte $52$ semaines complètes.'
            },
            {
                quiz: { q: 'Une année compte 365 jours. Une fois les semaines complètes comptées, combien de jours restent ?', a: '1' },
                options: '1 ¤ 7 ¤ 52 ¤ 0',
                explanation: '$365 = 7 \\times 52 + 1$. Il reste $1$ jour après les $52$ semaines complètes.'
            },
            {
                quiz: { q: 'Quel est le reste de la division euclidienne de 58 par 9 ?', a: '4' },
                options: '4 ¤ 6 ¤ 5 ¤ 9',
                explanation: '$58 = 9 \\times 6 + 4$. Le reste est $4$.'
            },
            {
                quiz: { q: 'On veut répartir 127 jetons en piles de 15 jetons. Après avoir formé le plus de piles complètes possible, combien de jetons manque-t-il pour compléter une pile supplémentaire ?', a: '8' },
                options: '8 ¤ 7 ¤ 15 ¤ 127',
                explanation: '$127 = 15 \\times 8 + 7$ : il reste $7$ jetons. Il en manquerait $15 - 7 = 8$ pour compléter une pile de plus.'
            },
            {
                quiz: { q: 'Un cinéma dispose de 240 fauteuils à installer par rangées de 35. Combien de rangées complètes peut-on former ?', a: '6' },
                options: '6 ¤ 7 ¤ 5 ¤ 30',
                explanation: '$240 = 35 \\times 6 + 30$. On peut former $6$ rangées complètes.'
            },
            {
                quiz: { q: 'Un cinéma dispose de 240 fauteuils à installer par rangées de 35. Combien de fauteuils ne rentrent pas dans une rangée complète ?', a: '30' },
                options: '30 ¤ 35 ¤ 6 ¤ 5',
                explanation: '$240 = 35 \\times 6 + 30$. Il reste $30$ fauteuils qui ne forment pas une rangée complète.'
            },
            {
                quiz: { q: 'Quelle égalité correspond à la division euclidienne de 91 par 10 ?', a: '91 = 10 × 9 + 1' },
                options: '91 = 10 × 9 + 1 ¤ 91 = 10 × 8 + 11 ¤ 91 = 10 × 9 - 1 ¤ 91 = 10 × 10 - 9',
                explanation: 'Le reste doit être strictement inférieur au diviseur, et l\'écriture doit être une <strong>somme</strong> (pas une différence). Seule $91 = 10 \\times 9 + 1$ respecte ces deux conditions.'
            },
            {
                quiz: { q: 'Quel est le reste de la division euclidienne de 162 par 14 ?', a: '8' },
                options: '8 ¤ 11 ¤ 6 ¤ 14',
                explanation: '$162 = 14 \\times 11 + 8$. Le reste est $8$.'
            },
            {
                quiz: { q: 'Un pâtissier a fabriqué 500 macarons qu\'il conditionne dans des boîtes de 23. Combien de boîtes peut-il remplir complètement ?', a: '21' },
                options: '21 ¤ 22 ¤ 20 ¤ 17',
                explanation: '$500 = 23 \\times 21 + 17$. Il peut remplir $21$ boîtes complètes.'
            }
        ],

        // 5EME - CHAPITRE 1 (Opérations) - TITRE H2 5 (Division euclidienne, multiples et diviseurs) - TITRE H3 1 (Multiples et diviseurs) - n° questionnaire

        

"51431": [
            {
                quiz: { q: 'On sait que $28 = 7 \\times 4$. Que peut-on dire de 28 par rapport à 7 ?', a: '28 est un multiple de 7' },
                options: '28 est un multiple de 7 ¤ 28 est un diviseur de 7 ¤ 7 est un multiple de 28 ¤ 28 n\'a aucun lien avec 7',
                explanation: 'Puisque $28 = 7 \\times 4$ (un nombre entier de fois $7$), on dit que $28$ est un <strong>multiple</strong> de $7$.'
            },
            {
                quiz: { q: 'On sait que $28 = 7 \\times 4$. Que peut-on dire de 7 par rapport à 28 ?', a: '7 est un diviseur de 28' },
                options: '7 est un diviseur de 28 ¤ 7 est un multiple de 28 ¤ 28 est un diviseur de 7 ¤ 4 est un diviseur de 7',
                explanation: 'Puisque $28 \\div 7$ tombe juste (le reste est nul), on dit que $7$ est un <strong>diviseur</strong> de $28$.'
            },
            {
                quiz: { q: 'Pourquoi peut-on dire que 5 est un diviseur de 45 ?', a: 'Car 45 = 5 × 9, sans reste' },
                options: 'Car 45 = 5 × 9, sans reste ¤ Car 45 + 5 = 50 ¤ Car 5 est plus petit que 45 ¤ Car 45 est un nombre impair',
                explanation: '$5$ est un diviseur de $45$ car la division $45 \\div 5 = 9$ tombe juste, <strong>sans reste</strong> : $45 = 5 \\times 9$.'
            },
            {
                quiz: { q: 'Que peut-on dire de 60 par rapport à 8 ?', a: '60 n\'est pas un multiple de 8' },
                options: '60 est un multiple de 8 ¤ 60 est un diviseur de 8 ¤ 60 n\'est pas un multiple de 8 ¤ 8 est un multiple de 60',
                explanation: '$60 = 8 \\times 7 + 4$ : la division de $60$ par $8$ laisse un reste de $4$ (différent de $0$), donc $60$ n\'est <strong>pas</strong> un multiple de $8$.'
            },
            
            {
                quiz: { q: 'Si $a$ est un multiple de $b$, que peut-on dire de $b$ par rapport à $a$ ?', a: 'b est un diviseur de a' },
                options: 'b est un diviseur de a ¤ b est un multiple de a ¤ a et b sont forcément égaux ¤ b est toujours plus grand que a',
                explanation: '« $a$ est un multiple de $b$ » et « $b$ est un diviseur de $a$ » décrivent exactement la <strong>même situation</strong>, vue sous deux angles différents.'
            },
            {
                quiz: { q: '36 est un multiple de 9. Quelle autre phrase est également vraie ?', a: '9 est un diviseur de 36' },
                options: '9 est un diviseur de 36 ¤ 36 est un diviseur de 9 ¤ 9 est un multiple de 36 ¤ 36 n\'a pas de lien avec 9',
                explanation: 'Si $36$ est un multiple de $9$, alors, de façon équivalente, $9$ est un <strong>diviseur</strong> de $36$.'
            },
            {
                quiz: { q: 'Tout nombre entier est-il un multiple de 1 ?', a: 'Oui, car n = 1 × n pour tout nombre n' },
                options: 'Oui, car n = 1 × n pour tout nombre n ¤ Non, seuls les nombres pairs le sont ¤ Non, seul le nombre 1 est concerné ¤ Oui, mais seulement pour les nombres impairs',
                explanation: 'Pour <strong>tout</strong> nombre entier $n$, on peut écrire $n = 1 \\times n$ : $1$ est donc un diviseur de tous les nombres entiers, et tout nombre entier est un multiple de $1$.'
            },
        ],

 "51432": [
        {
                quiz: { q: 'Quelle est la liste complète des diviseurs de 18 ?', a: '1 ; 2 ; 3 ; 6 ; 9 ; 18' },
                options: '1 ; 2 ; 3 ; 6 ; 9 ; 18 ¤ 1 ; 2 ; 3 ; 6 ; 18 ¤ 1 ; 2 ; 3 ; 9 ; 18 ¤ 1 ; 3 ; 6 ; 9 ; 18',
                explanation: 'Les diviseurs de $18$ sont tous les nombres qui le divisent exactement : $1, 2, 3, 6, 9$ et $18$ (on a oublié $9$ ou $6$ dans les autres listes).'
            },
            {
                quiz: { q: 'Quelle est la liste complète des diviseurs de 20 ?', a: '1 ; 2 ; 4 ; 5 ; 10 ; 20' },
                options: '1 ; 2 ; 4 ; 5 ; 10 ; 20 ¤ 1 ; 2 ; 4 ; 10 ; 20 ¤ 1 ; 2 ; 5 ; 10 ; 20 ¤ 1 ; 4 ; 5 ; 10 ; 20',
                explanation: 'Les diviseurs de $20$ sont $1, 2, 4, 5, 10$ et $20$.'
            },
            {
                quiz: { q: 'Combien 24 a-t-il de diviseurs au total ?', a: '8' },
                options: '8 ¤ 6 ¤ 7 ¤ 9',
                explanation: 'Les diviseurs de $24$ sont $1, 2, 3, 4, 6, 8, 12, 24$ : cela fait $8$ diviseurs en tout.'
            },
            {
                quiz: { q: 'Quelle est la liste complète des diviseurs de 30 ?', a: '1 ; 2 ; 3 ; 5 ; 6 ; 10 ; 15 ; 30' },
                options: '1 ; 2 ; 3 ; 5 ; 6 ; 10 ; 15 ; 30 ¤ 1 ; 2 ; 3 ; 5 ; 6 ; 15 ; 30 ¤ 1 ; 2 ; 3 ; 5 ; 10 ; 15 ; 30 ¤ 1 ; 3 ; 5 ; 6 ; 10 ; 15 ; 30',
                explanation: 'Les diviseurs de $30$ sont $1, 2, 3, 5, 6, 10, 15$ et $30$.'
            },
            {
                quiz: { q: 'Parmi les nombres suivants, lequel n\'est PAS un diviseur de 36 ?', a: '8' },
                options: '8 ¤ 9 ¤ 12 ¤ 6',
                explanation: 'Les diviseurs de $36$ sont $1, 2, 3, 4, 6, 9, 12, 18, 36$. Le nombre $8$ n\'en fait pas partie ($36 \\div 8$ ne tombe pas juste).'
            }
        ],

// Questionnaire criteres de divisibilité.
"51501":[ 
            {
                quiz: { q: 'Parmi ces affirmations, laquelle est vraie ?', a: '3 est un diviseur de 51' },
                options: '3 est un diviseur de 51 ¤ 3 est un diviseur de 50 ¤ 5 est un diviseur de 51 ¤ 6 est un diviseur de 51',
                explanation: '$51 = 3 \\times 17$ : la division tombe juste, donc $3$ est bien un diviseur de $51$. Ce n\'est le cas d\'aucune des trois autres propositions.'
            },
            { quiz: { q: 'Parmi les nombres suivants, lequel est divisible par $2$ ?', a: '348' },
              options: '348 ¤ 351 ¤ 425 ¤ 517',
              explanation: 'Un nombre est divisible par $2$ si son chiffre des unités est $0$, $2$, $4$, $6$ ou $8$. $348$ se termine par $8$, donc il est <strong>divisible par $2$</strong>.'
            },
            {
                quiz: { q: 'Parmi les nombres suivants, lequel est divisible par $5$ ?', a: '735' },
                options: '732 ¤ 735 ¤ 738 ¤ 743',
                explanation: 'Un nombre est divisible par $5$ si son chiffre des unités est $0$ ou $5$. $735$ se termine par $5$, donc il est <strong>divisible par $5$</strong>.'
            },
            { quiz: { q: 'Parmi les nombres suivants, lequel est divisible par $10$ ?', a: '1 240' },
             options: '1 235 ¤ 1 238 ¤ 1 240 ¤ 1 245', 
             explanation: 'Un nombre est divisible par $10$ si son chiffre des unités est $0$. $1\\,240$ se termine par $0$, donc il est <strong>divisible par $10</strong>.' 
            },
            { quiz: { q: 'Le nombre $327$ est-il divisible par $3$ ?', a: 'Oui' }, options: 'Oui ¤ Non', explanation: 'On additionne les chiffres : $3 + 2 + 7 = 12$. Comme $12$ est un multiple de $3$, $327$ est <strong>divisible par $3</strong>.' },
            { quiz: { q: 'Le nombre $738$ est-il divisible par $9$ ?', a: 'Oui' }, options: 'Oui ¤ Non', explanation: 'On additionne les chiffres : $7 + 3 + 8 = 18$. Comme $18$ est un multiple de $9$, $738$ est <strong>divisible par $9</strong>.' },
            { quiz: { q: 'Parmi $2, 3, 5, 9$ et $10$, quels sont les diviseurs de $450$ ?', a: '2, 3, 5, 9 et 10' }, options: '2 et 5 ¤ 2, 5 et 10 ¤ 2, 3, 5, 9 et 10 ¤ 3 et 9', explanation: '$450$ se termine par $0$, donc il est divisible par $2$, $5$ et $10$. La somme de ses chiffres vaut $4 + 5 + 0 = 9$, donc il est aussi divisible par $3$ et par $9$. Ainsi, <strong>les cinq nombres</strong> $2, 3, 5, 9$ et $10$ sont des diviseurs de $450$.' },
            { quiz: { q: 'Lequel de ces nombres est divisible par $3$ mais pas par $9$ ?', a: '123' }, options: '123 ¤ 126 ¤ 135 ¤ 144', explanation: 'Pour $123$, la somme des chiffres est $1 + 2 + 3 = 6$. $6$ est un multiple de $3$, mais pas de $9$. Donc $123$ est <strong>divisible par $3$ mais pas par $9</strong>.' },
            { quiz: { q: 'Quel chiffre peut remplacer le symbole $\\square$ pour que $4\\square 2$ soit divisible par $3$ ?', a: '3' }, options: '1 ¤ 2 ¤ 3 ¤ 5', explanation: 'La somme des chiffres doit être un multiple de $3$. On cherche donc $4 + \\square + 2 = 6 + \\square$. Avec $\\square = 3$, on obtient $9$, qui est un multiple de $3$. Le nombre $432$ est donc divisible par $3$.' },
            { quiz: { q: 'Parmi les nombres suivants, lequel est divisible à la fois par $2$ et par $5$ ?', a: '670' }, options: '672 ¤ 675 ¤ 670 ¤ 673', explanation: 'Un nombre divisible à la fois par $2$ et par $5$ est divisible par $10$. Il doit donc se terminer par $0$. Seul $670$ se termine par $0$ : il est <strong>divisible par $2$ et par $5</strong>.' },
            { quiz: { q: 'Parmi $2, 3, 5, 9$ et $10$, quels sont les diviseurs de $1\\,234$ ?', a: '2' }, options: '2 ¤ 3 ¤ 2 et 3 ¤ 2, 5 et 10', explanation: '$1\\,234$ se termine par $4$, donc il est divisible par $2$. La somme de ses chiffres vaut $1 + 2 + 3 + 4 = 10$, qui n\'est pas un multiple de $3$ ni de $9$. Le nombre ne se termine ni par $0$ ni par $5$, donc il n\'est divisible ni par $5 ni par $10$. <strong>Le seul diviseur de la liste est donc $2$.</strong>'}
        ],
// questionnaire multiples diviseurs niveau 2 "aller plus loin" à rajoutter avec mention fais la liste des diviseurs des deux nombres du problèmes pour pouvoir répondre.
"51502":[
            {
                quiz: { q: 'Quels sont tous les diviseurs communs à 12 et 18 ?', a: '1 ; 2 ; 3 ; 6' },
                options: '1 ; 2 ; 3 ; 6 ¤ 1 ; 2 ; 3 ¤ 1 ; 2 ; 3 ; 6 ; 9 ¤ 1 ; 3 ; 6 ; 9',
                explanation: 'Diviseurs de $12$ : $1,2,3,4,6,12$. Diviseurs de $18$ : $1,2,3,6,9,18$. Les diviseurs <strong>communs</strong> aux deux listes sont $1, 2, 3$ et $6$.'
            },
            {
                quiz: { q: 'Quel est le plus grand diviseur commun à 12 et 18 ?', a: '6' },
                options: '6 ¤ 3 ¤ 2 ¤ 36',
                explanation: 'Parmi les diviseurs communs à $12$ et $18$ ($1, 2, 3, 6$), le plus grand est $6$.'
            },
            {
                quiz: { q: 'Un jardinier veut répartir 24 tulipes et 36 roses dans des bouquets identiques (même nombre de tulipes et même nombre de roses dans chaque bouquet), sans qu\'il n\'en reste. Quel est le nombre maximal de bouquets qu\'il peut réaliser ?', a: '12' },
                options: '12 ¤ 6 ¤ 4 ¤ 24',
                explanation: 'Il faut trouver le plus grand diviseur commun à $24$ et $36$. C\'est $12$ (on vérifie : $24 = 12 \\times 2$ et $36 = 12 \\times 3$).'
            },
            {
                quiz: { q: 'Une couturière dispose de 45 boutons rouges et 75 boutons bleus. Elle veut préparer des sachets identiques contenant chacun le même nombre de boutons rouges et le même nombre de boutons bleus, sans qu\'il n\'en reste. Quel est le nombre maximal de sachets qu\'elle peut préparer ?', a: '15' },
                options: '15 ¤ 5 ¤ 9 ¤ 45',
                explanation: 'Il faut trouver le plus grand diviseur commun à $45$ et $75$. C\'est $15$ (on vérifie : $45 = 15 \\times 3$ et $75 = 15 \\times 5$).'
            },
            {
                quiz: { q: 'Un professeur a 56 crayons et 84 gommes à répartir équitablement entre plusieurs élèves, sans qu\'il ne reste ni crayon ni gomme. Quel est le nombre maximal d\'élèves qu\'il peut servir ?', a: '28' },
                options: '28 ¤ 14 ¤ 7 ¤ 56',
                explanation: 'Il faut trouver le plus grand diviseur commun à $56$ et $84$. C\'est $28$ (on vérifie : $56 = 28 \\times 2$ et $84 = 28 \\times 3$).'
            },
            {
                quiz: { q: 'On veut carreler une pièce rectangulaire de 72 cm sur 90 cm avec des carreaux carrés identiques, sans aucune découpe. Quelle est la plus grande taille possible (en cm) pour le côté de ces carreaux ?', a: '18' },
                options: '18 ¤ 9 ¤ 6 ¤ 36',
                explanation: 'Il faut trouver le plus grand diviseur commun à $72$ et $90$. C\'est $18$ (on vérifie : $72 = 18 \\times 4$ et $90 = 18 \\times 5$).'
            },
            {
                quiz: { q: 'Un boulanger a préparé 84 croissants et 98 pains au chocolat. Il veut composer des plateaux identiques contenant le même nombre de croissants et le même nombre de pains au chocolat, sans qu\'il n\'en reste. Quel est le nombre maximal de plateaux qu\'il peut composer ?', a: '14' },
                options: '14 ¤ 7 ¤ 28 ¤ 84',
                explanation: 'Il faut trouver le plus grand diviseur commun à $84$ et $98$. C\'est $14$ (on vérifie : $84 = 14 \\times 6$ et $98 = 14 \\times 7$).'
            }
        ],

// ------------------------------------------------------------
// 5EME - CHAPITRE 8 (Transformations)
// 58102 : Bilan général - La symétrie axiale (20 questions)
// ------------------------------------------------------------
"58102": [
            {
                quiz: { q: 'Deux points $M$ et $M\'$ sont symétriques par rapport à une droite $(d)$ lorsque...', a: '(d) est la médiatrice du segment [MM\']' },
                options: '(d) est la médiatrice du segment [MM\'] ¤ (d) passe par le milieu de [MM\'] sans forcément lui être perpendiculaire ¤ (d) est parallèle à la droite (MM\') ¤ M et M\' sont à la même distance d\'un point de (d), sans autre condition',
                explanation: 'Être symétriques par rapport à (d) signifie que (d) passe par le milieu de [MM\'] ET qu\'elle lui est perpendiculaire : c\'est exactement la définition de la <strong>médiatrice</strong> de [MM\'].'
            },
            {
                quiz: { q: 'Si $M$ et $M\'$ sont symétriques par rapport à une droite $(d)$, alors la droite $(MM\')$ est...', a: 'perpendiculaire à (d)' },
                options: 'perpendiculaire à (d) ¤ parallèle à (d) ¤ confondue avec (d) ¤ sécante à (d) sans angle particulier',
                explanation: 'Par définition de la symétrie axiale, le segment qui relie un point à son image est toujours <strong>perpendiculaire</strong> à l\'axe.'
            },
            {
                quiz: { q: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" style="max-width:180px; display:block; margin:8px auto; font-family:sans-serif;"> <polygon points="70,25 130,25 165,105 35,105" fill="#3333ff" fill-opacity="0.12" stroke="#2E5C8A" stroke-width="2.5"/> </svg><p style="margin-top:8px;">Combien d\'axes de symétrie possède ce trapèze isocèle ?</p>', a: '1' },
                options: '0 ¤ 1 ¤ 2 ¤ 4',
                explanation: 'Un trapèze isocèle (non rectangle) possède un unique axe de symétrie : la droite qui passe par les milieux de ses deux bases.<div style="display:flex; flex-wrap:wrap; gap:16px; justify-content:center; margin-top:10px;"><div style="text-align:center;"><svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" style="max-width:150px; display:block; margin:auto;"><polygon points="70,25 130,25 165,105 35,105" fill="#3333ff" fill-opacity="0.12" stroke="#2E5C8A" stroke-width="2.5"/><line x1="100" y1="12" x2="100" y2="118" stroke="#2e8b57" stroke-width="2" stroke-dasharray="5 4"/><text x="104" y="22" font-size="12" font-family="sans-serif" fill="#2e8b57">(d)</text></svg><span style="color:#2e8b57; font-size:0.9em;">✔ axe vertical passant par les milieux des deux bases</span></div><div style="text-align:center;"><svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" style="max-width:150px; display:block; margin:auto;"><line x1="15" y1="65" x2="185" y2="65" stroke="#c0392b" stroke-width="2" stroke-dasharray="6 5"/><polygon points="70,25 130,25 165,105 35,105" fill="#3333ff" fill-opacity="0.12" stroke="#2E5C8A" stroke-width="2.5"/><polygon points="70,105 130,105 165,25 35,25" fill="#c0392b" fill-opacity="0.15" stroke="#c0392b" stroke-width="2" stroke-dasharray="4 4"/></svg><span style="color:#c0392b; font-size:0.9em;">✘ un axe horizontal ne fonctionne pas : le symétrique (en rouge) ne coïncide pas avec le trapèze</span></div></div>'
            },
            {
                quiz: { q: 'Un cercle possède...', a: 'une infinité d\'axes de symétrie' },
                options: 'une infinité d\'axes de symétrie ¤ un seul axe de symétrie ¤ aucun axe de symétrie ¤ exactement quatre axes de symétrie',
                explanation: 'Toute droite passant par le centre d\'un cercle est un axe de symétrie : un cercle possède donc une <strong>infinité</strong> d\'axes de symétrie.'
            },
            {
                quiz: { q: 'La symétrie axiale conserve toujours...', a: 'les longueurs, les angles et les aires' },
                options: 'les longueurs, les angles et les aires ¤ les longueurs mais jamais les angles ¤ les angles mais jamais les longueurs ¤ aucune de ces grandeurs',
                explanation: 'La symétrie axiale est une <strong>isométrie</strong> : elle conserve les longueurs, les angles et donc les aires des figures.'
            },
            {
                quiz: { q: '<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" style="max-width:280px; display:block; margin:8px auto; font-family:sans-serif;"> <line x1="0" y1="0" x2="0" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="20" y1="0" x2="20" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="40" y1="0" x2="40" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="60" y1="0" x2="60" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="80" y1="0" x2="80" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="100" y1="0" x2="100" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="120" y1="0" x2="120" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="140" y1="0" x2="140" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="160" y1="0" x2="160" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="180" y1="0" x2="180" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="200" y1="0" x2="200" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="220" y1="0" x2="220" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="240" y1="0" x2="240" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="260" y1="0" x2="260" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="0" x2="260" y2="0" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="20" x2="260" y2="20" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="40" x2="260" y2="40" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="60" x2="260" y2="60" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="80" x2="260" y2="80" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="100" x2="260" y2="100" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="120" x2="260" y2="120" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="140" x2="260" y2="140" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="160" x2="260" y2="160" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="180" x2="260" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="140" y1="8" x2="140" y2="172" stroke="#C0392B" stroke-width="2.5"/> <text x="146" y="20" font-size="13" fill="#C0392B" font-weight="bold">(d)</text> <circle cx="60" cy="90" r="4" fill="#2E5C8A"/> <text x="44" y="84" font-size="14" fill="#2E5C8A" font-weight="bold">A</text> <circle cx="220" cy="90" r="4" fill="#333"/> <text x="228" y="84" font-size="14" fill="#333" font-weight="bold">a</text> <circle cx="220" cy="50" r="4" fill="#333"/> <text x="228" y="44" font-size="14" fill="#333" font-weight="bold">b</text> <circle cx="180" cy="90" r="4" fill="#333"/> <text x="188" y="104" font-size="14" fill="#333" font-weight="bold">c</text> </svg><p style="margin-top:8px;">Sur la figure, quel point est l\'image du point $A$ par la symétrie d\'axe $(d)$ ?</p>', a: 'Le point a' },
                options: 'Le point a ¤ Le point b ¤ Le point c',
                explanation: 'L\'image de A doit se trouver sur la perpendiculaire à (d) passant par A, à la même distance de (d) que A, mais de l\'autre côté : c\'est le <strong>point a</strong>.'
            },
            {
                quiz: { q: 'Pour construire le symétrique d\'un point à l\'équerre, on trace d\'abord...', a: 'la perpendiculaire à (d) passant par ce point' },
                options: 'la perpendiculaire à (d) passant par ce point ¤ une droite parallèle à (d) ¤ un cercle centré sur (d) ¤ la médiatrice d\'un segment quelconque',
                explanation: 'La méthode à l\'équerre commence toujours par tracer la <strong>perpendiculaire</strong> à l\'axe passant par le point, avant de reporter la longueur de l\'autre côté.'
            },
            {
                quiz: { q: 'Pour construire au compas le symétrique d\'un point $A$ par rapport à $(d)$, on trace...', a: 'deux arcs de cercle centrés sur deux points de (d), passant par A' },
                options: 'deux arcs de cercle centrés sur deux points de (d), passant par A ¤ un seul arc de cercle centré en A ¤ une droite parallèle à (d) passant par A ¤ un arc de cercle centré au milieu de (d)',
                explanation: 'On place deux points sur (d), on trace un arc de cercle passant par A depuis chacun d\'eux : leur seconde intersection donne le <strong>symétrique</strong> de A.'
            },
            {
                quiz: { q: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" style="max-width:170px; display:block; margin:8px auto; font-family:sans-serif;"> <rect x="40" y="20" width="120" height="20" fill="#2E5C8A"/> <rect x="90" y="20" width="20" height="100" fill="#2E5C8A"/> </svg><p style="margin-top:8px;">Quel est l\'axe de symétrie de cette lettre $T$ majuscule ?</p>', a: 'Un axe vertical' },
                options: 'Un axe vertical ¤ Un axe horizontal ¤ Deux axes (vertical et horizontal) ¤ Cette lettre n\'a aucun axe de symétrie',
                explanation: 'La lettre T (dans une police simple) se replie parfaitement sur elle-même le long d\'un <strong>axe vertical</strong>, mais pas le long d\'un axe horizontal.<div style="display:flex; flex-wrap:wrap; gap:16px; justify-content:center; margin-top:10px;"><div style="text-align:center;"><svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" style="max-width:150px; display:block; margin:auto;"><rect x="40" y="20" width="120" height="20" fill="#2E5C8A"/><rect x="90" y="20" width="20" height="100" fill="#2E5C8A"/><line x1="100" y1="8" x2="100" y2="130" stroke="#2e8b57" stroke-width="2" stroke-dasharray="5 4"/><text x="104" y="20" font-size="12" font-family="sans-serif" fill="#2e8b57">(d)</text></svg><span style="color:#2e8b57; font-size:0.9em;">✔ axe vertical : les deux moitiés se superposent</span></div><div style="text-align:center;"><svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" style="max-width:150px; display:block; margin:auto;"><rect x="40" y="20" width="120" height="20" fill="#2E5C8A"/><rect x="90" y="20" width="20" height="100" fill="#2E5C8A"/><rect x="40" y="100" width="120" height="20" fill="none" stroke="#c0392b" stroke-width="2" stroke-dasharray="4 3"/><line x1="15" y1="70" x2="185" y2="70" stroke="#c0392b" stroke-width="2" stroke-dasharray="5 4"/></svg><span style="color:#c0392b; font-size:0.9em;">✘ axe horizontal : la barre se retrouverait en bas (pointillés rouges), ce qui ne correspond pas au T</span></div></div>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 400 340" xmlns="http://www.w3.org/2000/svg" style="max-width:200px; display:block; margin:8px auto;"><polygon points="110,260 200,40 290,260" fill="#3333ff" fill-opacity="0.1" stroke="#3333ff" stroke-width="3" stroke-linejoin="round"/><circle cx="110" cy="260" r="4" fill="#3333ff"/><circle cx="200" cy="40" r="4" fill="#3333ff"/><circle cx="290" cy="260" r="4" fill="#3333ff"/><text x="90" y="282" font-size="20" font-family="sans-serif" fill="#222">A</text><text x="192" y="28" font-size="20" font-family="sans-serif" fill="#222">B</text><text x="298" y="282" font-size="20" font-family="sans-serif" fill="#222">C</text></svg><p style="margin-top:8px;">Un triangle isocèle non équilatéral possède...</p>', a: 'exactement un axe de symétrie' },
                options: 'exactement un axe de symétrie ¤ aucun axe de symétrie ¤ exactement deux axes de symétrie ¤ exactement trois axes de symétrie',
                explanation: 'L\'axe de symétrie d\'un triangle isocèle est la <strong>médiatrice de sa base</strong>, qui passe aussi par le sommet principal.<div style="display:flex; flex-wrap:wrap; gap:16px; justify-content:center; margin-top:10px;"><div style="text-align:center;"><svg viewBox="0 0 400 340" xmlns="http://www.w3.org/2000/svg" style="max-width:170px; display:block; margin:auto;"><line x1="200" y1="15" x2="200" y2="300" stroke="#2e8b57" stroke-width="2.5" stroke-dasharray="8 6"/><polygon points="110,260 200,40 290,260" fill="#3333ff" fill-opacity="0.1" stroke="#3333ff" stroke-width="3" stroke-linejoin="round"/><circle cx="110" cy="260" r="4" fill="#3333ff"/><circle cx="200" cy="40" r="4" fill="#3333ff"/><circle cx="290" cy="260" r="4" fill="#3333ff"/><text x="90" y="282" font-size="20" font-family="sans-serif" fill="#222">A</text><text x="192" y="28" font-size="20" font-family="sans-serif" fill="#222">B</text><text x="298" y="282" font-size="20" font-family="sans-serif" fill="#222">C</text><text x="206" y="13" font-size="15" font-family="sans-serif" fill="#2e8b57">(d)</text></svg><span style="color:#2e8b57; font-size:0.9em;">✔ axe passant par le sommet et le milieu de la base : le triangle se superpose parfaitement</span></div><div style="text-align:center;"><svg viewBox="0 0 400 340" xmlns="http://www.w3.org/2000/svg" style="max-width:170px; display:block; margin:auto;"><line x1="0" y1="86.6" x2="400" y2="250.2" stroke="#c0392b" stroke-width="2.5" stroke-dasharray="8 6"/><polygon points="110,260 200,40 290,260" fill="#3333ff" fill-opacity="0.1" stroke="#3333ff" stroke-width="3" stroke-linejoin="round"/><polygon points="200,40 110,260 328.4,166.2" fill="#c0392b" fill-opacity="0.12" stroke="#c0392b" stroke-width="2.5" stroke-linejoin="round" stroke-dasharray="4 4"/><circle cx="110" cy="260" r="4" fill="#3333ff"/><circle cx="200" cy="40" r="4" fill="#3333ff"/><circle cx="290" cy="260" r="4" fill="#3333ff"/><text x="90" y="282" font-size="20" font-family="sans-serif" fill="#222">A</text><text x="192" y="28" font-size="20" font-family="sans-serif" fill="#222">B</text><text x="298" y="282" font-size="20" font-family="sans-serif" fill="#222">C</text><text x="332" y="170" font-size="14" font-family="sans-serif" fill="#c0392b">C\'</text></svg><span style="color:#c0392b; font-size:0.9em;">✘ axe perpendiculaire à un autre côté : le symétrique (en rouge) ne coïncide pas avec le triangle initial</span></div></div>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width:200px; display:block; margin:8px auto;"><polygon points="100,260 200,86.8 300,260" fill="#3333ff" fill-opacity="0.1" stroke="#3333ff" stroke-width="3" stroke-linejoin="round"/></svg><p style="margin-top:8px;">Un triangle équilatéral possède...</p>', a: 'trois axes de symétrie' },
                options: 'trois axes de symétrie ¤ un seul axe de symétrie ¤ aucun axe de symétrie ¤ une infinité d\'axes de symétrie',
                explanation: 'Chaque médiatrice d\'un côté d\'un triangle équilatéral est un axe de symétrie : il y en a donc <strong>trois</strong>, et elles se coupent toutes au même point (le centre du triangle).<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width:200px; display:block; margin:10px auto;"><polygon points="100,260 200,86.8 300,260" fill="#3333ff" fill-opacity="0.1" stroke="#3333ff" stroke-width="3" stroke-linejoin="round"/><line x1="200" y1="70" x2="200" y2="280" stroke="#2e8b57" stroke-width="2" stroke-dasharray="7 5"/><line x1="82.68" y1="270" x2="267.32" y2="163.4" stroke="#2e8b57" stroke-width="2" stroke-dasharray="7 5"/><line x1="317.32" y1="270" x2="132.68" y2="163.4" stroke="#2e8b57" stroke-width="2" stroke-dasharray="7 5"/></svg>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" style="max-width:200px; display:block; margin:8px auto;"><rect x="100" y="40" width="200" height="200" fill="#3333ff" fill-opacity="0.1" stroke="#3333ff" stroke-width="3"/></svg><p style="margin-top:8px;">Un carré possède...</p>', a: 'quatre axes de symétrie' },
                options: 'quatre axes de symétrie ¤ deux axes de symétrie ¤ un seul axe de symétrie ¤ aucun axe de symétrie',
                explanation: 'Un carré possède <strong>quatre</strong> axes de symétrie : ses deux diagonales et les deux droites qui passent par les milieux de ses côtés opposés.<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" style="max-width:200px; display:block; margin:10px auto;"><rect x="100" y="40" width="200" height="200" fill="#3333ff" fill-opacity="0.1" stroke="#3333ff" stroke-width="3"/><line x1="200" y1="20" x2="200" y2="260" stroke="#2e8b57" stroke-width="2" stroke-dasharray="7 5"/><line x1="80" y1="140" x2="320" y2="140" stroke="#2e8b57" stroke-width="2" stroke-dasharray="7 5"/><line x1="100" y1="40" x2="300" y2="240" stroke="#2e8b57" stroke-width="2" stroke-dasharray="7 5"/><line x1="300" y1="40" x2="100" y2="240" stroke="#2e8b57" stroke-width="2" stroke-dasharray="7 5"/></svg>'
            },
            {
                quiz: { q: 'Si deux segments sont symétriques par rapport à un axe, alors...', a: 'ils ont la même longueur' },
                options: 'ils ont la même longueur ¤ ils sont nécessairement perpendiculaires entre eux ¤ ils sont nécessairement parallèles entre eux ¤ ils se coupent toujours sur l\'axe',
                explanation: 'La symétrie axiale conserve les longueurs : deux segments symétriques ont toujours la <strong>même longueur</strong>, mais ils ne sont pas forcément parallèles ni perpendiculaires entre eux.<div style="display:flex; flex-wrap:wrap; gap:16px; justify-content:center; margin-top:10px;"><div style="text-align:center;"><svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width:170px; display:block; margin:auto;"><line x1="200" y1="20" x2="200" y2="280" stroke="#888" stroke-width="2" stroke-dasharray="6 5"/><line x1="80" y1="80" x2="150" y2="220" stroke="#3333ff" stroke-width="3"/><line x1="320" y1="80" x2="250" y2="220" stroke="#c0392b" stroke-width="3"/><text x="205" y="18" font-size="13" font-family="sans-serif" fill="#555">(d)</text></svg><span style="font-size:0.9em;">Ici, les deux segments symétriques ne sont <strong>pas parallèles</strong>.</span></div><div style="text-align:center;"><svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width:170px; display:block; margin:auto;"><line x1="200" y1="20" x2="200" y2="280" stroke="#888" stroke-width="2" stroke-dasharray="6 5"/><line x1="100" y1="100" x2="100" y2="180" stroke="#3333ff" stroke-width="3"/><line x1="300" y1="100" x2="300" y2="180" stroke="#c0392b" stroke-width="3"/><text x="205" y="18" font-size="13" font-family="sans-serif" fill="#555">(d)</text></svg><span style="font-size:0.9em;">Ici, ni le segment ni son symétrique ne <strong>touchent l\'axe</strong>.</span></div></div>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="max-width:200px; display:block; margin:8px auto;"><line x1="200" y1="20" x2="200" y2="180" stroke="#c0392b" stroke-width="2" stroke-dasharray="6 5"/><text x="206" y="18" font-size="14" font-family="sans-serif" fill="#c0392b">(d)</text><circle cx="200" cy="100" r="5" fill="#3333ff"/><text x="212" y="95" font-size="18" font-family="sans-serif" fill="#222">M</text></svg><p style="margin-top:8px;">Le symétrique d\'un point situé exactement sur l\'axe $(d)$ est...</p>', a: 'ce point lui-même' },
                options: 'ce point lui-même ¤ un point différent, situé de l\'autre côté de (d) ¤ impossible à déterminer ¤ toujours le milieu de (d)',
                explanation: 'Un point de l\'axe est à distance nulle de (d) : son symétrique est donc aussi à une distance nulle de l\'axe : <strong>lui-même</strong>. (Si on plie la feuille le long de l\'axe il ne bougera pas.) <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="max-width:200px; display:block; margin:10px auto;"><line x1="200" y1="20" x2="200" y2="180" stroke="#c0392b" stroke-width="2" stroke-dasharray="6 5"/><text x="206" y="18" font-size="14" font-family="sans-serif" fill="#c0392b">(d)</text><circle cx="200" cy="100" r="10" fill="none" stroke="#2e8b57" stroke-width="2" stroke-dasharray="3 3"/><circle cx="200" cy="100" r="5" fill="#3333ff"/><text x="212" y="95" font-size="18" font-family="sans-serif" fill="#222">M = M\'</text></svg>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 500 195" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; width:480px; display:block; margin:8px auto; font-family:sans-serif;"> <rect x="0" y="0" width="160" height="195" fill="none" stroke="#333" stroke-width="1.5"/> <rect x="0" y="0" width="160" height="25" fill="#E08E2B"/> <text x="75" y="18" font-size="15" fill="#fff" font-weight="bold">a</text> <line x1="80" y1="30" x2="80" y2="185" stroke="#C0392B" stroke-width="2"/> <polygon points="20,150 50,150 20,110" fill="none" stroke="#2E5C8A" stroke-width="2"/> <polygon points="140,150 110,150 140,110" fill="none" stroke="#333" stroke-width="2"/> <rect x="170" y="0" width="160" height="195" fill="none" stroke="#333" stroke-width="1.5"/> <rect x="170" y="0" width="160" height="25" fill="#2E9BD6"/> <text x="245" y="18" font-size="15" fill="#fff" font-weight="bold">b</text> <line x1="250" y1="30" x2="250" y2="185" stroke="#C0392B" stroke-width="2"/> <polygon points="190,150 220,150 190,110" fill="none" stroke="#2E5C8A" stroke-width="2"/> <polygon points="310,175 280,175 310,135" fill="none" stroke="#333" stroke-width="2"/> <rect x="340" y="0" width="160" height="195" fill="none" stroke="#333" stroke-width="1.5"/> <rect x="340" y="0" width="160" height="25" fill="#9B59B6"/> <text x="415" y="18" font-size="15" fill="#fff" font-weight="bold">c</text> <line x1="420" y1="30" x2="420" y2="185" stroke="#C0392B" stroke-width="2"/> <polygon points="360,150 390,150 360,110" fill="none" stroke="#2E5C8A" stroke-width="2"/> <polygon points="460,150 490,150 460,110" fill="none" stroke="#333" stroke-width="2"/> </svg><p style="margin-top:8px;">Dans quel cas le triangle noir est-il bien l\'image du triangle bleu par la symétrie d\'axe rouge ?</p>', a: 'Cas a' },
                options: 'Cas a ¤ Cas b ¤ Cas c',
                explanation: 'Dans le cas a, chaque sommet et son image sont à la même distance de l\'axe, sur une perpendiculaire à celui-ci : la figure est correctement symétrisée. Dans le cas b, l\'image est décalée par rapport à la bonne perpendiculaire. Dans le cas c, la figure a simplement été <strong>translatée</strong> (elle n\'a pas été retournée).'
            },
            {
                quiz: { q: 'Deux figures symétriques par rapport à une droite sont...', a: 'superposables : elles ont la même forme et les mêmes dimensions' },
                options: 'superposables : elles ont la même forme et les mêmes dimensions ¤ parfaitement identiques ¤ de la même forme mais de tailles différentes ¤ perpendiculaires',
                explanation: 'Comme la symétrie axiale conserve les longueurs et les angles, les deux figures obtenues sont <strong>superposables</strong> (on dit aussi qu\'elles sont isométriques). Mais elles ne sont pas parfaitement identiques à cause de l\'effet miroir ! De plus ont dit que deux droites dont perpendiculaires mais jamais des figures entières.'
            },
            {
                quiz: { q: 'Dans une frise, un motif présente une symétrie axiale lorsqu\'il...', a: 'se replie parfaitement sur lui-même le long d\'une droite' },
                options: 'se replie parfaitement sur lui-même le long d\'une droite ¤ tourne d\'un demi-tour autour d\'un point sans changer d\'aspect ¤ se répète en glissant vers la droite ou la gauche ¤ change de couleur à chaque répétition',
                explanation: 'Une symétrie axiale correspond à un « effet miroir » : le motif se superpose à lui-même lorsqu\'on le <strong>replie</strong> le long d\'une droite.'
            },
            {
                quiz: { q: 'Pour vérifier qu\'une droite $(d)$ est bien un axe de symétrie d\'une figure, on peut...', a: 'plier la figure le long de (d) et vérifier qu\'elle se superpose parfaitement' },
                options: 'plier la figure le long de (d) et vérifier qu\'elle se superpose parfaitement ¤ faire tourner la figure d\'un demi-tour autour d\'un point de (d) ¤ mesurer uniquement la longueur des côtés de la figure ¤ vérifier que (d) passe par le centre de gravité de la figure',
                explanation: 'C\'est la définition même d\'un axe de symétrie : <strong>replier</strong> la figure le long de cette droite doit faire coïncider les deux moitiés.'
            },
            {
                quiz: { q: 'Sur un quadrillage, pour construire le symétrique d\'un point par rapport à un axe, on...', a: 'compte le nombre de carreaux jusqu\'à l\'axe, puis on reporte le même nombre de l\'autre côté sur la même ligne perpendiculaire' },
                options: 'compte le nombre de carreaux jusqu\'à l\'axe, puis on reporte le même nombre de l\'autre côté sur la même ligne perpendiculaire ¤ compte le nombre de carreaux jusqu\'à l\'axe, puis on reporte ce nombre le long de l\'axe ¤ trace un cercle centré sur le point ¤ additionne les coordonnées du point à celles de l\'axe',
                explanation: 'On suit une ligne perpendiculaire à l\'axe, on compte les carreaux qui séparent le point de l\'axe, puis on reporte ce même nombre de <strong>l\'autre côté</strong>.'
            },
            {
                quiz: { q: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" style="max-width:200px; display:block; margin:8px auto;"><rect x="60" y="60" width="280" height="160" fill="#3333ff" fill-opacity="0.1" stroke="#3333ff" stroke-width="3"/></svg><p style="margin-top:8px;">Un rectangle qui n\'est pas un carré possède...</p>', a: 'exactement deux axes de symétrie' },
                options: 'exactement deux axes de symétrie ¤ exactement quatre axes de symétrie ¤ un seul axe de symétrie ¤ aucun axe de symétrie',
                explanation: 'Un rectangle non carré possède <strong>deux</strong> axes de symétrie : les deux droites qui passent par les milieux de ses côtés opposés (ses diagonales, elles, ne sont pas des axes de symétrie).<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" style="max-width:190px; display:block; margin:10px auto;"><rect x="60" y="60" width="280" height="160" fill="#3333ff" fill-opacity="0.1" stroke="#3333ff" stroke-width="3"/><line x1="200" y1="30" x2="200" y2="250" stroke="#2e8b57" stroke-width="2.5" stroke-dasharray="8 6"/><line x1="30" y1="140" x2="370" y2="140" stroke="#2e8b57" stroke-width="2.5" stroke-dasharray="8 6"/></svg>'
            }
        ],

// ------------------------------------------------------------
// 58202 : Bilan général - La symétrie centrale (20 questions)
// ------------------------------------------------------------
// ------------------------------------------------------------
// 58202 : Bilan général - La symétrie centrale (20 questions)
// ------------------------------------------------------------
"58202": [
            {
                quiz: { q: '<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style="max-width:220px; display:block; margin:8px auto; font-family:sans-serif;"><circle cx="50" cy="170" r="4.5" fill="#2E5C8A"/><text x="34" y="164" font-size="15" fill="#2E5C8A" font-weight="bold">A</text><circle cx="150" cy="110" r="4.5" fill="#B5651D"/><text x="158" y="104" font-size="15" fill="#B5651D" font-weight="bold">O</text><circle cx="250" cy="50" r="4.5" fill="#2F7D3C"/><text x="258" y="44" font-size="15" fill="#2F7D3C" font-weight="bold">A\'</text></svg><p style="margin-top:8px;">Deux points $A$ et $A\'$ sont symétriques par rapport à un point $O$ lorsque...</p>', a: 'O est le milieu du segment [AA\']' },
                options: 'O est le milieu du segment [AA\'] ¤ O est équidistant de A et de A\', sans autre condition ¤ O appartient à la médiatrice de [AA\'] ¤ la droite (OA) est perpendiculaire à la droite (OA\')',
                explanation: 'La définition de la symétrie centrale est simple : $O$ doit être exactement le <strong>milieu</strong> du segment $[AA\']$. Attention, trois pièges classiques donnent une fausse impression de symétrie :<br><strong>1) Être seulement équidistant ne suffit pas</strong> — il faut aussi être aligné avec les deux points.<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg" style="max-width:230px; display:block; margin:8px auto; font-family:sans-serif;"><line x1="20" y1="170" x2="230" y2="170" stroke="#bbb" stroke-width="1.5" stroke-dasharray="6 5"/><line x1="140" y1="170" x2="160" y2="93" stroke="#2F7D3C" stroke-width="2.5"/><line x1="60" y1="170" x2="140" y2="170" stroke="#2E5C8A" stroke-width="2.5"/><circle cx="60" cy="170" r="4.5" fill="#2E5C8A"/><text x="46" y="186" font-size="14" fill="#2E5C8A" font-weight="bold">A</text><circle cx="140" cy="170" r="5" fill="#B5651D"/><text x="146" y="163" font-size="14" fill="#B5651D" font-weight="bold">O</text><circle cx="160" cy="93" r="4.5" fill="#2F7D3C"/><text x="168" y="90" font-size="14" fill="#2F7D3C" font-weight="bold">A\'\'</text><line x1="94" y1="164" x2="104" y2="176" stroke="#2E5C8A" stroke-width="2"/><line x1="146" y1="136" x2="156" y2="146" stroke="#2F7D3C" stroke-width="2"/></svg><p style="margin-top:4px;">Ici $OA = OA\'\'$ (les deux petits traits égaux), mais $A$, $O$ et $A\'\'$ ne sont <strong>pas alignés</strong> (la ligne pointillée montre où devrait se trouver le vrai symétrique) : $A\'\'$ n\'est donc pas l\'image de $A$.</p><strong>2) Être sur une perpendiculaire ne suffit pas</strong> — il faut aussi l\'égalité des longueurs.<svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg" style="max-width:200px; display:block; margin:8px auto; font-family:sans-serif;"><line x1="70" y1="150" x2="130" y2="150" stroke="#2E5C8A" stroke-width="2.5"/><line x1="130" y1="150" x2="130" y2="110" stroke="#2F7D3C" stroke-width="2.5"/><rect x="120" y="140" width="10" height="10" fill="none" stroke="#333" stroke-width="1.5"/><circle cx="70" cy="150" r="4.5" fill="#2E5C8A"/><text x="56" y="166" font-size="14" fill="#2E5C8A" font-weight="bold">A</text><circle cx="130" cy="150" r="5" fill="#B5651D"/><text x="136" y="142" font-size="14" fill="#B5651D" font-weight="bold">O</text><circle cx="130" cy="110" r="4.5" fill="#2F7D3C"/><text x="138" y="106" font-size="14" fill="#2F7D3C" font-weight="bold">A\'</text></svg><p style="margin-top:4px;">Ici $(OA) \\perp (OA\')$ (le petit carré marque l\'angle droit), mais $OA \\neq OA\'$ : $O$ n\'est pas le milieu de $[AA\']$.</p><strong>3) Être sur la médiatrice ne suffit pas</strong> — elle donne seulement $OA = OA\'$, pas l\'alignement.<svg viewBox="0 0 260 220" xmlns="http://www.w3.org/2000/svg" style="max-width:220px; display:block; margin:8px auto; font-family:sans-serif;"><line x1="130" y1="20" x2="130" y2="200" stroke="#2e8b57" stroke-width="2" stroke-dasharray="7 5"/><line x1="60" y1="150" x2="200" y2="150" stroke="#999" stroke-width="1.5"/><circle cx="60" cy="150" r="4.5" fill="#2E5C8A"/><text x="46" y="166" font-size="14" fill="#2E5C8A" font-weight="bold">A</text><circle cx="200" cy="150" r="4.5" fill="#2F7D3C"/><text x="206" y="166" font-size="14" fill="#2F7D3C" font-weight="bold">A\'</text><line x1="60" y1="150" x2="130" y2="60" stroke="#2E5C8A" stroke-width="1.5"/><line x1="200" y1="150" x2="130" y2="60" stroke="#2F7D3C" stroke-width="1.5"/><circle cx="130" cy="60" r="5" fill="#B5651D"/><text x="136" y="52" font-size="14" fill="#B5651D" font-weight="bold">O</text></svg><p style="margin-top:4px;">$O$ est bien sur la médiatrice de $[AA\']$ (donc $OA = OA\'$), mais $O$ n\'est pas sur la droite $(AA\')$ : ce n\'est pas le milieu de $[AA\']$.</p>'
            },
            {
                quiz: { q: 'La symétrie centrale est aussi appelée...', a: 'le demi-tour' },
                options: 'le demi-tour ¤ Symétrie d\'axe (d) ¤ une rotation d\'un quart de tour ¤ une rotation d\'un tour complet',
                explanation: 'On appelle aussi la symétrie centrale le <strong>demi-tour</strong>, car elle correspond à une rotation de 180° autour du centre.'
            },
            {
                quiz: { q: 'Un demi-tour correspond à une rotation de...', a: '180°' },
                options: '180° ¤ 90° ¤ 360° ¤ 270°',
                explanation: 'Un demi-tour, c\'est la moitié d\'un tour complet (360°), soit exactement <strong>180°</strong>.'
            },
            {
                quiz: { q: 'La symétrie centrale conserve...', a: 'les longueurs, les angles, le parallélisme et les aires' },
                options: 'les longueurs, les angles, le parallélisme et les aires ¤ uniquement les longueurs ¤ uniquement les angles ¤ aucune de ces grandeurs',
                explanation: 'La symétrie centrale conserve les longueurs, les angles, le <strong>parallélisme</strong> et donc les aires des figures.<svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:10px auto; font-family:sans-serif;"><polygon points="60,190 140,190 100,120" fill="#2E5C8A" fill-opacity="0.08" stroke="#2E5C8A" stroke-width="2.5"/><text x="48" y="206" font-size="14" fill="#2E5C8A" font-weight="bold">A</text><text x="146" y="206" font-size="14" fill="#2E5C8A" font-weight="bold">B</text><text x="100" y="112" font-size="14" fill="#2E5C8A" font-weight="bold">C</text><polygon points="340,90 260,90 300,160" fill="#2F7D3C" fill-opacity="0.08" stroke="#2F7D3C" stroke-width="2.5"/><text x="346" y="80" font-size="14" fill="#2F7D3C" font-weight="bold">A\'</text><text x="240" y="80" font-size="14" fill="#2F7D3C" font-weight="bold">B\'</text><text x="304" y="176" font-size="14" fill="#2F7D3C" font-weight="bold">C\'</text><circle cx="200" cy="140" r="5" fill="#B5651D"/><text x="206" y="132" font-size="14" fill="#B5651D" font-weight="bold">O</text><line x1="60" y1="190" x2="340" y2="90" stroke="#999" stroke-width="1.2" stroke-dasharray="4 4"/><line x1="140" y1="190" x2="260" y2="90" stroke="#999" stroke-width="1.2" stroke-dasharray="4 4"/><line x1="100" y1="120" x2="300" y2="160" stroke="#999" stroke-width="1.2" stroke-dasharray="4 4"/><line x1="95" y1="195" x2="105" y2="185" stroke="#2E5C8A" stroke-width="2"/><line x1="295" y1="95" x2="305" y2="85" stroke="#2F7D3C" stroke-width="2"/></svg>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg" style="max-width:220px; display:block; margin:8px auto; font-family:sans-serif;"> <text x="15" y="115" font-size="55" font-family="sans-serif" font-weight="bold" fill="#2E5C8A">R</text> <text x="15" y="115" font-size="55" font-family="sans-serif" font-weight="bold" fill="#2F7D3C" transform="rotate(180 110 70)">R</text> <line x1="104" y1="70" x2="116" y2="70" stroke="#333" stroke-width="2"/> <line x1="110" y1="64" x2="110" y2="76" stroke="#333" stroke-width="2"/> <text x="116" y="64" font-size="13" fill="#333" font-weight="bold">a</text> <line x1="84" y1="90" x2="96" y2="90" stroke="#333" stroke-width="2"/> <line x1="90" y1="84" x2="90" y2="96" stroke="#333" stroke-width="2"/> <text x="96" y="84" font-size="13" fill="#333" font-weight="bold">b</text> <line x1="124" y1="40" x2="136" y2="40" stroke="#333" stroke-width="2"/> <line x1="130" y1="34" x2="130" y2="46" stroke="#333" stroke-width="2"/> <text x="136" y="34" font-size="13" fill="#333" font-weight="bold">c</text> </svg><p style="margin-top:8px;">Quel est le point qui est le centre de symétrie entre la lettre R bleue et son image verte ?</p>', a: 'Le point a' },
                options: 'Le point a ¤ Le point b ¤ Le point c',
                explanation: 'Le centre de symétrie doit être le <strong>milieu</strong> exact du segment reliant chaque point à son image : seul le point a vérifie cette condition ici.'
            },
            {
                quiz: { q: '<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" style="max-width:280px; display:block; margin:8px auto; font-family:sans-serif;"><line x1="50" y1="180" x2="140" y2="140" stroke="#2E5C8A" stroke-width="2.5"/><circle cx="50" cy="180" r="4" fill="#2E5C8A"/><text x="34" y="196" font-size="14" fill="#2E5C8A" font-weight="bold">A</text><circle cx="140" cy="140" r="4" fill="#2E5C8A"/><text x="148" y="134" font-size="14" fill="#2E5C8A" font-weight="bold">B</text><line x1="350" y1="60" x2="260" y2="100" stroke="#2F7D3C" stroke-width="2.5"/><circle cx="350" cy="60" r="4" fill="#2F7D3C"/><text x="358" y="54" font-size="14" fill="#2F7D3C" font-weight="bold">A\'</text><circle cx="260" cy="100" r="4" fill="#2F7D3C"/><text x="220" y="94" font-size="14" fill="#2F7D3C" font-weight="bold">B\'</text><circle cx="200" cy="120" r="5" fill="#B5651D"/><text x="206" y="112" font-size="14" fill="#B5651D" font-weight="bold">O</text><line x1="50" y1="180" x2="350" y2="60" stroke="#999" stroke-width="1.2" stroke-dasharray="4 4"/><line x1="140" y1="140" x2="260" y2="100" stroke="#999" stroke-width="1.2" stroke-dasharray="4 4"/></svg><p style="margin-top:8px;">Si les segments $[AB]$ et $[A\'B\']$ sont symétriques par rapport à un point $O$, alors les droites $(AB)$ et $(A\'B\')$ sont...</p>', a: 'parallèles' },
                options: 'parallèles ¤ perpendiculaires ¤ confondues ¤ toujours sécantes en O',
                explanation: 'C\'est une propriété importante de la symétrie centrale : l\'image d\'une droite est une droite qui lui est <strong>parallèle</strong> (contrairement à la symétrie axiale, où le segment reliant un point à son image est perpendiculaire à l\'axe).'
            },
            {
                quiz: { q: '<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" style="max-width:280px; display:block; margin:8px auto; font-family:sans-serif;"><line x1="70" y1="140" x2="330" y2="140" stroke="#999" stroke-width="1.5" stroke-dasharray="6 5"/><circle cx="70" cy="140" r="4.5" fill="#2E5C8A"/><text x="58" y="128" font-size="14" fill="#2E5C8A" font-weight="bold">A</text><circle cx="180" cy="140" r="5" fill="#B5651D"/><text x="186" y="130" font-size="14" fill="#B5651D" font-weight="bold">O</text><path d="M 280,93 A 110,110 0 0 1 280,187" fill="none" stroke="#999" stroke-width="1.3" stroke-dasharray="3 3"/><circle cx="290" cy="140" r="4.5" fill="#2F7D3C"/><text x="296" y="130" font-size="14" fill="#2F7D3C" font-weight="bold">A\'</text></svg><p style="margin-top:8px;">Pour construire le symétrique d\'un point $A$ par rapport à $O$, on...</p>', a: 'trace la demi-droite d\'origine A passant par O, puis on reporte au compas la longueur OA de l\'autre côté de O' },
                options: 'trace la demi-droite d\'origine A passant par O, puis on reporte au compas la longueur OA de l\'autre côté de O ¤ trace la perpendiculaire à (OA) passant par O ¤ trace un cercle de centre A passant par O ¤ trace la médiatrice du segment [OA]',
                explanation: 'On trace la demi-droite $[AO)$, puis on reporte la longueur $OA$ de l\'autre côté de $O$ à l\'aide du compas (l\'arc pointillé représente ce report) : on obtient ainsi le point $A\'$ tel que $O$ soit le <strong>milieu</strong> de $[AA\']$.'
            },
            {
                quiz: { q: '<svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" style="max-width:280px; display:block; margin:8px auto; font-family:sans-serif;"> <line x1="0" y1="0" x2="0" y2="200" stroke="#e8e8e8" stroke-width="1"/> <line x1="20" y1="0" x2="20" y2="200" stroke="#e8e8e8" stroke-width="1"/> <line x1="40" y1="0" x2="40" y2="200" stroke="#e8e8e8" stroke-width="1"/> <line x1="60" y1="0" x2="60" y2="200" stroke="#e8e8e8" stroke-width="1"/> <line x1="80" y1="0" x2="80" y2="200" stroke="#e8e8e8" stroke-width="1"/> <line x1="100" y1="0" x2="100" y2="200" stroke="#e8e8e8" stroke-width="1"/> <line x1="120" y1="0" x2="120" y2="200" stroke="#e8e8e8" stroke-width="1"/> <line x1="140" y1="0" x2="140" y2="200" stroke="#e8e8e8" stroke-width="1"/> <line x1="160" y1="0" x2="160" y2="200" stroke="#e8e8e8" stroke-width="1"/> <line x1="180" y1="0" x2="180" y2="200" stroke="#e8e8e8" stroke-width="1"/> <line x1="200" y1="0" x2="200" y2="200" stroke="#e8e8e8" stroke-width="1"/> <line x1="220" y1="0" x2="220" y2="200" stroke="#e8e8e8" stroke-width="1"/> <line x1="240" y1="0" x2="240" y2="200" stroke="#e8e8e8" stroke-width="1"/> <line x1="260" y1="0" x2="260" y2="200" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="0" x2="260" y2="0" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="20" x2="260" y2="20" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="40" x2="260" y2="40" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="60" x2="260" y2="60" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="80" x2="260" y2="80" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="100" x2="260" y2="100" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="120" x2="260" y2="120" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="140" x2="260" y2="140" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="160" x2="260" y2="160" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="180" x2="260" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="200" x2="260" y2="200" stroke="#e8e8e8" stroke-width="1"/> <circle cx="40" cy="150" r="4" fill="#2E5C8A"/> <text x="24" y="144" font-size="14" fill="#2E5C8A" font-weight="bold">A</text> <circle cx="140" cy="110" r="4.5" fill="#B5651D"/> <text x="148" y="104" font-size="14" fill="#B5651D" font-weight="bold">O</text> <circle cx="240" cy="70" r="4" fill="#333"/> <text x="220" y="58" font-size="14" fill="#333" font-weight="bold">c</text> <circle cx="240" cy="110" r="4" fill="#333"/> <text x="220" y="128" font-size="14" fill="#333" font-weight="bold">a</text> <circle cx="200" cy="70" r="4" fill="#333"/> <text x="200" y="58" font-size="14" fill="#333" font-weight="bold">b</text> </svg><p style="margin-top:8px;">Sur la figure, quel point est l\'image du point $A$ par la symétrie de centre $O$ ?</p>', a: 'Le point c' },
                options: 'Le point a ¤ Le point b ¤ Le point c',
                explanation: 'Il faut que $O$ soit le milieu du segment reliant $A$ à son image. C\'est le cas uniquement pour le <strong>point c</strong> : $A$, $O$ et $c$ sont alignés, et les petits traits égaux ci-dessous montrent que $O$ est bien équidistant de $A$ et de $c$.<svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" style="max-width:280px; display:block; margin:8px auto; font-family:sans-serif;"> <circle cx="40" cy="150" r="4" fill="#2E5C8A"/> <text x="24" y="144" font-size="14" fill="#2E5C8A" font-weight="bold">A</text> <circle cx="140" cy="110" r="4.5" fill="#B5651D"/> <text x="148" y="104" font-size="14" fill="#B5651D" font-weight="bold">O</text> <circle cx="240" cy="70" r="4" fill="#2F7D3C"/> <text x="220" y="58" font-size="14" fill="#2F7D3C" font-weight="bold">c</text> <circle cx="240" cy="110" r="4" fill="#999"/> <text x="220" y="128" font-size="14" fill="#999" font-weight="bold">a</text> <circle cx="200" cy="70" r="4" fill="#999"/> <text x="200" y="58" font-size="14" fill="#999" font-weight="bold">b</text> <line x1="40" y1="150" x2="240" y2="70" stroke="#2F7D3C" stroke-width="1.5" stroke-dasharray="4 4"/> <line x1="87.8" y1="124.4" x2="92.2" y2="135.6" stroke="#333" stroke-width="2"/> <line x1="187.8" y1="84.4" x2="192.2" y2="95.6" stroke="#333" stroke-width="2"/> </svg>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg" style="max-width:200px; display:block; margin:8px auto; font-family:sans-serif;"><polygon points="110,40 50,140 170,140" fill="none" stroke="#2E5C8A" stroke-width="2.5"/><text x="100" y="30" font-size="14" fill="#2E5C8A" font-weight="bold">A</text><text x="30" y="150" font-size="14" fill="#2E5C8A" font-weight="bold">B</text><text x="176" y="150" font-size="14" fill="#2E5C8A" font-weight="bold">C</text></svg><p style="margin-top:8px;">Un triangle équilatéral possède...</p>', a: 'aucun centre de symétrie' },
                options: 'aucun centre de symétrie ¤ un centre de symétrie confondu avec son centre de gravité ¤ trois centres de symétrie ¤ un centre de symétrie par sommet',
                explanation: 'Attention, c\'est un piège classique : le triangle équilatéral a une symétrie de rotation d\'ordre 3 (120°), mais <strong>aucun</strong> point ne le transforme en lui-même par un demi-tour (180°). Si l\'on tente de faire tourner le sommet $A$ d\'un demi-tour autour de son centre de gravité $G$, on tombe en dehors du triangle : $G$ n\'est donc pas un centre de symétrie. Le triangle équilatéral n\'a donc pas de centre de symétrie.<svg viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg" style="max-width:200px; display:block; margin:8px auto; font-family:sans-serif;"><polygon points="110,40 50,140 170,140" fill="none" stroke="#2E5C8A" stroke-width="2.5"/><text x="100" y="30" font-size="14" fill="#2E5C8A" font-weight="bold">A</text><text x="30" y="150" font-size="14" fill="#2E5C8A" font-weight="bold">B</text><text x="176" y="150" font-size="14" fill="#2E5C8A" font-weight="bold">C</text><circle cx="110" cy="107" r="4.5" fill="#B5651D"/><text x="116" y="100" font-size="13" fill="#B5651D" font-weight="bold">G</text><line x1="110" y1="40" x2="110" y2="174" stroke="#999" stroke-width="2" stroke-dasharray="6 5"/><circle cx="110" cy="174" r="5" fill="none" stroke="#c0392b" stroke-width="2" stroke-dasharray="3 3"/><text x="118" y="188" font-size="13" fill="#c0392b" font-weight="bold">?</text></svg>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg" style="max-width:220px; display:block; margin:8px auto; font-family:sans-serif;"><polygon points="50,150 160,150 190,60 80,60" fill="#2E5C8A" fill-opacity="0.08" stroke="#2E5C8A" stroke-width="2.5"/><text x="36" y="168" font-size="14" fill="#2E5C8A" font-weight="bold">A</text><text x="166" y="168" font-size="14" fill="#2E5C8A" font-weight="bold">B</text><text x="194" y="56" font-size="14" fill="#2E5C8A" font-weight="bold">C</text><text x="66" y="56" font-size="14" fill="#2E5C8A" font-weight="bold">D</text></svg><p style="margin-top:8px;">Un parallélogramme (qui n\'est ni un rectangle, ni un losange) possède...</p>', a: 'un centre de symétrie : le point d\'intersection de ses diagonales' },
                options: 'un centre de symétrie : le point d\'intersection de ses diagonales ¤ deux centres de symétrie ¤ aucun centre de symétrie ¤ un axe de symétrie mais aucun centre',
                explanation: 'Tout parallélogramme possède un centre de symétrie : le <strong>point d\'intersection de ses diagonales</strong>, comme le montre le point $O$ sur la figure.<svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg" style="max-width:220px; display:block; margin:8px auto; font-family:sans-serif;"><polygon points="50,150 160,150 190,60 80,60" fill="#2E5C8A" fill-opacity="0.08" stroke="#2E5C8A" stroke-width="2.5"/><text x="36" y="168" font-size="14" fill="#2E5C8A" font-weight="bold">A</text><text x="166" y="168" font-size="14" fill="#2E5C8A" font-weight="bold">B</text><text x="194" y="56" font-size="14" fill="#2E5C8A" font-weight="bold">C</text><text x="66" y="56" font-size="14" fill="#2E5C8A" font-weight="bold">D</text><line x1="50" y1="150" x2="190" y2="60" stroke="#2F7D3C" stroke-width="1.8" stroke-dasharray="5 4"/><line x1="160" y1="150" x2="80" y2="60" stroke="#2F7D3C" stroke-width="1.8" stroke-dasharray="5 4"/><circle cx="120" cy="105" r="5" fill="#B5651D"/><text x="128" y="98" font-size="14" fill="#B5651D" font-weight="bold">O</text></svg>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 260 220" xmlns="http://www.w3.org/2000/svg" style="max-width:220px; display:block; margin:8px auto; font-family:sans-serif;"><circle cx="130" cy="110" r="70" fill="none" stroke="#2E5C8A" stroke-width="2.5"/></svg><p style="margin-top:8px;">Un cercle possède...</p>', a: 'un centre de symétrie : son centre' },
                options: 'un centre de symétrie : son centre ¤ aucun centre de symétrie ¤ une infinité de centres de symétrie ¤ un centre de symétrie situé sur le cercle lui-même',
                explanation: 'Le centre du cercle est équidistant de tous ses points : chaque point $P$ a pour image un point $P\'$ tel que $O$ soit le milieu de $[PP\']$ (comme $Q$ et $Q\'$ sur la figure). C\'est bien un <strong>centre de symétrie</strong> pour le cercle.<svg viewBox="0 0 260 220" xmlns="http://www.w3.org/2000/svg" style="max-width:220px; display:block; margin:8px auto; font-family:sans-serif;"><circle cx="130" cy="110" r="70" fill="none" stroke="#2E5C8A" stroke-width="2.5"/><circle cx="130" cy="110" r="5" fill="#B5651D"/><text x="138" y="105" font-size="14" fill="#B5651D" font-weight="bold">O</text><circle cx="196" cy="86" r="4" fill="#2F7D3C"/><text x="202" y="82" font-size="13" fill="#2F7D3C" font-weight="bold">P</text><circle cx="64" cy="134" r="4" fill="#2F7D3C"/><text x="38" y="148" font-size="13" fill="#2F7D3C" font-weight="bold">P\'</text><line x1="196" y1="86" x2="64" y2="134" stroke="#2F7D3C" stroke-width="1.5" stroke-dasharray="4 4"/><circle cx="118" cy="41" r="4" fill="#8e44ad"/><text x="98" y="32" font-size="13" fill="#8e44ad" font-weight="bold">Q</text><circle cx="142" cy="179" r="4" fill="#8e44ad"/><text x="148" y="192" font-size="13" fill="#8e44ad" font-weight="bold">Q\'</text><line x1="118" y1="41" x2="142" y2="179" stroke="#8e44ad" stroke-width="1.5" stroke-dasharray="4 4"/></svg>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" style="max-width:190px; display:block; margin:8px auto;"><rect x="70" y="40" width="16" height="120" fill="#2E5C8A"/><rect x="134" y="40" width="16" height="120" fill="#2E5C8A"/><rect x="70" y="92" width="80" height="16" fill="#2E5C8A"/></svg><p style="margin-top:8px;">Combien d\'axes et de centre de symétrie possède la lettre $H$ majuscule ?</p>', a: '2 axes et 1 centre' },
                options: '2 axes et 1 centre ¤ 1 axe et 1 centre ¤ 2 axes et 0 centre ¤ 0 axe et 1 centre',
                explanation: 'La lettre H a un axe vertical, un axe horizontal <strong>et</strong> un centre de symétrie situé à leur intersection, comme le montre la figure ci-dessous.<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" style="max-width:190px; display:block; margin:8px auto;"><rect x="70" y="40" width="16" height="120" fill="#2E5C8A"/><rect x="134" y="40" width="16" height="120" fill="#2E5C8A"/><rect x="70" y="92" width="80" height="16" fill="#2E5C8A"/><line x1="110" y1="15" x2="110" y2="185" stroke="#2e8b57" stroke-width="2.5" stroke-dasharray="8 6"/><line x1="25" y1="100" x2="195" y2="100" stroke="#2e8b57" stroke-width="2.5" stroke-dasharray="8 6"/><circle cx="110" cy="100" r="5" fill="#B5651D"/></svg>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" style="max-width:170px; display:block; margin:8px auto; font-family:sans-serif;"><text x="20" y="155" font-size="100" font-family="sans-serif" font-weight="bold" fill="#2E5C8A">S</text></svg><p style="margin-top:8px;">Combien d\'axes et de centre de symétrie possède la lettre $S$ majuscule ?</p>', a: '0 axe et 1 centre' },
                options: '0 axe et 1 centre ¤ 1 axe et 1 centre ¤ 2 axes et 0 centre ¤ 1 axe et 0 centre',
                explanation: 'La lettre S n\'a <strong>aucun axe</strong> de symétrie (aucune ligne de pliage ne la superpose à elle-même), mais elle possède un <strong>centre</strong> de symétrie : elle se superpose à elle-même après un demi-tour autour de ce point.<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" style="max-width:170px; display:block; margin:8px auto; font-family:sans-serif;"><text x="20" y="155" font-size="100" font-family="sans-serif" font-weight="bold" fill="#2E5C8A">S</text><circle cx="56" cy="118" r="5" fill="#B5651D"/><text x="64" y="112" font-size="13" fill="#B5651D" font-weight="bold">O</text></svg>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" style="max-width:200px; display:block; margin:8px auto;"><rect x="60" y="60" width="280" height="160" fill="#3333ff" fill-opacity="0.1" stroke="#3333ff" stroke-width="3"/></svg><p style="margin-top:8px;">Un rectangle qui n\'est pas un carré possède...</p>', a: '2 axes de symétrie et 1 centre de symétrie' },
                options: '2 axes de symétrie et 1 centre de symétrie ¤ 4 axes de symétrie et 1 centre de symétrie ¤ 0 axe de symétrie et 1 centre de symétrie ¤ 2 axes de symétrie et 0 centre de symétrie',
                explanation: 'Un rectangle non carré a deux axes de symétrie (parallèles aux côtés) et un centre de symétrie : le <strong>point d\'intersection de ses diagonales</strong>, marqué en orange à l\'intersection des deux axes.<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" style="max-width:200px; display:block; margin:8px auto;"><rect x="60" y="60" width="280" height="160" fill="#3333ff" fill-opacity="0.1" stroke="#3333ff" stroke-width="3"/><line x1="200" y1="30" x2="200" y2="250" stroke="#2e8b57" stroke-width="2.5" stroke-dasharray="8 6"/><line x1="30" y1="140" x2="370" y2="140" stroke="#2e8b57" stroke-width="2.5" stroke-dasharray="8 6"/><circle cx="200" cy="140" r="6" fill="#B5651D"/></svg>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" style="max-width:220px; display:block; margin:8px auto;"><polygon points="80,140 200,70 320,140 200,210" fill="#8e44ad" fill-opacity="0.1" stroke="#8e44ad" stroke-width="3"/></svg><p style="margin-top:8px;">Un losange qui n\'est pas un carré possède...</p>', a: '2 axes de symétrie (ses diagonales) et 1 centre de symétrie' },
                options: '2 axes de symétrie (ses diagonales) et 1 centre de symétrie ¤ 4 axes de symétrie et 1 centre de symétrie ¤ 0 axe de symétrie et 1 centre de symétrie ¤ 2 axes de symétrie et 0 centre de symétrie',
                explanation: 'Les <strong>diagonales</strong> d\'un losange sont ses deux axes de symétrie, et leur point d\'intersection est son centre de symétrie.<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" style="max-width:220px; display:block; margin:8px auto;"><polygon points="80,140 200,70 320,140 200,210" fill="#8e44ad" fill-opacity="0.1" stroke="#8e44ad" stroke-width="3"/><line x1="60" y1="140" x2="340" y2="140" stroke="#2e8b57" stroke-width="2.5" stroke-dasharray="8 6"/><line x1="200" y1="50" x2="200" y2="230" stroke="#2e8b57" stroke-width="2.5" stroke-dasharray="8 6"/><circle cx="200" cy="140" r="6" fill="#B5651D"/></svg>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:8px auto; font-family:sans-serif;"><polygon points="60,190 140,190 100,120" fill="none" stroke="#2E5C8A" stroke-width="2.5"/><text x="48" y="206" font-size="14" fill="#2E5C8A" font-weight="bold">A</text><text x="146" y="206" font-size="14" fill="#2E5C8A" font-weight="bold">B</text><text x="100" y="112" font-size="14" fill="#2E5C8A" font-weight="bold">C</text><polygon points="340,90 260,90 300,160" fill="none" stroke="#2F7D3C" stroke-width="2.5"/><text x="346" y="80" font-size="14" fill="#2F7D3C" font-weight="bold">A\'</text><text x="240" y="80" font-size="14" fill="#2F7D3C" font-weight="bold">B\'</text><text x="304" y="176" font-size="14" fill="#2F7D3C" font-weight="bold">C\'</text><circle cx="200" cy="140" r="5" fill="#B5651D"/><text x="206" y="132" font-size="14" fill="#B5651D" font-weight="bold">O</text></svg><p style="margin-top:8px;">Si un triangle $ABC$ a pour image le triangle $A\'B\'C\'$ par une symétrie centrale, alors...</p>', a: 'les deux triangles ont exactement les mêmes longueurs de côtés et les mêmes angles' },
                options: 'les deux triangles ont exactement les mêmes longueurs de côtés et les mêmes angles ¤ les deux triangles ont les mêmes angles mais pas forcément les mêmes longueurs ¤ seul le périmètre est conservé, pas les angles ¤ aucune grandeur n\'est nécessairement conservée',
                explanation: 'La symétrie centrale conserve toutes les longueurs et tous les angles, donc les deux triangles sont <strong>superposables</strong> (on retrouve les mêmes mesures des deux côtés).<svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:8px auto; font-family:sans-serif;"><polygon points="60,190 140,190 100,120" fill="none" stroke="#2E5C8A" stroke-width="2.5"/><text x="48" y="206" font-size="14" fill="#2E5C8A" font-weight="bold">A</text><text x="146" y="206" font-size="14" fill="#2E5C8A" font-weight="bold">B</text><text x="100" y="112" font-size="14" fill="#2E5C8A" font-weight="bold">C</text><text x="90" y="212" font-size="12" fill="#1A1A1A">6 cm</text><text x="115" y="150" font-size="12" fill="#1A1A1A">5 cm</text><text x="62" y="150" font-size="12" fill="#1A1A1A">4 cm</text><polygon points="340,90 260,90 300,160" fill="none" stroke="#2F7D3C" stroke-width="2.5"/><text x="346" y="80" font-size="14" fill="#2F7D3C" font-weight="bold">A\'</text><text x="240" y="80" font-size="14" fill="#2F7D3C" font-weight="bold">B\'</text><text x="304" y="176" font-size="14" fill="#2F7D3C" font-weight="bold">C\'</text><text x="290" y="72" font-size="12" fill="#1A1A1A">6 cm</text><text x="313" y="132" font-size="12" fill="#1A1A1A">4 cm</text><text x="264" y="132" font-size="12" fill="#1A1A1A">5 cm</text><circle cx="200" cy="140" r="5" fill="#B5651D"/><text x="206" y="132" font-size="14" fill="#B5651D" font-weight="bold">O</text></svg>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 320 230" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:8px auto; font-family:sans-serif;"> <polygon points="40,60 110,60 90,20" fill="none" stroke="#2E5C8A" stroke-width="2.5"/> <text x="28" y="72" font-size="14" fill="#2E5C8A" font-weight="bold">A</text> <text x="114" y="72" font-size="14" fill="#2E5C8A" font-weight="bold">B</text> <text x="90" y="14" font-size="14" fill="#2E5C8A" font-weight="bold">C</text> <text x="65" y="76" font-size="12" fill="#1A1A1A">5 cm</text> <text x="106" y="42" font-size="12" fill="#1A1A1A">3,5 cm</text> <text x="52" y="42" font-size="12" fill="#1A1A1A">4 cm</text> <circle cx="150" cy="110" r="4" fill="#B5651D"/> <text x="158" y="104" font-size="14" fill="#B5651D" font-weight="bold">O</text> <polygon points="260,160 190,160 210,200" fill="none" stroke="#2F7D3C" stroke-width="2.5"/> <text x="264" y="164" font-size="14" fill="#2F7D3C" font-weight="bold">E</text> <text x="172" y="164" font-size="14" fill="#2F7D3C" font-weight="bold">F</text> <text x="212" y="216" font-size="14" fill="#2F7D3C" font-weight="bold">G</text> </svg><p style="margin-top:8px;">Les triangles $ABC$ et $EFG$ sont symétriques par rapport à $O$. Quel segment mesure 3,5 cm ?</p>', a: '[FG]' },
                options: '[EF] ¤ [FG] ¤ [GE]',
                explanation: 'On repère facilement les côtés symétriques car ils sont parallèles entre deux. le segment $[BC]$ (qui mesure $3,5$ cm) est parallèle au segment <strong>$[FG]$</strong>, $[FG]$ est donc l\'image de $[BC]$ il mesure donc la même longueur que $[BC]$ : $3,5$ cm.'
            },
            {
                quiz: { q: '<svg viewBox="0 0 320 230" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:8px auto; font-family:sans-serif;"> <polygon points="40,60 110,60 90,20" fill="none" stroke="#2E5C8A" stroke-width="2.5"/> <text x="28" y="72" font-size="14" fill="#2E5C8A" font-weight="bold">A</text> <text x="114" y="72" font-size="14" fill="#2E5C8A" font-weight="bold">B</text> <text x="90" y="14" font-size="14" fill="#2E5C8A" font-weight="bold">C</text> <text x="65" y="76" font-size="12" fill="#1A1A1A">5 cm</text> <text x="106" y="42" font-size="12" fill="#1A1A1A">3,5 cm</text> <text x="52" y="42" font-size="12" fill="#1A1A1A">4 cm</text> <circle cx="150" cy="110" r="4" fill="#B5651D"/> <text x="158" y="104" font-size="14" fill="#B5651D" font-weight="bold">O</text> <polygon points="260,160 190,160 210,200" fill="none" stroke="#2F7D3C" stroke-width="2.5"/> <text x="264" y="164" font-size="14" fill="#2F7D3C" font-weight="bold">E</text> <text x="172" y="164" font-size="14" fill="#2F7D3C" font-weight="bold">F</text> <text x="212" y="216" font-size="14" fill="#2F7D3C" font-weight="bold">G</text> </svg><p style="margin-top:8px;">Quel est le périmètre du triangle $EFG$ ?</p>', a: '12,5 cm' },
                options: '12,5 cm ¤ 70 cm ¤ 6,25 cm ¤ On ne peut pas savoir',
                explanation: 'Le périmètre de $ABC$ vaut $5 + 3,5 + 4 = 12,5$ cm. La symétrie centrale conserve les longueurs, donc le triangle $EFG$ a exactement le <strong>même périmètre</strong>.'
            },
            {
                quiz: { q: '<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" style="max-width:280px; display:block; margin:8px auto; font-family:sans-serif;"><line x1="70" y1="150" x2="290" y2="150" stroke="#666" stroke-width="2"/><circle cx="70" cy="150" r="4.5" fill="#2E5C8A"/><text x="58" y="138" font-size="14" fill="#2E5C8A" font-weight="bold">P</text><circle cx="180" cy="150" r="5" fill="#B5651D"/><text x="186" y="140" font-size="14" fill="#B5651D" font-weight="bold">O</text><circle cx="290" cy="150" r="4.5" fill="#2F7D3C"/><text x="296" y="140" font-size="14" fill="#2F7D3C" font-weight="bold">P\'</text><line x1="122" y1="144" x2="132" y2="156" stroke="#333" stroke-width="2"/><line x1="232" y1="144" x2="242" y2="156" stroke="#333" stroke-width="2"/></svg><p style="margin-top:8px;">Pour vérifier que deux figures sont symétriques par rapport à un point $O$, on peut...</p>', a: 'relier un point à son image et vérifier que le segment passe par O, qui en est le milieu' },
                options: 'relier un point à son image et vérifier que le segment passe par O, qui en est le milieu ¤ vérifier qu\'elles ont un axe de symétrie commun ¤ mesurer un angle de 90° entre les deux figures ¤ vérifier qu\'elles sont parallèles à une droite fixée à l\'avance',
                explanation: 'C\'est la définition même de la symétrie centrale : chaque point et son image doivent être alignés avec $O$ (comme $P$ et $P\'$ sur la figure), et les petits traits égaux montrent que $O$ en est bien le <strong>milieu</strong>.'
            },
            {
                quiz: { q: '<svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" style="max-width:320px; display:block; margin:8px auto; font-family:sans-serif;"><polygon points="30,150 70,150 50,110" fill="none" stroke="#2E5C8A" stroke-width="2"/><circle cx="100" cy="120" r="4" fill="#B5651D"/><polygon points="170,90 130,90 150,130" fill="none" stroke="#2F7D3C" stroke-width="2"/><text x="42" y="178" font-size="11" fill="#333">Symétrie centrale</text><line x1="280" y1="55" x2="280" y2="180" stroke="#2e8b57" stroke-width="2" stroke-dasharray="6 5"/><polygon points="230,150 260,150 245,110" fill="none" stroke="#2E5C8A" stroke-width="2"/><polygon points="330,150 300,150 315,110" fill="none" stroke="#2F7D3C" stroke-width="2"/><text x="248" y="178" font-size="11" fill="#333">Symétrie axiale</text></svg><p style="margin-top:8px;">La symétrie centrale et la symétrie axiale ont en commun de conserver...</p>', a: 'les longueurs et les angles' },
                options: 'les longueurs et les angles¤ uniquement le parallélisme ¤ les aires mais pas le périmètre ¤ aucune propriété commune',
                explanation: 'La symétrie axiale et la symétrie centrale conservent chacune les longueurs et les angles.'
            }
        ],
"56111": [
            {
                quiz: { q: 'Lis l’abscisse du point A sur la droite graduée ci-dessous.', a: '-4' },
                figure: `<svg viewBox="0 0 488 150" xmlns="http://www.w3.org/2000/svg" style="max-width:480px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56111a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="488" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56111a)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="244" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="414" y1="71" x2="414" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="448" y1="71" x2="448" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="448" y="100" font-size="12" fill="#333" text-anchor="middle">6</text>
<circle cx="108" cy="78" r="4.5" fill="#2E5C8A"/>
<text x="108" y="66" font-size="13" fill="#2E5C8A" font-weight="bold" text-anchor="middle">A</text>
</svg>`,
                options: '-4 ¤ 4 ¤ -3 ¤ -5',
                explanation: `Je cherche d’abord la valeur d’une graduation : entre 0 et 6 il y a 6 intervalles, donc une graduation vaut 6 : 6 = 1. Le point A est 4 graduations à gauche de 0, donc son abscisse est -4.<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 488 170" xmlns="http://www.w3.org/2000/svg" style="max-width:480px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56111ae" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="488" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56111ae)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="244" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="414" y1="71" x2="414" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="448" y1="71" x2="448" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="448" y="100" font-size="12" fill="#333" text-anchor="middle">6</text>
<circle cx="108" cy="78" r="5" fill="#1F7A4C"/>
<text x="108" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">A</text>
<line x1="108" y1="78" x2="108" y2="118" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<text x="108" y="132" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">-4</text>
</svg></div>`
            },
            {
                quiz: { q: 'Lis l’abscisse du point B sur la droite graduée ci-dessous.', a: '6' },
                figure: `<svg viewBox="0 0 488 150" xmlns="http://www.w3.org/2000/svg" style="max-width:480px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56111b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="488" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56111b)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="244" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="414" y1="71" x2="414" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="448" y1="71" x2="448" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="448" y="100" font-size="12" fill="#333" text-anchor="middle">12</text>
<circle cx="346" cy="78" r="4.5" fill="#B5651D"/>
<text x="346" y="66" font-size="13" fill="#B5651D" font-weight="bold" text-anchor="middle">B</text>
</svg>`,
                options: '3 ¤ 6 ¤ -6 ¤ 12',
                explanation: `Entre 0 et 12 il y a 6 intervalles, donc une graduation vaut 12 : 6 = 2. Le point B est 3 graduations à droite de 0, donc son abscisse est 3 × 2 = 6.<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 488 170" xmlns="http://www.w3.org/2000/svg" style="max-width:480px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56111be" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="488" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56111be)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="244" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="414" y1="71" x2="414" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="448" y1="71" x2="448" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="448" y="100" font-size="12" fill="#333" text-anchor="middle">12</text>
<circle cx="346" cy="78" r="5" fill="#1F7A4C"/>
<text x="346" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">B</text>
<line x1="346" y1="78" x2="346" y2="118" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<text x="346" y="132" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">6</text>
</svg></div>`
            },
            {
                quiz: { q: 'Lis l’abscisse du point C sur la droite graduée ci-dessous.', a: '-1,5' },
                figure: `<svg viewBox="0 0 420 150" xmlns="http://www.w3.org/2000/svg" style="max-width:420px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56111c" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="420" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56111c)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="210" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="380" y="100" font-size="12" fill="#333" text-anchor="middle">2,5</text>
<circle cx="108" cy="78" r="4.5" fill="#1F7A4C"/>
<text x="108" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">C</text>
</svg>`,
                options: '-1,5 ¤ -3 ¤ 1,5 ¤ -1',
                explanation: `Entre 0 et 2,5 il y a 5 intervalles, donc une graduation vaut 2,5 : 5 = 0,5. Le point C est 3 graduations à gauche de 0, donc son abscisse est -3 × 0,5 = -1,5.<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 420 170" xmlns="http://www.w3.org/2000/svg" style="max-width:420px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56111ce" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="420" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56111ce)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="210" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="380" y="100" font-size="12" fill="#333" text-anchor="middle">2,5</text>
<circle cx="108" cy="78" r="5" fill="#1F7A4C"/>
<text x="108" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">C</text>
<line x1="108" y1="78" x2="108" y2="118" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<text x="108" y="132" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">-1,5</text>
</svg></div>`
            },
            {
                quiz: { q: 'Lis l’abscisse du point G sur la droite graduée ci-dessous.', a: '0,4' },
                figure: `<svg viewBox="0 0 760 150" xmlns="http://www.w3.org/2000/svg" style="max-width:480px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56111d" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="760" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56111d)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="380" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="414" y1="71" x2="414" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="448" y1="71" x2="448" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="482" y1="71" x2="482" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="516" y1="71" x2="516" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="550" y1="71" x2="550" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="584" y1="71" x2="584" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="618" y1="71" x2="618" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="652" y1="71" x2="652" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="686" y1="71" x2="686" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="720" y1="71" x2="720" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="720" y="100" font-size="12" fill="#333" text-anchor="middle">1,0</text>
<circle cx="516" cy="78" r="4.5" fill="#2E5C8A"/>
<text x="516" y="66" font-size="13" fill="#2E5C8A" font-weight="bold" text-anchor="middle">G</text>
</svg>`,
                options: '0,4 ¤ 4 ¤ 0,04 ¤ -0,4',
                explanation: `Entre 0 et 1,0 il y a 10 intervalles, donc une graduation vaut 1 : 10 = 0,1. Le point G est 4 graduations à droite de 0, donc son abscisse est 4 × 0,1 = 0,4.<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 760 170" xmlns="http://www.w3.org/2000/svg" style="max-width:480px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56111de" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="760" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56111de)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="380" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="414" y1="71" x2="414" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="448" y1="71" x2="448" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="482" y1="71" x2="482" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="516" y1="71" x2="516" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="550" y1="71" x2="550" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="584" y1="71" x2="584" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="618" y1="71" x2="618" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="652" y1="71" x2="652" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="686" y1="71" x2="686" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="720" y1="71" x2="720" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="720" y="100" font-size="12" fill="#333" text-anchor="middle">1,0</text>
<circle cx="516" cy="78" r="5" fill="#1F7A4C"/>
<text x="516" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">G</text>
<line x1="516" y1="78" x2="516" y2="118" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<text x="516" y="132" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">0,4</text>
</svg></div>`
            },
            {
                quiz: { q: 'Sur une droite graduée, les points d’abscisses 0 et 1 sont séparés par 5 intervalles égaux. Quelle est la valeur d’une graduation ?', a: '0,2' },
                figure: `<svg viewBox="0 0 420 150" xmlns="http://www.w3.org/2000/svg" style="max-width:420px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56111meta5" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="420" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56111meta5)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="210" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="380" y="100" font-size="12" fill="#333" text-anchor="middle">1,0</text>
</svg>`,
                options: '0,2 ¤ 5 ¤ 0,5 ¤ 2',
                explanation: `Pour trouver la valeur d’une graduation, on divise la distance entre les deux nombres connus par le nombre d’intervalles qui les séparent : 1 : 5 = 0,2. Chaque graduation vaut donc 0,2.`
            },
            {
                quiz: { q: 'Lis l’abscisse du point K sur la droite graduée ci-dessous.', a: '-0,06' },
                figure: `<svg viewBox="0 0 624 150" xmlns="http://www.w3.org/2000/svg" style="max-width:480px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56111f" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="624" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56111f)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="312" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="414" y1="71" x2="414" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="448" y1="71" x2="448" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="482" y1="71" x2="482" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="516" y1="71" x2="516" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="550" y1="71" x2="550" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="584" y1="71" x2="584" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="584" y="100" font-size="12" fill="#333" text-anchor="middle">0,08</text>
<circle cx="108" cy="78" r="4.5" fill="#B5651D"/>
<text x="108" y="66" font-size="13" fill="#B5651D" font-weight="bold" text-anchor="middle">K</text>
</svg>`,
                options: '-0,06 ¤ -6 ¤ -0,6 ¤ 0,06',
                explanation: `Entre 0 et 0,08 il y a 8 intervalles, donc une graduation vaut 0,08 : 8 = 0,01. Le point K est 6 graduations à gauche de 0, donc son abscisse est -6 × 0,01 = -0,06.<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 624 170" xmlns="http://www.w3.org/2000/svg" style="max-width:480px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56111fe" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="624" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56111fe)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="312" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="414" y1="71" x2="414" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="448" y1="71" x2="448" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="482" y1="71" x2="482" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="516" y1="71" x2="516" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="550" y1="71" x2="550" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="584" y1="71" x2="584" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="584" y="100" font-size="12" fill="#333" text-anchor="middle">0,08</text>
<circle cx="108" cy="78" r="5" fill="#1F7A4C"/>
<text x="108" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">K</text>
<line x1="108" y1="78" x2="108" y2="118" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<text x="108" y="132" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">-0,06</text>
</svg></div>`
            },
            {
                quiz: { q: 'Lis l’abscisse du point D sur la droite graduée ci-dessous.', a: '-10' },
                figure: `<svg viewBox="0 0 488 150" xmlns="http://www.w3.org/2000/svg" style="max-width:480px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56111g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="488" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56111g)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="244" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="414" y1="71" x2="414" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="448" y1="71" x2="448" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="448" y="100" font-size="12" fill="#333" text-anchor="middle">12</text>
<circle cx="74" cy="78" r="4.5" fill="#2E5C8A"/>
<text x="74" y="66" font-size="13" fill="#2E5C8A" font-weight="bold" text-anchor="middle">D</text>
</svg>`,
                options: '-10 ¤ -5 ¤ 10 ¤ -12',
                explanation: `Entre 0 et 12 il y a 6 intervalles, donc une graduation vaut 12 : 6 = 2. Le point D est 5 graduations à gauche de 0, donc son abscisse est -5 × 2 = -10.<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 488 170" xmlns="http://www.w3.org/2000/svg" style="max-width:480px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56111ge" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="488" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56111ge)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="244" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="414" y1="71" x2="414" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="448" y1="71" x2="448" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="448" y="100" font-size="12" fill="#333" text-anchor="middle">12</text>
<circle cx="74" cy="78" r="5" fill="#1F7A4C"/>
<text x="74" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">D</text>
<line x1="74" y1="78" x2="74" y2="118" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<text x="74" y="132" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">-10</text>
</svg></div>`
            },
            {
                quiz: { q: 'Lis l’abscisse du point E sur la droite graduée ci-dessous.', a: '-15' },
                figure: `<svg viewBox="0 0 420 150" xmlns="http://www.w3.org/2000/svg" style="max-width:420px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56111h" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="420" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56111h)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="210" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="380" y="100" font-size="12" fill="#333" text-anchor="middle">25</text>
<circle cx="108" cy="78" r="4.5" fill="#1F7A4C"/>
<text x="108" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">E</text>
</svg>`,
                options: '-15 ¤ -3 ¤ 15 ¤ -18',
                explanation: `Entre 0 et 25 il y a 5 intervalles, donc une graduation vaut 25 : 5 = 5. Le point E est 3 graduations à gauche de 0, donc son abscisse est -3 × 5 = -15.<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 420 170" xmlns="http://www.w3.org/2000/svg" style="max-width:420px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56111he" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="420" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56111he)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="210" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="380" y="100" font-size="12" fill="#333" text-anchor="middle">25</text>
<circle cx="108" cy="78" r="5" fill="#1F7A4C"/>
<text x="108" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">E</text>
<line x1="108" y1="78" x2="108" y2="118" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<text x="108" y="132" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">-15</text>
</svg></div>`
            },
            {
                quiz: { q: 'Sur la droite graduée ci-dessous, quel point a l’abscisse la plus grande ?', a: 'B' },
                figure: `<svg viewBox="0 0 488 150" xmlns="http://www.w3.org/2000/svg" style="max-width:480px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56111i" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="488" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56111i)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="244" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="414" y1="71" x2="414" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="448" y1="71" x2="448" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="448" y="100" font-size="12" fill="#333" text-anchor="middle">6</text>
<circle cx="176" cy="78" r="4.5" fill="#2E5C8A"/>
<text x="176" y="66" font-size="13" fill="#2E5C8A" font-weight="bold" text-anchor="middle">A</text>
<circle cx="380" cy="78" r="4.5" fill="#B5651D"/>
<text x="380" y="66" font-size="13" fill="#B5651D" font-weight="bold" text-anchor="middle">B</text>
</svg>`,
                options: 'A ¤ B ¤ Ils sont égaux ¤ Impossible à savoir',
                explanation: `On lit les deux abscisses en comptant les graduations depuis 0 : A a pour abscisse -2 et B a pour abscisse 4. Comme 4 > -2, c’est le point B qui a l’abscisse la plus grande.<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 488 170" xmlns="http://www.w3.org/2000/svg" style="max-width:480px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56111i2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="488" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56111i2)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="244" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="414" y1="71" x2="414" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="448" y1="71" x2="448" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="448" y="100" font-size="12" fill="#333" text-anchor="middle">6</text>
<circle cx="176" cy="78" r="5" fill="#2E5C8A"/>
<text x="176" y="66" font-size="13" fill="#2E5C8A" font-weight="bold" text-anchor="middle">A</text>
<line x1="176" y1="78" x2="176" y2="118" stroke="#2E5C8A" stroke-width="1.3" stroke-dasharray="4,3"/>
<text x="176" y="132" font-size="13" fill="#2E5C8A" font-weight="bold" text-anchor="middle">-2</text>
<circle cx="380" cy="78" r="5" fill="#B5651D"/>
<text x="380" y="66" font-size="13" fill="#B5651D" font-weight="bold" text-anchor="middle">B</text>
<line x1="380" y1="78" x2="380" y2="118" stroke="#B5651D" stroke-width="1.3" stroke-dasharray="4,3"/>
<text x="380" y="132" font-size="13" fill="#B5651D" font-weight="bold" text-anchor="middle">4</text>
</svg></div>`
            },
            {
                quiz: { q: 'Sur une droite graduée, les points d’abscisses 0 et 1,5 sont séparés par 3 intervalles égaux. Quelle est la valeur d’une graduation ?', a: '0,5' },
                figure: `<svg viewBox="0 0 284 150" xmlns="http://www.w3.org/2000/svg" style="max-width:284px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56111meta10" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="284" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56111meta10)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="142" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="244" y="100" font-size="12" fill="#333" text-anchor="middle">1,5</text>
</svg>`,
                options: '0,5 ¤ 3 ¤ 1,5 ¤ 4,5',
                explanation: `On divise la distance entre les deux nombres connus par le nombre d’intervalles qui les séparent : 1,5 : 3 = 0,5. Chaque graduation vaut donc 0,5.`
            }
],

"56121": [
            {
                quiz: { q: 'Sur la droite graduée ci-dessous, quel point a pour abscisse 2 ?', a: 'B' },
                figure: `<svg viewBox="0 0 488 150" xmlns="http://www.w3.org/2000/svg" style="max-width:480px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56121a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="488" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56121a)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="244" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="414" y1="71" x2="414" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="448" y1="71" x2="448" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="448" y="100" font-size="12" fill="#333" text-anchor="middle">6</text>
<circle cx="74" cy="78" r="4.5" fill="#2E5C8A"/>
<text x="74" y="66" font-size="13" fill="#2E5C8A" font-weight="bold" text-anchor="middle">A</text>
<circle cx="312" cy="78" r="4.5" fill="#B5651D"/>
<text x="312" y="66" font-size="13" fill="#B5651D" font-weight="bold" text-anchor="middle">B</text>
<circle cx="210" cy="78" r="4.5" fill="#1F7A4C"/>
<text x="210" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">C</text>
<circle cx="380" cy="78" r="4.5" fill="#7B4FA0"/>
<text x="380" y="66" font-size="13" fill="#7B4FA0" font-weight="bold" text-anchor="middle">D</text>
</svg>`,
                options: 'A ¤ B ¤ C ¤ D',
                explanation: `Entre 0 et 6 il y a 6 intervalles, donc une graduation vaut 1. Le point situé 2 graduations à droite de 0 est le point B.<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 488 170" xmlns="http://www.w3.org/2000/svg" style="max-width:480px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56121ae" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="488" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56121ae)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="244" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="414" y1="71" x2="414" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="448" y1="71" x2="448" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="448" y="100" font-size="12" fill="#333" text-anchor="middle">6</text>
<circle cx="74" cy="78" r="5" fill="#2E5C8A"/>
<text x="74" y="66" font-size="13" fill="#2E5C8A" font-weight="bold" text-anchor="middle">A</text>
<circle cx="312" cy="78" r="5" fill="#1F7A4C"/>
<text x="312" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">B</text>
<line x1="312" y1="78" x2="312" y2="118" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<text x="312" y="132" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">2</text>
<circle cx="210" cy="78" r="5" fill="#1F7A4C"/>
<text x="210" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">C</text>
<circle cx="380" cy="78" r="5" fill="#7B4FA0"/>
<text x="380" y="66" font-size="13" fill="#7B4FA0" font-weight="bold" text-anchor="middle">D</text>
</svg></div>`
            },
            {
                quiz: { q: 'Sur la droite graduée ci-dessous, quel point a pour abscisse -8 ?', a: 'A' },
                figure: `<svg viewBox="0 0 488 150" xmlns="http://www.w3.org/2000/svg" style="max-width:480px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56121b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="488" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56121b)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="244" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="414" y1="71" x2="414" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="448" y1="71" x2="448" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="448" y="100" font-size="12" fill="#333" text-anchor="middle">12</text>
<circle cx="108" cy="78" r="4.5" fill="#2E5C8A"/>
<text x="108" y="66" font-size="13" fill="#2E5C8A" font-weight="bold" text-anchor="middle">A</text>
<circle cx="346" cy="78" r="4.5" fill="#B5651D"/>
<text x="346" y="66" font-size="13" fill="#B5651D" font-weight="bold" text-anchor="middle">B</text>
<circle cx="176" cy="78" r="4.5" fill="#1F7A4C"/>
<text x="176" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">C</text>
<circle cx="414" cy="78" r="4.5" fill="#7B4FA0"/>
<text x="414" y="66" font-size="13" fill="#7B4FA0" font-weight="bold" text-anchor="middle">D</text>
</svg>`,
                options: 'A ¤ B ¤ C ¤ D',
                explanation: `Entre 0 et 12 il y a 6 intervalles, donc une graduation vaut 2. Le point situé 4 graduations à gauche de 0 (soit -4 × 2 = -8) est le point A.<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 488 170" xmlns="http://www.w3.org/2000/svg" style="max-width:480px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56121be" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="488" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56121be)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="244" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="414" y1="71" x2="414" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="448" y1="71" x2="448" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="448" y="100" font-size="12" fill="#333" text-anchor="middle">12</text>
<circle cx="108" cy="78" r="5" fill="#1F7A4C"/>
<text x="108" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">A</text>
<line x1="108" y1="78" x2="108" y2="118" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<text x="108" y="132" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">-8</text>
<circle cx="346" cy="78" r="5" fill="#B5651D"/>
<text x="346" y="66" font-size="13" fill="#B5651D" font-weight="bold" text-anchor="middle">B</text>
<circle cx="176" cy="78" r="5" fill="#1F7A4C"/>
<text x="176" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">C</text>
<circle cx="414" cy="78" r="5" fill="#7B4FA0"/>
<text x="414" y="66" font-size="13" fill="#7B4FA0" font-weight="bold" text-anchor="middle">D</text>
</svg></div>`
            },
            {
                quiz: { q: 'Sur la droite graduée ci-dessous, quel point a pour abscisse 1 ?', a: 'B' },
                figure: `<svg viewBox="0 0 420 150" xmlns="http://www.w3.org/2000/svg" style="max-width:420px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56121c" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="420" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56121c)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="210" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="380" y="100" font-size="12" fill="#333" text-anchor="middle">2,5</text>
<circle cx="108" cy="78" r="4.5" fill="#2E5C8A"/>
<text x="108" y="66" font-size="13" fill="#2E5C8A" font-weight="bold" text-anchor="middle">A</text>
<circle cx="278" cy="78" r="4.5" fill="#B5651D"/>
<text x="278" y="66" font-size="13" fill="#B5651D" font-weight="bold" text-anchor="middle">B</text>
<circle cx="346" cy="78" r="4.5" fill="#1F7A4C"/>
<text x="346" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">C</text>
<circle cx="176" cy="78" r="4.5" fill="#7B4FA0"/>
<text x="176" y="66" font-size="13" fill="#7B4FA0" font-weight="bold" text-anchor="middle">D</text>
</svg>`,
                options: 'A ¤ B ¤ C ¤ D',
                explanation: `Entre 0 et 2,5 il y a 5 intervalles, donc une graduation vaut 0,5. Le point situé 2 graduations à droite de 0 (soit 2 × 0,5 = 1) est le point B.<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 420 170" xmlns="http://www.w3.org/2000/svg" style="max-width:420px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56121ce" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="420" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56121ce)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="210" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="380" y="100" font-size="12" fill="#333" text-anchor="middle">2,5</text>
<circle cx="108" cy="78" r="5" fill="#2E5C8A"/>
<text x="108" y="66" font-size="13" fill="#2E5C8A" font-weight="bold" text-anchor="middle">A</text>
<circle cx="278" cy="78" r="5" fill="#1F7A4C"/>
<text x="278" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">B</text>
<line x1="278" y1="78" x2="278" y2="118" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<text x="278" y="132" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">1,0</text>
<circle cx="346" cy="78" r="5" fill="#1F7A4C"/>
<text x="346" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">C</text>
<circle cx="176" cy="78" r="5" fill="#7B4FA0"/>
<text x="176" y="66" font-size="13" fill="#7B4FA0" font-weight="bold" text-anchor="middle">D</text>
</svg></div>`
            },
            {
                quiz: { q: 'Sur la droite graduée ci-dessous, quel point a pour abscisse -0,2 ?', a: 'C' },
                figure: `<svg viewBox="0 0 760 150" xmlns="http://www.w3.org/2000/svg" style="max-width:480px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56121d" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="760" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56121d)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="380" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="414" y1="71" x2="414" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="448" y1="71" x2="448" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="482" y1="71" x2="482" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="516" y1="71" x2="516" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="550" y1="71" x2="550" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="584" y1="71" x2="584" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="618" y1="71" x2="618" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="652" y1="71" x2="652" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="686" y1="71" x2="686" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="720" y1="71" x2="720" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="720" y="100" font-size="12" fill="#333" text-anchor="middle">1,0</text>
<circle cx="142" cy="78" r="4.5" fill="#2E5C8A"/>
<text x="142" y="66" font-size="13" fill="#2E5C8A" font-weight="bold" text-anchor="middle">A</text>
<circle cx="482" cy="78" r="4.5" fill="#B5651D"/>
<text x="482" y="66" font-size="13" fill="#B5651D" font-weight="bold" text-anchor="middle">B</text>
<circle cx="312" cy="78" r="4.5" fill="#1F7A4C"/>
<text x="312" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">C</text>
<circle cx="652" cy="78" r="4.5" fill="#7B4FA0"/>
<text x="652" y="66" font-size="13" fill="#7B4FA0" font-weight="bold" text-anchor="middle">D</text>
</svg>`,
                options: 'A ¤ B ¤ C ¤ D',
                explanation: `Entre 0 et 1,0 il y a 10 intervalles, donc une graduation vaut 0,1. Le point situé 2 graduations à gauche de 0 (soit -2 × 0,1 = -0,2) est le point C.<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 760 170" xmlns="http://www.w3.org/2000/svg" style="max-width:480px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56121de" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="760" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56121de)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="380" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="414" y1="71" x2="414" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="448" y1="71" x2="448" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="482" y1="71" x2="482" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="516" y1="71" x2="516" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="550" y1="71" x2="550" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="584" y1="71" x2="584" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="618" y1="71" x2="618" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="652" y1="71" x2="652" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="686" y1="71" x2="686" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="720" y1="71" x2="720" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="720" y="100" font-size="12" fill="#333" text-anchor="middle">1,0</text>
<circle cx="142" cy="78" r="5" fill="#2E5C8A"/>
<text x="142" y="66" font-size="13" fill="#2E5C8A" font-weight="bold" text-anchor="middle">A</text>
<circle cx="482" cy="78" r="5" fill="#B5651D"/>
<text x="482" y="66" font-size="13" fill="#B5651D" font-weight="bold" text-anchor="middle">B</text>
<circle cx="312" cy="78" r="5" fill="#1F7A4C"/>
<text x="312" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">C</text>
<line x1="312" y1="78" x2="312" y2="118" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<text x="312" y="132" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">-0,2</text>
<circle cx="652" cy="78" r="5" fill="#7B4FA0"/>
<text x="652" y="66" font-size="13" fill="#7B4FA0" font-weight="bold" text-anchor="middle">D</text>
</svg></div>`
            },
            {
                quiz: { q: 'Sur la droite graduée ci-dessous, quel point a pour abscisse 0,06 ?', a: 'C' },
                figure: `<svg viewBox="0 0 624 150" xmlns="http://www.w3.org/2000/svg" style="max-width:480px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56121e" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="624" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56121e)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="312" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="414" y1="71" x2="414" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="448" y1="71" x2="448" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="482" y1="71" x2="482" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="516" y1="71" x2="516" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="550" y1="71" x2="550" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="584" y1="71" x2="584" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="584" y="100" font-size="12" fill="#333" text-anchor="middle">0,08</text>
<circle cx="142" cy="78" r="4.5" fill="#2E5C8A"/>
<text x="142" y="66" font-size="13" fill="#2E5C8A" font-weight="bold" text-anchor="middle">A</text>
<circle cx="380" cy="78" r="4.5" fill="#B5651D"/>
<text x="380" y="66" font-size="13" fill="#B5651D" font-weight="bold" text-anchor="middle">B</text>
<circle cx="516" cy="78" r="4.5" fill="#1F7A4C"/>
<text x="516" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">C</text>
<circle cx="40" cy="78" r="4.5" fill="#7B4FA0"/>
<text x="40" y="66" font-size="13" fill="#7B4FA0" font-weight="bold" text-anchor="middle">D</text>
</svg>`,
                options: 'A ¤ B ¤ C ¤ D',
                explanation: `Entre 0 et 0,08 il y a 8 intervalles, donc une graduation vaut 0,01. Le point situé 6 graduations à droite de 0 (soit 6 × 0,01 = 0,06) est le point C.<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 624 170" xmlns="http://www.w3.org/2000/svg" style="max-width:480px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56121ee" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="624" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56121ee)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="312" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="414" y1="71" x2="414" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="448" y1="71" x2="448" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="482" y1="71" x2="482" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="516" y1="71" x2="516" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="550" y1="71" x2="550" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="584" y1="71" x2="584" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="584" y="100" font-size="12" fill="#333" text-anchor="middle">0,08</text>
<circle cx="142" cy="78" r="5" fill="#2E5C8A"/>
<text x="142" y="66" font-size="13" fill="#2E5C8A" font-weight="bold" text-anchor="middle">A</text>
<circle cx="380" cy="78" r="5" fill="#B5651D"/>
<text x="380" y="66" font-size="13" fill="#B5651D" font-weight="bold" text-anchor="middle">B</text>
<circle cx="516" cy="78" r="5" fill="#1F7A4C"/>
<text x="516" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">C</text>
<line x1="516" y1="78" x2="516" y2="118" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<text x="516" y="132" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">0,06</text>
<circle cx="40" cy="78" r="5" fill="#7B4FA0"/>
<text x="40" y="66" font-size="13" fill="#7B4FA0" font-weight="bold" text-anchor="middle">D</text>
</svg></div>`
            },
            {
                quiz: { q: 'Sur la droite graduée ci-dessous, quel point a pour abscisse 15 ?', a: 'C' },
                figure: `<svg viewBox="0 0 488 150" xmlns="http://www.w3.org/2000/svg" style="max-width:480px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56121f" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="488" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56121f)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="244" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="414" y1="71" x2="414" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="448" y1="71" x2="448" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="448" y="100" font-size="12" fill="#333" text-anchor="middle">30</text>
<circle cx="108" cy="78" r="4.5" fill="#2E5C8A"/>
<text x="108" y="66" font-size="13" fill="#2E5C8A" font-weight="bold" text-anchor="middle">A</text>
<circle cx="278" cy="78" r="4.5" fill="#B5651D"/>
<text x="278" y="66" font-size="13" fill="#B5651D" font-weight="bold" text-anchor="middle">B</text>
<circle cx="346" cy="78" r="4.5" fill="#1F7A4C"/>
<text x="346" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">C</text>
<circle cx="210" cy="78" r="4.5" fill="#7B4FA0"/>
<text x="210" y="66" font-size="13" fill="#7B4FA0" font-weight="bold" text-anchor="middle">D</text>
</svg>`,
                options: 'A ¤ B ¤ C ¤ D',
                explanation: `Entre 0 et 30 il y a 6 intervalles, donc une graduation vaut 5. Le point situé 3 graduations à droite de 0 (soit 3 × 5 = 15) est le point C.<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 488 170" xmlns="http://www.w3.org/2000/svg" style="max-width:480px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56121fe" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="488" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56121fe)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="244" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="414" y1="71" x2="414" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="448" y1="71" x2="448" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="448" y="100" font-size="12" fill="#333" text-anchor="middle">30</text>
<circle cx="108" cy="78" r="5" fill="#2E5C8A"/>
<text x="108" y="66" font-size="13" fill="#2E5C8A" font-weight="bold" text-anchor="middle">A</text>
<circle cx="278" cy="78" r="5" fill="#B5651D"/>
<text x="278" y="66" font-size="13" fill="#B5651D" font-weight="bold" text-anchor="middle">B</text>
<circle cx="346" cy="78" r="5" fill="#1F7A4C"/>
<text x="346" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">C</text>
<line x1="346" y1="78" x2="346" y2="118" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<text x="346" y="132" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">15</text>
<circle cx="210" cy="78" r="5" fill="#7B4FA0"/>
<text x="210" y="66" font-size="13" fill="#7B4FA0" font-weight="bold" text-anchor="middle">D</text>
</svg></div>`
            },
            {
                quiz: { q: 'Sur la droite graduée ci-dessous, quel point a pour abscisse 0 ?', a: 'B' },
                figure: `<svg viewBox="0 0 420 150" xmlns="http://www.w3.org/2000/svg" style="max-width:420px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56121g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="420" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56121g)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="210" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="380" y="100" font-size="12" fill="#333" text-anchor="middle">5</text>
<circle cx="108" cy="78" r="4.5" fill="#2E5C8A"/>
<text x="108" y="66" font-size="13" fill="#2E5C8A" font-weight="bold" text-anchor="middle">A</text>
<circle cx="210" cy="78" r="4.5" fill="#B5651D"/>
<text x="210" y="66" font-size="13" fill="#B5651D" font-weight="bold" text-anchor="middle">B</text>
<circle cx="278" cy="78" r="4.5" fill="#1F7A4C"/>
<text x="278" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">C</text>
<circle cx="346" cy="78" r="4.5" fill="#7B4FA0"/>
<text x="346" y="66" font-size="13" fill="#7B4FA0" font-weight="bold" text-anchor="middle">D</text>
</svg>`,
                options: 'A ¤ B ¤ C ¤ D',
                explanation: `Le point d’abscisse 0 est celui qui est placé exactement à l’origine, sur la graduation centrale : c’est le point B.<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 420 170" xmlns="http://www.w3.org/2000/svg" style="max-width:420px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56121ge" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="420" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56121ge)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="210" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="380" y="100" font-size="12" fill="#333" text-anchor="middle">5</text>
<circle cx="108" cy="78" r="5" fill="#2E5C8A"/>
<text x="108" y="66" font-size="13" fill="#2E5C8A" font-weight="bold" text-anchor="middle">A</text>
<circle cx="210" cy="78" r="5" fill="#1F7A4C"/>
<text x="210" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">B</text>
<line x1="210" y1="78" x2="210" y2="118" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<text x="210" y="132" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">0</text>
<circle cx="278" cy="78" r="5" fill="#1F7A4C"/>
<text x="278" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">C</text>
<circle cx="346" cy="78" r="5" fill="#7B4FA0"/>
<text x="346" y="66" font-size="13" fill="#7B4FA0" font-weight="bold" text-anchor="middle">D</text>
</svg></div>`
            },
            {
                quiz: { q: 'Sur la droite graduée ci-dessous, quel point a pour abscisse 2,5 ?', a: 'C' },
                figure: `<svg viewBox="0 0 488 150" xmlns="http://www.w3.org/2000/svg" style="max-width:480px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56121h" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="488" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56121h)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="244" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="414" y1="71" x2="414" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="448" y1="71" x2="448" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="448" y="100" font-size="12" fill="#333" text-anchor="middle">3,0</text>
<circle cx="40" cy="78" r="4.5" fill="#2E5C8A"/>
<text x="40" y="66" font-size="13" fill="#2E5C8A" font-weight="bold" text-anchor="middle">A</text>
<circle cx="312" cy="78" r="4.5" fill="#B5651D"/>
<text x="312" y="66" font-size="13" fill="#B5651D" font-weight="bold" text-anchor="middle">B</text>
<circle cx="414" cy="78" r="4.5" fill="#1F7A4C"/>
<text x="414" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">C</text>
<circle cx="176" cy="78" r="4.5" fill="#7B4FA0"/>
<text x="176" y="66" font-size="13" fill="#7B4FA0" font-weight="bold" text-anchor="middle">D</text>
</svg>`,
                options: 'A ¤ B ¤ C ¤ D',
                explanation: `Entre 0 et 3 il y a 6 intervalles, donc une graduation vaut 0,5. Le point situé 5 graduations à droite de 0 (soit 5 × 0,5 = 2,5) est le point C.<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 488 170" xmlns="http://www.w3.org/2000/svg" style="max-width:480px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56121he" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="488" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56121he)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="244" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="414" y1="71" x2="414" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="448" y1="71" x2="448" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="448" y="100" font-size="12" fill="#333" text-anchor="middle">3,0</text>
<circle cx="40" cy="78" r="5" fill="#2E5C8A"/>
<text x="40" y="66" font-size="13" fill="#2E5C8A" font-weight="bold" text-anchor="middle">A</text>
<circle cx="312" cy="78" r="5" fill="#B5651D"/>
<text x="312" y="66" font-size="13" fill="#B5651D" font-weight="bold" text-anchor="middle">B</text>
<circle cx="414" cy="78" r="5" fill="#1F7A4C"/>
<text x="414" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">C</text>
<line x1="414" y1="78" x2="414" y2="118" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<text x="414" y="132" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">2,5</text>
<circle cx="176" cy="78" r="5" fill="#7B4FA0"/>
<text x="176" y="66" font-size="13" fill="#7B4FA0" font-weight="bold" text-anchor="middle">D</text>
</svg></div>`
            },
            {
                quiz: { q: 'Sur la droite graduée ci-dessous, quel point est situé exactement 3 intervalles à droite de l’origine ?', a: 'A' },
                figure: `<svg viewBox="0 0 488 150" xmlns="http://www.w3.org/2000/svg" style="max-width:480px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56121i" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="488" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56121i)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="244" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="414" y1="71" x2="414" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="448" y1="71" x2="448" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="448" y="100" font-size="12" fill="#333" text-anchor="middle">12</text>
<circle cx="346" cy="78" r="4.5" fill="#2E5C8A"/>
<text x="346" y="66" font-size="13" fill="#2E5C8A" font-weight="bold" text-anchor="middle">A</text>
<circle cx="142" cy="78" r="4.5" fill="#B5651D"/>
<text x="142" y="66" font-size="13" fill="#B5651D" font-weight="bold" text-anchor="middle">B</text>
<circle cx="414" cy="78" r="4.5" fill="#1F7A4C"/>
<text x="414" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">C</text>
<circle cx="74" cy="78" r="4.5" fill="#7B4FA0"/>
<text x="74" y="66" font-size="13" fill="#7B4FA0" font-weight="bold" text-anchor="middle">D</text>
</svg>`,
                options: 'A ¤ B ¤ C ¤ D',
                explanation: `Sans même connaître la valeur d’une graduation, il suffit de compter les intervalles depuis 0 : le point situé 3 intervalles à droite de l’origine est le point A.<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 488 170" xmlns="http://www.w3.org/2000/svg" style="max-width:480px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56121ie" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="488" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56121ie)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="244" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="414" y1="71" x2="414" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="448" y1="71" x2="448" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="448" y="100" font-size="12" fill="#333" text-anchor="middle">12</text>
<circle cx="346" cy="78" r="5" fill="#1F7A4C"/>
<text x="346" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">A</text>
<line x1="346" y1="78" x2="346" y2="118" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<text x="346" y="132" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">6</text>
<circle cx="142" cy="78" r="5" fill="#B5651D"/>
<text x="142" y="66" font-size="13" fill="#B5651D" font-weight="bold" text-anchor="middle">B</text>
<circle cx="414" cy="78" r="5" fill="#1F7A4C"/>
<text x="414" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">C</text>
<circle cx="74" cy="78" r="5" fill="#7B4FA0"/>
<text x="74" y="66" font-size="13" fill="#7B4FA0" font-weight="bold" text-anchor="middle">D</text>
</svg></div>`
            },
            {
                quiz: { q: 'Sur la droite graduée ci-dessous, quel point est situé exactement 4 intervalles à gauche de l’origine ?', a: 'A' },
                figure: `<svg viewBox="0 0 488 150" xmlns="http://www.w3.org/2000/svg" style="max-width:480px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56121j" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="488" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56121j)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="244" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="414" y1="71" x2="414" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="448" y1="71" x2="448" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="448" y="100" font-size="12" fill="#333" text-anchor="middle">0,6</text>
<circle cx="108" cy="78" r="4.5" fill="#2E5C8A"/>
<text x="108" y="66" font-size="13" fill="#2E5C8A" font-weight="bold" text-anchor="middle">A</text>
<circle cx="312" cy="78" r="4.5" fill="#B5651D"/>
<text x="312" y="66" font-size="13" fill="#B5651D" font-weight="bold" text-anchor="middle">B</text>
<circle cx="380" cy="78" r="4.5" fill="#1F7A4C"/>
<text x="380" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">C</text>
<circle cx="176" cy="78" r="4.5" fill="#7B4FA0"/>
<text x="176" y="66" font-size="13" fill="#7B4FA0" font-weight="bold" text-anchor="middle">D</text>
</svg>`,
                options: 'A ¤ B ¤ C ¤ D',
                explanation: `Il suffit de compter les intervalles depuis 0, sans connaître leur valeur : le point situé 4 intervalles à gauche de l’origine est le point A.<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 488 170" xmlns="http://www.w3.org/2000/svg" style="max-width:480px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56121je" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="78" x2="488" y2="78" stroke="#333" stroke-width="2" marker-end="url(#q56121je)"/>
<line x1="40" y1="71" x2="40" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="74" y1="71" x2="74" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="108" y1="71" x2="108" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="142" y1="71" x2="142" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="176" y1="71" x2="176" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="210" y1="71" x2="210" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="244" y1="71" x2="244" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="244" y="100" font-size="12" fill="#333" text-anchor="middle">0</text>
<line x1="278" y1="71" x2="278" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="312" y1="71" x2="312" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="346" y1="71" x2="346" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="380" y1="71" x2="380" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="414" y1="71" x2="414" y2="85" stroke="#333" stroke-width="1.2"/>
<line x1="448" y1="71" x2="448" y2="85" stroke="#333" stroke-width="1.2"/>
<text x="448" y="100" font-size="12" fill="#333" text-anchor="middle">0,6</text>
<circle cx="108" cy="78" r="5" fill="#1F7A4C"/>
<text x="108" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">A</text>
<line x1="108" y1="78" x2="108" y2="118" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<text x="108" y="132" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">-0,4</text>
<circle cx="312" cy="78" r="5" fill="#B5651D"/>
<text x="312" y="66" font-size="13" fill="#B5651D" font-weight="bold" text-anchor="middle">B</text>
<circle cx="380" cy="78" r="5" fill="#1F7A4C"/>
<text x="380" y="66" font-size="13" fill="#1F7A4C" font-weight="bold" text-anchor="middle">C</text>
<circle cx="176" cy="78" r="5" fill="#7B4FA0"/>
<text x="176" y="66" font-size="13" fill="#7B4FA0" font-weight="bold" text-anchor="middle">D</text>
</svg></div>`
            }
],

"56211": [
            {
                quiz: { q: 'Lis les coordonnées du point M placé dans le repère ci-dessous.', a: '(3 ; -2)' },
                figure: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56211ax" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56211ay" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="300" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="300" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="300" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="300" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="300" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="300" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="300" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="300" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="300" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#333" stroke-width="2" marker-end="url(#q56211ax)"/>
<line x1="150" y1="300" x2="150" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56211ay)"/>
<line x1="0" y1="145" x2="0" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="0" y="168" font-size="11" fill="#333" text-anchor="middle">-5</text>
<line x1="30" y1="145" x2="30" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="145" x2="60" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="145" x2="90" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="145" x2="120" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="180" y1="145" x2="180" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="145" x2="210" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="145" x2="240" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="145" x2="270" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="145" x2="300" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="300" y="168" font-size="11" fill="#333" text-anchor="middle">5</text>
<line x1="145" y1="300" x2="155" y2="300" stroke="#333" stroke-width="1.1"/>
<text x="142" y="304" font-size="11" fill="#333" text-anchor="end">-5</text>
<line x1="145" y1="270" x2="155" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="240" x2="155" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="210" x2="155" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="180" x2="155" y2="180" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="120" x2="155" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="90" x2="155" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="60" x2="155" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="30" x2="155" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="0" x2="155" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="142" y="4" font-size="11" fill="#333" text-anchor="end">5</text>
<text x="142" y="168" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="294" y="142" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="160" y="12" font-size="12" fill="#333">y</text>
<circle cx="240" cy="210" r="4.5" fill="#2E5C8A"/>
<text x="248" y="202" font-size="13" fill="#2E5C8A" font-weight="bold">M</text>
</svg>`,
                options: '(3 ; -2) ¤ (-2 ; 3) ¤ (-3 ; 2) ¤ (3 ; 2)',
                explanation: `Sur l’axe des abscisses, entre 0 et 5 il y a 5 intervalles donc une graduation vaut 1 ; M est à 3 graduations à droite : abscisse 3. Sur l’axe des ordonnées, même raisonnement : M est à 2 graduations en dessous : ordonnée -2. Donc M(3 ; -2).<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56211aex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56211aey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="300" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="300" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="300" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="300" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="300" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="300" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="300" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="300" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="300" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#333" stroke-width="2" marker-end="url(#q56211aex)"/>
<line x1="150" y1="300" x2="150" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56211aey)"/>
<line x1="0" y1="145" x2="0" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="0" y="168" font-size="11" fill="#333" text-anchor="middle">-5</text>
<line x1="30" y1="145" x2="30" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="145" x2="60" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="145" x2="90" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="145" x2="120" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="180" y1="145" x2="180" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="145" x2="210" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="145" x2="240" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="145" x2="270" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="145" x2="300" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="300" y="168" font-size="11" fill="#333" text-anchor="middle">5</text>
<line x1="145" y1="300" x2="155" y2="300" stroke="#333" stroke-width="1.1"/>
<text x="142" y="304" font-size="11" fill="#333" text-anchor="end">-5</text>
<line x1="145" y1="270" x2="155" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="240" x2="155" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="210" x2="155" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="180" x2="155" y2="180" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="120" x2="155" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="90" x2="155" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="60" x2="155" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="30" x2="155" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="0" x2="155" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="142" y="4" font-size="11" fill="#333" text-anchor="end">5</text>
<text x="142" y="168" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="294" y="142" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="160" y="12" font-size="12" fill="#333">y</text>
<line x1="240" y1="150" x2="240" y2="210" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="150" y1="210" x2="240" y2="210" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<circle cx="240" cy="210" r="5" fill="#1F7A4C"/>
<text x="248" y="202" font-size="13" fill="#1F7A4C" font-weight="bold">M</text>
</svg></div>`
            },
            {
                quiz: { q: 'Lis les coordonnées du point M placé dans le repère ci-dessous.', a: '(-6 ; 8)' },
                figure: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56211bx" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56211by" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="300" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="300" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="300" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="300" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="300" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="300" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="300" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="300" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="300" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#333" stroke-width="2" marker-end="url(#q56211bx)"/>
<line x1="150" y1="300" x2="150" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56211by)"/>
<line x1="0" y1="145" x2="0" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="0" y="168" font-size="11" fill="#333" text-anchor="middle">-10</text>
<line x1="30" y1="145" x2="30" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="145" x2="60" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="145" x2="90" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="145" x2="120" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="180" y1="145" x2="180" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="145" x2="210" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="145" x2="240" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="145" x2="270" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="145" x2="300" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="300" y="168" font-size="11" fill="#333" text-anchor="middle">10</text>
<line x1="145" y1="300" x2="155" y2="300" stroke="#333" stroke-width="1.1"/>
<text x="142" y="304" font-size="11" fill="#333" text-anchor="end">-10</text>
<line x1="145" y1="270" x2="155" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="240" x2="155" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="210" x2="155" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="180" x2="155" y2="180" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="120" x2="155" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="90" x2="155" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="60" x2="155" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="30" x2="155" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="0" x2="155" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="142" y="4" font-size="11" fill="#333" text-anchor="end">10</text>
<text x="142" y="168" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="294" y="142" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="160" y="12" font-size="12" fill="#333">y</text>
<circle cx="60" cy="30" r="4.5" fill="#2E5C8A"/>
<text x="68" y="22" font-size="13" fill="#2E5C8A" font-weight="bold">M</text>
</svg>`,
                options: '(-6 ; 8) ¤ (8 ; -6) ¤ (-3 ; 4) ¤ (6 ; 8)',
                explanation: `Sur chaque axe, entre 0 et 10 il y a 5 intervalles donc une graduation vaut 2. M est à 3 graduations à gauche (abscisse -6) et à 4 graduations au-dessus (ordonnée 8). Donc M(-6 ; 8).<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56211bex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56211bey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="300" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="300" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="300" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="300" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="300" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="300" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="300" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="300" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="300" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#333" stroke-width="2" marker-end="url(#q56211bex)"/>
<line x1="150" y1="300" x2="150" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56211bey)"/>
<line x1="0" y1="145" x2="0" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="0" y="168" font-size="11" fill="#333" text-anchor="middle">-10</text>
<line x1="30" y1="145" x2="30" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="145" x2="60" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="145" x2="90" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="145" x2="120" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="180" y1="145" x2="180" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="145" x2="210" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="145" x2="240" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="145" x2="270" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="145" x2="300" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="300" y="168" font-size="11" fill="#333" text-anchor="middle">10</text>
<line x1="145" y1="300" x2="155" y2="300" stroke="#333" stroke-width="1.1"/>
<text x="142" y="304" font-size="11" fill="#333" text-anchor="end">-10</text>
<line x1="145" y1="270" x2="155" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="240" x2="155" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="210" x2="155" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="180" x2="155" y2="180" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="120" x2="155" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="90" x2="155" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="60" x2="155" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="30" x2="155" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="0" x2="155" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="142" y="4" font-size="11" fill="#333" text-anchor="end">10</text>
<text x="142" y="168" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="294" y="142" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="160" y="12" font-size="12" fill="#333">y</text>
<line x1="60" y1="150" x2="60" y2="30" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="150" y1="30" x2="60" y2="30" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<circle cx="60" cy="30" r="5" fill="#1F7A4C"/>
<text x="68" y="22" font-size="13" fill="#1F7A4C" font-weight="bold">M</text>
</svg></div>`
            },
            {
                quiz: { q: 'Lis les coordonnées du point M placé dans le repère ci-dessous.', a: '(2 ; -1,5)' },
                figure: `<svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" style="max-width:360px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56211cx" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56211cy" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="330" y1="0" x2="330" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="360" y1="0" x2="360" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="360" x2="360" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="330" x2="360" y2="330" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="360" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="360" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="360" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="360" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="360" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="360" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="360" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="360" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="360" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="360" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="360" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="360" y2="180" stroke="#333" stroke-width="2" marker-end="url(#q56211cx)"/>
<line x1="180" y1="360" x2="180" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56211cy)"/>
<line x1="0" y1="175" x2="0" y2="185" stroke="#333" stroke-width="1.1"/>
<text x="0" y="198" font-size="11" fill="#333" text-anchor="middle">-3,0</text>
<line x1="30" y1="175" x2="30" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="175" x2="60" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="175" x2="90" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="175" x2="120" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="150" y1="175" x2="150" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="175" x2="210" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="175" x2="240" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="175" x2="270" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="175" x2="300" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="330" y1="175" x2="330" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="360" y1="175" x2="360" y2="185" stroke="#333" stroke-width="1.1"/>
<text x="360" y="198" font-size="11" fill="#333" text-anchor="middle">3,0</text>
<line x1="175" y1="360" x2="185" y2="360" stroke="#333" stroke-width="1.1"/>
<text x="172" y="364" font-size="11" fill="#333" text-anchor="end">-3,0</text>
<line x1="175" y1="330" x2="185" y2="330" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="300" x2="185" y2="300" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="270" x2="185" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="240" x2="185" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="210" x2="185" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="150" x2="185" y2="150" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="120" x2="185" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="90" x2="185" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="60" x2="185" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="30" x2="185" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="0" x2="185" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="172" y="4" font-size="11" fill="#333" text-anchor="end">3,0</text>
<text x="172" y="198" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="354" y="172" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="190" y="12" font-size="12" fill="#333">y</text>
<circle cx="300" cy="270" r="4.5" fill="#2E5C8A"/>
<text x="308" y="262" font-size="13" fill="#2E5C8A" font-weight="bold">M</text>
</svg>`,
                options: '(2 ; -1,5) ¤ (-1,5 ; 2) ¤ (4 ; -3) ¤ (2 ; 1,5)',
                explanation: `Sur chaque axe, entre 0 et 3 il y a 6 intervalles donc une graduation vaut 0,5. M est à 4 graduations à droite (abscisse 4 × 0,5 = 2) et à 3 graduations en dessous (ordonnée -3 × 0,5 = -1,5). Donc M(2 ; -1,5).<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" style="max-width:360px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56211cex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56211cey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="330" y1="0" x2="330" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="360" y1="0" x2="360" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="360" x2="360" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="330" x2="360" y2="330" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="360" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="360" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="360" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="360" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="360" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="360" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="360" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="360" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="360" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="360" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="360" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="360" y2="180" stroke="#333" stroke-width="2" marker-end="url(#q56211cex)"/>
<line x1="180" y1="360" x2="180" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56211cey)"/>
<line x1="0" y1="175" x2="0" y2="185" stroke="#333" stroke-width="1.1"/>
<text x="0" y="198" font-size="11" fill="#333" text-anchor="middle">-3,0</text>
<line x1="30" y1="175" x2="30" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="175" x2="60" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="175" x2="90" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="175" x2="120" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="150" y1="175" x2="150" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="175" x2="210" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="175" x2="240" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="175" x2="270" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="175" x2="300" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="330" y1="175" x2="330" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="360" y1="175" x2="360" y2="185" stroke="#333" stroke-width="1.1"/>
<text x="360" y="198" font-size="11" fill="#333" text-anchor="middle">3,0</text>
<line x1="175" y1="360" x2="185" y2="360" stroke="#333" stroke-width="1.1"/>
<text x="172" y="364" font-size="11" fill="#333" text-anchor="end">-3,0</text>
<line x1="175" y1="330" x2="185" y2="330" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="300" x2="185" y2="300" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="270" x2="185" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="240" x2="185" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="210" x2="185" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="150" x2="185" y2="150" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="120" x2="185" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="90" x2="185" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="60" x2="185" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="30" x2="185" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="0" x2="185" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="172" y="4" font-size="11" fill="#333" text-anchor="end">3,0</text>
<text x="172" y="198" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="354" y="172" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="190" y="12" font-size="12" fill="#333">y</text>
<line x1="300" y1="180" x2="300" y2="270" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="180" y1="270" x2="300" y2="270" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<circle cx="300" cy="270" r="5" fill="#1F7A4C"/>
<text x="308" y="262" font-size="13" fill="#1F7A4C" font-weight="bold">M</text>
</svg></div>`
            },
            {
                quiz: { q: 'Lis les coordonnées du point M placé dans le repère ci-dessous.', a: '(-0,7 ; 0,4)' },
                figure: `<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" style="max-width:380px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56211dx" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56211dy" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="330" y1="0" x2="330" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="360" y1="0" x2="360" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="390" y1="0" x2="390" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="420" y1="0" x2="420" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="450" y1="0" x2="450" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="480" y1="0" x2="480" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="510" y1="0" x2="510" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="540" y1="0" x2="540" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="570" y1="0" x2="570" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="600" y1="0" x2="600" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="600" x2="600" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="570" x2="600" y2="570" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="540" x2="600" y2="540" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="510" x2="600" y2="510" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="480" x2="600" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="450" x2="600" y2="450" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="420" x2="600" y2="420" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="390" x2="600" y2="390" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="360" x2="600" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="330" x2="600" y2="330" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="600" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="600" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="600" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="600" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="600" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="600" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="600" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="600" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="600" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="600" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="600" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="600" y2="300" stroke="#333" stroke-width="2" marker-end="url(#q56211dx)"/>
<line x1="300" y1="600" x2="300" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56211dy)"/>
<line x1="0" y1="295" x2="0" y2="305" stroke="#333" stroke-width="1.1"/>
<text x="0" y="318" font-size="11" fill="#333" text-anchor="middle">-1,0</text>
<line x1="30" y1="295" x2="30" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="295" x2="60" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="295" x2="90" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="295" x2="120" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="150" y1="295" x2="150" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="180" y1="295" x2="180" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="295" x2="210" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="295" x2="240" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="295" x2="270" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="330" y1="295" x2="330" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="360" y1="295" x2="360" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="390" y1="295" x2="390" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="420" y1="295" x2="420" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="450" y1="295" x2="450" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="480" y1="295" x2="480" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="510" y1="295" x2="510" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="540" y1="295" x2="540" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="570" y1="295" x2="570" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="600" y1="295" x2="600" y2="305" stroke="#333" stroke-width="1.1"/>
<text x="600" y="318" font-size="11" fill="#333" text-anchor="middle">1,0</text>
<line x1="295" y1="600" x2="305" y2="600" stroke="#333" stroke-width="1.1"/>
<text x="292" y="604" font-size="11" fill="#333" text-anchor="end">-1,0</text>
<line x1="295" y1="570" x2="305" y2="570" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="540" x2="305" y2="540" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="510" x2="305" y2="510" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="480" x2="305" y2="480" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="450" x2="305" y2="450" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="420" x2="305" y2="420" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="390" x2="305" y2="390" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="360" x2="305" y2="360" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="330" x2="305" y2="330" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="270" x2="305" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="240" x2="305" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="210" x2="305" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="180" x2="305" y2="180" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="150" x2="305" y2="150" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="120" x2="305" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="90" x2="305" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="60" x2="305" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="30" x2="305" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="0" x2="305" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="292" y="4" font-size="11" fill="#333" text-anchor="end">1,0</text>
<text x="292" y="318" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="594" y="292" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="310" y="12" font-size="12" fill="#333">y</text>
<circle cx="90" cy="180" r="4.5" fill="#2E5C8A"/>
<text x="98" y="172" font-size="13" fill="#2E5C8A" font-weight="bold">M</text>
</svg>`,
                options: '(-0,7 ; 0,4) ¤ (0,4 ; -0,7) ¤ (-7 ; 4) ¤ (-0,7 ; -0,4)',
                explanation: `Sur chaque axe, entre 0 et 1,0 il y a 10 intervalles donc une graduation vaut 0,1. M est à 7 graduations à gauche (abscisse -0,7) et à 4 graduations au-dessus (ordonnée 0,4). Donc M(-0,7 ; 0,4).<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" style="max-width:380px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56211dex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56211dey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="330" y1="0" x2="330" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="360" y1="0" x2="360" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="390" y1="0" x2="390" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="420" y1="0" x2="420" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="450" y1="0" x2="450" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="480" y1="0" x2="480" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="510" y1="0" x2="510" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="540" y1="0" x2="540" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="570" y1="0" x2="570" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="600" y1="0" x2="600" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="600" x2="600" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="570" x2="600" y2="570" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="540" x2="600" y2="540" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="510" x2="600" y2="510" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="480" x2="600" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="450" x2="600" y2="450" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="420" x2="600" y2="420" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="390" x2="600" y2="390" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="360" x2="600" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="330" x2="600" y2="330" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="600" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="600" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="600" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="600" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="600" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="600" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="600" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="600" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="600" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="600" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="600" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="600" y2="300" stroke="#333" stroke-width="2" marker-end="url(#q56211dex)"/>
<line x1="300" y1="600" x2="300" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56211dey)"/>
<line x1="0" y1="295" x2="0" y2="305" stroke="#333" stroke-width="1.1"/>
<text x="0" y="318" font-size="11" fill="#333" text-anchor="middle">-1,0</text>
<line x1="30" y1="295" x2="30" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="295" x2="60" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="295" x2="90" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="295" x2="120" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="150" y1="295" x2="150" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="180" y1="295" x2="180" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="295" x2="210" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="295" x2="240" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="295" x2="270" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="330" y1="295" x2="330" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="360" y1="295" x2="360" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="390" y1="295" x2="390" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="420" y1="295" x2="420" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="450" y1="295" x2="450" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="480" y1="295" x2="480" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="510" y1="295" x2="510" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="540" y1="295" x2="540" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="570" y1="295" x2="570" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="600" y1="295" x2="600" y2="305" stroke="#333" stroke-width="1.1"/>
<text x="600" y="318" font-size="11" fill="#333" text-anchor="middle">1,0</text>
<line x1="295" y1="600" x2="305" y2="600" stroke="#333" stroke-width="1.1"/>
<text x="292" y="604" font-size="11" fill="#333" text-anchor="end">-1,0</text>
<line x1="295" y1="570" x2="305" y2="570" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="540" x2="305" y2="540" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="510" x2="305" y2="510" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="480" x2="305" y2="480" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="450" x2="305" y2="450" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="420" x2="305" y2="420" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="390" x2="305" y2="390" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="360" x2="305" y2="360" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="330" x2="305" y2="330" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="270" x2="305" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="240" x2="305" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="210" x2="305" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="180" x2="305" y2="180" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="150" x2="305" y2="150" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="120" x2="305" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="90" x2="305" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="60" x2="305" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="30" x2="305" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="0" x2="305" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="292" y="4" font-size="11" fill="#333" text-anchor="end">1,0</text>
<text x="292" y="318" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="594" y="292" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="310" y="12" font-size="12" fill="#333">y</text>
<line x1="90" y1="300" x2="90" y2="180" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="300" y1="180" x2="90" y2="180" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<circle cx="90" cy="180" r="5" fill="#1F7A4C"/>
<text x="98" y="172" font-size="13" fill="#1F7A4C" font-weight="bold">M</text>
</svg></div>`
            },
            {
                quiz: { q: 'Lis les coordonnées du point M placé dans le repère ci-dessous.', a: '(0,05 ; -0,06)' },
                figure: `<svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" style="max-width:380px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56211ex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56211ey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="330" y1="0" x2="330" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="360" y1="0" x2="360" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="390" y1="0" x2="390" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="420" y1="0" x2="420" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="450" y1="0" x2="450" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="480" y1="0" x2="480" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="480" x2="480" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="450" x2="480" y2="450" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="420" x2="480" y2="420" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="390" x2="480" y2="390" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="360" x2="480" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="330" x2="480" y2="330" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="480" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="480" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="480" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="480" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="480" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="480" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="480" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="480" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="480" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="480" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="480" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="480" y2="240" stroke="#333" stroke-width="2" marker-end="url(#q56211ex)"/>
<line x1="240" y1="480" x2="240" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56211ey)"/>
<line x1="0" y1="235" x2="0" y2="245" stroke="#333" stroke-width="1.1"/>
<text x="0" y="258" font-size="11" fill="#333" text-anchor="middle">-0,08</text>
<line x1="30" y1="235" x2="30" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="235" x2="60" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="235" x2="90" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="235" x2="120" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="150" y1="235" x2="150" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="180" y1="235" x2="180" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="235" x2="210" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="235" x2="270" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="235" x2="300" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="330" y1="235" x2="330" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="360" y1="235" x2="360" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="390" y1="235" x2="390" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="420" y1="235" x2="420" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="450" y1="235" x2="450" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="480" y1="235" x2="480" y2="245" stroke="#333" stroke-width="1.1"/>
<text x="480" y="258" font-size="11" fill="#333" text-anchor="middle">0,08</text>
<line x1="235" y1="480" x2="245" y2="480" stroke="#333" stroke-width="1.1"/>
<text x="232" y="484" font-size="11" fill="#333" text-anchor="end">-0,08</text>
<line x1="235" y1="450" x2="245" y2="450" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="420" x2="245" y2="420" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="390" x2="245" y2="390" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="360" x2="245" y2="360" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="330" x2="245" y2="330" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="300" x2="245" y2="300" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="270" x2="245" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="210" x2="245" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="180" x2="245" y2="180" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="150" x2="245" y2="150" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="120" x2="245" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="90" x2="245" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="60" x2="245" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="30" x2="245" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="0" x2="245" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="232" y="4" font-size="11" fill="#333" text-anchor="end">0,08</text>
<text x="232" y="258" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="474" y="232" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="250" y="12" font-size="12" fill="#333">y</text>
<circle cx="390" cy="420" r="4.5" fill="#2E5C8A"/>
<text x="398" y="412" font-size="13" fill="#2E5C8A" font-weight="bold">M</text>
</svg>`,
                options: '(0,05 ; -0,06) ¤ (-0,06 ; 0,05) ¤ (5 ; -6) ¤ (0,05 ; 0,06)',
                explanation: `Sur chaque axe, entre 0 et 0,08 il y a 8 intervalles donc une graduation vaut 0,01. M est à 5 graduations à droite (abscisse 0,05) et à 6 graduations en dessous (ordonnée -0,06). Donc M(0,05 ; -0,06).<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" style="max-width:380px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56211eex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56211eey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="330" y1="0" x2="330" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="360" y1="0" x2="360" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="390" y1="0" x2="390" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="420" y1="0" x2="420" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="450" y1="0" x2="450" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="480" y1="0" x2="480" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="480" x2="480" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="450" x2="480" y2="450" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="420" x2="480" y2="420" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="390" x2="480" y2="390" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="360" x2="480" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="330" x2="480" y2="330" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="480" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="480" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="480" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="480" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="480" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="480" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="480" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="480" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="480" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="480" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="480" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="480" y2="240" stroke="#333" stroke-width="2" marker-end="url(#q56211eex)"/>
<line x1="240" y1="480" x2="240" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56211eey)"/>
<line x1="0" y1="235" x2="0" y2="245" stroke="#333" stroke-width="1.1"/>
<text x="0" y="258" font-size="11" fill="#333" text-anchor="middle">-0,08</text>
<line x1="30" y1="235" x2="30" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="235" x2="60" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="235" x2="90" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="235" x2="120" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="150" y1="235" x2="150" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="180" y1="235" x2="180" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="235" x2="210" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="235" x2="270" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="235" x2="300" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="330" y1="235" x2="330" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="360" y1="235" x2="360" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="390" y1="235" x2="390" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="420" y1="235" x2="420" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="450" y1="235" x2="450" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="480" y1="235" x2="480" y2="245" stroke="#333" stroke-width="1.1"/>
<text x="480" y="258" font-size="11" fill="#333" text-anchor="middle">0,08</text>
<line x1="235" y1="480" x2="245" y2="480" stroke="#333" stroke-width="1.1"/>
<text x="232" y="484" font-size="11" fill="#333" text-anchor="end">-0,08</text>
<line x1="235" y1="450" x2="245" y2="450" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="420" x2="245" y2="420" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="390" x2="245" y2="390" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="360" x2="245" y2="360" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="330" x2="245" y2="330" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="300" x2="245" y2="300" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="270" x2="245" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="210" x2="245" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="180" x2="245" y2="180" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="150" x2="245" y2="150" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="120" x2="245" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="90" x2="245" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="60" x2="245" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="30" x2="245" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="0" x2="245" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="232" y="4" font-size="11" fill="#333" text-anchor="end">0,08</text>
<text x="232" y="258" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="474" y="232" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="250" y="12" font-size="12" fill="#333">y</text>
<line x1="390" y1="240" x2="390" y2="420" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="240" y1="420" x2="390" y2="420" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<circle cx="390" cy="420" r="5" fill="#1F7A4C"/>
<text x="398" y="412" font-size="13" fill="#1F7A4C" font-weight="bold">M</text>
</svg></div>`
            },
            {
                quiz: { q: 'Lis les coordonnées du point M placé dans le repère ci-dessous. Attention, les deux axes n’ont pas forcément la même échelle !', a: '(4 ; -6)' },
                figure: `<svg viewBox="0 0 360 300" xmlns="http://www.w3.org/2000/svg" style="max-width:360px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56211fx" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56211fy" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="330" y1="0" x2="330" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="360" y1="0" x2="360" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="360" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="360" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="360" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="360" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="360" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="360" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="360" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="360" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="360" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="360" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="360" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="360" y2="150" stroke="#333" stroke-width="2" marker-end="url(#q56211fx)"/>
<line x1="180" y1="300" x2="180" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56211fy)"/>
<line x1="0" y1="145" x2="0" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="0" y="168" font-size="11" fill="#333" text-anchor="middle">-6</text>
<line x1="30" y1="145" x2="30" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="145" x2="60" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="145" x2="90" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="145" x2="120" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="150" y1="145" x2="150" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="145" x2="210" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="145" x2="240" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="145" x2="270" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="145" x2="300" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="330" y1="145" x2="330" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="360" y1="145" x2="360" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="360" y="168" font-size="11" fill="#333" text-anchor="middle">6</text>
<line x1="175" y1="300" x2="185" y2="300" stroke="#333" stroke-width="1.1"/>
<text x="172" y="304" font-size="11" fill="#333" text-anchor="end">-10</text>
<line x1="175" y1="270" x2="185" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="240" x2="185" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="210" x2="185" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="180" x2="185" y2="180" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="120" x2="185" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="90" x2="185" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="60" x2="185" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="30" x2="185" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="0" x2="185" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="172" y="4" font-size="11" fill="#333" text-anchor="end">10</text>
<text x="172" y="168" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="354" y="142" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="190" y="12" font-size="12" fill="#333">y</text>
<circle cx="300" cy="240" r="4.5" fill="#2E5C8A"/>
<text x="308" y="232" font-size="13" fill="#2E5C8A" font-weight="bold">M</text>
</svg>`,
                options: '(4 ; -6) ¤ (4 ; -3) ¤ (-6 ; 4) ¤ (4 ; -12)',
                explanation: `Sur l’axe des abscisses, entre 0 et 6 il y a 6 intervalles : une graduation vaut 1, donc l’abscisse de M est 4. Sur l’axe des ordonnées, entre 0 et 10 il y a 5 intervalles : une graduation vaut 2, donc l’ordonnée de M est -3 × 2 = -6. Donc M(4 ; -6).<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 360 300" xmlns="http://www.w3.org/2000/svg" style="max-width:360px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56211fex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56211fey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="330" y1="0" x2="330" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="360" y1="0" x2="360" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="360" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="360" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="360" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="360" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="360" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="360" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="360" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="360" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="360" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="360" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="360" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="360" y2="150" stroke="#333" stroke-width="2" marker-end="url(#q56211fex)"/>
<line x1="180" y1="300" x2="180" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56211fey)"/>
<line x1="0" y1="145" x2="0" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="0" y="168" font-size="11" fill="#333" text-anchor="middle">-6</text>
<line x1="30" y1="145" x2="30" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="145" x2="60" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="145" x2="90" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="145" x2="120" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="150" y1="145" x2="150" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="145" x2="210" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="145" x2="240" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="145" x2="270" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="145" x2="300" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="330" y1="145" x2="330" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="360" y1="145" x2="360" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="360" y="168" font-size="11" fill="#333" text-anchor="middle">6</text>
<line x1="175" y1="300" x2="185" y2="300" stroke="#333" stroke-width="1.1"/>
<text x="172" y="304" font-size="11" fill="#333" text-anchor="end">-10</text>
<line x1="175" y1="270" x2="185" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="240" x2="185" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="210" x2="185" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="180" x2="185" y2="180" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="120" x2="185" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="90" x2="185" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="60" x2="185" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="30" x2="185" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="0" x2="185" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="172" y="4" font-size="11" fill="#333" text-anchor="end">10</text>
<text x="172" y="168" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="354" y="142" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="190" y="12" font-size="12" fill="#333">y</text>
<line x1="300" y1="150" x2="300" y2="240" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="180" y1="240" x2="300" y2="240" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<circle cx="300" cy="240" r="5" fill="#1F7A4C"/>
<text x="308" y="232" font-size="13" fill="#1F7A4C" font-weight="bold">M</text>
</svg></div>`
            },
            {
                quiz: { q: 'Lis les coordonnées du point M placé dans le repère ci-dessous. Attention, les deux axes n’ont pas forcément la même échelle !', a: '(-4 ; 2,5)' },
                figure: `<svg viewBox="0 0 300 360" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56211gx" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56211gy" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="360" x2="300" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="330" x2="300" y2="330" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="300" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="300" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="300" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="300" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="300" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="300" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="300" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="300" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="300" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="300" y2="180" stroke="#333" stroke-width="2" marker-end="url(#q56211gx)"/>
<line x1="150" y1="360" x2="150" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56211gy)"/>
<line x1="0" y1="175" x2="0" y2="185" stroke="#333" stroke-width="1.1"/>
<text x="0" y="198" font-size="11" fill="#333" text-anchor="middle">-10</text>
<line x1="30" y1="175" x2="30" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="175" x2="60" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="175" x2="90" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="175" x2="120" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="180" y1="175" x2="180" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="175" x2="210" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="175" x2="240" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="175" x2="270" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="175" x2="300" y2="185" stroke="#333" stroke-width="1.1"/>
<text x="300" y="198" font-size="11" fill="#333" text-anchor="middle">10</text>
<line x1="145" y1="360" x2="155" y2="360" stroke="#333" stroke-width="1.1"/>
<text x="142" y="364" font-size="11" fill="#333" text-anchor="end">-3,0</text>
<line x1="145" y1="330" x2="155" y2="330" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="300" x2="155" y2="300" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="270" x2="155" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="240" x2="155" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="210" x2="155" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="150" x2="155" y2="150" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="120" x2="155" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="90" x2="155" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="60" x2="155" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="30" x2="155" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="0" x2="155" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="142" y="4" font-size="11" fill="#333" text-anchor="end">3,0</text>
<text x="142" y="198" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="294" y="172" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="160" y="12" font-size="12" fill="#333">y</text>
<circle cx="90" cy="30" r="4.5" fill="#2E5C8A"/>
<text x="98" y="22" font-size="13" fill="#2E5C8A" font-weight="bold">M</text>
</svg>`,
                options: '(-4 ; 2,5) ¤ (-2 ; 5) ¤ (2,5 ; -4) ¤ (-4 ; 5)',
                explanation: `Sur l’axe des abscisses, entre 0 et 10 il y a 5 intervalles : une graduation vaut 2, donc l’abscisse de M est -2 × 2 = -4. Sur l’axe des ordonnées, entre 0 et 3 il y a 6 intervalles : une graduation vaut 0,5, donc l’ordonnée de M est 5 × 0,5 = 2,5. Donc M(-4 ; 2,5).<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 300 360" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56211gex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56211gey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="360" x2="300" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="330" x2="300" y2="330" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="300" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="300" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="300" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="300" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="300" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="300" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="300" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="300" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="300" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="300" y2="180" stroke="#333" stroke-width="2" marker-end="url(#q56211gex)"/>
<line x1="150" y1="360" x2="150" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56211gey)"/>
<line x1="0" y1="175" x2="0" y2="185" stroke="#333" stroke-width="1.1"/>
<text x="0" y="198" font-size="11" fill="#333" text-anchor="middle">-10</text>
<line x1="30" y1="175" x2="30" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="175" x2="60" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="175" x2="90" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="175" x2="120" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="180" y1="175" x2="180" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="175" x2="210" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="175" x2="240" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="175" x2="270" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="175" x2="300" y2="185" stroke="#333" stroke-width="1.1"/>
<text x="300" y="198" font-size="11" fill="#333" text-anchor="middle">10</text>
<line x1="145" y1="360" x2="155" y2="360" stroke="#333" stroke-width="1.1"/>
<text x="142" y="364" font-size="11" fill="#333" text-anchor="end">-3,0</text>
<line x1="145" y1="330" x2="155" y2="330" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="300" x2="155" y2="300" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="270" x2="155" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="240" x2="155" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="210" x2="155" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="150" x2="155" y2="150" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="120" x2="155" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="90" x2="155" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="60" x2="155" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="30" x2="155" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="0" x2="155" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="142" y="4" font-size="11" fill="#333" text-anchor="end">3,0</text>
<text x="142" y="198" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="294" y="172" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="160" y="12" font-size="12" fill="#333">y</text>
<line x1="90" y1="180" x2="90" y2="30" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="150" y1="30" x2="90" y2="30" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<circle cx="90" cy="30" r="5" fill="#1F7A4C"/>
<text x="98" y="22" font-size="13" fill="#1F7A4C" font-weight="bold">M</text>
</svg></div>`
            },
            {
                quiz: { q: 'Lis les coordonnées du point M placé dans le repère ci-dessous.', a: '(-15 ; 10)' },
                figure: `<svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" style="max-width:360px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56211hx" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56211hy" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="330" y1="0" x2="330" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="360" y1="0" x2="360" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="360" x2="360" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="330" x2="360" y2="330" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="360" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="360" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="360" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="360" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="360" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="360" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="360" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="360" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="360" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="360" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="360" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="360" y2="180" stroke="#333" stroke-width="2" marker-end="url(#q56211hx)"/>
<line x1="180" y1="360" x2="180" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56211hy)"/>
<line x1="0" y1="175" x2="0" y2="185" stroke="#333" stroke-width="1.1"/>
<text x="0" y="198" font-size="11" fill="#333" text-anchor="middle">-30</text>
<line x1="30" y1="175" x2="30" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="175" x2="60" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="175" x2="90" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="175" x2="120" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="150" y1="175" x2="150" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="175" x2="210" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="175" x2="240" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="175" x2="270" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="175" x2="300" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="330" y1="175" x2="330" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="360" y1="175" x2="360" y2="185" stroke="#333" stroke-width="1.1"/>
<text x="360" y="198" font-size="11" fill="#333" text-anchor="middle">30</text>
<line x1="175" y1="360" x2="185" y2="360" stroke="#333" stroke-width="1.1"/>
<text x="172" y="364" font-size="11" fill="#333" text-anchor="end">-30</text>
<line x1="175" y1="330" x2="185" y2="330" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="300" x2="185" y2="300" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="270" x2="185" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="240" x2="185" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="210" x2="185" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="150" x2="185" y2="150" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="120" x2="185" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="90" x2="185" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="60" x2="185" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="30" x2="185" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="0" x2="185" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="172" y="4" font-size="11" fill="#333" text-anchor="end">30</text>
<text x="172" y="198" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="354" y="172" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="190" y="12" font-size="12" fill="#333">y</text>
<circle cx="90" cy="120" r="4.5" fill="#2E5C8A"/>
<text x="98" y="112" font-size="13" fill="#2E5C8A" font-weight="bold">M</text>
</svg>`,
                options: '(-15 ; 10) ¤ (10 ; -15) ¤ (-3 ; 2) ¤ (-15 ; -10)',
                explanation: `Sur chaque axe, entre 0 et 30 il y a 6 intervalles donc une graduation vaut 5. M est à 3 graduations à gauche (abscisse -15) et à 2 graduations au-dessus (ordonnée 10). Donc M(-15 ; 10).<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" style="max-width:360px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56211hex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56211hey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="330" y1="0" x2="330" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="360" y1="0" x2="360" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="360" x2="360" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="330" x2="360" y2="330" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="360" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="360" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="360" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="360" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="360" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="360" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="360" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="360" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="360" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="360" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="360" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="360" y2="180" stroke="#333" stroke-width="2" marker-end="url(#q56211hex)"/>
<line x1="180" y1="360" x2="180" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56211hey)"/>
<line x1="0" y1="175" x2="0" y2="185" stroke="#333" stroke-width="1.1"/>
<text x="0" y="198" font-size="11" fill="#333" text-anchor="middle">-30</text>
<line x1="30" y1="175" x2="30" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="175" x2="60" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="175" x2="90" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="175" x2="120" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="150" y1="175" x2="150" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="175" x2="210" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="175" x2="240" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="175" x2="270" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="175" x2="300" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="330" y1="175" x2="330" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="360" y1="175" x2="360" y2="185" stroke="#333" stroke-width="1.1"/>
<text x="360" y="198" font-size="11" fill="#333" text-anchor="middle">30</text>
<line x1="175" y1="360" x2="185" y2="360" stroke="#333" stroke-width="1.1"/>
<text x="172" y="364" font-size="11" fill="#333" text-anchor="end">-30</text>
<line x1="175" y1="330" x2="185" y2="330" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="300" x2="185" y2="300" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="270" x2="185" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="240" x2="185" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="210" x2="185" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="150" x2="185" y2="150" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="120" x2="185" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="90" x2="185" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="60" x2="185" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="30" x2="185" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="0" x2="185" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="172" y="4" font-size="11" fill="#333" text-anchor="end">30</text>
<text x="172" y="198" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="354" y="172" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="190" y="12" font-size="12" fill="#333">y</text>
<line x1="90" y1="180" x2="90" y2="120" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="180" y1="120" x2="90" y2="120" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<circle cx="90" cy="120" r="5" fill="#1F7A4C"/>
<text x="98" y="112" font-size="13" fill="#1F7A4C" font-weight="bold">M</text>
</svg></div>`
            },
            {
                quiz: { q: 'Lis les coordonnées du point M placé dans le repère ci-dessous.', a: '(0 ; 0)' },
                figure: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56211ix" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56211iy" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="300" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="300" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="300" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="300" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="300" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="300" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="300" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="300" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="300" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#333" stroke-width="2" marker-end="url(#q56211ix)"/>
<line x1="150" y1="300" x2="150" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56211iy)"/>
<line x1="0" y1="145" x2="0" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="0" y="168" font-size="11" fill="#333" text-anchor="middle">-5</text>
<line x1="30" y1="145" x2="30" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="145" x2="60" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="145" x2="90" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="145" x2="120" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="180" y1="145" x2="180" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="145" x2="210" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="145" x2="240" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="145" x2="270" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="145" x2="300" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="300" y="168" font-size="11" fill="#333" text-anchor="middle">5</text>
<line x1="145" y1="300" x2="155" y2="300" stroke="#333" stroke-width="1.1"/>
<text x="142" y="304" font-size="11" fill="#333" text-anchor="end">-5</text>
<line x1="145" y1="270" x2="155" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="240" x2="155" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="210" x2="155" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="180" x2="155" y2="180" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="120" x2="155" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="90" x2="155" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="60" x2="155" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="30" x2="155" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="0" x2="155" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="142" y="4" font-size="11" fill="#333" text-anchor="end">5</text>
<text x="142" y="168" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="294" y="142" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="160" y="12" font-size="12" fill="#333">y</text>
<circle cx="150" cy="150" r="4.5" fill="#2E5C8A"/>
<text x="158" y="142" font-size="13" fill="#2E5C8A" font-weight="bold">M</text>
</svg>`,
                options: '(0 ; 0) ¤ (1 ; 1) ¤ (-1 ; -1) ¤ Impossible à lire',
                explanation: `Le point M est placé exactement à l’intersection des deux axes : c’est l’origine du repère, ses coordonnées sont (0 ; 0).<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56211iex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56211iey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="300" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="300" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="300" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="300" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="300" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="300" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="300" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="300" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="300" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#333" stroke-width="2" marker-end="url(#q56211iex)"/>
<line x1="150" y1="300" x2="150" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56211iey)"/>
<line x1="0" y1="145" x2="0" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="0" y="168" font-size="11" fill="#333" text-anchor="middle">-5</text>
<line x1="30" y1="145" x2="30" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="145" x2="60" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="145" x2="90" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="145" x2="120" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="180" y1="145" x2="180" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="145" x2="210" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="145" x2="240" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="145" x2="270" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="145" x2="300" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="300" y="168" font-size="11" fill="#333" text-anchor="middle">5</text>
<line x1="145" y1="300" x2="155" y2="300" stroke="#333" stroke-width="1.1"/>
<text x="142" y="304" font-size="11" fill="#333" text-anchor="end">-5</text>
<line x1="145" y1="270" x2="155" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="240" x2="155" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="210" x2="155" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="180" x2="155" y2="180" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="120" x2="155" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="90" x2="155" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="60" x2="155" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="30" x2="155" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="0" x2="155" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="142" y="4" font-size="11" fill="#333" text-anchor="end">5</text>
<text x="142" y="168" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="294" y="142" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="160" y="12" font-size="12" fill="#333">y</text>
<line x1="150" y1="150" x2="150" y2="150" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="150" y1="150" x2="150" y2="150" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<circle cx="150" cy="150" r="5" fill="#1F7A4C"/>
<text x="158" y="142" font-size="13" fill="#1F7A4C" font-weight="bold">M</text>
</svg></div>`
            },
            {
                quiz: { q: 'Lis les coordonnées du point M placé dans le repère ci-dessous.', a: '(0 ; -4)' },
                figure: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56211jx" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56211jy" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="300" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="300" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="300" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="300" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="300" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="300" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="300" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="300" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="300" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#333" stroke-width="2" marker-end="url(#q56211jx)"/>
<line x1="150" y1="300" x2="150" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56211jy)"/>
<line x1="0" y1="145" x2="0" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="0" y="168" font-size="11" fill="#333" text-anchor="middle">-5</text>
<line x1="30" y1="145" x2="30" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="145" x2="60" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="145" x2="90" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="145" x2="120" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="180" y1="145" x2="180" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="145" x2="210" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="145" x2="240" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="145" x2="270" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="145" x2="300" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="300" y="168" font-size="11" fill="#333" text-anchor="middle">5</text>
<line x1="145" y1="300" x2="155" y2="300" stroke="#333" stroke-width="1.1"/>
<text x="142" y="304" font-size="11" fill="#333" text-anchor="end">-5</text>
<line x1="145" y1="270" x2="155" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="240" x2="155" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="210" x2="155" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="180" x2="155" y2="180" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="120" x2="155" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="90" x2="155" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="60" x2="155" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="30" x2="155" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="0" x2="155" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="142" y="4" font-size="11" fill="#333" text-anchor="end">5</text>
<text x="142" y="168" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="294" y="142" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="160" y="12" font-size="12" fill="#333">y</text>
<circle cx="150" cy="270" r="4.5" fill="#2E5C8A"/>
<text x="158" y="262" font-size="13" fill="#2E5C8A" font-weight="bold">M</text>
</svg>`,
                options: '(0 ; -4) ¤ (-4 ; 0) ¤ (0 ; 4) ¤ (4 ; 0)',
                explanation: `Le point M est situé exactement sur l’axe des ordonnées (son abscisse est donc 0), à 4 graduations en dessous de l’origine : ses coordonnées sont (0 ; -4).<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56211jex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56211jey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="300" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="300" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="300" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="300" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="300" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="300" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="300" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="300" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="300" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#333" stroke-width="2" marker-end="url(#q56211jex)"/>
<line x1="150" y1="300" x2="150" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56211jey)"/>
<line x1="0" y1="145" x2="0" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="0" y="168" font-size="11" fill="#333" text-anchor="middle">-5</text>
<line x1="30" y1="145" x2="30" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="145" x2="60" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="145" x2="90" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="145" x2="120" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="180" y1="145" x2="180" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="145" x2="210" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="145" x2="240" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="145" x2="270" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="145" x2="300" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="300" y="168" font-size="11" fill="#333" text-anchor="middle">5</text>
<line x1="145" y1="300" x2="155" y2="300" stroke="#333" stroke-width="1.1"/>
<text x="142" y="304" font-size="11" fill="#333" text-anchor="end">-5</text>
<line x1="145" y1="270" x2="155" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="240" x2="155" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="210" x2="155" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="180" x2="155" y2="180" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="120" x2="155" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="90" x2="155" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="60" x2="155" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="30" x2="155" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="0" x2="155" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="142" y="4" font-size="11" fill="#333" text-anchor="end">5</text>
<text x="142" y="168" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="294" y="142" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="160" y="12" font-size="12" fill="#333">y</text>
<line x1="150" y1="150" x2="150" y2="270" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="150" y1="270" x2="150" y2="270" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<circle cx="150" cy="270" r="5" fill="#1F7A4C"/>
<text x="158" y="262" font-size="13" fill="#1F7A4C" font-weight="bold">M</text>
</svg></div>`
            }
],

"56221": [
            {
                quiz: { q: 'Dans le repère ci-dessous, quel point a pour coordonnées (3 ; -2) ?', a: 'C' },
                figure: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56221ax" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56221ay" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="300" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="300" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="300" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="300" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="300" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="300" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="300" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="300" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="300" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#333" stroke-width="2" marker-end="url(#q56221ax)"/>
<line x1="150" y1="300" x2="150" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56221ay)"/>
<line x1="0" y1="145" x2="0" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="0" y="168" font-size="11" fill="#333" text-anchor="middle">-5</text>
<line x1="30" y1="145" x2="30" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="145" x2="60" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="145" x2="90" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="145" x2="120" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="180" y1="145" x2="180" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="145" x2="210" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="145" x2="240" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="145" x2="270" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="145" x2="300" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="300" y="168" font-size="11" fill="#333" text-anchor="middle">5</text>
<line x1="145" y1="300" x2="155" y2="300" stroke="#333" stroke-width="1.1"/>
<text x="142" y="304" font-size="11" fill="#333" text-anchor="end">-5</text>
<line x1="145" y1="270" x2="155" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="240" x2="155" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="210" x2="155" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="180" x2="155" y2="180" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="120" x2="155" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="90" x2="155" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="60" x2="155" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="30" x2="155" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="0" x2="155" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="142" y="4" font-size="11" fill="#333" text-anchor="end">5</text>
<text x="142" y="168" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="294" y="142" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="160" y="12" font-size="12" fill="#333">y</text>
<circle cx="210" cy="240" r="4.5" fill="#2E5C8A"/>
<text x="218" y="232" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="30" cy="120" r="4.5" fill="#B5651D"/>
<text x="38" y="112" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="240" cy="210" r="4.5" fill="#1F7A4C"/>
<text x="248" y="202" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
<circle cx="120" cy="30" r="4.5" fill="#7B4FA0"/>
<text x="128" y="22" font-size="13" fill="#7B4FA0" font-weight="bold">D</text>
</svg>`,
                options: 'A ¤ B ¤ C ¤ D',
                explanation: `Sur chaque axe, une graduation vaut 1. Le point situé 3 graduations à droite et 2 graduations en dessous de l’origine est le point C.<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56221aex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56221aey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="300" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="300" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="300" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="300" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="300" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="300" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="300" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="300" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="300" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#333" stroke-width="2" marker-end="url(#q56221aex)"/>
<line x1="150" y1="300" x2="150" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56221aey)"/>
<line x1="0" y1="145" x2="0" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="0" y="168" font-size="11" fill="#333" text-anchor="middle">-5</text>
<line x1="30" y1="145" x2="30" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="145" x2="60" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="145" x2="90" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="145" x2="120" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="180" y1="145" x2="180" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="145" x2="210" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="145" x2="240" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="145" x2="270" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="145" x2="300" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="300" y="168" font-size="11" fill="#333" text-anchor="middle">5</text>
<line x1="145" y1="300" x2="155" y2="300" stroke="#333" stroke-width="1.1"/>
<text x="142" y="304" font-size="11" fill="#333" text-anchor="end">-5</text>
<line x1="145" y1="270" x2="155" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="240" x2="155" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="210" x2="155" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="180" x2="155" y2="180" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="120" x2="155" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="90" x2="155" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="60" x2="155" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="30" x2="155" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="0" x2="155" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="142" y="4" font-size="11" fill="#333" text-anchor="end">5</text>
<text x="142" y="168" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="294" y="142" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="160" y="12" font-size="12" fill="#333">y</text>
<circle cx="210" cy="240" r="5" fill="#2E5C8A"/>
<text x="218" y="232" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="30" cy="120" r="5" fill="#B5651D"/>
<text x="38" y="112" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<line x1="240" y1="150" x2="240" y2="210" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="150" y1="210" x2="240" y2="210" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<circle cx="240" cy="210" r="5" fill="#1F7A4C"/>
<text x="248" y="202" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
<circle cx="120" cy="30" r="5" fill="#7B4FA0"/>
<text x="128" y="22" font-size="13" fill="#7B4FA0" font-weight="bold">D</text>
</svg></div>`
            },
            {
                quiz: { q: 'Dans le repère ci-dessous, quel point a pour coordonnées (-6 ; 8) ?', a: 'A' },
                figure: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56221bx" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56221by" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="300" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="300" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="300" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="300" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="300" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="300" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="300" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="300" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="300" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#333" stroke-width="2" marker-end="url(#q56221bx)"/>
<line x1="150" y1="300" x2="150" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56221by)"/>
<line x1="0" y1="145" x2="0" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="0" y="168" font-size="11" fill="#333" text-anchor="middle">-10</text>
<line x1="30" y1="145" x2="30" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="145" x2="60" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="145" x2="90" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="145" x2="120" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="180" y1="145" x2="180" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="145" x2="210" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="145" x2="240" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="145" x2="270" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="145" x2="300" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="300" y="168" font-size="11" fill="#333" text-anchor="middle">10</text>
<line x1="145" y1="300" x2="155" y2="300" stroke="#333" stroke-width="1.1"/>
<text x="142" y="304" font-size="11" fill="#333" text-anchor="end">-10</text>
<line x1="145" y1="270" x2="155" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="240" x2="155" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="210" x2="155" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="180" x2="155" y2="180" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="120" x2="155" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="90" x2="155" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="60" x2="155" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="30" x2="155" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="0" x2="155" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="142" y="4" font-size="11" fill="#333" text-anchor="end">10</text>
<text x="142" y="168" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="294" y="142" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="160" y="12" font-size="12" fill="#333">y</text>
<circle cx="60" cy="30" r="4.5" fill="#2E5C8A"/>
<text x="68" y="22" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="210" cy="180" r="4.5" fill="#B5651D"/>
<text x="218" y="172" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="270" cy="210" r="4.5" fill="#1F7A4C"/>
<text x="278" y="202" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
<circle cx="120" cy="240" r="4.5" fill="#7B4FA0"/>
<text x="128" y="232" font-size="13" fill="#7B4FA0" font-weight="bold">D</text>
</svg>`,
                options: 'A ¤ B ¤ C ¤ D',
                explanation: `Sur chaque axe, entre 0 et 10 il y a 5 intervalles donc une graduation vaut 2. Le point situé 3 graduations à gauche (-6) et 4 graduations au-dessus (8) est le point A.<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56221bex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56221bey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="300" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="300" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="300" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="300" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="300" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="300" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="300" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="300" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="300" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#333" stroke-width="2" marker-end="url(#q56221bex)"/>
<line x1="150" y1="300" x2="150" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56221bey)"/>
<line x1="0" y1="145" x2="0" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="0" y="168" font-size="11" fill="#333" text-anchor="middle">-10</text>
<line x1="30" y1="145" x2="30" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="145" x2="60" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="145" x2="90" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="145" x2="120" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="180" y1="145" x2="180" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="145" x2="210" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="145" x2="240" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="145" x2="270" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="145" x2="300" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="300" y="168" font-size="11" fill="#333" text-anchor="middle">10</text>
<line x1="145" y1="300" x2="155" y2="300" stroke="#333" stroke-width="1.1"/>
<text x="142" y="304" font-size="11" fill="#333" text-anchor="end">-10</text>
<line x1="145" y1="270" x2="155" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="240" x2="155" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="210" x2="155" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="180" x2="155" y2="180" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="120" x2="155" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="90" x2="155" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="60" x2="155" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="30" x2="155" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="0" x2="155" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="142" y="4" font-size="11" fill="#333" text-anchor="end">10</text>
<text x="142" y="168" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="294" y="142" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="160" y="12" font-size="12" fill="#333">y</text>
<line x1="60" y1="150" x2="60" y2="30" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="150" y1="30" x2="60" y2="30" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<circle cx="60" cy="30" r="5" fill="#1F7A4C"/>
<text x="68" y="22" font-size="13" fill="#1F7A4C" font-weight="bold">A</text>
<circle cx="210" cy="180" r="5" fill="#B5651D"/>
<text x="218" y="172" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="270" cy="210" r="5" fill="#1F7A4C"/>
<text x="278" y="202" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
<circle cx="120" cy="240" r="5" fill="#7B4FA0"/>
<text x="128" y="232" font-size="13" fill="#7B4FA0" font-weight="bold">D</text>
</svg></div>`
            },
            {
                quiz: { q: 'Dans le repère ci-dessous, quel point a pour coordonnées (-1 ; 2,5) ?', a: 'B' },
                figure: `<svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" style="max-width:360px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56221cx" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56221cy" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="330" y1="0" x2="330" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="360" y1="0" x2="360" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="360" x2="360" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="330" x2="360" y2="330" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="360" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="360" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="360" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="360" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="360" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="360" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="360" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="360" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="360" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="360" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="360" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="360" y2="180" stroke="#333" stroke-width="2" marker-end="url(#q56221cx)"/>
<line x1="180" y1="360" x2="180" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56221cy)"/>
<line x1="0" y1="175" x2="0" y2="185" stroke="#333" stroke-width="1.1"/>
<text x="0" y="198" font-size="11" fill="#333" text-anchor="middle">-3,0</text>
<line x1="30" y1="175" x2="30" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="175" x2="60" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="175" x2="90" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="175" x2="120" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="150" y1="175" x2="150" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="175" x2="210" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="175" x2="240" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="175" x2="270" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="175" x2="300" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="330" y1="175" x2="330" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="360" y1="175" x2="360" y2="185" stroke="#333" stroke-width="1.1"/>
<text x="360" y="198" font-size="11" fill="#333" text-anchor="middle">3,0</text>
<line x1="175" y1="360" x2="185" y2="360" stroke="#333" stroke-width="1.1"/>
<text x="172" y="364" font-size="11" fill="#333" text-anchor="end">-3,0</text>
<line x1="175" y1="330" x2="185" y2="330" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="300" x2="185" y2="300" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="270" x2="185" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="240" x2="185" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="210" x2="185" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="150" x2="185" y2="150" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="120" x2="185" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="90" x2="185" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="60" x2="185" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="30" x2="185" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="0" x2="185" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="172" y="4" font-size="11" fill="#333" text-anchor="end">3,0</text>
<text x="172" y="198" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="354" y="172" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="190" y="12" font-size="12" fill="#333">y</text>
<circle cx="300" cy="270" r="4.5" fill="#2E5C8A"/>
<text x="308" y="262" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="120" cy="30" r="4.5" fill="#B5651D"/>
<text x="128" y="22" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="360" cy="120" r="4.5" fill="#1F7A4C"/>
<text x="368" y="112" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
<circle cx="60" cy="300" r="4.5" fill="#7B4FA0"/>
<text x="68" y="292" font-size="13" fill="#7B4FA0" font-weight="bold">D</text>
</svg>`,
                options: 'A ¤ B ¤ C ¤ D',
                explanation: `Sur chaque axe, entre 0 et 3 il y a 6 intervalles donc une graduation vaut 0,5. Le point situé 2 graduations à gauche (-1) et 5 graduations au-dessus (2,5) est le point B.<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" style="max-width:360px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56221cex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56221cey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="330" y1="0" x2="330" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="360" y1="0" x2="360" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="360" x2="360" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="330" x2="360" y2="330" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="360" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="360" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="360" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="360" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="360" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="360" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="360" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="360" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="360" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="360" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="360" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="360" y2="180" stroke="#333" stroke-width="2" marker-end="url(#q56221cex)"/>
<line x1="180" y1="360" x2="180" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56221cey)"/>
<line x1="0" y1="175" x2="0" y2="185" stroke="#333" stroke-width="1.1"/>
<text x="0" y="198" font-size="11" fill="#333" text-anchor="middle">-3,0</text>
<line x1="30" y1="175" x2="30" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="175" x2="60" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="175" x2="90" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="175" x2="120" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="150" y1="175" x2="150" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="175" x2="210" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="175" x2="240" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="175" x2="270" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="175" x2="300" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="330" y1="175" x2="330" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="360" y1="175" x2="360" y2="185" stroke="#333" stroke-width="1.1"/>
<text x="360" y="198" font-size="11" fill="#333" text-anchor="middle">3,0</text>
<line x1="175" y1="360" x2="185" y2="360" stroke="#333" stroke-width="1.1"/>
<text x="172" y="364" font-size="11" fill="#333" text-anchor="end">-3,0</text>
<line x1="175" y1="330" x2="185" y2="330" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="300" x2="185" y2="300" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="270" x2="185" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="240" x2="185" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="210" x2="185" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="150" x2="185" y2="150" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="120" x2="185" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="90" x2="185" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="60" x2="185" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="30" x2="185" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="0" x2="185" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="172" y="4" font-size="11" fill="#333" text-anchor="end">3,0</text>
<text x="172" y="198" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="354" y="172" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="190" y="12" font-size="12" fill="#333">y</text>
<circle cx="300" cy="270" r="5" fill="#2E5C8A"/>
<text x="308" y="262" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<line x1="120" y1="180" x2="120" y2="30" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="180" y1="30" x2="120" y2="30" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<circle cx="120" cy="30" r="5" fill="#1F7A4C"/>
<text x="128" y="22" font-size="13" fill="#1F7A4C" font-weight="bold">B</text>
<circle cx="360" cy="120" r="5" fill="#1F7A4C"/>
<text x="368" y="112" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
<circle cx="60" cy="300" r="5" fill="#7B4FA0"/>
<text x="68" y="292" font-size="13" fill="#7B4FA0" font-weight="bold">D</text>
</svg></div>`
            },
            {
                quiz: { q: 'Dans le repère ci-dessous, quel point a pour coordonnées (-0,3 ; -0,8) ?', a: 'D' },
                figure: `<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" style="max-width:380px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56221dx" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56221dy" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="330" y1="0" x2="330" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="360" y1="0" x2="360" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="390" y1="0" x2="390" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="420" y1="0" x2="420" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="450" y1="0" x2="450" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="480" y1="0" x2="480" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="510" y1="0" x2="510" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="540" y1="0" x2="540" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="570" y1="0" x2="570" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="600" y1="0" x2="600" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="600" x2="600" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="570" x2="600" y2="570" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="540" x2="600" y2="540" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="510" x2="600" y2="510" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="480" x2="600" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="450" x2="600" y2="450" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="420" x2="600" y2="420" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="390" x2="600" y2="390" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="360" x2="600" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="330" x2="600" y2="330" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="600" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="600" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="600" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="600" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="600" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="600" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="600" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="600" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="600" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="600" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="600" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="600" y2="300" stroke="#333" stroke-width="2" marker-end="url(#q56221dx)"/>
<line x1="300" y1="600" x2="300" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56221dy)"/>
<line x1="0" y1="295" x2="0" y2="305" stroke="#333" stroke-width="1.1"/>
<text x="0" y="318" font-size="11" fill="#333" text-anchor="middle">-1,0</text>
<line x1="30" y1="295" x2="30" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="295" x2="60" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="295" x2="90" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="295" x2="120" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="150" y1="295" x2="150" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="180" y1="295" x2="180" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="295" x2="210" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="295" x2="240" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="295" x2="270" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="330" y1="295" x2="330" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="360" y1="295" x2="360" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="390" y1="295" x2="390" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="420" y1="295" x2="420" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="450" y1="295" x2="450" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="480" y1="295" x2="480" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="510" y1="295" x2="510" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="540" y1="295" x2="540" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="570" y1="295" x2="570" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="600" y1="295" x2="600" y2="305" stroke="#333" stroke-width="1.1"/>
<text x="600" y="318" font-size="11" fill="#333" text-anchor="middle">1,0</text>
<line x1="295" y1="600" x2="305" y2="600" stroke="#333" stroke-width="1.1"/>
<text x="292" y="604" font-size="11" fill="#333" text-anchor="end">-1,0</text>
<line x1="295" y1="570" x2="305" y2="570" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="540" x2="305" y2="540" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="510" x2="305" y2="510" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="480" x2="305" y2="480" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="450" x2="305" y2="450" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="420" x2="305" y2="420" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="390" x2="305" y2="390" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="360" x2="305" y2="360" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="330" x2="305" y2="330" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="270" x2="305" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="240" x2="305" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="210" x2="305" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="180" x2="305" y2="180" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="150" x2="305" y2="150" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="120" x2="305" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="90" x2="305" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="60" x2="305" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="30" x2="305" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="0" x2="305" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="292" y="4" font-size="11" fill="#333" text-anchor="end">1,0</text>
<text x="292" y="318" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="594" y="292" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="310" y="12" font-size="12" fill="#333">y</text>
<circle cx="90" cy="180" r="4.5" fill="#2E5C8A"/>
<text x="98" y="172" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="450" cy="480" r="4.5" fill="#B5651D"/>
<text x="458" y="472" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="570" cy="240" r="4.5" fill="#1F7A4C"/>
<text x="578" y="232" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
<circle cx="210" cy="540" r="4.5" fill="#7B4FA0"/>
<text x="218" y="532" font-size="13" fill="#7B4FA0" font-weight="bold">D</text>
</svg>`,
                options: 'A ¤ B ¤ C ¤ D',
                explanation: `Sur chaque axe, entre 0 et 1,0 il y a 10 intervalles donc une graduation vaut 0,1. Le point situé 3 graduations à gauche (-0,3) et 8 graduations en dessous (-0,8) est le point D.<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" style="max-width:380px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56221dex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56221dey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="330" y1="0" x2="330" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="360" y1="0" x2="360" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="390" y1="0" x2="390" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="420" y1="0" x2="420" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="450" y1="0" x2="450" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="480" y1="0" x2="480" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="510" y1="0" x2="510" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="540" y1="0" x2="540" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="570" y1="0" x2="570" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="600" y1="0" x2="600" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="600" x2="600" y2="600" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="570" x2="600" y2="570" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="540" x2="600" y2="540" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="510" x2="600" y2="510" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="480" x2="600" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="450" x2="600" y2="450" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="420" x2="600" y2="420" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="390" x2="600" y2="390" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="360" x2="600" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="330" x2="600" y2="330" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="600" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="600" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="600" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="600" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="600" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="600" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="600" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="600" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="600" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="600" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="600" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="600" y2="300" stroke="#333" stroke-width="2" marker-end="url(#q56221dex)"/>
<line x1="300" y1="600" x2="300" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56221dey)"/>
<line x1="0" y1="295" x2="0" y2="305" stroke="#333" stroke-width="1.1"/>
<text x="0" y="318" font-size="11" fill="#333" text-anchor="middle">-1,0</text>
<line x1="30" y1="295" x2="30" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="295" x2="60" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="295" x2="90" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="295" x2="120" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="150" y1="295" x2="150" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="180" y1="295" x2="180" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="295" x2="210" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="295" x2="240" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="295" x2="270" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="330" y1="295" x2="330" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="360" y1="295" x2="360" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="390" y1="295" x2="390" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="420" y1="295" x2="420" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="450" y1="295" x2="450" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="480" y1="295" x2="480" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="510" y1="295" x2="510" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="540" y1="295" x2="540" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="570" y1="295" x2="570" y2="305" stroke="#333" stroke-width="1.1"/>
<line x1="600" y1="295" x2="600" y2="305" stroke="#333" stroke-width="1.1"/>
<text x="600" y="318" font-size="11" fill="#333" text-anchor="middle">1,0</text>
<line x1="295" y1="600" x2="305" y2="600" stroke="#333" stroke-width="1.1"/>
<text x="292" y="604" font-size="11" fill="#333" text-anchor="end">-1,0</text>
<line x1="295" y1="570" x2="305" y2="570" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="540" x2="305" y2="540" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="510" x2="305" y2="510" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="480" x2="305" y2="480" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="450" x2="305" y2="450" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="420" x2="305" y2="420" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="390" x2="305" y2="390" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="360" x2="305" y2="360" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="330" x2="305" y2="330" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="270" x2="305" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="240" x2="305" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="210" x2="305" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="180" x2="305" y2="180" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="150" x2="305" y2="150" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="120" x2="305" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="90" x2="305" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="60" x2="305" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="30" x2="305" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="295" y1="0" x2="305" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="292" y="4" font-size="11" fill="#333" text-anchor="end">1,0</text>
<text x="292" y="318" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="594" y="292" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="310" y="12" font-size="12" fill="#333">y</text>
<circle cx="90" cy="180" r="5" fill="#2E5C8A"/>
<text x="98" y="172" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="450" cy="480" r="5" fill="#B5651D"/>
<text x="458" y="472" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="570" cy="240" r="5" fill="#1F7A4C"/>
<text x="578" y="232" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
<line x1="210" y1="300" x2="210" y2="540" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="300" y1="540" x2="210" y2="540" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<circle cx="210" cy="540" r="5" fill="#1F7A4C"/>
<text x="218" y="532" font-size="13" fill="#1F7A4C" font-weight="bold">D</text>
</svg></div>`
            },
            {
                quiz: { q: 'Dans le repère ci-dessous, quel point a pour coordonnées (0,05 ; -0,06) ?', a: 'A' },
                figure: `<svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" style="max-width:380px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56221ex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56221ey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="330" y1="0" x2="330" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="360" y1="0" x2="360" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="390" y1="0" x2="390" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="420" y1="0" x2="420" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="450" y1="0" x2="450" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="480" y1="0" x2="480" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="480" x2="480" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="450" x2="480" y2="450" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="420" x2="480" y2="420" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="390" x2="480" y2="390" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="360" x2="480" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="330" x2="480" y2="330" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="480" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="480" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="480" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="480" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="480" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="480" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="480" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="480" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="480" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="480" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="480" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="480" y2="240" stroke="#333" stroke-width="2" marker-end="url(#q56221ex)"/>
<line x1="240" y1="480" x2="240" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56221ey)"/>
<line x1="0" y1="235" x2="0" y2="245" stroke="#333" stroke-width="1.1"/>
<text x="0" y="258" font-size="11" fill="#333" text-anchor="middle">-0,08</text>
<line x1="30" y1="235" x2="30" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="235" x2="60" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="235" x2="90" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="235" x2="120" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="150" y1="235" x2="150" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="180" y1="235" x2="180" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="235" x2="210" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="235" x2="270" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="235" x2="300" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="330" y1="235" x2="330" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="360" y1="235" x2="360" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="390" y1="235" x2="390" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="420" y1="235" x2="420" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="450" y1="235" x2="450" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="480" y1="235" x2="480" y2="245" stroke="#333" stroke-width="1.1"/>
<text x="480" y="258" font-size="11" fill="#333" text-anchor="middle">0,08</text>
<line x1="235" y1="480" x2="245" y2="480" stroke="#333" stroke-width="1.1"/>
<text x="232" y="484" font-size="11" fill="#333" text-anchor="end">-0,08</text>
<line x1="235" y1="450" x2="245" y2="450" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="420" x2="245" y2="420" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="390" x2="245" y2="390" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="360" x2="245" y2="360" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="330" x2="245" y2="330" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="300" x2="245" y2="300" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="270" x2="245" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="210" x2="245" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="180" x2="245" y2="180" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="150" x2="245" y2="150" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="120" x2="245" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="90" x2="245" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="60" x2="245" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="30" x2="245" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="0" x2="245" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="232" y="4" font-size="11" fill="#333" text-anchor="end">0,08</text>
<text x="232" y="258" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="474" y="232" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="250" y="12" font-size="12" fill="#333">y</text>
<circle cx="390" cy="420" r="4.5" fill="#2E5C8A"/>
<text x="398" y="412" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="150" cy="180" r="4.5" fill="#B5651D"/>
<text x="158" y="172" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="450" cy="120" r="4.5" fill="#1F7A4C"/>
<text x="458" y="112" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
<circle cx="60" cy="390" r="4.5" fill="#7B4FA0"/>
<text x="68" y="382" font-size="13" fill="#7B4FA0" font-weight="bold">D</text>
</svg>`,
                options: 'A ¤ B ¤ C ¤ D',
                explanation: `Sur chaque axe, entre 0 et 0,08 il y a 8 intervalles donc une graduation vaut 0,01. Le point situé 5 graduations à droite (0,05) et 6 graduations en dessous (-0,06) est le point A.<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" style="max-width:380px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56221eex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56221eey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="330" y1="0" x2="330" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="360" y1="0" x2="360" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="390" y1="0" x2="390" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="420" y1="0" x2="420" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="450" y1="0" x2="450" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="480" y1="0" x2="480" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="480" x2="480" y2="480" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="450" x2="480" y2="450" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="420" x2="480" y2="420" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="390" x2="480" y2="390" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="360" x2="480" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="330" x2="480" y2="330" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="480" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="480" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="480" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="480" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="480" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="480" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="480" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="480" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="480" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="480" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="480" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="480" y2="240" stroke="#333" stroke-width="2" marker-end="url(#q56221eex)"/>
<line x1="240" y1="480" x2="240" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56221eey)"/>
<line x1="0" y1="235" x2="0" y2="245" stroke="#333" stroke-width="1.1"/>
<text x="0" y="258" font-size="11" fill="#333" text-anchor="middle">-0,08</text>
<line x1="30" y1="235" x2="30" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="235" x2="60" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="235" x2="90" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="235" x2="120" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="150" y1="235" x2="150" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="180" y1="235" x2="180" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="235" x2="210" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="235" x2="270" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="235" x2="300" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="330" y1="235" x2="330" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="360" y1="235" x2="360" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="390" y1="235" x2="390" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="420" y1="235" x2="420" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="450" y1="235" x2="450" y2="245" stroke="#333" stroke-width="1.1"/>
<line x1="480" y1="235" x2="480" y2="245" stroke="#333" stroke-width="1.1"/>
<text x="480" y="258" font-size="11" fill="#333" text-anchor="middle">0,08</text>
<line x1="235" y1="480" x2="245" y2="480" stroke="#333" stroke-width="1.1"/>
<text x="232" y="484" font-size="11" fill="#333" text-anchor="end">-0,08</text>
<line x1="235" y1="450" x2="245" y2="450" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="420" x2="245" y2="420" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="390" x2="245" y2="390" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="360" x2="245" y2="360" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="330" x2="245" y2="330" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="300" x2="245" y2="300" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="270" x2="245" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="210" x2="245" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="180" x2="245" y2="180" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="150" x2="245" y2="150" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="120" x2="245" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="90" x2="245" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="60" x2="245" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="30" x2="245" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="235" y1="0" x2="245" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="232" y="4" font-size="11" fill="#333" text-anchor="end">0,08</text>
<text x="232" y="258" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="474" y="232" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="250" y="12" font-size="12" fill="#333">y</text>
<line x1="390" y1="240" x2="390" y2="420" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="240" y1="420" x2="390" y2="420" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<circle cx="390" cy="420" r="5" fill="#1F7A4C"/>
<text x="398" y="412" font-size="13" fill="#1F7A4C" font-weight="bold">A</text>
<circle cx="150" cy="180" r="5" fill="#B5651D"/>
<text x="158" y="172" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="450" cy="120" r="5" fill="#1F7A4C"/>
<text x="458" y="112" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
<circle cx="60" cy="390" r="5" fill="#7B4FA0"/>
<text x="68" y="382" font-size="13" fill="#7B4FA0" font-weight="bold">D</text>
</svg></div>`
            },
            {
                quiz: { q: 'Dans le repère ci-dessous, quel point a pour coordonnées (-2 ; 8) ? Attention, les deux axes n’ont pas forcément la même échelle !', a: 'B' },
                figure: `<svg viewBox="0 0 360 300" xmlns="http://www.w3.org/2000/svg" style="max-width:360px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56221fx" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56221fy" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="330" y1="0" x2="330" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="360" y1="0" x2="360" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="360" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="360" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="360" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="360" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="360" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="360" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="360" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="360" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="360" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="360" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="360" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="360" y2="150" stroke="#333" stroke-width="2" marker-end="url(#q56221fx)"/>
<line x1="180" y1="300" x2="180" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56221fy)"/>
<line x1="0" y1="145" x2="0" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="0" y="168" font-size="11" fill="#333" text-anchor="middle">-6</text>
<line x1="30" y1="145" x2="30" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="145" x2="60" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="145" x2="90" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="145" x2="120" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="150" y1="145" x2="150" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="145" x2="210" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="145" x2="240" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="145" x2="270" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="145" x2="300" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="330" y1="145" x2="330" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="360" y1="145" x2="360" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="360" y="168" font-size="11" fill="#333" text-anchor="middle">6</text>
<line x1="175" y1="300" x2="185" y2="300" stroke="#333" stroke-width="1.1"/>
<text x="172" y="304" font-size="11" fill="#333" text-anchor="end">-10</text>
<line x1="175" y1="270" x2="185" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="240" x2="185" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="210" x2="185" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="180" x2="185" y2="180" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="120" x2="185" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="90" x2="185" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="60" x2="185" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="30" x2="185" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="0" x2="185" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="172" y="4" font-size="11" fill="#333" text-anchor="end">10</text>
<text x="172" y="168" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="354" y="142" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="190" y="12" font-size="12" fill="#333">y</text>
<circle cx="300" cy="240" r="4.5" fill="#2E5C8A"/>
<text x="308" y="232" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="120" cy="30" r="4.5" fill="#B5651D"/>
<text x="128" y="22" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="330" cy="120" r="4.5" fill="#1F7A4C"/>
<text x="338" y="112" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
<circle cx="60" cy="210" r="4.5" fill="#7B4FA0"/>
<text x="68" y="202" font-size="13" fill="#7B4FA0" font-weight="bold">D</text>
</svg>`,
                options: 'A ¤ B ¤ C ¤ D',
                explanation: `Sur l’axe des abscisses, une graduation vaut 1 ; sur l’axe des ordonnées, une graduation vaut 2. Le point situé 2 graduations à gauche (-2) et 4 graduations au-dessus (4 × 2 = 8) est le point B.<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 360 300" xmlns="http://www.w3.org/2000/svg" style="max-width:360px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56221fex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56221fey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="330" y1="0" x2="330" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="360" y1="0" x2="360" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="360" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="360" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="360" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="360" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="360" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="360" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="360" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="360" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="360" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="360" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="360" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="360" y2="150" stroke="#333" stroke-width="2" marker-end="url(#q56221fex)"/>
<line x1="180" y1="300" x2="180" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56221fey)"/>
<line x1="0" y1="145" x2="0" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="0" y="168" font-size="11" fill="#333" text-anchor="middle">-6</text>
<line x1="30" y1="145" x2="30" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="145" x2="60" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="145" x2="90" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="145" x2="120" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="150" y1="145" x2="150" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="145" x2="210" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="145" x2="240" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="145" x2="270" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="145" x2="300" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="330" y1="145" x2="330" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="360" y1="145" x2="360" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="360" y="168" font-size="11" fill="#333" text-anchor="middle">6</text>
<line x1="175" y1="300" x2="185" y2="300" stroke="#333" stroke-width="1.1"/>
<text x="172" y="304" font-size="11" fill="#333" text-anchor="end">-10</text>
<line x1="175" y1="270" x2="185" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="240" x2="185" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="210" x2="185" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="180" x2="185" y2="180" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="120" x2="185" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="90" x2="185" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="60" x2="185" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="30" x2="185" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="0" x2="185" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="172" y="4" font-size="11" fill="#333" text-anchor="end">10</text>
<text x="172" y="168" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="354" y="142" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="190" y="12" font-size="12" fill="#333">y</text>
<circle cx="300" cy="240" r="5" fill="#2E5C8A"/>
<text x="308" y="232" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<line x1="120" y1="150" x2="120" y2="30" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="180" y1="30" x2="120" y2="30" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<circle cx="120" cy="30" r="5" fill="#1F7A4C"/>
<text x="128" y="22" font-size="13" fill="#1F7A4C" font-weight="bold">B</text>
<circle cx="330" cy="120" r="5" fill="#1F7A4C"/>
<text x="338" y="112" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
<circle cx="60" cy="210" r="5" fill="#7B4FA0"/>
<text x="68" y="202" font-size="13" fill="#7B4FA0" font-weight="bold">D</text>
</svg></div>`
            },
            {
                quiz: { q: 'Dans le repère ci-dessous, quel point a pour coordonnées (-8 ; 1) ? Attention, les deux axes n’ont pas forcément la même échelle !', a: 'C' },
                figure: `<svg viewBox="0 0 300 360" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56221gx" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56221gy" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="360" x2="300" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="330" x2="300" y2="330" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="300" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="300" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="300" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="300" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="300" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="300" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="300" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="300" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="300" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="300" y2="180" stroke="#333" stroke-width="2" marker-end="url(#q56221gx)"/>
<line x1="150" y1="360" x2="150" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56221gy)"/>
<line x1="0" y1="175" x2="0" y2="185" stroke="#333" stroke-width="1.1"/>
<text x="0" y="198" font-size="11" fill="#333" text-anchor="middle">-10</text>
<line x1="30" y1="175" x2="30" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="175" x2="60" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="175" x2="90" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="175" x2="120" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="180" y1="175" x2="180" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="175" x2="210" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="175" x2="240" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="175" x2="270" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="175" x2="300" y2="185" stroke="#333" stroke-width="1.1"/>
<text x="300" y="198" font-size="11" fill="#333" text-anchor="middle">10</text>
<line x1="145" y1="360" x2="155" y2="360" stroke="#333" stroke-width="1.1"/>
<text x="142" y="364" font-size="11" fill="#333" text-anchor="end">-3,0</text>
<line x1="145" y1="330" x2="155" y2="330" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="300" x2="155" y2="300" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="270" x2="155" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="240" x2="155" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="210" x2="155" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="150" x2="155" y2="150" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="120" x2="155" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="90" x2="155" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="60" x2="155" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="30" x2="155" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="0" x2="155" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="142" y="4" font-size="11" fill="#333" text-anchor="end">3,0</text>
<text x="142" y="198" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="294" y="172" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="160" y="12" font-size="12" fill="#333">y</text>
<circle cx="90" cy="30" r="4.5" fill="#2E5C8A"/>
<text x="98" y="22" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="240" cy="300" r="4.5" fill="#B5651D"/>
<text x="248" y="292" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="30" cy="120" r="4.5" fill="#1F7A4C"/>
<text x="38" y="112" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
<circle cx="270" cy="360" r="4.5" fill="#7B4FA0"/>
<text x="278" y="352" font-size="13" fill="#7B4FA0" font-weight="bold">D</text>
</svg>`,
                options: 'A ¤ B ¤ C ¤ D',
                explanation: `Sur l’axe des abscisses, une graduation vaut 2 ; sur l’axe des ordonnées, une graduation vaut 0,5. Le point situé 4 graduations à gauche (-4 × 2 = -8) et 2 graduations au-dessus (2 × 0,5 = 1) est le point C.<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 300 360" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56221gex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56221gey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="360" x2="300" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="330" x2="300" y2="330" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="300" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="300" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="300" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="300" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="300" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="300" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="300" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="300" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="300" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="300" y2="180" stroke="#333" stroke-width="2" marker-end="url(#q56221gex)"/>
<line x1="150" y1="360" x2="150" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56221gey)"/>
<line x1="0" y1="175" x2="0" y2="185" stroke="#333" stroke-width="1.1"/>
<text x="0" y="198" font-size="11" fill="#333" text-anchor="middle">-10</text>
<line x1="30" y1="175" x2="30" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="175" x2="60" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="175" x2="90" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="175" x2="120" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="180" y1="175" x2="180" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="175" x2="210" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="175" x2="240" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="175" x2="270" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="175" x2="300" y2="185" stroke="#333" stroke-width="1.1"/>
<text x="300" y="198" font-size="11" fill="#333" text-anchor="middle">10</text>
<line x1="145" y1="360" x2="155" y2="360" stroke="#333" stroke-width="1.1"/>
<text x="142" y="364" font-size="11" fill="#333" text-anchor="end">-3,0</text>
<line x1="145" y1="330" x2="155" y2="330" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="300" x2="155" y2="300" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="270" x2="155" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="240" x2="155" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="210" x2="155" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="150" x2="155" y2="150" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="120" x2="155" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="90" x2="155" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="60" x2="155" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="30" x2="155" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="0" x2="155" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="142" y="4" font-size="11" fill="#333" text-anchor="end">3,0</text>
<text x="142" y="198" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="294" y="172" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="160" y="12" font-size="12" fill="#333">y</text>
<circle cx="90" cy="30" r="5" fill="#2E5C8A"/>
<text x="98" y="22" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="240" cy="300" r="5" fill="#B5651D"/>
<text x="248" y="292" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<line x1="30" y1="180" x2="30" y2="120" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="150" y1="120" x2="30" y2="120" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<circle cx="30" cy="120" r="5" fill="#1F7A4C"/>
<text x="38" y="112" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
<circle cx="270" cy="360" r="5" fill="#7B4FA0"/>
<text x="278" y="352" font-size="13" fill="#7B4FA0" font-weight="bold">D</text>
</svg></div>`
            },
            {
                quiz: { q: 'Dans le repère ci-dessous, quel point a pour coordonnées (-25 ; -5) ?', a: 'D' },
                figure: `<svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" style="max-width:360px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56221hx" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56221hy" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="330" y1="0" x2="330" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="360" y1="0" x2="360" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="360" x2="360" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="330" x2="360" y2="330" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="360" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="360" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="360" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="360" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="360" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="360" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="360" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="360" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="360" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="360" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="360" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="360" y2="180" stroke="#333" stroke-width="2" marker-end="url(#q56221hx)"/>
<line x1="180" y1="360" x2="180" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56221hy)"/>
<line x1="0" y1="175" x2="0" y2="185" stroke="#333" stroke-width="1.1"/>
<text x="0" y="198" font-size="11" fill="#333" text-anchor="middle">-30</text>
<line x1="30" y1="175" x2="30" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="175" x2="60" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="175" x2="90" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="175" x2="120" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="150" y1="175" x2="150" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="175" x2="210" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="175" x2="240" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="175" x2="270" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="175" x2="300" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="330" y1="175" x2="330" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="360" y1="175" x2="360" y2="185" stroke="#333" stroke-width="1.1"/>
<text x="360" y="198" font-size="11" fill="#333" text-anchor="middle">30</text>
<line x1="175" y1="360" x2="185" y2="360" stroke="#333" stroke-width="1.1"/>
<text x="172" y="364" font-size="11" fill="#333" text-anchor="end">-30</text>
<line x1="175" y1="330" x2="185" y2="330" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="300" x2="185" y2="300" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="270" x2="185" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="240" x2="185" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="210" x2="185" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="150" x2="185" y2="150" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="120" x2="185" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="90" x2="185" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="60" x2="185" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="30" x2="185" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="0" x2="185" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="172" y="4" font-size="11" fill="#333" text-anchor="end">30</text>
<text x="172" y="198" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="354" y="172" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="190" y="12" font-size="12" fill="#333">y</text>
<circle cx="90" cy="120" r="4.5" fill="#2E5C8A"/>
<text x="98" y="112" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="300" cy="330" r="4.5" fill="#B5651D"/>
<text x="308" y="322" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="240" cy="90" r="4.5" fill="#1F7A4C"/>
<text x="248" y="82" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
<circle cx="30" cy="210" r="4.5" fill="#7B4FA0"/>
<text x="38" y="202" font-size="13" fill="#7B4FA0" font-weight="bold">D</text>
</svg>`,
                options: 'A ¤ B ¤ C ¤ D',
                explanation: `Sur chaque axe, une graduation vaut 5. Le point situé 5 graduations à gauche (-25) et 1 graduation en dessous (-5) est le point D.<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" style="max-width:360px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56221hex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56221hey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="330" y1="0" x2="330" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="360" y1="0" x2="360" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="360" x2="360" y2="360" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="330" x2="360" y2="330" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="360" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="360" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="360" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="360" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="360" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="360" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="360" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="360" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="360" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="360" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="360" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="360" y2="180" stroke="#333" stroke-width="2" marker-end="url(#q56221hex)"/>
<line x1="180" y1="360" x2="180" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56221hey)"/>
<line x1="0" y1="175" x2="0" y2="185" stroke="#333" stroke-width="1.1"/>
<text x="0" y="198" font-size="11" fill="#333" text-anchor="middle">-30</text>
<line x1="30" y1="175" x2="30" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="175" x2="60" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="175" x2="90" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="175" x2="120" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="150" y1="175" x2="150" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="175" x2="210" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="175" x2="240" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="175" x2="270" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="175" x2="300" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="330" y1="175" x2="330" y2="185" stroke="#333" stroke-width="1.1"/>
<line x1="360" y1="175" x2="360" y2="185" stroke="#333" stroke-width="1.1"/>
<text x="360" y="198" font-size="11" fill="#333" text-anchor="middle">30</text>
<line x1="175" y1="360" x2="185" y2="360" stroke="#333" stroke-width="1.1"/>
<text x="172" y="364" font-size="11" fill="#333" text-anchor="end">-30</text>
<line x1="175" y1="330" x2="185" y2="330" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="300" x2="185" y2="300" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="270" x2="185" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="240" x2="185" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="210" x2="185" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="150" x2="185" y2="150" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="120" x2="185" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="90" x2="185" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="60" x2="185" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="30" x2="185" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="175" y1="0" x2="185" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="172" y="4" font-size="11" fill="#333" text-anchor="end">30</text>
<text x="172" y="198" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="354" y="172" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="190" y="12" font-size="12" fill="#333">y</text>
<circle cx="90" cy="120" r="5" fill="#2E5C8A"/>
<text x="98" y="112" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="300" cy="330" r="5" fill="#B5651D"/>
<text x="308" y="322" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="240" cy="90" r="5" fill="#1F7A4C"/>
<text x="248" y="82" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
<line x1="30" y1="180" x2="30" y2="210" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="180" y1="210" x2="30" y2="210" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<circle cx="30" cy="210" r="5" fill="#1F7A4C"/>
<text x="38" y="202" font-size="13" fill="#1F7A4C" font-weight="bold">D</text>
</svg></div>`
            },
            {
                quiz: { q: 'Dans le repère ci-dessous, quel point a pour coordonnées (0 ; 0) ?', a: 'A' },
                figure: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56221ix" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56221iy" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="300" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="300" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="300" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="300" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="300" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="300" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="300" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="300" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="300" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#333" stroke-width="2" marker-end="url(#q56221ix)"/>
<line x1="150" y1="300" x2="150" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56221iy)"/>
<line x1="0" y1="145" x2="0" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="0" y="168" font-size="11" fill="#333" text-anchor="middle">-5</text>
<line x1="30" y1="145" x2="30" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="145" x2="60" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="145" x2="90" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="145" x2="120" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="180" y1="145" x2="180" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="145" x2="210" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="145" x2="240" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="145" x2="270" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="145" x2="300" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="300" y="168" font-size="11" fill="#333" text-anchor="middle">5</text>
<line x1="145" y1="300" x2="155" y2="300" stroke="#333" stroke-width="1.1"/>
<text x="142" y="304" font-size="11" fill="#333" text-anchor="end">-5</text>
<line x1="145" y1="270" x2="155" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="240" x2="155" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="210" x2="155" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="180" x2="155" y2="180" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="120" x2="155" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="90" x2="155" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="60" x2="155" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="30" x2="155" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="0" x2="155" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="142" y="4" font-size="11" fill="#333" text-anchor="end">5</text>
<text x="142" y="168" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="294" y="142" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="160" y="12" font-size="12" fill="#333">y</text>
<circle cx="150" cy="150" r="4.5" fill="#2E5C8A"/>
<text x="158" y="142" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="240" cy="90" r="4.5" fill="#B5651D"/>
<text x="248" y="82" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="60" cy="90" r="4.5" fill="#1F7A4C"/>
<text x="68" y="82" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
<circle cx="240" cy="210" r="4.5" fill="#7B4FA0"/>
<text x="248" y="202" font-size="13" fill="#7B4FA0" font-weight="bold">D</text>
</svg>`,
                options: 'A ¤ B ¤ C ¤ D',
                explanation: `Le point de coordonnées (0 ; 0) est celui placé exactement à l’intersection des deux axes, c’est-à-dire l’origine : c’est le point A.<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56221iex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56221iey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="300" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="300" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="300" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="300" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="300" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="300" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="300" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="300" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="300" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#333" stroke-width="2" marker-end="url(#q56221iex)"/>
<line x1="150" y1="300" x2="150" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56221iey)"/>
<line x1="0" y1="145" x2="0" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="0" y="168" font-size="11" fill="#333" text-anchor="middle">-5</text>
<line x1="30" y1="145" x2="30" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="145" x2="60" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="145" x2="90" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="145" x2="120" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="180" y1="145" x2="180" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="145" x2="210" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="145" x2="240" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="145" x2="270" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="145" x2="300" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="300" y="168" font-size="11" fill="#333" text-anchor="middle">5</text>
<line x1="145" y1="300" x2="155" y2="300" stroke="#333" stroke-width="1.1"/>
<text x="142" y="304" font-size="11" fill="#333" text-anchor="end">-5</text>
<line x1="145" y1="270" x2="155" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="240" x2="155" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="210" x2="155" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="180" x2="155" y2="180" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="120" x2="155" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="90" x2="155" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="60" x2="155" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="30" x2="155" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="0" x2="155" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="142" y="4" font-size="11" fill="#333" text-anchor="end">5</text>
<text x="142" y="168" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="294" y="142" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="160" y="12" font-size="12" fill="#333">y</text>
<line x1="150" y1="150" x2="150" y2="150" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="150" y1="150" x2="150" y2="150" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<circle cx="150" cy="150" r="5" fill="#1F7A4C"/>
<text x="158" y="142" font-size="13" fill="#1F7A4C" font-weight="bold">A</text>
<circle cx="240" cy="90" r="5" fill="#B5651D"/>
<text x="248" y="82" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="60" cy="90" r="5" fill="#1F7A4C"/>
<text x="68" y="82" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
<circle cx="240" cy="210" r="5" fill="#7B4FA0"/>
<text x="248" y="202" font-size="13" fill="#7B4FA0" font-weight="bold">D</text>
</svg></div>`
            },
            {
                quiz: { q: 'Dans le repère ci-dessous, quel point a pour coordonnées (0 ; -4) ?', a: 'A' },
                figure: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56221jx" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56221jy" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="300" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="300" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="300" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="300" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="300" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="300" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="300" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="300" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="300" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#333" stroke-width="2" marker-end="url(#q56221jx)"/>
<line x1="150" y1="300" x2="150" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56221jy)"/>
<line x1="0" y1="145" x2="0" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="0" y="168" font-size="11" fill="#333" text-anchor="middle">-5</text>
<line x1="30" y1="145" x2="30" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="145" x2="60" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="145" x2="90" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="145" x2="120" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="180" y1="145" x2="180" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="145" x2="210" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="145" x2="240" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="145" x2="270" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="145" x2="300" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="300" y="168" font-size="11" fill="#333" text-anchor="middle">5</text>
<line x1="145" y1="300" x2="155" y2="300" stroke="#333" stroke-width="1.1"/>
<text x="142" y="304" font-size="11" fill="#333" text-anchor="end">-5</text>
<line x1="145" y1="270" x2="155" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="240" x2="155" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="210" x2="155" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="180" x2="155" y2="180" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="120" x2="155" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="90" x2="155" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="60" x2="155" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="30" x2="155" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="0" x2="155" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="142" y="4" font-size="11" fill="#333" text-anchor="end">5</text>
<text x="142" y="168" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="294" y="142" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="160" y="12" font-size="12" fill="#333">y</text>
<circle cx="150" cy="270" r="4.5" fill="#2E5C8A"/>
<text x="158" y="262" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="270" cy="150" r="4.5" fill="#B5651D"/>
<text x="278" y="142" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="30" cy="150" r="4.5" fill="#1F7A4C"/>
<text x="38" y="142" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
<circle cx="150" cy="30" r="4.5" fill="#7B4FA0"/>
<text x="158" y="22" font-size="13" fill="#7B4FA0" font-weight="bold">D</text>
</svg>`,
                options: 'A ¤ B ¤ C ¤ D',
                explanation: `Une abscisse nulle signifie que le point est situé exactement sur l’axe des ordonnées. Le point situé sur cet axe, 4 graduations en dessous de l’origine, est le point A.<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q56221jex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q56221jey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="30" y1="0" x2="30" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="60" y1="0" x2="60" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="90" y1="0" x2="90" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="120" y1="0" x2="120" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="150" y1="0" x2="150" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="180" y1="0" x2="180" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="210" y1="0" x2="210" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="240" y1="0" x2="240" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="270" y1="0" x2="270" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="300" y1="0" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="300" x2="300" y2="300" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="270" x2="300" y2="270" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="240" x2="300" y2="240" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="210" x2="300" y2="210" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="180" x2="300" y2="180" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="120" x2="300" y2="120" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="90" x2="300" y2="90" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="60" x2="300" y2="60" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="30" x2="300" y2="30" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="300" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="150" x2="300" y2="150" stroke="#333" stroke-width="2" marker-end="url(#q56221jex)"/>
<line x1="150" y1="300" x2="150" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q56221jey)"/>
<line x1="0" y1="145" x2="0" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="0" y="168" font-size="11" fill="#333" text-anchor="middle">-5</text>
<line x1="30" y1="145" x2="30" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="60" y1="145" x2="60" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="90" y1="145" x2="90" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="120" y1="145" x2="120" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="180" y1="145" x2="180" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="210" y1="145" x2="210" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="240" y1="145" x2="240" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="270" y1="145" x2="270" y2="155" stroke="#333" stroke-width="1.1"/>
<line x1="300" y1="145" x2="300" y2="155" stroke="#333" stroke-width="1.1"/>
<text x="300" y="168" font-size="11" fill="#333" text-anchor="middle">5</text>
<line x1="145" y1="300" x2="155" y2="300" stroke="#333" stroke-width="1.1"/>
<text x="142" y="304" font-size="11" fill="#333" text-anchor="end">-5</text>
<line x1="145" y1="270" x2="155" y2="270" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="240" x2="155" y2="240" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="210" x2="155" y2="210" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="180" x2="155" y2="180" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="120" x2="155" y2="120" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="90" x2="155" y2="90" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="60" x2="155" y2="60" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="30" x2="155" y2="30" stroke="#333" stroke-width="1.1"/>
<line x1="145" y1="0" x2="155" y2="0" stroke="#333" stroke-width="1.1"/>
<text x="142" y="4" font-size="11" fill="#333" text-anchor="end">5</text>
<text x="142" y="168" font-size="11" fill="#333" text-anchor="end">0</text>
<text x="294" y="142" font-size="12" fill="#333" text-anchor="end">x</text>
<text x="160" y="12" font-size="12" fill="#333">y</text>
<line x1="150" y1="150" x2="150" y2="270" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<line x1="150" y1="270" x2="150" y2="270" stroke="#1F7A4C" stroke-width="1.3" stroke-dasharray="4,3"/>
<circle cx="150" cy="270" r="5" fill="#1F7A4C"/>
<text x="158" y="262" font-size="13" fill="#1F7A4C" font-weight="bold">A</text>
<circle cx="270" cy="150" r="5" fill="#B5651D"/>
<text x="278" y="142" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="30" cy="150" r="5" fill="#1F7A4C"/>
<text x="38" y="142" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
<circle cx="150" cy="30" r="5" fill="#7B4FA0"/>
<text x="158" y="22" font-size="13" fill="#7B4FA0" font-weight="bold">D</text>
</svg></div>`
            }
],

"56301": [
            {
                quiz: { q: 'ABCD est un parallélogramme. On donne A(-3 ; -1), B(2 ; -2) et C(5 ; 3). Quelles sont les coordonnées de D ?', a: '(0 ; 4)' },
                figure: `<svg viewBox="0 0 364 364" xmlns="http://www.w3.org/2000/svg" style="max-width:340px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q1qx" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q1qy" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="26" y1="0" x2="26" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="52" y1="0" x2="52" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="78" y1="0" x2="78" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="104" y1="0" x2="104" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="130" y1="0" x2="130" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="156" y1="0" x2="156" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="182" y1="0" x2="182" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="208" y1="0" x2="208" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="234" y1="0" x2="234" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="260" y1="0" x2="260" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="286" y1="0" x2="286" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="312" y1="0" x2="312" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="338" y1="0" x2="338" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="364" y1="0" x2="364" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="364" x2="364" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="338" x2="364" y2="338" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="312" x2="364" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="286" x2="364" y2="286" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="260" x2="364" y2="260" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="234" x2="364" y2="234" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="208" x2="364" y2="208" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="182" x2="364" y2="182" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="156" x2="364" y2="156" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="130" x2="364" y2="130" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="104" x2="364" y2="104" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="78" x2="364" y2="78" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="52" x2="364" y2="52" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="26" x2="364" y2="26" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="364" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="182" x2="364" y2="182" stroke="#333" stroke-width="2" marker-end="url(#q1qx)"/>
<line x1="182" y1="364" x2="182" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q1qy)"/>
<text x="0" y="198" font-size="10" fill="#333" text-anchor="middle">-7</text>
<text x="52" y="198" font-size="10" fill="#333" text-anchor="middle">-5</text>
<text x="104" y="198" font-size="10" fill="#333" text-anchor="middle">-3</text>
<text x="156" y="198" font-size="10" fill="#333" text-anchor="middle">-1</text>
<text x="208" y="198" font-size="10" fill="#333" text-anchor="middle">1</text>
<text x="260" y="198" font-size="10" fill="#333" text-anchor="middle">3</text>
<text x="312" y="198" font-size="10" fill="#333" text-anchor="middle">5</text>
<text x="364" y="198" font-size="10" fill="#333" text-anchor="middle">7</text>
<text x="176" y="368" font-size="10" fill="#333" text-anchor="end">-7</text>
<text x="176" y="316" font-size="10" fill="#333" text-anchor="end">-5</text>
<text x="176" y="264" font-size="10" fill="#333" text-anchor="end">-3</text>
<text x="176" y="212" font-size="10" fill="#333" text-anchor="end">-1</text>
<text x="176" y="160" font-size="10" fill="#333" text-anchor="end">1</text>
<text x="176" y="108" font-size="10" fill="#333" text-anchor="end">3</text>
<text x="176" y="56" font-size="10" fill="#333" text-anchor="end">5</text>
<text x="176" y="4" font-size="10" fill="#333" text-anchor="end">7</text>
<text x="176" y="198" font-size="10" fill="#333" text-anchor="end">0</text>
<circle cx="104" cy="208" r="4.5" fill="#2E5C8A"/>
<text x="112" y="200" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="234" cy="234" r="4.5" fill="#B5651D"/>
<text x="242" y="226" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="312" cy="104" r="4.5" fill="#1F7A4C"/>
<text x="320" y="96" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
</svg>`,
                options: '(0 ; 4) ¤ (10 ; 2) ¤ (-6 ; 6) ¤ (4 ; 0)',
                explanation: `On calcule le déplacement de B vers C : l’abscisse augmente de 5 - 2 = 3, l’ordonnée augmente de 3 - (-2) = 5. On applique ce déplacement à partir de A : D a pour abscisse -3 + 3 = 0 et pour ordonnée -1 + 5 = 4. Donc D(0 ; 4).<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 364 364" xmlns="http://www.w3.org/2000/svg" style="max-width:340px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q1ex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q1ey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="26" y1="0" x2="26" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="52" y1="0" x2="52" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="78" y1="0" x2="78" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="104" y1="0" x2="104" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="130" y1="0" x2="130" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="156" y1="0" x2="156" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="182" y1="0" x2="182" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="208" y1="0" x2="208" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="234" y1="0" x2="234" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="260" y1="0" x2="260" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="286" y1="0" x2="286" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="312" y1="0" x2="312" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="338" y1="0" x2="338" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="364" y1="0" x2="364" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="364" x2="364" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="338" x2="364" y2="338" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="312" x2="364" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="286" x2="364" y2="286" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="260" x2="364" y2="260" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="234" x2="364" y2="234" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="208" x2="364" y2="208" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="182" x2="364" y2="182" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="156" x2="364" y2="156" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="130" x2="364" y2="130" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="104" x2="364" y2="104" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="78" x2="364" y2="78" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="52" x2="364" y2="52" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="26" x2="364" y2="26" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="364" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="182" x2="364" y2="182" stroke="#333" stroke-width="2" marker-end="url(#q1ex)"/>
<line x1="182" y1="364" x2="182" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q1ey)"/>
<text x="0" y="198" font-size="10" fill="#333" text-anchor="middle">-7</text>
<text x="52" y="198" font-size="10" fill="#333" text-anchor="middle">-5</text>
<text x="104" y="198" font-size="10" fill="#333" text-anchor="middle">-3</text>
<text x="156" y="198" font-size="10" fill="#333" text-anchor="middle">-1</text>
<text x="208" y="198" font-size="10" fill="#333" text-anchor="middle">1</text>
<text x="260" y="198" font-size="10" fill="#333" text-anchor="middle">3</text>
<text x="312" y="198" font-size="10" fill="#333" text-anchor="middle">5</text>
<text x="364" y="198" font-size="10" fill="#333" text-anchor="middle">7</text>
<text x="176" y="368" font-size="10" fill="#333" text-anchor="end">-7</text>
<text x="176" y="316" font-size="10" fill="#333" text-anchor="end">-5</text>
<text x="176" y="264" font-size="10" fill="#333" text-anchor="end">-3</text>
<text x="176" y="212" font-size="10" fill="#333" text-anchor="end">-1</text>
<text x="176" y="160" font-size="10" fill="#333" text-anchor="end">1</text>
<text x="176" y="108" font-size="10" fill="#333" text-anchor="end">3</text>
<text x="176" y="56" font-size="10" fill="#333" text-anchor="end">5</text>
<text x="176" y="4" font-size="10" fill="#333" text-anchor="end">7</text>
<text x="176" y="198" font-size="10" fill="#333" text-anchor="end">0</text>
<line x1="104" y1="208" x2="182" y2="78" stroke="#7B4FA0" stroke-width="2" stroke-dasharray="6,4"/>
<line x1="234" y1="234" x2="312" y2="104" stroke="#7B4FA0" stroke-width="2" stroke-dasharray="6,4"/>
<line x1="104" y1="208" x2="234" y2="234" stroke="#333" stroke-width="2"/>
<line x1="182" y1="78" x2="312" y2="104" stroke="#333" stroke-width="2"/>
<circle cx="104" cy="208" r="4.5" fill="#2E5C8A"/>
<text x="112" y="200" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="234" cy="234" r="4.5" fill="#B5651D"/>
<text x="242" y="226" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="312" cy="104" r="4.5" fill="#1F7A4C"/>
<text x="320" y="96" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
<circle cx="182" cy="78" r="4.5" fill="#7B4FA0"/>
<text x="190" y="70" font-size="13" fill="#7B4FA0" font-weight="bold">D</text>
</svg></div>`
            },
            {
                quiz: { q: 'ABCD est un parallélogramme. On donne A(1 ; 1), B(4 ; 1) et C(6 ; 5). Quelles sont les coordonnées de D ?', a: '(3 ; 5)' },
                figure: `<svg viewBox="0 0 416 416" xmlns="http://www.w3.org/2000/svg" style="max-width:340px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q2qx" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q2qy" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="26" y1="0" x2="26" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="52" y1="0" x2="52" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="78" y1="0" x2="78" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="104" y1="0" x2="104" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="130" y1="0" x2="130" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="156" y1="0" x2="156" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="182" y1="0" x2="182" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="208" y1="0" x2="208" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="234" y1="0" x2="234" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="260" y1="0" x2="260" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="286" y1="0" x2="286" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="312" y1="0" x2="312" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="338" y1="0" x2="338" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="364" y1="0" x2="364" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="390" y1="0" x2="390" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="416" y1="0" x2="416" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="416" x2="416" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="390" x2="416" y2="390" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="364" x2="416" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="338" x2="416" y2="338" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="312" x2="416" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="286" x2="416" y2="286" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="260" x2="416" y2="260" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="234" x2="416" y2="234" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="208" x2="416" y2="208" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="182" x2="416" y2="182" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="156" x2="416" y2="156" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="130" x2="416" y2="130" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="104" x2="416" y2="104" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="78" x2="416" y2="78" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="52" x2="416" y2="52" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="26" x2="416" y2="26" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="416" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="208" x2="416" y2="208" stroke="#333" stroke-width="2" marker-end="url(#q2qx)"/>
<line x1="208" y1="416" x2="208" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q2qy)"/>
<text x="0" y="224" font-size="10" fill="#333" text-anchor="middle">-8</text>
<text x="52" y="224" font-size="10" fill="#333" text-anchor="middle">-6</text>
<text x="104" y="224" font-size="10" fill="#333" text-anchor="middle">-4</text>
<text x="156" y="224" font-size="10" fill="#333" text-anchor="middle">-2</text>
<text x="260" y="224" font-size="10" fill="#333" text-anchor="middle">2</text>
<text x="312" y="224" font-size="10" fill="#333" text-anchor="middle">4</text>
<text x="364" y="224" font-size="10" fill="#333" text-anchor="middle">6</text>
<text x="416" y="224" font-size="10" fill="#333" text-anchor="middle">8</text>
<text x="202" y="420" font-size="10" fill="#333" text-anchor="end">-8</text>
<text x="202" y="368" font-size="10" fill="#333" text-anchor="end">-6</text>
<text x="202" y="316" font-size="10" fill="#333" text-anchor="end">-4</text>
<text x="202" y="264" font-size="10" fill="#333" text-anchor="end">-2</text>
<text x="202" y="160" font-size="10" fill="#333" text-anchor="end">2</text>
<text x="202" y="108" font-size="10" fill="#333" text-anchor="end">4</text>
<text x="202" y="56" font-size="10" fill="#333" text-anchor="end">6</text>
<text x="202" y="4" font-size="10" fill="#333" text-anchor="end">8</text>
<text x="202" y="224" font-size="10" fill="#333" text-anchor="end">0</text>
<circle cx="234" cy="182" r="4.5" fill="#2E5C8A"/>
<text x="242" y="174" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="312" cy="182" r="4.5" fill="#B5651D"/>
<text x="320" y="174" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="364" cy="78" r="4.5" fill="#1F7A4C"/>
<text x="372" y="70" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
</svg>`,
                options: '(3 ; 5) ¤ (9 ; 5) ¤ (3 ; 1) ¤ (1 ; 5)',
                explanation: `Le déplacement de B vers C fait augmenter l’abscisse de 6 - 4 = 2 et l’ordonnée de 5 - 1 = 4. En appliquant ce déplacement à A : abscisse 1 + 2 = 3, ordonnée 1 + 4 = 5. Donc D(3 ; 5).<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 416 416" xmlns="http://www.w3.org/2000/svg" style="max-width:340px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q2ex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q2ey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="26" y1="0" x2="26" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="52" y1="0" x2="52" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="78" y1="0" x2="78" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="104" y1="0" x2="104" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="130" y1="0" x2="130" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="156" y1="0" x2="156" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="182" y1="0" x2="182" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="208" y1="0" x2="208" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="234" y1="0" x2="234" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="260" y1="0" x2="260" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="286" y1="0" x2="286" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="312" y1="0" x2="312" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="338" y1="0" x2="338" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="364" y1="0" x2="364" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="390" y1="0" x2="390" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="416" y1="0" x2="416" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="416" x2="416" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="390" x2="416" y2="390" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="364" x2="416" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="338" x2="416" y2="338" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="312" x2="416" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="286" x2="416" y2="286" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="260" x2="416" y2="260" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="234" x2="416" y2="234" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="208" x2="416" y2="208" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="182" x2="416" y2="182" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="156" x2="416" y2="156" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="130" x2="416" y2="130" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="104" x2="416" y2="104" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="78" x2="416" y2="78" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="52" x2="416" y2="52" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="26" x2="416" y2="26" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="416" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="208" x2="416" y2="208" stroke="#333" stroke-width="2" marker-end="url(#q2ex)"/>
<line x1="208" y1="416" x2="208" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q2ey)"/>
<text x="0" y="224" font-size="10" fill="#333" text-anchor="middle">-8</text>
<text x="52" y="224" font-size="10" fill="#333" text-anchor="middle">-6</text>
<text x="104" y="224" font-size="10" fill="#333" text-anchor="middle">-4</text>
<text x="156" y="224" font-size="10" fill="#333" text-anchor="middle">-2</text>
<text x="260" y="224" font-size="10" fill="#333" text-anchor="middle">2</text>
<text x="312" y="224" font-size="10" fill="#333" text-anchor="middle">4</text>
<text x="364" y="224" font-size="10" fill="#333" text-anchor="middle">6</text>
<text x="416" y="224" font-size="10" fill="#333" text-anchor="middle">8</text>
<text x="202" y="420" font-size="10" fill="#333" text-anchor="end">-8</text>
<text x="202" y="368" font-size="10" fill="#333" text-anchor="end">-6</text>
<text x="202" y="316" font-size="10" fill="#333" text-anchor="end">-4</text>
<text x="202" y="264" font-size="10" fill="#333" text-anchor="end">-2</text>
<text x="202" y="160" font-size="10" fill="#333" text-anchor="end">2</text>
<text x="202" y="108" font-size="10" fill="#333" text-anchor="end">4</text>
<text x="202" y="56" font-size="10" fill="#333" text-anchor="end">6</text>
<text x="202" y="4" font-size="10" fill="#333" text-anchor="end">8</text>
<text x="202" y="224" font-size="10" fill="#333" text-anchor="end">0</text>
<line x1="234" y1="182" x2="286" y2="78" stroke="#7B4FA0" stroke-width="2" stroke-dasharray="6,4"/>
<line x1="312" y1="182" x2="364" y2="78" stroke="#7B4FA0" stroke-width="2" stroke-dasharray="6,4"/>
<line x1="234" y1="182" x2="312" y2="182" stroke="#333" stroke-width="2"/>
<line x1="286" y1="78" x2="364" y2="78" stroke="#333" stroke-width="2"/>
<circle cx="234" cy="182" r="4.5" fill="#2E5C8A"/>
<text x="242" y="174" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="312" cy="182" r="4.5" fill="#B5651D"/>
<text x="320" y="174" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="364" cy="78" r="4.5" fill="#1F7A4C"/>
<text x="372" y="70" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
<circle cx="286" cy="78" r="4.5" fill="#7B4FA0"/>
<text x="294" y="70" font-size="13" fill="#7B4FA0" font-weight="bold">D</text>
</svg></div>`
            },
            {
                quiz: { q: 'ABCD est un parallélogramme. On donne A(-2 ; -1), C(6 ; 5) et D(5 ; 7). Quelles sont les coordonnées de B ?', a: '(-1 ; -3)' },
                figure: `<svg viewBox="0 0 468 468" xmlns="http://www.w3.org/2000/svg" style="max-width:340px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q3qx" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q3qy" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="26" y1="0" x2="26" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="52" y1="0" x2="52" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="78" y1="0" x2="78" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="104" y1="0" x2="104" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="130" y1="0" x2="130" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="156" y1="0" x2="156" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="182" y1="0" x2="182" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="208" y1="0" x2="208" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="234" y1="0" x2="234" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="260" y1="0" x2="260" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="286" y1="0" x2="286" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="312" y1="0" x2="312" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="338" y1="0" x2="338" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="364" y1="0" x2="364" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="390" y1="0" x2="390" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="416" y1="0" x2="416" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="442" y1="0" x2="442" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="468" y1="0" x2="468" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="468" x2="468" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="442" x2="468" y2="442" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="416" x2="468" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="390" x2="468" y2="390" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="364" x2="468" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="338" x2="468" y2="338" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="312" x2="468" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="286" x2="468" y2="286" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="260" x2="468" y2="260" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="234" x2="468" y2="234" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="208" x2="468" y2="208" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="182" x2="468" y2="182" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="156" x2="468" y2="156" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="130" x2="468" y2="130" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="104" x2="468" y2="104" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="78" x2="468" y2="78" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="52" x2="468" y2="52" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="26" x2="468" y2="26" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="468" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="234" x2="468" y2="234" stroke="#333" stroke-width="2" marker-end="url(#q3qx)"/>
<line x1="234" y1="468" x2="234" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q3qy)"/>
<text x="0" y="250" font-size="10" fill="#333" text-anchor="middle">-9</text>
<text x="52" y="250" font-size="10" fill="#333" text-anchor="middle">-7</text>
<text x="104" y="250" font-size="10" fill="#333" text-anchor="middle">-5</text>
<text x="156" y="250" font-size="10" fill="#333" text-anchor="middle">-3</text>
<text x="208" y="250" font-size="10" fill="#333" text-anchor="middle">-1</text>
<text x="260" y="250" font-size="10" fill="#333" text-anchor="middle">1</text>
<text x="312" y="250" font-size="10" fill="#333" text-anchor="middle">3</text>
<text x="364" y="250" font-size="10" fill="#333" text-anchor="middle">5</text>
<text x="416" y="250" font-size="10" fill="#333" text-anchor="middle">7</text>
<text x="468" y="250" font-size="10" fill="#333" text-anchor="middle">9</text>
<text x="228" y="472" font-size="10" fill="#333" text-anchor="end">-9</text>
<text x="228" y="420" font-size="10" fill="#333" text-anchor="end">-7</text>
<text x="228" y="368" font-size="10" fill="#333" text-anchor="end">-5</text>
<text x="228" y="316" font-size="10" fill="#333" text-anchor="end">-3</text>
<text x="228" y="264" font-size="10" fill="#333" text-anchor="end">-1</text>
<text x="228" y="212" font-size="10" fill="#333" text-anchor="end">1</text>
<text x="228" y="160" font-size="10" fill="#333" text-anchor="end">3</text>
<text x="228" y="108" font-size="10" fill="#333" text-anchor="end">5</text>
<text x="228" y="56" font-size="10" fill="#333" text-anchor="end">7</text>
<text x="228" y="4" font-size="10" fill="#333" text-anchor="end">9</text>
<text x="228" y="250" font-size="10" fill="#333" text-anchor="end">0</text>
<circle cx="182" cy="260" r="4.5" fill="#2E5C8A"/>
<text x="190" y="252" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="390" cy="104" r="4.5" fill="#1F7A4C"/>
<text x="398" y="96" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
<circle cx="364" cy="52" r="4.5" fill="#7B4FA0"/>
<text x="372" y="44" font-size="13" fill="#7B4FA0" font-weight="bold">D</text>
</svg>`,
                options: '(-1 ; -3) ¤ (13 ; 13) ¤ (1 ; 3) ¤ (-1 ; 3)',
                explanation: `Dans un parallélogramme, les diagonales [AC] et [BD] ont le même milieu. Le milieu de [AC] est ((-2+6)/2 ; (-1+5)/2) = (2 ; 2). Comme B et D ont aussi ce milieu, B = 2 × (2 ; 2) - D = (4-5 ; 4-7) = (-1 ; -3).<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 468 468" xmlns="http://www.w3.org/2000/svg" style="max-width:340px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q3ex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q3ey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="26" y1="0" x2="26" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="52" y1="0" x2="52" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="78" y1="0" x2="78" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="104" y1="0" x2="104" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="130" y1="0" x2="130" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="156" y1="0" x2="156" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="182" y1="0" x2="182" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="208" y1="0" x2="208" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="234" y1="0" x2="234" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="260" y1="0" x2="260" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="286" y1="0" x2="286" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="312" y1="0" x2="312" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="338" y1="0" x2="338" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="364" y1="0" x2="364" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="390" y1="0" x2="390" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="416" y1="0" x2="416" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="442" y1="0" x2="442" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="468" y1="0" x2="468" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="468" x2="468" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="442" x2="468" y2="442" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="416" x2="468" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="390" x2="468" y2="390" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="364" x2="468" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="338" x2="468" y2="338" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="312" x2="468" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="286" x2="468" y2="286" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="260" x2="468" y2="260" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="234" x2="468" y2="234" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="208" x2="468" y2="208" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="182" x2="468" y2="182" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="156" x2="468" y2="156" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="130" x2="468" y2="130" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="104" x2="468" y2="104" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="78" x2="468" y2="78" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="52" x2="468" y2="52" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="26" x2="468" y2="26" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="468" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="234" x2="468" y2="234" stroke="#333" stroke-width="2" marker-end="url(#q3ex)"/>
<line x1="234" y1="468" x2="234" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q3ey)"/>
<text x="0" y="250" font-size="10" fill="#333" text-anchor="middle">-9</text>
<text x="52" y="250" font-size="10" fill="#333" text-anchor="middle">-7</text>
<text x="104" y="250" font-size="10" fill="#333" text-anchor="middle">-5</text>
<text x="156" y="250" font-size="10" fill="#333" text-anchor="middle">-3</text>
<text x="208" y="250" font-size="10" fill="#333" text-anchor="middle">-1</text>
<text x="260" y="250" font-size="10" fill="#333" text-anchor="middle">1</text>
<text x="312" y="250" font-size="10" fill="#333" text-anchor="middle">3</text>
<text x="364" y="250" font-size="10" fill="#333" text-anchor="middle">5</text>
<text x="416" y="250" font-size="10" fill="#333" text-anchor="middle">7</text>
<text x="468" y="250" font-size="10" fill="#333" text-anchor="middle">9</text>
<text x="228" y="472" font-size="10" fill="#333" text-anchor="end">-9</text>
<text x="228" y="420" font-size="10" fill="#333" text-anchor="end">-7</text>
<text x="228" y="368" font-size="10" fill="#333" text-anchor="end">-5</text>
<text x="228" y="316" font-size="10" fill="#333" text-anchor="end">-3</text>
<text x="228" y="264" font-size="10" fill="#333" text-anchor="end">-1</text>
<text x="228" y="212" font-size="10" fill="#333" text-anchor="end">1</text>
<text x="228" y="160" font-size="10" fill="#333" text-anchor="end">3</text>
<text x="228" y="108" font-size="10" fill="#333" text-anchor="end">5</text>
<text x="228" y="56" font-size="10" fill="#333" text-anchor="end">7</text>
<text x="228" y="4" font-size="10" fill="#333" text-anchor="end">9</text>
<text x="228" y="250" font-size="10" fill="#333" text-anchor="end">0</text>
<line x1="182" y1="260" x2="390" y2="104" stroke="#999" stroke-width="2" stroke-dasharray="4,3"/>
<line x1="208.0" y1="312.0" x2="364" y2="52" stroke="#999" stroke-width="2" stroke-dasharray="4,3"/>
<line x1="182" y1="260" x2="208.0" y2="312.0" stroke="#333" stroke-width="2"/>
<line x1="208.0" y1="312.0" x2="390" y2="104" stroke="#333" stroke-width="2"/>
<line x1="390" y1="104" x2="364" y2="52" stroke="#333" stroke-width="2"/>
<line x1="364" y1="52" x2="182" y2="260" stroke="#333" stroke-width="2"/>
<circle cx="182" cy="260" r="4.5" fill="#2E5C8A"/>
<text x="190" y="252" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="390" cy="104" r="4.5" fill="#1F7A4C"/>
<text x="398" y="96" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
<circle cx="364" cy="52" r="4.5" fill="#7B4FA0"/>
<text x="372" y="44" font-size="13" fill="#7B4FA0" font-weight="bold">D</text>
<circle cx="208.0" cy="312.0" r="4.5" fill="#B5651D"/>
<text x="216.0" y="304.0" font-size="13" fill="#B5651D" font-weight="bold">B</text>
</svg></div>`
            },
            {
                quiz: { q: 'ABCD est un parallélogramme. On donne A(0 ; 0), B(3 ; 1) et C(5 ; 4). Quelles sont les coordonnées de D ?', a: '(2 ; 3)' },
                figure: `<svg viewBox="0 0 364 364" xmlns="http://www.w3.org/2000/svg" style="max-width:340px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q4qx" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q4qy" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="26" y1="0" x2="26" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="52" y1="0" x2="52" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="78" y1="0" x2="78" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="104" y1="0" x2="104" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="130" y1="0" x2="130" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="156" y1="0" x2="156" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="182" y1="0" x2="182" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="208" y1="0" x2="208" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="234" y1="0" x2="234" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="260" y1="0" x2="260" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="286" y1="0" x2="286" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="312" y1="0" x2="312" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="338" y1="0" x2="338" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="364" y1="0" x2="364" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="364" x2="364" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="338" x2="364" y2="338" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="312" x2="364" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="286" x2="364" y2="286" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="260" x2="364" y2="260" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="234" x2="364" y2="234" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="208" x2="364" y2="208" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="182" x2="364" y2="182" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="156" x2="364" y2="156" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="130" x2="364" y2="130" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="104" x2="364" y2="104" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="78" x2="364" y2="78" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="52" x2="364" y2="52" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="26" x2="364" y2="26" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="364" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="182" x2="364" y2="182" stroke="#333" stroke-width="2" marker-end="url(#q4qx)"/>
<line x1="182" y1="364" x2="182" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q4qy)"/>
<text x="0" y="198" font-size="10" fill="#333" text-anchor="middle">-7</text>
<text x="52" y="198" font-size="10" fill="#333" text-anchor="middle">-5</text>
<text x="104" y="198" font-size="10" fill="#333" text-anchor="middle">-3</text>
<text x="156" y="198" font-size="10" fill="#333" text-anchor="middle">-1</text>
<text x="208" y="198" font-size="10" fill="#333" text-anchor="middle">1</text>
<text x="260" y="198" font-size="10" fill="#333" text-anchor="middle">3</text>
<text x="312" y="198" font-size="10" fill="#333" text-anchor="middle">5</text>
<text x="364" y="198" font-size="10" fill="#333" text-anchor="middle">7</text>
<text x="176" y="368" font-size="10" fill="#333" text-anchor="end">-7</text>
<text x="176" y="316" font-size="10" fill="#333" text-anchor="end">-5</text>
<text x="176" y="264" font-size="10" fill="#333" text-anchor="end">-3</text>
<text x="176" y="212" font-size="10" fill="#333" text-anchor="end">-1</text>
<text x="176" y="160" font-size="10" fill="#333" text-anchor="end">1</text>
<text x="176" y="108" font-size="10" fill="#333" text-anchor="end">3</text>
<text x="176" y="56" font-size="10" fill="#333" text-anchor="end">5</text>
<text x="176" y="4" font-size="10" fill="#333" text-anchor="end">7</text>
<text x="176" y="198" font-size="10" fill="#333" text-anchor="end">0</text>
<circle cx="182" cy="182" r="4.5" fill="#2E5C8A"/>
<text x="190" y="174" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="260" cy="156" r="4.5" fill="#B5651D"/>
<text x="268" y="148" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="312" cy="78" r="4.5" fill="#1F7A4C"/>
<text x="320" y="70" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
</svg>`,
                options: '(2 ; 3) ¤ (8 ; 5) ¤ (2 ; 4) ¤ (5 ; 3)',
                explanation: `Le déplacement de B vers C fait augmenter l’abscisse de 5 - 3 = 2 et l’ordonnée de 4 - 1 = 3. En appliquant ce déplacement à A : abscisse 0 + 2 = 2, ordonnée 0 + 3 = 3. Donc D(2 ; 3).<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 364 364" xmlns="http://www.w3.org/2000/svg" style="max-width:340px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q4ex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q4ey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="26" y1="0" x2="26" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="52" y1="0" x2="52" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="78" y1="0" x2="78" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="104" y1="0" x2="104" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="130" y1="0" x2="130" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="156" y1="0" x2="156" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="182" y1="0" x2="182" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="208" y1="0" x2="208" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="234" y1="0" x2="234" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="260" y1="0" x2="260" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="286" y1="0" x2="286" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="312" y1="0" x2="312" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="338" y1="0" x2="338" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="364" y1="0" x2="364" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="364" x2="364" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="338" x2="364" y2="338" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="312" x2="364" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="286" x2="364" y2="286" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="260" x2="364" y2="260" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="234" x2="364" y2="234" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="208" x2="364" y2="208" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="182" x2="364" y2="182" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="156" x2="364" y2="156" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="130" x2="364" y2="130" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="104" x2="364" y2="104" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="78" x2="364" y2="78" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="52" x2="364" y2="52" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="26" x2="364" y2="26" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="364" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="182" x2="364" y2="182" stroke="#333" stroke-width="2" marker-end="url(#q4ex)"/>
<line x1="182" y1="364" x2="182" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q4ey)"/>
<text x="0" y="198" font-size="10" fill="#333" text-anchor="middle">-7</text>
<text x="52" y="198" font-size="10" fill="#333" text-anchor="middle">-5</text>
<text x="104" y="198" font-size="10" fill="#333" text-anchor="middle">-3</text>
<text x="156" y="198" font-size="10" fill="#333" text-anchor="middle">-1</text>
<text x="208" y="198" font-size="10" fill="#333" text-anchor="middle">1</text>
<text x="260" y="198" font-size="10" fill="#333" text-anchor="middle">3</text>
<text x="312" y="198" font-size="10" fill="#333" text-anchor="middle">5</text>
<text x="364" y="198" font-size="10" fill="#333" text-anchor="middle">7</text>
<text x="176" y="368" font-size="10" fill="#333" text-anchor="end">-7</text>
<text x="176" y="316" font-size="10" fill="#333" text-anchor="end">-5</text>
<text x="176" y="264" font-size="10" fill="#333" text-anchor="end">-3</text>
<text x="176" y="212" font-size="10" fill="#333" text-anchor="end">-1</text>
<text x="176" y="160" font-size="10" fill="#333" text-anchor="end">1</text>
<text x="176" y="108" font-size="10" fill="#333" text-anchor="end">3</text>
<text x="176" y="56" font-size="10" fill="#333" text-anchor="end">5</text>
<text x="176" y="4" font-size="10" fill="#333" text-anchor="end">7</text>
<text x="176" y="198" font-size="10" fill="#333" text-anchor="end">0</text>
<line x1="182" y1="182" x2="234" y2="104" stroke="#7B4FA0" stroke-width="2" stroke-dasharray="6,4"/>
<line x1="260" y1="156" x2="312" y2="78" stroke="#7B4FA0" stroke-width="2" stroke-dasharray="6,4"/>
<line x1="182" y1="182" x2="260" y2="156" stroke="#333" stroke-width="2"/>
<line x1="234" y1="104" x2="312" y2="78" stroke="#333" stroke-width="2"/>
<circle cx="182" cy="182" r="4.5" fill="#2E5C8A"/>
<text x="190" y="174" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="260" cy="156" r="4.5" fill="#B5651D"/>
<text x="268" y="148" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="312" cy="78" r="4.5" fill="#1F7A4C"/>
<text x="320" y="70" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
<circle cx="234" cy="104" r="4.5" fill="#7B4FA0"/>
<text x="242" y="96" font-size="13" fill="#7B4FA0" font-weight="bold">D</text>
</svg></div>`
            },
            {
                quiz: { q: 'ABCD est un parallélogramme. On donne A(-5 ; 2), B(-1 ; -3) et D(3 ; 6). Quelles sont les coordonnées de C ?', a: '(7 ; 1)' },
                figure: `<svg viewBox="0 0 468 468" xmlns="http://www.w3.org/2000/svg" style="max-width:340px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q5qx" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q5qy" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="26" y1="0" x2="26" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="52" y1="0" x2="52" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="78" y1="0" x2="78" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="104" y1="0" x2="104" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="130" y1="0" x2="130" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="156" y1="0" x2="156" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="182" y1="0" x2="182" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="208" y1="0" x2="208" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="234" y1="0" x2="234" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="260" y1="0" x2="260" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="286" y1="0" x2="286" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="312" y1="0" x2="312" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="338" y1="0" x2="338" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="364" y1="0" x2="364" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="390" y1="0" x2="390" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="416" y1="0" x2="416" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="442" y1="0" x2="442" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="468" y1="0" x2="468" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="468" x2="468" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="442" x2="468" y2="442" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="416" x2="468" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="390" x2="468" y2="390" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="364" x2="468" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="338" x2="468" y2="338" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="312" x2="468" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="286" x2="468" y2="286" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="260" x2="468" y2="260" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="234" x2="468" y2="234" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="208" x2="468" y2="208" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="182" x2="468" y2="182" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="156" x2="468" y2="156" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="130" x2="468" y2="130" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="104" x2="468" y2="104" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="78" x2="468" y2="78" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="52" x2="468" y2="52" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="26" x2="468" y2="26" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="468" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="234" x2="468" y2="234" stroke="#333" stroke-width="2" marker-end="url(#q5qx)"/>
<line x1="234" y1="468" x2="234" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q5qy)"/>
<text x="0" y="250" font-size="10" fill="#333" text-anchor="middle">-9</text>
<text x="52" y="250" font-size="10" fill="#333" text-anchor="middle">-7</text>
<text x="104" y="250" font-size="10" fill="#333" text-anchor="middle">-5</text>
<text x="156" y="250" font-size="10" fill="#333" text-anchor="middle">-3</text>
<text x="208" y="250" font-size="10" fill="#333" text-anchor="middle">-1</text>
<text x="260" y="250" font-size="10" fill="#333" text-anchor="middle">1</text>
<text x="312" y="250" font-size="10" fill="#333" text-anchor="middle">3</text>
<text x="364" y="250" font-size="10" fill="#333" text-anchor="middle">5</text>
<text x="416" y="250" font-size="10" fill="#333" text-anchor="middle">7</text>
<text x="468" y="250" font-size="10" fill="#333" text-anchor="middle">9</text>
<text x="228" y="472" font-size="10" fill="#333" text-anchor="end">-9</text>
<text x="228" y="420" font-size="10" fill="#333" text-anchor="end">-7</text>
<text x="228" y="368" font-size="10" fill="#333" text-anchor="end">-5</text>
<text x="228" y="316" font-size="10" fill="#333" text-anchor="end">-3</text>
<text x="228" y="264" font-size="10" fill="#333" text-anchor="end">-1</text>
<text x="228" y="212" font-size="10" fill="#333" text-anchor="end">1</text>
<text x="228" y="160" font-size="10" fill="#333" text-anchor="end">3</text>
<text x="228" y="108" font-size="10" fill="#333" text-anchor="end">5</text>
<text x="228" y="56" font-size="10" fill="#333" text-anchor="end">7</text>
<text x="228" y="4" font-size="10" fill="#333" text-anchor="end">9</text>
<text x="228" y="250" font-size="10" fill="#333" text-anchor="end">0</text>
<circle cx="104" cy="182" r="4.5" fill="#2E5C8A"/>
<text x="112" y="174" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="208" cy="312" r="4.5" fill="#B5651D"/>
<text x="216" y="304" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="312" cy="78" r="4.5" fill="#7B4FA0"/>
<text x="320" y="70" font-size="13" fill="#7B4FA0" font-weight="bold">D</text>
</svg>`,
                options: '(7 ; 1) ¤ (-3 ; 5) ¤ (1 ; 7) ¤ (7 ; 11)',
                explanation: `Les diagonales [AC] et [BD] ont le même milieu. Le milieu de [BD] est ((-1+3)/2 ; (-3+6)/2) = (1 ; 1,5). Comme A et C ont aussi ce milieu, C = 2 × (1 ; 1,5) - A = (2-(-5) ; 3-2) = (7 ; 1).<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 468 468" xmlns="http://www.w3.org/2000/svg" style="max-width:340px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q5ex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q5ey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="26" y1="0" x2="26" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="52" y1="0" x2="52" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="78" y1="0" x2="78" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="104" y1="0" x2="104" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="130" y1="0" x2="130" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="156" y1="0" x2="156" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="182" y1="0" x2="182" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="208" y1="0" x2="208" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="234" y1="0" x2="234" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="260" y1="0" x2="260" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="286" y1="0" x2="286" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="312" y1="0" x2="312" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="338" y1="0" x2="338" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="364" y1="0" x2="364" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="390" y1="0" x2="390" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="416" y1="0" x2="416" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="442" y1="0" x2="442" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="468" y1="0" x2="468" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="468" x2="468" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="442" x2="468" y2="442" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="416" x2="468" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="390" x2="468" y2="390" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="364" x2="468" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="338" x2="468" y2="338" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="312" x2="468" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="286" x2="468" y2="286" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="260" x2="468" y2="260" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="234" x2="468" y2="234" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="208" x2="468" y2="208" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="182" x2="468" y2="182" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="156" x2="468" y2="156" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="130" x2="468" y2="130" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="104" x2="468" y2="104" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="78" x2="468" y2="78" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="52" x2="468" y2="52" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="26" x2="468" y2="26" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="468" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="234" x2="468" y2="234" stroke="#333" stroke-width="2" marker-end="url(#q5ex)"/>
<line x1="234" y1="468" x2="234" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q5ey)"/>
<text x="0" y="250" font-size="10" fill="#333" text-anchor="middle">-9</text>
<text x="52" y="250" font-size="10" fill="#333" text-anchor="middle">-7</text>
<text x="104" y="250" font-size="10" fill="#333" text-anchor="middle">-5</text>
<text x="156" y="250" font-size="10" fill="#333" text-anchor="middle">-3</text>
<text x="208" y="250" font-size="10" fill="#333" text-anchor="middle">-1</text>
<text x="260" y="250" font-size="10" fill="#333" text-anchor="middle">1</text>
<text x="312" y="250" font-size="10" fill="#333" text-anchor="middle">3</text>
<text x="364" y="250" font-size="10" fill="#333" text-anchor="middle">5</text>
<text x="416" y="250" font-size="10" fill="#333" text-anchor="middle">7</text>
<text x="468" y="250" font-size="10" fill="#333" text-anchor="middle">9</text>
<text x="228" y="472" font-size="10" fill="#333" text-anchor="end">-9</text>
<text x="228" y="420" font-size="10" fill="#333" text-anchor="end">-7</text>
<text x="228" y="368" font-size="10" fill="#333" text-anchor="end">-5</text>
<text x="228" y="316" font-size="10" fill="#333" text-anchor="end">-3</text>
<text x="228" y="264" font-size="10" fill="#333" text-anchor="end">-1</text>
<text x="228" y="212" font-size="10" fill="#333" text-anchor="end">1</text>
<text x="228" y="160" font-size="10" fill="#333" text-anchor="end">3</text>
<text x="228" y="108" font-size="10" fill="#333" text-anchor="end">5</text>
<text x="228" y="56" font-size="10" fill="#333" text-anchor="end">7</text>
<text x="228" y="4" font-size="10" fill="#333" text-anchor="end">9</text>
<text x="228" y="250" font-size="10" fill="#333" text-anchor="end">0</text>
<line x1="104" y1="182" x2="416.0" y2="208.0" stroke="#999" stroke-width="2" stroke-dasharray="4,3"/>
<line x1="208" y1="312" x2="312" y2="78" stroke="#999" stroke-width="2" stroke-dasharray="4,3"/>
<line x1="104" y1="182" x2="208" y2="312" stroke="#333" stroke-width="2"/>
<line x1="208" y1="312" x2="416.0" y2="208.0" stroke="#333" stroke-width="2"/>
<line x1="416.0" y1="208.0" x2="312" y2="78" stroke="#333" stroke-width="2"/>
<line x1="312" y1="78" x2="104" y2="182" stroke="#333" stroke-width="2"/>
<circle cx="104" cy="182" r="4.5" fill="#2E5C8A"/>
<text x="112" y="174" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="208" cy="312" r="4.5" fill="#B5651D"/>
<text x="216" y="304" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="312" cy="78" r="4.5" fill="#7B4FA0"/>
<text x="320" y="70" font-size="13" fill="#7B4FA0" font-weight="bold">D</text>
<circle cx="416.0" cy="208.0" r="4.5" fill="#1F7A4C"/>
<text x="424.0" y="200.0" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
</svg></div>`
            },
            {
                quiz: { q: 'ABCD est un parallélogramme. On donne A(2 ; -5), B(-3 ; -1) et C(-6 ; 4). Quelles sont les coordonnées de D ?', a: '(-1 ; 0)' },
                figure: `<svg viewBox="0 0 416 416" xmlns="http://www.w3.org/2000/svg" style="max-width:340px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q6qx" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q6qy" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="26" y1="0" x2="26" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="52" y1="0" x2="52" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="78" y1="0" x2="78" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="104" y1="0" x2="104" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="130" y1="0" x2="130" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="156" y1="0" x2="156" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="182" y1="0" x2="182" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="208" y1="0" x2="208" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="234" y1="0" x2="234" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="260" y1="0" x2="260" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="286" y1="0" x2="286" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="312" y1="0" x2="312" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="338" y1="0" x2="338" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="364" y1="0" x2="364" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="390" y1="0" x2="390" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="416" y1="0" x2="416" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="416" x2="416" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="390" x2="416" y2="390" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="364" x2="416" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="338" x2="416" y2="338" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="312" x2="416" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="286" x2="416" y2="286" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="260" x2="416" y2="260" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="234" x2="416" y2="234" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="208" x2="416" y2="208" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="182" x2="416" y2="182" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="156" x2="416" y2="156" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="130" x2="416" y2="130" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="104" x2="416" y2="104" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="78" x2="416" y2="78" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="52" x2="416" y2="52" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="26" x2="416" y2="26" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="416" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="208" x2="416" y2="208" stroke="#333" stroke-width="2" marker-end="url(#q6qx)"/>
<line x1="208" y1="416" x2="208" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q6qy)"/>
<text x="0" y="224" font-size="10" fill="#333" text-anchor="middle">-8</text>
<text x="52" y="224" font-size="10" fill="#333" text-anchor="middle">-6</text>
<text x="104" y="224" font-size="10" fill="#333" text-anchor="middle">-4</text>
<text x="156" y="224" font-size="10" fill="#333" text-anchor="middle">-2</text>
<text x="260" y="224" font-size="10" fill="#333" text-anchor="middle">2</text>
<text x="312" y="224" font-size="10" fill="#333" text-anchor="middle">4</text>
<text x="364" y="224" font-size="10" fill="#333" text-anchor="middle">6</text>
<text x="416" y="224" font-size="10" fill="#333" text-anchor="middle">8</text>
<text x="202" y="420" font-size="10" fill="#333" text-anchor="end">-8</text>
<text x="202" y="368" font-size="10" fill="#333" text-anchor="end">-6</text>
<text x="202" y="316" font-size="10" fill="#333" text-anchor="end">-4</text>
<text x="202" y="264" font-size="10" fill="#333" text-anchor="end">-2</text>
<text x="202" y="160" font-size="10" fill="#333" text-anchor="end">2</text>
<text x="202" y="108" font-size="10" fill="#333" text-anchor="end">4</text>
<text x="202" y="56" font-size="10" fill="#333" text-anchor="end">6</text>
<text x="202" y="4" font-size="10" fill="#333" text-anchor="end">8</text>
<text x="202" y="224" font-size="10" fill="#333" text-anchor="end">0</text>
<circle cx="260" cy="338" r="4.5" fill="#2E5C8A"/>
<text x="268" y="330" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="130" cy="234" r="4.5" fill="#B5651D"/>
<text x="138" y="226" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="52" cy="104" r="4.5" fill="#1F7A4C"/>
<text x="60" y="96" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
</svg>`,
                options: '(-1 ; 0) ¤ (5 ; -9) ¤ (-11 ; 8) ¤ (1 ; 0)',
                explanation: `Le déplacement de B vers C fait varier l’abscisse de -6 - (-3) = -3 et l’ordonnée de 4 - (-1) = 5. En appliquant ce déplacement à A : abscisse 2 - 3 = -1, ordonnée -5 + 5 = 0. Donc D(-1 ; 0).<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 416 416" xmlns="http://www.w3.org/2000/svg" style="max-width:340px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q6ex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q6ey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="26" y1="0" x2="26" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="52" y1="0" x2="52" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="78" y1="0" x2="78" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="104" y1="0" x2="104" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="130" y1="0" x2="130" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="156" y1="0" x2="156" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="182" y1="0" x2="182" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="208" y1="0" x2="208" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="234" y1="0" x2="234" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="260" y1="0" x2="260" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="286" y1="0" x2="286" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="312" y1="0" x2="312" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="338" y1="0" x2="338" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="364" y1="0" x2="364" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="390" y1="0" x2="390" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="416" y1="0" x2="416" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="416" x2="416" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="390" x2="416" y2="390" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="364" x2="416" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="338" x2="416" y2="338" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="312" x2="416" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="286" x2="416" y2="286" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="260" x2="416" y2="260" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="234" x2="416" y2="234" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="208" x2="416" y2="208" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="182" x2="416" y2="182" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="156" x2="416" y2="156" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="130" x2="416" y2="130" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="104" x2="416" y2="104" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="78" x2="416" y2="78" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="52" x2="416" y2="52" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="26" x2="416" y2="26" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="416" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="208" x2="416" y2="208" stroke="#333" stroke-width="2" marker-end="url(#q6ex)"/>
<line x1="208" y1="416" x2="208" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q6ey)"/>
<text x="0" y="224" font-size="10" fill="#333" text-anchor="middle">-8</text>
<text x="52" y="224" font-size="10" fill="#333" text-anchor="middle">-6</text>
<text x="104" y="224" font-size="10" fill="#333" text-anchor="middle">-4</text>
<text x="156" y="224" font-size="10" fill="#333" text-anchor="middle">-2</text>
<text x="260" y="224" font-size="10" fill="#333" text-anchor="middle">2</text>
<text x="312" y="224" font-size="10" fill="#333" text-anchor="middle">4</text>
<text x="364" y="224" font-size="10" fill="#333" text-anchor="middle">6</text>
<text x="416" y="224" font-size="10" fill="#333" text-anchor="middle">8</text>
<text x="202" y="420" font-size="10" fill="#333" text-anchor="end">-8</text>
<text x="202" y="368" font-size="10" fill="#333" text-anchor="end">-6</text>
<text x="202" y="316" font-size="10" fill="#333" text-anchor="end">-4</text>
<text x="202" y="264" font-size="10" fill="#333" text-anchor="end">-2</text>
<text x="202" y="160" font-size="10" fill="#333" text-anchor="end">2</text>
<text x="202" y="108" font-size="10" fill="#333" text-anchor="end">4</text>
<text x="202" y="56" font-size="10" fill="#333" text-anchor="end">6</text>
<text x="202" y="4" font-size="10" fill="#333" text-anchor="end">8</text>
<text x="202" y="224" font-size="10" fill="#333" text-anchor="end">0</text>
<line x1="260" y1="338" x2="182" y2="208" stroke="#7B4FA0" stroke-width="2" stroke-dasharray="6,4"/>
<line x1="130" y1="234" x2="52" y2="104" stroke="#7B4FA0" stroke-width="2" stroke-dasharray="6,4"/>
<line x1="260" y1="338" x2="130" y2="234" stroke="#333" stroke-width="2"/>
<line x1="182" y1="208" x2="52" y2="104" stroke="#333" stroke-width="2"/>
<circle cx="260" cy="338" r="4.5" fill="#2E5C8A"/>
<text x="268" y="330" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="130" cy="234" r="4.5" fill="#B5651D"/>
<text x="138" y="226" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="52" cy="104" r="4.5" fill="#1F7A4C"/>
<text x="60" y="96" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
<circle cx="182" cy="208" r="4.5" fill="#7B4FA0"/>
<text x="190" y="200" font-size="13" fill="#7B4FA0" font-weight="bold">D</text>
</svg></div>`
            },
            {
                quiz: { q: 'Quelles sont les deux propriétés du parallélogramme qui permettent de retrouver les coordonnées d’un sommet manquant ?', a: 'Côtés opposés de même longueur et parallèles ; diagonales de même milieu' },
                options: 'Côtés opposés de même longueur et parallèles ; diagonales de même milieu ¤ Côtés perpendiculaires ; diagonales de même longueur ¤ Angles tous égaux ; diagonales perpendiculaires ¤ Aucune propriété particulière ne permet de le retrouver',
                explanation: `Dans un parallélogramme, deux méthodes équivalentes permettent de retrouver un sommet manquant : utiliser le fait que les côtés opposés sont parallèles et de même longueur (translation d’un sommet connu), ou utiliser le fait que les diagonales se coupent en leur milieu commun.`
            },
            {
                quiz: { q: 'ABCD est un parallélogramme. On donne A(-1 ; 4), B(3 ; 4) et C(3 ; -2). Quelles sont les coordonnées de D ?', a: '(-1 ; -2)' },
                figure: `<svg viewBox="0 0 312 312" xmlns="http://www.w3.org/2000/svg" style="max-width:312px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q8qx" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q8qy" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="26" y1="0" x2="26" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="52" y1="0" x2="52" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="78" y1="0" x2="78" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="104" y1="0" x2="104" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="130" y1="0" x2="130" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="156" y1="0" x2="156" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="182" y1="0" x2="182" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="208" y1="0" x2="208" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="234" y1="0" x2="234" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="260" y1="0" x2="260" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="286" y1="0" x2="286" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="312" y1="0" x2="312" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="312" x2="312" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="286" x2="312" y2="286" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="260" x2="312" y2="260" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="234" x2="312" y2="234" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="208" x2="312" y2="208" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="182" x2="312" y2="182" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="156" x2="312" y2="156" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="130" x2="312" y2="130" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="104" x2="312" y2="104" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="78" x2="312" y2="78" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="52" x2="312" y2="52" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="26" x2="312" y2="26" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="312" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="156" x2="312" y2="156" stroke="#333" stroke-width="2" marker-end="url(#q8qx)"/>
<line x1="156" y1="312" x2="156" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q8qy)"/>
<text x="0" y="172" font-size="10" fill="#333" text-anchor="middle">-6</text>
<text x="52" y="172" font-size="10" fill="#333" text-anchor="middle">-4</text>
<text x="104" y="172" font-size="10" fill="#333" text-anchor="middle">-2</text>
<text x="208" y="172" font-size="10" fill="#333" text-anchor="middle">2</text>
<text x="260" y="172" font-size="10" fill="#333" text-anchor="middle">4</text>
<text x="312" y="172" font-size="10" fill="#333" text-anchor="middle">6</text>
<text x="150" y="316" font-size="10" fill="#333" text-anchor="end">-6</text>
<text x="150" y="264" font-size="10" fill="#333" text-anchor="end">-4</text>
<text x="150" y="212" font-size="10" fill="#333" text-anchor="end">-2</text>
<text x="150" y="108" font-size="10" fill="#333" text-anchor="end">2</text>
<text x="150" y="56" font-size="10" fill="#333" text-anchor="end">4</text>
<text x="150" y="4" font-size="10" fill="#333" text-anchor="end">6</text>
<text x="150" y="172" font-size="10" fill="#333" text-anchor="end">0</text>
<circle cx="130" cy="52" r="4.5" fill="#2E5C8A"/>
<text x="138" y="44" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="234" cy="52" r="4.5" fill="#B5651D"/>
<text x="242" y="44" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="234" cy="208" r="4.5" fill="#1F7A4C"/>
<text x="242" y="200" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
</svg>`,
                options: '(-1 ; -2) ¤ (7 ; -2) ¤ (-1 ; 10) ¤ (-5 ; -2)',
                explanation: `Le déplacement de B vers C fait varier l’abscisse de 3 - 3 = 0 et l’ordonnée de -2 - 4 = -6. En appliquant ce déplacement à A : abscisse -1 + 0 = -1, ordonnée 4 - 6 = -2. Donc D(-1 ; -2).<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 312 312" xmlns="http://www.w3.org/2000/svg" style="max-width:312px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q8ex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q8ey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="26" y1="0" x2="26" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="52" y1="0" x2="52" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="78" y1="0" x2="78" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="104" y1="0" x2="104" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="130" y1="0" x2="130" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="156" y1="0" x2="156" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="182" y1="0" x2="182" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="208" y1="0" x2="208" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="234" y1="0" x2="234" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="260" y1="0" x2="260" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="286" y1="0" x2="286" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="312" y1="0" x2="312" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="312" x2="312" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="286" x2="312" y2="286" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="260" x2="312" y2="260" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="234" x2="312" y2="234" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="208" x2="312" y2="208" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="182" x2="312" y2="182" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="156" x2="312" y2="156" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="130" x2="312" y2="130" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="104" x2="312" y2="104" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="78" x2="312" y2="78" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="52" x2="312" y2="52" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="26" x2="312" y2="26" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="312" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="156" x2="312" y2="156" stroke="#333" stroke-width="2" marker-end="url(#q8ex)"/>
<line x1="156" y1="312" x2="156" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q8ey)"/>
<text x="0" y="172" font-size="10" fill="#333" text-anchor="middle">-6</text>
<text x="52" y="172" font-size="10" fill="#333" text-anchor="middle">-4</text>
<text x="104" y="172" font-size="10" fill="#333" text-anchor="middle">-2</text>
<text x="208" y="172" font-size="10" fill="#333" text-anchor="middle">2</text>
<text x="260" y="172" font-size="10" fill="#333" text-anchor="middle">4</text>
<text x="312" y="172" font-size="10" fill="#333" text-anchor="middle">6</text>
<text x="150" y="316" font-size="10" fill="#333" text-anchor="end">-6</text>
<text x="150" y="264" font-size="10" fill="#333" text-anchor="end">-4</text>
<text x="150" y="212" font-size="10" fill="#333" text-anchor="end">-2</text>
<text x="150" y="108" font-size="10" fill="#333" text-anchor="end">2</text>
<text x="150" y="56" font-size="10" fill="#333" text-anchor="end">4</text>
<text x="150" y="4" font-size="10" fill="#333" text-anchor="end">6</text>
<text x="150" y="172" font-size="10" fill="#333" text-anchor="end">0</text>
<line x1="130" y1="52" x2="130" y2="208" stroke="#7B4FA0" stroke-width="2" stroke-dasharray="6,4"/>
<line x1="234" y1="52" x2="234" y2="208" stroke="#7B4FA0" stroke-width="2" stroke-dasharray="6,4"/>
<line x1="130" y1="52" x2="234" y2="52" stroke="#333" stroke-width="2"/>
<line x1="130" y1="208" x2="234" y2="208" stroke="#333" stroke-width="2"/>
<circle cx="130" cy="52" r="4.5" fill="#2E5C8A"/>
<text x="138" y="44" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="234" cy="52" r="4.5" fill="#B5651D"/>
<text x="242" y="44" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="234" cy="208" r="4.5" fill="#1F7A4C"/>
<text x="242" y="200" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
<circle cx="130" cy="208" r="4.5" fill="#7B4FA0"/>
<text x="138" y="200" font-size="13" fill="#7B4FA0" font-weight="bold">D</text>
</svg></div>`
            },
            {
                quiz: { q: 'ABCD est un parallélogramme. On donne A(4 ; 1), B(0 ; -1) et C(-2 ; 7). Quelles sont les coordonnées de D ?', a: '(2 ; 9)' },
                figure: `<svg viewBox="0 0 572 572" xmlns="http://www.w3.org/2000/svg" style="max-width:340px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q9qx" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q9qy" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="26" y1="0" x2="26" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="52" y1="0" x2="52" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="78" y1="0" x2="78" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="104" y1="0" x2="104" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="130" y1="0" x2="130" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="156" y1="0" x2="156" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="182" y1="0" x2="182" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="208" y1="0" x2="208" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="234" y1="0" x2="234" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="260" y1="0" x2="260" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="286" y1="0" x2="286" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="312" y1="0" x2="312" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="338" y1="0" x2="338" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="364" y1="0" x2="364" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="390" y1="0" x2="390" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="416" y1="0" x2="416" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="442" y1="0" x2="442" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="468" y1="0" x2="468" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="494" y1="0" x2="494" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="520" y1="0" x2="520" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="546" y1="0" x2="546" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="572" y1="0" x2="572" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="572" x2="572" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="546" x2="572" y2="546" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="520" x2="572" y2="520" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="494" x2="572" y2="494" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="468" x2="572" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="442" x2="572" y2="442" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="416" x2="572" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="390" x2="572" y2="390" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="364" x2="572" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="338" x2="572" y2="338" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="312" x2="572" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="286" x2="572" y2="286" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="260" x2="572" y2="260" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="234" x2="572" y2="234" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="208" x2="572" y2="208" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="182" x2="572" y2="182" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="156" x2="572" y2="156" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="130" x2="572" y2="130" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="104" x2="572" y2="104" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="78" x2="572" y2="78" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="52" x2="572" y2="52" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="26" x2="572" y2="26" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="572" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="286" x2="572" y2="286" stroke="#333" stroke-width="2" marker-end="url(#q9qx)"/>
<line x1="286" y1="572" x2="286" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q9qy)"/>
<text x="0" y="302" font-size="10" fill="#333" text-anchor="middle">-11</text>
<text x="52" y="302" font-size="10" fill="#333" text-anchor="middle">-9</text>
<text x="104" y="302" font-size="10" fill="#333" text-anchor="middle">-7</text>
<text x="156" y="302" font-size="10" fill="#333" text-anchor="middle">-5</text>
<text x="208" y="302" font-size="10" fill="#333" text-anchor="middle">-3</text>
<text x="260" y="302" font-size="10" fill="#333" text-anchor="middle">-1</text>
<text x="312" y="302" font-size="10" fill="#333" text-anchor="middle">1</text>
<text x="364" y="302" font-size="10" fill="#333" text-anchor="middle">3</text>
<text x="416" y="302" font-size="10" fill="#333" text-anchor="middle">5</text>
<text x="468" y="302" font-size="10" fill="#333" text-anchor="middle">7</text>
<text x="520" y="302" font-size="10" fill="#333" text-anchor="middle">9</text>
<text x="572" y="302" font-size="10" fill="#333" text-anchor="middle">11</text>
<text x="280" y="576" font-size="10" fill="#333" text-anchor="end">-11</text>
<text x="280" y="524" font-size="10" fill="#333" text-anchor="end">-9</text>
<text x="280" y="472" font-size="10" fill="#333" text-anchor="end">-7</text>
<text x="280" y="420" font-size="10" fill="#333" text-anchor="end">-5</text>
<text x="280" y="368" font-size="10" fill="#333" text-anchor="end">-3</text>
<text x="280" y="316" font-size="10" fill="#333" text-anchor="end">-1</text>
<text x="280" y="264" font-size="10" fill="#333" text-anchor="end">1</text>
<text x="280" y="212" font-size="10" fill="#333" text-anchor="end">3</text>
<text x="280" y="160" font-size="10" fill="#333" text-anchor="end">5</text>
<text x="280" y="108" font-size="10" fill="#333" text-anchor="end">7</text>
<text x="280" y="56" font-size="10" fill="#333" text-anchor="end">9</text>
<text x="280" y="4" font-size="10" fill="#333" text-anchor="end">11</text>
<text x="280" y="302" font-size="10" fill="#333" text-anchor="end">0</text>
<circle cx="390" cy="260" r="4.5" fill="#2E5C8A"/>
<text x="398" y="252" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="286" cy="312" r="4.5" fill="#B5651D"/>
<text x="294" y="304" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="234" cy="104" r="4.5" fill="#1F7A4C"/>
<text x="242" y="96" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
</svg>`,
                options: '(2 ; 9) ¤ (6 ; 9) ¤ (-6 ; 5) ¤ (2 ; -1)',
                explanation: `Les diagonales [AC] et [BD] ont le même milieu. Le milieu de [AC] est ((4-2)/2 ; (1+7)/2) = (1 ; 4). Comme B et D ont aussi ce milieu, D = 2 × (1 ; 4) - B = (2-0 ; 8-(-1)) = (2 ; 9).<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 572 572" xmlns="http://www.w3.org/2000/svg" style="max-width:340px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q9ex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q9ey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="26" y1="0" x2="26" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="52" y1="0" x2="52" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="78" y1="0" x2="78" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="104" y1="0" x2="104" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="130" y1="0" x2="130" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="156" y1="0" x2="156" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="182" y1="0" x2="182" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="208" y1="0" x2="208" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="234" y1="0" x2="234" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="260" y1="0" x2="260" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="286" y1="0" x2="286" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="312" y1="0" x2="312" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="338" y1="0" x2="338" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="364" y1="0" x2="364" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="390" y1="0" x2="390" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="416" y1="0" x2="416" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="442" y1="0" x2="442" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="468" y1="0" x2="468" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="494" y1="0" x2="494" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="520" y1="0" x2="520" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="546" y1="0" x2="546" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="572" y1="0" x2="572" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="572" x2="572" y2="572" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="546" x2="572" y2="546" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="520" x2="572" y2="520" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="494" x2="572" y2="494" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="468" x2="572" y2="468" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="442" x2="572" y2="442" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="416" x2="572" y2="416" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="390" x2="572" y2="390" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="364" x2="572" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="338" x2="572" y2="338" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="312" x2="572" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="286" x2="572" y2="286" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="260" x2="572" y2="260" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="234" x2="572" y2="234" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="208" x2="572" y2="208" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="182" x2="572" y2="182" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="156" x2="572" y2="156" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="130" x2="572" y2="130" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="104" x2="572" y2="104" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="78" x2="572" y2="78" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="52" x2="572" y2="52" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="26" x2="572" y2="26" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="572" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="286" x2="572" y2="286" stroke="#333" stroke-width="2" marker-end="url(#q9ex)"/>
<line x1="286" y1="572" x2="286" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q9ey)"/>
<text x="0" y="302" font-size="10" fill="#333" text-anchor="middle">-11</text>
<text x="52" y="302" font-size="10" fill="#333" text-anchor="middle">-9</text>
<text x="104" y="302" font-size="10" fill="#333" text-anchor="middle">-7</text>
<text x="156" y="302" font-size="10" fill="#333" text-anchor="middle">-5</text>
<text x="208" y="302" font-size="10" fill="#333" text-anchor="middle">-3</text>
<text x="260" y="302" font-size="10" fill="#333" text-anchor="middle">-1</text>
<text x="312" y="302" font-size="10" fill="#333" text-anchor="middle">1</text>
<text x="364" y="302" font-size="10" fill="#333" text-anchor="middle">3</text>
<text x="416" y="302" font-size="10" fill="#333" text-anchor="middle">5</text>
<text x="468" y="302" font-size="10" fill="#333" text-anchor="middle">7</text>
<text x="520" y="302" font-size="10" fill="#333" text-anchor="middle">9</text>
<text x="572" y="302" font-size="10" fill="#333" text-anchor="middle">11</text>
<text x="280" y="576" font-size="10" fill="#333" text-anchor="end">-11</text>
<text x="280" y="524" font-size="10" fill="#333" text-anchor="end">-9</text>
<text x="280" y="472" font-size="10" fill="#333" text-anchor="end">-7</text>
<text x="280" y="420" font-size="10" fill="#333" text-anchor="end">-5</text>
<text x="280" y="368" font-size="10" fill="#333" text-anchor="end">-3</text>
<text x="280" y="316" font-size="10" fill="#333" text-anchor="end">-1</text>
<text x="280" y="264" font-size="10" fill="#333" text-anchor="end">1</text>
<text x="280" y="212" font-size="10" fill="#333" text-anchor="end">3</text>
<text x="280" y="160" font-size="10" fill="#333" text-anchor="end">5</text>
<text x="280" y="108" font-size="10" fill="#333" text-anchor="end">7</text>
<text x="280" y="56" font-size="10" fill="#333" text-anchor="end">9</text>
<text x="280" y="4" font-size="10" fill="#333" text-anchor="end">11</text>
<text x="280" y="302" font-size="10" fill="#333" text-anchor="end">0</text>
<line x1="390" y1="260" x2="234" y2="104" stroke="#999" stroke-width="2" stroke-dasharray="4,3"/>
<line x1="286" y1="312" x2="338.0" y2="52.0" stroke="#999" stroke-width="2" stroke-dasharray="4,3"/>
<line x1="390" y1="260" x2="286" y2="312" stroke="#333" stroke-width="2"/>
<line x1="286" y1="312" x2="234" y2="104" stroke="#333" stroke-width="2"/>
<line x1="234" y1="104" x2="338.0" y2="52.0" stroke="#333" stroke-width="2"/>
<line x1="338.0" y1="52.0" x2="390" y2="260" stroke="#333" stroke-width="2"/>
<circle cx="390" cy="260" r="4.5" fill="#2E5C8A"/>
<text x="398" y="252" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="286" cy="312" r="4.5" fill="#B5651D"/>
<text x="294" y="304" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="234" cy="104" r="4.5" fill="#1F7A4C"/>
<text x="242" y="96" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
<circle cx="338.0" cy="52.0" r="4.5" fill="#7B4FA0"/>
<text x="346.0" y="44.0" font-size="13" fill="#7B4FA0" font-weight="bold">D</text>
</svg></div>`
            },
            {
                quiz: { q: 'ABCD est un parallélogramme. On donne A(-3 ; -3), B(1 ; -5) et C(4 ; -1). Quelles sont les coordonnées de D ?', a: '(0 ; 1)' },
                figure: `<svg viewBox="0 0 364 364" xmlns="http://www.w3.org/2000/svg" style="max-width:340px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q10qx" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q10qy" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="26" y1="0" x2="26" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="52" y1="0" x2="52" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="78" y1="0" x2="78" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="104" y1="0" x2="104" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="130" y1="0" x2="130" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="156" y1="0" x2="156" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="182" y1="0" x2="182" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="208" y1="0" x2="208" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="234" y1="0" x2="234" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="260" y1="0" x2="260" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="286" y1="0" x2="286" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="312" y1="0" x2="312" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="338" y1="0" x2="338" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="364" y1="0" x2="364" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="364" x2="364" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="338" x2="364" y2="338" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="312" x2="364" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="286" x2="364" y2="286" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="260" x2="364" y2="260" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="234" x2="364" y2="234" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="208" x2="364" y2="208" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="182" x2="364" y2="182" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="156" x2="364" y2="156" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="130" x2="364" y2="130" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="104" x2="364" y2="104" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="78" x2="364" y2="78" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="52" x2="364" y2="52" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="26" x2="364" y2="26" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="364" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="182" x2="364" y2="182" stroke="#333" stroke-width="2" marker-end="url(#q10qx)"/>
<line x1="182" y1="364" x2="182" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q10qy)"/>
<text x="0" y="198" font-size="10" fill="#333" text-anchor="middle">-7</text>
<text x="52" y="198" font-size="10" fill="#333" text-anchor="middle">-5</text>
<text x="104" y="198" font-size="10" fill="#333" text-anchor="middle">-3</text>
<text x="156" y="198" font-size="10" fill="#333" text-anchor="middle">-1</text>
<text x="208" y="198" font-size="10" fill="#333" text-anchor="middle">1</text>
<text x="260" y="198" font-size="10" fill="#333" text-anchor="middle">3</text>
<text x="312" y="198" font-size="10" fill="#333" text-anchor="middle">5</text>
<text x="364" y="198" font-size="10" fill="#333" text-anchor="middle">7</text>
<text x="176" y="368" font-size="10" fill="#333" text-anchor="end">-7</text>
<text x="176" y="316" font-size="10" fill="#333" text-anchor="end">-5</text>
<text x="176" y="264" font-size="10" fill="#333" text-anchor="end">-3</text>
<text x="176" y="212" font-size="10" fill="#333" text-anchor="end">-1</text>
<text x="176" y="160" font-size="10" fill="#333" text-anchor="end">1</text>
<text x="176" y="108" font-size="10" fill="#333" text-anchor="end">3</text>
<text x="176" y="56" font-size="10" fill="#333" text-anchor="end">5</text>
<text x="176" y="4" font-size="10" fill="#333" text-anchor="end">7</text>
<text x="176" y="198" font-size="10" fill="#333" text-anchor="end">0</text>
<circle cx="104" cy="260" r="4.5" fill="#2E5C8A"/>
<text x="112" y="252" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="208" cy="312" r="4.5" fill="#B5651D"/>
<text x="216" y="304" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="286" cy="208" r="4.5" fill="#1F7A4C"/>
<text x="294" y="200" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
</svg>`,
                options: '(0 ; 1) ¤ (0 ; -9) ¤ (8 ; -7) ¤ (-6 ; -7)',
                explanation: `Le déplacement de B vers C fait varier l’abscisse de 4 - 1 = 3 et l’ordonnée de -1 - (-5) = 4. En appliquant ce déplacement à A : abscisse -3 + 3 = 0, ordonnée -3 + 4 = 1. Donc D(0 ; 1).<div style="text-align:center;margin-top:10px;"><svg viewBox="0 0 364 364" xmlns="http://www.w3.org/2000/svg" style="max-width:340px; display:block; margin:0 auto; font-family:sans-serif;">
<defs><marker id="q10ex" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker><marker id="q10ey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#333"/></marker></defs>
<line x1="0" y1="0" x2="0" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="26" y1="0" x2="26" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="52" y1="0" x2="52" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="78" y1="0" x2="78" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="104" y1="0" x2="104" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="130" y1="0" x2="130" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="156" y1="0" x2="156" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="182" y1="0" x2="182" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="208" y1="0" x2="208" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="234" y1="0" x2="234" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="260" y1="0" x2="260" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="286" y1="0" x2="286" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="312" y1="0" x2="312" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="338" y1="0" x2="338" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="364" y1="0" x2="364" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="364" x2="364" y2="364" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="338" x2="364" y2="338" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="312" x2="364" y2="312" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="286" x2="364" y2="286" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="260" x2="364" y2="260" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="234" x2="364" y2="234" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="208" x2="364" y2="208" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="182" x2="364" y2="182" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="156" x2="364" y2="156" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="130" x2="364" y2="130" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="104" x2="364" y2="104" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="78" x2="364" y2="78" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="52" x2="364" y2="52" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="26" x2="364" y2="26" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="0" x2="364" y2="0" stroke="#e8e8e8" stroke-width="1"/>
<line x1="0" y1="182" x2="364" y2="182" stroke="#333" stroke-width="2" marker-end="url(#q10ex)"/>
<line x1="182" y1="364" x2="182" y2="0" stroke="#333" stroke-width="2" marker-end="url(#q10ey)"/>
<text x="0" y="198" font-size="10" fill="#333" text-anchor="middle">-7</text>
<text x="52" y="198" font-size="10" fill="#333" text-anchor="middle">-5</text>
<text x="104" y="198" font-size="10" fill="#333" text-anchor="middle">-3</text>
<text x="156" y="198" font-size="10" fill="#333" text-anchor="middle">-1</text>
<text x="208" y="198" font-size="10" fill="#333" text-anchor="middle">1</text>
<text x="260" y="198" font-size="10" fill="#333" text-anchor="middle">3</text>
<text x="312" y="198" font-size="10" fill="#333" text-anchor="middle">5</text>
<text x="364" y="198" font-size="10" fill="#333" text-anchor="middle">7</text>
<text x="176" y="368" font-size="10" fill="#333" text-anchor="end">-7</text>
<text x="176" y="316" font-size="10" fill="#333" text-anchor="end">-5</text>
<text x="176" y="264" font-size="10" fill="#333" text-anchor="end">-3</text>
<text x="176" y="212" font-size="10" fill="#333" text-anchor="end">-1</text>
<text x="176" y="160" font-size="10" fill="#333" text-anchor="end">1</text>
<text x="176" y="108" font-size="10" fill="#333" text-anchor="end">3</text>
<text x="176" y="56" font-size="10" fill="#333" text-anchor="end">5</text>
<text x="176" y="4" font-size="10" fill="#333" text-anchor="end">7</text>
<text x="176" y="198" font-size="10" fill="#333" text-anchor="end">0</text>
<line x1="104" y1="260" x2="182" y2="156" stroke="#7B4FA0" stroke-width="2" stroke-dasharray="6,4"/>
<line x1="208" y1="312" x2="286" y2="208" stroke="#7B4FA0" stroke-width="2" stroke-dasharray="6,4"/>
<line x1="104" y1="260" x2="208" y2="312" stroke="#333" stroke-width="2"/>
<line x1="182" y1="156" x2="286" y2="208" stroke="#333" stroke-width="2"/>
<circle cx="104" cy="260" r="4.5" fill="#2E5C8A"/>
<text x="112" y="252" font-size="13" fill="#2E5C8A" font-weight="bold">A</text>
<circle cx="208" cy="312" r="4.5" fill="#B5651D"/>
<text x="216" y="304" font-size="13" fill="#B5651D" font-weight="bold">B</text>
<circle cx="286" cy="208" r="4.5" fill="#1F7A4C"/>
<text x="294" y="200" font-size="13" fill="#1F7A4C" font-weight="bold">C</text>
<circle cx="182" cy="156" r="4.5" fill="#7B4FA0"/>
<text x="190" y="148" font-size="13" fill="#7B4FA0" font-weight="bold">D</text>
</svg></div>`
            }
],

        // ============================================================
        // 5EME - CHAPITRE 4 (Puissances) - TITRE H2 1 (Définition d'une puissance) - TITRE H3 1 (Le carré) - n° questionnaire 1
        // ------------------------------------------------------------
        // 54111 : Le carré d'un nombre (notation, vocabulaire base/exposant,
        // aire d'un carré, piège classique a² ≠ a×2). 10 questions.
        // ------------------------------------------------------------
        "54111": [
            {
                quiz: { q: 'Que signifie l\'écriture $8^2$ ?', a: '8 × 8' },
                options: '8 × 8 ¤ 8 × 2 ¤ 8 + 8 ¤ 8 + 2',
                explanation: 'Le carré d\'un nombre est le produit de ce nombre par lui-même : $8^2 = 8 \\times 8$.'
            },
            {
                quiz: { q: 'Calcule $9^2$.', a: '81' },
                options: '81 ¤ 18 ¤ 11 ¤ 63',
                explanation: '$9^2 = 9 \\times 9 = 81$.'
            },
            {
                quiz: { q: 'Calcule $12^2$.', a: '144' },
                options: '144 ¤ 24 ¤ 14 ¤ 122',
                explanation: '$12^2 = 12 \\times 12 = 144$.'
            },
            {
                quiz: { q: 'Quelle est l\'aire d\'un carré de côté $8$ cm ?', a: '64 cm²' },
                options: '64 cm² ¤ 16 cm² ¤ 32 cm² ¤ 10 cm²',
                explanation: 'L\'aire d\'un carré de côté $c$ est $c^2$ : $8^2 = 64$ cm².'
            },
            {
                quiz: { q: 'Que vaut $5^2$ ?', a: '25' },
                options: '25 ¤ 10 ¤ 7 ¤ 52',
                explanation: '$5^2 = 5 \\times 5 = 25$. Attention à l\'erreur classique : $5^2 \\neq 5 \\times 2$ !'
            },
            {
                quiz: { q: 'Dans l\'écriture $6^2$, comment appelle-t-on le nombre $6$ ?', a: 'la base' },
                options: 'la base ¤ l\'exposant ¤ le carré ¤ le produit',
                explanation: 'Dans $a^2$, $a$ est appelé la <strong>base</strong> : c\'est le nombre que l\'on multiplie par lui-même.'
            },
            {
                quiz: { q: 'Dans l\'écriture $6^2$, comment appelle-t-on le nombre $2$ ?', a: 'l\'exposant' },
                options: 'l\'exposant ¤ la base ¤ le facteur ¤ le carré',
                explanation: 'Dans $a^2$, le petit $2$ placé en haut à droite est appelé l\'<strong>exposant</strong> : il indique le nombre de fois où la base est répétée dans la multiplication.'
            },
            {
                quiz: { q: 'Complète : $10^2 = ...$', a: '100' },
                options: '100 ¤ 20 ¤ 12 ¤ 1000',
                explanation: '$10^2 = 10 \\times 10 = 100$.'
            },
            {
                quiz: { q: 'Un jardin carré a un côté de $7$ m. Quelle est son aire ?', a: '49 m²' },
                options: '49 m² ¤ 14 m² ¤ 28 m² ¤ 9 m²',
                explanation: 'L\'aire d\'un carré de côté $c$ est $c^2$ : $7^2 = 49$ m².'
            },
            {
                quiz: { q: 'Que vaut $11^2$ ?', a: '121' },
                options: '121 ¤ 22 ¤ 13 ¤ 111',
                explanation: '$11^2 = 11 \\times 11 = 121$. C\'est un carré à connaître par cœur (carrés des entiers de $0$ à $12$).'
            }
        ],

        // ------------------------------------------------------------
        // 54121 : Le cube d'un nombre (notation, volume d'un cube,
        // 10³ = 1 000, piège classique a³ ≠ a×3). 10 questions.
        // ------------------------------------------------------------
        "54121": [
            {
                quiz: { q: 'Que signifie l\'écriture $3^3$ ?', a: '3 × 3 × 3' },
                options: '3 × 3 × 3 ¤ 3 × 3 ¤ 3 × 3 + 3 ¤ 3 + 3 + 3',
                explanation: 'Le cube d\'un nombre est le produit de trois facteurs égaux à ce nombre : $3^3 = 3 \\times 3 \\times 3$.'
            },
            {
                quiz: { q: 'Calcule $4^3$.', a: '64' },
                options: '64 ¤ 12 ¤ 7 ¤ 81',
                explanation: '$4^3 = 4 \\times 4 \\times 4 = 64$.'
            },
            {
                quiz: { q: 'Calcule $5^3$.', a: '125' },
                options: '125 ¤ 15 ¤ 8 ¤ 100',
                explanation: '$5^3 = 5 \\times 5 \\times 5 = 125$.'
            },
            {
                quiz: { q: 'Quel est le volume d\'un cube d\'arête $3$ cm ?', a: '27 cm³' },
                options: '27 cm³ ¤ 9 cm³ ¤ 6 cm³ ¤ 12 cm³',
                explanation: 'Le volume d\'un cube d\'arête $c$ est $c^3$ : $3^3 = 27$ cm³.'
            },
            {
                quiz: { q: 'Que vaut $10^3$ ?', a: '1 000' },
                options: '1 000 ¤ 100 ¤ 30 ¤ 13',
                explanation: '$10^3 = 10 \\times 10 \\times 10 = 1\\,000$. Ce résultat est très utile pour les conversions d\'unités de volume.'
            },
            {
                quiz: { q: 'Un dé à jouer a une arête de $2$ cm. Quel est son volume ?', a: '8 cm³' },
                options: '8 cm³ ¤ 6 cm³ ¤ 4 cm³ ¤ 5 cm³',
                explanation: 'Le volume d\'un cube d\'arête $c$ est $c^3$ : $2^3 = 8$ cm³.'
            },
            {
                quiz: { q: 'Que vaut $2^3$ ?', a: '8' },
                options: '8 ¤ 6 ¤ 9 ¤ 5',
                explanation: '$2^3 = 2 \\times 2 \\times 2 = 8$. Attention à l\'erreur classique : $2^3 \\neq 2 \\times 3$ !'
            },
            {
                quiz: { q: 'Dans l\'écriture $a^3$, comment appelle-t-on le $3$ ?', a: 'l\'exposant' },
                options: 'l\'exposant ¤ la base ¤ le cube ¤ le volume',
                explanation: 'Comme pour le carré, le petit nombre placé en haut à droite est l\'<strong>exposant</strong> : il indique ici que la base est répétée $3$ fois dans la multiplication.'
            },
            {
                quiz: { q: 'À combien de cm³ correspond $1$ dm³ ?', a: '1 000 cm³' },
                options: '1 000 cm³ ¤ 100 cm³ ¤ 10 cm³ ¤ 10 000 cm³',
                explanation: 'Comme $1$ dm $= 10$ cm, un cube de $1$ dm d\'arête a un volume de $10^3 = 1\\,000$ cm³.'
            },
            {
                quiz: { q: 'Calcule $6^3$.', a: '216' },
                options: '216 ¤ 18 ¤ 9 ¤ 36',
                explanation: '$6^3 = 6 \\times 6 \\times 6 = 216$.'
            }
        ],

        // ============================================================
        // 5EME - CHAPITRE 4 (Puissances) - TITRE H2 2 (Calculer en utilisant les puissances) - TITRE H3 1 (Écrire un nombre sous la forme d'une puissance) - n° questionnaire 1
        // ------------------------------------------------------------
        // 54211 : Reconnaître qu'un nombre est le produit de deux ou
        // trois facteurs égaux et l'écrire sous forme de puissance. 10 questions.
        // ------------------------------------------------------------
        "54211": [
            {
                quiz: { q: 'Écris $49$ sous la forme d\'une puissance.', a: '7²' },
                options: '7² ¤ 7³ ¤ 14² ¤ 49²',
                explanation: '$49 = 7 \\times 7$, donc $49 = 7^2$.'
            },
            {
                quiz: { q: 'Écris $125$ sous la forme d\'une puissance.', a: '5³' },
                options: '5³ ¤ 5² ¤ 25³ ¤ 3⁵',
                explanation: '$125 = 5 \\times 5 \\times 5$, donc $125 = 5^3$.'
            },
            {
                quiz: { q: 'Écris $100$ sous la forme d\'une puissance.', a: '10²' },
                options: '10² ¤ 10³ ¤ 5² ¤ 100²',
                explanation: '$100 = 10 \\times 10$, donc $100 = 10^2$.'
            },
            {
                quiz: { q: 'Écris $1\\,000$ sous la forme d\'une puissance.', a: '10³' },
                options: '10³ ¤ 10² ¤ 100² ¤ 3 × 10',
                explanation: '$1\\,000 = 10 \\times 10 \\times 10$, donc $1\\,000 = 10^3$.'
            },
            {
                quiz: { q: '$36 = 6 \\times 6$. Comment écrire $36$ sous forme de puissance ?', a: '6²' },
                options: '6² ¤ 6³ ¤ 3² ¤ 12²',
                explanation: '$36$ est le produit de deux facteurs égaux à $6$, donc $36 = 6^2$.'
            },
            {
                quiz: { q: '$8 = 2 \\times 2 \\times 2$. Comment écrire $8$ sous forme de puissance ?', a: '2³' },
                options: '2³ ¤ 2² ¤ 4² ¤ 8¹',
                explanation: '$8$ est le produit de trois facteurs égaux à $2$, donc $8 = 2^3$.'
            },
            {
                quiz: { q: 'Écris $16$ sous la forme d\'une puissance de $4$.', a: '4²' },
                options: '4² ¤ 4³ ¤ 8² ¤ 2 × 4',
                explanation: '$16 = 4 \\times 4$, donc $16 = 4^2$.'
            },
            {
                quiz: { q: 'Écris $27$ sous la forme d\'une puissance.', a: '3³' },
                options: '3³ ¤ 3² ¤ 9³ ¤ 27¹',
                explanation: '$27 = 3 \\times 3 \\times 3$, donc $27 = 3^3$.'
            },
            {
                quiz: { q: '$144 = 12 \\times 12$. Comment écrire $144$ sous forme de puissance ?', a: '12²' },
                options: '12² ¤ 12³ ¤ 6² ¤ 24²',
                explanation: '$144$ est le produit de deux facteurs égaux à $12$, donc $144 = 12^2$.'
            },
            {
                quiz: { q: 'Écris $9$ sous la forme d\'une puissance.', a: '3²' },
                options: '3² ¤ 3³ ¤ 9¹ ¤ 9²',
                explanation: '$9 = 3 \\times 3$, donc $9 = 3^2$.'
            }
        ],

        // ------------------------------------------------------------
        // 54221 : Calculer une expression numérique contenant des
        // puissances en respectant les priorités opératoires. 10 questions.
        // ------------------------------------------------------------
        "54221": [
            {
                quiz: { q: 'Quelle est la priorité des puissances par rapport aux multiplications et divisions ?', a: 'Les puissances se calculent avant' },
                options: 'Les puissances se calculent avant ¤ Les puissances se calculent après ¤ Cela dépend de l\'ordre d\'écriture ¤ On calcule toujours de gauche à droite',
                explanation: 'Comme la multiplication est un raccourci de l\'addition répétée, la puissance est un raccourci de la multiplication répétée : on calcule donc les <strong>puissances avant</strong> les multiplications et divisions.'
            },
            {
                quiz: { q: 'Calcule $A = 3 + 3^2 \\times 5$.', a: '48' },
                options: '48 ¤ 60 ¤ 33 ¤ 45',
                explanation: 'On calcule d\'abord la puissance : $3^2 = 9$ (attention, ce n\'est pas $2\\times3=6$ !). Puis la multiplication : $9 \\times 5 = 45$. Enfin l\'addition : $A = 3 + 45 = 48$. Il ne faut pas non plus additionner avant de multiplier : $(3+9)\\times5=60$ serait faux.'
            },
            {
                quiz: { q: 'Calcule $B = (2+3)^2 - 4^2$.', a: '9' },
                options: '9 ¤ 17 ¤ 21 ¤ 41',
                explanation: 'On calcule d\'abord la parenthèse : $2+3=5$. Puis les puissances : $5^2=25$ et $4^2=16$. Enfin la soustraction : $B = 25 - 16 = 9$. Attention à ne pas calculer $4^2$ comme $2\\times4=8$ (ce qui donnerait $25-8=17$), ni à oublier d\'élever $4$ au carré (ce qui donnerait $25-4=21$).'
            },
            {
                quiz: { q: 'Calcule $C = 10 - 3^2 + 1$.', a: '2' },
                options: '2 ¤ 5 ¤ 50 ¤ 1',
                explanation: 'On calcule d\'abord la puissance : $3^2 = 9$ (attention, ce n\'est pas $2\\times3=6$, ce qui donnerait $10-6+1=5$). Puis on effectue l\'addition et la soustraction de gauche à droite : $C = 10 - 9 + 1 = 2$. Il ne faut pas non plus soustraire avant d\'élever au carré : $(10-3)^2+1=50$ serait faux.'
            },
            {
                quiz: { q: 'Calcule $D = 5 \\times 2^3$.', a: '40' },
                options: '40 ¤ 1000 ¤ 30 ¤ 13',
                explanation: 'On calcule d\'abord la puissance : $2^3 = 8$ (attention, ce n\'est pas $3\\times2=6$, ce qui donnerait $5\\times6=30$). Puis la multiplication : $D = 5 \\times 8 = 40$. Attention, il ne faut pas non plus calculer $(5\\times2)^3=1\\,000$ !'
            },
            {
                quiz: { q: 'Calcule $E = 4^2 + 3^2$.', a: '25' },
                options: '25 ¤ 49 ¤ 14 ¤ 12',
                explanation: 'On calcule chaque puissance séparément : $4^2=16$ et $3^2=9$. Puis on additionne : $E = 16+9 = 25$. Attention à ne pas additionner les bases avant de mettre au carré : $(4+3)^2=49$ serait faux. Attention aussi à ne pas calculer $2\\times4+2\\times3=14$ à la place des carrés.'
            },
            {
                quiz: { q: 'Quelle opération doit-on effectuer en premier dans $6 + 3 \\times 2^2$ ?', a: 'Calculer 2²' },
                options: 'Calculer 2² ¤ Calculer 3 × 2 ¤ Calculer 6 + 3 ¤ Calculer 6 + 3 × 2',
                explanation: 'Les puissances sont prioritaires sur les multiplications et les additions : on calcule donc $2^2$ en premier.'
            },
            {
                quiz: { q: 'Calcule $6 + 3 \\times 4^2$.', a: '54' },
                options: '54 ¤ 30 ¤ 144 ¤ 18',
                explanation: 'On calcule d\'abord la puissance : $4^2=16$ (attention, ce n\'est pas $2\\times4=8$, ce qui donnerait $6+3\\times8=30$). Puis la multiplication : $3\\times16=48$. Enfin l\'addition : $6+48=54$. Il ne faut pas non plus additionner avant de multiplier : $(6+3)\\times4^2=144$ serait faux.'
            },
            {
                quiz: { q: 'Calcule $F = 2 \\times 3^2 - 4$.', a: '14' },
                options: '14 ¤ 32 ¤ 8 ¤ 20',
                explanation: 'On calcule d\'abord la puissance : $3^2=9$ (attention, ce n\'est pas $2\\times3=6$, ce qui donnerait $2\\times6-4=8$). Puis la multiplication : $2\\times9=18$. Enfin la soustraction : $F=18-4=14$. Il ne faut pas non plus multiplier avant d\'élever au carré : $(2\\times3)^2-4=32$ serait faux.'
            },
            {
                quiz: { q: 'Quel est l\'ordre correct des priorités opératoires ?', a: 'Parenthèses, puissances, multiplications/divisions, additions/soustractions' },
                options: 'Parenthèses, puissances, multiplications/divisions, additions/soustractions ¤ Additions/soustractions, puissances, multiplications/divisions, parenthèses ¤ Puissances, parenthèses, additions/soustractions, multiplications/divisions ¤ Multiplications/divisions, puissances, parenthèses, additions/soustractions',
                explanation: 'On calcule toujours dans cet ordre : d\'abord les <strong>parenthèses</strong>, puis les <strong>puissances</strong>, puis les <strong>multiplications et divisions</strong>, et enfin les <strong>additions et soustractions</strong>.'
            }
        ],

        // ------------------------------------------------------------
        // 54231 : Calculer la valeur d'une expression littérale
        // contenant une puissance simple. 10 questions.
        // ------------------------------------------------------------
        "54231": [
            {
                quiz: { q: 'Calcule $C = a^2 + 3a$ pour $a = 5$.', a: '40' },
                options: '40 ¤ 34 ¤ 55 ¤ 28',
                explanation: 'On remplace $a$ par $5$ : $C = 5^2 + 3\\times5$. On calcule la puissance en premier : $C = 25 + 15 = 40$.'
            },
            {
                quiz: { q: 'Calcule $D = a^2 - 2a$ pour $a = 6$.', a: '24' },
                options: '24 ¤ 34 ¤ 20 ¤ 16',
                explanation: 'On remplace $a$ par $6$ : $D = 6^2 - 2\\times6 = 36 - 12 = 24$.'
            },
            {
                quiz: { q: 'Calcule $E = 2a^2$ pour $a = 3$.', a: '18' },
                options: '18 ¤ 36 ¤ 12 ¤ 9',
                explanation: 'On remplace $a$ par $3$ : $E = 2\\times3^2$. On calcule d\'abord la puissance : $3^2=9$, puis $E=2\\times9=18$. Attention, ce n\'est pas $(2\\times3)^2$ !'
            },
            {
                quiz: { q: 'Calcule $F = a^3$ pour $a = 4$.', a: '64' },
                options: '64 ¤ 12 ¤ 43 ¤ 81',
                explanation: 'On remplace $a$ par $4$ : $F = 4^3 = 4\\times4\\times4 = 64$.'
            },
            {
                quiz: { q: 'Calcule $G = a^2 + 5$ pour $a = 7$.', a: '54' },
                options: '54 ¤ 144 ¤ 49 ¤ 63',
                explanation: 'On remplace $a$ par $7$ : $G = 7^2 + 5 = 49 + 5 = 54$.'
            },
            {
                quiz: { q: 'Calcule $H = 10 - a^2$ pour $a = 2$.', a: '6' },
                options: '6 ¤ 8 ¤ 16 ¤ 4',
                explanation: 'On remplace $a$ par $2$ : $H = 10 - 2^2 = 10 - 4 = 6$.'
            },
            {
                quiz: { q: 'Calcule $I = a^2 \\times 2$ pour $a = 5$.', a: '50' },
                options: '50 ¤ 100 ¤ 20 ¤ 35',
                explanation: 'On remplace $a$ par $5$ : $I = 5^2\\times2 = 25\\times2 = 50$. Attention, ce n\'est pas $(2\\times5)^2$ !'
            },
            {
                quiz: { q: 'Calcule $J = a + a^2$ pour $a = 3$.', a: '12' },
                options: '12 ¤ 36 ¤ 9 ¤ 15',
                explanation: 'On remplace $a$ par $3$ : $J = 3 + 3^2 = 3 + 9 = 12$.'
            },
            {
                quiz: { q: 'Calcule $K = 4a^2$ pour $a = 2$.', a: '16' },
                options: '16 ¤ 64 ¤ 8 ¤ 32',
                explanation: 'On remplace $a$ par $2$ : $K = 4\\times2^2$. On calcule d\'abord la puissance : $2^2=4$, puis $K=4\\times4=16$. Attention, ce n\'est pas $(4\\times2)^2=64$ !'
            },
            {
                quiz: { q: 'Calcule $L = a^3 + 1$ pour $a = 2$.', a: '9' },
                options: '9 ¤ 8 ¤ 27 ¤ 5',
                explanation: 'On remplace $a$ par $2$ : $L = 2^3 + 1 = 8 + 1 = 9$.'
            }
],

        // ============================================================
        // 5EME - CHAPITRE 2 (Nombres relatifs)
        // ============================================================
        // 52101 : Découvrir les nombres relatifs (définition, positif/négatif,
        // strictement positif/négatif, exemples concrets). 10 questions.
        // ------------------------------------------------------------
        "52101": [
            {
                quiz: { q: 'Qu\'est-ce qu\'un nombre relatif ?', a: 'Un nombre précédé d\'un signe + ou d\'un signe -' },
                options: 'Un nombre précédé d\'un signe + ou d\'un signe - ¤ Un nombre entier naturel uniquement ¤ Un nombre toujours positif ¤ Un nombre décimal uniquement',
                explanation: 'Un nombre relatif est un nombre précédé d\'un signe $+$ (on dit qu\'il est positif) ou d\'un signe $-$ (on dit qu\'il est négatif).'
            },
            {
                quiz: { q: 'Parmi ces nombres, lequel est strictement négatif ?', a: '-8' },
                options: '-8 ¤ +5 ¤ 0 ¤ 3',
                explanation: 'Un nombre strictement négatif est négatif <strong>et différent de 0</strong> : $-8$ convient. Attention, $0$ est négatif mais pas <strong>strictement</strong> négatif, puisque $0$ est aussi positif.'
            },
            {
                quiz: { q: 'Le nombre $0$ est...', a: 'à la fois positif et négatif' },
                options: 'à la fois positif et négatif ¤ seulement positif ¤ seulement négatif ¤ ni positif ni négatif',
                explanation: '$0$ est le seul nombre à la fois positif et négatif : il vérifie à la fois $0 \\geq 0$ (positif) et $0 \\leq 0$ (négatif). En revanche, $0$ n\'est ni <strong>strictement positif</strong> ($0>0$ est faux) ni <strong>strictement négatif</strong> ($0<0$ est faux).'
            },
            {
                quiz: { q: 'Qu\'est-ce qu\'un nombre strictement positif ?', a: 'Un nombre positif et différent de 0' },
                options: 'Un nombre positif et différent de 0 ¤ Un nombre positif ou nul ¤ Un nombre entier positif ¤ Un nombre supérieur à 10',
                explanation: 'Un nombre est <strong>strictement positif</strong> lorsqu\'il est positif et différent de $0$ : on note cela $a>0$. De la même façon, un nombre est <strong>strictement négatif</strong> lorsqu\'il est négatif et différent de $0$ : on note cela $a<0$.'
            },
            {
                quiz: { q: 'Une température de $-4°C$ signifie...', a: '4 degrés en dessous de zéro' },
                options: '4 degrés en dessous de zéro ¤ 4 degrés au-dessus de zéro ¤ moins 4 degrés uniquement en hiver ¤ une température impossible',
                explanation: 'Le signe $-$ indique que la température est inférieure à $0°C$ : $-4°C$ signifie donc $4$ degrés en dessous de zéro, comme le montre le thermomètre.<svg viewBox="0 0 120 200" xmlns="http://www.w3.org/2000/svg" style="max-width:90px; display:block; margin:8px auto; font-family:sans-serif;"><rect x="50" y="20" width="20" height="130" rx="10" fill="#eee" stroke="#333" stroke-width="2"/><circle cx="60" cy="165" r="20" fill="#eee" stroke="#333" stroke-width="2"/><rect x="53" y="90" width="14" height="60" fill="#2E9BD6"/><circle cx="60" cy="165" r="14" fill="#2E9BD6"/><line x1="75" y1="55" x2="85" y2="55" stroke="#333" stroke-width="1.5"/><text x="90" y="59" font-size="12" fill="#333">0°C</text><line x1="75" y1="95" x2="85" y2="95" stroke="#333" stroke-width="1.5"/><text x="90" y="99" font-size="12" fill="#C0392B">-4°C</text></svg>'
            },
            {
                quiz: { q: 'Une altitude de $-35$ m signifie...', a: '35 mètres sous le niveau de la mer' },
                options: '35 mètres sous le niveau de la mer ¤ 35 mètres au-dessus du niveau de la mer ¤ une profondeur de 35 km ¤ une altitude impossible',
                explanation: 'Une altitude négative se situe en dessous du niveau de la mer : $-35$ m signifie donc $35$ mètres sous le niveau de la mer.<svg viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg" style="max-width:200px; display:block; margin:8px auto; font-family:sans-serif;"><rect x="10" y="50" width="200" height="90" fill="#2E9BD6" fill-opacity="0.15"/><line x1="10" y1="50" x2="210" y2="50" stroke="#2E9BD6" stroke-width="2"/><text x="12" y="42" font-size="12" fill="#2E9BD6">niveau de la mer (0 m)</text><circle cx="110" cy="120" r="5" fill="#C0392B"/><line x1="110" y1="50" x2="110" y2="120" stroke="#C0392B" stroke-width="1.5" stroke-dasharray="4 3"/><text x="118" y="124" font-size="13" fill="#C0392B" font-weight="bold">-35 m</text></svg>'
            },
            {
                quiz: { q: 'L\'an $-52$ signifie...', a: '52 ans avant Jésus-Christ' },
                options: '52 ans avant Jésus-Christ ¤ l\'an 52 après Jésus-Christ ¤ il y a 52 siècles ¤ dans 52 ans',
                explanation: 'En histoire, un temps négatif comme $-52$ correspond à une date avant J.-C. : ici, $52$ ans avant Jésus-Christ.'
            },
            {
                quiz: { q: 'Un solde bancaire de $-120$ € signifie...', a: 'un compte débiteur de 120 €' },
                options: 'un compte débiteur de 120 € ¤ un compte créditeur de 120 € ¤ une erreur bancaire ¤ un compte à 0 €',
                explanation: 'Un solde négatif indique que le compte est débiteur : $-120$ € signifie que l\'on doit $120$ € à la banque.'
            },
            {
                quiz: { q: 'Peut-on écrire un nombre positif sans le signe $+$ ?', a: 'Oui, on peut ne pas écrire le +' },
                options: 'Oui, on peut ne pas écrire le + ¤ Non, le + est obligatoire ¤ Seulement pour les nombres entiers ¤ Seulement pour le nombre 0',
                explanation: 'Pour un nombre positif, le signe $+$ n\'est pas obligatoire : $5$ et $+5$ désignent le même nombre.'
            },
            {
                quiz: { q: 'Peut-on écrire un nombre négatif sans le signe $-$ ?', a: 'Non, il faut toujours écrire le signe -' },
                options: 'Non, il faut toujours écrire le signe - ¤ Oui, comme pour les nombres positifs ¤ Seulement pour les nombres décimaux ¤ Seulement à l\'oral',
                explanation: 'Contrairement au signe $+$, le signe $-$ d\'un nombre négatif doit toujours être écrit.'
            },
            {
                quiz: { q: 'Que signifie le symbole $a \\geq 0$ ?', a: '$a$ est positif' },
                options: '$a$ est positif ¤ $a$ est strictement positif ¤ $a$ est négatif ¤ $a$ est strictement négatif',
                explanation: 'Le symbole $\\geq$ signifie « supérieur ou égal à » : $a \\geq 0$ signifie que $a$ est positif, l\'égalité à $0$ étant autorisée. Par exemple $0$, $2$ ou $3,5$ vérifient $a\\geq0$.'
            },
            {
                quiz: { q: 'Que signifie le symbole $a > 0$ ?', a: '$a$ est strictement positif' },
                options: '$a$ est strictement positif ¤ $a$ est positif, 0 inclus ¤ $a$ est négatif ¤ $a$ est nul',
                explanation: 'Le symbole $>$ signifie « strictement supérieur à » : $a>0$ signifie que $a$ est positif <strong>et différent de $0$</strong>, on dit qu\'il est <strong>strictement positif</strong>. Par exemple $2$ ou $0,3$ vérifient $a>0$, mais pas $0$.'
            },
            {
                quiz: { q: 'Que signifie le symbole $a \\leq 0$ ?', a: '$a$ est négatif' },
                options: '$a$ est négatif ¤ $a$ est strictement négatif ¤ $a$ est positif ¤ $a$ est strictement positif',
                explanation: 'Le symbole $\\leq$ signifie « inférieur ou égal à » : $a\\leq0$ signifie que $a$ est négatif, l\'égalité à $0$ étant autorisée. Par exemple $0$, $-5$ ou $-2,3$ vérifient $a\\leq0$.'
            },
            {
                quiz: { q: 'Que signifie le symbole $a < 0$ ?', a: '$a$ est strictement négatif' },
                options: '$a$ est strictement négatif ¤ $a$ est négatif, 0 inclus ¤ $a$ est positif ¤ $a$ est nul',
                explanation: 'Le symbole $<$ signifie « strictement inférieur à » : $a<0$ signifie que $a$ est négatif <strong>et différent de $0$</strong>, on dit qu\'il est <strong>strictement négatif</strong>. Par exemple $-5$ ou $-1,8$ vérifient $a<0$, mais pas $0$.'
            },
            {
                quiz: { q: 'Le nombre $0$ vérifie-t-il $a \\geq 0$ ?', a: 'Oui' },
                options: 'Oui ¤ Non ¤ Cela dépend ¤ Seulement si a est entier',
                explanation: 'Comme $\\geq$ signifie « supérieur ou égal », $0$ vérifie bien $0\\geq0$ (l\'égalité est autorisée). En revanche $0$ ne vérifie pas $a>0$ : ce symbole est <strong>strict</strong> et exclut $0$, donc $0$ n\'est pas strictement positif.'
            },
            {
                quiz: { q: 'Le nombre $0$ vérifie-t-il $a > 0$ ?', a: 'Non' },
                options: 'Non ¤ Oui ¤ Cela dépend ¤ Seulement si a est décimal',
                explanation: '$0$ ne vérifie jamais une inégalité stricte comme $a>0$ ou $a<0$, car ces symboles excluent l\'égalité à $0$. $0$ n\'est donc ni <strong>strictement positif</strong> ni <strong>strictement négatif</strong>.'
            },
            {
                quiz: { q: 'Parmi ces nombres, lequel vérifie $a > 0$ ?', a: '2,5' },
                options: '2,5 ¤ 0 ¤ -3,1 ¤ -0,01',
                explanation: 'Un nombre strictement positif est positif <strong>et différent de $0$</strong> : $2,5$ convient. Ce n\'est pas le cas de $0$ (ni positif ni négatif de façon stricte), ni de $-3,1$ et $-0,01$ qui sont négatifs.'
            },
            {
                quiz: { q: 'Parmi ces nombres, lequel vérifie $a \\leq 0$ ?', a: '-4,7' },
                options: '-4,7 ¤ 3 ¤ 0,5 ¤ 100',
                explanation: '$-4,7$ est négatif, il vérifie donc $a\\leq0$. Les autres nombres ($3$ ; $0,5$ ; $100$) sont strictement positifs et ne vérifient pas cette inégalité.'
            },
            {
                quiz: { q: 'Le nombre $0$ vérifie-t-il à la fois $a \\geq 0$ et $a \\leq 0$ ?', a: 'Oui' },
                options: 'Oui ¤ Non, seulement $a\\geq0$ ¤ Non, seulement $a\\leq0$ ¤ Non, aucun des deux',
                explanation: '$0$ vérifie les deux inégalités larges en même temps : $0\\geq0$ et $0\\leq0$. Cela confirme que $0$ est à la fois positif et négatif, mais ni <strong>strictement positif</strong> ni <strong>strictement négatif</strong>.'
            },
            {
                quiz: { q: 'Parmi ces nombres, lequel vérifie $a < 0$ ?', a: '-7,25' },
                options: '-7,25 ¤ 0 ¤ 6,4 ¤ 8,1',
                explanation: '$-7,25$ est négatif et différent de $0$ : il vérifie $a<0$, il est donc <strong>strictement négatif</strong>. $0$ n\'est pas strictement négatif, et $6,4$ ainsi que $8,1$ sont strictement positifs.'
            }
        ],

        // ------------------------------------------------------------
        // 52102 : Résoudre un problème avec des nombres relatifs
        // (traduire une situation par une addition/soustraction). 10 questions.
        // ------------------------------------------------------------
        "52102": [
            {
                quiz: { q: 'À 6h du matin, il fait $-3°C$ à Grenoble. À 14h, la température a augmenté de $8°C$. Quelle température fait-il à 14h ?', a: '5°C' },
                options: '5°C ¤ -11°C ¤ 11°C ¤ -5°C',
                explanation: 'On part de $-3$ et on ajoute $8$ (une augmentation) : $-3+8=5$. Il fait donc $5°C$ à 14h.'
            },
            {
                quiz: { q: 'À 8h, il fait $2°C$. La température baisse de $6°C$ dans la journée. Quelle température fait-il ensuite ?', a: '-4°C' },
                options: '-4°C ¤ 4°C ¤ -8°C ¤ 8°C',
                explanation: 'Une baisse de $6°C$ correspond à soustraire $6$ : $2-6=-4$. Il fait donc $-4°C$.'
            },
            {
                quiz: { q: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" style="max-width:180px; display:block; margin:8px auto; font-family:sans-serif;"><rect x="10" y="20" width="200" height="160" fill="#2E9BD6" fill-opacity="0.15"/><line x1="10" y1="20" x2="210" y2="20" stroke="#2E9BD6" stroke-width="2"/><text x="12" y="14" font-size="12" fill="#2E9BD6">surface (0 m)</text><defs><marker id="arrowhead2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><polygon points="0,0 8,4 0,8" fill="#2F7D3C"/></marker></defs><circle cx="110" cy="160" r="5" fill="#333"/><text x="118" y="164" font-size="12" fill="#333">-12 m</text><line x1="110" y1="160" x2="110" y2="112" stroke="#2F7D3C" stroke-width="2.5" marker-end="url(#arrowhead2)"/><circle cx="110" cy="110" r="5" fill="#2F7D3C"/><text x="118" y="106" font-size="12" fill="#2F7D3C" font-weight="bold">-7 m ?</text></svg><p style="margin-top:8px;">Un plongeur est à $-12$ m sous la surface. Il remonte de $5$ m. À quelle profondeur se trouve-t-il maintenant ?</p>', a: '-7 m' },
                options: '-7 m ¤ -17 m ¤ 7 m ¤ -5 m',
                explanation: 'Remonter de $5$ m revient à ajouter $5$ : $-12+5=-7$. Le plongeur est donc à $-7$ m.'
            },
            {
                quiz: { q: 'Un ascenseur est au niveau $-2$ (2ème sous-sol). Il monte de $5$ étages. À quel étage arrive-t-il ?', a: '3' },
                options: '3 ¤ 7 ¤ -3 ¤ -7',
                explanation: 'On ajoute $5$ à $-2$ : $-2+5=3$. L\'ascenseur arrive donc à l\'étage $3$.'
            },
            {
                quiz: { q: 'Un compte bancaire affiche $-50€$. On y dépose $80€$. Quel est le nouveau solde ?', a: '30€' },
                options: '30€ ¤ -130€ ¤ 130€ ¤ -30€',
                explanation: 'Un dépôt s\'ajoute au solde : $-50+80=30$. Le nouveau solde est donc $30€$.'
            },
            {
                quiz: { q: 'Il fait $-7°C$ le matin. L\'après-midi, la température a augmenté de $10°C$. Quelle température fait-il l\'après-midi ?', a: '3°C' },
                options: '3°C ¤ -17°C ¤ 17°C ¤ -3°C',
                explanation: 'On ajoute $10$ à $-7$ : $-7+10=3$. Il fait donc $3°C$ l\'après-midi.'
            },
            {
                quiz: { q: 'Une grenouille est à $-5$ m sous l\'eau. Elle remonte de $5$ m. Où se trouve-t-elle maintenant ?', a: '0 m, à la surface de l\'eau' },
                options: '0 m, à la surface de l\'eau ¤ -10 m ¤ 5 m au-dessus de l\'eau ¤ 10 m',
                explanation: '$-5+5=0$ : la grenouille arrive exactement à la surface de l\'eau.'
            },
            {
                quiz: { q: 'Un randonneur part d\'une altitude de $-20$ m et monte de $50$ m. Quelle est sa nouvelle altitude ?', a: '30 m' },
                options: '30 m ¤ 70 m ¤ -70 m ¤ -30 m',
                explanation: 'On ajoute $50$ à $-20$ : $-20+50=30$. Sa nouvelle altitude est donc $30$ m.'
            },
            {
                quiz: { q: 'Un compte affiche $120€$. On y retire $200€$. Quel est le nouveau solde ?', a: '-80€' },
                options: '-80€ ¤ 80€ ¤ -320€ ¤ 320€',
                explanation: 'Retirer $200€$ revient à soustraire $200$ : $120-200=-80$. Le nouveau solde est donc $-80€$ (compte débiteur).'
            },
            {
                quiz: { q: 'Pour résoudre un problème avec des nombres relatifs, la première étape consiste à...', a: 'traduire la situation par une addition ou une soustraction de nombres relatifs' },
                options: 'traduire la situation par une addition ou une soustraction de nombres relatifs ¤ toujours multiplier les nombres entre eux ¤ ignorer les signes puis les rajouter à la fin ¤ additionner uniquement les valeurs absolues',
                explanation: 'On commence toujours par traduire la situation (augmentation, baisse, dépôt, retrait...) en une opération avec des nombres relatifs, avant de la calculer.'
            }
],

        // ------------------------------------------------------------
        // 52201 : Repérer un nombre relatif sur une droite graduée
        // (origine, abscisse, lecture de points). 10 questions.
        // ------------------------------------------------------------
        "52201": [
            {
                quiz: { q: 'Qu\'appelle-t-on l\'origine d\'une droite graduée ?', a: 'Le point qui représente 0' },
                options: 'Le point qui représente 0 ¤ Le premier point à gauche de la droite ¤ Le point le plus éloigné de 0 ¤ L\'unité de longueur choisie',
                explanation: 'L\'origine d\'une droite graduée est le point qui représente le nombre $0$.'
            },
            {
                quiz: { q: 'Sur une droite graduée, les nombres positifs se placent...', a: 'à droite de 0' },
                options: 'à droite de 0 ¤ à gauche de 0 ¤ au-dessus de 0 ¤ n\'importe où',
                explanation: 'Par convention, les nombres positifs se placent à droite de l\'origine, les négatifs à gauche.'
            },
            {
                quiz: { q: 'Sur une droite graduée, les nombres négatifs se placent...', a: 'à gauche de 0' },
                options: 'à gauche de 0 ¤ à droite de 0 ¤ au-dessous de 0 ¤ n\'importe où',
                explanation: 'Par convention, les nombres négatifs se placent à gauche de l\'origine.'
            },
            {
                quiz: { q: '<svg viewBox="0 0 400 90" xmlns="http://www.w3.org/2000/svg" style="max-width:340px; display:block; margin:8px auto; font-family:sans-serif;"><line x1="20" y1="45" x2="380" y2="45" stroke="#333" stroke-width="2"/><polygon points="380,45 370,40 370,50" fill="#333"/><polygon points="20,45 30,40 30,50" fill="#333"/><line x1="40" y1="40" x2="40" y2="50" stroke="#333" stroke-width="1.5"/><text x="35" y="65" font-size="12">-5</text><line x1="72" y1="40" x2="72" y2="50" stroke="#333" stroke-width="1.5"/><text x="67" y="65" font-size="12">-4</text><line x1="104" y1="40" x2="104" y2="50" stroke="#333" stroke-width="1.5"/><text x="99" y="65" font-size="12">-3</text><line x1="136" y1="40" x2="136" y2="50" stroke="#333" stroke-width="1.5"/><text x="131" y="65" font-size="12">-2</text><line x1="168" y1="40" x2="168" y2="50" stroke="#333" stroke-width="1.5"/><text x="163" y="65" font-size="12">-1</text><line x1="200" y1="38" x2="200" y2="52" stroke="#C0392B" stroke-width="2"/><text x="196" y="68" font-size="13" fill="#C0392B" font-weight="bold">0</text><line x1="232" y1="40" x2="232" y2="50" stroke="#333" stroke-width="1.5"/><text x="229" y="65" font-size="12">1</text><line x1="264" y1="40" x2="264" y2="50" stroke="#333" stroke-width="1.5"/><text x="261" y="65" font-size="12">2</text><line x1="296" y1="40" x2="296" y2="50" stroke="#333" stroke-width="1.5"/><text x="293" y="65" font-size="12">3</text><line x1="328" y1="40" x2="328" y2="50" stroke="#333" stroke-width="1.5"/><text x="325" y="65" font-size="12">4</text><line x1="360" y1="40" x2="360" y2="50" stroke="#333" stroke-width="1.5"/><text x="357" y="65" font-size="12">5</text><circle cx="296" cy="28" r="4.5" fill="#2E5C8A"/><text x="290" y="18" font-size="13" fill="#2E5C8A" font-weight="bold">A</text></svg><p style="margin-top:8px;">Quelle est l\'abscisse du point A ?</p>', a: '3' },
                options: '3 ¤ -3 ¤ 2 ¤ 4',
                explanation: 'Le point A est situé 3 unités à droite de l\'origine : son abscisse est donc $3$.'
            },
            {
                quiz: { q: '<svg viewBox="0 0 400 90" xmlns="http://www.w3.org/2000/svg" style="max-width:340px; display:block; margin:8px auto; font-family:sans-serif;"><line x1="20" y1="45" x2="380" y2="45" stroke="#333" stroke-width="2"/><polygon points="380,45 370,40 370,50" fill="#333"/><polygon points="20,45 30,40 30,50" fill="#333"/><line x1="40" y1="40" x2="40" y2="50" stroke="#333" stroke-width="1.5"/><text x="35" y="65" font-size="12">-5</text><line x1="72" y1="40" x2="72" y2="50" stroke="#333" stroke-width="1.5"/><text x="67" y="65" font-size="12">-4</text><line x1="104" y1="40" x2="104" y2="50" stroke="#333" stroke-width="1.5"/><text x="99" y="65" font-size="12">-3</text><line x1="136" y1="40" x2="136" y2="50" stroke="#333" stroke-width="1.5"/><text x="131" y="65" font-size="12">-2</text><line x1="168" y1="40" x2="168" y2="50" stroke="#333" stroke-width="1.5"/><text x="163" y="65" font-size="12">-1</text><line x1="200" y1="38" x2="200" y2="52" stroke="#C0392B" stroke-width="2"/><text x="196" y="68" font-size="13" fill="#C0392B" font-weight="bold">0</text><line x1="232" y1="40" x2="232" y2="50" stroke="#333" stroke-width="1.5"/><text x="229" y="65" font-size="12">1</text><line x1="264" y1="40" x2="264" y2="50" stroke="#333" stroke-width="1.5"/><text x="261" y="65" font-size="12">2</text><line x1="296" y1="40" x2="296" y2="50" stroke="#333" stroke-width="1.5"/><text x="293" y="65" font-size="12">3</text><line x1="328" y1="40" x2="328" y2="50" stroke="#333" stroke-width="1.5"/><text x="325" y="65" font-size="12">4</text><line x1="360" y1="40" x2="360" y2="50" stroke="#333" stroke-width="1.5"/><text x="357" y="65" font-size="12">5</text><circle cx="72" cy="28" r="4.5" fill="#B5651D"/><text x="60" y="18" font-size="13" fill="#B5651D" font-weight="bold">B</text></svg><p style="margin-top:8px;">Quelle est l\'abscisse du point B ?</p>', a: '-4' },
                options: '-4 ¤ 4 ¤ -3 ¤ -5',
                explanation: 'Le point B est situé 4 unités à gauche de l\'origine : son abscisse est donc $-4$.'
            },
            {
                quiz: { q: '<svg viewBox="0 0 400 90" xmlns="http://www.w3.org/2000/svg" style="max-width:340px; display:block; margin:8px auto; font-family:sans-serif;"><line x1="20" y1="45" x2="380" y2="45" stroke="#333" stroke-width="2"/><polygon points="380,45 370,40 370,50" fill="#333"/><polygon points="20,45 30,40 30,50" fill="#333"/><line x1="40" y1="40" x2="40" y2="50" stroke="#333" stroke-width="1.5"/><text x="35" y="65" font-size="12">-5</text><line x1="72" y1="40" x2="72" y2="50" stroke="#333" stroke-width="1.5"/><text x="67" y="65" font-size="12">-4</text><line x1="104" y1="40" x2="104" y2="50" stroke="#333" stroke-width="1.5"/><text x="99" y="65" font-size="12">-3</text><line x1="136" y1="40" x2="136" y2="50" stroke="#333" stroke-width="1.5"/><text x="131" y="65" font-size="12">-2</text><line x1="168" y1="40" x2="168" y2="50" stroke="#333" stroke-width="1.5"/><text x="163" y="65" font-size="12">-1</text><line x1="200" y1="38" x2="200" y2="52" stroke="#C0392B" stroke-width="2"/><text x="196" y="68" font-size="13" fill="#C0392B" font-weight="bold">0</text><line x1="232" y1="40" x2="232" y2="50" stroke="#333" stroke-width="1.5"/><text x="229" y="65" font-size="12">1</text><line x1="264" y1="40" x2="264" y2="50" stroke="#333" stroke-width="1.5"/><text x="261" y="65" font-size="12">2</text><line x1="296" y1="40" x2="296" y2="50" stroke="#333" stroke-width="1.5"/><text x="293" y="65" font-size="12">3</text><line x1="328" y1="40" x2="328" y2="50" stroke="#333" stroke-width="1.5"/><text x="325" y="65" font-size="12">4</text><line x1="360" y1="40" x2="360" y2="50" stroke="#333" stroke-width="1.5"/><text x="357" y="65" font-size="12">5</text><circle cx="120" cy="28" r="4.5" fill="#2F7D3C"/><text x="108" y="18" font-size="13" fill="#2F7D3C" font-weight="bold">C</text></svg><p style="margin-top:8px;">Quelle est l\'abscisse du point C ?</p>', a: '-2,5' },
                options: '-2,5 ¤ 2,5 ¤ -3 ¤ -2',
                explanation: 'Le point C est situé entre $-3$ et $-2$, à mi-chemin : son abscisse est donc $-2,5$.'
            },
            {
                quiz: { q: '<svg viewBox="0 0 400 90" xmlns="http://www.w3.org/2000/svg" style="max-width:340px; display:block; margin:8px auto; font-family:sans-serif;"><line x1="20" y1="45" x2="380" y2="45" stroke="#333" stroke-width="2"/><polygon points="380,45 370,40 370,50" fill="#333"/><polygon points="20,45 30,40 30,50" fill="#333"/><line x1="40" y1="40" x2="40" y2="50" stroke="#333" stroke-width="1.5"/><text x="35" y="65" font-size="12">-5</text><line x1="72" y1="40" x2="72" y2="50" stroke="#333" stroke-width="1.5"/><text x="67" y="65" font-size="12">-4</text><line x1="104" y1="40" x2="104" y2="50" stroke="#333" stroke-width="1.5"/><text x="99" y="65" font-size="12">-3</text><line x1="136" y1="40" x2="136" y2="50" stroke="#333" stroke-width="1.5"/><text x="131" y="65" font-size="12">-2</text><line x1="168" y1="40" x2="168" y2="50" stroke="#333" stroke-width="1.5"/><text x="163" y="65" font-size="12">-1</text><line x1="200" y1="38" x2="200" y2="52" stroke="#C0392B" stroke-width="2"/><text x="196" y="68" font-size="13" fill="#C0392B" font-weight="bold">0</text><line x1="232" y1="40" x2="232" y2="50" stroke="#333" stroke-width="1.5"/><text x="229" y="65" font-size="12">1</text><line x1="264" y1="40" x2="264" y2="50" stroke="#333" stroke-width="1.5"/><text x="261" y="65" font-size="12">2</text><line x1="296" y1="40" x2="296" y2="50" stroke="#333" stroke-width="1.5"/><text x="293" y="65" font-size="12">3</text><line x1="328" y1="40" x2="328" y2="50" stroke="#333" stroke-width="1.5"/><text x="325" y="65" font-size="12">4</text><line x1="360" y1="40" x2="360" y2="50" stroke="#333" stroke-width="1.5"/><text x="357" y="65" font-size="12">5</text><circle cx="104" cy="28" r="4.5" fill="#333"/><text x="98" y="18" font-size="13" fill="#333" font-weight="bold">a</text><circle cx="232" cy="28" r="4.5" fill="#333"/><text x="226" y="18" font-size="13" fill="#333" font-weight="bold">b</text><circle cx="328" cy="28" r="4.5" fill="#333"/><text x="322" y="18" font-size="13" fill="#333" font-weight="bold">c</text></svg><p style="margin-top:8px;">Sur la figure, quel point a pour abscisse $-3$ ?</p>', a: 'Le point a' },
                options: 'Le point a ¤ Le point b ¤ Le point c ¤ Aucun de ces points',
                explanation: 'Le point a est situé 3 unités à gauche de l\'origine : son abscisse est $-3$.'
            },
            {
                quiz: { q: '<svg viewBox="0 0 400 90" xmlns="http://www.w3.org/2000/svg" style="max-width:340px; display:block; margin:8px auto; font-family:sans-serif;"><line x1="20" y1="45" x2="380" y2="45" stroke="#333" stroke-width="2"/><polygon points="380,45 370,40 370,50" fill="#333"/><polygon points="20,45 30,40 30,50" fill="#333"/><line x1="40" y1="40" x2="40" y2="50" stroke="#333" stroke-width="1.5"/><text x="35" y="65" font-size="12">-5</text><line x1="72" y1="40" x2="72" y2="50" stroke="#333" stroke-width="1.5"/><text x="67" y="65" font-size="12">-4</text><line x1="104" y1="40" x2="104" y2="50" stroke="#333" stroke-width="1.5"/><text x="99" y="65" font-size="12">-3</text><line x1="136" y1="40" x2="136" y2="50" stroke="#333" stroke-width="1.5"/><text x="131" y="65" font-size="12">-2</text><line x1="168" y1="40" x2="168" y2="50" stroke="#333" stroke-width="1.5"/><text x="163" y="65" font-size="12">-1</text><line x1="200" y1="38" x2="200" y2="52" stroke="#C0392B" stroke-width="2"/><text x="196" y="68" font-size="13" fill="#C0392B" font-weight="bold">0</text><line x1="232" y1="40" x2="232" y2="50" stroke="#333" stroke-width="1.5"/><text x="229" y="65" font-size="12">1</text><line x1="264" y1="40" x2="264" y2="50" stroke="#333" stroke-width="1.5"/><text x="261" y="65" font-size="12">2</text><line x1="296" y1="40" x2="296" y2="50" stroke="#333" stroke-width="1.5"/><text x="293" y="65" font-size="12">3</text><line x1="328" y1="40" x2="328" y2="50" stroke="#333" stroke-width="1.5"/><text x="325" y="65" font-size="12">4</text><line x1="360" y1="40" x2="360" y2="50" stroke="#333" stroke-width="1.5"/><text x="357" y="65" font-size="12">5</text><circle cx="72" cy="28" r="4.5" fill="#333"/><text x="66" y="18" font-size="13" fill="#333" font-weight="bold">a</text><circle cx="168" cy="28" r="4.5" fill="#333"/><text x="162" y="18" font-size="13" fill="#333" font-weight="bold">b</text><circle cx="296" cy="28" r="4.5" fill="#333"/><text x="290" y="18" font-size="13" fill="#333" font-weight="bold">c</text></svg><p style="margin-top:8px;">Sur la figure, quel point est le plus éloigné de l\'origine vers la gauche ?</p>', a: 'Le point a' },
                options: 'Le point a ¤ Le point b ¤ Le point c ¤ Ils sont tous à la même distance',
                explanation: 'Le point a a pour abscisse $-4$, plus loin de $0$ vers la gauche que b ($-1$) et c ($3$, qui est même à droite).'
            },
            {
                quiz: { q: 'Qu\'appelle-t-on l\'abscisse d\'un point sur une droite graduée ?', a: 'Le nombre associé à ce point' },
                options: 'Le nombre associé à ce point ¤ La distance entre deux points ¤ Le nom donné au point ¤ L\'unité de longueur choisie',
                explanation: 'Le nombre associé à un point d\'une droite graduée s\'appelle l\'abscisse de ce point.'
            },
            {
                quiz: { q: '<svg viewBox="0 0 400 90" xmlns="http://www.w3.org/2000/svg" style="max-width:340px; display:block; margin:8px auto; font-family:sans-serif;"><line x1="20" y1="45" x2="380" y2="45" stroke="#333" stroke-width="2"/><polygon points="380,45 370,40 370,50" fill="#333"/><polygon points="20,45 30,40 30,50" fill="#333"/><line x1="40" y1="40" x2="40" y2="50" stroke="#333" stroke-width="1.5"/><text x="35" y="65" font-size="12">-5</text><line x1="72" y1="40" x2="72" y2="50" stroke="#333" stroke-width="1.5"/><text x="67" y="65" font-size="12">-4</text><line x1="104" y1="40" x2="104" y2="50" stroke="#333" stroke-width="1.5"/><text x="99" y="65" font-size="12">-3</text><line x1="136" y1="40" x2="136" y2="50" stroke="#333" stroke-width="1.5"/><text x="131" y="65" font-size="12">-2</text><line x1="168" y1="40" x2="168" y2="50" stroke="#333" stroke-width="1.5"/><text x="163" y="65" font-size="12">-1</text><line x1="200" y1="38" x2="200" y2="52" stroke="#C0392B" stroke-width="2"/><text x="196" y="68" font-size="13" fill="#C0392B" font-weight="bold">0</text><line x1="232" y1="40" x2="232" y2="50" stroke="#333" stroke-width="1.5"/><text x="229" y="65" font-size="12">1</text><line x1="264" y1="40" x2="264" y2="50" stroke="#333" stroke-width="1.5"/><text x="261" y="65" font-size="12">2</text><line x1="296" y1="40" x2="296" y2="50" stroke="#333" stroke-width="1.5"/><text x="293" y="65" font-size="12">3</text><line x1="328" y1="40" x2="328" y2="50" stroke="#333" stroke-width="1.5"/><text x="325" y="65" font-size="12">4</text><line x1="360" y1="40" x2="360" y2="50" stroke="#333" stroke-width="1.5"/><text x="357" y="65" font-size="12">5</text><circle cx="344" cy="28" r="4.5" fill="#7B4FA0"/><text x="336" y="18" font-size="13" fill="#7B4FA0" font-weight="bold">D</text></svg><p style="margin-top:8px;">Quelle est l\'abscisse du point D ?</p>', a: '4,5' },
                options: '4,5 ¤ 4 ¤ 5 ¤ -4,5',
                explanation: 'Le point D est situé entre $4$ et $5$, à mi-chemin : son abscisse est donc $4,5$.'
            }
        ],

        // ------------------------------------------------------------
        // 52301 : Comparer et ranger des nombres relatifs. 10 questions.
        // ------------------------------------------------------------
        "52301": [
            {
                quiz: { q: 'Un nombre positif est-il toujours plus grand qu\'un nombre négatif ?', a: 'Oui, toujours' },
                options: 'Oui, toujours ¤ Non, cela dépend des valeurs ¤ Seulement si le nombre positif est entier ¤ Non, jamais',
                explanation: 'Tout nombre positif est plus grand que tout nombre négatif, quelles que soient leurs valeurs.'
            },
            {
                quiz: { q: 'Compare $5,2$ et $8,1$.', a: '5,2 < 8,1' },
                options: '5,2 < 8,1 ¤ 5,2 > 8,1 ¤ 5,2 = 8,1 ¤ On ne peut pas comparer',
                explanation: 'Ce sont deux nombres positifs : entre deux positifs, le plus grand est celui qui a la plus grande valeur. $5,2 < 8,1$.'
            },
            {
                quiz: { q: 'Compare $-2$ et $-7$.', a: '-2 > -7' },
                options: '-2 > -7 ¤ -2 < -7 ¤ -2 = -7 ¤ On ne peut pas comparer',
                explanation: 'Entre deux nombres négatifs, le plus grand est celui qui est le plus proche de zéro : $-2$ est plus proche de $0$ que $-7$, donc $-2 > -7$.'
            },
            {
                quiz: { q: 'Compare $-9$ et $3$.', a: '-9 < 3' },
                options: '-9 < 3 ¤ -9 > 3 ¤ -9 = 3 ¤ On ne peut pas comparer',
                explanation: '$3$ est positif et $-9$ est négatif : tout positif est plus grand que tout négatif, donc $-9 < 3$.'
            },
            {
                quiz: { q: 'Entre deux nombres négatifs, le plus grand est...', a: 'celui qui est le plus proche de zéro' },
                options: 'celui qui est le plus proche de zéro ¤ celui qui est le plus éloigné de zéro ¤ celui qui a la plus grande valeur absolue ¤ cela dépend des cas',
                explanation: 'Entre deux négatifs, le plus grand (le plus à droite sur la droite graduée) est celui le plus proche de $0$.'
            },
            {
                quiz: { q: 'Range dans l\'ordre croissant les nombres $4$ ; $-6$ ; $0$ ; $-1$.', a: '-6 ; -1 ; 0 ; 4' },
                options: '-6 ; -1 ; 0 ; 4 ¤ 4 ; 0 ; -1 ; -6 ¤ -1 ; -6 ; 0 ; 4 ¤ 0 ; -1 ; -6 ; 4',
                explanation: 'Dans l\'ordre croissant (du plus petit au plus grand) : $-6 ; -1 ; 0 ; 4$.'
            },
            {
                quiz: { q: '<svg viewBox="0 0 400 90" xmlns="http://www.w3.org/2000/svg" style="max-width:340px; display:block; margin:8px auto; font-family:sans-serif;"><line x1="20" y1="45" x2="380" y2="45" stroke="#333" stroke-width="2"/><polygon points="380,45 370,40 370,50" fill="#333"/><polygon points="20,45 30,40 30,50" fill="#333"/><line x1="40" y1="40" x2="40" y2="50" stroke="#333" stroke-width="1.5"/><text x="35" y="65" font-size="12">-5</text><line x1="72" y1="40" x2="72" y2="50" stroke="#333" stroke-width="1.5"/><text x="67" y="65" font-size="12">-4</text><line x1="104" y1="40" x2="104" y2="50" stroke="#333" stroke-width="1.5"/><text x="99" y="65" font-size="12">-3</text><line x1="136" y1="40" x2="136" y2="50" stroke="#333" stroke-width="1.5"/><text x="131" y="65" font-size="12">-2</text><line x1="168" y1="40" x2="168" y2="50" stroke="#333" stroke-width="1.5"/><text x="163" y="65" font-size="12">-1</text><line x1="200" y1="38" x2="200" y2="52" stroke="#C0392B" stroke-width="2"/><text x="196" y="68" font-size="13" fill="#C0392B" font-weight="bold">0</text><line x1="232" y1="40" x2="232" y2="50" stroke="#333" stroke-width="1.5"/><text x="229" y="65" font-size="12">1</text><line x1="264" y1="40" x2="264" y2="50" stroke="#333" stroke-width="1.5"/><text x="261" y="65" font-size="12">2</text><line x1="296" y1="40" x2="296" y2="50" stroke="#333" stroke-width="1.5"/><text x="293" y="65" font-size="12">3</text><line x1="328" y1="40" x2="328" y2="50" stroke="#333" stroke-width="1.5"/><text x="325" y="65" font-size="12">4</text><line x1="360" y1="40" x2="360" y2="50" stroke="#333" stroke-width="1.5"/><text x="357" y="65" font-size="12">5</text><circle cx="168" cy="28" r="4.5" fill="#2E5C8A"/><text x="162" y="18" font-size="13" fill="#2E5C8A" font-weight="bold">A</text><circle cx="264" cy="28" r="4.5" fill="#B5651D"/><text x="258" y="18" font-size="13" fill="#B5651D" font-weight="bold">B</text></svg><p style="margin-top:8px;">Quel point a l\'abscisse la plus grande ?</p>', a: 'Le point B' },
                options: 'Le point B ¤ Le point A ¤ Les deux points ont la même abscisse ¤ On ne peut pas savoir',
                explanation: 'A a pour abscisse $-1$ et B a pour abscisse $2$. Comme $2 > -1$, le point B a l\'abscisse la plus grande (il est le plus à droite).'
            },
            {
                quiz: { q: 'Compare $-3,5$ et $-3,05$.', a: '-3,5 < -3,05' },
                options: '-3,5 < -3,05 ¤ -3,5 > -3,05 ¤ -3,5 = -3,05 ¤ On ne peut pas comparer',
                explanation: 'Attention au piège : $-3,05$ est plus proche de $0$ que $-3,5$ (car $3,05 < 3,5$), donc $-3,05$ est le plus grand et $-3,5 < -3,05$.'
            },
            {
                quiz: { q: 'Quel est le plus grand nombre parmi $-100$ et $1$ ?', a: '1' },
                options: '1 ¤ -100 ¤ Ils sont égaux ¤ On ne peut pas savoir',
                explanation: 'Tout nombre positif est plus grand que tout nombre négatif, même si sa valeur absolue est petite : $1 > -100$.'
            },
            {
                quiz: { q: 'Range dans l\'ordre décroissant les nombres $-3$ ; $5$ ; $-8$ ; $2$.', a: '5 ; 2 ; -3 ; -8' },
                options: '5 ; 2 ; -3 ; -8 ¤ -8 ; -3 ; 2 ; 5 ¤ 5 ; 2 ; -8 ; -3 ¤ -3 ; -8 ; 5 ; 2',
                explanation: 'Dans l\'ordre décroissant (du plus grand au plus petit) : $5 ; 2 ; -3 ; -8$.'
            }
],

        // ------------------------------------------------------------
        // 52401 : Opposé et valeur absolue d'un nombre relatif. 10 questions.
        // ------------------------------------------------------------
        "52401": [
            {
                quiz: { q: 'Que signifie « deux nombres opposés » ?', a: 'Ils ont la même distance à zéro mais des signes différents' },
                options: 'Ils ont la même distance à zéro mais des signes différents ¤ Ils ont la même valeur et le même signe ¤ Leur somme est toujours égale à 1 ¤ Ils sont toujours tous les deux négatifs',
                explanation: 'Deux nombres relatifs sont opposés lorsqu\'ils ont la même distance à zéro (même valeur absolue) mais des signes différents.'
            },
            {
                quiz: { q: 'Quel est l\'opposé de $7$ ?', a: '-7' },
                options: '-7 ¤ 7 ¤ 0 ¤ 1',
                explanation: 'L\'opposé de $7$ est le nombre de même distance à zéro mais de signe différent : $-7$.'
            },
            {
                quiz: { q: 'Quel est l\'opposé de $-4,3$ ?', a: '4,3' },
                options: '4,3 ¤ -4,3 ¤ 0 ¤ -0,43',
                explanation: 'L\'opposé de $-4,3$ est $4,3$ (même distance à zéro, signe différent).'
            },
            {
                quiz: { q: 'Quel est l\'opposé de $0$ ?', a: '0' },
                options: '0 ¤ 1 ¤ -1 ¤ Cela n\'existe pas',
                explanation: '$0$ est son propre opposé : c\'est le seul nombre dans ce cas.'
            },
            {
                quiz: { q: 'Que représente la valeur absolue d\'un nombre relatif ?', a: 'Sa distance à zéro' },
                options: 'Sa distance à zéro ¤ Son opposé ¤ Sa moitié ¤ Son signe',
                explanation: 'La valeur absolue d\'un nombre relatif est sa distance à zéro sur la droite graduée. Elle se note entre deux barres verticales et est toujours positive.'
            },
            {
                quiz: { q: 'Calcule $|6|$.', a: '6' },
                options: '6 ¤ -6 ¤ 0 ¤ 36',
                explanation: 'La valeur absolue de $6$ est sa distance à zéro : $|6|=6$.'
            },
            {
                quiz: { q: 'Calcule $|-3,8|$.', a: '3,8' },
                options: '3,8 ¤ -3,8 ¤ 0 ¤ 7,6',
                explanation: 'La valeur absolue de $-3,8$ est sa distance à zéro : $|-3,8|=3,8$. La valeur absolue est toujours positive.'
            },
            {
                quiz: { q: 'La valeur absolue d\'un nombre peut-elle être négative ?', a: 'Non, jamais' },
                options: 'Non, jamais ¤ Oui, si le nombre est négatif ¤ Oui, toujours ¤ Cela dépend du nombre',
                explanation: 'Une distance est toujours positive ou nulle : la valeur absolue d\'un nombre n\'est donc jamais négative.'
            },
            {
                quiz: { q: 'Deux nombres opposés ont-ils toujours la même valeur absolue ?', a: 'Oui, toujours' },
                options: 'Oui, toujours ¤ Non, jamais ¤ Seulement s\'ils sont positifs ¤ Seulement s\'ils sont entiers',
                explanation: 'Par définition, deux nombres opposés ont la même distance à zéro, donc la même valeur absolue.'
            },
            {
                quiz: { q: '<svg viewBox="0 0 400 90" xmlns="http://www.w3.org/2000/svg" style="max-width:340px; display:block; margin:8px auto; font-family:sans-serif;"><line x1="20" y1="45" x2="380" y2="45" stroke="#333" stroke-width="2"/><polygon points="380,45 370,40 370,50" fill="#333"/><polygon points="20,45 30,40 30,50" fill="#333"/><line x1="40" y1="40" x2="40" y2="50" stroke="#333" stroke-width="1.5"/><text x="35" y="65" font-size="12">-5</text><line x1="72" y1="40" x2="72" y2="50" stroke="#333" stroke-width="1.5"/><text x="67" y="65" font-size="12">-4</text><line x1="104" y1="40" x2="104" y2="50" stroke="#333" stroke-width="1.5"/><text x="99" y="65" font-size="12">-3</text><line x1="136" y1="40" x2="136" y2="50" stroke="#333" stroke-width="1.5"/><text x="131" y="65" font-size="12">-2</text><line x1="168" y1="40" x2="168" y2="50" stroke="#333" stroke-width="1.5"/><text x="163" y="65" font-size="12">-1</text><line x1="200" y1="38" x2="200" y2="52" stroke="#C0392B" stroke-width="2"/><text x="196" y="68" font-size="13" fill="#C0392B" font-weight="bold">0</text><line x1="232" y1="40" x2="232" y2="50" stroke="#333" stroke-width="1.5"/><text x="229" y="65" font-size="12">1</text><line x1="264" y1="40" x2="264" y2="50" stroke="#333" stroke-width="1.5"/><text x="261" y="65" font-size="12">2</text><line x1="296" y1="40" x2="296" y2="50" stroke="#333" stroke-width="1.5"/><text x="293" y="65" font-size="12">3</text><line x1="328" y1="40" x2="328" y2="50" stroke="#333" stroke-width="1.5"/><text x="325" y="65" font-size="12">4</text><line x1="360" y1="40" x2="360" y2="50" stroke="#333" stroke-width="1.5"/><text x="357" y="65" font-size="12">5</text><circle cx="360" cy="28" r="4.5" fill="#2E5C8A"/><text x="354" y="18" font-size="13" fill="#2E5C8A" font-weight="bold">A</text><circle cx="40" cy="28" r="4.5" fill="none" stroke="#C0392B" stroke-width="2" stroke-dasharray="2 2"/><text x="30" y="18" font-size="13" fill="#C0392B" font-weight="bold">?</text></svg><p style="margin-top:8px;">Le point A a pour abscisse $5$. Quelle est l\'abscisse du point symétrique de A par rapport à l\'origine (son opposé) ?</p>', a: '-5' },
                options: '-5 ¤ 5 ¤ 0 ¤ 10',
                explanation: 'Le symétrique de A par rapport à l\'origine se trouve à la même distance de $0$ mais de l\'autre côté : c\'est l\'opposé de $5$, c\'est-à-dire $-5$.'
            }
        ],

        // ------------------------------------------------------------
        // 52501 : Additionner deux nombres relatifs (règle des signes). 10 questions.
        // ------------------------------------------------------------
        "52501": [
            {
                quiz: { q: 'Quelle est la règle pour additionner deux nombres relatifs de même signe ?', a: 'On additionne leurs valeurs absolues et on garde le signe commun' },
                options: 'On additionne leurs valeurs absolues et on garde le signe commun ¤ On soustrait leurs valeurs absolues ¤ On additionne leurs valeurs absolues et on met un signe + ¤ On garde le signe du plus petit',
                explanation: 'Pour deux nombres de même signe, on additionne leurs valeurs absolues et on garde ce signe commun.'
            },
            {
                quiz: { q: 'Quelle est la règle pour additionner deux nombres relatifs de signes différents ?', a: 'On soustrait la plus petite valeur absolue à la plus grande, et on garde le signe du nombre ayant la plus grande valeur absolue' },
                options: 'On soustrait la plus petite valeur absolue à la plus grande, et on garde le signe du nombre ayant la plus grande valeur absolue ¤ On additionne toujours les deux valeurs absolues ¤ Le résultat est toujours positif ¤ Le résultat est toujours négatif',
                explanation: 'Pour deux nombres de signes différents, on soustrait la plus petite valeur absolue à la plus grande, et le résultat garde le signe du nombre ayant la plus grande valeur absolue.'
            },
            {
                quiz: { q: 'Calcule $A=(-3)+(-5)$.', a: '-8' },
                options: '-8 ¤ 8 ¤ -2 ¤ 2',
                explanation: 'Mêmes signes (négatifs) : on additionne les valeurs absolues $3+5=8$ et on garde le signe $-$ : $A=-8$.'
            },
            {
                quiz: { q: 'Calcule $B=(+4)+(+7)$.', a: '11' },
                options: '11 ¤ -11 ¤ 3 ¤ -3',
                explanation: 'Mêmes signes (positifs) : $4+7=11$, on garde le signe $+$ : $B=11$.'
            },
            {
                quiz: { q: 'Calcule $C=(-9)+(+6)$.', a: '-3' },
                options: '-3 ¤ 3 ¤ -15 ¤ 15',
                explanation: 'Signes différents : $9-6=3$, on garde le signe du nombre ayant la plus grande valeur absolue ($-9$) : $C=-3$.'
            },
            {
                quiz: { q: 'Calcule $D=(+2,5)+(-7)$.', a: '-4,5' },
                options: '-4,5 ¤ 4,5 ¤ -9,5 ¤ 9,5',
                explanation: 'Signes différents : $7-2,5=4,5$, on garde le signe de $-7$ (plus grande valeur absolue) : $D=-4,5$.'
            },
            {
                quiz: { q: 'Calcule $(-10)+(+10)$.', a: '0' },
                options: '0 ¤ 20 ¤ -20 ¤ 1',
                explanation: 'Signes différents, mêmes valeurs absolues : $10-10=0$. La somme de deux nombres opposés est toujours $0$.'
            },
            {
                quiz: { q: 'Calcule $(+3)+(-3,5)$.', a: '-0,5' },
                options: '-0,5 ¤ 0,5 ¤ -6,5 ¤ 6,5',
                explanation: 'Signes différents : $3,5-3=0,5$, on garde le signe de $-3,5$ (plus grande valeur absolue) : résultat $-0,5$.'
            },
            {
                quiz: { q: '<svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg" style="max-width:340px; display:block; margin:8px auto; font-family:sans-serif;"><line x1="20" y1="85" x2="380" y2="85" stroke="#333" stroke-width="2"/><polygon points="380,85 370,80 370,90" fill="#333"/><polygon points="20,85 30,80 30,90" fill="#333"/><line x1="40" y1="80" x2="40" y2="90" stroke="#333" stroke-width="1.5"/><text x="35" y="105" font-size="12">-5</text><line x1="72" y1="80" x2="72" y2="90" stroke="#333" stroke-width="1.5"/><text x="67" y="105" font-size="12">-4</text><line x1="104" y1="80" x2="104" y2="90" stroke="#333" stroke-width="1.5"/><text x="99" y="105" font-size="12">-3</text><line x1="136" y1="80" x2="136" y2="90" stroke="#333" stroke-width="1.5"/><text x="131" y="105" font-size="12">-2</text><line x1="168" y1="80" x2="168" y2="90" stroke="#333" stroke-width="1.5"/><text x="163" y="105" font-size="12">-1</text><line x1="200" y1="78" x2="200" y2="92" stroke="#C0392B" stroke-width="2"/><text x="196" y="108" font-size="13" fill="#C0392B" font-weight="bold">0</text><line x1="232" y1="80" x2="232" y2="90" stroke="#333" stroke-width="1.5"/><text x="229" y="105" font-size="12">1</text><line x1="264" y1="80" x2="264" y2="90" stroke="#333" stroke-width="1.5"/><text x="261" y="105" font-size="12">2</text><line x1="296" y1="80" x2="296" y2="90" stroke="#333" stroke-width="1.5"/><text x="293" y="105" font-size="12">3</text><line x1="328" y1="80" x2="328" y2="90" stroke="#333" stroke-width="1.5"/><text x="325" y="105" font-size="12">4</text><line x1="360" y1="80" x2="360" y2="90" stroke="#333" stroke-width="1.5"/><text x="357" y="105" font-size="12">5</text><defs><marker id="arrowJ1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><polygon points="0,0 8,4 0,8" fill="#2F7D3C"/></marker></defs><circle cx="136" cy="68" r="4.5" fill="#2E5C8A"/><text x="112" y="60" font-size="12" fill="#2E5C8A">départ -2</text><path d="M 136,63 Q 216,20 296,63" fill="none" stroke="#2F7D3C" stroke-width="2.5" marker-end="url(#arrowJ1)"/><text x="205" y="20" font-size="13" fill="#2F7D3C" font-weight="bold">+5</text><circle cx="296" cy="68" r="4.5" fill="#2F7D3C"/><text x="270" y="60" font-size="12" fill="#2F7D3C">arrivée 3</text></svg><p style="margin-top:8px;">Ce schéma illustre quelle addition ?</p>', a: '(-2)+(+5)=3' },
                options: '(-2)+(+5)=3 ¤ (+2)+(-5)=-3 ¤ (-2)+(-5)=-7 ¤ (+2)+(+5)=7',
                explanation: 'On part du point $-2$ et on avance de $5$ unités vers la droite (une addition de $+5$) : on arrive sur $3$. Donc $(-2)+(+5)=3$.'
            },
            {
                quiz: { q: 'Calcule $(-6,5)+(-1,5)$.', a: '-8' },
                options: '-8 ¤ 8 ¤ -5 ¤ 5',
                explanation: 'Mêmes signes (négatifs) : $6,5+1,5=8$, on garde le signe $-$ : résultat $-8$.'
            }
],

        // ------------------------------------------------------------
        // 52502 : Additionner plusieurs nombres relatifs (regroupement
        // des positifs et des négatifs). 10 questions.
        // ------------------------------------------------------------
        "52502": [
            {
                quiz: { q: 'Pour additionner plusieurs nombres relatifs, quelle méthode peut-on utiliser ?', a: 'Regrouper les nombres positifs entre eux et les nombres négatifs entre eux' },
                options: 'Regrouper les nombres positifs entre eux et les nombres négatifs entre eux ¤ Toujours les additionner de gauche à droite sans les regrouper ¤ Multiplier tous les nombres entre eux ¤ Ne garder que le plus grand nombre',
                explanation: 'On peut regrouper les nombres positifs entre eux et les nombres négatifs entre eux, puis additionner les deux résultats obtenus.'
            },
            {
                quiz: { q: 'Calcule $E=(-4)+(+7)+(-2)+(+3)$.', a: '4' },
                options: '4 ¤ -4 ¤ 16 ¤ -16',
                explanation: 'On regroupe : positifs $(+7)+(+3)=10$, négatifs $(-4)+(-2)=-6$. Puis $10+(-6)=4$.'
            },
            {
                quiz: { q: 'Calcule $(+5)+(-2)+(+1)+(-6)$.', a: '-2' },
                options: '-2 ¤ 2 ¤ -14 ¤ 14',
                explanation: 'Positifs : $5+1=6$. Négatifs : $-2-6=-8$. Puis $6+(-8)=-2$.'
            },
            {
                quiz: { q: 'Calcule $(-3)+(-4)+(+10)$.', a: '3' },
                options: '3 ¤ -3 ¤ 17 ¤ -17',
                explanation: 'Négatifs : $-3-4=-7$. Il n\'y a qu\'un positif : $+10$. Puis $-7+10=3$.'
            },
            {
                quiz: { q: 'Calcule $(+1)+(+1)+(-1)+(-1)$.', a: '0' },
                options: '0 ¤ 4 ¤ -4 ¤ 2',
                explanation: 'Positifs : $1+1=2$. Négatifs : $-1-1=-2$. Puis $2+(-2)=0$.'
            },
            {
                quiz: { q: 'Calcule $(-2,5)+(+4)+(-1,5)$.', a: '0' },
                options: '0 ¤ 8 ¤ -8 ¤ 3',
                explanation: 'Négatifs : $-2,5-1,5=-4$. Il n\'y a qu\'un positif : $+4$. Puis $-4+4=0$.'
            },
            {
                quiz: { q: 'Calcule $(+8)+(-3)+(-3)+(+8)$.', a: '10' },
                options: '10 ¤ -10 ¤ 22 ¤ 0',
                explanation: 'Positifs : $8+8=16$. Négatifs : $-3-3=-6$. Puis $16+(-6)=10$.'
            },
            {
                quiz: { q: 'En regroupant les nombres positifs de $(-5)+(+2)+(-1)+(+9)$, on obtient...', a: '(+2)+(+9)' },
                options: '(+2)+(+9) ¤ (-5)+(-1) ¤ (+2)+(-1) ¤ (-5)+(+9)',
                explanation: 'Les nombres positifs de cette somme sont $+2$ et $+9$.'
            },
            {
                quiz: { q: 'Calcule $(-10)+(+3)+(+3)+(+4)$.', a: '0' },
                options: '0 ¤ 20 ¤ -20 ¤ 10',
                explanation: 'Positifs : $3+3+4=10$. Il n\'y a qu\'un négatif : $-10$. Puis $10+(-10)=0$.'
            },
            {
                quiz: { q: 'Calcule $(+6)+(-2)+(-2)+(-2)$.', a: '0' },
                options: '0 ¤ 12 ¤ -12 ¤ 6',
                explanation: 'Négatifs : $-2-2-2=-6$. Il n\'y a qu\'un positif : $+6$. Puis $6+(-6)=0$.'
            }
        ],

        // ------------------------------------------------------------
        // 52601 : Soustraire des nombres relatifs (a-b=a+(-b),
        // nécessité des parenthèses). 10 questions.
        // ------------------------------------------------------------
        "52601": [
            {
                quiz: { q: 'Que signifie « soustraire un nombre relatif » ?', a: 'Additionner son opposé' },
                options: 'Additionner son opposé ¤ Le multiplier par -1 puis l\'additionner ¤ Changer le signe du résultat final ¤ Diviser par ce nombre',
                explanation: 'Soustraire un nombre relatif revient à additionner son opposé : $a-b=a+(-b)$.'
            },
            {
                quiz: { q: 'Complète : $a-b=a+...$', a: '(-b)' },
                options: '(-b) ¤ (+b) ¤ b ¤ -a',
                explanation: 'Par définition, $a-b=a+(-b)$ : soustraire $b$ revient à ajouter son opposé $-b$.'
            },
            {
                quiz: { q: 'Calcule $F=(+5)-(+8)$.', a: '-3' },
                options: '-3 ¤ 3 ¤ -13 ¤ 13',
                explanation: '$F=(+5)+(-8)$. Signes différents : $8-5=3$, on garde le signe de $-8$ : $F=-3$.'
            },
            {
                quiz: { q: 'Calcule $G=(-6)-(-2)$.', a: '-4' },
                options: '-4 ¤ 4 ¤ -8 ¤ 8',
                explanation: '$G=(-6)+(+2)$. Signes différents : $6-2=4$, on garde le signe de $-6$ : $G=-4$.'
            },
            {
                quiz: { q: '<svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg" style="max-width:340px; display:block; margin:8px auto; font-family:sans-serif;"><line x1="20" y1="85" x2="380" y2="85" stroke="#333" stroke-width="2"/><polygon points="380,85 370,80 370,90" fill="#333"/><polygon points="20,85 30,80 30,90" fill="#333"/><line x1="40" y1="80" x2="40" y2="90" stroke="#333" stroke-width="1.5"/><text x="35" y="105" font-size="12">-5</text><line x1="72" y1="80" x2="72" y2="90" stroke="#333" stroke-width="1.5"/><text x="67" y="105" font-size="12">-4</text><line x1="104" y1="80" x2="104" y2="90" stroke="#333" stroke-width="1.5"/><text x="99" y="105" font-size="12">-3</text><line x1="136" y1="80" x2="136" y2="90" stroke="#333" stroke-width="1.5"/><text x="131" y="105" font-size="12">-2</text><line x1="168" y1="80" x2="168" y2="90" stroke="#333" stroke-width="1.5"/><text x="163" y="105" font-size="12">-1</text><line x1="200" y1="78" x2="200" y2="92" stroke="#C0392B" stroke-width="2"/><text x="196" y="108" font-size="13" fill="#C0392B" font-weight="bold">0</text><line x1="232" y1="80" x2="232" y2="90" stroke="#333" stroke-width="1.5"/><text x="229" y="105" font-size="12">1</text><line x1="264" y1="80" x2="264" y2="90" stroke="#333" stroke-width="1.5"/><text x="261" y="105" font-size="12">2</text><line x1="296" y1="80" x2="296" y2="90" stroke="#333" stroke-width="1.5"/><text x="293" y="105" font-size="12">3</text><line x1="328" y1="80" x2="328" y2="90" stroke="#333" stroke-width="1.5"/><text x="325" y="105" font-size="12">4</text><line x1="360" y1="80" x2="360" y2="90" stroke="#333" stroke-width="1.5"/><text x="357" y="105" font-size="12">5</text><defs><marker id="arrowJ2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><polygon points="0,0 8,4 0,8" fill="#C0392B"/></marker></defs><circle cx="296" cy="68" r="4.5" fill="#2E5C8A"/><text x="272" y="60" font-size="12" fill="#2E5C8A">départ 3</text><path d="M 296,63 Q 216,20 136,63" fill="none" stroke="#C0392B" stroke-width="2.5" marker-end="url(#arrowJ2)"/><text x="205" y="20" font-size="13" fill="#C0392B" font-weight="bold">-5</text><circle cx="136" cy="68" r="4.5" fill="#C0392B"/><text x="105" y="60" font-size="12" fill="#C0392B">arrivée ?</text></svg><p style="margin-top:8px;">Ce schéma illustre le calcul $(+3)-(+5)$. Quel est le résultat ?</p>', a: '-2' },
                options: '-2 ¤ 2 ¤ -8 ¤ 8',
                explanation: 'Soustraire $5$ revient à reculer de $5$ unités depuis $3$ : on arrive sur $-2$. En effet $(+3)-(+5)=(+3)+(-5)=-2$.'
            },
            {
                quiz: { q: 'Calcule $(-7)-(+2)$.', a: '-9' },
                options: '-9 ¤ 9 ¤ -5 ¤ 5',
                explanation: '$(-7)-(+2)=(-7)+(-2)$. Mêmes signes : $7+2=9$, on garde le signe $-$ : résultat $-9$.'
            },
            {
                quiz: { q: 'Pourquoi les parenthèses sont-elles indispensables dans une écriture comme $5-(-3)$ ?', a: 'Pour séparer le signe de l\'opération du signe du nombre' },
                options: 'Pour séparer le signe de l\'opération du signe du nombre ¤ Pour faire joli ¤ Ce n\'est pas indispensable, c\'est juste une habitude ¤ Pour indiquer une multiplication',
                explanation: 'Sans parenthèses, une écriture comme $5--3$ n\'a pas de sens clair : les parenthèses séparent bien le signe de l\'opération (soustraction) du signe du nombre relatif ($-3$).'
            },
            {
                quiz: { q: 'Une écriture comme $5--3$ (sans parenthèses) est-elle correcte ?', a: 'Non, elle n\'a pas de sens clair' },
                options: 'Non, elle n\'a pas de sens clair ¤ Oui, c\'est parfaitement correct ¤ Oui, mais seulement à l\'oral ¤ Oui, si les nombres sont entiers',
                explanation: 'Deux signes qui se suivent sans parenthèses n\'ont pas de sens clair : il faut écrire $5-(-3)$.'
            },
            {
                quiz: { q: 'Calcule $(-4)-(-4)$.', a: '0' },
                options: '0 ¤ -8 ¤ 8 ¤ -16',
                explanation: '$(-4)-(-4)=(-4)+(+4)=0$. Soustraire un nombre à lui-même donne toujours $0$.'
            },
            {
                quiz: { q: 'Calcule $(0)-(+6)$.', a: '-6' },
                options: '-6 ¤ 6 ¤ 0 ¤ -36',
                explanation: '$(0)-(+6)=(0)+(-6)=-6$.'
            }
],

        // ------------------------------------------------------------
        // 52602 : Simplifier l'écriture d'une somme (règle des signes
        // ++, --, +-, -+). 10 questions.
        // ------------------------------------------------------------
        "52602": [
            {
                quiz: { q: 'Quel est le signe simplifié de « $+$ et $+$ » ?', a: '+' },
                options: '+ ¤ - ¤ Cela dépend des nombres ¤ On ne peut pas simplifier',
                explanation: 'Deux signes $+$ qui se suivent se simplifient en $+$.'
            },
            {
                quiz: { q: 'Quel est le signe simplifié de « $-$ et $-$ » ?', a: '+' },
                options: '+ ¤ - ¤ Cela dépend des nombres ¤ On ne peut pas simplifier',
                explanation: 'Deux signes $-$ qui se suivent se simplifient en $+$.'
            },
            {
                quiz: { q: 'Quel est le signe simplifié de « $+$ et $-$ » (ou « $-$ et $+$ ») ?', a: '-' },
                options: '- ¤ + ¤ Cela dépend des nombres ¤ On ne peut pas simplifier',
                explanation: 'Un signe $+$ suivi d\'un signe $-$ (ou l\'inverse) se simplifie toujours en $-$.'
            },
            {
                quiz: { q: 'Simplifie l\'écriture $(+5)+(-3)$.', a: '5-3' },
                options: '5-3 ¤ 5+3 ¤ -5-3 ¤ -5+3',
                explanation: 'Les signes qui se suivent sont $+$ et $-$, ce qui se simplifie en $-$ : $(+5)+(-3)=5-3$.'
            },
            {
                quiz: { q: 'Simplifie l\'écriture $(-5)-(-3)$.', a: '-5+3' },
                options: '-5+3 ¤ -5-3 ¤ 5+3 ¤ 5-3',
                explanation: 'Les signes qui se suivent (celui de l\'opération et celui du nombre) sont $-$ et $-$, ce qui se simplifie en $+$ : $(-5)-(-3)=-5+3$.'
            },
            {
                quiz: { q: 'Calcule $(+5)+(-3)$.', a: '2' },
                options: '2 ¤ -2 ¤ 8 ¤ -8',
                explanation: 'Après simplification : $5-3=2$.'
            },
            {
                quiz: { q: 'Calcule $(-5)-(-3)$.', a: '-2' },
                options: '-2 ¤ 2 ¤ -8 ¤ 8',
                explanation: 'Après simplification : $-5+3=-2$.'
            },
            {
                quiz: { q: 'Simplifie l\'écriture $(-7)+(+2)$.', a: '-7+2' },
                options: '-7+2 ¤ -7-2 ¤ 7+2 ¤ 7-2',
                explanation: 'Les signes qui se suivent sont $+$ et $+$, ce qui se simplifie en $+$ : $(-7)+(+2)=-7+2$.'
            },
            {
                quiz: { q: 'Simplifie l\'écriture $(+4)-(+9)$.', a: '4-9' },
                options: '4-9 ¤ 4+9 ¤ -4-9 ¤ -4+9',
                explanation: 'Les signes qui se suivent sont $-$ et $+$, ce qui se simplifie en $-$ : $(+4)-(+9)=4-9$.'
            },
            {
                quiz: { q: 'Calcule $(+4)-(+9)$.', a: '-5' },
                options: '-5 ¤ 5 ¤ -13 ¤ 13',
                explanation: 'Après simplification : $4-9=-5$.'
            }
        ],

        // ------------------------------------------------------------
        // 52701 : Enchaîner additions et soustractions de nombres
        // relatifs. 10 questions.
        // ------------------------------------------------------------
        "52701": [
            {
                quiz: { q: 'Quelle est la première étape pour calculer une expression enchaînant additions et soustractions de nombres relatifs ?', a: 'Transformer chaque soustraction en addition de l\'opposé' },
                options: 'Transformer chaque soustraction en addition de l\'opposé ¤ Calculer directement de gauche à droite sans rien transformer ¤ Multiplier tous les termes entre eux ¤ Ne garder que les nombres positifs',
                explanation: 'On commence par transformer chaque soustraction en addition de l\'opposé, puis on simplifie l\'écriture en appliquant la règle des signes.'
            },
            {
                quiz: { q: 'Calcule $H=4-9+(-6)-(-3)$.', a: '-8' },
                options: '-8 ¤ 8 ¤ -22 ¤ 22',
                explanation: 'On simplifie : $H=4-9-6+3$. On regroupe : positifs $4+3=7$, négatifs $-9-6=-15$. Puis $7-15=-8$.'
            },
            {
                quiz: { q: 'Calcule $(-5)+3-(-2)-4$.', a: '-4' },
                options: '-4 ¤ 4 ¤ -14 ¤ 14',
                explanation: 'On simplifie : $-5+3+2-4$. Positifs : $3+2=5$. Négatifs : $-5-4=-9$. Puis $5-9=-4$.'
            },
            {
                quiz: { q: 'Calcule $7-(-3)+(-5)-2$.', a: '3' },
                options: '3 ¤ -3 ¤ 17 ¤ -17',
                explanation: 'On simplifie : $7+3-5-2$. Positifs : $7+3=10$. Négatifs : $-5-2=-7$. Puis $10-7=3$.'
            },
            {
                quiz: { q: 'Calcule $(-1)-(-1)+(-1)-(-1)$.', a: '0' },
                options: '0 ¤ 4 ¤ -4 ¤ 2',
                explanation: 'On simplifie : $-1+1-1+1$. Positifs : $1+1=2$. Négatifs : $-1-1=-2$. Puis $2-2=0$.'
            },
            {
                quiz: { q: 'Calcule $10-(-10)+(-10)-10$.', a: '0' },
                options: '0 ¤ 40 ¤ -40 ¤ 20',
                explanation: 'On simplifie : $10+10-10-10$. Positifs : $10+10=20$. Négatifs : $-10-10=-20$. Puis $20-20=0$.'
            },
            {
                quiz: { q: 'Calcule $(-6)+(-4)-(-8)+2$.', a: '0' },
                options: '0 ¤ -20 ¤ 20 ¤ -8',
                explanation: 'On simplifie : $-6-4+8+2$. Positifs : $8+2=10$. Négatifs : $-6-4=-10$. Puis $10-10=0$.'
            },
            {
                quiz: { q: 'Calcule $3-5-2+4$.', a: '0' },
                options: '0 ¤ 14 ¤ -14 ¤ 4',
                explanation: 'Positifs : $3+4=7$. Négatifs : $-5-2=-7$. Puis $7-7=0$.'
            },
            {
                quiz: { q: 'Calcule $(-2,5)+4-(-1,5)-3$.', a: '0' },
                options: '0 ¤ 11 ¤ -11 ¤ 1',
                explanation: 'On simplifie : $-2,5+4+1,5-3$. Positifs : $4+1,5=5,5$. Négatifs : $-2,5-3=-5,5$. Puis $5,5-5,5=0$.'
            },
            {
                quiz: { q: 'Après avoir transformé toutes les soustractions en additions et simplifié l\'écriture, que fait-on ensuite ?', a: 'On regroupe les nombres positifs entre eux et les négatifs entre eux' },
                options: 'On regroupe les nombres positifs entre eux et les négatifs entre eux ¤ On multiplie tous les termes ¤ On recommence depuis le début ¤ On ignore les nombres décimaux',
                explanation: 'Une fois l\'écriture simplifiée, on regroupe les nombres positifs entre eux et les négatifs entre eux, puis on calcule le résultat final.'
            }
        ],


        // ============================================================
        // 5EME - CHAPITRE 9 (Angles) - QCM "Ai-je bien compris ?"
        // ============================================================

        // ------------------------------------------------------------
        // 59111 : Vocabulaire des angles (nul, aigu, droit, obtus, plat, plein)
        // ------------------------------------------------------------
        "59111": [
            {
                quiz: { q: `<svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg" style="max-width:150px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="30.0" y1="90.0" x2="100.0" y2="90.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="30.0" y1="90.0" x2="75.0" y2="36.4" stroke="#1A1A1A" stroke-width="2.5"/>
<circle cx="30.0" cy="90.0" r="3" fill="#1A1A1A"/>
</svg><p style="margin-top:8px;">Quelle est la nature de cet angle ?</p>`, a: `Aigu` },
                options: `Aigu ¤ Droit ¤ Obtus ¤ Plat`,
                explanation: `Cet angle mesure environ 50°, une valeur strictement comprise entre 0° et 90° : c'est donc un angle <strong>aigu</strong>.<svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg" style="max-width:150px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="30.0" y1="90.0" x2="100.0" y2="90.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="30.0" y1="90.0" x2="75.0" y2="36.4" stroke="#1A1A1A" stroke-width="2.5"/>
<path d="M 58.0,90.0 L 58.0,89.0 L 57.9,88.0 L 57.8,87.0 L 57.7,85.9 L 57.5,84.9 L 57.3,83.9 L 57.1,83.0 L 56.8,82.0 L 56.5,81.0 L 56.2,80.0 L 55.8,79.1 L 55.4,78.2 L 54.9,77.2 L 54.5,76.3 L 53.9,75.5 L 53.4,74.6 L 52.8,73.8 L 52.2,73.0 L 51.6,72.2 L 50.9,71.4 L 50.2,70.6 L 49.5,69.9 L 48.8,69.2 L 48.0,68.5" fill="none" stroke="#2F7D3C" stroke-width="2"/>
<text x="69.9" y="71.4" font-size="14" fill="#2F7D3C" text-anchor="middle" font-weight="bold">50°</text>
<circle cx="30.0" cy="90.0" r="3" fill="#1A1A1A"/>
</svg>`
            },
            {
                quiz: { q: `<svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg" style="max-width:150px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="30.0" y1="90.0" x2="100.0" y2="90.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="30.0" y1="90.0" x2="30.0" y2="20.0" stroke="#1A1A1A" stroke-width="2.5"/>
<circle cx="30.0" cy="90.0" r="3" fill="#1A1A1A"/>
</svg><p style="margin-top:8px;">Quelle est la nature de cet angle ?</p>`, a: `Droit` },
                options: `Aigu ¤ Droit ¤ Obtus ¤ Plat`,
                explanation: `Cet angle mesure exactement 90° : c'est un angle <strong>droit</strong>. On le repère d'ailleurs souvent grâce au petit carré tracé au sommet.<svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg" style="max-width:150px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="30.0" y1="90.0" x2="100.0" y2="90.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="30.0" y1="90.0" x2="30.0" y2="20.0" stroke="#1A1A1A" stroke-width="2.5"/>
<path d="M 46.0,90.0 L 46.0,74.0 L 30.0,74.0" fill="none" stroke="#2F7D3C" stroke-width="2"/>
<text x="61.1" y="58.9" font-size="14" fill="#2F7D3C" text-anchor="middle" font-weight="bold">90°</text>
<circle cx="30.0" cy="90.0" r="3" fill="#1A1A1A"/>
</svg>`
            },
            {
                quiz: { q: `<svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg" style="max-width:150px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="60.0" y1="90.0" x2="130.0" y2="90.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="60.0" y1="90.0" x2="6.4" y2="45.0" stroke="#1A1A1A" stroke-width="2.5"/>
<circle cx="60.0" cy="90.0" r="3" fill="#1A1A1A"/>
</svg><p style="margin-top:8px;">Quelle est la nature de cet angle ?</p>`, a: `Obtus` },
                options: `Aigu ¤ Droit ¤ Obtus ¤ Plat`,
                explanation: `Cet angle mesure environ 140°, une valeur strictement comprise entre 90° et 180° : c'est donc un angle <strong>obtus</strong>.<svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg" style="max-width:150px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="60.0" y1="90.0" x2="130.0" y2="90.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="60.0" y1="90.0" x2="6.4" y2="45.0" stroke="#1A1A1A" stroke-width="2.5"/>
<path d="M 88.0,90.0 L 87.9,87.2 L 87.4,84.3 L 86.7,81.6 L 85.7,78.9 L 84.5,76.3 L 82.9,73.9 L 81.2,71.7 L 79.2,69.6 L 77.0,67.8 L 74.7,66.2 L 72.2,64.8 L 69.6,63.7 L 66.8,62.9 L 64.1,62.3 L 61.2,62.0 L 58.4,62.0 L 55.5,62.4 L 52.8,63.0 L 50.0,63.8 L 47.4,65.0 L 45.0,66.4 L 42.6,68.0 L 40.5,69.9 L 38.5,72.0" fill="none" stroke="#2F7D3C" stroke-width="2"/>
<text x="75.0" y="48.6" font-size="14" fill="#2F7D3C" text-anchor="middle" font-weight="bold">140°</text>
<circle cx="60.0" cy="90.0" r="3" fill="#1A1A1A"/>
</svg>`
            },
            {
                quiz: { q: `<svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg" style="max-width:150px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="25.0" y1="90.0" x2="135.0" y2="90.0" stroke="#1A1A1A" stroke-width="2.5"/>
<circle cx="80.0" cy="90.0" r="3" fill="#1A1A1A"/>
</svg><p style="margin-top:8px;">Quelle est la nature de cet angle ?</p>`, a: `Plat` },
                options: `Droit ¤ Obtus ¤ Plat ¤ Plein`,
                explanation: `Les deux côtés de cet angle sont alignés : ils forment une droite. Cet angle mesure exactement 180°, c'est un angle <strong>plat</strong>.<svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg" style="max-width:150px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="25.0" y1="90.0" x2="135.0" y2="90.0" stroke="#1A1A1A" stroke-width="2.5"/>
<path d="M 106.0,90.0 L 105.8,86.6 L 105.1,83.3 L 104.0,80.0 L 102.5,77.0 L 100.6,74.2 L 98.4,71.6 L 95.8,69.4 L 93.0,67.5 L 90.0,66.0 L 86.7,64.9 L 83.4,64.2 L 80.0,64.0 L 76.6,64.2 L 73.3,64.9 L 70.0,66.0 L 67.0,67.5 L 64.2,69.4 L 61.6,71.6 L 59.4,74.2 L 57.5,77.0 L 56.0,80.0 L 54.9,83.3 L 54.2,86.6 L 54.0,90.0" fill="none" stroke="#2F7D3C" stroke-width="2"/>
<text x="80.0" y="54.0" font-size="14" fill="#2F7D3C" text-anchor="middle" font-weight="bold">180°</text>
<circle cx="80.0" cy="90.0" r="3" fill="#1A1A1A"/>
</svg>`
            },
            {
                quiz: { q: `Un angle dont les deux côtés sont confondus (l'angle mesure 0°) est appelé un angle...`, a: `Nul` },
                options: `Nul ¤ Aigu ¤ Plat ¤ Plein`,
                explanation: `Quand les deux côtés d'un angle sont confondus (superposés), l'angle mesure 0° : on l'appelle un angle <strong>nul</strong>.<svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg" style="max-width:150px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="30.0" y1="90.0" x2="100.0" y2="90.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="30.0" y1="90.0" x2="92.0" y2="90.0" stroke="#2F7D3C" stroke-width="2" stroke-dasharray="5,4"/>
<circle cx="30.0" cy="90.0" r="3" fill="#1A1A1A"/>
<text x="30.0" y="65.0" font-size="15" fill="#2F7D3C" text-anchor="middle" font-weight="bold">0°</text>
</svg>`
            },
            {
                quiz: { q: `Un angle qui correspond à un tour complet, et qui mesure 360°, est appelé un angle...`, a: `Plein` },
                options: `Plein ¤ Plat ¤ Droit ¤ Nul`,
                explanation: `Un tour complet correspond à un angle de 360° : on l'appelle un angle <strong>plein</strong>.<svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg" style="max-width:150px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="80.0" y1="60.0" x2="135.0" y2="60.0" stroke="#1A1A1A" stroke-width="2.5"/>
<circle cx="80" cy="60" r="26" fill="none" stroke="#2F7D3C" stroke-width="2"/>
<circle cx="80.0" cy="60.0" r="3" fill="#1A1A1A"/>
<text x="80.0" y="104.0" font-size="14" fill="#2F7D3C" text-anchor="middle" font-weight="bold">360°</text>
</svg>`
            },
            {
                quiz: { q: `<svg viewBox="0 0 210 110" xmlns="http://www.w3.org/2000/svg" style="max-width:220px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="35.0" y1="85.0" x2="80.0" y2="85.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="35.0" y1="85.0" x2="71.9" y2="59.2" stroke="#1A1A1A" stroke-width="2.5"/>
<circle cx="35.0" cy="85.0" r="3" fill="#1A1A1A"/>
<text x="35.0" y="107.0" font-size="13" fill="#1A1A1A" text-anchor="middle" font-weight="bold">1</text>
<line x1="150.0" y1="85.0" x2="195.0" y2="85.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="150.0" y1="85.0" x2="131.0" y2="44.2" stroke="#1A1A1A" stroke-width="2.5"/>
<circle cx="150.0" cy="85.0" r="3" fill="#1A1A1A"/>
<text x="150.0" y="107.0" font-size="13" fill="#1A1A1A" text-anchor="middle" font-weight="bold">2</text>
</svg><p style="margin-top:8px;">Lequel de ces deux angles est obtus ?</p>`, a: `L'angle 2` },
                options: `L'angle 1 ¤ L'angle 2 ¤ Les deux ¤ Aucun des deux`,
                explanation: `L'angle 1 mesure environ 35° (inférieur à 90°) : il est aigu. L'angle 2 mesure environ 115°, une valeur comprise entre 90° et 180° : c'est lui qui est <strong>obtus</strong>.<svg viewBox="0 0 210 110" xmlns="http://www.w3.org/2000/svg" style="max-width:220px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="35.0" y1="85.0" x2="80.0" y2="85.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="35.0" y1="85.0" x2="71.9" y2="59.2" stroke="#1A1A1A" stroke-width="2.5"/>
<circle cx="35.0" cy="85.0" r="3" fill="#1A1A1A"/>
<line x1="150.0" y1="85.0" x2="195.0" y2="85.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="150.0" y1="85.0" x2="131.0" y2="44.2" stroke="#1A1A1A" stroke-width="2.5"/>
<circle cx="150.0" cy="85.0" r="3" fill="#1A1A1A"/>
<path d="M 61.0,85.0 L 61.0,84.3 L 61.0,83.7 L 60.9,83.0 L 60.9,82.4 L 60.8,81.7 L 60.7,81.0 L 60.6,80.4 L 60.5,79.7 L 60.3,79.1 L 60.2,78.5 L 60.0,77.8 L 59.8,77.2 L 59.6,76.5 L 59.4,75.9 L 59.1,75.3 L 58.9,74.7 L 58.6,74.1 L 58.3,73.5 L 58.0,72.9 L 57.7,72.3 L 57.4,71.8 L 57.0,71.2 L 56.7,70.6 L 56.3,70.1" fill="none" stroke="#888888" stroke-width="2"/>
<text x="75.1" y="72.4" font-size="12" fill="#888888" text-anchor="middle" font-weight="bold">35° (aigu)</text>
<path d="M 176.0,85.0 L 175.9,82.8 L 175.6,80.7 L 175.2,78.5 L 174.6,76.5 L 173.8,74.4 L 172.8,72.5 L 171.7,70.6 L 170.4,68.9 L 169.0,67.2 L 167.4,65.7 L 165.8,64.3 L 164.0,63.1 L 162.1,62.0 L 160.1,61.0 L 158.1,60.3 L 156.0,59.7 L 153.9,59.3 L 151.7,59.1 L 149.5,59.0 L 147.3,59.1 L 145.2,59.5 L 143.1,59.9 L 141.0,60.6 L 139.0,61.4" fill="none" stroke="#2F7D3C" stroke-width="2"/>
<text x="172.6" y="49.6" font-size="12" fill="#2F7D3C" text-anchor="middle" font-weight="bold">115° (obtus)</text>
</svg>`
            },
            {
                quiz: { q: `Quelle est la mesure d'un angle droit ?`, a: `90°` },
                options: `90° ¤ 180° ¤ 45° ¤ 360°`,
                explanation: `Par définition, un angle droit mesure exactement <strong>90°</strong>. C'est la mesure que l'on retrouve dans le coin d'une équerre ou d'une feuille de papier.`
            },
            {
                quiz: { q: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" style="max-width:150px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="35.0" y1="95.0" x2="93.9" y2="67.5" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="35.0" y1="95.0" x2="72.3" y2="41.8" stroke="#1A1A1A" stroke-width="2.5"/>
<circle cx="35.0" cy="95.0" r="3" fill="#1A1A1A"/>
</svg><p style="margin-top:8px;">Quelle est la nature de cet angle ?</p>`, a: `Aigu` },
                options: `Aigu ¤ Droit ¤ Obtus ¤ Plat`,
                explanation: `Cet angle mesure environ 30°, une valeur strictement comprise entre 0° et 90° : c'est un angle <strong>aigu</strong>, même si ses côtés ne sont pas horizontaux — l'orientation de la figure ne change pas la nature de l'angle.`
            },
            {
                quiz: { q: `<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" style="max-width:320px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="35.0" y1="85.0" x2="80.0" y2="85.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="35.0" y1="85.0" x2="46.6" y2="41.5" stroke="#1A1A1A" stroke-width="2.5"/>
<circle cx="35.0" cy="85.0" r="3" fill="#1A1A1A"/>
<text x="35.0" y="107.0" font-size="13" fill="#1A1A1A" text-anchor="middle" font-weight="bold">A</text>
<line x1="150.0" y1="85.0" x2="195.0" y2="85.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="150.0" y1="85.0" x2="150.0" y2="40.0" stroke="#1A1A1A" stroke-width="2.5"/>
<circle cx="150.0" cy="85.0" r="3" fill="#1A1A1A"/>
<text x="150.0" y="107.0" font-size="13" fill="#1A1A1A" text-anchor="middle" font-weight="bold">B</text>
<line x1="265.0" y1="85.0" x2="310.0" y2="85.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="265.0" y1="85.0" x2="246.0" y2="44.2" stroke="#1A1A1A" stroke-width="2.5"/>
<circle cx="265.0" cy="85.0" r="3" fill="#1A1A1A"/>
<text x="265.0" y="107.0" font-size="13" fill="#1A1A1A" text-anchor="middle" font-weight="bold">C</text>
</svg><p style="margin-top:8px;">Parmi les angles A, B et C, lequel est un angle droit ?</p>`, a: `L'angle B` },
                options: `L'angle A ¤ L'angle B ¤ L'angle C ¤ Aucun`,
                explanation: `L'angle A mesure environ 75° (aigu) et l'angle C environ 115° (obtus). Seul l'angle <strong>B</strong>, qui mesure exactement 90°, est un angle droit.<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" style="max-width:320px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="35.0" y1="85.0" x2="80.0" y2="85.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="35.0" y1="85.0" x2="46.6" y2="41.5" stroke="#1A1A1A" stroke-width="2.5"/>
<circle cx="35.0" cy="85.0" r="3" fill="#1A1A1A"/>
<path d="M 59.0,85.0 L 59.0,83.7 L 58.9,82.4 L 58.7,81.1 L 58.4,79.8 L 58.1,78.5 L 57.7,77.3 L 57.3,76.1 L 56.8,74.9 L 56.2,73.7 L 55.5,72.5 L 54.8,71.5 L 54.0,70.4 L 53.2,69.4 L 52.3,68.4 L 51.4,67.5 L 50.4,66.6 L 49.4,65.8 L 48.3,65.0 L 47.2,64.3 L 46.1,63.7 L 44.9,63.1 L 43.7,62.6 L 42.5,62.2 L 41.2,61.8" fill="none" stroke="#888888" stroke-width="2"/>
<text x="68.3" y="59.4" font-size="12" fill="#888888" text-anchor="middle" font-weight="bold">75°</text>
<text x="35.0" y="107.0" font-size="13" fill="#1A1A1A" text-anchor="middle" font-weight="bold">A</text>
<line x1="150.0" y1="85.0" x2="195.0" y2="85.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="150.0" y1="85.0" x2="150.0" y2="40.0" stroke="#1A1A1A" stroke-width="2.5"/>
<circle cx="150.0" cy="85.0" r="3" fill="#1A1A1A"/>
<path d="M 164.0,85.0 L 164.0,71.0 L 150.0,71.0" fill="none" stroke="#2F7D3C" stroke-width="2"/>
<text x="179.7" y="55.3" font-size="12" fill="#2F7D3C" text-anchor="middle" font-weight="bold">90°</text>
<text x="150.0" y="107.0" font-size="13" fill="#1A1A1A" text-anchor="middle" font-weight="bold">B</text>
<line x1="265.0" y1="85.0" x2="310.0" y2="85.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="265.0" y1="85.0" x2="246.0" y2="44.2" stroke="#1A1A1A" stroke-width="2.5"/>
<circle cx="265.0" cy="85.0" r="3" fill="#1A1A1A"/>
<path d="M 289.0,85.0 L 288.9,83.0 L 288.7,81.0 L 288.2,79.0 L 287.7,77.1 L 286.9,75.2 L 286.0,73.5 L 285.0,71.7 L 283.8,70.1 L 282.5,68.6 L 281.1,67.2 L 279.5,65.9 L 277.9,64.8 L 276.2,63.8 L 274.4,62.9 L 272.5,62.2 L 270.5,61.6 L 268.6,61.3 L 266.6,61.0 L 264.6,61.0 L 262.6,61.1 L 260.6,61.4 L 258.6,61.9 L 256.7,62.5 L 254.9,63.2" fill="none" stroke="#888888" stroke-width="2"/>
<text x="287.6" y="49.6" font-size="12" fill="#888888" text-anchor="middle" font-weight="bold">115°</text>
<text x="265.0" y="107.0" font-size="13" fill="#1A1A1A" text-anchor="middle" font-weight="bold">C</text>
</svg>`
            }
        ],

        // ------------------------------------------------------------
        // 59121 : Nommer un angle (notation a trois lettres)
        // ------------------------------------------------------------
        "59121": [
            {
                quiz: { q: `Dans la notation d'un angle à trois lettres, comme $\\widehat{BAC}$, à quoi correspond la lettre du milieu (ici $A$) ?`, a: `Au sommet de l'angle` },
                options: `Au sommet de l'angle ¤ À un point sur un côté ¤ Cela n'a pas d'importance ¤ À la mesure de l'angle`,
                explanation: `Dans la notation à trois lettres, la lettre placée au <strong>milieu</strong> désigne toujours le <strong>sommet</strong> de l'angle. Les deux autres lettres désignent chacune un point pris sur l'un des deux côtés.`
            },
            {
                quiz: { q: `<svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" style="max-width:280px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="60.0" y1="150.0" x2="251.8" y2="64.6" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="60.0" y1="150.0" x2="241.9" y2="255.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="168.8" y1="110.3" x2="162.3" y2="95.7" stroke="#1A1A1A" stroke-width="2.2"/>
<text x="178.9" y="91.0" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">Q</text>
<line x1="165.1" y1="219.9" x2="173.1" y2="206.1" stroke="#1A1A1A" stroke-width="2.2"/>
<text x="181.2" y="226.4" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">R</text>
<circle cx="60.0" cy="150.0" r="3.5" fill="#1A1A1A"/>
<text x="40.0" y="148.9" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">P</text>
</svg><p style="margin-top:8px;">Sur la figure, quel est le sommet de l'angle ?</p>`, a: `Le point P` },
                options: `Le point P ¤ Le point Q ¤ Le point R ¤ Aucun de ces points`,
                explanation: `Le sommet d'un angle est le point où se rejoignent ses deux côtés : c'est ici le point <strong>P</strong>. On peut donc noter cet angle $\\widehat{QPR}$ (la lettre du sommet, P, restant au milieu).<svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" style="max-width:280px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="60.0" y1="150.0" x2="251.8" y2="64.6" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="60.0" y1="150.0" x2="241.9" y2="255.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="168.8" y1="110.3" x2="162.3" y2="95.7" stroke="#1A1A1A" stroke-width="2.2"/>
<text x="178.9" y="91.0" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">Q</text>
<line x1="165.1" y1="219.9" x2="173.1" y2="206.1" stroke="#1A1A1A" stroke-width="2.2"/>
<text x="181.2" y="226.4" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">R</text>
<circle cx="60.0" cy="150.0" r="4.5" fill="#2F7D3C"/>
<text x="40.0" y="148.9" font-size="17" fill="#2F7D3C" text-anchor="middle" font-weight="bold">P</text>
</svg>`
            },
            {
                quiz: { q: `<svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" style="max-width:280px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="55.0" y1="150.0" x2="253.7" y2="44.4" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="55.0" y1="150.0" x2="263.6" y2="234.3" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="158.1" y1="104.2" x2="150.6" y2="90.1" stroke="#1A1A1A" stroke-width="2.2"/>
<text x="166.8" y="84.2" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">N</text>
<line x1="181.3" y1="209.7" x2="187.3" y2="194.8" stroke="#1A1A1A" stroke-width="2.2"/>
<text x="198.1" y="213.8" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">P</text>
<circle cx="55.0" cy="150.0" r="3.5" fill="#1A1A1A"/>
<text x="35.0" y="151.1" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">M</text>
</svg><p style="margin-top:8px;">Sur la figure, comment peut-on nommer correctement cet angle ?</p>`, a: `$\\widehat{NMP}$` },
                options: `$\\widehat{NMP}$ ¤ $\\widehat{MNP}$ ¤ $\\widehat{PNM}$ ¤ $\\widehat{NPM}$`,
                explanation: `Le sommet de l'angle est le point $M$ : il doit donc être placé au <strong>milieu</strong> de la notation. On écrit donc $\\widehat{NMP}$ (ou de façon équivalente $\\widehat{PMN}$).<svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" style="max-width:280px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="55.0" y1="150.0" x2="253.7" y2="44.4" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="55.0" y1="150.0" x2="263.6" y2="234.3" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="158.1" y1="104.2" x2="150.6" y2="90.1" stroke="#1A1A1A" stroke-width="2.2"/>
<text x="166.8" y="84.2" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">N</text>
<line x1="181.3" y1="209.7" x2="187.3" y2="194.8" stroke="#1A1A1A" stroke-width="2.2"/>
<text x="198.1" y="213.8" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">P</text>
<circle cx="55.0" cy="150.0" r="4.5" fill="#2F7D3C"/>
<text x="35.0" y="151.1" font-size="17" fill="#2F7D3C" text-anchor="middle" font-weight="bold">M</text>
</svg>`
            },
            {
                quiz: { q: `<svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" style="max-width:280px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="55.0" y1="150.0" x2="249.9" y2="37.5" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="55.0" y1="150.0" x2="269.0" y2="219.5" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="156.4" y1="100.7" x2="148.4" y2="86.8" stroke="#1A1A1A" stroke-width="2.2"/>
<text x="164.5" y="80.4" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">S</text>
<line x1="191.6" y1="202.8" x2="196.6" y2="187.6" stroke="#1A1A1A" stroke-width="2.2"/>
<text x="208.7" y="205.8" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">T</text>
<circle cx="55.0" cy="150.0" r="3.5" fill="#1A1A1A"/>
<text x="35.1" y="152.1" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">R</text>
</svg><p style="margin-top:8px;">Sur la figure, l'écriture $\\widehat{SRT}$ désigne-t-elle correctement cet angle ?</p>`, a: `Oui, R est bien au milieu, donc c'est le sommet` },
                options: `Oui, R est bien au milieu, donc c'est le sommet ¤ Non, il faudrait écrire $\\widehat{RST}$ ¤ Non, il faudrait écrire $\\widehat{TSR}$ ¤ Non, cette notation n'existe pas`,
                explanation: `Le sommet de l'angle sur la figure est bien le point $R$. Comme $R$ est placé au milieu dans l'écriture $\\widehat{SRT}$, cette notation est correcte.<svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" style="max-width:280px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="55.0" y1="150.0" x2="249.9" y2="37.5" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="55.0" y1="150.0" x2="269.0" y2="219.5" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="156.4" y1="100.7" x2="148.4" y2="86.8" stroke="#1A1A1A" stroke-width="2.2"/>
<text x="164.5" y="80.4" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">S</text>
<line x1="191.6" y1="202.8" x2="196.6" y2="187.6" stroke="#1A1A1A" stroke-width="2.2"/>
<text x="208.7" y="205.8" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">T</text>
<circle cx="55.0" cy="150.0" r="4.5" fill="#2F7D3C"/>
<text x="35.1" y="152.1" font-size="17" fill="#2F7D3C" text-anchor="middle" font-weight="bold">R</text>
</svg>`
            },
            {
                quiz: { q: `Peut-on nommer un angle $\\widehat{ACB}$ si son sommet est le point $A$ ?`, a: `Non, car la lettre du sommet doit être au milieu` },
                options: `Non, car la lettre du sommet doit être au milieu ¤ Oui, l'ordre des lettres n'a pas d'importance ¤ Oui, mais seulement si l'angle est droit ¤ Non, un angle ne peut jamais être nommé avec la lettre B`,
                explanation: `La lettre du sommet doit toujours être placée <strong>au milieu</strong> de la notation. Si le sommet est $A$, il faut écrire $\\widehat{BAC}$ ou $\\widehat{CAB}$, mais pas $\\widehat{ACB}$ (qui désignerait en réalité un angle de sommet $C$).`
            },
            {
                quiz: { q: `<svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" style="max-width:280px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="120.0" y1="190.0" x2="205.0" y2="42.8" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="120.0" y1="190.0" x2="217.5" y2="329.3" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="173.7" y1="113.0" x2="159.8" y2="105.0" stroke="#1A1A1A" stroke-width="2.2"/>
<text x="170.5" y="91.4" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">Y</text>
<line x1="172.0" y1="278.1" x2="185.1" y2="269.0" stroke="#1A1A1A" stroke-width="2.2"/>
<text x="183.8" y="290.8" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">Z</text>
<circle cx="120.0" cy="190.0" r="3.5" fill="#1A1A1A"/>
<text x="100.0" y="190.9" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">X</text>
</svg><p style="margin-top:8px;">Parmi ces écritures, laquelle désigne correctement l'angle de sommet $X$ ?</p>`, a: `$\\widehat{YXZ}$` },
                options: `$\\widehat{YXZ}$ ¤ $\\widehat{XYZ}$ ¤ $\\widehat{YZX}$ ¤ $\\widehat{ZYX}$`,
                explanation: `Le sommet de l'angle est le point $X$ : il doit donc apparaître au <strong>milieu</strong> de la notation. C'est le cas uniquement dans $\\widehat{YXZ}$ (l'orientation de la figure ne change rien à la règle).<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg" style="max-width:280px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="140.0" y1="160.0" x2="216.8" y2="37.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="140.0" y1="160.0" x2="233.2" y2="271.1" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="189.0" y1="96.6" x2="175.5" y2="88.1" stroke="#1A1A1A" stroke-width="2.2"/>
<text x="186.6" y="74.9" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">Y</text>
<line x1="189.8" y1="231.8" x2="202.0" y2="221.5" stroke="#1A1A1A" stroke-width="2.2"/>
<text x="202.7" y="243.3" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">Z</text>
<circle cx="140.0" cy="160.0" r="4.5" fill="#2F7D3C"/>
<text x="120.0" y="161.4" font-size="17" fill="#2F7D3C" text-anchor="middle" font-weight="bold">X</text>
</svg>`
            },
            {
                quiz: { q: `Un angle noté $\\widehat{EFG}$ a pour sommet le point...`, a: `F` },
                options: `F ¤ E ¤ G ¤ On ne peut pas savoir`,
                explanation: `La lettre du milieu correspond toujours au sommet : dans $\\widehat{EFG}$, c'est la lettre $F$ qui est au milieu, donc le sommet de l'angle est le point <strong>F</strong>.`
            },
            {
                quiz: { q: `Les écritures $\\widehat{BAC}$ et $\\widehat{CAB}$ désignent-elles le même angle ?`, a: `Oui, car A reste au milieu dans les deux cas` },
                options: `Oui, car A reste au milieu dans les deux cas ¤ Non, ce sont deux angles différents ¤ Oui, mais seulement si l'angle est aigu ¤ Non, il faudrait que B et C soient confondus`,
                explanation: `Dans les deux écritures, la lettre du sommet ($A$) reste au milieu : seul l'ordre des deux points sur les côtés change, ce qui n'a pas d'importance. $\\widehat{BAC}$ et $\\widehat{CAB}$ désignent donc <strong>le même angle</strong>.`
            },
            {
                quiz: { q: `Pourquoi utilise-t-on parfois trois lettres (plutôt qu'une seule, comme $\\widehat{A}$) pour nommer un angle ?`, a: `Pour éviter toute confusion quand plusieurs angles partagent le même sommet` },
                options: `Pour éviter toute confusion quand plusieurs angles partagent le même sommet ¤ Parce qu'un angle a toujours trois côtés ¤ Parce que la loi mathématique l'impose systématiquement ¤ Pour indiquer la mesure de l'angle`,
                explanation: `Si plusieurs angles ont le même sommet, écrire seulement $\\widehat{A}$ ne permettrait pas de savoir duquel on parle. La notation à trois lettres précise, grâce aux deux points supplémentaires, <strong>de quel angle précis il s'agit</strong>.`
            },
            {
                quiz: { q: `<svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" style="max-width:280px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="55.0" y1="150.0" x2="257.2" y2="51.4" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="55.0" y1="150.0" x2="253.7" y2="255.6" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="129.3" y1="122.7" x2="122.3" y2="108.3" stroke="#1A1A1A" stroke-width="2.2"/>
<text x="138.7" y="103.0" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">U</text>
<line x1="210.2" y1="83.2" x2="203.2" y2="68.8" stroke="#1A1A1A" stroke-width="2.2"/>
<text x="219.6" y="63.5" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">V</text>
<line x1="170.4" y1="220.4" x2="178.0" y2="206.3" stroke="#1A1A1A" stroke-width="2.2"/>
<text x="186.7" y="226.3" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">W</text>
<circle cx="55.0" cy="150.0" r="3.5" fill="#1A1A1A"/>
<text x="35.0" y="149.7" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">T</text>
</svg><p style="margin-top:8px;">Sur la figure, $T$ est le sommet. Quel point se trouve sur le <strong>même côté</strong> (la même demi-droite) que le point $U$ ?</p>`, a: `Le point V` },
                options: `Le point V ¤ Le point W ¤ Les points V et W ¤ Aucun autre point`,
                explanation: `Les points $U$ et $V$ sont tous les deux marqués sur la <strong>même demi-droite</strong> issue de $T$ : ils sont donc sur le même côté de l'angle. On pourrait nommer cet angle indifféremment $\\widehat{UTW}$ ou $\\widehat{VTW}$, car $U$ et $V$ sont sur le même côté. Le point $W$, lui, est sur l'autre côté.<svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" style="max-width:280px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="55.0" y1="150.0" x2="257.2" y2="51.4" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="55.0" y1="150.0" x2="253.7" y2="255.6" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="129.3" y1="122.7" x2="122.3" y2="108.3" stroke="#1A1A1A" stroke-width="2.2"/>
<text x="138.7" y="103.0" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">U</text>
<line x1="210.2" y1="83.2" x2="203.2" y2="68.8" stroke="#1A1A1A" stroke-width="2.2"/>
<text x="219.6" y="63.5" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">V</text>
<line x1="170.4" y1="220.4" x2="178.0" y2="206.3" stroke="#1A1A1A" stroke-width="2.2"/>
<text x="186.7" y="226.3" font-size="16" fill="#1A1A1A" text-anchor="middle" font-weight="bold">W</text>
<circle cx="55.0" cy="150.0" r="4.5" fill="#2F7D3C"/>
<text x="35.0" y="149.7" font-size="17" fill="#2F7D3C" text-anchor="middle" font-weight="bold">T</text>
</svg>`
            }
        ],

        // ------------------------------------------------------------
        // 59131 : Angles opposes par le sommet, adjacents, supplementaires
        // ------------------------------------------------------------
        "59131": [
            {
                quiz: { q: `<svg viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg" style="max-width:230px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="26.0" y1="144.2" x2="214.0" y2="75.8" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="120.0" y1="210.0" x2="120.0" y2="10.0" stroke="#1A1A1A" stroke-width="2.5"/>
<path d="M 159.5,95.6 L 158.7,93.7 L 157.8,91.7 L 156.8,89.8 L 155.8,88.0 L 154.6,86.2 L 153.3,84.4 L 152.0,82.8 L 150.6,81.2 L 149.1,79.7 L 147.5,78.2 L 145.8,76.9 L 144.1,75.6 L 142.3,74.4 L 140.5,73.3 L 138.6,72.3 L 136.6,71.4 L 134.7,70.6 L 132.6,69.9 L 130.6,69.3 L 128.5,68.9 L 126.4,68.5 L 124.3,68.2 L 122.1,68.0 L 120.0,68.0" fill="none" stroke="#2E5C8A" stroke-width="2"/>
<text x="153.3" y="62.5" font-size="15" fill="#2E5C8A" text-anchor="middle" font-weight="bold">a</text>
<path d="M 120.0,68.0 L 116.6,68.1 L 113.3,68.5 L 110.0,69.2 L 106.8,70.1 L 103.7,71.3 L 100.6,72.7 L 97.7,74.4 L 94.9,76.3 L 92.3,78.4 L 89.9,80.7 L 87.6,83.2 L 85.6,85.9 L 83.8,88.7 L 82.2,91.7 L 80.9,94.8 L 79.8,98.0 L 78.9,101.2 L 78.4,104.5 L 78.0,107.9 L 78.0,111.2 L 78.2,114.6 L 78.8,117.9 L 79.5,121.2 L 80.5,124.4" fill="none" stroke="#B5651D" stroke-width="2"/>
<text x="72.5" y="76.7" font-size="15" fill="#B5651D" text-anchor="middle" font-weight="bold">b</text>
<path d="M 80.5,124.4 L 81.3,126.3 L 82.2,128.3 L 83.2,130.2 L 84.2,132.1 L 85.4,133.8 L 86.7,135.6 L 88.0,137.2 L 89.5,138.8 L 91.0,140.3 L 92.5,141.8 L 94.2,143.1 L 95.9,144.4 L 97.7,145.6 L 99.5,146.7 L 101.4,147.7 L 103.4,148.6 L 105.3,149.4 L 107.4,150.1 L 109.4,150.7 L 111.5,151.1 L 113.6,151.5 L 115.7,151.8 L 117.9,151.9 L 120.0,152.0" fill="none" stroke="#2E5C8A" stroke-width="2"/>
<text x="86.7" y="157.5" font-size="15" fill="#2E5C8A" text-anchor="middle" font-weight="bold">a</text>
<path d="M 120.0,152.0 L 123.4,151.9 L 126.7,151.5 L 130.0,150.8 L 133.2,149.9 L 136.3,148.7 L 139.4,147.3 L 142.3,145.6 L 145.1,143.7 L 147.7,141.6 L 150.1,139.3 L 152.4,136.8 L 154.4,134.1 L 156.2,131.3 L 157.8,128.3 L 159.1,125.2 L 160.2,122.0 L 161.1,118.8 L 161.6,115.5 L 161.9,112.1 L 162.0,108.8 L 161.8,105.4 L 161.2,102.1 L 160.5,98.8 L 159.5,95.6" fill="none" stroke="#B5651D" stroke-width="2"/>
<text x="167.5" y="143.3" font-size="15" fill="#B5651D" text-anchor="middle" font-weight="bold">b</text>
<circle cx="120.0" cy="110.0" r="3" fill="#1A1A1A"/>
</svg><p style="margin-top:8px;">Sur la figure, l'angle $a$ mesure $70°$. Quelle est la mesure de l'angle qui lui est opposé par le sommet ?</p>`, a: `70°` },
                options: `70° ¤ 110° ¤ 35° ¤ 180°`,
                explanation: `Deux angles opposés par le sommet ont toujours la <strong>même mesure</strong>. L'angle opposé à $a$ mesure donc lui aussi $70°$.<svg viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg" style="max-width:230px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="26.0" y1="144.2" x2="214.0" y2="75.8" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="120.0" y1="210.0" x2="120.0" y2="10.0" stroke="#1A1A1A" stroke-width="2.5"/>
<path d="M 159.5,95.6 L 158.7,93.7 L 157.8,91.7 L 156.8,89.8 L 155.8,88.0 L 154.6,86.2 L 153.3,84.4 L 152.0,82.8 L 150.6,81.2 L 149.1,79.7 L 147.5,78.2 L 145.8,76.9 L 144.1,75.6 L 142.3,74.4 L 140.5,73.3 L 138.6,72.3 L 136.6,71.4 L 134.7,70.6 L 132.6,69.9 L 130.6,69.3 L 128.5,68.9 L 126.4,68.5 L 124.3,68.2 L 122.1,68.0 L 120.0,68.0" fill="none" stroke="#2E5C8A" stroke-width="2"/>
<text x="154.4" y="60.9" font-size="13" fill="#2E5C8A" text-anchor="middle" font-weight="bold">70°</text>
<path d="M 120.0,68.0 L 116.6,68.1 L 113.3,68.5 L 110.0,69.2 L 106.8,70.1 L 103.7,71.3 L 100.6,72.7 L 97.7,74.4 L 94.9,76.3 L 92.3,78.4 L 89.9,80.7 L 87.6,83.2 L 85.6,85.9 L 83.8,88.7 L 82.2,91.7 L 80.9,94.8 L 79.8,98.0 L 78.9,101.2 L 78.4,104.5 L 78.0,107.9 L 78.0,111.2 L 78.2,114.6 L 78.8,117.9 L 79.5,121.2 L 80.5,124.4" fill="none" stroke="#B5651D" stroke-width="2"/>
<text x="70.8" y="75.6" font-size="13" fill="#B5651D" text-anchor="middle" font-weight="bold">110°</text>
<path d="M 80.5,124.4 L 81.3,126.3 L 82.2,128.3 L 83.2,130.2 L 84.2,132.1 L 85.4,133.8 L 86.7,135.6 L 88.0,137.2 L 89.5,138.8 L 91.0,140.3 L 92.5,141.8 L 94.2,143.1 L 95.9,144.4 L 97.7,145.6 L 99.5,146.7 L 101.4,147.7 L 103.4,148.6 L 105.3,149.4 L 107.4,150.1 L 109.4,150.7 L 111.5,151.1 L 113.6,151.5 L 115.7,151.8 L 117.9,151.9 L 120.0,152.0" fill="none" stroke="#2E5C8A" stroke-width="2"/>
<text x="85.6" y="159.2" font-size="13" fill="#2E5C8A" text-anchor="middle" font-weight="bold">70°</text>
<path d="M 120.0,152.0 L 123.4,151.9 L 126.7,151.5 L 130.0,150.8 L 133.2,149.9 L 136.3,148.7 L 139.4,147.3 L 142.3,145.6 L 145.1,143.7 L 147.7,141.6 L 150.1,139.3 L 152.4,136.8 L 154.4,134.1 L 156.2,131.3 L 157.8,128.3 L 159.1,125.2 L 160.2,122.0 L 161.1,118.8 L 161.6,115.5 L 161.9,112.1 L 162.0,108.8 L 161.8,105.4 L 161.2,102.1 L 160.5,98.8 L 159.5,95.6" fill="none" stroke="#B5651D" stroke-width="2"/>
<text x="169.2" y="144.4" font-size="13" fill="#B5651D" text-anchor="middle" font-weight="bold">110°</text>
<circle cx="120.0" cy="110.0" r="3" fill="#1A1A1A"/>
</svg>`
            },
            {
                quiz: { q: `<svg viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg" style="max-width:230px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="26.0" y1="144.2" x2="214.0" y2="75.8" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="120.0" y1="210.0" x2="120.0" y2="10.0" stroke="#1A1A1A" stroke-width="2.5"/>
<path d="M 159.5,95.6 L 158.7,93.7 L 157.8,91.7 L 156.8,89.8 L 155.8,88.0 L 154.6,86.2 L 153.3,84.4 L 152.0,82.8 L 150.6,81.2 L 149.1,79.7 L 147.5,78.2 L 145.8,76.9 L 144.1,75.6 L 142.3,74.4 L 140.5,73.3 L 138.6,72.3 L 136.6,71.4 L 134.7,70.6 L 132.6,69.9 L 130.6,69.3 L 128.5,68.9 L 126.4,68.5 L 124.3,68.2 L 122.1,68.0 L 120.0,68.0" fill="none" stroke="#2E5C8A" stroke-width="2"/>
<text x="153.3" y="62.5" font-size="15" fill="#2E5C8A" text-anchor="middle" font-weight="bold">a</text>
<path d="M 120.0,68.0 L 116.6,68.1 L 113.3,68.5 L 110.0,69.2 L 106.8,70.1 L 103.7,71.3 L 100.6,72.7 L 97.7,74.4 L 94.9,76.3 L 92.3,78.4 L 89.9,80.7 L 87.6,83.2 L 85.6,85.9 L 83.8,88.7 L 82.2,91.7 L 80.9,94.8 L 79.8,98.0 L 78.9,101.2 L 78.4,104.5 L 78.0,107.9 L 78.0,111.2 L 78.2,114.6 L 78.8,117.9 L 79.5,121.2 L 80.5,124.4" fill="none" stroke="#B5651D" stroke-width="2"/>
<text x="72.5" y="76.7" font-size="15" fill="#B5651D" text-anchor="middle" font-weight="bold">b</text>
<path d="M 80.5,124.4 L 81.3,126.3 L 82.2,128.3 L 83.2,130.2 L 84.2,132.1 L 85.4,133.8 L 86.7,135.6 L 88.0,137.2 L 89.5,138.8 L 91.0,140.3 L 92.5,141.8 L 94.2,143.1 L 95.9,144.4 L 97.7,145.6 L 99.5,146.7 L 101.4,147.7 L 103.4,148.6 L 105.3,149.4 L 107.4,150.1 L 109.4,150.7 L 111.5,151.1 L 113.6,151.5 L 115.7,151.8 L 117.9,151.9 L 120.0,152.0" fill="none" stroke="#2E5C8A" stroke-width="2"/>
<text x="86.7" y="157.5" font-size="15" fill="#2E5C8A" text-anchor="middle" font-weight="bold">a</text>
<path d="M 120.0,152.0 L 123.4,151.9 L 126.7,151.5 L 130.0,150.8 L 133.2,149.9 L 136.3,148.7 L 139.4,147.3 L 142.3,145.6 L 145.1,143.7 L 147.7,141.6 L 150.1,139.3 L 152.4,136.8 L 154.4,134.1 L 156.2,131.3 L 157.8,128.3 L 159.1,125.2 L 160.2,122.0 L 161.1,118.8 L 161.6,115.5 L 161.9,112.1 L 162.0,108.8 L 161.8,105.4 L 161.2,102.1 L 160.5,98.8 L 159.5,95.6" fill="none" stroke="#B5651D" stroke-width="2"/>
<text x="167.5" y="143.3" font-size="15" fill="#B5651D" text-anchor="middle" font-weight="bold">b</text>
<circle cx="120.0" cy="110.0" r="3" fill="#1A1A1A"/>
</svg><p style="margin-top:8px;">Sur la même figure, sachant que $a = 70°$, quelle est la mesure de l'angle $b$, adjacent à $a$ ?</p>`, a: `110°` },
                options: `110° ¤ 70° ¤ 90° ¤ 55°`,
                explanation: `$a$ et $b$ sont adjacents et se complètent pour former un angle plat (ils sont de part et d'autre d'une même droite) : $a + b = 180°$. Donc $b = 180° - 70° = 110°$.<svg viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg" style="max-width:230px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="26.0" y1="144.2" x2="214.0" y2="75.8" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="120.0" y1="210.0" x2="120.0" y2="10.0" stroke="#1A1A1A" stroke-width="2.5"/>
<path d="M 159.5,95.6 L 158.7,93.7 L 157.8,91.7 L 156.8,89.8 L 155.8,88.0 L 154.6,86.2 L 153.3,84.4 L 152.0,82.8 L 150.6,81.2 L 149.1,79.7 L 147.5,78.2 L 145.8,76.9 L 144.1,75.6 L 142.3,74.4 L 140.5,73.3 L 138.6,72.3 L 136.6,71.4 L 134.7,70.6 L 132.6,69.9 L 130.6,69.3 L 128.5,68.9 L 126.4,68.5 L 124.3,68.2 L 122.1,68.0 L 120.0,68.0" fill="none" stroke="#2E5C8A" stroke-width="2"/>
<text x="154.4" y="60.9" font-size="13" fill="#2E5C8A" text-anchor="middle" font-weight="bold">70°</text>
<path d="M 120.0,68.0 L 116.6,68.1 L 113.3,68.5 L 110.0,69.2 L 106.8,70.1 L 103.7,71.3 L 100.6,72.7 L 97.7,74.4 L 94.9,76.3 L 92.3,78.4 L 89.9,80.7 L 87.6,83.2 L 85.6,85.9 L 83.8,88.7 L 82.2,91.7 L 80.9,94.8 L 79.8,98.0 L 78.9,101.2 L 78.4,104.5 L 78.0,107.9 L 78.0,111.2 L 78.2,114.6 L 78.8,117.9 L 79.5,121.2 L 80.5,124.4" fill="none" stroke="#B5651D" stroke-width="2"/>
<text x="70.8" y="75.6" font-size="13" fill="#B5651D" text-anchor="middle" font-weight="bold">110°</text>
<path d="M 80.5,124.4 L 81.3,126.3 L 82.2,128.3 L 83.2,130.2 L 84.2,132.1 L 85.4,133.8 L 86.7,135.6 L 88.0,137.2 L 89.5,138.8 L 91.0,140.3 L 92.5,141.8 L 94.2,143.1 L 95.9,144.4 L 97.7,145.6 L 99.5,146.7 L 101.4,147.7 L 103.4,148.6 L 105.3,149.4 L 107.4,150.1 L 109.4,150.7 L 111.5,151.1 L 113.6,151.5 L 115.7,151.8 L 117.9,151.9 L 120.0,152.0" fill="none" stroke="#2E5C8A" stroke-width="2"/>
<text x="85.6" y="159.2" font-size="13" fill="#2E5C8A" text-anchor="middle" font-weight="bold">70°</text>
<path d="M 120.0,152.0 L 123.4,151.9 L 126.7,151.5 L 130.0,150.8 L 133.2,149.9 L 136.3,148.7 L 139.4,147.3 L 142.3,145.6 L 145.1,143.7 L 147.7,141.6 L 150.1,139.3 L 152.4,136.8 L 154.4,134.1 L 156.2,131.3 L 157.8,128.3 L 159.1,125.2 L 160.2,122.0 L 161.1,118.8 L 161.6,115.5 L 161.9,112.1 L 162.0,108.8 L 161.8,105.4 L 161.2,102.1 L 160.5,98.8 L 159.5,95.6" fill="none" stroke="#B5651D" stroke-width="2"/>
<text x="169.2" y="144.4" font-size="13" fill="#B5651D" text-anchor="middle" font-weight="bold">110°</text>
<circle cx="120.0" cy="110.0" r="3" fill="#1A1A1A"/>
</svg>`
            },
            {
                quiz: { q: `Deux angles opposés par le sommet ont toujours...`, a: `la même mesure` },
                options: `la même mesure ¤ une somme de 180° ¤ une somme de 90° ¤ des mesures différentes`,
                explanation: `Deux angles opposés par le sommet sont formés par deux droites sécantes, chacun "en face" de l'autre : ils ont toujours <strong>la même mesure</strong>.`
            },
            {
                quiz: { q: `Deux angles adjacents ont en commun...`, a: `le sommet et un côté` },
                options: `le sommet et un côté ¤ seulement le sommet ¤ seulement un côté ¤ aucun élément commun`,
                explanation: `Deux angles adjacents partagent <strong>le même sommet et un côté commun</strong>, et sont situés de part et d'autre de ce côté commun.`
            },
            {
                quiz: { q: `Deux angles supplémentaires ont une somme de mesures égale à...`, a: `180°` },
                options: `180° ¤ 90° ¤ 360° ¤ 100°`,
                explanation: `Par définition, deux angles sont <strong>supplémentaires</strong> lorsque la somme de leurs mesures est égale à <strong>180°</strong>.`
            },
            {
                quiz: { q: `<svg viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg" style="max-width:230px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="23.4" y1="84.1" x2="216.6" y2="135.9" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="154.2" y1="204.0" x2="85.8" y2="16.0" stroke="#1A1A1A" stroke-width="2.5"/>
<path d="M 160.6,120.9 L 161.4,117.1 L 161.9,113.4 L 162.0,109.5 L 161.8,105.7 L 161.2,102.0 L 160.3,98.2 L 159.1,94.6 L 157.5,91.2 L 155.7,87.8 L 153.5,84.7 L 151.1,81.7 L 148.4,79.0 L 145.4,76.6 L 142.3,74.4 L 139.0,72.5 L 135.5,71.0 L 131.9,69.7 L 128.2,68.8 L 124.4,68.2 L 120.6,68.0 L 116.8,68.1 L 113.0,68.6 L 109.3,69.4 L 105.6,70.5" fill="none" stroke="#2E5C8A" stroke-width="2"/>
<text x="159.2" y="67.2" font-size="15" fill="#2E5C8A" text-anchor="middle" font-weight="bold">a</text>
<path d="M 105.6,70.5 L 104.1,71.1 L 102.5,71.8 L 101.0,72.5 L 99.5,73.3 L 98.1,74.2 L 96.7,75.1 L 95.3,76.0 L 94.0,77.0 L 92.7,78.1 L 91.4,79.2 L 90.2,80.4 L 89.0,81.6 L 87.9,82.9 L 86.9,84.2 L 85.9,85.5 L 84.9,86.9 L 84.0,88.3 L 83.2,89.8 L 82.4,91.3 L 81.7,92.8 L 81.0,94.3 L 80.4,95.9 L 79.9,97.5 L 79.4,99.1" fill="none" stroke="#B5651D" stroke-width="2"/>
<text x="77.2" y="70.8" font-size="15" fill="#B5651D" text-anchor="middle" font-weight="bold">b</text>
<path d="M 79.4,99.1 L 78.6,102.9 L 78.1,106.6 L 78.0,110.5 L 78.2,114.3 L 78.8,118.0 L 79.7,121.8 L 80.9,125.4 L 82.5,128.8 L 84.3,132.2 L 86.5,135.3 L 88.9,138.3 L 91.6,141.0 L 94.5,143.4 L 97.7,145.6 L 101.0,147.5 L 104.5,149.0 L 108.1,150.3 L 111.8,151.2 L 115.6,151.8 L 119.4,152.0 L 123.2,151.9 L 127.0,151.4 L 130.7,150.6 L 134.4,149.5" fill="none" stroke="#2E5C8A" stroke-width="2"/>
<text x="80.8" y="152.8" font-size="15" fill="#2E5C8A" text-anchor="middle" font-weight="bold">a</text>
<path d="M 134.4,149.5 L 135.9,148.9 L 137.5,148.2 L 139.0,147.5 L 140.5,146.7 L 141.9,145.8 L 143.3,144.9 L 144.7,144.0 L 146.1,142.9 L 147.3,141.9 L 148.6,140.8 L 149.8,139.6 L 151.0,138.4 L 152.1,137.1 L 153.1,135.8 L 154.1,134.5 L 155.1,133.1 L 156.0,131.7 L 156.8,130.2 L 157.6,128.7 L 158.3,127.2 L 159.0,125.7 L 159.6,124.1 L 160.1,122.5 L 160.6,120.9" fill="none" stroke="#B5651D" stroke-width="2"/>
<text x="162.8" y="149.2" font-size="15" fill="#B5651D" text-anchor="middle" font-weight="bold">b</text>
<circle cx="120.0" cy="110.0" r="3" fill="#1A1A1A"/>
</svg><p style="margin-top:8px;">Sur la figure, l'angle $a$ mesure $125°$. Quelle est la mesure de l'angle qui lui est opposé par le sommet ?</p>`, a: `125°` },
                options: `125° ¤ 55° ¤ 180° ¤ 90°`,
                explanation: `Deux angles opposés par le sommet ont la même mesure : l'angle opposé à $a$ mesure donc lui aussi $125°$.<svg viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg" style="max-width:230px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="23.4" y1="84.1" x2="216.6" y2="135.9" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="154.2" y1="204.0" x2="85.8" y2="16.0" stroke="#1A1A1A" stroke-width="2.5"/>
<path d="M 160.6,120.9 L 161.4,117.1 L 161.9,113.4 L 162.0,109.5 L 161.8,105.7 L 161.2,102.0 L 160.3,98.2 L 159.1,94.6 L 157.5,91.2 L 155.7,87.8 L 153.5,84.7 L 151.1,81.7 L 148.4,79.0 L 145.4,76.6 L 142.3,74.4 L 139.0,72.5 L 135.5,71.0 L 131.9,69.7 L 128.2,68.8 L 124.4,68.2 L 120.6,68.0 L 116.8,68.1 L 113.0,68.6 L 109.3,69.4 L 105.6,70.5" fill="none" stroke="#2E5C8A" stroke-width="2"/>
<text x="160.5" y="65.8" font-size="13" fill="#2E5C8A" text-anchor="middle" font-weight="bold">125°</text>
<path d="M 105.6,70.5 L 104.1,71.1 L 102.5,71.8 L 101.0,72.5 L 99.5,73.3 L 98.1,74.2 L 96.7,75.1 L 95.3,76.0 L 94.0,77.0 L 92.7,78.1 L 91.4,79.2 L 90.2,80.4 L 89.0,81.6 L 87.9,82.9 L 86.9,84.2 L 85.9,85.5 L 84.9,86.9 L 84.0,88.3 L 83.2,89.8 L 82.4,91.3 L 81.7,92.8 L 81.0,94.3 L 80.4,95.9 L 79.9,97.5 L 79.4,99.1" fill="none" stroke="#B5651D" stroke-width="2"/>
<text x="75.8" y="69.5" font-size="13" fill="#B5651D" text-anchor="middle" font-weight="bold">55°</text>
<path d="M 79.4,99.1 L 78.6,102.9 L 78.1,106.6 L 78.0,110.5 L 78.2,114.3 L 78.8,118.0 L 79.7,121.8 L 80.9,125.4 L 82.5,128.8 L 84.3,132.2 L 86.5,135.3 L 88.9,138.3 L 91.6,141.0 L 94.5,143.4 L 97.7,145.6 L 101.0,147.5 L 104.5,149.0 L 108.1,150.3 L 111.8,151.2 L 115.6,151.8 L 119.4,152.0 L 123.2,151.9 L 127.0,151.4 L 130.7,150.6 L 134.4,149.5" fill="none" stroke="#2E5C8A" stroke-width="2"/>
<text x="79.5" y="154.2" font-size="13" fill="#2E5C8A" text-anchor="middle" font-weight="bold">125°</text>
<path d="M 134.4,149.5 L 135.9,148.9 L 137.5,148.2 L 139.0,147.5 L 140.5,146.7 L 141.9,145.8 L 143.3,144.9 L 144.7,144.0 L 146.1,142.9 L 147.3,141.9 L 148.6,140.8 L 149.8,139.6 L 151.0,138.4 L 152.1,137.1 L 153.1,135.8 L 154.1,134.5 L 155.1,133.1 L 156.0,131.7 L 156.8,130.2 L 157.6,128.7 L 158.3,127.2 L 159.0,125.7 L 159.6,124.1 L 160.1,122.5 L 160.6,120.9" fill="none" stroke="#B5651D" stroke-width="2"/>
<text x="164.2" y="150.5" font-size="13" fill="#B5651D" text-anchor="middle" font-weight="bold">55°</text>
<circle cx="120.0" cy="110.0" r="3" fill="#1A1A1A"/>
</svg>`
            },
            {
                quiz: { q: `<svg viewBox="0 0 240 140" xmlns="http://www.w3.org/2000/svg" style="max-width:230px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="25.9" y1="108.2" x2="214.1" y2="81.8" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="120.0" y1="95.0" x2="173.1" y2="16.2" stroke="#1A1A1A" stroke-width="2.5"/>
<path d="M 159.6,89.4 L 159.4,88.0 L 159.1,86.7 L 158.8,85.3 L 158.4,84.0 L 158.0,82.6 L 157.6,81.3 L 157.1,80.0 L 156.5,78.7 L 155.9,77.5 L 155.3,76.2 L 154.6,75.0 L 153.9,73.8 L 153.2,72.6 L 152.4,71.5 L 151.5,70.4 L 150.6,69.3 L 149.7,68.2 L 148.8,67.2 L 147.8,66.2 L 146.8,65.3 L 145.7,64.4 L 144.6,63.5 L 143.5,62.6 L 142.4,61.8" fill="none" stroke="#2E5C8A" stroke-width="2"/>
<text x="167.5" y="65.3" font-size="15" fill="#2E5C8A" text-anchor="middle" font-weight="bold">a</text>
<path d="M 142.4,61.8 L 139.1,59.9 L 135.6,58.2 L 132.0,56.9 L 128.3,55.9 L 124.5,55.3 L 120.7,55.0 L 116.9,55.1 L 113.0,55.6 L 109.3,56.5 L 105.7,57.7 L 102.2,59.2 L 98.8,61.1 L 95.7,63.3 L 92.7,65.8 L 90.0,68.5 L 87.6,71.5 L 85.5,74.7 L 83.8,78.1 L 82.3,81.7 L 81.2,85.3 L 80.4,89.1 L 80.0,92.9 L 80.0,96.8 L 80.4,100.6" fill="none" stroke="#B5651D" stroke-width="2"/>
<text x="90.3" y="47.5" font-size="15" fill="#B5651D" text-anchor="middle" font-weight="bold">b</text>
<circle cx="120.0" cy="95.0" r="3" fill="#1A1A1A"/>
</svg><p style="margin-top:8px;">Les angles $a$ et $b$ sont adjacents et forment à eux deux un angle plat. Sachant que $a = 48°$, quelle est la mesure de $b$ ?</p>`, a: `132°` },
                options: `132° ¤ 48° ¤ 90° ¤ 180°`,
                explanation: `$a$ et $b$ sont supplémentaires car ils forment ensemble un angle plat : $a + b = 180°$, donc $b = 180° - 48° = 132°$.<svg viewBox="0 0 240 140" xmlns="http://www.w3.org/2000/svg" style="max-width:230px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="25.9" y1="108.2" x2="214.1" y2="81.8" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="120.0" y1="95.0" x2="173.1" y2="16.2" stroke="#1A1A1A" stroke-width="2.5"/>
<path d="M 159.6,89.4 L 159.4,88.0 L 159.1,86.7 L 158.8,85.3 L 158.4,84.0 L 158.0,82.6 L 157.6,81.3 L 157.1,80.0 L 156.5,78.7 L 155.9,77.5 L 155.3,76.2 L 154.6,75.0 L 153.9,73.8 L 153.2,72.6 L 152.4,71.5 L 151.5,70.4 L 150.6,69.3 L 149.7,68.2 L 148.8,67.2 L 147.8,66.2 L 146.8,65.3 L 145.7,64.4 L 144.6,63.5 L 143.5,62.6 L 142.4,61.8" fill="none" stroke="#2E5C8A" stroke-width="2"/>
<text x="169.2" y="64.3" font-size="13" fill="#2E5C8A" text-anchor="middle" font-weight="bold">48°</text>
<path d="M 142.4,61.8 L 139.1,59.9 L 135.6,58.2 L 132.0,56.9 L 128.3,55.9 L 124.5,55.3 L 120.7,55.0 L 116.9,55.1 L 113.0,55.6 L 109.3,56.5 L 105.7,57.7 L 102.2,59.2 L 98.8,61.1 L 95.7,63.3 L 92.7,65.8 L 90.0,68.5 L 87.6,71.5 L 85.5,74.7 L 83.8,78.1 L 82.3,81.7 L 81.2,85.3 L 80.4,89.1 L 80.0,92.9 L 80.0,96.8 L 80.4,100.6" fill="none" stroke="#B5651D" stroke-width="2"/>
<text x="89.3" y="45.8" font-size="13" fill="#B5651D" text-anchor="middle" font-weight="bold">132°</text>
<circle cx="120.0" cy="95.0" r="3" fill="#1A1A1A"/>
</svg>`
            },
            {
                quiz: { q: `<svg viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg" style="max-width:230px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="21.5" y1="127.4" x2="218.5" y2="92.6" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="77.7" y1="200.6" x2="162.3" y2="19.4" stroke="#1A1A1A" stroke-width="2.5"/>
<path d="M 161.4,102.7 L 161.0,101.1 L 160.7,99.4 L 160.2,97.8 L 159.7,96.2 L 159.1,94.6 L 158.4,93.1 L 157.7,91.6 L 157.0,90.1 L 156.1,88.6 L 155.3,87.2 L 154.3,85.8 L 153.3,84.4 L 152.3,83.1 L 151.2,81.8 L 150.0,80.6 L 148.8,79.5 L 147.6,78.3 L 146.3,77.2 L 145.0,76.2 L 143.6,75.2 L 142.2,74.3 L 140.7,73.5 L 139.3,72.7 L 137.8,71.9" fill="none" stroke="#2E5C8A" stroke-width="2"/>
<text x="166.0" y="74.7" font-size="15" fill="#2E5C8A" text-anchor="middle" font-weight="bold">a</text>
<path d="M 78.6,117.3 L 79.0,118.9 L 79.3,120.6 L 79.8,122.2 L 80.3,123.8 L 80.9,125.4 L 81.6,126.9 L 82.3,128.4 L 83.0,129.9 L 83.9,131.4 L 84.7,132.8 L 85.7,134.2 L 86.7,135.6 L 87.7,136.9 L 88.8,138.2 L 90.0,139.4 L 91.2,140.6 L 92.4,141.7 L 93.7,142.8 L 95.0,143.8 L 96.4,144.8 L 97.8,145.7 L 99.3,146.5 L 100.7,147.3 L 102.2,148.1" fill="none" stroke="#2E5C8A" stroke-width="2"/>
<text x="74.0" y="145.3" font-size="15" fill="#2E5C8A" text-anchor="middle" font-weight="bold">a</text>
<circle cx="120.0" cy="110.0" r="3" fill="#1A1A1A"/>
</svg><p style="margin-top:8px;">Sur la figure, les deux angles marqués $a$ (en bleu) sont-ils...</p>`, a: `opposés par le sommet` },
                options: `opposés par le sommet ¤ adjacents ¤ supplémentaires ¤ aucune de ces relations`,
                explanation: `Les deux angles marqués $a$ partagent le même sommet mais n'ont aucun côté commun : ils sont situés "en face" l'un de l'autre. Ce sont des angles <strong>opposés par le sommet</strong> (ils ont d'ailleurs la même mesure).`
            },
            {
                quiz: { q: `<svg viewBox="0 0 240 140" xmlns="http://www.w3.org/2000/svg" style="max-width:230px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="25.4" y1="86.7" x2="214.6" y2="103.3" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="120.0" y1="95.0" x2="207.4" y2="57.9" stroke="#1A1A1A" stroke-width="2.5"/>
<path d="M 159.8,98.5 L 159.9,97.7 L 160.0,96.9 L 160.0,96.0 L 160.0,95.2 L 160.0,94.4 L 160.0,93.6 L 159.9,92.8 L 159.9,92.0 L 159.8,91.2 L 159.7,90.4 L 159.6,89.5 L 159.5,88.7 L 159.4,87.9 L 159.2,87.1 L 159.1,86.3 L 158.9,85.5 L 158.7,84.8 L 158.4,84.0 L 158.2,83.2 L 158.0,82.4 L 157.7,81.7 L 157.4,80.9 L 157.1,80.1 L 156.8,79.4" fill="none" stroke="#2E5C8A" stroke-width="2"/>
<text x="175.3" y="86.2" font-size="15" fill="#2E5C8A" text-anchor="middle" font-weight="bold">a</text>
<path d="M 156.8,79.4 L 154.9,75.4 L 152.5,71.7 L 149.7,68.2 L 146.6,65.1 L 143.1,62.4 L 139.4,60.0 L 135.4,58.1 L 131.2,56.6 L 127.0,55.6 L 122.6,55.1 L 118.1,55.0 L 113.7,55.5 L 109.4,56.4 L 105.2,57.8 L 101.2,59.7 L 97.4,62.0 L 93.9,64.7 L 90.8,67.7 L 87.9,71.1 L 85.5,74.8 L 83.5,78.7 L 81.9,82.9 L 80.8,87.1 L 80.2,91.5" fill="none" stroke="#B5651D" stroke-width="2"/>
<text x="111.2" y="39.7" font-size="15" fill="#B5651D" text-anchor="middle" font-weight="bold">b</text>
<circle cx="120.0" cy="95.0" r="3" fill="#1A1A1A"/>
</svg><p style="margin-top:8px;">Les angles $a$ et $b$ sont adjacents et forment à eux deux un angle plat. Sachant que $b = 152°$, quelle est la mesure de $a$ ?</p>`, a: `28°` },
                options: `28° ¤ 152° ¤ 76° ¤ 180°`,
                explanation: `$a$ et $b$ sont supplémentaires : $a + b = 180°$, donc $a = 180° - 152° = 28°$.<svg viewBox="0 0 240 140" xmlns="http://www.w3.org/2000/svg" style="max-width:230px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="25.4" y1="86.7" x2="214.6" y2="103.3" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="120.0" y1="95.0" x2="207.4" y2="57.9" stroke="#1A1A1A" stroke-width="2.5"/>
<path d="M 159.8,98.5 L 159.9,97.7 L 160.0,96.9 L 160.0,96.0 L 160.0,95.2 L 160.0,94.4 L 160.0,93.6 L 159.9,92.8 L 159.9,92.0 L 159.8,91.2 L 159.7,90.4 L 159.6,89.5 L 159.5,88.7 L 159.4,87.9 L 159.2,87.1 L 159.1,86.3 L 158.9,85.5 L 158.7,84.8 L 158.4,84.0 L 158.2,83.2 L 158.0,82.4 L 157.7,81.7 L 157.4,80.9 L 157.1,80.1 L 156.8,79.4" fill="none" stroke="#2E5C8A" stroke-width="2"/>
<text x="177.3" y="85.9" font-size="13" fill="#2E5C8A" text-anchor="middle" font-weight="bold">28°</text>
<path d="M 156.8,79.4 L 154.9,75.4 L 152.5,71.7 L 149.7,68.2 L 146.6,65.1 L 143.1,62.4 L 139.4,60.0 L 135.4,58.1 L 131.2,56.6 L 127.0,55.6 L 122.6,55.1 L 118.1,55.0 L 113.7,55.5 L 109.4,56.4 L 105.2,57.8 L 101.2,59.7 L 97.4,62.0 L 93.9,64.7 L 90.8,67.7 L 87.9,71.1 L 85.5,74.8 L 83.5,78.7 L 81.9,82.9 L 80.8,87.1 L 80.2,91.5" fill="none" stroke="#B5651D" stroke-width="2"/>
<text x="110.9" y="37.7" font-size="13" fill="#B5651D" text-anchor="middle" font-weight="bold">152°</text>
<circle cx="120.0" cy="95.0" r="3" fill="#1A1A1A"/>
</svg>`
            },
            {
                quiz: { q: `<svg viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg" style="max-width:230px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="21.0" y1="123.9" x2="219.0" y2="96.1" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="87.4" y1="204.6" x2="152.6" y2="15.4" stroke="#1A1A1A" stroke-width="2.5"/>
<path d="M 161.6,104.2 L 161.3,102.2 L 160.9,100.4 L 160.4,98.5 L 159.8,96.7 L 159.2,94.9 L 158.4,93.1 L 157.6,91.3 L 156.7,89.6 L 155.8,88.0 L 154.7,86.4 L 153.6,84.8 L 152.4,83.3 L 151.2,81.8 L 149.8,80.4 L 148.4,79.1 L 147.0,77.8 L 145.5,76.6 L 143.9,75.5 L 142.3,74.4 L 140.7,73.4 L 139.0,72.5 L 137.2,71.7 L 135.5,71.0 L 133.7,70.3" fill="none" stroke="#2E5C8A" stroke-width="2"/>
<text x="164.8" y="73.1" font-size="15" fill="#2E5C8A" text-anchor="middle" font-weight="bold">a</text>
<path d="M 133.7,70.3 L 130.2,69.3 L 126.8,68.5 L 123.2,68.1 L 119.6,68.0 L 116.1,68.2 L 112.5,68.7 L 109.0,69.5 L 105.6,70.5 L 102.3,71.9 L 99.2,73.5 L 96.1,75.4 L 93.3,77.6 L 90.6,80.0 L 88.2,82.6 L 86.0,85.4 L 84.0,88.4 L 82.3,91.5 L 80.8,94.8 L 79.7,98.2 L 78.8,101.6 L 78.3,105.2 L 78.0,108.7 L 78.1,112.3 L 78.4,115.8" fill="none" stroke="#B5651D" stroke-width="2"/>
<text x="83.1" y="65.2" font-size="15" fill="#B5651D" text-anchor="middle" font-weight="bold">b</text>
<path d="M 78.4,115.8 L 78.7,117.8 L 79.1,119.6 L 79.6,121.5 L 80.2,123.3 L 80.8,125.1 L 81.6,126.9 L 82.4,128.7 L 83.3,130.4 L 84.2,132.0 L 85.3,133.6 L 86.4,135.2 L 87.6,136.7 L 88.8,138.2 L 90.2,139.6 L 91.6,140.9 L 93.0,142.2 L 94.5,143.4 L 96.1,144.5 L 97.7,145.6 L 99.3,146.6 L 101.0,147.5 L 102.8,148.3 L 104.5,149.1 L 106.3,149.7" fill="none" stroke="#2E5C8A" stroke-width="2"/>
<text x="75.2" y="146.9" font-size="15" fill="#2E5C8A" text-anchor="middle" font-weight="bold">a</text>
<path d="M 106.3,149.7 L 109.8,150.7 L 113.2,151.4 L 116.8,151.9 L 120.4,152.0 L 123.9,151.8 L 127.5,151.3 L 131.0,150.5 L 134.4,149.5 L 137.7,148.1 L 140.8,146.5 L 143.9,144.6 L 146.7,142.4 L 149.4,140.0 L 151.8,137.4 L 154.0,134.6 L 156.0,131.6 L 157.7,128.5 L 159.2,125.2 L 160.3,121.8 L 161.2,118.4 L 161.7,114.8 L 162.0,111.3 L 161.9,107.7 L 161.6,104.2" fill="none" stroke="#B5651D" stroke-width="2"/>
<text x="156.9" y="154.8" font-size="15" fill="#B5651D" text-anchor="middle" font-weight="bold">b</text>
<circle cx="120.0" cy="110.0" r="3" fill="#1A1A1A"/>
</svg><p style="margin-top:8px;">Sur la figure, l'angle bleu $a$ mesure $63°$. Quelle est la mesure de l'angle orange $b$, adjacent à $a$ ?</p>`, a: `117°` },
                options: `117° ¤ 63° ¤ 27° ¤ 180°`,
                explanation: `$a$ et $b$ sont adjacents et supplémentaires (ils forment ensemble un angle plat) : $b = 180° - 63° = 117°$.<svg viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg" style="max-width:230px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="21.0" y1="123.9" x2="219.0" y2="96.1" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="87.4" y1="204.6" x2="152.6" y2="15.4" stroke="#1A1A1A" stroke-width="2.5"/>
<path d="M 161.6,104.2 L 161.3,102.2 L 160.9,100.4 L 160.4,98.5 L 159.8,96.7 L 159.2,94.9 L 158.4,93.1 L 157.6,91.3 L 156.7,89.6 L 155.8,88.0 L 154.7,86.4 L 153.6,84.8 L 152.4,83.3 L 151.2,81.8 L 149.8,80.4 L 148.4,79.1 L 147.0,77.8 L 145.5,76.6 L 143.9,75.5 L 142.3,74.4 L 140.7,73.4 L 139.0,72.5 L 137.2,71.7 L 135.5,71.0 L 133.7,70.3" fill="none" stroke="#2E5C8A" stroke-width="2"/>
<text x="166.3" y="71.8" font-size="13" fill="#2E5C8A" text-anchor="middle" font-weight="bold">63°</text>
<path d="M 133.7,70.3 L 130.2,69.3 L 126.8,68.5 L 123.2,68.1 L 119.6,68.0 L 116.1,68.2 L 112.5,68.7 L 109.0,69.5 L 105.6,70.5 L 102.3,71.9 L 99.2,73.5 L 96.1,75.4 L 93.3,77.6 L 90.6,80.0 L 88.2,82.6 L 86.0,85.4 L 84.0,88.4 L 82.3,91.5 L 80.8,94.8 L 79.7,98.2 L 78.8,101.6 L 78.3,105.2 L 78.0,108.7 L 78.1,112.3 L 78.4,115.8" fill="none" stroke="#B5651D" stroke-width="2"/>
<text x="81.8" y="63.7" font-size="13" fill="#B5651D" text-anchor="middle" font-weight="bold">117°</text>
<path d="M 78.4,115.8 L 78.7,117.8 L 79.1,119.6 L 79.6,121.5 L 80.2,123.3 L 80.8,125.1 L 81.6,126.9 L 82.4,128.7 L 83.3,130.4 L 84.2,132.0 L 85.3,133.6 L 86.4,135.2 L 87.6,136.7 L 88.8,138.2 L 90.2,139.6 L 91.6,140.9 L 93.0,142.2 L 94.5,143.4 L 96.1,144.5 L 97.7,145.6 L 99.3,146.6 L 101.0,147.5 L 102.8,148.3 L 104.5,149.1 L 106.3,149.7" fill="none" stroke="#2E5C8A" stroke-width="2"/>
<text x="73.7" y="148.2" font-size="13" fill="#2E5C8A" text-anchor="middle" font-weight="bold">63°</text>
<path d="M 106.3,149.7 L 109.8,150.7 L 113.2,151.4 L 116.8,151.9 L 120.4,152.0 L 123.9,151.8 L 127.5,151.3 L 131.0,150.5 L 134.4,149.5 L 137.7,148.1 L 140.8,146.5 L 143.9,144.6 L 146.7,142.4 L 149.4,140.0 L 151.8,137.4 L 154.0,134.6 L 156.0,131.6 L 157.7,128.5 L 159.2,125.2 L 160.3,121.8 L 161.2,118.4 L 161.7,114.8 L 162.0,111.3 L 161.9,107.7 L 161.6,104.2" fill="none" stroke="#B5651D" stroke-width="2"/>
<text x="158.2" y="156.3" font-size="13" fill="#B5651D" text-anchor="middle" font-weight="bold">117°</text>
<circle cx="120.0" cy="110.0" r="3" fill="#1A1A1A"/>
</svg>`
            }
        ],

        // ------------------------------------------------------------
        // 59141 : La bissectrice d'un angle (definition + methodes de construction)
        // ------------------------------------------------------------
        "59141": [
            {
                quiz: { q: `La bissectrice d'un angle est...`, a: `la demi-droite qui partage l'angle en deux angles de même mesure` },
                options: `la demi-droite qui partage l'angle en deux angles de même mesure ¤ la droite perpendiculaire à l'un des côtés ¤ le segment qui relie les deux côtés ¤ la demi-droite qui prolonge un des côtés`,
                explanation: `Par définition, la <strong>bissectrice</strong> d'un angle est la demi-droite, issue du sommet, qui partage cet angle en deux angles de même mesure.`
            },
            {
                quiz: { q: `<svg viewBox="0 0 260 220" xmlns="http://www.w3.org/2000/svg" style="max-width:230px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="120.0" y1="195.0" x2="228.1" y2="155.7" stroke="#2E5C8A" stroke-width="2.5"/>
<line x1="120.0" y1="195.0" x2="100.0" y2="81.8" stroke="#2E5C8A" stroke-width="2.5"/>
<line x1="120.0" y1="195.0" x2="177.5" y2="95.4" stroke="#B5651D" stroke-width="2.5" stroke-dasharray="6,4"/>
<path d="M 161.3,179.9 L 160.9,178.8 L 160.4,177.6 L 159.9,176.4 L 159.3,175.2 L 158.7,174.1 L 158.1,173.0 L 157.4,171.9 L 156.8,170.8 L 156.0,169.8 L 155.3,168.7 L 154.5,167.7 L 153.7,166.7 L 152.9,165.8 L 152.0,164.8 L 151.1,163.9 L 150.2,163.0 L 149.2,162.1 L 148.3,161.3 L 147.3,160.5 L 146.3,159.7 L 145.2,159.0 L 144.2,158.2 L 143.1,157.6 L 142.0,156.9" fill="none" stroke="#2F7D3C" stroke-width="1.6"/>
<path d="M 142.0,156.9 L 140.9,156.3 L 139.8,155.7 L 138.6,155.1 L 137.4,154.6 L 136.2,154.1 L 135.1,153.7 L 133.8,153.2 L 132.6,152.8 L 131.4,152.5 L 130.2,152.2 L 128.9,151.9 L 127.6,151.7 L 126.4,151.5 L 125.1,151.3 L 123.8,151.2 L 122.6,151.1 L 121.3,151.0 L 120.0,151.0 L 118.7,151.0 L 117.4,151.1 L 116.2,151.2 L 114.9,151.3 L 113.6,151.5 L 112.4,151.7" fill="none" stroke="#2F7D3C" stroke-width="1.6"/>
<line x1="149.9" y1="169.9" x2="157.5" y2="163.5" stroke="#2F7D3C" stroke-width="2"/>
<line x1="126.8" y1="156.6" x2="128.5" y2="146.7" stroke="#2F7D3C" stroke-width="2"/>
<circle cx="120.0" cy="195.0" r="3" fill="#1A1A1A"/>
<text x="238.1" y="151.7" font-size="15" fill="#2E5C8A" text-anchor="middle" font-weight="bold">A</text>
<text x="110.0" y="89.8" font-size="15" fill="#2E5C8A" text-anchor="middle" font-weight="bold">B</text>
<text x="187.5" y="93.4" font-size="15" fill="#B5651D" text-anchor="middle" font-weight="bold">C</text>
<text x="104.0" y="201.0" font-size="15" fill="#1A1A1A" text-anchor="middle" font-weight="bold">O</text>
</svg><p style="margin-top:8px;">$[OC)$ est la bissectrice de l'angle $\\widehat{AOB}$. Sachant que $\\widehat{AOC} = 40°$, quelle est la mesure de $\\widehat{COB}$ ?</p>`, a: `40°` },
                options: `40° ¤ 80° ¤ 50° ¤ 20°`,
                explanation: `Par définition de la bissectrice, $\\widehat{AOC} = \\widehat{COB}$ (marqué par les petits traits verts identiques sur la figure). Donc $\\widehat{COB} = 40°$.`
            },
            {
                quiz: { q: `<svg viewBox="0 0 260 220" xmlns="http://www.w3.org/2000/svg" style="max-width:230px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="120.0" y1="195.0" x2="232.5" y2="171.1" stroke="#2E5C8A" stroke-width="2.5"/>
<line x1="120.0" y1="195.0" x2="76.9" y2="88.4" stroke="#2E5C8A" stroke-width="2.5"/>
<line x1="120.0" y1="195.0" x2="174.0" y2="93.5" stroke="#B5651D" stroke-width="2.5" stroke-dasharray="6,4"/>
<path d="M 163.0,185.8 L 162.7,184.3 L 162.3,182.8 L 161.8,181.2 L 161.3,179.7 L 160.7,178.2 L 160.0,176.8 L 159.3,175.3 L 158.6,173.9 L 157.8,172.5 L 157.0,171.1 L 156.1,169.8 L 155.1,168.5 L 154.2,167.3 L 153.1,166.0 L 152.1,164.8 L 150.9,163.7 L 149.8,162.6 L 148.6,161.5 L 147.3,160.5 L 146.1,159.6 L 144.8,158.6 L 143.4,157.8 L 142.1,156.9 L 140.7,156.2" fill="none" stroke="#2F7D3C" stroke-width="1.6"/>
<path d="M 140.7,156.2 L 139.2,155.4 L 137.8,154.8 L 136.3,154.1 L 134.8,153.6 L 133.3,153.1 L 131.8,152.6 L 130.2,152.2 L 128.7,151.9 L 127.1,151.6 L 125.5,151.3 L 123.9,151.2 L 122.3,151.1 L 120.7,151.0 L 119.1,151.0 L 117.5,151.1 L 115.9,151.2 L 114.3,151.4 L 112.7,151.6 L 111.2,151.9 L 109.6,152.2 L 108.1,152.7 L 106.5,153.1 L 105.0,153.6 L 103.5,154.2" fill="none" stroke="#2F7D3C" stroke-width="1.6"/>
<line x1="151.2" y1="171.5" x2="159.1" y2="165.5" stroke="#2F7D3C" stroke-width="2"/>
<line x1="122.0" y1="156.1" x2="122.6" y2="146.1" stroke="#2F7D3C" stroke-width="2"/>
<circle cx="120.0" cy="195.0" r="3" fill="#1A1A1A"/>
<text x="242.5" y="167.1" font-size="15" fill="#2E5C8A" text-anchor="middle" font-weight="bold">A</text>
<text x="86.9" y="96.4" font-size="15" fill="#2E5C8A" text-anchor="middle" font-weight="bold">B</text>
<text x="184.0" y="91.5" font-size="15" fill="#B5651D" text-anchor="middle" font-weight="bold">C</text>
<text x="104.0" y="201.0" font-size="15" fill="#1A1A1A" text-anchor="middle" font-weight="bold">O</text>
</svg><p style="margin-top:8px;">$[OC)$ est la bissectrice de l'angle $\\widehat{AOB}$. Sachant que $\\widehat{AOB} = 100°$, quelle est la mesure de $\\widehat{AOC}$ ?</p>`, a: `50°` },
                options: `50° ¤ 100° ¤ 25° ¤ 40°`,
                explanation: `La bissectrice partage l'angle $\\widehat{AOB}$ en deux angles égaux : $\\widehat{AOC} = \\widehat{AOB} \\div 2 = 100° \\div 2 = 50°$.`
            },
            {
                quiz: { q: `Pour tracer au rapporteur la bissectrice d'un angle de $64°$, quel angle doit-on reporter depuis un des côtés ?`, a: `32°` },
                options: `32° ¤ 64° ¤ 16° ¤ 128°`,
                explanation: `On divise la mesure de l'angle par $2$ : $64° \\div 2 = 32°$. On place ensuite le rapporteur sur le sommet, aligné avec un des côtés, et on marque un point à $32°$.`
            },
            {
                quiz: { q: `Dans la méthode de construction au compas, après avoir tracé l'arc de cercle centré en $O$ qui coupe les côtés $[OA)$ et $[OB)$ en $M$ et $N$, que fait-on ensuite ?`, a: `Tracer deux arcs de même écartement centrés en M et en N` },
                options: `Tracer deux arcs de même écartement centrés en M et en N ¤ Mesurer l'angle MON au rapporteur ¤ Tracer la droite (MN) ¤ Relier O à M directement`,
                explanation: `L'étape suivante consiste à piquer le compas en $M$, puis en $N$, en gardant le <strong>même écartement</strong>, pour tracer deux arcs qui se coupent en un point $P$.`
            },
            {
                quiz: { q: `Dans la construction au compas, pourquoi le point $P$ obtenu (intersection des deux derniers arcs) est-il sur la bissectrice de l'angle ?`, a: `Car OM = ON et PM = PN, donc P est équidistant des deux côtés` },
                options: `Car OM = ON et PM = PN, donc P est équidistant des deux côtés ¤ Car OM = OP ¤ Car l'angle OMP est droit ¤ C'est une coïncidence, cela ne marche pas toujours`,
                explanation: `Comme $OM = ON$ (premier arc) et $PM = PN$ (arcs de même écartement), le point $P$ est <strong>équidistant</strong> des deux côtés de l'angle : il se trouve donc exactement sur la bissectrice.`
            },
            {
                quiz: { q: `<svg viewBox="0 0 260 220" xmlns="http://www.w3.org/2000/svg" style="max-width:230px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="120.0" y1="195.0" x2="221.5" y2="141.0" stroke="#2E5C8A" stroke-width="2.5"/>
<line x1="120.0" y1="195.0" x2="136.0" y2="81.1" stroke="#2E5C8A" stroke-width="2.5"/>
<line x1="120.0" y1="195.0" x2="186.0" y2="100.8" stroke="#B5651D" stroke-width="2.5" stroke-dasharray="6,4"/>
<path d="M 158.8,174.3 L 158.4,173.6 L 158.0,172.8 L 157.6,172.1 L 157.1,171.4 L 156.6,170.6 L 156.2,169.9 L 155.7,169.2 L 155.1,168.5 L 154.6,167.8 L 154.1,167.2 L 153.5,166.5 L 152.9,165.8 L 152.4,165.2 L 151.8,164.6 L 151.2,164.0 L 150.6,163.3 L 149.9,162.8 L 149.3,162.2 L 148.7,161.6 L 148.0,161.1 L 147.3,160.5 L 146.6,160.0 L 145.9,159.5 L 145.2,159.0" fill="none" stroke="#2F7D3C" stroke-width="1.6"/>
<path d="M 145.2,159.0 L 144.5,158.5 L 143.8,158.0 L 143.1,157.5 L 142.3,157.1 L 141.6,156.7 L 140.8,156.2 L 140.1,155.8 L 139.3,155.4 L 138.5,155.1 L 137.7,154.7 L 136.9,154.4 L 136.1,154.1 L 135.3,153.8 L 134.5,153.5 L 133.7,153.2 L 132.9,152.9 L 132.0,152.7 L 131.2,152.4 L 130.4,152.2 L 129.5,152.0 L 128.7,151.9 L 127.8,151.7 L 127.0,151.6 L 126.1,151.4" fill="none" stroke="#2F7D3C" stroke-width="1.6"/>
<line x1="149.2" y1="169.2" x2="156.7" y2="162.5" stroke="#2F7D3C" stroke-width="2"/>
<line x1="134.3" y1="158.7" x2="138.0" y2="149.4" stroke="#2F7D3C" stroke-width="2"/>
<circle cx="120.0" cy="195.0" r="3" fill="#1A1A1A"/>
<text x="231.5" y="137.0" font-size="15" fill="#2E5C8A" text-anchor="middle" font-weight="bold">A</text>
<text x="146.0" y="89.1" font-size="15" fill="#2E5C8A" text-anchor="middle" font-weight="bold">B</text>
<text x="196.0" y="98.8" font-size="15" fill="#B5651D" text-anchor="middle" font-weight="bold">C</text>
<text x="104.0" y="201.0" font-size="15" fill="#1A1A1A" text-anchor="middle" font-weight="bold">O</text>
</svg><p style="margin-top:8px;">$[OC)$ est la bissectrice de l'angle $\\widehat{AOB}$. Sachant que $\\widehat{COB} = 27°$, quelle est la mesure de $\\widehat{AOB}$ ?</p>`, a: `54°` },
                options: `54° ¤ 27° ¤ 13,5° ¤ 108°`,
                explanation: `Comme $[OC)$ est la bissectrice, $\\widehat{AOC} = \\widehat{COB} = 27°$. Donc $\\widehat{AOB} = \\widehat{AOC} + \\widehat{COB} = 27° + 27° = 54°$.`
            },
            {
                quiz: { q: `La bissectrice d'un angle partage cet angle en...`, a: `deux angles de même mesure` },
                options: `deux angles de même mesure ¤ deux angles dont la somme est 90° ¤ trois angles égaux ¤ deux angles supplémentaires`,
                explanation: `C'est la définition même de la bissectrice : elle partage l'angle en <strong>deux angles de même mesure</strong>.`
            },
            {
                quiz: { q: `<p>Sur ces deux figures, la demi-droite $[OC)$ a été tracée à l'intérieur de l'angle $\\widehat{AOB}$.</p><div style="display:flex; gap:20px; justify-content:center; flex-wrap:wrap; margin:8px 0;"><div style="text-align:center;"><svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg" style="max-width:200px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="90.0" y1="140.0" x2="183.6" y2="123.5" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="90.0" y1="140.0" x2="73.5" y2="46.4" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="90.0" y1="140.0" x2="144.5" y2="62.2" stroke="#B5651D" stroke-width="2.5" stroke-dasharray="6,4"/>
<circle cx="90.0" cy="140.0" r="3" fill="#1A1A1A"/>
<text x="140.0" y="178.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">Figure 1</text>
</svg></div><div style="text-align:center;"><svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg" style="max-width:200px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="90.0" y1="140.0" x2="183.6" y2="123.5" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="90.0" y1="140.0" x2="122.5" y2="50.7" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="90.0" y1="140.0" x2="162.8" y2="78.9" stroke="#B5651D" stroke-width="2.5" stroke-dasharray="6,4"/>
<circle cx="90.0" cy="140.0" r="3" fill="#1A1A1A"/>
<text x="140.0" y="178.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">Figure 2</text>
</svg></div></div><p style="margin-top:4px;">Sur laquelle de ces deux figures $[OC)$ semble-t-elle être la bissectrice de l'angle ?</p>`, a: `Figure 1` },
                options: `Figure 1 ¤ Figure 2 ¤ Les deux ¤ Aucune des deux`,
                explanation: `Sur la <strong>figure 1</strong>, $[OC)$ partage visiblement l'angle en deux parts égales : c'est la bissectrice. Sur la figure 2, $[OC)$ est nettement plus proche d'un des côtés : les deux parts ne sont pas égales, ce n'est pas la bissectrice.`
            },
            {
                quiz: { q: `<svg viewBox="0 0 260 240" xmlns="http://www.w3.org/2000/svg" style="max-width:250px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="130.0" y1="220.0" x2="34.6" y2="97.9" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="130.0" y1="220.0" x2="225.4" y2="97.9" stroke="#1A1A1A" stroke-width="2.5"/>
<path d="M 182.3,153.0 L 178.6,150.2 L 174.6,147.7 L 170.6,145.3 L 166.4,143.2 L 162.1,141.3 L 157.7,139.6 L 153.2,138.2 L 148.6,137.1 L 144.0,136.2 L 139.4,135.5 L 134.7,135.1 L 130.0,135.0 L 125.3,135.1 L 120.6,135.5 L 116.0,136.2 L 111.4,137.1 L 106.8,138.2 L 102.3,139.6 L 97.9,141.3 L 93.6,143.2 L 89.4,145.3 L 85.4,147.7 L 81.5,150.2 L 77.7,153.0" fill="none" stroke="#2E5C8A" stroke-width="1.8"/>
<circle cx="130.0" cy="220.0" r="3" fill="#1A1A1A"/>
<circle cx="77.7" cy="153.0" r="3" fill="#1A1A1A"/>
<circle cx="182.3" cy="153.0" r="3" fill="#1A1A1A"/>
<text x="114.0" y="226.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">O</text>
<text x="42.6" y="95.9" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">A</text>
<text x="233.4" y="107.9" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">B</text>
<text x="63.7" y="147.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">M</text>
<text x="194.3" y="155.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">N</text>
</svg><p style="margin-top:8px;">Sur la figure, l'arc de cercle centré en $O$ a déjà été tracé : il coupe $[OA)$ en $M$ et $[OB)$ en $N$. Quelle est la prochaine étape pour construire la bissectrice de l'angle $\\widehat{AOB}$ ?</p>`, a: `Piquer le compas en M puis en N (même écartement) et tracer deux arcs qui se coupent` },
                options: `Piquer le compas en M puis en N (même écartement) et tracer deux arcs qui se coupent ¤ Mesurer l'angle au rapporteur ¤ Relier directement M et N ¤ Recommencer l'arc avec un écartement plus petit`,
                explanation: `On pique maintenant le compas successivement en $M$ et en $N$, avec le <strong>même écartement</strong>, pour tracer deux arcs qui se coupent en un point $P$ : la demi-droite $[OP)$ sera la bissectrice cherchée.`
            }
        ],

        // ------------------------------------------------------------
        // 59201 : Vocabulaire des angles formes par une secante : alternes-internes, correspondants
        // ------------------------------------------------------------
        "59201": [
            {
                quiz: { q: `Deux angles alternes-internes (formés par une sécante coupant deux droites) sont situés...`, a: `entre les deux droites, de part et d'autre de la sécante` },
                options: `entre les deux droites, de part et d'autre de la sécante ¤ entre les deux droites, du même côté de la sécante ¤ à l'extérieur des deux droites, du même côté ¤ au même sommet, l'un en face de l'autre`,
                explanation: `Deux angles <strong>alternes-internes</strong> sont situés entre les deux droites (à l'"intérieur"), et de part et d'autre de la sécante (l'un à gauche, l'autre à droite).`
            },
            {
                quiz: { q: `Deux angles correspondants (formés par une sécante coupant deux droites) sont situés...`, a: `du même côté de la sécante, à la même position par rapport à chaque droite` },
                options: `du même côté de la sécante, à la même position par rapport à chaque droite ¤ de part et d'autre de la sécante, entre les deux droites ¤ au même sommet, l'un en face de l'autre ¤ l'un à l'intérieur, l'autre à l'extérieur, du même côté`,
                explanation: `Deux angles <strong>correspondants</strong> sont situés du même côté de la sécante, et occupent la même position par rapport à chacune des deux droites (par exemple, tous les deux "en haut à droite" de leur point d'intersection).`
            },
            {
                quiz: { q: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width:320px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="20.0" y1="80.0" x2="380.0" y2="80.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="20.0" y1="220.0" x2="380.0" y2="220.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="94.7" y1="35.9" x2="305.3" y2="264.1" stroke="#1A1A1A" stroke-width="2.5"/>
<circle cx="135.4" cy="80.0" r="3" fill="#1A1A1A"/>
<circle cx="264.6" cy="220.0" r="3" fill="#1A1A1A"/>
<text x="119.4" y="74.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">A</text>
<text x="274.6" y="238.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">B</text>
<text x="30.0" y="72.0" font-size="13" fill="#1A1A1A" text-anchor="start">(d1)</text>
<text x="30.0" y="212.0" font-size="13" fill="#1A1A1A" text-anchor="start">(d2)</text>
<text x="278.0" y="280.0" font-size="13" fill="#1A1A1A" text-anchor="start">(Δ)</text>
<polygon points="135.4,80.0 153.0,99.1 153.7,98.5 154.3,97.8 154.9,97.2 155.5,96.5 156.0,95.8 156.6,95.1 157.1,94.3 157.6,93.6 158.0,92.8 158.4,92.0 158.8,91.2 159.2,90.4 159.6,89.6 159.9,88.8 160.2,87.9 160.4,87.1 160.7,86.2 160.8,85.3 161.0,84.5 161.2,83.6 161.3,82.7 161.3,81.8 161.4,80.9 161.4,80.0" fill="#2E5C8A" fill-opacity="0.45"/>
<polygon points="264.6,220.0 247.0,200.9 246.3,201.5 245.7,202.2 245.1,202.8 244.5,203.5 244.0,204.2 243.4,204.9 242.9,205.7 242.4,206.4 242.0,207.2 241.6,208.0 241.2,208.8 240.8,209.6 240.4,210.4 240.1,211.2 239.8,212.1 239.6,212.9 239.3,213.8 239.2,214.7 239.0,215.6 238.8,216.4 238.7,217.3 238.7,218.2 238.6,219.1 238.6,220.0" fill="#B5651D" fill-opacity="0.45"/>
<text x="226.1" y="203.2" font-size="14" fill="#B5651D" text-anchor="middle" font-weight="bold">1</text>
<polygon points="264.6,220.0 290.6,220.0 290.5,217.5 290.1,215.0 289.5,212.6 288.7,210.2 287.6,207.9 286.4,205.8 284.9,203.7 283.2,201.9 281.4,200.2 279.4,198.6 277.3,197.3 275.0,196.2 272.7,195.3 270.3,194.6 267.8,194.2 265.3,194.0 262.8,194.1 260.3,194.4 257.9,194.9 255.5,195.7 253.2,196.7 251.0,197.9 248.9,199.3 247.0,200.9" fill="#2F7D3C" fill-opacity="0.45"/>
<text x="281.4" y="181.5" font-size="14" fill="#2F7D3C" text-anchor="middle" font-weight="bold">2</text>
</svg><p style="margin-top:8px;">L'angle bleu est situé au point $A$. Lequel des deux angles marqués en $B$ (1 ou 2) est alterne-interne avec l'angle bleu ?</p>`, a: `Angle 1` },
                options: `Angle 1 ¤ Angle 2 ¤ Les deux ¤ Aucun des deux`,
                explanation: `L'angle bleu est à l'intérieur des deux droites, à droite de la sécante. L'<strong>angle 1</strong> est lui aussi à l'intérieur, mais à gauche de la sécante : c'est la position alterne-interne. L'angle 2 est à l'intérieur mais du même côté (à droite) que l'angle bleu : ce n'est pas la bonne position.`
            },
            {
                quiz: { q: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width:320px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="20.0" y1="80.0" x2="380.0" y2="80.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="20.0" y1="220.0" x2="380.0" y2="220.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="94.7" y1="35.9" x2="305.3" y2="264.1" stroke="#1A1A1A" stroke-width="2.5"/>
<circle cx="135.4" cy="80.0" r="3" fill="#1A1A1A"/>
<circle cx="264.6" cy="220.0" r="3" fill="#1A1A1A"/>
<text x="119.4" y="74.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">A</text>
<text x="274.6" y="238.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">B</text>
<text x="30.0" y="72.0" font-size="13" fill="#1A1A1A" text-anchor="start">(d1)</text>
<text x="30.0" y="212.0" font-size="13" fill="#1A1A1A" text-anchor="start">(d2)</text>
<text x="278.0" y="280.0" font-size="13" fill="#1A1A1A" text-anchor="start">(Δ)</text>
<polygon points="135.4,80.0 153.0,99.1 153.7,98.5 154.3,97.8 154.9,97.2 155.5,96.5 156.0,95.8 156.6,95.1 157.1,94.3 157.6,93.6 158.0,92.8 158.4,92.0 158.8,91.2 159.2,90.4 159.6,89.6 159.9,88.8 160.2,87.9 160.4,87.1 160.7,86.2 160.8,85.3 161.0,84.5 161.2,83.6 161.3,82.7 161.3,81.8 161.4,80.9 161.4,80.0" fill="#2E5C8A" fill-opacity="0.45"/>
<polygon points="264.6,220.0 282.2,239.1 282.9,238.5 283.5,237.8 284.1,237.2 284.7,236.5 285.2,235.8 285.8,235.1 286.3,234.3 286.8,233.6 287.2,232.8 287.6,232.0 288.0,231.2 288.4,230.4 288.8,229.6 289.1,228.8 289.4,227.9 289.6,227.1 289.9,226.2 290.1,225.3 290.2,224.4 290.4,223.6 290.5,222.7 290.5,221.8 290.6,220.9 290.6,220.0" fill="#B5651D" fill-opacity="0.45"/>
<text x="303.1" y="236.8" font-size="14" fill="#B5651D" text-anchor="middle" font-weight="bold">1</text>
<polygon points="264.6,220.0 238.6,220.0 238.7,222.5 239.1,225.0 239.7,227.4 240.5,229.8 241.6,232.1 242.8,234.2 244.3,236.3 246.0,238.1 247.8,239.8 249.8,241.4 251.9,242.7 254.2,243.8 256.5,244.7 258.9,245.4 261.4,245.8 263.9,246.0 266.4,245.9 268.9,245.6 271.4,245.1 273.7,244.3 276.0,243.3 278.2,242.1 280.3,240.7 282.2,239.1" fill="#2F7D3C" fill-opacity="0.45"/>
<text x="247.8" y="258.5" font-size="14" fill="#2F7D3C" text-anchor="middle" font-weight="bold">2</text>
</svg><p style="margin-top:8px;">L'angle bleu est situé au point $A$. Lequel des deux angles marqués en $B$ (1 ou 2) est correspondant à l'angle bleu ?</p>`, a: `Angle 1` },
                options: `Angle 1 ¤ Angle 2 ¤ Les deux ¤ Aucun des deux`,
                explanation: `L'angle bleu est à droite de la sécante, sous la droite (d1). L'<strong>angle 1</strong> occupe exactement la même position par rapport à (d2) (à droite de la sécante, sous la droite) : c'est l'angle correspondant. L'angle 2 est à gauche de la sécante : ce n'est pas la bonne position.`
            },
            {
                quiz: { q: `Combien de paires d'angles alternes-internes peut-on former à partir d'une sécante qui coupe deux droites ?`, a: `2` },
                options: `2 ¤ 1 ¤ 3 ¤ 4`,
                explanation: `Une sécante qui coupe deux droites forme 4 angles "intérieurs" au total (2 en chaque point d'intersection), ce qui donne exactement <strong>deux</strong> paires distinctes d'angles alternes-internes.`
            },
            {
                quiz: { q: `Une sécante coupe deux droites en deux points distincts. Combien d'angles sont formés au total, en comptant les deux points d'intersection ?`, a: `8` },
                options: `8 ¤ 4 ¤ 6 ¤ 2`,
                explanation: `Chaque point d'intersection de deux droites forme 4 angles. Avec deux points d'intersection, cela fait $4 \\times 2 = 8$ angles au total.`
            },
            {
                quiz: { q: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width:320px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="20.0" y1="80.0" x2="380.0" y2="80.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="20.0" y1="220.0" x2="380.0" y2="220.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="94.7" y1="35.9" x2="305.3" y2="264.1" stroke="#1A1A1A" stroke-width="2.5"/>
<circle cx="135.4" cy="80.0" r="3" fill="#1A1A1A"/>
<circle cx="264.6" cy="220.0" r="3" fill="#1A1A1A"/>
<text x="119.4" y="74.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">A</text>
<text x="274.6" y="238.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">B</text>
<text x="30.0" y="72.0" font-size="13" fill="#1A1A1A" text-anchor="start">(d1)</text>
<text x="30.0" y="212.0" font-size="13" fill="#1A1A1A" text-anchor="start">(d2)</text>
<text x="278.0" y="280.0" font-size="13" fill="#1A1A1A" text-anchor="start">(Δ)</text>
<polygon points="135.4,80.0 153.0,99.1 153.7,98.5 154.3,97.8 154.9,97.2 155.5,96.5 156.0,95.8 156.6,95.1 157.1,94.3 157.6,93.6 158.0,92.8 158.4,92.0 158.8,91.2 159.2,90.4 159.6,89.6 159.9,88.8 160.2,87.9 160.4,87.1 160.7,86.2 160.8,85.3 161.0,84.5 161.2,83.6 161.3,82.7 161.3,81.8 161.4,80.9 161.4,80.0" fill="#2E5C8A" fill-opacity="0.45"/>
<polygon points="135.4,80.0 109.4,80.0 109.5,82.5 109.9,85.0 110.5,87.4 111.3,89.8 112.4,92.1 113.6,94.2 115.1,96.3 116.8,98.1 118.6,99.8 120.6,101.4 122.7,102.7 125.0,103.8 127.3,104.7 129.7,105.4 132.2,105.8 134.7,106.0 137.2,105.9 139.7,105.6 142.2,105.1 144.5,104.3 146.8,103.3 149.0,102.1 151.1,100.7 153.0,99.1" fill="#B5651D" fill-opacity="0.45"/>
</svg><p style="margin-top:8px;">Sur la figure, les angles bleu et orange sont tous les deux situés au sommet $A$. Sont-ils alternes-internes ?</p>`, a: `Non, ce sont des angles adjacents (même sommet)` },
                options: `Non, ce sont des angles adjacents (même sommet) ¤ Oui, ce sont des alternes-internes ¤ Oui, ce sont des correspondants ¤ Ce sont des angles opposés par le sommet`,
                explanation: `Attention : les angles alternes-internes (ou correspondants) sont toujours situés à <strong>deux sommets différents</strong>. Ici, les deux angles colorés partagent le même sommet $A$ et un côté commun : ce sont simplement des angles <strong>adjacents</strong>.`
            },
            {
                quiz: { q: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width:320px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="20.0" y1="80.0" x2="380.0" y2="80.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="20.0" y1="220.0" x2="380.0" y2="220.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="94.7" y1="35.9" x2="305.3" y2="264.1" stroke="#1A1A1A" stroke-width="2.5"/>
<circle cx="135.4" cy="80.0" r="3" fill="#1A1A1A"/>
<circle cx="264.6" cy="220.0" r="3" fill="#1A1A1A"/>
<text x="119.4" y="74.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">A</text>
<text x="274.6" y="238.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">B</text>
<text x="30.0" y="72.0" font-size="13" fill="#1A1A1A" text-anchor="start">(d1)</text>
<text x="30.0" y="212.0" font-size="13" fill="#1A1A1A" text-anchor="start">(d2)</text>
<text x="278.0" y="280.0" font-size="13" fill="#1A1A1A" text-anchor="start">(Δ)</text>
<polygon points="135.4,80.0 153.0,99.1 153.7,98.5 154.3,97.8 154.9,97.2 155.5,96.5 156.0,95.8 156.6,95.1 157.1,94.3 157.6,93.6 158.0,92.8 158.4,92.0 158.8,91.2 159.2,90.4 159.6,89.6 159.9,88.8 160.2,87.9 160.4,87.1 160.7,86.2 160.8,85.3 161.0,84.5 161.2,83.6 161.3,82.7 161.3,81.8 161.4,80.9 161.4,80.0" fill="#2E5C8A" fill-opacity="0.45"/>
<polygon points="264.6,220.0 282.2,239.1 282.9,238.5 283.5,237.8 284.1,237.2 284.7,236.5 285.2,235.8 285.8,235.1 286.3,234.3 286.8,233.6 287.2,232.8 287.6,232.0 288.0,231.2 288.4,230.4 288.8,229.6 289.1,228.8 289.4,227.9 289.6,227.1 289.9,226.2 290.1,225.3 290.2,224.4 290.4,223.6 290.5,222.7 290.5,221.8 290.6,220.9 290.6,220.0" fill="#B5651D" fill-opacity="0.45"/>
</svg><p style="margin-top:8px;">Comment qualifie-t-on les deux angles colorés sur cette figure ?</p>`, a: `Correspondants` },
                options: `Correspondants ¤ Alternes-internes ¤ Opposés par le sommet ¤ Adjacents`,
                explanation: `Les deux angles colorés sont du même côté de la sécante, et occupent la même position par rapport à leur droite respective : ce sont des angles <strong>correspondants</strong>.`
            },
            {
                quiz: { q: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width:320px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="20.0" y1="80.0" x2="380.0" y2="80.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="20.0" y1="220.0" x2="380.0" y2="220.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="94.7" y1="35.9" x2="305.3" y2="264.1" stroke="#1A1A1A" stroke-width="2.5"/>
<circle cx="135.4" cy="80.0" r="3" fill="#1A1A1A"/>
<circle cx="264.6" cy="220.0" r="3" fill="#1A1A1A"/>
<text x="119.4" y="74.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">A</text>
<text x="274.6" y="238.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">B</text>
<text x="30.0" y="72.0" font-size="13" fill="#1A1A1A" text-anchor="start">(d1)</text>
<text x="30.0" y="212.0" font-size="13" fill="#1A1A1A" text-anchor="start">(d2)</text>
<text x="278.0" y="280.0" font-size="13" fill="#1A1A1A" text-anchor="start">(Δ)</text>
<polygon points="135.4,80.0 153.0,99.1 153.7,98.5 154.3,97.8 154.9,97.2 155.5,96.5 156.0,95.8 156.6,95.1 157.1,94.3 157.6,93.6 158.0,92.8 158.4,92.0 158.8,91.2 159.2,90.4 159.6,89.6 159.9,88.8 160.2,87.9 160.4,87.1 160.7,86.2 160.8,85.3 161.0,84.5 161.2,83.6 161.3,82.7 161.3,81.8 161.4,80.9 161.4,80.0" fill="#2E5C8A" fill-opacity="0.45"/>
<polygon points="264.6,220.0 247.0,200.9 246.3,201.5 245.7,202.2 245.1,202.8 244.5,203.5 244.0,204.2 243.4,204.9 242.9,205.7 242.4,206.4 242.0,207.2 241.6,208.0 241.2,208.8 240.8,209.6 240.4,210.4 240.1,211.2 239.8,212.1 239.6,212.9 239.3,213.8 239.2,214.7 239.0,215.6 238.8,216.4 238.7,217.3 238.7,218.2 238.6,219.1 238.6,220.0" fill="#B5651D" fill-opacity="0.45"/>
</svg><p style="margin-top:8px;">Comment qualifie-t-on les deux angles colorés sur cette figure ?</p>`, a: `Alternes-internes` },
                options: `Alternes-internes ¤ Correspondants ¤ Adjacents ¤ Opposés par le sommet`,
                explanation: `Les deux angles colorés sont situés entre les deux droites (à l'intérieur), de part et d'autre de la sécante : ce sont des angles <strong>alternes-internes</strong>.`
            },
            {
                quiz: { q: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width:320px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="20.0" y1="80.0" x2="380.0" y2="80.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="20.0" y1="220.0" x2="380.0" y2="220.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="94.7" y1="35.9" x2="305.3" y2="264.1" stroke="#1A1A1A" stroke-width="2.5"/>
<circle cx="135.4" cy="80.0" r="3" fill="#1A1A1A"/>
<circle cx="264.6" cy="220.0" r="3" fill="#1A1A1A"/>
<text x="119.4" y="74.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">A</text>
<text x="274.6" y="238.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">B</text>
<text x="30.0" y="72.0" font-size="13" fill="#1A1A1A" text-anchor="start">(d1)</text>
<text x="30.0" y="212.0" font-size="13" fill="#1A1A1A" text-anchor="start">(d2)</text>
<text x="278.0" y="280.0" font-size="13" fill="#1A1A1A" text-anchor="start">(Δ)</text>
<polygon points="135.4,80.0 153.0,99.1 153.7,98.5 154.3,97.8 154.9,97.2 155.5,96.5 156.0,95.8 156.6,95.1 157.1,94.3 157.6,93.6 158.0,92.8 158.4,92.0 158.8,91.2 159.2,90.4 159.6,89.6 159.9,88.8 160.2,87.9 160.4,87.1 160.7,86.2 160.8,85.3 161.0,84.5 161.2,83.6 161.3,82.7 161.3,81.8 161.4,80.9 161.4,80.0" fill="#2E5C8A" fill-opacity="0.45"/>
<polygon points="264.6,220.0 290.6,220.0 290.5,217.5 290.1,215.0 289.5,212.6 288.7,210.2 287.6,207.9 286.4,205.8 284.9,203.7 283.2,201.9 281.4,200.2 279.4,198.6 277.3,197.3 275.0,196.2 272.7,195.3 270.3,194.6 267.8,194.2 265.3,194.0 262.8,194.1 260.3,194.4 257.9,194.9 255.5,195.7 253.2,196.7 251.0,197.9 248.9,199.3 247.0,200.9" fill="#B5651D" fill-opacity="0.45"/>
</svg><p style="margin-top:8px;">Comment qualifie-t-on les deux angles colorés sur cette figure ?</p>`, a: `Aucune de ces deux relations` },
                options: `Aucune de ces deux relations ¤ Correspondants ¤ Alternes-internes ¤ Adjacents`,
                explanation: `Les deux angles colorés sont bien tous les deux à l'intérieur des deux droites, mais du <strong>même côté</strong> de la sécante : ce ne sont donc ni des angles alternes-internes (qui seraient de part et d'autre), ni des angles correspondants (qui seraient un intérieur et un extérieur). Cette configuration n'a pas de nom particulier au collège.`
            }
        ],

        // ------------------------------------------------------------
        // 59301 : Caracteriser le parallelisme de deux droites a l'aide des angles
        // ------------------------------------------------------------
        "59301": [
            {
                quiz: { q: `Si deux droites coupées par une sécante ont des angles alternes-internes de même mesure, alors...`, a: `les droites sont parallèles` },
                options: `les droites sont parallèles ¤ les droites sont perpendiculaires ¤ on ne peut rien conclure ¤ les droites sont confondues`,
                explanation: `C'est le critère principal pour prouver un parallélisme : si une sécante coupe deux droites en formant des angles alternes-internes (ou correspondants) de <strong>même mesure</strong>, alors ces deux droites sont <strong>parallèles</strong>.`
            },
            {
                quiz: { q: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width:320px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="15.0" y1="90.0" x2="385.0" y2="90.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="15.0" y1="220.0" x2="385.0" y2="220.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="118.2" y1="39.1" x2="263.0" y2="270.9" stroke="#1A1A1A" stroke-width="2.5"/>
<circle cx="150.0" cy="90.0" r="3" fill="#1A1A1A"/>
<circle cx="231.2" cy="220.0" r="3" fill="#1A1A1A"/>
<text x="134.0" y="84.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">A</text>
<text x="243.2" y="236.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">B</text>
<path d="M 164.8,113.8 L 165.8,113.1 L 166.8,112.4 L 167.7,111.7 L 168.6,110.9 L 169.5,110.1 L 170.3,109.3 L 171.1,108.4 L 171.9,107.5 L 172.6,106.6 L 173.3,105.6 L 173.9,104.6 L 174.5,103.6 L 175.0,102.5 L 175.6,101.5 L 176.0,100.4 L 176.4,99.3 L 176.8,98.2 L 177.1,97.0 L 177.4,95.9 L 177.6,94.7 L 177.8,93.5 L 177.9,92.4 L 178.0,91.2 L 178.0,90.0" fill="none" stroke="#2E5C8A" stroke-width="2"/>
<text x="188.5" y="111.3" font-size="14" fill="#2E5C8A" text-anchor="middle" font-weight="bold">63°</text>
<path d="M 216.4,196.2 L 215.4,196.9 L 214.4,197.6 L 213.5,198.3 L 212.6,199.1 L 211.8,199.9 L 210.9,200.7 L 210.1,201.6 L 209.4,202.5 L 208.7,203.4 L 208.0,204.4 L 207.3,205.4 L 206.7,206.4 L 206.2,207.5 L 205.7,208.5 L 205.2,209.6 L 204.8,210.7 L 204.4,211.8 L 204.1,213.0 L 203.8,214.1 L 203.6,215.3 L 203.5,216.5 L 203.3,217.6 L 203.3,218.8 L 203.2,220.0" fill="none" stroke="#B5651D" stroke-width="2"/>
<text x="192.8" y="198.7" font-size="14" fill="#B5651D" text-anchor="middle" font-weight="bold">63°</text>
</svg><p style="margin-top:8px;">Sur la figure, les deux angles alternes-internes mesurent chacun $63°$. Que peut-on en conclure ?</p>`, a: `(d1) et (d2) sont parallèles` },
                options: `(d1) et (d2) sont parallèles ¤ (d1) et (d2) sont perpendiculaires ¤ On ne peut rien conclure ¤ La sécante est mal tracée`,
                explanation: `Les deux angles alternes-internes ont la même mesure ($63° = 63°$) : d'après le critère de parallélisme, on peut donc affirmer que <strong>(d1) et (d2) sont parallèles</strong>.`
            },
            {
                quiz: { q: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width:320px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="15.0" y1="90.0" x2="385.0" y2="90.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="17.6" y1="190.5" x2="382.0" y2="254.8" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="134.5" y1="32.0" x2="200.4" y2="278.0" stroke="#1A1A1A" stroke-width="2.5"/>
<circle cx="150.0" cy="90.0" r="3" fill="#1A1A1A"/>
<circle cx="184.8" cy="220.0" r="3" fill="#1A1A1A"/>
<text x="134.0" y="84.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">A</text>
<text x="196.8" y="236.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">B</text>
<path d="M 157.2,117.0 L 158.7,116.6 L 160.2,116.1 L 161.6,115.5 L 162.9,114.8 L 164.3,114.1 L 165.6,113.3 L 166.8,112.4 L 168.0,111.5 L 169.1,110.4 L 170.2,109.4 L 171.2,108.2 L 172.2,107.0 L 173.1,105.8 L 173.9,104.5 L 174.7,103.2 L 175.4,101.8 L 176.0,100.4 L 176.5,99.0 L 177.0,97.5 L 177.3,96.1 L 177.6,94.6 L 177.8,93.0 L 178.0,91.5 L 178.0,90.0" fill="none" stroke="#2E5C8A" stroke-width="2"/>
<text x="184.9" y="116.8" font-size="14" fill="#2E5C8A" text-anchor="middle" font-weight="bold">105°</text>
<path d="M 192.1,247.1 L 193.3,246.7 L 194.6,246.2 L 195.8,245.8 L 197.0,245.2 L 198.2,244.6 L 199.4,243.9 L 200.5,243.2 L 201.6,242.5 L 202.6,241.7 L 203.6,240.8 L 204.6,239.9 L 205.5,238.9 L 206.3,237.9 L 207.2,236.9 L 207.9,235.8 L 208.7,234.7 L 209.3,233.6 L 209.9,232.4 L 210.5,231.2 L 211.0,230.0 L 211.4,228.7 L 211.8,227.4 L 212.2,226.2 L 212.4,224.9" fill="none" stroke="#B5651D" stroke-width="2"/>
<text x="217.3" y="249.7" font-size="14" fill="#B5651D" text-anchor="middle" font-weight="bold">100°</text>
</svg><p style="margin-top:8px;">Sur la figure, les deux angles correspondants mesurent $105°$ et $100°$. Peut-on conclure que $(d1)$ et $(d2)$ sont parallèles ?</p>`, a: `Non, car les angles correspondants ne sont pas égaux` },
                options: `Non, car les angles correspondants ne sont pas égaux ¤ Oui, car ce sont des angles correspondants ¤ Oui, car leur somme fait plus de 180° ¤ On ne peut jamais savoir`,
                explanation: `Le critère de parallélisme exige que les angles correspondants (ou alternes-internes) aient <strong>exactement la même mesure</strong>. Ici $105° \\neq 100°$ : on ne peut donc pas conclure que les droites sont parallèles (et, comme le montre la figure, elles ne le sont d'ailleurs pas).`
            },
            {
                quiz: { q: `Si deux droites sont parallèles, que peut-on dire des angles correspondants formés par une sécante quelconque ?`, a: `Ils ont la même mesure` },
                options: `Ils ont la même mesure ¤ Leur somme fait 180° ¤ Ils sont toujours droits ¤ Cela dépend de la sécante`,
                explanation: `C'est la réciproque du critère de parallélisme : si deux droites sont parallèles, alors <strong>tous</strong> les angles correspondants formés par n'importe quelle sécante ont la <strong>même mesure</strong> (il en va de même pour les angles alternes-internes).`
            },
            {
                quiz: { q: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width:320px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="15.0" y1="90.0" x2="385.0" y2="90.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="15.0" y1="220.0" x2="385.0" y2="220.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="129.5" y1="33.6" x2="217.8" y2="276.4" stroke="#1A1A1A" stroke-width="2.5"/>
<circle cx="150.0" cy="90.0" r="3" fill="#1A1A1A"/>
<circle cx="197.3" cy="220.0" r="3" fill="#1A1A1A"/>
<text x="134.0" y="84.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">A</text>
<text x="209.3" y="236.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">B</text>
<polyline points="196.2,85.5 204.0,90.0 196.2,94.5" fill="none" stroke="#1A1A1A" stroke-width="2.2"/>
<polyline points="243.5,215.5 251.3,220.0 243.5,224.5" fill="none" stroke="#1A1A1A" stroke-width="2.2"/>
<path d="M 159.6,116.3 L 160.9,115.8 L 162.2,115.2 L 163.5,114.5 L 164.7,113.8 L 165.9,113.0 L 167.1,112.2 L 168.2,111.3 L 169.2,110.4 L 170.2,109.4 L 171.2,108.3 L 172.1,107.2 L 172.9,106.1 L 173.7,104.9 L 174.4,103.7 L 175.1,102.4 L 175.7,101.1 L 176.2,99.8 L 176.7,98.4 L 177.1,97.0 L 177.4,95.7 L 177.7,94.3 L 177.9,92.8 L 178.0,91.4 L 178.0,90.0" fill="none" stroke="#2E5C8A" stroke-width="2"/>
<text x="186.0" y="115.2" font-size="14" fill="#2E5C8A" text-anchor="middle" font-weight="bold">70°</text>
</svg><p style="margin-top:8px;">$(d_1)$ et $(d_2)$ sont parallèles (flèches identiques). L'angle en $A$ mesure $70°$. Quelle est la mesure de l'angle correspondant en $B$ ?</p>`, a: `70°` },
                options: `70° ¤ 110° ¤ 20° ¤ 35°`,
                explanation: `Les droites étant parallèles, les angles correspondants ont la même mesure : l'angle en $B$ mesure donc lui aussi <strong>70°</strong>.`
            },
            {
                quiz: { q: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width:320px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="15.0" y1="90.0" x2="385.0" y2="90.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="15.0" y1="220.0" x2="385.0" y2="220.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="109.8" y1="45.4" x2="307.2" y2="264.6" stroke="#1A1A1A" stroke-width="2.5"/>
<circle cx="150.0" cy="90.0" r="3" fill="#1A1A1A"/>
<circle cx="267.1" cy="220.0" r="3" fill="#1A1A1A"/>
<text x="134.0" y="84.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">A</text>
<text x="279.1" y="236.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">B</text>
<polyline points="196.2,85.5 204.0,90.0 196.2,94.5" fill="none" stroke="#1A1A1A" stroke-width="2.2"/>
<polyline points="313.3,215.5 321.1,220.0 313.3,224.5" fill="none" stroke="#1A1A1A" stroke-width="2.2"/>
<path d="M 168.7,110.8 L 169.4,110.1 L 170.1,109.5 L 170.8,108.7 L 171.4,108.0 L 172.1,107.2 L 172.7,106.5 L 173.2,105.7 L 173.8,104.8 L 174.2,104.0 L 174.7,103.2 L 175.2,102.3 L 175.6,101.4 L 176.0,100.5 L 176.3,99.6 L 176.6,98.7 L 176.9,97.7 L 177.2,96.8 L 177.4,95.8 L 177.6,94.9 L 177.7,93.9 L 177.8,92.9 L 177.9,92.0 L 178.0,91.0 L 178.0,90.0" fill="none" stroke="#2E5C8A" stroke-width="2"/>
<text x="190.2" y="107.9" font-size="14" fill="#2E5C8A" text-anchor="middle" font-weight="bold">118°</text>
</svg><p style="margin-top:8px;">$(d_1)$ et $(d_2)$ sont parallèles. L'angle en $A$ mesure $118°$. Quelle est la mesure de l'angle alterne-interne en $B$ ?</p>`, a: `118°` },
                options: `118° ¤ 62° ¤ 59° ¤ 180°`,
                explanation: `Les droites étant parallèles, les angles alternes-internes ont la même mesure : l'angle alterne-interne en $B$ mesure donc lui aussi <strong>118°</strong>.`
            },
            {
                quiz: { q: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width:320px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="15.0" y1="90.0" x2="385.0" y2="90.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="15.0" y1="220.0" x2="385.0" y2="220.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="160.4" y1="30.9" x2="116.7" y2="279.1" stroke="#1A1A1A" stroke-width="2.5"/>
<circle cx="150.0" cy="90.0" r="3" fill="#1A1A1A"/>
<circle cx="127.1" cy="220.0" r="3" fill="#1A1A1A"/>
<text x="134.0" y="84.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">A</text>
<text x="139.1" y="236.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">B</text>
<polyline points="196.2,85.5 204.0,90.0 196.2,94.5" fill="none" stroke="#1A1A1A" stroke-width="2.2"/>
<polyline points="173.3,215.5 181.1,220.0 173.3,224.5" fill="none" stroke="#1A1A1A" stroke-width="2.2"/>
<path d="M 122.0,90.0 L 122.0,91.6 L 122.2,93.2 L 122.4,94.9 L 122.8,96.5 L 123.2,98.0 L 123.7,99.6 L 124.3,101.1 L 125.0,102.6 L 125.8,104.0 L 126.6,105.4 L 127.5,106.7 L 128.6,108.0 L 129.6,109.2 L 130.8,110.4 L 132.0,111.5 L 133.3,112.5 L 134.6,113.4 L 136.0,114.2 L 137.4,115.0 L 138.9,115.7 L 140.4,116.3 L 142.0,116.8 L 143.5,117.2 L 145.1,117.6" fill="none" stroke="#2E5C8A" stroke-width="2"/>
<text x="116.3" y="118.3" font-size="14" fill="#2E5C8A" text-anchor="middle" font-weight="bold">85°</text>
</svg><p style="margin-top:8px;">$(d_1)$ et $(d_2)$ sont parallèles. L'angle en $A$ mesure $85°$. Quelle est la mesure de l'angle correspondant en $B$ ?</p>`, a: `85°` },
                options: `85° ¤ 95° ¤ 42,5° ¤ 180°`,
                explanation: `Les droites étant parallèles, les angles correspondants ont la même mesure : l'angle en $B$ mesure donc lui aussi <strong>85°</strong>, quelle que soit l'inclinaison de la sécante.`
            },
            {
                quiz: { q: `Pour prouver que deux droites sont parallèles à l'aide d'une sécante, il suffit de montrer que...`, a: `une paire d'angles alternes-internes (ou correspondants) sont égaux` },
                options: `une paire d'angles alternes-internes (ou correspondants) sont égaux ¤ tous les angles formés sont égaux ¤ la sécante est perpendiculaire à l'une des deux droites ¤ les deux droites ont la même longueur`,
                explanation: `Il suffit de trouver <strong>une seule paire</strong> d'angles alternes-internes (ou correspondants) de même mesure pour pouvoir conclure que les deux droites sont parallèles.`
            },
            {
                quiz: { q: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width:320px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="200.0" y1="40.0" x2="80.0" y2="260.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="200.0" y1="40.0" x2="320.0" y2="260.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="80.0" y1="260.0" x2="320.0" y2="260.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="140.0" y1="150.0" x2="260.0" y2="150.0" stroke="#2F7D3C" stroke-width="2.5" stroke-dasharray="7,5"/>
<line x1="164.7" y1="92.1" x2="175.3" y2="97.9" stroke="#1A1A1A" stroke-width="2"/>
<line x1="104.7" y1="202.1" x2="115.3" y2="207.9" stroke="#1A1A1A" stroke-width="2"/>
<line x1="224.7" y1="97.9" x2="235.3" y2="92.1" stroke="#1A1A1A" stroke-width="2"/>
<line x1="284.7" y1="207.9" x2="295.3" y2="202.1" stroke="#1A1A1A" stroke-width="2"/>
<circle cx="200.0" cy="40.0" r="3" fill="#1A1A1A"/>
<circle cx="80.0" cy="260.0" r="3" fill="#1A1A1A"/>
<circle cx="320.0" cy="260.0" r="3" fill="#1A1A1A"/>
<circle cx="140.0" cy="150.0" r="3" fill="#1A1A1A"/>
<circle cx="260.0" cy="150.0" r="3" fill="#1A1A1A"/>
<text x="200.0" y="28.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">A</text>
<text x="64.0" y="274.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">B</text>
<text x="334.0" y="274.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">C</text>
<text x="122.0" y="154.0" font-size="14" fill="#2F7D3C" text-anchor="middle" font-weight="bold">D</text>
<text x="276.0" y="154.0" font-size="14" fill="#2F7D3C" text-anchor="middle" font-weight="bold">E</text>
<path d="M 114.0,260.0 L 114.0,258.5 L 113.9,257.0 L 113.7,255.5 L 113.5,254.0 L 113.2,252.5 L 112.8,251.0 L 112.3,249.6 L 111.8,248.1 L 111.3,246.7 L 110.7,245.3 L 110.0,244.0 L 109.2,242.6 L 108.4,241.4 L 107.6,240.1 L 106.7,238.9 L 105.7,237.7 L 104.7,236.6 L 103.6,235.5 L 102.5,234.5 L 101.3,233.5 L 100.1,232.6 L 98.9,231.7 L 97.6,230.9 L 96.3,230.2" fill="none" stroke="#2E5C8A" stroke-width="2"/>
<text x="124.7" y="233.4" font-size="14" fill="#2E5C8A" text-anchor="middle" font-weight="bold">55°</text>
<path d="M 168.0,150.0 L 168.0,148.8 L 167.9,147.5 L 167.8,146.3 L 167.6,145.0 L 167.3,143.8 L 167.0,142.6 L 166.6,141.4 L 166.2,140.2 L 165.8,139.1 L 165.3,137.9 L 164.7,136.8 L 164.1,135.7 L 163.4,134.7 L 162.7,133.6 L 161.9,132.6 L 161.2,131.7 L 160.3,130.7 L 159.4,129.8 L 158.5,129.0 L 157.6,128.2 L 156.6,127.4 L 155.6,126.7 L 154.5,126.0 L 153.4,125.4" fill="none" stroke="#555555" stroke-width="2"/>
</svg><p style="margin-top:8px;">$D$ et $E$ sont les milieux de $[AB]$ et $[AC]$ : $(DE)$ est donc la droite des milieux du triangle $ABC$, parallèle à $(BC)$. Sachant que l'angle $\\widehat{ABC}$ mesure $55°$, quelle est la mesure de l'angle $\\widehat{ADE}$ (marqué en gris), correspondant à $\\widehat{ABC}$ avec $(AB)$ comme sécante ?</p>`, a: `55°` },
                options: `55° ¤ 125° ¤ 27,5° ¤ 90°`,
                explanation: `$(DE)$ est parallèle à $(BC)$ (droite des milieux), et $(AB)$ joue le rôle de sécante. Les angles $\\widehat{ADE}$ et $\\widehat{ABC}$ sont correspondants : ils ont donc la même mesure, soit <strong>55°</strong>.`
            },
            {
                quiz: { q: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width:320px; display:block; margin:8px auto; font-family:sans-serif;">
<line x1="200.0" y1="40.0" x2="80.0" y2="260.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="200.0" y1="40.0" x2="320.0" y2="260.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="80.0" y1="260.0" x2="320.0" y2="260.0" stroke="#1A1A1A" stroke-width="2.5"/>
<line x1="140.0" y1="150.0" x2="260.0" y2="150.0" stroke="#2F7D3C" stroke-width="2.5" stroke-dasharray="7,5"/>
<line x1="164.7" y1="92.1" x2="175.3" y2="97.9" stroke="#1A1A1A" stroke-width="2"/>
<line x1="104.7" y1="202.1" x2="115.3" y2="207.9" stroke="#1A1A1A" stroke-width="2"/>
<line x1="224.7" y1="97.9" x2="235.3" y2="92.1" stroke="#1A1A1A" stroke-width="2"/>
<line x1="284.7" y1="207.9" x2="295.3" y2="202.1" stroke="#1A1A1A" stroke-width="2"/>
<circle cx="200.0" cy="40.0" r="3" fill="#1A1A1A"/>
<circle cx="80.0" cy="260.0" r="3" fill="#1A1A1A"/>
<circle cx="320.0" cy="260.0" r="3" fill="#1A1A1A"/>
<circle cx="140.0" cy="150.0" r="3" fill="#1A1A1A"/>
<circle cx="260.0" cy="150.0" r="3" fill="#1A1A1A"/>
<text x="200.0" y="28.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">A</text>
<text x="64.0" y="274.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">B</text>
<text x="334.0" y="274.0" font-size="14" fill="#1A1A1A" text-anchor="middle" font-weight="bold">C</text>
<text x="122.0" y="154.0" font-size="14" fill="#2F7D3C" text-anchor="middle" font-weight="bold">D</text>
<text x="276.0" y="154.0" font-size="14" fill="#2F7D3C" text-anchor="middle" font-weight="bold">E</text>
<path d="M 114.0,260.0 L 114.0,258.5 L 113.9,257.0 L 113.7,255.5 L 113.5,254.0 L 113.2,252.5 L 112.8,251.0 L 112.3,249.6 L 111.8,248.1 L 111.3,246.7 L 110.7,245.3 L 110.0,244.0 L 109.2,242.6 L 108.4,241.4 L 107.6,240.1 L 106.7,238.9 L 105.7,237.7 L 104.7,236.6 L 103.6,235.5 L 102.5,234.5 L 101.3,233.5 L 100.1,232.6 L 98.9,231.7 L 97.6,230.9 L 96.3,230.2" fill="none" stroke="#2E5C8A" stroke-width="2"/>
<text x="124.7" y="233.4" font-size="14" fill="#2E5C8A" text-anchor="middle" font-weight="bold">55°</text>
<path d="M 168.0,150.0 L 168.0,148.8 L 167.9,147.5 L 167.8,146.3 L 167.6,145.0 L 167.3,143.8 L 167.0,142.6 L 166.6,141.4 L 166.2,140.2 L 165.8,139.1 L 165.3,137.9 L 164.7,136.8 L 164.1,135.7 L 163.4,134.7 L 162.7,133.6 L 161.9,132.6 L 161.2,131.7 L 160.3,130.7 L 159.4,129.8 L 158.5,129.0 L 157.6,128.2 L 156.6,127.4 L 155.6,126.7 L 154.5,126.0 L 153.4,125.4" fill="none" stroke="#555555" stroke-width="2"/>
</svg><p style="margin-top:8px;">Sur cette même figure, pourquoi peut-on affirmer que $(DE)$ et $(BC)$ sont parallèles ?</p>`, a: `Car D et E sont les milieux de [AB] et [AC] : (DE) est la droite des milieux du triangle` },
                options: `Car D et E sont les milieux de [AB] et [AC] : (DE) est la droite des milieux du triangle ¤ Car AB = AC ¤ Car l'angle en A est droit ¤ Car (BC) est horizontale`,
                explanation: `D'après le théorème de la droite des milieux : dans un triangle, la droite qui joint les milieux de deux côtés est <strong>parallèle</strong> au troisième côté. C'est exactement le cas ici avec $D$ (milieu de $[AB]$) et $E$ (milieu de $[AC]$).`
            }
        ],

        // ============================================================
        // 5EME - CHAPITRE 14 (Proportionnalité) - QCM "Ai-je bien compris ?"
        // ============================================================

        // ------------------------------------------------------------
        // 514101 : Reconnaître une situation de proportionnalité
        // (H2 1, pas de H3)
        // ------------------------------------------------------------
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

        // ------------------------------------------------------------
        // 514211 : Le coefficient de proportionnalité
        // (H2 2, H3 1)
        // ------------------------------------------------------------
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
                quiz: { q: 'Un robinet remplit une piscine à un débit constant : en 3 h, il verse 900 L. Quel est le coefficient de proportionnalité (en L/h) ?', a: '300' },
                options: '150 ¤ 200 ¤ 300 ¤ 900',
                explanation: 'Coefficient $= 900 \\div 3 = 300$ : le robinet verse $300$ L par heure.'
            },
            {
                quiz: { q: 'Avec le coefficient de proportionnalité $300$ L/h trouvé précédemment, quel volume d\'eau y aura-t-il après 5 h ?', a: '1 500 L' },
                options: '1 200 L ¤ 1 500 L ¤ 1 800 L ¤ 2 000 L',
                explanation: 'Volume après $5$ h $= 5 \\times 300 = 1\\,500$ L.'
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
                quiz: { q: 'Un ouvrier pose 45 m² de carrelage en 9 heures, à vitesse constante. Quel est le coefficient de proportionnalité (m²/h) ?', a: '5' },
                options: '4 ¤ 5 ¤ 6 ¤ 9',
                explanation: 'Coefficient $= 45 \\div 9 = 5$ : l\'ouvrier pose $5$ m² par heure.'
            },
            {
                quiz: { q: 'Avec un rythme de 5 m²/h, combien de m² de carrelage l\'ouvrier posera-t-il en 7 heures ?', a: '35 m²' },
                options: '30 m² ¤ 32 m² ¤ 35 m² ¤ 40 m²',
                explanation: 'Surface posée en $7$ h $= 7 \\times 5 = 35$ m².'
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
            }
        ],

        // ------------------------------------------------------------
        // 514221 : Le retour à l'unité
        // (H2 2, H3 2)
        // ------------------------------------------------------------
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

        // ------------------------------------------------------------
        // 514231 : La linéarité (multiplicative ou additive)
        // (H2 2, H3 3)
        // ------------------------------------------------------------
        "514231": [
            {
                quiz: { q: 'Une recette pour 8 personnes utilise 400 g de riz. Par linéarité multiplicative, quelle quantité pour 4 personnes (moitié de 8) ?', a: '200 g' },
                options: '150 g ¤ 200 g ¤ 250 g ¤ 300 g',
                explanation: '$4$ personnes, c\'est la <strong>moitié</strong> de $8$ personnes : on prend la moitié de la quantité de riz, $400 \\div 2 = 200$ g.'
            },
            {
                quiz: { q: 'Avec 200 g de riz pour 4 personnes, quelle quantité pour 12 personnes (4 + 8) par linéarité additive ?', a: '600 g' },
                options: '500 g ¤ 550 g ¤ 600 g ¤ 800 g',
                explanation: '$12 = 4 + 8$ : on additionne les quantités correspondantes, $200 + 400 = 600$ g.'
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
                quiz: { q: '10 stylos coûtent 15 €. Par linéarité multiplicative, combien coûtent 5 stylos (moitié de 10) ?', a: '7,50 €' },
                options: '6 € ¤ 7 € ¤ 7,50 € ¤ 8 €',
                explanation: '$5$ stylos, c\'est la moitié de $10$ stylos : on prend la moitié du prix, $15 \\div 2 = 7,50$ €.'
            },
            {
                quiz: { q: 'Avec 15 € pour 10 stylos et 7,50 € pour 5 stylos, combien coûtent 15 stylos (10 + 5) par linéarité additive ?', a: '22,50 €' },
                options: '20 € ¤ 22,50 € ¤ 25 € ¤ 30 €',
                explanation: '$15 = 10 + 5$ : on additionne les prix, $15 + 7,50 = 22,50$ €.'
            },
            {
                quiz: { q: 'Une voiture roule à vitesse constante : elle parcourt 60 km en 1 h. Par linéarité multiplicative, quelle distance en 3 h (3 fois plus) ?', a: '180 km' },
                options: '120 km ¤ 150 km ¤ 180 km ¤ 200 km',
                explanation: '$3$ h, c\'est $3$ fois $1$ h : on multiplie la distance par $3$, $60 \\times 3 = 180$ km.'
            },
            {
                quiz: { q: 'Avec 60 km en 1 h et 180 km en 3 h, quelle distance en 4 h (1 h + 3 h) par linéarité additive ?', a: '240 km' },
                options: '220 km ¤ 230 km ¤ 240 km ¤ 250 km',
                explanation: '$4 = 1 + 3$ : on additionne les distances, $60 + 180 = 240$ km.'
            },
            {
                quiz: { q: 'Pourquoi peut-on utiliser aussi bien la linéarité que le retour à l\'unité pour un même problème de proportionnalité ?', a: 'Parce que toutes les méthodes correctes donnent le même résultat' },
                options: 'Parce que ce sont deux problèmes différents ¤ Parce que toutes les méthodes correctes donnent le même résultat ¤ Parce que la linéarité est toujours fausse ¤ Parce que le retour à l\'unité est réservé aux grands nombres',
                explanation: 'Dans une situation de proportionnalité, toutes les procédures correctes (coefficient, retour à l\'unité, linéarité, produit en croix) mènent au <strong>même résultat</strong> ; on choisit celle qui est la plus pratique.'
            },
            {
                quiz: { q: '4 places de concert coûtent 100 €. Par linéarité multiplicative, combien coûtent 2 places (moitié de 4) ?', a: '50 €' },
                options: '25 € ¤ 40 € ¤ 50 € ¤ 60 €',
                explanation: '$2$ places, c\'est la moitié de $4$ places : $100 \\div 2 = 50$ €.'
            },
            {
                quiz: { q: 'Une recette pour 4 personnes utilise 300 g de farine, et 150 g suffisent pour 2 personnes. Quelle est la valeur manquante ? <div class="table-container" style="margin:10px 0;"><table class="custom-table"><tbody><tr><th>Personnes</th><td>4</td><td>2</td><td>6</td></tr><tr><th>Farine (g)</th><td>300</td><td>150</td><td>?</td></tr></tbody></table></div>', a: '450 g' },
                options: '350 g ¤ 400 g ¤ 450 g ¤ 500 g',
                explanation: '$6 = 4 + 2$ : par linéarité additive, on additionne les quantités pour $4$ et pour $2$ personnes : $300 + 150 = 450$ g.'
            }
        ],

        // ------------------------------------------------------------
        // 514241 : Le produit en croix
        // (H2 2, H3 4)
        // ------------------------------------------------------------
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

        // ------------------------------------------------------------
        // 514301 : Représenter et reconnaître une situation de
        // proportionnalité (graphique) (H2 3, pas de H3)
        // ------------------------------------------------------------
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

        // ------------------------------------------------------------
        // 514401 : Calculer et appliquer un pourcentage
        // (H2 4, pas de H3)
        // ------------------------------------------------------------
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
                quiz: { q: 'Lors de l\'élection des délégués de classe (24 votants), voici les résultats. Quel pourcentage de voix a obtenu Chloé ? <div class="table-container" style="margin:10px 0;"><table class="custom-table"><tbody><tr><th>Candidat</th><td>Alexis</td><td>Chloé</td><td>Salma</td><td>Djibril</td></tr><tr><th>Voix</th><td>6</td><td>12</td><td>3</td><td>3</td></tr></tbody></table></div>', a: '50 %' },
                options: '25 % ¤ 40 % ¤ 50 % ¤ 60 %',
                explanation: 'Chloé a obtenu $12$ voix sur $24$ : $\\dfrac{12 \\times 100}{24} = 50\\%$.'
            },
            {
                quiz: { q: 'Avec les mêmes résultats (24 votants au total), quel pourcentage de voix a obtenu Alexis ? <div class="table-container" style="margin:10px 0;"><table class="custom-table"><tbody><tr><th>Candidat</th><td>Alexis</td><td>Chloé</td><td>Salma</td><td>Djibril</td></tr><tr><th>Voix</th><td>6</td><td>12</td><td>3</td><td>3</td></tr></tbody></table></div>', a: '25 %' },
                options: '15 % ¤ 20 % ¤ 25 % ¤ 30 %',
                explanation: 'Alexis a obtenu $6$ voix sur $24$ : $\\dfrac{6 \\times 100}{24} = 25\\%$.'
            },
            {
                quiz: { q: 'Dans un club de sport de 40 membres, 8 pratiquent le tennis. <div class="table-container" style="margin:10px 0;"><table class="custom-table"><tbody><tr><th>Total des membres</th><td>40</td></tr><tr><th>Joueurs de tennis</th><td>8</td></tr></tbody></table></div> Quel pourcentage de membres pratique le tennis ?', a: '20 %' },
                options: '10 % ¤ 15 % ¤ 20 % ¤ 25 %',
                explanation: '$\\dfrac{8 \\times 100}{40} = 20\\%$.'
            }
        ],

        // ------------------------------------------------------------
        // 514501 : Utiliser une échelle
        // (H2 5, pas de H3)
        // ------------------------------------------------------------
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
        ],

};
