import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { List, X } from "phosphor-react";

const isLoggedIn = true;

export const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { pathname } = useLocation();
  const modal = () => setModalOpen(!modalOpen);

  return (



    <header className="w-full px-4 py-2 bg-black text-sm text-white shadow-md mb-0 ">
      <div className="flex justify-between items-center">
        <img src="/img/Spoti.png" alt="" className="w-20 h-20 object-contain" />

        <button
          onClick={modal}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {modalOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>
      {modalOpen && (

        <nav className="flex flex-col items-center space-y-3 mt-4 md:hidden text-center">
          {/*<NavLink to="/" className="burguerMenu" onClick={modal}>
            Start
          </NavLink>*/}
          <NavLink to="/user" className="burguerMenu" onClick={modal}>
            My Profile
          </NavLink>
          <NavLink to="/HomeUser" className="burguerMenu" onClick={modal}>
            Home
          </NavLink>
           {isLoggedIn && pathname !== "/home" && (
          <NavLink to="/home" className="burguerMenu" onClick={modal}>
            Log Out
          </NavLink>
           )}

        </nav>
      )}
    </header>
  );
};
