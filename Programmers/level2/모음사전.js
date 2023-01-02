function solution(word) {
  var answer = 0;
  const dict = [];
  const alpha = ["", "A", "E", "I", "O", "U"];
  function recursion(n, w) {
    if (n === 0) {
      dict.push(w.join(""));
      return;
    }
    for (let i = 0; i < 6; i++) {
      w.push(alpha[i]);
      n--;
      recursion(n, w);
      n++;
      w.pop();
    }
  }
  recursion(5, []);
  dict.sort();
  return Array.from(new Set(dict)).indexOf(word);
}
console.log(solution("AAAAE"));
