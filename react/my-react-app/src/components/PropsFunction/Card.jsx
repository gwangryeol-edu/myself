import React from "react";
import OnClick from "../EventHandling/OnClick";

export default function Card({ user, onClickProps }) {
  
  return (
    <div>
      {/* button 태그에 onClick 속성에서 OnClickProps 함수에서 실행 */}
      <button onClick={() => onClickProps(user)}>클릭</button>
    </div>
  );
}
