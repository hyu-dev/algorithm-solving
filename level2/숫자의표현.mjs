const solution = (n) => {
  let count = 1;

  for (let i = 1; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += j;
      if (sum > n) break;
      if (sum === n) count += 1;
    }
  }

  return count;
};

console.log(solution(15));
console.log(solution(10000));
