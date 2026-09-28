// ============================================================
// data/localQuestions_5eme_chapitre02.js — 5ème, chapitre 2 : Nombres relatifs
// ============================================================
// Généré à partir de l'ancien data/localQuestions5eme.js.
// Clés renumérotées au format 6 chiffres : [niveau][chapitre 2 chiffres]
// [n° partie H2][n° sous-partie H3][n° questionnaire dans la sous-partie].
// Contenu des questions strictement inchangé, seule la clé a changé —
// voir le rapport de correspondance mapping_5eme.csv pour
// retrouver l'ancienne clé de chaque questionnaire.
// ============================================================

const localQuestions_5eme_chapitre02 = {
    "502111": [
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

    "502121": [
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

    "502211": [
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

    "502311": [
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

    "502411": [
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

    "502511": [
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

    "502521": [
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

    "502611": [
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

    "502621": [
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

    "502711": [
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
        ]
};
