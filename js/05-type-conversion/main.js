// 형 변환
// 명시적 형 변환: 개발자가 한 것
// 암시적 형 변환: JS 엔진이 자동으로 한 것

// 문자열로의 명시적 변환
// String() 함수: 문자열로 변환하는 도구
// 힘수: 프로그래밍 언어의 특정 기능을 수행하는 도구
//
// String(데이터) / String(변수)
console.log(String(123)); // 숫자형 -> 문자열
console.log(String(123) === "123");

String(true);
String(undefined);
String(null);

// 숫자형 명시적 형 변환
// Number() 함수: 숫자형으로 변환하는 도구
// Number(데이터) / Number(변수)

// 문자열 "123"을 숫자형으로 변환해서 출력하는 코드
console.log(Number("123"));
console.log(Number("12asd124")); // NaN -> Not a Number

// 불리언 형 변환 규칙
// 각 자료형마다 최소 1개는 거짓(false)으로 변환
// false가 아닌 데이터는 모두 참(true)
// 숫자형 -> 불리언
console.log(Boolean(-1.1));
console.log(Boolean(-1));
console.log(Boolean(0)); // false 숫자에서 0은 false
console.log(Boolean(999));



console.log(Boolean("")); // false 문자열에서 null은 false
console.log(Boolean("         "));

// 암시적 형 변환
const a = 1;
const b = "2";
console.log(a + b); // "12"

console.log(!0); // true
console.log(!1); // false
