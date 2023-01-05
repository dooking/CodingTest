function solution(brown, yellow) {
  var answer = [];
  const cases = [];
  for (let i = yellow; i >= Math.sqrt(yellow); i--) {
    if (yellow % i === 0) {
      cases.push([i, yellow / i]);
    }
  }
  for (let [a, b] of cases) {
    if (a * 2 + b * 2 + 4 === brown) {
      answer = [a + 2, b + 2];
      break;
    }
  }
  return answer;
}

console.log(solution(24, 24));
