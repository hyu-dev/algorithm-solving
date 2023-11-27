const solution = (n) => {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push((arr[i - 2] + arr[i - 1]) % 1234567);
  }
  return arr[n];
};

console.log(solution(100000));
// 0 1 1 2 3 5 8
