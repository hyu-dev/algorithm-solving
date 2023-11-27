const diff = (x1, x2, y1, y2) => {
  return { x: Math.abs(x1 - x2), y: Math.abs(y1 - y2) };
};

const same = (line1, line2) => {
  return line1.x === line2.x && line1.y === line2.y;
};

function solution(dots) {
  const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;

  const result1 = same(diff(x1, x2, y1, y2), diff(x3, x4, y3, y4));
  const result2 = same(diff(x1, x3, y1, y3), diff(x2, x4, y2, y4));
  const result3 = same(diff(x1, x4, y1, y4), diff(x2, x3, y2, y3));
  const samex = x1 === x2 && x2 === x3 && x3 === x4;
  const samey = y1 === y2 && y2 === y3 && y3 === y4;

  return Number((result1 || result2 || result3) && !samex && !samey);
}

console.log(
  solution([
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ])
);
