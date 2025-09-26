// 일반 함수에서의 this 키워드
// 전역 객체 this 키워드는 의미가 없음
function func() {
  console.log("함수");
  console.log(this);
}
func();
// 중괄호로 표현되는 자료형
// 객체의 특징: key:value

// 중괄호로 표현되는 괄호형
const obj = {
  name: "홍길동",
  age: 20,
  // 함수명이 없다 -> 함수 표현식
  //속성의 key가 func이고 value는 함수
  func: function () {
    console.log(this);
    // 여기서 this는 객체 obj와 동일
  },
};
//obj객체의 func메서드를 실햄(호출)
obj.func();

const user = {
  name: "홍길동",
  age: 20,
  greet: function () {
    console.log(`hello ${this.name}`);
  },
};

user.greet();

// 화살표 함수로 표현한 메서드는 함수 선언식 작동 방식이 다르다
const user2 = {
  name: "홍길동",
  age: 20,
  greet: () => {
    console.log(this);
  },
};

// function 으로 표현한 메서드 결과:{ name: '홍길동', age: 20, func: [Function: func] }
// 화살표 함수로 표현한 메서드: {}
user2.greet();
console.log(this); //함수가 아닌 곳에소 실행한 this :()

const user3 = {
  name: "홍길동",
  age: 20,
  greet: function () {
    const arrowFunc = () => {
      console.log(this);
    };
    arrowFunc();
  },
};
user3.greet();
