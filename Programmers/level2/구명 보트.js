function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => a - b);
  let start = 0;
  let end = people.length - 1;
  while (start <= end) {
    console.log(start, end, answer);
    if (people[start] + people[end] <= limit) {
      answer++;
      start++;
      end--;
    } else {
      answer++;
      end--;
    }
  }
  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
