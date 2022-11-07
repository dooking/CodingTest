function solution(number, k) {
  let count = 0;
  let answer = [number[0]];
  let j = 0;
  for (let i = 1; i < number.length; i++) {
    console.log(i, answer);
    if (answer[j] < number[i]) {
      answer.splice(j, 1);
      answer.push(number[i]);
      count += 1;
      j += 1;
    } else if (count >= k) {
      answer.push(number[i]);
    } else if (number[i - 1] <= number[i]) {
      answer.push(number[i]);
    }
  }
  console.log(answer, count);
  return 0;
}

// console.log(solution("1924", 2));
// console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
