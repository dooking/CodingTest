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
  insert(word) {
    let currentNode = this.root;
    for (const char of word) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new Node(currentNode.vale + char));
      }
      currentNode = currentNode.children.get(char);
    }
  }
  has(word) {
    let currentNode = this.root;
    for (const char of word) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }
    return true;
  }
}
const trie = new Trie();
trie.insert("cat");
trie.insert("carry");
trie.insert("candy");
trie.insert("can");
trie.insert("cant");
console.log(trie.has("cantz")); // true
console.log(trie.has("candy")); // true
console.log(trie.has("con")); // false
