const leer = require("prompt-sync")();


function main() {
    const nombres = ["HARRY", "DRACO", "LUNA"];
    const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
    const asistencia = [];
    let presente = 0;
    let nombreEstudiante = "";
    let filaestudiante = -1;
    for (let i = 0; i < nombres.length; i++) {
        asistencia.push([]);
        console.log(nombres[i]);

        for (let n = 0; n < dias.length; n++) {
            console.log("¿Asistió el día " + dias[n] + "? [1]SI - [0]NO");
            asistencia[i].push(leer());
        }
    }
    console.log(asistencia);
    console.log("*** Iniciando revisión de asistencia ***\n");
    console.log("Consulta asistencia en Hogwarts");
    console.log("Ingresa el nombre del alumno (Harry, Draco, Luna): ");

    nombreEstudiante = leer().toUpperCase();
    filaestudiante = nombres.indexOf(nombreEstudiante);

    //for (let i = 0; i < asistencia.length; i++) {
    if (filaestudiante >= 0) {
        for (let n = 0; n < asistencia[filaestudiante].length; n++) {
            if (asistencia[filaestudiante][n] == 1) {
                presente++;
            }
        }
        console.log(nombreEstudiante + " asistió " + presente + " días.");

    } else {
        console.log("Alumno " + nombreEstudiante + " no encontrado.");

    }
    // }

}

main();