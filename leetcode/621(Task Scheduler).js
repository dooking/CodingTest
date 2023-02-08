/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  let wordDic = {};
  for (let task of tasks) {
    if (wordDic[task]) {
      wordDic[task] += 1;
    } else {
      wordDic[task] = 1;
    }
  }
  wordDic = Object.entries(wordDic).sort((a, b) => b[1] - a[1]);
  let idx = 0;
  let answer = 0;
  let cnt = 0;
  let idleCnt = 0;
  let idleTemp = 0;
  let lastWord = wordDic[0][0];
  let idleList = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
    H: 0,
    I: 0,
    J: 0,
    K: 0,
    L: 0,
    M: 0,
    N: 0,
    O: 0,
    P: 0,
    Q: 0,
    R: 0,
    S: 0,
    T: 0,
    U: 0,
    V: 0,
    W: 0,
    X: 0,
    Y: 0,
    Z: 0,
  };
  if (n === 0) {
    return tasks.length;
  }
  while (true) {
    if (cnt === tasks.length) {
      break;
    }

    if (idleList[wordDic[idx][0]] !== 0) {
    }
    wordDic[idx][1] -= 1;
    cnt += 1;
    idleList[wordDic[idx][0]] = cnt;
    console.log(idx, idleList[wordDic[idx][0]], cnt, wordDic[idx][0]);
    wordDic = wordDic.sort((a, b) => {
      if (a[1] - b[1] < 0) {
        return 1;
      }
      if (a[1] - b[1] > 0) {
        return -1;
      }
      if (a[0] - b[0] < 0) {
        return -1;
      }
      if (a[0] - b[0] > 0) {
        return 1;
      }
    });
  }
  return answer + tasks.length;
};
console.log(
  leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2)
);
