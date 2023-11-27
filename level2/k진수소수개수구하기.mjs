const findPrime = (numStr) => {
  let num = Number(numStr.replaceAll("0", ""));

  if (num === 1) {
    return false;
  }

  const sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

function solution(n, k) {
  const digits = Number(n).toString(k);

  const case1 = digits.match(/^[^0]+$/g);
  if (case1) {
    const prime = findPrime(case1[0]);
    if (prime) {
      return 1;
    }
  }

  let checkCount = 0;
  const case2 = digits.match(/^[^0]+0/g);
  if (case2) {
    for (let num of case2) {
      if (findPrime(num)) {
        checkCount += 1;
      }
    }
  }

  const case3 = digits.match(/0[^0]+$/g);
  if (case3) {
    for (let num of case3) {
      if (findPrime(num)) {
        checkCount += 1;
      }
    }
  }

  let case4 = null;
  let index = 0;
  while (1) {
    case4 = digits.slice(index).match(/0[^0]+0/);
    const addIndex = case4?.index ?? 0;
    if (addIndex === 0) {
      break;
    }

    if (findPrime(case4[0])) {
      checkCount += 1;
    }
    index += addIndex + 1;
  }

  return checkCount;
}
console.log(solution(437674, 3));
console.log(solution(110011, 10));
