// src/pages/RootPages/Profile.jsx
// 사용자 정보 페이지 컴포넌트
// 사용자의 프로필 정보를 표시 (예제용)

import { Link } from "react-router-dom";
import PATHS from "../../constants/paths";

export default function Profile() {
  // 예제 사용자 데이터 (실제로는 API에서 가져올 데이터)
  const userInfo = {
    name: "홍길동",
    email: "hong@example.com",
    joinDate: "2024년 1월 1일",
    postsCount: 15,
    likesCount: 42,
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* 페이지 제목 */}
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        사용자 정보
      </h1>
      
      {/* 사용자 정보 카드 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center mb-6">
          {/* 프로필 아바타 (예제) */}
          <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-6">
            {userInfo.name.charAt(0)}
          </div>
          
          {/* 기본 정보 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {userInfo.name}
            </h2>
            <p className="text-gray-600">{userInfo.email}</p>
          </div>
        </div>
        
        {/* 상세 정보 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">가입일</h3>
            <p className="text-gray-600">{userInfo.joinDate}</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">작성한 게시글</h3>
            <p className="text-gray-600">{userInfo.postsCount}개</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">받은 좋아요</h3>
            <p className="text-gray-600">{userInfo.likesCount}개</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">활동 상태</h3>
            <p className="text-green-600 font-medium">활성</p>
          </div>
        </div>
      </div>
      
      {/* 액션 버튼들 */}
      <div className="flex gap-4 justify-center">
        <Link 
          to={PATHS.POSTS}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          내 게시글 보기
        </Link>
        <Link 
          to={PATHS.HOME}
          className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}