// https://www.acmicpc.net/problem/2606
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("./input.txt").toString().split("\n");
const N = input.shift();
const M = input.shift();
const edges = {};
for (let i = 0; i < input.length; i++) {
  const [from, to] = input[i].split(" ").map((el) => parseInt(el, 10));
  edges[from] ? edges[from].push(to) : (edges[from] = [to]);
  edges[to] ? edges[to].push(from) : (edges[to] = [from]);
}

let count = 0;
let visited = [];
const dfs = (v) => {
  visited.push(v);
  for (let computer of edges[v]) {
    if (!visited.includes(computer)) {
      dfs(computer);
      count += 1;
    }
  }
};

dfs(1);
console.log(count);
