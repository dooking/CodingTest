class MinHeap {
  constructor() {
    this.heap = [null];
  }
  push(element) {
    this.heap.push(element);
    let curIdx = this.heap.length - 1;
    while (curIdx > 1) {
      if (this.heap[curIdx] < this.heap[Math.floor(curIdx / 2)]) {
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
        this.heap[leftIdx] < this.heap[minIdx]
      ) {
        minIdx = leftIdx;
      }
      if (
        rightIdx < this.heap.length &&
        this.heap[rightIdx] < this.heap[minIdx]
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
