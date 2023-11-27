const solution = (cards1, cards2, goal) => {
  const reverseCards1 = cards1.reverse();
  const reverseCards2 = cards2.reverse();

  for (let word of goal) {
    const card1 = reverseCards1.pop();
    const card2 = reverseCards2.pop();

    if (word === card1) {
      reverseCards2.push(card2);
    } else if (word === card2) {
      reverseCards1.push(card1);
    } else {
      return "No";
    }
  }

  return "Yes";
};

console.log(
  solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"])
);
console.log(
  solution(["i", "water", "drink"], ["want", "to"], ["i", "want", "to", "drink", "water"])
);
