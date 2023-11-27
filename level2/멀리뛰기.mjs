function solution(n) {
  let num = n;
  let prevCount = BigInt(0);
  let count = BigInt(1);
  while (num > 0) {
    let currCount = count;
    count += prevCount;
    prevCount = currCount;
    num -= 1;
  }

  return Number(count % BigInt(1234567));
}

console.log(solution(50));
