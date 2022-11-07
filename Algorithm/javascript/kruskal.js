// kruskal's MST Algorithm

function kruskal(graph) {
  var edges = graph.edges.slice(0);
  edges.sort(function (a, b) {
    return a.weight - b.weight;
  });
  let sum = 0;
  var uf = new UnionFind(graph.nodes),
    mst = [];
  edges.forEach(function (edge) {
    if (!uf.union(edge.source, edge.target)) {
      uf.union(edge.source, edge.target);
      mst.push(edge);
      sum += edge.weight;
    }
  });

  return sum;
}

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

// graph
class Graph {
  constructor() {
    this.nodes = 0;
    this.edges = [];
  }

  addNode() {
    return this.nodes++;
  }

  addEdge(source, target, weight) {
    this.edges.push({ source, target, weight });
  }
}

// test
var graph = new Graph();
var nodes = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

nodes.forEach(function () {
  graph.addNode();
});

graph.addEdge(0, 1, 4);
graph.addEdge(0, 7, 8);
graph.addEdge(1, 2, 8);
graph.addEdge(1, 7, 11);
graph.addEdge(2, 3, 7);
graph.addEdge(2, 8, 2);
graph.addEdge(2, 5, 4);
graph.addEdge(3, 4, 9);
graph.addEdge(3, 5, 14);
graph.addEdge(4, 5, 10);
graph.addEdge(5, 6, 2);
graph.addEdge(6, 7, 1);
graph.addEdge(6, 8, 6);
graph.addEdge(7, 8, 7);

console.log(kruskal(graph));
