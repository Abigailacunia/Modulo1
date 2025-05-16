const leer = require("prompt-sync")();

const VARITAS_MULTIPLO = 3;
const LIBROS_MULTIPLO = 2;

function main() {
    let cantEstudiantes = 0;
    let cantVaritas = 0;
    let cantLibros = 0;

    console.log("Ingrese la cantidad de estudiantes");
    cantEstudiantes = Number(leer());
    console.log("Ingrese la cantidad de estudiantes con varitas");
    cantVaritas = Number(leer());
    console.log("Ingrese la cantidad de libros");
    cantLibros = Number(leer());

    console.log("\t ***Resumen de materiales***\n");
    console.log("Estudiantes: " + cantEstudiantes);
    console.log("Estudiantes con varita: " + cantVaritas);
    console.log("Cantidad de libros: " + cantLibros);
    console.log("\nTotal de materiales: " + (cantVaritas * VARITAS_MULTIPLO + cantLibros * LIBROS_MULTIPLO));
}

main();