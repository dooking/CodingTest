const possible = (stones, k, target) => {
  let tmp = stones.slice();
  let check = 0;
  for (let i = 0; i < tmp.length; i++) {
    tmp[i] -= target;
  }
  for (let i = 0; i < stones.length; i++) {
    if (tmp[i] <= 0) {
      check++;
    } else {
      check = 0;
    }
    if (check >= k) {
      return false;
    }
  }
  return true;
};

function solution(stones, k) {
  let start = 0;
  let end = 200000000;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (possible(stones, k, mid)) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
}

// console.log(solution([2, 4, 5], 3));
// console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3));
console.log(
  solution(
    Array.from(Array(300000), () => new Array(1000000)),
    30000
  )
);
