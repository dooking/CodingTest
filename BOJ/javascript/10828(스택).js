//https://www.acmicpc.net/problem/10828
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

let stack = [];
for (let i = 0; i < n; i++) {
  const cases = arr[i].replace("\r", "");
  if (cases == "pop") {
    if (stack.length) {
      console.log(stack.pop());
    } else {
      console.log(-1);
    }
  } else if (cases == "size") {
    console.log(stack.length);
  } else if (cases == "empty") {
    if (stack.length) {
      console.log(0);
    } else {
      console.log(1);
    }
  } else if (cases == "top") {
    if (stack.length) {
      console.log(stack[stack.length - 1]);
    } else {
      console.log(-1);
    }
  } else {
    const X = cases.split(" ")[1];
    stack.push(X);
  }
}
