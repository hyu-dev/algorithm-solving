const sumlist = (acc, curr) => acc + curr;

const solution = (polynomial) => {
  const result = polynomial.split(" ").reduce(
    (acc, curr) => {
      if (curr !== "+") {
        if (curr.includes("x")) {
          const value = Number(curr.slice(0, curr.length - 1) || 1);
          acc["x"].push(value);
        } else {
          acc["num"].push(Number(curr));
        }
      }
      return acc;
    },
    { x: [], num: [] }
  );

  let xdata = result["x"].reduce(sumlist, 0);
  let numdata = result["num"].reduce(sumlist, 0);

  if (xdata && numdata) {
    xdata = xdata === 1 ? "x" : xdata + "x";
    return xdata + " + " + numdata;
  }

  if (xdata) {
    return xdata === 1 ? "x" : xdata + "x";
  }

  return "" + numdata;
};

console.log(solution("3x + 7 + x"));
console.log(solution("x + 2x + x"));
console.log(solution("1 + 2 + 3 + x"));
console.log(solution("x"));
console.log(solution("x + 7 + 7"));
console.log(solution("6"));
