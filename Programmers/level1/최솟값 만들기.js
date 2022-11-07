function solution(A, B) {
  var answer = 0;
  const newA = A.sort((a, b) => a - b);
  const newB = B.sort((a, b) => b - a);
  for (let i = 0; i < newA.length; i++) {
    answer += newA[i] * newB[i];
  }

  return answer;
}

console.log(solution([1, 4, 2], [5, 4, 4]));
console.log(solution([1, 2], [3, 4]));
