function solution(data, col, row_begin, row_end) {
  var answer = 0;
  data.sort((a, b) => {
    if (a[col - 1] > b[col - 1]) {
      return 1;
    }
    if (a[col - 1] < b[col - 1]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return -1;
    }
    if (a[0] < b[0]) {
      return 1;
    }
  });
  for (let r = row_begin - 1; r <= row_end - 1; r++) {
    let sum = 0;
    for (let d of data[r]) {
      sum += d % (r + 1);
    }
    answer ^= sum;
  }
  return answer;
}
console.log(
  solution(
    [
      [2, 2, 6],
      [1, 5, 10],
      [4, 2, 9],
      [3, 8, 3],
    ],
    2,
    2,
    3
  )
);
