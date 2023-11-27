const solution = (k, m, score) => {
  let maxProfit = 0;

  const sortedScore = score.sort((a, b) => b - a);
  for (let i = 0; i < sortedScore.length; i += m) {
    const box = sortedScore.slice(i, i + m);
    if (box.length === m) {
      const minScore = Math.min(...box);
      maxProfit += minScore * m;
    }
  }

  return maxProfit;
};

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
