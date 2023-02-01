var isHappy = function (n) {
  const set = new Set();
  while (true) {
    n = String(n)
      .split("")
      .map((el) => +el)
      .reduce((acc, cur, idx) => acc + cur * cur, 0);
    if (set.has(n)) {
      return false;
    }
    set.add(n);
    if (n === 1) {
      return true;
    }
  }
};

console.log(isHappy(2));
