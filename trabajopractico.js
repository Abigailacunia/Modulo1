const leer = require("prompt-sync")();
const TURNOS = 50;
const FILAS = 10;
const COLUMNAS = 10;
const MOV_ARRIBA = "W";
const MOV_ABAJO = "S";
const MOV_DERECHA = "D";
const MOV_IZQUIERDA = "A";

function mostrarTablero(tablero) {
    for (let a of tablero) {
        console.log(a.join(" "));
    }
}
function arriba(tablero, objeto) {
    borrarDelTablero(tablero, objeto);
    objeto.posicionVertical--;
    tablero[objeto.posicionVertical][objeto.posicionHorizontal] = objeto.nombre;
}
function abajo(tablero, objeto) {
    borrarDelTablero(tablero, objeto);
    objeto.posicionVertical++;
    tablero[objeto.posicionVertical][objeto.posicionHorizontal] = objeto.nombre;
}
function izquierda(tablero, objeto) {
    borrarDelTablero(tablero, objeto);
    objeto.posicionHorizontal--;
    tablero[objeto.posicionVertical][objeto.posicionHorizontal] = objeto.nombre;
}
function derecha(tablero, objeto) {
    borrarDelTablero(tablero, objeto);
    objeto.posicionHorizontal++;
    tablero[objeto.posicionVertical][objeto.posicionHorizontal] = objeto.nombre;
}
function derechaArriba(tablero, objeto) {
    borrarDelTablero(tablero, objeto);
    objeto.posicionHorizontal++;
    objeto.posicionVertical--;
    tablero[objeto.posicionVertical][objeto.posicionHorizontal] = objeto.nombre;
}
function derechaAbajo(tablero, objeto) {
    borrarDelTablero(tablero, objeto);
    objeto.posicionHorizontal++;
    objeto.posicionVertical++;
    tablero[objeto.posicionVertical][objeto.posicionHorizontal] = objeto.nombre;
}
function izquierdaArriba(tablero, objeto) {
    borrarDelTablero(tablero, objeto);
    objeto.posicionHorizontal--;
    objeto.posicionVertical--;
    tablero[objeto.posicionVertical][objeto.posicionHorizontal] = objeto.nombre;
}
function izquierdaAbajo(tablero, objeto) {
    borrarDelTablero(tablero, objeto);
    objeto.posicionHorizontal--;
    objeto.posicionVertical++;
    tablero[objeto.posicionVertical][objeto.posicionHorizontal] = objeto.nombre;
}

function borrarDelTablero(tablero, objeto) {
    tablero[objeto.posicionVertical][objeto.posicionHorizontal] = ".";
}
function patrullajeVertical(tablero, objeto, contador) {
    if (contador > (FILAS - 1)) {
        contador--;
        arriba(tablero, objeto);
    } else if (contador <= (FILAS - 1) && contador > 0) {
        contador--;
        abajo(tablero, objeto);
    } else {
        arriba(tablero, objeto);
        contador = ((FILAS - 1) * 2) - 1;
    }
    return contador;
}
function activacionCompuerta (tablero, objeto){
   borrarDelTablero(tablero, objeto);
    objeto.posicionHorizontal = objeto.posicionHorizontal + 3;
    tablero[objeto.posicionVertical][objeto.posicionHorizontal] = objeto.nombre;
}
function main() {
    const tablero = [];
    const alien = {
        nombre: "A",
        posicionHorizontal: 3,
        posicionVertical: 9
    }
    const jugador = {
        nombre: "J",
        posicionHorizontal: 0,
        posicionVertical: 5
    }
    let seleccion = "";
    let contador = (FILAS - 1) * 2;
    for (let fila = 0; fila < FILAS; fila++) {
        tablero.push([]);
        for (let columna = 0; columna < COLUMNAS; columna++) {
            tablero[fila].push(".");
        }
    }
    tablero[0][0] = "E";
    tablero[5][9] = "C";
    tablero[jugador.posicionVertical][jugador.posicionHorizontal] = jugador.nombre;
    tablero[alien.posicionVertical][alien.posicionHorizontal] = alien.nombre;
    for (let i = 0; i < TURNOS; i++) {
        console.log("Turnos restantes: " + (TURNOS - i));

        mostrarTablero(tablero);
        console.log("Ingrese un movimiento [A] [D] [W] [S]");
        seleccion = leer().toUpperCase();
        console.log(seleccion);
        //contador = patrullajeVertical(tablero, alien, contador);
        //contador = activacionCompuerta (tablero, alien, contador);
        switch (seleccion) {
            case MOV_ARRIBA:
                arriba(tablero, jugador);
                break;
            case MOV_ABAJO:
                abajo(tablero, jugador);
                break;
            case MOV_IZQUIERDA:
                izquierda(tablero, jugador);
                break;
            case MOV_DERECHA:
                derecha(tablero, jugador);
                break;
            case MOV_DERECHA + MOV_ARRIBA:
                derechaArriba(tablero, jugador);
                break;
            case MOV_DERECHA + MOV_ABAJO:
                derechaAbajo(tablero, jugador);
                break;
            case MOV_IZQUIERDA + MOV_ARRIBA:
                izquierdaArriba(tablero, jugador);
                break;
            case MOV_IZQUIERDA + MOV_ABAJO:
                izquierdaAbajo(tablero, jugador);
                break;
        }
    }
}
main();