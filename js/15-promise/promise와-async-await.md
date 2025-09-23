## Promise와 async/await 상세 보고서

### 1. Promise

#### 가. 개념

- 비동기 작업의 최종 완료 또는 실패를 나타내는 객체.
- 비동기 처리를 위한 콜백 지옥(Callback Hell) 문제를 해결하기 위해 등장.

#### 나. 3가지 상태(States)

1.  **대기 (Pending)**: 초기 상태. 비동기 작업이 아직 완료되지 않음.
2.  **이행 (Fulfilled)**: 작업이 성공적으로 완료됨. `resolve` 함수가 호출된 상태.
3.  **거부 (Rejected)**: 작업이 실패함. `reject` 함수가 호출된 상태.

- 한번 `Fulfilled` 또는 `Rejected` 상태가 되면, 더 이상 다른 상태로 변경되지 않음 (불변성).

#### 다. 주요 메서드와 프로미스 체이닝 (Chaining)

- **`.then(onFulfilled, onRejected)`**: Promise가 `Fulfilled` 상태가 되면 `onFulfilled` 함수가, `Rejected` 상태가 되면 `onRejected` 함수가 실행됨. `.then()`은 **새로운 Promise를 반환**하므로, 여러 개의 `.then()`을 연결하여 순차적인 작업(체이닝)을 구현할 수 있음.
- **`.catch(onRejected)`**: Promise가 `Rejected` 상태가 될 때 실행할 콜백을 등록. `.then(null, onRejected)`와 동일하게 동작하는 문법적 설탕.
- **`.finally(onFinally)`**: Promise의 성공/실패 여부와 상관없이 항상 마지막에 한 번 실행됨.

#### 라. 예시 코드

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    const success = true; // 임의의 성공/실패 조건
    setTimeout(() => {
      if (success) {
        resolve({ user: 'Alice', data: 'Some data' });
      } else {
        reject('데이터를 가져오는데 실패했습니다.');
      }
    }, 1000);
  });
}

fetchData()
  .then(response => {
    console.log('성공:', response);
    return response.user; // 다음 then으로 값을 전달
  })
  .then(user => {
    console.log('사용자 이름:', user);
  })
  .catch(error => {
    console.error('실패:', error);
  })
  .finally(() => {
    console.log('작업 완료.');
  });
```

---

### 2. async/await

#### 가. 개념

- Promise를 기반으로, 비동기 코드를 마치 동기 코드처럼 보이게 만드는 문법적 설탕(Syntactic Sugar).
- 코드의 가독성을 획기적으로 향상시킴.

#### 나. 주요 키워드

1.  **`async`**:
    - 함수 앞에 붙이는 키워드.
    - `async` 함수는 항상 Promise를 반환.
    - 함수가 값을 반환하면, 그 값으로 `resolve`되는 Promise가 반환됨.

2.  **`await`**:
    - `async` 함수 내에서만 사용 가능.
    - Promise가 `Fulfilled` 상태가 될 때까지 함수의 실행을 일시 중지하고 기다림.
    - Promise가 완료되면, 그 결과값을 반환.

#### 다. 에러 처리

- `try...catch` 구문을 사용하여 동기 코드와 동일한 방식으로 비동기 작업의 에러(Rejected Promise)를 처리할 수 있음.

#### 라. 예시 코드 (Promise 예시와 동일한 로직)

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    const success = true;
    setTimeout(() => {
      if (success) {
        resolve({ user: 'Alice', data: 'Some data' });
      } else {
        reject('데이터를 가져오는데 실패했습니다.');
      }
    }, 1000);
  });
}

async function processData() {
  try {
    console.log('데이터를 가져오는 중...');
    const response = await fetchData(); // Promise가 완료될 때까지 기다림
    console.log('성공:', response);

    const user = response.user;
    console.log('사용자 이름:', user);
  } catch (error) {
    console.error('실패:', error);
  } finally {
    console.log('작업 완료.');
  }
}

processData();
```

### 3. 결론

- `async/await`는 Promise 체이닝보다 코드가 간결하고 흐름을 이해하기 쉬워, 현대 JavaScript 비동기 프로그래밍의 표준으로 자리 잡음.
- `async/await`는 내부적으로 Promise를 사용하므로, Promise의 동작 원리를 이해하는 것은 여전히 중요.
