export const k2 = (() => {
  const k2 = {};

  return k2;
})();

export const math = (() => {
  const math = {};

  math.common = (() => {
    const common = {};

    common.add = function add(a, b) {
      return a + b;
    };

    common.subtract = function subtract(a, b) {
      return a - b;
    };

    common.multiply = function multiply(a, b) {
      return a * b;
    };

    common.divide = function divide(a, b) {
      return a / b;
    };

    return common;
  })();

  return math;
})();

export const text = (() => {
  const text = {};

  text.toUpper = function toUpper(str) {
    return str.toUpperCase();
  };

  text.toLower = function toLower(str) {
    return str.toLowerCase();
  };

  return text;
})();
