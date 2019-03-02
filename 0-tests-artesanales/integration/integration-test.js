const suma = require("../component");
const divide = require("../other-component");

function operate(number) {
    const resultSuma = suma(number);

    return divide(resultSuma);
}

// Cuando sumamos 6 le dividimos resultando 4
console.log("Usando 6 la operación devuelve 3", operate(6) === 4);
// Cuando sumamos 10 le dividimos resultando 6
console.log("Usando 10 la operación devuelve 6", operate(10) === 6);