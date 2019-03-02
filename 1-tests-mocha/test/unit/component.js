const assert = require("assert");
const suma = require("../../component");

// Escenario
describe("Testeando el componente Suma", () => {
  // Testear casos dentro de este escenario
  it("should add 4 it returns 6", () => {
    const resultado = suma(4);
    const expeted = 6;

    assert.strictEqual(resultado, expeted, "El resultado debería ser 4");
  });

  // Testear casos dentro de este escenario
  it("should fail adding 4 it doesn't return 6", () => {
    const resultado = suma(4);
    const expeted = 5;

    assert.strictEqual(resultado, expeted, "El resultado debería ser 5");
  });
});
