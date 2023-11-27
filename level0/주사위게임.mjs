const calcFourNumSame = (keys) => {
  let result = 0;

  for (let key of keys) {
    result = key;
  }

  return result * 1111;
};

const calcThreeNumSame = (entries) => {
  let threeNum = 0;
  let oneNum = 0;

  for (let [key, value] of entries) {
    if (value === 3) {
      threeNum = key;
    } else {
      oneNum = key;
    }
  }

  return Math.pow(threeNum * 10 + oneNum, 2);
};

const calcTwoNumSame = (keyArr) => {
  const max = Math.max(...keyArr);
  const min = Math.min(...keyArr);

  return (max + min) * (max - min);
};

const calcTwoNumSameAndOtherDiff = (entries) => {
  let twoNums = [];

  for (let [key, value] of entries) {
    if (value === 1) {
      twoNums.push(key);
    }
  }

  return twoNums.reduce((acc, num) => acc * num, 1);
};

const calcAllDiff = (keyArr) => {
  let min = keyArr[0];
  let slice = keyArr.slice(1);

  for (let key of slice) {
    if (min > key) {
      min = key;
    }
  }

  return min;
};

const isThree = (values) => {
  for (let value of values) {
    return value === 3 || value === 1;
  }
};

const solution = (a, b, c, d) => {
  const map = new Map();
  [a, b, c, d].forEach((num) => {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1);
  });

  if (map.size === 1) {
    return calcFourNumSame(map.keys());
  }

  if (map.size === 2) {
    return isThree(map.values())
      ? calcThreeNumSame(map.entries())
      : calcTwoNumSame(Array.from(map.keys()));
  }

  if (map.size === 3) {
    return calcTwoNumSameAndOtherDiff(map.entries());
  }

  if (map.size === 4) {
    return calcAllDiff(Array.from(map.keys()));
  }
};

console.log(solution(2, 2, 2, 2));
console.log(solution(4, 1, 4, 4));
console.log(solution(6, 3, 3, 6));
console.log(solution(2, 5, 2, 6));
console.log(solution(6, 4, 2, 5));
