// https://www.acmicpc.net/problem/5637
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function solution(words) {
  let answer = "";
  const result = words.match(/[a-zA-Z-]+/g);
  if (result) {
    for (let _r of result) {
      if (_r === "E-N-D") {
        break;
      }
      if (answer.length < _r.length) {
        answer = _r;
      }
    }
  }
  return answer.toLocaleLowerCase();
}

console.log(solution(input));
