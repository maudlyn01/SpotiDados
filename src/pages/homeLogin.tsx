import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ArrowRight, ArrowLeft } from "phosphor-react";
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

  const images = [img, img1, img6, img2, img3];

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
  const image = [img4, img5, img7];

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
        <User className="iconUser" /> <b>{person.name}</b>
      </li>
    </NavLink>
  ));

  return (
    <>
      <div className="bg-black min-h-screen p-5 min-w-screen">
        <Header />
        <main>
          <section>
            <p className="text-white p-5"> National Artists</p>
            <img
              src={images[currentIndex]}
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
          </section>
          <section className="m-5 ">
            <p className="text-white "> National artists</p>
            <div>
              <img
                src={image[currentsIndex]}
                alt={`Imagem ${currentsIndex + 1}`}
              />
              <div className="flex justify-between">
                <button onClick={prevSlides}>
                  <ArrowLeft className="btnNav" />
                </button>
                <button onClick={nextSlides}>
                  <ArrowRight className="btnNav" />
                </button>
              </div>
            </div>
          </section>
          <div className="mx-1">
            <p className="text-white m-2"> Users</p>
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
