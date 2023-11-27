function solution(myString, queries) {
  return queries.reduce((acc, query) => {
    const [s, e] = query;
    const prevStr = acc.slice(0, s);
    const nextStr = acc.slice(e + 1);
    let newSliceStr = "";
    for (let i = e; i >= s; i--) {
      newSliceStr += acc[i];
    }
    console.log(prevStr + newSliceStr + nextStr);
    acc = prevStr + newSliceStr + nextStr;
    return acc;
  }, myString);
}

console.log(
  solution("rermgorpsam", [
    [2, 3],
    [0, 7],
    [5, 9],
    [6, 10],
  ])
);
