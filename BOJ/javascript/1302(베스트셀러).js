//https://www.acmicpc.net/problem/1302
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const sellerInfo = new Map();
for (let i = 1; i < N + 1; i++) {
  const curSellerInfo = sellerInfo.get(input[i].replace("\r", "")) || 0;
  sellerInfo.set(input[i].replace("\r", ""), curSellerInfo + 1);
}
console.log(
  [...sellerInfo.entries()].sort((a, b) => {
    if (a[1] > b[1]) {
      return -1;
    }
    if (a[1] < b[1]) {
      return 1;
    }
    if (a[0] > b[0]) {
      return 1;
    }
    if (a[0] < b[0]) {
      return -1;
    }
  })[0][0]
);
