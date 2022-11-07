function solution(n, s) {
  var answer = [];
  let dividedNum = s;
  if (n > s) {
    return [-1];
  }
  for (let i = n; i > 0; i--) {
    const num = Math.ceil(dividedNum / i);
    dividedNum -= num;
    answer.push(num);
  }

  return answer.sort();
}

console.log(solution(2, 1));
