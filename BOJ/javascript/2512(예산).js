// https://www.acmicpc.net/problem/2512
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = +input[0];
const budgets = input[1].split(" ").map((el) => +el);
const M = +input[2];

const sum = budgets.reduce((acc, cur, idx) => acc + cur, 0);
budgets.sort((a, b) => a - b);

function solution() {
  if (sum <= M) {
    return budgets[budgets.length - 1];
  }
  let start = 1;
  let end = budgets[budgets.length - 1];
  let answer = [];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let sumBudget = 0;
    for (let i = 0; i < budgets.length; i++) {
      if (mid < budgets[i]) {
        sumBudget += mid;
      } else {
        sumBudget += budgets[i];
      }
    }
    if (sumBudget > M) {
      end = mid - 1;
    } else {
      start = mid + 1;
      answer.push(mid);
    }
  }
  if (answer.length) {
    return Math.max(...answer);
  } else {
    return end;
  }
}
console.log(solution());
