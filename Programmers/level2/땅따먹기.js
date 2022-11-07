// function solution(land) {
//   const answer = [];
//   for (let cur = 0; cur < land[0].length; cur++) {
//     const queue = [[land[0][cur], 0, [0, 1, 2, 3].filter((n) => n !== cur)]];
//     while (queue.length) {
//       const [acc, i, candidate] = queue.shift();
//       if (i == land.length - 1) {
//         answer.push(acc);
//       } else {
//         for (let j = 0; j < candidate.length; j++) {
//           queue.push([
//             acc + land[i][candidate[j]],
//             i + 1,
//             [0, 1, 2, 3].filter((n) => n !== j),
//           ]);
//         }
//       }
//     }
//   }
//   console.log(answer);
//   return Math.max(...answer);
// }

function solution(land) {
  for (let rowIndex = 1; rowIndex < land.length; rowIndex++) {
    for (let colIndex = 0; colIndex < land[0].length; colIndex++) {
      console.log(rowIndex, colIndex);
      land[rowIndex][colIndex] += Math.max(
        ...land[rowIndex - 1].slice(0, colIndex),
        ...land[rowIndex - 1].slice(colIndex + 1)
      );
    }
  }
  console.log(land);
  return Math.max(...land[land.length - 1]);
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
);
