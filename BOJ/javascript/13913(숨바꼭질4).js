// https://www.acmicpc.net/problem/13913
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [N, K] = input[0].split(" ").map((el) => +el);
const queue = [[N, N]];
const visited = Array.from({ length: 100100 }, () => 0);
let answer = [];
visited[N] = 1;

if (N == K) {
  console.log(0);
  console.log(N);
  return;
}
while (queue.length) {
  const [cur, acc] = queue.shift();
  if (cur === K) {
    answer = acc.split(",");
    break;
  }
  if (!visited[cur * 2] && cur * 2 <= 100000) {
    queue.push([cur * 2, `${acc},${cur * 2}`]);
    visited[cur * 2] = 1;
  }
  if (!visited[cur + 1] && cur + 1 <= 100000) {
    queue.push([cur + 1, `${acc},${cur + 1}`]);
    visited[cur + 1] = 1;
  }
  if (!visited[cur - 1] && cur - 1 >= 0) {
    queue.push([cur - 1, `${acc},${cur - 1}`]);
    visited[cur - 1] = 1;
  }
}
console.log(answer.length - 1);
console.log(answer.join(" "));
