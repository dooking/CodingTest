function solution(x, y, n) {
  var answer = -1;
  const arr = Array.from({ length: y + 1 }).fill(0);
  if (x > y) {
    return -1;
  }
  if (x === y) {
    return 0;
  }
  for (let i = x + 1; i <= y; i++) {
    let A = 1000000;
    let B = 1000000;
    let C = 1000000;
    if (i % 3 === 0 && i / 3 >= x) {
      A = arr[i / 3];
    }
    if (i % 2 === 0 && i / 2 >= x) {
      B = arr[i / 2];
    }
    if (i - n >= x) {
      C = arr[i - n];
    }
    d = Math.min(A, B);
    d = Math.min(d, C);

    arr[i] = d < 1000000 ? d + 1 : 1000000;
  }
  return arr[y] === 1000000 ? -1 : arr[y];
}

console.log(solution(30, 50, 5));
