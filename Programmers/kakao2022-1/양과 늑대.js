function solution(info, edges) {
  var answer = 0;
  const mapArr = Array.from(Array(info.length), () => []);
  const queue = [];
  const visited = [0];
  for (let edge of edges) {
    const [from, to] = edge;
    if (from === 0) {
      queue.push([from, 0]);
    }
    mapArr[from].push(to);
  }
  let lamb = 1;
  let fox = 0;
  while (queue.length) {
    const [from, cnt] = queue.pop();
    console.log("queue>>", from, lamb, fox, cnt, mapArr[from]);
    for (let adj of mapArr[from]) {
      console.log("------------", adj, info[adj], !visited.includes(adj));
      if (info[adj] === 0) {
        console.log("양 추가", from, adj, lamb, fox + 1);
        visited.push(adj);
        queue.push([adj, cnt + 1]);
        lamb++;
      } else if (info[adj] === 1) {
        if (lamb > fox + 1) {
          console.log("여우 추가", from, adj, lamb, fox + 1);
          visited.push(adj);
          queue.push([adj, cnt + 1]);
          fox++;
        }
      }
    }
  }
  return lamb;
}

console.log(
  solution(
    [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [
      [0, 1],
      [1, 2],
      [1, 4],
      [0, 8],
      [8, 7],
      [9, 10],
      [9, 11],
      [4, 3],
      [6, 5],
      [4, 6],
      [8, 9],
    ]
  )
);
