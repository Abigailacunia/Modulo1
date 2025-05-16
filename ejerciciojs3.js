const leer = require ("prompt-sync")(); 
const TIEMPO_EXACTO = 3;
const GRAMOS_MIN = 5;
const GRAMOS_MAX = 10;

function main(){
    let gramosIngrediente = 0;
    let tiempoPreparacion = 0;
    let gramosCorrectosIngr = false;
    let tiempoCorrectoPrep = false;

    console.log("Ingrese cuantos gramos de ingrediente principal utilizó"); 
    gramosIngrediente = Number(leer());
    console.log("Ingrese cuantas horas tardó en la preparación");
    tiempoPreparacion = Number(leer());

    gramosCorrectosIngr = gramosIngrediente => GRAMOS_MIN && gramosIngrediente <= GRAMOS_MAX;
    tiempoCorrectoPrep = tiempoPreparacion == TIEMPO_EXACTO;
   

    console.log("\t ***Resultado de preparación***\n");
    console.log("Cantidad dentro del rango: " + gramosCorrectosIngr);
    console.log("Tiempo de preparación exacto: " + tiempoCorrectoPrep);
    console.log("\nApto para consumo: "+ (gramosCorrectosIngr && tiempoCorrectoPrep)); 
}

main();