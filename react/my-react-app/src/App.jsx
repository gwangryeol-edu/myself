// import React from "react";
// import Interpolation from "./components/JSX/interpolation";
// import Rull from "./components/JSX/Rule";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// 컴포넌트 불러오기
import MyButton from "./components/Componet/MyButton";
import MyList from "./components/Componet/MyList";
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
      {/* 컴포넌트 사용 */}
      <MyList />
      <MyButton />
    </div>
  );
}

export default App;