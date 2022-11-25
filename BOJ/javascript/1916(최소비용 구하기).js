// https://www.acmicpc.net/problem/1916
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const M = +input[1];
const dist = Array(N + 1).fill(Infinity);
const graph = Array.from({ length: N + 1 }, () => []);
const [A, B] = input[M + 2].split(" ").map((el) => +el);
for (let i = 2; i < M + 2; i++) {
  const [start, end, cost] = input[i].split(" ").map((el) => +el);
  graph[start].push([end, cost]);
}

let queue = [];
queue.push([A, 0]);
dist[A] = 0;
while (queue.length) {
  const [u, cost] = queue.shift();
  queue.sort((a, b) => a[1] - b[1]);
  if (u === B) {
    break;
  }
  if (dist[u] < cost) continue;
  for (let [next, nextCost] of graph[u]) {
    if (dist[next] > dist[u] + nextCost) {
      dist[next] = dist[u] + nextCost;
      queue.push([next, dist[next]]);
    }
  }
}

console.log(dist[B]);
