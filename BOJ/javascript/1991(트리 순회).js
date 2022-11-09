// https://www.acmicpc.net/problem/1991
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = +input.shift();
const edges = input.map((el) => el.split(" ").map((e) => e.replace("\r", "")));

function solution() {
  const tree = {};
  for (let [value, left, right] of edges) {
    tree[value] = [left, right];
  }
  let preorderResult = "";
  let inorderResult = "";
  let postorderResult = "";
  function preorder(node) {
    if (node === ".") return;
    const [lt, rt] = tree[node];
    preorderResult += node;
    preorder(lt);
    preorder(rt);
  }

  function inorder(node) {
    if (node === ".") return;
    const [lt, rt] = tree[node];
    inorder(lt);
    inorderResult += node;
    inorder(rt);
  }
  function postorder(node) {
    if (node === ".") return;
    const [lt, rt] = tree[node];
    postorder(lt);
    postorder(rt);
    postorderResult += node;
  }
  preorder("A");
  inorder("A");
  postorder("A");

  console.log(preorderResult);
  console.log(inorderResult);
  console.log(postorderResult);
}
solution();
