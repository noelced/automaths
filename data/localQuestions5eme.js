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
        "51101": [
            {
                quiz: { q: 'Léa a acheté 5 paquets de bonbons contenant chacun 8 bonbons. Quelle opération permet de trouver le nombre total de bonbons ?', a: 'Multiplication' },
                options: 'Addition \\ Soustraction \\ Multiplication \\ Division',
                explanation: 'On répète $8$ bonbons $5$ fois : additionner $8$ cinq fois de suite revient à faire une <strong>multiplication</strong> ($5 \\times 8$). Dès que l\'on répète un même groupe plusieurs fois, on multiplie.'
            },
            {
                quiz: { q: 'Un fermier possède 120 pommes qu\'il doit répartir équitablement dans 4 paniers. Quelle opération permet de trouver le nombre de pommes par panier ?', a: 'Division' },
                options: 'Addition \\ Soustraction \\ Multiplication \\ Division',
                explanation: 'Le mot-clé « <strong>répartir équitablement</strong> » signale un partage en parts égales : c\'est une <strong>division</strong> ($120 \\div 4$).'
            },
            {
                quiz: { q: 'Karim avait 45 €. Il a dépensé 18 € pour un livre. Quelle opération permet de trouver combien il lui reste ?', a: 'Soustraction' },
                options: 'Addition \\ Soustraction \\ Multiplication \\ Division',
                explanation: 'On <strong>enlève</strong> une somme dépensée à un montant de départ : c\'est une <strong>soustraction</strong> ($45 - 18$).'
            },
            {
                quiz: { q: 'Une classe de 24 élèves accueille 3 nouveaux élèves. Quelle opération permet de trouver le nouvel effectif de la classe ?', a: 'Addition' },
                options: 'Addition \\ Soustraction \\ Multiplication \\ Division',
                explanation: 'On <strong>réunit</strong> deux groupes d\'élèves (les 24 déjà présents et les 3 nouveaux) : c\'est une <strong>addition</strong> ($24 + 3$).'
            },
            {
                quiz: { q: 'Un cycliste roule à une vitesse constante de 15 km/h pendant 3 heures. Quelle opération permet de trouver la distance parcourue ?', a: 'Multiplication' },
                options: 'Addition \\ Soustraction \\ Multiplication \\ Division',
                explanation: 'Parcourir $15$ km à chaque heure, pendant $3$ heures, revient à répéter $15$ km trois fois : c\'est une <strong>multiplication</strong> ($15 \\times 3$).'
            },
            {
                quiz: { q: 'Sarah a économisé 12 € la semaine dernière et 15 € cette semaine. Quelle opération permet de trouver le total économisé ?', a: 'Addition' },
                options: 'Addition \\ Soustraction \\ Multiplication \\ Division',
                explanation: 'On <strong>rassemble</strong> deux sommes économisées à des moments différents : c\'est une <strong>addition</strong> ($12 + 15$).'
            },
            {
                quiz: { q: 'Un sac de 5 kg de riz doit être partagé équitablement entre 5 familles. Quelle opération permet de trouver la quantité reçue par chaque famille ?', a: 'Division' },
                options: 'Addition \\ Soustraction \\ Multiplication \\ Division',
                explanation: 'On partage une quantité totale en parts égales entre plusieurs familles : c\'est une <strong>division</strong> ($5 \\div 5$).'
            },
            {
                quiz: { q: 'Un stylo coûte 2 €. Quelle opération permet de trouver le prix de 12 stylos ?', a: 'Multiplication' },
                options: 'Addition \\ Soustraction \\ Multiplication \\ Division',
                explanation: 'Le prix d\'un stylo ($2$ €) se répète $12$ fois : c\'est une <strong>multiplication</strong> ($2 \\times 12$).'
            },
            {
                quiz: { q: 'Une piscine contenait 800 L d\'eau. On en a retiré 250 L. Quelle opération permet de trouver le volume d\'eau restant ?', a: 'Soustraction' },
                options: 'Addition \\ Soustraction \\ Multiplication \\ Division',
                explanation: 'On <strong>enlève</strong> un volume d\'eau retiré à un volume de départ : c\'est une <strong>soustraction</strong> ($800 - 250$).'
            },
            {
                quiz: { q: 'Un immeuble compte 8 étages avec 6 appartements par étage. Quelle opération permet de trouver le nombre total d\'appartements ?', a: 'Multiplication' },
                options: 'Addition \\ Soustraction \\ Multiplication \\ Division',
                explanation: 'Le même nombre d\'appartements ($6$) se répète sur chacun des $8$ étages : c\'est une <strong>multiplication</strong> ($8 \\times 6$).'
            },
            {
                quiz: { q: 'Théo mesurait 142 cm l\'année dernière. Il mesure maintenant 150 cm. Quelle opération permet de trouver de combien il a grandi ?', a: 'Soustraction' },
                options: 'Addition \\ Soustraction \\ Multiplication \\ Division',
                explanation: 'On <strong>compare</strong> deux tailles pour trouver un écart : c\'est une <strong>soustraction</strong> ($150 - 142$).'
            },
            {
                quiz: { q: 'On souhaite répartir 96 chocolats dans des boîtes contenant chacune 8 chocolats. Quelle opération permet de trouver le nombre de boîtes nécessaires ?', a: 'Division' },
                options: 'Addition \\ Soustraction \\ Multiplication \\ Division',
                explanation: 'On cherche <strong>combien de fois</strong> $8$ est contenu dans $96$ : c\'est une <strong>division</strong> ($96 \\div 8$).'
            },
            {
                quiz: { q: 'Trois amis se partagent équitablement une pizza coupée en 12 parts. Quelle opération permet de trouver le nombre de parts pour chacun ?', a: 'Division' },
                options: 'Addition \\ Soustraction \\ Multiplication \\ Division',
                explanation: 'Un partage équitable entre plusieurs personnes est toujours une <strong>division</strong> ($12 \\div 3$).'
            },
            {
                quiz: { q: 'Un jardinier plante 7 rangées de 9 plants de tomates. Quelle opération permet de trouver le nombre total de plants ?', a: 'Multiplication' },
                options: 'Addition \\ Soustraction \\ Multiplication \\ Division',
                explanation: '$9$ plants se répètent sur chacune des $7$ rangées : c\'est une <strong>multiplication</strong> ($7 \\times 9$).'
            },
            {
                quiz: { q: 'Le compteur d\'une voiture indiquait 34 210 km avant un trajet, et 34 580 km après. Quelle opération permet de trouver la distance parcourue lors de ce trajet ?', a: 'Soustraction' },
                options: 'Addition \\ Soustraction \\ Multiplication \\ Division',
                explanation: 'On trouve un écart entre deux relevés du compteur : c\'est une <strong>soustraction</strong> ($34\\,580 - 34\\,210$).'
            },
            {
                quiz: { q: 'Un cinéma a vendu 45 billets adultes et 32 billets enfants aujourd\'hui. Quelle opération permet de trouver le nombre total de billets vendus ?', a: 'Addition' },
                options: 'Addition \\ Soustraction \\ Multiplication \\ Division',
                explanation: 'On <strong>rassemble</strong> deux catégories de billets vendus : c\'est une <strong>addition</strong> ($45 + 32$).'
            },
            {
                quiz: { q: 'Une boulangère a préparé 156 croissants qu\'elle range dans des sachets de 6. Quelle opération permet de trouver le nombre de sachets qu\'elle peut remplir ?', a: 'Division' },
                options: 'Addition \\ Soustraction \\ Multiplication \\ Division',
                explanation: 'On cherche combien de groupes de $6$ on peut former avec $156$ croissants : c\'est une <strong>division</strong> ($156 \\div 6$).'
            },
            {
                quiz: { q: 'Un marathon mesure 42 km. Un athlète a déjà parcouru 30 km. Quelle opération permet de trouver la distance qu\'il lui reste à parcourir ?', a: 'Soustraction' },
                options: 'Addition \\ Soustraction \\ Multiplication \\ Division',
                explanation: 'On <strong>enlève</strong> la distance déjà parcourue à la distance totale : c\'est une <strong>soustraction</strong> ($42 - 30$).'
            },
            {
                quiz: { q: 'Chaque classe de 5ᵉ compte 28 élèves, et il y a 6 classes de 5ᵉ dans le collège. Quelle opération permet de trouver le nombre total d\'élèves de 5ᵉ ?', a: 'Multiplication' },
                options: 'Addition \\ Soustraction \\ Multiplication \\ Division',
                explanation: 'Le même effectif ($28$) se répète pour chacune des $6$ classes : c\'est une <strong>multiplication</strong> ($6 \\times 28$).'
            },
            {
                quiz: { q: 'Un vidéaste a 4 500 abonnés et en gagne 320 en une semaine. Quelle opération permet de trouver son nouveau nombre d\'abonnés ?', a: 'Addition' },
                options: 'Addition \\ Soustraction \\ Multiplication \\ Division',
                explanation: 'On <strong>ajoute</strong> les nouveaux abonnés au nombre déjà existant : c\'est une <strong>addition</strong> ($4\\,500 + 320$).'
            }
        ],

        // ------------------------------------------------------------
        // 51102 : Connaître le vocabulaire des opérations
        // 10 questions variées sur : somme, différence, produit,
        // quotient, termes, facteurs, diviseurs, dividendes.
        // ------------------------------------------------------------
        "51102": [
            {
                quiz: { q: 'Comment appelle-t-on le résultat d\'une addition ?', a: 'Une somme' },
                options: 'Une somme \\ Une différence \\ Un produit \\ Un quotient',
                explanation: 'Le résultat d\'une <strong>addition</strong> s\'appelle une <strong>somme</strong>. Par exemple, dans $5 + 3 = 8$, le nombre $8$ est la somme.'
            },
            {
                quiz: { q: 'Comment appelle-t-on le résultat d\'une soustraction ?', a: 'Une différence' },
                options: 'Une somme \\ Une différence \\ Un produit \\ Un quotient',
                explanation: 'Le résultat d\'une <strong>soustraction</strong> s\'appelle une <strong>différence</strong>. Par exemple, dans $9 - 4 = 5$, le nombre $5$ est la différence.'
            },
            {
                quiz: { q: 'Comment appelle-t-on le résultat d\'une multiplication ?', a: 'Un produit' },
                options: 'Une somme \\ Une différence \\ Un produit \\ Un quotient',
                explanation: 'Le résultat d\'une <strong>multiplication</strong> s\'appelle un <strong>produit</strong>. Par exemple, dans $6 \\times 7 = 42$, le nombre $42$ est le produit.'
            },
            {
                quiz: { q: 'Comment appelle-t-on le résultat d\'une division ?', a: 'Un quotient' },
                options: 'Une somme \\ Une différence \\ Un produit \\ Un quotient',
                explanation: 'Le résultat d\'une <strong>division</strong> s\'appelle un <strong>quotient</strong>. Par exemple, dans $20 \\div 4 = 5$, le nombre $5$ est le quotient.'
            },
            {
                quiz: { q: 'Dans le calcul $8 + 13$, comment appelle-t-on les nombres $8$ et $13$ ?', a: 'Des termes' },
                options: 'Des termes \\ Des facteurs \\ Des diviseurs \\ Des quotients',
                explanation: 'Les nombres que l\'on additionne (ou que l\'on soustrait) s\'appellent des <strong>termes</strong>. Ici, $8$ et $13$ sont les termes de l\'addition.'
            },
            {
                quiz: { q: 'Dans le calcul $7 \\times 4$, comment appelle-t-on les nombres $7$ et $4$ ?', a: 'Des facteurs' },
                options: 'Des termes \\ Des facteurs \\ Des diviseurs \\ Des produits',
                explanation: 'Les nombres que l\'on multiplie s\'appellent des <strong>facteurs</strong>. Ici, $7$ et $4$ sont les facteurs de la multiplication.'
            },
            {
                quiz: { q: 'Dans la division $63 \\div 9 = 7$, quel est le dividende ?', a: '63' },
                options: '63 \\ 9 \\ 7 \\ 56',
                explanation: 'Le <strong>dividende</strong> est le nombre que l\'on divise, celui qui est placé <strong>avant</strong> le symbole $\\div$. Ici, c\'est $63$ (le $9$ est le diviseur et le $7$ est le quotient).'
            },
            {
                quiz: { q: 'Dans la division $63 \\div 9 = 7$, quel est le diviseur ?', a: '9' },
                options: '63 \\ 9 \\ 7 \\ 54',
                explanation: 'Le <strong>diviseur</strong> est le nombre par lequel on divise, celui qui est placé <strong>après</strong> le symbole $\\div$. Ici, c\'est $9$ (le $63$ est le dividende et le $7$ est le quotient).'
            },
            {
                quiz: { q: 'Dans le calcul $17 - 5 = 12$, comment appelle-t-on le nombre $12$ ?', a: 'Une différence' },
                options: 'Une différence \\ Une somme \\ Un produit \\ Un terme',
                explanation: 'Le nombre $12$ est le <strong>résultat</strong> d\'une soustraction : on l\'appelle une <strong>différence</strong>. $17$ et $5$ sont, eux, les termes de cette soustraction.'
            },
            {
                quiz: { q: 'Que signifie l\'affirmation « 3 est un diviseur de 12 » ?', a: '12 ÷ 3 donne un résultat exact, sans reste' },
                options: '12 ÷ 3 donne un résultat exact, sans reste \\ 3 × 12 donne un nombre entier \\ 12 est plus petit que 3 \\ 3 est la moitié de 12',
                explanation: 'Dire que $3$ est un <strong>diviseur</strong> de $12$ signifie que la division $12 \\div 3$ tombe juste, sans reste : $12 \\div 3 = 4$. On dit aussi que $12$ est un <strong>multiple</strong> de $3$.'
            }
        ],

        // ------------------------------------------------------------
        // 51103 : Contrôler la vraisemblance d'un résultat
        // 10 questions pour estimer un ordre de grandeur, sans
        // calculatrice, en arrondissant les nombres.
        // ------------------------------------------------------------
        "51103": [
            {
                quiz: { q: 'Sans calculatrice, donne un ordre de grandeur de $19,8 \\times 5,1$', a: '100' },
                options: '10 \\ 100 \\ 1000 \\ 25',
                explanation: 'On arrondit chaque nombre : $19,8 \\approx 20$ et $5,1 \\approx 5$. On calcule ensuite $20 \\times 5 = 100$. L\'ordre de grandeur est donc $100$ (le résultat exact, $100,98$, est proche).'
            },
            {
                quiz: { q: 'Sans calculatrice, donne un ordre de grandeur de $9,8 + 30,3$', a: '40' },
                options: '30 \\ 40 \\ 20 \\ 300',
                explanation: 'On arrondit : $9,8 \\approx 10$ et $30,3 \\approx 30$. On calcule $10 + 30 = 40$. L\'ordre de grandeur est donc $40$.'
            },
            {
                quiz: { q: 'Sans calculatrice, donne un ordre de grandeur de $402 \\times 2,9$', a: '1200' },
                options: '1200 \\ 120 \\ 800 \\ 12000',
                explanation: 'On arrondit : $402 \\approx 400$ et $2,9 \\approx 3$. On calcule $400 \\times 3 = 1200$. L\'ordre de grandeur est donc $1\\,200$.'
            },
            {
                quiz: { q: 'Sans calculatrice, donne un ordre de grandeur de $987 \\div 5,2$', a: '200' },
                options: '20 \\ 200 \\ 2000 \\ 50',
                explanation: 'On arrondit : $987 \\approx 1\\,000$ et $5,2 \\approx 5$. On calcule $1\\,000 \\div 5 = 200$. L\'ordre de grandeur est donc $200$.'
            },
            {
                quiz: { q: 'Sans calculatrice, donne un ordre de grandeur de $61 \\times 39$', a: '2400' },
                options: '2400 \\ 1800 \\ 240 \\ 3000',
                explanation: 'On arrondit : $61 \\approx 60$ et $39 \\approx 40$. On calcule $60 \\times 40 = 2\\,400$. L\'ordre de grandeur est donc $2\\,400$.'
            },
            {
                quiz: { q: 'Sans calculatrice, donne un ordre de grandeur de $199 + 301$', a: '500' },
                options: '400 \\ 500 \\ 600 \\ 50',
                explanation: 'On arrondit : $199 \\approx 200$ et $301 \\approx 300$. On calcule $200 + 300 = 500$. L\'ordre de grandeur est donc $500$ (le résultat exact est $500$ !).'
            },
            {
                quiz: { q: 'Sans calculatrice, donne un ordre de grandeur de $4,9 \\times 21,2$', a: '100' },
                options: '50 \\ 100 \\ 10 \\ 1000',
                explanation: 'On arrondit : $4,9 \\approx 5$ et $21,2 \\approx 20$. On calcule $5 \\times 20 = 100$. L\'ordre de grandeur est donc $100$.'
            },
            {
                quiz: { q: 'Sans calculatrice, donne un ordre de grandeur de $1005 - 498$', a: '500' },
                options: '500 \\ 1500 \\ 600 \\ 50',
                explanation: 'On arrondit : $1\\,005 \\approx 1\\,000$ et $498 \\approx 500$. On calcule $1\\,000 - 500 = 500$. L\'ordre de grandeur est donc $500$.'
            },
            {
                quiz: { q: 'Sans calculatrice, donne un ordre de grandeur de $8,1 \\times 11,9$', a: '96' },
                options: '96 \\ 960 \\ 9,6 \\ 20',
                explanation: 'On arrondit : $8,1 \\approx 8$ et $11,9 \\approx 12$. On calcule $8 \\times 12 = 96$. L\'ordre de grandeur est donc $96$ (proche du résultat exact, $96,39$).'
            },
            {
                quiz: { q: 'Sans calculatrice, donne un ordre de grandeur de $250 \\div 48$', a: '5' },
                options: '5 \\ 50 \\ 0,5 \\ 20',
                explanation: 'On arrondit : $48 \\approx 50$. On calcule $250 \\div 50 = 5$. L\'ordre de grandeur est donc $5$.'
            }
        ],

        // 5EME - CHAPITRE 1 (Opérations) - TITRE H2 2 (Enchaîner des opérations : les priorités opératoires) - pas de TITRE H3 - n° questionnaire

        // ------------------------------------------------------------
        // 51201 : Calculer en respectant les priorités opératoires
        // 20 questions, avec et sans parenthèses.
        // ------------------------------------------------------------
        "51201": [
            {
                quiz: { q: 'Calcule : $5 + 3 \\times 4$', a: '17' },
                options: '17 \\ 32 \\ 12 \\ 8',
                explanation: 'On calcule d\'abord la multiplication : $3 \\times 4 = 12$. Puis l\'addition : $5 + 12 = 17$.'
            },
            {
                quiz: { q: 'Calcule : $12 - 2 \\times 3$', a: '6' },
                options: '6 \\ 30 \\ 10 \\ 4',
                explanation: 'On calcule d\'abord la multiplication : $2 \\times 3 = 6$. Puis la soustraction : $12 - 6 = 6$.'
            },
            {
                quiz: { q: 'Calcule : $20 - 4 \\div 2$', a: '18' },
                options: '18 \\ 8 \\ 16 \\ 22',
                explanation: 'On calcule d\'abord la division : $4 \\div 2 = 2$. Puis la soustraction : $20 - 2 = 18$.'
            },
            {
                quiz: { q: 'Calcule : $6 \\times 2 + 5$', a: '17' },
                options: '17 \\ 42 \\ 7 \\ 30',
                explanation: 'On calcule d\'abord la multiplication : $6 \\times 2 = 12$. Puis l\'addition : $12 + 5 = 17$.'
            },
            {
                quiz: { q: 'Calcule : $18 \\div 3 - 2$', a: '4' },
                options: '4 \\ 12 \\ 6 \\ 9',
                explanation: 'On calcule d\'abord la division : $18 \\div 3 = 6$. Puis la soustraction : $6 - 2 = 4$.'
            },
            {
                quiz: { q: 'Calcule : $7 + 6 \\div 2$', a: '10' },
                options: '10 \\ 6,5 \\ 13 \\ 3,5',
                explanation: 'On calcule d\'abord la division : $6 \\div 2 = 3$. Puis l\'addition : $7 + 3 = 10$.'
            },
            {
                quiz: { q: 'Calcule : $9 \\times 2 - 4 \\times 3$', a: '6' },
                options: '6 \\ 42 \\ 18 \\ 30',
                explanation: 'On calcule d\'abord les deux multiplications : $9 \\times 2 = 18$ et $4 \\times 3 = 12$. Puis la soustraction : $18 - 12 = 6$.'
            },
            {
                quiz: { q: 'Calcule : $15 - 3 \\times 4 + 1$', a: '4' },
                options: '4 \\ 49 \\ 13 \\ 7',
                explanation: 'On calcule d\'abord la multiplication : $3 \\times 4 = 12$. Puis, de gauche à droite : $15 - 12 + 1 = 3 + 1 = 4$.'
            },
            {
                quiz: { q: 'Calcule : $8 \\div 4 + 3 \\times 2$', a: '8' },
                options: '8 \\ 10 \\ 7 \\ 11',
                explanation: 'On calcule d\'abord les deux opérations prioritaires : $8 \\div 4 = 2$ et $3 \\times 2 = 6$. Puis l\'addition : $2 + 6 = 8$.'
            },
            {
                quiz: { q: 'Calcule : $10 - 6 + 2$', a: '6' },
                options: '6 \\ 2 \\ 18 \\ 14',
                explanation: 'Il n\'y a que des additions et des soustractions : on calcule <strong>de gauche à droite</strong> : $10 - 6 = 4$, puis $4 + 2 = 6$.'
            },
            {
                quiz: { q: 'Calcule : $(5 + 3) \\times 4$', a: '32' },
                options: '32 \\ 17 \\ 20 \\ 12',
                explanation: 'On calcule d\'abord la parenthèse : $5 + 3 = 8$. Puis la multiplication : $8 \\times 4 = 32$.'
            },
            {
                quiz: { q: 'Calcule : $(12 - 2) \\times 3$', a: '30' },
                options: '30 \\ 6 \\ 34 \\ 10',
                explanation: 'On calcule d\'abord la parenthèse : $12 - 2 = 10$. Puis la multiplication : $10 \\times 3 = 30$.'
            },
            {
                quiz: { q: 'Calcule : $20 - (4 + 2)$', a: '14' },
                options: '14 \\ 18 \\ 22 \\ 12',
                explanation: 'On calcule d\'abord la parenthèse : $4 + 2 = 6$. Puis la soustraction : $20 - 6 = 14$.'
            },
            {
                quiz: { q: 'Calcule : $(6 + 2) \\times (5 - 3)$', a: '16' },
                options: '16 \\ 37 \\ 10 \\ 40',
                explanation: 'On calcule d\'abord chaque parenthèse : $6 + 2 = 8$ et $5 - 3 = 2$. Puis la multiplication : $8 \\times 2 = 16$.'
            },
            {
                quiz: { q: 'Calcule : $18 \\div (3 - 1)$', a: '9' },
                options: '9 \\ 5 \\ 18 \\ 6',
                explanation: 'On calcule d\'abord la parenthèse : $3 - 1 = 2$. Puis la division : $18 \\div 2 = 9$.'
            },
            {
                quiz: { q: 'Calcule : $100 - (7 + 3) \\times 5$', a: '50' },
                options: '50 \\ 480 \\ 65 \\ 15',
                explanation: 'On calcule d\'abord la parenthèse : $7 + 3 = 10$. Puis la multiplication : $10 \\times 5 = 50$. Enfin la soustraction : $100 - 50 = 50$.'
            },
            {
                quiz: { q: 'Calcule : $(9 - 4) \\times (3 + 2)$', a: '25' },
                options: '25 \\ 17 \\ 45 \\ 5',
                explanation: 'On calcule d\'abord chaque parenthèse : $9 - 4 = 5$ et $3 + 2 = 5$. Puis la multiplication : $5 \\times 5 = 25$.'
            },
            {
                quiz: { q: 'Calcule : $2 \\times (6 + 4) - 5$', a: '15' },
                options: '15 \\ 11 \\ 25 \\ 7',
                explanation: 'On calcule d\'abord la parenthèse : $6 + 4 = 10$. Puis la multiplication : $2 \\times 10 = 20$. Enfin la soustraction : $20 - 5 = 15$.'
            },
            {
                quiz: { q: 'Calcule : $(15 - 9) \\div 3 + 4$', a: '6' },
                options: '6 \\ 16 \\ 3 \\ 10',
                explanation: 'On calcule d\'abord la parenthèse : $15 - 9 = 6$. Puis la division : $6 \\div 3 = 2$. Enfin l\'addition : $2 + 4 = 6$.'
            },
            {
                quiz: { q: 'Calcule : $50 - (2 + 3) \\times (4 - 1)$', a: '35' },
                options: '35 \\ 203 \\ 65 \\ 15',
                explanation: 'On calcule d\'abord chaque parenthèse : $2 + 3 = 5$ et $4 - 1 = 3$. Puis la multiplication : $5 \\times 3 = 15$. Enfin la soustraction : $50 - 15 = 35$.'
            }
        ],

        // 5EME - CHAPITRE 1 (Opérations) - TITRE H2 2 (Enchaîner des opérations : les priorités opératoires) - TITRE H3 1 (Traduire un programme de calcul en une expression) - n° questionnaire

        // ------------------------------------------------------------
        // 51211 : Traduire un programme de calcul en une expression
        // 10 questions.
        // ------------------------------------------------------------
        "51211": [
            {
                quiz: { q: 'En choisissant le nombre 4, écris le calcul en une seule ligne qui correspond au programme suivant : « Choisir un nombre ; lui ajouter 5 ; multiplier le résultat par 3 »', a: '$(4 + 5) \\times 3$' },
                options: '$(4 + 5) \\times 3$ \\ $4 + 5 \\times 3$ \\ $4 \\times 3 + 5$ \\ $4 \\times (3 + 5)$',
                explanation: 'L\'addition doit être calculée <strong>avant</strong> la multiplication : il faut donc l\'entourer de parenthèses. On obtient $(4 + 5) \\times 3$ (qui vaut $27$).'
            },
            {
                quiz: { q: 'En choisissant le nombre 5, écris le calcul en une seule ligne qui correspond au programme suivant : « Choisir un nombre ; le multiplier par 4 ; soustraire 7 au résultat »', a: '$5 \\times 4 - 7$' },
                options: '$5 \\times 4 - 7$ \\ $5 \\times 4$ \\ $5 \\times 4 + 7$ \\ $(5 + 7) \\times 4$',
                explanation: 'La multiplication est calculée en premier <strong>naturellement</strong> (elle est prioritaire), donc aucune parenthèse n\'est nécessaire : $5 \\times 4 - 7$ (qui vaut $13$).'
            },
            {
                quiz: { q: 'En choisissant le nombre 3, écris le calcul en une seule ligne qui correspond au programme suivant : « Choisir un nombre ; ajouter 2 au nombre ; multiplier le résultat par lui-même »', a: '$(3 + 2) \\times (3 + 2)$' },
                options: '$(3 + 2) \\times (3 + 2)$ \\ $3 \\times 3 + 2$ \\ $(3 + 2) \\times 2$ \\ $3 \\times 2 + 2$',
                explanation: '« Multiplier le résultat par lui-même » signifie multiplier $(3+2)$ par $(3+2)$ : il faut mettre des parenthèses autour de l\'addition, effectuée en premier. On obtient $(3+2) \\times (3+2)$ (qui vaut $25$).'
            },
            {
                quiz: { q: 'En choisissant le nombre 8, écris le calcul en une seule ligne qui correspond au programme suivant : « Choisir un nombre ; le diviser par 2 ; ajouter 6 au résultat »', a: '$8 \\div 2 + 6$' },
                options: '$8 \\div 2 + 6$ \\ $8 \\div (2 + 6)$ \\ $(8 + 6) \\div 2$ \\ $8 \\div 2$',
                explanation: 'La division est prioritaire sur l\'addition : elle se calcule donc naturellement en premier, sans qu\'on ait besoin de parenthèses : $8 \\div 2 + 6$ (qui vaut $10$).'
            },
            {
                quiz: { q: 'En choisissant le nombre 13, écris le calcul en une seule ligne qui correspond au programme suivant : « Choisir un nombre ; soustraire 3 au nombre ; diviser le résultat par 5 »', a: '$(13 - 3) \\div 5$' },
                options: '$(13 - 3) \\div 5$ \\ $13 - 3$ \\ $(13 - 3) \\times 5$ \\ $(13 - 3) + 5$',
                explanation: 'La soustraction doit être calculée <strong>avant</strong> la division : il faut donc l\'entourer de parenthèses. On obtient $(13 - 3) \\div 5$ (qui vaut $2$).'
            },
            {
                quiz: { q: 'En choisissant le nombre 2, écris le calcul en une seule ligne qui correspond au programme suivant : « Choisir un nombre ; multiplier ce nombre par 6 ; ajouter 9 ; multiplier le tout par 2 »', a: '$(2 \\times 6 + 9) \\times 2$' },
                options: '$(2 \\times 6 + 9) \\times 2$ \\ $2 \\times 6 + 9 \\times 2$ \\ $2 \\times (6 + 9) \\times 2$ \\ $2 \\times 6 + 9$',
                explanation: '« Multiplier <strong>le tout</strong> par 2 » signifie que toute l\'expression précédente ($2 \\times 6 + 9$) doit être calculée avant d\'être multipliée par 2 : il faut donc l\'entourer de parenthèses. On obtient $(2 \\times 6 + 9) \\times 2$ (qui vaut $42$).'
            },
            {
                quiz: { q: 'En choisissant le nombre 5, écris le calcul en une seule ligne qui correspond au programme suivant : « Choisir un nombre ; ajouter 4 ; diviser le résultat par 3 ; soustraire 1 »', a: '$(5 + 4) \\div 3 - 1$' },
                options: '$(5 + 4) \\div 3 - 1$ \\ $(5 + 4) \\div 3$ \\ $(5 + 4) \\times 3 - 1$ \\ $(5 + 4) \\div 3 + 1$',
                explanation: 'L\'addition doit être calculée avant la division : on met $(5+4)$ entre parenthèses. La soustraction finale, elle, n\'a pas besoin de parenthèses car elle est déjà la dernière étape. On obtient $(5 + 4) \\div 3 - 1$ (qui vaut $2$).'
            },
            {
                quiz: { q: 'En choisissant le nombre 4, écris le calcul en une seule ligne qui correspond au programme suivant : « Choisir un nombre ; multiplier par 3 ; soustraire ce résultat à 20 »', a: '$20 - 4 \\times 3$' },
                options: '$20 - 4 \\times 3$ \\ $(20 - 4) \\times 3$ \\ $4 \\times (20 - 3)$ \\ $20 - 4$',
                explanation: '« Soustraire ce résultat à 20 » signifie que l\'on part de $20$ et que l\'on enlève le résultat précédent : $20 - 4 \\times 3$ (qui vaut $8$). La multiplication reste prioritaire, pas besoin de parenthèses.'
            },
            {
                quiz: { q: 'En choisissant le nombre 2, écris le calcul en une seule ligne qui correspond au programme suivant : « Choisir un nombre ; lui ajouter 8 ; multiplier le résultat par lui-même ; soustraire 10 »', a: '$(2 + 8) \\times (2 + 8) - 10$' },
                options: '$(2 + 8) \\times (2 + 8) - 10$ \\ $2 \\times 2 + 8 - 10$ \\ $(2 + 8) \\times 2 - 10$ \\ $(2 + 8) \\times (2 + 8)$',
                explanation: 'On met des parenthèses autour de $(2+8)$ car cette addition doit être calculée avant d\'être multipliée par elle-même. La soustraction finale de $10$ n\'a pas besoin de parenthèses. On obtient $(2 + 8) \\times (2 + 8) - 10$ (qui vaut $90$).'
            },
            {
                quiz: { q: 'En choisissant le nombre 11, écris le calcul en une seule ligne qui correspond au programme suivant : « Choisir un nombre ; lui retrancher 5 ; diviser le résultat par 2 ; ajouter le nombre de départ »', a: '$(11 - 5) \\div 2 + 11$' },
                options: '$(11 - 5) \\div 2 + 11$ \\ $(11 - 5) \\div 2$ \\ $(11 - 5) \\times 2 + 11$ \\ $(11 + 5) \\div 2 + 11$',
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
                options: '396 \\ 400 \\ 399 \\ 392',
                explanation: '$4 \\times 99 = 4 \\times (100 - 1) = 4\\times100 - 4\\times1 = 400 - 4 = 396$.'
            },
            {
                quiz: { q: 'Calcule $6 \\times 102$ grâce à la décomposition $102 = 100 + 2$.', a: '612' },
                options: '612 \\ 600 \\ 602 \\ 120',
                explanation: '$6 \\times 102 = 6 \\times (100 + 2) = 6\\times100 + 6\\times2 = 600 + 12 = 612$.'
            },
            {
                quiz: { q: 'Quelle décomposition permet de calculer $9 \\times 1001$ le plus facilement de tête ?', a: '1001 = 1000 + 1' },
                options: '1001 = 1000 + 1 \\ 1001 = 1002 - 1 \\ 1001 = 900 + 101 \\ 1001 = 500 + 501',
                explanation: 'On choisit toujours le nombre rond le plus proche : $1000$ est très proche de $1001$, donc $1001 = 1000 + 1$ est la décomposition la plus pratique pour calculer mentalement.'
            },
            {
                quiz: { q: 'Complète : $7 \\times 96 = 7 \\times (100 - 4) = 7\\times100 - 7\\times4 = 700 - 28 = ...$', a: '672' },
                options: '672 \\ 696 \\ 704 \\ 728',
                explanation: '$700 - 28 = 672$. Attention à bien multiplier <strong>le $4$ aussi</strong> par $7$ (et pas seulement le $100$) !'
            },
            {
                quiz: { q: 'Calcule $3 \\times 998$ grâce à la décomposition $998 = 1000 - 2$.', a: '2994' },
                options: '2994 \\ 3000 \\ 2998 \\ 2997',
                explanation: '$3 \\times 998 = 3 \\times (1000 - 2) = 3\\times1000 - 3\\times2 = 3000 - 6 = 2994$.'
            },
            {
                quiz: { q: 'Quelle égalité correspond à la distributivité appliquée à $12 \\times 21$, avec $21 = 20 + 1$ ?', a: '12 × 20 + 12 × 1' },
                options: '12 × 20 + 12 × 1 \\ 12 × 20 + 1 \\ 12 + 20 × 12 + 1 \\ 12 × 20 - 12 × 1',
                explanation: 'On multiplie $12$ par <strong>chacun</strong> des deux termes de la somme $20 + 1$, puis on additionne : $12 \\times 20 + 12 \\times 1$.'
            },
            {
                quiz: { q: 'Calcule $15 \\times 11$ grâce à la décomposition $11 = 10 + 1$.', a: '165' },
                options: '165 \\ 150 \\ 151 \\ 160',
                explanation: '$15 \\times 11 = 15 \\times (10 + 1) = 15\\times10 + 15\\times1 = 150 + 15 = 165$.'
            },
            {
                quiz: { q: 'Complète : $8 \\times 25 = 8 \\times (20 + 5) = 8\\times20 + 8\\times5 = 160 + 40 = ...$', a: '200' },
                options: '200 \\ 196 \\ 164 \\ 240',
                explanation: '$160 + 40 = 200$.'
            },
            {
                quiz: { q: 'Calcule $6 \\times 999$ grâce à la décomposition $999 = 1000 - 1$.', a: '5994' },
                options: '5994 \\ 6000 \\ 5999 \\ 5988',
                explanation: '$6 \\times 999 = 6 \\times (1000 - 1) = 6\\times1000 - 6\\times1 = 6000 - 6 = 5994$.'
            },
            {
                quiz: { q: 'Quelle égalité correspond à la distributivité appliquée à $9 \\times 48$, avec $48 = 50 - 2$ ?', a: '9 × 50 - 9 × 2' },
                options: '9 × 50 - 9 × 2 \\ 9 × 50 - 2 \\ 9 × 50 + 9 × 2 \\ 9 - 50 × 2',
                explanation: 'On multiplie $9$ par <strong>chacun</strong> des deux termes de la différence $50 - 2$, puis on soustrait : $9 \\times 50 - 9 \\times 2$.'
            }
        ],

        // 5EME - CHAPITRE 1 (Opérations) - TITRE H2 4 (Diviser par un nombre décimal) - pas de TITRE H3 - n° questionnaire

        // ------------------------------------------------------------
        // 51401 : Diviser par un nombre décimal
        // 10 questions.
        // ------------------------------------------------------------
        "51401": [
            {
                quiz: { q: 'Pour calculer $15,6 \\div 1,2$, par quel nombre faut-il multiplier le dividende et le diviseur pour obtenir un diviseur entier ?', a: '10' },
                options: '10 \\ 100 \\ 1000 \\ 1',
                explanation: 'Le diviseur $1,2$ a $1$ chiffre après la virgule : on multiplie donc le dividende et le diviseur par $10$.'
            },
            {
                quiz: { q: 'Pour calculer $4,25 \\div 0,05$, par quel nombre faut-il multiplier le dividende et le diviseur pour obtenir un diviseur entier ?', a: '100' },
                options: '10 \\ 100 \\ 1000 \\ 1',
                explanation: 'Le diviseur $0,05$ a $2$ chiffres après la virgule : on multiplie donc le dividende et le diviseur par $100$.'
            },
            {
                quiz: { q: 'Pour calculer $6 \\div 0,125$, par quel nombre faut-il multiplier le dividende et le diviseur pour obtenir un diviseur entier ?', a: '1000' },
                options: '10 \\ 100 \\ 1000 \\ 10000',
                explanation: 'Le diviseur $0,125$ a $3$ chiffres après la virgule : on multiplie donc le dividende et le diviseur par $1\\,000$.'
            },
            {
                quiz: { q: 'Transforme $8,4 \\div 0,2$ en une division équivalente à diviseur entier.', a: '84 ÷ 2' },
                options: '84 ÷ 2 \\ 8,4 ÷ 2 \\ 84 ÷ 20 \\ 840 ÷ 2',
                explanation: '$0,2$ a $1$ chiffre après la virgule, donc on multiplie le dividende <strong>et</strong> le diviseur par $10$ : $8,4 \\times 10 = 84$ et $0,2 \\times 10 = 2$.'
            },
            {
                quiz: { q: 'Transforme $3,6 \\div 0,4$ en une division équivalente à diviseur entier.', a: '36 ÷ 4' },
                options: '36 ÷ 4 \\ 3,6 ÷ 4 \\ 36 ÷ 40 \\ 360 ÷ 4',
                explanation: '$0,4$ a $1$ chiffre après la virgule, donc on multiplie le dividende <strong>et</strong> le diviseur par $10$ : $3,6 \\times 10 = 36$ et $0,4 \\times 10 = 4$.'
            },
            {
                quiz: { q: 'Transforme $12,5 \\div 0,25$ en une division équivalente à diviseur entier.', a: '1250 ÷ 25' },
                options: '1250 ÷ 25 \\ 125 ÷ 25 \\ 1250 ÷ 250 \\ 12,5 ÷ 25',
                explanation: '$0,25$ a $2$ chiffres après la virgule, donc on multiplie le dividende <strong>et</strong> le diviseur par $100$ : $12,5 \\times 100 = 1\\,250$ et $0,25 \\times 100 = 25$.'
            },
            {
                quiz: { q: 'Calcule $9,6 \\div 1,2$.', a: '8' },
                options: '8 \\ 0,8 \\ 80 \\ 96',
                explanation: 'On multiplie le dividende <strong>et</strong> le diviseur par $10$ : $9,6 \\div 1,2 = 96 \\div 12 = 8$. Attention à bien multiplier les <strong>deux</strong> nombres, sinon on change la valeur du quotient !'
            },
            {
                quiz: { q: 'Calcule $5,4 \\div 0,6$.', a: '9' },
                options: '9 \\ 90 \\ 0,9 \\ 3,6',
                explanation: 'On multiplie le dividende <strong>et</strong> le diviseur par $10$ : $5,4 \\div 0,6 = 54 \\div 6 = 9$.'
            },
            {
                quiz: { q: 'Calcule $2,4 \\div 0,08$.', a: '30' },
                options: '30 \\ 3000 \\ 0,3 \\ 3',
                explanation: '$0,08$ a $2$ chiffres après la virgule : on multiplie le dividende <strong>et</strong> le diviseur par $100$ : $2,4 \\div 0,08 = 240 \\div 8 = 30$.'
            },
            {
                quiz: { q: 'Calcule $14 \\div 0,25$.', a: '56' },
                options: '56 \\ 0,56 \\ 5600 \\ 3,5',
                explanation: '$0,25$ a $2$ chiffres après la virgule : on multiplie le dividende <strong>et</strong> le diviseur par $100$ : $14 \\div 0,25 = 1\\,400 \\div 25 = 56$.'
            }
        ],

        // 5EME - CHAPITRE 1 (Opérations) - TITRE H2 5 (Division euclidienne, multiples et diviseurs) - pas de TITRE H3 - n° questionnaire

        // ------------------------------------------------------------
        // 51501 : Problèmes de division euclidienne (quotient, reste,
        // ou combinaison des deux). 20 questions.
        // ------------------------------------------------------------
        "51501": [
            {
                quiz: { q: 'Léa range 95 bonbons dans des sachets de 6 bonbons chacun. Combien de sachets complets peut-elle remplir ?', a: '15' },
                options: '15 \\ 16 \\ 5 \\ 14',
                explanation: '$95 = 6 \\times 15 + 5$. On peut donc remplir $15$ sachets complets (il restera $5$ bonbons).'
            },
            {
                quiz: { q: 'Un autocar peut transporter 9 personnes. On fait monter les 188 personnes d\'un groupe par autocars complets. Combien de personnes ne pourront pas monter dans un autocar complet ?', a: '8' },
                options: '8 \\ 9 \\ 20 \\ 1',
                explanation: '$188 = 9 \\times 20 + 8$. Il restera $8$ personnes qui ne pourront pas remplir un autocar complet.'
            },
            {
                quiz: { q: 'On veut répartir 250 élèves en groupes de 40 pour une sortie. Après avoir formé le plus de groupes complets possible, combien d\'élèves manque-t-il pour compléter un dernier groupe ?', a: '30' },
                options: '30 \\ 10 \\ 6 \\ 40',
                explanation: '$250 = 40 \\times 6 + 10$ : il reste $10$ élèves. Il en manquerait $40 - 10 = 30$ pour former un $7^{\\text{e}}$ groupe complet.'
            },
            {
                quiz: { q: 'Quel est le reste de la division euclidienne de 73 par 5 ?', a: '3' },
                options: '3 \\ 14 \\ 2 \\ 4',
                explanation: '$73 = 5 \\times 14 + 3$. Le reste est $3$ (on vérifie bien que $3 < 5$).'
            },
            {
                quiz: { q: 'Un fleuriste dispose de 312 roses. Il souhaite former des bouquets de 25 roses. Combien de bouquets complets peut-il former ?', a: '12' },
                options: '12 \\ 13 \\ 11 \\ 25',
                explanation: '$312 = 25 \\times 12 + 12$. Il peut former $12$ bouquets complets.'
            },
            {
                quiz: { q: 'Quelle égalité correspond à la division euclidienne de 145 par 12 ?', a: '145 = 12 × 12 + 1' },
                options: '145 = 12 × 12 + 1 \\ 145 = 12 × 11 + 13 \\ 145 = 12 × 13 - 11 \\ 145 = 12 × 12 + 12',
                explanation: 'Dans une division euclidienne, le reste doit toujours être <strong>strictement inférieur</strong> au diviseur. Seule $145 = 12 \\times 12 + 1$ respecte cette condition (le reste $1$ est bien inférieur à $12$).'
            },
            {
                quiz: { q: 'Un traiteur doit livrer 500 petits fours en boîtes de 60. Combien de boîtes complètes peut-il remplir ?', a: '8' },
                options: '8 \\ 9 \\ 7 \\ 20',
                explanation: '$500 = 60 \\times 8 + 20$. Il peut remplir $8$ boîtes complètes.'
            },
            {
                quiz: { q: 'Un traiteur doit livrer 500 petits fours en boîtes de 60. Après avoir rempli le plus de boîtes complètes possible, combien de petits fours manque-t-il pour remplir une boîte supplémentaire ?', a: '40' },
                options: '40 \\ 20 \\ 8 \\ 60',
                explanation: '$500 = 60 \\times 8 + 20$ : il reste $20$ petits fours. Il en manquerait $60 - 20 = 40$ pour remplir une boîte de plus.'
            },
            {
                quiz: { q: 'Quel est le reste de la division euclidienne de 84 par 11 ?', a: '7' },
                options: '7 \\ 8 \\ 4 \\ 77',
                explanation: '$84 = 11 \\times 7 + 7$. Le reste est $7$.'
            },
            {
                quiz: { q: 'Une usine conditionne 215 objets produits dans la journée en cartons de 18. Combien d\'objets ne rentrent pas dans un carton complet à la fin de la journée ?', a: '17' },
                options: '17 \\ 18 \\ 11 \\ 1',
                explanation: '$215 = 18 \\times 11 + 17$. Il reste $17$ objets qui ne rentrent pas dans un carton complet.'
            },
            {
                quiz: { q: 'Combien de fois le nombre 13 est-il contenu dans 99 ?', a: '7' },
                options: '7 \\ 8 \\ 6 \\ 13',
                explanation: '$99 = 13 \\times 7 + 8$. Le nombre $13$ est contenu $7$ fois entières dans $99$.'
            },
            {
                quiz: { q: 'Une année compte 365 jours. Combien de semaines complètes cette année compte-t-elle ?', a: '52' },
                options: '52 \\ 53 \\ 51 \\ 7',
                explanation: '$365 = 7 \\times 52 + 1$. Cette année compte $52$ semaines complètes.'
            },
            {
                quiz: { q: 'Une année compte 365 jours. Une fois les semaines complètes comptées, combien de jours restent ?', a: '1' },
                options: '1 \\ 7 \\ 52 \\ 0',
                explanation: '$365 = 7 \\times 52 + 1$. Il reste $1$ jour après les $52$ semaines complètes.'
            },
            {
                quiz: { q: 'Quel est le reste de la division euclidienne de 58 par 9 ?', a: '4' },
                options: '4 \\ 6 \\ 5 \\ 9',
                explanation: '$58 = 9 \\times 6 + 4$. Le reste est $4$.'
            },
            {
                quiz: { q: 'On veut répartir 127 jetons en piles de 15 jetons. Après avoir formé le plus de piles complètes possible, combien de jetons manque-t-il pour compléter une pile supplémentaire ?', a: '8' },
                options: '8 \\ 7 \\ 15 \\ 127',
                explanation: '$127 = 15 \\times 8 + 7$ : il reste $7$ jetons. Il en manquerait $15 - 7 = 8$ pour compléter une pile de plus.'
            },
            {
                quiz: { q: 'Un cinéma dispose de 240 fauteuils à installer par rangées de 35. Combien de rangées complètes peut-on former ?', a: '6' },
                options: '6 \\ 7 \\ 5 \\ 30',
                explanation: '$240 = 35 \\times 6 + 30$. On peut former $6$ rangées complètes.'
            },
            {
                quiz: { q: 'Un cinéma dispose de 240 fauteuils à installer par rangées de 35. Combien de fauteuils ne rentrent pas dans une rangée complète ?', a: '30' },
                options: '30 \\ 35 \\ 6 \\ 5',
                explanation: '$240 = 35 \\times 6 + 30$. Il reste $30$ fauteuils qui ne forment pas une rangée complète.'
            },
            {
                quiz: { q: 'Quelle égalité correspond à la division euclidienne de 91 par 10 ?', a: '91 = 10 × 9 + 1' },
                options: '91 = 10 × 9 + 1 \\ 91 = 10 × 8 + 11 \\ 91 = 10 × 9 - 1 \\ 91 = 10 × 10 - 9',
                explanation: 'Le reste doit être strictement inférieur au diviseur, et l\'écriture doit être une <strong>somme</strong> (pas une différence). Seule $91 = 10 \\times 9 + 1$ respecte ces deux conditions.'
            },
            {
                quiz: { q: 'Quel est le reste de la division euclidienne de 162 par 14 ?', a: '8' },
                options: '8 \\ 11 \\ 6 \\ 14',
                explanation: '$162 = 14 \\times 11 + 8$. Le reste est $8$.'
            },
            {
                quiz: { q: 'Un pâtissier a fabriqué 500 macarons qu\'il conditionne dans des boîtes de 23. Combien de boîtes peut-il remplir complètement ?', a: '21' },
                options: '21 \\ 22 \\ 20 \\ 17',
                explanation: '$500 = 23 \\times 21 + 17$. Il peut remplir $21$ boîtes complètes.'
            }
        ],

        // 5EME - CHAPITRE 1 (Opérations) - TITRE H2 5 (Division euclidienne, multiples et diviseurs) - TITRE H3 1 (Multiples et diviseurs) - n° questionnaire

        // ------------------------------------------------------------
        // 51511 : Multiples et diviseurs — 8 questions de vocabulaire,
        // 5 questions sur les listes de diviseurs, 7 problèmes
        // progressifs de diviseur commun (nombres < 100). 20 questions.
        // ------------------------------------------------------------
        "51511": [
            {
                quiz: { q: 'On sait que $28 = 7 \\times 4$. Que peut-on dire de 28 par rapport à 7 ?', a: '28 est un multiple de 7' },
                options: '28 est un multiple de 7 \\ 28 est un diviseur de 7 \\ 7 est un multiple de 28 \\ 28 n\'a aucun lien avec 7',
                explanation: 'Puisque $28 = 7 \\times 4$ (un nombre entier de fois $7$), on dit que $28$ est un <strong>multiple</strong> de $7$.'
            },
            {
                quiz: { q: 'On sait que $28 = 7 \\times 4$. Que peut-on dire de 7 par rapport à 28 ?', a: '7 est un diviseur de 28' },
                options: '7 est un diviseur de 28 \\ 7 est un multiple de 28 \\ 28 est un diviseur de 7 \\ 4 est un diviseur de 7',
                explanation: 'Puisque $28 \\div 7$ tombe juste (le reste est nul), on dit que $7$ est un <strong>diviseur</strong> de $28$.'
            },
            {
                quiz: { q: 'Pourquoi peut-on dire que 5 est un diviseur de 45 ?', a: 'Car 45 = 5 × 9, sans reste' },
                options: 'Car 45 = 5 × 9, sans reste \\ Car 45 + 5 = 50 \\ Car 5 est plus petit que 45 \\ Car 45 est un nombre impair',
                explanation: '$5$ est un diviseur de $45$ car la division $45 \\div 5 = 9$ tombe juste, <strong>sans reste</strong> : $45 = 5 \\times 9$.'
            },
            {
                quiz: { q: 'Que peut-on dire de 60 par rapport à 8 ?', a: '60 n\'est pas un multiple de 8' },
                options: '60 est un multiple de 8 \\ 60 est un diviseur de 8 \\ 60 n\'est pas un multiple de 8 \\ 8 est un multiple de 60',
                explanation: '$60 = 8 \\times 7 + 4$ : la division de $60$ par $8$ laisse un reste de $4$ (différent de $0$), donc $60$ n\'est <strong>pas</strong> un multiple de $8$.'
            },
            {
                quiz: { q: 'Parmi ces affirmations, laquelle est vraie ?', a: '3 est un diviseur de 51' },
                options: '3 est un diviseur de 51 \\ 3 est un diviseur de 50 \\ 5 est un diviseur de 51 \\ 6 est un diviseur de 51',
                explanation: '$51 = 3 \\times 17$ : la division tombe juste, donc $3$ est bien un diviseur de $51$. Ce n\'est le cas d\'aucune des trois autres propositions.'
            },
            {
                quiz: { q: 'Si $a$ est un multiple de $b$, que peut-on dire de $b$ par rapport à $a$ ?', a: 'b est un diviseur de a' },
                options: 'b est un diviseur de a \\ b est un multiple de a \\ a et b sont forcément égaux \\ b est toujours plus grand que a',
                explanation: '« $a$ est un multiple de $b$ » et « $b$ est un diviseur de $a$ » décrivent exactement la <strong>même situation</strong>, vue sous deux angles différents.'
            },
            {
                quiz: { q: '36 est un multiple de 9. Quelle autre phrase est également vraie ?', a: '9 est un diviseur de 36' },
                options: '9 est un diviseur de 36 \\ 36 est un diviseur de 9 \\ 9 est un multiple de 36 \\ 36 n\'a pas de lien avec 9',
                explanation: 'Si $36$ est un multiple de $9$, alors, de façon équivalente, $9$ est un <strong>diviseur</strong> de $36$.'
            },
            {
                quiz: { q: 'Tout nombre entier est-il un multiple de 1 ?', a: 'Oui, car n = 1 × n pour tout nombre n' },
                options: 'Oui, car n = 1 × n pour tout nombre n \\ Non, seuls les nombres pairs le sont \\ Non, seul le nombre 1 est concerné \\ Oui, mais seulement pour les nombres impairs',
                explanation: 'Pour <strong>tout</strong> nombre entier $n$, on peut écrire $n = 1 \\times n$ : $1$ est donc un diviseur de tous les nombres entiers, et tout nombre entier est un multiple de $1$.'
            },
            {
                quiz: { q: 'Quelle est la liste complète des diviseurs de 18 ?', a: '1 ; 2 ; 3 ; 6 ; 9 ; 18' },
                options: '1 ; 2 ; 3 ; 6 ; 9 ; 18 \\ 1 ; 2 ; 3 ; 6 ; 18 \\ 1 ; 2 ; 3 ; 9 ; 18 \\ 1 ; 3 ; 6 ; 9 ; 18',
                explanation: 'Les diviseurs de $18$ sont tous les nombres qui le divisent exactement : $1, 2, 3, 6, 9$ et $18$ (on a oublié $9$ ou $6$ dans les autres listes).'
            },
            {
                quiz: { q: 'Quelle est la liste complète des diviseurs de 20 ?', a: '1 ; 2 ; 4 ; 5 ; 10 ; 20' },
                options: '1 ; 2 ; 4 ; 5 ; 10 ; 20 \\ 1 ; 2 ; 4 ; 10 ; 20 \\ 1 ; 2 ; 5 ; 10 ; 20 \\ 1 ; 4 ; 5 ; 10 ; 20',
                explanation: 'Les diviseurs de $20$ sont $1, 2, 4, 5, 10$ et $20$.'
            },
            {
                quiz: { q: 'Combien 24 a-t-il de diviseurs au total ?', a: '8' },
                options: '8 \\ 6 \\ 7 \\ 9',
                explanation: 'Les diviseurs de $24$ sont $1, 2, 3, 4, 6, 8, 12, 24$ : cela fait $8$ diviseurs en tout.'
            },
            {
                quiz: { q: 'Quelle est la liste complète des diviseurs de 30 ?', a: '1 ; 2 ; 3 ; 5 ; 6 ; 10 ; 15 ; 30' },
                options: '1 ; 2 ; 3 ; 5 ; 6 ; 10 ; 15 ; 30 \\ 1 ; 2 ; 3 ; 5 ; 6 ; 15 ; 30 \\ 1 ; 2 ; 3 ; 5 ; 10 ; 15 ; 30 \\ 1 ; 3 ; 5 ; 6 ; 10 ; 15 ; 30',
                explanation: 'Les diviseurs de $30$ sont $1, 2, 3, 5, 6, 10, 15$ et $30$.'
            },
            {
                quiz: { q: 'Parmi les nombres suivants, lequel n\'est PAS un diviseur de 36 ?', a: '8' },
                options: '8 \\ 9 \\ 12 \\ 6',
                explanation: 'Les diviseurs de $36$ sont $1, 2, 3, 4, 6, 9, 12, 18, 36$. Le nombre $8$ n\'en fait pas partie ($36 \\div 8$ ne tombe pas juste).'
            },
            {
                quiz: { q: 'Quels sont tous les diviseurs communs à 12 et 18 ?', a: '1 ; 2 ; 3 ; 6' },
                options: '1 ; 2 ; 3 ; 6 \\ 1 ; 2 ; 3 \\ 1 ; 2 ; 3 ; 6 ; 9 \\ 1 ; 3 ; 6 ; 9',
                explanation: 'Diviseurs de $12$ : $1,2,3,4,6,12$. Diviseurs de $18$ : $1,2,3,6,9,18$. Les diviseurs <strong>communs</strong> aux deux listes sont $1, 2, 3$ et $6$.'
            },
            {
                quiz: { q: 'Quel est le plus grand diviseur commun à 12 et 18 ?', a: '6' },
                options: '6 \\ 3 \\ 2 \\ 36',
                explanation: 'Parmi les diviseurs communs à $12$ et $18$ ($1, 2, 3, 6$), le plus grand est $6$.'
            },
            {
                quiz: { q: 'Un jardinier veut répartir 24 tulipes et 36 roses dans des bouquets identiques (même nombre de tulipes et même nombre de roses dans chaque bouquet), sans qu\'il n\'en reste. Quel est le nombre maximal de bouquets qu\'il peut réaliser ?', a: '12' },
                options: '12 \\ 6 \\ 4 \\ 24',
                explanation: 'Il faut trouver le plus grand diviseur commun à $24$ et $36$. C\'est $12$ (on vérifie : $24 = 12 \\times 2$ et $36 = 12 \\times 3$).'
            },
            {
                quiz: { q: 'Une couturière dispose de 45 boutons rouges et 75 boutons bleus. Elle veut préparer des sachets identiques contenant chacun le même nombre de boutons rouges et le même nombre de boutons bleus, sans qu\'il n\'en reste. Quel est le nombre maximal de sachets qu\'elle peut préparer ?', a: '15' },
                options: '15 \\ 5 \\ 9 \\ 45',
                explanation: 'Il faut trouver le plus grand diviseur commun à $45$ et $75$. C\'est $15$ (on vérifie : $45 = 15 \\times 3$ et $75 = 15 \\times 5$).'
            },
            {
                quiz: { q: 'Un professeur a 56 crayons et 84 gommes à répartir équitablement entre plusieurs élèves, sans qu\'il ne reste ni crayon ni gomme. Quel est le nombre maximal d\'élèves qu\'il peut servir ?', a: '28' },
                options: '28 \\ 14 \\ 7 \\ 56',
                explanation: 'Il faut trouver le plus grand diviseur commun à $56$ et $84$. C\'est $28$ (on vérifie : $56 = 28 \\times 2$ et $84 = 28 \\times 3$).'
            },
            {
                quiz: { q: 'On veut carreler une pièce rectangulaire de 72 cm sur 90 cm avec des carreaux carrés identiques, sans aucune découpe. Quelle est la plus grande taille possible (en cm) pour le côté de ces carreaux ?', a: '18' },
                options: '18 \\ 9 \\ 6 \\ 36',
                explanation: 'Il faut trouver le plus grand diviseur commun à $72$ et $90$. C\'est $18$ (on vérifie : $72 = 18 \\times 4$ et $90 = 18 \\times 5$).'
            },
            {
                quiz: { q: 'Un boulanger a préparé 84 croissants et 98 pains au chocolat. Il veut composer des plateaux identiques contenant le même nombre de croissants et le même nombre de pains au chocolat, sans qu\'il n\'en reste. Quel est le nombre maximal de plateaux qu\'il peut composer ?', a: '14' },
                options: '14 \\ 7 \\ 28 \\ 84',
                explanation: 'Il faut trouver le plus grand diviseur commun à $84$ et $98$. C\'est $14$ (on vérifie : $84 = 14 \\times 6$ et $98 = 14 \\times 7$).'
            }
        ]
};