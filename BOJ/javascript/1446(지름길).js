// https://www.acmicpc.net/problem/13913
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [N, D] = input[0].split(" ").map((el) => +el);
const dist = Array(10001).fill(Infinity);
const graph = Array.from({ length: 10001 }, () => []);
for (let i = 1; i <= N; i++) {
  const [start, end, cost] = input[i].split(" ").map((el) => +el);
  if (end - start <= cost) continue;
  if (end > D) continue;
  graph[start].push([end, cost]);
}

let prev = -1;
for (let i = 0; i <= D; i++) {
  if (i) {
    prev = dist[i - 1];
  }
  dist[i] = Math.min(dist[i], prev + 1);

  for (let [next, cost] of graph[i]) {
    if (dist[next] > dist[i] + cost) {
      dist[next] = dist[i] + cost;
    }
  }
}
console.log(dist[D]);
