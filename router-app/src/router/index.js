// 페이지 컴포넌트
import Home from "../page/Home";
import About from "../page/About";
import Profile from "../page/Profile";

// React Router의 createBrowerRouter 불러오기
// createBrowerRouter 함수
// 라우터 설정을 생성하는 함수
// 라우터: 주소와 컴포넌트 메핑
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
    // element: <About /> // 레거시 코드
  },
  {
    path: "/profile",
    Component: Profile,
  },
]);
export default router;
