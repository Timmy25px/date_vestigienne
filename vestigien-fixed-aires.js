// ======= fichier : vestigien-fixed-aires.js =======

// Fonction pour calculer la date vestigienne à partir de la date actuelle
function calculDateVestigienne() {
    const debutVestigien = new Date(2020, 0, 1); // point de départ (ex: 01/01/2020 Grégorien)
    const now = new Date();
    const diffMs = now - debutVestigien;
    const joursVestigien = diffMs / (1000 * 60 * 60 * 24); // convertir en jours
    const anneeVestigienne = Math.floor(joursVestigien / 366) + 1; // ~366 jours/an
    return anneeVestigienne.toString().padStart(4,'0'); // format 0001, 0002...
}

// Fonction pour récupérer l'aire correspondant à l'année vestigienne
function getAire(year) {
    const aires = [
        { start: 0, end: 420, name: "Aire de l’Émergence Temporelle" },
        { start: 421, end: 890, name: "Aire de la Conscience Naissante" },
        { start: 891, end: 1330, name: "Aire des Premières Traces" },
        { start: 1331, end: 1780, name: "Aire de la Mémoire Vive" },
        // ... ajoute toutes les aires existantes ici ...
        { start: 999601, end: 1000000, name: "Aire des Étoiles Infinies" }
    ];

    const num = parseInt(year, 10);
    for (let i = 0; i < aires.length; i++) {
        if (num >= aires[i].start && num <= aires[i].end) {
            return aires[i].name;
        }
    }
    return "Aire inconnue";
}

// ======== Logique principale ========

// Vérifier si une année vestigienne est déjà stockée
let yearVestigien = localStorage.getItem('yearVestigien');
if (!yearVestigien) {
    yearVestigien = calculDateVestigienne();
    localStorage.setItem('yearVestigien', yearVestigien);
}

// Récupérer l'aire
const aireActuelle = getAire(yearVestigien);

// ======== Affichage (exemple) ========
// Tu peux lier ça à ton HTML via un id spécifique
document.addEventListener("DOMContentLoaded", function() {
    const anneeElem = document.getElementById("annee-vestigienne");
    const aireElem = document.getElementById("aire-vestigienne");
    if (anneeElem) anneeElem.textContent = yearVestigien;
    if (aireElem) aireElem.textContent = aireActuelle;
});
