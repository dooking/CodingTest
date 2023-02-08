// https://www.acmicpc.net/problem/1753
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

class MinHeap {
  constructor() {
    this.heap = [null];
  }
  push(element) {
    this.heap.push(element);
    let curIdx = this.heap.length - 1;
    while (curIdx > 1) {
      if (this.heap[curIdx][1] < this.heap[Math.floor(curIdx / 2)][1]) {
        [this.heap[curIdx], this.heap[Math.floor(curIdx / 2)]] = [
          this.heap[Math.floor(curIdx / 2)],
          this.heap[curIdx],
        ];
        curIdx = Math.floor(curIdx / 2);
      } else {
        break;
      }
    }
    return;
  }
  pop() {
    let removeItem = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();
    let curIdx = 1;
    while (curIdx < this.heap.length) {
      let minIdx = curIdx;
      let leftIdx = curIdx * 2;
      let rightIdx = curIdx * 2 + 1;

      if (
        leftIdx < this.heap.length &&
        this.heap[leftIdx][1] < this.heap[minIdx][1]
      ) {
        minIdx = leftIdx;
      }
      if (
        rightIdx < this.heap.length &&
        this.heap[rightIdx][1] < this.heap[minIdx][1]
      ) {
        minIdx = rightIdx;
      }
      if (minIdx !== curIdx) {
        [this.heap[curIdx], this.heap[minIdx]] = [
          this.heap[minIdx],
          this.heap[curIdx],
        ];
        curIdx = minIdx;
      } else {
        break;
      }
    }
    return removeItem;
  }
}

const [N, M] = input
  .shift()
  .split(" ")
  .map((el) => +el);
const start = +input.shift();
const edges = [...input].map((el) => el.split(" ").map((a) => +a));
function solution(N, M, start, edges) {
  const answer = Array.from({ length: N }).fill(Infinity);
  const adjacencyList = Array.from({ length: N }, () => []);
  for (let [from, to, weight] of edges) {
    adjacencyList[from - 1].push([to - 1, weight]);
  }
  start = start - 1;
  answer[start] = 0;
  let visited = Array.from({ length: N }).fill(false);
  const minHeap = new MinHeap();
  minHeap.push([start, 0]);
  while (minHeap.heap.length > 1) {
    console.log(minHeap.heap);
    const [cur, weight] = minHeap.pop();
    if (visited[cur]) continue;
    visited[cur] = true;
    for (let [next, nextWeight] of adjacencyList[cur]) {
      if (answer[next] > answer[cur] + nextWeight) {
        answer[next] = answer[cur] + nextWeight;
        minHeap.push([next, answer[next]]);
      }
    }
  }
  return answer.map((el) => (el == Infinity ? "INF" : el)).join("\n");
}
console.log(solution(N, M, start, edges));
