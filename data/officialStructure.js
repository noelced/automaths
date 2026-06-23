// ============================================================
// data/officialStructure.js — Structure légère du programme
// ============================================================
// Ce fichier contient UNIQUEMENT les titres de niveaux, thèmes et
// chapitres (+ id, + référence au fichier de contenu). Il NE
// CONTIENT PAS le contenu HTML des cours (qui peut faire plusieurs
// dizaines de Ko par chapitre).
//
// Chargé immédiatement au démarrage de l'application pour construire
// les menus (écran de sélection de niveau, grille de chapitres).
//
// Le contenu réel d'un chapitre (champ "content", gros HTML) n'est
// chargé QUE lorsque l'élève clique dessus, via un <script> injecté
// dynamiquement qui pointe vers le fichier "_file" indiqué ici (voir
// js/app.js, fonction loadChapterContent()). Cette approche réduit
// fortement le volume téléchargé au démarrage, ce qui compte
// beaucoup en 4G avec une connexion moyenne.
//
// IMPORTANT : si vous ajoutez un nouveau chapitre, vous devez :
//   1. Créer son fichier data/official/officialData_<niveau>_chapitreN.js
//      (copiez un fichier existant comme modèle pour le format exact)
//   2. Ajouter une entrée correspondante ci-dessous, avec le même
//      "id", le même "_file", et le même "_varName" que dans le
//      fichier de chapitre que vous avez créé.

