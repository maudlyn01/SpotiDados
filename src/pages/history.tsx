//import { Heart } from "@phosphor-icons/react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navigation } from "../components/buttons";
import { useLocation } from "react-router-dom";

export const History = () => {
  const location = useLocation();
  const user = location.state?.user;
  if (!user) {
    return (
      <div className="bg-black min-h-screen text-white p-5">
        <Header />
        <main className="flex-1 p-4">
          <Navigation backTo="/homelogin" />
          <p className="text-red-500">Usuário não encontrado.</p>
        </main>
        <Footer />
      </div>
    );
  }
  const nationalArtists = [
    { name: "Neyma", img: "./img/neyma.webp" },
    { name: "Ubaka", img: "./img/ubakka.webp" },
    { name: "Edmazia", img: "./img/edmazia.webp" },
    { name: "Perola", img: "./img/perola.webp" },
    { name: "Anderson Mario", img: "./img/Anderson-Mario.webp" },
    { name: "Anselmo", img: "./img/anselmo.webp" },
    { name: "Levy", img: "./img/levy.webp" },
    { name: "Rihanna", img: "./img/Rihanna.webp" },
  ];
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main className="flex-1 p-4 pb-20">
        <Navigation backTo="/homelogin" />
        <h2 className="text-white text-2xl font-bold mb-4 justify-center ">
          {" "}
          History of Musics
        </h2>
        <h2 className="text-blue-100 underline text-xl mb-4 font-semibold ">
          {user.name}
        </h2>

        <ol className="text-white space-y-4 ">
          {nationalArtists.map((artist) => (
            <li key={artist.name} className="flex items-center gap-4">
              <img
                src={artist.img}
                alt={artist.name}
                className="w-24 h-24 object-cover rounded"
              />
              <span className="text-lg">{artist.name}</span>
              <span className="text-gray-400"></span>
            </li>
          ))}
        </ol>
      </main>
      <Footer />
    </div>
  );
};
