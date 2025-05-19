import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <div className="p-5">
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
        </div>
      </header>
    </>
  );
};
