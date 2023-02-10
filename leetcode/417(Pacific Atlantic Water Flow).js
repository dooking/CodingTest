/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = (heights) => {
  const m = heights.length,
    n = heights[0].length;
  const atlantic = new Array(m).fill().map(() => new Array(n).fill(false));
  const pacific = new Array(m).fill().map(() => new Array(n).fill(false));
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const dfs = (x, y, visited) => {
    visited[x][y] = true;
    for (let dir of directions) {
      let nx = x + dir[0];
      let ny = y + dir[1];
      if (nx < 0 || ny < 0 || nx >= m || ny >= n || visited[nx][ny]) continue;
      if (heights[nx][ny] >= heights[x][y]) {
        dfs(nx, ny, visited);
      }
    }
  };

  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (x === 0 || y === 0) {
        dfs(x, y, pacific);
      }
      if (x === m - 1 || y === n - 1) {
        dfs(x, y, atlantic);
      }
    }
  }
  const paths = [];
  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (pacific[x][y] && atlantic[x][y]) {
        paths.push([x, y]);
      }
    }
  }
  return paths;
};
console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
);
