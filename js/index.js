//   타이머 작동 일반 시간
function nowTimer() {
  let timer = new Date();
  // console.log(timer);
  let userYear = timer.getFullYear();
  let userMonth = timer.getMonth() + 1;
  let userDate = timer.getDate();
  let userHoure = timer.getHours();
  let userMinute = timer.getMinutes();
  let userSeconds = timer.getSeconds();
  // console.log(userYear,':',userMonth,':',userDate,':',userHoure,':',userMinute,':',userSeconds);
  // 날짜
  $("#day01>dl>dd:nth-child(2)>span").text(userYear);
  // $('#day01>dl>dd:nth-child(4)>span').text(userMonth);

  if (userMonth < 10) {
    $("#day01>dl>dd:nth-child(4)>span").text("0" + userMonth);
  } else {
    $("#day01>dl>dd:nth-child(4)>span").text(userMonth);
  }

  // $('#day01>dl>dd:nth-child(6)>span').text(userDate);
  if (userDate < 10) {
    $("#day01>dl>dd:nth-child(6)>span").text("0" + userDate);
  } else {
    $("#day01>dl>dd:nth-child(6)>span").text(userDate);
  }

  // $('#day02>dl>dd:nth-child(2)>span').text(userHoure);
  if (userHoure > 12) {
    $("#day02>dl>dd:nth-child(2)>span").text(userHoure - 12);
  } else {
    $("#day02>dl>dd:nth-child(2)>span").text(userHoure);
  }

  if (userMinute < 10) {
    $("#day02>dl>dd:nth-child(4)>span").text("0" + userMinute);
  } else {
    $("#day02>dl>dd:nth-child(4)>span").text(userMinute);
  }

  if (userSeconds < 10) {
    $("#day02>dl>dd:nth-child(6)>span").text("0" + userSeconds);
  } else {
    $("#day02>dl>dd:nth-child(6)>span").text(userSeconds);
  }
}
