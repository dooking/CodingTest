// https://www.acmicpc.net/problem/11728
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [N, M] = input
  .shift()
  .split(" ")
  .map((el) => +el);
let A = input
  .shift()
  .split(" ")
  .map((el) => +el);
let B = input
  .shift()
  .split(" ")
  .map((el) => +el);

function solutin(N, M, A, B) {
  let answer = [];
  let idx = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  while (idx < N + M) {
    if (A[0] < B[0]) {
      answer.push(A.shift());
    } else {
      answer.push(B.shift());
    }
    idx++;
  }
  return answer.concat(A.slice(), B.slice()).join(" ");
}
console.log(solutin(N, M, A, B));
