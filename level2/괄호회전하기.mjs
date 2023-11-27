function solution(s) {
  let rotate = s;
  let check = 0;

  for (let i = 0; i < s.length; i++) {
    rotate = rotate.slice(1) + s[i];

    let isBreak = false;
    let array = [];
    check += 1;

    for (let str of rotate) {
      const open = /[\[\{\(]/g;
      const close = /[\)\}\]]/g;

      if (open.test(str)) {
        array.push(str);
      }
      if (close.test(str)) {
        const popData = array.pop();
        if (!popData) {
          check -= 1;
          isBreak = true;
          break;
        } else if (str === "]" && popData !== "[") {
          check -= 1;
          isBreak = true;
          break;
        } else if (str === "}" && popData !== "{") {
          check -= 1;
          isBreak = true;
          break;
        } else if (str === ")" && popData !== "(") {
          check -= 1;
          isBreak = true;
          break;
        }
      }
    }

    if (array.length && !isBreak) {
      check -= 1;
    }
  }

  return check;
}

console.log(solution("{(["));
console.log(solution("{(})"));
