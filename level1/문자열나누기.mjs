const solution = (s) => {
  let index = 0;
  let baseCnt = 0;
  let compCnt = 0;

  return s.split("").reduce((acc, curr) => {
    const data = acc[index];
    if (data) {
      const char = data[0];
      if (char === curr) {
        acc[index] += curr;
        baseCnt += 1;
      } else {
        compCnt += 1;
        acc[index] += curr;

        if (baseCnt === compCnt) {
          index += 1;
        }
      }
    } else {
      acc.push(curr);
      baseCnt += 1;
    }

    return acc;
  }, []).length;
};

console.log(solution("banana"));
console.log(solution("abracadabra"));
console.log(solution("aaabbaccccabba"));
