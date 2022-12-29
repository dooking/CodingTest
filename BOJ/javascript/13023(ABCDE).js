//https://www.acmicpc.net/problem/13023
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map((el) => +el);
const edges = [];
for (let i = 1; i <= M; i++) {
  edges.push(input[i].split(" ").map((el) => +el));
}

function solution(N, M, edges) {
  let answer = 0;
  const adjacencyList = Array.from({ length: N }, () => []);
  for (let [u, v] of edges) {
    adjacencyList[u].push(v);
    adjacencyList[v].push(u);
  }

  for (let v = 0; v < N; v++) {
    let check = Array.from({ length: N }).fill(false);
    check[v] = true;
    dfs(v, 0);
    check[v] = false;
    console.log("----------", v);
    if (answer) {
      break;
    }
    function dfs(node, depth) {
      if (depth === 4) {
        answer = 1;
        return;
      }
      console.log(node, depth);
      adjacencyList[node].forEach((next) => {
        if (!check[next]) {
          check[next] = true;
          dfs(next, depth + 1);
          check[next] = false;
        }
      });
    }
  }

  return answer;
}
console.log(solution(N, M, edges));
