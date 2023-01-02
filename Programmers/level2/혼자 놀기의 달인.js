function solution(cards) {
  var answer = 0;
  const check = Array.from({ length: cards.length }).fill(false);
  const group = [];
  const cardInfo = {};
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardInfo[card] = i + 1;
  }
  for (let i = 0; i < cards.length; i++) {
    let cur = i + 1;
    let temp = 0;
    if (check[cur]) {
      continue;
    }
    while (!check[cur]) {
      check[cur] = true;
      cur = cardInfo[cur];
      temp++;
    }
    if (temp === cards.length) {
      return 0;
    }
    group.push(temp);
  }
  group.sort((a, b) => b - a);
  return group[0] * group[1];
}

console.log(solution([8, 6, 3, 7, 2, 5, 1, 4]));
