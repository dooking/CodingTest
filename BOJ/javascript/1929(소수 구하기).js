// https://www.acmicpc.net/problem/1929
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N] = input[0].split(" ").map((el) => +el);

function solution(M, N) {
  const result = isPrimeEra(N);
  for (let i = M; i <= N; i++) {
    if (result[i]) {
      console.log(i);
    }
  }
}

function isPrimeEra(N) {
  const arr = Array(N + 1).fill(true);
  arr[0] = false;
  arr[1] = false;
  for (let i = 2; i * i <= N; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= N; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr;
}

solution(M, N);
