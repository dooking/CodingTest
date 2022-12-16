let result = [];

function solution(str) {
  console.log(str);
  if (!str) {
    return result.join(" ");
  }
  result.push(str);
  return solution;
}

console.log(solution("hello")("world")("hihi")("bye")());
