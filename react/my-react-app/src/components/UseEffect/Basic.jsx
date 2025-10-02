import React, { useEffect, useState } from "react";

export default function Basic() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  useEffect(() => {
    console.log("의존석 배열이 없는 useEffect"); // number가 변할 때만 실행되도록 의존성 배열 추가
  });
  // 첫 렌대링때 처음 실행
  useEffect(() => {
    console.log("의존석 배열이 있는데 빈 배열인 useEffect"); // number가 변할 때만 실행되도록 의존성 배열 추가
  }, []);

  useEffect(() => {
    console.log("의존성 배열에 number 상태가 저장");
  }, [number]);
  useEffect(() => {
    console.log("의존성 배열에 number2 상태가 저장");
  }, [number2]);

  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     setCount(count + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(timerId);
  //   };
  // }, []);

  return (
    <div>
      {/* onClick 속성의 화살표 함수에서 setNumber(number+1)실행 */}
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        {number}
      </button>
      <br />
      {/* onClick 속성의 화살표 함수에서 setNumber(number2+1)실행 */}
      <button
        onClick={() => {
          setNumber2(number2 + 1);
        }}
      >
        {number2}
      </button>
    </div>
  );
}
