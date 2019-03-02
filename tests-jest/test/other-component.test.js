const divide = require("../other-component");

// No estoy obligado a usar describe/it
test("Return 5 when input is 10", () => {
  const result = divide(10);
  const expected = 5;

  expect(result).toBeGreaterThan(4);
  expect(result).toEqual(expected);
});
