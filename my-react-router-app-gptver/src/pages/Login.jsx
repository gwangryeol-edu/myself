// pages/Login.jsx
import { useNavigate } from "react-router-dom";
import useAuth from "../../src/hooks/useAuth";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // 실제 프로젝트에서는 API 요청 후 토큰 저장
    const dummyToken = "abcd1234";
    login(dummyToken);

    alert("로그인 성공!");
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-[70vh]">
      <h2 className="text-2xl font-bold mb-4">🔐 로그인 페이지</h2>
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-3 w-72 border p-6 rounded-lg shadow"
      >
        <input
          type="text"
          placeholder="아이디"
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          로그인
        </button>
      </form>
    </div>
  );
}