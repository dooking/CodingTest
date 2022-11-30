// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function (s) {
  s = s.split("");
  let end = 0;
  let answer = 0;
  let subString = [];
  for (let start = 0; start < s.length; start++) {
    while (true) {
      if (end < s.length) {
        if (subString.length === [...new Set([...subString, s[end]])].length) {
          break;
        }
        subString.push(s[end]);
        console.log("!!!", s[end], end);
        end++;
      } else {
        break;
      }
    }
    answer = Math.max(subString.length, answer);
    subString.shift();
  }
  return answer;
};

console.log(lengthOfLongestSubstring("dvdf"));
