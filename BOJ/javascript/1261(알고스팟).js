// https://www.acmicpc.net/problem/1261
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [N, M] = input[0].split(" ").map((el) => +el);
const graph = [];
for (let i = 1; i <= M; i++) {
  graph.push(Array.from(input[i].replace("\r", "")));
}

const queue = [[0, 0, 0]];
const visited = Array.from({ length: M }, () => Array(N).fill(false));
let answer = 0;
visited[0][0] = true;
while (queue.length) {
  const [x, y, cnt] = queue.shift();
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];
  if (x === M - 1 && y === N - 1) {
    answer = cnt;
    break;
  }
  for (let dir = 0; dir < 4; dir++) {
    const nx = x + dx[dir];
    const ny = y + dy[dir];
    if (nx < 0 || nx >= M || ny < 0 || ny >= N || visited[nx][ny]) {
      continue;
    }
    visited[nx][ny] = true;
    if (graph[nx][ny] == 0) {
      queue.unshift([nx, ny, cnt]);
    } else {
      queue.push([nx, ny, cnt + 1]);
    }
  }
}

console.log(answer);
