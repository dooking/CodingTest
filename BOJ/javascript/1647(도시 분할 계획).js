// https://www.acmicpc.net/problem/1197
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [E, V] = input
  .shift()
  .split(" ")
  .map((el) => +el);
let edges = input.map((el) => el.split(" ").map((a) => +a));
class UnionFind {
  constructor(n) {
    this.root = Array.from({ length: n + 1 }, (_, idx) => idx);
    this.power = Array.from({ length: n + 1 }).fill(0);
  }
  find(x) {
    if (x !== this.root[x]) {
      this.root[x] = this.find(this.root[x]);
    }
    return this.root[x];
  }
  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX === rootY) return;
    if (this.power[rootX] < this.power[rootY]) {
      [rootX, rootY] = [rootY, rootX];
    }
    this.root[rootY] = rootX;
    this.power[rootX] += this.power[rootY];
    return true;
  }
}

function solution(E, V, edges) {
  let answer = [];
  let unionFind = new UnionFind(E);
  edges.sort((a, b) => a[2] - b[2]);
  for (let [from, to, weight] of edges) {
    if (unionFind.union(from, to)) {
      answer.push(weight);
    }
  }
  answer.pop();
  return answer.reduce((acc, cur, idx) => acc + cur, 0);
}
console.log(solution(E, V, edges));
