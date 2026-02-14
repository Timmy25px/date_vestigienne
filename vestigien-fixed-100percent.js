// ======= vestigien-100percent-fixe.js =======

// Année et aire totalement fixes
const yearVestigien = "0003";  // <- fixe ici
const aireActuelle = "Aire des Premières Traces";  // <- fixe ici

// Affichage dans le HTML
document.addEventListener("DOMContentLoaded", function() {
    const anneeElem = document.getElementById("annee-vestigienne");
    const aireElem = document.getElementById("aire-vestigienne");
    if (anneeElem) anneeElem.textContent = yearVestigien;
    if (aireElem) aireElem.textContent = aireActuelle;
});
