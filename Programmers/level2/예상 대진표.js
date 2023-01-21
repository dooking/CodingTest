function solution(n, a, b) {
  var answer = 0;
  let powN = 0;
  let copyN = n;
  while (copyN > 1) {
    copyN /= 2;
    powN++;
  }
  if (a <= n / 2 && b >= n / 2) {
    return powN;
  }
  while (true) {
    a = Math.floor((a + 1) / 2);
    b = Math.floor((b + 1) / 2);
    answer++;
    if (a === b) {
      break;
    }
  }
  return answer;
}

console.log(solution(32, 4, 7));
