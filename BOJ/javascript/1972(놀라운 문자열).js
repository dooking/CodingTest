// https://www.acmicpc.net/problem/1972
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "*") {
      return;
    }
    let bool = true;
    const word = Array.from(input[i].replace("\r", ""));
    for (let d = 0; d < word.length - 1; d++) {
      let temp = [];
      for (let k = 0; k < word.length - 1 - d; k++) {
        temp.push(word[k] + word[k + d + 1]);
      }
      if (temp.length !== [...new Set(temp)].length) {
        bool = false;
        break;
      }
    }

    if (bool) {
      console.log(`${word.join("")} is surprising.`);
    } else {
      console.log(`${word.join("")} is NOT surprising.`);
    }
  }
}
solution(input);
