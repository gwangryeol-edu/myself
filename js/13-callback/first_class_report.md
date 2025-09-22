
# JavaScript 일급 객체 및 고차 함수 분석

## 1. 서론: 함수 = 일급 객체

- 자바스크립트 함수: 일급 객체(First-class Citizen).
- 의미: 함수를 숫자, 문자열 같은 일반 값(value)으로 취급 가능.
- 핵심 특징 3가지:
  1. 변수에 할당 가능.
  2. 함수 인자로 전달 가능 (콜백).
  3. 함수 결과값으로 반환 가능 (고차 함수, 클로저).

---

## 2. 일급 객체 특징 분석

### 2.1. 콜백 함수 (Callback Function)

- 정의: 다른 함수의 인자로 전달되는 함수. 나중에 호출(call back)됨.
- 핵심: 비동기(Asynchronous) 처리의 기본.

**코드:**
```javascript
function doSomething(callback) {
  // ... 작업 수행 ...
  callback();
}
const sayGoodbye = () => console.log('Goodbye!');
doSomething(sayGoodbye);
```

- **사용 상황**
  - 순서가 중요하지만, 완료 시점을 예측할 수 없는 작업.
  - 이벤트 처리: `button.addEventListener('click', handleClick)`
  - 서버 통신: `fetch(url).then(callback)`
  - 타이머: `setTimeout(callback, 1000)`

- **비교: 동기(Synchronous) vs 비동기(Asynchronous)**
  - 동기: 코드가 순서대로 실행. 한 작업이 끝나야 다음 작업 시작. 작업 중 멈춤.
  - 비동기: 작업 요청 후 즉시 다음 코드로 진행. 작업 완료 시 콜백 실행. 멈춤 없음.

- **추가 학습**
  - **Promise**: 콜백 지옥(Callback Hell) 해결책. 비동기 코드를 깔끔하게 관리.
  - **async/await**: Promise를 동기 코드처럼 쉽게 작성하게 하는 최신 문법. (실무 필수)

### 2.2. 고차 함수와 클로저 (Higher-Order Function & Closure)

- 정의:
  - 고차 함수: 함수를 반환하거나, 다른 함수를 인자로 받는 함수.
  - 클로저: 함수가 생성될 당시의 환경(스코프)을 기억하는 함수. 고차 함수 동작의 핵심 원리.

**코드:**
```javascript
function createGreeter(greeting) {
  // greeting 값을 기억하는 클로저 함수를 반환
  return function(name) {
    console.log(greeting + ', ' + name + '!');
  };
}
const greetInEnglish = createGreeter('Hello');
greetInEnglish('John'); // Hello, John!
```

- **사용 상황**
  - **함수 팩토리**: 설정값을 미리 받아 "맞춤형 함수"를 생성. 코드 중복 감소.
  - **정보 은닉 (캡슐화)**: 외부에서 접근 불가능한 "비공개(private) 변수" 구현. (모듈 패턴)

- **비교: 일반 함수 vs 함수 팩토리**
  - 일반 함수: `greet(greeting, name)`처럼 모든 인자를 매번 전달.
  - 함수 팩토리: `createGreeter(greeting)`로 `greeting`이 고정된 전문 함수를 생성. 재사용성 및 역할 분리에 유리.

- **추가 학습**
  - **클로저 (Closure)**: 이 패턴의 핵심. 여러 예제로 반드시 숙달 필요.
  - **커링 (Currying)**: `f(a, b)`를 `f(a)(b)` 형태로 변환하는 기법. `createGreeter`가 간단한 예시.

---

## 3. 배열 고차 함수

- 목적: `for` 반복문을 대체. 간결하고 의도가 명확한 코드 작성.
- 특징: 원본 배열을 변경하지 않음 (불변성).

### 3.1. `map()`

- 역할: 배열 모든 요소를 순회, 변환 함수를 적용해 **새 배열** 생성.
- 사용: 모든 요소에 일괄 변환 적용 시. (예: 데이터에서 특정 값만 뽑기, JSX 배열 생성)
- 비교 (`map` vs `forEach`): `map`은 새 배열 반환. `forEach`는 반환값 없음(undefined), 단순 반복용.

**코드:**
```javascript
const numbers = [1, 2, 3];
const squared = numbers.map(n => n * n); // [1, 4, 9]
```

### 3.2. `filter()`

- 역할: 조건 함수가 `true`를 반환하는 요소만 모아 **새 배열** 생성.
- 사용: 특정 조건 데이터만 필터링 시. (예: 활성 사용자, 검색 결과)
- 비교 (`filter` vs `find`): `filter`는 조건에 맞는 **모든 요소**를 배열로 반환. `find`는 **첫 번째 요소 하나**만 반환.

**코드:**
```javascript
const scores = [88, 42, 76];
const passing = scores.filter(s => s >= 70); // [88, 76]
```

### 3.3. `reduce()`

- 역할: 배열 모든 요소를 순회하며 **하나의 결과값**으로 응축.
- 사용: 배열로 단일 결과 도출 시. (예: 총합/평균 계산, 배열 -> 객체 변환)
- 특징: 가장 유연함. `map`, `filter` 등 대부분의 배열 메서드를 `reduce`로 구현 가능.

**코드:**
```javascript
const values = [10, 20, 30];
const sum = values.reduce((acc, cur) => acc + cur, 0); // 60
```

- **배열 추가 학습**
  - **메서드 체이닝**: `arr.filter(...).map(...)`처럼 고차 함수를 연결해 사용.
  - **`find`, `findIndex`, `some`, `every`**: 특정 목적에 특화된 유용한 고차 함수들.
