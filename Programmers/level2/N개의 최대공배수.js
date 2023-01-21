function solution(arr) {
  var answer = 0;
  let result = [...arr];
  while (result.length) {
    let temp = [];
    for (let i = 0; i < result.length - 1; i++) {
      const prev = result[i];
      const next = result[i + 1];
      const LCD = (prev / GCD(prev, next)) * next;
      temp.push(LCD);
    }
    answer = result[0];
    result = [...temp];
  }
  return answer;
}

function GCD(a, b) {
  if (b === 0) return a;
  return GCD(b, a % b);
}
