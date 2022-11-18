// https://www.acmicpc.net/problem/4375
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  const N = +input[i];
  let answer = 0;
  let temp = 1;
  while (true) {
    if (temp % N == 0) {
      answer = String(temp).length;
      break;
    }
    temp = temp * 10 + 1;
  }
  console.log(answer);
}

function GCD(a, b) {
  if (b === 0) return a;
  return b, a % b;
}
