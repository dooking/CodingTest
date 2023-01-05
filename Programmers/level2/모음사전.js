class Heap {
  constructor() {
    this.heap = [null];
  }
  insert(value) {
    this.heap.push(value);
    let idx = this.heap.length;
    while (idx > 1 && this.heap[idx] > this.heap[Math.floor(idx / 2)]) {
      [this.heap[idx], this.heap[Math.floor(idx / 2)]] = [
        this.heap[(Math.floor(idx / 2), this.heap[idx])],
      ];
      idx = idx / 2;
    }
    return;
  }
  delete() {
    if (this.heap.length < 2) {
      return;
    }
    let deletedItem = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();
    let idx = 1;
    while (idx * 2 < this.heap.length) {
      let left = idx * 2;
      let right = idx * 2 + 1;
      let max = idx;
      if (left < this.heap.length && this.heap[left] > this.heap[max]) {
        max = left;
      }
      if (left < this.heap.length && this.heap[left] > this.heap[max]) {
        max = right;
      }
      if (max !== idx) {
        [this.heap[max], this.heap[idx]] = [this.heap[idx], this.heap[max]];
        idx = max;
      } else {
        break;
      }
    }
    return deletedItem;
  }
}

const heap = new Heap();
const result = [];
const arr = [5, 2, 1, 7, 10, 6];
for (let i = 0; i < arr.length; i++) {
  heap.insert(arr[i]);
}
for (let i = 0; i < arr.length; i++) {
  result.push(heap.delete());
}

console.log(result);
