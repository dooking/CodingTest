function solution(numbers) {
  var answer = 0;
  const num_arr = numbers.split("");
  const case_arr = [];
  for (let i = 0; i < num_arr.length; i++) {
    const permutation_result = permutation(num_arr, i + 1);
    for (let j = 0; j < permutation_result.length; j++) {
      case_arr.push(Number(permutation_result[j].join("")));
    }
  }
  for (let case_item of [...new Set(case_arr)]) {
    if (isPrime(Number(case_item))) {
      answer += 1;
    }
  }

  return answer;
}

function permutation(arr, num) {
  const res = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    const permutations = permutation(rest, num - 1);
    const attach = permutations.map((permutation) => [v, ...permutation]);
    res.push(...attach);
  });
  return res;
}
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num % 2 === 0) {
    return num == 2 ? true : false;
  }
  const sqrt = parseInt(Math.sqrt(num));

  for (let divider = 3; divider <= sqrt; divider += 2) {
    if (num % divider === 0) {
      return false;
    }
  }
  return true;
}

console.log(solution("011"));
