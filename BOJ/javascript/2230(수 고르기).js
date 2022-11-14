// https://www.acmicpc.net/problem/2230
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const [N, M] = input[0].split(" ").map((el) => +el);
const numList = [];
for (let i = 1; i <= N; i++) {
  numList.push(parseInt(input[i]));
}
numList.sort((a, b) => a - b);

let min = Number.MAX_VALUE;

let start = 0;
let end = 0;
while (start <= end && end < N) {
  // console.log(start + " " + end);
  const diff = numList[end] - numList[start];
  if (diff < M) {
    end++;
  } else {
    if (min > diff) {
      min = diff;
    }
    start++;
  }
  if (min == M) {
    break;
  }
}

console.log(min);
