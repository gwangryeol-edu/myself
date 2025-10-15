// src/constants/paths.js
// 경로 상수 정의
// 애플리케이션에서 사용하는 모든 경로를 한 곳에서 관리
// 장점: 경로 변경 시 한 곳만 수정하면 됨, 오타 방지, 자동완성 지원

// ========================================
// 기본 경로들 (Root Routes)
// ========================================
export const HOME = "/";
export const ABOUT = "/about";
export const PROFILE = "/profile";
export const AUTH = "/auth";

// ========================================
// Post 관련 경로들
// ========================================
export const POSTS = "/posts";
export const POST_DETAIL = "/posts/:id"; // 동적 라우트 (id는 파라미터)
export const POST_CREATE = "/posts/create"; // 게시글 작성
export const POST_EDIT = "/posts/:id/edit"; // 게시글 수정

// ========================================
// 인증 관련 경로들
// ========================================
export const LOGIN = "/auth/login";
export const SIGNUP = "/auth/signup";
export const FORGOT_PASSWORD = "/auth/forgot-password"; // 비밀번호 찾기
export const RESET_PASSWORD = "/auth/reset-password"; // 비밀번호 재설정

// ========================================
// DummyJSON 관련 경로들
// ========================================
export const DUMMY = "/dummy";
export const DUMMY_CARTS = "/dummy/carts";
export const DUMMY_POSTS = "/dummy/posts";
export const DUMMY_PRODUCTS = "/dummy/products";
export const DUMMY_PRODUCT_DETAIL = "/dummy/products/:productId";
export const DUMMY_USERS = "/dummy/users";
export const DUMMY_USER_DETAIL = "/dummy/users/:userId";

// ========================================
// 관리자 관련 경로들 (예제)
// ========================================
export const ADMIN = "/admin";
export const ADMIN_DASHBOARD = "/admin/dashboard";
export const ADMIN_USERS = "/admin/users";
export const ADMIN_SETTINGS = "/admin/settings";

// ========================================
// API 관련 경로들 (예제)
// ========================================
export const API_BASE = "/api";
export const API_POSTS = "/api/posts";
export const API_USERS = "/api/users";
export const API_AUTH = "/api/auth";

// ========================================
// 중첩 구조로도 export (기존 코드와의 호환성을 위해)
// ========================================
const PATHS = {
  // 기본 경로들
  HOME,
  ABOUT,
  PROFILE,
  AUTH,
  
  // Post 관련
  POSTS,
  POST_DETAIL,
  POST_CREATE,
  POST_EDIT,
  
  // 인증 관련
  LOGIN,
  SIGNUP,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  
  // DummyJSON 관련
  DUMMY,
  DUMMY_CARTS,
  DUMMY_POSTS,
  DUMMY_PRODUCTS,
  DUMMY_PRODUCT_DETAIL,
  DUMMY_USERS,
  DUMMY_USER_DETAIL,
  
  // 관리자 관련
  ADMIN,
  ADMIN_DASHBOARD,
  ADMIN_USERS,
  ADMIN_SETTINGS,
  
  // API 관련
  API_BASE,
  API_POSTS,
  API_USERS,
  API_AUTH,
  
  // 중첩 구조 (기존 코드 호환성)
  ROOT: {
    INDEX: HOME,
    ABOUT: ABOUT,
    PROFILE: PROFILE,
    POSTS: POSTS,
    POST_DETAIL: POST_DETAIL,
    POST_CREATE: POST_CREATE,
    POST_EDIT: POST_EDIT,
  },
  AUTH: {
    INDEX: AUTH,
    LOGIN: LOGIN,
    SIGNUP: SIGNUP,
    FORGOT_PASSWORD: FORGOT_PASSWORD,
    RESET_PASSWORD: RESET_PASSWORD,
  },
  DUMMY_ROUTES: {
    INDEX: DUMMY,
    CARTS: DUMMY_CARTS,
    POSTS: DUMMY_POSTS,
    PRODUCTS: DUMMY_PRODUCTS,
    PRODUCT_DETAIL: DUMMY_PRODUCT_DETAIL,
    USERS: DUMMY_USERS,
    USER_DETAIL: DUMMY_USER_DETAIL,
  },
  ADMIN_ROUTES: {
    INDEX: ADMIN,
    DASHBOARD: ADMIN_DASHBOARD,
    USERS: ADMIN_USERS,
    SETTINGS: ADMIN_SETTINGS,
  },
  API_ROUTES: {
    BASE: API_BASE,
    POSTS: API_POSTS,
    USERS: API_USERS,
    AUTH: API_AUTH,
  },
};

// ========================================
// 유틸리티 함수들
// ========================================

/**
 * 동적 라우트에서 파라미터를 실제 값으로 치환하는 함수
 * @param {string} path - 동적 라우트 경로 (예: "/posts/:id")
 * @param {object} params - 파라미터 객체 (예: { id: "123" })
 * @returns {string} - 실제 경로 (예: "/posts/123")
 * 
 * 사용 예시:
 * const postPath = buildPath(PATHS.POST_DETAIL, { id: "123" });
 * // 결과: "/posts/123"
 */
export const buildPath = (path, params = {}) => {
  let result = path;
  Object.entries(params).forEach(([key, value]) => {
    result = result.replace(`:${key}`, value);
  });
  return result;
};

/**
 * 현재 경로가 특정 패턴과 일치하는지 확인하는 함수
 * @param {string} currentPath - 현재 경로
 * @param {string} pattern - 확인할 패턴
 * @returns {boolean} - 일치 여부
 * 
 * 사용 예시:
 * const isPostDetail = matchPath("/posts/123", PATHS.POST_DETAIL);
 * // 결과: true
 */
export const matchPath = (currentPath, pattern) => {
  const regex = new RegExp(pattern.replace(/:\w+/g, '[^/]+'));
  return regex.test(currentPath);
};

/**
 * 경로가 보호된 경로인지 확인하는 함수
 * @param {string} path - 확인할 경로
 * @returns {boolean} - 보호된 경로 여부
 */
export const isProtectedPath = (path) => {
  const protectedPaths = [
    PATHS.PROFILE,
    PATHS.POST_CREATE,
    PATHS.POST_EDIT,
    PATHS.ADMIN,
    PATHS.ADMIN_DASHBOARD,
    PATHS.ADMIN_USERS,
    PATHS.ADMIN_SETTINGS,
  ];
  
  return protectedPaths.some(protectedPath => 
    matchPath(path, protectedPath)
  );
};

/**
 * 경로가 관리자 전용 경로인지 확인하는 함수
 * @param {string} path - 확인할 경로
 * @returns {boolean} - 관리자 전용 경로 여부
 */
export const isAdminPath = (path) => {
  return path.startsWith(PATHS.ADMIN);
};

export default PATHS;