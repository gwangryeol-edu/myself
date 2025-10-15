// src/layout/ProtectedLayout.jsx
// 보호된 레이아웃 컴포넌트
// 인증이 필요한 페이지들을 위한 레이아웃

import { Outlet } from "react-router-dom";

export default function ProtectedLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 보호된 페이지 헤더 */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h2 className="text-xl font-semibold text-gray-800">
              보호된 영역
            </h2>
            <div className="text-sm text-gray-500">
              🔒 인증이 필요한 페이지입니다
            </div>
          </div>
        </div>
      </div>
      
      {/* 보호된 페이지 내용 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Outlet />
      </div>
    </div>
  );
}