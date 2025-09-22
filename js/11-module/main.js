// 모듈을 불러오기
// import / from

// 모듈: Common.js or module
// common.js -> 레거시 코드용

// from : 어디서 불러올 것이냐
// import : 무엇을 불러올 것이냐
// import { add, subtract, multiply, divide, pi } from "./math.js";

// // // add를 임포트하겠다. + ./math.js에서 불러온
// console.log(add(1, 2));
// console.log(subtract(1, 2));
// console.log(multiply(1, 2));
// console.log(divide(1, 2));

// console.log(pi);

// // // 하나만 불러오기
// // // 내가 불러온 함수의 이름을 결정(Add가 아니라 다른 이름 사용 가능)
// import Add from "./계산기.js";
// console.log(Add(1, 2));

// 일부 모듈만 불러오기
// 트리 셰이킹: 사용하지 않는 코드를 제거하는 기술, 코드 최적화 기술
// import { pi, add, multiply } from "./math.js";

// const a = 1;
// const b = 2;

// console.log("원주율:", pi);
// console.log(`a+b=${add(a, b)}`);
// console.log(`a*b=${multiply(a, b)}`);

// 별칭 as 키워드 사용
// main.js
// 

// 모듈 만들고 내보내기
// import Calculator from "./calculator.js";

// const a = 1;
// const b = 2;
// console.log(Calculator.add(a, b));
// console.log(Calculator.subtract(a, b));
// console.log(Calculator.multiply(a, b));
// console.log(Calculator.divide(a, b));





// import calculator from "./calculator.js";

// console.log(calculator)
// console.log(calculator.add(1,2))
// console.log(calculator.subtract(1,2))