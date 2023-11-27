const solution = (n, m) => {
  let gcd = 0;
  let lcm = 0;

  const max = Math.max(n, m);
  const min = Math.min(n, m);

  // 작은 숫자의 공약수 구하기
  let minValueGcdArr = [];
  for (let i = min; i >= 1; i--) {
    if (min % i === 0) {
      minValueGcdArr.push(i);
    }
  }

  // 최대공약수 구하기
  for (let i = 0; i < minValueGcdArr.length; i++) {
    if (max % minValueGcdArr[i] === 0) {
      gcd = minValueGcdArr[i];
      break;
    }
  }

  // 최대공배수 구하기 (두 수의 최대공약수 * 각 값의 서로소 곱하기)
  lcm = gcd * (max / gcd) * (min / gcd);
  return [gcd, lcm];
};

// console.log(solution(3, 12));
// console.log(solution(2, 5));
console.log(solution(800000, 1000000));
