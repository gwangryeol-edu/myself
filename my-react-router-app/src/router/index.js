// 페이지 컴포넌트 불러오기
import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
// React Router의 createBrowserRouter 불러오기
// createBrowserRouter 함수
// 라우터 설정을 생성하는 함수
// 라우터 : 주소(URL)와 컴포넌트를 매핑
import { createBrowserRouter } from "react-router-dom";

// 라우터 설정 생성
const router = createBrowserRouter([
  {
    path: "/", // 주소(URL)
    Component: Home, // 주소에 해당되는 컴포넌트
  },
  {
    path: "/about",
    Component: About, // Component 속성과 동일한 기능을 하지만 컴포넌트 이름이 아니라 컴포넌트 태그를 설정
  },
  // "/profile" 로 접근하면
  // Profile 컴포넌트를 표시하는 속성 작성
  {
    path: "/profile",
    Component: Profile,
  },
  {
    path: "/login",
    Component: Login,
  },
]);

export default router;
