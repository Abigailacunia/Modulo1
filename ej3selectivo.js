const leer = require("prompt-sync")();
const PLANTA_APTA1 = "Mandragora";
const PLANTA_APTA2 = "Valeriana";
const PLANTA_TOXICA1 = "Bubotuber";
const PLANTA_TOXICA2 = "Whomping Willow";
const TITULO = "*** Revisión de planta adquirida ***";
const MSJ2 = "Planta presentada: "
const PLANTA_APTA_SI = "Buen ejemplar, toma asiento para iniciar el examen!"
const PLANTA_TOXICA_SI = "No es posible iniciar el examen con esta planta peligrosa!"

function main() {
    let nombrePlanta = "Ingrese nombre";
    console.log("Ingrese nombre de planta");
    nombrePlanta = leer();

    if (nombrePlanta == PLANTA_APTA1 || nombrePlanta == PLANTA_APTA2) {
        console.log(TITULO);
        console.log(MSJ2 + nombrePlanta);
        console.log(PLANTA_APTA_SI);
    }
    else if (nombrePlanta == PLANTA_TOXICA1 || nombrePlanta == PLANTA_TOXICA2) {
        console.log(TITULO);
        console.log(MSJ2 + nombrePlanta);
        console.log(PLANTA_TOXICA_SI);

    } else {
        console.log("Planta no aceptada");
    }
}
main();