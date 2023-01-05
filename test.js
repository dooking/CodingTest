function solution() {
  const visited = new Array(3).fill(0);
  let ans = 0;
  let answer = [];

  function dfs(k, cnt) {
    console.log(cnt);
    if (cnt.length === 3) {
      answer.push(cnt.slice());
    }
    for (let j = 0; j < 3; j++) {
      if (!visited[j]) {
        console.log("// ", visited, j);
        visited[j] = 1;
        cnt.push(j);
        dfs(3, cnt);
        cnt.pop(j);
        visited[j] = 0;
      }
    }
  }

  dfs(3, []);
  console.log(answer);
  return ans;
}

console.log(solution());
