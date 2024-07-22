export function now() {
  // console.log("This is now");
  return new Date();
}

export function addDays(date, days) {
  // console.log("This is addDays");
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function subDays(date, days) {
  // console.log("This is subDays");
  return addDays(date, -days);
}

export const dateMin = new Date(-8640000000000000); //?
export const dateMax = new Date(8640000000000000); //?
