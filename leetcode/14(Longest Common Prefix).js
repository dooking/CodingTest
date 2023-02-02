class Node {
  constructor(value = "", cnt = 0) {
    this.value = value;
    this.children = new Map();
    this.cnt = cnt;
  }
}
class Trie {
  constructor() {
    this.root = new Node();
  }
  add(str) {
    let cur = this.root;
    for (let _s of str) {
      if (!cur.children.has(_s)) {
        cur.children.set(_s, new Node(cur.value + _s, 0));
      }
      const getCur = cur.children.get(_s);
      getCur.cnt += 1;
      cur = cur.children.get(_s);
    }
  }
  find(words) {
    let cur = this.root;
    if (cur.children.size !== 1) {
      return "";
    }
    for (let word of words) {
      if (cur.children.size !== 1 || cur.cnt > cur.children.get(word).cnt) {
        return cur.value;
      }
      cur = cur.children.get(word);
    }
    return cur.value;
  }
}
var longestCommonPrefix = function (strs) {
  let answer = "";
  const trie = new Trie();
  for (let str of strs) {
    if (!str) {
      return "";
    }
    trie.add(str);
  }
  answer = trie.find(strs[0]);
  return answer;
};

console.log(longestCommonPrefix(["abab", "aba", ""]));
