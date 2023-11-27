const ratio = (list) => {
  let newList = [];

  for (let i = 1; i < list.length; i++) {
    newList.push(list[i] / list[i - 1]);
  }

  return newList;
};

const equal = (list) => {
  let newList = [];

  for (let i = 1; i < list.length; i++) {
    newList.push(list[i] - list[i - 1]);
  }

  return newList;
};

const func = (list, type) => {
  if (list.every((num) => num === list[0])) {
    return { diff: list[0], type };
  }

  return func(ratio(list), "ratio");
};

const solution = (common) => {
  const data = func(equal(common), "equal");
  const lastdata = common[common.length - 1];

  if (data.type === "equal") {
    return lastdata + data.diff;
  }

  if (data.type === "ratio") {
    return lastdata * data.diff;
  }
};

console.log(solution([1, 1, 1, 1]));
// console.log(solution([-1, -2, -3]));
// console.log(solution([-2, 4, -8, 16]));
console.log(solution([2, 4, 6, 8]));
console.log(solution([1, 2, 3, 4]));
console.log(solution([2, 4, 8]));
