function solutin(A) {
  let answer = -1;

  if (A[A.length - 1] == 0) {
    answer = 0;
  } else if (A[A.length - 1] == 15) {
    answer = 1;
  } else if (A[A.length - 2] - A[A.length - 1] > 0) {
    answer = 0;
  } else if (A[A.length - 2] - A[A.length - 1] < 0) {
    answer = 1;
  }
  return answer;
}

console.log(solutin([5]));
