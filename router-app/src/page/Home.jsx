import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-4xl">Home</h1>

      <Link to="/">홈</Link><br />
      <Link to="/about">소개</Link> <br />
      <Link to="/profile">사용자 정보</Link>
    </div>
  );
}
