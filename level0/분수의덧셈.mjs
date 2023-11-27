function solution(numer1, denom1, numer2, denom2) {
  let numerator = numer1 * denom2 + numer2 * denom1;
  let denominator = denom1 * denom2;
  let max = Math.max(numerator, denominator);
  let min = Math.min(numerator, denominator);

  // 작은 숫자를 기준으로 약수 구하기
  let dividers = [];
  for (let i = min; i >= 1; i--) {
    if (min % i === 0) dividers.push(i);
  }

  // 최대공약수 구하기
  let gcd = 1;
  for (let d of dividers) {
    if (max % d === 0) {
      gcd = d;
      break;
    }
  }

  numerator /= gcd;
  denominator /= gcd;

  return [numerator, denominator];
}

console.log(solution(1, 2, 3, 4));
