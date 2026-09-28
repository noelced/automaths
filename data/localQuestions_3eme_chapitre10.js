// ============================================================
// data/localQuestions_3eme_chapitre10.js — 3ème, chapitre 10 : Triangle rectangle
// ============================================================
// Généré à partir de l'ancien data/localQuestions.js.
// Clés renumérotées au format 6 chiffres : [niveau][chapitre 2 chiffres]
// [n° partie H2][n° sous-partie H3][n° questionnaire dans la sous-partie].
// Contenu des questions strictement inchangé, seule la clé a changé —
// voir le rapport de correspondance mapping_3eme.csv pour
// retrouver l'ancienne clé de chaque questionnaire.
// ============================================================

const localQuestions_3eme_chapitre10 = {
    "310911": [
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
        options: '5m ¤ 8m ¤ 7m',
        explanation: 'On utilise le théorème de Pythagore : $AB^2 + AC^2 = BC^2 \\Rightarrow AB = \\sqrt{BC^2 - AC^2}$' 
    }
]
};
