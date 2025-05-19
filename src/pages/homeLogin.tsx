import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { User } from "phosphor-react";
import { ArrowRight, ArrowLeft } from "phosphor-react";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Users } from "../data/userdata";
import img from "/img/Anderson-Mario.jpg";
import img1 from "/img/edmazia.jpg";
import img2 from "/img/anselmo.png";
import img3 from "/img/Rihanna.jpg";
import img4 from "/img/iveth.jpeg";
import img5 from "/img/Laylizzy.jpeg";
import img6 from "/img/liza.jpg";
import img7 from "/img/fingir.jpg";

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
  const navigate=useNavigate();
  const listeUsers = Users.map((person) => (
      <li key={person.id}
        onClick={()=>navigate("/history",{state:{user:person}})}
        className="flex flex-row cursor-pointer hover:text-blue-400 text-white">
        
        <User className="icon" /> <b>{person.name}</b>
      </li>
  ));

  return (
    <>
      <div className="bg-black min-h-screen p-5 min-w-screen">
        <Header />
        <main className="pb-20">
          <section>
            <p className="text-white p-5 font-bold"> International Artists</p>
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
            <p className="text-white font-bold"> National artists</p>
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
            <p className="text-white m-2 font-bold "> Users</p>
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
