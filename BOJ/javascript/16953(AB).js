// https://www.acmicpc.net/problem/16953
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [A, B] = input[0].split(" ").map((el) => +el);
let max = 1000000000;
function solution() {
  const queue = [[A, 0]];
  while (queue.length) {
    const [cur, cnt] = queue.shift();
    if (cur == B) {
      return cnt + 1;
    }
    if (cur * 2 <= max) {
      queue.push([cur * 2, cnt + 1]);
    }
    if (cur * 10 + 1 <= max) {
      queue.push([cur * 10 + 1, cnt + 1]);
    }
  }
  return -1;
}

console.log(solution());
