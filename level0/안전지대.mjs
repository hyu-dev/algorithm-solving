const doubleLoop = (outer, inner, func) => {
  for (let i = outer.start; i <= outer.end; i++) {
    for (let j = inner.start; j <= inner.end; j++) {
      func(i, j);
    }
  }
};

const paint = (board, i, j) => {
  const outer = { start: i - 1, end: i + 1 };
  const inner = { start: j - 1, end: j + 1 };
  doubleLoop(outer, inner, (i, j) => {
    if (typeof board[i]?.[j] === "number") {
      board[i][j] = 1;
    }
  });
};

const solution = (board) => {
  const painting = [];

  const outer = { start: 0, end: board.length - 1 };
  const inner = { start: 0, end: board[0].length - 1 };

  doubleLoop(outer, inner, (i, j) => {
    if (board[i][j] === 1) {
      painting.push([i, j]);
    }
  });

  painting.forEach(([i, j]) => {
    paint(board, i, j);
  });

  let count = 0;
  doubleLoop(outer, inner, (i, j) => {
    if (board[i][j] === 0) {
      count += 1;
    }
  });

  return count;
};

console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ])
);
