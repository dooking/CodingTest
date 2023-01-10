// https://www.acmicpc.net/problem/2206
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [N, M] = input[0].split(" ").map((el) => +el);
const graph = [];
for (let i = 1; i <= N; i++) {
  graph.push(
    input[i]
      .replace("\r", "")
      .split("")
      .map((el) => +el)
  );
}
function solution(N, M, graph) {
  let answer = -1;
  const visited = Array.from({ length: N + 1 }, () =>
    Array.from({ length: M + 1 }, () => Array.from({ length: 2 }, () => false))
  );
  const queue = [[0, 0, 1, true]];
  if (N === 0 && M === 0) {
    return 0;
  }
  while (queue.length) {
    let [x, y, dist, chance] = queue.shift();
    const dx = [-1, 0, 1, 0];
    const dy = [0, -1, 0, 1];
    console.log(x, y, dist, chance);
    if (x === N && y === M) {
      answer = dist;
      break;
    }
    if (visited[x][y][chance]) continue;
    visited[x][y][chance] = true;
    for (let dir = 0; dir < 4; dir++) {
      const nx = x + dx[dir];
      const ny = y + dy[dir];
      if (nx < 0 || nx > N || ny < 0 || ny > M) {
        continue;
      }

      console.log("///", nx, ny, chance);
      if (graph[nx][ny] === 1) {
        if (chance) {
          chance = false;
        } else {
          continue;
        }
      }
      queue.push([nx, ny, dist + 1, chance]);
    }
  }

  return answer;
}

console.log(solution(N - 1, M - 1, graph));
