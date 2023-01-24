// https://www.acmicpc.net/problem/2559
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((el) => +el);

function solution(N, M, arr) {
  arr = arr[0].split(" ").map((el) => +el);
  let answer = Number.MIN_SAFE_INTEGER;
  let end = 0;
  let sum = 0;
  for (let start = 0; start < N - M + 1; start++) {
    while (end - start < M && end < N) {
      sum += arr[end];
      end++;
    }
    answer = Math.max(answer, sum);
    sum -= arr[start];
  }
  return answer;
}
console.log(solution(N, M, input));
