function solution(id_list, report, k) {
  const result_list = [];
  const alert_user = [];
  const answer = {};
  for (let i = 0; i < id_list.length; i++) {
    result_list[id_list[i]] = {
      report_list: [],
      stop_count: 0,
    };
    answer[id_list[i]] = [];
  }

  for (let i = 0; i < report.length; i++) {
    const [to, from] = report[i].split(" ");
    if (!result_list[to].report_list.includes(from)) {
      result_list[to].report_list.push(from);
      result_list[from].stop_count += 1;
      if (result_list[from].stop_count >= k && !alert_user.includes(from)) {
        alert_user.push(from);
      }
    }
  }
  for (let i = 0; i < alert_user.length; i++) {
    if (result_list[alert_user[i]].stop_count >= k) {
      for (let j = 0; j < id_list.length; j++) {
        if (result_list[id_list[j]].report_list.includes(alert_user[i])) {
          answer[id_list[j]].push(alert_user[i]);
        }
      }
    }
  }
  console.log(result_list);
  const real_answer = [];
  for (let [key, value] of Object.entries(answer)) {
    real_answer.push(value.length);
  }

  return real_answer;
}
console.log(
  solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
);
// console.log(
//   solution(
//     ["muzi", "frodo", "apeach", "neo"],
//     ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
//     2
//   )
// );
