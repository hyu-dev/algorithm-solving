const calc = (a, b, op) => {
  const num1 = Number(a);
  const num2 = Number(b);
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
  }
};

function solution(quiz) {
  let result = [];
  for (let str of quiz) {
    const strList = str.split(" ");
    const value = calc(strList[0], strList[2], strList[1]);
    if (Number(strList[4]) === value) {
      result.push("O");
    } else {
      result.push("X");
    }
  }
  return result;
}

console.log(solution(["3 - 4 = -3", "5 + 6 = 11"]));
