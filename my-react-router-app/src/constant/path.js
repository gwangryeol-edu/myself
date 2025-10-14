const PATHS = {
  // root layout의 중첩된 경로
  // root layout의 중첩된 경로
  ROOT: {
    INDEX: "/",
    ABOUT: "/abouts",
    POSTS: "/posts",
    POST_DETAIL: "/posts/:postid", // 라우터 정의용 (그대로 유지)
    PROFILE: "/profile",

    // ✅ 실제 이동 시 사용할 동적 경로 생성 메서드
    getPostDetail: (postId) => `/posts/${postId}`,
  },
};

export default PATHS;
