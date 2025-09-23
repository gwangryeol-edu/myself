## JavaScript 비동기 처리 보고서

### 1. 개요

- JavaScript는 단일 스레드(Single Thread) 기반 언어로서, 한 번에 하나의 작업만 처리 가능.
- 특정 작업(예: API 요청, 파일 읽기)이 오래 걸리면 전체 프로세스가 멈추는 블로킹(Blocking) 현상 발생.
- 비동기 처리는 이러한 블로킹을 방지하고 여러 작업을 효율적으로 관리하기 위해 필수적.

### 2. 비동기 처리 발전 과정

#### 가. 콜백 함수 (Callback Function)

- **개념**: 다른 함수의 인자로 전달되어, 특정 작업이 완료된 후 실행되는 함수.
- **탄생 배경**: 비동기 작업이 끝난 시점을 알려주고, 그 결과로 다음 작업을 처리하기 위해 사용.
- **문제점**: 콜백 함수가 중첩되면 코드가 깊어지고 가독성이 떨어지는 '콜백 지옥(Callback Hell)' 발생.

```javascript
// 예시: 콜백 지옥
setTimeout(() => {
  console.log('첫 번째 작업 완료');
  setTimeout(() => {
    console.log('두 번째 작업 완료');
    setTimeout(() => {
      console.log('세 번째 작업 완료');
    }, 1000);
  }, 1000);
}, 1000);
```

#### 나. Promise

- **개념**: 비동기 작업의 최종 성공 또는 실패를 나타내는 객체. 세 가지 상태(Pending, Fulfilled, Rejected)를 가짐.
- **탄생 배경**: 콜백 지옥 문제를 해결하고, 비동기 코드를 더 깔끔하게 관리하기 위해 등장. `.then()`과 `.catch()`를 이용한 체이닝(Chaining)으로 순차적인 코드 작성 가능.
- **차이점**: 콜백 함수와 달리 비동기 작업의 상태를 직접 관리하며, 성공과 실패를 명확하게 분리하여 처리.

```javascript
// 예시: Promise
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('첫 번째 작업 완료');
  }, 1000);
})
.then(result => {
  console.log(result);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('두 번째 작업 완료');
    }, 1000);
  });
})
.then(result => {
  console.log(result);
});
```

#### 다. async/await

- **개념**: Promise를 더욱 동기 코드처럼 보이게 만드는 문법적 설탕(Syntactic Sugar). `async` 함수 내에서 `await` 키워드를 사용하여 Promise가 처리될 때까지 기다림.
- **탄생 배경**: Promise 체이닝보다 가독성이 높고, 동기적인 코드 흐름과 유사하여 이해하기 쉬운 코드를 작성하기 위해 도입.
- **차이점**: `async/await`는 Promise 기반으로 동작. 복잡한 비동기 로직을 try-catch 구문으로 예외 처리하는 등 동기 코드와 매우 유사한 형태로 작성 가능.

```javascript
// 예시: async/await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function process() {
  try {
    console.log('첫 번째 작업 시작');
    await delay(1000);
    console.log('첫 번째 작업 완료');

    console.log('두 번째 작업 시작');
    await delay(1000);
    console.log('두 번째 작업 완료');
  } catch (error) {
    console.error(error);
  }
}

process();
```

### 3. 결론

- JavaScript의 비동기 처리는 `콜백 함수` -> `Promise` -> `async/await` 순으로 발전하며 가독성과 유지보수성을 높여왔음.
- 현재는 `async/await`를 사용하는 것이 가장 권장되지만, 내부적으로 Promise에 기반하므로 Promise에 대한 이해는 필수적.
