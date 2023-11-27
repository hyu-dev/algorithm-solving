const limited = (curr, board) => {
  const currPos = Math.abs(curr);
  const midPos = Math.floor(board / 2);
  const absMidPos = Math.abs(midPos);
  const sign = curr < 0 ? -1 : 1;
  return currPos > absMidPos ? midPos * sign : curr;
};

const solution = (keyinput, board) => {
  const move = {
    up: [0, 1],
    down: [0, -1],
    left: [-1, 0],
    right: [1, 0],
  };

  const [boardX, boardY] = board;
  let prev = [0, 0];

  for (let key of keyinput) {
    const [x, y] = move[key];
    const [prevX, prevY] = prev;
    const moveX = limited(prevX + x, boardX);
    const moveY = limited(prevY + y, boardY);
    prev = [moveX, moveY];
  }

  return prev;
};

console.log(solution(["down", "down", "down", "down", "down"], [7, 9]));
