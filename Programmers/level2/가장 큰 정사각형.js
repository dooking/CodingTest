function solution(board) {
  var answer = 0;
  const N = board.length;
  const M = board[0].length;
  if (N === 1 || M === 1) {
    return 1;
  }
  for (let i = 1; i < N; i++) {
    for (let j = 1; j < M; j++) {
      if (board[i][j]) {
        board[i][j] =
          Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]) + 1;
        answer = Math.max(answer, board[i][j]);
      }
    }
  }
  return answer ** 2;
}
