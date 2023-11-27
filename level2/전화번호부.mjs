// 실제 푼 풀이
function solution(phone_book) {
  const hashTable = {};

  phone_book.sort((a, b) => a.length - b.length);

  let minSize = phone_book[0].length;

  for (let phone_num of phone_book) {
    const currSize = phone_num.length;

    for (let i = minSize; i < currSize; i++) {
      const data = phone_num.slice(0, i);
      if (hashTable[data]) return false;
    }

    hashTable[phone_num] = true;
  }

  return true;
}

// console.log(solution(["12", "123", "1235", "567", "88"]));
// console.log(solution(["12", "123", "1235", "567", "88"]));
// console.log(solution(["12", "123", "1235", "567", "88"]));

// 모두 정답이나 효율성이 안됨
function solution2(phone_book) {
  const map = new Map();
  let minSize = Infinity;

  for (let phone_num of phone_book) {
    const size = phone_num.length;
    const data = map.get(size);
    if (data) {
      data.push(phone_num);
    } else {
      map.set(size, [phone_num]);
    }

    if (minSize > size) {
      minSize = size;
    }
  }

  phone_book.sort((a, b) => b.length - a.length);

  for (let phone_num of phone_book) {
    const currSize = phone_num.length;
    for (let i = currSize - 1; i >= minSize; i--) {
      const data = map.get(i);
      if (!data) continue;

      for (let prefix of data) {
        const regExp = new RegExp(`^${prefix}`);
        if (regExp.test(phone_num)) return false;
      }
    }
  }

  return true;
}

console.log(solution3(["119", "97674223", "1195524421", "3232323123"]));
