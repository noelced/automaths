// ============================================================
// data/courseOutline.js — Plan détaillé des cours (H2/H3 réels)
// ============================================================
// ⚙️  Fichier généré automatiquement par data/MAJcourseOutline.js
//     Ne modifiez pas ce fichier à la main : relancez plutôt
//     "node MAJcourseOutline.js" depuis le dossier data/ après avoir
//     modifié un fichier officialData_*.js.
//
// Structure : courseOutline[niveau][titreChapitre] = {
//     chapterId,
//     h2Sections: [
//         { title: "...", items: [ { h3Title: "..."|null, quizKey: "..." } ] }
//     ]
// }
// Utilisé par l'onglet "Progression" de dashboard.html.
// ============================================================

const courseOutline = {
    "6ème": {},
    "5ème": {
        "Puissances": {
            "chapterId": 4,
            "h2Sections": [
                {
                    "title": "Définition d'une puissance",
                    "items": [
                        {
                            "h3Title": "Le carré",
                            "quizKey": "54111"
                        },
                        {
                            "h3Title": "Le cube",
                            "quizKey": "54121"
                        }
                    ]
                },
                {
                    "title": "Calculer en utilisant les puissances",
                    "items": [
                        {
                            "h3Title": "Écrire un nombre sous la forme d'une puissance",
                            "quizKey": "54211"
                        },
                        {
                            "h3Title": "Calculer une expression contenant des puissances",
                            "quizKey": "54221"
                        },
                        {
                            "h3Title": "Calculer une expression littérale avec une puissance",
                            "quizKey": "54231"
                        }
                    ]
                }
            ]
        },
        "Opérations": {
            "chapterId": 1,
            "h2Sections": [
                {
                    "title": "Vocabulaire et sens des 4 opérations",
                    "items": [
                        {
                            "h3Title": "Vocabulaire",
                            "quizKey": "51111"
                        },
                        {
                            "h3Title": "Vocabulaire",
                            "quizKey": "51112"
                        },
                        {
                            "h3Title": "Contrôler la vraisemblance d'un résultat",
                            "quizKey": "51121"
                        }
                    ]
                },
                {
                    "title": "Enchaîner des opérations : les priorités opératoires",
                    "items": [
                        {
                            "h3Title": "Priorités",
                            "quizKey": "51211"
                        },
                        {
                            "h3Title": "Traduire un programme de calcul en une expression",
                            "quizKey": "51221"
                        }
                    ]
                },
                {
                    "title": "Distributivité simple sur des exemples numériques",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "51301"
                        }
                    ]
                },
                {
                    "title": "Division euclidienne, multiples et diviseurs",
                    "items": [
                        {
                            "h3Title": "Division euclidienne",
                            "quizKey": "51411"
                        },
                        {
                            "h3Title": "Diviser par un nombre décimal",
                            "quizKey": "51421"
                        },
                        {
                            "h3Title": "Multiples et diviseurs",
                            "quizKey": "51431"
                        },
                        {
                            "h3Title": "Multiples et diviseurs",
                            "quizKey": "51432"
                        }
                    ]
                },
                {
                    "title": "Critères de divisibilité",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "51501"
                        }
                    ]
                },
                {
                    "title": "Pour aller plus loin (culture mathématique)",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "51502"
                        }
                    ]
                }
            ]
        },
        "Nombres relatifs": {
            "chapterId": 2,
            "h2Sections": [
                {
                    "title": "Découvrir les nombres relatifs",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "52101"
                        },
                        {
                            "h3Title": "Résoudre un problème avec des nombres relatifs",
                            "quizKey": "52102"
                        }
                    ]
                },
                {
                    "title": "Repérer un nombre relatif sur une droite graduée",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "52201"
                        }
                    ]
                },
                {
                    "title": "Comparer et ranger des nombres relatifs",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "52301"
                        }
                    ]
                },
                {
                    "title": "Opposé et valeur absolue d'un nombre",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "52401"
                        }
                    ]
                },
                {
                    "title": "Additionner des nombres relatifs",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "52501"
                        },
                        {
                            "h3Title": "Additionner plusieurs nombres relatifs",
                            "quizKey": "52502"
                        }
                    ]
                },
                {
                    "title": "Soustraire des nombres relatifs",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "52601"
                        },
                        {
                            "h3Title": "Simplifier l'écriture d'une somme",
                            "quizKey": "52602"
                        }
                    ]
                },
                {
                    "title": "Enchaîner additions et soustractions de nombres relatifs",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "52701"
                        }
                    ]
                },
                {
                    "title": "Pour aller plus loin (culture mathématique)",
                    "items": []
                }
            ]
        },
        "Nombres rationnels": {
            "chapterId": 3,
            "h2Sections": [
                {
                    "title": "Rappels sur les fractions",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "53101"
                        },
                        {
                            "h3Title": "Décomposer une fraction",
                            "quizKey": "53102"
                        }
                    ]
                },
                {
                    "title": "Fractions égales et simplification",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "53201"
                        }
                    ]
                },
                {
                    "title": "Comparer, ranger et encadrer des fractions",
                    "items": [
                        {
                            "h3Title": "Fractions de dénominateurs quelconques",
                            "quizKey": "53301"
                        },
                        {
                            "h3Title": "Encadrer une fraction par deux entiers consécutifs",
                            "quizKey": "53302"
                        }
                    ]
                },
                {
                    "title": "Additionner et soustraire des fractions",
                    "items": [
                        {
                            "h3Title": "Fractions de dénominateurs quelconques",
                            "quizKey": "53401"
                        }
                    ]
                },
                {
                    "title": "Résoudre des problèmes avec des fractions",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "53501"
                        }
                    ]
                }
            ]
        },
        "Calcul littéral": {
            "chapterId": 5,
            "h2Sections": [
                {
                    "title": "Produire des formules",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "55101"
                        },
                        {
                            "h3Title": null,
                            "quizKey": "55102"
                        }
                    ]
                },
                {
                    "title": "Calculer la valeur d'une expression littérale",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "55201"
                        }
                    ]
                },
                {
                    "title": "Tester une égalité, utiliser un contre-exemple",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "55301"
                        }
                    ]
                },
                {
                    "title": "Somme ou produit ?",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "55401"
                        }
                    ]
                },
                {
                    "title": "Développer et factoriser",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "55501"
                        },
                        {
                            "h3Title": "Réduire une expression de la forme $ax + b$",
                            "quizKey": "55502"
                        }
                    ]
                },
                {
                    "title": "Démontrer une propriété par le calcul littéral",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "55601"
                        }
                    ]
                },
                {
                    "title": "Donner à la lettre le statut d'inconnue : les équations",
                    "items": [
                        {
                            "h3Title": "Modéliser un problème par une équation",
                            "quizKey": "55701"
                        },
                        {
                            "h3Title": "Résoudre une équation du type $x + b = c$",
                            "quizKey": "55702"
                        },
                        {
                            "h3Title": "Résoudre une équation du type $ax = c$",
                            "quizKey": "55703"
                        }
                    ]
                },
                {
                    "title": "Pour aller plus loin (culture mathématique)",
                    "items": []
                }
            ]
        },
        "Repérage": {
            "chapterId": 6,
            "h2Sections": [
                {
                    "title": "Se repérer sur une droite graduée",
                    "items": [
                        {
                            "h3Title": "Lire une abscisse",
                            "quizKey": "56111"
                        },
                        {
                            "h3Title": "Placer un point d'abscisse donnée",
                            "quizKey": "56121"
                        }
                    ]
                },
                {
                    "title": "Se repérer dans le plan : le repère orthogonal",
                    "items": [
                        {
                            "h3Title": "Lire les coordonnées d'un point donné",
                            "quizKey": "56211"
                        },
                        {
                            "h3Title": "Placer un point de coordonnées données",
                            "quizKey": "56221"
                        }
                    ]
                },
                {
                    "title": "Résoudre un problème avec des coordonnées",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "56301"
                        }
                    ]
                }
            ]
        },
        "Espace et grandeurs": {
            "chapterId": 7,
            "h2Sections": [
                {
                    "title": "Représenter un solide en perspective cavalière",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "57101"
                        }
                    ]
                },
                {
                    "title": "Le patron d'un solide",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "57201"
                        },
                        {
                            "h3Title": null,
                            "quizKey": "57202"
                        }
                    ]
                },
                {
                    "title": "Calculer le volume du cube et du pavé droit",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "57301"
                        }
                    ]
                },
                {
                    "title": "Calculer le volume du prisme droit",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "57302"
                        }
                    ]
                },
                {
                    "title": "Aire du disque et volume du cylindre de révolution",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "57401"
                        }
                    ]
                },
                {
                    "title": "Unités de volume et de capacité",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "57501"
                        }
                    ]
                },
                {
                    "title": "Pour aller plus loin (culture mathématique)",
                    "items": []
                }
            ]
        },
        "Transformations": {
            "chapterId": 8,
            "h2Sections": [
                {
                    "title": "Rappel : la symétrie axiale",
                    "items": [
                        {
                            "h3Title": "Construire",
                            "quizKey": "58102"
                        }
                    ]
                },
                {
                    "title": "Découvrir la symétrie centrale (le demi-tour)",
                    "items": []
                },
                {
                    "title": "Les propriétés de la symétrie centrale",
                    "items": []
                },
                {
                    "title": "Construire l'image d'une figure par symétrie centrale",
                    "items": [
                        {
                            "h3Title": "Symétrique d'une figure",
                            "quizKey": "58202"
                        }
                    ]
                },
                {
                    "title": "Identifier des symétries dans l'art et la nature",
                    "items": []
                },
                {
                    "title": "Pour aller plus loin (culture mathématique)",
                    "items": []
                }
            ]
        },
        "Angles": {
            "chapterId": 9,
            "h2Sections": [
                {
                    "title": "Rappels : le vocabulaire des angles",
                    "items": [
                        {
                            "h3Title": "Nature d'un angle",
                            "quizKey": "59111"
                        },
                        {
                            "h3Title": "Nommer un angle",
                            "quizKey": "59121"
                        },
                        {
                            "h3Title": "Angles opposés par le sommet, adjacents, supplémentaires",
                            "quizKey": "59131"
                        },
                        {
                            "h3Title": "La bissectrice d'un angle",
                            "quizKey": "59141"
                        }
                    ]
                },
                {
                    "title": "Angles formés par deux droites coupées par une sécante",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "59201"
                        }
                    ]
                },
                {
                    "title": "Caractériser le parallélisme par les angles",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "59301"
                        }
                    ]
                },
                {
                    "title": "Pour aller plus loin (culture mathématique)",
                    "items": []
                }
            ]
        },
        "Triangle": {
            "chapterId": 10,
            "h2Sections": [
                {
                    "title": "Rappel : les différents types de triangles",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "510101"
                        }
                    ]
                },
                {
                    "title": "La somme des angles d'un triangle",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "510201"
                        }
                    ]
                },
                {
                    "title": "Construire un triangle à partir de données partielles",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "510301"
                        }
                    ]
                },
                {
                    "title": "Les hauteurs d'un triangle",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "510401"
                        }
                    ]
                },
                {
                    "title": "Les médianes d'un triangle",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "510501"
                        }
                    ]
                },
                {
                    "title": "Les médiatrices et le cercle circonscrit",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "510601"
                        }
                    ]
                },
                {
                    "title": "Calculer l'aire d'un triangle",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "510701"
                        }
                    ]
                },
                {
                    "title": "Cas des triangles particuliers",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "510801"
                        }
                    ]
                },
                {
                    "title": "Pour aller plus loin (culture mathématique)",
                    "items": []
                }
            ]
        },
        "Parallélogramme": {
            "chapterId": 11,
            "h2Sections": [
                {
                    "title": "Rappel : les quadrilatères usuels",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "511101"
                        }
                    ]
                },
                {
                    "title": "Définir et construire un parallélogramme",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "511201"
                        }
                    ]
                },
                {
                    "title": "Les propriétés caractéristiques du parallélogramme",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "511301"
                        }
                    ]
                },
                {
                    "title": "Les parallélogrammes particuliers",
                    "items": [
                        {
                            "h3Title": "Le carré",
                            "quizKey": "511401"
                        }
                    ]
                },
                {
                    "title": "Calculer l'aire d'un parallélogramme et de figures complexes",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "511501"
                        }
                    ]
                },
                {
                    "title": "Résoudre des problèmes avec des conversions d'unités",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "511601"
                        }
                    ]
                },
                {
                    "title": "Pour aller plus loin (culture mathématique)",
                    "items": []
                }
            ]
        },
        "Statistiques": {
            "chapterId": 12,
            "h2Sections": [
                {
                    "title": "Recueillir et organiser des données",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "512101"
                        }
                    ]
                },
                {
                    "title": "Calculer des effectifs et des fréquences",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "512201"
                        }
                    ]
                },
                {
                    "title": "Le diagramme en bâtons",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "512301"
                        }
                    ]
                },
                {
                    "title": "Le diagramme circulaire",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "512401"
                        }
                    ]
                },
                {
                    "title": "Le graphique cartésien",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "512501"
                        }
                    ]
                },
                {
                    "title": "Choisir une représentation adaptée",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "512601"
                        }
                    ]
                },
                {
                    "title": "Calculer et interpréter la moyenne d'une série",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "512701"
                        }
                    ]
                },
                {
                    "title": "Pour aller plus loin (culture mathématique)",
                    "items": []
                }
            ]
        },
        "Probabilités": {
            "chapterId": 13,
            "h2Sections": [
                {
                    "title": "Le vocabulaire des probabilités",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "513101"
                        }
                    ]
                },
                {
                    "title": "L'échelle de probabilité",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "513201"
                        }
                    ]
                },
                {
                    "title": "Calculer une probabilité en situation d'équiprobabilité",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "513301"
                        }
                    ]
                },
                {
                    "title": "Exprimer une probabilité sous différentes formes",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "513401"
                        }
                    ]
                },
                {
                    "title": "Répéter une expérience aléatoire",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "513501"
                        }
                    ]
                },
                {
                    "title": "Pour aller plus loin (culture mathématique)",
                    "items": []
                }
            ]
        },
        "Proportionnalité": {
            "chapterId": 14,
            "h2Sections": [
                {
                    "title": "Reconnaître une situation de proportionnalité",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "514101"
                        }
                    ]
                },
                {
                    "title": "Résoudre un problème de proportionnalité",
                    "items": [
                        {
                            "h3Title": "La linéarité (multiplicative ou additive)",
                            "quizKey": "514201"
                        }
                    ]
                },
                {
                    "title": "Représenter et reconnaître une situation de proportionnalité",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "514301"
                        }
                    ]
                },
                {
                    "title": "Calculer et appliquer un pourcentage",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "514401"
                        }
                    ]
                },
                {
                    "title": "Partager une quantité selon un ratio donné",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "514501"
                        }
                    ]
                },
                {
                    "title": "Utiliser une échelle",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "514601"
                        }
                    ]
                },
                {
                    "title": "Pour aller plus loin (culture mathématique)",
                    "items": []
                }
            ]
        },
        "Fonctions": {
            "chapterId": 15,
            "h2Sections": [
                {
                    "title": "L'expression « en fonction de »",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "515101"
                        }
                    ]
                },
                {
                    "title": "Produire et lire un tableau de valeurs",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "515201"
                        }
                    ]
                },
                {
                    "title": "Placer dans un repère les points d'un tableau de valeurs",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "515301"
                        }
                    ]
                },
                {
                    "title": "Lire et interpréter un graphique cartésien",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "515401"
                        }
                    ]
                },
                {
                    "title": "Produire une formule représentant une dépendance",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "515501"
                        }
                    ]
                },
                {
                    "title": "Caractériser graphiquement la proportionnalité",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "515601"
                        }
                    ]
                },
                {
                    "title": "Pour aller plus loin (culture mathématique)",
                    "items": []
                }
            ]
        }
    },
    "4ème": {
        "Les nombres relatifs": {
            "chapterId": 1,
            "h2Sections": []
        },
        "Arithmétique": {
            "chapterId": 2,
            "h2Sections": []
        },
        "Les fractions": {
            "chapterId": 3,
            "h2Sections": []
        },
        "Puissances et racine carrée": {
            "chapterId": 4,
            "h2Sections": []
        },
        "Calcul littéral": {
            "chapterId": 5,
            "h2Sections": []
        },
        "Équations": {
            "chapterId": 6,
            "h2Sections": []
        },
        "Proportionnalité": {
            "chapterId": 7,
            "h2Sections": []
        },
        "Les statistiques": {
            "chapterId": 8,
            "h2Sections": []
        },
        "Probabilités": {
            "chapterId": 9,
            "h2Sections": []
        },
        "Fonctions": {
            "chapterId": 10,
            "h2Sections": []
        },
        "Grandeurs et mesures": {
            "chapterId": 11,
            "h2Sections": []
        },
        "Triangle rectangle": {
            "chapterId": 12,
            "h2Sections": []
        },
        "Triangles et parallèles": {
            "chapterId": 13,
            "h2Sections": []
        },
        "Trigonométrie : cosinus": {
            "chapterId": 14,
            "h2Sections": []
        },
        "Transformations": {
            "chapterId": 15,
            "h2Sections": []
        },
        "Espace (Repérage, pyramides et cônes)": {
            "chapterId": 16,
            "h2Sections": []
        }
    },
    "3ème": {
        "Équations": {
            "chapterId": 4,
            "h2Sections": [
                {
                    "title": "Vocabulaire",
                    "items": []
                },
                {
                    "title": "Tester, vérifier une solution",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "34201"
                        }
                    ]
                },
                {
                    "title": "Méthode de résolution d'une équation de base",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "34301"
                        },
                        {
                            "h3Title": null,
                            "quizKey": "34302"
                        },
                        {
                            "h3Title": null,
                            "quizKey": "34303"
                        }
                    ]
                },
                {
                    "title": "Résoudre une équation produit",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "34401"
                        }
                    ]
                },
                {
                    "title": "Résoudre une équation du type $x^2 = a$",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "34401"
                        }
                    ]
                }
            ]
        },
        "Nombres et calculs (Relatifs, fractions, racine carrée, puissances)": {
            "chapterId": 1,
            "h2Sections": [
                {
                    "title": "Rappels : Nombres relatifs",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "31101"
                        }
                    ]
                },
                {
                    "title": "Rappels : Fractions",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "31201"
                        }
                    ]
                },
                {
                    "title": "Racines carrées",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "31301"
                        }
                    ]
                },
                {
                    "title": "Puissances et écriture scientifique",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "31401"
                        }
                    ]
                },
                {
                    "title": "Écriture scientifique",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "31501"
                        }
                    ]
                }
            ]
        },
        "Arithmétique": {
            "chapterId": 2,
            "h2Sections": [
                {
                    "title": "Rappels",
                    "items": [
                        {
                            "h3Title": "Division euclidienne",
                            "quizKey": "32121"
                        }
                    ]
                },
                {
                    "title": "Multiples et diviseurs",
                    "items": [
                        {
                            "h3Title": "Vocabulaire",
                            "quizKey": "32211"
                        },
                        {
                            "h3Title": "Vocabulaire",
                            "quizKey": "32212"
                        },
                        {
                            "h3Title": "Critères de divisibilités",
                            "quizKey": "32221"
                        },
                        {
                            "h3Title": "Déterminer tous les diviseurs d’un nombre entier",
                            "quizKey": "32231"
                        }
                    ]
                },
                {
                    "title": "Nombres premiers",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "32301"
                        },
                        {
                            "h3Title": null,
                            "quizKey": "32302"
                        }
                    ]
                },
                {
                    "title": "Fractions irréductibles",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "32401"
                        }
                    ]
                },
                {
                    "title": "Problèmes de divisibilité",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "32501"
                        },
                        {
                            "h3Title": "Exemple type (diviseur) :",
                            "quizKey": "32511"
                        },
                        {
                            "h3Title": "Exemple type (multiple) :",
                            "quizKey": "32521"
                        }
                    ]
                }
            ]
        },
        "Calcul littéral": {
            "chapterId": 3,
            "h2Sections": [
                {
                    "title": "Introduction - substituer",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "33101"
                        },
                        {
                            "h3Title": null,
                            "quizKey": "33102"
                        },
                        {
                            "h3Title": null,
                            "quizKey": "33103"
                        },
                        {
                            "h3Title": null,
                            "quizKey": "33104"
                        }
                    ]
                },
                {
                    "title": "Structure d’une expression littérale",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "33201"
                        }
                    ]
                },
                {
                    "title": "Opposé d’une expression algébrique",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "33301"
                        }
                    ]
                },
                {
                    "title": "Réduire une expression algébrique",
                    "items": [
                        {
                            "h3Title": "Réduire une somme",
                            "quizKey": "33411"
                        },
                        {
                            "h3Title": "Réduire un produit",
                            "quizKey": "33421"
                        },
                        {
                            "h3Title": "Réduire une expression algébrique",
                            "quizKey": "33431"
                        }
                    ]
                },
                {
                    "title": "Développer",
                    "items": [
                        {
                            "h3Title": "Simple distributivité",
                            "quizKey": "33511"
                        },
                        {
                            "h3Title": "Double distributivité",
                            "quizKey": "33521"
                        }
                    ]
                },
                {
                    "title": "Développer une identité remarquable",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "33601"
                        }
                    ]
                },
                {
                    "title": "Factoriser",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "33701"
                        },
                        {
                            "h3Title": null,
                            "quizKey": "33702"
                        }
                    ]
                }
            ]
        },
        "Statistiques": {
            "chapterId": 5,
            "h2Sections": [
                {
                    "title": "A quelle heure vous couchez-vous le soir ?",
                    "items": []
                },
                {
                    "title": "Vocabulaire et Tableaux",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "35201"
                        },
                        {
                            "h3Title": "Fréquence",
                            "quizKey": "35211"
                        }
                    ]
                },
                {
                    "title": "Caractéristiques de position",
                    "items": [
                        {
                            "h3Title": "Calcul de moyenne",
                            "quizKey": "35311"
                        },
                        {
                            "h3Title": "Calcul de moyenne",
                            "quizKey": "35312"
                        },
                        {
                            "h3Title": "Médiane",
                            "quizKey": "35321"
                        },
                        {
                            "h3Title": "Médiane",
                            "quizKey": "35322"
                        }
                    ]
                },
                {
                    "title": "Caractéristique de dispersion",
                    "items": [
                        {
                            "h3Title": "L'Étendue",
                            "quizKey": "35411"
                        }
                    ]
                },
                {
                    "title": "Classes d’amplitude et histogramme",
                    "items": []
                }
            ]
        },
        "Probabilités": {
            "chapterId": 6,
            "h2Sections": [
                {
                    "title": "Vocabulaire",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "36101"
                        }
                    ]
                },
                {
                    "title": "Calcul de probabilité",
                    "items": [
                        {
                            "h3Title": "Définition",
                            "quizKey": "36211"
                        },
                        {
                            "h3Title": "Propriétés",
                            "quizKey": "36221"
                        }
                    ]
                },
                {
                    "title": "Probabilité d’une expérience aléatoire à deux épreuves",
                    "items": [
                        {
                            "h3Title": "Arbre des possibles",
                            "quizKey": "36321"
                        }
                    ]
                },
                {
                    "title": "Loi des grands nombres",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "36401"
                        }
                    ]
                }
            ]
        },
        "Proportionnalité": {
            "chapterId": 7,
            "h2Sections": [
                {
                    "title": "Définitions",
                    "items": []
                },
                {
                    "title": "Reconnaitre une situation de proportionnalité",
                    "items": [
                        {
                            "h3Title": "Dans un tableau",
                            "quizKey": "37101"
                        },
                        {
                            "h3Title": "Sur un graphique",
                            "quizKey": "37102"
                        }
                    ]
                },
                {
                    "title": "Rappels sur les méthodes de calculs de quatrième proportionnelle",
                    "items": [
                        {
                            "h3Title": "Passage par l'unité",
                            "quizKey": "37211"
                        },
                        {
                            "h3Title": "Coefficient de proportionnalité",
                            "quizKey": "37221"
                        },
                        {
                            "h3Title": "Linéarité",
                            "quizKey": "37231"
                        },
                        {
                            "h3Title": "Lecture graphique",
                            "quizKey": "37241"
                        },
                        {
                            "h3Title": "Produit en croix",
                            "quizKey": "37251"
                        }
                    ]
                },
                {
                    "title": "Modéliser la proportionnalité par une fonction linéaire",
                    "items": [
                        {
                            "h3Title": null,
                            "quizKey": "37301"
                        }
                    ]
                },
                {
                    "title": "Pourcentages d'évolution et fonctions linéaires",
                    "items": [
                        {
                            "h3Title": "Attention au sens du problème",
                            "quizKey": "37401"
                        }
                    ]
                }
            ]
        },
        "Fonctions": {
            "chapterId": 8,
            "h2Sections": [
                {
                    "title": "Notion de fonction",
                    "items": [
                        {
                            "h3Title": "Notation",
                            "quizKey": "38121"
                        },
                        {
                            "h3Title": "Représentation des fonctions",
                            "quizKey": "38131"
                        },
                        {
                            "h3Title": "Représentation des fonctions",
                            "quizKey": "38132"
                        },
                        {
                            "h3Title": "Représentation des fonctions",
                            "quizKey": "38133"
                        }
                    ]
                },
                {
                    "title": "Fonction linéaire",
                    "items": [
                        {
                            "h3Title": "Définition",
                            "quizKey": "38211"
                        },
                        {
                            "h3Title": "Définition",
                            "quizKey": "38212"
                        },
                        {
                            "h3Title": "Calculer un pourcentage d’augmentation ou de diminution avec les fonctions linéaires",
                            "quizKey": "38213"
                        }
                    ]
                },
                {
                    "title": "Fonction affine",
                    "items": [
                        {
                            "h3Title": "Définition – Notation :",
                            "quizKey": "38311"
                        },
                        {
                            "h3Title": "Représentation graphique",
                            "quizKey": "38321"
                        }
                    ]
                }
            ]
        },
        "Grandeurs et mesures": {
            "chapterId": 9,
            "h2Sections": [
                {
                    "title": "Objectifs",
                    "items": []
                },
                {
                    "title": "Grandeurs simples et conversion d’unités",
                    "items": []
                },
                {
                    "title": "Le périmètre d’une figure",
                    "items": []
                },
                {
                    "title": "Grandeur produit",
                    "items": []
                },
                {
                    "title": "Grandeur quotient",
                    "items": []
                },
                {
                    "title": "Effet des transformations sur les grandeurs",
                    "items": []
                }
            ]
        },
        "Triangle rectangle": {
            "chapterId": 10,
            "h2Sections": [
                {
                    "title": "Rappel de vocabulaire",
                    "items": []
                },
                {
                    "title": "Calculer une longueur manquante : Le théorème de Pythagore",
                    "items": []
                },
                {
                    "title": "Montrer qu’un triangle est rectangle",
                    "items": []
                }
            ]
        },
        "Triangles et parallèles": {
            "chapterId": 11,
            "h2Sections": [
                {
                    "title": "Objectifs",
                    "items": []
                },
                {
                    "title": "Triangles semblables",
                    "items": []
                },
                {
                    "title": "Cas particulier : Théorème de Thalès",
                    "items": []
                },
                {
                    "title": "Réciproque du théorème de Thalès",
                    "items": []
                }
            ]
        },
        "Trigonométrie": {
            "chapterId": 12,
            "h2Sections": [
                {
                    "title": "Objectifs",
                    "items": []
                },
                {
                    "title": "Vocabulaire",
                    "items": []
                },
                {
                    "title": "Définition",
                    "items": []
                },
                {
                    "title": "Application : calculer une longueur",
                    "items": []
                },
                {
                    "title": "Application : calculer un angle",
                    "items": []
                }
            ]
        },
        "Transformations": {
            "chapterId": 13,
            "h2Sections": [
                {
                    "title": "Objectifs",
                    "items": []
                },
                {
                    "title": "Rappels",
                    "items": []
                },
                {
                    "title": "Translation et Rotation",
                    "items": []
                },
                {
                    "title": "Homothétie",
                    "items": []
                },
                {
                    "title": "Effet d’un agrandissement ou d’une réduction sur une figure",
                    "items": []
                }
            ]
        },
        "Espace": {
            "chapterId": 14,
            "h2Sections": [
                {
                    "title": "Objectifs",
                    "items": []
                },
                {
                    "title": "Rappels : Vocabulaire et visualisation des solides",
                    "items": []
                },
                {
                    "title": "Patrons",
                    "items": []
                },
                {
                    "title": "Sections",
                    "items": []
                },
                {
                    "title": "La sphère : Vocabulaire",
                    "items": []
                },
                {
                    "title": "Repérage dans l’espace",
                    "items": []
                },
                {
                    "title": "Repérage sur une sphère",
                    "items": []
                }
            ]
        }
    }
};
