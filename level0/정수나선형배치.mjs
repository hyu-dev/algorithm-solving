function solution(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push([]);
    for (let j = 0; j < n; j++) {
      result[i].push(0);
    }
  }

  let i = 0;
  let j = 0;
  let count = 1;
  let mini = 0;
  let minj = 0;
  let maxi = n - 1;
  let maxj = n - 1;
  let turn = "right";

  while (count <= n * n) {
    result[i][j] = count++;

    if (turn === "right") {
      j++;
      if (j === maxj) {
        turn = "bottom";
        mini += 1;
      }
    } else if (turn === "bottom") {
      i++;
      if (i === maxi) {
        turn = "left";
        maxj -= 1;
      }
    } else if (turn === "left") {
      j--;
      if (j === minj) {
        turn = "top";
        maxi -= 1;
      }
    } else if (turn === "top") {
      i--;
      if (i === mini) {
        turn = "right";
        minj += 1;
      }
    }
  }

  return result;
}

console.log(solution(5));
