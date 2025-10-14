// RootLayout과 RootLayout의 중첩된 페이지 경로 배열을 정의

import RootLayout from "../../layout/RootLayout";
import Home from "../../pages/RootPages/Home";
import Profile from "../../pages/RootPages/Profile";
import About from "../../pages/RootPages/About";
import PostList from "../../pages/RootPages/PostList";
import PostDetail from "../../pages/RootPages/PostDetail";

import ProtectedLayout from "../../layout/ProtectedLayout";
import AuthLayout from "../../layout/AuthLayout";
import AuthHome from "../../pages/AuthPages/AuthHome";
import Login from "../../pages/AuthPages/Login";
import Signup from "../../pages/AuthPages/Signup";

import PATHS from "../../constant/path.js";

const rootRoutes = [
  {
    // 루트 레이아웃
    path: PATHS.ROOT.INDEX,
    Component: RootLayout,
    children: [
      {
        // index: true → 부모(/) 경로의 기본 페이지
        index: true,
        Component: Home,
      },
      {
        path: PATHS.ROOT.ABOUT,
        Component: About,
      },
      {
        path: PATHS.ROOT.POSTS,
        Component: PostList,
      },
      {
        path: PATHS.ROOT.POST_DETAIL,
        Component: PostDetail,
      },
      {
        // 보호된 경로 그룹
        Component: ProtectedLayout,
        children: [
          {
            path: PATHS.ROOT.PROFILE,
            Component: Profile,
          },
        ],
      },
    ],
  },
  // AuthLayout 경로 설정
  {
    path: PATHS.AUTH.INDEX,
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: AuthHome,
      },
      {
        path: PATHS.AUTH.LOGIN,
        Component: Login,
      },
      {
        path: PATHS.AUTH.SIGNUP,
        Component: Signup,
      },
    ],
  },
];

export default rootRoutes;
