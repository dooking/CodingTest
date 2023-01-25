//https://www.acmicpc.net/problem/9663
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const board = Array(N).fill(0);
let answer = 0;

function check(board, row) {
  for (let i = 0; i < row; i++) {
    if (
      board[i] === board[row] ||
      Math.abs(board[i] - board[row]) === row - i
    ) {
      return false;
    }
  }
  return true;
}
function dfs(board, row) {
  if (row === N) {
    answer += 1;
    return;
  }
  for (let col = 0; col < N; col++) {
    board[row] = col;
    if (check(board, row)) {
      dfs(board, row + 1);
    }
  }
}

dfs(board, 0);
console.log(answer);

// const isPossible = (row, col) => {
//   for (let i = 0; i < row; i++) {
//     if (board[i] === col) return false;
//     if (Math.abs(row - i) === Math.abs(col - board[i])) return false;
//   }
//   return true;
// };

// const dfs = (row) => {
//   if (row == N) {
//     answer++;
//     return;
//   }
//   for (let i = 0; i < N; i++) {
//     if (isPossible(row, i)) {
//       board[row] = i;
//       dfs(row + 1);
//     }
//   }
// };

// dfs(0);
