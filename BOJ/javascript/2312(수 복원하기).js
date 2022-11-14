// https://www.acmicpc.net/problem/2312
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const numList = input[1].split(" ").map((el) => +el);
