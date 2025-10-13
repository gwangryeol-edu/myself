// React Router의 createBrowserRouter 불러오기
// createBrowserRouter 함수
// 라우터 설정을 생성하는 함수
// 라우터 : 주소(URL)와 컴포넌트를 매핑
import { createBrowserRouter } from "react-router-dom";

// 레이아웃 컴포넌트 불러오기
import RootLayout from "../layout/RootLayout";
import AuthLayout from "../layout/AuthLayout.jsx";
import ProtectedLayout from "../layout/ProtectedLayout.jsx";

// 페이지 컴포넌트 불러오기
import Home from "../pages/RootPages/Home.jsx";
import About from "../pages/RootPages/About.jsx";
import Profile from "../pages/RootPages/Profile.jsx";

import AuthHome from "../pages/AuthPages/AuthHome.jsx";
import Signup from "../pages/AuthPages/Signup.jsx";
import Login from "../pages/AUthPages/Login.jsx";

// 라우터 설정 생성
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      // 중첩할 자식 경로 객체를 정의하는 배열
      {
        index: true, // index: true -> 부모 경로의 기본(root) 경로
        // 완성되는 path : "/" (부모 경로와 동일)
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        // path 속성 X
        Component: ProtectedLayout,
        // 보호할 경로와 컴포넌트 정의
        children: [
          {
            path: "profile",
            Component: Profile,
          },
        ],
      },
    ],
  },
  // AuthLayout 경로 설정
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: AuthHome,
      },
      // 로그인 경로(path)와 Component 설정
      {
        path: "login",
        Component: Login,
      },
      // 회원가입 경로(path)와 Component 설정
      {
        path: "signup",
        Component: Signup,
      },
    ],
  },
]);

export default router;
