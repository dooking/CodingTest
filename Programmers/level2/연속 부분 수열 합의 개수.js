function solution(elements) {
  const elements2 = [...elements, ...elements];
  const elSet = new Set();

  for (let i = 1; i <= elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      const temp = elements2
        .slice(j, j + i)
        .reduce((acc, cur, idx) => acc + cur, 0);
      elSet.add(temp);
    }
  }
  return [...elSet].length;
}
