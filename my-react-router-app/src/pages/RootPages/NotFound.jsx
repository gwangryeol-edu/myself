// src/pages/RootPages/NotFound.jsx
// 404 Not Found 페이지 컴포넌트
// 존재하지 않는 경로로 접근했을 때 표시되는 페이지

import { Link } from "react-router-dom";
import PATHS from "../../constant/path";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        {/* 404 에러 코드 표시 */}
        <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
        
        {/* 에러 메시지 */}
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">
          페이지를 찾을 수 없습니다
        </h2>
        
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          <br />
          URL을 다시 확인해주세요.
        </p>
        
        {/* 홈으로 돌아가기 버튼 */}
        <div className="space-y-4">
          <Link 
            to={PATHS.HOME}
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            홈으로 돌아가기
          </Link>
          
          {/* 추가 네비게이션 링크들 */}
          <div className="flex justify-center gap-4 mt-6">
            <Link 
              to={PATHS.POSTS}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Post 목록
            </Link>
            <Link 
              to={PATHS.ABOUT}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              소개 페이지
            </Link>
            <Link 
              to={PATHS.PROFILE}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              사용자 정보
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
