import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "phosphor-react";
import { ArrowRight, ArrowLeft } from "phosphor-react";


import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Users } from "../data/userdata";
import { LogOut } from "../components/log-out-button";


import img from "/img/fingir.webp";
import img1 from "/img/iveth.webp";
import img2 from "/img/liza.webp";
import img3 from "/img/neyma.webp";
import img4 from "/img/capa_Ubaka.webp";
import img5 from "/img/Mr.-Bow-Vou-te-Amar-1.webp";
import imgInter1 from "/img/NICK.webp";
import imgInter2 from "/img/luan.webp";
import imgInter4 from "/img/capa_rihanna.webp";
//import { LogOut } from "../components/log-out-button";

export const HomeUser = () => {
  //section national
  const [currentIndex, setCurrentIndex] = useState(0);

  const image = [img, img1, img3, img2, img4, img5];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  //section international
  const [currentsIndex, setCurrentsIndex] = useState(0);
  const images = [imgInter1, imgInter2, imgInter4];

  const nextSlides = () => {
    setCurrentsIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlides = () => {
    setCurrentsIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  //list user
  const navigation = useNavigate();
  const listeUsers = Users.map((person) => (
    <li
      key={person.id}
      onClick={() => navigation("/history", { state: { user: person } })}
      className="flex flex-row cursor-pointer hover:text-sky-800 text-color"
    >
      <User className="icon" /> <b>{person.name}</b>
    </li>
  ));
  
  //a status to list the user after registration
  const navigate = useNavigate();
  const [user, setUser] = useState<{ name?: string, username?: string }>({});

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (!storedUser) {

      navigate('/homeUser');
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  

  return (
    <>
      <div className="bg-black min-h-screen  ">
        <Header />
        <main className="pb-20">
          <h5 className="text-link font-bold text-color">Welcome, {user.name || user.username}</h5>
          <LogOut />
          <section>
            <p className="text-color  font-bold"> International Artists</p>
            <div className="card">
              <img
                className="mx-auto"
                src={images[currentsIndex]}
                alt={`Imagem ${currentsIndex + 1}`}
              />
            </div>


            <div className="flex justify-between">
              <button onClick={prevSlides}>
                <ArrowLeft className="btnNav" />
              </button>
              <button onClick={nextSlides}>
                <ArrowRight className="btnNav" />
              </button>
            </div>
          </section>
          <section className="m-5 ">
            <p className="text-color font-bold"> National artists</p>
            <div className="card">
              <img
                className="mx-auto"
                src={image[currentIndex]}
                alt={`Imagem ${currentIndex + 1}`}
              />
              <div className="flex justify-between">
                <button onClick={prevSlide}>
                  <ArrowLeft className="btnNav" />
                </button>
                <button onClick={nextSlide}>
                  <ArrowRight className="btnNav" />
                </button>
              </div>
            </div>
          </section>
          <div className="mx-1">
            <p className="text-color m-2 font-bold "> Users</p>
            <section className="card">
              <ul>{listeUsers}</ul>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};
