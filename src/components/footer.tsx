import { House, Book, MagnifyingGlass } from "phosphor-react";
const stylebutton = "text-white p-2   gap-10] flex justify-around items-baseline-last mb-0 absolute inset-x-0 bootom-0 h-20";
export const Footer = () => {
  return (
    <>
      <footer>
        <nav className=" text-white ">
          <div className={stylebutton}>
            <Book size={32} />
            <House size={32} weight="fill" />
            <MagnifyingGlass size={32} />
          </div>
        </nav>
      </footer>
    </>
  );
};


