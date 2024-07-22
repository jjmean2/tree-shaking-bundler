const $root = {};

export const k2root = ($root.k2root = (() => {
  const k2root = {};

  return k2root;
})());

export const mathroot = ($root.mathroot = (() => {
  const mathroot = {};

  mathroot.common = (() => {
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

  return mathroot;
})());

export const textroot = ($root.textroot = (() => {
  const textroot = {};

  textroot.toUpper = function toUpper(str) {
    return str.toUpperCase();
  };

  textroot.toLower = function toLower(str) {
    return str.toLowerCase();
  };

  return textroot;
})());
