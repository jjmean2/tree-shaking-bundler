export function print(...value) {
  console.log("This is print");
  console.log(...value);
}

export function printError(...value) {
  console.log("This is printError");
  console.error(...value);
}

export function printWarn(...value) {
  console.log("This is printWarn");
  console.warn(...value);
}
