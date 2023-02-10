/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
class MinHeap {
  constructor() {
    this.heap = [null];
  }
  insert(val) {
    this.heap.push(val);
    let idx = this.heap.length - 1;
    while (idx > 1) {
      if (this.heap[idx] < this.heap[Math.floor(idx / 2)]) {
        [this.heap[idx], this.heap[Math.floor(idx / 2)]] = [
          this.heap[Math.floor(idx / 2)],
          this.heap[idx],
        ];
        idx = Math.floor(idx / 2);
      } else {
        break;
      }
    }
    return;
  }
  delete() {
    let deleteVal = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();
    let idx = 1;
    while (idx < this.heap.length) {
      let leftIdx = idx * 2;
      let rightIdx = idx * 2 + 1;
      let curIdx = idx;
      if (
        leftIdx < this.heap.length &&
        this.heap[leftIdx] < this.heap[curIdx]
      ) {
        curIdx = leftIdx;
      }
      if (
        rightIdx < this.heap.length &&
        this.heap[rightIdx] < this.heap[curIdx]
      ) {
        curIdx = rightIdx;
      }
      if (curIdx !== idx) {
        [this.heap[curIdx], this.heap[idx]] = [
          this.heap[idx],
          this.heap[curIdx],
        ];
        idx = curIdx;
      } else {
        break;
      }
    }
    return deleteVal;
  }
}
var kthSmallest = function (root, k) {
  let minHeap = new MinHeap();
  function findVal(cur) {
    if (cur) {
      minHeap.insert(cur.val);
      findVal(cur.left);
      findVal(cur.right);
    }
  }

  findVal(root);
  for (let i = 0; i < k; i++) {
    answer = minHeap.delete();
  }
  return answer;
};
