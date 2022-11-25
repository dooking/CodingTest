// https://www.acmicpc.net/problem/2609
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [N, M] = input[0].split(" ").map((el) => +el);

function GCD(a, b) {
  if (b === 0) return a;
  return GCD(b, a % b);
}
function LCM(a, b) {
  return (a / GCD(a, b)) * b;
}

console.log(GCD(N, M));
console.log(LCM(N, M));
