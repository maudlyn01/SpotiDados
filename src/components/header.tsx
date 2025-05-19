export const Header = () => {
  return (
    <>
      <header className="px-2 h-15 text-sm text-white flex items-center">
        <img src="/img/Spoti.png" alt="" className="w-20 h-20" />
        <p className="text-white text-2xl font-extrabold">SpotiDados</p>
      </header>
    </>
  );
};

/*
import { NavLink } from "react-router-dom";
<nav className="space-x-8 text-lg p-2 text-white">
            <NavLink to="/" className="btn">
              Início
            </NavLink>

            <NavLink to="/login" className="btn">
              Login
            </NavLink>

            <NavLink to="/register" className="btn">
              Register
            </NavLink>

            <NavLink to="/Homelogin" className="btn">
              Homelogin
            </NavLink>

            <NavLink to="/history" className="btn">
              History
            </NavLink>
          </nav>
*/ 