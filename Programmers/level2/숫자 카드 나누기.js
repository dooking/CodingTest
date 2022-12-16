// https://school.programmers.co.kr/learn/courses/30/lessons/135807

function solution(arrayA, arrayB) {
  var answer = 0;

  let modA = getGCD(arrayA);
  if (modA !== 1) {
    if (!arrayB.some((el) => el % modA === 0)) {
      answer = Math.max(answer, modA);
    }
  }

  let modB = getGCD(arrayB);
  if (modB !== 1) {
    if (!arrayA.some((el) => el % modB === 0)) {
      answer = Math.max(answer, modB);
    }
  }

  return answer;
}

function GCD(a, b) {
  if (b === 0) return a;
  return GCD(b, a % b);
}

function getGCD(array) {
  let mod = 0;
  for (let i = 0; i < array.length; i++) {
    mod = GCD(mod, array[i]);
  }
  return mod;
}

console.log(solution([5], [15]));
// console.log(getGCD([33, 22]));
