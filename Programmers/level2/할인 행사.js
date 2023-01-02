function solution(want, number, discount) {
  var answer = 0;
  let wantInfo = {};
  for (let i = 0; i < want.length; i++) {
    const product = want[i];
    const cnt = number[i];
    wantInfo[product] = cnt;
  }
  for (let i = 0; i < discount.length - 9; i++) {
    const _copyWantInfo = JSON.parse(JSON.stringify(wantInfo));
    const discountDays = discount.slice(i, i + 10);
    let bool = true;
    for (let product of discountDays) {
      if (_copyWantInfo[product] > 0) {
        _copyWantInfo[product]--;
      } else {
        bool = false;
        break;
      }
    }
    if (bool) {
      answer++;
    }
  }
  return answer;
}
