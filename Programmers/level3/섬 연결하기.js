class UnionFind {
  constructor(n) {
    this.root = Array.from({ length: n }, (_, idx) => idx);
    this.power = Array.from({ length: n }).fill(0);
  }
  find(x) {
    if (x !== this.root[x]) {
      this.root[x] = this.find(this.root[x]);
    }
    return this.root[x];
  }
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) {
      return;
    }
    if (this.power[rootX] < this.power[rootY]) {
      [rootX, rootY] = [rootY, rootX];
    }
    this.root[rootY] = rootX;
    this.power[rootX] += this.power[rootY];
    return true;
  }
}
function solution(n, costs) {
  var answer = 0;
  costs.sort((a, b) => a[2] - b[2]);
  const unionFind = new UnionFind(n);
  for (let [from, to, weight] of costs) {
    if (unionFind.union(from, to)) {
      unionFind.union(from, to);
      answer += weight;
    }
  }
  return answer;
}
