// https://www.acmicpc.net/problem/14425
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map((el) => +el);
let answer = 0;
let hashMap = new Map();
for (let i = 1; i <= N; i++) {
  hashMap.set(input[i].replace("\r", ""), 1);
}

for (let j = N + 1; j <= M + N; j++) {
  if (hashMap.get(input[j].replace("\r", ""))) {
    answer++;
  }
}
console.log(answer);
