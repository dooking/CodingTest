function solution(lottos, win_nums) {
  const correctNumberList = lottos.filter((lotto) => win_nums.includes(lotto));
  const zeroNumberList = lottos.filter((lotto) => lotto === 0);
  const correctNumber = correctNumberList.length;
  const zeroNumber = zeroNumberList.length;
  if (zeroNumber === lottos.length) {
    return [1, 6];
  } else if (correctNumber === 0 && zeroNumber === 0) {
    return [6, 6];
  } else if (correctNumber === 0 && zeroNumber !== 0) {
    return [7 - zeroNumber, 6];
  } else return [7 - (correctNumber + zeroNumber), 7 - correctNumber];
}

console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([1, 2, 4, 5, 6, 3], [38, 19, 20, 40, 15, 25]));
