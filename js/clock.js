// 파일 정리 방식 기억할 것
// divide and conquer (세분화해서 관리하는 방식)

const clock = document.querySelector("h2#clock");

// intervals: ex) every 2 seconds
// timeout

// function sayHello() {
//   console.log("Hello");
// }

//setInterval(함수, ms) 1000ms=1s
//???ms마다 반복해
// setInterval(sayHello, 5000);

//setTimeout(함수, ms) 1000ms=1s
//???ms 기다렸다 실행
// setTimeout(sayHello, 5000);

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); //숫자에서 문자로 바꿔주는 과정 꼭!
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock(); //즉시 실행 후
setInterval(getClock, 1000); //1초마다 다시 실행

//padStart(길이, 앞채울문자)
//padEnd(길이, 뒤채울문자)
//new Date().getHours() ------> 10
//String(new Date().getHours()) ------> '10'
