// 1. 함수를 변수에 할당
const sayHello = function() {
  console.log('Hello!');
};

sayHello(); // 출력: Hello!

console.log('--------------------');

// 2. 함수를 다른 함수의 인자로 전달 (콜백 함수)
function doSomething(callback) {
  console.log('어떤 작업을 수행합니다...');
  // 인자로 받은 함수(callback)를 나중에 호출
  callback();
}

const sayGoodbye = function() {
  console.log('Goodbye!');
};

// sayGoodbye 함수를 doSomething 함수의 인자로 전달
doSomething(sayGoodbye);

console.log('--------------------');

// 3. 함수를 다른 함수의 반환 값으로 사용
// 이 패턴은 자바스크립트의 매우 중요하고 강력한 개념인 '클로저(Closure)'와 '고차 함수(Higher-Order Function)'를 보여줍니다.

// createGreeter 라는 이름의 함수를 정의합니다.
// 이 함수는 'greeting'이라는 하나의 매개변수(인사말)를 받습니다.
// 이처럼 다른 함수를 반환하거나 인자로 받는 함수를 '고차 함수'라고 부릅니다.
function createGreeter(greeting) {
  // 이 함수의 가장 중요한 부분입니다!
  // 여기서 또 다른 함수(익명 함수)를 만들어서, 그 함수 자체를 '반환'합니다.
  return function(name) {
    // 이 내부 함수는 'name'이라는 매개변수를 받습니다.
    // 그리고 바깥 함수(createGreeter)의 매개변수였던 'greeting'을 사용합니다.
    // 함수가 종료된 후에도 외부 함수의 변수에 접근할 수 있는 이런 현상을 '클로저(Closure)'라고 합니다.
    console.log(greeting + ', ' + name + '!');
  };
}

// createGreeter 함수를 'Hello'라는 인사말과 함께 호출합니다.
// 그 결과로 반환된 "내부 함수"가 greetInEnglish 변수에 저장됩니다.
// 이 때, greetInEnglish 함수는 'greeting'이 'Hello'라는 것을 '클로저'를 통해 계속 기억하고 있습니다.
const greetInEnglish = createGreeter('Hello');

// 이번에는 '안녕하세요'라는 인사말과 함께 호출합니다.
// 그 결과로 반환된 새로운 "내부 함수"가 greetInKorean 변수에 저장됩니다.
// 이 함수는 'greeting'이 '안녕하세요'라는 것을 '클로저'를 통해 기억합니다.
const greetInKorean = createGreeter('안녕하세요');

// 위에서 만들어진, 각각 다른 환경을 기억하는 함수들을 호출합니다.
greetInEnglish('John');  // 출력: Hello, John!
greetInKorean('철수');   // 출력: 안녕하세요, 철수!

/*
### 왜, 그리고 어떤 상황에 사용하나요? ###

이런 '함수 팩토리' 패턴은 "비슷한 역할을 하는 함수를 여러 개 만들어야 할 때" 매우 유용합니다.
초기 설정값(여기서는 'greeting')만 바꿔서 비슷한 동작을 하는 함수들을 효율적으로 생성할 수 있어
코드의 중복을 줄이고 재사용성을 높여줍니다.

### 추가 학습 추천 개념 ###

1. 클로저 (Closure): 오늘 설명한 가장 핵심적인 개념입니다.
2. 고차 함수 (Higher-Order Function): 함수를 다루는 함수. `map`, `filter`, `reduce`가 대표적입니다.
3. 콜백 함수 (Callback Function): 다른 함수의 인자로 전달되는 함수.
*/

console.log('--------------------');
console.log('### 배열 고차 함수 (map, filter, reduce) ###');

// 고차 함수는 배열을 다룰 때 매우 강력한 기능을 제공합니다.

// 1. map: 배열의 모든 요소를 순회하면서 각 요소에 변환을 가한 '새로운 배열'을 만듭니다.
const numbers = [1, 2, 3, 4, 5];

// 각 숫자를 제곱한 새로운 배열을 생성
// map에 전달되는 함수는 각 요소(num)를 인자로 받습니다.
const squaredNumbers = numbers.map(function(num) {
  return num * num;
});

console.log('원본 배열:', numbers); // 원본 배열은 변경되지 않습니다.
console.log('map 후 (제곱):', squaredNumbers); // [1, 4, 9, 16, 25]

console.log('--------------------');

// 2. filter: 배열의 모든 요소를 순회하면서 조건이 'true'인 요소만 모아 '새로운 배열'을 만듭니다.
const scores = [88, 95, 42, 76, 100, 55];

// 70점 이상인 점수만 필터링
// filter에 전달되는 함수는 각 요소(score)를 인자로 받고, boolean(true/false)을 반환해야 합니다.
const passingScores = scores.filter(function(score) {
  return score >= 70;
});

console.log('원본 점수:', scores); // 원본 배열은 변경되지 않습니다.
console.log('filter 후 (70점 이상):', passingScores); // [88, 95, 76, 100]

console.log('--------------------');

// 3. reduce: 배열의 모든 요소를 순회하면서 '하나의 결과값'을 만듭니다. (예: 총합, 평균, 단일 객체 등)
const values = [10, 20, 30, 40, 50];

// 모든 값을 더하기
// reduce에 전달되는 함수는 (누적값, 현재요소)를 인자로 받습니다.
const sum = values.reduce(function(accumulator, currentValue) {
  // 현재요소(currentValue)를 누적값(accumulator)에 더해서 반환하면, 이 값이 다음 순회의 누적값이 됩니다.
  return accumulator + currentValue;
}, 0); // 0은 accumulator의 초기값입니다. 이게 없으면 배열의 첫번째 요소가 초기값이 됩니다.

console.log('원본 값:', values);
console.log('reduce 후 (총합):', sum); // 150
