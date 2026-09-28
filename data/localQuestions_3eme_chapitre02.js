// ============================================================
// data/localQuestions_3eme_chapitre02.js — 3ème, chapitre 2 : Arithmétique
// ============================================================
// Généré à partir de l'ancien data/localQuestions.js.
// Clés renumérotées au format 6 chiffres : [niveau][chapitre 2 chiffres]
// [n° partie H2][n° sous-partie H3][n° questionnaire dans la sous-partie].
// Contenu des questions strictement inchangé, seule la clé a changé —
// voir le rapport de correspondance mapping_3eme.csv pour
// retrouver l'ancienne clé de chaque questionnaire.
// ============================================================

const localQuestions_3eme_chapitre02 = {
    "302111": [
                                        { 
                                            quiz: { q: 'Dans la division euclidienne de 45 par 6, quel est le quotient ?', a: '7' }, 
                                            options: '6 ¤ 7 ¤ 8 ¤ 45', 
                                            explanation: 'Erreur classique : prendre le reste (3) ou le dividende (45). On cherche combien de fois 6 rentre dans 45. $6 \\times 7 = 42$.' 
                                        },
                                        { 
                                            quiz: { q: 'Dans la division euclidienne de 45 par 6, quel est le reste ?', a: '3' }, 
                                            options: '7 ¤ 3 ¤ 6 ¤ 42', 
                                            explanation: 'Erreur classique : confondre avec le quotient (7) ou le produit (42). Le reste est la différence : $45 - 42 = 3$.' 
                                        },
                                        { 
                                            quiz: { q: 'Compléter l\'égalité : $86 = 3 \\times 28 + ...$', a: '2' }, 
                                            options: '0 ¤ 2 ¤ 14 ¤ 28', 
                                            explanation: 'Erreur classique : oublier de calculer la différence. $3 \\times 28 = 84$, donc il manque 2 pour arriver à 86.' 
                                        },
                                        { 
                                            quiz: { q: 'Si $a=23, b=3$ et $q=7$, quelle est la valeur de $r$ ?', a: '2' }, 
                                            options: '7 ¤ 1 ¤ 2 ¤ 0', 
                                            explanation: 'On utilise $r = a - (b \\times q)$. Ici $23 - 21 = 2$.' 
                                        },
                                        { 
                                            quiz: { q: 'Le nombre 50 est-il divisible par 7 ?', a: 'non' }, 
                                            options: 'oui ¤ non ¤ peut-être ¤ 7', 
                                            explanation: 'Un nombre est divisible si le reste est 0. Ici $50 = 7 \\times 7 + 1$, le reste est 1.' 
                                        },
                                        { 
                                            quiz: { q: 'Quel est le quotient de la division de 125 par 10 ?', a: '12' }, 
                                            options: '10 ¤ 12 ¤ 5 ¤ 12,5', 
                                            explanation: 'Erreur classique : donner le résultat décimal (12,5) au lieu du quotient entier de la division euclidienne.' 
                                        },
                                        { 
                                            quiz: { q: 'Quel est le reste de la division de 125 par 10 ?', a: '5' }, 
                                            options: '12 ¤ 10 ¤ 5 ¤ 0', 
                                            explanation: 'Dans $125 = 10 \\times 12 + 5$, le reste est bien 5.' 
                                        },
                                        { 
                                            quiz: { q: 'Un pâtissier a 38 macarons. Il fait des paquets de 4. Combien de macarons lui restera-t-il ?', a: '2' }, 
                                            options: '9 ¤ 4 ¤ 2 ¤ 38', 
                                            explanation: 'Erreur classique : donner le nombre de paquets (le quotient = 9) au lieu du reste.' 
                                        },
                                        { 
                                            quiz: { q: 'Un pâtissier a 38 macarons. Il fait des paquets de 4. Combien de paquets peut-il faire ?', a: '9' }, 
                                            options: '2 ¤ 9 ¤ 10 ¤ 38', 
                                            explanation: 'Erreur classique : donner le reste (2) au lieu du quotient.' 
                                        },
                                        { 
                                            quiz: { q: 'Si le reste d\'une division est 0, on dit que le nombre est...', a: 'divisible' }, 
                                            options: 'premier ¤ impair ¤ divisible ¤ nul', 
                                            explanation: 'Par définition, si $r=0$, alors $a = b \\times q$, donc $a$ est divisible par $b$.' 
                                        }
                                    ],

    "302211": [
                        { 
                            quiz: { q: 'Si $20$ est un multiple de $4$, alors 4 est un...', a: 'diviseur de 20' }, 
                            options: 'multiple de 20 ¤ diviseur de 20 ¤ quotient de 20 ¤ reste de 20', 
                            explanation: 'Si 20=4 $\\times 5$ (multiple de 4) Alors 20/4=5 (4 est forcément diviseur de 20)' 
                        },
                        { 
                            quiz: { q: 'Parmi ces propositions, laquelle est correcte pour $12$ et $3$ ?', a: '12 est un multiple de 3' }, 
                            options: '3 est un multiple de 12 ¤ 12 est un diviseur de 3 ¤ 12 est un multiple de 3 ¤ 3 divise 12 et 12 divise 3', 
                            explanation: 'On vérifie : $3 \\times 4 = 12$. Donc 12 est bien le multiple.' 
                        },
                        { 
                            quiz: { q: 'Si je dis "15 divise 45", cela signifie que 15 est un...', a: 'diviseur de 45' }, 
                            options: 'multiple de 45 ¤ diviseur de 45 ¤ reste de 45 ¤ quotient de 45', 
                            explanation: 'Le verbe "diviser" désigne l\'action du petit nombre sur le grand.' 
                        },
                        { 
                            quiz: { q: 'Si $a$ est un multiple de $b$, alors $b$ est un...', a: 'diviseur de a' }, 
                            options: 'multiple de a ¤ diviseur de a ¤ reste de a ¤ quotient de a', 
                            explanation: 'C\'est la définition même de la relation entre multiple et diviseur.' 
                        },
                        { 
                            quiz: { q: 'Le nombre 48 est-il un multiple de 6 ?', a: 'oui' }, 
                            options: 'oui ¤ non ¤ peut-être ¤ seulement si on divise par 2', 
                            explanation: 'On vérifie dans la table de 6 : $6 \\times 8 = 48$. La réponse est oui.' 
                        },
                        { 
                            quiz: { q: 'Le nombre 7 est-il un diviseur de 25 ?', a: 'non' }, 
                            options: 'oui ¤ non ¤ seulement si on divise par 3 ¤ c\'est un multiple', 
                            explanation: 'Dans la table de 7, on a $7 \\times 3 = 21$ et $7 \\times 4 = 28$. On ne tombe pas sur 25.' 
                        },
                        { 
                            quiz: { q: 'Lequel de ces nombres est un multiple de 10 ?', a: '30' }, 
                            options: '2 ¤ 5 ¤ 30 ¤ 15', 
                            explanation: 'Un multiple de 10 se termine toujours par 0. Ici, seul 30 convient ($10 \\times 3 = 30$).' 
                        },
                        { 
                            quiz: { q: 'Lequel de ces nombres est un diviseur de 24 ?', a: '8' }, 
                            options: '5 ¤ 7 ¤ 8 ¤ 10', 
                            explanation: 'On cherche un nombre qui divise 24 sans reste. $24 = 8 \\times 3$, donc 8 est un diviseur.' 
                        },
                        { 
                            quiz: { q: 'Lequel de ces nombres est divisible par 5 ?', a: '35' }, 
                            options: '12 ¤ 35 ¤ 41 ¤ 22', 
                            explanation: 'Un nombre est divisible par 5 s\'il se termine par 0 ou 5. Ici, c\'est le cas pour 35.' 
                        },
                        { 
                            quiz: { q: 'Lequel de ces nombres est un multiple de 7 ?', a: '49' }, 
                            options: '1 ¤ 49 ¤ 15 ¤ 20', 
                            explanation: 'On cherche dans la table de 7. $7 \\times 7 = 49$.'
                        }
                    ],

    "302212": [
                    { 
                        quiz: { q: 'Quels sont les diviseurs communs de 12 et 18 ?', a: '1, 2, 3, 6' }, 
                        options: '1, 2, 3, 4 ¤ 1, 2, 3, 6 ¤ 2, 3, 6, 9 ¤ 1, 3, 6, 12', 
                        explanation: 'Les diviseurs de 12 sont {1,2,3,4,6,12}. Les diviseurs de 18 sont {1,2,3,6,9,18}. Les points communs sont {1,2,3,6}.' 
                    },
                    { 
                        quiz: { q: 'Quel est le plus grand diviseur commun (PGCD) de 20 et 30 ?', a: '10' }, 
                        options: '5 ¤ 10 ¤ 2 ¤ 20', 
                        explanation: 'Les diviseurs communs sont 1, 2, 5 et 10. Le plus grand est 10.' 
                    },
                    { 
                        quiz: { q: 'Le nombre 4 est-il un diviseur commun à 12 et 20 ?', a: 'oui' }, 
                        options: 'oui ¤ non ¤ peut-être ¤ seulement pour 12', 
                        explanation: '12 est divisible par 4 ($3 \\times 4$) ET 20 est divisible par 4 ($5 \\times 4$). Donc oui.' 
                    },
                    { 
                        quiz: { q: 'Le nombre 3 est-il un diviseur commun à 15 et 25 ?', a: 'non' }, 
                        options: 'oui ¤ non ¤ seulement pour 15 ¤ c\'est un multiple' , 
                        explanation: '3 divise bien 15, mais il ne divise pas 25. Il n\'est donc pas "commun".' 
                    },
                    { 
                        quiz: { q: 'Trouver un diviseur commun à 8 et 12.', a: '4' }, 
                        options: '3 ¤ 4 ¤ 6 ¤ 8', 
                        explanation: '4 divise 8 ($2 \\times 4$) et 4 divise 12 ($3 \\times 4$).' 
                    },
                    { 
                        quiz: { q: 'Quel est le plus petit diviseur commun (autre que 1) de 14 et 21 ?', a: '7' }, 
                        options: '2 ¤ 3 ¤ 7 ¤ 14', 
                        explanation: 'Les diviseurs de 14 sont {1,2,7,14}. Les diviseurs de 21 sont {1,3,7,21}. Le seul commun (autre que 1) est 7.' 
                    },
                    { 
                        quiz: { q: 'Si un nombre divise à la fois 10 et 15, est-il forcément un diviseur de 5 ?', a: 'oui' }, 
                        options: 'oui ¤ non ¤ peut-être ¤ seulement si c\'est 1', 
                        explanation: 'Les diviseurs communs de 10 et 15 sont 1 et 5. Ils divisent tous les deux 5.' 
                    },
                    { 
                        quiz: { q: 'Trouver un diviseur commun à 36 et 48.', a: '12' }, 
                        options: '6 ¤ 9 ¤ 12 ¤ 18', 
                        explanation: '12 divise 36 ($3 \\times 12$) et 12 divise 48 ($4 \\times 12$).' 
                    },
                    { 
                        quiz: { q: 'Le nombre 9 est-il un diviseur commun à 18 et 27 ?', a: 'oui' }, 
                        options: 'oui ¤ non ¤ seulement pour 18 ¤ seulement pour 27', 
                        explanation: '18 = $9 \\times 2$ et 27 = $9 \\times 3$. Donc 9 est commun.' 
                    },
                    { 
                        quiz: { q: 'Quel est le plus grand diviseur commun de 16 et 24 ?', a: '8' }, 
                        options: '2 ¤ 4 ¤ 8 ¤ 12', 
                        explanation: 'Les diviseurs de 16 sont {1,2,4,8,16}. Les diviseurs de 24 sont {1,2,3,4,6,8,12,24}. Le plus grand commun est 8.' 
                    }
                ],

    "302221": [ 
    { 
        quiz: { q: 'Le nombre 456 est-il divisible par 2 ?', a: 'oui' }, 
        options: 'oui ¤ non ¤ seulement si on divise par 3 ¤ peut-être', 
        explanation: 'Un nombre est divisible par 2 si son chiffre des unités est pair. Ici, c\'est 6, donc oui.' 
    },
    { 
        quiz: { q: 'Le nombre 785 est-il divisible par 5 ?', a: 'oui' }, 
        options: 'oui ¤ non ¤ seulement si on divise par 10 ¤ uniquement pour 7', 
        explanation: 'Un nombre est divisible par 5 s\'il se termine par 0 ou 5. Ici, il se termine par 5.' 
    },
    { 
        quiz: { q: 'Le nombre 123 est-il divisible par 3 ?', a: 'oui' }, 
        options: 'oui ¤ non ¤ seulement si c\'est  pair ¤ uniquement pour 10', 
        explanation: 'On fait la somme des chiffres : $1 + 2 + 3 = 6$. Comme 6 est dans la table de 3, alors 123 est divisible par 3.' 
    },
    { 
        quiz: { q: 'Le nombre 819 est-il divisible par 9 ?', a: 'oui' }, 
        options: 'oui ¤ non ¤ seulement pour 3 ¤ uniquement si c\'est  pair', 
        explanation: 'Somme des chiffres : $8 + 1 + 9 = 18$. Comme 18 est dans la table de 9, alors 819 est divisible par 9.' 
    },
    { 
        quiz: { q: 'Lequel de ces nombres est divisible par 10 ?', a: '740' }, 
        options: '74 ¤ 745 ¤ 740 ¤ 74,5', 
        explanation: 'Un nombre est divisible par 10 s\'il se termine impérativement par 0.' 
    },
    { 
        quiz: { q: 'Le nombre 274 est-il divisible par 3 ?', a: 'non' }, 
        options: 'oui ¤ non ¤ seulement pour 2 ¤ uniquement si c\'est  pair', 
        explanation: 'Somme des chiffres : $2 + 7 + 4 = 13$. 13 n\'est pas dans la table de 3, donc non.' 
    },
    { 
        quiz: { q: 'Le nombre 99 est-il divisible par 9 ?', a: 'oui' }, 
        options: 'oui ¤ non ¤ seulement pour 10 ¤ uniquement si c\'est  pair', 
        explanation: 'Somme des chiffres : $9 + 9 = 18$. 18 est dans la table de 9, donc oui.' 
    },
    { 
        quiz: { q: 'Lequel de ces nombres est divisible par 2 et par 5 ?', a: '40' }, 
        options: '15 ¤ 22 ¤ 40 ¤ 45', 
        explanation: 'Pour être divisible par 2 et 5, il doit être divisible par 10 (se terminer par 0). Seul 40 convient.' 
    },
    { 
        quiz: { q: 'Le nombre 1 002 est-il divisible par 3 ?', a: 'oui' }, 
        options: 'oui ¤ non ¤ seulement pour 10 ¤ uniquement si c\'est  pair', 
        explanation: 'Somme des chiffres : $1 + 0 + 0 + 2 = 3$. Comme 3 est dans la table de 3, alors oui.' 
    },
    { 
        quiz: { q: 'Le nombre 81 est-il divisible par 9 ?', a: 'oui' }, 
        options: 'oui ¤ non ¤ seulement pour 2 ¤ uniquement si c\'est  pair', 
        explanation: 'Somme des chiffres : $8 + 1 = 9$. Comme 9 est dans la table de 9, alors oui.' 
    }
],

    "302231": [   { 
        quiz: { q: 'Pour trouver tous les diviseurs d\'un nombre $N$, jusqu\'à quel nombre entier doit-on tester la divisibilité ?', a: '$\\sqrt{N}$' }, 
        options: '$\\sqrt{N}$ ¤ $N$ ¤ $N/2$ ¤ $10$', 
        explanation: 'On teste jusqu\'à $\\sqrt{N}$ car si un diviseur est supérieur à la racine carrée, son partenaire (le quotient) sera forcément inférieur à la racine carrée, et on l\'aura déjà trouvé.' 
    },
    { 
        quiz: { q: 'Déterminer tous les diviseurs de $45$.', a: '1, 3, 5, 9, 15, 45' }, 
        options: '1, 3, 5, 9, 15, 45 ¤ 1, 5, 9, 45 ¤ 1, 3, 5, 15 ¤ 3, 5, 9, 15', 
        explanation: 'On teste de 1 à $\\sqrt{45} \\approx 6,7$. On trouve : $1\\times45$, $3\\times15$ et $5\\times9$. La liste complète est donc $\{1, 3, 5, 9, 15, 45\}$.' 
    },
    { 
        quiz: { q: 'Si on cherche les diviseurs de $36$, quel est le dernier nombre entier qu\'il faut tester selon la méthode ?', a: '6' }, 
        options: '6 ¤ 18 ¤ 9 ¤ 36', 
        explanation: '$\\sqrt{36} = 6$. On doit donc tester tous les entiers de $1$ jusqu\'à $6$.' 
    },
    { 
        quiz: { q: 'Le nombre $45$ est-il divisible par $4$ ?', a: 'non' }, 
        options: 'oui ¤ non', 
        explanation: 'On peut utiliser les critères : $45$ est impair, donc il n\'est pas divisible par un nombre pair comme $4$.' 
    },
    { 
        quiz: { q: 'Trouver tous les diviseurs de $13$.', a: '1, 13' }, 
        options: '1, 13 ¤ 1, 13, 26 ¤ Aucun ¤ 1, 2, 13', 
        explanation: '13 est un nombre premier. Il n\'a que deux diviseurs : 1 et lui-même.' 
    },
    { 
        quiz: { q: 'Si $N=100$, quel est le plus grand nombre entier à tester pour trouver tous les diviseurs ?', a: '10' }, 
        options: '10 ¤ 50 ¤ 25 ¤ 100', 
        explanation: '$\\sqrt{100} = 10$. On teste donc jusqu\'à $10$.' 
    },
    { 
        quiz: { q: 'Parmi ces listes, laquelle contient tous et uniquement les diviseurs de $24$ ?', a: '1, 2, 3, 4, 6, 8, 12, 24' }, 
        options: '1, 2, 3, 4, 6, 8, 12, 24 ¤ 1, 2, 4, 6, 8, 10, 12, 24 ¤ 2, 3, 4, 6, 8, 12 ¤ 1, 3, 4, 6, 8, 12, 24', 
        explanation: 'On vérifie : $24/1=24$, $24/2=12$, $24/3=8$, $24/4=6$, $24/6=4$, etc. Tous les nombres de la première liste divisent 24.' 
    },
    { 
        quiz: { q: 'Pourquoi ne teste-t-on pas tous les nombres jusqu\'à $N$ ?', a: 'C est trop long' }, 
        options: 'C est trop long ¤ C est impossible ¤ La racine suffit', 
        explanation: 'Tester jusqu\'à $\\sqrt{N}$ est beaucoup plus rapide et mathématiquement suffisant pour trouver tous les couples de diviseurs.' 
    },
    {
        quiz: { q: 'Si je teste tous les diviseurs jusqu\'a 100. De quel est le nombre que j\'étudie?', a: '10000' }, 
        options: '10 ¤ 100 ¤ 1000 ¤ 10000', 
        explanation: '10000 car 100 $\\times$ 100=10000 donc $\\sqrt{10000}$=100' 
    }
     

],

    "302311": [    //Liste des nombres premiers inférieurs à 30
{ 
        quiz: { q: 'Parmi ces nombres, lequel est un nombre premier ?', a: '17' }, 
        options: '9 ¤ 15 ¤ 17 ¤ 21', 
        explanation: '9 est $3\\times3$, 15 est $3\\times5$, 21 est $3\\times7$. Seul 17 n\'est divisible que par 1 et lui-même.' 
    },
    { 
        quiz: { q: 'Quel est le seul nombre premier pair ?', a: '2' }, 
        options: '0 ¤ 1 ¤ 2 ¤ 4', 
        explanation: 'Tous les autres nombres pairs sont divisibles par 2, donc ils ne peuvent pas être premiers.' 
    },
    { 
        quiz: { q: 'Le nombre 1 est-il un nombre premier ?', a: 'non' }, 
        options: 'oui ¤ non', 
        explanation: 'Par définition, un nombre premier doit avoir exactement DEUX diviseurs (1 et lui-même). 1 n\'en a qu\'un seul.' 
    },
    { 
        quiz: { q: '21 est il un nombre premier', a: 'non' }, 
        explanation: '21 est $3\\times7$. donc il est divisible par 3 et 7' 
    },
    { 
        quiz: { q: 'Lequel de ces nombres n\'est PAS un nombre premier ?', a: '27' }, 
        options: '13 ¤ 19 ¤ 23 ¤ 27', 
        explanation: '27 est divisible par 3 ($3\\times9=27$), ce n\'est donc pas un nombre premier.' 
    },
    { 
        quiz: { q: 'Combien y a-t-il de nombres premiers inférieurs à 20 ?', a: '8' }, 
        options: '7 ¤ 8 ¤ 9 ¤ 10', 
        explanation: 'Les nombres sont : 2, 3, 5, 7, 11, 13, 17 et 19. Il y en a bien 8.' 
    },
    { 
        quiz: { q: 'Le nombre 29 est-il premier ?', a: 'oui' }, 
        options: 'oui ¤ non', 
        explanation: 'On vérifie la divisibilité par les petits nombres premiers (2, 3, 5). 29 n\'est divisible par aucun d\'eux.' 
    },
    { 
        quiz: { q: 'Quel est le plus grand nombre premier inférieur à 30 ?', a: '29' }, 
        options: '23 ¤ 27 ¤ 29 ¤ 31', 
        explanation: '29 est premier et c\'est le dernier de la liste avant 30.' 
    },
    { 
        quiz: { q: 'Parmi ces nombres, lequel est divisible par 3 mais n\'est PAS premier ?', a: '15' }, 
        options: '3 ¤ 7 ¤ 15 ¤ 19', 
        explanation: '3 est premier. 7 et 19 sont premiers. 15 est divisible par 3 ($3\\times5$), donc il n\'est pas premier.' 
    },
    { 
        quiz: { q: 'Si un nombre se termine par 5 (et est supérieur à 5), est-il premier ?', a: 'non' }, 
        options: 'oui ¤ non', 
        explanation: 'Tous les nombres se terminant par 5 sont divisibles par 5, ils ne peuvent donc pas être premiers (sauf le nombre 5 lui-même).' 
    }
],

    "302312": [   //🚀 Méthode 📝 Exercice : Décomposer en produit de facteurs
 { 
        quiz: { q: 'Décomposer en produit de facteurs premiers : $36$', a: '$2^2 \\times 3^2$' }, 
        options: '$2 \\times 2 \\times 3 \\times 3$ ¤ $2 \\times 3 \\times 6$ ¤ $1 \\times 2 \\times 2 \\times 3 \\times 3$ ¤ $4 \\times 9$', 
        explanation: 'Méthode 1 : $36/2=18 \\rightarrow 18/2=9 \\rightarrow 9/3=3 \\rightarrow 3/3=1$. Donc $36 = 2 \\times 2 \\times 3 \\times 3$. <br>Méthode 2 : $36 = 6 \\times 6$ et $6 = 2 \\times 3$, donc $(2 \\times 3) \\times (2 \\times 3) = 2^2 \\times 3^2$.' 
    },
    { 
        quiz: { q: 'Décomposer en produit de facteurs premiers : $60$', a: '$2^2 \\times 3 \\times 5$' }, 
        options: '$2 \\times 3 \\times 10$ ¤ $2^2 \\times 3 \\times 5$ ¤ $1 \\times 2 \\times 2 \\times 3 \\ 5$ ¤ $4 \\times 15$', 
        explanation: 'Méthode 1 : $60/2=30 \\rightarrow 30/2=15 \\rightarrow 15/3=5 \\rightarrow 5/5=1$. Donc $60 = 2^2 \\times 3 \\times 5$. <br>Méthode 2 : $60 = 6 \\times 10$ et $(2\\times3) \\times (2\\times5) = 2^2 \\times 3 \\times 5$.' 
    },
    { 
        quiz: { q: 'Décomposer en produit de facteurs premiers : $48$', a: '$2^4 \\times 3$' }, 
        options: '$2 \\times 2 \\times 2 \\times 6$ ¤ $2^4 \\times 3$ ¤ $1 \\ 2^4 \\times 3$ ¤ $4 \\times 12$', 
        explanation: 'Méthode 1 : $48/2=24 \\rightarrow 24/2=12 \\rightarrow 12/2=6 \\rightarrow 6/2=3 \\rightarrow 3/3=1$. Donc $48 = 2^4 \\times 3$. <br>Méthode 2 : $48 = 6 \\times 8$ et $(2\\times3) \\times (2^3) = 2^4 \\times 3$.' 
    },
    { 
        quiz: { q: 'Décomposer en produit de facteurs premiers : $50$', a: '$2 \\times 5^2$' }, 
        options: '$2 \\times 5 \\times 5$ ¤ $1 \\ 2 \\times 5^2$ ¤ $5 \\times 10$ ¤ $2 \\times 25$', 
        explanation: 'Méthode 1 : $50/2=25 \\rightarrow 25/5=5 \\rightarrow 5/5=1$. Donc $50 = 2 \\times 5^2$. <br>Méthode 2 : $50 = 5 \\times 10$ et $5 \\times (2 \\times 5) = 2 \\times 5^2$.' 
    },
    { 
        quiz: { q: 'Décomposer en produit de facteurs premiers : $84$', a: '$2^2 \\times 3 \\times 7$' }, 
        options: '$2 \\times 6 \\times 7$ ¤ $2^2 \\times 3 \\times 7$ ¤ $1 \\ 2^2 \\times 3 \\times 7$ ¤ $4 \\times 21$', 
        explanation: 'Méthode 1 : $84/2=42 \\rightarrow 42/2=21 \\rightarrow 21/3=7 \\rightarrow 7/7=1$. Donc $84 = 2^2 \\times 3 \\times 7$. <br>Méthode 2 : $84 = 12 \\times 7$ et $(2^2 \\times 3) \\times 7 = 2^2 \\times 3 \\times 7$.' 
    },
    { 
        quiz: { q: 'Décomposer en produit de facteurs premiers : $75$', a: '$3 \\times 5^2$' }, 
        options: '$3 \\times 25$ ¤ $1 \\ 3 \\times 5^2$ ¤ $3 \\times 5 \\times 5$ ¤ $5 \\times 15$', 
        explanation: 'Méthode 1 : $75/3=25 \\rightarrow 25/5=5 \\rightarrow 5/5=1$. Donc $75 = 3 \\times 5^2$. <br>Méthode 2 : $75 = 3 \\times 25$ et $3 \\times (5 \\times 5) = 3 \\times 5^2$.' 
    },
    { 
        quiz: { q: 'Décomposer en produit de facteurs premiers : $18$', a: '$2 \\times 3^2$' }, 
        options: '$2 \\times 9$ ¤ $1 \\ 2 \\times 3^2$ ¤ $2 \\times 3 \\times 3$ ¤ $3 \\times 6$', 
        explanation: 'Méthode 1 : $18/2=9 \\rightarrow 9/3=3 \\rightarrow 3/3=1$. Donc $18 = 2 \\times 3^2$. <br>Méthode 2 : $18 = 2 \\times 9$ et $2 \\times (3 \\times 3) = 2 \\times 3^2$.' 
    },
    { 
        quiz: { q: 'Décomposer en produit de facteurs premiers : $40$', a: '$2^3 \\times 5$' }, 
        options: '$4 \\times 10$ ¤ $2 \\times 2 \\times 2 \\times 5$ ¤ $1 \\ 2^3 \\times 5$ ¤ $2 \\times 20$', 
        explanation: 'Méthode 1 : $40/2=20 \\rightarrow 20/2=10 \\rightarrow 10/2=5 \\rightarrow 5/5=1$. Donc $40 = 2^3 \\times 5$. <br>Méthode 2 : $40 = 8 \\times 5$ et $2^3 \\times 5$.' 
    },
    { 
        quiz: { q: 'Décomposer en produit de facteurs premiers : $90$', a: '$2 \\times 3^2 \\times 5$' }, 
        options: '$9 \\times 10$ ¤ $2 \\times 3 \\ 3 \\ 5$ ¤ $2 \\times 3^2 \\times 5$ ¤ $1 \\ 2 \\times 3^2 \\times 5$', 
        explanation: 'Méthode 1 : $90/2=45 \\rightarrow 45/3=15 \\rightarrow 15/3=5 \\rightarrow 5/5=1$. Donc $90 = 2 \\times 3^2 \\times 5$. <br>Méthode 2 : $90 = 9 \\times 10$ et $(3^2) \\times (2 \\times 5) = 2 \\times 3^2 \\times 5$.' 
    },
    { 
        quiz: { q: 'Décomposer en produit de facteurs premiers : $28$', a: '$2^2 \\times 7$' }, 
        options: '$4 \\times 7$ ¤ $1 \\ 2^2 \\times 7$ ¤ $2 \\ 2 \\times 7$ ¤ $2 \\ 14$', 
        explanation: 'Méthode 1 : $28/2=14 \\rightarrow 14/2=7 \\rightarrow 7/7=1$. Donc $28 = 2^2 \\times 7$. <br>Méthode 2 : $28 == 4 \\times 7$ et $(2^2) \\times 7 = 2^2 \\times 7$.'
    }
],

    "302411": [ 
    { 
        quiz: { q: 'Simplifier la fraction $\\frac{12}{18}$', a: '2/3' }, 
        options: '6/9 ¤ 2/3 ¤ 3/4 ¤ 4/6', 
        explanation: 'Décomposition : $12 = 2^2 \\times 3$ et $18 = 2 \\times 3^2$. On simplifie par $2 \\times 3 = 6$. Résultat : $\\frac{2}{3}$.' 
    },
    { 
        quiz: { q: 'Simplifier la fraction $\\frac{15}{25}$', a: '3/5' }, 
        options: '5/3 ¤ 3/5 ¤ 1/5 ¤ 3/25', 
        explanation: 'Les diviseurs communs sont 5. $15 = 3 \\times 5$ et $25 = 5 \\times 5$. On simplifie par 5.' 
    },
    { 
        quiz: { q: 'Quelle est la forme irréductible de $\\frac{20}{30}$ ?', a: '2/3' }, 
        options: '10/15 ¤ 4/6 ¤ 2/3 ¤ 20/3', 
        explanation: 'On peut diviser par 10 (ou décomposer : $2^2 \\times 5$ et $2 \\times 3 \\times 5$). On simplifie par $2 \\times 5 = 10$.' 
    },
    { 
        quiz: { q: 'Simplifier $\\frac{14}{21}$', a: '2/3' }, 
        options: '7/3 ¤ 2/3 ¤ 1/2 ¤ 7/7', 
        explanation: 'On remarque que 14 et 21 sont dans la table de 7. $14 = 2 \\times 7$ et $21 = 3 \\ 7$.' 
    },
    { 
        quiz: { q: 'Simplifier $\\frac{8}{12}$', a: '2/3' }, 
        options: '4/6 ¤ 2/3 ¤ 1/2 ¤ 4/3', 
        explanation: 'Décomposition : $8 = 2^3$ et $12 = 2^2 \\times 3$. On simplifie par $2^2 = 4$.' 
    },
    { 
        quiz: { q: 'Simplifier $\\frac{45}{60}$', a: '3/4' }, 
        options: '9/12 ¤ 3/4 ¤ 15/20 ¤ 5/6', 
        explanation: 'Décomposition : $45 = 3^2 \\times 5$ et $60 = 2^2 \\times 3 \\times 5$. On simplifie par $3 \\times 5 = 15$.' 
    },
    { 
        quiz: { q: 'Simplifier $\\frac{24}{36}$', a: '2/3' }, 
        options: '12/18 ¤ 4/6 ¤ 2/3 ¤ 6/9', 
        explanation: 'Décomposition : $24 = 2^3 \\times 3$ et $36 = 2^2 \\times 3^2$. On simplifie par $2^2 \\times 3 = 12$.' 
    },
    { 
        quiz: { q: 'Simplifier $\\frac{50}{75}$', a: '2/3' }, 
        options: '5/7 ¤ 2/3 ¤ 10/15 ¤ 1/3', 
        explanation: 'On remarque que 50 et 75 sont dans la table de 25. $50 = 2 \\times 25$ et $75 = 3 \\times 25$.' 
    },
    { 
        quiz: { q: 'Par quel nombre doit-on diviser $\\frac{18}{42}$ pour la simplifier au maximum ?', a: '6' }, 
        options: '2 ¤ 3 ¤ 6 ¤ 9', 
        explanation: 'Décomposition : $18 = 2 \\times 3^2$ et $42 = 2 \\times 3 \\times 7$. Le plus grand diviseur commun est $2 \\times 3 = 6$.' 
    },
    { 
        quiz: { q: 'Quelle est la décomposition de 12 en facteurs premiers ?', a: '2^2 x 3' }, 
        options: '2 x 6 ¤ 3 x 4 ¤ $\\2^{2}2 \\times 3$ ¤ 12 x 1', 
        explanation: 'C\'est une étape clé : $12 = 2 \\times 6 = 2 \\times 2 \\times 3$, soit $2^2 \\times 3$.' 
    }
],

    "302511": [
    // --- PROBLÈMES DE DIVISEUR COMMUN (4 questions) ---
    { 
        quiz: { q: 'Un fleuriste a 48 roses et 60 tulipes. Il veut faire des bouquets identiques avec le même nombre de fleurs dans chaque bouquet, sans qu\'il n\'en reste. Quel type de problème est-ce ?', a: 'Diviseur commun' }, 
        options: 'Diviseur commun ¤ Multiple commun ¤ Autre', 
        explanation: 'On cherche à partager/diviser des quantités en groupes égaux. Le nombre de bouquets sera forcément plus petit que 48 et 60, c\'est donc un problème de diviseur.' 
    },
    { 
        quiz: { q: 'On veut répartir 36 bonbons et 42 chocolats dans des sachets de même taille. Quel type de problème est-ce ?', a: 'Diviseur commun' }, 
        options: 'Diviseur commun ¤ Multiple commun ¤ Autre', 
        explanation: 'On cherche à diviser les deux quantités en parts égales. On cherche un nombre qui "divise" 36 et 42.' 
    },
    { 
        quiz: { q: 'Un professeur veut répartir ses 24 élèves de 6ème et ses 30 élèves de 5ème en groupes de même effectif pour une activité. Quel type de problème est-ce ?', a: 'Diviseur commun' }, 
        options: 'Diviseur commun ¤ Multiple commun ¤ Autre', 
        explanation: 'On cherche à couper les effectifs en petits groupes égaux. On cherche un diviseur commun.' 
    },
    { 
        quiz: { q: 'Une entreprise possède deux stocks de pièces : 120 vis et 150 écrous. Elle veut créer des kits identiques contenant le même nombre de chaque pièce. Quel type de problème est-ce ?', a: 'Diviseur commun' }, 
        options: 'Diviseur commun ¤ Multiple commun ¤ Autre', 
        explanation: 'On cherche à répartir les pièces dans des kits. Le nombre de kits sera plus petit que le stock, on cherche donc un diviseur.' 
    },

    // --- PROBLÈMES DE MULTIPLE COMMUN (4 questions) ---
    { 
        quiz: { q: 'Un bus passe toutes les 15 minutes et un autre toutes les 20 minutes. S\'ils partent ensemble à midi, dans combien de minutes se retrouveront-ils à nouveau ensemble au terminus ?', a: 'Multiple commun' }, 
        options: 'Diviseur commun ¤ Multiple commun ¤ Autre', 
        explanation: 'Le temps écoulé sera forcément plus grand que 15 et 20 minutes. On cherche un moment qui est un multiple de 15 ET de 20.' 
    },
    { 
        quiz: { q: 'Un phare émet un éclat toutes les 8 secondes et un autre toutes les 12 secondes. Au bout de combien de temps les deux éclats se produiront-ils en même temps ?', a: 'Multiple commun' }, 
        options: 'Diviseur commun ¤ Multiple commun ¤ Autre', 
        explanation: 'On cherche un événement futur, donc un temps plus long que 8 et 12. On cherche le plus petit multiple commun.' 
    },
    { 
        quiz: { q: 'Julie fait des tours de piste en 3 minutes et Marc en 5 minutes. S\'ils partent ensemble, au bout de combien de minutes se retrouveront-ils sur la ligne de départ ?', a: 'Multiple commun' }, 
        options: 'Diviseur commun ¤ Multiple commun ¤ Autre', 
        explanation: 'Le temps total sera supérieur aux temps de tour individuels. On cherche un multiple commun à 3 et 5.' 
    },
    { 
        quiz: { q: 'Un signal sonore retentit toutes les 10 secondes et un autre toutes les 25 secondes. Quand retentiront-ils ensemble ?', a: 'Multiple commun' }, 
        options: 'Diviseur commun ¤ Multiple commun ¤ Autre', 
        explanation: 'On cherche une répétition dans le futur, donc un nombre plus grand que 10 et 25. C\'est un problème de multiple.' 
    },

    // --- PROBLÈMES "AUTRE" (2 questions) ---
    { 
        quiz: { q: 'Un pâtissier a 12 œufs. Il veut savoir combien de gâteaux il peut faire s\'il utilise 3 œufs par gâteau. Quel type de problème est-ce ?', a: 'Autre' }, 
        options: 'Diviseur commun ¤ Multiple commun ¤ Autre', 
        explanation: 'Ici, on ne cherche pas un nombre qui divise deux quantités différentes, mais simplement le résultat d\'une division unique (12 / 3 = 4). Ce n\'est pas une recherche de diviseur "commun".' 
    },
    { 
        quiz: { q: 'Si je multiplie mon âge actuel par 2, quel sera mon âge dans l\'année ? Quel type de problème est-ce ?', a: 'Autre' }, 
        options: 'Diviseur commun ¤ Multiple commun ¤ Autre', 
        explanation: 'C\'est un calcul de multiplication simple sur une seule valeur. Il n\'y a pas de comparaison entre deux nombres pour trouver un point commun.' 
    },

    // --- PROBLÈME DE PROPORTIONNALITÉ (1 question) ---
    { 
        quiz: { q: 'Si 3 kg de pommes coûtent 6 €, combien coûtent 5 kg de pommes ? Quel type de problème est-ce ?', a: 'Autre' }, 
        options: 'Diviseur commun ¤ Multiple commun ¤ Autre', 
        explanation: 'C\'est un problème de proportionnalité (produit en croix ou coefficient). On ne cherche pas un diviseur ou un multiple commun à deux nombres, mais une relation de proportion entre le prix et la masse.' 
    }
],

    "302521": [
    // 1. Thème : Art / Peinture (Nombres : 30 et 45) - Question sur le nombre de lots
    { 
        quiz: { q: 'Un artiste a 30 tubes de peinture bleue et 45 tubes de peinture rouge. Il veut créer le plus grand nombre de kits de peinture identiques. Combien de kits peut-il préparer ?', a: '15' }, 
        options: '5 ¤ 10 ¤ 15 ¤ 30', 
        explanation: 'DIVISEUR COMMUN : on recherche un nombre plus petit que 30 et 45. <br>Décompositions : $30 = 2 \\times 3 \\times 5$ et $45 = 3^2 \\times 5$. <br>Calcul du diviseur commun (PGCD) : $3 \\times 5 = 15$. <br>Composition : $30 \\div 15 = 2$ bleus et $45 \\div 15 = 3$ rouges par kit.' 
    },
    // 2. Thème : Art / Peinture (Nombres : 30 et 45) - Question sur la composition
    { 
        quiz: { q: 'En créant le maximum de kits identiques avec 30 tubes bleus et 45 rouges, combien de tubes rouges y aura-t-il dans CHAQUE kit ?', a: '3' }, 
        options: '2 ¤ 3 ¤ 5 ¤ 15', 
        explanation: 'DIVISEUR COMMUN : on recherche un nombre plus petit que 30 et 45. <br>Décompositions : $30 = 2 \\times 3 \\times 5$ et $45 = 3^2 \\times 5$. <br>Calcul du diviseur commun (PGCD) : $15$ kits. <br>Composition : $45 \\div 15 = 3$ rouges par kit.' 
    },
    // 3. Thème : Sport / Équipement (Nombres : 24 et 36) - Question sur le nombre de lots
    { 
        quiz: { q: 'Un club de sport possède 24 ballons de foot et 36 ballons de basket. On veut former le plus grand nombre d\'équipes avec un stock identique de ballons. Combien d\'équipes peut-on former ?', a: '12' }, 
        options: '6 ¤ 12 ¤ 18 ¤ 24', 
        explanation: 'DIVISEUR COMMUN : on recherche un nombre plus petit que 24 et 36. <br>Décompositions : $24 = 2^3 \\times 3$ et $36 = 2^2 \\times 3^2$. <br>Calcul du diviseur commun (PGCD) : $2^2 \\times 3 = 12$. <br>Composition : $24 \\div 12 = 2$ ballons de foot et $36 \\div 12 = 3$ de basket par équipe.' 
    },
    // 4. Thème : Sport / Équipement (Nombres : 24 et 36) - Question sur la composition
    { 
        quiz: { q: 'Avec 24 ballons de foot et 36 de basket, si on forme le maximum d\'équipes identiques, combien de ballons de basket y aura-t-il par équipe ?', a: '3' }, 
        options: '2 ¤ 3 ¤ 4 ¤ 6', 
        explanation: 'DIVISEUR COMMUN : on recherche un nombre plus petit que 24 et 36. <br>Décompositions : $24 = 2^3 \\times 3$ et $36 = 2^2 \\ 3^2$. <br>Calcul du diviseur commun (PGCD) : $12$ équipes. <br>Composition : $36 \\div 12 = 3$ ballons de basket par équipe.' 
    },
    // 5. Thème : Logistique / Événementiel (Nombres : 40 et 60) - Question sur le nombre de lots
    { 
        quiz: { q: 'Pour un festival, on a 40 bracelets bleus et 60 bracelets rouges. On veut faire le plus grand nombre de paquets identiques. Combien de paquets peut-on faire ?', a: '20' }, 
        options: '10 ¤ 20 ¤ 30 ¤ 40', 
        explanation: 'DIVISEUR COMMUN : on recherche un nombre plus petit que 40 et 60. <br>Décompositions : $40 = 2^3 \\times 5$ et $60 = 2^2 \\times 3 \\times 5$. <br>Calcul du diviseur commun (PGCD) : $2^2 \\times 5 = 20$. <br>Composition : $40 \\div 20 = 2$ bleus et $60 \\div 20 = 3$ rouges par paquet.' 
    },
    // 6. Thème : Logistique / Événementiel (Nombres : 40 et 60) - Question sur la composition
    { 
        quiz: { q: 'Si on répartit 40 bracelets bleus et 60 rouges en un maximum de paquets identiques, combien y aura-t-il de bracelets bleus par paquet ?', a: '2' }, 
        options: '1 ¤ 2 ¤ 3 ¤ 4', 
        explanation: 'DIVISEUR COMMUN : on recherche un nombre plus petit que 40 et 60. <br>Décompositions : $40 = 2^3 \\times 5$ et $60 = 2^2 \\ 3 \\times 5$. <br>Calcul du diviseur commun (PGCD) : $20$ paquets. <br>Composition : $40 \\div 20 = 2$ bleus par paquet.' 
    },
    // 7. Thème : Cuisine / Pâtisserie (Nombres : 18 et 27) - Question sur le nombre de lots
    { 
        quiz: { q: 'Un pâtissier a 18 éclairs au chocolat et 27 tartelettes. Il veut créer le plus grand nombre de plateaux identiques. Combien de plateaux peut-il préparer ?', a: '9' }, 
        options: '3 ¤ 6 ¤ 9 ¤ 18', 
        explanation: 'DIVISEUR COMMUN : on recherche un nombre plus petit que 18 et 27. <br>Décompositions : $18 = 2 \\times 3^2$ et $27 = 3^3$. <br>Calcul du diviseur commun (PGCD) : $3^2 = 9$. <br>Composition : $18 \\div 9 = 2$ éclairs et $27 \\div 9 = 3$ tartelettes par plateau.' 
    },
    // 8. Thème : Cuisine / Pâtisserie (Nombres : 18 et 27) - Question sur la composition
    { 
        quiz: { q: 'En faisant le maximum de plateaux identiques avec 18 éclairs et 27 tartelettes, combien de tartelettes y aura-t-il par plateau ?', a: '3' }, 
        options: '2 ¤ 3 ¤ 4 ¤ 9', 
        explanation: 'DIVISEUR COMMUN : on recherche un nombre plus petit que 18 et 27. <br>Décompositions : $18 = 2 \\times 3^2$ et $27 = 3^3$. <br>Calcul du diviseur commun (PGCD) : $9$ plateaux. <br>Composition : $27 \\div 9 = 3$ tartelettes par plateau.' 
    },
    // 9. Thème : Jardinage / Fleurs (Nombres : 21 et 49) - Question sur le nombre de lots
    // 9. Thème : Jardinage / Fleurs (Nombres : 21 et 49) - Question sur le nombre de lots
    { 
        quiz: { q: 'Un jardinier a 21 rosiers et 49 tulipes. Il veut planter le plus grand nombre de jardinières identiques. Combien de jardinières peut-il faire ?', a: '7' }, 
        options: '3 ¤ 7 ¤ 14 ¤ 21', 
        explanation: 'DIVISEUR COMMUN : on recherche un nombre plus petit que 21 et 49. <br>Décompositions : $21 = 3 \\times 7$ et $49 = 7^2$. <br>Calcul du diviseur commun (PGCD) : $7$. <br>Composition : $21 \\div 7 = 3$ rosiers et $49 \\div 7 = 7$ tulipes par jardinière.' 
    },
    // 10. Thème : École / Fournitures (Nombres : 36 et 54) - Question sur la composition
    { 
        quiz: { q: 'Une école reçoit 36 cahiers et 54 stylos. On veut constituer le plus grand nombre de kits scolaires identiques. Combien de stylos y aura-t-il dans chaque kit ?', a: '3' }, 
        options: '2 ¤ 3 ¤ 6 ¤ 9', 
        explanation: 'DIVISEUR COMMUN : on recherche un nombre plus petit que 36 et 54. <br>Décompositions : $36 = 2^2 \\times 3^2$ et $54 = 2 \\times 3^3$. <br>Calcul du diviseur commun (PGCD) : $2 \\times 3^2 = 18$ kits. <br>Composition : $54 \\div 18 = 3$ stylos par kit.' 
    }
],

    "302531": [
    // 1. Thème : Astronomie (Nombres : 12 et 15) - Question sur le temps de rencontre
    { 
        quiz: { q: 'Une planète met 12 jours pour faire le tour de son soleil et une autre met 15 jours. Si elles sont alignées aujourd\'hui, dans combien de jours le seront-elles à nouveau ?', a: '60' }, 
        options: '3 ¤ 30 ¤ 60 ¤ 180', 
        explanation: 'MULTIPLE COMMUN : on recherche un nombre plus grand que 12 et 15. <br>Décompositions : $12 = 2^2 \\times 3$ et $15 = 3 \\times 5$. <br>Calcul du multiple commun (PPCM) : $2^2 \\times 3 \\times 5 = 60$. <br>Résultat : Elles seront de nouveau alignées dans 60 jours.' 
    },
    // 2. Thème : Transports / Bus (Nombres : 8 et 12) - Question sur le temps de rencontre
    { 
        quiz: { q: 'Un bus passe toutes les 8 minutes et un autre toutes les 12 minutes. S\'ils partent ensemble à 8h, à quelle minute se retrouveront-ils à nouveau ensemble ?', a: '24' }, 
        options: '4 ¤ 24 ¤ 36 ¤ 48', 
        explanation: 'MULTIPLE COMMUN : on recherche un nombre plus grand que 8 et 12. <br>Décompositions : $8 = 2^3$ et $12 = 2^2 \\times 3$. <br>Calcul du multiple commun (PPCM) : $2^3 \\times 3 = 24$. <br>Résultat : Ils se retrouveront dans 24 minutes.' 
    },
    // 3. Thème : Musique / Rythme (Nombres : 6 et 9) - Question sur la répétition
    { 
        quiz: { q: 'Un métronome bat tous les 6 temps et un autre tous les 9 temps. Au bout de combien de temps les deux battements tomberont-ils en même temps ?', a: '18' }, 
        options: '3 ¤ 12 ¤ 18 ¤ 54', 
        explanation: 'MULTIPLE COMMUN : on recherche un nombre plus grand que 6 et 9. <br>Décompositions : $6 = 2 \\times 3$ et $9 = 3^2$. <br>Calcul du multiple commun (PPCM) : $2 \\times 3^2 = 18$. <br>Résultat : Les battements coïncideront après 18 temps.' 
    },
    // 4. Thème : Biologie / Cycles (Nombres : 10 et 25) - Question sur la rencontre de cycles
    { 
        quiz: { q: 'Une espèce d\'insectes sort tous les 10 ans et une plante fleurit tous les 25 ans. Dans combien d\'années ces deux événements se produiront-ils à nouveau ensemble ?', a: '50' }, 
        options: '5 ¤ 50 ¤ 75 ¤ 100', 
        explanation: 'MULTIPLE COMMUN : on recherche un nombre plus grand que 10 et 25. <br>Décompositions : $10 = 2 \\times 5$ et $25 = 5^2$. <br>Calcul du multiple commun (PPCM) : $2 \\times 5^2 = 50$. <br>Résultat : Cela arrivera dans 50 ans.' 
    },
    // 5. Thème : Sport / Entraînement (Nombres : 14 et 21) - Question sur le temps de rencontre
    { 
        quiz: { q: 'Un nageur fait un tour de bassin en 14 secondes et un autre en 21 secondes. S\'ils partent ensemble, au bout de combien de secondes se retrouveront-ils au départ ?', a: '42' }, 
        options: '7 ¤ 42 ¤ 84 ¤ 21', 
        explanation: 'MULTIPLE COMMUN : on recherche un nombre plus grand que 14 et 21. <br>Décompositions : $14 = 2 \\times 7$ et $21 = 3 \\times 7$. <br>Calcul du multiple commun (PPCM) : $2 \\times 3 \\times 7 = 42$. <br>Résultat : Ils se retrouveront après 42 secondes.' 
    },
    // 6. Thème : Logistique / Livraison (Nombres : 15 et 20) - Question sur le temps de rencontre
    { 
        quiz: { q: 'Un camion livre des fruits toutes les 15 jours et un autre des légumes toutes les 20 jours. Dans combien de jours feront-ils une livraison simultanée ?', a: '60' }, 
        options: '5 ¤ 30 ¤ 60 ¤ 120', 
        explanation: 'MULTIPLE COMMUN : on recherche un nombre plus grand que 15 et 20. <br>Décompositions : $15 = 3 \\times 5$ et $20 = 2^2 \\times 5$. <br>Calcul du multiple commun (PPCM) : $2^2 \\times 3 \\times 5 = 60$. <br>Résultat : La livraison simultanée aura lieu dans 60 jours.' 
    },
    // 7. Thème : Éclairage / Phares (Nombres : 12 et 18) - Question sur le temps de rencontre
    { 
        quiz: { q: 'Deux phares clignotent à des rythmes différents : l\'un toutes les 12 secondes, l\'autre toutes les 18 secondes. Quand clignoteront-ils ensemble ?', a: '36' }, 
        options: '6 ¤ 36 ¤ 72 ¤ 54', 
        explanation: 'MULTIPLE COMMUN : on recherche un nombre plus grand que 12 et 18. <br>Décompositions : $12 = 2^2 \\times 3$ et $18 = 2 \\times 3^2$. <br>Calcul du multiple commun (PPCM) : $2^2 \\times 3^2 = 36$. <br>Résultat : Ils clignoteront ensemble après 36 secondes.' 
    },
    // 8. Thème : École / Récréation (Nombres : 20 et 30) - Question sur le temps de rencontre
    { 
        quiz: { q: 'La sonnerie de la cour retentit toutes les 20 minutes et celle du gymnase toutes les 30 minutes. Dans combien de minutes retentiront-elles ensemble ?', a: '60' }, 
        options: '10 ¤ 60 ¤ 90 ¤ 120', 
        explanation: 'MULTIPLE COMMUN : on recherche un nombre plus grand que 20 et 30. <br>Décompositions : $20 = 2^2 \\times 5$ et $30 = 2 \\times 3 \\times 5$. <br>Calcul du multiple commun (PPCM) : $2^2 \\times 3 \\ 5 = 60$. <br>Résultat : Elles retentiront ensemble dans 60 minutes.' 
    },
        // 9. Thème : Technologie / Mise à jour (Nombres : 4 et 10) - Question sur le temps de rencontre
    { 
        quiz: { q: 'Un logiciel se met à jour tous les 4 mois et un autre tous les 10 mois. Dans combien de mois auront-ils leur prochaine mise à jour simultanée ?', a: '20' }, 
        options: '2 ¤ 20 ¤ 40 ¤ 5', 
        explanation: 'MULTIPLE COMMUN : on recherche un nombre plus grand que 4 et 10. <br>Décompositions : $4 = 2^2$ et $10 = 2 \\times 5$. <br>Calcul du multiple commun (PPCM) : $2^2 \\times 5 = 20$. <br>Résultat : La mise à jour simultanée aura lieu dans 20 mois.' 
    },
    // 10. Thème : Nature / Éclosion (Nombres : 6 et 8) - Question sur le temps de rencontre
    { 
        quiz: { q: 'Deux espèces d\'oiseaux nichent à des cycles différents : l\'une tous les 6 ans et l\'autre tous les 8 ans. Dans combien d\'années les deux nichées auront-elles lieu la même année ?', a: '24' }, 
        options: '2 ¤ 14 ¤ 24 ¤ 48', 
        explanation: 'MULTIPLE COMMUN : on recherche un nombre plus grand que 6 et 8. <br>Décompositions : $6 = 2 \\times 3$ et $8 = 2^3$. <br>Calcul du multiple commun (PPCM) : $2^3 \\times 3 = 24$. <br>Résultat : Cela arrivera dans 24 ans.' 
    }
]
};
