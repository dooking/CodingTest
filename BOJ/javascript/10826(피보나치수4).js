// https://www.acmicpc.net/problem/10826
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];

function solution(N) {
  let arr = Array.from({ length: N });
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i <= N; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[N];
}
console.log(solution(N));

for (let i = 0; i < 1000; i++) {
  console.log(solution(i.toString()));
}
