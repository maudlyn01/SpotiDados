import { NavLink } from "react-router-dom";

<<<<<<< HEAD
const stylebutton = "text-base  bg-sky-500 p-2 m-2 rounded-full gap-10 ";
=======
const stylebutton = "text-white   p-2 m-2   gap-10]";
>>>>>>> dev-geniamaria
export const Header = () => {
  return (
    <>
      <header>
        <div className="p-10" >
          <button className={stylebutton}>  User </button>
          <button className={stylebutton}>  All  </button>
          <button className={stylebutton}>  Data </button>

          <nav className="space-x-8 text-lg p-5">
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
