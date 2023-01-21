// https://www.acmicpc.net/problem/1719
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input
  .shift()
  .split(" ")
  .map((el) => +el);

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
    if (this.heap.length <= 1) {
      return;
    }
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
        [this.heap[minIdx], this.heap[curIdx]] = [
          this.heap[curIdx],
          this.heap[minIdx],
        ];
        curIdx = minIdx;
      } else {
        break;
      }
    }
    return removeItem;
  }
}
function solution(N, M, input) {
  let answer = Array.from({ length: N + 1 }, () =>
    Array.from({ length: N + 1 })
  );
  input = input.map((el) =>
    el
      .replace("\r", "")
      .split(" ")
      .map((a) => +a)
  );
  const adjacencyList = Array.from({ length: N + 1 }, () => []);
  for (let [from, to, weight] of input) {
    adjacencyList[from].push([to, weight]);
    adjacencyList[to].push([from, weight]);
  }
  function dijstra(start) {
    answer[start][start] = "-";
    let queue = new MinHeap();
    let visited = Array.from({ length: N + 1 }).fill(false);
    let distance = Array.from({ length: N + 1 }).fill(Infinity);
    distance[start] = 0;
    for (let [next, nextWeight] of adjacencyList[start]) {
      answer[start][next] = next;
      distance[next] = nextWeight;
      queue.push([next, nextWeight, next]);
    }
    while (queue.heap.length > 1) {
      const [cur, weight, firstLoc] = queue.pop();
      if (visited[cur]) continue;
      visited[cur] = true;
      answer[start][cur] = firstLoc;
      for (let [next, nextWeight] of adjacencyList[cur]) {
        if (distance[next] > distance[cur] + nextWeight) {
          distance[next] = distance[cur] + nextWeight;
          queue.push([next, distance[next], firstLoc]);
        }
      }
    }
  }
  for (let i = 1; i <= N; i++) {
    dijstra(i);
  }
  let result = [];
  for (let i = 1; i <= N; i++) {
    let temp = [];
    for (let j = 1; j <= N; j++) {
      temp.push(answer[i][j]);
    }
    console.log(temp.join(" "));
  }
}
solution(N, M, input);
