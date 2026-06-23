// ============================================================
// data/chartsData.js — Données des graphiques (Chart.js)
// ============================================================
// Séparé des fichiers de chapitre pour faciliter l'édition des données
// de graphiques indépendamment du contenu pédagogique. Séparé
// aussi de js/charts.js : ici uniquement les DONNÉES, là-bas
// uniquement la LOGIQUE de construction des graphiques.
//
// Pour ajouter un nouveau graphique :
//   1. Ajoutez une entrée ici avec un identifiant unique (la clé)
//   2. Créez une fonction drawXxx() dans js/charts.js qui lit
//      cette entrée et construit le graphique Chart.js
//   3. Dans le fichier de chapitre concerné (data/official/...), ajoutez un <canvas id="..."></canvas>
//      avec un ID qui correspond à la fonction de dessin
//   4. Appelez votre fonction drawXxx() dans js/charts.js, dans
//      renderAllCharts() (voir ce fichier pour l'exemple)
// ============================================================

const chartData = {
    histogrammeTailles: {
        labels: ['130-140', '140-150', '150-160', '160-170', '170-180'],
        values: [2, 4, 7, 12, 3]
    }
};
