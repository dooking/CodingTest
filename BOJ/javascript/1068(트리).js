//https://www.acmicpc.net/problem/1068
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const parent = input[1].split(" ").map((el) => +el);
const target = +input[2];

function solution(N, parent, target) {
  let answer = 0;
  const tree = Array.from({ length: N }, () => []);
  let start = 0;
  for (let i = 0; i < N; i++) {
    if (parent[i] !== -1) {
      tree[parent[i]].push(i);
    } else {
      start = i;
    }
  }
  const queue = [start];
  if (start === target) {
    return 0;
  }
  while (queue.length) {
    const cur = queue.shift();
    if (tree[cur].length === 0) {
      answer++;
      continue;
    }
    for (let child of tree[cur]) {
      if (child === target) {
        if (tree[cur].length === 1) {
          answer++;
        }
        continue;
      }
      queue.push(child);
    }
  }
  return answer;
}
console.log(solution(N, parent, target));
