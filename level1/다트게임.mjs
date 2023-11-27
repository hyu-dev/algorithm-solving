const getAddScore = (status, currScore) => {
  switch (status) {
    case "S":
      return Math.pow(currScore, 1);
    case "D":
      return Math.pow(currScore, 2);
    case "T":
      return Math.pow(currScore, 3);
    case "*":
      return currScore * 2;
    case "#":
      return currScore * -1;
    default:
      return Number(status);
  }
};

const solution = (dartResult) => {
  const scoreSplit = dartResult.match(/\d{1,2}|[SDT]|[\*\#]/g);
  let step = 0;

  const scoreMap = scoreSplit.reduce((acc, curr) => {
    if (Number.isInteger(Number(curr))) {
      step += 1;
      acc[step] = getAddScore(curr);
    } else {
      acc[step] = getAddScore(curr, acc[step]);
      const prevStep = step - 1;
      if (curr === "*" && Number.isInteger(acc[prevStep])) {
        acc[prevStep] = getAddScore(curr, acc[prevStep]);
      }
    }
    return acc;
  }, {});

  let sumScore = 0;
  for (let key in scoreMap) {
    sumScore += scoreMap[key];
  }

  return sumScore;
};

console.log(solution("1S2D*3T"));
console.log(solution("1D2S#10S"));
console.log(solution("1D#2S*3S"));
