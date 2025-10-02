import axios from "axios";
const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];

//import.meta.env["VITE_TMDB_API_KEY"];

// axiosInstance 생성
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
  params: {
    language: "ko-KR",
  },
  timeout: 5000,
});

// 응답 인터셉터 설정
axiosInstance.interceptors.response.use(
  // 통신 성공 시
  (response) => {
    console.log("통신 성공 응답 인터셉타");
    return response.data;
  },
  // 통신 실패 시
  // 실패 응답
  (error) => {
    if (error.response) {
      const status = error.response.status;

      // 401 Unauthorized
      if (status === 401) {
        console.error("❌ 인증 오류: API 키가 잘못되었거나 권한이 없습니다.");
        alert("로그인이 필요하거나 API 키가 올바르지 않습니다.");
      } else if (status === 404) {
        console.error("❌ 페이지를 찾을 수 없음.");
        alert("페이지를 찾을 수 없습니다. 잠시 후 다시 시도해주세요.");
      }

      // 500 ~ 599 Server Error
      else if (status >= 500) {
        console.error("❌ 서버 오류: 잠시 후 다시 시도해주세요.");
        alert("서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.");
      } else {
        // 네트워크 오류 (response 자체가 없는 경우)
        console.error("❌ 네트워크 오류: 서버에 연결할 수 없습니다.");
        alert("네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.");
      }

      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
