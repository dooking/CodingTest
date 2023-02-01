// https://www.acmicpc.net/problem/9996
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();

const target =
  "^" + input.shift().replace("\r", "").replaceAll("*", ".*") + "$";
const words = input.map((el) => el.replace("\r", ""));

function solution(N, target, words) {
  const reg = new RegExp(target, "gi");
  for (let word of words) {
    if (word.match(reg)) {
      console.log("DA");
    } else {
      console.log("NE");
    }
  }
}
solution(N, target, words);
