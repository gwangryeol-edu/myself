const str = "hello";

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

for (let name of str) {
  console.log(name);
}

// 배열 생성
// 대괄호 [] 생성

// 빈 문자열 생성
let emptyArray = [];

// 1를 저장한 배열 데이터 변수
let oneArray = [1];

// 원소를 여러개 저장하기 위해서는
// , 로 구분해서 작성
// 1, 2, 3, 4 를 저장한 배열 데이터를 변수 manyArray 할당
let manyArray = [1, 2, 3, 4];

// 배열의 생성
// 빈 배열:[]
// 원소 하나인 배열: [1]
// 원소가 2개 이상인 배열은 쉼표로 원소 구분:[1,2,"3"]

// 배열의 인덱스
// 배열 내부 원소의 위치 번호
// 시작 : 0
// 마지막: 배열 원소 수 -1

// 배열 원소 접근
// 대괄호 []
// 배열데이터[]

// 변수 array2에 [1,"2",3]을 저장한 배열을 할당
let array2 = [1, "2", 3];

// 첫 번째 위치의 원소에 접근한다
// array2[index]
array2[0];
// 두 번째 위치
array2[1];
// 세 번째 위치
array2[2];

// 첫 번째 원소를 콘솔에 출력
console.log(array2[0]);

// 첫 번째 원소를 -1로 재할당
// 1. 첫 번째 원소에 접근
// 2, -1을 재할당
array2[0] = -1;
// 첫 번재 원소를 콘솔에 출력
console.log(array2[0]);

// 원소의 추가와 제거
// 배열 데이터 .push(데이터)
// .push() 함수

// 변수 array3을 선언하고, 배열 데이터 [0]을 할당
let array3 = [0];
// 배열 array3에 1을 원소로 추가
array3.push(1);
console.log(array3);

// 배열 데이터 .pop()
// 배열의 마지막 원소를 제거 delet unit last of array
// 배열 array3
array3.pop();
console.log(array3);

// 배열의 반복
// 배열에 저장된 원소를 반복해서 접근하는 방법
// [1,2,3] 순서대로 출력

// for 반복문 활용
// 배열의 인덱스가 0부터 배열의 길이 -1 범위를 가진다는 특성을 활용

// 0부터 배열 길이 -1까지 출력하세요
// 배열 길이: [배열 데이터].length
// 변수 array4를 선언하고, 배열 [1,2,3]을 할당
let array4 = [1, 2, 3];

console.log(array4.length);

for (let i = 0; i < array4.length; i++) {
  console.log(array4[i]);
  console.log(`${i} : ${array4[i]}`);
}

// for ,,, of 반복문
// 인덱스를 활용x
// 배열에서 직접적으로 원소를 꺼내옴

for (let test of array4) {
  console.log(test);
}
