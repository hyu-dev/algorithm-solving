function solution(s) {
  let tupleList = [];

  const groups = s.match(/\{[\d+|\,]+\}/g);
  for (let group of groups) {
    const data = group.replace(/\{|\}/g, "");
    tupleList.push(data.split(","));
  }

  tupleList.sort((a, b) => a.length - b.length);

  let tuple = [];
  for (let list of tupleList) {
    let remainData = null;
    for (let item of list) {
      const numItem = Number(item);
      if (!tuple.includes(numItem)) {
        remainData = numItem;
        break;
      }
    }

    tuple.push(remainData);
  }

  return tuple;
}

// console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
