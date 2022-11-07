function solution(routes) {
  var answer = 0;
  const cases = [];
  routes.sort((a, b) => a[0] - b[0]);
  for (let [from, to] of routes) {
    let bool = false;
    for (let i = 0; i < cases.length; i++) {
      const [l, r, cl, cr] = cases[i];
      //   console.log("check", cl <= from, from <= cr);
      //   console.log("check2", cr < from, from <= r);
      if (cl <= from && from <= cr) {
        cases[i] = [l, to, cl, from];
        // console.log("check3 >", cases);
        bool = true;
      } else if (cr < from && from <= r) {
        cases.push([cl, to, from, r]);
        bool = true;
      }
    }
    if (!bool) {
      cases.push([from, to, from, to]);
    }
  }
  console.log(cases);
  return answer;
}

console.log(
  solution([
    [-20, -15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ])
);
