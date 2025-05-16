import { House, Book, MagnifyingGlass } from "phosphor-react";

export const Footer = () => {
  return (
    <>
      <footer>
        <nav className=" text-white relative ">
          <div className="flex justify-around items-baseline-last mb-0 absolute inset-x-0 bootom-0 h-20">
            <Book size={32} />
            <House size={32} weight="fill" />
            <MagnifyingGlass size={32} />
          </div>
        </nav>
      </footer>
    </>
  );
};

