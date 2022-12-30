//https://www.acmicpc.net/problem/9934
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const K = +input[0];
const arr = input[1].split(" ").map((el) => +el);
let answer = Array.from({ length: K }, () => []);

function solution(K, arr) {
  inorderTraversal(arr, 0);
  for (let _arr of answer) {
    console.log(_arr.join(" "));
  }
}

function inorderTraversal(tree, depth) {
  if (depth === K) {
    return;
  }
  const mid = Math.floor(tree.length / 2);
  console.log(depth, mid);
  answer[depth].push(tree[mid]);
  inorderTraversal(tree.slice(0, mid), depth + 1);
  inorderTraversal(tree.slice(mid + 1), depth + 1);
}
solution(K, arr);
