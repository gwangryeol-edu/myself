// console.log("hello test");

//  자료형 확인 키워드 //
//  typeof 확인하는 데이터 //
console.log(typeof "hello World");

// 원시 자료형 5개(원래는 7개)
// 문자열(String)
// 문자열들의 나열: 0개 이상의 문자를 나타내는 자료형
// 빈 문자열(""")도 문자열
console.log(typeof "");

// 숫자형(nuber)
// 모든 종류의 숫자(정수,0,실수)
console.log(10);
console.log(0);
console.log(-1);
console.log(1.1);

console.log(typeof 10);
console.log(typeof 0);
console.log(typeof -1);
console.log(typeof 1.1);

// 논리형(Boolean)
// 맞다/틀리다
// true/false 두개의 데이터만 존재
console.log(true);
console.log(typeof true);

// underfinded
// 없다, 비어있다
// 변수에 데이터가 없다
// 개발자가 의도하지 않은 비어있음

// null
// 없다, 비어있다
// 변수에 데이터가 없다
// 개발자가 의도한 비어있음
console.log(typeof undefined);
console.log(typeof null); // object 라고 출력 -> JavaScript 초창기   버전의 버그
// 만약 버그를 수정해서 null로 출력한다면 레거시 코드들에서 문제가 생길 가능성 높음
