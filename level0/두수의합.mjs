const sum = ({ a = 0, b = 0, c = 0 }) => {
  return Number(a) + Number(b) + c;
};

const solution = (a, b) => {
  const maxSize = Math.max(a.length, b.length);

  let aLastIndex = a.length - 1;
  let bLastIndex = b.length - 1;
  let result = "";
  let carry = 0;

  for (let i = 0; i < maxSize; i++) {
    const sumData = {
      a: a[aLastIndex--],
      b: b[bLastIndex--],
      c: carry,
    };

    const value = sum(sumData);
    const remain = value % 10;
    carry = Math.floor(value / 10);

    result = remain + result;
  }

  return (carry ? "" + carry : "") + result;
};

console.log(solution("582", "734"));
console.log(solution("18446744073709551615", "287346502836570928366"));
