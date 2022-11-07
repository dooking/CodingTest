// create a heap
class Heap {
  constructor() {
    this.heap = [];
  }
  insert(node) {
    this.heap.push(node);
    this.heapifyUp();
  }
  delete(node) {
    var index = this.heap.indexOf(node);
    if (index == -1) {
      return;
    }
    this.heap[index] = this.heap.pop();
    this.heapifyDown(index);
  }
  find(node) {
    var index = this.heap.indexOf(node);
    if (index == -1) {
      return;
    }
    return this.heap[index];
  }
  print() {
    console.log(this.heap);
  }
  heapifyUp() {
    var index = this.heap.length - 1;
    while (index > 0) {
      var parent = Math.floor((index - 1) / 2);
      if (this.heap[parent] < this.heap[index]) {
        var temp = this.heap[parent];
        this.heap[parent] = this.heap[index];
        this.heap[index] = temp;
        index = parent;
      } else {
        break;
      }
    }
  }
  heapifyDown(index) {
    var left = 2 * index + 1;
    var right = 2 * index + 2;
    var largest = index;
    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }
    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }
    if (largest != index) {
      var temp = this.heap[largest];
      this.heap[largest] = this.heap[index];
      this.heap[index] = temp;
      this.heapifyDown(largest);
    }
  }
}

// test

var heap = new Heap();

heap.insert(9);
heap.insert(10);
heap.insert(5);
heap.insert(7);
heap.insert(1);
heap.insert(2);
heap.insert(2);

heap.print();
