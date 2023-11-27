const solution = (keymap, targets) => {
  const map = new Map();
  for (let key of keymap) {
    for (let i = 0; i < key.length; i++) {
      const char = key[i];
      const has = map.get(char);
      if (!has) {
        map.set(char, i + 1);
      } else {
        if (has > i) {
          map.set(char, i + 1);
        }
      }
    }
  }

  let result = [];
  for (let target of targets) {
    let sum = 0;
    for (let i = 0; i < target.length; i++) {
      const has = map.get(target[i]);
      if (has) {
        sum += has;
      } else {
        sum = -1;
        break;
      }
    }
    result.push(sum);
  }

  return result;
};

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"]));
console.log(solution(["AA"], ["B"]));
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"]));
