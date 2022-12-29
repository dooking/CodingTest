//https://www.acmicpc.net/problem/17219
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map((el) => +el);
const rememberBook = new Map();
for (let i = 1; i < N + 1; i++) {
  const [site, password] = input[i]
    .split(" ")
    .map((el) => el.replace("\r", ""));
  rememberBook.set(site, password);
}
for (let i = N + 1; i < N + M + 1; i++) {
  console.log(rememberBook.get(input[i].replace("\r", "")));
}
