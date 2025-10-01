import { useState } from "react";

export default function StateBasic() {
  const [array, setArray] = useState([]); // 초기 상태: 빈 배열
  const [state, setState] = useState("기본 문자열"); // 초기 상태: "문자열"

  function handleClick() {
    // 배열에 새 원소 추가
    setArray([...array, `아이템 ${array.length + 1}`]);
  }
  // 화면이 바뀌는 이유:
  // 상태에 저장된 메모리 주소가 바뀌었을 때 화면을 다시 그림
  // 데이터 직접 변경시-> 메모리 유지, 함수를 통해 변경시 ->  메모리 주소 변동
  // 스프레드 연산자 사용시(...arr) ->  메모리 주소 변동
  return (
    <div>
      <p>현재 상태: {state}</p>
      <button
        onClick={() =>
          setState(state === "기본 문자열" ? "상태 변경" : "기본 문자열")
        }
      >
        문자열 변경
      </button>

      <hr />

      <button onClick={handleClick}>원소 추가</button>
      <ul>
        {array.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
}
