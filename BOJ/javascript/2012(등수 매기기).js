// https://www.acmicpc.net/problem/2012
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const numList = input.map((el) => +el);

numList.sort((a, b) => a - b);
let answer = 0;
for (let i = 0; i < numList.length; i++) {
  answer += Math.abs(numList[i] - (i + 1));
}
console.log(answer);
