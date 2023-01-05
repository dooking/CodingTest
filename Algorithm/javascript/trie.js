class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(string) {
    let cur = this.root;
    for (let _s of string) {
      if (!cur.children.has(_s)) {
        cur.children.set(_s, new Node(cur.value + _s));
      }
      console.log(cur.children);
      cur = cur.children.get(_s);
    }
  }
  find(string) {
    let cur = this.root;
    for (let _s of string) {
      if (!cur.children.has(_s)) {
        return false;
      }
      cur = cur.children.get(_s);
    }
    return true;
  }
}

const trie = new Trie();
trie.insert("cap");
trie.insert("cat");

console.log(trie.find("cap"));
console.log(trie.find("cat"));
console.log(trie.find("cag"));
