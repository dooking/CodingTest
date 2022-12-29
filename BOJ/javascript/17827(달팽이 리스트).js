//https://www.acmicpc.net/problem/17827
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, V] = input[0].split(" ").map((el) => +el);
const numArr = input[1].split(" ").map((el) => +el);
const startIdx = N - V + 1;
let answer = [];
for (let i = 2; i < M + 2; i++) {
  const question = +input[i];
  if (question < N) {
    answer.push(numArr[question]);
    continue;
  }
  answer.push(numArr[((question - N) % startIdx) + V - 1]);
}
console.log(answer.join("\n"));
