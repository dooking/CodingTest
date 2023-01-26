// https://www.acmicpc.net/problem/9461
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const tests = input.map((el) => +el);

function solution(N, tests) {
  let arr = Array.from({ length: N });
  arr[0] = 1;
  arr[1] = 1;
  arr[2] = 1;
  arr[3] = 2;
  arr[4] = 2;
  for (let i = 5; i < 100; i++) {
    arr[i] = arr[i - 1] + arr[i - 5];
  }
  for (let test of tests) {
    console.log(arr[test - 1]);
  }
}
solution(N, tests);
