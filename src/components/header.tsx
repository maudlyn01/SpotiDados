import { useState } from "react";
import { NavLink } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";

export const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const modal = () => setModalOpen(!modalOpen);

  return (
    <header className="bg-black text-white p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold"><img src="logo.png" width={30} /></h1>
        <button
          onClick={modal}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {modalOpen ? <X size={20} /> : <List size={20} />}
        </button>
      </div>
      {modalOpen && (
        <nav className="flex flex-col space-y-3 mt-4 md:hidden center">
          <NavLink to="/" className="btn" onClick={modal}>Início</NavLink>
          <NavLink to="/login" className="btn" onClick={modal}>Login</NavLink>
          <NavLink to="/register" className="btn" onClick={modal}>Register</NavLink>
          <NavLink to="/Homelogin" className="btn" onClick={modal}>Homelogin</NavLink>
          <NavLink to="/history" className="btn" onClick={modal}>History</NavLink>
        </nav>
      )}
    </header>
  );
};
