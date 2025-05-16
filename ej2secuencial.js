const leer = require ("prompt-sync")();


/**
 * Funcion principal del programa
 */
function main(){
    let horaSalidaVuelo = 0;
    let horaLlegadaAeropuerto =0;
    let estadoChekIn =true;
    let equipajeEntregado =true;
    let poseeTarjetaImpresa =true;
    let poseeTarjetaDigital =true;
    let opciones = " (True o False)"
    let llegadaTemprano = true;
    let poseeTarjeta = true;
    let resultadoRequerimiento = true;

    console.log("Ingrese horario de llegada");
    horaLlegadaAeropuerto = Number (leer());
    console.log("Ingresa horario de salida del vuelo");
    horaSalidaVuelo =Number (leer());
    console.log("¿Realizo el CheckIn?" + opciones);
    estadoChekIn = leer();
    console.log("¿Entrego el equipaje?" + opciones);
    equipajeEntregado = leer();
    console.log("¿Posee Tarjeta Impresa?" + opciones);
    poseeTarjetaImpresa = leer();
    console.log("¿Posee Tarjeta Digital?"+ opciones);
    poseeTarjetaDigital = leer();

    llegadaTemprano = (horaSalidaVuelo - horaLlegadaAeropuerto) >=3;
    
    console.log(llegadaTemprano);
    
    
    




}

main();