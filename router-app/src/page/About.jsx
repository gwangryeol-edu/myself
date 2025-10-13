import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1 className="font-bold text-4xl">about</h1>

      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-red-900 font-bold text-5xl" : ""
        }
      >
        홈
      </NavLink>
      <br />
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-red-900 font-bold text-5xl" : ""
        }
      >
        소개
      </NavLink>
      <br />
      <NavLink to="/profile">사용자 정보</NavLink>
    </div>
  );
}
