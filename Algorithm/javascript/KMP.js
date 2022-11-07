let kmp = function (origin, keyword) {
  let oDump = origin.split("");
  let kDump = keyword.split("");
  let oLength = origin.length;
  let kLength = keyword.length;

  let failure = [];
  failure.length = kDump.length;
  failure.fill(-1);

  // failure 배열 세팅
  for (let i = 1; i < kLength; i++) {
    let idx = 1 + failure[i - 1];
    if (kDump[i] === kDump[idx]) {
      failure[i] = idx;
    } else {
      failure[i] = -1;
    }
  }

  // 비교 시작
  let n = 0,
    m = 0;
  while (m < kLength && n < oLength) {
    if (oDump[n] === kDump[m]) {
      n++;
      m++;
    } else if (m === 0) {
      n++;
    } else {
      m = 1 + failure[m - 1];
    }
  }
  console.log(m, kLength);
  console.log(n, kLength);
  return m === kLength ? n - kLength : -1;
};
console.log(kmp("abcdef", "a"));
