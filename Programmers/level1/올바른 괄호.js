function solution(s) {
  let stackArr = [];
  if (s[0] === ")") {
    return false;
  }
  s.split("").forEach((el) => {
    if (el === "(") {
      stackArr.push("(");
    } else {
      stackArr.pop();
    }
  });

  return stackArr.length === 0 ? true : false;
}

console.log(solution(")()()"));
// console.log(solution("()()"));
// console.log(solution(")()("));
// console.log(solution("(()("));
