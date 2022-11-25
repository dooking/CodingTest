class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class InsertNode {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let node = new Node(data);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (current) {
      if (data <= current.data) {
        if (!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      }
      if (data > current.data) {
        if (!current.right) {
          current.right = node;
          break;
        }
        current = current.right;
      }
    }
  }
  traverse(node) {
    if (node) {
      this.traverse(node.left);
      console.log(node.data);
      this.traverse(node.right);
    }
  }
}
let nums = new InsertNode();
nums.insert(10);
nums.insert(5);
nums.insert(11);
nums.insert(3);
nums.insert(6);
console.log(nums);
nums.traverse(nums.root);
