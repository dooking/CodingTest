// https://www.acmicpc.net/problem/3085
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const graph = [];
for (let i = 1; i <= N; i++) {
  graph.push(input[i].replace("\r", "").split(""));
}
let answer = 0;
for (let i = 0; i < graph.length; i++) {
  for (let j = 0; j < graph[0].length; j++) {
    for (let dir = 0; dir < 2; dir++) {
      if (dir == 0) {
        if (j + 1 === graph[0].length) {
          continue;
        }
        [graph[i][j + 1], graph[i][j]] = [graph[i][j], graph[i][j + 1]];
        answer = Math.max(
          answer,
          countCandy(graph[i][j], i, j),
          countCandy(graph[i][j + 1], i, j + 1)
        );
        [graph[i][j + 1], graph[i][j]] = [graph[i][j], graph[i][j + 1]];
      } else {
        if (i + 1 === graph.length) {
          continue;
        }
        [graph[i + 1][j], graph[i][j]] = [graph[i][j], graph[i + 1][j]];
        answer = Math.max(
          answer,
          countCandy(graph[i][j], i, j),
          countCandy(graph[i + 1][j], i + 1, j)
        );
        [graph[i + 1][j], graph[i][j]] = [graph[i][j], graph[i + 1][j]];
      }
    }
  }
}
console.log(answer);

function countCandy(candy, x, y) {
  let rowMax = -1;
  let colMax = -1;
  for (let i = 0; i < graph.length; i++) {
    let rowCnt = 1;
    for (let j = 0; j < graph[0].length - 1; j++) {
      if (graph[i][j] == graph[i][j + 1]) {
        rowCnt++;
      } else {
        rowCnt = 1;
      }
      rowMax = Math.max(rowCnt, rowMax);
    }
  }
  for (let j = 0; j < graph.length; j++) {
    let colCnt = 1;
    for (let i = 0; i < graph[0].length - 1; i++) {
      if (graph[i][y] == graph[i + 1][y]) {
        colCnt++;
      } else {
        colCnt = 1;
      }
      colMax = Math.max(colCnt, colMax);
    }
  }
  // console.log(candy, x, y, rowMax, colMax, graph);
  return Math.max(rowMax, colMax);
}