const officialStructure = [
    {
        "name": "6ème",
        "themes": []
    },
    {
        "name": "5ème",
        "themes": []
    },
    {
        "name": "4ème",
        "themes": [
            {
                "name": "NOMBRES ET CALCULS",
                "chapters": [
                    {
                        "id": 1,
                        "title": "Les nombres relatifs",
                        "eleve": "non",
                        "_file": "data/official/officialData_4eme_chapitre1.js",
                        "_varName": "chapterData_4eme_1"
                    },
                    {
                        "id": 2,
                        "title": "Arithmétique",
                        "eleve": "non",
                        "_file": "data/official/officialData_4eme_chapitre2.js",
                        "_varName": "chapterData_4eme_2"
                    },
                    {
                        "id": 3,
                        "title": "Les fractions",
                        "eleve": "non",
                        "_file": "data/official/officialData_4eme_chapitre3.js",
                        "_varName": "chapterData_4eme_3"
                    },
                    {
                        "id": 4,
                        "title": "Puissances et racine carrée",
                        "eleve": "non",
                        "_file": "data/official/officialData_4eme_chapitre4.js",
                        "_varName": "chapterData_4eme_4"
                    },
                    {
                        "id": 5,
                        "title": "Calcul littéral",
                        "eleve": "non",
                        "_file": "data/official/officialData_4eme_chapitre5.js",
                        "_varName": "chapterData_4eme_5"
                    },
                    {
                        "id": 6,
                        "title": "Équations",
                        "eleve": "non",
                        "_file": "data/official/officialData_4eme_chapitre6.js",
                        "_varName": "chapterData_4eme_6"
                    }
                ]
            },
            {
                "name": "ORGANISATION ET GESTION DE DONNÉES",
                "chapters": [
                    {
                        "id": 7,
                        "title": "Proportionnalité",
                        "eleve": "non",
                        "_file": "data/official/officialData_4eme_chapitre7.js",
                        "_varName": "chapterData_4eme_7"
                    },
                    {
                        "id": 8,
                        "title": "Les statistiques",
                        "eleve": "non",
                        "_file": "data/official/officialData_4eme_chapitre8.js",
                        "_varName": "chapterData_4eme_8"
                    },
                    {
                        "id": 9,
                        "title": "Probabilités",
                        "eleve": "non",
                        "_file": "data/official/officialData_4eme_chapitre9.js",
                        "_varName": "chapterData_4eme_9"
                    },
                    {
                        "id": 10,
                        "title": "Fonctions",
                        "eleve": "non",
                        "_file": "data/official/officialData_4eme_chapitre10.js",
                        "_varName": "chapterData_4eme_10"
                    }
                ]
            },
            {
                "name": "GRANDEURS ET MESURES",
                "chapters": [
                    {
                        "id": 11,
                        "title": "Grandeurs et mesures",
                        "eleve": "non",
                        "_file": "data/official/officialData_4eme_chapitre11.js",
                        "_varName": "chapterData_4eme_11"
                    }
                ]
            },
            {
                "name": "ESPACE ET GÉOMÉTRIE",
                "chapters": [
                    {
                        "id": 12,
                        "title": "Triangle rectangle",
                        "eleve": "non",
                        "_file": "data/official/officialData_4eme_chapitre12.js",
                        "_varName": "chapterData_4eme_12"
                    },
                    {
                        "id": 13,
                        "title": "Triangles et parallèles",
                        "eleve": "non",
                        "_file": "data/official/officialData_4eme_chapitre13.js",
                        "_varName": "chapterData_4eme_13"
                    },
                    {
                        "id": 14,
                        "title": "Trigonométrie : cosinus",
                        "eleve": "non",
                        "_file": "data/official/officialData_4eme_chapitre14.js",
                        "_varName": "chapterData_4eme_14"
                    },
                    {
                        "id": 15,
                        "title": "Transformations",
                        "eleve": "non",
                        "_file": "data/official/officialData_4eme_chapitre15.js",
                        "_varName": "chapterData_4eme_15"
                    },
                    {
                        "id": 16,
                        "title": "Espace (Repérage, pyramides et cônes)",
                        "eleve": "non",
                        "_file": "data/official/officialData_4eme_chapitre16.js",
                        "_varName": "chapterData_4eme_16"
                    }
                ]
            }
        ]
    },
    {
        "name": "3ème",
        "themes": [
            {
                "name": "NOMBRES ET CALCULS",
                "chapters": [
                    {
                        "id": 1,
                        "title": "Nombres et calculs (Relatifs, fractions, racine carrée, puissances)",
                        "eleve": "non",
                        "_file": "data/official/officialData_3eme_chapitre1.js",
                        "_varName": "chapterData_3eme_1"
                    },
                    {
                        "id": 2,
                        "title": "Arithmétique",
                        "eleve": "non",
                        "_file": "data/official/officialData_3eme_chapitre2.js",
                        "_varName": "chapterData_3eme_2"
                    },
                    {
                        "id": 3,
                        "title": "Calcul littéral",
                        "eleve": "non",
                        "_file": "data/official/officialData_3eme_chapitre3.js",
                        "_varName": "chapterData_3eme_3"
                    },
                    {
                        "id": 4,
                        "title": "Équations",
                        "eleve": "non",
                        "_file": "data/official/officialData_3eme_chapitre4.js",
                        "_varName": "chapterData_3eme_4"
                    }
                ]
            },
            {
                "name": "ORGANISATION ET GESTION DE DONNÉES",
                "chapters": [
                    {
                        "id": 5,
                        "title": "Statistiques",
                        "eleve": "non",
                        "_file": "data/official/officialData_3eme_chapitre5.js",
                        "_varName": "chapterData_3eme_5"
                    },
                    {
                        "id": 6,
                        "title": "Probabilités",
                        "eleve": "non",
                        "_file": "data/official/officialData_3eme_chapitre6.js",
                        "_varName": "chapterData_3eme_6"
                    },
                    {
                        "id": 7,
                        "title": "Proportionnalité",
                        "eleve": "non",
                        "_file": "data/official/officialData_3eme_chapitre7.js",
                        "_varName": "chapterData_3eme_7"
                    },
                    {
                        "id": 8,
                        "title": "Fonctions",
                        "eleve": "non",
                        "_file": "data/official/officialData_3eme_chapitre8.js",
                        "_varName": "chapterData_3eme_8"
                    }
                ]
            },
            {
                "name": "GRANDEURS ET MESURES",
                "chapters": [
                    {
                        "id": 9,
                        "title": "Grandeurs et mesures",
                        "eleve": "non",
                        "_file": "data/official/officialData_3eme_chapitre9.js",
                        "_varName": "chapterData_3eme_9"
                    }
                ]
            },
            {
                "name": "ESPACE ET GÉOMÉTRIE",
                "chapters": [
                    {
                        "id": 10,
                        "title": "Triangle rectangle",
                        "eleve": "non",
                        "_file": "data/official/officialData_3eme_chapitre10.js",
                        "_varName": "chapterData_3eme_10"
                    },
                    {
                        "id": 11,
                        "title": "Triangles et parallèles",
                        "eleve": "non",
                        "_file": "data/official/officialData_3eme_chapitre11.js",
                        "_varName": "chapterData_3eme_11"
                    },
                    {
                        "id": 12,
                        "title": "Trigonométrie",
                        "eleve": "non",
                        "_file": "data/official/officialData_3eme_chapitre12.js",
                        "_varName": "chapterData_3eme_12"
                    },
                    {
                        "id": 13,
                        "title": "Transformations",
                        "eleve": "non",
                        "_file": "data/official/officialData_3eme_chapitre13.js",
                        "_varName": "chapterData_3eme_13"
                    },
                    {
                        "id": 14,
                        "title": "Espace",
                        "eleve": "non",
                        "_file": "data/official/officialData_3eme_chapitre14.js",
                        "_varName": "chapterData_3eme_14"
                    }
                ]
            }
        ]
    }
];
