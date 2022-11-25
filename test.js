// Javascript code

/**
arr1 = [3, 6, 100] // N
arr2 = [1, 2, 7, 200] // M
output = [1, 2, 3, 6, 7, 100, 200]
*/

// TC: O((n+m)log(n+m))
function solution(arr1, arr2) {
  let result = arr1.concat(arr2);
  // result를 오름차순으로 정렬시키는 과정
  result = quicksort(result);
  return result;
}
function quicksort(arr) {
  return arr;
}

// TC: O(min(N,M))
function solution(arr1, arr2) {
  let result = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }
  return result.concat(arr1.slice(), arr2.slice());
}

/**
arrs = [
   [3, 6, 100],
   [1, 2, 7, 200],
   [10, 20, 30],
   ...
]

arrs.length = K
arrs[0].length = N

output = [1, 2, 3, 6, 7, 10, 20, 30, 100, 200]
*/

// O(NK * K)

function solution(arrs) {
  let result = Array.from({ length: arrs.length }, () =>
    new Array(arrs[0].length).fill(0)
  );

  for (let i = 0; i < arrs.length; i++) {
    for (let j = 0; j < arrs[0].length; j++) {
      result[i][j] = arrs[i][j];
    }
  }
  result.sort((a, b) => a - b);
  return result;
}
