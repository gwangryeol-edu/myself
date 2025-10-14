import React from "react";
import { Link } from "react-router-dom";

// Outlet 컴포넌트 불러오기
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ marginRight: "10px" }}>홈페이지</Link>
        <Link to="/posts" style={{ marginRight: "10px" }}>Post 목록 페이지</Link>
      </div>
      {/* Outlet 컴포넌트 : 중첩된 자식 컴포넌트가 위치할 구멍 */}
      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}
