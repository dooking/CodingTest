// https://www.acmicpc.net/problem/1063
const fs = require("fs");
// let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [king, rock, N] = input.shift().split(" ");

const coordinate = (location) => {
  const [alpha, num] = location.split("");
  return [alpha.charCodeAt(0), +num];
};
let kingL = coordinate(king);
let rockL = coordinate(rock);
for (let move of input) {
  move = move.replace("\r", "");
  if (move === "R") {
    if (kingL[0] + 1 <= 72) {
      kingL = [kingL[0] + 1, kingL[1]];
      if (kingL[0] === rockL[0] && kingL[1] === rockL[1]) {
        if (rockL[0] + 1 <= 72) {
          rockL = [rockL[0] + 1, rockL[1]];
        } else {
          kingL = [kingL[0] - 1, kingL[1]];
        }
      }
    }
  } else if (move === "L") {
    if (kingL[0] - 1 >= 65) {
      kingL = [kingL[0] - 1, kingL[1]];
      if (kingL[0] === rockL[0] && kingL[1] === rockL[1]) {
        if (rockL[0] - 1 >= 65) {
          rockL = [rockL[0] - 1, rockL[1]];
        } else {
          kingL = [kingL[0] + 1, kingL[1]];
        }
      }
    }
  } else if (move === "B") {
    if (kingL[1] - 1 >= 1) {
      kingL = [kingL[0], kingL[1] - 1];
      if (kingL[0] === rockL[0] && kingL[1] === rockL[1]) {
        if (rockL[1] - 1 >= 1) {
          rockL = [rockL[0], rockL[1] - 1];
        } else {
          kingL = [kingL[0], kingL[1] + 1];
        }
      }
    }
  } else if (move === "T") {
    if (kingL[1] + 1 <= 8) {
      kingL = [kingL[0], kingL[1] + 1];
      if (kingL[0] === rockL[0] && kingL[1] === rockL[1]) {
        if (rockL[1] + 1 <= 8) {
          rockL = [rockL[0], rockL[1] + 1];
        } else {
          kingL = [kingL[0], kingL[1] - 1];
        }
      }
    }
  } else if (move === "RT") {
    if (kingL[1] + 1 <= 8 && kingL[0] + 1 <= 72) {
      kingL = [kingL[0] + 1, kingL[1] + 1];
      if (kingL[0] === rockL[0] && kingL[1] === rockL[1]) {
        if (rockL[1] + 1 <= 8 && rockL[0] + 1 <= 72) {
          rockL = [rockL[0] + 1, rockL[1] + 1];
        } else {
          kingL = [kingL[0] - 1, kingL[1] - 1];
        }
      }
    }
  } else if (move === "LT") {
    if (kingL[1] + 1 <= 8 && kingL[0] - 1 >= 65) {
      kingL = [kingL[0] - 1, kingL[1] + 1];
      if (kingL[0] === rockL[0] && kingL[1] === rockL[1]) {
        if (rockL[1] + 1 <= 8 && rockL[0] - 1 >= 65) {
          rockL = [rockL[0] - 1, rockL[1] + 1];
        } else {
          kingL = [kingL[0] + 1, kingL[1] - 1];
        }
      }
    }
  } else if (move === "RB") {
    if (kingL[0] + 1 <= 72 && kingL[1] - 1 >= 1) {
      kingL = [kingL[0] + 1, kingL[1] - 1];
      if (kingL[0] === rockL[0] && kingL[1] === rockL[1]) {
        if (rockL[0] + 1 <= 72 && rockL[1] - 1 >= 1) {
          rockL = [rockL[0] + 1, rockL[1] - 1];
        } else {
          kingL = [kingL[0] - 1, kingL[1] + 1];
        }
      }
    }
  } else if (move === "LB") {
    if (kingL[1] - 1 >= 1 && kingL[0] - 1 >= 65) {
      kingL = [kingL[0] - 1, kingL[1] - 1];
      if (kingL[0] === rockL[0] && kingL[1] === rockL[1]) {
        if (rockL[1] - 1 >= 1 && rockL[0] - 1 >= 65) {
          rockL = [rockL[0] - 1, rockL[1] - 1];
        } else {
          kingL = [kingL[0] + 1, kingL[1] + 1];
        }
      }
    }
  }
}
console.log(String.fromCharCode(kingL[0]) + kingL[1]);
console.log(String.fromCharCode(rockL[0]) + rockL[1]);
