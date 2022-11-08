// https://www.acmicpc.net/problem/14888
const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const countList = {
  0: 0,
  1: 0,
};
let prev = input[0];
for (let i = 1; i < input.length; i++) {
  if (prev !== input[i]) {
    countList[prev]++;
  }
  if (i == input.length - 1) {
    countList[input[i]]++;
  }
  prev = input[i];
}

console.log(Math.min(countList[0], countList[1]));
