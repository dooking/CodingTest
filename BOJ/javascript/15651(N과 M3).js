//https://www.acmicpc.net/problem/15651
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((el) => +el);

function solution(N, M) {
  let answer = "";
  const arr = Array.from({ length: N }, (_, idx) => idx + 1);
  const visited = Array.from({ length: N }).fill(false);
  function dfs(n, _arr) {
    if (n === M) {
      answer += `${_arr.join(" ")}\n`;
      return;
    }
    for (let i = 0; i < N; i++) {
      _arr.push(arr[i]);
      dfs(n + 1, _arr);
      _arr.pop();
    }
  }
  dfs(0, []);
  console.log(answer);
  return;
}
solution(N, M);
