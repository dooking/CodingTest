// https://www.acmicpc.net/problem/2902
const fs = require("fs");
// let input = fs.readFileSync("./input.txt").toString().split("\n");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const KMP = input[0].split("-");
console.log(KMP.map((el) => el[0]).join(""));
