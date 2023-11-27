const solution = (arr) => {
  const max = Math.max(...arr);
  let maxValue = max;
  let findValue = 0;
  while (findValue === 0) {
    if (arr.every((num) => maxValue % num === 0)) {
      findValue = maxValue;
    } else {
      maxValue += max;
    }
  }
  return maxValue;
};

// console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 100, 7, 9, 50]));
