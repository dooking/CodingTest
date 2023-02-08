/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
  let answer = 0;
  let wordDic = new Map();
  let sameWordCnt = 0;
  let possibleSet = new Map();
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word[0] === word[1]) {
      if (possibleSet.has(word)) {
        possibleSet.delete(word);
        sameWordCnt += 4;
      } else {
        possibleSet.set(word);
      }
    } else {
      let reverseWord = word[1] + word[0];
      if (wordDic.has(word)) {
        let curCnt = wordDic.get(word);
        if (curCnt === 1) {
          wordDic.delete(word);
        } else {
          wordDic.set(word, curCnt - 1);
        }
        answer += 4;
      } else if (wordDic.has(reverseWord)) {
        let curCnt = wordDic.get(reverseWord);
        wordDic.set(reverseWord, curCnt + 1);
      } else {
        wordDic.set(reverseWord, 1);
      }
    }
  }
  if (possibleSet.size >= 1) {
    answer += 2;
  }
  return answer + sameWordCnt;
};

console.log(
  longestPalindrome([
    "ll",
    "lb",
    "bb",
    "bx",
    "xx",
    "lx",
    "xx",
    "lx",
    "ll",
    "xb",
    "bx",
    "lb",
    "bb",
    "lb",
    "bl",
    "bb",
    "bx",
    "xl",
    "lb",
    "xx",
  ])
);
