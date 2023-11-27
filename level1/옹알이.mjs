const babbleSet = {
  aya: true,
  ye: true,
  ma: true,
  woo: true,
};

const solution = (babbling) => {
  let answer = 0;
  for (let babble of babbling) {
    let str = "";
    let prevStr = "";
    let result = false;

    for (let i = 0; i < babble.length; i++) {
      str += babble[i];
      if (babbleSet[str]) {
        if (prevStr === str) {
          result = false;
          prevStr = "";
        } else {
          result = true;
          prevStr = str;
          str = "";
        }
      } else {
        result = false;
      }
    }

    answer += result ? 1 : 0;
  }

  return answer;
};

console.log(solution(["aya", "yee", "u", "maa"]));
console.log(solution(["ayaye", "uuu", "yeye", "mawoo", "ayaayaa"]));
