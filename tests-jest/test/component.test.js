const suma = require("../component");

// Escenario
describe("Testeando el componente Suma", () => {
  // Testear casos dentro de este escenario
  it("should add 4 it returns 6", () => {
    const resultado = suma(4);
    const expected = 6;

    expect(resultado).toEqual(expected);
  });
});
