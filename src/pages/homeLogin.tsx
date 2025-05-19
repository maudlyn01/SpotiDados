import { Header } from "../components/header";
import { Footer } from "../components/footer";
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
  return (
    <>
      <div className="bg-black min-h-screen min-w-screen">
        <Header />
        <main>
          <p className="text-white p-5"> Artitas Internacionais</p>
          <div className=" items-center p-5">
            <img
              src={images[currentIndex]}
              alt={`Imagem ${currentIndex + 1}`}
              width={150}
              height={150}
            />
            <button
              onClick={prevSlide}
              className="text-white bg-blue-500 rounder"
            >
              Anterior
            </button>
            <button onClick={nextSlide} className="text-white">
              Próximo
            </button>
          </div>
          <section>
            <p className="text-white p-5"> Artitas Nacionais</p>
            <div className=" items-center p-5">
              <img
                src={image[currentsIndex]}
                alt={`Imagem ${currentsIndex + 1}`}
                width={150}
                height={150}
              />
              <button onClick={prevSlides} className="text-white">
                Anterior
              </button>
              <button onClick={nextSlides} className="text-white">
                Próximo
              </button>
            </div>
          </section>
          <section className="">
            <p>
              <img />
            </p>
            <p>
              <img />
            </p>
            <p>
              <img />
            </p>
            <p>
              <img />
            </p>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};
