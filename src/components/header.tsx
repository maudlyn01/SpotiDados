import { NavLink } from "react-router-dom";

const stylebutton = "text-base  bg-sky-500 p-2 m-2 rounded-full gap-10 ";
export const Header = () => {
  return (
    <>
      <header>
        <div className="">
          <button className={stylebutton}>  User </button>
          <button className={stylebutton}>  All  </button>
          <button className={stylebutton}>  Data </button>

          <nav className="space-x-8 text-lg">
            <NavLink to="/">Início</NavLink>
            <NavLink to="/login">Login</NavLink>

            <NavLink to="/register">Register</NavLink>

            <NavLink to="/user">User</NavLink>

            <NavLink to="/history">History</NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};
