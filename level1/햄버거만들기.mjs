const solution = (ingredient) => {
  let stack = [];
  let count = 0;

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);

    if (stack.length >= 4) {
      if (stack.slice(-4).join("") === "1231") {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        count += 1;
      }
    }
  }

  return count;
};

console.log(solution([1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1])); // 5
console.log(solution([1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1])); // 3
console.log(
  solution([
    1, 2, 3, 1, 2, 3, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1, 1, 1, 1, 1, 1, 2, 3, 3, 1, 2, 3, 1, 3, 3, 3, 2,
    1, 2, 3, 1,
  ])
); // 5
console.log(solution([1, 2, 3, 1, 2, 3, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1, 1, 1, 1, 1, 1, 2, 3, 3, 1])); // 3
console.log(solution([1, 2, 3, 1, 2, 3, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1])); // 3
console.log(solution([1, 2, 1, 2, 3, 1, 3, 1, 2, 3, 1, 2, 3, 1])); // 3
console.log(solution([1, 2, 2, 3, 1])); // 0
console.log(solution([1, 1, 2, 2, 2, 3, 1])); // 0
