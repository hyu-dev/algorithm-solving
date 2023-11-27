function solution(k, tangerine) {
  const map = new Map();
  for (let size of tangerine) {
    const count = map.get(size) ?? 0;
    map.set(size, count + 1);
  }

  const array = Array.from(map.values());
  array.sort((a, b) => b - a);

  let sum = 0;
  let num = 0;

  for (let count of array) {
    sum += count;
    num += 1;
    if (k <= sum) {
      break;
    }
  }

  return num;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));
