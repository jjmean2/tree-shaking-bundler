export const print = (() => {
  console.log("generating print");
  return function print(str) {
    console.log(str);
  };
})();

export const magicNumber = (() => {
  console.log("generating constant");
  return 30;
})();

export const add = (() => {
  return function add(a, b) {
    console.log("This is add");
    return a + b;
  };
})();

export const magicString = (() => {
  return "Magic";
})();

export const namespace = (() => {
  const ns = {};
  return 30;
})();
