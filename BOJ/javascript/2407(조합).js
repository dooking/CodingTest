// https://www.acmicpc.net/problem/2407
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((el) => +el);
function solution(N, M) {
  let answer = 0;
  if (N > 2 * M) {
    M = N - M;
  }
  let A = 0;
  let B = 0;
  let resultA = 1;
  let resultB = 1;

  for (let i = 0; i < M; i++) {
    resultA *= N - i;
  }
  for (let i = 0; i < M; i++) {
    resultB *= M - i;
  }
  return Math.floor(resultA / resultB);
}
console.log(solution(N, M));
