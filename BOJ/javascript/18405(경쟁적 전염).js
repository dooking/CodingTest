// https://www.acmicpc.net/problem/18405
const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input
  .shift()
  .split(" ")
  .map((el) => +el);
const graph = [];
for (let i = 0; i < N; i++) {
  const row = input
    .shift()
    .split(" ")
    .map((el) => +el);
  graph.push(row);
}
const [S, X, Y] = input
  .shift()
  .split(" ")
  .map((el) => +el);

const distance = Array(K + 1).fill(100000);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] !== 0) {
      const dis = Math.abs(i - (X - 1)) + Math.abs(j - (Y - 1));
      distance[graph[i][j]] = Math.min(dis, distance[graph[i][j]]);
    }
  }
}
if (Math.min(...distance) > S) {
  console.log(0);
} else {
  console.log(distance.indexOf(Math.min(...distance)));
}
