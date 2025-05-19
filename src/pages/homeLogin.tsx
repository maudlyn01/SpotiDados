import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Users } from "../data/userdata";
import { NavLink } from "react-router-dom";
import { User } from "phosphor-react";
import { useState } from "react";
import img from "/img/Anderson-Mario.jpg";
import img1 from "/img/edmazia.jpg";
import img2 from "/img/anselmo.png";
import img3 from "/img/Rihanna.jpg";
import img4 from "/img/neyma.jpg";
import img5 from "/img/levy.jpg";
import img6 from "/img/perola.jpg";
import img7 from "/img/ubakka.jpg";

export const Homelogin = () => {
  //section national
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img, img1, img2, img3];

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
  const image = [img4, img5, img6, img7];

  const nextSlides = () => {
    setCurrentsIndex((prevIndex) => (prevIndex + 1) % image.length);
  };

  const prevSlides = () => {
    setCurrentsIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % image.length
    );
  };

  //list user

  const listeUsers = Users.map((person) => (
    <NavLink to="/history">
      <li className="flex flex-colunm">
        <User className="icon" /> <b>{person.name}</b>
      </li>
    </NavLink>
  ));

  return (
    <>
      <div className="bg-black min-h-screen ">
        <Header />
        <main>
          <section className="m-10">
            <p className="text-white "> International Artists</p>

            <img
              src={images[currentIndex]}
              alt={`Imagem ${currentIndex + 1}`}
            />
            <div className="flex">
              <button onClick={prevSlide} className="btn ">
                Anterior
              </button>
              <button onClick={nextSlide} className="btn">
                Próximo
              </button>
            </div>
          </section>
          <section className="m-8">
            <p className="text-white "> National artists</p>
            <div>
              <img
                src={image[currentsIndex]}
                alt={`Imagem ${currentsIndex + 1}`}
              />
              <div className="flex">
                <button onClick={prevSlides} className="btn">
                  Anterior
                </button>
                <button onClick={nextSlides} className="btn">
                  Próximo
                </button>
              </div>
            </div>
          </section>
          <section className="card">
            <ul>{listeUsers}</ul>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};
