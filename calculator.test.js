const {
  add,
  subtract,
  multiply,
  divide,
  clearAllfields,
} = require("./calculator");

// ADDITION TESTS
describe("valid additions", () => {
  test("1 + 1 = 2", () => {
    expect(add(1, 1)).toEqual(2);
    // Addition of single digit numbers
  });

  test("10 + 20 = 30", () => {
    expect(add(10, 20)).toEqual(30);
    // Addition of double digits numbers
  });
});

// SUBTRACTION TESTS
describe("valid subtractions", () => {
  test("5 - 4 = 1", () => {
    expect(subtract(5, 4)).toEqual(1);
    // Subtraction of single digit numbers
  });

  test("60 - 20 = 40", () => {
    expect(subtract(60, 40)).toEqual(20);
    // Subtraction of double digits numbers
  });
});

// SUBTRACTION TESTS WITH USE OF STRINGS
describe("Invalid if using string instead of numbers", () => {
  test("x - y = Invalid", () => {
    let x = "string";
    let y = "string";
    // if x or y was a string not a number
    let result = subtract(x, y);
    expect(result).toBe("Invalid");
    // result is invalid
  });
});

// MULTIPLACATION TESTS
describe("valid multiplacation", () => {
  test("6 * 4 = 24", () => {
    expect(multiply(6, 4)).toEqual(24);
    // Multiplacation of single digit numbers
  });

  test("20 * 20 = 400", () => {
    expect(multiply(20, 20)).toEqual(400);
    // Multiplacation of double digits numbers
  });
});

// DIVISION TESTS
describe("valid division", () => {
  test("8 / 2 = 4", () => {
    expect(divide(8, 2)).toEqual(4);
    // Division of single digit numbers
  });

  test("150 / 10 = 15", () => {
    expect(divide(150, 10)).toEqual(15);
    // Division of double digits numbers
  });
});

// DECIMAL POINTS TESTS
describe("valid equations with numbers with decimal points", () => {
  test("0.2 + 0.2 = 0.4", () => {
    expect(add(0.2, 0.2)).toEqual(0.4);
    // Addition of single digit decimal numbers
  });

  test("0.3 * 0.3 = 0.09", () => {
    expect(multiply(0.3, 0.3)).toEqual(0.09);
    // Multiplacation of double digits decimal numbers
  });
});

// CLEAR ALL FIELDS TESTS
describe("Clear fields to wipe memory and return to 0", () => {
  test("(2 + 2 = 4) + clearAllfields", () => {
    expect(clearAllfields(2, add(), 2, clearAllfields)).toEqual(0);
    // Addition equation and then clear all fields pressed
  });

  test("7 + clearAllfields", () => {
    expect(clearAllfields(7, add(), clearAllfields)).toEqual(0);
    // Single digit and addition operator pressed, followed by clearAllFields interruption
  });
});
