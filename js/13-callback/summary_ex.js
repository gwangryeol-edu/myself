// 1. 간단한 콜백 함수 예시
// 함수를 인자로 받아 실행하는 함수
function executeCallback(callback) {
  console.log("주 함수를 실행합니다.");
  // 콜백 함수가 실제로 함수인지 확인
  if (typeof callback === "function") {
    callback(); // 콜백 함수 실행
  }
}

// 콜백으로 전달할 함수
function simpleCallback() {
  console.log("콜백 함수가 실행되었습니다.");
}

// 함수 호출
executeCallback(simpleCallback);
// 출력:
// 주 함수를 실행합니다.
// 콜백 함수가 실행되었습니다.

console.log("--------------------");

// 2. 인자를 받는 콜백 함수 예시
// 데이터를 처리하고 결과를 콜백으로 전달하는 함수
function processData(data, callback) {
  console.log(`받은 데이터: ${data}`);
  const result = data.toUpperCase(); // 데이터를 대문자로 변경
  callback(result);
}

// 결과를 받아 출력하는 콜백 함수
function printResult(result) {
  console.log(`처리 결과: ${result}`);
}

// 함수 호출
processData("hello world", printResult);
// 출력:
// 받은 데이터: hello world
// 처리 결과: HELLO WORLD

console.log("--------------------");

// 3. 비동기 처리에서의 콜백 함수 예시 (setTimeout)
console.log("비동기 작업을 시작합니다.");

setTimeout(function () {
  console.log("3초 후, 비동기 콜백이 실행되었습니다!");
}, 3000);

console.log("비동기 작업 시작 후, 다른 작업을 계속합니다.");
// 출력:
// 비동기 작업을 시작합니다.
// 비동기 작업 시작 후, 다른 작업을 계속합니다.
// (3초 후) 3초 후, 비동기 콜백이 실행되었습니다!