function solution(numbers, target) {
  const answer = dfs(0, 0, target, numbers, 0);
  return answer;
}

function dfs(idx, cur, target, numbers, answer) {
  if (idx == numbers.length) {
    console.log(idx, cur, numbers.length);
    if (cur == target) {
      return answer + 1;
    }
    return answer;
  } else {
    answer = dfs(idx + 1, cur + numbers[idx], target, numbers, answer);
    answer = dfs(idx + 1, cur - numbers[idx], target, numbers, answer);
  }
  return answer;
}
console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));
