const solution = (n, a, b) => {
  let bracket = [];
  for (let i = 1; i <= n; i++) {
    bracket.push(i);
  }

  let count = 1;
  while (count <= 20) {
    let newBracket = [];
    let size = bracket.length / 2;

    for (let i = 0; i < size; i++) {
      const user1 = bracket.pop();
      const user2 = bracket.pop();

      if ([a, b].includes(user1) && [a, b].includes(user2)) return count;

      if (user1 === a || user1 === b) {
        newBracket.push(user1);
      } else if (user2 === a || user2 === b) {
        newBracket.push(user2);
      } else {
        newBracket.push(user1);
      }
    }

    count += 1;
    bracket = newBracket;
  }
};

console.log(solution(8, 4, 7));
