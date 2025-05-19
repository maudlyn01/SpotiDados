import { Heart } from "@phosphor-icons/react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { useLocation } from "react-router-dom";

export const History = () => {
    const location = useLocation();
    const user = location.state?.user;
    if (!user) {
        return (
            <div className="bg-black min-h-screen text-white p-5">
                <Header />
                <main className="flex-1 p-4">
                    <p className="text-red-500">Usuário não encontrado.</p>
                </main>
                <Footer />
            </div>
        );
    }

    const nationalArtists = [
        { name: "Neyma", img: "./img/neyma.jpg" },
        { name: "Ubaka", img: "./img/ubakka.jpg" },
        { name: "Edmazia", img: "./img/edmazia.jpg" },
        { name: "Perola", img: "./img/perola.jpg" },
    ];
    const internationalArtists = [
        { name: "Anderson Mario", img: "./img/Anderson-Mario.jpg" },
        { name: "Anselmo", img: "./img/anselmo.png" },
        { name: "Levy", img: "./img/levy.jpg" },
        { name: "Rihanna", img: "./img/Rihanna.jpg" },
    ];

    return (
        <div className="bg-black min-h-screen">
            <Header />
            <main className="flex-1 p-4 pb-20">
                <h2 className="text-white text-xl mb-4 ">{user.name} History</h2>
                <h2 className="text-white text-xl mb-4">National Artists</h2>
                <ol className="text-white space-y-4 ">
                    {nationalArtists.map((artist) => (
                        <li key={artist.name} className="flex items-center gap-4">
                            <img
                                src={artist.img}
                                alt={artist.name}
                                className="w-24 h-24 object-cover rounded"
                            />
                            <Heart size={24} color="white" weight="regular" />
                            <span className="text-lg">{artist.name}</span>
                        </li>
                    ))}
                </ol>
                <h2 className="text-white text-xl mb-4">International Artists</h2>
                <ol className="text-white space-y-4">
                    {internationalArtists.map((artist) => (
                        <li key={artist.name} className="flex items-center gap-4">
                            <img
                                src={artist.img}
                                alt={artist.name}
                                className="w-24 h-24 object-cover rounded"
                            />
                            <Heart size={24} color="white" weight="regular" />
                            <span className="text-lg">{artist.name}</span>
                        </li>
                    ))}
                </ol>
            </main>
            <Footer />
        </div>
    );
};
