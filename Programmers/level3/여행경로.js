function solution(tickets) {
  // graph
  const graph = tickets.reduce((acc, [from, to], i) => {
    if (!acc[from]) acc[from] = [to];
    else acc[from] = [...acc[from], to].sort().map((f, i) => `${f}${i}`);
    return acc;
  }, {});

  // dfs
  let used = [];
  let path = ["ICN"];
  console.log(graph);
  const dfs = (from) => {
    if (graph[from]) {
      const pCache = [...path];
      const uCache = [...used];

      for (let i = 0; i < graph[from].length; i++) {
        const to = graph[from][i];

        // 아직 사용 안했다면
        if (!used.find(([vf, vt]) => vf === from && vt === to)) {
          const realTo = to.replace(/[0-9]/g, "");

          // 사용 처리
          path.push(realTo);
          used.push([from, to]);

          // 만약 다 못돌았다면 원복
          if (!dfs(realTo)) {
            path = pCache;
            used = uCache;
          }
        }
      }
    }

    return tickets.length === used.length;
  };

  dfs("ICN");

  return path;
}

// console.log(
//   solution([
//     ["ICN", "JFK"],
//     ["HND", "IAD"],
//     ["JFK", "HND"],
//   ])
// );
console.log(
  solution([
    ["ICN", "A"],
    ["ICN", "B"],
    ["B", "ICN"],
  ])
);
// console.log(
//   solution([
//     ["ICN", "A"],
//     ["A", "B"],
//     ["B", "C"],
//   ])
// );
