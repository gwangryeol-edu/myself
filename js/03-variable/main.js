// 변수에 데이터를 할당(assign O, save X)

// "hello world"에 데이터를 저장한 공간의 이름이 message
message = "hello world";

// = 할당 연산자
console.log(message);
console.log(message);
console.log(message);
console.log(message);

// 자주하는 실수
// "hello world" = message;

// 변수 message2 선언
// 선언과 할당은 분리가 가능하다

// 선언의 방식 2개(원래는 3개)
// let
// 데이터의 재할당 가능
let message3 = "hello variable"

// let 변서 message3 재할당
message3 = "hello varialbe 222222"
// let message3="" -> 재선언 불가능

// const
// 데이터의 재할당 불가능[상수]
// const 변수 message5 선언하고, "Hello const" 할당
const message5 = "Hello const";
// let vs const
// let: 변하는 데이터를 저장하는 변수 선언 방식
// const: ㅂ변하면 안되는 데이터를 저장하는 변수 선언 방식

// 대소문자 구분
// 카멜케이스 사용
// 의미있는 변수명 사용
let a = 1; // 잘못된 명명법
let num = 1; // 올바른 명명법

// 템플릿 리터럴
// 문자열을 생성하는 방법
// 1. 문자열을 백틱으로 표현
// 2. 변수 삽입 위치에 기호 ${} 중괄호 를 삽입
let preet = "안녕하세요 --- 입니다"
let name = "곽광렬";
let greet = `안녕하세요 ${name} 입니다`;
console.log(greet);
