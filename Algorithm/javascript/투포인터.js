// 데이터의 개수 N과 부분 연속 수열의 합 M을 입력 받기
let n = 5;
let m = 5;
const data = [1, 2, 3, 2, 5];

let result = 0;
let summary = 0;
let end = 0;

//start를 차례대로 증가시키며 반복
for (let start = 0; start < n; start++) {
  while (summary < m && end < n) {
    summary += data[end];
    end++;
  }
  if (summary == m) {
    result++;
  }
  summary -= data[start];
}
console.log(result);
