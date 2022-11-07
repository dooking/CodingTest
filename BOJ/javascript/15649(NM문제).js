// https://www.acmicpc.net/problem/15649
const fs = require("fs");
// let input = fs.readFileSync("./input.txt").toString().split("\n");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [N, M] = input.shift().split(" ");

const solution = (N, M) => {
  const arr = [];
  const visited = Array(N + 1).fill(false);
  const dfs = (depth) => {
    if (depth == M) {
      console.log(arr.join(" "));
      return;
    }
    for (let i = 1; i <= N; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      arr.push(i);
      dfs(depth + 1);
      arr.pop();
      visited[i] = false;
    }
  };
  dfs(0);
};
solution(N, M);
