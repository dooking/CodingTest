// https://www.acmicpc.net/problem/1747
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = +input[0];
function solution() {
  let answer = input;
  const arr = isPrime(1003001);
  while (true) {
    if (arr[answer] && isPalindrome(answer)) {
      break;
    }
    answer++;
  }
  console.log(answer);
}
function isPrime(n) {
  const arr = Array(n + 1).fill(true);
  arr[0] = false;
  arr[1] = false;
  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr;
}

function isPalindrome(n) {
  n = n.toString();
  for (let i = 0; i < Math.floor(n.length / 2); i++) {
    if (n[i] !== n[n.length - i - 1]) {
      return false;
    }
  }
  return true;
}
solution();
