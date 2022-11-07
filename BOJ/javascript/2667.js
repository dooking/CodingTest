// https://www.acmicpc.net/problem/1436
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("./input.txt").toString().split("\n");

let N = Number(input[0]);
let count = 0;
let num = 666;

while (true) {
  if (String(num).includes("666")) {
    count++;
  }
  if (count === N) {
    console.log(num);
    break;
  }
  num++;
}
