import { ArrowRight, ArrowLeft } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


import { Header } from "../components/header";

import img from "/img/fingir.webp";
import img1 from "/img/iveth.webp";
import img2 from "/img/liza.webp";
import img3 from "/img/neyma.webp";
import img4 from "/img/ubakka.webp";
import img5 from "/img/capa_Ubaka.webp";
import img6 from "/img/Mr.-Bow-Vou-te-Amar-1.webp";
import img7 from "/img/capa4.webp";
import img8 from "/img/capa3.webp";
import imgInter1 from "/img/NICK.webp";
import imgInter2 from "/img/luan.webp";
import imgInter3 from "/img/perola.webp";
import imgInter4 from "/img/capa1.webp";
import imgInter5 from "/img/capa-ariana.webp";
import imgInter6 from "/img/capaMichel.webp";
export const Home = () => {
  const navigate = useNavigate();
  //section national
  const [currentIndex, setCurrentIndex] = useState(0);

  const image = [img, img1, img2, img3, img4, img5, img6, img7, img8];

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
  const images = [
    imgInter1,
    imgInter2,
    imgInter3,
    imgInter4,
    imgInter5,
    imgInter6,
  ];

  const nextSlides = () => {
    setCurrentsIndex((prevsIndex) => (prevsIndex + 1) % image.length);
  };

  const prevSlides = () => {
    setCurrentsIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % image.length
    );
  };
  return (
    <div className="bg-black min-h-screen p-5 items-center grid grid-cols-1">
      <Header />
      <main className=" flex-1">
        <div className="flex justify-end">
          <button className="btn" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="btn" onClick={() => navigate("/register")}>
            Register
          </button>
        </div>
        <br />
        <h4 className="text-white">National Artists</h4>
        <section className="card">
          <div>
            <img
              className="mx-auto"
              src={image[currentIndex]}
              alt={`Imagem ${currentIndex + 1}`}
            />
          </div>
        </section>
        <div className="flex justify-between">
          <button onClick={prevSlide}>
            <ArrowLeft className="btnNav" />
          </button>
          <button onClick={nextSlide}>
            <ArrowRight className="btnNav" />
          </button>
        </div>
        <br />
        <h4 className="text-white "> International Artists</h4>
        <section className="card">
          <div >
            <img
              className="mx-auto"
              src={images[currentsIndex]}
              alt={`Imagem ${currentsIndex + 1}`}
            />
          </div>
        </section>
        <div className="flex justify-between">
            <button onClick={prevSlides}>
              <ArrowLeft className="btnNav" />
            </button>
            <button onClick={nextSlides}>
              <ArrowRight className="btnNav" />
            </button>
          </div>
      </main>

    </div>
  
  );
};
