// https://www.acmicpc.net/problem/13549
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [x, y] = input[0].split(" ").map((el) => +el);

const queue = [[x, 0]];

const visited = Array.from({ length: 100100 }, () => 0);
visited[x] = 1;
let answer = 0;

while (queue.length) {
  const [cur, time] = queue.shift();
  if (cur == y) {
    answer = time;
    break;
  }
  if (!visited[cur * 2] && cur * 2 <= 100000) {
    queue.push([cur * 2, time]);
    visited[cur * 2] = 1;
  }
  if (!visited[cur + 1] && cur + 1 <= 100000) {
    queue.push([cur + 1, time + 1]);
    visited[cur + 1] = 1;
  }
  if (!visited[cur - 1] && cur - 1 >= 0) {
    queue.push([cur - 1, time + 1]);
    visited[cur - 1] = 1;
  }
}
console.log(answer);
