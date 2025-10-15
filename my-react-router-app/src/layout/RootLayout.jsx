import React from "react";
import { Link } from "react-router-dom";

// Outlet 컴포넌트 불러오기
// Outlet: 중첩 라우트에서 자식 컴포넌트가 렌더링될 위치를 지정
import { Outlet } from "react-router-dom";

// 경로 상수 import
// 장점: 경로 변경 시 한 곳만 수정하면 됨, 오타 방지
import PATHS from "../constants/paths";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* 네비게이션 바 */}
      <div className="flex gap-4 p-4 bg-white shadow-md border-b-2 border-gray-300">
        {/* Link 컴포넌트: 페이지 이동을 위한 컴포넌트 */}
        {/* to 속성: 이동할 경로를 지정 */}
        <Link 
          to={PATHS.HOME}
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          홈페이지
        </Link>
        <Link 
          to={PATHS.ABOUT}
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          소개페이지
        </Link>
        <Link 
          to={PATHS.PROFILE}
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          사용자 정보 페이지
        </Link>
        <Link 
          to={PATHS.POSTS}
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          Post 목록 페이지
        </Link>
      </div>
      
      {/* Outlet 컴포넌트 : 중첩된 자식 컴포넌트가 위치할 구멍 */}
      {/* 이 위치에 현재 경로에 맞는 페이지 컴포넌트가 렌더링됨 */}
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
}
