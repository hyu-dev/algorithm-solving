function solution(array) {
  const frequent = new Map();

  for (let num of array) {
    frequent.set(num, (frequent.has(num) ? frequent.get(num) : 0) + 1);
  }

  const list = Array.from(frequent.entries());
  const maxValue = Math.max(...list.map(([key, value]) => value));
  const maxList = list.filter(([key, value]) => value === maxValue);

  return maxList.length === 1 ? maxList[0][0] : -1;
}

console.log(solution([1, 2, 3, 3, 3, 4]));
