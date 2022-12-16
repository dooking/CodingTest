function solution(topping) {
  var answer = 0;

  const left = new Set();
  const right = new Map();
  for (let i = 0; i < topping.length; i++) {
    if (right.has(topping[i])) {
      right.set(topping[i], right.get(topping[i]) + 1);
    } else {
      right.set(topping[i], 1);
    }
  }
  for (let i = 0; i < topping.length - 1; i++) {
    if (right.has(topping[i])) {
      const cur = right.get(topping[i]);
      if (cur === 1) {
        right.delete(topping[i]);
      } else {
        right.set(topping[i], right.get(topping[i]) - 1);
      }
    }

    left.add(topping[i]);
    if (left.size === right.size) {
      answer += 1;
    }
  }
  return answer;
}

console.log(solution([1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 5, 5, 5, 5]));
// console.log(solution([1, 2, 3, 1, 4]));
