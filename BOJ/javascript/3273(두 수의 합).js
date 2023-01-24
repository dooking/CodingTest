// https://www.acmicpc.net/problem/3273
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const arr = input
  .shift()
  .split(" ")
  .map((el) => +el);
const K = +input.shift();

function solution(N, arr, K) {
  let answer = 0;
  let start = 0;
  let end = N - 1;
  arr.sort((a, b) => a - b);
  while (start < end) {
    if (arr[start] + arr[end] === K) {
      answer++;
      start++;
      end--;
    } else if (arr[start] + arr[end] > K) {
      end--;
    } else {
      start++;
    }
  }
  return answer;
}

console.log(solution(N, arr, K));
