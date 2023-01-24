function solution(gems) {
  var answer = [];
  const jewerlys = {};
  let tempJewerly = {};
  let jewerlyCount = 0;
  for (let gem of gems) {
    if (jewerlys[gem]) {
      jewerlys[gem] += 1;
    } else {
      jewerlys[gem] = 1;
      tempJewerly[gem] = 0;
      jewerlyCount++;
    }
  }
  let end = -1;
  let sumTemp = 0;
  for (let start = 0; start < gems.length; start++) {
    while (end < gems.length - 1 && sumTemp < jewerlyCount) {
      end++;
      tempJewerly[gems[end]]++;
      if (tempJewerly[gems[end]] === 1) {
        sumTemp++;
      }
    }
    if (sumTemp === jewerlyCount) {
      answer.push([start, end, end - start]);
    }
    tempJewerly[gems[start]]--;
    if (tempJewerly[gems[start]] === 0) {
      sumTemp--;
    }
  }
  answer.sort((a, b) => a[2] - b[2]);
  return [answer[0][0] + 1, answer[0][1] + 1];
}

console.log(
  solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"])
);
