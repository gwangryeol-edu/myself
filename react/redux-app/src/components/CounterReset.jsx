// counter 전역 상태 count 값을 0으로 초기화하는 버튼 컴포넌트

// counterSlice에서 reset(상태 count를 0으로) 액션 생성자 함수 가져오기
// reset: 액션 생성자 함수 -> 리셋 액션을 생성한다
import { reset } from "../store/counterSlice";

// useDispatch: 액션을 스토어에 전달(dispatch)하는 훅
// dispatch 함수를 사용하면 Redux 스토어에 액션을 보내서 상태를 변경할 수 있다
import { useDispatch } from "react-redux";

export default function CounterReset() {
  // dispatch 함수 가져오기
  // useDispatch 훅을 호출하면 dispatch 함수를 반환한다
  const dispatch = useDispatch();

  // 버튼 클릭 핸들러 함수
  function handleReset() {
    // 1. reset 액션 생성자 함수를 호출하여 액션 객체 생성
    //    액션 객체: { type: "counter/reset" }
    const action = reset();
    
    // 2. 생성된 액션을 콘솔에 출력 (디버깅용)
    console.log(action);
    
    // 3. dispatch 함수로 액션을 Redux 스토어에 전달
    //    스토어는 이 액션을 받아서 counterSlice의 reset 리듀서를 실행
    //    리듀서가 state.count = 0 으로 상태를 변경
    dispatch(action);
  }

  return (
    <div>
      {/* 
        onClick 이벤트에 함수 참조를 전달 (함수 호출 X)
        - handleReset: 올바름 (클릭 시 실행)
        - handleReset(): 잘못됨 (렌더링 시 즉시 실행)
      */}
      <button onClick={handleReset}>초기화</button>
    </div>
  );
}

/* 
  Redux 데이터 흐름:
  
  1. 사용자가 "초기화" 버튼 클릭
     ↓
  2. handleReset() 함수 실행
     ↓
  3. reset() 액션 생성자 함수 호출
     → 액션 객체 생성: { type: "counter/reset" }
     ↓
  4. dispatch(action)으로 스토어에 액션 전달
     ↓
  5. Redux 스토어가 counterSlice의 reset 리듀서 실행
     → state.count = 0
     ↓
  6. 전역 상태 업데이트
     ↓
  7. 상태를 구독하는 모든 컴포넌트 자동 리렌더링
     (예: Counter 컴포넌트가 새로운 count 값 0을 표시)
*/


