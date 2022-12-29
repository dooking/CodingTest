//https://www.acmicpc.net/problem/4949
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
function solution(input) {
  for (let sentence of input) {
    if (sentence === ".") {
      return;
    }
    const regex = new RegExp(/\W/gi);
    const newSentence = sentence.replace(/\s|\\r|\./gi, "").match(regex);
    const stack1 = [];
    let bool = true;
    if (newSentence) {
      for (let c of newSentence) {
        if (c === "(") {
          stack1.push(c);
        } else if (c === ")") {
          if (stack1.length) {
            if (stack1[stack1.length - 1] === "(") {
              stack1.pop();
            } else {
              bool = false;
              break;
            }
          } else {
            bool = false;
            break;
          }
        } else if (c === "[") {
          stack1.push(c);
        } else if (c === "]") {
          if (stack1.length) {
            if (stack1[stack1.length - 1] === "[") {
              stack1.pop();
            } else {
              bool = false;
              break;
            }
          } else {
            bool = false;
            break;
          }
        }
      }
      if (bool && !stack1.length) {
        console.log("yes");
      } else {
        console.log("no");
      }
    } else {
      console.log("yes");
    }
  }
}

solution(input);
