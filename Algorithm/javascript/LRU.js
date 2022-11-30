class LRU {
  constructor(v) {
    this.size = v;
    this.map = new Map();
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  put(key, val) {
    let node = new Node(key, val);
    this.map.set(key, node);
    this.insertFront(node);

    if (this.size < this.map.size) {
      this.removeLast();
    }
  }

  get(key) {
    if (!this.map.has(key)) return -1;
    let node = this.map.get(key);
    this.breakAndLink(node);
    this.insertFront(node);
    return node.val;
  }

  breakAndLink(node) {
    let p = node.prev;
    let n = node.next;
    p.next = n;
    n.prev = p;
    node.next = null;
    node.prev = null;
  }

  insertFront(node) {
    let h2 = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    h2.prev = node;
    node.next = h2;
  }

  removeLast() {
    // remove from linklist
    let node = this.tail.prev;
    this.breakAndLink(node);
    // remove from map
    this.map.delete(node.key);
  }
}

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// test
let cache = new LRU(2);
cache.put(1, 1);
cache.put(2, 2);

console.log(cache.get(1)); // returns 1
cache.put(3, 3); // evicts key 2
console.log(cache.get(2)); // returns -1 (not found)
cache.put(4, 4); // evicts key 1
console.log(cache.get(1)); // returns -1 (not found)
console.log(cache.get(3)); // returns 3
console.log(cache.get(4)); // returns 4
