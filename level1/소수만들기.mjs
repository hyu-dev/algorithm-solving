const solution = (nums) => {
  const combinations = getCombinations(nums, 3);
  let count = 0;

  for (let combination of combinations) {
    const sumValue = combination.reduce((acc, curr) => acc + curr, 0);
    if (isSosu(sumValue)) {
      count += 1;
    }
  }

  return count;
};

const getCombinations = (arr, size) => {
  let result = [];
  if (size === 1) return arr.map((val) => [val]);

  arr.forEach((fixed, index) => {
    const rest = arr.slice(index + 1);
    const combinations = getCombinations(rest, size - 1);
    const attached = combinations.map((val) => [fixed, ...val]);
    result.push(...attached);
  });

  return result;
};

const isSosu = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));
