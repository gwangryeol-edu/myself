// src/layout/AuthLayout.jsx
// 인증 레이아웃 컴포넌트
// 로그인, 회원가입 등 인증 관련 페이지들을 위한 레이아웃

import { Outlet, Link } from "react-router-dom";
import PATHS from "../constants/paths";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 인증 페이지 헤더 */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link 
              to={PATHS.HOME}
              className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
            >
              React Router App
            </Link>
            <div className="text-sm text-gray-500">
              🔐 인증 페이지
            </div>
          </div>
        </div>
      </div>
      
      {/* 인증 페이지 내용 */}
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}