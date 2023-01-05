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
    this.total = 0;
  }
  insert(word) {
    let cur = this.root;
    for (let s of word) {
      if (!cur.children.get(s)) {
        cur.children.set(s, new Node(cur.word + s, 0));
      }
      const child = cur.children.get(s);
      child.cnt++;
      cur = cur.children.get(s);
    }
  }
  find(word) {
    let cur = this.root;
    for (let s of word) {
      if (!cur.children.get(s)) {
        return false;
      }
    }
    return true;
  }
  search(cur) {
    for (let node of cur.children) {
      this.dfs(node);
    }
  }
  dfs(cur) {
    const [key, value] = cur;
    if (value.cnt > 1) {
      this.total += value.cnt;
    }
    for (let [childKey, childValue] of value.children) {
      if (childValue.cnt === 1) {
        this.total += 1;
        continue;
      }
      this.dfs([childKey, childValue]);
    }
  }
}

function solution(words) {
  var answer = 0;
  const trie = new Trie();
  for (let word of words) {
    trie.insert(word);
  }
  trie.search(trie.root);

  return trie.total;
}

console.log(solution(["abc", "def", "ghi", "jklm"]));
