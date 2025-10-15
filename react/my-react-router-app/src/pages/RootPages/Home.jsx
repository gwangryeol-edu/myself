// src/pages/RootPages/Home.jsx
// 홈페이지 컴포넌트
// 애플리케이션의 메인 페이지

// a태그를 대체하는 Link 컴포넌트
// Link 컴포넌트의 장점: 페이지 새로고침 없이 빠른 이동, 브라우저 히스토리 관리
import { Link } from "react-router-dom";

// 경로 상수 import
import PATHS from "../../constants/paths";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* 페이지 제목 */}
      <h1 className="font-bold text-4xl text-center mb-8 text-gray-800">
        React Router 학습 페이지
      </h1>
      
      {/* 소개 섹션 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          환영합니다! 🎉
        </h2>
        <p className="text-gray-600 mb-4">
          이 페이지는 React Router의 다양한 기능을 학습하기 위한 예제 페이지입니다.
        </p>
        
        <div className="space-y-2">
          <p className="text-sm text-gray-500">
            • <strong>라우팅</strong>: 여러 페이지 간의 이동
          </p>
          <p className="text-sm text-gray-500">
            • <strong>쿼리 파라미터</strong>: URL을 통한 상태 관리
          </p>
          <p className="text-sm text-gray-500">
            • <strong>중첩 라우트</strong>: 레이아웃과 페이지의 분리
          </p>
          <p className="text-sm text-gray-500">
            • <strong>에러 처리</strong>: 404 Not Found 페이지
          </p>
        </div>
      </div>
      
      {/* 네비게이션 링크들 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          페이지 탐색:
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* to 속성 : 어떤 주소로 이동할것인지? */}
          <Link 
            to={PATHS.HOME}
            className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
          >
            <span className="font-medium text-blue-800">🏠 홈</span>
            <p className="text-sm text-blue-600 mt-1">현재 페이지</p>
          </Link>
          
          <Link 
            to={PATHS.ABOUT}
            className="block p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
          >
            <span className="font-medium text-green-800">ℹ️ 소개</span>
            <p className="text-sm text-green-600 mt-1">애플리케이션 정보</p>
          </Link>
          
          {/* /profile 주소로 이동할 수 있는 Link 컴포넌트 작성 */}
          <Link 
            to={PATHS.PROFILE}
            className="block p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
          >
            <span className="font-medium text-purple-800">👤 사용자 정보</span>
            <p className="text-sm text-purple-600 mt-1">프로필 페이지</p>
          </Link>
          
          <Link 
            to={PATHS.POSTS}
            className="block p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors"
          >
            <span className="font-medium text-orange-800">📝 Post 목록</span>
            <p className="text-sm text-orange-600 mt-1">쿼리 파라미터 실습</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
