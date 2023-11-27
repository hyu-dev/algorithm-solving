const solution = (pictures, k) => {
  let newArr = [];
  for (let picture of pictures) {
    const list = picture.match(/\.+|x+/g);
    for (let i = 0; i < k; i++) {
      const str = list.map((data) => data.repeat(k)).join("");
      newArr.push(str);
    }
  }
  return newArr;
};

console.log(solution(["x.x", ".x.", "x.x"], 3));
