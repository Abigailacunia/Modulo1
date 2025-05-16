const leer = require("prompt-sync")();
const POCION_1 = "Felix Felicis";
const POCION_2 = "Polvo de Flu";
const POCION_3 = "Multijugos";
const TITULO = "*** Info de pocion ";
const MSJ_FINAL = "*** Fin del informe ***";

function main() {
    let nombrePocion = "Ingrese nombre de poción";
    console.log("Ingrese nombre de poción (1-" + POCION_1 + "/ 2-"+ POCION_2 + "/ 3-" + POCION_3 + "/ 4-OTRO");
    nombrePocion = Number(leer());

    switch (nombrePocion) {
        case 1:
            console.log(TITULO + POCION_1 + " ***");
            console.log(POCION_1 + " - es extremadamente compleja y peligrosa.");
            console.log(MSJ_FINAL);
            break;
        case 2:
            console.log(TITULO + POCION_2 + " ***");
            console.log(POCION_2 + " - es compleja pero útil en la red de transportación.");
            console.log(MSJ_FINAL);
            break;
        case 3:
            console.log(TITULO + POCION_3 + " ***");
            console.log(POCION_3 + " - es complicada pero muy útil para transformaciones temporales.");
            console.log(MSJ_FINAL);
            break;
        default:
            console.log("No tenemos información sobre esa poción en nuestros registros.");
            break;
    }
}
main();