function solution(order) {
  var answer = 0;
  const delivery = Array.from({ length: order.length }, (el, idx) => idx + 1);
  const subDelivery = [];
  let orderIdx = 0;
  let deliveryIdx = 0;
  while (true) {
    if (orderIdx >= order.length || deliveryIdx > delivery.length) {
      break;
    }
    if (order[orderIdx] === delivery[deliveryIdx]) {
      answer++;
      orderIdx++;
      deliveryIdx++;
    }
    {
      if (
        subDelivery.length &&
        subDelivery[subDelivery.length - 1] === order[orderIdx]
      ) {
        subDelivery.pop();
        answer++;
        orderIdx++;
      } else {
        subDelivery.push(delivery[deliveryIdx]);
        deliveryIdx++;
      }
    }
  }
  return answer;
}

console.log(solution([5, 4, 3, 2, 1]));
