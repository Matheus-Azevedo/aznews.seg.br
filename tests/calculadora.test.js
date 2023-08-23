// Test of test - Calculator exemple

describe("Testing...", () => {
  test("The jest", callBackFunction);

  function callBackFunction() {
    console.log("The jest is working");
  }
});

describe("Calculator: testing sum", () => {
  test("Sum 1 + 2 =  3", () => {
    expect(1 + 2).toBe(3);
  });
});
