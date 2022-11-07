function solution(sticker) {
  if (sticker.length == 1) {
    return sticker[0];
  }
  dp = Array(sticker.length).fill(0);
  dp2 = Array(sticker.length).fill(0);
  dp[0] = sticker[0];
  dp[1] = dp[0];
  dp2[0] = 0;
  dp2[1] = sticker[1];
  for (let i = 2; i < sticker.length - 1; i++) {
    dp[i] = Math.max(dp[i - 2] + sticker[i], dp[i - 1]);
  }
  for (let i = 2; i < sticker.length; i++) {
    dp2[i] = Math.max(dp2[i - 2] + sticker[i], dp2[i - 1]);
  }
  return Math.max(Math.max(...dp), Math.max(...dp2));
}
// console.log(solution([14, 6, 5, 11, 3, 9, 2, 10]));
console.log(solution([1, 3, 2, 5, 4]));
