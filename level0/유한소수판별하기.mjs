const getGCD = (a, b) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  for (let i = min; i >= 1; i--) {
    if (min % i === 0 && max % i === 0) return i;
  }

  return 1;
};

const getFactor = (num) => {
  const factor = [];

  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      factor.push(i);
      num = num / i;
      i = 1;
    }
  }

  return factor;
};

const solution = (a, b) => {
  // 두 수의 최대 공약수를 구한다
  let gcd = getGCD(a, b);
  // 분모의 숫자를 최대 공약수로 나눈다
  const value = b / gcd;
  // 최대 공약수로 나는 분모의 숫자의 소인수가 2 또는 5면 1 아니면 2
  const factor = getFactor(value);
  const result = value === 1 || factor.every((num) => num === 2 || num === 5);
  console.log(a / b, gcd, factor);
  return result ? 1 : 2;
};

console.log(solution(105, 40));
