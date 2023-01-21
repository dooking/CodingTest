function dijkstra(start, n, adj) {
  const queue = [[start, 0]];
  const visited = [];
  const distance = Array(n + 1).fill(Infinity);
  distance[start] = 0;
  while (queue.length) {
    const [cur, weigth] = queue.shift();
    visited[cur] = true;
    for (let [next, nextWeigth] of adj[cur]) {
      if (distance[next] > distance[cur] + nextWeigth) {
        distance[next] = distance[cur] + nextWeigth;
        queue.push([next, nextWeigth]);
      }
    }
  }
  return distance;
}
