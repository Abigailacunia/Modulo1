const leer = require("prompt-sync")();
const CANT_TURNOS = 5;
const TURNO_PERDIDO = 75;
const TURNO_GANADO = 267;
const HECHIZO_CORRECTO = "PATRONUS"

function main() {
    let vidaDementor = 1000;
    let vidaEstudiante = 350;
    let hechizoIngresado = "Ingrese hechizo";
    let turnosRestantes = CANT_TURNOS;

    for (let i = 0; i < CANT_TURNOS; i++) {
        console.log("turnos restantes: " + turnosRestantes);
        console.log("estudiante: " + vidaEstudiante + " / dementor: " + vidaDementor);
        console.log("\t¡¡¡Usa el hechizo!!!");
        hechizoIngresado = leer().toUpperCase();
        turnosRestantes--;
        if (hechizoIngresado == HECHIZO_CORRECTO) {
            vidaDementor -= TURNO_GANADO;
            console.log("Acertaste: " + TURNO_GANADO + " infligido al dementor.");

            if (vidaDementor <= 0) {
                console.log("¡¡¡ Felicitaciones ganaste!!!");
                i = CANT_TURNOS;
            }
        } else {
            vidaEstudiante -= TURNO_PERDIDO;
            console.log("Fallaste: " + TURNO_PERDIDO + " daño recibido.");

            if (vidaEstudiante <= 0) {
                console.log("Lo siento perdiste :(");
                i = CANT_TURNOS;


            }
        }
    }
}

main();