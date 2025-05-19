import { NavLink } from "react-router-dom";
import { House, Book, MagnifyingGlass } from "phosphor-react";
const stylebutton =
  "text-white p-2 gap-10] flex justify-around items-baseline-last mb-0 absolute inset-x-0 bootom-0 h-20";
export const Footer = () => {
  return (
    <>
      <footer>
        <nav className=" text-white ">
          <div className={stylebutton}>
            <NavLink to="/" className="btn">
              <Book className="icon" />
            </NavLink>
            <NavLink to="/home" className="btn">
              <House className="icon" weight="fill" />
            </NavLink>
            <NavLink to="/" className="btn">
              <MagnifyingGlass className="icon" />
            </NavLink>
          </div>
        </nav>
      </footer>
    </>
  );
};
