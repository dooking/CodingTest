// https://www.acmicpc.net/problem/2805
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map((el) => +el);
const trees = input[1].split(" ").map((el) => +el);
function solution(N, M, trees) {
  let answer = 0;
  let left = 0;
  let right = trees.reduce((acc, cur) => acc + cur, 0);
  while (left <= right) {
    const h = Math.floor((left + right) / 2);
    const sum = trees.reduce(
      (acc, cur, idx) => acc + (cur - h > 0 ? cur - h : 0),
      0
    );

    if (sum < M) {
      right = h - 1;
    } else {
      answer = h;
      left = h + 1;
    }
  }
  return answer;
}
console.log(solution(N, M, trees));
