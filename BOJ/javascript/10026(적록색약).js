//https://www.acmicpc.net/problem/10026
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const graph = [];
for (let i = 1; i <= N; i++) {
  graph.push(input[i].replace("\r", "").split(""));
}

function solution(N, graph) {
  let graph1 = JSON.parse(JSON.stringify(graph));
  let graph2 = JSON.parse(JSON.stringify(graph));
  let area = 0;
  let area2 = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (graph1[i][j] !== 0) {
        dfs(i, j, graph1[i][j]);
        graph1[i][j] = 0;
        area++;
      }
    }
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (graph2[i][j] !== 0) {
        dfs2(i, j, graph2[i][j]);
        graph2[i][j] = 0;
        area2++;
      }
    }
  }
  return `${area} ${area2}`;

  function dfs(x, y, color) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, -1, 0, 1];
    for (let dir = 0; dir < 4; dir++) {
      const nx = x + dx[dir];
      const ny = y + dy[dir];
      if (nx < 0 || nx >= N || ny < 0 || ny >= N || graph1[nx][ny] === 0) {
        continue;
      }
      if (graph1[nx][ny] === color) {
        graph1[nx][ny] = 0;
        dfs(nx, ny, color);
      }
    }
  }
  function dfs2(x, y, color) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, -1, 0, 1];
    for (let dir = 0; dir < 4; dir++) {
      const nx = x + dx[dir];
      const ny = y + dy[dir];
      if (nx < 0 || nx >= N || ny < 0 || ny >= N || graph2[nx][ny] === 0) {
        continue;
      }
      if (color === "R") {
        if (graph2[nx][ny] === "G" || graph2[nx][ny] === "R") {
          graph2[nx][ny] = 0;
          dfs2(nx, ny, color);
        }
      } else if (color === "G") {
        if (graph2[nx][ny] === "G" || graph2[nx][ny] === "R") {
          graph2[nx][ny] = 0;
          dfs2(nx, ny, color);
        }
      } else if (graph2[nx][ny] === color) {
        graph2[nx][ny] = 0;
        dfs2(nx, ny, color);
      }
    }
  }
}
console.log(solution(N, graph));
