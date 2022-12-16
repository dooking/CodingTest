function solution(k, ranges) {
  var answer = [];
  const graph = ubak(k);
  const areaGraph = [];
  for (let i = 0; i < graph.length - 1; i++) {
    areaGraph.push((graph[i] + graph[i + 1]) / 2);
  }
  const accGraph = [0];
  for (let i = 1; i <= areaGraph.length; i++) {
    accGraph[i] = parseFloat(
      parseFloat(accGraph[i - 1] + areaGraph[i - 1]).toFixed(2)
    );
  }

  for (let [a, b] of ranges) {
    b = graph.length + b - 1;
    if (a > b) {
      answer.push(-1.0);
    } else if (b > a) {
      answer.push(accGraph[b] - accGraph[a]);
      continue;
    } else {
      answer.push(0.0);
    }
  }
  return answer.map((el) => el.toFixed(1));
}

function ubak(k) {
  const result = [k];
  while (k !== 1) {
    if (k % 2) {
      k = k * 3 + 1;
    } else {
      k = k / 2;
    }
    result.push(k);
  }
  return result;
}
console.log(
  solution(7, [
    [0, 0],
    [0, -1],
    [2, -3],
    [3, -3],
  ])
);
