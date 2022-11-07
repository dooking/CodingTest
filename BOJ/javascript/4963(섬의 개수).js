const fs = require("fs");
// let input = fs.readFileSync("./input.txt").toString().split("\n");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

while (input.length) {
  let [w, h] = input
    .shift()
    .split(" ")
    .map((el) => parseInt(el, 10));
  if (w === 0 && h === 0) {
    break;
  }
  let graph = [];
  let answer = 0;

  const dfs = (x, y) => {
    const dx = [-1, 0, 1, 0, -1, -1, 1, 1];
    const dy = [0, -1, 0, 1, -1, 1, -1, 1];
    if (graph[x][y] === 1) {
      graph[x][y] = 0;
      for (let dir = 0; dir < 8; dir++) {
        const nx = x + dx[dir];
        const ny = y + dy[dir];
        if (nx >= 0 && nx < h && ny >= 0 && ny < w) {
          dfs(nx, ny);
        }
      }
    }
  };

  for (let i = 0; i < h; i++) {
    let row = input
      .shift()
      .split(" ")
      .map((el) => parseInt(el, 10));
    graph.push(row);
  }
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[0].length; j++) {
      if (graph[i][j] === 1) {
        dfs(i, j);
        answer += 1;
      }
    }
  }
  console.log(answer);
}
