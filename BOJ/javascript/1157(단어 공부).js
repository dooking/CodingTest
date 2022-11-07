// https://www.acmicpc.net/problem/1157
const fs = require("fs");
// const input = fs
//   .readFileSync("./input.txt")
//   .toString()
//   .trim()
//   .toUpperCase()
//   .split("");
const input2 = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .toUpperCase()
  .split("");

const alpha = {};
for (let word of input) {
  const lowerWord = word.toUpperCase();
  if (alpha[lowerWord]) {
    alpha[lowerWord]++;
  } else {
    alpha[lowerWord] = 1;
  }
}
let answer = "?";
let minValue = -1;
for (let [key, value] of Object.entries(alpha)) {
  if (minValue < value) {
    minValue = value;
    answer = key;
  } else if (minValue == value) {
    answer = "?";
  }
}
console.log(answer);
