var spiralOrder = function (matrix) {
  let queue = [[0, 0, "right"]];
  let answer = [];
  let n = matrix.length;
  let m = matrix[0].length;
  let visited = Array.from({ length: n }, () =>
    Array.from({ length: m }).fill(false)
  );
  while (queue.length) {
    let [x, y, dir] = queue.pop();
    visited[x][y] = true;
    answer.push(matrix[x][y]);
    if (answer.length === m * n) {
      break;
    }
    if (dir === "right") {
      if (y + 1 >= m || visited[x][y + 1]) {
        queue.push([x + 1, y, "down"]);
      } else {
        queue.push([x, y + 1, "right"]);
      }
    } else if (dir === "down") {
      if (x + 1 >= n || visited[x + 1][y]) {
        queue.push([x, y - 1, "left"]);
      } else {
        queue.push([x + 1, y, "down"]);
      }
    } else if (dir === "left") {
      if (y - 1 < 0 || visited[x][y - 1]) {
        queue.push([x - 1, y, "up"]);
      } else {
        queue.push([x, y - 1, "left"]);
      }
    } else {
      if (visited[x - 1][y]) {
        queue.push([x, y + 1, "right"]);
      } else {
        queue.push([x - 1, y, "up"]);
      }
    }
  }
  return answer;
};

console.log(
  spiralOrder([
    [2, 5, 8],
    [4, 0, -1],
  ])
);
