function solution(n, k) {
  var answer = 0;
  console.log(isPrime(1));
  const convertK = n.toString(k);
  if (!convertK.includes(0)) {
    if (isPrime(convertK)) {
      return 1;
    }
    return 0;
  }
  const zeroList = findZero(convertK);

  for (let i = 0; i < zeroList.length - 1; i++) {
    const cur = convertK.slice(zeroList[i], zeroList[i + 1] + 1);
    const new_cur = cur.replaceAll(0, "");
    console.log(cur, new_cur, isPrime(new_cur));
    if (isPrime(new_cur)) {
      answer += 1;
    }
  }
  return answer;
}

function findZero(arr) {
  let pos = 0;
  const result = [];
  while (true) {
    let foundPos = arr.indexOf(0, pos);
    if (foundPos == -1) break;
    pos = foundPos + 1;
    result.push(pos - 1);
  }
  result.unshift(0);
  result.push(arr.length - 1);
  return result;
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

// console.log(solution(1000000, 7));
console.log(solution(437674, 3));
