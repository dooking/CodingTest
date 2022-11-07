// https://www.acmicpc.net/problem/2941
const fs = require("fs");
// let input = fs.readFileSync("./input.txt").toString().split("\n");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const ALPHABET = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
const words = input.shift();
let answer = 0;
for (let i = 0; i < words.length; i++) {
  //   console.log(i, answer);
  if (words[i] == "c") {
    if (i + 1 < words.length && words[i + 1] == "=") {
      answer += 1;
      i += 1;
      continue;
    } else if (i + 1 < words.length && words[i + 1] == "-") {
      answer += 1;
      i += 1;
      continue;
    }
  } else if (words[i] == "d") {
    if (i + 1 < words.length && words[i + 1] == "-") {
      answer += 1;
      i += 1;
      continue;
    } else if (
      i + 2 < words.length &&
      words[i + 1] == "z" &&
      words[i + 2] == "="
    ) {
      answer += 1;
      i += 2;
      continue;
    }
  } else if (words[i] == "l") {
    if (i + 1 < words.length && words[i + 1] == "j") {
      answer += 1;
      i += 1;
      continue;
    }
  } else if (words[i] == "n") {
    if (i + 1 < words.length && words[i + 1] == "j") {
      answer += 1;
      i += 1;
      continue;
    }
  } else if (words[i] == "s") {
    if (i + 1 < words.length && words[i + 1] == "=") {
      answer += 1;
      i += 1;
      continue;
    }
  } else if (words[i] == "z") {
    if (i + 1 < words.length && words[i + 1] == "=") {
      answer += 1;
      i += 1;
      continue;
    }
  }
  answer += 1;
}

console.log(answer);
