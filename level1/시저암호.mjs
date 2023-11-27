const solution = (s, n) => {
  const UPPERCASE_START = "A".charCodeAt(0);
  const LOWERCASE_START = "a".charCodeAt(0);

  const strArr = s.split("");
  return strArr.reduce((acc, char) => {
    if (char === " ") {
      acc += char;
      return acc;
    }

    const currCode = char.charCodeAt(0);
    const isLower = currCode >= LOWERCASE_START;
    const addCode = (isLower ? currCode - LOWERCASE_START : currCode - UPPERCASE_START) + n;
    const calcCode = (addCode % 26) + (isLower ? LOWERCASE_START : UPPERCASE_START);
    acc += String.fromCharCode(calcCode);
    return acc;
  }, "");
};

console.log(solution("AB", 1));
console.log(solution("z", 1));
console.log(solution("a B z", 4));
