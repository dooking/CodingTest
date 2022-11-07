function solution(begin, target, words) {
  var answer = 0;
  if (!words.includes(target)) {
    return 0;
  }
  const queue = [[begin, 0]];
  const visited = [];
  let bool = false;
  while (queue.length) {
    const [beginQueue, cnt] = queue.shift();
    console.log(beginQueue, cnt);
    const newArr = compareWord(beginQueue, words);
    for (let i = 0; i < newArr.length; i++) {
      if (!visited.includes(newArr[i])) {
        visited.push(newArr[i]);
        queue.push([newArr[i], cnt + 1]);
      }
      if (newArr[i] === target) {
        bool = true;
      }
    }
    if (bool) {
      answer = cnt;
      break;
    }
  }
  return answer + 1;
}

function compareWord(word1, words) {
  const newArr = [];
  for (let i = 0; i < words.length; i++) {
    let count = 0;
    for (let j = 0; j < word1.length; j++) {
      if (word1[j] === words[i][j]) {
        count += 1;
      }
    }
    if (count === word1.length - 1) {
      newArr.push(words[i]);
    }
  }
  return newArr;
}
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "cog", "hil"]));
