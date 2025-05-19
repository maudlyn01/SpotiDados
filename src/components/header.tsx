import { NavLink } from "react-router-dom";

const stylebutton = "text-white  flex flex-around  rounded-full";
export const Header = () => {
  return (
    <>
      <header>
        <div className="p-5">
          <button className={stylebutton}> All </button>
          <button className={stylebutton}> Data </button>

          <nav className="space-x-8 text-lg p-2 text-white">
            <NavLink to="/" className={stylebutton}>
              Início
            </NavLink>
            <NavLink to="/login" className={stylebutton}>
              Login
            </NavLink>

            <NavLink to="/register">Register</NavLink>

            <NavLink to="/user" className={stylebutton}></NavLink>
            <NavLink to="/Homelogin" className={stylebutton}>
              Homelogin
            </NavLink>
            <NavLink to="/history" className={stylebutton}>
              History
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};
