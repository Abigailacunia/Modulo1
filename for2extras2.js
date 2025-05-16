const leer = require("prompt-sync")();
const CANT_TURNOS = 5;
const TURNO_PERDIDO = 75;
const TURNO_GANADO_1 = 267;
const TURNO_GANADO_2 = 534;
const HECHIZO_CORRECTO_1 = "PATRONUS";
const HECHIZO_CORRECTO_2 = "EXPELLIARMUS";
const PORCENTAJE_ACIERTO_ESTUDIANTE = 0.7;
const PORCENTAJE_ACIERTO_DEMENTOR = 0.05;
const ataqueAdicional = 0;

function main() {
    let vidaDementor = 1000;
    let vidaEstudiante = 350;
    let hechizoIngresado = "Ingrese hechizo";
    let turnosRestantes = CANT_TURNOS;
    let probabilidadAcierto = Math.random();

    for (let i = 0; i < CANT_TURNOS; i++) {
        console.log("turnos restantes: " + turnosRestantes);
        console.log("estudiante: " + vidaEstudiante + " / dementor: " + vidaDementor);
        console.log("\t¡¡¡Usa el hechizo!!!");
        hechizoIngresado = leer().toUpperCase();
        turnosRestantes--;
        ataqueAdicional++;
        if (hechizoIngresado == HECHIZO_CORRECTO_1 || hechizoIngresado == HECHIZO_CORRECTO_2) {
            if (hechizoIngresado == HECHIZO_CORRECTO_1) {
                vidaDementor -= TURNO_GANADO_1;
                console.log("Acertaste: " + TURNO_GANADO_1 + " infligido al dementor.");
            }
            else if (hechizoIngresado == HECHIZO_CORRECTO_2 && probabilidadAcierto > PORCENTAJE_ACIERTO_ESTUDIANTE) {
                vidaDementor -= TURNO_GANADO_2;
                console.log("Acertaste: " + TURNO_GANADO_2 + " infligido al dementor.");
            }
            else if (probabilidadAcierto < PORCENTAJE_ACIERTO_ESTUDIANTE) {
                console.log("¡Esquivó el ataque!");
            }
            if (vidaDementor <= 0) {
                console.log("¡¡¡ Felicitaciones ganaste!!!");
                i = CANT_TURNOS;
            }

        } else {
            vidaEstudiante -= TURNO_PERDIDO;
            console.log("Fallaste: " + TURNO_PERDIDO + " daño recibido.");
            if(ataqueAdicional == 2 && probabilidadAcierto < PORCENTAJE_ACIERTO_DEMENTOR){
                vidaEstudiante-=TURNO_PERDIDO;
            }

            if (vidaEstudiante <= 0) {
                console.log("Lo siento perdiste :(");
                i = CANT_TURNOS;
            }
        }
        if (ataqueAdicional == 2) {
            ataqueAdicional = 0;
            
        }

    }
}

main();