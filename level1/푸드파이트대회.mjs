const solution = (food) => {
  let left = "";
  let right = "";

  for (let i = 1; i < food.length; i++) {
    const half = Math.floor(food[i] / 2);
    if (half > 0) {
      left = left + (i + "").repeat(half);
      right = (i + "").repeat(half) + right;
    }
  }

  return left + "0" + right;
};

console.log(solution([1, 3, 4, 6]));
