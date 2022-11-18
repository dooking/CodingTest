// https://www.acmicpc.net/problem/2583
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let areaCnt = 1;
let area = 0;
const [M, N, K] = input[0].split(" ").map((el) => +el);
const rectangle = [];
for (let i = 1; i <= K; i++) {
  rectangle.push(input[i].split(" ").map((el) => +el));
}
const graph = Array.from({ length: M }, () => new Array(N).fill(0));

function dfs(i, j) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];
  for (let dir = 0; dir < 4; dir++) {
    const nx = i + dx[dir];
    const ny = j + dy[dir];
    if (nx < 0 || nx >= M || ny < 0 || ny >= N || graph[nx][ny] !== 0) {
      continue;
    }
    graph[nx][ny] = area;
    areaCnt++;
    dfs(nx, ny);
  }
}
function solution() {
  let answer = [];
  for (let i = 0; i < rectangle.length; i++) {
    const [a, b, c, d] = rectangle[i];
    for (let x = b; x < d; x++) {
      for (let y = a; y < c; y++) {
        graph[x][y] = -1;
      }
    }
  }
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][j] == 0) {
        area++;
        graph[i][j] = area;
        dfs(i, j);
        answer.push(areaCnt);
        areaCnt = 1;
      }
    }
  }
  answer.sort((a, b) => a - b);
  console.log(area);
  console.log(answer.join(" "));
}

solution();
