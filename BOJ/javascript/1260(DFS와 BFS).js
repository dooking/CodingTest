// https://www.acmicpc.net/problem/1260

const fs = require("fs");
// let input = fs.readFileSync("./input.txt").toString().split("\n");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M, V] = input[0].split(" ").map((e) => +e);
const graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
const visited = Array(N + 1).fill(false);

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map((e) => +e);
  graph[a][b] = 1;
  graph[b][a] = 1;
}

const dfs = (v) => {
  visited[v] = true;
  process.stdout.write(v + " ");
  for (let i = 1; i <= N; i++) {
    if (graph[v][i] === 1 && !visited[i]) {
      dfs(i);
    }
  }
};

const bfs = (v) => {
  const queue = [v];
  visited[v] = true;
  while (queue.length) {
    const cur = queue.shift();
    process.stdout.write(cur + " ");
    for (let i = 1; i <= N; i++) {
      if (graph[cur][i] === 1 && !visited[i]) {
        queue.push(i);
        visited[i] = true;
      }
    }
  }
};

dfs(V);
console.log();
visited.fill(false);
bfs(V);
