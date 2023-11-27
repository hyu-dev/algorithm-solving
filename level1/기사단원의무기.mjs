const solution = (number, limit, power) => {
  const map = new Map();
  map.set(1, 1);

  for (let num = 2; num <= number; num++) {
    const sqrt = Math.sqrt(num);
    let count = 0;
    for (let i = 1; i < sqrt; i++) {
      if (num % i === 0) {
        count += 1;
      }
    }
    const isInt = Number.isInteger(sqrt);
    count = count * 2 + (isInt ? 1 : 0);
    count = count > limit ? power : count;
    map.set(num, count);
  }

  let sum = 0;
  for (let [key, value] of map) {
    sum += value;
  }

  return sum;
};

console.log(solution(100000, 3, 2));
// console.log(solution(10, 3, 2));
