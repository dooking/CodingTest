// https://www.acmicpc.net/problem/2581
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(N, M) {
  let answer = [0, Number.MAX_SAFE_INTEGER];
  let arr = isPrime(M);
  for (let i = N; i <= M; i++) {
    if (arr[i]) {
      answer[0] += i;
      answer[1] = Math.min(answer[1], i);
    }
  }
  if (answer[0] === 0) {
    return -1;
  }
  return answer.join("\n");
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

console.log(solution(+input[0], +input[1]));
