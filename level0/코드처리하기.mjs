function solution(code) {
  let mode = 0;
  let result = "";

  for (let i = 0; i < code.length; i++) {
    const char = code[i];

    if (mode === 0 && char === "1") mode = 1;
    else if (mode === 1 && char === "1") mode = 0;
    else if (mode === 0 && i % 2 === 0) result += char;
    else if (mode === 1 && i % 2 === 1) result += char;
  }

  return result || "EMPTY";
}

console.log(solution("abc1abc1abc"));
