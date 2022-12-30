//https://www.acmicpc.net/problem/11725
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const graph = [];
for (let i = 1; i < N; i++) {
  graph.push(input[i].split(" ").map((el) => +el));
}

function solution(N, graph) {
  let adjacencyList = Array.from({ length: N + 1 }, () => []);
  for ([u, v] of graph) {
    adjacencyList[u].push(v);
    adjacencyList[v].push(u);
  }
  let queue = [1];
  let visited = Array.from({ length: N + 1 }).fill(false);
  let parent = Array.from({ length: N + 1 }).fill(0);
  while (queue.length) {
    const cur = queue.shift();
    visited[cur] = true;

    for (let node of adjacencyList[cur]) {
      if (parent[node] == 0) {
        parent[node] = cur;
        queue.push(node);
      }
    }
  }

  return parent.slice(2).join("\n");
}
console.log(solution(N, graph));
