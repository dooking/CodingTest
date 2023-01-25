//https://www.acmicpc.net/problem/1182
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
  .map((el) => +el);

function solution(N, M, arr) {
  let result = 0;
  const visited = Array.from({ length: N }).fill(false);
  function dfs(cnt, idx, K, sum) {
    if (cnt === K) {
      if (sum === M) {
        result++;
      }
      return;
    }
    for (let i = idx; i < N; i++) {
      if (!visited[i]) {
        visited[i] = true;
        sum += arr[i];
        dfs(cnt + 1, i, K, sum);
        sum -= arr[i];
        visited[i] = false;
      }
    }
  }
  for (let i = 1; i <= N; i++) {
    dfs(0, 0, i, 0);
  }
  return result;
}
console.log(solution(N, M, arr));
