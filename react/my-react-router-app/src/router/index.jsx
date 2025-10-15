// src/router/index.jsx
// 메인 라우터 설정 파일
// 모든 라우트를 정의하고 RouterProvider에 전달

import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import NotFound from "../pages/RootPages/NotFound";

// 각 페이지 컴포넌트들을 import
import Home from "../pages/RootPages/Home";
import About from "../pages/RootPages/About";
import Profile from "../pages/RootPages/Profile";
import PostList from "../pages/RootPages/PostList";

// 라우터 설정
// createBrowserRouter: 브라우저의 History API를 사용하는 라우터
// 장점: URL이 깔끔함, 새로고침 시에도 상태 유지 가능
const router = createBrowserRouter([
  {
    // 루트 경로 "/"
    path: "/",
    // RootLayout 컴포넌트를 렌더링
    element: <RootLayout />,
    // 중첩 라우트들 (children)
    children: [
      {
        // index: true는 부모 경로와 동일한 경로를 의미
        // 즉, "/" 경로에서 Home 컴포넌트를 렌더링
        index: true,
        element: <Home />,
      },
      {
        // "/about" 경로에서 About 컴포넌트를 렌더링
        path: "about",
        element: <About />,
      },
      {
        // "/profile" 경로에서 Profile 컴포넌트를 렌더링
        path: "profile",
        element: <Profile />,
      },
      {
        // "/posts" 경로에서 PostList 컴포넌트를 렌더링
        path: "posts",
        element: <PostList />,
      },
    ],
    // 에러 처리: 정의되지 않은 경로로 접근했을 때 NotFound 컴포넌트를 렌더링
    errorElement: <NotFound />,
  },
]);

export default router;
