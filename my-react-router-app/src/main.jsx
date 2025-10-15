// src/main.jsx
// 애플리케이션의 진입점 (Entry Point)
// React 애플리케이션을 DOM에 렌더링하는 파일

// React 관련 import
// StrictMode: 개발 모드에서 잠재적인 문제를 찾아주는 도구
import { StrictMode } from "react";
// createRoot: React 18의 새로운 렌더링 API
import { createRoot } from "react-dom/client";

// CSS 파일 import (Tailwind CSS 포함)
import "./index.css";

// 라우터 설정 불러오기
// 모든 라우트 정보가 담긴 설정 객체
import router from "./router";

// 라우터 설정을 애플리케이션에 적용할 컴포넌트(Provider)
// RouterProvider: 라우터 설정을 React 컴포넌트 트리에 제공
import { RouterProvider } from "react-router-dom";

// React 애플리케이션을 DOM에 렌더링
// document.getElementById("root"): index.html의 root div 요소를 찾음
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* RouterProvider 배치 */}
    {/* router 속성 : 어떤 라우터 설정을 사용할 것이냐? */}
    {/* RouterProvider는 현재 URL에 맞는 컴포넌트를 자동으로 렌더링 */}
    <RouterProvider router={router} />
  </StrictMode>
);
