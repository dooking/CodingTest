// https://www.acmicpc.net/problem/1347
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = +input[0];
const MOVE = input[1].split("");

const dx = [0, -1, 0, 1, 0];
const dy = [0, 0, 1, 0, -1];
let dir = 3;
let coordinate = [[0, 0]];

let x = 0;
let y = 0;
let minX = 0;
let maxX = 0;
let minY = 0;
let maxY = 0;

for (let m of MOVE) {
  if (m == "L") {
    dir -= 1;
    if (dir == 0) {
      dir = 4;
    }
  } else if (m == "R") {
    dir += 1;
    if (dir == 5) {
      dir = 1;
    }
  } else if (m == "F") {
    const nx = x + dx[dir];
    const ny = y + dy[dir];
    coordinate.push([nx, ny]);
    x = nx;
    y = ny;
    minX = Math.min(minX, nx);
    maxX = Math.max(maxX, nx);
    minY = Math.min(minY, ny);
    maxY = Math.max(maxY, ny);
  }
}
const newCoordinate = removeDup(coordinate);
for (let i = minX; i <= maxX; i++) {
  let temp = "";
  for (let j = minY; j <= maxY; j++) {
    if (findIdx(newCoordinate, i, j)) {
      temp += ".";
    } else {
      temp += "#";
    }
  }
  console.log(temp);
  temp = "";
}

function removeDup(arr) {
  return [...new Set(arr.join("|").split("|"))]
    .map((el) => el.split(","))
    .map((el) => el.map((a) => +a));
}

function findIdx(arr, x, y) {
  return arr.filter((el) => el[0] == x && el[1] == y).length;
}
