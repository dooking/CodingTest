//https://www.acmicpc.net/problem/15649
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((el) => +el);

function solution(N, M) {
  let answer = [];
  const arr = Array.from({ length: N }, (_, idx) => idx + 1);
  const visited = Array.from({ length: N }).fill(false);
  function dfs(n, _arr) {
    if (n === M) {
      answer.push(_arr.slice());
      return;
    }
    arr.forEach((el) => {
      if (!visited[el]) {
        visited[el] = true;
        _arr.push(el);
        dfs(n + 1, _arr);
        visited[el] = false;
        _arr.pop();
      }
    });
  }
  dfs(0, []);
  for (let a of answer) {
    console.log(a.join(" "));
  }
  return answer;
}
solution(N, M);
