// https://school.programmers.co.kr/learn/courses/30/lessons/138476
function solution(k, tangerine) {
  var answer = 0;
  let numberList = {};
  for (let num of tangerine) {
    if (numberList[num]) {
      numberList[num]++;
    } else {
      numberList[num] = 1;
    }
  }
  const sortedNumberList = Object.entries(numberList).sort(
    (a, b) => b[1] - a[1]
  );
  for (let [id, cnt] of sortedNumberList) {
    if (k - cnt <= 0) {
      answer++;
      break;
    }
    k = k - cnt;
    answer++;
  }
  return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));
