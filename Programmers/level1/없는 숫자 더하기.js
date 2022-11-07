function solution(numbers) {
  const numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const answerList = numberList.filter((num) => !numbers.includes(num));
  return answerList.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
console.log(solution([5, 8, 4, 0, 6, 7, 9]));
