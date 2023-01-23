class MinHeap {
  constructor() {
    this.heap = [null];
  }
  insert(element) {
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
function solution(N, road, K) {
  var answer = 0;
  let minHeap = new MinHeap();
  let adjancencyList = Array.from({ length: N + 1 }, () => []);
  let distance = Array.from({ length: N + 1 }).fill(Infinity);
  for (let [from, to, weight] of road) {
    adjancencyList[from].push([to, weight]);
    adjancencyList[to].push([from, weight]);
  }
  let start = 1;
  minHeap.insert([1, 0]);
  let visited = Array.from({ length: N + 1 }).fill(false);
  distance[start] = 0;
  while (minHeap.heap.length > 1) {
    const [cur, weight] = minHeap.pop();
    if (visited[cur]) continue;
    visited[cur] = true;
    for (let [next, nextWeight] of adjancencyList[cur]) {
      if (distance[next] > distance[cur] + nextWeight) {
        distance[next] = distance[cur] + nextWeight;
        minHeap.insert([next, distance[next]]);
      }
    }
  }
  return distance.filter((el) => el <= K).length;
}
