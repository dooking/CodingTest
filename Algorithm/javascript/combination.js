// combination
// 1. combination
const combination = (arr, n) => {
  const result = [];
  if (n === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.slice(idx + 1);
    const combinationArr = combination(restArr, n - 1);
    const combineFix = combinationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
};

// 2. combination with repetition
const combinationWithRepetition = (arr, n) => {
  const result = [];
  const dfs = (start, path) => {
    if (path.length === n) {
      result.push(path.slice());
      return;
    }
    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      dfs(i, path);
      path.pop();
    }
  };
  dfs(0, []);
  return result;
};
// 3. permutation
const permutation = (arr, n) => {
  const result = [];
  if (n === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permutationArr = permutation(restArr, n - 1);
    const combineFix = permutationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
};

// 3-1 Another Permutaion
function permutation(arr, n) {
  const result = [];
  const visited = Array.from({ length: arr.length }).fill(false);
  function dfs(v) {
    if (v.length === n) {
      result.push(v.slice());
      return;
    }
    arr.forEach((el) => {
      if (!visited[el]) {
        v.push(el);
        visited[el] = true;
        dfs(v);
        visited[el] = false;
        v.pop();
      }
    });
  }
  dfs([]);
  return result;
}

// 4. permutation with repetition

const permutationWithRepetition = (arr, n) => {
  const result = [];
  const dfs = (path) => {
    if (path.length === n) {
      result.push(path.slice());
      return;
    }
    arr.forEach((v) => {
      path.push(v);
      dfs(path);
      path.pop();
    });
  };
  dfs([]);
  return result;
};

console.log(combinationWithRepetition([0, 1, 2, 3, 4], 3));
