const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  const sqrt = Math.sqrt(number);

  for (let i = 2; i <= sqrt; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const findAllNum = (numbers, fixed, set) => {
  if (numbers.length === 1) {
    const number = Number(fixed + numbers[0]);
    set[number] = true;
    return;
  }

  for (let i = 0; i < numbers.length; i++) {
    const number = Number(fixed + numbers[i]);
    set[number] = true;
    const restList = numbers.slice(0, i) + numbers.slice(i + 1);

    findAllNum(restList, number, set);
  }
};

function solution(numbers) {
  const set = {};
  findAllNum(numbers, "", set);

  let count = 0;
  for (let number in set) {
    if (isPrime(number)) {
      count += 1;
    }
  }

  return count;
}

console.log(solution("012345"));
