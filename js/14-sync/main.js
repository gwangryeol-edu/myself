//비동기 처리 함수
// setTimeout, setInterval, fetch

// setTimeout(콜백, ms)
// 밀리초 뒤에 콜백함수를 실행하는 비동기처리 함수

console.log("setTime 전 실행");

setTimeout(() => {
  console.log("3000ms 후 실행");
}, 3000);

setTimeout(() => {
  console.log("5000ms 후 실행");
}, 5000);

setTimeout(() => {
  console.log("10000ms 후 실행");
}, 10000);
