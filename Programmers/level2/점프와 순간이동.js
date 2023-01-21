// https://school.programmers.co.kr/learn/courses/30/lessons/12980
function solution(n) {
  var ans = 0;
  let queue = [[1, 1, [1]]];
  while (n >= 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n -= 1;
      ans += 1;
    }
  }
  return ans;
}

console.log(solution(5000));
