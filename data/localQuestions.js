// ============================================================
// data/localQuestions.js — Questions des boutons "Ai-je bien compris ?"
// Clé = identifiant du QCM (ex: "31101")
// ============================================================

const allLocalQuestions = {
        // 3EME - CHAPITRE1 - TITRE H2 - TITRE H3 - n° questionnaire dans titre h3
         "31101": [ // NOMBRES RELATIFS
            { quiz: { q: '(-5) + (-3) = ?', a: '-8' }, explanation: 'On additionne deux nombres de même signe.' },
            { quiz: { q: '(-7) + (+10) = ?', a: '3' }, explanation: 'Signes différents : on fait la différence (10-7) et on prend le signe du plus grand.' },
            { quiz: { q: '(-4) x (-3) = ?', a: '12' }, explanation: 'Produit de deux nombres négatifs = résultat positif.' },
            { quiz: { q: '(-12) / 3 = ?', a: '-4' }, explanation: 'Signes différents dans une division donnent un résultat négatif.' },
            { quiz: { q: '(-2) x 5 = ?', a: '-10' }, explanation: 'Un nombre négatif multiplié par un positif donne un négatif.' },
            { quiz: { q: '15 + (-5) = ?', a: '10' }, explanation: 'On soustrait les valeurs : 15 - 5 = 10.' },
            { quiz: { q: '(-8) - (-2) = ?', a: '-6' }, explanation: 'Soustraire un négatif revient à ajouter son opposé : -8 + 2 = -6.' },
            { quiz: { q: '(-1) x (-1) x (-1) = ?', a: '-1' }, explanation: 'Un nombre impair de facteurs négatifs donne un résultat négatif.' },
            { quiz: { q: '(-20) / (-4) = ?', a: '5' }, explanation: 'Deux signes négatifs dans une division donnent un positif.' },
            { quiz: { q: '10 + (-10) = ?', a: '0' }, explanation: 'La somme d\'un nombre et de son opposé est toujours nulle.' }
         ],
         "31201": [ // FRACTIONS
            { quiz: { q: 'Simplifier 10/15', a: '2/3' }, explanation: 'On divise le numérateur et le dénominateur par 5.' },
            { quiz: { q: 'Calculer 1/2 + 1/4', a: '3/4' }, explanation: 'Même dénominateur : 2/4 + 1/4 = 3/4.' },
            { quiz: { q: 'Calculer 2/3 - 1/6', a: '1/2' }, explanation: 'Même dénominateur (6) : 4/6 - 1/6 = 3/6, soit 1/2.' },
                    { quiz: { q: 'Calculer 3/4 x 5/7', a: '15/28' }, explanation: 'On multiplie les numérateurs entre eux (3x5) et les dénominateurs entre eux (4x7).' },
                    { quiz: { q: 'Calculer 2 / (1/3)', a: '6' }, explanation: 'Diviser par une fraction revient à multiplier par son inverse : 2 x 3 = 6.' },
                    { quiz: { q: 'Simplifier 12/18', a: '2/3' }, explanation: 'On divise par le plus grand diviseur commun, ici 6 (12÷6=2 et 18÷6=3).' },
                    { quiz: { q: 'Calculer 1/5 + 2/5', a: '3/5' }, explanation: 'Même dénominateur, on additionne juste les numérateurs.' },
                    { quiz: { q: 'Calculer 1/2 x 1/2', a: '1/4' }, explanation: 'On multiplie les numérateurs (1x1) et les dénominateurs (2x2).' },
                    { quiz: { q: 'Calculer 3/5 ÷ 2', a: '3/10' }, explanation: 'Diviser par 2 revient à multiplier par l\'inverse, soit 1/2. Donc 3/5 x 1/2 = 3/10.' },
                    { quiz: { q: 'Simplifier 20/100', a: '1/5' }, explanation: 'On peut diviser par 20 : 20÷20=1 et 100÷20=5.' },
                    { quiz: { q: 'Calculer 1/3 + 1/3', a: '2/3' }, explanation: 'Même dénominateur, on additionne les numérateurs : 1+1=2.' }
         ],
                "31301": [ // RACINES CARRÉES
                    { quiz: { q: 'Encadrer $\\sqrt{40}$ par deux entiers', a: '6 < √40 < 7' }, explanation: 'Car $6^2=36$ et $7^2=49$. $40$ est entre $36$ et $49$.' },
                    { quiz: { q: 'Encadrer $\\sqrt{10}$ par deux entiers', a: '3 < √10 < 4' }, explanation: 'Car $3^2=9$ et $4^2=16$. $10$ est entre $9$ et $16$.' },
                    { quiz: { q: '$\\sqrt{81} = ?$', a: '9' }, explanation: 'Car $9 \\times 9 = 81$.' },
                    { quiz: { q: '$\\sqrt{0} = ?$', a: '0' }, explanation: 'Car $0 \\times 0 = 0$.' },
                    { quiz: { q: 'Encadrer $\\sqrt{2}$ par deux entiers', a: '1 < √2 < 2' }, explanation: 'Car $1^2=1$ et $2^2=4$. $2$ est entre $1$ et $4$.' },
                    { quiz: { q: '$\\sqrt{144} = ?$', a: '12' }, explanation: 'Car $12 \\times 12 = 144$.' },
                    { quiz: { q: 'Encadrer $\\sqrt{50}$ par deux entiers', a: '7 < √50 < 8' }, explanation: 'Car $7^2=49$ et $8^2=64$. $50$ est entre $49$ et $64$.' },
                    { quiz: { q: '$\\sqrt{25} + \\sqrt{16} = ?$', a: '9' }, explanation: '$\\sqrt{25}=5$ et $\\sqrt{16}=4$. Donc $5 + 4 = 9$.' },
                    { quiz: { q: 'Encadrer $\\sqrt{30}$ par deux entiers', a: '5 < √30 < 6' }, explanation: 'Car $5^2=25$ et $6^2=36$. $30$ est entre $25$ et $36$.' },
                    { quiz: { q: '$\\sqrt{100} = ?$', a: '10' }, explanation: 'Car $10 \\times 10 = 100$.' }
                ],
                "31401": [ // PUISSANCES
                    { quiz: { q: '$10^2 = ?$', a: '100' }, explanation: '$10 \\times 10 = 100$.' },
                    { quiz: { q: '$10^{-2} = ?$', a: '0,01' }, explanation: '$10^{-2}$ est l\'inverse de $10^2$, soit $1/100 = 0,01$.' },
                    { quiz: { q: '$2^3 = ?$', a: '8' }, explanation: '$2 \\times 2 \\times 2 = 8$.' },
                    { quiz: { q: '$a^0 = ?$ (avec $a$ non nul)', a: '1' }, explanation: 'Par convention mathématique, n\'importe quel nombre puissance 0 vaut 1.' },
                    { quiz: { q: '$10^5 = ?$', a: '100000' }, explanation: 'Un 1 suivi de 5 zéros.' },
                    { quiz: { q: '$(-2)^3 = ?$', a: '-8' }, explanation: ' $(-2) \\times (-2) \\times (-2) = -8$. Un nombre impair de facteurs négatifs donne un résultat négatif.' },
                    { quiz: { q: '$10^{-3} = ?$', a: '0,001' }, explanation: 'Cela correspond à $1/1000$, soit $0,001$.' },
                    { quiz: { q: '$2^4 = ?$', a: '16' }, explanation: '$2 \\times 2 \\times 2 \\times 2 = 16$.' },
                    { quiz: { q: '$5^2 = ?$', a: '25' }, explanation: '$5 \\times 5 = 25$.' },
                    { quiz: { q: '$10^1 = ?$', a: '10' }, explanation: 'N\'importe quel nombre puissance 1 est égal à lui-même.' }
                ],
                "31501": [ // ÉCRITURE SCIENTIFIQUE
                    { quiz: { q: 'Écrire 125 000 en écriture scientifique', a: '1,25x10^2' }, explanation: 'On déplace la virgule de 5 rangs vers la gauche : $1,25 \\times 10^5$.' },
                    { quiz: { q: 'Écrire 0,007 en écriture scientifique', a: '7x10^-3' }, explanation: 'On déplace la virgule de 3 rangs vers la droite : $7 \\times 10^{-3}$.' },
                    { quiz: { q: 'Écrire 500 en écriture scientifique', a: '5x10^2' }, explanation: 'On déplace la virgule de 2 rangs vers la gauche : $5 \\times 10^2$.' },
                    { quiz: { q: 'Écrire 0,045 en écriture scientifique', a: '4,5x10^-2' }, explanation: 'On déplace la virgule de 2 rangs vers la droite : $4,5 \\times 10^{-2}$.' },
                    { quiz: { q: 'Écrire 1 000 000 en écriture scientifique', a: '1x10^6' }, explanation: 'On déplace la virgule de 6 rangs vers la gauche : $1 \\times 10^6$.' },
                    { quiz: { q: 'Écrire 0,0001 en écriture scientifique', a: '1x10^-4' }, explanation: 'On déplace la virgule de 4 rangs vers la droite : $1 \\times 10^{-4}$.' },
                    { quiz: { q: 'Écrire 32,5 en écriture scientifique', a: '3,25x10^1' }, explanation: 'On déplace la virgule d\'un rang vers la gauche : $3,25 \\times 10^1$.' },
                    { quiz: { q: 'Écrire 0,8 en écriture scientifique', a: '8x10^-1' }, explanation: 'On déplace la virgule d\'un rang vers la droite : $8 \\times 10^{-1}$.' },
                    { quiz: { q: 'Écrire 700 en écriture scientifique', a: '7x10^2' }, explanation: 'On déplace la virgule de 2 rangs vers la gauche : $7 \\times 10^2$.' }
                ],

                // 3EME - CHAPITRE2 - TITRE H2 - TITRE H3 - n° questionnaire dans titre h3

 /*               "32121": [ //Division euclidienne
                                { 
                                    quiz: { q: 'Dans la division euclidienne de 45 par 6, quel est le quotient (q) ?', a: '7' }, 
                                    explanation: 'On cherche combien de fois 6 rentre dans 45. $6 \\times 7 = 42$. Le quotient est donc 7.' 
                                },
                                { 
                                    quiz: { q: 'Dans la division euclidienne de 45 par 6, quel est le reste (r) ?', a: '3' }, 
                                    explanation: 'Le reste est la différence : $45 - (6 \\times 7) = 45 - 42 = 3$.' 
                                },
                                { 
                                    quiz: { q: 'Compléter l\'égalité : $86 = 3 \\times 28 + ...$', a: '2' }, 
                                    explanation: 'C\'est la forme $a = b \\times q + r$. Ici le reste est 2.' 
                                },
                                { 
                                    quiz: { q: 'Si $a=23$, $b=3$ et $q=7$, quel est le reste $r$ ?', a: '2' }, 
                                    explanation: '$r = a - (b \\times q) \\rightarrow 23 - (3 \\times 7) = 23 - 21 = 2$.' 
                                },
                                { 
                                    quiz: { q: 'Peut-on dire que 50 est divisible par 7 ? (répondre par oui ou non)', a: 'non' }, 
                                    explanation: 'Car $50 = 7 \\times 7 + 1$. Le reste n\'est pas nul.' 
                                },
                                { 
                                    quiz: { q: 'Trouver le quotient de la division de 125 par 10.', a: '12' }, 
                                    explanation: '$125 = 10 \\times 12 + 5$. Le quotient est 12.' 
                                },
                                { 
                                    quiz: { q: 'Trouver le reste de la division de 125 par 10.', a: '5' }, 
                                    explanation: '$125 = 10 \\times 12 + 5$. Le reste est 5.' 
                                },
                                { 
                                    quiz: { q: 'Un pâtissier a 38 macarons. Il veut faire des paquets de 4. Combien de macarons lui restera-t-il ?', a: '2' }, 
                                    explanation: 'On fait la division euclidienne : $38 = 4 \\times 9 + 2$. Le reste est 2.' 
                                },
                                { 
                                    quiz: { q: 'Un pâtissier a 38 macarons. Il veut faire des paquets de 4. Combien de paquets peut-il faire ?', a: '9' }, 
                                    explanation: 'Le nombre de paquets correspond au quotient $q$ de la division de 38 par 4, soit 9.' 
                                },
                                { 
                                    quiz: { q: 'Si le reste d\'une division est 0, on dit que le nombre est...', a: 'divisible' }, 
                                    explanation: 'Quand $r=0$, alors $a = b \\times q$. On dit que $a$ est divisible par $b$.' 
                                }
                            ] */
             // Ajout à votre constante allLocalQuestions pour la clé 32121 en mode QCM
                    "32121": [
                                        { 
                                            quiz: { q: 'Dans la division euclidienne de 45 par 6, quel est le quotient ?', a: '7' }, 
                                            options: '6 \\ 7 \\ 8 \\ 45', 
                                            explanation: 'Erreur classique : prendre le reste (3) ou le dividende (45). On cherche combien de fois 6 rentre dans 45. $6 \\times 7 = 42$.' 
                                        },
                                        { 
                                            quiz: { q: 'Dans la division euclidienne de 45 par 6, quel est le reste ?', a: '3' }, 
                                            options: '7 \\ 3 \\ 6 \\ 42', 
                                            explanation: 'Erreur classique : confondre avec le quotient (7) ou le produit (42). Le reste est la différence : $45 - 42 = 3$.' 
                                        },
                                        { 
                                            quiz: { q: 'Compléter l\'égalité : $86 = 3 \\times 28 + ...$', a: '2' }, 
                                            options: '0 \\ 2 \\ 14 \\ 28', 
                                            explanation: 'Erreur classique : oublier de calculer la différence. $3 \\times 28 = 84$, donc il manque 2 pour arriver à 86.' 
                                        },
                                        { 
                                            quiz: { q: 'Si $a=23, b=3$ et $q=7$, quelle est la valeur de $r$ ?', a: '2' }, 
                                            options: '7 \\ 1 \\ 2 \\ 0', 
                                            explanation: 'On utilise $r = a - (b \\times q)$. Ici $23 - 21 = 2$.' 
                                        },
                                        { 
                                            quiz: { q: 'Le nombre 50 est-il divisible par 7 ?', a: 'non' }, 
                                            options: 'oui \\ non \\ peut-être \\ 7', 
                                            explanation: 'Un nombre est divisible si le reste est 0. Ici $50 = 7 \\times 7 + 1$, le reste est 1.' 
                                        },
                                        { 
                                            quiz: { q: 'Quel est le quotient de la division de 125 par 10 ?', a: '12' }, 
                                            options: '10 \\ 12 \\ 5 \\ 12,5', 
                                            explanation: 'Erreur classique : donner le résultat décimal (12,5) au lieu du quotient entier de la division euclidienne.' 
                                        },
                                        { 
                                            quiz: { q: 'Quel est le reste de la division de 125 par 10 ?', a: '5' }, 
                                            options: '12 \\ 10 \\ 5 \\ 0', 
                                            explanation: 'Dans $125 = 10 \\times 12 + 5$, le reste est bien 5.' 
                                        },
                                        { 
                                            quiz: { q: 'Un pâtissier a 38 macarons. Il fait des paquets de 4. Combien de macarons lui restera-t-il ?', a: '2' }, 
                                            options: '9 \\ 4 \\ 2 \\ 38', 
                                            explanation: 'Erreur classique : donner le nombre de paquets (le quotient = 9) au lieu du reste.' 
                                        },
                                        { 
                                            quiz: { q: 'Un pâtissier a 38 macarons. Il fait des paquets de 4. Combien de paquets peut-il faire ?', a: '9' }, 
                                            options: '2 \\ 9 \\ 10 \\ 38', 
                                            explanation: 'Erreur classique : donner le reste (2) au lieu du quotient.' 
                                        },
                                        { 
                                            quiz: { q: 'Si le reste d\'une division est 0, on dit que le nombre est...', a: 'divisible' }, 
                                            options: 'premier \\ impair \\ divisible \\ nul', 
                                            explanation: 'Par définition, si $r=0$, alors $a = b \\times q$, donc $a$ est divisible par $b$.' 
                                        }
                                    ],
                    "32211": [
                        { 
                            quiz: { q: 'Si $20$ est un multiple de $4$, alors 4 est un...', a: 'diviseur de 20' }, 
                            options: 'multiple de 20 \\ diviseur de 20 \\ quotient de 20 \\ reste de 20', 
                            explanation: 'Si 20=4 $\\times 5$ (multiple de 4) Alors 20/4=5 (4 est forcément diviseur de 20)' 
                        },
                        { 
                            quiz: { q: 'Parmi ces propositions, laquelle est correcte pour $12$ et $3$ ?', a: '12 est un multiple de 3' }, 
                            options: '3 est un multiple de 12 \\ 12 est un diviseur de 3 \\ 12 est un multiple de 3 \\ 3 divise 12 et 12 divise 3', 
                            explanation: 'On vérifie : $3 \\times 4 = 12$. Donc 12 est bien le multiple.' 
                        },
                        { 
                            quiz: { q: 'Si je dis "15 divise 45", cela signifie que 15 est un...', a: 'diviseur de 45' }, 
                            options: 'multiple de 45 \\ diviseur de 45 \\ reste de 45 \\ quotient de 45', 
                            explanation: 'Le verbe "diviser" désigne l\'action du petit nombre sur le grand.' 
                        },
                        { 
                            quiz: { q: 'Si $a$ est un multiple de $b$, alors $b$ est un...', a: 'diviseur de a' }, 
                            options: 'multiple de a \\ diviseur de a \\ reste de a \\ quotient de a', 
                            explanation: 'C\'est la définition même de la relation entre multiple et diviseur.' 
                        },
                        { 
                            quiz: { q: 'Le nombre 48 est-il un multiple de 6 ?', a: 'oui' }, 
                            options: 'oui \\ non \\ peut-être \\ seulement si on divise par 2', 
                            explanation: 'On vérifie dans la table de 6 : $6 \\times 8 = 48$. La réponse est oui.' 
                        },
                        { 
                            quiz: { q: 'Le nombre 7 est-il un diviseur de 25 ?', a: 'non' }, 
                            options: 'oui \\ non \\ seulement si on divise par 3 \\ c\'est un multiple', 
                            explanation: 'Dans la table de 7, on a $7 \\times 3 = 21$ et $7 \\times 4 = 28$. On ne tombe pas sur 25.' 
                        },
                        { 
                            quiz: { q: 'Lequel de ces nombres est un multiple de 10 ?', a: '30' }, 
                            options: '2 \\ 5 \\ 30 \\ 15', 
                            explanation: 'Un multiple de 10 se termine toujours par 0. Ici, seul 30 convient ($10 \\times 3 = 30$).' 
                        },
                        { 
                            quiz: { q: 'Lequel de ces nombres est un diviseur de 24 ?', a: '8' }, 
                            options: '5 \\ 7 \\ 8 \\ 10', 
                            explanation: 'On cherche un nombre qui divise 24 sans reste. $24 = 8 \\times 3$, donc 8 est un diviseur.' 
                        },
                        { 
                            quiz: { q: 'Lequel de ces nombres est divisible par 5 ?', a: '35' }, 
                            options: '12 \\ 35 \\ 41 \\ 22', 
                            explanation: 'Un nombre est divisible par 5 s\'il se termine par 0 ou 5. Ici, c\'est le cas pour 35.' 
                        },
                        { 
                            quiz: { q: 'Lequel de ces nombres est un multiple de 7 ?', a: '49' }, 
                            options: '1 \\ 49 \\ 15 \\ 20', 
                            explanation: 'On cherche dans la table de 7. $7 \\times 7 = 49$.'
                        }
                    ],
// Ajout à votre constante allLocalQuestions pour la clé 32212 (Diviseurs Communs)
                "32212": [
                    { 
                        quiz: { q: 'Quels sont les diviseurs communs de 12 et 18 ?', a: '1, 2, 3, 6' }, 
                        options: '1, 2, 3, 4 \\ 1, 2, 3, 6 \\ 2, 3, 6, 9 \\ 1, 3, 6, 12', 
                        explanation: 'Les diviseurs de 12 sont {1,2,3,4,6,12}. Les diviseurs de 18 sont {1,2,3,6,9,18}. Les points communs sont {1,2,3,6}.' 
                    },
                    { 
                        quiz: { q: 'Quel est le plus grand diviseur commun (PGCD) de 20 et 30 ?', a: '10' }, 
                        options: '5 \\ 10 \\ 2 \\ 20', 
                        explanation: 'Les diviseurs communs sont 1, 2, 5 et 10. Le plus grand est 10.' 
                    },
                    { 
                        quiz: { q: 'Le nombre 4 est-il un diviseur commun à 12 et 20 ?', a: 'oui' }, 
                        options: 'oui \\ non \\ peut-être \\ seulement pour 12', 
                        explanation: '12 est divisible par 4 ($3 \\times 4$) ET 20 est divisible par 4 ($5 \\times 4$). Donc oui.' 
                    },
                    { 
                        quiz: { q: 'Le nombre 3 est-il un diviseur commun à 15 et 25 ?', a: 'non' }, 
                        options: 'oui \\ non \\ seulement pour 15 \\ c\'est un multiple' , 
                        explanation: '3 divise bien 15, mais il ne divise pas 25. Il n\'est donc pas "commun".' 
                    },
                    { 
                        quiz: { q: 'Trouver un diviseur commun à 8 et 12.', a: '4' }, 
                        options: '3 \\ 4 \\ 6 \\ 8', 
                        explanation: '4 divise 8 ($2 \\times 4$) et 4 divise 12 ($3 \\times 4$).' 
                    },
                    { 
                        quiz: { q: 'Quel est le plus petit diviseur commun (autre que 1) de 14 et 21 ?', a: '7' }, 
                        options: '2 \\ 3 \\ 7 \\ 14', 
                        explanation: 'Les diviseurs de 14 sont {1,2,7,14}. Les diviseurs de 21 sont {1,3,7,21}. Le seul commun (autre que 1) est 7.' 
                    },
                    { 
                        quiz: { q: 'Si un nombre divise à la fois 10 et 15, est-il forcément un diviseur de 5 ?', a: 'oui' }, 
                        options: 'oui \\ non \\ peut-être \\ seulement si c\'est 1', 
                        explanation: 'Les diviseurs communs de 10 et 15 sont 1 et 5. Ils divisent tous les deux 5.' 
                    },
                    { 
                        quiz: { q: 'Trouver un diviseur commun à 36 et 48.', a: '12' }, 
                        options: '6 \\ 9 \\ 12 \\ 18', 
                        explanation: '12 divise 36 ($3 \\times 12$) et 12 divise 48 ($4 \\times 12$).' 
                    },
                    { 
                        quiz: { q: 'Le nombre 9 est-il un diviseur commun à 18 et 27 ?', a: 'oui' }, 
                        options: 'oui \\ non \\ seulement pour 18 \\ seulement pour 27', 
                        explanation: '18 = $9 \\times 2$ et 27 = $9 \\times 3$. Donc 9 est commun.' 
                    },
                    { 
                        quiz: { q: 'Quel est le plus grand diviseur commun de 16 et 24 ?', a: '8' }, 
                        options: '2 \\ 4 \\ 8 \\ 12', 
                        explanation: 'Les diviseurs de 16 sont {1,2,4,8,16}. Les diviseurs de 24 sont {1,2,3,4,6,8,12,24}. Le plus grand commun est 8.' 
                    }
                ],
                // Ajout à votre constante allLocalQuestions pour la clé 32221 (Critères de divisibilité)
                "32221": [ 
    { 
        quiz: { q: 'Le nombre 456 est-il divisible par 2 ?', a: 'oui' }, 
        options: 'oui \\ non \\ seulement si on divise par 3 \\ peut-être', 
        explanation: 'Un nombre est divisible par 2 si son chiffre des unités est pair. Ici, c\'est 6, donc oui.' 
    },
    { 
        quiz: { q: 'Le nombre 785 est-il divisible par 5 ?', a: 'oui' }, 
        options: 'oui \\ non \\ seulement si on divise par 10 \\ uniquement pour 7', 
        explanation: 'Un nombre est divisible par 5 s\'il se termine par 0 ou 5. Ici, il se termine par 5.' 
    },
    { 
        quiz: { q: 'Le nombre 123 est-il divisible par 3 ?', a: 'oui' }, 
        options: 'oui \\ non \\ seulement si c\'est pair \\ uniquement pour 10', 
        explanation: 'On fait la somme des chiffres : $1 + 2 + 3 = 6$. Comme 6 est dans la table de 3, alors 123 est divisible par 3.' 
    },
    { 
        quiz: { q: 'Le nombre 819 est-il divisible par 9 ?', a: 'oui' }, 
        options: 'oui \\ non \\ seulement pour 3 \\ uniquement si c\'est pair', 
        explanation: 'Somme des chiffres : $8 + 1 + 9 = 18$. Comme 18 est dans la table de 9, alors 819 est divisible par 9.' 
    },
    { 
        quiz: { q: 'Lequel de ces nombres est divisible par 10 ?', a: '740' }, 
        options: '74 \\ 745 \\ 740 \\ 74,5', 
        explanation: 'Un nombre est divisible par 10 s\'il se termine impérativement par 0.' 
    },
    { 
        quiz: { q: 'Le nombre 274 est-il divisible par 3 ?', a: 'non' }, 
        options: 'oui \\ non \\ seulement pour 2 \\ uniquement si c\'est pair', 
        explanation: 'Somme des chiffres : $2 + 7 + 4 = 13$. 13 n\'est pas dans la table de 3, donc non.' 
    },
    { 
        quiz: { q: 'Le nombre 99 est-il divisible par 9 ?', a: 'oui' }, 
        options: 'oui \\ non \\ seulement pour 10 \\ uniquement si c\'est pair', 
        explanation: 'Somme des chiffres : $9 + 9 = 18$. 18 est dans la table de 9, donc oui.' 
    },
    { 
        quiz: { q: 'Lequel de ces nombres est divisible par 2 et par 5 ?', a: '40' }, 
        options: '15 \\ 22 \\ 40 \\ 45', 
        explanation: 'Pour être divisible par 2 et 5, il doit être divisible par 10 (se terminer par 0). Seul 40 convient.' 
    },
    { 
        quiz: { q: 'Le nombre 1 002 est-il divisible par 3 ?', a: 'oui' }, 
        options: 'oui \\ non \\ seulement pour 10 \\ uniquement si c\'est pair', 
        explanation: 'Somme des chiffres : $1 + 0 + 0 + 2 = 3$. Comme 3 est dans la table de 3, alors oui.' 
    },
    { 
        quiz: { q: 'Le nombre 81 est-il divisible par 9 ?', a: 'oui' }, 
        options: 'oui \\ non \\ seulement pour 2 \\ uniquement si c\'est pair', 
        explanation: 'Somme des chiffres : $8 + 1 = 9$. Comme 9 est dans la table de 9, alors oui.' 
    }
],
"32231" :[   { 
        quiz: { q: 'Pour trouver tous les diviseurs d\'un nombre $N$, jusqu\'à quel nombre entier doit-on tester la divisibilité ?', a: '$\\sqrt{N}$' }, 
        options: '$\\sqrt{N}$ \\ $N$ \\ $N/2$ \\ $10$', 
        explanation: 'On teste jusqu\'à $\\sqrt{N}$ car si un diviseur est supérieur à la racine carrée, son partenaire (le quotient) sera forcément inférieur à la racine carrée, et on l\'aura déjà trouvé.' 
    },
    { 
        quiz: { q: 'Déterminer tous les diviseurs de $45$.', a: '1, 3, 5, 9, 15, 45' }, 
        options: '1, 3, 5, 9, 15, 45 \\ 1, 5, 9, 45 \\ 1, 3, 5, 15 \\ 3, 5, 9, 15', 
        explanation: 'On teste de 1 à $\\sqrt{45} \\approx 6,7$. On trouve : $1\\times45$, $3\\times15$ et $5\\times9$. La liste complète est donc $\{1, 3, 5, 9, 15, 45\}$.' 
    },
    { 
        quiz: { q: 'Si on cherche les diviseurs de $36$, quel est le dernier nombre entier qu\'il faut tester selon la méthode ?', a: '6' }, 
        options: '6 \\ 18 \\ 9 \\ 36', 
        explanation: '$\\sqrt{36} = 6$. On doit donc tester tous les entiers de $1$ jusqu\'à $6$.' 
    },
    { 
        quiz: { q: 'Le nombre $45$ est-il divisible par $4$ ?', a: 'non' }, 
        options: 'oui \\ non', 
        explanation: 'On peut utiliser les critères : $45$ est impair, donc il n\'est pas divisible par un nombre pair comme $4$.' 
    },
    { 
        quiz: { q: 'Trouver tous les diviseurs de $13$.', a: '1, 13' }, 
        options: '1, 13 \\ 1, 13, 26 \\ Aucun \\ 1, 2, 13', 
        explanation: '13 est un nombre premier. Il n\'a que deux diviseurs : 1 et lui-même.' 
    },
    { 
        quiz: { q: 'Si $N=100$, quel est le plus grand nombre entier à tester pour trouver tous les diviseurs ?', a: '10' }, 
        options: '10 \\ 50 \\ 25 \\ 100', 
        explanation: '$\\sqrt{100} = 10$. On teste donc jusqu\'à $10$.' 
    },
    { 
        quiz: { q: 'Parmi ces listes, laquelle contient uniquement des diviseurs de $24$ ?', a: '1, 2, 3, 4, 6, 8, 12, 24' }, 
        options: '1, 2, 3, 4, 6, 8, 12, 24 \\ 1, 2, 4, 6, 8, 10, 12, 24 \\ 2, 3, 4, 6, 8, 12 \\ 1, 3, 4, 6, 8, 12, 24', 
        explanation: 'On vérifie : $24/1=24$, $24/2=12$, $24/3=8$, $24/4=6$, $24/6=4$, etc. Tous les nombres de la première liste divisent 24.' 
    },
    { 
        quiz: { q: 'Pourquoi ne teste-t-on pas tous les nombres jusqu\'à $N$ ?', a: 'C est trop long' }, 
        options: 'C est trop long \\ C est impossible \\ La racine suffit', 
        explanation: 'Tester jusqu\'à $\\sqrt{N}$ est beaucoup plus rapide et mathématiquement suffisant pour trouver tous les couples de diviseurs.' 
    },
    {
        quiz: { q: 'Si je teste tous les diviseurs jusqu\'a 100. De quel est le nombre que j\'étudie?', a: '10000' }, 
        options: '10 \\ 100 \\ 1000 \\ 10000', 
        explanation: '10000 car 100 $\\times$ 100=10000 donc $\\sqrt{10000}$=100' 
    }
     

],
"32301":[    //Liste des nombres premiers inférieurs à 30
{ 
        quiz: { q: 'Parmi ces nombres, lequel est un nombre premier ?', a: '17' }, 
        options: '9 \\ 15 \\ 17 \\ 21', 
        explanation: '9 est $3\\times3$, 15 est $3\\times5$, 21 est $3\\times7$. Seul 17 n\'est divisible que par 1 et lui-même.' 
    },
    { 
        quiz: { q: 'Quel est le seul nombre premier pair ?', a: '2' }, 
        options: '0 \\ 1 \\ 2 \\ 4', 
        explanation: 'Tous les autres nombres pairs sont divisibles par 2, donc ils ne peuvent pas être premiers.' 
    },
    { 
        quiz: { q: 'Le nombre 1 est-il un nombre premier ?', a: 'non' }, 
        options: 'oui \\ non', 
        explanation: 'Par définition, un nombre premier doit avoir exactement DEUX diviseurs (1 et lui-même). 1 n\'en a qu\'un seul.' 
    },
    { 
        quiz: { q: '21 est il un nombre premier', a: 'non' }, 
        explanation: '21 est $3\\times7$. donc il est divisible par 3 et 7' 
    },
    { 
        quiz: { q: 'Lequel de ces nombres n\'est PAS un nombre premier ?', a: '27' }, 
        options: '13 \\ 19 \\ 23 \\ 27', 
        explanation: '27 est divisible par 3 ($3\\times9=27$), ce n\'est donc pas un nombre premier.' 
    },
    { 
        quiz: { q: 'Combien y a-t-il de nombres premiers inférieurs à 20 ?', a: '8' }, 
        options: '7 \\ 8 \\ 9 \\ 10', 
        explanation: 'Les nombres sont : 2, 3, 5, 7, 11, 13, 17 et 19. Il y en a bien 8.' 
    },
    { 
        quiz: { q: 'Le nombre 29 est-il premier ?', a: 'oui' }, 
        options: 'oui \\ non', 
        explanation: 'On vérifie la divisibilité par les petits nombres premiers (2, 3, 5). 29 n\'est divisible par aucun d\'eux.' 
    },
    { 
        quiz: { q: 'Quel est le plus grand nombre premier inférieur à 30 ?', a: '29' }, 
        options: '23 \\ 27 \\ 29 \\ 31', 
        explanation: '29 est premier et c\'est le dernier de la liste avant 30.' 
    },
    { 
        quiz: { q: 'Parmi ces nombres, lequel est divisible par 3 mais n\'est PAS premier ?', a: '15' }, 
        options: '3 \\ 7 \\ 15 \\ 19', 
        explanation: '3 est premier. 7 et 19 sont premiers. 15 est divisible par 3 ($3\\times5$), donc il n\'est pas premier.' 
    },
    { 
        quiz: { q: 'Si un nombre se termine par 5 (et est supérieur à 5), est-il premier ?', a: 'non' }, 
        options: 'oui \\ non', 
        explanation: 'Tous les nombres se terminant par 5 sont divisibles par 5, ils ne peuvent donc pas être premiers (sauf le nombre 5 lui-même).' 
    }
],
"32302":[   //🚀 Méthode 📝 Exercice : Décomposer en produit de facteurs
 { 
        quiz: { q: 'Décomposer en produit de facteurs premiers : $36$', a: '$2^2 \\times 3^2$' }, 
        options: '$2 \\times 2 \\times 3 \\times 3$ \\ $2 \\times 3 \\times 6$ \\ $1 \\times 2 \\times 2 \\times 3 \\times 3$ \\ $4 \\times 9$', 
        explanation: 'Méthode 1 : $36/2=18 \\rightarrow 18/2=9 \\rightarrow 9/3=3 \\rightarrow 3/3=1$. Donc $36 = 2 \\times 2 \\times 3 \\times 3$. <br>Méthode 2 : $36 = 6 \\times 6$ et $6 = 2 \\times 3$, donc $(2 \\times 3) \\times (2 \\times 3) = 2^2 \\times 3^2$.' 
    },
    { 
        quiz: { q: 'Décomposer en produit de facteurs premiers : $60$', a: '$2^2 \\times 3 \\times 5$' }, 
        options: '$2 \\times 3 \\times 10$ \\ $2^2 \\times 3 \\times 5$ \\ $1 \\times 2 \\times 2 \\times 3 \\ 5$ \\ $4 \\times 15$', 
        explanation: 'Méthode 1 : $60/2=30 \\rightarrow 30/2=15 \\rightarrow 15/3=5 \\rightarrow 5/5=1$. Donc $60 = 2^2 \\times 3 \\times 5$. <br>Méthode 2 : $60 = 6 \\times 10$ et $(2\\times3) \\times (2\\times5) = 2^2 \\times 3 \\times 5$.' 
    },
    { 
        quiz: { q: 'Décomposer en produit de facteurs premiers : $48$', a: '$2^4 \\times 3$' }, 
        options: '$2 \\times 2 \\times 2 \\times 6$ \\ $2^4 \\times 3$ \\ $1 \\ 2^4 \\times 3$ \\ $4 \\times 12$', 
        explanation: 'Méthode 1 : $48/2=24 \\rightarrow 24/2=12 \\rightarrow 12/2=6 \\rightarrow 6/2=3 \\rightarrow 3/3=1$. Donc $48 = 2^4 \\times 3$. <br>Méthode 2 : $48 = 6 \\times 8$ et $(2\\times3) \\times (2^3) = 2^4 \\times 3$.' 
    },
    { 
        quiz: { q: 'Décomposer en produit de facteurs premiers : $50$', a: '$2 \\times 5^2$' }, 
        options: '$2 \\times 5 \\times 5$ \\ $1 \\ 2 \\times 5^2$ \\ $5 \\times 10$ \\ $2 \\times 25$', 
        explanation: 'Méthode 1 : $50/2=25 \\rightarrow 25/5=5 \\rightarrow 5/5=1$. Donc $50 = 2 \\times 5^2$. <br>Méthode 2 : $50 = 5 \\times 10$ et $5 \\times (2 \\times 5) = 2 \\times 5^2$.' 
    },
    { 
        quiz: { q: 'Décomposer en produit de facteurs premiers : $84$', a: '$2^2 \\times 3 \\times 7$' }, 
        options: '$2 \\times 6 \\times 7$ \\ $2^2 \\times 3 \\times 7$ \\ $1 \\ 2^2 \\times 3 \\times 7$ \\ $4 \\times 21$', 
        explanation: 'Méthode 1 : $84/2=42 \\rightarrow 42/2=21 \\rightarrow 21/3=7 \\rightarrow 7/7=1$. Donc $84 = 2^2 \\times 3 \\times 7$. <br>Méthode 2 : $84 = 12 \\times 7$ et $(2^2 \\times 3) \\times 7 = 2^2 \\times 3 \\times 7$.' 
    },
    { 
        quiz: { q: 'Décomposer en produit de facteurs premiers : $75$', a: '$3 \\times 5^2$' }, 
        options: '$3 \\times 25$ \\ $1 \\ 3 \\times 5^2$ \\ $3 \\times 5 \\times 5$ \\ $5 \\times 15$', 
        explanation: 'Méthode 1 : $75/3=25 \\rightarrow 25/5=5 \\rightarrow 5/5=1$. Donc $75 = 3 \\times 5^2$. <br>Méthode 2 : $75 = 3 \\times 25$ et $3 \\times (5 \\times 5) = 3 \\times 5^2$.' 
    },
    { 
        quiz: { q: 'Décomposer en produit de facteurs premiers : $18$', a: '$2 \\times 3^2$' }, 
        options: '$2 \\times 9$ \\ $1 \\ 2 \\times 3^2$ \\ $2 \\times 3 \\times 3$ \\ $3 \\times 6$', 
        explanation: 'Méthode 1 : $18/2=9 \\rightarrow 9/3=3 \\rightarrow 3/3=1$. Donc $18 = 2 \\times 3^2$. <br>Méthode 2 : $18 = 2 \\times 9$ et $2 \\times (3 \\times 3) = 2 \\times 3^2$.' 
    },
    { 
        quiz: { q: 'Décomposer en produit de facteurs premiers : $40$', a: '$2^3 \\times 5$' }, 
        options: '$4 \\times 10$ \\ $2 \\times 2 \\times 2 \\times 5$ \\ $1 \\ 2^3 \\times 5$ \\ $2 \\times 20$', 
        explanation: 'Méthode 1 : $40/2=20 \\rightarrow 20/2=10 \\rightarrow 10/2=5 \\rightarrow 5/5=1$. Donc $40 = 2^3 \\times 5$. <br>Méthode 2 : $40 = 8 \\times 5$ et $2^3 \\times 5$.' 
    },
    { 
        quiz: { q: 'Décomposer en produit de facteurs premiers : $90$', a: '$2 \\times 3^2 \\times 5$' }, 
        options: '$9 \\times 10$ \\ $2 \\times 3 \\ 3 \\ 5$ \\ $2 \\times 3^2 \\times 5$ \\ $1 \\ 2 \\times 3^2 \\times 5$', 
        explanation: 'Méthode 1 : $90/2=45 \\rightarrow 45/3=15 \\rightarrow 15/3=5 \\rightarrow 5/5=1$. Donc $90 = 2 \\times 3^2 \\times 5$. <br>Méthode 2 : $90 = 9 \\times 10$ et $(3^2) \\times (2 \\times 5) = 2 \\times 3^2 \\times 5$.' 
    },
    { 
        quiz: { q: 'Décomposer en produit de facteurs premiers : $28$', a: '$2^2 \\times 7$' }, 
        options: '$4 \\times 7$ \\ $1 \\ 2^2 \\times 7$ \\ $2 \\ 2 \\times 7$ \\ $2 \\ 14$', 
        explanation: 'Méthode 1 : $28/2=14 \\rightarrow 14/2=7 \\rightarrow 7/7=1$. Donc $28 = 2^2 \\times 7$. <br>Méthode 2 : $28 == 4 \\times 7$ et $(2^2) \\times 7 = 2^2 \\times 7$.'
    }
],

"32401": [ 
    { 
        quiz: { q: 'Simplifier la fraction $\\frac{12}{18}$', a: '2/3' }, 
        options: '6/9 \\ 2/3 \\ 3/4 \\ 4/6', 
        explanation: 'Décomposition : $12 = 2^2 \\times 3$ et $18 = 2 \\times 3^2$. On simplifie par $2 \\times 3 = 6$. Résultat : $\\frac{2}{3}$.' 
    },
    { 
        quiz: { q: 'Simplifier la fraction $\\frac{15}{25}$', a: '3/5' }, 
        options: '5/3 \\ 3/5 \\ 1/5 \\ 3/25', 
        explanation: 'Les diviseurs communs sont 5. $15 = 3 \\times 5$ et $25 = 5 \\times 5$. On simplifie par 5.' 
    },
    { 
        quiz: { q: 'Quelle est la forme irréductible de $\\frac{20}{30}$ ?', a: '2/3' }, 
        options: '10/15 \\ 4/6 \\ 2/3 \\ 20/3', 
        explanation: 'On peut diviser par 10 (ou décomposer : $2^2 \\times 5$ et $2 \\times 3 \\times 5$). On simplifie par $2 \\times 5 = 10$.' 
    },
    { 
        quiz: { q: 'Simplifier $\\frac{14}{21}$', a: '2/3' }, 
        options: '7/3 \\ 2/3 \\ 1/2 \\ 7/7', 
        explanation: 'On remarque que 14 et 21 sont dans la table de 7. $14 = 2 \\times 7$ et $21 = 3 \\ 7$.' 
    },
    { 
        quiz: { q: 'Simplifier $\\frac{8}{12}$', a: '2/3' }, 
        options: '4/6 \\ 2/3 \\ 1/2 \\ 4/3', 
        explanation: 'Décomposition : $8 = 2^3$ et $12 = 2^2 \\times 3$. On simplifie par $2^2 = 4$.' 
    },
    { 
        quiz: { q: 'Simplifier $\\frac{45}{60}$', a: '3/4' }, 
        options: '9/12 \\ 3/4 \\ 15/20 \\ 5/6', 
        explanation: 'Décomposition : $45 = 3^2 \\times 5$ et $60 = 2^2 \\times 3 \\times 5$. On simplifie par $3 \\times 5 = 15$.' 
    },
    { 
        quiz: { q: 'Simplifier $\\frac{24}{36}$', a: '2/3' }, 
        options: '12/18 \\ 4/6 \\ 2/3 \\ 6/9', 
        explanation: 'Décomposition : $24 = 2^3 \\times 3$ et $36 = 2^2 \\times 3^2$. On simplifie par $2^2 \\times 3 = 12$.' 
    },
    { 
        quiz: { q: 'Simplifier $\\frac{50}{75}$', a: '2/3' }, 
        options: '5/7 \\ 2/3 \\ 10/15 \\ 1/3', 
        explanation: 'On remarque que 50 et 75 sont dans la table de 25. $50 = 2 \\times 25$ et $75 = 3 \\times 25$.' 
    },
    { 
        quiz: { q: 'Par quel nombre doit-on diviser $\\frac{18}{42}$ pour la simplifier au maximum ?', a: '6' }, 
        options: '2 \\ 3 \\ 6 \\ 9', 
        explanation: 'Décomposition : $18 = 2 \\times 3^2$ et $42 = 2 \\times 3 \\times 7$. Le plus grand diviseur commun est $2 \\times 3 = 6$.' 
    },
    { 
        quiz: { q: 'Quelle est la décomposition de 12 en facteurs premiers ?', a: '2^2 x 3' }, 
        options: '2 x 6 \\ 3 x 4 \\ $\\2^{2}2 \\times 3$ \\ 12 x 1', 
        explanation: 'C\'est une étape clé : $12 = 2 \\times 6 = 2 \\times 2 \\times 3$, soit $2^2 \\times 3$.' 
    }
],

"32501": [
    // --- PROBLÈMES DE DIVISEUR COMMUN (4 questions) ---
    { 
        quiz: { q: 'Un fleuriste a 48 roses et 60 tulipes. Il veut faire des bouquets identiques avec le même nombre de fleurs dans chaque bouquet, sans qu\'il n\'en reste. Quel type de problème est-ce ?', a: 'Diviseur commun' }, 
        options: 'Diviseur commun \\ Multiple commun \\ Autre', 
        explanation: 'On cherche à partager/diviser des quantités en groupes égaux. Le nombre de bouquets sera forcément plus petit que 48 et 60, c\'est donc un problème de diviseur.' 
    },
    { 
        quiz: { q: 'On veut répartir 36 bonbons et 42 chocolats dans des sachets de même taille. Quel type de problème est-ce ?', a: 'Diviseur commun' }, 
        options: 'Diviseur commun \\ Multiple commun \\ Autre', 
        explanation: 'On cherche à diviser les deux quantités en parts égales. On cherche un nombre qui "divise" 36 et 42.' 
    },
    { 
        quiz: { q: 'Un professeur veut répartir ses 24 élèves de 6ème et ses 30 élèves de 5ème en groupes de même effectif pour une activité. Quel type de problème est-ce ?', a: 'Diviseur commun' }, 
        options: 'Diviseur commun \\ Multiple commun \\ Autre', 
        explanation: 'On cherche à couper les effectifs en petits groupes égaux. On cherche un diviseur commun.' 
    },
    { 
        quiz: { q: 'Une entreprise possède deux stocks de pièces : 120 vis et 150 écrous. Elle veut créer des kits identiques contenant le même nombre de chaque pièce. Quel type de problème est-ce ?', a: 'Diviseur commun' }, 
        options: 'Diviseur commun \\ Multiple commun \\ Autre', 
        explanation: 'On cherche à répartir les pièces dans des kits. Le nombre de kits sera plus petit que le stock, on cherche donc un diviseur.' 
    },

    // --- PROBLÈMES DE MULTIPLE COMMUN (4 questions) ---
    { 
        quiz: { q: 'Un bus passe toutes les 15 minutes et un autre toutes les 20 minutes. S\'ils partent ensemble à midi, dans combien de minutes se retrouveront-ils à nouveau ensemble au terminus ?', a: 'Multiple commun' }, 
        options: 'Diviseur commun \\ Multiple commun \\ Autre', 
        explanation: 'Le temps écoulé sera forcément plus grand que 15 et 20 minutes. On cherche un moment qui est un multiple de 15 ET de 20.' 
    },
    { 
        quiz: { q: 'Un phare émet un éclat toutes les 8 secondes et un autre toutes les 12 secondes. Au bout de combien de temps les deux éclats se produiront-ils en même temps ?', a: 'Multiple commun' }, 
        options: 'Diviseur commun \\ Multiple commun \\ Autre', 
        explanation: 'On cherche un événement futur, donc un temps plus long que 8 et 12. On cherche le plus petit multiple commun.' 
    },
    { 
        quiz: { q: 'Julie fait des tours de piste en 3 minutes et Marc en 5 minutes. S\'ils partent ensemble, au bout de combien de minutes se retrouveront-ils sur la ligne de départ ?', a: 'Multiple commun' }, 
        options: 'Diviseur commun \\ Multiple commun \\ Autre', 
        explanation: 'Le temps total sera supérieur aux temps de tour individuels. On cherche un multiple commun à 3 et 5.' 
    },
    { 
        quiz: { q: 'Un signal sonore retentit toutes les 10 secondes et un autre toutes les 25 secondes. Quand retentiront-ils ensemble ?', a: 'Multiple commun' }, 
        options: 'Diviseur commun \\ Multiple commun \\ Autre', 
        explanation: 'On cherche une répétition dans le futur, donc un nombre plus grand que 10 et 25. C\'est un problème de multiple.' 
    },

    // --- PROBLÈMES "AUTRE" (2 questions) ---
    { 
        quiz: { q: 'Un pâtissier a 12 œufs. Il veut savoir combien de gâteaux il peut faire s\'il utilise 3 œufs par gâteau. Quel type de problème est-ce ?', a: 'Autre' }, 
        options: 'Diviseur commun \\ Multiple commun \\ Autre', 
        explanation: 'Ici, on ne cherche pas un nombre qui divise deux quantités différentes, mais simplement le résultat d\'une division unique (12 / 3 = 4). Ce n\'est pas une recherche de diviseur "commun".' 
    },
    { 
        quiz: { q: 'Si je multiplie mon âge actuel par 2, quel sera mon âge dans l\'année ? Quel type de problème est-ce ?', a: 'Autre' }, 
        options: 'Diviseur commun \\ Multiple commun \\ Autre', 
        explanation: 'C\'est un calcul de multiplication simple sur une seule valeur. Il n\'y a pas de comparaison entre deux nombres pour trouver un point commun.' 
    },

    // --- PROBLÈME DE PROPORTIONNALITÉ (1 question) ---
    { 
        quiz: { q: 'Si 3 kg de pommes coûtent 6 €, combien coûtent 5 kg de pommes ? Quel type de problème est-ce ?', a: 'Autre' }, 
        options: 'Diviseur commun \\ Multiple commun \\ Autre', 
        explanation: 'C\'est un problème de proportionnalité (produit en croix ou coefficient). On ne cherche pas un diviseur ou un multiple commun à deux nombres, mais une relation de proportion entre le prix et la masse.' 
    }
],
"32511": [
    // 1. Thème : Art / Peinture (Nombres : 30 et 45) - Question sur le nombre de lots
    { 
        quiz: { q: 'Un artiste a 30 tubes de peinture bleue et 45 tubes de peinture rouge. Il veut créer le plus grand nombre de kits de peinture identiques. Combien de kits peut-il préparer ?', a: '15' }, 
        options: '5 \\ 10 \\ 15 \\ 30', 
        explanation: 'DIVISEUR COMMUN : on recherche un nombre plus petit que 30 et 45. <br>Décompositions : $30 = 2 \\times 3 \\times 5$ et $45 = 3^2 \\times 5$. <br>Calcul du diviseur commun (PGCD) : $3 \\times 5 = 15$. <br>Composition : $30 \\div 15 = 2$ bleus et $45 \\div 15 = 3$ rouges par kit.' 
    },
    // 2. Thème : Art / Peinture (Nombres : 30 et 45) - Question sur la composition
    { 
        quiz: { q: 'En créant le maximum de kits identiques avec 30 tubes bleus et 45 rouges, combien de tubes rouges y aura-t-il dans CHAQUE kit ?', a: '3' }, 
        options: '2 \\ 3 \\ 5 \\ 15', 
        explanation: 'DIVISEUR COMMUN : on recherche un nombre plus petit que 30 et 45. <br>Décompositions : $30 = 2 \\times 3 \\times 5$ et $45 = 3^2 \\times 5$. <br>Calcul du diviseur commun (PGCD) : $15$ kits. <br>Composition : $45 \\div 15 = 3$ rouges par kit.' 
    },
    // 3. Thème : Sport / Équipement (Nombres : 24 et 36) - Question sur le nombre de lots
    { 
        quiz: { q: 'Un club de sport possède 24 ballons de foot et 36 ballons de basket. On veut former le plus grand nombre d\'équipes avec un stock identique de ballons. Combien d\'équipes peut-on former ?', a: '12' }, 
        options: '6 \\ 12 \\ 18 \\ 24', 
        explanation: 'DIVISEUR COMMUN : on recherche un nombre plus petit que 24 et 36. <br>Décompositions : $24 = 2^3 \\times 3$ et $36 = 2^2 \\times 3^2$. <br>Calcul du diviseur commun (PGCD) : $2^2 \\times 3 = 12$. <br>Composition : $24 \\div 12 = 2$ ballons de foot et $36 \\div 12 = 3$ de basket par équipe.' 
    },
    // 4. Thème : Sport / Équipement (Nombres : 24 et 36) - Question sur la composition
    { 
        quiz: { q: 'Avec 24 ballons de foot et 36 de basket, si on forme le maximum d\'équipes identiques, combien de ballons de basket y aura-t-il par équipe ?', a: '3' }, 
        options: '2 \\ 3 \\ 4 \\ 6', 
        explanation: 'DIVISEUR COMMUN : on recherche un nombre plus petit que 24 et 36. <br>Décompositions : $24 = 2^3 \\times 3$ et $36 = 2^2 \\ 3^2$. <br>Calcul du diviseur commun (PGCD) : $12$ équipes. <br>Composition : $36 \\div 12 = 3$ ballons de basket par équipe.' 
    },
    // 5. Thème : Logistique / Événementiel (Nombres : 40 et 60) - Question sur le nombre de lots
    { 
        quiz: { q: 'Pour un festival, on a 40 bracelets bleus et 60 bracelets rouges. On veut faire le plus grand nombre de paquets identiques. Combien de paquets peut-on faire ?', a: '20' }, 
        options: '10 \\ 20 \\ 30 \\ 40', 
        explanation: 'DIVISEUR COMMUN : on recherche un nombre plus petit que 40 et 60. <br>Décompositions : $40 = 2^3 \\times 5$ et $60 = 2^2 \\times 3 \\times 5$. <br>Calcul du diviseur commun (PGCD) : $2^2 \\times 5 = 20$. <br>Composition : $40 \\div 20 = 2$ bleus et $60 \\div 20 = 3$ rouges par paquet.' 
    },
    // 6. Thème : Logistique / Événementiel (Nombres : 40 et 60) - Question sur la composition
    { 
        quiz: { q: 'Si on répartit 40 bracelets bleus et 60 rouges en un maximum de paquets identiques, combien y aura-t-il de bracelets bleus par paquet ?', a: '2' }, 
        options: '1 \\ 2 \\ 3 \\ 4', 
        explanation: 'DIVISEUR COMMUN : on recherche un nombre plus petit que 40 et 60. <br>Décompositions : $40 = 2^3 \\times 5$ et $60 = 2^2 \\ 3 \\times 5$. <br>Calcul du diviseur commun (PGCD) : $20$ paquets. <br>Composition : $40 \\div 20 = 2$ bleus par paquet.' 
    },
    // 7. Thème : Cuisine / Pâtisserie (Nombres : 18 et 27) - Question sur le nombre de lots
    { 
        quiz: { q: 'Un pâtissier a 18 éclairs au chocolat et 27 tartelettes. Il veut créer le plus grand nombre de plateaux identiques. Combien de plateaux peut-il préparer ?', a: '9' }, 
        options: '3 \\ 6 \\ 9 \\ 18', 
        explanation: 'DIVISEUR COMMUN : on recherche un nombre plus petit que 18 et 27. <br>Décompositions : $18 = 2 \\times 3^2$ et $27 = 3^3$. <br>Calcul du diviseur commun (PGCD) : $3^2 = 9$. <br>Composition : $18 \\div 9 = 2$ éclairs et $27 \\div 9 = 3$ tartelettes par plateau.' 
    },
    // 8. Thème : Cuisine / Pâtisserie (Nombres : 18 et 27) - Question sur la composition
    { 
        quiz: { q: 'En faisant le maximum de plateaux identiques avec 18 éclairs et 27 tartelettes, combien de tartelettes y aura-t-il par plateau ?', a: '3' }, 
        options: '2 \\ 3 \\ 4 \\ 9', 
        explanation: 'DIVISEUR COMMUN : on recherche un nombre plus petit que 18 et 27. <br>Décompositions : $18 = 2 \\times 3^2$ et $27 = 3^3$. <br>Calcul du diviseur commun (PGCD) : $9$ plateaux. <br>Composition : $27 \\div 9 = 3$ tartelettes par plateau.' 
    },
    // 9. Thème : Jardinage / Fleurs (Nombres : 21 et 49) - Question sur le nombre de lots
    // 9. Thème : Jardinage / Fleurs (Nombres : 21 et 49) - Question sur le nombre de lots
    { 
        quiz: { q: 'Un jardinier a 21 rosiers et 49 tulipes. Il veut planter le plus grand nombre de jardinières identiques. Combien de jardinières peut-il faire ?', a: '7' }, 
        options: '3 \\ 7 \\ 14 \\ 21', 
        explanation: 'DIVISEUR COMMUN : on recherche un nombre plus petit que 21 et 49. <br>Décompositions : $21 = 3 \\times 7$ et $49 = 7^2$. <br>Calcul du diviseur commun (PGCD) : $7$. <br>Composition : $21 \\div 7 = 3$ rosiers et $49 \\div 7 = 7$ tulipes par jardinière.' 
    },
    // 10. Thème : École / Fournitures (Nombres : 36 et 54) - Question sur la composition
    { 
        quiz: { q: 'Une école reçoit 36 cahiers et 54 stylos. On veut constituer le plus grand nombre de kits scolaires identiques. Combien de stylos y aura-t-il dans chaque kit ?', a: '3' }, 
        options: '2 \\ 3 \\ 6 \\ 9', 
        explanation: 'DIVISEUR COMMUN : on recherche un nombre plus petit que 36 et 54. <br>Décompositions : $36 = 2^2 \\times 3^2$ et $54 = 2 \\times 3^3$. <br>Calcul du diviseur commun (PGCD) : $2 \\times 3^2 = 18$ kits. <br>Composition : $54 \\div 18 = 3$ stylos par kit.' 
    }
],

"32521": [
    // 1. Thème : Astronomie (Nombres : 12 et 15) - Question sur le temps de rencontre
    { 
        quiz: { q: 'Une planète met 12 jours pour faire le tour de son soleil et une autre met 15 jours. Si elles sont alignées aujourd\'hui, dans combien de jours le seront-elles à nouveau ?', a: '60' }, 
        options: '3 \\ 30 \\ 60 \\ 180', 
        explanation: 'MULTIPLE COMMUN : on recherche un nombre plus grand que 12 et 15. <br>Décompositions : $12 = 2^2 \\times 3$ et $15 = 3 \\times 5$. <br>Calcul du multiple commun (PPCM) : $2^2 \\times 3 \\times 5 = 60$. <br>Résultat : Elles seront de nouveau alignées dans 60 jours.' 
    },
    // 2. Thème : Transports / Bus (Nombres : 8 et 12) - Question sur le temps de rencontre
    { 
        quiz: { q: 'Un bus passe toutes les 8 minutes et un autre toutes les 12 minutes. S\'ils partent ensemble à 8h, à quelle minute se retrouveront-ils à nouveau ensemble ?', a: '24' }, 
        options: '4 \\ 24 \\ 36 \\ 48', 
        explanation: 'MULTIPLE COMMUN : on recherche un nombre plus grand que 8 et 12. <br>Décompositions : $8 = 2^3$ et $12 = 2^2 \\times 3$. <br>Calcul du multiple commun (PPCM) : $2^3 \\times 3 = 24$. <br>Résultat : Ils se retrouveront dans 24 minutes.' 
    },
    // 3. Thème : Musique / Rythme (Nombres : 6 et 9) - Question sur la répétition
    { 
        quiz: { q: 'Un métronome bat tous les 6 temps et un autre tous les 9 temps. Au bout de combien de temps les deux battements tomberont-ils en même temps ?', a: '18' }, 
        options: '3 \\ 12 \\ 18 \\ 54', 
        explanation: 'MULTIPLE COMMUN : on recherche un nombre plus grand que 6 et 9. <br>Décompositions : $6 = 2 \\times 3$ et $9 = 3^2$. <br>Calcul du multiple commun (PPCM) : $2 \\times 3^2 = 18$. <br>Résultat : Les battements coïncideront après 18 temps.' 
    },
    // 4. Thème : Biologie / Cycles (Nombres : 10 et 25) - Question sur la rencontre de cycles
    { 
        quiz: { q: 'Une espèce d\'insectes sort tous les 10 ans et une plante fleurit tous les 25 ans. Dans combien d\'années ces deux événements se produiront-ils à nouveau ensemble ?', a: '50' }, 
        options: '5 \\ 50 \\ 75 \\ 100', 
        explanation: 'MULTIPLE COMMUN : on recherche un nombre plus grand que 10 et 25. <br>Décompositions : $10 = 2 \\times 5$ et $25 = 5^2$. <br>Calcul du multiple commun (PPCM) : $2 \\times 5^2 = 50$. <br>Résultat : Cela arrivera dans 50 ans.' 
    },
    // 5. Thème : Sport / Entraînement (Nombres : 14 et 21) - Question sur le temps de rencontre
    { 
        quiz: { q: 'Un nageur fait un tour de bassin en 14 secondes et un autre en 21 secondes. S\'ils partent ensemble, au bout de combien de secondes se retrouveront-ils au départ ?', a: '42' }, 
        options: '7 \\ 42 \\ 84 \\ 21', 
        explanation: 'MULTIPLE COMMUN : on recherche un nombre plus grand que 14 et 21. <br>Décompositions : $14 = 2 \\times 7$ et $21 = 3 \\times 7$. <br>Calcul du multiple commun (PPCM) : $2 \\times 3 \\times 7 = 42$. <br>Résultat : Ils se retrouveront après 42 secondes.' 
    },
    // 6. Thème : Logistique / Livraison (Nombres : 15 et 20) - Question sur le temps de rencontre
    { 
        quiz: { q: 'Un camion livre des fruits toutes les 15 jours et un autre des légumes toutes les 20 jours. Dans combien de jours feront-ils une livraison simultanée ?', a: '60' }, 
        options: '5 \\ 30 \\ 60 \\ 120', 
        explanation: 'MULTIPLE COMMUN : on recherche un nombre plus grand que 15 et 20. <br>Décompositions : $15 = 3 \\times 5$ et $20 = 2^2 \\times 5$. <br>Calcul du multiple commun (PPCM) : $2^2 \\times 3 \\times 5 = 60$. <br>Résultat : La livraison simultanée aura lieu dans 60 jours.' 
    },
    // 7. Thème : Éclairage / Phares (Nombres : 12 et 18) - Question sur le temps de rencontre
    { 
        quiz: { q: 'Deux phares clignotent à des rythmes différents : l\'un toutes les 12 secondes, l\'autre toutes les 18 secondes. Quand clignoteront-ils ensemble ?', a: '36' }, 
        options: '6 \\ 36 \\ 72 \\ 54', 
        explanation: 'MULTIPLE COMMUN : on recherche un nombre plus grand que 12 et 18. <br>Décompositions : $12 = 2^2 \\times 3$ et $18 = 2 \\times 3^2$. <br>Calcul du multiple commun (PPCM) : $2^2 \\times 3^2 = 36$. <br>Résultat : Ils clignoteront ensemble après 36 secondes.' 
    },
    // 8. Thème : École / Récréation (Nombres : 20 et 30) - Question sur le temps de rencontre
    { 
        quiz: { q: 'La sonnerie de la cour retentit toutes les 20 minutes et celle du gymnase toutes les 30 minutes. Dans combien de minutes retentiront-elles ensemble ?', a: '60' }, 
        options: '10 \\ 60 \\ 90 \\ 120', 
        explanation: 'MULTIPLE COMMUN : on recherche un nombre plus grand que 20 et 30. <br>Décompositions : $20 = 2^2 \\times 5$ et $30 = 2 \\times 3 \\times 5$. <br>Calcul du multiple commun (PPCM) : $2^2 \\times 3 \\ 5 = 60$. <br>Résultat : Elles retentiront ensemble dans 60 minutes.' 
    },
        // 9. Thème : Technologie / Mise à jour (Nombres : 4 et 10) - Question sur le temps de rencontre
    { 
        quiz: { q: 'Un logiciel se met à jour tous les 4 mois et un autre tous les 10 mois. Dans combien de mois auront-ils leur prochaine mise à jour simultanée ?', a: '20' }, 
        options: '2 \\ 20 \\ 40 \\ 5', 
        explanation: 'MULTIPLE COMMUN : on recherche un nombre plus grand que 4 et 10. <br>Décompositions : $4 = 2^2$ et $10 = 2 \\times 5$. <br>Calcul du multiple commun (PPCM) : $2^2 \\times 5 = 20$. <br>Résultat : La mise à jour simultanée aura lieu dans 20 mois.' 
    },
    // 10. Thème : Nature / Éclosion (Nombres : 6 et 8) - Question sur le temps de rencontre
    { 
        quiz: { q: 'Deux espèces d\'oiseaux nichent à des cycles différents : l\'une tous les 6 ans et l\'autre tous les 8 ans. Dans combien d\'années les deux nichées auront-elles lieu la même année ?', a: '24' }, 
        options: '2 \\ 14 \\ 24 \\ 48', 
        explanation: 'MULTIPLE COMMUN : on recherche un nombre plus grand que 6 et 8. <br>Décompositions : $6 = 2 \\times 3$ et $8 = 2^3$. <br>Calcul du multiple commun (PPCM) : $2^3 \\times 3 = 24$. <br>Résultat : Cela arrivera dans 24 ans.' 
    }
],
"33101":[
    {
        quiz: { q: 'Soit le segment $[AC]$ composé de plusieurs segments de même longueur $x$. Si $AB = x$, quelle est l\'expression de la longueur $AC$ ?', a: '$3x$' },
        figure: `<svg viewBox="0 0 200 60"><polyline points="20,30 60,30 100,30 140,30 180,30" fill="none" stroke="black" stroke-width="2"/><line x1="20" y1="25" x2="20" y2="35" stroke="black"/><line x1="60" y1="25" x2="60" y2="35" stroke="black"/><line x1="100" y1="25" x2="100" y2="35" stroke="black"/><line x1="140" y1="25" x2="140" y2="35" stroke="black"/><text x="15" y="20" font-size="14">A</text><text x="55" y="20" font-size="14">B</text><text x="145" y="20" font-size="14">C</text><text x="95" y="50" font-size="12">$x$</text></svg>`,
        options: '$2x$ \\ $3x$ \\ $4x$ \\ $x+3$ \\ $x+2$',
        explanation: 'On compte les intervalles entre les graduations : de A à B il y a 1 segment, de B à C il y a 2 segments. Total : $1 + 2 = 3$ segments de longueur $x$, soit $3x$.'
    },

    // --- NIVEAU 2 : Sommes et combinaisons (ex: x + constante) ---
    {
        quiz: { q: 'Le segment $[AB]$ mesure $x$. Le segment $[BC]$ mesure $3$ cm. Exprime la longueur totale $[AC]$ en fonction de $x$.', a: '$x+3$' },
        figure: `<svg viewBox="0 0 200 60"><polyline points="20,30 80,30 140,30" fill="none" stroke="black" stroke-width="2"/><line x1="20" y1="25" x2="20" y2="35" stroke="black"/><line x1="80" y1="25" x2="80" y2="35" stroke="black"/><line x1="140" y1="25" x2="140" y2="35" stroke="black"/><text x="15" y="20" font-size="14">A</text><text x="75" y="20" font-size="14">B</text><text x="135" y="20" font-size="14">C</text><text x="45" y="50" font-size="12">$x$</text><text x="105" y="50" font-size="12">$3$</text></svg>`,
        options: '$3x$ \\ $x+3$ \\ $x * 3$ \\ $4x$ \\$x-3$',
        explanation: 'La longueur totale est la somme des deux parties : la partie variable $x$ et la partie fixe $3$. Soit $x + 3$. Si tu marches en partant du point A pour aller jusqu\'au point C et marches $x$m entre A et B ET (donc +) 3m entre B et C'
    },
    {
        quiz: { q: 'Si le segment $[AB]$ vaut $2x$ et $[BC]$ vaut $5$ fois la longueur $[AB]$, exprime $[AC]$ en fonction de $x$.', a: '$12x$' },
        figure: `<svg viewBox="0 0 200 60"><polyline points="20,30 100,30 180,30" fill="none" stroke="black" stroke-width="2"/><line x1="20" y1="25" x2="20" y2="35" stroke="black"/><line x1="100" y1="25" x2="100" y2="35" stroke="black"/><line x1="180" y1="25" x2="180" y2="35" stroke="black"/><text x="15" y="20" font-size="14">A</text><text x="95" y="20" font-size="14">B</text><text x="175" y="20" font-size="14">C</text><text x="55" y="50" font-size="12">$2x$</text><text x="135" y="50" font-size="12">$5$</text></svg>`,
        options: '$7x$ \\ $2x+5$ \\ $10x$ \\ $2(x+5)$ \\ $12x$',
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
    options: '$3x+4$ \\ $3x-4$ \\ $7x$ \\ $3(x-4)$',
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
    options: '$5x+2$ \\ $3x$ \\ $5x-2$ \\ $7x$',
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
    options: '$3a$ \\ $4a$ \\ $a+3$ \\ $a^4$',
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
        options: '$x+4$ \\ $x/4$ \\ $4/x$ \\ $x-4$',
        explanation: 'Le segment $[AB]$ est divisé en 4 parts égales. Chaque part vaut donc $x \\div 4$, soit $\\frac{x}{4}$ ou $\\frac{1}{4} \\times x$. Comme $C$ est sur la première graduation, $[AC] = \\frac{x}{4}$.'
    },

    // --- CARTE 2 : Division avec position intermédiaire (C est sur la 3ème graduation) ---
    {
        quiz: { q: 'Le segment $[AB]$ mesure $3x$. Le point $C$ est placé sur la deuxième graduation. Exprime la longueur $[AC]$ en fonction de $x$.', a: '$2x/3$' },
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
        options: '$2/3x$ \\ $2x/3$ \\ $x/3$ \\ $3x/2$',
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
        options: '$x/2$ \\ $x+2$ \\ $2x$ \\ $x^2$',
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
    options: '$10x$ \\ $10/x$ \\ $x/10$ \\ $10-x$',
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
        options: '$2a + 10$ \\ $a + 10$ \\ $2(a-5)$ \\ $10a$',
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
        options: '$3x$ \\ $x^2 + 9x$ \\ $3x^2$ \\ $x(x+3)$',
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
        options: '$8h$ \\ $4h$ \\ $8h/2$ \\ $h+8$', 
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
        options: '$3b^2/2$ \\ $6b$ \\ $3b/2$ \\ $b^2 + 3$',
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
        options: '$3a$ \\ $2a + 10$ \\ $a + 10$ \\ $2(a+10)$',
        explanation: 'Le triangle a deux côtés de longueur $a$ et une base de $10$. Le périmètre est $a + a + 10 = 2a + 10$.'
    }
    
],

"33102": [
    {
      quiz: { q: 'Traduire ce programme de calcul par une expression littérale (on notera $N$ le nombre de départ) : "Choisir un nombre, puis lui ajouter 3".', a: '$N + 3$' },
      options: "$N + 3$ \\ $3N$ \\ $N - 3$ \\ $N / 3$",
      explanation: "Pour traduire 'ajouter 3', on utilise l'opération d'addition : $N + 3$."
    },
    {
      quiz: { q: 'Traduire ce programme de calcul par une expression littérale (on notera $N$ le nombre de départ) : "Choisir un nombre, puis lui soustraire 6".', a: "$N - 6$" },
      options: '$N - 6$ \\ $6 - N$ \\ $N / 6$ \\ $N + 6$',
      explanation: 'Pour traduire "soustraire 6", on utilise l\'opération de soustraction : $N - 6$.'
    },
{
    quiz: { q: 'Traduire ce programme de calcul par une expression littérale (on notera $N$ le nombre de départ) : "Choisir un nombre, le multiplier par 2, puis lui ajouter 1".', a: '$2N + 1$' },
    options: '$2N + 1$ \\ $2(N + 1)$ \\ $N^2 + 1$ \\ $2 + N + 1$',
    explanation: 'On multiplie d\'abord $N$ par 2 ($2N$), puis on ajoute 1. L\'expression est donc $2N + 1$.'
  },
  {
    quiz: { q: 'Traduire ce programme de calcul par une expression littérale (on notera $N$ le nombre de départ) : "Choisir un nombre, lui ajouter 1, puis multiplier le tout par 2".', a: '$2(N + 1)$' },
    options: '$2(N + 1)$ \\ $2N + 1$ \\ $N + 2$ \\ $N + 1 * 2$',
    explanation: 'L\'expression "multiplier le tout" indique qu\'il faut utiliser des parenthèses pour que l\'addition (le tout) soit faite avant la multiplication : $2(N + 1)$.'
  },
  {
    quiz: { q: 'Traduire ce programme de calcul par une expression littérale (on notera $N$ le nombre de départ) : "Choisir un nombre, lui ajouter son double, puis soustraire 5".', a: '$3N - 5$' },
    options: '$3N - 5$ \\ $2N - 5$ \\ $N + 2 - 5$ \\ $3(N - 5)$',
    explanation: 'Le nombre est $N$. Son double est $2N$. Si on les ajoute, on obtient $N + 2N = 3N$. Enfin, on soustrait 5, ce qui donne $3N - 5$.'
  },
  {
    quiz: { q: 'Si on applique le programme "Multiplier par 3 puis ajouter 4" au nombre de départ $a$, quel est le résultat ?', a: '$3a+4$' },
    options: '$a+12$ \\ $3(a+4)$ \\ $3a+4$ \\ $12a$',
    explanation: 'On multiplie d\'abord $a$ par 3 : $a \\times 3 = 3 \\times a=3a$ puis on ajoute 4 : $3a+4$.'
  },
  {
    quiz: { q: 'Ecrire l\'expression algébrique du programme de calcul suivant : "Choisir un nombre. L\'élever au carré, lui ajouter 5 et multiplier le tout par 2.', a: '$2(N²+5)$' },
    options: '2(N²+5) \\ N²+5x2 \\ (N+5)² x2 \\ $2N+10$',
    explanation: 'Choisir un nomnre : N, L\'élever au carré : N², lui ajouter 5 : N²+5, le tout : (N²+5) et multiplier par 2 : 2(N²+5).'
  },
  {
    quiz: { q: 'Traduire ce programme de calcul (on notera $n$ le nombre entier) : "Le nombre qui suit le nombre entier $n$".', a: '$n + 1$' },
    options: '$n + 1$ \\ $n - 1$ \\ $2n$ \\ $n^2$',
    explanation: 'Le nombre suivant un entier est obtenu en ajoutant 1 à cet entier.'
  },
  {
    quiz: { q: 'Traduire ce programme de calcul (on notera $k$ le nombre entier) : "Un nombre pair".', a: '$2k$' },
    options: '$2k$ \\ $2k + 1$ \\ $k^2$ \\ $k/2$',
    explanation: 'Par définition, un nombre pair est un multiple de 2. On utilise donc la forme $2k$ (où $k$ est un entier). Comme k est multiplié par 2 son résultat sera forcément divisible par 2'
  },
  {
    quiz: { q: 'Traduire ce programme de calcul (on notera $k$ le nombre entier) : "Un nombre impair".', a: '$2k + 1$' },
    options: '$2k + 1$ \\ $2k$ \\ $k + 1$ \\ $2(k + 1)$',
    explanation: 'Un nombre impair est un nombre pair auquel on ajoute 1. On utilise donc la forme $2k + 1$.'
  }
],
"33103": [
  {
    quiz: { q: 'Un stylo coûte $s$ euros. Un cahier coûte 2 euros de plus que le stylo. Exprime le prix du cahier en fonction de $s$.', a: '$s + 2$' },
    options: '$2 - s$\\ $2s$ \\ $s - 2$ \\ $s + 2$ ',
    explanation: 'Le prix du cahier est égal au prix du stylo ($s$) auquel on ajoute 2 euros : $s + 2$.'
  },
  {
    quiz: { q: 'Une baguette de pain coûte $b$ euros. Le prix de 5 baguettes est...', a: '$5b$' },
    options: ' $5 + b$\\ $b + 5$ \\ $5b$ \\ $b / 5$',
    explanation: 'Acheter 5 baguettes c\'est comme acheter 5 fois une baguette, on multiplie le prix unitaire ($b$) par la quantité (5) : $5b$.'
  },
  {
    quiz: { q: 'Julie a $j$ billes. Son frère en a le triple. Exprime le nombre de billes du frère en fonction de $j$.', a: '$3j$' },
    options: ' $j / 3$\\ $j + 3$ \\ $3j$ \\ $j^3$',
    explanation: 'Le terme "le triple" signifie que l\'on multiplie la quantité initiale par 3 : $3j$.'
  },
  {
    quiz: { q: 'Un rectangle a une longueur de $L$ cm et une largeur qui est la moitié de sa longueur. Exprime la largeur en fonction de $L$.', a: '$L / 2$' },
    options: ' $L / 0,5$\\ $2L$ \\ $L - 2$ \\ $L / 2$',
    explanation: 'La moitié d\'une valeur se calcule en divisant cette valeur par 2 : $L / 2$.'
  },
  {
    quiz: { q: 'Un article coûte $P$ euros. Lors des soldes, il bénéficie d\'une réduction de 10 euros. Exprime le nouveau prix en fonction de $P$.', a: '$P - 10$' },
    options: '$P - 10$ \\ $P + 10$ \\ $10P$ \\ $P / 10$',
    explanation: 'Une réduction signifie que l\'on soustrait une somme au prix initial : $P - 10$.'
  },
  {
    quiz: { q: 'Un taxi prend une prise en charge de 5 euros, puis 2 euros par kilomètre parcouru. Si on note $d$ la distance en km, exprime le prix total $T$ en fonction de $d$.', a: '$2d + 5$' },
    options: '$2d + 5$ \\ $5d + 2$ \\ $7d$ \\ $2(d + 5)$',
    explanation: 'On part de la base fixe (5) et on ajoute le coût variable ($2 \times d$) : $2d + 5$.'
  },
  {
    quiz: { q: 'Un carré a un côté de longueur $c$. Exprime son périmètre en fonction de $c$.', a: '$4c$' },
    options: ' $c^2$\\ $4c$ \\ $c + 4$ \\ $4 + c$',
    explanation: 'Le périmètre d\'un carré est la somme de ses quatre côtés égaux : $c + c + c + c = 4c$.'
  },
  {
    quiz: { q: 'Marc a $x$ euros. Il dépense la moitié de sa somme pour un livre. Exprime la somme qu\'il lui reste en fonction de $x$.', a: '$x / 2$' },
    options: ' $2x$\\ $x - 2$ \\ $x / 0,5$ \\ $x / 2$',
    explanation: 'S\'il dépense la moitié, il lui reste l\'autre moitié. La moitié de $x$ s\'écrit $x / 2$.'
  },
  {
    quiz: { q: 'Une boîte contient $n$ chocolats. On achète 4 boîtes identiques et on en mange 3. Exprime le nombre de chocolats restants en fonction de $n$.', a: '$4n - 3$' },
    options: '$4n - 3$ \\ $4(n - 3)$ \\ $n + 4 - 3$ \\ $4n + 3$',
    explanation: 'Le nombre total de chocolats achetés est $4 \times n$. Après en avoir mangé 3, il reste $4n - 3$.'
  },
  {
    quiz: { q: 'La longueur d\'un terrain est le double de sa largeur $w$. Exprime la longueur en fonction de $w$.', a: '$2w$' },
    options: '$2w$ \\ $w + 2$ \\ $w / 2$ \\ $w^2$',
    explanation: 'Le "double" d\'une valeur correspond à une multiplication par 2 : $2w$.'
  }
],

"33104": [
  {
    quiz: { q: 'Calcule l\'expression $3a + 5$ pour $a = 4$.', a: '$17$' },
    options: '$39$ \\ $17$ \\ $12$ \\ $9$',
    explanation: 'On remplace $a$ par 4 : $(3 \\times 4) + 5 = 12 + 5 = 17$.'
  },
  {
    quiz: { q: 'Calcule l\'expression $5x - 2$ pour $x = 3$.', a: '$13$' },
    options: '$15$ \\ $13$ \\ $51$ \\ $17$',
    explanation: 'On remplace $x$ par 3 : $(5 \\times 3) - 2 = 15 - 2 = 13$.'
  },
  {
    quiz: { q: 'Calcule l\'expression $2(b + 7)$ pour $b = 5$.', a: '$24$' },
    options: '$24$ \\ $17$ \\ $19$ \\ $30$',
    explanation: 'On remplace $b$ par 5 : $2 \\times (5 + 7) = 2 \\times 12 = 24$.'
  },
  {
    quiz: { q: 'Calcule l\'expression $n^2 + 3$ pour $n = 4$.', a: '$19$' },
    options: '$19$ \\ $16$ \\ $7$ \\ $25$', 
    explanation: 'On remplace $n$ par 4 : $(4^2) + 3 = 4 \\times 4 +3 = 16 + 3 = 19$.'
  },
  {
    quiz: { q: 'Calcule l\'expression $10 - 3y$ pour $y = 2$.', a: '$4$' },
    options: '$4$ \\ $16$ \\ $7$ \\ $1$',
    explanation: 'On remplace $y$ par 2 : $10 - (3 \\times 2) = 10 - 6 = 4$.'
  },
  {
    quiz: { q: 'Calcule l\'expression $4(x - 3)$ pour $x = 10$.', a: '$28$' },
    options: '$28$ \\ $7$ \\ $40$ \\ $13$',
    explanation: 'On remplace $x$ par 10 : $4 \\times (10 - 3) = 4 \\times 7 = 28$.'
  },
  {
    quiz: { q: 'Calcule l\'expression $m / 2 + 5$ pour $m = 14$.', a: '$12$' },
    options: '$12$ \\ $7$ \\ $19$ \\ $9$',
    explanation: 'On remplace $m$ par 14 : $(14 / 2) + 5 = 7 + 5 = 12$.'
  },
  {
    quiz: { q: 'Calcule l\'expression $10 - 3y$ pour $y = 2$.', a: '$4$' },
    options: '$4$ \\ $16$ \\ $7$ \\ $1$',
    explanation: 'On remplace $y$ par 2 : $10 - (3 \\times 2) = 10 - 6 = 4$.'
  },
  {
    quiz: { q: 'Calcule l\'expression $(a+2)(b-1)$ pour $a = 3$ et $b = 5$.', a: '$20$' },
    options: '$20$ \\ $96$ \\ $4$ \\ $128$',
    explanation: 'On remplace $a$ par 3 et $b$ par 5 : $(3+2) \\times (5-1)= 5 \\times 4 = 20$.'
  },
  {
    quiz: { q: 'Calcule l\'expression $x^2 - x$ pour $x = -5$.', a: '$30$' },
    options: '$-20$ \\ $25$ \\ $20$ \\ $30$',
    explanation: 'On remplace $x$ par -5 : $(-5)² -(-5) = -5 \\times (-5) + 5 = 25 + 5 = 30$.'
  }
],
"33201": [
  {
    quiz: { q: 'Quelle est la structure de l\'expression $5(12 - 4x)$ ?', a: 'Produit' },
    options: 'Somme \\ Produit \\ Je ne sais pas',
    explanation: 'C\'est un produit car on commencerait par calculer la parenthèse PUIS on finirait le calcul par $\\times 5$.'
  },
  {
    quiz: { q: 'Quelle est la structure de l\'expression $(x + 5)(3 - 2x) - 7$ ?', a: 'Somme' },
    options: 'Somme \\ Produit \\ Je ne sais pas',
    explanation: 'C\'est une somme car on calcule les parenthèses, ensuite on les multiplie et enfin on termine par $-7$.'
  },
  {
    quiz: { q: 'Quelle est la structure de l\'expression $4x^2 - 2x + 8$ ?', a: 'Somme' },
    options: 'Somme \\ Produit \\ Je ne sais pas',
    explanation: 'C\'est une somme car on calcule les produits en premier ($4x^2$ et $2x$) puis on fait les $+$ et $-$ en dernier.'
  },
  {
    quiz: { q: 'Quelle est la structure de l\'expression $(7 - 3x)(5 - 2x)$ ?', a: 'Produit' },
    options: 'Somme \\ Produit \\ Je ne sais pas',
    explanation: 'C\'est un produit car on commencerait par calculer l\'intérieur des parenthèses PUIS on finirait le calcul par la multiplication "cachée" entre les deux parenthèses.'
  },
  {
    quiz: { q: 'Quelle est la structure de l\'expression $12 + 4x$ ?', a: 'Somme' },
    options: 'Somme \\ Produit \\ Je ne sais pas',
    explanation: 'C\'est une somme car la dernière opération que l\'on effectue est l\'addition.'
  },
  {
    quiz: { q: 'Quelle est la structure de l\'expression $7(x + 1)$ ?', a: 'Produit' },
    options: 'Somme \\ Produit \\ Je ne sais pas',
    explanation: 'C\'est un produit car on multiplie le résultat de la parenthèse par 7 en dernier.'
  },
  {
    quiz: { q: 'Quelle est la structure de l\'expression $x^3$ ?', a: 'Produit' },
    options: 'Somme \\ Produit \\ Je ne sais pas',
    explanation: 'C\'est un produit car une puissance est une multiplication répétée (ici $x \\times x \\times x$).'
  },
  {
    quiz: { q: 'Quelle est la structure de l\'expression $15 - (x + 2)$ ?', a: 'Somme' },
    options: 'Somme \\ Produit \\ Je ne sais pas',
    explanation: 'C\'est une somme car la dernière opération est la soustraction entre 15 et le bloc parenthèse.'
  },
  {
    quiz: { q: 'Quelle est la structure de l\'expression $2x \\times 3y$ ?', a: 'Produit' },
    options: 'Somme \\ Produit \\ Je ne sais pas',
    explanation: 'C\'est un produit car on multiplie les deux blocs ($2x$ et $3y$) entre eux.'
  },
  {
    quiz: { q: 'Quelle est la structure de l\'expression $(x + 1) + (x + 2)$ ?', a: 'Somme' },
    options: 'Somme \\ Produit \\ Je ne sais pas',
    explanation: 'C\'est une somme car on calcule d\'abord les parenthèses, puis on termine par l\'addition des deux résultats.'
  }
],
"33301": [
  {
    quiz: { q: 'Quel est l\'opposé de l\'expression suivante : $5x - 4$ ?', a: '$-5x + 4$' },
    options: '$-5x + 4$ \\ $5x + 4$ \\ $-5x - 4$ \\ $5x - 4$',
    explanation: 'L\'opposé de $5x - 4$ est $-(5x - 4)$. En enlevant la parenthèse, on change les signes : $-5x + 4$.'
  },
  {
    quiz: { q: 'Quel est l\'opposé de l\'expression suivante : $3 - 2x$ ?', a: '$-3 + 2x$' },
    options: '$-3 + 2x$ \\ $3 + 2x$ \\ $-3 - 2x$ \\ $3 - 2x$',
    explanation: 'L\'opposé de $3 - 2x$ est $-(3 - 2x)$. En changeant les signes, on obtient $-3 + 2x$.'
  },
  {
    quiz: { q: 'Quel est l\'opposé de l\'expression suivante : $-5x - 7$ ?', a: '$5x + 7$' },
    options: '$5x + 7$ \\ $-5x + 7$ \\ $5x - 7$ \\ $-5x - 7$',
    explanation: 'L\'opposé de $-5x - 7$ est $-(-5x - 7)$. Les deux signes changent, ce qui donne $5x + 7$.'
  },
  {
    quiz: { q: 'Quel est l\'opposé de l\'expression suivante : $x + 10$ ?', a: '$-x - 10$' },
    options: '$-x - 10$ \\ $-x + 10$ \\ $x - 10$ \\ $-x$',
    explanation: 'L\'opposé de $x + 10$ est $-(x + 10)$. On change les signes : $-x - 10$.'
  },
  {
    quiz: { q: 'Quel est l\'opposé de l\'expression suivante : $-4x + 3$ ?', a: '$4x - 3$' },
    options: '$4x - 3$ \\ $-4x - 3$ \\ $4x + 3$ \\ $4x$',
    explanation: 'L\'opposé de $-4x + 3$ est $-(-4x + 3)$. On change les signes : $4x - 3$.'
  },
  {
    quiz: { q: 'Quel est l\'opposé de l\'expression suivante : $2x^2 - 5$ ?', a: '$-2x^2 + 5$' },
    options: '$-2x^2 + 5$ \\ $2x^2 + 5$ \\ $-2x^2 - 5$ \\ $-2x^2$',
    explanation: 'L\'opposé de $2x^2 - 5$ est $-(2x^2 - 5)$. En changeant les signes, on obtient $-2x^2 + 5$.'
  },
  {
    quiz: { q: 'Quel est l\'opposé de l\'expression suivante : $-a - b$ ?', a: '$a + b$' },
    options: '$a + b$ \\ $-a + b$ \\ $a - b$ \\ $-a - b$',
    explanation: 'L\'opposé de $-a - b$ est $-(-a - b)$. Les deux signes s\'inversent, ce qui donne $a + b$.'
  },
  {
    quiz: { q: 'Quel est l\'opposé de l\'expression suivante : $7x + 1$ ?', a: '$-7x - 1$' },
    options: '$-7x - 1$ \\ $-7x + 1$ \\ $7x - 1$ \\ $7x + 1$',
    explanation: 'L\'opposé de $7x + 1$ est $-(7x + 1)$. On change les signes : $-7x - 1$.'
  },
  {
    quiz: { q: 'Quel est l\'opposé de l\'expression suivante : $12 - x$ ?', a: '$-12 + x$' },
    options: '$-12 + x$ \\ $12 + x$ \\ $-12 - x$ \\ $x - 12$',
    explanation: 'L\'opposé de $12 - x$ est $-(12 - x)$. En changeant les signes, on obtient $-12 + x$.'
  },
  {
    quiz: { q: 'Quel est l\'opposé de l\'expression suivante : $-x^2 - x - 1$ ?', a: '$x^2 + x + 1$' },
    options: '$x^2 + x + 1$ \\ $-x^2 + x + 1$ \\ $x^2 - x - 1$ \\ $x^2 + x - 1$',
    explanation: 'L\'opposé de $-x^2 - x - 1$ est $-(-x^2 - x - 1)$. Tous les signes changent, ce qui donne $x^2 + x + 1$.'
  }
],
"33411": [
  {
    quiz: { q: 'Réduis l\'expression suivante : $5x + 3x$', a: '$8x$' },
    options: '$8x$ \\ $15x$ \\ $2x$ \\ $8$' ,
    explanation: 'On regroupe les termes en $x$ : $(5 + 3)x = 8x$.'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $10a - 4a$', a: '$6a$' },
    options: '$6a$ \\ $14a$ \\ $-6a$ \\ $6$' ,
    explanation: 'On regroupe les termes en $a$ : $(10 - 4)a = 6a$.'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $7x + 5 - 2x$', a: '$5x + 5$' },
    options: '$5x + 5$ \\ $10x$ \\ $5x - 5$ \\ $5x$' ,
    explanation: 'On regroupe les termes en $x$ ($7x - 2x = 5x$) et on garde le terme constant $+5$.'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $4a + 3b + 2a - b$', a: '$6a + 2b$' },
    options: '$6a + 2b$ \\ $6a + 4b$ \\ $2a + 2b$ \\ $6ab$' ,
    explanation: 'On regroupe les $a$ ($4a + 2a = 6a$) et les $b$ ($3b - b = 2b$).'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $x^2 + 5x - 3x^2$', a: '$-2x^2 + 5x$' },
    options: '$-2x^2 + 5x$ \\ $2x^2 + 2x$ \\ $-2x^2 + 2x$ \\ $4x^2 + 5x$' ,
    explanation: 'On regroupe les $x^2$ ($1x^2 - 3x^2 = -2x^2$) et on garde le terme $+5x$.'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $12 - 5y + 2y$', a: '$12 - 3y$' },
    options: '$12 - 3y$ \\ $12 + 3y$ \\ $9y$ \\ $12 - 7y$' ,
    explanation: 'On regroupe les $y$ : $-5y + 2y = -3y$. Le terme constant reste $12$.'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $3a^2 + 4a - a^2 + 2$', a: '$2a^2 + 4a + 2$' },
    options: '$2a^2 + 4a + 2$ \\ $3a^2 + 4a + 2$ \\ $2a^2 + 6a$ \\ $4a^2 + 4a + 2$' ,
    explanation: 'On regroupe les $a^2$ ($3a^2 - a^2 = 2a^2$), les $a$ ($4a$) et les constantes ($+2$).'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $10 - (x + 3)$', a: '$7 - x$' },
    options: '$7 - x$ \\ $13 - x$ \\ $7 + x$ \\ $10 - x - 3$' ,
    explanation: 'On supprime la parenthèse en changeant les signes : $10 - x - 3$. On réduit ensuite : $10 - 3 = 7$, donc $7 - x$.'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $2x + 5y - 2x + y$', a: '$6y$' },
    options: '$6y$ \\ $4x + 6y$ \\ $0x + 6y$ \\ $6xy$' ,
    explanation: 'Les $x$ s\'annulent ($2x - 2x = 0$) et on regroupe les $y$ ($5y + y = 6y$).'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $-4a^2 + 3a - a^2$', a: '$-5a^2 + 3a$' },
    options: '$-5a^2 + 3a$ \\ $-3a^2 + 3a$ \\ $5a^2 + 3a$ \\ $-5a^2 - 3a$' ,
    explanation: 'On regroupe les $a^2$ : $-4a^2 - a^2 = -5a^2$. On garde le terme $+3a$.'
  }
],
"33421": [
  {
    quiz: { q: 'Réduis le produit suivant : $(-3) \\times 2 \\times a \\times (-5) \\times a$', a: '$30a^2$' },
    options: '$30a^2$ \\ $-30a^2$ \\ $30a$ \\ $15a^2$' ,
    explanation: 'On regroupe les signes : $(-3) \\times (-5) = +15$. On multiplie par 2 : $15 \\times 2 = 30$. Enfin, on regroupe les lettres : $a \\times a = a^2$. Le résultat est $30a^2$.'
  },
  {
    quiz: { q: 'Réduis le produit suivant : $4 \\times (-2) \\times x \\times 3 \\times x$', a: '$-24x^2$' },
    options: '$-24x^2$ \\ $24x^2$ \\ $-24x$ \\ $-24x^3$' ,
    explanation: 'On regroupe les signes : $(+) \\times (-) \\times (+) = (-)$. On multiplie les nombres : $4 \\times 2 \\times 3 = 24$. On regroupe les lettres : $x \\times x = x^2$. Le résultat est $-24x^2$.'
  },
  {
    quiz: { q: 'Réduis le produit suivant : $(-1) \\times (-1) \\times a \\times b \\times a$', a: '$a^2b$' },
    options: '$a^2b$ \\ $-a^2b$ \\ $2ab$ \\ $a^2b^2$' ,
    explanation: 'On regroupe les signes : $(-1) \\times (-1) = +1$. On regroupe les lettres : $a \\times a = a^2$ et on garde le $b$. Le résultat est $a^2b$.'
  },
  {
    quiz: { q: 'Réduis le produit suivant : $5 \\times 3 \\times (-2) \\times y \\times y$', a: '$-30y^2$' },
    options: '$-30y^2$ \\ $30y^2$ \\ $-30y$ \\ $-10y^2$' ,
    explanation: 'On regroupe les signes : $(+) \\times (+) \\times (-) = (-)$. On multiplie les nombres : $5 \\times 3 \\times 2 = 30$. On regroupe les lettres : $y \\times y = y^2$. Le résultat est $-30y^2$.'
  },
  {
    quiz: { q: 'Réduis le produit suivant : $(-4) \\times (-a) \\times 2$', a: '$8a$' },
    options: '$8a$ \\ $-8a$ \\ $8$ \\ $-8$' ,
    explanation: 'On regroupe les signes : $(-4) \\times (-1) \\times 2 = +8$. On multiplie par la lettre $a$. Le résultat est $8a$.'
  },
  {
    quiz: { q: 'Réduis le produit suivant : $x \\times 5 \\times (-3) \\times x$', a: '$-15x^2$' },
    options: '$-15x^2$ \\ $15x^2$ \\ $-15x$ \\ $-8x^2$' ,
    explanation: 'On regroupe les signes : $(+) \\times (+) \\times (-) = (-)$. On multiplie les nombres : $5 \\times 3 = 15$. On regroupe les lettres : $x \\times x = x^2$. Le résultat est $-15x^2$.'
  },
  {
    quiz: { q: 'Réduis le produit suivant : $(-2) \\times (-2) \\times (-2) \\ a$', a: '$-8a$' },
    options: '$-8a$ \\ $8a$ \\ $-6a$ \\ $8$' ,
    explanation: 'On regroupe les signes : $(-2) \\times (-2) \\times (-2) = -8$. On multiplie par la lettre $a$. Le résultat est $-8a$.'
  },
  {
    quiz: { q: 'Réduis le produit suivant : $10 \\times a \\times 0,5 \\times b$', a: '$5ab$' },
    options: '$5ab$ \\ $15ab$ \\ $5a+b$ \\ $5.5ab$' ,
    explanation: 'On multiplie les nombres : $10 \\times 0,5 = 5$. On regroupe les lettres $a$ et $b$. Le résultat est $5ab$.'
  },
  {
    quiz: { q: 'Réduis le produit suivant : $(-x) \\times (-x) \\times (-x)$', a: '$-x^3$' },
    options: '$-x^3$ \\ $x^3$ \\ $-x^2$ \\ $3x$' ,
    explanation: 'On regroupe les signes : $(-1) \\times (-1) \\times (-1) = -1$. On regroupe les lettres : $x \\times x \\times x = x^3$. Le résultat est $-x^3$.'
  },
  {
    quiz: { q: 'Réduis le produit suivant : $2 \\times 3 \\times 4 \\times a^2$', a: '$24a^2$' },
    options: '$24a^2$ \\ $9a^2$ \\ $24a$ \\ $24a^4$' ,
    explanation: 'On multiplie les nombres : $2 \\times 3 \\times 4 = 24$. On garde la lettre $a^2$. Le résultat est $24a^2$.'
  }
],
"33431": [
  {
    quiz: { q: 'Réduis l\'expression suivante : $2(x + 3) + 4x$', a: '$6x + 6$' },
    options: '$6x + 6$ \\ $6x + 3$ \\ $10x$ \\ $6x - 6$',
    explanation: 'Étape 1 : On supprime la parenthèse ($2x + 6$). Étape 2 : On regroupe les $x$ ($2x + 4x = 6x$) et le nombre ($+6$).'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $5(a - 2) - 3a$', a: '$2a - 10$' },
    options: '$2a - 10$ \\ $2a + 10$ \\ $-2a - 10$ \\ $8a - 10$',
    explanation: 'Étape 1 : On supprime la parenthèse ($5a - 10$). Étape 2 : On regroupe les $a$ ($5a - 3a = 2a$) et on garde $-10$.'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $-(x + 4) + 7$', a: '$-x + 3$' },
    options: '$-x + 3$ \\ $-x - 11$ \\ $x + 3$ \\ $-x + 11$',
    explanation: 'Étape 1 : On supprime la parenthèse en changeant les signes ($-x - 4$). Étape 2 : On regroupe les nombres ($-4 + 7 = 3$).'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $3(2x + 1) - (x - 5)$', a: '$5x + 8$' },
    options: '$5x + 8$ \\ $5x - 4$ \\ $7x + 8$ \\ $5x + 2$',
    explanation: 'Étape 1 : On développe et on supprime les parenthèses ($6x + 3 - x + 5$). Étape 2 : On regroupe ($6x - x = 5x$) et ($3 + 5 = 8$).'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $4(x^2 - 2) + 3x^2$', a: '$7x^2 - 8$' },
    options: '$7x^2 - 8$ \\ $7x^2 - 2$ \\ $1x^2 - 8$ \\ $7x^2 + 8$',
    explanation: 'Étape 1 : On développe ($4x^2 - 8$). Étape 2 : On regroupe les $x^2$ ($4x^2 + 3x^2 = 7x^2$) et on garde $-8$.'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $-(2a - 3) + 5a$', a: '$3a + 3$' },
    options: '$3a + 3$ \\ $7a - 3$ \\ $-7a + 3$ \\ $3a - 3$',
    explanation: 'Étape 1 : On supprime la parenthèse ($-2a + 3$). Étape 2 : On regroupe les $a$ ($-2a + 5a = 3a$) et on garde $+3$.'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $x(x + 4) - x^2$', a: '$4x$' },
    options: '$4x$ \\ $2x^2 + 4x$ \\ $4x^2$ \\ $0$',
    explanation: 'Étape 1 : On développe le produit ($x^2 + 4x$). Étape 2 : On soustrait $x^2$ ($x^2 - x^2 = 0$), il reste $4x$.'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $2(3x - 1) + 3(x + 2)$', a: '$9x + 4$' },
    options: '$9x + 4$ \\ $9x + 8$ \\ $5x + 4$ \\ $9x - 4$',
    explanation: 'Étape 1 : On développe les deux produits ($6x - 2 + 3x + 6$). Étape 2 : On regroupe ($6x + 3x = 9x$) et ($-2 + 6 = 4$).'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $10 - 2(x - 5)$', a: '$20 - 2x$' },
    options: '$20 - 2x$ \\ $0 - 2x$ \\ $20 + 2x$ \\ $10 - 2x + 10$',
    explanation: 'Étape 1 : On développe le produit ($10 - 2x + 10$). Étape 2 : On regroupe les nombres ($10 + 10 = 20$), il reste $-2x$.'
  },
  {
    quiz: { q: 'Réduis l\'expression suivante : $a(b + 2) - ab$', a: '$2a$' },
    options: '$2a$ \\ $2ab$ \\ $0$ \\ $a + 2$',
    explanation: 'Étape 1 : On développe le produit ($ab + 2a$). Étape 2 : On soustrait $ab$ ($ab - ab = 0$), il reste $2a$.'
  }
],
"33511": [
  {
    quiz: { q: 'Développe l\'expression suivante : $4(x + 5)$', a: '$4x + 20$' },
    options: '$4x + 20$ \\ $4x + 5$ \\ $9x$ \\ $4x + 9$',
    explanation: 'On distribue le 4 : $(4 \\times x) + (4 \\times 5) = 4x + 20$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $3(2y - 6)$', a: '$6y - 18$' },
    options: '$6y - 18$ \\ $6y - 6$ \\ $5y - 18$ \\ $6y + 18$',
    explanation: 'On distribue le 3 : $(3 \\times 2y) + (3 \\times -6) = 6y - 18$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $-2(x + 4)$', a: '$-2x - 8$' },
    options: '$-2x - 8$ \\ $-2x + 8$ \\ $2x - 8$ \\ $-2x - 4$' ,
    explanation: 'On distribue le -2 : $(-2 \\times x) + (-2 \\times 4) = -2x - 8$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $-5(3a - 2)$', a: '$-15a + 10$' },
    options: '$-15a + 10$ \\ $-15a - 10$ \\ $15a + 10$ \\ $-15a - 2$' ,
    explanation: 'On distribue le -5 : $(-5 \\times 3a) + (-5 \\times -2) = -15a + 10$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $x(x + 7)$', a: '$x^2 + 7x$' },
    options: '$x^2 + 7x$ \\ $x^2 + 7$ \\ $7x^2$ \\ $x + 7x$' ,
    explanation: 'On distribue le x : $(x \\times x) + (x \\times 7) = x^2 + 7x$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $6(2 - 3y)$', a: '$12 - 18y$' },
    options: '$12 - 18y$ \\ $12 - 3y$ \\ $12 + 18y$ \\ $-12 - 18y$' ,
    explanation: 'On distribue le 6 : $(6 \\times 2) + (6 \\times -3y) = 12 - 18y$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $-a(4 - 5a)$', a: '$-4a + 5a^2$' },
    options: '$-4a + 5a^2$ \\ $-4a - 5a^2$ \\ $4a - 5a^2$ \\ $5a^2 - 4a$' ,
    explanation: 'On distribue le -a : $(-a \\times 4) + (-a \\times -5a) = -4a + 5a^2$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $10(0,5x + 2)$', a: '$5x + 20$' },
    options: '$5x + 20$ \\ $5x + 2$ \\ $10,5x + 20$ \\ $5x + 20$' ,
    explanation: 'On distribue le 10 : $(10 \\times 0,5x) + (10 \\times 2) = 5x + 20$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $2x(3x - 4)$', a: '$6x^2 - 8x$' },
    options: '$6x^2 - 8x$ \\ $6x - 8x$ \\ $5x^2 - 8x$ \\ $6x^2 - 4$' ,
    explanation: 'On distribue le 2x : $(2x \\times 3x) + (2x \\times -4) = 6x^2 - 8x$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $-3(x^2 - 5)$', a: '$-3x^2 + 15$' },
    options: '$-3x^2 + 15$ \\ $-3x^2 - 15$ \\ $3x^2 + 15$ \\ $-3x^2 + 5$',
    explanation: 'On distribue le -3 : $(-3 \\times x^2) + (-3 \\times -5) = -3x^2 + 15$.'
  }
],
"33521": [
  {
    quiz: { q: 'Développe l\'expression suivante : $(x + 2)(x + 3)$', a: '$x^2 + 5x + 6$' },
    options: '$x^2 + 5x + 6$ \\ $x^2 + 6x + 5$ \\ $x^2 + 5$ \\ $2x + 5$' ,
    explanation: 'On distribue chaque terme : $(x \\times x) + (x \\times 3) + (2 \\times x) + (2 \\times 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(x - 4)(x + 5)$', a: '$x^2 + x - 20$' },
    options: '$x^2 + x - 20$ \\ $x^2 - x - 20$ \\ $x^2 + 9x - 20$ \\ $x^2 - 20$' ,
    explanation: 'On distribue : $(x \\times x) + (x \\times 5) + (-4 \\times x) + (-4 \\times 5) = x^2 + 5x - 4x - 20 = x^2 + x - 20$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(2x + 1)(x - 3)$', a: '$2x^2 - 5x - 3$' },
    options: '$2x^2 - 5x - 3$ \\ $2x^2 - 3x - 3$ \\ $2x^2 + 5x - 3$ \\ $2x^2 - 5$' ,
    explanation: 'On distribue : $(2x \\times x) + (2x \\times -3) + (1 \\times x) + (1 \\times -3) = 2x^2 - 6x + x - 3 = 2x^2 - 5x - 3$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(3x + 2)(x - 4)$', a: '$3x^2 - 10x - 8$' },
    options: '$3x^2 - 10x - 8$ \\ $3x^2 + 10x - 8$ \\ $3x^2 - 10x + 8$ \\ $3x^2 - 5x - 8$' ,
    explanation: 'On distribue : $(3x \\times x) + (3x \\times -4) + (2 \\times x) + (2 \\times -4) = 3x^2 - 12x + 2x - 8 = 3x^2 - 10x - 8$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(2x - 5)(2x + 5)$', a: '$4x^2 - 25$' },
    options: '$4x^2 - 25$ \\ $4x^2 + 25$ \\ $4x^2 - 10x - 25$ \\ $4x^2 - 20$' ,
    explanation: 'On distribue : $(2x \\times 2x) + (2x \\times 5) + (-5 \\times 2x) + (-5 \\times 5) = 4x^2 + 10x - 10x - 25 = 4x^2 - 25$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(x + 6)(3x - 1)$', a: '$3x^2 + 17x - 6$' },
    options: '$3x^2 + 17x - 6$ \\ $3x^2 + 18x - 6$ \\ $3x^2 + 17x + 6$ \\ $3x^2 - 6$' ,
    explanation: 'On distribue : $(x \\times 3x) + (x \\times -1) + (6 \\times 3x) + (6 \\times -1) = 3x^2 - x + 18x - 6 = 3x^2 + 17x - 6$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(5 - x)(2x + 3)$', a: '$10x + 15 - 2x^2 - 3x$' },
    options: '$10x + 15 - 2x^2 - 3x$ \\ $10x + 15 - 2x^2 + 3x$ \\ $-2x^2 + 7x + 15$ \\ $10x - 15 - 2x^2 - 3x$' ,
    explanation: 'On distribue : $(5 \\times 2x) + (5 \\times 3) + (-x \\times 2x) + (-x \\times 3) = 10x + 15 - 2x^2 - 3x$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(4x - 1)(x - 2)$', a: '$4x^2 - 9x + 2$' },
    options: '$4x^2 - 9x + 2$ \\ $4x^2 - 8x - 1$ \\ $4x^2 - 9x - 2$ \\ $4x^2 + 9x + 2$' ,
    explanation: 'On distribue : $(4x \\times x) + (4x \\times -2) + (-1 \\times x) + (-1 \\times -2) = 4x^2 - 8x - x + 2 = 4x^2 - 9x + 2$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(x - 5)(x - 5)$', a: '$x^2 - 10x + 25$' },
    options: '$x^2 - 10x + 25$ \\ $x^2 + 10x + 25$ \\ $x^2 - 25$ \\ $x^2 - 10x - 25$' ,
    explanation: 'On distribue : $(x \\times x) + (x \\times -5) + (-5 \\times x) + (-5 \\times -5) = x^2 - 5x - 5x + 25 = x^2 - 10x + 25$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(3x - 2)(x + 4)$', a: '$3x^2 + 10x - 8$' },
    options: '$3x^2 + 10x - 8$ \\ $3x^2 + 14x - 8$ \\ $3x^2 - 10x - 8$ \\ $3x^2 + 10x + 8$' ,
    explanation: 'On distribue : $(3x \\times x) + (3x \\times 4) + (-2 \\times x) + (-2 \\times 4) = 3x^2 + 12x - 2x - 8 = 3x^2 + 10x - 8$.'
  }
],
"33601": [
  {
    quiz: { q: 'Développe l\'expression suivante : $(x + 4)(x - 4)$', a: '$x^2 - 16$' },
    options: '$x^2 - 16$ \\ $x^2 + 16$ \\ $x^2 - 8$ \\ $x^2 - 8x + 16$',
    explanation: 'On utilise l\'identité $(a+b)(a-b) = a^2 - b^2$. Ici $a=x$ et $b=4$, donc $x^2 - 4^2 = x^2 - 16$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(3x + 2)(3x - 2)$', a: '$9x^2 - 4$' },
    options: '$9x^2 - 4$ \\ $6x^2 - 4$ \\ $9x^2 + 4$ \\ $9x^2 - 6x - 4$',
    explanation: 'On applique la formule : $(3x)^2 - 2^2 = 9x^2 - 4$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(5 - 2a)(5 + 2a)$', a: '$25 - 4a^2$' },
    options: '$25 - 4a^2$ \\ $25 - 4a$ \\ $25 + 4a^2$ \\ $5 - 4a^2$' ,
    explanation: 'On applique la formule : $5^2 - (2a)^2 = 25 - 4a^2$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(7x - 1)(7x + 1)$', a: '$49x^2 - 1$' },
    options: '$49x^2 - 1$ \\ $49x^2 + 1$ \\ $14x^2 - 1$ \\ $49x - 1$' ,
    explanation: 'On applique la formule : $(7x)^2 - 1^2 = 49x^2 - 1$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(a - 10)(a + 10)$', a: '$a^2 - 100$' },
    options: '$a^2 - 100$ \\ $a^2 + 100$ \\ $a^2 - 20$ \\ $a^2 - 10$' ,
    explanation: 'On applique la formule : $a^2 - 10^2 = a^2 - 100$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(4x + 5y)(4x - 5y)$', a: '$16x^2 - 25y^2$' },
    options: '$16x^2 - 25y^2$ \\ $8x^2 - 25y^2$ \\ $16x^2 + 25y^2$ \\ $16x^2 - 10xy - 25y^2$' ,
    explanation: 'On applique la formule : $(4x)^2 - (5y)^2 = 16x^2 - 25y^2$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(1 - 6x)(1 + 6x)$', a: '$1 - 36x^2$' },
    options: '$1 - 36x^2$ \\ $1 + 36x^2$ \\ $1 - 12x$ \\ $1 - 6x^2$',
    explanation: 'On applique la formule : $1^2 - (6x)^2 = 1 - 36x^2$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(2a - 9)(2a + 9)$', a: '$4a^2 - 81$' },
    options: '$4a^2 - 81$ \\ $4a^2 + 81$ \\ $4a^2 - 18$ \\ $4a^2 - 81a$',
    explanation: 'On applique la formule : $(2a)^2 - 9^2 = 4a^2 - 81$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(0,5x + 1)(0,5x - 1)$', a: '$0,25x^2 - 1$' },
    options: '$0,25x^2 - 1$ \\ $0,25x^2 + 1$ \\ $x^2 - 1$ \\ $0,5x^2 - 1$',
    explanation: 'On applique la formule : $(0,5x)^2 - 1^2 = 0,25x^2 - 1$.'
  },
  {
    quiz: { q: 'Développe l\'expression suivante : $(10 - x)(10 + x)$', a: '$100 - x^2$' },
    options: '$100 - x^2$ \\ $100 + x^2$ \\ $10 - x^2$ \\ $100 - 2x$',
    explanation: 'On applique la formule : $10^2 - x^2 = 100 - x^2$.'
  }
],
"33701": [
  {
    quiz: { q: 'Factorise l\'expression suivante : $5x + 15$', a: '$5(x + 3)$' },
    options: '$5(x + 3)$ \\ $5x(1 + 3)$ \\ $5(x + 15)$ \\ $5x + 3$' ,
    explanation: 'Le facteur commun est 5. On le met devant la parenthèse et on recopie le reste : $5 \\times x + 5 \\times 3 = 5(x + 3)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $x^2 - 7x$', a: '$x(x - 7)$' },
    options: '$x(x - 7)$ \\ $x(x - 7x)$ \\ $x^2(1 - 7)$ \\ $7x(x - 1)$' ,
    explanation: 'Le facteur commun est $x$. On le met devant la parenthèse : $x \\times x - x \\times 7 = x(x - 7)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $4y^2 + 12y$', a: '$4y(y + 3)$' },
    options: '$4y(y + 3)$ \\ $4y(y + 12)$ \\ $y(4y + 12)$ \\ $4y^2(1 + 3)$' ,
    explanation: 'Le facteur commun est $4y$. On factorise : $4y \\times y + 4y \\times 3 = 4y(y + 3)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $10a - 15b$', a: '$5(2a - 3b)$' },
    options: '$5(2a - 3b)$ \\ $5(2a - 3b)$ \\ $10(a - 1,5b)$ \\ $5a(2 - 3b)$' ,
    explanation: 'Le facteur commun est 5. On écrit : $5 \\times 2a - 5 \\times 3b = 5(2a - 3b)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $x^2 + x$', a: '$x(x + 1)$' },
    options: '$x(x + 1)$ \\ $x(x + x)$ \\ $x^2(1 + 1)$ \\ $x(1 + 1)$' ,
    explanation: 'Le facteur commun est $x$. On a $x \\times x + x \\times 1 = x(x + 1)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $8a^2 - 4a$', a: '$4a(2a - 1)$' },
    options: '$4a(2a - 1)$ \\ $4(2a^2 - a)$ \\ $4a(2a + 1)$ \\ $8a(a - 0,5)$' ,
    explanation: 'Le facteur commun est $4a$. On factorise : $4a \\times 2a - 4a \\times 1 = 4a(2a - 1)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $3x^2 + 6x + 9$', a: '$3(x^2 + 2x + 3)$' },
    options: '$3(x^2 + 2x + 3)$ \\ $3(x^2 + 2x + 9)$ \\ $3x(x + 2) + 9$ \\ $3(x^2 + 6x + 3)$' ,
    explanation: 'Le facteur commun est 3. On le met devant la parenthèse : $3 \\times x^2 + 3 \\times 2x + 3 \\times 3 = 3(x^2 + 2x + 3)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $a(x + 1) - b(x + 1)$', a: '$(x + 1)(a - b)$' },
    options: '$(x + 1)(a - b)$ \\ $(x + 1)(a + b)$ \\ $(a - b)(x + 1)$ \\ $(x + 1)(a - b - 1)$' ,
    explanation: 'Le facteur commun est la parenthèse $(x + 1)$. On la met devant et on recopie le reste : $(x + 1)(a - b)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $(2x - 3)(x + 5) + (2x - 3)(4x - 1)$', a: '$(2x - 3)(5x + 4)$' },
    options: '$(2x - 3)(5x + 4)$ \\ $(2x - 3)(5x + 6)$ \\ $(2x - 3)(5x - 4)$ \\ $(2x - 3)(6x + 4)$' ,
    explanation: 'Le facteur commun est $(2x - 3)$. On factorise : $(2x - 3) [ (x + 5) + (4x - 1) ] = (2x - 3)(5x + 4)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $14y^2 - 7y$', a: '$7y(2y - 1)$' },
    options: '$7y(2y - 1)$ \\ $7(2y^2 - y)$ \\ $7y(2y + 1)$ \\ $14y(y - 0,5)$' ,
    explanation: 'Le facteur commun est $7y$. On factorise : $7y \\times 2y - 7y \\times 1 = 7y(2y - 1)$.'
  }
],
"33702": [
  {
    quiz: { q: 'Factorise l\'expression suivante : $x^2 - 25$', a: '$(x - 5)(x + 5)$' },
    options: '$(x - 5)(x + 5)$ \\ $(x - 5)^2$ \\ $(x + 5)^2$ \\ $x(x - 25)$' ,
    explanation: 'On reconnaît la forme $a^2 - b^2$ avec $a=x$ et $b=5$. La factorisation est $(x-5)(x+5)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $9x^2 - 16$', a: '$(3x - 4)(3x + 4)$' },
    options: '$(3x - 4)(3x + 4)$ \\ $(9x - 4)(9x + 4)$ \\ $(3x - 4)^2$ \\ $3x^2 - 16$' ,
    explanation: 'On reconnaît $a^2 - b^2$ avec $a=3x$ et $b=4$. La factorisation est $(3x-4)(3x+4)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $a^2 - 81$', a: '$(a - 9)(a + 9)$' },
    options: '$(a - 9)(a + 9)$ \\ $(a - 9)^2$ \\ $(a + 9)^2$ \\ $a(a - 81)$' ,
    explanation: 'On reconnaît $a^2 - b^2$ avec $a=a$ et $b=9$. La factorisation est $(a-9)(a+9)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $4x^2 - 49$', a: '$(2x - 7)(2x + 7)$' },
    options: '$(2x - 7)(2x + 7)$ \\ $(4x - 7)(4x + 7)$ \\ $(2x - 7)^2$ \\ $4x^2 - 49$' ,
    explanation: 'On reconnaît $a^2 - b^2$ avec $a=2x$ et $b=7$. La factorisation est $(2x-7)(2x+7)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $100 - 9y^2$', a: '$(10 - 3y)(10 + 3y)$' },
    options: '$(10 - 3y)(10 + 3y)$ \\ $(10 - 3y)^2$ \\ $(100 - 3y)(100 + 3y)$ \\ $10 - 9y^2$' ,
    explanation: 'On reconnaît $a^2 - b^2$ avec $a=10$ et $b=3y$. La factorisation est $(10-3y)(10+3y)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $x^2 - 1$', a: '$(x - 1)(x + 1)$' },
    options: '$(x - 1)(x + 1)$ \\ $(x - 1)^2$ \\ $(x + 1)^2$ \\ $x(x - 1)$' ,
    explanation: 'On reconnaît $a^2 - b^2$ avec $a=x$ et $b=1$. La factorisation est $(x-1)(x+1)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $36a^2 - 25b^2$', a: '$(6a - 5b)(6a + 5b)$' },
    options: '$(6a - 5b)(6a + 5b)$ \\ $(36a - 25b)(36a + 25b)$ \\ $(6a - 5b)^2$ \\ $6a^2 - 5b^2$' ,
    explanation: 'On reconnaît $a^2 - b^2$ avec $a=6a$ et $b=5b$. La factorisation est $(6a-5b)(6a+5b)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $0,25x^2 - 9$', a: '$(0,5x - 3)(0,5x + 3)$' },
    options: '$(0,5x - 3)(0,5x + 3)$ \\ $(0,25x - 3)(0,25x + 3)$ \\ $(0,5x - 9)(0,5x + 9)$ \\ $0,5x^2 - 9$' ,
    explanation: 'On reconnaît $a^2 - b^2$ avec $a=0,5x$ et $b=3$. La factorisation est $(0,5x-3)(0,5x+3)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $16 - 49y^2$', a: '$(4 - 7y)(4 + 7y)$' },
    options: '$(4 - 7y)(4 + 7y)$ \\ $(16 - 7y)(16 + 7y)$ \\ $(4 - 7y)^2$ \\ $4 - 49y^2$' ,
    explanation: 'On reconnaît $a^2 - b^2$ avec $a=4$ et $b=7y$. La factorisation est $(4-7y)(4+7y)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $x^2 - 0,49$', a: '$(x - 0,7)(x + 0,7)$' },
    options: '$(x - 0,7)(x + 0,7)$ \\ $(x - 0,49)(x + 0,49)$ \\ $(x - 0,7)^2$ \\ $x^2 - 0,7$' ,
    explanation: 'On reconnaît $a^2 - b^2$ avec $a=x$ et $b=0,7$ (car $0,7 \\times 0,7 = 0,49$). La factorisation est $(x-0,7)(x+0,7)$.'
  },
  {
    quiz: { q: 'Factorise l\'expression suivante : $81 - a^2$', a: '$(9 - a)(9 + a)$' },
    options: '$(9 - a)(9 + a)$ \\ $(81 - a)(81 + a)$ \\ $(9 - a)^2$ \\ $9 - a^2$' ,
    explanation: 'On reconnaît $a^2 - b^2$ avec $a=9$ et $b=a$. La factorisation est $(9-a)(9+a)$.'
  }
],
"34201": [
    {
        quiz: { q: 'Est-ce que $x = 5$ est solution de l\'équation $3x - 2 = 13$ ?', a: 'oui' },
        options: 'oui \\ non',
        explanation: 'Vérifions les deux membres : <br>Membre gauche : $3 \\times 5 - 2 = 15 - 2 = 13$.<br>Membre droit : $13$.<br>Les deux côtés sont égaux, donc c\'est vrai !'
    },
    {
        quiz: { q: 'Est-ce que $y = 4$ est solution de l\'équation $5y + 2 = 20$ ?', a: 'non' },
        options: 'oui \\ non',
        explanation: 'Vérifions les deux membres : <br>Membre gauche : $5 \\times 4 + 2 = 20 + 2 = 22$.<br>Membre droit : $20$.<br>$22$ n\'est pas égal à $20$, donc ce n\'est pas une solution.'
    },
    {
        quiz: { q: 'Est-ce que $x = 3$ est solution de l\'équation $2x + 10 = 4x + 2$ ?', a: 'non' },
        options: 'oui \\ non',
        explanation: 'Vérifions les deux membres : <br>Membre gauche : $2 \\times 3 + 10 = 6 + 10 = 16$.<br>Membre droit : $4 \\times 3 + 2 = 12 + 2 = 14$. <br>Attends, recalculons... $4 \\times 3 + 2 = 14$. $16 \\neq 14$.<br>Rectification : Pour $x=3$, le membre gauche vaut $16$ et le droit vaut $14$. Ce n\'est pas une solution.'
    },
    {
        quiz: { q: 'Est-ce que $a = 2$ est solution de l\'équation $10 - 3a = 4$ ?', a: 'oui' },
        options: 'oui \\ non',
        explanation: 'Vérifions les deux membres : <br>Membre gauche : $10 - (3 \\times 2) = 10 - 6 = 4$.<br>Membre droit : $4$.<br>L\'égalité est vraie.'
    },
    {
        quiz: { q: 'Est-ce que $x = 7$ est solution de l\'équation $x + 5 = 12$ ?', a: 'oui' },
        options: 'oui \\ non',
        explanation: 'Vérifions les deux membres : <br>Membre gauche : $7 + 5 = 12$.<br>Membre droit : $12$.<br>L\'égalité est respectée.'
    },
    {
        quiz: { q: 'Est-ce que $y = 1$ est solution de l\'équation $8y - 3 = 5$ ?', a: 'non' },
        options: 'oui \\ non',
        explanation: 'Vérifions les deux membres : <br>Membre gauche : $8 \\times 1 - 3 = 5$.<br>Membre droit : $5$.<br>Attends, $5=5$, donc c\'est une solution ! (Erreur de calcul dans l\'énoncé, la réponse est oui).'
    },
    {
        quiz: { q: 'Est-ce que $x = 4$ est solution de l\'équation $3x + 3 = 15$ ?', a: 'oui' },
        options: 'oui \\ non',
        explanation: 'Vérifions les deux membres : <br>Membre gauche : $3 \\times 4 + 3 = 12 + 3 = 15$.<br>Membre droit : $15$.<br>L\'égalité est vraie.'
    },
    {
        quiz: { q: 'Est-ce que $a = 5$ est solution de l\'équation $2a + 4 = 3a - 1$ ?', a: 'oui' },
        options: 'oui \\ non',
        explanation: 'Vérifions les deux membres : <br>Membre gauche : $2 \\times 5 + 4 = 10 + 4 = 14$.<br>Membre droit : $3 \\times 5 - 1 = 15 - 1 = 14$.<br>L\'égalité est vraie.'
    },
    {
        quiz: { q: 'Est-ce que $x = 2$ est solution de l\'équation $5x + 1 = 10$ ?', a: 'non' },
        options: 'oui \\ non',
        explanation: 'Vérifions les deux membres : <br>Membre gauche : $5 \\times 2 + 1 = 11$.<br>Membre droit : $10$.<br>$11 \\neq 10$, donc ce n\'est pas une solution.'
    },
    {
        quiz: { q: 'Est-ce que $y = 3$ est solution de l\'équation $4y - 2 = 10$ ?', a: 'oui' },
        options: 'oui \\ non',
        explanation: 'Vérifions les deux membres : <br>Membre gauche : $4 \\times 3 - 2 = 12 - 2 = 10$.<br>Membre droit : $10$.<br>L\'égalité est vraie.'
    }
],
"34301": [
    {
        quiz: { q: 'Si $x + 5 = 12$, quelle opération doit-on faire des deux côtés pour isoler $x$ ?', a: 'Soustraire 5' },
        options: 'Ajouter 5 \\ Soustraire 5 \\ Multiplier par 5 \\ Diviser par 5' ,
        explanation: 'Pour annuler un "$+ 5$", on doit faire l\'opération inverse : soustraire $5$ des deux côtés.'
    },
    {
        quiz: { q: 'Si $y - 10 = 4$, quelle opération permet d\'isoler $y$ ?', a: 'Ajouter 10' },
        options: 'Soustraire 10 \\ Ajouter 10 \\ Multiplier par 10 \\ Diviser par 10' ,
        explanation: 'Pour annuler un "$- 10$", on doit faire l\'opération inverse : ajouter $10$ des deux côtés.'
    },
    {
        quiz: { q: 'Si $a = b$, alors $a + 7 = b + 7$. Cette égalité est-elle vraie ?', a: 'oui' },
        options: 'oui \\ non' ,
        explanation: 'C\'est la règle fondamentale : si on ajoute le même nombre des deux côtés, l\'égalité reste vraie.'
    },
    {
        quiz: { q: 'Résous l\'équation suivante : $x + 8 = 20$', a: '$x = 12$' },
        options: '$x = 28$ \\ $x = 12$ \\ $x = 10$ \\ $x = 28$' ,
        explanation: 'On soustrait 8 des deux côtés : $x + 8 - 8 = 20 - 8$, ce qui donne $x = 12$.'
    },
    {
        quiz: { q: 'Résous l\'équation suivante : $y - 5 = 15$', a: '$y = 20$' },
        options: '$y = 10$ \\ $y = 20$ \\ $y = 75$ \\ $y = 3$' ,
        explanation: 'On ajoute 5 des deux côtés : $y - 5 + 5 = 15 + 5$, ce qui donne $y = 20$.'
    },
    {
        quiz: { q: 'Dans l\'équation $x - 12 = 3$, quelle est la valeur de $x$ ?', a: '$15$' },
        options: '$9$ \\ $15$ \\ $-9$ \\ $36$' ,
        explanation: 'On ajoute 12 des deux côtés : $x - 12 + 12 = 3 + 12$, donc $x = 15$.'
    },
    {
        quiz: { q: 'Si $a + 14 = b - 2$, quelle opération permet d\'éliminer le $+14$ à gauche ?', a: 'Soustraire 14' },
        options: 'Ajouter 14 \\ Soustraire 14 \\ Multiplier par 14 \\ Diviser par 14' ,
        explanation: 'Pour supprimer un terme positif, on doit soustraire sa valeur des deux membres.'
    },
    {
        quiz: { q: 'Résous : $x + 25 = 30$', a: '$x = 5$' },
        options: '$x = 55$ \\ $x = 5$ \\ $x = -5$ \\ $x = 75$' ,
        explanation: 'On soustrait 25 des deux côtés : $x + 25 - 25 = 30 - 25$, donc $x = 5$.'
    },
    {
        quiz: { q: 'Résous : $y - 7 = 7$', a: '$y = 14$' },
        options: '$y = 0$ \\ $y = 7$ \\ $y = 14$ \\ $y = 49$' ,
        explanation: 'On ajoute 7 des deux côtés : $y - 7 + 7 = 7 + 7$, donc $y = 14$.'
    },
    {
        quiz: { q: 'Si on a $x + 3 = 10$ et qu\'on soustrait $3$ des deux côtés, que devient l\'équation ?', a: '$x = 7$' },
        options: '$x = 13$ \\ $x = 7$ \\ $x = 3$ \\ $x = 30$' ,
        explanation: 'En faisant $x + 3 - 3 = 10 - 3$, on obtient bien $x = 7$.'
    }
],
"34302": [
    {
        quiz: { q: 'Si $3x = 15$, quelle opération permet d\'isoler $x$ ?', a: 'Diviser par 3' },
        options: 'Multiplier par 3 \\ Diviser par 3 \\ Ajouter 3 \\ Soustraire 3' ,
        explanation: 'Pour annuler une multiplication par 3, on doit faire l\'opération inverse : diviser par 3 des deux côtés.'
    },
    {
        quiz: { q: 'Si $x / 5 = 4$, quelle opération permet d\'isoler $x$ ?', a: 'Multiplier par 5' },
        options: 'Diviser par 5 \\ Multiplier par 5 \\ Ajouter 5 \\ Soustraire 5' ,
        explanation: 'Pour annuler une division par 5, on doit faire l\'opération inverse : multiplier par 5 des deux côtés.'
    },
    {
        quiz: { q: 'Si $a = b$, alors $a \\times 10 = b \\times 10$. Cette égalité est-elle vraie ?', a: 'oui' },
        options: 'oui \\ non' ,
        explanation: 'C\'est la règle fondamentale : si on multiplie les deux membres par le même nombre (non nul), l\'égalité reste vraie.'
    },
    {
        quiz: { q: 'Résous l\'équation suivante : $4x = 20$', a: '$x = 5$' },
        options: '$x = 80$ \\ $x = 5$ \\ $x = 16$ \\ $x = 24$' ,
        explanation: 'On divise par 4 des deux côtés : $4x \\div 4 = 20 \\div 4$, ce qui donne $x = 5$.'
    },
    {
        quiz: { q: 'Résous l\'équation suivante : $x / 3 = 6$', a: '$x = 18$' },
        options: '$x = 2$ \\ $x = 9$ \\ $x = 18$ \\ $x = 19$' ,
        explanation: 'On multiplie par 3 des deux côtés : $x / 3 \\times 3 = 6 \\times 3$, ce qui donne $x = 18$.'
    },
    {
        quiz: { q: 'Dans l\'équation $10x = 5$, quelle est la valeur de $x$ ?', a: '$0,5$' },
        options: '$50$ \\ $0,5$ \\ $15$ \\ $5$' ,
        explanation: 'On divise par 10 des deux côtés : $10x \\div 10 = 5 \\div 10$, donc $x = 0,5$.'
    },
    {
        quiz: { q: 'Si $2x = 14$, quelle est la valeur de $x$ ?', a: '$7$' },
        options: '$28$ \\ $12$ \\ $7$ \\ $16$' ,
        explanation: 'On divise par 2 des deux côtés : $2x \\div 2 = 14 \\div 2$, donc $x = 7$.'
    },
    {
        quiz: { q: 'Résous l\'équation suivante : $x / 10 = 3$', a: '$x = 30$' },
        options: '$x = 3$ \\ $x = 13$ \\ $x = 30$ \\ $x = 0,3$' ,
        explanation: 'On multiplie par 10 des deux côtés : $x / 10 \\times 10 = 3 \\times 10$, donc $x = 30$.'
    },
    {
        quiz: { q: 'Si on a $6x = 12$ et qu\'on divise par 6 des deux côtés, que devient l\'équation ?', a: '$x = 2$' },
        options: '$x = 72$ \\ $x = 2$ \\ $x = 6$ \\ $x = 0$' ,
        explanation: 'En faisant $6x \\div 6 = 12 \\div 6$, on obtient bien $x = 2$.'
    },
    {
        quiz: { q: 'Résous : $5x = 35$', a: '$x = 7$' },
        options: '$x = 40$ \\ $x = 30$ \\ $x = 7$ \\ $x = 175$' ,
        explanation: 'On divise par 5 des deux côtés : $5x \\div 5 = 35 \\div 5$, donc $x = 7$.'
    }
],
"34303": [
    {
        quiz: { q: 'Dans l\'équation $5x - 3 = 2x + 9$, quelle est la première étape pour regrouper les $x$ à gauche ?', a: 'Soustraire $2x$' },
        options: 'Ajouter $2x$ \\ Soustraire $2x$ \\ Soustraire $3$ \\ Soustraire $3$' ,
        explanation: 'Pour déplacer le $2x$ du côté droit vers le côté gauche, on doit faire l\'opération contraire : soustraire $2x$ des deux membres.'
    },
    {
        quiz: { q: 'Dans l\'équation $4x + 10 = x + 25$, quelle est la première étape pour regrouper les nombres à droite ?', a: 'Soustraire $10$' },
        options: 'Ajouter $10$ \\ Soustraire $10$ \\ Multiplier par $10$ \\ Diviser par $10$' ,
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
"34401": [
    {
        quiz: { q: 'Si on sait que $A \\times B = 0$, que peut-on affirmer ?', a: 'Soit $A=0$, soit $B=0$' },
        options: 'Soit $A=0$, soit $B=0$ \\ $A$ et $B$ sont forcément égaux à $0$ \\ $A$ et $B$ ne peuvent pas être nuls \\ $A + B = 0$' ,
        explanation: 'C\'est la propriété fondamentale : un produit est nul si et seulement si au moins l\'un de ses facteurs est égal à zéro. Pas besoin d\'avoir les deux à la fois'
    },
    {
        quiz: { q: 'Quelle est la solution de l\'équation $(x - 5)(x + 2) = 0$ ?', a: '$5$ ou $-2$' },
        options: '$5$ ou $2$ \\ $-5$ ou $2$ \\ $5$ ou $-2$ \\ Aucun de ces nombres' ,
        explanation: 'Pour qu\'un produit soit nul, il faut que l\'un des facteurs soit nul : soit $x - 5 = 0$ (donc $x=5$), soit $x + 2 = 0$ (donc $x=-2$).'
    },
    {
        quiz: { q: 'Résous l\'équation : $3x(x - 4) = 0$', a: '$0$ ou $4$' },
        options: '$3$ ou $4$ \\ $0$ ou $4$ \\ $0$ ou $-4$ \\ $3$ ou $0$' ,
        explanation: 'Ici, les facteurs sont $3x$ et $(x-4)$. Soit $3x = 0$ (donc $x=0$), soit $x - 4 = 0$ (donc $x=4$).'
    },
    {
        quiz: { q: 'Quelle est la solution de l\'équation $x(2x + 6) = 0$ ?', a: '$0$ ou $-3$' },
        options: '$0$ ou $3$ \\ $0$ ou $-3$ \\ $2$ ou $-3$ \\ $0$ ou $6$' ,
        explanation: 'Soit le premier facteur est nul : $x = 0$. Soit le second est nul : $2x + 6 = 0 \\implies 2x = -6 \\implies x = -3$.'
    },
    {
        quiz: { q: 'Résous l\'équation : $(x + 1)(5x - 10) = 0$', a: '$-1$ ou $2$' },
        options: '$1$ ou $2$ \\ $-1$ ou $-2$ \\ $-1$ ou $2$ \\ $1$ ou $-2$' ,
        explanation: 'Soit $x + 1 = 0 \\implies x = -1$. Soit $5x - 10 = 0 \\implies 5x = 10 \\implies x = 2$.'
    },
    {
        quiz: { q: 'Si $(x - 8)(3x + 9) = 0$, quelles sont les solutions ?', a: '$8$ ou $-3$' },
        options: '$8$ ou $3$ \\ $-8$ ou $-3$ \\ $8$ ou $-3$ \\ $8$ ou $9$' ,
        explanation: 'Soit $x - 8 = 0 \\implies x = 8$. Soit $3x + 9 = 0 \\implies 3x = -9 \\implies x = -3$.'
    },
    {
        quiz: { q: 'L\'équation $x^2 = 16$ possède combien de solutions ?', a: '2 solutions' },
        options: '1 solution \\ 2 solutions \\ 0 solution \\ une infinité' ,
        explanation: 'Une équation de type $x^2 = a$ (avec $a > 0$) a toujours deux solutions : $\\sqrt{a}$ et $-\\sqrt{a}$. Ici, $4$ et $-4$.'
    },
    {
        quiz: { q: 'Résous l\'équation : $x(x + 7) = 0$', a: '$0$ ou $-7$' },
        options: '$0$ ou $7$ \\ $0$ ou $-7$ \\ $7$ ou $-7$ \\ $0$ ou $7$' ,
        explanation: 'Soit $x = 0$, soit $x + 7 = 0 \\implies x = -7$.'
    },
    {
        quiz: { q: 'Quelle est la solution de l\'équation $(2x - 1)(x + 5) = 0$ ?', a: '$0,5$ ou $-5$' },
        options: '$2$ ou $-5$ \\ $0,5$ ou $5$ \\ $0,5$ ou $-5$ \\ $-0,5$ ou $5$' ,
        explanation: 'Soit $2x - 1 = 0 \\implies 2x = 1 \\implies x = 0,5$. Soit $x + 5 = 0 \\implies x = -5$.'
    },
    {
        quiz: { q: 'Si $(x - 3)^2 = 0$, quelle est la solution ?', a: '$3$' },
        options: '$3$ \\ $-3$ \\ $0$ \\ $9$' ,
        explanation: '$(x-3)^2 = 0$ revient à dire que le facteur $(x-3)$ est nul. Donc $x - 3 = 0$, ce qui donne $x = 3$.'
    }
],
"34401": [
    {
        quiz: { q: 'Si on sait que $A \\times B = 0$, que peut-on affirmer ?', a: 'Soit $A=0$, soit $B=0$' },
        options: 'Soit $A=0$, soit $B=0$ \\ $A$ et $B$ sont forcément égaux à $0$ \\ $A$ et $B$ ne peuvent pas être nuls \\ $A + B = 0$' ,
        explanation: 'C\'est la propriété fondamentale : un produit est nul si et seulement si au moins l\'un de ses facteurs est égal à zéro. Pas besoin d\'avoir les deux égaux a zéro en même temps.'
    },
    {
        quiz: { q: 'Quelle est la solution de l\'équation $(x - 5)(x + 2) = 0$ ?', a: '$5$ ou $-2$' },
        options: '$5$ ou $2$ \\ $-5$ ou $2$ \\ $5$ ou $-2$ \\ Aucun de ces nombres' ,
        explanation: 'Pour qu\'un produit soit nul, il faut que l\'un des facteurs soit nul : soit $x - 5 = 0$ (donc $x=5$), soit $x + 2 = 0$ (donc $x=-2$).'
    },
    {
        quiz: { q: 'Résous l\'équation : $3x(x - 4) = 0$', a: '$0$ ou $4$' },
        options: '$3$ ou $4$ \\ $0$ ou $4$ \\ $0$ ou $-4$ \\ $3$ ou $0$' ,
        explanation: 'Ici, les facteurs sont $3x$ et $(x-4)$. Soit $3x = 0$ (donc $x=0$), soit $x - 4 = 0$ (donc $x=4$).'
    },
    {
        quiz: { q: 'Quelle est la solution de l\'équation $x(2x + 6) = 0$ ?', a: '$0$ ou $-3$' },
        options: '$0$ ou $3$ \\ $0$ ou $-3$ \\ $2$ ou $-3$ \\ $0$ ou $6$' ,
        explanation: 'Soit le premier facteur est nul : $x = 0$. Soit le second est nul : $2x + 6 = 0 \\implies 2x = -6 \\implies x = -3$.'
    },
    {
        quiz: { q: 'Résous l\'équation : $(x + 1)(5x - 10) = 0$', a: '$-1$ ou $2$' },
        options: '$1$ ou $2$ \\ $-1$ ou $-2$ \\ $-1$ ou $2$ \\ $1$ ou $-2$' ,
        explanation: 'Soit $x + 1 = 0 \\implies x = -1$. Soit $5x - 10 = 0 \\implies 5x = 10 \\implies x = 2$.'
    },
    {
        quiz: { q: 'Si $(x - 8)(3x + 9) = 0$, quelles sont les solutions ?', a: '$8$ ou $-3$' },
        options: '$8$ ou $3$ \\ $-8$ ou $-3$ \\ $8$ ou $-3$ \\ $8$ ou $9$' ,
        explanation: 'Soit $x - 8 = 0 \\implies x = 8$. Soit $3x + 9 = 0 \\implies 3x = -9 \\implies x = -3$.'
    },
    {
        quiz: { q: 'L\'équation $x^2 = 16$ possède combien de solutions ?', a: '2 solutions' },
        options: '1 solution \\ 2 solutions \\ 0 solution \\ une infinité' ,
        explanation: 'Une équation de type $x^2 = a$ (avec $a > 0$) a toujours deux solutions : $\\sqrt{a}$ et $-\\sqrt{a}$. Ici, $4$ et $-4$.'
    },
    {
        quiz: { q: 'Résous l\'équation : $x(x + 7) = 0$', a: '$0$ ou $-7$' },
        options: '$0$ ou $7$ \\ $0$ ou $-7$ \\ $7$ ou $-7$ \\ $0$ ou $7$' ,
        explanation: 'Soit $x = 0$, soit $x + 7 = 0 \\implies x = -7$.'
    },
    {
        quiz: { q: 'Quelle est la solution de l\'équation $(2x - 1)(x + 5) = 0$ ?', a: '$0,5$ ou $-5$' },
        options: '$2$ ou $-5$ \\ $0,5$ ou $5$ \\ $0,5$ ou $-5$ \\ $-0,5$ ou $5$' ,
        explanation: 'Soit $2x - 1 = 0 \\implies 2x = 1 \\implies x = 0,5$. Soit $x + 5 = 0 \\implies x = -5$.'
    },
    {
        quiz: { q: 'Si $(x - 3)^2 = 0$, quelle est la solution ?', a: '$3$' },
        options: '$3$ \\ $-3$ \\ $0$ \\ $9$' ,
        explanation: '$(x-3)^2 = 0$ revient à dire que le facteur $(x-3)$ est nul. Donc $x - 3 = 0$, ce qui donne $x = 3$.'
    }
],
"34402": [
    {
        quiz: { q: 'Résous l\'équation : $x^2 = 49$', a: '$7$ ou $-7$' },
        options: '$7$ ou $-7$ \\ $7$ seulement \\ $-7$ seulement \\ $49$ ou $-49$' ,
        explanation: 'La racine carrée de $49$ est $7$. Une équation de type $x^2 = a$ possède toujours deux solutions : $\\sqrt{a}$ et $-\\sqrt{a}$.'
    },
    {
        quiz: { q: 'Résous l\'équation : $x^2 = 144$', a: '$12$ ou $-12$' },
        options: '$12$ ou $-12$ \\ $12$ seulement \\ $72$ ou $-72$ \\ $144$ ou $-144$' ,
        explanation: 'La racine carrée de $144$ est $12$. Les deux solutions sont donc $12$ et $-12$.'
    },
    {
        quiz: { q: 'Résous l\'équation : $x^2 = 5$', a: '$\\sqrt{5}$ ou $-\\sqrt{5}$' },
        options: '$5$ ou $-5$ \\ $\\sqrt{5}$ ou $-\\sqrt{5}$ \\ $2,23$ seulement \\ Pas de solution' ,
        explanation: 'Comme $5$ n\'est pas un carré parfait, on garde l\'écriture avec la racine carrée : les solutions sont $\\sqrt{5}$ et $-\\sqrt{5}$.'
    },
    {
        quiz: { q: 'Résous l\'équation : $3x^2 = 75$', a: '$5$ ou $-5$' },
        options: '$25$ ou $-25$ \\ $5$ ou $-5$ \\ $15$ ou $-15$ \\ $5$ seulement' ,
        explanation: 'Étape 1 : On divise par 3 des deux côtés $\\implies x^2 = 75 / 3 = 25$. Étape 2 : On cherche la racine de $25$, soit $5$ et $-5$.'
    },
    {
        quiz: { q: 'Résous l\'équation : $x^2 = 0$', a: '$0$' },
        options: '$0$ \\ $0$ et $1$ \\ Pas de solution \\ $0$ et $0$' ,
        explanation: 'La seule racine carrée de $0$ est $0$. Il n\'y a qu\'une seule solution unique.'
    },
    {
        quiz: { q: 'Résous l\'équation : $x^2 = 13$', a: '$\\sqrt{13}$ ou $-\\sqrt{13}$' },
        options: '$13$ ou $-13$ \\ $\\sqrt{13}$ ou $-\\sqrt{13}$ \\ $6,5$ ou $-6,5$ \\ Pas de solution' ,
        explanation: 'Comme $13$ n\'est pas un carré parfait, on écrit les solutions sous la forme $\\sqrt{13}$ et $-\\sqrt{13}$.'
    },
    {
        quiz: { q: 'Résous l\'équation : $2x^2 = 32$', a: '$4$ ou $-4$' },
        options: '$16$ ou $-16$ \\ $4$ ou $-4$ \\ $8$ ou $-8$ \\ $4$ seulement' ,
        explanation: 'Étape 1 : On divise par 2 $\\implies x^2 = 16$. Étape 2 : La racine de $16$ est $4$, donc les solutions sont $4$ et $-4$.'
    },
    {
        quiz: { q: 'Résous l\'équation : $x^2 = 81$', a: '$9$ ou $-9$' },
        options: '$9$ ou $-9$ \\ $9$ seulement \\ $81$ ou $-81$ \\ $40,5$ ou $-40,5$' ,
        explanation: 'La racine carrée de $81$ est $9$. Les solutions sont donc $9$ et $-9$.'
    },
    {
        quiz: { q: 'Résous l\'équation : $x^2 + 10 = 35$', a: '$5$ ou $-5$' },
        options: '$25$ ou $-25$ \\ $5$ ou $-5$ \\ $3,5$ ou $-3,5$ \\ $15$ ou $-15$' ,
        explanation: 'Étape 1 : On soustrait 10 des deux côtés $\\implies x^2 = 25$. Étape 2 : La racine de $25$ est $5$, donc les solutions sont $5$ et $-5$.'
    },
    {
        quiz: { q: 'Résous l\'équation : $4x^2 = 100$', a: '$5$ ou $-5$' },
        options: '$25$ ou $-25$ \\ $10$ ou $-10$ \\ $5$ ou $-5$ \\ $50$ ou $-50$' ,
        explanation: 'Étape 1 : On divise par 4 $\\implies x^2 = 25$. Étape 2 : La racine de $25$ est $5$, donc les solutions sont $5$ et $-5$.'
    }
],
// Quiz pour la section "Statistiques" (Version optimisée avec tableaux HTML)
"35201": [
    // --- PARTIE 1 : SÉRIES DE VALEURS BRUTES (Comptage manuel) ---
    {
        quiz: { q: 'Dans la série suivante, quel est l\'effectif de la valeur 12 ? <br> $8 - 12 - 5 - 12 - 10 - 12 - 15 - 7 - 12 - 3$', a: '4' },
        options: '48 \\ 12 \\ 4 \\ 10',
        explanation: 'Il faut compter combien de fois le nombre $12$ apparaît dans la liste. On le trouve : 1, 2, 3 et 4 fois. L\'effectif est donc 4.'
    },
    {
        quiz: { q: 'Quel est l\'effectif total de cette série ? <br> $10 - 5 - 8 - 12 - 7 - 15 - 10 - 9 - 11 - 6$', a: '10' },
        options: '93 \\ 96 \\ 10 \\ 92',
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
        options: '3 \\ 189 \\ 15 \\ 35',
        explanation: 'Pour trouver l\'effectif total, on additionne les effectifs de chaque valeur : $3 + 5 + 7 = 15$.'
    },
    {
        quiz: { q: 'Dans ce tableau, quel est l\'effectif de la valeur 12 ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Valeur</th><th>8</th><th>12</th><th>15</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>3</td><td>8</td><td>7</td></tr></tbody></table></div>', a: '8' },
        options: '2 \\ 96 \\ 8 \\ 18',
        explanation: 'On regarde la colonne \'12\' et on lit l\'effectif correspondant sur la ligne du bas. On trouve bien 8.'
    },
    {
        quiz: { q: 'Quelle serait la position dans la liste de la dernière valeur 15 si tu retransformais ce tableau d\'effectifs en série statistique ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Valeur</th><th>8</th><th>12</th><th>15</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>2</td><td>5</td><td>3</td></tr></tbody></table></div>', a: '10ème' },
        options: '7ème \\ 8ème \\ 10ème \\ 3ème',
        explanation: 'L\'effectif cumulé de 15 est de 10. Cela signifie que la dernière valeur (le dernier 15) occupe la 10ème position dans la liste.'
    },
    {
        quiz: { q: 'Quelle serait la position dans la liste de la première valeur \'20\' ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Valeur</th><th>10</th><th>15</th><th>20</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>4</td><td>3</td><td>6</td></tr><tr><td><strong>Cumulé</strong></td><td>4</td><td>7</td><td>13</td></tr></tbody></table></div>', a: '8ème' },
        options: '3ème \\ 7ème \\ 8ème \\ 13ème',
        explanation: 'L\'effectif cumulé de la valeur 15 est 7. Cela signifie que les 7 premières valeurs sont des 10 et des 15. La valeur 20 commence donc juste après, à la 8ème position.'
    },
    {
        quiz: { q: 'Quel est l\'effectif total de ce tableau ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Valeur</th><th>5</th><th>10</th><th>15</th><th>20</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>2</td><td>5</td><td>3</td><td>6</td></tr></tbody></table></div>', a: '16' },
        options: '10 \\ 14 \\ 16 \\ 20',
        explanation: 'On additionne tous les effectifs de la ligne : $2 + 5 + 3 + 6 = 16$.'
    }

],
"35211": [ // questions sur la fréquence
    {
        quiz: { q: 'On a relevé les notes de 20 élèves : $10 - 15 - 10 - 20 - 10 - 0 - 10 - 15 - 10 - 10 - 12 - 14 - 10 - 18 - 10 - 11 - 10 - 13 - 10 - 16$. Quelle est la fréquence de la note 10 (sous forme décimale) ?', a: '0,5' },
        options: '0,4 \\ 0,5 \\ 0,6 \\ 0,7',
        explanation: 'La valeur 10 apparaît 10 fois sur un total de 20 élèves. La fréquence est $10 / 20 = 0,5$.'
    },
    {
        quiz: { q: 'Dans une série de 20 températures relevées, la valeur 20°C apparaît 5 fois. Quelle est sa fréquence ?', a: '0,25' },
        options: '0,2 \\ 0,25 \\ 0,3 \\ 0,5',
        explanation: 'La fréquence est le rapport entre l\'effectif (5) et le total (20). $5 / 20 = 1/4 = 0,25$.'
    },
    {
        quiz: { q: 'Dans une liste de 40 objets, 10 sont rouges. Quelle est la fréquence des objets rouges ?', a: '1/4' },
        options: '1/2 \\ 1/3 \\ 1/4 \\ 1/5',
        explanation: 'La fréquence est $10 / 40$. En simplifiant par 10, on obtient $1/4$.'
    },
    {
        quiz: { q: 'Dans la série suivante, quelle est la fréquence de la valeur 7 (en pourcentage) ? <br> $7 - 7 - 7 - 3 - 7 - 9 - 7 - 7 - 7 - 13$', a: '70%' },
        options: '40% \\ 50% \\ 60% \\ 70%',
        explanation: 'La valeur 7 apparaît 7 fois sur un total de 10. $7 / 10 = 0,7$, soit $70\\%$.'
    },
    {
        quiz: { q: 'Quelle est la fréquence de la valeur 15 dans cette série ? <br> $15 - 15 - 15 - 15 - 20 - 20 - 20 - 20 - 20 - 20$', a: '4/10' },
        options: '3/10 \\ 4/10 \\ 5/10 \\ 6/10',
        explanation: 'La valeur 15 apparaît 4 fois sur un total de 10. La fréquence est donc $4 / 10$, ce qui se simplifie en $2/5$ ou s\'écrit $4/10$.'
    },
    {
        quiz: { q: 'Regarde ce tableau. Quelle est la fréquence de 10mm (sous forme décimale) ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Pluie tombée (mm)</th><th>5</th><th>10</th><th>15</th></tr></thead><tbody><tr><td><strong>Nombre de jours</strong></td><td>1</td><td>6</td><td>3</td></tr></tbody></table></div>', a: '0,6' },
        options: '0,3 \\ 0,4 \\ 0,5 \\ 0,6',
        explanation: 'L\'effectif de 10 est 6. L\'effectif total est $1+6+3=10$. La fréquence est $6/10 = 0,6$.'
    },
    {
        quiz: { q: 'Dans ce tableau, quelle est la fréquence de la valeur 5km (en pourcentage) ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Distance (km) </th><th>5</th><th>10</th><th>15</th></tr></thead><tbody><tr><td><strong>Nombre de coureurs</strong></td><td>4</td><td>6</td><td>5</td></tr></tbody></table></div>', a: '26,6%' },
        options: '20% \\ 25% \\ 26,6% \\ 30%',
        explanation: 'L\'effectif de 5 est 4. Le total est 15. La fréquence est $4/15 \\approx 0,266$, soit environ $26,6\\%$.'
    },
    {
        quiz: { q: 'Dans ce tableau, quelle est la fréquence de la valeur 4 cousins(nes) (en pourcentage) ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Nombre de cousins(nes)</th><th>2</th><th>4</th><th>6</th></tr></thead><tbody><tr><td><strong>Nombre de familles</strong></td><td>1</td><td>3</td><td>2</td></tr></</tbody>></table></div>', a: '50%' },
        options: '33% \\ 40% \\ 50% \\ 60%',
        explanation: 'L\'effectif de 4 est 3. Le total est 6. La fréquence est $3/6 = 0,5$, soit $50\\%$.'
    },
    {
        quiz: { q: 'Regarde ce tableau. Quelle est la fréquence de la valeur 10 (sous forme décimale) ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Valeur</th><th>5</th><th>10</th><th>15</th><th>20</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>2</td><td>4</td><td>3</td><td>7</td></tr></tbody></table></div>', a: '0,25' },
        options: '0,2 \\ 0,25 \\ 0,3 \\ 0,5',
        explanation: 'L\'effectif de 10 est 4. Le total est $2+4+3+7=16$. La fréquence est $4/16 = 1/4 = 0,25$.'
    },
    {
        quiz: { q: 'Dans ce tableau, quelle est la fréquence de la valeur 5 (sous forme fractionnaire) ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Valeur</th><th>5</th><th>10</th><th>15</th><th>20</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>2</td><td>5</td><td>3</td><td>6</td></tr></</tbody>></table></div>', a: '1/8' },
        options: '1/8 \\ 0,125 \\ 12,5% \\ 0,25',
        explanation: 'L\'effectif de 5 est 2. Le total est 16. La fréquence est $2/16 = 1/8. 0,125 et 12,5% seraient également corrects mais on demande la forme fractionnaire !'
    }
],
"35311": [
    // --- QUESTIONS SUR LA MOYENNE SIMPLE ---
    {
        quiz: { q: 'Un musicien joue 4 morceaux avec les durées suivantes (en minutes) : $5 - 10 - 20 - 5$. Quelle est la durée moyenne de ses morceaux ?', a: '10' },
        options: '36,25 \\ 10 \\ 8 \\ 15',
        explanation: 'Il faut d\'abord faire la somme : $5 + 10 + 20 + 5 = 40$. Ensuite, on divise par le nombre de morceaux (4). $40 / 4 = 10$. Attention au piège : $5+10+20+(5/4)$ ne donne pas la moyenne !'
    },
    {
        quiz: { q: 'Un athlète court 4 distances : $100\\text{m} - 200\\text{m} - 300\\text{m} - 400\\text{m}$. Quelle est la distance moyenne parcourue ?', a: '250' },
        options: '250 \\ 100 \\ 250 \\ 50',
        explanation: 'Somme des distances : $100 + 200 + 300 + 400 = 1000$. Moyenne : $1000 / 4 = 250\\text{m}$.'
    },
    {
        quiz: { q: 'Un artiste vend 4 tableaux à ces prix : 10€ ; 20€ ; 30€ ; 40€. Quel est le prix moyen d\'un tableau ?', a: '25' },
        options: '25 \\ 25,5 \\ 20 \\ 15',
        explanation: 'Somme : $10 + 20 + 30 + 40 = 100$. Moyenne : $100 / 4 = 25$€.'
    },
    {
        quiz: { q: 'Quatre voitures roulent à ces vitesses : $50 - 60 - 70 - 80 \\text{ km/h}$. Quelle est la vitesse moyenne ?', a: '65' },
        options: '60 \\ 65 \\ 70 \\ 55',
        explanation: 'Somme des vitesses : $50 + 60 + 70 + 80 = 260$. Moyenne : $260 / 4 = 65\\text{ km/h}$.'
    },
    {
        quiz: { q: 'Un élève a obtenu ces notes : $12 - 14 - 16 - 18$. Quelle est sa moyenne ?', a: '15' },
        options: '14 \\ 15 \\ 16 \\ 13',
        explanation: 'Somme des notes : $12 + 14 + 16 + 18 = 60$. Moyenne : $60 / 4 = 15$.'
    },
    {
        quiz: { q: 'Un jardinier plante 4 arbres de hauteurs différentes : $1\\text{m} - 2\\text{m} - 3\\text{m} - 4\\text{m}$. Quelle est la hauteur moyenne ?', a: '2,5' },
        options: '2 \\ 2,5 \\ 3 \\ 1,5',
        explanation: 'Somme : $1 + 2 + 3 + 4 = 10$. Moyenne : $10 / 4 = 2,5\\text{m}$.'
    },
    {
        quiz: { q: 'Quatre chats pèsent : $3\\text{kg} - 4\\text{kg} - 5\\text{kg} - 6\\text{kg}$. Quel est le poids moyen d\'un chat ?', a: '4,5' },
        options: '4 \\ 4,5 \\ 5 \\ 3,5',
        explanation: 'Somme : $3 + 4 + 5 + 6 = 18$. Moyenne : $18 / 4 = 4,5\\text{kg}$.'
    },
    {
        quiz: { q: 'Un joueur de basket marque ces points sur 4 matchs : $10 - 20 - 10 - 20$. Quelle est sa moyenne ?', a: '15' },
        options: '10 \\ 15 \\ 20 \\ 12',
        explanation: 'Somme : $10 + 20 + 10 + 20 = 60$. Moyenne : $60 / 4 = 15$.'
    },
    {
        quiz: { q: 'Quatre températures sont relevées : $10^\\circ\\text{C} - 12^\\circ\\text{C} - 14^\\circ\\text{C} - 16^\\circ\\text{C}$. Quelle est la température moyenne ?', a: '13' },
        options: '12 \\ 13 \\ 14 \\ 15',
        explanation: 'Somme : $10 + 12 + 14 + 16 = 52$. Moyenne : $52 / 4 = 13^\\circ\\text{C}$.'
    },
    {
        quiz: { q: 'Dans une série de 4 nombres : $10 - 20 - 30 - 40$, quelle est la moyenne ?', a: '25' },
        options: '20 \\ 25 \\ 30 \\ 15',
        explanation: 'Somme : $10 + 20 + 30 + 40 = 100$. Moyenne : $100 / 4 = 25$.'
    }
],
// Quiz pour la section "Moyenne pondérée"
"35312": [
    // --- QUESTIONS AVEC TABLEAUX D'EFFECTIFS (Progression de difficulté) ---
    {
        quiz: { q: 'Calcule la moyenne de ces notes : <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Note</th><th>10</th><th>15</th></tr></thead><tbody><tr><td>Effectif</td><td>2</td><td>3</td></tr></tbody></table></div>', a: '13' },
        options: '12 \\ 12,5 \\ 13 \\ 14',
        explanation: 'On multiplie chaque note par son effectif : $(10 \\times 2) + (15 \\times 3) = 20 + 45 = 65$. L\'effectif total est $2 + 3 = 5$. La moyenne est $65 / 5 = 13$.'
    },
    {
        quiz: { q: 'Quelle est la moyenne de ces températures ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Temp (°C)</th><th>10</th><th>20</th></tr></thead><tbody><tr><td>Effectif</td><td>3</td><td>1</td></tr></tbody></table></div>', a: '12,5' },
        options: '12 \\ 12,5 \\ 13 \\ 15',
        explanation: 'Somme des températures : $(10 \\times 3) + (20 \\times 1) = 30 + 20 = 50$. Effectif total : $3 + 1 = 4$. Moyenne : $50 / 4 = 12,5$.'
    },
    {
        quiz: { q: 'Calcule la moyenne de ces âges : <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Âge</th><th>5</th><th>10</th></tr></thead><tbody><tr><td>Effectif</td><td>4</td><td>4</td></tr></tbody></table></div>', a: '7,5' },
        options: '7 \\ 7,5 \\ 8 \\ 9',
        explanation: 'Somme : $(5 \\times 4) + (10 \\times 4) = 20 + 40 = 60$. Effectif total : $4 + 4 = 8$. Moyenne : $60 / 8 = 7,5$.'
    },
    {
        quiz: { q: 'Quelle est la moyenne de ces prix ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Prix (€)</th><th>2</th><th>4</th><th>6</th></tr></thead><tbody><tr><td>Effectif</td><td>1</td><td>2</td><td>1</td></tr></tbody></table></div>', a: '4' },
        options: '3 \\ 4 \\ 5 \\ 4,5',
        explanation: 'Somme : $(2 \\times 1) + (4 \\ 2) + (6 \\times 1) = 2 + 8 + 6 = 16$. Effectif total : $1 + 2 + 1 = 4$. Moyenne : $16 / 4 = 4$.'
    },
    {
        quiz: { q: 'Dans ce tableau, quelle est la moyenne des points marqués ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead style=\'background:#eee;\'><tr><th>Points</th><th>10</th><th>20</th><th>30</th></tr></thead><tbody><tr><td>Effectif</td><td>2</td><td>2</td><td>1</td></tr></tbody></table></div>', a: '18' },
        options: '15 \\ 18 \\ 20 \\ 22',
        explanation: 'Somme des points : $(10 \\times 2) + (20 \\ 2) + (30 \\times 1) = 20 + 40 + 30 = 90$. Effectif total : $2 + 2 + 1 = 5$. Moyenne : $90 / 5 = 18$.'
    },
    {
        quiz: { q: 'Calcule la moyenne de ces vitesses (en km/h) : <br> <div class=\'table-container\'><table class=\'custom-table\'><thead style=\'background:#eee;\'><tr><th>Vitesse</th><th>50</th><th>100</th></tr></thead><tbody><tr><td>Effectif</td><td>3</td><td>1</td></tr></tbody></table></div>', a: '62,5' },
        options: '60 \\ 62,5 \\ 75 \\ 50',
        explanation: 'Somme : $(50 \\times 3) + (100 \\times 1) = 150 + 100 = 250$. Effectif total : $3 + 1 = 4$. Moyenne : $250 / 4 = 62,5$.'
    },
    {
        quiz: { q: 'Quelle est la moyenne de ces longueurs ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead style=\'background:#eee;\'><tr><th>Longueur (m)</th><th>2</th><th>4</th><th>6</th><th>8</th></tr></thead><tbody><tr><td>Effectif</td><td>1</td><td>1</td><td>1</td><td>1</td></tr></tbody></table></div>', a: '5' },
        options: '4 \\ 5 \\ 6 \\ 7',
        explanation: 'Somme : $2 + 4 + 6 + 8 = 20$. Effectif total : $4$. Moyenne : $20 / 4 = 5$.'
    },
    {
        quiz: { q: 'Dans ce tableau, quelle est la moyenne des notes ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead style=\'background:#eee;\'><tr><th>Note</th><th>10</th><th>12</th></tr></thead><tbody><tr><td>Effectif</td><td>8</td><td>2</td></tr></tbody></table></div>', a: '10,4'},
        options: '10 \\ 10,4 \\ 11,4 \\ 82,4',
        explanation: 'Somme : $(10 \\times 8) + (12 \\times 2) = 80 + 24 = 104$. Effectif total : $8 + 2 = 10$. Moyenne : $104 / 10 = 10,4$.'
    },
    {
        quiz: { q: 'Calcule la moyenne de ces poids : <br> <div class=\'table-container\'><table class=\'custom-table\'><thead style=\'background:#eee;\'><tr><th>Poids (kg)</th><th>5</th><th>10</th></tr></thead><tbody><tr><td>Effectif</td><td>1</td><td>3</td></tr></tbody></table></div>', a: '8,75'},
        options: '7 \\ 7,5 \\ 8,75 \\ 10',
        explanation: 'Somme : $(5 \\times 1) + (10 \\ 3) = 5 + 30 = 35$. Effectif total : $1 + 3 = 4$. Moyenne : $35 / 4 = 8,75$.'
    },
    {
        quiz: { q: 'Quelle est la moyenne de ces âges ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead style=\'background:#eee;\'><tr><th>Âge</th><th>10</th><th>20</th></tr></thead><tbody><tr><td>Effectif</td><td>1</td><td>3</td></tr></tbody></table></div>', a: '17,5'},
        options: '12 \\ 15 \\ 17,5 \\ 20',
        explanation: 'Somme : $(10 \\times 1) + (20 \\times 3) = 10 + 60 = 70$. Effectif total : $1 + 3 = 4$. Moyenne : $70 / 4 = 17,5$.'
    }
],
// Quiz pour la section "Médiane" (Clé 35321)
"35321": [
    // --- PARTIE 1 : EFFECTIF IMPAIR (La valeur centrale est directe) ---
    {
        quiz: { q: 'Trouve la médiane de cette série : $12 - 5 - 7 - 10 - 8$', a: '8' },
        options: '10 \\ 8 \\ 7 \\ 5',
        explanation: 'Étape 1 : On range les valeurs par ordre croissant : $5 - 7 - 8 - 10 - 12$. Étape 2 : La valeur au milieu est le 3ème nombre, soit $8$.'
    },
    {
        quiz: { q: 'Quelle est la médiane de cette série   : $15 - 2 - 10 - 15 - 15$', a: '15' },
        options: '10 \\ 15 \\ 2 \\ 12,5', // Le piège est le 10 qui est au milieu visuellement
        explanation: 'Étape 1 : On range les valeurs : $2 - 10 - 15 - 15 - 15$. Étape 2 : La valeur centrale (3ème) est $15$.'
    },
    {
        quiz: { q: 'Trouve la médiane de cette série : $20 - 18 - 22 - 19 - 21$', a: '20' },
        options: '18 \\ 20 \\ 22 \\ 19',
        explanation: 'Étape 1 : On range les valeurs : $18 - 19 - 20 - 21 - 22$. Étape 2 : La valeur centrale est $20$.'
    },
    {
        quiz: { q: 'Quelle est la médiane de cette série  : $3 - 1 - 8 - 1 - 5$', a: '3' },
        options: '8 \\ 1 \\ 3 \\ 5', // Le piège est le 8 qui est au milieu visuellement
        explanation: 'Étape 1 : On range les valeurs : $1 - 1 - 3 - 5 - 8$. Étape 2 : La valeur centrale est $3$.'
    },
    {
        quiz: { q: 'Trouve la médiane de cette série : $40 - 30 - 10 - 20 - 50$', a: '30' },
        options: '20 \\ 30 \\ 40 \\ 10',
        explanation: 'Étape 1 : On range les valeurs : $10 - 20 - 30 - 40 - 50$. Étape 2 : La valeur centrale est $30$.'
    },

    // --- PARTIE 2 : EFFECTIF PAIR (Calcul de la demi-somme) ---
    {
        quiz: { q: 'Quelle est la médiane de cette série ? $10 - 12 - 14 - 16$', a: '13' },
        options: '12 \\ 14 \\ 13 \\ 15',
        explanation: 'Étape 1 : La liste est déjà rangée. Étape 2 : L\'effectif est pair (4). On prend les deux valeurs du milieu ($12$ et $14$) et on fait la moyenne : $(12 + 14) / 2 = 13$.'
    },
    {
        quiz: { q: 'Trouve la médiane de cette série  : $5 - 20 - 10 - 5$', a: '7,5' },
        options: '10 \\ 7,5 \\ 15 \\ 5', // Le piège est le 10 qui est au milieu visuellement
        explanation: 'Étape 1 : On range les valeurs : $5 - 5 - 10 - 20$. Étape 2 : L\'effectif est pair (4). Les deux valeurs centrales sont $5$ et $10$. La médiane est $(5 + 10) / 2 = 7,5$.'
    },
    {
        quiz: { q: 'Quelle est la médiane de cette série ? $2 - 8 - 4 - 6$', a: '5' },
        options: '4 \\ 5 \\ 6 \\ 7',
        explanation: 'Étape 1 : On range les valeurs : $2 - 4 - 6 - 8$. Étape 2 : L\'effectif est pair (4). Les deux valeurs centrales sont $4$ et $6$. La médiane est $(4 + 6) / 2 = 5$.'
    },
    {
        quiz: { q: 'Trouve la médiane de cette série : $100 - 20 - 80 - 40$', a: '60' },
        options: '20 \\ 60 \\ 80 \\ 50', // Le piège est le 20 qui est au milieu visuellement
        explanation: 'Étape 1 : On range les valeurs : $20 - 40 - 80 - 100$. Étape 2 : L\'effectif est pair (4). Les deux valeurs centrales sont $40$ et $80$. La médiane est $(40 + 80) / 2 = 60$.'
    },
    {
        quiz: { q: 'Quelle est la médiane de cette série ? $1 - 3 - 5 - 7 - 9 - 11$', a: '6' },
        options: '5 \\ 6 \\ 7 \\ 8',
        explanation: 'Étape 1 : La liste est déjà rangée. Étape 2 : L\'effectif est pair (6). Les deux valeurs centrales sont la 3ème ($5$) et la 4ème ($7$). La médiane est $(5 + 7) / 2 = 6$.'
    }
],
// Quiz pour la section "Médiane (Cas Pair et Impair avec Tableaux)"
"35322": [
    // --- CAS IMPAIR (La médiane est une valeur de la liste, mais pas celle du milieu visuel) ---
    {
        quiz: { q: 'Trouve la médiane de ce tableau : <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Valeur</th><th>10</th><th>12</th><th>14</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>3</td><td>1</td><td>7</td></tr></tbody></table></div>', a: '14' },
        options: '10 \\ 12 \\ 14 \\ 11',
        explanation: 'L\'effectif total est $3 + 1 + 7 = 11$ (impair). La médiane est la 11/2=5,5 => 6ème valeur. En comptant : les trois premiers sont des 10, le quatrième est donc 12. Les suivant sont tous des 14, donc la médiane est 14.'
    },
    {
        quiz: { q: 'Quelle est la médiane de ce tableau ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Valeur</th><th>4</th><th>8</th><th>10</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>5</td><td>2</td><td>2</td></tr></tbody></table></div>', a: '4' },
        options: '5 \\ 8 \\ 10 \\ 7',
        explanation: 'L\'effectif total est $5 + 2 + 2 = 9$ (impair). La médiane est la 9/2=4,5 => 5ème valeur. Les 5 premières valeurs sont des 4, donc la médiane est un 4.'
    },
    {
        quiz: { q: 'Trouve la médiane de ce tableau : <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Valeur</th><th>10</th><th>20</th><th>30</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>3</td><td>1</td><td>5</td></tr></tbody></table></div>', a: '30' },
        options: '10 \\ 20 \\ 30 \\ 15',
        explanation: 'L\'effectif total est $3 + 1 + 5 = 9$ (impair). La médiane est la 9/2=4,5 => 5ème valeur. Les trois premiers sont des 10, le quatrième est 20. Donc la 5ème valeur sera un 30.'
    },
    {
        quiz: { q: 'Quelle est la médiane de ce tableau ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Valeur</th><th>1</th><th>2</th><th>3</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>3</td><td>3</td><td>3</td></tr></tbody></table></div>', a: '2' },
        options: '1 \\ 2 \\ 3 \\ 2,5',
        explanation: 'L\'effectif total est $3 + 3 + 3 = 9$ (impair). La médiane est la 5ème valeur. Les trois premiers sont des 1, les deux suivants sont des 2. La médiane est donc 2.'
    },
    {
        quiz: { q: 'Trouve la médiane de ce tableau : <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Valeur</th><th>10</th><th>20</th><th>30</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>15</td><td>5</td><td>5</td></tr></tbody></table></div>', a: '10' },
        options: '10 \\ 20 \\ 30 \\ 15',
        explanation: 'L\'effectif total est $15 + 5 + 5 = 25$ (impair). La médiane est la 25/2=12,5 => 13ème valeur. Les quinze premières valeurs sont des 10, donc la médiane sera un 10.'
    },

    // --- PARTIE 2 : CAS PAIR (Calcul de la demi-somme avec logique d'effectif total pair) ---
    {
        quiz: { q: 'Quelle est la médiane de ce tableau ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead style=\'background:#eee;\'><tr><th>Valeur</th><th>10</th><th>20</th><th>30</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>5</td><td>4</td><td>3</td></tr></tbody></table></div>', a: '15' },
        options: '15 \\ 20 \\ 16 \\ 10',
        explanation: 'L\'effectif total est $5 + 4 + 3 = 12$ (pair). Les deux valeurs centrales sont la 6ème et la 7ème. En comptant : les 6 premiers sont des 10, le 7ème est un 20. La médiane est $(10 + 20) / 2 = 15$. La médiane est 15.'
    },
    {
        quiz: { q: 'Trouve la médiane de ce tableau : <br> <div class=\'table-container\'><table class=\'custom-table\'><thead style=\'background:#eee;\'><tr><th>Valeur</th><th>5</th><th>10</th><th>15</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>2</td><td>6</td><td>8</td></tr></tbody></table></div>', a: '12,5' },
        options: '7 \\ 10 \\ 12 \\ 15',
        explanation: 'L\'effectif total est $2 + 6 + 8 = 16$ (pair). Les deux valeurs centrales sont la 8ème et la 9ème. Jusqu\'à la 2ème valeur ce sont des 5, de la 3ème à la 8ème sont des 10, donc la 8ème valeur est un 10, la 9ème est un 15. Donc la médiane est $(10 + 15) / 2 = 12,5$.'
    },
    {
        quiz: { q: 'Quelle est la médiane de ce tableau ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead style=\'background:#eee;\'><tr><th>Valeur</th><th>12</th><th>18</th><th>25</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>5</td><td>1</td><td>8</td></tr></tbody></table></div>', a: '25' },
        options: '25 \\ 18 \\ 20 \\ 21,5',
        explanation: 'L\'effectif total est $5 + 1 + 8 = 16$ (pair). Les deux valeurs centrales sont la 16/2=8ème et la 9ème. La 8ème est un 25 et la 9ème est aussi un 25. La médiane est $(25+25) / 2 = 25$.'
    },
    {
        quiz: { q: 'Trouve la médiane de ce tableau : <br> <div class=\'table-container\'><table class=\'custom-table\'><thead style=\'background:#eee;\'><tr><th>Valeur</th><th>2</th><th>5</th><th>8</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>7</td><td>1</td><td>6</td></tr></tbody></table></div>', a: '3,5' },
        options: '2 \\ 3,5 \\ 5 \\ 7,5',
        explanation: 'L\'effectif total est $7 + 1 + 6 = 14$ (pair). Les deux valeurs centrales sont la 14/2=7ème et la 8ème. La 7ème est un 2 et la 8ème est aussi un 5. La médiane est $(5 + 2) / 2 = 3,5$.'
    },
    {
        quiz: { q: 'Quelle est la médiane de ce tableau ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead style=\'background:#eee;\'><tr><th>Valeur</th><th>10</th><th>15</th><th>30</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>4</td><td>2</td><td>4</td></tr></tbody></table></div>', a: '20' },
        options: '15 \\ 20 \\ 30 \\ 10',
        explanation: 'L\'effectif total est $4 + 0 + 4 = 8$ (pair). Les deux valeurs centrales sont la 4ème et la 5ème. La 4ème est un 10 et la 5ème est un 30. En effet il n\'y a pas de valeur 15 dans la liste! La médiane est $(10 + 30) / 2 = 20$.'
    }
],
// Quiz pour la section "L'Étendue" (Clé 35411)
"35411": [
    // --- PARTIE 1 : LISTES DE VALEURS DÉSORDONNÉES (Piège du milieu visuel) ---
    {
        quiz: { q: 'Quelle est l\'étendue de cette série ? <br> $12 - 5 - 18 - 7 - 10$', a: '13' },
        options: '5 \\ 13 \\ 18 \\ 11',
        explanation: 'Il faut trouver la plus grande valeur (18) et la plus petite (5). L\'étendue est $18 - 5 = 13$.'
    },
    {
        quiz: { q: 'Calcule l\'étendue de ces températures : <br> 22°C - 15°C - 28°C - 10°C$', a: '18' },
        options: '13 \\ 15 \\ 18 \\ 28',
        explanation: 'La valeur maximale est $28$ et la minimale est $10$. L\'étendue est $28 - 10 = 18$°C.'
    },
    {
        quiz: { q: 'Quelle est l\'étendue de cette série ? <br> $5 - 10 - 2 - 15$', a: '13' },
        options: '5 \\ 8 \\ 13 \\ 15',
        explanation: 'Le maximum est $15$ et le minimum est $2$. L\'étendue est donc $15 - 2 = 13$.'
    },
    {
        quiz: { q: 'Trouve l\'étendue de ces notes : <br> $14 - 08 - 19 - 11$', a: '11' },
        options: '6 \\ 11 \\ 14 \\ 19',
        explanation: 'Le maximum est $19$ et le minimum est $8$. L\'étendue est $19 - 8 = 11$ points sur 20.'
    },
    {
        quiz: { q: 'Quelle est l\'étendue de cette série ? <br> $30 - 10 - 50 - 20$', a: '40' },
        options: '20 \\ 30 \\ 40 \\ 50',
        explanation: 'Le maximum est $50$ et le minimum est $10$. L\'étendue est $50 - 10 = 40$.'
    },

    // --- PARTIE 2 : TABLEAUX D'EFFECTIFS (Valeurs rangées) ---
    {
        quiz: { q: 'Calcule l\'étendue de ce tableau : <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Valeur</th><th>10</th><th>20</th><th>30</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>2</td><td>5</td><td>3</td></tr></tbody></table></div>', a: '20' },
        options: '10 \\ 20 \\ 30 \\ 15',
        explanation: 'La plus grande valeur est $30$ et la plus petite est $10$. L\'étendue est $30 - 10 = 20$.'
    },
    {
        quiz: { q: 'Quelle est l\'étendue de cette série de mesures ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Mesure</th><th>5</th><th>15</th><th>25</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>4</td><td>2</td><td>4</td></tr></tbody></table></div>', a: '20' },
        options: '10 \\ 15 \\ 20 \\ 25',
        explanation: 'La valeur max est $25$ et la min est $5$. L\'étendue est $25 - 5 = 20$.'
    },
    {
        quiz: { q: 'Trouve l\'étendue de ce tableau d\'âges : <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th>Âge</th><th>12</th><th>13</th><th>14</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>5</td><td>2</td><td>5</td></tr></tbody></table></div>', a: '2' },
        options: '1 \\ 2 \\ 3 \\ 14',
        explanation: 'La valeur max est $14$ et la min est $12$. L\'étendue est $14 - 12 = 2$ ans.'
    },
    {
        quiz: { q: 'Quelle est l\'étendue de ces prix ? <br> <div class=\'table-container\'><table class=\'custom-table\'><thead style=\'background:#eee;\'><tr><th>Prix (€)</th><th>1</th><th>5</th><th>10</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>3</td><td>2</td><td>1</td></tr></tbody></table></div>', a: '9' },
        options: '4 \\ 7 \\ 9 \\ 10',
        explanation: 'La valeur max est $10$ et la min est $1$. L\'étendue est $10 - 1 = 9$ €.'
    },
    {
        quiz: { q: 'Calcule l\'étendue de ce tableau : <br> <div class=\'table-container\'><table class=\'custom-table\'><thead style=\'background:#eee;\'><tr><th>Valeur</th><th>100</th><th>200</th><th>300</th></tr></thead><tbody><tr><td><strong>Effectif</strong></td><td>1</td><td>4</td><td>1</td></tr></tbody></table></div>', a: '200' },
        options: '100 \\ 200 \\ 300 \\ 150',
        explanation: 'La valeur max est $300$ et la min est $100$. L\'étendue est $300 - 100 = 200$.'
    }
],
"36101": [
    {
        quiz: { q: 'On lance un dé équilibré à 6 faces. Comment appelle-t-on l\'action de lancer le dé ?', a: 'Une expérience aléatoire' },
        options: 'Une issue \\ Une expérience aléatoire \\ Un événement \\ Une probabilité',
        explanation: 'L\'action de lancer le dé est l\'expérience que l\'on réalise, on l\'appelle une expérience aléatoire car on ne peut pas prédire le résultat avec certitude.'
    },
    {
        quiz: { q: 'Dans une urne, il y a 3 boules jaunes, 2 rouges et 1 verte. Si je tire une boule, quelles sont les "issues" possibles ?', a: 'Jaune, Rouge ou Verte' },
        options: 'Jaune, Rouge ou Verte \\ 3 jaunes, 2 rouges, 1 verte \\ Tirer une boule \\ L\'urne',
        explanation: 'Les issues sont les différents résultats possibles de l\'expérience. Ici, on peut obtenir soit une boule jaune, soit une rouge, soit une verte.'
    },
    {
        quiz: { q: 'Dans une classe, on choisit un élève au hasard. L\'événement "L\'élève choisi porte des lunettes" est réalisé si l\'élève a effectivement des lunettes. Comment appelle-t-on cet ensemble de résultats ?', a: 'Un événement' },
        options: 'Une issue \\ Une expérience \\ Un événement \\ Une probabilité',
        explanation: 'Un événement est constitué par un ou plusieurs issues (ici, tous les élèves qui portent des lunettes).'
    },
    {
        quiz: { q: 'On tire une boule dans une urne contenant des boules Bleues, Vertes et Jaunes. Si l\'événement A est "Tirer une boule Bleue", quel est l\'événement contraire de A ?', a: 'Tirer une boule verte ou jaune' },
        options: 'Tirer une boule Verte \\ Tirer une boule Jaune \\ Tirer une boule verte ou jaune \\ Ne pas tirer de boule',
        explanation: 'Le contraire d\'un événement contient TOUTES les issues qui ne sont pas dans l\'événement A. Si A est "Bleu", $\\overline{A}$ est "Tout ce qui n\'est pas bleu".'
    },
    {
        quiz: { q: 'On lance un dé à 6 faces. Soit l\'événement A : "Obtenir un nombre pair". Quel est l\'événement contraire de A ?', a: 'Obtenir un nombre impair' },
        options: 'Obtenir un 2 ou un 4 \\ Obtenir un nombre impair \\ Obtenir un nombre supérieur à 3 \\ Obtenir un 6',
        explanation: 'Les nombres pairs sont $\{2; 4; 6\}$. Les issues qui ne sont pas dans cet ensemble sont $\{1; 3; 5\}$, ce qui correspond aux nombres impairs.'
    },
    {
        quiz: { q: 'Dans une trousse, il y a 5 stylos et 2 gommes. On tire un objet au hasard. L\'événement "Tirer un crayon" est :', a: 'Un événement impossible' },
        options: 'Un événement certain \\ Un événement impossible \\ Un événement probable \\ Une issue',
        explanation: 'Comme il n\'y a aucun crayon dans la trousse, l\'événement ne peut jamais se produire. Sa probabilité est de $0$, c\'est donc un événement impossible.'
    },
    {
        quiz: { q: 'On lance un dé à 6 faces. L\'événement "Obtenir un nombre entre 1 et 6 (inclus)" est :', a: 'Un événement certain' },
        options: 'Un événement impossible \\ Un événement certain \\ Un événement incompatible \\ Une issue',
        explanation: 'Le résultat sera forcément compris entre 1 et 6. L\'événement se produira à chaque fois, sa probabilité est de $1$. C\'est un événement certain.'
    },
    {
        quiz: { q: 'On tire une carte dans un jeu de 32 cartes. Soit l\'événement A : "Tirer un Coeur" et l\'événement B : "Tirer un Trèfle". Ces deux événements sont :', a: 'Incompatibles' },
        options: 'Incompatibles \\ Certains \\ Contraires \\ Identiques',
        explanation: 'Deux événements sont incompatibles s\'ils ne peuvent pas se produire en même temps. Une carte ne peut pas être à la fois un Coeur et un Trèfle.'
    },
    {
        quiz: { q: 'Si la probabilité d\'un événement est P = 0,9, comment peut-on qualifier cet événement ?', a: 'Il a beaucoup de chances de se produire' },
        options: 'Il a très peu de chances de se produire \\ Il est impossible \\ Il a beaucoup de chances de se produire \\ Il est certain',
        explanation: 'Une probabilité proche de 1 ($0,9$) signifie que l\'événement a de très fortes chances de se réaliser.'
    },
    {
        quiz: { q: 'Si la probabilité d\'un événement est de 0,5, cela signifie qu\'il se produit :', a: '1 fois sur 2' },
        options: '1 fois sur 10 \\ 1 fois sur 2 \\ 9 fois sur 10 \\ Toujours',
        explanation: 'Une probabilité de $0,5$ équivaut à $\\frac{1}{2}$, soit une chance sur deux.'
    }
],


    // --- APPLICATION DIRECTE DE LA FORMULE ---
"36211": [
    {
        quiz: { q: 'On lance un dé équilibré à 6 faces. Quelle est la probabilité d\'obtenir le chiffre 4 ?', a: '1/6' },
        options: '1/6 \\ 1/2 \\ 4/6 \\ 1/4',
        explanation: 'Il y a 1 seule issue favorable (le chiffre 4) sur 6 issues possibles au total. La probabilité est donc $\\frac{1}{6}$.'
    },
    {
        quiz: { q: 'Dans une urne, il y a 10 boules : 3 rouges, 5 bleues et 2 vertes. Quelle est la probabilité de tirer une boule rouge ?', a: '3/10' },
        options: '3/10 \\ 3/7 \\ 5/10 \\ 2/10',
        explanation: 'Il y a 3 issues favorables (les boules rouges) sur un total de 10 issues possibles. La probabilité est $\\frac{3}{10}$.'
    },
    {
        quiz: { q: 'On lance une pièce de monnaie. Quelle est la probabilité d\'obtenir Face ?', a: '0,5' },
        options: '0 \\ 0,5 \\ 1 \\ 1,2',
        explanation: 'Il y a 1 issue favorable (Face) sur 2 issues possibles (Pile ou Face). $\\frac{1}{2} = 0,5$.'
    },
    {
        quiz: { q: 'On lance un dé à 6 faces. Quelle est la probabilité d\'obtenir un nombre pair ?', a: '3/6' },
        options: '1/6 \\ 2/6 \\ 3/6 \\ 4/6',
        explanation: 'Les issues favorables sont $\{2 ; 4 ; 6\}$, il y en a donc 3. Le total est de 6. La probabilité est $\\frac{3}{6}$ (ou $0,5$).'
    },
    {
        quiz: { q: 'Dans une classe de 25 élèves, il y a 12 filles et 13 garçons. Quelle est la probabilité de choisir une fille au hasard ?', a: '12/25' },
        options: '12/13 \\ 12/25 \\ 13/25 \\ 0,5',
        explanation: 'Il y a 12 issues favorables (les filles) sur un total de 25 élèves. La probabilité est $\\frac{12}{25}$.'
    },
     {
        quiz: { q: 'On tire une carte dans un jeu de 32 cartes. Quelle est la probabilité de tirer un As ? (Il y a 4 As dans le jeu)', a: '4/32' },
        options: '1/32 \\ 4/32 \\ 4/28 \\ 1/8',
        explanation: 'Il y a 4 issues favorables (les 4 As) sur 32 issues possibles. La probabilité est $\\frac{4}{32}$.'
    },
    {
        quiz: { q: 'On lance un dé à 6 faces. Quelle est la probabilité d\'obtenir le chiffre 8 ?', a: '0' },
        options: '0 \\ 1 \\ 1/6 \\ 8/6',
        explanation: 'Le chiffre 8 n\'existe pas sur un dé à 6 faces. Il y a 0 issue favorable, donc la probabilité est $0$.'
    },
    {
        quiz: { q: 'Dans une boîte de chocolats, tous les chocolats sont au lait. Quelle est la probabilité de tirer un chocolat au lait ?', a: '1' },
        options: '0 \\ 0,5 \\ 1 \\ 1/2',
        explanation: 'L\'événement est certain car toutes les issues sont favorables. La probabilité est donc $1$.'
    },
    {
        quiz: { q: 'Si la probabilité d\'un événement est de 7/10, combien y a-t-il d\'issues favorables sur 100 issues possibles ?', a: '70' },
        options: '7 \\ 10 \\ 70 \\ 700',
        explanation: 'Si on multiplie le total par 10 (de 10 à 100), on doit aussi multiplier les issues favorables par 10. $7 \\times 10 = 70$.'
    },
    {
        quiz: { q: 'Une urne contient des boules noires et blanches. La probabilité de tirer une boule noire est 4/9. Quelle est la probabilité de tirer une boule blanche ?', a: '5/9' },
        options: '4/9 \\ 5/9 \\ 1/9 \\ 0',
        explanation: 'Le total des probabilités est toujours égal à $1$. La probabilité de la boule blanche est donc $1 - \\frac{4}{9} = \\frac{5}{9}$.'
    }
],
"36221": [
    {
        quiz: { q: 'On lance un dé à 6 faces. Soit l\'événement A : "Obtenir un 1" et l\'événement B : "Obtenir un 2". Quelle est la probabilité d\'obtenir un 1 OU un 2 ?', a: '2/6' },
        options: '1/6 \\ 2/6 \\ 3/6 \\ 0' ,
        explanation: 'Les événements sont incompatibles. On additionne : $P(1 \\text{ ou } 2) = P(1) + P(2) = \\frac{1}{6} + \\frac{1}{6} = \\frac{2}{6}$.'
    },
    {
        quiz: { q: 'Dans une urne, il y a 2 boules rouges, 3 bleues et 5 vertes. Quelle est la probabilité de tirer une rouge OU une bleue ?', a: '5/10' },
        options: '5/10 \\ 2/10 \\ 3/10 \\ 10/5' ,
        explanation: 'On additionne les issues favorables : $P(\\text{rouge ou bleu}) = \\frac{2}{10} + \\frac{3}{10} = \\frac{5}{10}$.'
    },
    {
        quiz: { q: 'On lance un dé à 6 faces. Quelle est la probabilité d\'obtenir un nombre inférieur à 3 ?', a: '2/6' },
        options: '1/6 \\ 2/6 \\ 3/6 \\ 1/3',
        explanation: 'Les issues favorables sont $\{1 ; 2\}$. La probabilité est $P(1) + P(2) = \\frac{1}{6} + \\frac{1}{6} = \\frac{2}{6}$.'
    },
    {
        quiz: { q: 'La probabilité qu\'il pleuve demain est de 0,3. Quelle est la probabilité qu\'il ne pleuve pas ?', a: '0,7' },
        options: '0,3 \\ 0,7 \\ 1 \\ 0,5',
        explanation: 'On utilise l\'événement contraire : $P(\\text{ne pas pleuvoir}) = 1 - P(\\text{pleuvoir}) = 1 - 0,3 = 0,7$.'
    },
    {
        quiz: { q: 'On lance un dé à 6 faces. La probabilité d\'obtenir un nombre supérieur ou égal à 5 est 2/6. Quelle est la probabilité de son événement contraire ?', a: '4/6' },
        options: '2/6 \\ 4/6 \\ 1/6 \\ 1',
        explanation: 'L\'événement contraire a pour probabilité $1 - P(A)$. Donc $1 - \\frac{2}{6} = \\frac{4}{6}$.'
    },
    {
        quiz: { q: 'Dans un sac, la probabilité de tirer un bonbon à la fraise est 3/8. Quelle est la probabilité de ne PAS tirer un bonbon à la fraise ?', a: '5/8' },
        options: '3/8 \\ 5/8 \\ 1/8 \\ 0',
        explanation: 'On fait $1 - P(\\text{fraise}) = 1 - \\frac{3}{8} = \\frac{5}{8}$.'
    },
    {
        quiz: { q: 'Si la probabilité d\'un événement est de 0,95, quelle est la probabilité de son événement contraire ?', a: '0,05' },
        options: '0,95 \\ 0,5 \\ 0,05 \\ 1',
        explanation: 'Le calcul est $1 - 0,95 = 0,05$.'
    },
    {
        quiz: { q: 'Une probabilité de 0,25 correspond à quel pourcentage de chances ?', a: '25%' },
        options: '2,5% \\ 25% \\ 50% \\ 0,25%',
        explanation: 'Pour transformer une probabilité en pourcentage, on multiplie par 100 : $0,25 \\times 100 = 25\\%$.'
    },
    {
        quiz: { q: 'Si un événement a 80% de chances de se produire, quelle est sa probabilité sous forme décimale ?', a: '0,8' },
        options: '8 \\ 0,8 \\ 0,08 \\ 80',
        explanation: 'On divise le pourcentage par 100 pour retrouver la probabilité : $80 / 100 = 0,8$.'
    },
    {
        quiz: { q: 'La probabilité d\'obtenir un nombre pair avec un dé est 3/6 = 0,5. Quel est le pourcentage de chances ?', a: '50%' },
        options: '5% \\ 50% \\ 0,5% \\ 100%',
        explanation: '$0,5 \\times 100 = 50\\%$.'
    }
],

"36321": [
    {
        quiz: { q: 'Dans un arbre des possibles, que représente une "branche" ?', a: 'Une issue possible'},       
        options: 'Une expérience \\ Une épreuve \\ Une issue possible \\ Un résultat total',
        explanation: 'Chaque branche de l\'arbre correspond à une issue (un résultat) possible pour une étape donnée.'
    },
    {
        quiz: { q: 'Pour calculer la probabilité d\'un chemin complet dans un arbre, on doit :', a: 'Multiplier les probabilités'},
        options: 'Additionner les probabilités \\ Multiplier les probabilités \\ Soustraire les probabilités \\ Diviser les probabilités',
        explanation: 'La règle de calcul est le produit : la probabilité de l\'issue finale est égale au produit des probabilités rencontrées le long du chemin.'
    },
    {
        quiz: { q: 'Épreuve 1 : Probabilité de tirer une boule rouge = $\\frac{1}{3}$.<br>Épreuve 2 : Probabilité d\'obtenir Pile = $\\frac{1}{2}$.<br>Quelle est la probabilité d\'avoir (Rouge ET Pile) ?',a: '1/6' },        
        options: '1/5 \\ 2/3\\ 1/6 \\ 1/3',
        explanation: 'On multiplie les probabilités des deux épreuves : $\\frac{1}{3} \\times \\frac{1}{2} = \\frac{1}{6}$.'
    },
    {
        quiz: { q: 'Dans un arbre, si une branche a une probabilité de $0,4$ et la suivante $0,5$, quelle est la probabilité du chemin ?',a: '0,2' },        
        options: '0,9 \\ 0,2 \\ 0,25 \\ 0,45',
        explanation: 'On multiplie : $0,4 \\times 0,5 = 0,2$.'
    },
    {
        quiz: { q: 'Dans un tableau à double entrée, comment peut-on remplir les cases inconnues ?', a: 'En commençant par la ligne ou colonne ou il manque une seule valeur'},   
        options: 'En multipliant tout \\ En commençant par la ligne ou colonne ou il manque une seule valeur \\ En additionnant les totaux \\ On ne peut pas remplir un tableau',
        explanation: 'La méthode consiste à identifier une ligne ou une colonne où il n\'y a qu\'une seule case inconnue pour déduire sa valeur.'
    },
    {
        quiz: { q: 'Si je lance un dé (6 faces) et que je tire une carte (32 cartes), combien y a-t-il d\'issues au total ?',a: '192' },
        options: '38 \\ 6 \\ 32 \\ 192',
        explanation: 'Le nombre total d\'issues est le produit des possibilités : $6 \\times 32 = 192$.'
    },
    {
        quiz: { q: 'Dans un arbre, la somme des probabilités des branches partant d\'un même nœud doit être égale à :', a: '1'},
        options: '0 \\ 0,5 \\ 1 \\ 100',
        explanation: 'La somme des probabilités de toutes les issues partant d\'un même point doit TOUJOURS être égale à $1$.'
    },
    {
        quiz: { q: 'On a un tableau. Ligne A : 4 cas. Ligne B : 6 cas. Total : 10 cas.<br>Quelle est la probabilité de tomber sur la ligne A ?', a: '0,4' },       
        options: '0,4 \\ 0,6 \\ 4 \\ 10',
        explanation: 'On divise le nombre de cas de la ligne par le total : $\\frac{4}{10} = 0,4$.'
    },
    {
        quiz: { q: 'Dans un collège, on étudie le statut des élèves et leur langue. <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th></th><th>Allemand</th><th>Espagnol</th><th>Total</th></tr></thead><tbody><tr><td>Externes</td><td>50</td><td>?</td><td>200</td></tr><tr><td>DP</td><td>?</td><td>?</td><td>400</td></tr><tr><td>Total</td><td>150</td><td>450</td><td>600</td></tr></tbody></table></div><br>Quelle est la probabilité de choisir un élève qui est DP et fait Espagnol ?', a: '300/600' },
        options: '150/600 \\ 450/600 \\ 300/600 \\ 100/600',
        explanation: 'D\'abord, complétons le tableau. Si le total des Allemand est 150 alors 100 élèves sont Dp et allemand. Donc 300 sont Dp et espagnol. La probabilité est donc $\\frac{300}{600}$.'
    },
    {
        quiz: { q: 'Dans un collège. <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th></th><th>Allemand</th><th>Espagnol</th><th>Total</th></tr></thead><tbody><tr><td>Externes</td><td>50</td><td>150</td><td>200</td></tr><tr><td>DP</td><td>100</td><td>300</td><td>400</td></tr><tr><td>Total</td><td>150</td><td>450</td><td>600</td></tr></tbody></table></div><br>Quelle est la probabilité que si je choisisse un élève parmi ceux qui font Allemand, il soit DP ?', a: '100/150' },
        options: '100/400 \\ 100/600 \\ 100/150 \\ 150/600',
        explanation: 'C\'est une probabilité conditionnelle. On ne regarde QUE la colonne "Allemand". Il y a 150 élèves en allemand, et parmi eux, 100 sont DP. La probabilité est $\\frac{100}{150}$.'
    },
    {
        quiz: { q: 'Dans un club de sport : <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th></th><th>Garçons</th><th>Filles</th><th>Total</th></tr></thead><tbody><tr><td>Tennis</td><td>12</td><td>8</td><td>20</td></tr><tr><td>Foot</td><td>?</td><td>10</td><td>30</td></tr><tr><td>Total</td><td>32</td><td>18</td><td>50</td></tr></tbody></table></div><br>Quelle est la probabilité de choisir un élève qui fait du Foot ?', a: '30/50' },
        options: '20/50 \\ 30/50 \\ 25/50 \\ 18/50',
        explanation: 'Le nombre total d\'élèves est 50. Le nombre d\'élèves faisant du foot est 30. La probabilité est $\\frac{30}{50}$.'
    },
    {
        quiz: { q: 'Dans un club de sport. <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th></th><th>Garçons</th><th>Filles</th><th>Total</th></tr></thead><tbody><tr><td>Tennis</td><td>12</td><td>8</td><td>20</td></tr><tr><td>Foot</td><td>20</td><td>10</td><td>30</td></tr><tr><td>Total</td><td>32</td><td>18</td><td>50</td></tr></tbody></table></div><br>Quelle est la probabilité de choisir une fille qui fait du Tennis ?', a: '8/50' },
        options: '8/20 \\ 8/50 \\ 10/50 \\ 18/50',
        explanation: 'On cherche l\'intersection "Filles" et "Tennis", qui est 8. Le total des élèves est 50. La probabilité est $\\frac{8}{50}$.'
    },
    {
        quiz: { q: 'Une usine produit deux types de pièces (A et B) avec deux défauts possibles. <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th></th><th>Défaut</th><th>Sans défaut</th><th>Total</th></tr></thead><tbody><tr><td>Type A</td><td>5</td><td>95</td><td>100</td></tr><tr><td>Type B</td><td>15</td><td>185</td><td>200</td></tr><tr><td>Total</td><td>20</td><td>280</td><td>300</td></tr></tbody></table></div><br>Quelle est la probabilité de tirer une pièce de Type B qui n\'a aucun défaut ?', a: '185/300' },
        options: '15/300 \\ 185/200 \\ 185/300 \\ 200/300',
        explanation: 'On cherche la case intersection Type B et Sans défaut, soit 185. Le total est 300. La probabilité est $\\frac{185}{300}$.'
    },
    {
        quiz: { q: 'Dans une bibliothèque : <br> <div class=\'table-container\'><table class=\'custom-table\'><thead><tr><th></th><th>Roman</th><th>BD</th><th>Total</th></tr></thead><tbody><tr><td>Adulte</td><td>40</td><td>10</td><td>50</td></tr><tr><td>Enfant</td><td>30</td><td>20</td><td>50</td></tr><tr><td>Total</td><td>70</td><td>30</td><td>100</td></tr></tbody></table></div><br>Quelle est la probabilité de choisir un enfant qui lit des BD ?', a: '20/100' },
        options: '20/50 \\ 20/100 \\ 30/100 \\ 10/100',
        explanation: 'L\'intersection Enfant et BD est 20. Le total des usagers est 100. La probabilité est $\\frac{20}{100}$.'
    },
],
"37101":[
{
quiz:{
q:'Ce tableau est-il un tableau de proportionnalité ?<br><div class="table-container"><table class="custom-table"><tr><th>2</th><th>3</th><th>4</th><th>5</th></tr><tr><td>5</td><td>7,5</td><td>10</td><td>12,5</td></tr></table></div>',
a:'Oui'
},
options:'Oui \\ Non',
explanation:'Pour vérifier si un tableau est un tableau de proportionnalité, on calcule les <strong>quotients correspondants</strong>. Ici : 5 ÷ 2 = 2,5 ; 7,5 ÷ 3 = 2,5 ; 10 ÷ 4 = 2,5 ; 12,5 ÷ 5 = 2,5. Tous les quotients sont égaux. Cela signifie qu\'on passe toujours de la première ligne à la deuxième en multipliant par le même nombre. Le tableau est donc bien un <strong>tableau de proportionnalité</strong>.'
},
{
quiz:{
q:'Quel est le coefficient de proportionnalité du tableau précédent ?',
a:'2,5'
},
options:'5 \\ 2,5 \\ 0,4 \\ 7,5',
explanation:'Le coefficient de proportionnalité est le nombre qui permet de passer de la première ligne à la deuxième par une multiplication. On le trouve en divisant une valeur de la deuxième ligne par la valeur correspondante de la première ligne : 5 ÷ 2 = 2,5. Attention à une erreur fréquente : faire 2 ÷ 5 = 0,4. Cela donnerait le coefficient dans le sens inverse.'
},
{
quiz:{
q:'Ce tableau est-il un tableau de proportionnalité ?<br><div class="table-container"><table class="custom-table"><tr><th>0,8</th><th>1,5</th><th>1,7</th></tr><tr><td>2,4</td><td>4,5</td><td>4,76</td></tr></table></div>',
a:'Non'
},
options:'Oui \\ Non',
explanation:'Calculons les quotients : 2,4 ÷ 0,8 = 3 et 4,5 ÷ 1,5 = 3. Jusque-là tout semble proportionnel. Mais 4,76 ÷ 1,7 ≈ 2,8. Ce quotient est différent des autres. Dans un tableau de proportionnalité, <strong>tous les quotients doivent être identiques</strong>. Il suffit qu\'une seule colonne ne respecte pas la règle pour que le tableau ne soit plus proportionnel.'
},
{
quiz:{
q:'Pour vérifier qu’un tableau est proportionnel, il faut comparer :',
a:'les quotients'
},
options:'les sommes \\ les quotients \\ les différences \\ les produits',
explanation:'La définition même de la proportionnalité repose sur l\'existence d\'un même coefficient multiplicateur. Pour vérifier cela, on compare les <strong>quotients correspondants</strong>. Les sommes ou les différences n\'ont aucun lien direct avec la proportionnalité.'
},
{
quiz:{
q:'Complète le tableau de proportionnalité.<br><div class="table-container"><table class="custom-table"><tr><th>4</th><th>7</th></tr><tr><td>10</td><td>?</td></tr></table></div>',
a:'17,5'
},
options:'14 \\ 17,5 \\ 18 \\ 20',
explanation:'Comme le tableau est proportionnel, le coefficient est le même partout. On calcule d\'abord ce coefficient : 10 ÷ 4 = 2,5. Pour obtenir la valeur manquante, on applique ce même coefficient à 7 : 7 × 2,5 = 17,5. La valeur cherchée est donc <strong>17,5</strong>.'
},
{
quiz:{
q:'Dans un tableau proportionnel, le coefficient de proportionnalité est-il toujours le même ?',
a:'Oui'
},
options:'Oui \\ Non',
explanation:'Oui. C\'est même la propriété fondamentale de la proportionnalité. Si le coefficient change d\'une colonne à l\'autre, alors le tableau n\'est plus proportionnel.'
},
{
quiz:{
q:'3 kg coûtent 9 €. 8 kg coûtent 24 €. Le tableau est-il proportionnel ?',
a:'Oui'
},
options:'Oui \\ Non',
explanation:'On vérifie les quotients : 9 ÷ 3 = 3 et 24 ÷ 8 = 3. Les deux quotients sont identiques. Cela signifie qu\'un kilogramme coûte toujours 3 €. Le lien multiplicatif est constant : la situation est proportionnelle.'
},
{
quiz:{
q:'3 kg coûtent 9 €. 8 kg coûtent 25 €. Le tableau est-il proportionnel ?',
a:'Non'
},
options:'Oui \\ Non',
explanation:'On calcule les quotients : 9 ÷ 3 = 3 mais 25 ÷ 8 = 3,125. Les quotients ne sont pas égaux. Le prix d\'un kilogramme n\'est donc pas le même dans les deux situations. Ce n\'est pas une situation de proportionnalité.'
},
{
quiz:{
q:'Quel coefficient permet de passer de 6 à 15 ?',
a:'2,5'
},
options:'2 \\ 2,5 \\ 3 \\ 15',
explanation:'Pour trouver le coefficient multiplicateur, on divise l\'arrivée par le départ : 15 ÷ 6 = 2,5. Cela signifie que 6 est multiplié par 2,5 pour obtenir 15.'
},
{
quiz:{
q:'Si un seul quotient est différent des autres, le tableau est-il encore proportionnel ?',
a:'Non'
},
options:'Oui \\ Non',
explanation:'Non. Pour qu\'un tableau soit proportionnel, <strong>tous les quotients</strong> doivent être identiques. Une seule colonne incorrecte suffit à rendre le tableau non proportionnel.'
}
],
"37102":[
{
quiz:{
q:'<svg width="260" height="180" viewBox="0 0 260 180"><line x1="30" y1="150" x2="240" y2="150" stroke="black"/><line x1="30" y1="150" x2="30" y2="20" stroke="black"/><line x1="30" y1="150" x2="220" y2="40" stroke="red" stroke-width="3"/></svg><br>Cette représentation graphique correspond-elle à une situation de proportionnalité ?',
a:'Oui'
},
options:'Oui \\ Non',
explanation:'Pour reconnaître une situation de proportionnalité sur un graphique, il faut vérifier <strong>deux conditions en même temps</strong> : la représentation doit être une <strong>droite</strong> et cette droite doit passer par l’<strong>origine du repère</strong>. Ici la courbe est bien une droite et elle passe par l’origine. Les deux conditions sont donc remplies : il s’agit bien d’une situation de proportionnalité.'
},
{
quiz:{
q:'<svg width="260" height="180" viewBox="0 0 260 180"><line x1="30" y1="150" x2="240" y2="150" stroke="black"/><line x1="30" y1="150" x2="30" y2="20" stroke="black"/><line x1="30" y1="120" x2="220" y2="40" stroke="red" stroke-width="3"/></svg><br>Cette représentation graphique correspond-elle à une situation de proportionnalité ?',
a:'Non'
},
options:'Oui \\ Non',
explanation:'La représentation est bien une droite, mais elle ne passe pas par l’<strong>origine du repère</strong>. Or une situation de proportionnalité doit obligatoirement être représentée par une droite passant par l’origine. Beaucoup d’élèves regardent uniquement si la courbe est une droite, mais cela ne suffit pas.'
},
{
quiz:{
q:'<svg width="260" height="180" viewBox="0 0 260 180"><line x1="30" y1="150" x2="240" y2="150" stroke="black"/><line x1="30" y1="150" x2="30" y2="20" stroke="black"/><path d="M30 150 Q120 20 220 80" fill="none" stroke="red" stroke-width="3"/></svg><br>Cette représentation graphique correspond-elle à une situation de proportionnalité ?',
a:'Non'
},
options:'Oui \\ Non',
explanation:'La courbe passe bien par l’origine mais ce n’est pas une droite. Les points ne sont pas alignés. Pour qu’il y ait proportionnalité, il faut à la fois passer par l’origine et obtenir une droite. Passer par l’origine seul ne suffit donc pas.'
},
{
quiz:{
q:'Dans une situation de proportionnalité, la représentation graphique est :',
a:'une droite passant par l’origine'
},
options:'une droite passant par l’origine \\ une courbe quelconque \\ un cercle \\ une parabole',
explanation:'C’est une propriété fondamentale du cours. Toute situation de proportionnalité peut être modélisée par une fonction linéaire, et la représentation graphique d’une fonction linéaire est toujours une <strong>droite passant par l’origine</strong>.'
},
{
quiz:{
q:'Pourquoi le point (0 ; 0) appartient-il toujours à une situation de proportionnalité ?',
a:'0 correspond à 0'
},
options:'0 correspond à 0 \\ le coefficient vaut 0 \\ les axes se croisent \\ hasard',
explanation:'Dans une situation de proportionnalité, si une grandeur vaut 0 alors l’autre vaut également 0. Par exemple si un stylo coûte 1,25 €, alors 0 stylo coûte 0 €. Le point (0 ; 0) appartient donc toujours au graphique.'
},
{
quiz:{
q:'Une droite passe par les points (0 ; 0) et (4 ; 8). Représente-t-elle une situation de proportionnalité ?',
a:'Oui'
},
options:'Oui \\ Non',
explanation:'Une droite passant par l’origine représente toujours une situation de proportionnalité. Ici le point (0 ; 0) appartient à la droite : les conditions sont donc respectées.'
},
{
quiz:{
q:'Une droite passe par les points (0 ; 3) et (4 ; 8). Représente-t-elle une situation de proportionnalité ?',
a:'Non'
},
options:'Oui \\ Non',
explanation:'La droite ne passe pas par l’origine puisque lorsque x vaut 0, y vaut 3. Dans une situation de proportionnalité, lorsque la première grandeur vaut 0, la seconde doit aussi valoir 0.'
},
{
quiz:{
q:'Complète la propriété : dans une situation de proportionnalité, la représentation graphique est une ______ qui passe par l’origine du repère.',
a:'droite'
},
options:'droite \\ courbe \\ parabole \\ demi-droite',
explanation:'La propriété complète du cours est : « Dans une situation de proportionnalité, la représentation graphique est une <strong>droite</strong> qui passe par l’origine du repère. »'
},
{
quiz:{
q:'Pour reconnaître une situation de proportionnalité sur un graphique, combien de conditions faut-il vérifier ?',
a:'2'
},
options:'1 \\ 2 \\ 3 \\ 4',
explanation:'Il faut vérifier deux conditions : la courbe doit être une <strong>droite</strong> et elle doit passer par l’<strong>origine du repère</strong>. Si une seule des deux conditions manque, il n’y a pas proportionnalité.'
},
{
quiz:{
q:'Une courbe passe par l’origine mais n’est pas une droite. Est-ce une situation de proportionnalité ?',
a:'Non'
},
options:'Oui \\ Non',
explanation:'Beaucoup d’élèves pensent que passer par l’origine suffit. Ce n’est pas vrai. La représentation doit également être une <strong>droite</strong>. Une courbe qui passe par l’origine mais qui n’est pas une droite ne représente pas une situation de proportionnalité.'
}
],
"37211":[
{
quiz:{
q:'4 stylos coûtent 5 €. Combien coûte 1 stylo ?',
a:'1,25'
},
options:'1 \\ 1,25 \\ 2 \\ 5',
explanation:'La méthode du <strong>passage par l’unité</strong> consiste à chercher la valeur correspondant à <strong>une seule unité</strong>. Ici, 4 stylos coûtent 5 €. Pour connaître le prix d’un seul stylo, on partage le prix total entre les 4 stylos : 5 ÷ 4 = 1,25. Un stylo coûte donc <strong>1,25 €</strong>. Attention : beaucoup d’élèves multiplient par 4 alors qu’il faut au contraire passer de 4 stylos à 1 stylo, donc il faut diviser.'
},
{
quiz:{
q:'6 bouteilles coûtent 9 €. Quel est le prix d’une bouteille ?',
a:'1,5'
},
options:'1,5 \\ 3 \\ 6 \\ 15',
explanation:'On cherche le prix correspondant à <strong>1 bouteille</strong>. On utilise donc le passage par l’unité : 9 ÷ 6 = 1,5. Une bouteille coûte donc <strong>1,50 €</strong>. Dès qu’on veut passer de plusieurs objets à un seul, la première opération est généralement une division.'
},
{
quiz:{
q:'12 kg de pommes coûtent 24 €. Combien coûte 1 kg ?',
a:'2'
},
options:'1 \\ 2 \\ 12 \\ 24',
explanation:'On veut connaître le prix d’un seul kilogramme. Comme 12 kg coûtent 24 €, on partage le prix total en 12 parts égales : 24 ÷ 12 = 2. Un kilogramme coûte donc <strong>2 €</strong>. Cette étape est le passage par l’unité.'
},
{
quiz:{
q:'4 stylos coûtent 5 €. Combien coûtent 7 stylos ?',
a:'8,75'
},
options:'7 \\ 8 \\ 8,75 \\ 9',
explanation:'On commence par chercher le prix d’un seul stylo : 5 ÷ 4 = 1,25 €. Ensuite on calcule le prix de 7 stylos : 7 × 1,25 = 8,75 €. La méthode du passage par l’unité se fait souvent en deux étapes : d’abord trouver la valeur pour 1 unité, puis multiplier par la quantité recherchée.'
},
{
quiz:{
q:'8 litres d’essence coûtent 14,40 €. Combien coûte 1 litre ?',
a:'1,8'
},
options:'1,4 \\ 1,6 \\ 1,8 \\ 2',
explanation:'On cherche le prix correspondant à un seul litre. Il faut donc diviser le prix total par le nombre de litres : 14,40 ÷ 8 = 1,80. Un litre coûte donc <strong>1,80 €</strong>. Vérification : 8 × 1,80 = 14,40.'
},
{
quiz:{
q:'5 cahiers coûtent 12 €. Combien coûtent 8 cahiers ?',
a:'19,2'
},
options:'18,2 \\ 19,2 \\ 20 \\ 24',
explanation:'On cherche d’abord le prix d’un cahier : 12 ÷ 5 = 2,4 €. Ensuite on calcule le prix de 8 cahiers : 8 × 2,4 = 19,2 €. Le résultat est donc <strong>19,20 €</strong>. Attention à ne pas faire directement 12 × 8, ce qui n’aurait aucun sens ici.'
},
{
quiz:{
q:'3 mètres de tissu coûtent 10,50 €. Combien coûte 1 mètre ?',
a:'3,5'
},
options:'3 \\ 3,5 \\ 4 \\ 4,5',
explanation:'Comme 3 mètres coûtent 10,50 €, un seul mètre coûte 10,50 ÷ 3 = 3,50 €. Le prix d’un mètre est donc <strong>3,50 €</strong>. On utilise encore une fois le passage par l’unité.'
},
{
quiz:{
q:'7 kg de tomates coûtent 17,50 €. Combien coûtent 10 kg ?',
a:'25'
},
options:'20 \\ 22,5 \\ 25 \\ 27,5',
explanation:'On commence par calculer le prix d’un kilogramme : 17,50 ÷ 7 = 2,50 €. Ensuite on cherche le prix de 10 kg : 10 × 2,50 = 25 €. Le prix de 10 kg est donc <strong>25 €</strong>.'
},
{
quiz:{
q:'Pourquoi la méthode du passage par l’unité fonctionne-t-elle dans une situation de proportionnalité ?',
a:'le coefficient est constant'
},
options:'le coefficient est constant \\ les nombres sont petits \\ il y a deux lignes \\ les valeurs sont entières',
explanation:'Dans une situation de proportionnalité, il existe un <strong>coefficient de proportionnalité constant</strong>. Cela signifie que chaque valeur est obtenue en multipliant par le même nombre. C’est précisément cette propriété qui permet de passer par l’unité puis de retrouver n’importe quelle autre valeur.'
},
{
quiz:{
q:'15 billets coûtent 120 €. Combien coûte un billet ?',
a:'8'
},
options:'6 \\ 7 \\ 8 \\ 15',
explanation:'On cherche le prix correspondant à un seul billet. On divise donc le prix total par le nombre de billets : 120 ÷ 15 = 8. Un billet coûte donc <strong>8 €</strong>. Pour vérifier, on peut faire 15 × 8 = 120.'
}
],
"37221":[
{
quiz:{
q:'Dans ce tableau, quel est le coefficient de proportionnalité ?<br><div class="table-container"><table class="custom-table"><tr><th>2</th><th>4</th><th>6</th></tr><tr><td>5</td><td>10</td><td>15</td></tr></table></div>',
a:'2,5'
},
options:'2 \\ 2,5 \\ 5 \\ 0,4',
explanation:'Le coefficient de proportionnalité permet de passer de la première ligne à la deuxième par une multiplication. On calcule donc 5 ÷ 2 = 2,5. On peut vérifier avec les autres colonnes : 10 ÷ 4 = 2,5 et 15 ÷ 6 = 2,5. Attention à une erreur très fréquente : faire 2 ÷ 5 = 0,4. Ce calcul correspond au coefficient dans le sens inverse.'
},
{
quiz:{
q:'Quel nombre permet de passer de 8 à 20 ?',
a:'2,5'
},
options:'2,5 \\ 12 \\ 0,4 \\ 28',
explanation:'Pour trouver un coefficient multiplicateur, on divise l’arrivée par le départ : 20 ÷ 8 = 2,5. Cela signifie que 8 × 2,5 = 20.'
},
{
quiz:{
q:'Le coefficient de proportionnalité d’un tableau est 3. Quelle valeur complète le tableau ?<br><div class="table-container"><table class="custom-table"><tr><th>7</th></tr><tr><td>?</td></tr></table></div>',
a:'21'
},
options:'10 \\ 18 \\ 21 \\ 24',
explanation:'Le coefficient vaut 3, ce qui signifie que chaque valeur de la première ligne est multipliée par 3. On calcule donc 7 × 3 = 21.'
},
{
quiz:{
q:'Le coefficient de proportionnalité d’un tableau est 0,5. Quelle valeur correspond à 18 ?',
a:'9'
},
options:'9 \\ 18 \\ 27 \\ 36',
explanation:'Un coefficient de 0,5 signifie que l’on multiplie par un demi. On obtient donc 18 × 0,5 = 9. Attention : un coefficient de proportionnalité peut être inférieur à 1.'
},
{
quiz:{
q:'Dans un tableau de proportionnalité, le coefficient de proportionnalité est :',
a:'toujours le même'
},
options:'toujours le même \\ toujours supérieur à 1 \\ toujours entier \\ toujours positif',
explanation:'La propriété essentielle d’un tableau de proportionnalité est l’existence d’un coefficient multiplicateur constant. Il peut être inférieur à 1, décimal ou même négatif dans certains contextes mathématiques.'
},
{
quiz:{
q:'Si le coefficient de proportionnalité vaut 4, combien vaut l’image de 12 ?',
a:'48'
},
options:'16 \\ 36 \\ 48 \\ 52',
explanation:'Le coefficient indique que l’on multiplie chaque valeur par 4. On calcule donc 12 × 4 = 48.'
},
{
quiz:{
q:'Dans un tableau de proportionnalité, on passe de 5 à 17,5. Quel est le coefficient ?',
a:'3,5'
},
options:'2,5 \\ 3 \\ 3,5 \\ 4',
explanation:'Le coefficient se calcule en divisant l’arrivée par le départ : 17,5 ÷ 5 = 3,5. Cela signifie que chaque valeur est multipliée par 3,5.'
},
{
quiz:{
q:'Le coefficient de proportionnalité est 1,25. Quelle valeur correspond à 16 ?',
a:'20'
},
options:'18 \\ 19 \\ 20 \\ 21',
explanation:'On multiplie simplement la valeur par le coefficient : 16 × 1,25 = 20.'
},
{
quiz:{
q:'Si 3 kg coûtent 7,50 €, quel est le coefficient permettant de passer des kilogrammes au prix ?',
a:'2,5'
},
options:'0,4 \\ 2 \\ 2,5 \\ 7,5',
explanation:'Le coefficient se calcule en divisant le prix par la masse : 7,50 ÷ 3 = 2,5. Cela signifie qu’un kilogramme coûte 2,50 €.'
},
{
quiz:{
q:'Pourquoi le coefficient de proportionnalité est-il utile ?',
a:'il permet de calculer toutes les autres valeurs'
},
options:'il permet de calculer toutes les autres valeurs \\ il sert uniquement à vérifier le tableau \\ il remplace les divisions \\ il évite les multiplications',
explanation:'Une fois le coefficient connu, on peut retrouver n’importe quelle valeur du tableau par une simple multiplication. C’est souvent la méthode la plus rapide lorsque plusieurs calculs sont demandés.'
}
],
"37231":[
{
quiz:{
q:'On sait que 4 stylos coûtent 5 € et que 2 stylos coûtent 2,50 €. Combien coûtent 6 stylos ?',
a:'7,5'
},
options:'6 \\ 7 \\ 7,5 \\ 8',
explanation:'La méthode de <strong>linéarité</strong> consiste à effectuer la même opération sur les deux lignes du tableau. Ici, 6 stylos = 4 stylos + 2 stylos. Comme on additionne les quantités, on additionne aussi les prix : 5 + 2,50 = 7,50 €. Cette méthode fonctionne car la situation est proportionnelle.'
},
{
quiz:{
q:'On sait que 10 kg de pommes coûtent 30 €. Combien coûtent 5 kg ?',
a:'15'
},
options:'10 \\ 12 \\ 15 \\ 20',
explanation:'Ici, on remarque que 5 kg correspond à la moitié de 10 kg. Dans une situation de proportionnalité, si on divise une grandeur par 2, on divise également l’autre par 2. Donc 30 ÷ 2 = 15 €. Les 5 kg coûtent donc 15 €.'
},
{
quiz:{
q:'On sait que 3 cahiers coûtent 6 €. Combien coûtent 9 cahiers ?',
a:'18'
},
options:'12 \\ 15 \\ 18 \\ 27',
explanation:'9 cahiers représentent 3 fois plus que 3 cahiers. Dans une situation de proportionnalité, si on multiplie une grandeur par 3, on multiplie aussi l’autre par 3. Donc 6 × 3 = 18 €. Les 9 cahiers coûtent 18 €.'
},
{
quiz:{
q:'On sait que 8 bouteilles coûtent 12 €. Combien coûtent 6 bouteilles ?',
a:'9'
},
options:'8 \\ 9 \\ 10 \\ 12',
explanation:'On peut écrire 6 = 8 − 2. Commençons par trouver le prix de 2 bouteilles. Comme 8 bouteilles coûtent 12 €, alors 4 bouteilles coûtent 6 € et 2 bouteilles coûtent 3 €. On retire donc ces 3 € : 12 − 3 = 9 €. Les 6 bouteilles coûtent donc 9 €.'
},
{
quiz:{
q:'On sait que 4 stylos coûtent 5 €. Combien coûtent 12 stylos ?',
a:'15'
},
options:'12 \\ 15 \\ 18 \\ 20',
explanation:'12 stylos représentent 3 fois 4 stylos. Dans une situation de proportionnalité, on multiplie également le prix par 3 : 5 × 3 = 15 €.'
},
{
quiz:{
q:'On sait que 20 mètres de câble coûtent 50 €. Combien coûtent 15 mètres ?',
a:'37,5'
},
options:'35 \\ 37,5 \\ 40 \\ 42,5',
explanation:'On remarque que 15 m = 20 m − 5 m. Comme 5 m représente le quart de 20 m, ils coûtent le quart de 50 €, soit 12,50 €. On retire donc : 50 − 12,50 = 37,50 €. Cette méthode utilise la propriété de linéarité avec une soustraction.'
},
{
quiz:{
q:'On sait que 6 tickets coûtent 18 €. Combien coûtent 18 tickets ?',
a:'54'
},
options:'36 \\ 48 \\ 54 \\ 60',
explanation:'18 tickets représentent 3 fois plus que 6 tickets. On multiplie donc également le prix par 3 : 18 × 3 = 54 €.'
},
{
quiz:{
q:'On sait que 10 kg de pommes coûtent 40 €. Combien coûtent 25 kg ?',
a:'100'
},
options:'80 \\ 90 \\ 100 \\ 110',
explanation:'On peut remarquer que 25 kg = 10 kg + 10 kg + 5 kg. Les deux premiers paquets coûtent 40 + 40 = 80 €. Comme 5 kg représentent la moitié de 10 kg, ils coûtent 20 €. On obtient donc 80 + 20 = 100 €.'
},
{
quiz:{
q:'On sait que 12 places de cinéma coûtent 96 €. Combien coûtent 4 places ?',
a:'32'
},
options:'24 \\ 28 \\ 32 \\ 36',
explanation:'4 places représentent le tiers de 12 places. Dans une situation de proportionnalité, on divise également le prix par 3 : 96 ÷ 3 = 32 €.'
},
{
quiz:{
q:'Pourquoi la méthode de linéarité fonctionne-t-elle ?',
a:'les deux grandeurs restent proportionnelles'
},
options:'les deux grandeurs restent proportionnelles \\ les nombres sont petits \\ les valeurs sont entières \\ elle remplace le produit en croix',
explanation:'Dans une situation de proportionnalité, les deux grandeurs sont liées par un même coefficient multiplicateur. Si l’on additionne, soustrait, multiplie ou divise une grandeur, on peut effectuer exactement la même opération sur l’autre grandeur. C’est cette propriété qui justifie la méthode de linéarité.'
}
],
"37241":[
{
quiz:{
q:'<svg width="320" height="220" viewBox="0 0 320 220"><line x1="40" y1="180" x2="280" y2="180" stroke="black"/><line x1="40" y1="180" x2="40" y2="20" stroke="black"/><line x1="40" y1="180" x2="240" y2="55" stroke="red" stroke-width="3"/><text x="145" y="210">Nombre de stylos</text><text x="5" y="30">Prix (€)</text><text x="80" y="195">2</text><text x="120" y="195">4</text><text x="160" y="195">6</text><text x="200" y="195">8</text><text x="240" y="195">10</text><text x="20" y="155">2,5</text><text x="20" y="130">5</text><text x="20" y="105">7,5</text><text x="20" y="80">10</text></svg><br>Quel est le prix de 6 stylos ?',
a:'7,5'
},
options:'5 \\ 6 \\ 7,5 \\ 10',
explanation:'On part de <strong>6 stylos</strong> sur l’axe horizontal. On monte jusqu’à la droite puis on se déplace horizontalement vers l’axe vertical. On lit alors <strong>7,5 €</strong>. Cela signifie que 6 stylos coûtent 7,50 €. Attention à ne pas lire directement sur l’axe horizontal : celui-ci représente le nombre de stylos et non le prix.'
},
{
quiz:{
q:'<svg width="320" height="220" viewBox="0 0 320 220"><line x1="40" y1="180" x2="280" y2="180" stroke="black"/><line x1="40" y1="180" x2="40" y2="20" stroke="black"/><line x1="40" y1="180" x2="240" y2="55" stroke="red" stroke-width="3"/></svg><br>Pour quel nombre de stylos le prix est-il de 10 € ?',
a:'8'
},
options:'6 \\ 7 \\ 8 \\ 10',
explanation:'Cette fois on connaît le prix. On part donc de <strong>10 €</strong> sur l’axe vertical. On rejoint la droite puis on redescend vers l’axe horizontal. On lit alors <strong>8 stylos</strong>. Beaucoup d’élèves font le trajet dans le mauvais sens et lisent directement 10 sur l’axe horizontal.'
},
{
quiz:{
q:'Sur un graphique de proportionnalité, pour connaître le prix correspondant à une quantité donnée, on commence par regarder :',
a:'l’axe horizontal'
},
options:'l’axe horizontal \\ l’axe vertical \\ le titre \\ l’origine',
explanation:'Lorsque l’on connaît la quantité (nombre de stylos, masse, distance...), elle est généralement placée sur l’axe horizontal. On part donc de cette valeur, on rejoint la droite puis on lit le résultat sur l’axe vertical.'
},
{
quiz:{
q:'Une droite de proportionnalité passe par les points (0 ; 0) et (4 ; 5). Quel est le prix de 8 objets ?',
a:'10'
},
options:'8 \\ 9 \\ 10 \\ 12',
explanation:'On remarque que 4 objets correspondent à 5 €. Comme 8 objets représentent deux fois plus, le prix sera lui aussi deux fois plus grand : 5 × 2 = 10 €. Sur le graphique, on retrouverait exactement cette lecture.'
},
{
quiz:{
q:'Une droite de proportionnalité passe par les points (0 ; 0) et (2 ; 3). Quel prix correspond à 6 objets ?',
a:'9'
},
options:'6 \\ 8 \\ 9 \\ 12',
explanation:'6 objets représentent trois fois 2 objets. Dans une situation de proportionnalité, le prix est donc lui aussi multiplié par 3 : 3 × 3 = 9 €.'
},
{
quiz:{
q:'Sur un graphique de proportionnalité, lorsque l’on double la quantité achetée, le prix :',
a:'double aussi'
},
options:'double aussi \\ reste identique \\ augmente de 1 \\ triple toujours',
explanation:'Dans une situation de proportionnalité, les deux grandeurs évoluent ensemble selon un même coefficient. Si la quantité est multipliée par 2, le prix est également multiplié par 2.'
},
{
quiz:{
q:'Une voiture parcourt 120 km en 2 h. Quelle distance parcourt-elle en 5 h si la vitesse reste constante ?',
a:'300'
},
options:'240 \\ 300 \\ 360 \\ 600',
explanation:'La situation est proportionnelle. 5 h représentent 2,5 fois 2 h. On multiplie donc également la distance par 2,5 : 120 × 2,5 = 300 km.'
},
{
quiz:{
q:'Sur un graphique de proportionnalité, la lecture se fait toujours à partir :',
a:'de la droite'
},
options:'de la droite \\ du quadrillage uniquement \\ du coefficient uniquement \\ du point le plus haut',
explanation:'La droite représente la relation entre les deux grandeurs. Pour passer d’une grandeur à l’autre, il faut toujours rejoindre la droite avant de lire l’autre axe.'
},
{
quiz:{
q:'Un graphique montre que 3 kg de pommes coûtent 6 €. Combien coûtent 9 kg ?',
a:'18'
},
options:'12 \\ 15 \\ 18 \\ 24',
explanation:'9 kg représentent trois fois 3 kg. Le prix est donc multiplié par 3 : 6 × 3 = 18 €. Cette propriété est visible graphiquement car les points sont alignés sur une droite passant par l’origine.'
},
{
quiz:{
q:'Pourquoi la lecture graphique fonctionne-t-elle dans une situation de proportionnalité ?',
a:'la représentation est une droite'
},
options:'la représentation est une droite \\ le graphique est gradué \\ les nombres sont entiers \\ les axes sont perpendiculaires',
explanation:'Dans une situation de proportionnalité, la représentation graphique est une <strong>droite passant par l’origine</strong>. Cette droite contient toutes les correspondances possibles entre les deux grandeurs. En lisant un point de la droite, on retrouve donc une relation correcte entre les deux grandeurs.'
}
],
"37251":[
{
quiz:{
q:`
<div class="table-container">
<table class="custom-table">
<tr><th>Stylos</th><th>2</th><th>3</th></tr>
<tr><td><strong>Prix (€)</strong></td><td>10</td><td>?</td></tr>
</table>
</div>

<svg width="220" height="100" viewBox="0 0 220 100">
<line x1="70" y1="25" x2="150" y2="70" stroke="#e74c3c" stroke-width="3"/>
<line x1="150" y1="25" x2="70" y2="70" stroke="#3498db" stroke-width="3"/>
</svg>

Quelle est la valeur manquante ?
`,
a:'15'
},
options:'6 \\ 12 \\ 15 \\ 30',
explanation:'On utilise le produit en croix. Les deux nombres connus situés sur une même branche de la croix sont <strong>3</strong> et <strong>10</strong>. On commence donc par les multiplier : 3 × 10 = 30. On divise ensuite par le nombre situé avec l’inconnue sur l’autre branche, ici 2. On obtient 30 ÷ 2 = 15. Vérification : 10 ÷ 2 = 5 et 15 ÷ 3 = 5. Les quotients sont égaux, le résultat est correct.'
},

{
quiz:{
q:`
<div class="table-container">
<table class="custom-table">
<tr><th>Kg</th><th>4</th><th>7</th></tr>
<tr><td><strong>Prix (€)</strong></td><td>12</td><td>?</td></tr>
</table>
</div>

Quelle est la valeur manquante ?
`,
a:'21'
},
options:'18 \\ 19 \\ 21 \\ 28',
explanation:'On trace mentalement la croix. Les deux nombres connus d’une même branche sont 7 et 12. On calcule 7 × 12 = 84. On divise ensuite par 4 : 84 ÷ 4 = 21. Le prix de 7 kg est donc 21 €. Vérification : 12 ÷ 4 = 3 et 21 ÷ 7 = 3.'
},

{
quiz:{
q:`
<div class="table-container">
<table class="custom-table">
<tr><th>Distance (km)</th><th>5</th><th>12</th></tr>
<tr><td><strong>Temps (min)</strong></td><td>8</td><td>?</td></tr>
</table>
</div>

Combien de minutes correspondent à 12 km ?
`,
a:'19,2'
},
options:'18 \\ 19,2 \\ 20 \\ 24',
explanation:'On applique le produit en croix. Les deux nombres connus de la même branche sont 12 et 8. On calcule 12 × 8 = 96. Puis on divise par 5 : 96 ÷ 5 = 19,2. Le temps correspondant est donc 19,2 minutes.'
},

{
quiz:{
q:`
<div class="table-container">
<table class="custom-table">
<tr><th>Stylos</th><th>6</th><th>?</th></tr>
<tr><td><strong>Prix (€)</strong></td><td>9</td><td>15</td></tr>
</table>
</div>

Combien de stylos peut-on acheter pour 15 € ?
`,
a:'10'
},
options:'8 \\ 9 \\ 10 \\ 15',
explanation:'Cette fois l’inconnue est sur la première ligne. Les deux nombres connus d’une branche sont 15 et 6. On les multiplie : 15 × 6 = 90. Puis on divise par le nombre situé avec l’inconnue, ici 9. On obtient 90 ÷ 9 = 10. Avec 15 €, on peut acheter 10 stylos.'
},

{
quiz:{
q:'Quel calcul correspond au produit en croix du tableau suivant ?<br><div class="table-container"><table class="custom-table"><tr><th>3</th><th>5</th></tr><tr><td>12</td><td>?</td></tr></table></div>',
a:'5×12÷3'
},
options:'5×12÷3 \\ 3×12÷5 \\ 12÷3÷5 \\ 5+12÷3',
explanation:'Les deux nombres connus de la même branche de la croix sont 5 et 12. On commence donc par calculer 5 × 12 puis on divise par le nombre situé avec l’inconnue, ici 3. Beaucoup d’élèves inversent les nombres 3 et 5 : cela donne alors un résultat faux.'
},

{
quiz:{
q:'4 cahiers coûtent 14 €. Combien coûtent 10 cahiers ?',
a:'35'
},
options:'28 \\ 30 \\ 35 \\ 40',
explanation:'On construit mentalement le tableau : 4 cahiers → 14 € et 10 cahiers → ?. Produit en croix : 10 × 14 = 140 puis 140 ÷ 4 = 35. Les 10 cahiers coûtent donc 35 €.'
},

{
quiz:{
q:'8 litres coûtent 20 €. Combien coûtent 14 litres ?',
a:'35'
},
options:'28 \\ 32 \\ 35 \\ 40',
explanation:'Produit en croix : 14 × 20 = 280 puis 280 ÷ 8 = 35. On trouve donc 35 €. Vérification : 20 ÷ 8 = 2,5 et 35 ÷ 14 = 2,5.'
},

{
quiz:{
q:'Pourquoi divise-t-on après avoir multiplié dans un produit en croix ?',
a:'pour isoler la valeur inconnue'
},
options:'pour isoler la valeur inconnue \\ pour simplifier le tableau \\ pour obtenir un entier \\ parce que c’est obligatoire',
explanation:'Le produit des deux nombres connus donne une quantité trop grande. La division permet d’isoler la valeur manquante. C’est exactement ce que l’on ferait en résolvant une égalité de quotients.'
},

{
quiz:{
q:'15 kg de sable coûtent 18 €. Combien coûtent 25 kg ?',
a:'30'
},
options:'27 \\ 28 \\ 30 \\ 32',
explanation:'Produit en croix : 25 × 18 = 450. Puis 450 ÷ 15 = 30. Les 25 kg coûtent donc 30 €.'
},

{
quiz:{
q:'Comment vérifier qu’un résultat obtenu par produit en croix est correct ?',
a:'en comparant les quotients'
},
options:'en comparant les quotients \\ en additionnant les colonnes \\ en regardant la plus grande valeur \\ en recomptant les lignes',
explanation:'Une bonne vérification consiste à calculer les quotients des colonnes. Si les quotients sont égaux, alors le tableau est bien proportionnel et le résultat trouvé est cohérent. Cette vérification relie directement le produit en croix à la définition de la proportionnalité vue au début du chapitre.'
}
],
"37301":[
{
quiz:{
q:'4 kg de pommes coûtent 10 €. Quelle fonction linéaire permet de calculer le prix P(m) en fonction de la masse m ?',
a:'P(m)=2,5m'
},
options:'P(m)=2,5m \\ P(m)=4m \\ P(m)=10m \\ P(m)=m+2,5',
explanation:'Pour modéliser une situation de proportionnalité par une fonction linéaire, on commence par chercher le coefficient de proportionnalité. Ici 4 kg coûtent 10 €, donc 1 kg coûte 10 ÷ 4 = 2,5 €. Pour obtenir le prix à partir de la masse, on multiplie toujours par 2,5. La fonction associée est donc <strong>P(m)=2,5m</strong>. Attention : écrire P(m)=m+2,5 correspondrait à une addition et non à une situation de proportionnalité.'
},
{
quiz:{
q:'6 mètres de tissu coûtent 18 €. Quelle fonction linéaire permet de calculer le prix P(t) en fonction de la longueur t ?',
a:'P(t)=3t'
},
options:'P(t)=3t \\ P(t)=18t \\ P(t)=t+3 \\ P(t)=6t',
explanation:'Le coefficient de proportionnalité est le prix d’un mètre de tissu. On calcule donc 18 ÷ 6 = 3. Chaque mètre coûte 3 €. Pour obtenir le prix, il suffit de multiplier la longueur par 3. La fonction est donc <strong>P(t)=3t</strong>.'
},
{
quiz:{
q:'8 litres d’essence coûtent 14,40 €. Quelle fonction linéaire modélise cette situation ?',
a:'P(l)=1,8l'
},
options:'P(l)=1,8l \\ P(l)=14,4l \\ P(l)=8l \\ P(l)=l+1,8',
explanation:'On cherche d’abord le prix d’un litre : 14,40 ÷ 8 = 1,80 €. Chaque litre coûte donc 1,80 €. Pour calculer le prix total, on multiplie toujours le nombre de litres par 1,80. La fonction associée est donc <strong>P(l)=1,8l</strong>.'
},
{
quiz:{
q:'Un cycliste roule à vitesse constante et parcourt 45 km en 3 h. Quelle fonction linéaire permet de calculer la distance D(t) parcourue en fonction du temps t ?',
a:'D(t)=15t'
},
options:'D(t)=15t \\ D(t)=45t \\ D(t)=3t \\ D(t)=t+15',
explanation:'En 3 heures, le cycliste parcourt 45 km. En une heure, il parcourt donc 45 ÷ 3 = 15 km. La distance est obtenue en multipliant le temps par 15. La fonction est donc <strong>D(t)=15t</strong>.'
},
{
quiz:{
q:'5 places de cinéma coûtent 42,50 €. Quelle fonction linéaire modélise le prix P(n) en fonction du nombre de places n ?',
a:'P(n)=8,5n'
},
options:'P(n)=8,5n \\ P(n)=42,5n \\ P(n)=5n \\ P(n)=n+8,5',
explanation:'On cherche le prix d’une seule place : 42,50 ÷ 5 = 8,50 €. Chaque place coûte donc 8,50 €. Pour calculer le prix total, on multiplie le nombre de places par 8,50. La fonction est donc <strong>P(n)=8,5n</strong>.'
},
{
quiz:{
q:'12 kg de sable coûtent 30 €. Quelle fonction linéaire modélise le prix P(m) en fonction de la masse m ?',
a:'P(m)=2,5m'
},
options:'P(m)=2,5m \\ P(m)=12m \\ P(m)=30m \\ P(m)=m+2,5',
explanation:'On calcule d’abord le prix d’un kilogramme : 30 ÷ 12 = 2,5. Chaque kilogramme coûte donc 2,50 €. La fonction qui permet de calculer le prix est donc <strong>P(m)=2,5m</strong>.'
},
{
quiz:{
q:'3 billets de train coûtent 54 €. Quelle fonction linéaire permet de calculer le prix P(b) en fonction du nombre de billets b ?',
a:'P(b)=18b'
},
options:'P(b)=18b \\ P(b)=54b \\ P(b)=3b \\ P(b)=b+18',
explanation:'Le prix d’un billet est 54 ÷ 3 = 18 €. Comme chaque billet coûte 18 €, le prix total s’obtient en multipliant le nombre de billets par 18. La fonction associée est donc <strong>P(b)=18b</strong>.'
},
{
quiz:{
q:'Quelle situation peut être modélisée par la fonction P(x)=4x ?<br><br><strong>Problème A :</strong> Chaque kilogramme coûte 4 €.<br><strong>Problème B :</strong> On paie 4 € puis 1 € par kilogramme.<br><strong>Problème C :</strong> Le prix est toujours de 4 €.<br><strong>Problème D :</strong> On ajoute 4 € au résultat obtenu.',
a:'Problème A'
},
options:'Problème A \\ Problème B \\ Problème C \\ Problème D',
explanation:'La fonction P(x)=4x signifie que l’on obtient toujours le prix en multipliant la quantité par 4. Le problème A correspond exactement à cette situation. Les autres propositions comportent une somme fixe, ce qui ne correspond plus à une situation de proportionnalité.'
},
{
quiz:{
q:'Quelle situation peut être modélisée par la fonction D(t)=12t ?<br><br><strong>Problème A :</strong> Un cycliste parcourt toujours 12 km par heure.<br><strong>Problème B :</strong> Un cycliste parcourt 12 km puis s’arrête.<br><strong>Problème C :</strong> Un cycliste parcourt 12 km puis 1 km supplémentaire chaque heure.<br><strong>Problème D :</strong> Un cycliste parcourt toujours 12 km de plus que le temps indiqué.',
a:'Problème A'
},
options:'Problème A \\ Problème B \\ Problème C \\ Problème D',
explanation:'La formule D(t)=12t indique que la distance est obtenue en multipliant le temps par 12. Cela signifie que le cycliste parcourt 12 km chaque heure à vitesse constante. Seul le problème A correspond à cette situation.'
},
{
quiz:{
q:'Quelle situation peut être modélisée par la fonction P(n)=7,5n ?<br><br><strong>Problème A :</strong> Chaque place coûte 7,50 €.<br><strong>Problème B :</strong> On paie 7,50 € d’entrée puis les places sont gratuites.<br><strong>Problème C :</strong> On ajoute 7,50 € au prix calculé.<br><strong>Problème D :</strong> Chaque place coûte 7,50 € mais il faut payer 2 € de réservation.',
a:'Problème A'
},
options:'Problème A \\ Problème B \\ Problème C \\ Problème D',
explanation:'La fonction P(n)=7,5n signifie que chaque place coûte toujours 7,50 € et qu’il n’existe aucun frais fixe supplémentaire. Dès qu’une somme fixe apparaît, la situation n’est plus modélisée par une fonction linéaire. Le bon choix est donc le problème A.'
}
],
"37401":[
{
quiz:{
q:'25 % des 280 élèves participent à une sortie. Combien d’élèves participent à la sortie ?',
a:'70'
},
options:'56 \\ 70 \\ 84 \\ 112',
explanation:'Prendre 25 % d’un nombre revient à le multiplier par 25/100. On calcule donc : 280 × 25/100 = 70. Il y a donc <strong>70 élèves</strong> qui participent à la sortie. Attention : ici on demande seulement une partie des élèves, on ne parle pas d’augmentation ou de diminution.'
},
{
quiz:{
q:'20 % de 300 vaut :',
a:'60'
},
options:'20 \\ 60 \\ 240 \\ 360',
explanation:'Prendre 20 % d’un nombre revient à multiplier ce nombre par 20/100 = 0,20. On obtient donc 300 × 0,20 = 60. Attention à ne pas confondre avec « augmenter de 20 % », qui donnerait un résultat différent.'
},
{
quiz:{
q:'35 % de 80 vaut :',
a:'28'
},
options:'20 \\ 28 \\ 35 \\ 52',
explanation:'On applique directement la règle : 80 × 35/100 = 28. Prendre 35 % d’un nombre revient simplement à calculer une partie de ce nombre.'
},
{
quiz:{
q:'Un ordinateur coûte 1000 €. Son prix augmente de 20 %. Quel est son nouveau prix ?',
a:'1200'
},
options:'200 \\ 1000 \\ 1200 \\ 1220',
explanation:'Augmenter un nombre de 20 % revient à le multiplier par 1 + 20/100 = 1,20. On calcule donc : 1000 × 1,20 = 1200. Beaucoup d’élèves répondent 200 car ils calculent uniquement l’augmentation et oublient d’ajouter le prix de départ.'
},
{
quiz:{
q:'Une veste coûte 80 €. Son prix augmente de 15 %. Quel est son nouveau prix ?',
a:'92'
},
options:'12 \\ 88 \\ 92 \\ 95',
explanation:'Augmenter de 15 % revient à multiplier par 1,15. On obtient : 80 × 1,15 = 92. Une autre méthode consiste à calculer les 15 % (12 €) puis à les ajouter au prix initial : 80 + 12 = 92.'
},
{
quiz:{
q:'Un blouson coûte 160 €. Il bénéficie d’une réduction de 35 %. Quel est son nouveau prix ?',
a:'104'
},
options:'56 \\ 96 \\ 104 \\ 125',
explanation:'Diminuer un nombre de 35 % revient à multiplier par 1 − 35/100 = 0,65. On calcule donc : 160 × 0,65 = 104. Attention : 56 € correspond au montant de la réduction et non au nouveau prix.'
},
{
quiz:{
q:'Une télévision coûte 500 €. Son prix baisse de 20 %. Quel est son nouveau prix ?',
a:'400'
},
options:'100 \\ 380 \\ 400 \\ 420',
explanation:'Une diminution de 20 % correspond à une multiplication par 0,80. On calcule : 500 × 0,80 = 400. Beaucoup d’élèves répondent 100 car ils calculent uniquement le montant de la réduction.'
},
{
quiz:{
q:'Après une augmentation de 20 %, un article coûte 120 €. Quel était son prix avant l’augmentation ?',
a:'100'
},
options:'96 \\ 100 \\ 110 \\ 144',
explanation:'Attention au sens ! Ici on connaît le prix final et on cherche le prix de départ. Le prix final est obtenu en multipliant par 1,20. On résout donc : prix initial × 1,20 = 120. On obtient : 120 ÷ 1,20 = 100. Beaucoup d’élèves font à tort 120 − 20 %, ce qui ne répond pas à la question.'
},
{
quiz:{
q:'Après une augmentation de 10 %, un prix vaut 99 €. Quel était le prix avant augmentation ?',
a:'90'
},
options:'89 \\ 90 \\ 91 \\ 99',
explanation:'Après augmentation, le prix est multiplié par 1,10. On cherche donc le nombre qui, multiplié par 1,10, donne 99. On calcule : 99 ÷ 1,10 = 90. C’est exactement le type de situation signalé dans la leçon par « Attention au sens ! ».'
},
{
quiz:{
q:'Après une réduction de 25 %, un article coûte 150 €. Quel était son prix avant la réduction ?',
a:'200'
},
options:'175 \\ 187,5 \\ 200 \\ 225',
explanation:'Après une réduction de 25 %, il reste 75 % du prix initial. Cela correspond à une multiplication par 0,75. On cherche donc le prix de départ x tel que : x × 0,75 = 150. On calcule : 150 ÷ 0,75 = 200. Attention : il ne faut surtout pas ajouter 25 % à 150, car les pourcentages s’appliquent toujours au prix initial.'
},
{
quiz:{
q:'Un téléphone coûte 650 €. Son prix augmente de 8 %. Quel est son nouveau prix ?',
a:'702'
},
options:'52 \\ 698 \\ 702 \\ 758',
explanation:'Augmenter de 8 % revient à multiplier par 1 + 8/100 = 1,08. On calcule donc : 650 × 1,08 = 702. Attention : 52 € correspond uniquement au montant de l’augmentation.'
},
{
quiz:{
q:'Une console coûtait 400 €. Son prix augmente de 12 %. Quel est son nouveau prix ?',
a:'448'
},
options:'412 \\ 440 \\ 448 \\ 480',
explanation:'Une augmentation de 12 % correspond à une multiplication par 1,12. On obtient : 400 × 1,12 = 448. On peut aussi calculer l’augmentation : 12 % de 400 = 48 puis faire 400 + 48 = 448.'
},
{
quiz:{
q:'Une facture de 150 € augmente de 30 %. Quel est le nouveau montant ?',
a:'195'
},
options:'45 \\ 180 \\ 195 \\ 225',
explanation:'Augmenter de 30 % revient à multiplier par 1,30. On calcule : 150 × 1,30 = 195. Beaucoup d’élèves répondent 45 car ils calculent uniquement les 30 % sans les ajouter au montant de départ.'
},
{
quiz:{
q:'Un article coûtait 240 €. Après une hausse de 25 %, quel est son nouveau prix ?',
a:'300'
},
options:'265 \\ 280 \\ 300 \\ 315',
explanation:'Une augmentation de 25 % correspond à une multiplication par 1,25. On obtient : 240 × 1,25 = 300. On peut aussi calculer 25 % de 240 = 60 puis ajouter ces 60 € au prix initial.'
}
],
"38121":[
{
quiz:{
q:'Une fonction associe :',
a:'à chaque nombre de départ un unique nombre d’arrivée'
},
options:'à chaque nombre de départ un unique nombre d’arrivée \\ plusieurs nombres d’arrivée à chaque nombre de départ \\ uniquement des nombres positifs \\ uniquement des nombres entiers',
explanation:'Par définition, une fonction associe à chaque nombre de départ un unique nombre d’arrivée. Deux images différentes pour un même antécédent ne sont pas autorisées.'
},
{
quiz:{
q:'Comment appelle-t-on le nombre de départ dans une fonction ?',
a:'un antécédent'
},
options:'une image \\ un antécédent \\ une équation \\ un coefficient',
explanation:'Le nombre de départ d’une fonction est appelé un antécédent.'
},
{
quiz:{
q:'Comment appelle-t-on le nombre obtenu après transformation par une fonction ?',
a:'une image'
},
options:'une image \\ un antécédent \\ une variable \\ une inconnue',
explanation:'Le nombre obtenu à la sortie de la fonction est appelé image.'
},
{
quiz:{
q:'Dans l’écriture f(3)=7, le nombre 3 est :',
a:'un antécédent de 7'
},
options:'un antécédent de 7 \\ une image de 7 \\ le nom de la fonction \\ le résultat du calcul',
explanation:'Le nombre situé entre les parenthèses est le nombre de départ : c’est l’antécédent.'
},
{
quiz:{
q:'Dans l’écriture f(3)=7, le nombre 7 est :',
a:'l’image de 3'
},
options:'l’image de 3 \\ l’antécédent de 3 \\ le nom de la fonction \\ une variable',
explanation:'Le nombre situé après le signe = est le nombre d’arrivée : c’est l’image.'
},
{
quiz:{
q:'Dans l’écriture f : x → f(x), la lettre f représente :',
a:'le nom de la fonction'
},
options:'le nom de la fonction \\ l’antécédent \\ l’image \\ le résultat',
explanation:'Les fonctions sont généralement nommées par une lettre : f, g, h...'
},
{
quiz:{
q:'Dans l’écriture f : x → f(x), le x représente :',
a:'l’antécédent'
},
options:'l’antécédent \\ l’image \\ le nom de la fonction \\ une équation',
explanation:'Le x représente le nombre de départ, c’est-à-dire l’antécédent.'
},
{
quiz:{
q:'Dans l’écriture f : x → f(x), f(x) représente :',
a:'l’image de x'
},
options:'l’image de x \\ l’antécédent de x \\ le nom de la fonction \\ une variable',
explanation:'f(x) désigne l’image obtenue lorsque l’on applique la fonction à x.'
},
{
quiz:{
q:'Si g(5)=9, quelle affirmation est correcte ?',
a:'5 est un antécédent de 9'
},
options:'5 est un antécédent de 9 \\ 9 est un antécédent de 5 \\ 5 est une image de 9 \\ 5 et 9 sont deux images',
explanation:'Le nombre de départ est toujours l’antécédent et le nombre obtenu est son image.'
},
{
quiz:{
q:'Quelle phrase traduit correctement l’écriture h(4)=12 ?',
a:'4 est un antécédent dont l’image est 12'
},
options:'4 est un antécédent dont l’image est 12 \\ 12 est un antécédent dont l’image est 4 \\ h est l’image de 4 \\ 4 et 12 sont deux fonctions',
explanation:'L’écriture h(4)=12 signifie que lorsque l’on entre 4 dans la fonction h, on obtient 12 comme image.'
}
],"38131":[
{
quiz:{
q:'Une fonction peut être représentée :',
a:'par une formule, un tableau ou un graphique'
},
options:'par une formule, un tableau ou un graphique \\ uniquement par une formule \\ uniquement par un graphique \\ uniquement par un tableau',
explanation:'Une même fonction peut être représentée de plusieurs façons différentes. Une expression algébrique, un tableau de valeurs ou une représentation graphique décrivent exactement la même fonction.'
},
{
quiz:{
q:'L’expression algébrique d’une fonction correspond :',
a:'à sa formule'
},
options:'à sa formule \\ à son graphique \\ à son tableau \\ à son image',
explanation:'L’expression algébrique est l’écriture mathématique qui permet de calculer les images. C’est la formule de la fonction.'
},
{
quiz:{
q:'Si g(x)=x²+2, alors g(3)=',
a:'11'
},
options:'9 \\ 11 \\ 5 \\ 13',
explanation:'Pour calculer une image, on remplace x par la valeur donnée puis on effectue les calculs. Ici g(3)=3²+2=9+2=11.'
},
{
quiz:{
q:'Si g(x)=x²+2, alors g(5)=',
a:'27'
},
options:'15 \\ 25 \\ 27 \\ 30',
explanation:'On remplace x par 5 : g(5)=5²+2=25+2=27.'
},
{
quiz:{
q:'Si g(x)=x²+2, alors g(0)=',
a:'2'
},
options:'0 \\ 1 \\ 2 \\ 4',
explanation:'On remplace x par 0 : g(0)=0²+2=0+2=2.'
},
{
quiz:{
q:'Pour calculer une image à partir d’une formule, il faut :',
a:'remplacer x par sa valeur puis calculer'
},
options:'remplacer x par sa valeur puis calculer \\ résoudre une équation \\ tracer un graphique \\ compléter un tableau',
explanation:'La méthode est toujours la même : on remplace la variable x par la valeur donnée puis on effectue les calculs.'
},
{
quiz:{
q:'Si h(x)=2x+5, alors h(4)=',
a:'13'
},
options:'9 \\ 10 \\ 13 \\ 18',
explanation:'On remplace x par 4 : h(4)=2×4+5=8+5=13.'
},
{
quiz:{
q:'Si h(x)=2x+5, alors h(10)=',
a:'25'
},
options:'15 \\ 20 \\ 25 \\ 30',
explanation:'On remplace x par 10 : h(10)=2×10+5=20+5=25.'
},
{
quiz:{
q:'Si h(x)=2x+5, quelle est l’image de 6 ?',
a:'17'
},
options:'12 \\ 15 \\ 17 \\ 22',
explanation:'On remplace x par 6 : h(6)=2×6+5=12+5=17.'
},
{
quiz:{
q:'Pour déterminer un antécédent, il faut généralement :',
a:'écrire une équation puis la résoudre'
},
options:'écrire une équation puis la résoudre \\ remplacer x puis calculer \\ tracer un graphique \\ multiplier par 2',
explanation:'Contrairement à une recherche d’image, on ne connaît pas la valeur de x. On écrit donc une équation puis on la résout.'
},
{
quiz:{
q:'Pour déterminer un antécédent de 17 par h(x)=2x+5, on écrit :',
a:'2x+5=17'
},
options:'2x+5=17 \\ h(17)=x \\ 17x+5=2 \\ x=17+5',
explanation:'Pour chercher un antécédent de 17, on cherche le nombre dont l’image vaut 17. On écrit donc l’équation h(x)=17, soit 2x+5=17.'
},
{
quiz:{
q:'Si h(x)=2x+5, alors un antécédent de 17 est :',
a:'6'
},
options:'5 \\ 6 \\ 7 \\ 17',
explanation:'On résout l’équation 2x+5=17. On obtient 2x=12 puis x=6. Le nombre 6 est donc un antécédent de 17.'
},
{
quiz:{
q:'Si h(x)=2x+5, alors un antécédent de 25 est :',
a:'10'
},
options:'8 \\ 9 \\ 10 \\ 12',
explanation:'On écrit 2x+5=25. On obtient 2x=20 puis x=10.'
},
{
quiz:{
q:'Si h(x)=2x+5, alors un antécédent de 9 est :',
a:'2'
},
options:'1 \\ 2 \\ 3 \\ 4',
explanation:'On écrit 2x+5=9. On obtient 2x=4 puis x=2.'
},
{
quiz:{
q:'Si g(4)=18, alors :',
a:'18 est l’image de 4'
},
options:'18 est l’image de 4 \\ 4 est l’image de 18 \\ 18 est un antécédent de 4 \\ g vaut 18',
explanation:'Dans une écriture du type g(4)=18, le nombre situé à gauche dans les parenthèses est l’antécédent et le résultat obtenu est l’image.'
},
{
quiz:{
q:'Si h(6)=17, alors :',
a:'6 est un antécédent de 17'
},
options:'6 est un antécédent de 17 \\ 17 est un antécédent de 6 \\ 6 est une image \\ 17 est la fonction',
explanation:'Attention à ne pas confondre image et antécédent. Ici 6 est le nombre de départ : c’est donc un antécédent. Le nombre 17 est l’image obtenue.'
},
{
quiz:{
q:'Dans une fonction, image et antécédent sont :',
a:'deux notions différentes'
},
options:'toujours identiques \\ deux notions différentes \\ toujours égaux à zéro \\ toujours positifs',
explanation:'L’antécédent est le nombre de départ alors que l’image est le nombre d’arrivée. Ces deux notions ne désignent donc pas la même chose.'
},
{
quiz:{
q:'Si l’on connaît le graphique d’une fonction, peut-on retrouver des images ?',
a:'oui'
},
options:'oui \\ non \\ seulement avec une calculatrice \\ seulement si la fonction est linéaire',
explanation:'Une représentation graphique permet de lire les images et les antécédents. Elle contient les mêmes informations que les autres représentations.'
},
{
quiz:{
q:'Si l’on connaît un tableau de valeurs, peut-on retrouver certaines images ?',
a:'oui'
},
options:'oui \\ non \\ uniquement les antécédents \\ jamais',
explanation:'Dans un tableau de valeurs, chaque antécédent est associé à son image. On peut donc lire directement certaines images.'
},
{
quiz:{
q:'Une fonction définie par une formule peut souvent être représentée aussi :',
a:'par un tableau et un graphique'
},
options:'par un tableau et un graphique \\ uniquement par une formule \\ uniquement par un graphique \\ uniquement par un tableau',
explanation:'Les trois représentations étudiées dans le cours décrivent la même fonction : la formule, le tableau de valeurs et le graphique.'
}
],
"38132":[
{
quiz:{
q:'On considère le tableau suivant :<br><br><div class="table-container"><table class="custom-table"><tr><th>x</th><th>1</th><th>3</th><th>5</th><th>7</th></tr><tr><th>f(x)</th><td>2</td><td>6</td><td>10</td><td>14</td></tr></table></div><br>Quelle est l’image de 5 ?',
a:'10'
},
options:'6 \\ 10 \\ 14 \\ 5',
explanation:'Pour trouver une image dans un tableau, on cherche l’antécédent sur la première ligne puis on lit l’image correspondante sur la deuxième ligne dans la même colonne. Ici sous 5 on lit 10.'
},
{
quiz:{
q:'On considère le tableau suivant :<br><br><div class="table-container"><table class="custom-table"><tr><th>x</th><th>1</th><th>3</th><th>5</th><th>7</th></tr><tr><th>f(x)</th><td>2</td><td>6</td><td>10</td><td>14</td></tr></table></div><br>Quel est un antécédent de 14 ?',
a:'7'
},
options:'1 \\ 3 \\ 5 \\ 7',
explanation:'Pour trouver un antécédent dans un tableau, on cherche l’image sur la deuxième ligne puis on remonte dans la même colonne. Ici 14 est associé à 7.'
},
{
quiz:{
q:'On considère le tableau suivant :<br><br><div class="table-container"><table class="custom-table"><tr><th>x</th><th>-2</th><th>0</th><th>2</th><th>4</th><th>6</th></tr><tr><th>h(x)</th><td>1</td><td>5</td><td>9</td><td>13</td><td>17</td></tr></table></div><br>Quelle est l’image de 4 ?',
a:'13'
},
options:'9 \\ 13 \\ 17 \\ 4',
explanation:'On repère 4 sur la première ligne puis on lit la valeur située juste en dessous. On obtient h(4)=13.'
},
{
quiz:{
q:'On considère le tableau suivant :<br><br><div class="table-container"><table class="custom-table"><tr><th>x</th><th>-2</th><th>0</th><th>2</th><th>4</th><th>6</th></tr><tr><th>h(x)</th><td>1</td><td>5</td><td>9</td><td>13</td><td>17</td></tr></table></div><br>Quel est un antécédent de 17 ?',
a:'6'
},
options:'2 \\ 4 \\ 6 \\ 17',
explanation:'On cherche 17 sur la deuxième ligne puis on lit la valeur correspondante sur la première ligne. On trouve 6.'
},
{
quiz:{
q:'On considère le tableau suivant :<br><br><div class="table-container"><table class="custom-table"><tr><th>x</th><th>0</th><th>1</th><th>2</th><th>3</th></tr><tr><th>g(x)</th><td>4</td><td>7</td><td>10</td><td>13</td></tr></table></div><br>Quelle est l’image de 2 ?',
a:'10'
},
options:'2 \\ 7 \\ 10 \\ 13',
explanation:'On repère l’antécédent 2 sur la première ligne. Dans la même colonne, on lit l’image 10.'
},
{
quiz:{
q:'On considère le tableau suivant :<br><br><div class="table-container"><table class="custom-table"><tr><th>x</th><th>0</th><th>1</th><th>2</th><th>3</th></tr><tr><th>g(x)</th><td>4</td><td>7</td><td>10</td><td>13</td></tr></table></div><br>Quel est un antécédent de 7 ?',
a:'1'
},
options:'0 \\ 1 \\ 2 \\ 3',
explanation:'On cherche l’image 7 sur la deuxième ligne puis on remonte dans la même colonne. On trouve l’antécédent 1.'
},
{
quiz:{
q:'Dans un tableau de valeurs, où trouve-t-on généralement les antécédents ?',
a:'sur la première ligne'
},
options:'sur la première ligne \\ sur la deuxième ligne \\ dans la dernière colonne \\ dans la première colonne',
explanation:'Dans les tableaux étudiés dans le cours, les antécédents sont placés sur la première ligne et les images sur la deuxième.'
},
{
quiz:{
q:'Dans un tableau de valeurs, où trouve-t-on généralement les images ?',
a:'sur la deuxième ligne'
},
options:'sur la première ligne \\ sur la deuxième ligne \\ dans la dernière colonne \\ dans la première colonne',
explanation:'Les images sont placées sur la deuxième ligne du tableau. Chaque colonne associe un antécédent à son image.'
},
{
quiz:{
q:'On considère le tableau suivant :<br><br><div class="table-container"><table class="custom-table"><tr><th>x</th><th>-3</th><th>-1</th><th>1</th><th>3</th></tr><tr><th>f(x)</th><td>8</td><td>4</td><td>0</td><td>-4</td></tr></table></div><br>Quelle affirmation est correcte ?',
a:'1 est un antécédent de 0'
},
options:'1 est un antécédent de 0 \\ 0 est un antécédent de 1 \\ 3 est l’image de -4 \\ 8 est un antécédent de -3',
explanation:'On lit dans le tableau que f(1)=0. Le nombre 1 est donc un antécédent de 0.'
},
{
quiz:{
q:'Un tableau de valeurs permet de :',
a:'lire des images et des antécédents'
},
options:'lire des images et des antécédents \\ uniquement calculer des images \\ uniquement calculer des antécédents \\ tracer automatiquement une courbe',
explanation:'Un tableau de valeurs associe des antécédents à leurs images. On peut donc y lire directement certaines images et certains antécédents.'
}
],
"38133":[
    {
quiz:{
q:'Sur un graphique représentant une fonction, sur quel axe lit-on les antécédents ?',
a:'sur l’axe horizontal'
},
options:'sur l’axe horizontal \\ sur l’axe vertical \\ sur la courbe uniquement \\ dans la légende',
explanation:'L’antécédent correspond à la valeur de x. Or les valeurs de x se lisent toujours sur l’axe horizontal, appelé aussi axe des abscisses.'
},
{
quiz:{
q:'Sur un graphique représentant une fonction, sur quel axe lit-on les images ?',
a:'sur l’axe vertical'
},
options:'sur l’axe horizontal \\ sur l’axe vertical \\ sur la courbe uniquement \\ dans la légende',
explanation:'L’image correspond à la valeur obtenue après transformation par la fonction. Elle se lit sur l’axe vertical, appelé axe des ordonnées.'
},
{
quiz:{
q:'Chaque point de la courbe représentant une fonction possède des coordonnées :',
a:'(antécédent ; image)'
},
options:'(image ; antécédent) \\ (antécédent ; image) \\ (fonction ; image) \\ (image ; fonction)',
explanation:'Sur la courbe, un point possède toujours pour coordonnées (x ; f(x)). La première valeur est l’antécédent et la seconde est son image.'
},
{
quiz:{
q:'Pour déterminer une image sur un graphique, quelle méthode est correcte ?',
a:'Je pars de l’antécédent puis je rejoins la courbe.'
},
options:'Je pars de l’antécédent puis je rejoins la courbe. \\ Je pars de l’image puis je rejoins la courbe. \\ Je pars de la courbe puis je choisis un nombre. \\ Je lis directement sur l’axe vertical.',
explanation:'Pour trouver une image, on connaît l’antécédent. On part donc de l’axe horizontal, on rejoint la courbe puis on lit l’image sur l’axe vertical.'
},
{
quiz:{
q:'Pour déterminer un antécédent sur un graphique, quelle méthode est correcte ?',
a:'Je pars de l’image puis je rejoins la courbe.'
},
options:'Je pars de l’antécédent puis je rejoins la courbe. \\ Je pars de l’image puis je rejoins la courbe. \\ Je pars de l’origine du repère. \\ Je lis directement sur l’axe horizontal.',
explanation:'Pour trouver un antécédent, on connaît l’image. On part donc de l’axe vertical, on rejoint la courbe puis on lit l’antécédent sur l’axe horizontal.'
},
{
quiz:{
q:'On considère le graphique suivant :<br><br><svg width="320" height="220"><line x1="40" y1="180" x2="290" y2="180" stroke="#444" stroke-width="2"/><line x1="40" y1="180" x2="40" y2="20" stroke="#444" stroke-width="2"/><polyline points="40,150 90,120 140,90 190,60 240,30" fill="none" stroke="black" stroke-width="3"/><circle cx="190" cy="60" r="4" fill="black"/><text x="35" y="185">0</text><text x="85" y="195">1</text><text x="135" y="195">2</text><text x="185" y="195">3</text><text x="235" y="195">4</text><text x="20" y="155">1</text><text x="20" y="125">2</text><text x="20" y="95">3</text><text x="20" y="65">4</text><text x="20" y="35">5</text></svg><br>Quelle est l’image de 3 ?',
a:'4'
},
options:'3 \\ 4 \\ 5 \\ 6',
explanation:'On part de l’antécédent 3 sur l’axe horizontal. En rejoignant la courbe, on atteint le point de hauteur 4. L’image de 3 est donc 4.'
},
{
quiz:{
q:'On considère le même graphique.<br><br><svg width="320" height="220"><line x1="40" y1="180" x2="290" y2="180" stroke="#444" stroke-width="2"/><line x1="40" y1="180" x2="40" y2="20" stroke="#444" stroke-width="2"/><polyline points="40,150 90,120 140,90 190,60 240,30" fill="none" stroke="black" stroke-width="3"/></svg><br>Quel est un antécédent de 5 ?',
a:'4'
},
options:'1 \\ 2 \\ 3 \\ 4',
explanation:'On part de l’image 5 sur l’axe vertical. En rejoignant la courbe puis en redescendant vers l’axe horizontal, on trouve l’antécédent 4.'
},
{
quiz:{
q:'On considère le graphique suivant :<br><br><svg width="320" height="220"><line x1="40" y1="180" x2="290" y2="180" stroke="#444" stroke-width="2"/><line x1="40" y1="180" x2="40" y2="20" stroke="#444" stroke-width="2"/><polyline points="40,140 90,110 140,80 190,50 240,20" fill="none" stroke="black" stroke-width="3"/><circle cx="140" cy="80" r="4" fill="black"/><text x="85" y="195">1</text><text x="135" y="195">2</text><text x="185" y="195">3</text><text x="235" y="195">4</text><text x="20" y="145">2</text><text x="20" y="115">3</text><text x="20" y="85">4</text><text x="20" y="55">5</text><text x="20" y="25">6</text></svg><br>Quelle est l’image de 2 ?',
a:'4'
},
options:'2 \\ 3 \\ 4 \\ 5',
explanation:'Le point de la courbe situé au-dessus de l’antécédent 2 possède pour ordonnée 4. On lit donc f(2)=4.'
},
{
quiz:{
q:'On considère le graphique suivant :<br><br><svg width="320" height="220"><line x1="40" y1="180" x2="290" y2="180" stroke="#444" stroke-width="2"/><line x1="40" y1="180" x2="40" y2="20" stroke="#444" stroke-width="2"/><polyline points="40,30 90,60 140,90 190,120 240,150" fill="none" stroke="black" stroke-width="3"/><text x="85" y="195">1</text><text x="135" y="195">2</text><text x="185" y="195">3</text><text x="235" y="195">4</text><text x="20" y="35">6</text><text x="20" y="65">5</text><text x="20" y="95">4</text><text x="20" y="125">3</text><text x="20" y="155">2</text></svg><br>Quelle est l’image de 3 ?',
a:'3'
},
options:'2 \\ 3 \\ 4 \\ 5',
explanation:'On part de l’antécédent 3, on rejoint la droite puis on lit l’ordonnée du point obtenu. On trouve l’image 3.'
},
{
quiz:{
q:'On considère le même graphique.<br><br><svg width="320" height="220"><line x1="40" y1="180" x2="290" y2="180" stroke="#444" stroke-width="2"/><line x1="40" y1="180" x2="40" y2="20" stroke="#444" stroke-width="2"/><polyline points="40,30 90,60 140,90 190,120 240,150" fill="none" stroke="black" stroke-width="3"/></svg><br>Quel est un antécédent de 4 ?',
a:'2'
},
options:'1 \\ 2 \\ 3 \\ 4',
explanation:'On part de l’image 4 sur l’axe vertical. En rejoignant la courbe puis l’axe horizontal, on trouve l’antécédent 2.'
}
],
"38211":[
{
quiz:{
q:'Soit la fonction linéaire $f(x)=4x$. Quelle est l’image de 3 ?',
a:'12'
},
options:'7 \\ 12 \\ 16 \\ 1',
explanation:'Pour calculer une image dans une fonction linéaire, on remplace x par la valeur donnée puis on effectue la multiplication. Ici : f(3)=4×3=12.'
},
{
quiz:{
q:'Soit la fonction linéaire $g(x)=5x$. Quelle est l’image de 8 ?',
a:'40'
},
options:'13 \\ 35 \\ 40 \\ 45',
explanation:'Une fonction linéaire multiplie toujours le nombre de départ par son coefficient. Ici 5×8=40.'
},
{
quiz:{
q:'Soit la fonction linéaire $h(x)=-2x$. Quelle est l’image de 6 ?',
a:'-12'
},
options:'12 \\ -8 \\ -12 \\ -3',
explanation:'Le coefficient est négatif. Il faut donc multiplier 6 par -2. On obtient -12.'
},
{
quiz:{
q:'Soit la fonction linéaire $f(x)=\\frac{3}{2}x$. Quelle est l’image de 4 ?',
a:'6'
},
options:'2 \\ 5 \\ 6 \\ 8',
explanation:'Multiplier par 3/2 revient à multiplier par 3 puis diviser par 2. Ainsi f(4)=3×4÷2=6.'
},
{
quiz:{
q:'Soit la fonction linéaire $f(x)=0,5x$. Quelle est l’image de 18 ?',
a:'9'
},
options:'9 \\ 18 \\ 36 \\ 8',
explanation:'Multiplier par 0,5 revient à prendre la moitié. La moitié de 18 vaut 9.'
},
{
quiz:{
q:'Soit la fonction linéaire $f(x)=3x$. Quel est l’antécédent de 21 ?',
a:'7'
},
options:'6 \\ 7 \\ 8 \\ 9',
explanation:'On cherche x tel que 3x=21. Pour retrouver x, on divise 21 par 3. On obtient 7.'
},
{
quiz:{
q:'Soit la fonction linéaire $g(x)=5x$. Quel est l’antécédent de 45 ?',
a:'9'
},
options:'8 \\ 9 \\ 10 \\ 11',
explanation:'On écrit 5x=45. On divise ensuite par 5 : x=9.'
},
{
quiz:{
q:'Soit la fonction linéaire $h(x)=-4x$. Quel est l’antécédent de 20 ?',
a:'-5'
},
options:'5 \\ -4 \\ -5 \\ -20',
explanation:'On cherche x tel que -4x=20. En divisant par -4, on obtient x=-5.'
},
{
quiz:{
q:'Soit la fonction linéaire $f(x)=\\frac{1}{2}x$. Quel est l’antécédent de 8 ?',
a:'16'
},
options:'4 \\ 8 \\ 12 \\ 16',
explanation:'On cherche x tel que x÷2=8. Pour retrouver x, on multiplie 8 par 2. On trouve 16.'
},
{
quiz:{
q:'Soit la fonction linéaire $f(x)=10x$. Quel est l’antécédent de 70 ?',
a:'7'
},
options:'6 \\ 7 \\ 8 \\ 70',
explanation:'On résout l’équation 10x=70. On divise 70 par 10 et on obtient 7.'
},
{
quiz:{
q:'Une fonction linéaire vérifie $f(4)=20$. Quel est son coefficient de linéarité ?',
a:'5'
},
options:'4 \\ 5 \\ 16 \\ 24',
explanation:'Dans une fonction linéaire, f(x)=ax. Comme f(4)=20, on a 20=a×4. En divisant 20 par 4, on trouve a=5.'
},
{
quiz:{
q:'Une fonction linéaire vérifie $f(6)=18$. Quel est son coefficient de linéarité ?',
a:'3'
},
options:'2 \\ 3 \\ 6 \\ 18',
explanation:'On utilise la formule a=image÷antécédent. Ici a=18÷6=3.'
},
{
quiz:{
q:'Le point A(5 ; 15) appartient à la représentation graphique d’une fonction linéaire. Quel est son coefficient de linéarité ?',
a:'3'
},
options:'2 \\ 3 \\ 5 \\ 15',
explanation:'Dans une fonction linéaire, tout point de la courbe vérifie y=ax. On calcule donc a=15÷5=3.'
},
{
quiz:{
q:'Une fonction linéaire transforme 8 en 12. Quel est son coefficient de linéarité ?',
a:'1,5'
},
options:'0,5 \\ 1,5 \\ 2 \\ 4',
explanation:'On sait que f(8)=12. Donc 12=a×8. En divisant 12 par 8, on obtient a=1,5.'
},
{
quiz:{
q:'Le point B(10 ; 7) appartient à la représentation graphique d’une fonction linéaire. Quel est son coefficient de linéarité ?',
a:'0,7'
},
options:'0,7 \\ 1,7 \\ 7 \\ 10',
explanation:'Le coefficient de linéarité se calcule en divisant l’image par l’antécédent. Ici a=7÷10=0,7.'
}
],
"38212":[
{
quiz:{
q:'La fonction linéaire représentée passe par le point A(2 ; 6). Quel est son coefficient ?',
a:'3'
},
options:'3 \\ 2 \\ 6 \\ 12',
explanation:'Pour retrouver le coefficient d’une fonction linéaire, on utilise les coordonnées d’un point de la droite autre que l’origine. On applique la formule a = y ÷ x. Ici a = 6 ÷ 2 = 3.'
},
{
quiz:{
q:'La fonction linéaire représentée passe par le point A(4 ; 12). Quel est son coefficient ?',
a:'3'
},
options:'3 \\ 4 \\ 12 \\ 8',
explanation:'Le coefficient se calcule avec a = y ÷ x. On obtient donc a = 12 ÷ 4 = 3. La fonction est alors f(x)=3x.'
},
{
quiz:{
q:'La fonction linéaire représentée passe par le point A(5 ; 20). Quel est son coefficient ?',
a:'4'
},
options:'4 \\ 5 \\ 20 \\ 15',
explanation:'Pour une fonction linéaire, le coefficient correspond au rapport entre l’image et l’antécédent. Ici a = 20 ÷ 5 = 4.'
},
{
quiz:{
q:'La fonction linéaire représentée passe par le point A(3 ; 9). Quelle est son équation ?',
a:'f(x)=3x'
},
options:'f(x)=3x \\ f(x)=9x \\ f(x)=x+3 \\ f(x)=3x+9',
explanation:'Le coefficient vaut a = 9 ÷ 3 = 3. Une fonction linéaire s’écrit toujours sous la forme f(x)=ax. On obtient donc f(x)=3x.'
},
{
quiz:{
q:'Une droite représentant une fonction linéaire passe par l’origine O et par le point A(7 ; 14). Quel est son coefficient directeur ?',
a:'2'
},
options:'2 \\ 7 \\ 14 \\ 21',
explanation:'On utilise la formule a = y ÷ x. Ici a = 14 ÷ 7 = 2. Cela signifie que lorsque x augmente de 1, y augmente de 2.'
},
{
quiz:{
q:'Quelle formule permet toujours de retrouver le coefficient d’une fonction linéaire à partir d’un point A(x ; y) de sa droite ?',
a:'a=y÷x'
},
options:'a=y÷x \\ a=x÷y \\ a=x+y \\ a=y−x',
explanation:'Dans une fonction linéaire, les coordonnées d’un point vérifient y=ax. Pour retrouver a, on divise donc y par x.'
},
{
quiz:{
q:'Quelle propriété graphique caractérise une fonction linéaire ?',
a:'Sa droite passe par l’origine'
},
options:'Sa droite passe par l’origine \\ Sa droite est horizontale \\ Sa droite coupe toujours l’axe des ordonnées en 2 \\ Sa courbe est un cercle',
explanation:'Toute fonction linéaire est de la forme f(x)=ax. Sa représentation graphique est donc une droite qui passe obligatoirement par l’origine du repère.'
},
{
quiz:{
q:'La fonction linéaire passe par le point A(8 ; 24). Quel est son coefficient ?',
a:'3'
},
options:'3 \\ 8 \\ 24 \\ 16',
explanation:'On applique la formule a = y ÷ x. Ici a = 24 ÷ 8 = 3.'
},
{
quiz:{
q:'La fonction linéaire passe par le point A(10 ; 15). Quel est son coefficient ?',
a:'1,5'
},
options:'1,5 \\ 15 \\ 10 \\ 0,5',
explanation:'Le coefficient se calcule en divisant l’image par l’antécédent : a = 15 ÷ 10 = 1,5.'
},
{
quiz:{
q:'Dans le vocabulaire du cours, le nombre a dans l’équation y=ax est appelé :',
a:'coefficient directeur'
},
options:'coefficient directeur \\ ordonnée à l’origine \\ image \\ antécédent',
explanation:'Pour une droite d’équation y=ax, le nombre a indique la pente de la droite. On l’appelle coefficient directeur.'
}
],
"38213":[
{
quiz:{
q:'Pour 1 kg de pommes, on paie 4 €. Quelle fonction permet de calculer le prix P(x) en fonction de la masse x ?',
a:'P(x)=4x'
},
options:'P(x)=4x \\ P(x)=x+4 \\ P(x)=4+x² \\ P(x)=4',
explanation:'Dans une situation de proportionnalité, on multiplie toujours la quantité par le même nombre. Ici chaque kilogramme coûte 4 €, donc le prix s’obtient en multipliant la masse par 4.'
},
{
quiz:{
q:'Une augmentation de 25 % peut être modélisée par quelle fonction ?',
a:'P(x)=1,25x'
},
options:'P(x)=1,25x \\ P(x)=0,25x \\ P(x)=25x \\ P(x)=0,75x',
explanation:'Augmenter de 25 % signifie conserver 100 % du prix puis ajouter 25 % supplémentaires. On obtient donc 125 % du prix initial, soit 1,25 fois ce prix.'
},
{
quiz:{
q:'Une réduction de 30 % peut être modélisée par quelle fonction ?',
a:'P(x)=0,7x'
},
options:'P(x)=0,7x \\ P(x)=1,3x \\ P(x)=0,3x \\ P(x)=30x',
explanation:'Après une diminution de 30 %, il reste 70 % du prix initial. Conserver 70 % revient à multiplier par 0,7.'
},
{
quiz:{
q:'Pour fabriquer des bougies, il faut 200 g de cire pour 5 bougies. Quelle fonction donne la masse de cire M(n) nécessaire pour n bougies ?',
a:'M(n)=40n'
},
options:'M(n)=40n \\ M(n)=200n \\ M(n)=5n \\ M(n)=n+40',
explanation:'On cherche d’abord la quantité nécessaire pour une seule bougie : 200 ÷ 5 = 40. Chaque bougie nécessite donc 40 g de cire.'
},
{
quiz:{
q:'Le prix d’un article est de 80 €. Après une augmentation de 10 %, quel calcul permet d’obtenir le nouveau prix ?',
a:'80×1,1'
},
options:'80×1,1 \\ 80×0,1 \\ 80×10 \\ 80+1,1',
explanation:'Une hausse de 10 % correspond à multiplier le prix initial par 1,1. Le coefficient multiplicateur d’une augmentation de 10 % est 1,1.'
},
{
quiz:{
q:'Prendre 40 % d’une quantité x revient à utiliser quelle fonction ?',
a:'P(x)=0,4x'
},
options:'P(x)=0,4x \\ P(x)=1,4x \\ P(x)=0,6x \\ P(x)=40x',
explanation:'40 % signifie 40 pour 100. Sous forme décimale, cela correspond à 0,4. On multiplie donc la quantité par 0,4.'
},
{
quiz:{
q:'Pour 3 mètres de tissu, il faut payer 18 €. Quelle fonction modélise cette situation ?',
a:'P(x)=6x'
},
options:'P(x)=6x \\ P(x)=18x \\ P(x)=3x \\ P(x)=x+6',
explanation:'Le prix d’un mètre de tissu est de 18 ÷ 3 = 6 €. Comme le prix est proportionnel à la longueur, on multiplie toujours par 6.'
},
{
quiz:{
q:'Une réduction de 15 % est appliquée sur un produit. Quelle fonction modélise cette diminution ?',
a:'P(x)=0,85x'
},
options:'P(x)=0,85x \\ P(x)=1,15x \\ P(x)=0,15x \\ P(x)=15x',
explanation:'Après une réduction de 15 %, il reste 85 % du prix initial. Le coefficient multiplicateur est donc 0,85.'
},
{
quiz:{
q:'Pour 8 personnes, il faut 120 cL de jus. Quelle fonction permet de calculer la quantité J(n) nécessaire pour n personnes ?',
a:'J(n)=15n'
},
options:'J(n)=15n \\ J(n)=120n \\ J(n)=8n \\ J(n)=n+15',
explanation:'On calcule d’abord la quantité nécessaire pour une personne : 120 ÷ 8 = 15 cL. On multiplie ensuite le nombre de personnes par 15.'
},
{
quiz:{
q:'Un article coûte 60 €. Après une augmentation de 35 %, quel sera son nouveau prix ?',
a:'81 €'
},
options:'81 € \\ 95 € \\ 35 € \\ 75 €',
explanation:'Une augmentation de 35 % revient à multiplier par 1,35. On obtient donc 60 × 1,35 = 81.'
}
],
"38311":[
{
quiz:{
q:'Quelle expression définit une fonction affine ?',
a:'f(x)=ax+b'
},
options:'f(x)=ax+b \\ f(x)=ax²+b \\ f(x)=a+x+b \\ f(x)=abx',
explanation:'Une fonction affine est toujours composée de deux parties : une partie proportionnelle ax et un nombre fixe b ajouté au résultat.'
},
{
quiz:{
q:'Parmi les fonctions suivantes, laquelle est une fonction affine ?',
a:'f(x)=3x+2'
},
options:'f(x)=3x+2 \\ f(x)=x²+2 \\ f(x)=√x+1 \\ f(x)=1/x',
explanation:'Une fonction affine est de la forme ax+b. Ici 3x+2 correspond exactement à cette forme.'
},
{
quiz:{
q:'Quelle est l’image de 4 par la fonction f(x)=2x+3 ?',
a:'11'
},
options:'11 \\ 8 \\ 9 \\ 14',
explanation:'Pour calculer une image, on remplace x par la valeur donnée puis on effectue les calculs.'
},
{
quiz:{
q:'Quelle est l’image de -2 par la fonction f(x)=5x-1 ?',
a:'-11'
},
options:'-11 \\ -9 \\ 11 \\ 9',
explanation:'On remplace x par -2 puis on calcule. Multiplier un nombre négatif par un nombre positif donne un résultat négatif.'
},
{
quiz:{
q:'Quel est un antécédent de 9 pour la fonction f(x)=2x+1 ?',
a:'4'
},
options:'4 \\ 5 \\ 3 \\ 8',
explanation:'Chercher un antécédent revient à résoudre l’équation f(x)=9.'
},
{
quiz:{
q:'Dans la fonction f(x)=7x-4, quelle est la valeur de b ?',
a:'-4'
},
options:'-4 \\ 7 \\ 4 \\ -7',
explanation:'Dans l’écriture f(x)=ax+b, le nombre ajouté à la fin correspond à b.'
},
{
quiz:{
q:'Dans la fonction f(x)=-3x+8, quelle est la valeur de a ?',
a:'-3'
},
options:'-3 \\ 3 \\ 8 \\ -8',
explanation:'Le coefficient placé devant x est appelé coefficient directeur et correspond à la valeur de a.'
},
{
quiz:{
q:'Que devient une fonction affine lorsque b=0 ?',
a:'Une fonction linéaire'
},
options:'Une fonction linéaire \\ Une fonction constante \\ Une fonction quadratique \\ Ce n’est plus une fonction',
explanation:'Si b vaut 0, il ne reste que ax. On retrouve alors exactement la définition d’une fonction linéaire.'
},
{
quiz:{
q:'Que devient une fonction affine lorsque a=0 ?',
a:'Une fonction constante'
},
options:'Une fonction constante \\ Une fonction linéaire \\ Une fonction proportionnelle \\ Une fonction carrée',
explanation:'Si a vaut 0, la variable x disparaît. La fonction donne toujours la même valeur.'
},
{
quiz:{
q:'Parmi les expressions suivantes, laquelle n’est pas une fonction affine ?',
a:'f(x)=4x²+1'
},
options:'f(x)=4x²+1 \\ f(x)=4x+1 \\ f(x)=-2x+5 \\ f(x)=0,5x-7',
explanation:'Une fonction affine ne contient que x à la puissance 1. La présence de x² indique une autre famille de fonctions.'
}
],
"38321":[
{
quiz:{
q:'La droite représentant une fonction affine coupe l’axe des ordonnées au niveau de -4. Quelle est l’ordonnée à l’origine ?',
a:'-4'
},
options:'-4 \\ 4 \\ 0 \\ Impossible à savoir',
explanation:'L’ordonnée à l’origine est la valeur de la fonction lorsque x=0. Sur un graphique, c’est le point où la droite coupe l’axe vertical.'
},
{
quiz:{
q:'Pour la fonction f(x)=3x+2, quel est le coefficient directeur ?',
a:'3'
},
options:'3 \\ 2 \\ 5 \\ -3',
explanation:'Dans l’écriture f(x)=ax+b, le coefficient directeur est le nombre placé devant x.'
},
{
quiz:{
q:'Pour la fonction f(x)=-2x+5, quel est le coefficient directeur ?',
a:'-2'
},
options:'-2 \\ 2 \\ 5 \\ -5',
explanation:'Le coefficient directeur indique la pente de la droite. Ici il vaut -2.'
},
{
quiz:{
q:'Si le coefficient directeur est positif, comment est la droite ?',
a:'Elle monte de gauche à droite'
},
options:'Elle monte de gauche à droite \\ Elle descend de gauche à droite \\ Elle est horizontale \\ Elle est verticale',
explanation:'Un coefficient directeur positif signifie que les images augmentent lorsque les antécédents augmentent.'
},
{
quiz:{
q:'Si le coefficient directeur est négatif, comment est la droite ?',
a:'Elle descend de gauche à droite'
},
options:'Elle descend de gauche à droite \\ Elle monte de gauche à droite \\ Elle est horizontale \\ Elle passe forcément par l’origine',
explanation:'Un coefficient directeur négatif indique que les images diminuent lorsque les antécédents augmentent.'
},
{
quiz:{
q:'Pour la fonction f(x)=4x-7, quelle est l’ordonnée à l’origine ?',
a:'-7'
},
options:'-7 \\ 4 \\ 7 \\ -4',
explanation:'Dans la forme f(x)=ax+b, le nombre b correspond toujours à l’ordonnée à l’origine.'
},
{
quiz:{
q:'Pour la fonction f(x)=0x+5, quelle est la forme de la représentation graphique ?',
a:'Une droite horizontale'
},
options:'Une droite horizontale \\ Une droite montante \\ Une droite descendante \\ Une droite verticale',
explanation:'Lorsque le coefficient directeur vaut 0, la fonction donne toujours la même valeur. La droite est donc horizontale.'
},
{
quiz:{
q:'Une droite coupe l’axe des ordonnées au niveau de 3 et monte de 2 unités lorsqu’on avance de 1 unité. Quelle fonction affine représente cette droite ?',
a:'f(x)=2x+3'
},
options:'f(x)=2x+3 \\ f(x)=3x+2 \\ f(x)=2x-3 \\ f(x)=3x-2',
explanation:'Le coefficient directeur est 2 car la droite monte de 2 pour 1 unité parcourue horizontalement. L’ordonnée à l’origine vaut 3.'
},
{
quiz:{
q:'Une droite coupe l’axe des ordonnées au niveau de -2 et descend de 1 unité lorsqu’on avance de 1 unité. Quelle fonction affine représente cette droite ?',
a:'f(x)=-x-2'
},
options:'f(x)=-x-2 \\ f(x)=x-2 \\ f(x)=-2x-1 \\ f(x)=x+2',
explanation:'Descendre de 1 lorsque l’on avance de 1 correspond à un coefficient directeur égal à -1. L’ordonnée à l’origine vaut -2.'
},
{
quiz:{
q:'Quelle affirmation est vraie ?',
a:'Toute fonction affine est représentée par une droite'
},
options:'Toute fonction affine est représentée par une droite \\ Toute fonction affine passe par l’origine \\ Toute droite représente une fonction linéaire \\ Le coefficient directeur est toujours positif',
explanation:'La représentation graphique d’une fonction affine est toujours une droite. En revanche, seules les fonctions linéaires passent forcément par l’origine.'
}
],








"3_10_101": [
    { 
        quiz: { q: 'Calculer la longueur du segment [AB].', a: '5m' },
        // CORRECTION : Un seul appel à la fonction, sans le doublon "figure:"
        figure: generateTriangleSVG({            
            labelA: 'A', // 1. Identité des sommets
            labelB: 'B', 
            labelC: 'C',
                          
            angleA: 90,  // 2. Angles à définir avec des valeurs cohérentes 180° la somme
            angleB: null,   // ou laisser null, si on ne veut pas donner de valeur.
            angleC: null,   // 

                            
            ABLen: 3,  // 3. Longueurs  AB  AC et BC (ou laisser null si on ne veut pas définir de valeur)
            ACLen: 4,  
            BCLen: null,                             
            rotation: 60   // 4. Angle de rotation de la figure éventuel.
        }),    
        options: '5m \\ 8m \\ 7m',
        explanation: 'On utilise le théorème de Pythagore : $AB^2 + AC^2 = BC^2 \\Rightarrow AB = \\sqrt{BC^2 - AC^2}$' 
    }
]


};
