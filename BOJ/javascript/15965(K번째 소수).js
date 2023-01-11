// https://www.acmicpc.net/problem/15965
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];

function solution(N) {
  let answer = 0;
  const arr = isPrime(8000000);
  let cnt = 0;
  for (let i = 2; i <= 8000000; i++) {
    if (arr[i]) {
      cnt++;
    }
    if (cnt === N) {
      answer = i;
      break;
    }
  }
  return answer;
}

function isPrime(N) {
  const arr = [false, false, ...Array.from({ length: N + 1 }).fill(true)];
  for (let i = 2; i * i <= N; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= N; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr;
}

console.log(solution(N));
