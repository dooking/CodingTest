function solution(n, computers) {
  var answer = 0;
  const linkedArr = Array.from(new Array(n), () => []);
  const visited = [0];
  for (let idx = 0; idx < computers.length; idx++) {
    const queue = [[...computers[idx], idx]];
    while (queue.length) {
      const node = queue.shift();
      visited.push(idx);
      for (let i = 0; i < node.length - 1; i++) {
        if (idx !== i && node[i] === 1 && !visited.includes(i)) {
          queue.push([...computers[i], idx]);
          console.log(idx, i, node, visited);
          visited.push(i);
          linkedArr[node.slice(-1)].push(i);
        }
      }
    }
  }
  console.log(linkedArr);
  return n - linkedArr.flat().length;
}

console.log(
  solution(5, [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1],
    [0, 0, 1, 1, 1],
    [0, 0, 1, 1, 1],
  ])
);
