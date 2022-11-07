function solution(genres, plays) {
  var answer = [];
  const album = {};
  const totalPlays = {};
  for (let i = 0; i < genres.length; i++) {
    if (album[genres[i]]) {
      album[genres[i]].push([i, plays[i]]);
      totalPlays[genres[i]] += plays[i];
    } else {
      album[genres[i]] = [[i, plays[i]]];
      totalPlays[genres[i]] = plays[i];
    }
  }
  const sort_album = {};
  for (let [key, value] of Object.entries(album)) {
    value.sort((a, b) => b[1] - a[1]);
    sort_album[key] = value;
  }
  console.log(sort_album);
  let sort_totalPlays = Object.entries(totalPlays).sort((a, b) => b[1] - a[1]);
  for (let [genre, playCount] of sort_totalPlays) {
    answer.push(sort_album[genre][0][0]);
    if (sort_album[genre].length >= 2) {
      answer.push(sort_album[genre][1][0]);
    }
  }
  return answer;
}

// console.log(
//   solution(
//     ["classic", "pop", "classic", "classic", "pop"],
//     [500, 600, 150, 800, 2500]
//   )
// );
console.log(
  solution(
    ["classic", "classic", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
