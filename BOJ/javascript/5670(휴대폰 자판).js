// https://www.acmicpc.net/problem/14425
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

class Node {
  constructor(word = "", cnt = 0) {
    this.word = word;
    this.cnt = cnt;
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
      if (!cur.children.get(_s)) {
        cur.children.set(_s, new Node(cur.word + _s, 0));
      }
    }
  }
}
for (let _input of input) {
  let trie = new Trie();
  if (!isNaN(Number(_input))) {
    let trie = new Trie();
    console.log(trie.total);
  } else {
    trie.insert(_input);
  }
}
