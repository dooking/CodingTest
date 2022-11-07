function solution(arr1, arr2) {
  var answer = Array.from(Array(arr1.length), () => new Array(arr2[0].length));
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      let result = 0;
      for (let k = 0; k < arr1[0].length; k++) {
        result += arr1[i][k] * arr2[k][j];
      }
      answer[i][j] = result;
      result = 0;
    }
  }
  return answer;
}
console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
);
console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ]
  )
);
