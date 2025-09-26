let key = "name";

const user = {
  key: "홍길동",
};
console.log(user);

// ${key} -> 템플릿 리터럴 사용 X

// 계산된 속성명(key)
// 변수들 속성의 key로 사용하고 싶을 때 사용하는 문법
const user3 = {
  [key]: "홍길동",
};
console.log(user3);
