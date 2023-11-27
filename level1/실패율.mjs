const getStageTable = (stages) => {
  const map = new Map();

  for (let i = 0; i < stages.length; i++) {
    const data = map.get(stages[i]);
    if (data) {
      map.set(stages[i], data + 1);
    } else {
      map.set(stages[i], 1);
    }
  }

  return map;
};

const getClearTable = (stage, stageTable) => {
  const clearTable = new Map();

  for (let i = stage; i >= 1; i--) {
    let total = 0;

    for (let j = stage; j >= i; j--) {
      const cnt = stageTable.get(j);

      if (cnt) {
        total += cnt;

        if (j === i) {
          clearTable.set(j, cnt / total);
        }
      } else {
        if (j === i) {
          clearTable.set(j, 0);
        }
      }
    }
  }

  return clearTable;
};

const solution = (N, stages) => {
  const stage = N + 1;
  const stageTable = getStageTable(stages);
  const clearTable = getClearTable(stage, stageTable);

  const sort = (a, b) => (a[1] < b[1] ? 1 : -1);
  const map = ([key]) => key;
  const filter = (data) => data < stage;
  const entries = Array.from(clearTable.entries());

  return entries.sort(sort).map(map).filter(filter);
};

// console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));
