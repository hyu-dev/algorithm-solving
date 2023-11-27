const solution = (s) => {
  let removedCnt = 0;
  let turn = 0;
  let str = s;

  while (str.length !== 1) {
    const newStrLen = str.replaceAll("0", "").length;
    removedCnt += str.length - newStrLen;
    str = newStrLen.toString(2);
    turn += 1;
  }

  return [turn, removedCnt];
};

console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));
