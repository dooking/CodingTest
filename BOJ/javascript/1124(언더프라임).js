// https://www.acmicpc.net/problem/1124
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [A, B] = input[0].split(" ").map((el) => +el);

function solution(A, B) {
  let answer = 0;
  for (let i = A; i <= B; i++) {
    const primeLength = primeFactors(i).length;
    if (isPrime(primeLength)) {
      answer++;
    }
  }
  return answer;
}
function primeFactors(n) {
  let result = [];
  while (n % 2 == 0) {
    result.push(2);
    n /= 2;
  }
  for (let i = 3; i * i <= n; i += 2) {
    while (n % i == 0) {
      result.push(i);
      n /= i;
    }
  }
  if (n > 2) {
    result.push(n);
  }
  return result;
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(solution(A, B));
