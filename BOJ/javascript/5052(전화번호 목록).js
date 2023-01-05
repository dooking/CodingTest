// https://www.acmicpc.net/problem/5052
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = +input[0];
const testCase = Array.from({ length: N }, () => []);
let cnt = 0;
for (let i = 1; i < input.length; i++) {
  let idx = +input[i];
  for (let j = 0; j < idx; j++) {
    testCase[cnt].push(input[i + j + 1]);
  }
  cnt++;
  i += +input[i];
}

class Node {
  constructor(word = "", count = 0) {
    this.word = word;
    this.count = count;
    this.children = new Map();
  }
}
class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(string) {
    let cur = this.root;
    for (let _s of String(string)) {
      if (!cur.children.has(_s)) {
        cur.children.set(_s, new Node(cur.word + _s, 0));
      }
      const child = cur.children.get(_s);
      child.count++;
      cur = cur.children.get(_s);
    }
  }
  find(string) {
    let cur = this.root;
    for (let _s of String(string)) {
      cur = cur.children.get(_s);
    }
    if (cur.children.size) {
      return true;
    }
    return false;
  }
}
function solution(cases) {
  const answer = [];
  for (let numList of cases) {
    const trie = new Trie();
    let bool = true;
    for (let num of numList) {
      trie.insert(num);
    }
    for (let num of numList) {
      if (trie.find(num)) {
        bool = false;
      }
    }
    answer.push(bool ? "YES" : "NO");
  }
  return answer;
}
console.log(solution(testCase).join("\n"));
