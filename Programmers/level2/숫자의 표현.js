function solution(n) {
  var answer = 0;
  let start = 1,
    end = 1;
  while (start !== n) {
    let sumNum = 0;
    for (let i = start; i < n; i++) {
      sumNum += i;
      if (sumNum > n) {
        break;
      } else if (sumNum === n) {
        answer += 1;
      }
    }
    start += 1;
  }
  return answer + 1;
}

console.log(solution(15));
