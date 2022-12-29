//https://www.acmicpc.net/problem/1620
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map((el) => +el);
const book = new Map();
const book2 = new Map();
for (let i = 1; i < N + 1; i++) {
  book.set(input[i].replace("\r", ""), i);
  book2.set(i, input[i].replace("\r", ""));
}

for (let i = N + 1; i < N + 1 + M; i++) {
  if (book.get(input[i].replace("\r", ""))) {
    console.log(book.get(input[i].replace("\r", "")));
  } else {
    console.log(book2.get(+input[i].replace("\r", "")));
  }
}
