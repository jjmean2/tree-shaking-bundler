export function pascalCase(str) {
  console.log("This is pascalCase");
  return camelCase(str).replace(/^./, ($0) => $0.toUpperCase());
}

export function endsWithHangeulJongseong(word) {
  console.log("This is endsWithHangeulJongseong");
  const hangeulWord = word.replace(/[^가-힣]/g, "");
  const lastHangeul = hangeulWord.slice(-1);

  const distanceFrom가 = lastHangeul.charCodeAt(0) - "가".charCodeAt(0);
  const cycle = 28; // 받침이 없음 (1) + 받침 있는 문자 개수 (27)

  const jongseongNo = distanceFrom가 % cycle;

  return jongseongNo !== 0;
}

export function getEulReul(word) {
  console.log("This is getEulReul");
  return endsWithHangeulJongseong(word) ? "을" : "를";
}
