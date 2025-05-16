const leer = require ("prompt-sync")();
const EDAD_MINIMA = 11;
function main(){

    let edadCliente = -1;
    console.log("¡Hola! Ingrese su edad.");
    edadCliente = Number(leer());
    
    if(edadCliente >= EDAD_MINIMA){
        console.log("***Verificación de compra***");
        console.log("Edad: " + edadCliente);
        console.log("¡Busquemos una varita! ¡Alguna te puede estar esperando desde hace tiempo!");
        
        
    }else if(edadCliente >= 0){
        console.log("***Verificación de compra***");
        console.log("Edad: " + edadCliente);
        console.log("Volve en " + (EDAD_MINIMA - edadCliente) +" años!");
        console.log("¡Solo a partir de los " + EDAD_MINIMA + " años pueden comprar en esta tienda!");  
    }else{
        console.log("Edad no valida");
        
    }
}

main();