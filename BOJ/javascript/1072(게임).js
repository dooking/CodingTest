// https://www.acmicpc.net/problem/1072
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
let [X, Y] = input.split(" ").map((el) => +el);
const initRate = Math.floor((Y * 100) / X);

let start = 1;
let end = 1000000000;
let ans = Infinity;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let changeRate = Math.floor((100 * (Y + mid)) / (X + mid));
  if (initRate != changeRate) {
    ans = Math.min(ans, mid);
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}
if (ans === Infinity) console.log(-1);
else console.log(ans);

// let cnt = 0;
// if (X == Y || initRate == 99) {
//   console.log(-1);
//   return;
// }
// while (true) {
//   X++;
//   Y++;
//   cnt++;
//   const changeRate = Math.floor((Y * 100) / X);
//   if (initRate !== changeRate) {
//     console.log(cnt);
//     break;
//   }
// }
