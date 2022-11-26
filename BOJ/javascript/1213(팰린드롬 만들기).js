// https://www.acmicpc.net/problem/1213
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const word = Array.from(input[0].replace("\r", ""));

function solution(word) {
  let left = "";
  let center = "";
  let right = "";
  let wordCount = {};
  let check = 0;

  word.sort();
  for (let str of word) {
    if (wordCount[str]) {
      wordCount[str] += 1;
    } else {
      wordCount[str] = 1;
    }
  }

  for (let [str, cnt] of Object.entries(wordCount)) {
    if (cnt % 2) {
      check++;
    }
  }
  if (check >= 2) {
    console.log("I'm Sorry Hansoo");
    return;
  }
  for (let i = 0; i < word.length; i++) {
    if (wordCount[word[i]] >= 2) {
      left += word[i];
      right = word[i] + right;
      wordCount[word[i]] -= 2;
      i += 1;
    } else {
      center += word[i];
    }
  }

  console.log(left + center + right);
}

solution(word);
