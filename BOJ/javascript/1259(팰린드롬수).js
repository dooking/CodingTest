// https://www.acmicpc.net/problem/1259
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  let answer = true;
  const n = input[i];
  if (!+n) return;
  const N = Array.from(n.replace("\r", ""));
  for (let j = 0; j < Math.floor(N.length / 2); j++) {
    if (N[j] !== N[N.length - 1 - j]) {
      answer = false;
      continue;
    }
  }
  if (answer) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
