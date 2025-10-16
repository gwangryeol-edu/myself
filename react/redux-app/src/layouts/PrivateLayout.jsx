
// 이 레이아웃은 로그인 사용자만 접근 가능한 레이아웃
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateLayout() {
  const token = useSelector((state) => state.auth.token)
  
  if (!token) {
    return <Navigate to = "/login" replace></Navigate>
  } else {
    // 중첩된 자식 컴포넌트 렌더링
    return <Outlet></Outlet>
  }

}
