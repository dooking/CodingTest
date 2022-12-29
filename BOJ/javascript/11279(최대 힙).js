//https://www.acmicpc.net/problem/11279
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
class Heap {
  constructor() {
    this.heap = [0];
  }
  size() {
    return this.heap.length;
  }
  insert(value) {
    this.heap.push(value);
    let idx = this.size() - 1;
    while (idx > 1 && this.heap[idx] > this.heap[Math.floor(idx / 2)]) {
      [this.heap[idx], this.heap[Math.floor(idx / 2)]] = [
        this.heap[Math.floor(idx / 2)],
        this.heap[idx],
      ];
      idx = Math.floor(idx / 2);
    }
  }
  delete() {
    if (this.size() < 2) {
      return;
    }
    let deletedItem = this.heap[1];
    this.heap[1] = this.heap[this.size() - 1];
    this.heap.pop();
    let idx = 1;
    while (idx * 2 < this.size()) {
      let left = idx * 2;
      let right = idx * 2 + 1;
      let max = idx;
      if (left < this.size() && this.heap[left] > this.heap[max]) {
        max = left;
      }
      if (right < this.size() && this.heap[right] > this.heap[max]) {
        max = right;
      }
      if (max !== idx) {
        [this.heap[idx], this.heap[max]] = [this.heap[max], this.heap[idx]];
        idx = max;
      } else {
        break;
      }
    }
    return deletedItem;
  }
}

const maxHeap = new Heap();
let answer = [];
for (let i = 1; i < N + 1; i++) {
  const cur = +input[i];
  if (cur === 0) {
    if (maxHeap.heap.length === 1) {
      answer.push(0);
    } else {
      answer.push(maxHeap.delete());
    }
    continue;
  }
  maxHeap.insert(+input[i]);
}
console.log(answer.join("\n"));
