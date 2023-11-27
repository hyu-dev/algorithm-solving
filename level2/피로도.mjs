const recursive = (dungeons, fixed, k, counts) => {
  if (dungeons.length === 1) {
    let count = 0;
    let currFatigue = k;
    const sequence = fixed.concat(dungeons);

    for (let i = 0; i < sequence.length; i++) {
      const fatigue = sequence[i][0];
      const wastage = sequence[i][1];

      if (currFatigue < fatigue) break;

      count += 1;
      currFatigue -= wastage;
    }

    counts.push([count]);
  }

  for (let i = 0; i < dungeons.length; i++) {
    const prevList = fixed.concat([dungeons[i]]);
    const restList = dungeons.slice(0, i).concat(dungeons.slice(i + 1));

    recursive(restList, prevList, k, counts);
  }
};

const solution = (k, dungeons) => {
  const counts = [];
  recursive(dungeons, [], k, counts);

  return Math.max(...counts.flat(2));
};

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
