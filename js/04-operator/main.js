// 논리 연산자
// 논리형(분리언형, t/f)를 기반으로 한 연산자
const trueData = true;
const falseData = false;

// && (AND)
// 둘 다 참이여야 참
// true && true 출력(log)
console.log(`true && true -> ${trueData && trueData}`);
// false && true 출력(log)
console.log(`false && true -> ${falseData && trueData}`);

// ||(OR)
// 둘 중 하나라도 참이면 참
console.log(`true || false -> ${trueData || falseData}`);
console.log(`false || false -> ${falseData || falseData}`);

// ! (NOT)
console.log(`!true->${!trueData}`);
console.log(`!false->${!falseData}`);
// 1개의 논리형 데이터만 필요
// 논리형 데이터가 참이면 거짓, 거짓이면 참

const number = 1;
const str = "1";
const bool1 = number == str;
console.log(bool1); // false

const bool2 = number === str;
console.log(bool2); // true