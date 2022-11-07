function solution(sizes) {
  var answer = 0;
  const newSizes = [[], []];
  sizes.forEach((size) => {
    if (size[0] > size[1]) {
      newSizes[0].push(size[1]);
      newSizes[1].push(size[0]);
    } else {
      newSizes[0].push(size[0]);
      newSizes[1].push(size[1]);
    }
  });
  answer = Math.max(...newSizes[0]) * Math.max(...newSizes[1]);
  return answer;
}

console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);
