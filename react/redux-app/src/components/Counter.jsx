// 전역 상태를 불러와서 화면에 표시하는 컴포넌트

// useState과 유사한 전역 상태를 불러오는 훅
import { useSelector } from "react-redux";
// import { useEffect } from "react";
export default function Counter() {
  // 카운터 전역상태 불러오기
  // const counter = useSelector((state) => state.counter);

  const count = useSelector((state) => state.counter.count);
  // useEffect(() => {
  //   console.log(counter);
  // }, [counter]);

  return <div>전역 상태 count:{count}</div>;
}
