import { House, Book, MagnifyingGlass } from "phosphor-react";
export const Footer = () => {
  return (
    <>
      <footer className="primary">
        <nav>
          <div className="flex justify-between align-bottom">
            <Book className="icon"/>
            <House weight="fill" className="icon" />
            <MagnifyingGlass className="icon" />
          </div>
        </nav>
      </footer>
    </>
  );
};


