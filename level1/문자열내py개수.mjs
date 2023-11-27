const solution = (s) => {
  const str = s.toLowerCase();
  const pCnt = str.replace(/[^p]+|[^y]+/g, "");
  const yCnt = str.replace(/[^y]+/g, "");
  console.log9;
  return pCnt === yCnt;
};

// console.log(solution("pPoooyY"));

const isNums = (str, initLen) => {
  const newData = str.replace(/[^0-9]+/g, "");
  console.log(newData);
  return newData.length === initLen;
};

console.log(isNums("1234", 4));
