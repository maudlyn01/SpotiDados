import { House, Book, MagnifyingGlass } from "phosphor-react";
export const Footer = () => {
  return (
    <>
      <footer className=" h-16 w-full bg-black text-sm text-white fixed bottom-0 left-0 z-50">
        <nav className="flex justify-around items-center h-full">
            <Book className="icon"/>
            <House weight="fill" className="icon" />
            <MagnifyingGlass className="icon" />
        </nav>
      </footer>
    </>
  );
};
