function solution(n, words) {
  const userWordSet = {};

  let idx = 0;
  let prevWord = "";
  for (let word of words) {
    const userNum = (idx % n) + 1;
    if (prevWord && prevWord.slice(-1) !== word.slice(0, 1)) {
      if (!userWordSet[userNum]) {
        return [userNum, 1];
      } else {
        const count = Array.from(userWordSet[userNum].values()).length;
        return [userNum, count + 1];
      }
    }
    if (!userWordSet[userNum]) {
      userWordSet[userNum] = new Set();
      userWordSet[userNum].add(word);
    } else {
      for (let num in userWordSet) {
        if (userWordSet[num].has(word)) {
          const count = Array.from(userWordSet[userNum].values()).length;
          return [userNum, count + 1];
        }
      }

      userWordSet[userNum].add(word);
    }
    idx += 1;
    prevWord = word;
  }

  return [0, 0];
}

// console.log(
//   solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"])
// );
// console.log(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]));
console.log(
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ])
);
