const solution = (d, budget) => {
  const len = d.length;
  const sortArr = d.sort((a, b) => a - b);

  let sum = 0;
  let count = 0;
  for (let i = 0; i < len; i++) {
    sum += sortArr[i];
    if (sum <= budget) {
      count += 1;
    } else {
      break;
    }
  }

  return count;
};

const array = new Array(100).fill(1).map((curr, idx) => curr * (idx + 1));

// console.log(array);
console.log(solution(array, 20));
console.log(solution([1, 3, 2, 5, 4], 9));
// console.log(solution([2, 2, 3, 3], 10));
