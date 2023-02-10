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
 */
class BSTIterator {
  constructor(root) {
    this.root = root;
    this.idx = 0;
    this.stack = [];
    this.inOrder(root);
  }
  next() {
    return this.stack[this.idx++];
  }
  hasNext() {
    return this.stack.length > this.idx;
  }
  inOrder(cur) {
    if (cur) {
      this.inOrder(cur.left);
      this.stack.push(cur.val);
      this.inOrder(cur.right);
    }
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
