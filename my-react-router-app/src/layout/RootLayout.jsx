import React from "react";
import { Link, Outlet } from "react-router-dom";
import PATHS from "../constant/path";

export default function RootLayout() {
  return (
    <div>
      <div className="flex gap-4 p-2 border-2 border-gray-300">
        {/* PATHS 상수를 사용한 링크 설정 */}
        <Link to={PATHS.ROOT.INDEX}>홈페이지</Link>
        <Link to={PATHS.ROOT.ABOUT}>소개페이지</Link>
        <Link to={PATHS.ROOT.PROFILE}>사용자 정보 페이지</Link>
        <Link to="/auth">인증 페이지</Link>
      </div>

      {/* Outlet: 중첩된 자식 라우트가 렌더링될 자리 */}
      <Outlet />
    </div>
  );
}