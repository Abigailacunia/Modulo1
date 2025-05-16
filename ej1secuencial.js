const leer = require ("prompt-sync")();


/**
 * Funcion principal del programa
 */
function main(){
    
   let tarjetaSube = 0; 
   let saldoInicial = 0;
   let medioDePago = "efectivo";
   let valorDeCarga = 0;

   console.log("Apoye la tarjeta sube en la terminal");
   console.log("Ingrese número o nombre de tarjeta");
   tarjetaSube = leer();
   console.log("Ingrese saldo actual de tarjeta");
   saldoInicial = Number(leer());
   console.log("¿Pagará con efectivo, tarjeta o app de pago?");
   medioDePago = leer();
   console.log("Ingrese monto a recargar");
   valorDeCarga = Number(leer());

   console.log("Tarjeta "+ tarjetaSube+" con saldo inicial de $" + saldoInicial + ". Opción de pago :" + medioDePago + ". Incrementa su saldo en $" + valorDeCarga + ".");
   console.log("Saldo de tarjeta actual: $ "+(saldoInicial + valorDeCarga));
   console.log( "Gracias por usar nuestros servicios!");


   


    
   

}

main();