const solution = (msg) => {
  const indices = {};

  let lastIndex = 0;
  for (let i = 65; i < 91; i++) {
    const index = i - 64;
    indices[String.fromCharCode(i)] = index;
    lastIndex = index;
  }

  let result = [];

  let startIndex = 0;
  let prevStr = "";
  for (let i = 0; i < msg.length; i++) {
    const currStr = msg.slice(startIndex, i + 1);

    if (indices[currStr]) {
      prevStr = currStr;

      if (msg.length - 1 === i) {
        result.push(indices[currStr]);
      }
    } else {
      lastIndex += 1;
      indices[currStr] = lastIndex;
      result.push(indices[prevStr]);
      prevStr = "";
      startIndex = i;
      i -= 1;
    }
  }

  return result;
};

console.log(solution("TOBEORNOTTOBEORTOBEORNOT"));
