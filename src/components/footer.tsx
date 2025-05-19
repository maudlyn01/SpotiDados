import { House, Book, MagnifyingGlass } from "phosphor-react";
export const Footer = () => {
  return (
    <>
      <footer className=" h-1 text-sm text-white">
        <nav>
          <div className="flex justify-between">
            <Book className="icon"/>
            <House weight="fill" className="icon" />
            <MagnifyingGlass className="icon" />

          </div>
        </nav>
      </footer>
    </>
  );
};
