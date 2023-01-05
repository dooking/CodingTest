const arr = [7, 15, 3, 1, 5, 2, 10];

function insertSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[idx] > arr[j]) {
        idx = j;
      }
    }
    [arr[idx], arr[i]] = [arr[i], arr[idx]];
  }
  return arr;
}

function selectSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }
  return arr;
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0];
  const left = arr.filter((el) => el < pivot);
  const right = arr.filter((el) => el > pivot);
  return quickSort(left).concat(pivot, quickSort(right));
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return Merge(mergeSort(left), mergeSort(right));
}
function Merge(left, right) {
  let result = [];
  let idx = 0;
  while (left.length && right.length) {
    if (left[idx] > right[idx]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }
  return result.concat(left.slice(), right.slice());
}

function heapSort(arr) {
  const len = arr.length;
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    heapify(arr, i, len);
  }
  for (let i = len - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, 0, i);
  }
  return arr;
}

function heapify(arr, idx, len) {
  let left = idx * 2 + 1;
  let right = idx * 2 + 2;
  let max = idx;
  if (left < len && arr[left] > arr[max]) {
    max = left;
  }
  if (right < len && arr[right] > arr[max]) {
    max = right;
  }
  if (max !== idx) {
    [arr[max], arr[idx]] = [arr[idx], arr[max]];
    heapify(arr, max, len);
  }
}

console.log(quickSort(arr));
