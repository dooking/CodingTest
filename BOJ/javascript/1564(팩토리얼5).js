// https://www.acmicpc.net/problem/1564
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
function solution(N) {
  let temp = 1;
  for (let i = 1; i < N + 1; i++) {
    temp *= i;
    while (temp % 10 == 0) {
      temp = temp / 10;
    }
    console.log(i, temp, "//", temp % 1000000000000);
    temp %= 1000000000000;
  }
  return String(temp).slice(-5);
}

console.log(solution(N));
// for (let i = 10; i < 30; i++) {
//   console.log("i", i, solution(i));
// }
