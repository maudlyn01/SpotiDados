import { useNavigate } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { ArrowRight, ArrowLeft } from "phosphor-react";
import { useState } from "react";
import img from "/img/Anderson-Mario.jpg";
import img1 from "/img/edmazia.jpg";
import img2 from "/img/anselmo.png";
import img3 from "/img/Rihanna.jpg";
import img4 from "/img/neyma.jpg";
import img5 from "/img/levy.jpg";
import img6 from "/img/perola.jpg";
import img7 from "/img/ubakka.jpg";
export const Home = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img, img1, img6, img2, img3, img4, img5, img6, img7];
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <div className="bg-black min-h-screen p-5 items-center grid grid-cols-1">
      <Header />
      <main className="p-2 flex-1">
        <div className="flex justify-end">
          <button className="btn" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="btn" onClick={() => navigate("/register")}>
            Register
          </button>
        </div>
        <br />
        <section>
          <p className="text-white p-5"> International Artists</p>
          <img src={images[currentIndex]} alt={`Imagem ${currentIndex + 1}`} />
          <div className="flex justify-between">
            <button onClick={prevSlide}>
              <ArrowLeft className="btnNav" />
            </button>
            <button onClick={nextSlide}>
              <ArrowRight className="btnNav" />
            </button>
          </div>
        </section>
        <br />
        <br />

        <h4 className="text-white">National Artists</h4>

        <div className="card">
          <img src="/img/ubakka.jpg" alt="" className="" />
        </div>
        <div className="flex justify-between">
            <button onClick={prevSlide}>
              <ArrowLeft className="btnNav" />
            </button>
            <button onClick={nextSlide}>
              <ArrowRight className="btnNav" />
            </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};
