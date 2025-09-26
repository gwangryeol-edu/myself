// 구조 분해 할당

const object = {
  name1: "홍길동",
  age1: 20,
  name2: "홍길동",
  age2: 20,
};

//구조 분해 할당을 활용하지 않은 경우
// 속성을 개별 변수에 할당
let name1 = object["name1"];
let age1 = object["age1"];

// 구조 분해 할당을 활용하는 경우
// 변수명과 객체의 속성명(key)가 동일 해야된다
let { name2, age2 } = object;
console.log(name1);
console.log(name2);

// const object2 = {
//   id: "갤럭시",
//   title: "삼성 스마트 폰",
//   description: "",
//   price: 200000,
// };

// {id, tags, diffcutly}

// 배열 구조 분해 할당
const array = [1, 2, 3, 4, 5];

const [a, b, c, d, e] = array;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// 객체를 인자로 전달받는 함수
function func(object) {
  // 구조 분해 할당으로 변수에 속성 값을 저장
  const { name, age } = object;
  console.log(`hello ${object["name"]}, I'm ${object["age"]}`);
}

// 매개변수에 구조분해 할당을 활용
function func2({ name, age }) {
  console.log(`hello ${name}, I'm ${age}`);
}

const user = {
  name: "홍길동",
  age: 20,
};

func(user);
func2(user);
