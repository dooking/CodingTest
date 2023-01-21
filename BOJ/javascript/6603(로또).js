// https://www.acmicpc.net/problem/6603
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map((el) => el.split(" ").map((el) => +el));
let answer = "";

for (let _t of input) {
  const n = _t.shift();
  function dfs(arr, m) {
    console.log(arr, m);
    if (arr.length === 3) {
      answer += `${arr.join(" ")}\n`;
      return;
    }
    for (let idx = m; idx < _t.length; idx++) {
      dfs([...arr, _t[idx]], idx + 1);
    }
  }
  dfs([], 0);
  answer += "\n";
}

console.log(answer);
