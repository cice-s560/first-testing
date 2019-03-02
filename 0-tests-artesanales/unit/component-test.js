const suma = require("../component");

// Cuando sumamos 4 debe dar 6
function testeaSumaCuatro() {
    console.log("El resultado de sumar 4 debe ser 6 => ", suma(4) === 6);
}

// Cuando sumamos 5 debe dar 7
function testeaSumaCinco() {
    console.log("El resultado de sumar 5 debe ser 7 => ", suma(5) === 7);
}


testeaSumaCuatro();
testeaSumaCinco();