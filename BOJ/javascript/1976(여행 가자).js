// https://www.acmicpc.net/problem/1976
const fs = require("fs");
// let input = fs.readFileSync("./input.txt").toString().split("\n");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

class Node {
  constructor(n) {
    this.size = n + 1;
    this.edges = [];
  }
  addNode(start, end) {
    this.edges.push([start, end]);
  }
}
class UnionFind {
  constructor(n) {
    this.rank = Array.from({ length: n }, () => 1);
    this.parent = Array.from({ length: n }, (_, i) => i);
  }
  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX == rootY) {
      return;
    }
    if (this.rank[rootX] < this.rank[rootY]) {
      [rootX, rootY] = [rootY, rootX];
    }
    this.parent[rootY] = rootX;
    this.rank[rootX] += this.rank[rootY];
  }
}
const N = parseInt(input.shift(), 10);
const M = parseInt(input.shift(), 10);
const graph = [];
const City = new Node(N);
for (let i = 0; i < N; i++) {
  graph.push(
    input
      .shift()
      .split(" ")
      .map((el) => +el)
  );
}

const trips = input
  .shift()
  .split(" ")
  .map((el) => +el);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] == 1) {
      City.addNode(i + 1, j + 1);
    }
  }
}

const solution = (City) => {
  const DisjointSet = new UnionFind(City.size);
  for (let edge of City.edges) {
    if (!DisjointSet.union(edge[0], edge[1])) {
      DisjointSet.union(edge[0], edge[1]);
    }
  }
  for (let i = 0; i < trips.length - 1; i++) {
    if (DisjointSet.parent[trips[i]] !== DisjointSet.parent[trips[i + 1]]) {
      console.log("NO");
      return;
    }
  }
  console.log("YES");
  return;
};
solution(City);
