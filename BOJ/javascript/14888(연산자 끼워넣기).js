// https://www.acmicpc.net/problem/14888
const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const numbers = input[1].split(" ").map(Number);
const operator = input[2].split(" ").map(Number);
const operObj = {
  0: (oper1, oper2) => oper1 + oper2,
  1: (oper1, oper2) => oper1 - oper2,
  2: (oper1, oper2) => oper1 * oper2,
  3: (oper1, oper2) => {
    if (oper1 < 0) {
      return -Math.floor(-oper1 / oper2);
    }
    return Math.floor(oper1 / oper2);
  },
};

const temp = [];
let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;
function dfs(L) {
  if (L === N - 1) {
    console.log(temp);
    let oper1 = numbers[0];
    for (let i = 0; i < temp.length; i++) {
      let oper2 = numbers[i + 1];
      let idx = temp[i];
      oper1 = operObj[idx](oper1, oper2);
    }
    if (oper1 > max) max = oper1;
    if (oper1 < min) min = oper1;
  }

  for (let i = 0; i < 4; i++) {
    if (!operator[i]) continue;
    operator[i] -= 1;
    temp.push(i);
    dfs(L + 1);
    operator[i] += 1;
    temp.pop();
  }
}
dfs(0);

console.log(`${max}\n${min}`);
