// https://www.acmicpc.net/problem/11478
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let answer = [];
input = input[0].replace("\r", "");
const len = input.length;
for (let i = 0; i < len; i++) {
  for (let j = i; j < len; j++) {
    answer.push(input.slice(i, j + 1));
  }
}
console.log([...new Set(answer)].length);
