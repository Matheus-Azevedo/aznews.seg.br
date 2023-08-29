// Test of test - Calculator exemple

// Imports
const calculadora = require("../../Concept/calculadora");

describe("Testing:", () => {
  test("The jest", callBackFunction);

  function callBackFunction() {
    console.log("The jest is working");
  }
});

describe("Calculator Simulator:", () => {
  test("Sum: 1 + 2 =  3", () => {
    expect(1 + 2).toBe(3);
  });
});

describe("Calculadora:", () => {
  describe("Função: somar", () => {
    test("1 + 2 = 3", () => {
      const resultado = calculadora.somar(1, 2);
      expect(resultado).toBe(3);
    });
    test("1 + 2 != 4", () => {
      const resultado = calculadora.somar(1, 2);
      expect(resultado).not.toBe(4);
    });
  });
  describe("Função: subtrair", () => {
    test("1 - 2 = -1", () => {
      const resultado = calculadora.subtrair(1, 2);
      expect(resultado).toBe(-1);
    });
    test("1 - 2 != 0", () => {
      const resultado = calculadora.subtrair(1, 2);
      expect(resultado).not.toBe(0);
    });
  });
  describe("Função: multiplicar", () => {
    test("1 * 2 = 2", () => {
      const resultado = calculadora.multiplicar(1, 2);
      expect(resultado).toBe(2);
    });
    test("1 * 2 != 3", () => {
      const resultado = calculadora.multiplicar(1, 2);
      expect(resultado).not.toBe(3);
    });
  });
  describe("Função: dividir", () => {
    test("1 / 2 = 0.5", () => {
      const resultado = calculadora.dividir(1, 2);
      expect(resultado).toBe(0.5);
    });
    test("1 / 2 != 0.3", () => {
      const resultado = calculadora.dividir(1, 2);
      expect(resultado).not.toBe(0.3);
    });
  });
});
