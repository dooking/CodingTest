let array = Array(20);
let cnt = 0;
division(6, 0, 0);

function division(n, sum, index) {
  for (let x = n; x > 0; x--) {
    if (index === 0) {
      array[index] = x - 1;
      division(n - (x - 1), x - 1, index + 1);
    } else {
      array[index] = x;
      if (x <= array[index - 1]) {
        division(n - x, sum + x, index + 1);
      }
    }
  }
  if (n === sum) {
    printFn(index);
    console.log(index);
  }
}

function printFn(index) {
  cnt++;
  for (let i = 0; i < index; i++) {
    console.log(array[i]);
    if (i != index - 1) {
      console.log("+");
    }
  }
}
