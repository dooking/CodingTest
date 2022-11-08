function solution(food_times, k) {
  var answer = 0;

  const sum = food_times.reduce((arr, cur, idx) => arr + cur, 0);
  if (sum <= k) {
    return -1;
  }
  console.log(sum);

  return answer;
}
console.log(solution([3, 1, 2], 5));
