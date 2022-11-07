function solution(maps) {
  var answer = 0;
  const start = [0, 0];
  const n = maps.length;
  const m = maps[0].length;
  const visited = Array.from(Array(n), () => Array(m).fill(0));
  const queue = [[0, 0, 1]];
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  let bool = false;
  visited[0][0] = 1;
  while (queue.length) {
    console.log(queue);
    console.log(visited);
    const [x, y, distance] = queue.shift();
    for (let i = 0; i < 4; i++) {
      nx = x + dx[i];
      ny = y + dy[i];

      console.log(x, y, nx, ny, m - 1, n - 1);
      if (nx === n - 1 && ny === m - 1) {
        answer = distance;
        bool = true;
        break;
      }
      if (nx > n - 1 || nx < 0 || ny > m - 1 || ny < 0) {
        continue;
      }
      if (maps[nx][ny] === 0 || visited[nx][ny] !== 0) {
        continue;
      }

      queue.push([nx, ny, distance + 1]);
      visited[nx][ny] += 1;
      answer += 1;
    }

    if (bool) {
      break;
    }
  }
  if (queue.length === 0 && !bool) {
    return -1;
  }
  return answer + 1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ])
);
// console.log(
//   solution([
//     [1, 0, 1, 1, 1],
//     [1, 0, 1, 0, 1],
//     [1, 0, 1, 1, 1],
//     [1, 1, 1, 0, 1],
//     [0, 0, 0, 0, 1],
//   ])
// );
