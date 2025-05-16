const leer = require("prompt-sync")();

function main() {
    let numeroIngresado = 0;
    console.log("Ingresa un número");
    numeroIngresado = Number(leer());

    if(numeroIngresado > 0){
        console.log("Esto es positivo");        
    }else if(numeroIngresado <0){
        console.log("Esto es negativo");
    }else{
        console.log("Esto es cero");        
    }    
      
}
main();