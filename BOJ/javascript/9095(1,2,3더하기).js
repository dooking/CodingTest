// https://www.acmicpc.net/problem/9095
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
function solution(n) {
  const arr = [0, 1, 2, 4];
  for (let tc = 1; tc <= n; tc++) {
    let temp = +input[tc];
    for (let i = 4; i <= temp; i++) {
      arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
    }
    console.log(arr[temp]);
  }
  return;
}

solution(n);
