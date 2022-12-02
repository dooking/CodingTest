// https://www.acmicpc.net/problem/1987
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [R, C] = input[0].split(" ").map((el) => +el);
const graph = [];
for (let i = 1; i <= R; i++) {
  graph.push(input[i].replace("\r", "").split(""));
}
function solution() {
  let answer = 1;
  const visit = Array(26).fill(false);

  function dfs(x, y, cnt) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, -1, 0, 1];
    answer = Math.max(answer, cnt);
    for (let dir = 0; dir < 4; dir++) {
      const nx = x + dx[dir];
      const ny = y + dy[dir];
      if (nx < 0 || nx >= R || ny < 0 || ny >= C) {
        continue;
      }
      if (!visit[graph[nx][ny].charCodeAt(0) - 65]) {
        visit[graph[nx][ny].charCodeAt(0) - 65] = true;
        dfs(nx, ny, cnt + 1);
        visit[graph[nx][ny].charCodeAt(0) - 65] = false;
      }
    }
  }
  visit[graph[0][0].charCodeAt(0) - 65] = true;
  dfs(0, 0, 1);
  console.log(answer);
}

solution();
