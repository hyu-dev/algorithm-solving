const factorial = (num) => {
  let mul = BigInt(1);
  for (let i = 1; i <= num; i++) {
    mul *= BigInt(i);
  }
  return mul;
};

function solution(balls, share) {
  const denominator = factorial(balls - share) * factorial(share);
  const numerator = factorial(balls);
  console.log(numerator);
  console.log(denominator);
  return numerator / denominator;
}

console.log(solution(30, 3));
