// https://www.acmicpc.net/problem/1058
const fs = require("fs");
// let input = fs.readFileSync("./input.txt").toString().split("\n");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = input.shift();
const graph = Array.from({ length: N }, () => new Array(+N).fill(0));
const friends = Array.from({ length: N }, () => new Array(0));

for (let i = 0; i < N; i++) {
  const friends = input[i].split("");
  for (let j = 0; j < N; j++) {
    if (friends[j] === "Y") {
      graph[i][j] = 1;
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (i != j && graph[i][j] === 1 && graph[j][i] === 1) {
      friends[i].push(j);
      friends[j].push(i);
      for (let k = 0; k < N; k++) {
        if (k != i && graph[j][k] === 1 && !friends[i].includes(k)) {
          friends[i].push(k);
          friends[k].push(i);
        }
      }
    }
  }
}
let answer = 0;
for (let el of friends) {
  const setEl = [...new Set(el)];
  if (answer < setEl.length) answer = setEl.length;
}
console.log(answer);
