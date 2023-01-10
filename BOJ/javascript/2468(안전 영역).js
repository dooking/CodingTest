// https://www.acmicpc.net/problem/2468
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = +input[0];
const graph = [];
for (let i = 1; i <= N; i++) {
  graph.push(input[i].split(" ").map((el) => +el));
}

function solution(N, graph) {
  let answer = 1;
  const cases = new Set();
  graph.map((row) => row.map((col) => cases.add(col)));
  for (let h of cases) {
    let _graph = JSON.parse(JSON.stringify(graph));
    let area = 0;
    for (let x = 0; x < N; x++) {
      for (let y = 0; y < N; y++) {
        if (_graph[x][y] <= h) {
          _graph[x][y] = 0;
        }
      }
    }
    for (let x = 0; x < N; x++) {
      for (let y = 0; y < N; y++) {
        if (_graph[x][y] !== 0) {
          _graph[x][y] = 0;
          dfs(x, y);
          area++;
        }
      }
    }
    function dfs(x, y) {
      const dx = [-1, 0, 1, 0];
      const dy = [0, -1, 0, 1];
      for (let dir = 0; dir < 4; dir++) {
        const nx = x + dx[dir];
        const ny = y + dy[dir];
        if (nx < 0 || nx >= N || ny < 0 || ny >= N || _graph[nx][ny] === 0) {
          continue;
        }
        _graph[nx][ny] = 0;
        dfs(nx, ny);
      }
    }
    answer = Math.max(answer, area);
  }
  return answer;
}

console.log(solution(N, graph));
