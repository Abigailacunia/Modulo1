const leer = require("prompt-sync")();

function main() {
    const ingredientesPermitidos = ["Raíz de valeriana", "Ojo de escarabajo", "Pluma de hipogrifo"];
    const ingredientesNoPermitidos = ["Mandrágora negra", "Sangre de dragon"];
    const ingredientesDisponibles = ["Raíz de valeriana", "Mandrágora negra", "Pluma de hipogrifo", "Ojo de escarabajo", "Sangre de dragon"];
    const ingredientesEncontrados = [];
    let ingAprobados = 0;
    let ingPeligrosos = 0;
    let cantIngredientes = 0;

    console.log("***Iniciando recolección***");
    console.log("¿Qué ingredientes encontraste?\n\n");
    for (let i = 0; i < ingredientesDisponibles.length; i++) {
        console.log(ingredientesDisponibles[i]);
        if (ingredientesPermitidos.includes(ingredientesDisponibles[i])) {
            console.log((i + 1) + "\n¡Ingrediente aceptado!\n\n");
            ingredientesEncontrados.push(ingredientesDisponibles[i]);
            ingAprobados++;

        } else if (ingredientesNoPermitidos.includes(ingredientesNoPermitidos[i])) {
            console.log((i + 1) + "\n¡Ingrediente NO aceptado, cuidado!\n\n");
            ingPeligrosos++;

        } else {
            console.log("Ingrediente erróneo");

        }
        cantIngredientes++;
        if (cantIngredientes >= 3) {
            i = ingredientesDisponibles.length;
        }
    }

    console.log("***Fin de recolección***\n");
    console.log("Informe de ingredientes encontrados:");
    for (let i = 0; i < ingredientesEncontrados.length; i++) {
        console.log(ingredientesEncontrados[i]);
    }
    if (ingAprobados > ingPeligrosos) {
        console.log("\nResultado: ¡Aprobado!");
    } else {
        console.log("\nResultado: ¡Desaprobado!");

    }
}

main();