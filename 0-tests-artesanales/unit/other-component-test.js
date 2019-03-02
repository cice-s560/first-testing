const divide = require("../other-component");

// Cuando dividimos 4 el resultado debe ser 2
function divideCuatro() {
    console.log("El resultado de dividir 4 debe ser 2 => ", divide(4) === 2);
}

// Cuando dividimos 6 el resultado debe ser 3
function divideSeis() {
    console.log("El resultado de dividir 6 debe ser 3 => ", divide(6) === 3);
}


divideCuatro();
divideSeis();