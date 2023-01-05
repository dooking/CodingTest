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
  insert(word) {
    let cur = this.root;
    for (let _s of word) {
      if (!cur.children.get(_s)) {
        cur.children.set(_s, new Node(cur.word + _s, 0));
      }
      const child = cur.children.get(_s);
      child.cnt += 1;
      cur = cur.children.get(_s);
    }
  }
}
function solution(words, queries) {
  var answer = [];
  const trie = new Trie();
  const reverseTrie = new Trie();
  for (let word of words) {
    trie.insert(word);
  }
  for (let word of words) {
    reverseTrie.insert(word.split("").reverse());
  }
  for (let querie of queries) {
    if (querie[0] === "?") {
      querie = querie.split("").reverse();
      let cur = querie[0];
      let curRoot = reverseTrie.root;
      let cnt = 0;
      while (curRoot.children.get(cur)) {
        if (cur === "?") {
          answer.push(cnt);
          break;
        }
        cnt += curRoot.children.get(cur).cnt;
        curRoot = reverseTrie.children.get(cur);
      }
    } else if (querie[querie.length - 1] === "?") {
      let cur = querie[0];
      let curRoot = trie.root;
      let cnt = 0;
      while (curRoot.children.get(cur)) {
        console.log(curRoot.children.get(cur));
        if (cur === "?") {
          answer.push(cnt);
          break;
        }
        cnt += curRoot.children.get(cur).cnt;
        curRoot = curRoot.children.get(cur);
      }
    }
  }
  console.log(reverseTrie.root.children);
  return answer;
}

console.log(
  solution(
    ["frodo", "front", "frost", "frozen", "frame", "kakao"],
    ["fro??", "????o", "fr???", "fro???", "pro?"]
  )
);
