import React from "react";

// export default : 모듈 기본 내보내기
// function: 함수

// 파일 당 하나 존재하는 ㅎ함수는 컴포넌트
// 컴포넌트 함수는 HTML 요소(elemnet)를 반환
export default function Rule() {
  // DOM API
  // const element = document.creatElement("h1")
  // element.textContest = "App"

  // 규칙 1. 1개의 태그만 반환
  // 잘못된 반환
  // return (<div>1</div><div>2</div><div>3</div>)
  //
  // div 태그 3개를 감싸는 1개의 Fragment 태그 <></> 반환
  return (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      {/* // 규칙 2. 모든 태그는 반드시 닫아야한다 
      // 규칙 3. 속성명은 카멜 케이스로
      작성 */}
      <p className="font-bold text-5xl text-red-700"> p태그{1 + 0}</p>
      {/* // 규칙 4. style 속성의 값은 객체로 작성 */}
      <p style={{ fontSize: "3rem", color: "blue" }}>p태그2 2+0</p>
    </>
  );
}
