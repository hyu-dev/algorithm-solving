const getPaintOverArea = (n, section) => {
  let paintOverArea = {};

  for (let i = 1, k = 0; i <= n; i++) {
    if (i === section[k]) {
      k += 1;
      paintOverArea[i] = true;
    } else {
      paintOverArea[i] = false;
    }
  }

  return paintOverArea;
};

function solution(n, m, section) {
  let paintOverArea = getPaintOverArea(n, section);
  let paintOver = 0;

  for (let i = 1; i <= n; i++) {
    if (!paintOverArea[i]) continue;

    for (let j = i; j < i + m; j++) {
      paintOverArea[j] = false;
    }

    paintOver += 1;
  }

  return paintOver;
}

// console.log(solution(8, 4, [2, 3, 6]));
// console.log(solution(5, 4, [1, 3]));
console.log(solution(4, 1, [1, 2, 3, 4]));
