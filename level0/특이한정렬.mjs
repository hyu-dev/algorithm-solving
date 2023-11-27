function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const prev = Math.abs(n - a);
    const next = Math.abs(n - b);
    return next < prev || (next === prev && a < b) ? 1 : -1;
  });
}

// console.log(solution([44, 22, 312, 123, 1, 2, 232], 100));
console.log(solution([6, 5, 4, 3, 2, 1], 3));
console.log(solution([3, 4, 5, 1, 2, 6], 3));
