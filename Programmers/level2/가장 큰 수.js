function solution(numbers) {
  const answer = [];

  numbers.map((el) => String(el)).sort((a, b) => b - a);
  return numbers;
}

console.log(solution([6, 9, 2, 3, 5, 1, 5, 14, 1416, 1421, 555, 626]));
