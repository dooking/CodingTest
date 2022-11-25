function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
function lcm(a, b) {
  return (a / gcd(a, b)) * b;
}

console.log(lcm(10, 20));
