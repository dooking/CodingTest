//https://www.acmicpc.net/problem/1021
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map((el) => +el);
const arr = input[1].split(" ").map((el) => +el);

let numArr = Array.from({ length: N }, (_, idx) => idx + 1);
let answer = 0;
for (let target of arr) {
  const bCnt = numArr.indexOf(target);
  const cCnt = numArr.length - bCnt;
  // c
  if (bCnt > cCnt) {
    for (let i = 0; i < cCnt; i++) {
      numArr.unshift(numArr.pop());
    }
    numArr.shift();
    answer += cCnt;
  }
  // b
  else {
    for (let i = 0; i < bCnt; i++) {
      numArr.push(numArr.shift());
    }
    numArr.shift();
    answer += bCnt;
  }
}
console.log(answer);
