// function Add(n1, n2) {
//   return n1 + n2;
// }

import { subtract } from "./math";

// import { multiply } from "./math";

// // 하나만 내보내기
// export default Add;

// 여러개 내보내기
// export(add, sub, ...)


// calculator.js

// 계산기 객체
const Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("0으로 나눌 수 없습니다");
    }
    return a / b;
  },
};

export default Calculator;


// 가장 기본적인 형태의 하나 내보내기(Default Export) 방식
// 여러 개의 함수(메서드)가 정의된 객체를 생성해서 내보내기

// 겍체란 중괄호로 표현되는 속성의 모음
// const calObject = {
//   add: function (n1, n2) {
//     return n1 + n2;
//   },

//   subtract: function (n1, n2) {
//     return n1 - n2;
//   },

//   multiplyArrow: (n1, n2)=> {
//     return n1 * n2;
//   }
// }

// // 하나만 내보내기 코드
// export default calObject;