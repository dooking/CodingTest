// https://www.acmicpc.net/problem/11399
const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const times = input[1].split(" ").map((el) => +el);

times.sort((a, b) => b - a);
let answer = 0;

for (let i = N; i > 0; i--) {
  answer += i * times[i - 1];
}
console.log(answer);
