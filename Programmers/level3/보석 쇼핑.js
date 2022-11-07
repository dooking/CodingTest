function solution(gems) {
  var answer = [];
  const shops = {};
  let idx = 1;
  for (let gem of gems) {
    if (!shops[gem]) {
      shops[gem] = {
        jewerly: [idx],
        minIdx: idx,
        maxIdx: idx,
      };
    } else {
      shops[gem].jewerly.push(idx);
      shops[gem].maxIdx = idx;
    }
    idx++;
  }
  let start = 0;
  let end = 0;
  for (let i = start; i < gems.length; i++) {
    while (end <= gems.length) {
      console.log(end);
      end++;
    }
    end = i;
    console.log(i, end);
  }
  console.log(shops);
  return answer;
}

console.log(
  solution(["DIA", "RUBY", "RUBY", "EMERALD", "SAPPHIRE", "DIA", "DIA", "DIA"])
);
