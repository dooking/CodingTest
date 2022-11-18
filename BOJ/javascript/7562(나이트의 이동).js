// https://www.acmicpc.net/problem/7562
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];

for (let i = 1; i <= N; i++) {
  const m = +input[(i - 1) * 3 + 1];
  const [x, y] = input[(i - 1) * 3 + 2].split(" ").map((el) => +el);
  const [a, b] = input[(i - 1) * 3 + 3].split(" ").map((el) => +el);

  console.log(solution(m, x, y, a, b));
}

function solution(m, x, y, a, b) {
  const visited = Array.from({ length: m }, () => new Array(m).fill(false));
  const queue = [[x, y, 0]];
  visited[x][y] = true;

  while (queue.length) {
    const [curX, curY, cnt] = queue.shift();
    if (curX === a && curY === b) {
      return cnt;
    }
    const dx = [-1, -2, -2, -1, 1, 2, 2, 1];
    const dy = [-2, -1, 1, 2, 2, 1, -1, -2];
    for (let dir = 0; dir < 8; dir++) {
      const nx = curX + dx[dir];
      const ny = curY + dy[dir];
      if (nx < 0 || nx >= m || ny < 0 || ny >= m || visited[nx][ny]) {
        continue;
      }
      queue.push([nx, ny, cnt + 1]);
      visited[nx][ny] = true;
    }
  }
}
