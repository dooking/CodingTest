function solution(n, paths, gates, summits) {
  var answer = [];
  const ground = Array.from(Array(n + 1), () => []);
  for (let i = 0; i < paths.length; i++) {
    const [from, to, time] = paths[i];
    ground[from].push([to, time]);
    ground[to].push([from, time]);
  }
  console.log(ground);
  for (let i = 0; i < gates.length; i++) {
    const start = gates[i];
    const queue = [[start, -1, -1]];
    const visited = [];
    while (queue.length) {
      const [cur, acc] = queue.shift();
      console.log(">>", cur, acc);
      for (let j = 0; j < ground[cur].length; j++) {
        const [from, time] = ground[cur][j];
        console.log("---------------------");
        console.log(from, time, j);
        console.log("---------------------");
        if (
          !gates.includes(from) &&
          !visited.includes(from) &&
          Math.max(acc, time) >= time
        ) {
          console.log("살았다!");
          if (summits.includes(from)) {
            console.log("<<", from, acc, ground[cur][j]);
            answer.push([from, Math.max(acc, time)]);
            continue;
          }
          queue.push([from, Math.max(acc, time)]);
          visited.push(from);
        }
      }
    }
  }
  answer.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });
  return answer[0];
}

// console.log(
//   solution(
//     7,
//     [
//       [1, 4, 4],
//       [1, 6, 1],
//       [1, 7, 3],
//       [2, 5, 2],
//       [3, 7, 4],
//       [5, 6, 6],
//     ],
//     [1],
//     [2, 3, 4]
//   )
// );
console.log(
  solution(
    3,
    [
      [1, 2, 9],
      [2, 3, 2],
      [1, 3, 4],
    ],
    [1],
    [3]
  )
);
// console.log(
//   solution(
//     7,
//     [
//       [1, 2, 5],
//       [1, 4, 1],
//       [2, 3, 1],
//       [2, 6, 7],
//       [4, 5, 1],
//       [5, 6, 1],
//       [6, 7, 1],
//     ],
//     [3, 7],
//     [1, 5]
//   )
// );
