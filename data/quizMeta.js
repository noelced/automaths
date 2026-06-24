// ============================================================
// data/quizMeta.js — Métadonnées des questionnaires
// ============================================================
// Mapping : quiz_key -> { level, chapter } + comptages
// Utilisé par student-dashboard.html pour :
//   - Calculer le % de réussite par niveau (total questions)
//   - Afficher les chapitres à revalider (>30 jours)
//   - Savoir à quel niveau/chapitre appartient chaque quiz_key
//
// Mis à jour automatiquement : si vous ajoutez des quizzes,
// relancez le script /tmp/gen_quiz_meta3.js pour régénérer.

const quizMeta = {
    // Mapping quiz_key -> niveau et chapitre
    byKey: {
        "31101": {
                "level": "3ème",
                "chapter": "Nombres et calculs (Relatifs, fractions, racine carrée, puissances)"
        },
        "31201": {
                "level": "3ème",
                "chapter": "Nombres et calculs (Relatifs, fractions, racine carrée, puissances)"
        },
        "31301": {
                "level": "3ème",
                "chapter": "Nombres et calculs (Relatifs, fractions, racine carrée, puissances)"
        },
        "31401": {
                "level": "3ème",
                "chapter": "Nombres et calculs (Relatifs, fractions, racine carrée, puissances)"
        },
        "31501": {
                "level": "3ème",
                "chapter": "Nombres et calculs (Relatifs, fractions, racine carrée, puissances)"
        },
        "32121": {
                "level": "3ème",
                "chapter": "Arithmétique"
        },
        "32211": {
                "level": "3ème",
                "chapter": "Arithmétique"
        },
        "32212": {
                "level": "3ème",
                "chapter": "Arithmétique"
        },
        "32221": {
                "level": "3ème",
                "chapter": "Arithmétique"
        },
        "32231": {
                "level": "3ème",
                "chapter": "Arithmétique"
        },
        "32301": {
                "level": "3ème",
                "chapter": "Arithmétique"
        },
        "32302": {
                "level": "3ème",
                "chapter": "Arithmétique"
        },
        "32401": {
                "level": "3ème",
                "chapter": "Arithmétique"
        },
        "32501": {
                "level": "3ème",
                "chapter": "Arithmétique"
        },
        "32511": {
                "level": "3ème",
                "chapter": "Arithmétique"
        },
        "32521": {
                "level": "3ème",
                "chapter": "Arithmétique"
        },
        "33101": {
                "level": "3ème",
                "chapter": "Calcul littéral"
        },
        "33102": {
                "level": "3ème",
                "chapter": "Calcul littéral"
        },
        "33103": {
                "level": "3ème",
                "chapter": "Calcul littéral"
        },
        "33104": {
                "level": "3ème",
                "chapter": "Calcul littéral"
        },
        "33201": {
                "level": "3ème",
                "chapter": "Calcul littéral"
        },
        "33301": {
                "level": "3ème",
                "chapter": "Calcul littéral"
        },
        "33411": {
                "level": "3ème",
                "chapter": "Calcul littéral"
        },
        "33421": {
                "level": "3ème",
                "chapter": "Calcul littéral"
        },
        "33431": {
                "level": "3ème",
                "chapter": "Calcul littéral"
        },
        "33511": {
                "level": "3ème",
                "chapter": "Calcul littéral"
        },
        "33521": {
                "level": "3ème",
                "chapter": "Calcul littéral"
        },
        "33601": {
                "level": "3ème",
                "chapter": "Calcul littéral"
        },
        "33701": {
                "level": "3ème",
                "chapter": "Calcul littéral"
        },
        "33702": {
                "level": "3ème",
                "chapter": "Calcul littéral"
        },
        "34201": {
                "level": "3ème",
                "chapter": "Équations"
        },
        "34301": {
                "level": "3ème",
                "chapter": "Équations"
        },
        "34302": {
                "level": "3ème",
                "chapter": "Équations"
        },
        "34303": {
                "level": "3ème",
                "chapter": "Équations"
        },
        "34401": {
                "level": "3ème",
                "chapter": "Équations"
        },
        "34402": {
                "level": "3ème",
                "chapter": "Trigonométrie"
        },
        "3_10_101": {
                "level": "3ème",
                "chapter": "Triangle rectangle"
        }
},

    // Nombre de questions par quiz_key
    questionCount: {
        "31101": 10,
        "31201": 11,
        "31301": 10,
        "31401": 10,
        "31501": 9,
        "32121": 10,
        "32211": 10,
        "32212": 10,
        "32221": 10,
        "32231": 9,
        "32301": 10,
        "32302": 10,
        "32401": 10,
        "32501": 11,
        "32511": 10,
        "32521": 10,
        "33101": 15,
        "33102": 10,
        "33103": 10,
        "33104": 10,
        "33201": 10,
        "33301": 10,
        "33411": 10,
        "33421": 10,
        "33431": 10,
        "33511": 10,
        "33521": 10,
        "33601": 10,
        "33701": 10,
        "33702": 11,
        "34201": 10,
        "34301": 10,
        "34302": 10,
        "34303": 10,
        "34401": 10,
        "34402": 10,
        "3_10_101": 1
},

    // Total de questions par niveau (pour la barre de progression globale)
    totalByLevel: {
        "3ème": 367
}
};
