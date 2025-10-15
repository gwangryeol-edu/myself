// src/pages/AuthPages/AuthHome.jsx
// 인증 홈페이지 컴포넌트
// 인증 관련 기능들의 메인 페이지

import { Link } from "react-router-dom";
import PATHS from "../../constants/paths";

export default function AuthHome() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        인증 시스템
      </h1>
      
      <p className="text-gray-600 mb-8">
        로그인하거나 새 계정을 만들어보세요.
      </p>
      
      <div className="space-y-4">
        <Link 
          to={PATHS.LOGIN}
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
        >
          로그인
        </Link>
        
        <Link 
          to={PATHS.SIGNUP}
          className="block w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
        >
          회원가입
        </Link>
      </div>
      
      <div className="mt-8">
        <Link 
          to={PATHS.HOME}
          className="text-blue-600 hover:text-blue-800 text-sm underline"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}