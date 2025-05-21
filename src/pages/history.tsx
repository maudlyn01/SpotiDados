import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navigation } from "../components/buttons";
import { useLocation } from "react-router-dom";

export const History = () => {
    const artists = [
        { name: "Neyma", img: "./img/neyma.webp", music: "Arromba" },
        { name: "Ubaka", img: "./img/ubakka.webp", music: "Wene" },
        { name: "Lizha James", img: "./img/liza.webp", music: "É Obra" },
        { name: "Mr Bow", img: "./img/Mr.-Bow-Vou-te-Amar-1.webp", music: "Nr. 1" },
        { name: "Luan", img: "./img/luan.webp", music: "Eu Volto" },
        { name: "Nicky Minaj", img: "./img/NICK.webp", music: "Party" },
        { name: "Michel Jackson", img: "./img/capaMichel.webp", music: "Thriller" },
        { name: "Rihanna", img: "./img/capa_rihanna.webp", music: "Diamonds" },
    ];
    const location = useLocation();
    const user = location.state?.user;
      if (!user) {
    return (
      <div className="bg-black min-h-screen text-white p-5">
        <Header />
        <main className="flex-1 p-4">
          <Navigation backTo="/homeUser" />
          <p className="text-red-500 text-lg font-semibold">
            Usuário não encontrado.
          </p>
        </main>
        <Footer />
      </div>
    );
  }

    return (
        <div className="bg-black min-h-screen text-color p-5">
            <Header />
            <main className="flex-1 p-4">
                <Navigation backTo="/homeUser" />
                <h2 className="text-white text-2xl font-bold mb-4 justify-center ">
                    {" "}
                    History of Musics
                </h2>
                <h2 className="text-blue-100 underline text-xl mb-4 font-semibold ">
                    {user.name}
                </h2>
                <ol className="text-white space-y-4 ">
                    {artists.map((artist) => (
                        <li key={artist.name} className="flex items-center gap-4">
                            <img
                                src={artist.img}
                                alt={artist.name}
                                className="w-24 h-24 object-cover rounded"
                            />
                            <span className="text-lg">{artist.name}</span>
                            <span className="text-gray-400"> - {artist.music}</span>
                        </li>
                    ))}
                </ol>{" "}
            </main>
            <Footer />
        </div>
    );
}

