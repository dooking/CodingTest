// https://www.acmicpc.net/problem/10953
const fs = require("fs");
// const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = input.shift();
for (let test of input) {
  const [A, B] = test.split(",").map((el) => +el);
  console.log(A + B);
}
