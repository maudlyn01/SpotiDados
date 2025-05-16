import { House, Book, MagnifyingGlass } from "phosphor-react";

export const Footer = () => {
  return (
    <>
      <footer>
        <nav className="text-amber-300 ">
          <div className="flex justify-around items-baseline-last">
            <Book size={32} />
            <House size={32} weight="fill" />
            <MagnifyingGlass size={32} />
          </div>
        </nav>
      </footer>
    </>
  );
};
