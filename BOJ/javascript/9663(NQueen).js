//https://www.acmicpc.net/problem/9663
const fs = require("fs");
// let input = fs.readFileSync("./input.txt").toString().split("\n");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = input.shift();
const board = Array(N).fill(0);
let answer = 0;

const isPossible = (row, col) => {
  for (let i = 0; i < row; i++) {
    if (board[i] === col) return false;
    if (Math.abs(row - i) === Math.abs(col - board[i])) return false;
  }
  return true;
};

const dfs = (row) => {
  if (row == N) {
    answer++;
    return;
  }
  for (let i = 0; i < N; i++) {
    if (isPossible(row, i)) {
      board[row] = i;
      dfs(row + 1);
    }
  }
};

dfs(0);
console.log(answer);
