// src/pages/RootPages/About.jsx
// 소개 페이지 컴포넌트
// 애플리케이션에 대한 정보를 표시

import { Link } from "react-router-dom";
import PATHS from "../../constants/paths";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* 페이지 제목 */}
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        React Router 소개
      </h1>
      
      {/* 소개 내용 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          이 애플리케이션에 대해
        </h2>
        
        <div className="space-y-4 text-gray-600">
          <p>
            이 애플리케이션은 <strong>React Router</strong>의 다양한 기능을 학습하기 위해 만들어진 예제입니다.
          </p>
          
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-700">
              주요 기능들:
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>라우팅</strong>: 여러 페이지 간의 이동</li>
              <li><strong>쿼리 파라미터</strong>: URL을 통한 상태 관리</li>
              <li><strong>중첩 라우트</strong>: 레이아웃과 페이지의 분리</li>
              <li><strong>에러 처리</strong>: 404 Not Found 페이지</li>
              <li><strong>경로 상수</strong>: 경로의 중앙 집중식 관리</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-700">
              학습 포인트:
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>useSearchParams 훅을 사용한 쿼리 파라미터 관리</li>
              <li>Link 컴포넌트를 사용한 네비게이션</li>
              <li>Outlet 컴포넌트를 사용한 중첩 라우트</li>
              <li>createBrowserRouter를 사용한 라우터 설정</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* 네비게이션 링크들 */}
      <div className="flex gap-4 justify-center">
        <Link 
          to={PATHS.HOME}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          홈으로 돌아가기
        </Link>
        <Link 
          to={PATHS.POSTS}
          className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Post 목록 보기
        </Link>
      </div>
    </div>
  );
}