import { House, Book, MagnifyingGlass, List, X } from "phosphor-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modallibrary = () => setModalOpen(!modalOpen);
  const modalSeacher = () => setModalOpen(!modalOpen);

  return (
    <>
      <footer className=" h-16 w-full bg-black text-sm text-white fixed bottom-0 left-0 z-50">
        <nav className="flex justify-around items-center h-full">
          <NavLink to="modallibrary">
            <Book className="icon" onClick={modallibrary} />
            {modalOpen ? <X size={28} /> : <List size={28} />}
            {modalOpen && (
              <ol>
                <li>
                  <img />
                </li>
              </ol>
            )}
          </NavLink>
          <NavLink to="/home">
            <House weight="fill" className="icon" />
          </NavLink>
          <NavLink to="modalSeacher" className="burguerMenu">
            <MagnifyingGlass className="icon" onClick={modalSeacher} />
          </NavLink>
        </nav>
      </footer>
    </>
  );
};
