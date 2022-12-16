function solution(board, r, c) {
  var answer = Number.MAX_SAFE_INTEGER;
  const loc = Array.from({ length: 7 }, () => []);
  const start = [r, c];
  const cases = new Set();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const card = board[i][j];
      if (card) {
        cases.add(card);
        loc[card].push([i, j]);
      }
    }
  }
  const arr = [...new Set(cases)];
  const n = arr.length;
  let result = [];
  const dfs = (path) => {
    if (path.length === n) {
      result.push(path.slice());
      return;
    }
    arr.forEach((v) => {
      if (!path.includes(v)) {
        path.push(v);
        dfs(path);
        path.pop();
      }
    });
  };
  for (let startT of cases) {
    dfs([startT]);
  }
  for (let cases of result) {
    let [curX, curY] = start;
    let cnt = 0;
    for (let cur of cases) {
      let temp = [[], []];
      const nextAx = loc[cur][0][0];
      const nextAy = loc[cur][0][1];
      const nextBx = loc[cur][1][0];
      const nextBy = loc[cur][1][1];

      if (curX === nextAx && curY === nextAy) {
        if (nextAx === nextBx || nextAy === nextBy) {
          temp[0] = [nextBx, nextBy, 3];
        } else {
          temp[0] = [nextBx, nextBy, 4];
        }
      } else if (curX === nextAx || curY === nextAy) {
        if (nextAx === nextBx || nextAy === nextBy) {
          temp[0] = [nextBx, nextBy, 4];
        } else {
          temp[0] = [nextBx, nextBy, 5];
        }
      } else {
        if (nextAx === nextBx || nextAy === nextBy) {
          temp[0] = [nextBx, nextBy, 5];
        } else {
          temp[0] = [nextBx, nextBy, 6];
        }
      }
      if (curX === nextBx && curY === nextBy) {
        if (nextAx === nextBx || nextAy === nextBy) {
          temp[1] = [nextAx, nextAy, 3];
        } else {
          temp[1] = [nextAx, nextAy, 4];
        }
      } else if (curX === nextBx || curY === nextBy) {
        if (nextAx === nextBx || nextAy === nextBy) {
          temp[1] = [nextAx, nextAy, 4];
        } else {
          temp[1] = [nextAx, nextAy, 5];
        }
      } else {
        if (nextAx === nextBx || nextAy === nextBy) {
          temp[1] = [nextAx, nextAy, 5];
        } else {
          temp[1] = [nextAx, nextAy, 6];
        }
      }
      temp.sort((a, b) => a[2] - b[2]);
      [curX, curY] = [temp[0][0], temp[0][1]];
      cnt += temp[0][2];
      // console.log(cur, temp[0][2], cnt, temp, curX, curY);
    }
    // console.log("-------------------------");
    answer = Math.min(cnt, answer);
  }
  return answer;
}

// console.log(
//   solution(
//     [
//       [1, 0, 0, 3],
//       [2, 0, 0, 0],
//       [0, 0, 0, 2],
//       [3, 0, 1, 0],
//     ],
//     1,
//     0
//   )
// );
// console.log(
//   solution(
//     [
//       [1, 5, 0, 2],
//       [6, 4, 3, 0],
//       [0, 2, 1, 5],
//       [3, 0, 6, 4],
//     ],
//     0,
//     0
//   )
// );

console.log(
  solution(
    [
      [0, 0, 1, 0],
      [1, 0, 0, 0],
      [4, 4, 3, 2],
      [0, 3, 2, 0],
    ],
    2,
    0
  )
);
