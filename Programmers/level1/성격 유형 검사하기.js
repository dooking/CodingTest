function solution(survey, choices) {
  const result = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  for (let i = 0; i < survey.length; i++) {
    if (choices[i] < 4) {
      result[survey[i][0]] += 4 - choices[i];
    } else if (choices[i] > 4) {
      result[survey[i][1]] += choices[i] - 4;
    }
  }
  return (
    (result["R"] >= result["T"] ? "R" : "T") +
    (result["C"] >= result["F"] ? "C" : "F") +
    (result["J"] >= result["M"] ? "J" : "M") +
    (result["A"] >= result["N"] ? "A" : "N")
  );
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
