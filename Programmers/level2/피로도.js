function solution(k, dungeons) {
  var answer = 0;
  let len = dungeons.length;
  let minValue = Math.min(...dungeons.map((el) => el[0]));
  let temp = [];
  function dfs(piro) {
    if (piro <= minValue || temp.length === 8) {
      answer = Math.max(answer, [...new Set(temp)].length);
      return;
    }
    for (let i = 0; i < len; i++) {
      const [minPiro, comsumePiro] = dungeons[i];
      if (minPiro > piro) {
        continue;
      }
      piro -= comsumePiro;
      temp.push(i);
      dfs(piro);
      temp.pop();
      piro += comsumePiro;
    }
  }
  dfs(k);
  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
