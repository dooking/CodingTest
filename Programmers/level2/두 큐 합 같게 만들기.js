const sum = (arr) => arr.reduce((acc, v) => acc + v, 0);

function solution(queue1, queue2) {
  let sumQ1 = sum(queue1),
    sumQ2 = sum(queue2);

  let pointer1 = 0,
    pointer2 = queue1.length;

  const target = (sumQ1 + sumQ2) / 2;
  const queue = [...queue1, ...queue2];
  const end = queue1.length * 3;
  console.log(queue);
  for (let count = 0; count < end; count++) {
    console.log(pointer1, pointer2, sumQ1, target);
    if (sumQ1 === target) {
      return count;
    }

    if (sumQ1 > target) {
      sumQ1 -= queue[pointer1++];
    } else {
      sumQ1 += queue[pointer2++];
    }
  }

  return -1;
}

console.log(solution([1, 20, 1, 2], [1, 10, 1, 2]));
