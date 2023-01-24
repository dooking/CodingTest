// https://www.acmicpc.net/problem/2531
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, d, k, c] = input
  .shift()
  .split(" ")
  .map((el) => +el);
let arr = [...input.map((el) => +el.replace("\r", ""))];

function solution(N, d, k, c, arr) {
  let answer = 0;
  arr = arr.concat(arr);
  for (let i = 0; i < N; i++) {
    const slices = new Set(arr.slice(i, i + k));
    slices.add(c);
    answer = Math.max(answer, slices.size);
  }
  return answer;
}

console.log(solution(N, d, k, c, arr));
