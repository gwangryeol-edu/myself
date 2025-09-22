// 기본 코드
// numbers4.forEach((element) = > {

// })

// 각 원소에 +1을 한 결과를 출력
const numbers4 = [1, 2, 3, 4, 5];

numbers4.forEach((element) => {
  // 배열의 원소에 반복적으로 수행할 로직 코드
  console.log(element + 1);
});
console.log("---------------");
// 각 원소 중 짝수인 원소만 출력
numbers4.forEach((element) => {
  // 배열의 원소에 반복적으로 수행할 로직 코드
  if (element % 2 === 0) {
    console.log(element);
  }
});
console.log("---------------");

// map() 활용해서 * 2를 한 데이터를 모아서 새 배열
const mapArray1 = numbers4.map((element) => {
  return element * 2;
});
console.log(mapArray1);

// reduce()
// 배열의 누적을 반환
const numbers10 = [1, 2, 3, 4, 5];

numbers10.reduce((accValue, currElement) => {
  // accValue: 이전 반복동안 반환된 값을 누적한 데이터
  // currElement: 현재 원소
  return accValue + currElement;
  //accValue + currElement
  // --------------
  // 0          + currElement(1) , => accVaule = 1
  // 1          + currElement(2) , => accVaule = 3
  // 3          + currElement(3) , => accVaule = 6
  // 6          + currElement(4) , => accVaule = 10
  // 10         + currElement(5) , => accVaule = 15
});
console.log(numbers10);

// sort()
// 배열을 정렬하는 고차 메서드
// 원소를 2개씩 비교하며 정렬
const numbers11 = [2, 6, 1, 9, 7];
// a b
// 2 6
numbers11.sort((a, b) => {
  // 정렬 기준
  // 반환값이 양수라면 a가 뒤로 배치
  // 반환값이 음수라면 a가 앞으로 배치
  // 반환값이 0이라면 같다
  // ** 원본을 수정 **

  // 오름차순
  if (a < b) {
    return -1;
  }
  if (b < a) {
    return 1;
  }
  if (a === b) {
    return 0;
  }
  // 내림차순 -> 음수양수 바꿔서 

  // 축약형
  // return a-b; -> 오름차순
  // return b-a; -> 내림차순
});
console.log(numbers11)