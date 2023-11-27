const solution = (wallpaper) => {
  const height = wallpaper.length;
  const width = wallpaper[0].length;

  let min = [height + 1, width + 1];
  let max = [0, 0];

  let x = 0;
  for (let paper of wallpaper) {
    const start = paper.indexOf("#");
    const end = paper.lastIndexOf("#");

    // 둘다 존재하지 않음
    if (start < 0 && end < 0) {
    }
    // 하나만 존재함
    else if (start === end) {
      if (min[0] >= x) {
        min[0] = x;
      }
      if (min[1] >= start) {
        min[1] = start;
      }
      if (max[0] <= x + 1) {
        max[0] = x + 1;
      }

      if (max[1] <= start + 1) {
        max[1] = start + 1;
      }
    }
    // 여러개 존재함
    else if (start !== end) {
      if (min[0] >= x) {
        min[0] = x;
      }
      if (min[1] >= start) {
        min[1] = start;
      }
      if (max[0] <= x + 1) {
        max[0] = x + 1;
      }

      if (max[1] <= end + 1) {
        max[1] = end + 1;
      }
    }

    x += 1;
  }

  return [...min, ...max];
};

console.log(solution([".#...", "..#..", "...#."]));
console.log(solution(["..........", ".....#....", "......##..", "...##.....", "....#....."]));
