// 조건문의 기본 구조

//여러 줄 주석: /* */

/* 
if(조건식) {
// 조건식이 참이면 실행되는 코드 영역
}
*/
if (5 > 1) {
  console.log("5는 1보다 크다");
}

/*
if(조건식1) {

} else if(조건식2) {
 조건식1이 거짓일 때 평가
} else if(조건식3) {
 조건식2가 거짓일 때 평가
}
*/
if (5 > 10) {
  console.log("5는 10보다 크다");
} else if (5 > 7) {
  console.log("5는 7보다 크다");
} else if (5 > 5) {
  console.log("5는 5보다 크다");
} else if (5 > 3) {
  console.log("5는 3보다 크다");
}
/* if ~ else if ~ else 조건문 기본 구조
if(조건식1) {
} else if (조건식2) {
} else {
  else는 조건식이 없음
  위에 나오는 조건식들이 거짓이면 실행
}
*/

let number1 = -1;

// number가 0보다 크면 "양수"를 콘솔에 출력
// number가 0보다 크지 않다면 "음수"를 콘솔에 출력
if (number1 > 0) {
  console.log("양수");
} else {
  console.log("음수");
}

// 삼항 연산자 표현식
// 표현시 :  데이터를 생성하는 코드

// 조건식은 모조건 참, 거짓 데이터 중 하나를 생성
// 조건식 ? 결과가 참일 때 데이터: 결과가 거짓일 때
// x를 2로 나눠서 0, 참이면 짝수, 거짓이면 홀수
let x = 7;
let result = x % 2 === 0 ? "짝수" : "홀수";
console.log(result);

let isLoggined = true;
const user = isLoggined ? "로그인 O" : "로그인 X";
console.log(user);
