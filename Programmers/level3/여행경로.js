function solution(tickets) {
  var answer = [];
  const countries = {};
  for (let i = 0; i < tickets.length; i++) {
    const [from, to] = tickets[i];
    countries[from] = countries[from] ? [...countries[from], to] : [to];
  }
  for (let keys of Object.keys(countries)) {
    countries[keys].sort().reverse();
  }
  const start = "ICN";
  const queue = [start];
  const visited = [];
  while (queue.length) {
    const cur = queue.pop();
    const near = countries[cur];
    console.log("near:", cur, near);
    console.log(visited);
    if (near) {
      answer.push(cur);
      for (let i = 0; i < near.length; i++) {
        console.log(
          "중요::",
          !check([cur, near[i]], visited),
          !countries[near[i]]
        );
        if (!check([cur, near[i]], visited) && countries[near[i]]) {
          console.log(">>", near[i]);
          queue.push(near[i]);
          visited.push([cur, near[i]]);
        }
      }
    }
  }
  return answer;
}

function check(target, arr) {
  for (let i = 0; i < arr.length; i++) {
    const [from, to] = arr[i];
    if (from === target[0] && to === target[1]) {
      return true;
    }
  }
  return false;
}
// console.log(
//   solution([
//     ["ICN", "JFK"],
//     ["IAD", "ICN"],
//     ["HND", "IAD"],
//     ["JFK", "HND"],
//     ["ICN", "ZZZ"],
//   ])
// );
// console.log(
//   solution([
//     ["ICN", "A"],
//     ["ICN", "B"],
//     ["B", "ICN"],
//   ])
// );
console.log(
  solution([
    ["ICN", "A"],
    ["A", "B"],
    ["B", "C"],
  ])
);
