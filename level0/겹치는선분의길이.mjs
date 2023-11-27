function solution(lines) {
  const [[st1, ed1], [st2, ed2], [st3, ed3]] = lines;

  let first = Math.min(ed1, ed2) - Math.max(st1, st2);
  let second = Math.min(ed2, ed3) - Math.max(st2, st3);
  let third = Math.min(ed3, ed1) - Math.max(st3, st1);

  console.log(first, second, third);

  if (first > 0 && second > 0 && third > 0) {
    return second + third - first;
  }

  if (first <= 0 && second <= 0 && third <= 0) {
    return 0;
  }

  return (first <= 0 ? 0 : first) + (second <= 0 ? 0 : second) + (third <= 0 ? 0 : third);
}

console.log(
  "결과1 = 8",
  solution([
    [0, 5],
    [3, 9],
    [1, 10],
  ])
);
console.log(
  "결과2 = 8",
  solution([
    [0, 5],
    [4, 9],
    [1, 10],
  ])
);
console.log(
  "결과3 = 4",
  solution([
    [1, 3],
    [2, 5],
    [0, 7],
  ])
);
console.log(
  "결과4 = 5",
  solution([
    [0, 10],
    [1, 3],
    [4, 7],
  ])
);
console.log(
  "결과5 = 2",
  solution([
    [0, 1],
    [2, 5],
    [3, 9],
  ])
);
console.log(
  "결과6 = 4",
  solution([
    [1, 3],
    [4, 7],
    [2, 8],
  ])
);
