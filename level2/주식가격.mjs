function solution(prices) {
  const result = new Array(prices.length).fill(0);

  for (let i = 0; i < prices.length; i++) {
    const currPrice = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      const nextPrice = prices[j];
      result[i] += 1;
      if (currPrice > nextPrice) break;
    }
  }

  return result;
}

console.log(solution([1, 2, 3, 2, 3]));
