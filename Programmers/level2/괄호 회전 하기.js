function solution(s) {
  var answer = 0;
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (isBracket(s)) {
      answer++;
    }
    let temp = s.shift();
    s = [...s, temp];
  }
  return answer;
}

function isBracket(arr) {
  let aStack = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "[") {
      aStack.push(arr[i]);
    } else if (arr[i] === "(") {
      aStack.push(arr[i]);
    } else if (arr[i] === "{") {
      aStack.push(arr[i]);
    } else if (arr[i] === "]") {
      if (aStack[aStack.length - 1] === "[") {
        aStack.pop();
      } else {
        return false;
      }
    } else if (arr[i] === ")") {
      if (aStack[aStack.length - 1] === "(") {
        aStack.pop();
      } else {
        return false;
      }
    } else if (arr[i] === "}") {
      if (aStack[aStack.length - 1] === "{") {
        aStack.pop();
      } else {
        return false;
      }
    }
  }
  if (aStack.length === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(solution("[](){}"));
