// https://www.acmicpc.net/problem/1932
const fs = require("fs");
// let input = fs.readFileSync("./input.txt").toString().split("\n");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const N = input.shift();
const triangle = input.map((el) => el.split(" ").map((n) => +n));
for (let i = 0; i < N - 1; i++) {
  for (let j = i; j < N - 1; j++) {
    triangle[i].push(0);
  }
}
for (let i = 1; i < N; i++) {
  for (let j = 0; j < i + 1; j++) {
    if (j - 1 < 0) {
      triangle[i][j] = triangle[i - 1][j] + triangle[i][j];
    } else {
      triangle[i][j] = Math.max(
        triangle[i - 1][j - 1] + triangle[i][j],
        triangle[i - 1][j] + triangle[i][j]
      );
    }
  }
}

console.log(Math.max(...triangle[N - 1]));
