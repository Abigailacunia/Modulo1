const leer = require("prompt-sync")();
const VARITA_0 = "Fenix - ¡Excelente elección! Las varitas con núcleo de fénix son poderosas y leales.";
const VARITA_1 = "Unicornio - Las varitas con núcleo de unicornio son conocidas por su pureza y fuerza."
const VARITA_2 = "Dragón - ¡Cuidado! Las varitas con núcleo de dragón son poderosas pero pueden ser temperamentales."
const OTRA_VARITA = "No reconocemos ese tipo de núcleo. Por favor, ingrese un núcleo válido."
const TITULO = "*** Detalles de nucleo ";
const FIN_MSJ = "*** Fin del mensaje ***";

function main() {

    let idVarita = -1;
    console.log("Ingrese ID de núcleo de varita [0]-[1]-[2]-OTRO");
    idVarita = Number(leer());

    switch (idVarita) {
        case 0:
            console.log(TITULO + "[0] Fenix***");
            console.log(VARITA_0);
            console.log(FIN_MSJ);
            break;
        case 1:
            console.log(TITULO + "[1] Unicornio***");
            console.log(VARITA_1);
            console.log(FIN_MSJ);
            break;
        case 2:
            console.log(TITULO + "[2] Dragón***");
            console.log(VARITA_2);
            console.log(FIN_MSJ);
            break;
        default:
            console.log(OTRA_VARITA);
            break;
    }

}

main();