// https://www.acmicpc.net/problem/2579
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const stair = [];
let answer = [];
for (let i = 1; i <= N; i++) {
  stair.push(+input[i]);
}
function solution(N, stair) {
  const arr = Array(300).fill(0);
  if (N == 1) {
    return stair[0];
  } else if (N == 2) {
    return stair[0] + stair[1];
  }
  arr[0] = stair[0];
  arr[1] = stair[0] + stair[1];
  arr[2] = Math.max(stair[0], stair[1]) + stair[2];
  for (let i = 3; i < N; i++) {
    arr[i] = Math.max(arr[i - 2], arr[i - 3] + stair[i - 1]) + stair[i];
  }
  return arr[N - 1];
}

console.log(solution(N, stair));
