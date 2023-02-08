function solution(numbers) {
  let sum = numbers.reduce((acc, cur) => acc + cur);
  if (!sum) {
    return "0";
  }
  numbers = numbers
    .map((el) => String(el))
    .sort((a, b) => {
      if (a + b > b + a) {
        return -1;
      } else if (a + b < b + a) {
        return 1;
      } else {
        return 0;
      }
    });
  return numbers.join("");
}
