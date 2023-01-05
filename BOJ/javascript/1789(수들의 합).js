// https://www.acmicpc.net/problem/1789
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const S = +input[0];

function solution(S) {
  let N = 0;
  let left = 1;
  let right = S;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * (mid + 1) <= 2 * S) {
      N = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return N;
}

console.log(solution(S));
