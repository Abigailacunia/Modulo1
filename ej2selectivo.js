const leer = require("prompt-sync")();
const CASA_GRIF = "Gryffindor";
const CASA_GRIF_PUNTOS = 90
const CASA_HUFFL = "Hufflepuff";
const CASA_HUFFL_PUNTOS = 70;
const CASA_RAVEN = "Ravenclaw";
const CASA_RAVEN_PUNTOS = 50;
const CASA_SLYTH = "Slytherin";
const TITULO = "*** Casa asignada***";
const RESULTADO_EXAMEN = "Resultado de examen";

function main() {
    let puntuacionExamen = -1;
    console.log("Ingrese la puntuación de examen");
    puntuacionExamen = Number(leer());

    if (puntuacionExamen >= CASA_GRIF_PUNTOS) {
        console.log(TITULO);
        console.log(RESULTADO_EXAMEN + ": " + puntuacionExamen);
        console.log("Bienvenido, valiente " + CASA_GRIF + ". Tu coraje es tu mayor fuerza. Enfrenta cada desafío con valentía, como lo haría Godric Gryffindor.");
    }
    else if (puntuacionExamen >= CASA_HUFFL_PUNTOS) {
        console.log(TITULO);
        console.log(RESULTADO_EXAMEN + ": " + puntuacionExamen);
        console.log("Bienvenido, astuto " + CASA_HUFFL);
    }
    else if (puntuacionExamen >= CASA_RAVEN_PUNTOS) {
        console.log(TITULO);
        console.log(RESULTADO_EXAMEN + ": " + puntuacionExamen);
        console.log("Bienvenido, valiente " + CASA_RAVEN);
    } else {
        console.log(TITULO);
        console.log(RESULTADO_EXAMEN + ": " + puntuacionExamen);
        console.log("Bienvenido, astuto " + CASA_SLYTH + ". La ambición y la astucia te guiarán. Como decía Salazar Slytherin, 'La grandeza está al alcance de los audaces.");

    }
}
        
main();