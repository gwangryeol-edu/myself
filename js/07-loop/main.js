// 반복문이 없는 코드
// 변수 number을 선언하고 0을 할당
// 변수 number 5번 출력
// 1씩 증가
let number = 0;

console.log(number);
number = number + 1;
console.log(number);
number = number + 1;
console.log(number);
number = number + 1;
console.log(number);
number = number + 1;
console.log(number);
number = number + 1;

for (let number2 = 0; number2 < 5; number2 = number2 + 1) {
  console.log(number2);
}


// 숫자를 0부터 5까지 출력
for (let i = 0; i <= 5; i++) {
  console.log(`${i} 번 실행`)
}
