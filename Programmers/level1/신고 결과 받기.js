// https://school.programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
  var answer = Array.from({ length: id_list.length }, () => 0);
  const reportCount = {};
  const reportList = {};
  id_list.forEach((id) => {
    reportCount[id] = 0;
    reportList[id] = [];
  });

  report.forEach((item) => {
    const [from, to] = item.split(" ");

    if (!reportList[from].includes(to)) {
      reportList[from].push(to);
      reportCount[to] += 1;
    }
  });

  for (let i = 0; i < id_list.length; i++) {
    for (let j = 0; j < reportList[id_list[i]].length; j++) {
      if (reportCount[reportList[id_list[i]][j]] >= k) answer[i] += 1;
    }
  }
  return answer;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo", "lk"],
    [
      "muzi frodo",
      "muzi frodo",
      "muzi frodo",
      "apeach frodo",
      "frodo neo",
      "muzi neo",
      "apeach muzi",
    ],
    2
  )
);

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    [
      "muzi frodo",
      "apeach frodo",
      "frodo neo",
      "muzi neo",
      "apeach muzi",
      "muzi neo",
    ],
    2
  )
);

// console.log(solution(["muzi", "frodo"], ["muzi frodo", "muzi frodo"], 1));
