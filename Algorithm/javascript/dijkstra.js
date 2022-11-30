function dijkstra(graph) {
  const queue = [];
  const distance = new Array(n + 1).fill(Infinity);

  queue.push([x, 0]);
  distance[x] = 0;
  while (queue.length > 0) {
    const [start, cost] = queue.shift();
    for (let i = 0; i < graph[start].length; i++) {
      const [v, c] = graph[start][i];
      if (distance[v] > cost + c) {
        distance[v] = cost + c;
        queue.push([v, distance[v]]);
      }
    }
  }
  return distance;
}
