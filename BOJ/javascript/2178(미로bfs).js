const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((item) => +item);

// 배열 초기화
const matrix = input.map((item) => item.split("").map((item) => +item));

function solution(N, M, matrix) {
  //위, 오른쪽, 아래, 왼쪽
  const dr = [-1, 0, 1, 0];
  const dc = [0, 1, 0, -1];

  let stack = [[0, 0]];

  while (stack.length) {
    const [r, c] = stack.shift();

    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (-1 < nr && nr < N && -1 < nc && nc < M) {
        if (matrix[nr][nc] === 1) {
          stack.push([nr, nc]);
          matrix[nr][nc] = matrix[r][c] + 1;
        }
      }
    }
  }
  console.log(matrix[N - 1][M - 1]);
}

solution(N, M, matrix);
