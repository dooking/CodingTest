function solution(s) {
  var answer = [];
  let count = 0;
  while (s !== "1") {
    const convertS = s.replaceAll("0", "");
    answer.push(s.length - convertS.length);
    s.toString(convertS.length);
    s = convertS.length.toString(2);
    count += 1;
  }
  const result = answer.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return [count, result];
}

console.log(solution("110010101001"));
