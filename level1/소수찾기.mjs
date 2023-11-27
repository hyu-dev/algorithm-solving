const solution = (n) => {
  let arr = new Array(n + 1).fill(true);
  let end = Math.sqrt(n);

  let map = new Map();
  for (let i = 2; i <= end; i++) {
    map.set(i, 1);
    if (arr[i] === false) {
      continue;
    }

    for (let j = i * i; j <= n; j += i) {
      arr[j] = false;
      const data = map.get(i) + 1;
      map.set(i, data);
    }
  }

  console.log(map);

  let cnt = 0;
  for (let i = 2; i <= n; i++) {
    cnt += arr[i] ? 1 : 0;
  }

  return cnt;
};

console.log(solution(10000));
