function solution(s) {
  var answer = [];
  let sets = s
    .slice(2, -2)
    .split("},{")
    .map((set) => set.split(",").map((x) => parseInt(x)))
    .sort((a, b) => a.length - b.length);
  console.log(sets);

  for (let i = 0; i < sets.length; i++) {
    for (let j = 0; j < sets[i].length; j++) {
      if (!answer.includes(sets[i][j])) {
        answer.push(sets[i][j]);
      }
    }
  }
  return answer;
}

console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"));
