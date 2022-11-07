function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => b - a);
  let boat = people[0];
  let restPeople = people.slice(1);
  while (restPeople.length) {
    for (let i = 0; i < restPeople.length; i++) {
      if (boat[0] + restPeople[i] <= limit) {
        answer += 1;
        break;
      }
    }
  }
  return answer + 1;
}

console.log(solution([30, 40, 50, 60], 100));
