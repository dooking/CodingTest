// https://www.acmicpc.net/problem/18352
const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, K, X] = input
  .shift()
  .split(" ")
  .map((el) => +el);

let answer = 0;
const graph = input.map((el) => el.split(" ").map((el) => +el));
const check = new Array(N + 1).fill(0);
const city = {};
for (let [from, to] of graph) {
  if (city[from]) {
    city[from].push(to);
  } else {
    city[from] = [to];
  }
}
const distance = Array(N + 1).fill(0);

const queue = [[X, 0]];
while (queue.length) {
  const [cur, cnt] = queue.shift();
  check[cur] = 1;
  if (city[cur] && !!check[cur]) {
    for (let i = 0; i < city[cur].length; i++) {
      if (distance[city[cur][i]] == 0) {
        distance[city[cur][i]] = cnt + 1;
        check[city[cur][i]] = 1;
        queue.push([city[cur][i], cnt + 1]);
      }
    }
  }
}
for (let i = 1; i < N + 1; i++) {
  if (distance[i] == K) {
    console.log(i);
    answer += 1;
  }
}
if (!answer) {
  console.log(-1);
}
