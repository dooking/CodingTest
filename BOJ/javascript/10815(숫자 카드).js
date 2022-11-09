// https://www.acmicpc.net/problem/10815
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = +input[0];
const N_list = input[1].split(" ").map((el) => +el);
const M = +input[2];
const M_list = input[3].split(" ").map((el) => +el);

N_list.sort((a, b) => a - b);
let answer = [];

for (let m of M_list) {
  let start = 0;
  let end = N_list.length - 1;
  let bool = false;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (m === N_list[mid]) {
      answer.push(1);
      bool = true;
      break;
    }
    if (m > N_list[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  if (!bool) {
    answer.push(0);
  }
}

console.log(answer.join(" "));
