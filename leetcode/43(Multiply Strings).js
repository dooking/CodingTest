var multiply = function (num1, num2) {
  let answer = Array.from({ length: num1.length + num2.length }).fill(0);
  let idx = 0;
  for (let b of num2.split("").reverse()) {
    let tempIdx = idx;
    for (let a of num1.split("").reverse()) {
      if (a * b >= 10) {
        answer[tempIdx] += (a * b) % 10;
        answer[tempIdx + 1] += Math.floor((a * b) / 10);
      } else {
        answer[tempIdx] += a * b;
      }
      if (answer[tempIdx] >= 10) {
        answer[tempIdx] -= 10;
        answer[tempIdx + 1] += 1;
      }
      if (answer[tempIdx + 1] >= 10) {
        answer[tempIdx + 1] -= 10;
        answer[tempIdx + 2] += 1;
      }
      tempIdx++;
    }
    idx++;
  }
  while (true) {
    if (answer[answer.length - 1] === 0 && answer.length > 1) {
      answer.pop();
    } else {
      break;
    }
  }
  return answer.reverse().join("");
};

console.log(multiply("9123", "0"));
