const even = (num) => num / 2;
const odd = (num) => num * 3 + 1;
const isEven = (num) => num % 2 === 0;

const solution = (num) => {
  let count = 0;
  let currNum = num;

  while (currNum !== 1 && count < 500) {
    if (isEven(currNum)) {
      currNum = even(currNum);
    } else {
      currNum = odd(currNum);
    }
    count += 1;
  }

  return count >= 500 ? -1 : count;
};

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));
