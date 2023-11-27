const solution = (s) => {
  const map = new Map();
  const arr = s.split("");
  let answer = [];

  let index = 0;
  for (let char of arr) {
    const data = map.get(char);

    if (typeof data === "number") {
      answer.push(index - data);
    } else {
      answer.push(-1);
    }

    map.set(char, index);
    index += 1;
  }

  return answer;
};

console.log(solution("banana"));
console.log(solution("foobar"));
