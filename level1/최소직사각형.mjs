const solution = (sizes) => {
  let bigW = 0;
  let bigH = 0;

  sizes.forEach((size) => {
    const [w, h] = size;

    if (!(bigW && bigH)) {
      bigW = w;
      bigH = h;
    } else {
      const originDiff = Math.abs(bigW - w) + Math.abs(bigH - h);
      const reverseDiff = Math.abs(bigW - h) + Math.abs(bigH - w);

      // 거꾸로 비교
      if (originDiff > reverseDiff) {
        if (bigW < h) {
          bigW = h;
        }

        if (bigH < w) {
          bigH = w;
        }
      }
      // 정상 비교
      else {
        if (bigW < w) {
          bigW = w;
        }

        if (bigH < h) {
          bigH = h;
        }
      }
    }
  });

  return bigW * bigH;
};

console.log(
  solution([
    [30, 70],
    [50, 60],
    [60, 50],
    [60, 30],
    [80, 40],
  ])
);
console.log(
  solution([
    [12, 3],
    [8, 15],
    [14, 7],
    [10, 7],
    [5, 15],
  ])
);
console.log(
  solution([
    [19, 6],
    [14, 4],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
);
