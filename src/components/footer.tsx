import { House, Book, MagnifyingGlass,X } from "phosphor-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
   const allArtists = [
    { name: "Neyma", img: "./img/neyma.webp", music: "Arromba" },
    { name: "Ubaka", img: "./img/ubakka.webp", music: "Wene" },
    { name: "Lizha James", img: "./img/liza.webp", music: "É Obra" },
    { name: "Mr Bow", img: "./img/Mr.-Bow-Vou-te-Amar-1.webp", music: "Nr. 1" },
    { name: "Luan", img: "./img/luan.webp", music: "Eu Volto" },
    { name: "Nicky Minaj", img: "./img/NICK.webp", music: "Party" },
    { name: "Michel Jackson", img: "./img/capaMichel.webp", music: "Thriller" },
    { name: "Rihanna", img: "./img/capa_rihanna.webp", music: "Diamonds" },
  ];
  const [modalLibrary, setModalLibraryOpen] = useState(false);
  const toggleLibrary = () => setModalLibraryOpen(!modalLibrary);
    const [modalSearcher, setModalSearcherOpen] = useState(false);
  const toggleSearcher = () => setModalSearcherOpen(!modalSearcher);

  return (
    <>
      <footer className=" h-16 w-full bg-black text-sm text-white fixed bottom-0 left-10 z-50">
        <nav className="flex justify-between items-center h-full">
          <button
            onClick={toggleLibrary}
            className="md:hidden" 
            aria-label="Open Library">
            {modalLibrary ? <X size={40} /> : <Book size={40} />}
          </button>            
             {modalLibrary && (
        <div className="absolute bottom-10 -left-10 -right-10 bg-black p-4 z-40">
          <ol className="text-white space-y-4">
            {allArtists.map((artist) => (
              <li key={artist.name} className="flex items-center gap-4">
                <img
                  src={artist.img}
                  alt={artist.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div>
                  <span className="block text-lg">{artist.name}</span>
                  <span className="text-gray-400">{artist.music}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
         
          <NavLink to="/homeUser">
            <House weight="regular" className="icon" />
          </NavLink>
           <button 
           onClick={toggleSearcher} 
           className="burguerMenu"
            aria-label="Search...">
            {modalSearcher ? <X size={40} /> : <MagnifyingGlass size={40} />}
          </button>
          {modalSearcher && (
        <div className="fixed top-15 left-0 right-0 bg-black p-4 z-40 text-white">
          <input
            type="text"
            placeholder="Search Artist or Music..."
            className="w-full p-2 rounded bg-white text-black placeholder-blue-500"
          />
        </div>
      )}
        </nav>
      </footer>
    </>
  );
};
