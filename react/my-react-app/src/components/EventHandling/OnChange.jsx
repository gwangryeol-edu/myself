import React from "react";
// change 이벤트의 핸들러 함수 정의
// 핸들러 함수이름 규칙: handle이벤트명

export default function OnChange() {
  // 이벤트 핸들러의 event객체ㅣ 이벤트 정보 저장하 객체
  function handleChange(event) {
    // 이벤트가 발생한 요소의 정보
    console.log(event);
    // 이벤트가 발생항 입력 요소의 사용자 입력 값
    console.log(event.target.value);
  }

  // 실습 1.
  function handleNumberChange(event) {
    // 사용자 입력 값이 10보다 작으면
    // consol.log()를 사용해서 10보다 작은 수 입니다 출력
    const value = Number(event.target.value); // 문자열 → 숫자 변환
    console.log(value);
    if (value < 10) {
      console.log("10보다 작은 수 입니다");
    }
  }

  return (
    <div>
      {/* OnChange 이벤트 속성 적용 */}
      {/* 기본 형태: 보간법을 쓰고 그 안에 화살표 함수 */}
      <input
        type="text"
        className="w-7xl border-2 border-amber-400 p-6 m-2"
        onChange={(event) => {
          // handleChage 함수 호출
          // event 인자는 어디서 가져옴? -> 화살표 함수의 매개변수로 가져와야
          // handleChange의 인자로 받음
          handleChange(event);
        }}
      />

      {/* 실습 2 */}
      {/* onChange 이벤트 속성에서 이벤트 객체를 전달하면서 numberChange 호출 */}

      <input
        type="number"
        className="w-7xl border-2 border-amber-400 p-6 m-2"
        onChange={(event) => {
          // handleChage 함수 호출
          // event 인자는 어디서 가져옴? -> 화살표 함수의 매개변수로 가져와야
          // handleChange의 인자로 받음
          handleNumberChange(event);
        }}
      />
    </div>
  );
}
