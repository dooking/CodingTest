function solution(s) {
  s = s.split("");
  if (Math.floor(s.length) % 2 === 1) {
    return 0;
  }
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0 ? 1 : 0;
}

console.log(solution("dabbccad"));
