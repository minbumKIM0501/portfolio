//   타이머 작동 일반 시간
function nowTimer() {
  let timer = new Date();
  // console.log(timer);
  let userY = timer.getFullYear();
  let userMM = timer.getMonth() + 1;
  let userD = timer.getDate();
  let userT = timer.getHours();
  let userM = timer.getMinutes();
  let userS = timer.getSeconds();
  // console.log(userY,':',userMM,':',userD,':',userT,':',userM,':',userS);
  // 날짜
  $("#day01>dl>dd:nth-child(2)>span").text(userY);
  // $('#day01>dl>dd:nth-child(4)>span').text(userMM);

  if (userMM < 10) {
    $("#day01>dl>dd:nth-child(4)>span").text("0" + userMM);
  } else {
    $("#day01>dl>dd:nth-child(4)>span").text(userMM);
  }

  // $('#day01>dl>dd:nth-child(6)>span').text(userD);
  if (userD < 10) {
    $("#day01>dl>dd:nth-child(6)>span").text("0" + userD);
  } else {
    $("#day01>dl>dd:nth-child(6)>span").text(userD);
  }

  // $('#day02>dl>dd:nth-child(2)>span').text(userT);
  if (userT > 12) {
    $("#day02>dl>dd:nth-child(2)>span").text(userT - 12);
  } else {
    $("#day02>dl>dd:nth-child(2)>span").text(userT);
  }

  if (userM < 10) {
    $("#day02>dl>dd:nth-child(4)>span").text("0" + userM);
  } else {
    $("#day02>dl>dd:nth-child(4)>span").text(userM);
  }

  if (userS < 10) {
    $("#day02>dl>dd:nth-child(6)>span").text("0" + userS);
  } else {
    $("#day02>dl>dd:nth-child(6)>span").text(userS);
  }
}
