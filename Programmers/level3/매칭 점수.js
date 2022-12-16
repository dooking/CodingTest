function solution(word, pages) {
  var answer = 0;
  const pageInfo = {};
  let i = 0;
  for (let page of pages) {
    let links = [];
    let point = 0;
    const aTag = page.match(/<a(.+?)>/g);
    if (aTag) {
      for (let a of aTag) {
        const outerLinks = a.match(/href="\S*"/g);
        if (outerLinks) {
          for (let outerLink of outerLinks) {
            const link = outerLink.split('"')[1];
            links.push(link);
          }
        }
      }
    }
    let pageLink = page.match(/<meta property="og:url" content="(\S+)"/g);
    pageLink = pageLink[0].match(/"https:\/\/(.+)"/)[0].replaceAll('"', "");
    for (let w of page.replace(/<[^>]*>?/g, "").match(/[a-zA-Z]+/gi)) {
      if (w.toLowerCase() === word.toLowerCase()) {
        point++;
      }
    }
    pageInfo[pageLink] = {
      index: i,
      defaultPoint: point,
      outerLink: links,
      outerPoint: 0,
      totalPoint: point,
    };
    i++;
  }
  for (let [key, value] of Object.entries(pageInfo)) {
    const outerLink = value.outerLink;
    for (let link of outerLink) {
      if (pageInfo[link]) {
        pageInfo[link].outerPoint +=
          pageInfo[key].defaultPoint / pageInfo[key].outerLink.length;
        pageInfo[link].totalPoint =
          pageInfo[link].defaultPoint + pageInfo[link].outerPoint;
      }
    }
  }
  let answerList = [];
  for (let [key, value] of Object.entries(pageInfo)) {
    answerList.push([value.index, value.totalPoint]);
  }

  answerList.sort((a, b) => {
    if (a[1] - b[1] < 0) return 1;
    if (a[1] - b[1] > 0) return -1;
    if (a[0] - b[0] < 0) return -1;
    if (a[0] - b[0] > 0) return 1;
  });
  return answerList[0][0];
}

console.log(
  solution("muzi", [
    '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://careers.kakao.com/interview/list"/>\n</head>  \n<body>\n<a href="https://programmers.co.kr/learn/courses/4673"></a>#!MuziMuzi!)jayg07con&&\n\n</body>\n</html>',
    '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://www.kakaocorp.com"/>\n</head>  \n<body>\ncon%\tmuzI92apeach&2\n\n\t^\n</body>\n</html>',
  ])
);
