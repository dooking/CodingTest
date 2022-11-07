// function solution(n, info) {
//   let max = 0;
//   let answer = [-1];
//   let lion = Array(11).fill(0);

//   function DFS(level, count) {
//     // 종료조건
//     if (level == 10) {
//       console.log(level, count, lion);
//       lion[level] = count;
//       // 점수비교
//       let sum = 0;
//       for (let i = 0; i < 10; i++) {
//         if (lion[i] > info[i]) {
//           sum = sum + (10 - i);
//         } else if (lion[i] === info[i]) {
//           continue;
//         } else {
//           sum = sum - (10 - i);
//         }
//       }

//       if (sum > max) {
//         max = sum;
//         answer = [...lion];
//       } else if (sum == max) {
//         // 낮은 개수를 더 맞추는 경우를 답으로 채용함
//         for (let j = 10; j > 0; j--) {
//           if (answer[j] == lion[j]) {
//             continue;
//           } else if (lion[j] > answer[j]) {
//             answer = [...lion];
//             break;
//           } else {
//             break;
//           }
//         }
//       }
//       // 계속진행
//     } else {
//       // 남은 화살개수가 없거나 + 어피차보다 많이 못맞출경우
//       if (count == 0 || count < info[level] + 1) {
//         DFS(level + 1, count);
//       } else {
//         // 어피치보다 많이 맞출경우
//         lion[level] = info[level] + 1;
//         count = count - (info[level] + 1);
//         DFS(level + 1, count);

//         // 다른 점수로 돌릴경우
//         lion[level] = 0;
//         count = count + (info[level] + 1);
//         DFS(level + 1, count);
//       }
//     }
//   }
//   DFS(0, n);

//   return answer;
// }

function solution(n, info) {
  let answer = [];
  let score = -10000000;
  const case_list = permutation([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], n);
  for (let i = 0; i < case_list.length; i++) {
    const lion_result = Array(11).fill(0);
    let lion_score = 0;
    let apeach_score = 0;
    for (let j = 0; j < n; j++) {
      lion_result[case_list[i][j]]++;
    }

    for (let k = 0; k < 11; k++) {
      if (info[k] + lion_result[k] > 0) {
        if (info[k] >= lion_result[k]) {
          apeach_score += 10 - k;
        } else {
          lion_score += 10 - k;
        }
      }
    }
    if (score == lion_score - apeach_score && score > 0) {
      answer = compareArr(lion_result, answer);
    } else if (score < lion_score - apeach_score) {
      score = lion_score - apeach_score;
      answer = lion_result;
    }
  }
  if (score < 0) {
    return [-1];
  }
  return answer;
}

function compareArr(arr1, arr2) {
  for (let i = 10; i >= 0; i--) {
    if (arr1[i] > arr2[i]) {
      return arr1;
    } else if (arr2[i] > arr1[i]) {
      return arr2;
    }
  }
  return arr1;
}
function permutation(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr;
    const permutationArr = permutation(restArr, selectNum - 1);
    const combineFix = permutationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}

console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));
