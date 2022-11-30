// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var addTwoNumbers = function (l1, l2) {
  l1 = +l1.reverse().join("");
  l2 = +l2.reverse().join("");
  return (l1 + l2)
    .toString()
    .split("")
    .reverse()
    .map((el) => +el);
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
