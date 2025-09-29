import React from "react";

export default function OnClick() {
  // // 클릭 이벤트 핼들링 함수
  // // 관례적으로 핸들링 함수명은 handling 이벤트명
  // // 매개변수가 없는 함수
  // // 박스를 클릭했을 때 팝업창
  // function handleClick() {
  //   alert("클릭!");
  // }
  // // 매개변수가 있는 함수
  // function handleParamClick(param) {
  //   alert(param);
  // }

  // return (
  //   <div>
  //     {/* jsx 보간법{}을 활용해서 함수 호출 */}
  //     <button
  //       className="cursor-pointer border-2 p-2 bg-green-300"
  //       onClick={() => {
  //         //클릭을 하면 팝업창 생성
  //         // handleClick();

  //         // 인자로 Hello world를 전달한 handleParamClick()
  //         handleParamClick("Hello World");
  //       }}
  //     >
  //       {/* 화살표 함수 클릭 */}
  //       파라미터가 있는 함수 클릭
  //     </button>
  //     <button onClick={handleClick}>함수 참조 호출</button>
  //   </div>
  // );
  function handleClick() {
    alert("클릭!");
  }

  // ////////////////////////////////////////
  return (
    <div>
      {/* 아래 버튼을 클릭했을때 handleClick()함수가 실행될 수 있도록 */}
      <button
        className="cursor-pointer border-2 p-2 bg-green-300"
        onClick={(event) => {
          handleClick();
        }}
      >
        클릭
      </button>
    </div>
  );
}
