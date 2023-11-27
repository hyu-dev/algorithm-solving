function solution(brown, yellow) {
  const sqrt = Math.sqrt(yellow);

  for (let i = 1; i <= sqrt; i++) {
    if (yellow % i === 0) {
      const share = yellow / i;
      if (brown === (share + 2 + i) * 2) {
        return [share + 2, i + 2];
      }
    }
  }
}

console.log(solution(18, 6));
