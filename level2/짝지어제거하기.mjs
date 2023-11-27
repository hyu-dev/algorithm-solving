const solution = (s) => {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return Number(!stack.length);
};

console.log(solution("cdcd"));
// console.log(solution("cdrreed".repeat(300000)));
console.log(solution("baabaa"));
