// ============================================================
// data/localQuestions_3eme_chapitre01.js — 3ème, chapitre 1 : Nombres et calculs (Relatifs, fractions, racine carrée, puissances)
// ============================================================
// Généré à partir de l'ancien data/localQuestions.js.
// Clés renumérotées au format 6 chiffres : [niveau][chapitre 2 chiffres]
// [n° partie H2][n° sous-partie H3][n° questionnaire dans la sous-partie].
// Contenu des questions strictement inchangé, seule la clé a changé —
// voir le rapport de correspondance mapping_3eme.csv pour
// retrouver l'ancienne clé de chaque questionnaire.
// ============================================================

const localQuestions_3eme_chapitre01 = {
    "301111": [ // NOMBRES RELATIFS
            {
                quiz: { q: '(-5) + (-3) = ?', a: '-8' },
                options: '-2 ¤ -8 ¤ +8 ¤ -15',
                explanation: 'Quand deux nombres ont le <strong>même signe</strong>, on additionne leurs valeurs absolues et on garde ce signe. Ici : $5 + 3 = 8$, et les deux sont négatifs, donc le résultat est $-8$. Le piège courant est de soustraire ($-5 - 3 = -2$) : c\'est faux, ce sont deux nombres négatifs qu\'on <em>ajoute</em>.'
            },
            {
                quiz: { q: '(-7) + (+10) = ?', a: '3' },
                options: '-3 ¤ 3 ¤ 17 ¤ -17',
                explanation: 'Quand deux nombres ont des <strong>signes différents</strong>, on fait la différence de leurs valeurs absolues ($10 - 7 = 3$) et on garde le signe du nombre qui a la plus grande valeur absolue. Ici $10 > 7$ et $10$ est positif, donc le résultat est $+3$.'
            },
            {
                quiz: { q: '(-4) × (-3) = ?', a: '12' },
                options: '-12 ¤ 12 ¤ -7 ¤ 7',
                explanation: 'Règle des signes pour la <strong>multiplication</strong> : deux signes identiques donnent $+$, deux signes différents donnent $-$. Ici $(-) \\times (-) = (+)$, et $4 \\times 3 = 12$, donc le résultat est $+12$. Mémo : "moins fois moins = plus".'
            },
            {
                quiz: { q: '(-12) ÷ 3 = ?', a: '-4' },
                options: '-4 ¤ 4 ¤ -9 ¤ 36',
                explanation: 'Même règle des signes qu\'en multiplication : $(-) \\div (+) = (-)$. On calcule $12 \\div 3 = 4$ et on met le signe $-$ car les signes sont différents. Résultat : $-4$.'
            },
            {
                quiz: { q: '(-8) - (-2) = ?', a: '-6' },
                options: '-10 ¤ -6 ¤ 6 ¤ 10',
                explanation: 'Soustraire un nombre négatif revient à <strong>ajouter son opposé</strong> : $(-8) - (-2) = -8 + 2$. On a alors deux signes différents : $8 - 2 = 6$, avec le signe de $-8$ (la plus grande valeur absolue), donc $-6$. Le piège est de faire $-8 - 2 = -10$ en ignorant le double négatif.'
            },
            {
                quiz: { q: '15 + (-5) = ?', a: '10' },
                options: '20 ¤ -20 ¤ 10 ¤ -10',
                explanation: '$15 + (-5)$ est équivalent à $15 - 5 = 10$. Ajouter un nombre négatif revient à soustraire sa valeur absolue. $15$ est positif et plus grand, donc le résultat est positif.'
            },
            {
                quiz: { q: '(-1) × (-1) × (-1) = ?', a: '-1' },
                options: '-1 ¤ 1 ¤ -3 ¤ 3',
                explanation: 'On évalue de gauche à droite : $(-1) \\times (-1) = +1$, puis $+1 \\times (-1) = -1$. Règle générale : un nombre <strong>impair</strong> de facteurs négatifs donne un résultat négatif. Ici 3 facteurs négatifs (impair) → résultat $-1$.'
            },
            {
                quiz: { q: '(-20) ÷ (-4) = ?', a: '5' },
                options: '-5 ¤ 5 ¤ -16 ¤ 16',
                explanation: '$(-) \\div (-) = (+)$ : deux signes identiques donnent un résultat positif. Puis $20 \\div 4 = 5$. Résultat : $+5$. C\'est la même règle qu\'en multiplication.'
            },
            {
                quiz: { q: '(-2) × 5 = ?', a: '-10' },
                options: '-10 ¤ 10 ¤ -7 ¤ 7',
                explanation: '$(-) \\times (+) = (-)$ : signes différents → résultat négatif. $2 \\times 5 = 10$, donc $(-2) \\times 5 = -10$.'
            },
            {
                quiz: { q: '10 + (-10) = ?', a: '0' },
                options: '20 ¤ -20 ¤ 0 ¤ 100',
                explanation: '$10 + (-10) = 10 - 10 = 0$. La somme d\'un nombre et de son <strong>opposé</strong> est toujours nulle. $-10$ est l\'opposé de $10$ : leurs valeurs absolues s\'annulent.'
            }
        ],

    "301211": [ // FRACTIONS
            {
                quiz: { q: 'Simplifier $\\dfrac{10}{15}$', a: '2/3' },
                options: '1/5 ¤ 2/3 ¤ 3/2 ¤ 10/15',
                explanation: 'Pour simplifier une fraction, on cherche un <strong>diviseur commun</strong> au numérateur et au dénominateur. Ici $10 = 2 \\times 5$ et $15 = 3 \\times 5$ : le PGCD est $5$. On divise : $10 \\div 5 = 2$ et $15 \\div 5 = 3$. La fraction irréductible est $\\dfrac{2}{3}$.'
            },
            {
                quiz: { q: 'Calculer $\\dfrac{1}{2} + \\dfrac{1}{4}$', a: '3/4' },
                options: '2/6 ¤ 2/4 ¤ 3/4 ¤ 1/8',
                explanation: 'On ne peut additionner des fractions qu\'avec le <strong>même dénominateur</strong>. Ici on réduit $\\dfrac{1}{2}$ au dénominateur $4$ : $\\dfrac{1}{2} = \\dfrac{2}{4}$. Puis $\\dfrac{2}{4} + \\dfrac{1}{4} = \\dfrac{3}{4}$. L\'erreur fréquente est d\'additionner numérateurs ET dénominateurs ($\\dfrac{2}{6}$), ce qui est faux.'
            },
            {
                quiz: { q: 'Calculer $\\dfrac{2}{3} - \\dfrac{1}{6}$', a: '1/2' },
                options: '1/3 ¤ 1/6 ¤ 1/2 ¤ 3/9',
                explanation: 'On cherche le dénominateur commun. $\\text{ppcm}(3, 6) = 6$. On convertit : $\\dfrac{2}{3} = \\dfrac{4}{6}$. Puis $\\dfrac{4}{6} - \\dfrac{1}{6} = \\dfrac{3}{6} = \\dfrac{1}{2}$ (en simplifiant par 3).'
            },
            {
                quiz: { q: 'Calculer $\\dfrac{3}{4} \\times \\dfrac{5}{7}$', a: '15/28' },
                options: '8/11 ¤ 15/28 ¤ 15/7 ¤ 3/28',
                explanation: 'Pour multiplier des fractions, on multiplie <strong>numérateur × numérateur</strong> et <strong>dénominateur × dénominateur</strong> : $\\dfrac{3 \\times 5}{4 \\times 7} = \\dfrac{15}{28}$. Contrairement à l\'addition, <em>pas besoin</em> de mettre au même dénominateur.'
            },
            {
                quiz: { q: 'Calculer $2 \\div \\dfrac{1}{3}$', a: '6' },
                options: '2/3 ¤ 3/2 ¤ 6 ¤ 1/6',
                explanation: 'Diviser par une fraction revient à <strong>multiplier par son inverse</strong>. L\'inverse de $\\dfrac{1}{3}$ est $\\dfrac{3}{1} = 3$. Donc $2 \\div \\dfrac{1}{3} = 2 \\times 3 = 6$. Astuce : "diviser par $\\dfrac{1}{3}$, c\'est prendre 3 fois plus".'
            },
            {
                quiz: { q: 'Simplifier $\\dfrac{12}{18}$', a: '2/3' },
                options: '6/9 ¤ 2/3 ¤ 4/6 ¤ 12/18',
                explanation: '$12 = 2 \\times 6$ et $18 = 3 \\times 6$. Le PGCD de 12 et 18 est $6$. On divise numérateur et dénominateur par 6 : $\\dfrac{12 \\div 6}{18 \\div 6} = \\dfrac{2}{3}$. Les réponses $\\dfrac{6}{9}$ ou $\\dfrac{4}{6}$ sont équivalentes mais non <em>irréductibles</em>.'
            },
            {
                quiz: { q: 'Calculer $\\dfrac{1}{5} + \\dfrac{2}{5}$', a: '3/5' },
                options: '3/10 ¤ 3/5 ¤ 3/25 ¤ 2/25',
                explanation: 'Les dénominateurs sont déjà identiques ($5$), donc on additionne uniquement les numérateurs : $1 + 2 = 3$. Le dénominateur reste $5$. Résultat : $\\dfrac{3}{5}$. Surtout ne pas additionner les dénominateurs !'
            },
            {
                quiz: { q: 'Calculer $\\dfrac{1}{2} \\times \\dfrac{1}{2}$', a: '1/4' },
                options: '1/2 ¤ 2/4 ¤ 1/4 ¤ 1',
                explanation: '$\\dfrac{1 \\times 1}{2 \\times 2} = \\dfrac{1}{4}$. Intuitivement : prendre "la moitié de la moitié" donne le quart. Notez que $\\dfrac{2}{4}$ serait aussi juste mais n\'est pas irréductible ($\\dfrac{2}{4} = \\dfrac{1}{2}$ est faux — $\\dfrac{2}{4}$ se simplifie en $\\dfrac{1}{2}$).'
            },
            {
                quiz: { q: 'Calculer $\\dfrac{3}{5} \\div 2$', a: '3/10' },
                options: '6/5 ¤ 3/10 ¤ 1/10 ¤ 3/7',
                explanation: 'Diviser par $2$ revient à multiplier par $\\dfrac{1}{2}$. Donc $\\dfrac{3}{5} \\times \\dfrac{1}{2} = \\dfrac{3 \\times 1}{5 \\times 2} = \\dfrac{3}{10}$. L\'erreur fréquente est de diviser uniquement le dénominateur (donnant $\\dfrac{3}{10}$ par chance ici) ou de multiplier par 2 (donnant $\\dfrac{6}{5}$).'
            },
            {
                quiz: { q: 'Simplifier $\\dfrac{20}{100}$', a: '1/5' },
                options: '2/10 ¤ 1/5 ¤ 20/100 ¤ 4/20',
                explanation: 'Le PGCD de 20 et 100 est 20. $\\dfrac{20 \\div 20}{100 \\div 20} = \\dfrac{1}{5}$. On peut aussi raisonner : $\\dfrac{20}{100}$ c\'est $20\\%$, et $20\\% = \\dfrac{1}{5}$. Les réponses $\\dfrac{2}{10}$ ou $\\dfrac{4}{20}$ sont équivalentes mais pas irréductibles.'
            },
            {
                quiz: { q: 'Calculer $\\dfrac{1}{3} + \\dfrac{1}{3}$', a: '2/3' },
                options: '2/6 ¤ 2/9 ¤ 2/3 ¤ 1/6',
                explanation: 'Même dénominateur : on additionne les numérateurs, le dénominateur reste inchangé. $\\dfrac{1+1}{3} = \\dfrac{2}{3}$. $\\dfrac{2}{6}$ serait une erreur de réduction (on n\'a pas à diviser le dénominateur), $\\dfrac{2}{9}$ correspondrait à multiplier les dénominateurs (faux pour une addition).'
            }
        ],

    "301311": [ // RACINES CARRÉES
            {
                quiz: { q: 'Entre quels entiers consécutifs se situe $\\sqrt{40}$ ?', a: '6' },
                options: '5 ¤ 6 ¤ 7 ¤ 8',
                explanation: 'Pour encadrer $\\sqrt{40}$, on cherche les deux carrés parfaits qui <strong>encadrent 40</strong>. $6^2 = 36$ et $7^2 = 49$. Comme $36 < 40 < 49$, on a $6 < \\sqrt{40} < 7$. La bonne réponse est donc 6 (la partie entière de $\\sqrt{40}$). <em>Méthode</em> : calculer les carrés des entiers jusqu\'à trouver l\'encadrement.'
            },
            {
                quiz: { q: '$\\sqrt{81} = ?$', a: '9' },
                options: '8 ¤ 9 ¤ 10 ¤ 40,5',
                explanation: '$\\sqrt{81} = 9$ car $9 \\times 9 = 81$. Pour le vérifier : $9^2 = 81$ ✓. Ce sont des <strong>carrés parfaits</strong> à connaître par cœur : $1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144...$'
            },
            {
                quiz: { q: 'Entre quels entiers consécutifs se situe $\\sqrt{10}$ ?', a: '3' },
                options: '2 ¤ 3 ¤ 4 ¤ 5',
                explanation: '$3^2 = 9$ et $4^2 = 16$. Comme $9 < 10 < 16$, on a $3 < \\sqrt{10} < 4$. La partie entière de $\\sqrt{10}$ est donc $3$.'
            },
            {
                quiz: { q: '$\\sqrt{0} = ?$', a: '0' },
                options: '0 ¤ 1 ¤ indéfini ¤ impossible',
                explanation: '$\\sqrt{0} = 0$ car $0 \\times 0 = 0$. La racine carrée de 0 est 0, c\'est le seul nombre dont le carré est nul. Ce n\'est pas indéfini (l\'indéfini, c\'est $\\sqrt{\\text{nombre négatif}}$ dans les réels).'
            },
            {
                quiz: { q: '$\\sqrt{144} = ?$', a: '12' },
                options: '11 ¤ 12 ¤ 13 ¤ 72',
                explanation: '$12 \\times 12 = 144$, donc $\\sqrt{144} = 12$. L\'erreur fréquente est de répondre $72$ (moitié de 144) — attention, la racine carrée n\'est <em>pas</em> la moitié du nombre !'
            },
            {
                quiz: { q: 'Entre quels entiers consécutifs se situe $\\sqrt{50}$ ?', a: '7' },
                options: '5 ¤ 6 ¤ 7 ¤ 8',
                explanation: '$7^2 = 49$ et $8^2 = 64$. Comme $49 < 50 < 64$, on a $7 < \\sqrt{50} < 8$. $\\sqrt{50}$ est très proche de 7 (puisque $50 - 49 = 1$, tout petit écart).'
            },
            {
                quiz: { q: '$\\sqrt{25} + \\sqrt{16} = ?$', a: '9' },
                options: '$\\sqrt{41}$ ¤ 7 ¤ 9 ¤ 20',
                explanation: 'On calcule <strong>chaque racine séparément</strong> avant d\'additionner : $\\sqrt{25} = 5$ et $\\sqrt{16} = 4$, donc $5 + 4 = 9$. L\'erreur classique est d\'additionner sous le radical : $\\sqrt{25 + 16} = \\sqrt{41}$ — c\'est une propriété <em>fausse</em>. $\\sqrt{a} + \\sqrt{b} \\neq \\sqrt{a+b}$.'
            },
            {
                quiz: { q: 'Entre quels entiers consécutifs se situe $\\sqrt{2}$ ?', a: '1' },
                options: '0 ¤ 1 ¤ 2 ¤ 3',
                explanation: '$1^2 = 1$ et $2^2 = 4$. Comme $1 < 2 < 4$, on a $1 < \\sqrt{2} < 2$. $\\sqrt{2} \\approx 1,414$ est un nombre <strong>irrationnel</strong> célèbre. Sa partie entière est bien 1.'
            },
            {
                quiz: { q: 'Entre quels entiers consécutifs se situe $\\sqrt{30}$ ?', a: '5' },
                options: '4 ¤ 5 ¤ 6 ¤ 7',
                explanation: '$5^2 = 25$ et $6^2 = 36$. Comme $25 < 30 < 36$, on a $5 < \\sqrt{30} < 6$. $\\sqrt{30}$ est donc entre 5 et 6, sa partie entière est 5.'
            },
            {
                quiz: { q: '$\\sqrt{100} = ?$', a: '10' },
                options: '10 ¤ 50 ¤ 20 ¤ 5',
                explanation: '$10 \\times 10 = 100$, donc $\\sqrt{100} = 10$. À ne pas confondre avec $100 \\div 2 = 50$ (la moitié) ou $100 \\div 5 = 20$. La racine carrée et la division sont deux opérations différentes.'
            }
        ],

    "301411": [ // PUISSANCES
            {
                quiz: { q: '$10^2 = ?$', a: '100' },
                options: '20 ¤ 100 ¤ 1000 ¤ 12',
                explanation: '$10^2$ signifie $10 \\times 10 = 100$. L\'exposant indique combien de fois on multiplie la base par elle-même. Attention : $10^2 \\neq 10 \\times 2 = 20$ (confusion fréquente entre puissance et multiplication).'
            },
            {
                quiz: { q: '$10^{-2} = ?$', a: '0,01' },
                options: '-100 ¤ 0,1 ¤ 0,01 ¤ -20',
                explanation: 'Un exposant négatif signifie qu\'on prend l\'<strong>inverse</strong> : $10^{-2} = \\dfrac{1}{10^2} = \\dfrac{1}{100} = 0{,}01$. Mémo : $10^{-n}$ donne un nombre décimal avec $n-1$ zéros après la virgule. $10^{-1} = 0{,}1$ ; $10^{-2} = 0{,}01$ ; $10^{-3} = 0{,}001$...'
            },
            {
                quiz: { q: '$2^3 = ?$', a: '8' },
                options: '6 ¤ 8 ¤ 9 ¤ 16',
                explanation: '$2^3 = 2 \\times 2 \\times 2 = 4 \\times 2 = 8$. Attention : $2^3 \\neq 2 \\times 3 = 6$ et $\\neq 3^2 = 9$. On multiplie la base ($2$) par elle-même autant de fois que l\'indique l\'exposant ($3$ fois).'
            },
            {
                quiz: { q: '$a^0 = ?$ (avec $a \\neq 0$)', a: '1' },
                options: '0 ¤ 1 ¤ a ¤ indéfini',
                explanation: 'Par convention mathématique, tout nombre non nul à la puissance $0$ vaut $1$. Justification : $\\dfrac{a^n}{a^n} = a^{n-n} = a^0$ et $\\dfrac{a^n}{a^n} = 1$. Donc $a^0 = 1$. Exception : $0^0$ est indéfini.'
            },
            {
                quiz: { q: '$10^5 = ?$', a: '100000' },
                options: '50 ¤ 10005 ¤ 100000 ¤ 50000',
                explanation: '$10^5 = 10 \\times 10 \\times 10 \\times 10 \\times 10 = 100\\,000$. Astuce : $10^n$ s\'écrit $1$ suivi de $n$ zéros. $10^5$ = un 1 suivi de 5 zéros = $100\\,000$ (cent mille).'
            },
            {
                quiz: { q: '$(-2)^3 = ?$', a: '-8' },
                options: '8 ¤ -8 ¤ 6 ¤ -6',
                explanation: '$(-2)^3 = (-2) \\times (-2) \\times (-2)$. Étape par étape : $(-2) \\times (-2) = +4$, puis $+4 \\times (-2) = -8$. Règle : un exposant <strong>impair</strong> avec une base négative donne un résultat négatif ; un exposant <strong>pair</strong> donne un résultat positif.'
            },
            {
                quiz: { q: '$10^{-3} = ?$', a: '0,001' },
                options: '-1000 ¤ 0,001 ¤ 0,01 ¤ -30',
                explanation: '$10^{-3} = \\dfrac{1}{10^3} = \\dfrac{1}{1000} = 0{,}001$. Le signe $-$ dans l\'exposant ne rend <em>pas</em> le nombre négatif ! Il indique simplement qu\'on prend l\'inverse. $10^{-3}$ est un petit nombre positif.'
            },
            {
                quiz: { q: '$2^4 = ?$', a: '16' },
                options: '8 ¤ 16 ¤ 24 ¤ 32',
                explanation: '$2^4 = 2 \\times 2 \\times 2 \\times 2 = 4 \\times 4 = 16$. On peut aussi calculer progressivement : $2^1=2$, $2^2=4$, $2^3=8$, $2^4=16$. Attention, $32 = 2^5$ (une multiplication de trop).'
            },
            {
                quiz: { q: '$5^2 = ?$', a: '25' },
                options: '10 ¤ 25 ¤ 52 ¤ 15',
                explanation: '$5^2 = 5 \\times 5 = 25$. C\'est un carré parfait à connaître. $10$ serait $5 \\times 2$ (confusion puissance/multiplication), $52$ serait une écriture littérale erronée.'
            },
            {
                quiz: { q: '$10^1 = ?$', a: '10' },
                options: '1 ¤ 10 ¤ 100 ¤ 11',
                explanation: 'Tout nombre à la puissance $1$ est égal à lui-même : $a^1 = a$. Donc $10^1 = 10$. C\'est cohérent avec la règle : $10^1$ signifie "multiplier $10$ par lui-même 1 fois", ce qui donne simplement $10$.'
            }
        ],

    "301511": [ // ÉCRITURE SCIENTIFIQUE
            {
                quiz: { q: 'Écrire $125\\,000$ en écriture scientifique', a: '1,25x10^5' },
                options: '$1{,}25 \\times 10^4$ ¤ $1{,}25 \\times 10^5$ ¤ $12{,}5 \\times 10^4$ ¤ $125 \\times 10^3$',
                explanation: 'En écriture scientifique, on écrit sous la forme $a \\times 10^n$ avec $1 \\leq a < 10$. Pour $125\\,000$ : on déplace la virgule de <strong>5 rangs vers la gauche</strong> pour obtenir $1{,}25$. Chaque déplacement vers la gauche augmente l\'exposant de 1. On obtient $1{,}25 \\times 10^5$. $1{,}25 \\times 10^4 = 12\\,500$ (un rang de trop), $12{,}5 \\times 10^4$ n\'est pas en forme scientifique car $12{,}5 \\geq 10$.'
            },
            {
                quiz: { q: 'Écrire $0{,}007$ en écriture scientifique', a: '7x10^-3' },
                options: '$7 \\times 10^{-2}$ ¤ $7 \\times 10^{-3}$ ¤ $0{,}7 \\times 10^{-2}$ ¤ $7 \\times 10^{3}$',
                explanation: 'Pour les nombres inférieurs à 1, on déplace la virgule vers la <strong>droite</strong>, ce qui donne un exposant <strong>négatif</strong>. De $0{,}007$ à $7{,}0$ : on déplace de 3 rangs vers la droite → $10^{-3}$. Résultat : $7 \\times 10^{-3}$. Vérification : $7 \\times 10^{-3} = 7 \\times 0{,}001 = 0{,}007$ ✓'
            },
            {
                quiz: { q: 'Écrire $500$ en écriture scientifique', a: '5x10^2' },
                options: '$5 \\times 10^2$ ¤ $5 \\times 10^3$ ¤ $50 \\times 10^1$ ¤ $0{,}5 \\times 10^3$',
                explanation: 'De $500$ à $5{,}00$ : on déplace la virgule de 2 rangs vers la gauche → exposant $+2$. Résultat : $5 \\times 10^2$. Vérification : $5 \\times 100 = 500$ ✓. $50 \\times 10^1$ est faux car $50 \\geq 10$ (la partie décimale doit être entre 1 et 10).'
            },
            {
                quiz: { q: 'Écrire $0{,}045$ en écriture scientifique', a: '4,5x10^-2' },
                options: '$4{,}5 \\times 10^{-2}$ ¤ $4{,}5 \\times 10^{-3}$ ¤ $45 \\times 10^{-3}$ ¤ $4{,}5 \\times 10^{2}$',
                explanation: 'De $0{,}045$ à $4{,}5$ : on déplace la virgule de 2 rangs vers la droite → exposant $-2$. Résultat : $4{,}5 \\times 10^{-2}$. Vérification : $4{,}5 \\times 0{,}01 = 0{,}045$ ✓'
            },
            {
                quiz: { q: 'Écrire $1\\,000\\,000$ en écriture scientifique', a: '1x10^6' },
                options: '$1 \\times 10^5$ ¤ $1 \\times 10^6$ ¤ $10 \\times 10^5$ ¤ $1 \\times 10^7$',
                explanation: '$1\\,000\\,000$ a 6 zéros après le 1. On déplace la virgule de 6 rangs vers la gauche : $1{,}0 \\times 10^6$. Astuce : compter le nombre de zéros donne directement l\'exposant pour les puissances de 10 entières.'
            },
            {
                quiz: { q: 'Écrire $0{,}0001$ en écriture scientifique', a: '1x10^-4' },
                options: '$1 \\times 10^{-3}$ ¤ $1 \\times 10^{-4}$ ¤ $1 \\times 10^{4}$ ¤ $0{,}1 \\times 10^{-3}$',
                explanation: 'De $0{,}0001$ à $1{,}0$ : on compte les rangs depuis la virgule jusqu\'au premier chiffre significatif. Il y a 4 rangs → $10^{-4}$. Résultat : $1 \\times 10^{-4}$. Vérification : $1 \\times 10^{-4} = 0{,}0001$ ✓'
            },
            {
                quiz: { q: 'Écrire $32{,}5$ en écriture scientifique', a: '3,25x10^1' },
                options: '$3{,}25 \\times 10^0$ ¤ $3{,}25 \\times 10^1$ ¤ $32{,}5 \\times 10^0$ ¤ $0{,}325 \\times 10^2$',
                explanation: 'De $32{,}5$ à $3{,}25$ : on déplace la virgule d\'1 rang vers la gauche → $10^1$. Résultat : $3{,}25 \\times 10^1$. $32{,}5 \\times 10^0 = 32{,}5$ n\'est pas en forme scientifique car $32{,}5 \\geq 10$.'
            },
            {
                quiz: { q: 'Écrire $0{,}8$ en écriture scientifique', a: '8x10^-1' },
                options: '$8 \\times 10^{-1}$ ¤ $8 \\times 10^{1}$ ¤ $0{,}8 \\times 10^{0}$ ¤ $8 \\times 10^{-2}$',
                explanation: 'De $0{,}8$ à $8{,}0$ : on déplace la virgule d\'1 rang vers la droite → $10^{-1}$. Résultat : $8 \\times 10^{-1}$. Vérification : $8 \\times 0{,}1 = 0{,}8$ ✓. $0{,}8 \\times 10^{0}$ n\'est pas en forme scientifique (la mantisse doit être ≥ 1).'
            },
            {
                quiz: { q: 'Écrire $700$ en écriture scientifique', a: '7x10^2' },
                options: '$7 \\times 10^2$ ¤ $7 \\times 10^3$ ¤ $70 \\times 10^1$ ¤ $7 \\times 10^1$',
                explanation: 'De $700$ à $7{,}00$ : 2 rangs vers la gauche → $10^2$. Résultat : $7 \\times 10^2$. Vérification : $7 \\times 100 = 700$ ✓. $7 \\times 10^3 = 7\\,000$ (un rang de trop), $70 \\times 10^1$ n\'est pas en forme standard.'
            }
        ]
};
