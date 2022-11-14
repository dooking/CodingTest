// union-find

class UnionFind {
  constructor(n) {
    this.parent = new Array(n);
    this.rank = new Array(n);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.rank[i] = 1;
    }
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
    if (rootX === rootY) {
      return;
    }
    if (this.rank[rootX] < this.rank[rootY]) {
      [rootX, rootY] = [rootY, rootX];
    }
    this.parent[rootY] = rootX;
    this.rank[rootX] += this.rank[rootY];
  }
}
const uf = new UnionFind(10);
console.log(uf.rank);
console.log(uf.parent);
uf.union(1, 2);
uf.union(2, 9);
console.log(uf.parent);
