var findBall = function (grid) {
  let start = 0;
  let answer = [];

  let m = grid.length;
  let n = grid[0].length;
  if (m === 1 && n === 1) {
    return [-1];
  }
  for (let i = 0; i < n; i++) {
    let queue = [[0, i]];
    while (queue.length) {
      const [x, y] = queue.pop();
      const cur = grid[x][y];
      if (cur === 1) {
        if (y + 1 >= n) {
          // out
          answer.push(-1);
          break;
        }
        if (grid[x][y + 1] === -1) {
          // out
          answer.push(-1);
          break;
        } else {
          if (x + 1 >= m) {
            // out
            if (grid[x][y] === 1) {
              answer.push(y + 1);
            } else {
              answer.push(y - 1);
            }
            break;
          } else {
            queue.push([x + 1, y + 1]);
          }
        }
      } else {
        if (y - 1 < 0) {
          // out
          answer.push(-1);
          break;
        }
        if (grid[x][y - 1] === 1) {
          // out
          answer.push(-1);
          break;
        } else {
          if (x + 1 >= m) {
            // out
            if (grid[x][y] === 1) {
              answer.push(y + 1);
            } else {
              answer.push(y - 1);
            }
            break;
          } else {
            queue.push([x + 1, y - 1]);
          }
        }
      }
    }
  }
  return answer;
};

console.log(
  findBall([
    [
      -1, 1, -1, -1, -1, -1, -1, -1, 1, -1, -1, -1, -1, 1, 1, -1, -1, -1, 1, 1,
      1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, -1, 1,
      -1, -1, -1, -1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, 1, -1, 1, -1,
      -1, -1, -1, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1, -1, -1, -1, 1, -1,
      1, -1, -1, 1, 1, -1, -1, 1, -1, 1, -1, 1, 1, 1, -1, -1, -1, -1,
    ],
  ])
);
