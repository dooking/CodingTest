function solution(fees, records) {
  var answer = [];
  const [DEFAULT_HOUR, DEFAULT_FEE, UNIT_HOUR, UNIT_FEE] = fees;
  const inputArr = {};
  const curParkingList = {};
  const result = {};
  for (let record of records) {
    const [time, car, type] = record.split(" ");
    const [hour, minute] = time.split(":");
    const curTime = 60 * parseInt(hour) + parseInt(minute);
    if (type === "IN") {
      if (inputArr[car]) {
        inputArr[car].push(curTime);
      } else {
        curParkingList[car] = 0;
        inputArr[car] = [curTime];
        result[car] = 0;
      }
    } else {
      const startTime = inputArr[car][0];
      const curParkingTime = curTime - startTime;
      curParkingList[car] += parseInt(curParkingTime);
      inputArr[car].pop();
    }
  }
  for (let [car, curTime] of Object.entries(inputArr)) {
    if (curTime.length > 0) {
      let curAccTime = 0;
      const lastTime = 23 * 60 + 59;
      for (let i = 0; i < curTime.length; i++) {
        curAccTime += lastTime - parseInt(curTime[i]);
      }
      curParkingList[car] += curAccTime;
    }
  }
  for (let [car, time] of Object.entries(curParkingList)) {
    if (time <= DEFAULT_HOUR) {
      result[car] += DEFAULT_FEE;
    } else {
      result[car] +=
        DEFAULT_FEE + Math.ceil((time - DEFAULT_HOUR) / UNIT_HOUR) * UNIT_FEE;
    }
  }
  for (let car of Object.keys(result).sort()) {
    answer.push(result[car]);
  }
  return answer;
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ]
  )
);
