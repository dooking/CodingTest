// https://www.acmicpc.net/problem/2960
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map((el) => +el);

function solution(N, M) {
  let answer = 0;
  let cnt = 0;
  const arr = [false, false, ...Array.from({ length: N + 1 }).fill(true)];
  for (let i = 2; i <= N; i++) {
    for (let j = i; j <= N; j += i) {
      if (arr[j]) {
        cnt++;
        arr[j] = false;
        if (cnt === M) {
          answer = j;
          return answer;
        }
      }
    }
  }
  return -1;
}
console.log(solution(N, M));
