// https://school.programmers.co.kr/learn/courses/30/lessons/140107

function solution(k, d) {
  var answer = 0;
  for (let x = 0; x <= d; x += k) {
    const maxY = Math.sqrt(d ** 2 - x ** 2);
    answer += Math.floor(Math.floor(maxY) / k) + 1;
  }
  return answer;
}

console.log(solution(2, 4));
