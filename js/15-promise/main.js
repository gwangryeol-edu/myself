// Promise 생성자 함수를 직접 사용하는 방법
// new Promise() : 생성자 함수
// (resolve, reject) => {} : 비동기 작업을 수행하고, 결과를 반환하는 함수

const randomPromise = new Promise((resolve, reject) => {
  // 비동기 작업 흉내
  setTimeout(() => {
    const random = Math.random(); // 랜덤 숫자 생성

    if (random > 0.5) {
      resolve("숫자가 0.5 이상! 성공"); // 성공 시  반환 -> 콜백함수의 인자로 전달
    } else {
      reject("숫자가 0.5 이하! 실패"); // 실패 시  반환 -> 콜백함수의 인자로 전달
    }
  }, 1000);
});

// promise 두 가지 상태
// 비동기 처리의 성공과 실패
// 예시) 네트워크 통신의 성공과 실패

// 성공 상태일 때 수행할 처리 메서드
// promise 데이터 .then(콜백함수)

// 실패 상태일 때 수행할 처리 메서드
// Promise 데이터 .catch(콜백함수)

// 콜백함수는 인자를 1개 받는다
// randomPromise
//   .then((result) => {
//     // resolve() 함수의 인자 데이터
//     console.log(result);
//   })
//   .catch((error) => {
//     // reject() 함수의 인자 데이터
//     console.log(error);
//   });

// fetch: promise 자료형 기반(.then, .catch) 네트워크 통신 함수
// 필수품: 웹 서비스의 주소
// fetch("https://example.com")
//   .then((response) => {
//     console.log(response);
//     return response.text();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// async/await
// Promise 자료형을 쉽게 사용하게 도와주는 키워드

// async 키워드
// 함수 앞에 붙는 키워드
// 해당 함수가 비동기를 처리하는 함수란 것을 표시
async function func() {
  // await 키워드
  // Promise의 완료(성공 or 실패)를 대기하는 키워드
  //   console.log("randomPromise 전");
  //   await randomPromise;
  //   console.log("randomPromise 후");
  // }
  try {
    // 비동기처리가 수행했을 때
    // await 키워드
    // Promise 기반 비동기 처리 수행
    const result = await randomPromise;
  } catch (error) {
    // 비동기처리가 실패했을 때
    console.log(error);
  }
}
func();
