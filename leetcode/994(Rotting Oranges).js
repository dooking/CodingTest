/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let rotLoc = [];
  let orangeCnt = 0;
  let visited = Array.from({ length: grid.length }, () =>
    Array(grid[0].length).fill(false)
  );
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      if (grid[x][y] === 2) {
        rotLoc.push([x, y, 0]);
        visited[x][y] = true;
      } else if (grid[x][y] === 1) {
        orangeCnt += 1;
      }
    }
  }
  let queue = [...rotLoc];
  let answer = -1;
  if (orangeCnt === 0) {
    return 0;
  }
  while (queue.length) {
    let [x, y, time] = queue.shift();
    console.log(x, y, time, orangeCnt);
    let dx = [-1, 0, 1, 0];
    let dy = [0, -1, 0, 1];

    for (let dir = 0; dir < 4; dir++) {
      let nx = x + dx[dir];
      let ny = y + dy[dir];
      if (
        nx < 0 ||
        nx >= grid.length ||
        ny < 0 ||
        ny >= grid[0].length ||
        visited[nx][ny] ||
        grid[nx][ny] !== 1
      ) {
        continue;
      }
      visited[nx][ny] = true;
      queue.push([nx, ny, time + 1]);
      orangeCnt -= 1;
      if (orangeCnt === 0) {
        answer = time + 1;
        break;
      }
    }
  }
  return answer;
};
