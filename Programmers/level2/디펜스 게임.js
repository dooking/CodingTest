// https://school.programmers.co.kr/learn/courses/30/lessons/142085
function solution(n, k, enemy) {
  var answer = 0;
  const len = enemy.length;
  if (k >= len) {
    return len;
  }
  let start = k;
  let end = len - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const enemyList = enemy.slice(0, mid + 1);
    enemyList.sort((a, b) => b - a);
    const possibleList = enemyList.slice(k);
    const sumPossibleList = possibleList.reduce(
      (acc, cur, idx) => acc + cur,
      0
    );
    if (sumPossibleList > n) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return start;
}

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1]));
