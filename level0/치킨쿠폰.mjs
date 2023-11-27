function solution(chicken) {
  let sum = 0;
  let service = chicken;

  while (service > 9) {
    const share = Math.floor(service / 10);
    sum += share;
    service = share + (service % 10);
  }

  return sum;
}

console.log(solution(1081));
