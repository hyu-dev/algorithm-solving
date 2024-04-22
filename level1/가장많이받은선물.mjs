function solution(friends, gifts) {
  const users = {};

  // 선물 정보 초기화
  for (let i = 0; i < friends.length; i++) {
    const giver = friends[i];
    // [선물지수, 선물주고받은유저정보, 다음에받을선물수]
    users[giver] = [0, {}, 0];
    for (let j = 0; j < friends.length; j++) {
      if (i !== j) {
        const receiver = friends[j];
        users[giver][1][receiver] = 0;
      }
    }
  }

  // 선물 정보 입력
  for (let gift of gifts) {
    const [giver, receiver] = gift.split(" ");
    users[giver][0] += 1;
    users[receiver][0] -= 1;
    users[giver][1][receiver] += 1;
    users[receiver][1][giver] -= 1;
  }

  // 선물 정보로 다음에 받을 선물 체크, 최대 개수 산정
  let max = 0;

  for (let giver in users) {
    const gifts = users[giver][1];

    for (let receiver in gifts) {
      if (gifts[receiver] < 0) continue;

      if (gifts[receiver] === 0) {
        if (users[giver][0] > users[receiver][0]) {
          users[giver][2] += 1;
        }
      } else {
        users[giver][2] += 1;
      }
    }

    max = Math.max(max, users[giver][2]);
  }

  return max;
}

console.log(
  solution(
    ["muzi", "ryan", "frodo", "neo"],
    [
      "muzi frodo",
      "muzi frodo",
      "ryan muzi",
      "ryan muzi",
      "ryan muzi",
      "frodo muzi",
      "frodo ryan",
      "neo muzi",
    ]
  ) === 2
);
