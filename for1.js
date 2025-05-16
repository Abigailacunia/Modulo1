const leer = require("prompt-sync")();
const HECHIZO_CORRECTO_1 = "WINGARDIUM LEVIOSA";
const HECHIZO_CORRECTO_2 = "EXPELLIARMUS";
const HECHIZO_CORRECTO_3 = "EXPECTO PATRONUM";


function main() {
    let hechizoIngresado = "Ingrese hechizo";
    let maxIntentosIngresados = -1;
    let intentosRestantes = 0;
    let opcionHechizo = "Ingrese opción"
    console.log("Ingrese cantidad de intentos");
    maxIntentosIngresados = Number(leer());
    intentosRestantes = maxIntentosIngresados;
    console.log("Ingrese una opción [A] [B] [C]");
    opcionHechizo = leer().toUpperCase();

    switch (opcionHechizo) {
        case "A":
            console.log("Encantamiento que, al ser pronunciado y realizado con una varita, hace que los objetos, incluso los más pesados, leviten");
            for (i = 0; i < maxIntentosIngresados; i++) {
                console.log("Ingrese nombre de hechizo");
                hechizoIngresado = leer().toUpperCase();
                if (hechizoIngresado == HECHIZO_CORRECTO_1) {
                    console.log(hechizoIngresado);
                    console.log("¡Correcto!");
                    i = maxIntentosIngresados;
                } else {
                    intentosRestantes--;
                    console.log(hechizoIngresado);
                    console.log("error - intentos restantes: " + intentosRestantes);
                }
            }
            break;
        case "B":
            console.log("Desarma a la persona a la que se le lanza.");
            for (i = 0; i < maxIntentosIngresados; i++) {
                console.log("Ingrese nombre de hechizo");
                hechizoIngresado = leer().toUpperCase();
                if (hechizoIngresado == HECHIZO_CORRECTO_2) {
                    console.log(hechizoIngresado);
                    console.log("¡Correcto!");
                    i = maxIntentosIngresados;
                } else {
                    intentosRestantes--;
                    console.log(hechizoIngresado);
                    console.log("error - intentos restantes: " + intentosRestantes);
                }
            }
            break;
        case "C":
            console.log("Crea un guardián mágico, un Patronus, para proteger contra los dementores.");
            for (i = 0; i < maxIntentosIngresados; i++) {
                console.log("Ingrese nombre de hechizo");
                hechizoIngresado = leer().toUpperCase();
                if (hechizoIngresado == HECHIZO_CORRECTO_3) {
                    console.log(hechizoIngresado);
                    console.log("¡Correcto!");
                    i = maxIntentosIngresados;
                } else {
                    intentosRestantes--;
                    console.log(hechizoIngresado);
                    console.log("error - intentos restantes: " + intentosRestantes);
                }
            }
            break;
        default:
            console.log("Opción incorrecta");
            break;
    }

}

main();