// https://www.acmicpc.net/problem/14916
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = +input[0];

function solution(n) {
  let answer = 0;
  if (n === 1 || n === 3) return -1;
  while (n > 0) {
    if (n % 2 === 1 || n % 5 === 0) {
      answer += 1;
      n -= 5;
    } else if (n % 2 === 0) {
      answer += 1;
      n -= 2;
    }
  }
  return answer;
}
console.log(solution(14));
