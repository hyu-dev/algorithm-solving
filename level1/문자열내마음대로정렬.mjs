const compareChar = (char1, char2) => {
  return char1.charCodeAt(0) - char2.charCodeAt(0);
};

const getCompareValues = (n, a, b) => {
  for (let i = 0; i < n; i++) {
    const compareValue = compareChar(a[i], b[i]);
    if (compareValue !== 0) {
      return compareValue;
    }
  }
  return 0;
};

const solution = (strings, n) => {
  return strings.sort((a, b) => {
    if (Object.is(compareChar(a[n], b[n]), 0)) {
      return getCompareValues(Math.min(a.length, b.length), a, b);
    } else {
      return compareChar(a[n], b[n]);
    }
  });
};

console.log(solution(["abcd", "abce", "cdx"], 2));
console.log(solution(["abce", "abcd", "cdx"], 2));
