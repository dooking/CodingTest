// https://www.acmicpc.net/problem/15655
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((el) => +el);
const arr = input
  .shift()
  .split(" ")
  .map((el) => +el)
  .sort((a, b) => a - b);

function solution(N, M, arr) {
  let answer = [];
  const visited = Array.from({ length: N }).fill(false);
  const arrIndex = Array.from({ length: N }, (_, idx) => idx);

  function dfs(n, idx, _arr) {
    if (n === M) {
      answer.push(_arr.slice());
      return;
    }
    for (let i = idx; i < N; i++) {
      const el = arr[i];
      if (!visited[el]) {
        visited[el] = true;
        _arr.push(el);
        dfs(n + 1, i, _arr);
        visited[el] = false;
        _arr.pop();
      }
    }
  }
  dfs(0, 0, []);
  for (let a of answer) {
    console.log(a.join(" "));
  }
  return answer;
}
solution(N, M, arr);
