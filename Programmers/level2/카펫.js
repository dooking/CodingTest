function solution(brown, yellow) {
  var answer = [];
  const yelloArr = [];
  for (let i = yellow; i > 0; i--) {
    if (yellow % i == 0) {
      yelloArr.push([yellow, i]);
      console.log(i);
    }
  }
  console.log(yelloArr);
  return answer;
}

console.log(solution(24, 24));
