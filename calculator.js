const add = (x, y) => {
  return x + y;
};

// const subtract = (x, y) => {
//   return x - y;
// };

const subtract = (x, y) => {
  var subtract;
  // Refactored code to write an exception for strings when trying to subtract
  if (isNaN(x) || isNaN(y)) {
    subtract = "Invalid";
  } else {
    subtract = x - y;
  }
  return subtract;
};

const multiply = (x, y) => {
  return x * y;
};

const divide = (x, y) => {
  return x / y;
};

const clearAllfields = () => {
  return 0;
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  clearAllfields,
};
