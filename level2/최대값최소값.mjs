const solution = (s) => {
  const nums = s
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  const min = nums[0];
  const max = nums[nums.length - 1];
  return min + " " + max;
};

console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
console.log(solution("-1 -1"));
