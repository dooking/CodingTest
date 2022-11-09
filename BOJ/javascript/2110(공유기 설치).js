// https://www.acmicpc.net/problem/2110
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let coord = [];
const [N, C] = input[0].split(" ").map((el) => +el);
for (let i = 1; i < input.length; i++) {
  coord.push(+input[i]);
}
coord.sort((a, b) => a - b);
function count(arr, dist) {
  let prev = arr[0];
  let cnt = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - prev >= dist) {
      cnt++;
      prev = arr[i];
    }
  }
  return cnt;
}
function solution() {
  let answer = 0;
  let start = 1;
  let end = coord[coord.length - 1];
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (count(coord, mid) >= C) {
      start = mid + 1;
      answer = mid;
    } else {
      end = mid - 1;
    }
  }
  return answer;
}
console.log(solution());
