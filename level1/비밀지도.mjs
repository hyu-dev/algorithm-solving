const solution = (n, arr1, arr2) => {
  const array = [];
  for (let i = 0; i < n; i++) {
    const data = arr1[i] | arr2[i];
    const convert = data.toString(2).padStart(n, 0);
    const result = convert.replaceAll("0", " ").replaceAll("1", "#");
    array.push(result);
  }
  return array;
};

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
