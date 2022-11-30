// https://www.acmicpc.net/problem/1251
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const word = input[0].replace("\r", "");
let answer = "z".repeat(word.length);
if (word.length === 3) {
  console.log(word);
  return;
}
for (let i = 0; i < word.length - 2; i++) {
  for (let j = i + 1; j < word.length - 1; j++) {
    // console.log(i, j);
    // console.log(
    //   word.slice(0, i + 1),
    //   "/",
    //   word.slice(i + 1, j + 1),
    //   "/",
    //   word.slice(j + 1)
    // );
    let newWord =
      word
        .slice(0, i + 1)
        .split("")
        .reverse()
        .join("") +
      word
        .slice(i + 1, j + 1)
        .split("")
        .reverse()
        .join("") +
      word
        .slice(j + 1)
        .split("")
        .reverse()
        .join("");
    if (newWord < answer) {
      answer = newWord;
    }
  }
}
console.log(answer);
