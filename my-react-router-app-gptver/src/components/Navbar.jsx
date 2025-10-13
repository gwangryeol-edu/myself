// components/Navbar.jsx
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const baseClass =
    "px-4 py-2 rounded-md text-gray-600 hover:text-blue-500 hover:bg-blue-50 transition-colors";
  const activeClass = "text-blue-600 font-semibold bg-blue-100";

  return (
    <nav className="flex gap-4 p-4 bg-gray-50 border-b">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? `${baseClass} ${activeClass}` : baseClass
        }
      >
        홈
      </NavLink>

      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive ? `${baseClass} ${activeClass}` : baseClass
        }
      >
        상품
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? `${baseClass} ${activeClass}` : baseClass
        }
      >
        문의
      </NavLink>
    </nav>
  );
}