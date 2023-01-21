function solution(n, edge) {
  var answer = 0;
  const check = Array.from({ length: n + 1 }).fill(false);
  const vertex = Array.from({ length: n + 1 }).fill(0);
  const adj = Array.from({ length: n + 1 }, () => []);
  for (let [a, b] of edge) {
    adj[a].push(b);
    adj[b].push(a);
  }
  check[1] = true;
  const queue = [[1, 0]];
  while (queue.length) {
    const [cur, cnt] = queue.shift();
    for (let next of adj[cur]) {
      if (!check[next]) {
        queue.push([next, cnt + 1]);
        check[next] = true;
        vertex[next] = cnt + 1;
      }
    }
  }
  const max = Math.max(...vertex);
  return vertex.filter((el) => el === max).length;
}
