// AuthLayout과 AuthLayout의 중첩된 페이지 경로 배열을 정의

// ✅ Auth 관련 레이아웃 및 페이지 컴포넌트 불러오기
import AuthLayout from "../../layout/AuthLayout";
import AuthHome from "../../pages/AuthPages/AuthHome";
import Login from "../../pages/AuthPages/Login";
import Signup from "../../pages/AuthPages/Signup";

// ✅ 경로 상수 불러오기
// import PATHS from "../../constants/paths.js";
import PATHS from "../../constants/paths";

// ✅ Auth 전용 라우트 배열 정의
const authRoutes = [
  {
    // AuthLayout 루트 경로
    path: PATHS.AUTH.INDEX,
    Component: AuthLayout,
    children: [
      {
        // /auth → AuthHome
        index: true,
        Component: AuthHome,
      },
      {
        // /auth/login
        path: PATHS.AUTH.LOGIN,
        Component: Login,
      },
      {
        // /auth/signup
        path: PATHS.AUTH.SIGNUP,
        Component: Signup,
      },
    ],
  },
];

// ✅ 라우트 배열 내보내기
export default authRoutes;
