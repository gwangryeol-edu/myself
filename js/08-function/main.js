// 3 숫자를 매개변수로 받아서 더한 숫자를 반환는 함수

// 함수 선언은 funcrion 키워드로 시작

// 매개변수가 3개인 함수
// 함수를 호출하면 실행될 코드 블록
// 숫자 3개를 매개변수로 받아서 더한 숫자를 반환하는 함수
function add(num1, num2, num3) {
  const result = num1 + num2 + num3;
  return result;
}

// 함수의 호출(call)
// 함수의 전달하는 데이터를 인자(argument)
const result1 = add(1, 2, 3);

const n1 = 1;
const n2 = 2;
const n3 = 3;
const result2 = add(n1, n2, n3);

console.log(`result1 = ${result1}`); // → 6
console.log(`result2 = ${result2}`); // → 6
// 호이스팅은 함수를 맨 위로 끌어올림

// 매개변수와 반환값으로 구분한 함수 정의

// 매개변수 X, 반환값 X -> 활용도 극히 낮음
// hello world 출력
function sayHello() {
  console.log("Hello World");
}
// 매개변수 X, 반환값 O -> 활용도 낮음
function createOne() {
  return 1;
}
const createOneArrow = () => {
  return 1;
};
// 매개변수 O, 반환값 X -> 활용도 높음
// 전달받은 매개변수(num)가 음수, 0, 양수 인지 판단해서 출력
function determine(num) {
  if (num < 0) {
    console.log("음수");
  } else if (num > 0) {
    console.log("양수");
  } else {
    console.log("0");
  }
}

const determineArrow = (num) => {
  if (num < 0) {
    console.log("음수");
  } else if (num > 0) {
    console.log("양수");
  } else {
    console.log("0");
  }
};

// 매개변수 O, 반환값 O -> 활용도 극히 높음

// 함수 선언식
// 매개변수가 짝수면 true 반환
// 매개변수가 홀수면 false 반환

// 1. 변수 선언
let number;
// 2. 로직(기능) 작성
if (number % 2 === 0) {
// 짝수
} else {
  // 홀수
}

// 3. 함수를 선언
// 4. 변수 -> 매개변수
// 5. 기능 코드 -> 함수 코드블럭
// 6. 반환 값을 작성
function evenOdd(number) {
  if (number % 2 === 0) {
    return(true)
  } else {
    return(false)
  }
}
