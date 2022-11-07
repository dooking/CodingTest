function solution(n) {
  var answer = 0;
  const countOfOne = n
    .toString(2)
    .split("")
    .filter((x) => x == 1).length;
  while (1) {
    n += 1;
    if (
      countOfOne ===
      n
        .toString(2)
        .split("")
        .filter((x) => x == 1).length
    ) {
      answer = n;
      break;
    }
  }
  return answer;
}
console.log(solution(78));
