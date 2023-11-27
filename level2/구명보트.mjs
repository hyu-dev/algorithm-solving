const findOptimalWeight = (weightMap, weightList, limit) => {
  if (limit < 40) {
    return null;
  }

  if (weightMap[limit] && weightMap[limit].length) {
    return limit;
  }

  for (let i = 0; i < weightList.length; i++) {
    if (weightList[i] > limit) {
      continue;
    }

    const optimalWeight = weightList[i];
    if (weightMap[optimalWeight] && weightMap[optimalWeight].length) {
      return optimalWeight;
    }
  }

  return null;
};

// people = [170, 150, 120, 40, 100, 50, 60, 60, 80, 90]
// weightList = [170, 150, 120, 100, 90, 80, 60, 50, 40]
// weightMap = { 170: [0], 150: [1], ..., 60: [6, 7]}
// weightListMap = { 170: 0, ... }

function solution(people, limit) {
  // 큰 숫자로 정렬
  people.sort((a, b) => b - a);

  let count = 0;
  let weightList = [];
  let weightMap = {};

  for (let i = 0; i < people.length; i++) {
    const one = people[i];

    if (weightMap[one]) {
      weightMap[one].unshift(i);
    } else {
      weightMap[one] = [i];
      weightList.push(one);
    }
  }

  for (let i = 0; i < people.length; i++) {
    const one = people[i];

    if (one > limit) {
      continue;
    }

    // 현재 무게 정보 제거
    weightMap[one].pop();

    const optimalWeight = findOptimalWeight(weightMap, weightList, limit - one);

    if (optimalWeight) {
      const optimal = weightMap[optimalWeight].pop();
      people[optimal] = limit + 1;
    }

    count += 1;
    people[i] = limit + 1;
  }

  return count;
}

console.log(solution([70, 50, 80, 50], 100));
