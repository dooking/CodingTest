class Heap {
  constructor() {
    this.heap = [null];
  }
  insert(value) {
    this.heap.push(value);
    let idx = this.heap.length - 1;
    while (idx > 1 && this.heap[idx] > this.heap[Math.floor(idx / 2)]) {
      [this.heap[idx], this.heap[Math.floor(idx / 2)]] = [
        this.heap[Math.floor(idx / 2)],
        this.heap[idx],
      ];
      idx = Math.floor(idx / 2);
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
        [this.heap[left], this.heap[max]] = [this.heap[max], this.heap[left]];
        max = left;
      }
      if (right < this.heap.length && this.heap[right] > this.heap[max]) {
        [this.heap[right], this.heap[max]] = [this.heap[max], this.heap[right]];
        max = right;
      }
      if (max !== idx) {
        idx = max;
      } else {
        break;
      }
    }

    return deletedItem;
  }
}

function heapSort(arr) {
  const len = arr.length;
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, i, len);
    console.log(i, arr);
  }
  for (let i = len - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, 0, i);
  }
  return arr;
}
function heapify(arr, i, len) {
  let left = i * 2 + 1;
  let right = i * 2 + 2;
  let max = i;
  if (left < len && arr[left] > arr[max]) {
    max = left;
  }
  if (right < len && arr[right] > arr[max]) {
    max = right;
  }
  if (max !== i) {
    [arr[max], arr[i]] = [arr[i], arr[max]];
    heapify(arr, max, len);
  }
}

console.log(heapSort([3, 1, 2, 10, 5]));
