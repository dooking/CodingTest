// prim algorithm
class Prim {
  constructor(graph) {
    this.graph = graph;
    this.visited = [];
    this.dist = [];
    this.prev = [];
    this.mst = [];
    this.mstWeight = 0;
  }

  // get the minimum distance vertex
  getMinVertex() {
    let minVertex = -1;
    for (let i = 0; i < this.graph.length; i++) {
      if (
        !this.visited[i] &&
        (minVertex === -1 || this.dist[i] < this.dist[minVertex])
      ) {
        minVertex = i;
      }
    }
    return minVertex;
  }

  // prim algorithm
  prim() {
    for (let i = 0; i < this.graph.length; i++) {
      this.dist[i] = Infinity;
      this.visited[i] = false;
    }

    this.dist[0] = 0;

    for (let i = 0; i < this.graph.length - 1; i++) {
      let u = this.getMinVertex();
      this.visited[u] = true;
      for (let v = 0; v < this.graph.length; v++) {
        if (this.graph[u][v] !== 0 && !this.visited[v]) {
          if (this.graph[u][v] < this.dist[v]) {
            this.dist[v] = this.graph[u][v];
            this.prev[v] = u;
          }
        }
      }
    }

    for (let i = 1; i < this.graph.length; i++) {
      this.mst.push([this.prev[i], i]);
      this.mstWeight += this.graph[i][this.prev[i]];
    }
  }
}

var graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");

graph.addEdge("A", "B", 1);

var prim = new Prim(graph);
prim.run("A");
