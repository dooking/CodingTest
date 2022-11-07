//https://www.acmicpc.net/problem/1926
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("./input.txt").toString().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((e) => +e);
const graph = input.map((e) => e.split(" ").map((e) => +e));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

let visited = Array.from(Array(N), () => Array(M).fill(false));
let drawCount = 0;
let count = 0;
let max = 0;

function dfs(x, y) {
  if (x < 0 || x >= N || y < 0 || y >= M) return false;
  if (graph[x][y] === 0 || visited[x][y]) return false;
  visited[x][y] = true;
  count++;
  for (let i = 0; i < 4; i++) {
    dfs(x + dx[i], y + dy[i]);
  }
  return true;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (dfs(i, j)) {
      max = Math.max(max, count);
      count = 0;
      drawCount++;
    }
  }
}

console.log(drawCount);
console.log(max);
