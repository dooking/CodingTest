//https://www.acmicpc.net/problem/11724
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
  const adjacencyList = Array.from({ length: N + 1 }, () => []);
  for (let [u, v] of edges) {
    adjacencyList[u].push(v);
    adjacencyList[v].push(u);
  }
  let check = Array.from({ length: N + 1 }).fill(false);
  for (let i = 1; i <= N; i++) {
    if (!check[i]) {
      dfs(i);
      answer++;
    }
  }
  function dfs(v) {
    check[v] = true;
    adjacencyList[v].forEach((next) => {
      if (!check[next]) {
        dfs(next);
      }
    });
  }
  return answer;
}
console.log(solution(N, M, edges));

// class UnionFind {
//   constructor(n) {
//     this.root = Array.from({ length: n + 1 }, (el, idx) => idx);
//     this.power = Array.from({ length: n + 1 }).fill(1);
//   }
//   find(x) {
//     if (this.root[x] !== x) {
//       this.root[x] = this.find(this.root[x]);
//     }
//     return this.root[x];
//   }
//   union(x, y) {
//     let rootX = this.find(x);
//     let rootY = this.find(y);
//     if (rootX === rootY) {
//       return;
//     }
//     if (this.power[rootX] < this.power[rootY]) {
//       [rootX, rootY] = [rootY, rootX];
//     }
//     this.root[rootY] = rootX;
//     this.power[rootX] += this.power[rootY];
//     return;
//   }
// }

// function solution(N, M, edges) {
//   let setVertex = new Set();
//   const unionFind = new UnionFind(N);
//   for (let [u, v] of edges) {
//     unionFind.union(u, v);
//   }
//   for (let i = 1; i <= N; i++) {
//     setVertex.add(unionFind.find(unionFind.root[i]));
//   }
//   return [...setVertex].length;
// }

// console.log(solution(N, M, edges));
