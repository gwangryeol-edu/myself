// import React from "react";
// import Interpolation from "./components/JSX/interpolation";
// import Rull from "./components/JSX/Rule";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// 컴포넌트 불러오기
import MyButton from "./components/Componet/MyButton";
import MyList from "./components/Componet/MyList";
import OnClick from "./components/EventHandling/OnClick";
import OnChange from "./components/EventHandling/OnChange";
import OnSubmit from "./components/EventHandling/OnSubmit";
import Parent from "./components/props/Parent";
import Card from "./components/PropsFunction/Card";
// import CardContainer from "./components/PropsFunction/;
// import Container from "./components/State/Container";
import StateBasic from "./components/State/StateBasic";
import Container from "./components/StateAdvanced/Container"
import Form from "./components/StateAdvanced/Form";

// import MyButton from "./components/Component/MyButton";
// import MyList from "./components/Component/MyList";

// App 컴포넌트는 Header 컴포넌트와 Imterpolation 컴포넌트를 포함한다
// App 컴포넌트는 Header 컴포넌트와 Imterpolation 컴포넌트가 중첩했다
// export default function App() {
//   return (
//     <div>
//       <Header></Header>
//       <Interpolation></Interpolation>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      {/* OnClick 컴포넌트 실행(렌더링) */}
      {/* <OnClick />
      <OnChange />
      <OnSubmit /> */}
      {/* <Parent/> */}
      {/* <Card />
      <CardContainer/> */}
      {/* <Container />
      <StateBasic /> */}
      <Container />
      <Form></Form>
    </div>
  );
}

export default App;

// 구조 1. import 영역
// 구조 2. import Parent from './components/props/Parent';
// App 컴포import Container from './components/State/Container';

//  구조 2-1 내부 변수, 상태 함수 정의
//  구조 2-2 return(UI 변환)
// 구조 3. export 영역
