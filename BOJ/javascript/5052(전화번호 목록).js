class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node(); // 루트 노드는 공백
  }

  insert(word) {
    let currentNode = this.root;

    // word = cat;
    for (const char of word) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new Node(currentNode.value + char));
      }

      currentNode = currentNode.children.get(char);
    }
  }

  has(word) {
    let currentNode = this.root;

    for (const char of word) {
      console.log(char, currentNode.children.has(char));
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }
    return true;
  }
}

const fs = require("fs");
let input = fs
  .readFileSync("./input.txt")
  .toString()
  .replaceAll("\r", "")
  .split("\n");

const testCase = input[0];
const caseList = [];
const answer = [];
console.log(input.length);
for (let i = 1; i < input.length; i++) {
  const num = input[i];
  caseList.push([num, [...input.slice(i + 1, i + +num + 1)]]);
  i += +num;
}
for (let i = 0; i < testCase.length; i++) {
  for (let [n, numbers] of caseList) {
    const trie = new Trie();
    let bool = true;
    for (let number of numbers) {
      console.log(number, trie.has(number));
      if (!trie.has(number)) {
        trie.insert(number);
      } else {
        answer.push("YES");
        bool = false;
        break;
      }
    }
    if (bool) {
      answer.push("NO");
    }
  }
}
console.log(answer);
