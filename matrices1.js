const leer = require ("prompt-sync")();


function main(){
   const matriz = [];

   for(let i = 0; i<5; i++){
    matriz.push([]);
    console.log(matriz[i]);
    
    for(let n = 0; n<5; n++){
        matriz[i].push(n);
        console.log(matriz[i][n]);
        
    }
    
   }
console.table(matriz);
}

main();