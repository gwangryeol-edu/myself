import { Navigate,useNavigate  } from "react-router-dom";

export default function Profile() {
  const isLogin = true;

  // 로그인 상태가 아니라면 "/"주소로 리다이렉트
  if (isLogin === false) {
    // replace: 브라우저 히스토리 스택에 기록되지 않음
    return <Navigate to="/" replace />;
  }

  const navigate = useNavigate();

  return (
    <div>
      사용자 정보
      {/* OnClick속성에서 Navigate 함수로 "/"이동 */}
      <button
        className="border p-2"
        onClick={() => {
          alert("홈페이지로 이동합니다.")
          navigate("/");
        }}
      >
        홈페이지로 이동
      </button>
    </div>
  );
}
