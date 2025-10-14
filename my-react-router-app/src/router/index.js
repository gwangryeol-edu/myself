// React Router의 createBrowserRouter 불러오기
// createBrowserRouter 함수
// 라우터 설정을 생성하는 함수
// 라우터 : 주소(URL)와 컴포넌트를 매핑
import { createBrowserRouter } from "react-router-dom";

// 레이아웃 컴포넌트 불러오기
import DummyLayout from "../layout/DummyLayout.jsx";

// DummyJSON 실습 페이지 컴포넌트
import Carts from "../pages/DummyPages/Carts.jsx";
import Posts from "../pages/DummyPages/Posts.jsx";
import Products from "../pages/DummyPages/Products.jsx";
import ProductDetail from "../pages/DummyPages/ProductDetail.jsx";
import DummyHome from "../pages/DummyPages/DummyHome.jsx";

// 경로 상수 불러오기
import PATHS from "../constant/path.js"; // ✅ 오타 수정 (constants → constant)

// ✅ rootRoutes 불러오기
import rootRoutes from "./routes/rootRoutes.js";
import authRoutes from "./routes/authRoutes.js";
// ✅ createBrowserRouter에 스프레드 연산자로 병합
const router = createBrowserRouter([
  ...rootRoutes, // Root + Auth 라우트 설정 복사
  ...authRoutes,
  // DummyJSON 라우트 설정 추가
  {
    path: "/dummy",
    Component: DummyLayout,
    children: [
      {
        index: true,
        Component: DummyHome,
      },
      {
        path: "carts",
        Component: Carts,
      },
      {
        path: "posts",
        Component: Posts,
      },
      {
        path: "products",
        Component: Products,
      },
      {
        // 부모 경로 : /dummy (절대 경로 표현)
        // 자식 경로 : products/:productId (상대 경로 표현)
        // 완성 경로 : /dummy/products/:productId
        path: "product/:productId",
        Component: ProductDetail,
      },
    ],
  },
]);

export default router;
