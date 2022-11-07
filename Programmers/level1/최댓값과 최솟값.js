function solution(s) {
  const numberList = s.split(" ").map((v) => parseInt(v));
  return Math.min(...numberList) + " " + Math.max(...numberList);
}

console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
console.log(solution("-1 -1"));
