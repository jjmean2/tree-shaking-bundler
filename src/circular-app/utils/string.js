import { circularNow } from "./date.js";

export function toUpperCase(str) {
  // console.log("This is toUpperCase");
  return str.toUpperCase();
}

export function toDate(str) {
  return new Date(str);
}

export function circularToDate(str) {
  const current = circularNow();
  const date = new Date(str);
  date.setMilliseconds(current.getMilliseconds());
  return date;
}
