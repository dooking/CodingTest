// https://www.acmicpc.net/problem/1978
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = +input[0];

let numList = input[1].split(" ").map((el) => +el);
let answer = 0;
for (let num of numList) {
  if (isPrime(num)) {
    answer += 1;
  }
}
console.log(answer);

function isPrime(N) {
  if (N < 2) {
    return false;
  }
  for (let i = 2; i * i <= N; i++) {
    if (N % i == 0) {
      return false;
    }
  }
  return true;
}
