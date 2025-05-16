const leer = require("prompt-sync")();

function main() {
    let codigoHechizo = -1;
    let nivelDificultad = -1;

    console.log("Ingrese el nivel de complejidad del hechizo [1] o [2]");
    nivelDificultad = Number(leer());

    switch (nivelDificultad) {
        case 1:
            console.log("Ingrese el codigo del hechizo");
            codigoHechizo = leer();
            switch (codigoHechizo) {
                case "3245":
                    console.log("Wingardium Leviosa");
                    break;
                case "2312":
                    console.log("Expelliarmus");
                    break;
                default:
                    console.log("Hechizo no encontrado");
                    break;
            }
            break;
        case 2:
            console.log("Ingrese el codigo del hechizo");
            codigoHechizo = leer();
            switch (codigoHechizo) {
                case "5231":
                    console.log("Expecto Patronum");
                    break;
                case "0124":
                    console.log("Avada Kedavra");
                    break;
                default:
                    console.log("Hechizo no encontrado");
                    break;
            }
            break;
        default:
            console.log("Nivel incorrecto, pruebe nuevamente");
            break;
    }



}

main();