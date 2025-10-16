// 로그아웃 버튼
// 만약에 로그인을 한 상태라면 사용자 정보 출력
// 정산적으로 로그인을 했을 때 사용자 정보는 전역 상태 token에 저장되 상황
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 액션을 실행하기 윈한
// 액션 생성자 함수와 useDispatch 훅
import { logout } from "../store/authSlice";
import { useDispatch } from "react-redux";

export default function Profile() {
  // dispatch 함수 생성
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  // 로그인 검증 로직
  // 사용자 정보 관리 상태
  const [decodeToken, setDecodeToken] = useState(null);

  useEffect(() => {
    // 토큰이 있다면: 로그인을 했다면
    if (token) {
      setDecodeToken(jwtDecode(token));
    } else {
      // 로그인 상태가 아니라면 로그인 페이지로 보내기
      // navigate("/login");
    }
  }, [token]);

  // 로그아웃 :
  // 1. 서버에게 로그아웃 요청
  // 2. 클라이언트(유저)가 저장 중인 토큰 삭제
  function handleLogout() {
    // dispatch 함수로 logout 액션을 스토어 전달
    dispatch(logout());
    // 로그아웃이 정상적으로 성공했다면 token = null
  }

  console.log(decodeToken);
  return (
    <div>
      <div>{token ? token : "로그인을 해주세요"}</div>

      <div>{decodeToken ? `이메일 : ${decodeToken.email}` : ""}</div>

      <div>
        <button className="border-2" onClick={handleLogout}>
          로그아웃
        </button>
      </div>
    </div>
  );
}
