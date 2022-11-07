const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");
let [N, M, K] = input
  .shift()
  .split(" ")
  .map((el) => parseInt(el, 10));

let graph = Array.from({ length: N }, () => new Array(M).fill(0));

for (let i = 0; i < input.length; i++) {
  const [x, y] = input[i].split(" ").map((el) => parseInt(el, 10));
  graph[x - 1][y - 1] = 1;
}

let count = 0;
const dfs = (i, j) => {
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  if (rangeCheck(i, j) && graph[i][j] === 1) {
    graph[i][j] = 0;
    count += 1;
    for (let k = 0; k < dx.length; k++) {
      dfs(i + dx[k], j + dy[k]);
    }
  }
};
const rangeCheck = (i, j) => {
  if (i >= 0 && i < N && j >= 0 && j < M) {
    return true;
  }
  return false;
};
const solution = () => {
  let trashCount = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j] === 1) {
        dfs(i, j);
        trashCount.push(count);
        count = 0;
      }
    }
  }
  trashCount.sort((a, b) => b - a);
  return trashCount[0];
};

console.log(solution());
