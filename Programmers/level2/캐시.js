class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
class LRU {
  constructor(n) {
    this.size = n;
    this.map = new Map();
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  put(key, value) {
    let node = new Node(key, value);
    this.map.set(key, node);
    this.insertHead(node);
    if (this.size < this.map.size) {
      this.deleteTail();
    }
  }
  get(key) {
    if (!this.map.get(key)) return -1;
    let node = this.map.get(key);
    this.removeLink(node);
    this.insertHead(node);
    return node.value;
  }
  insertHead(node) {
    let h2 = this.head.next;
    node.prev = this.head;
    node.next = h2;
    this.head.next = node;
    h2.prev = node;
  }
  deleteTail() {
    let node = this.tail.prev;
    this.map.delete(node.key);
    this.removeLink(node);
  }
  removeLink(node) {
    let p = node.prev;
    let n = node.next;
    p.next = n;
    n.prev = p;
    node.next = null;
    node.prev = null;
  }
}
function solution(cacheSize, cities) {
  var answer = 0;
  let lru = new LRU(cacheSize);
  for (let city of cities) {
    let cacheResult = lru.get(city.toLowerCase());
    if (cacheResult === -1) {
      lru.put(city.toLowerCase(), city.toLowerCase());
      answer += 5;
    } else {
      answer += 1;
    }
  }
  return answer;
}
