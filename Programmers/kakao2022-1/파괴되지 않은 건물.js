function solution(board, skill) {
  var answer = 0;
  const curBoard = Array.from({ length: board.length + 1 }, () =>
    new Array(board[0].length + 1).fill(0)
  );
  for (let action of skill) {
    const [type, r1, c1, r2, c2, degree] = action;
    curBoard[r1][c1] += degree * (type === 1 ? -1 : 1);
    curBoard[r1][c2 + 1] += -degree * (type === 1 ? -1 : 1);
    curBoard[r2 + 1][c1] += -degree * (type === 1 ? -1 : 1);
    curBoard[r2 + 1][c2 + 1] += degree * (type === 1 ? -1 : 1);
  }
  for (let i = 0; i < curBoard.length; i++) {
    for (let j = 0; j < curBoard[0].length - 1; j++) {
      curBoard[i][j + 1] += curBoard[i][j];
    }
  }
  for (let j = 0; j < curBoard[0].length - 1; j++) {
    for (let i = 0; i < curBoard.length - 1; i++) {
      curBoard[i + 1][j] += curBoard[i][j];
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] + curBoard[i][j] > 0) {
        answer++;
      }
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [1, 1, 1, 2, 2, 4],
      [1, 0, 0, 1, 1, 2],
      [2, 2, 0, 2, 0, 100],
    ]
  )
);
