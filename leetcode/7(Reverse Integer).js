// https://leetcode.com/problems/reverse-integer/

var reverse = function (x) {
  let bool = false;
  if (x < 0) {
    x *= -1;
    bool = true;
  }
  x = +Array.from(x.toString()).reverse().join("");
  if (bool) {
    x *= -1;
  }
  if (x >= 2 ** 31 - 1) {
    return 0;
  }
  return x;
};

console.log(reverse(1534236469));
