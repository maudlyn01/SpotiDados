import { useNavigate } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen p-5 items-center grid grid-cols-1">
      <Header />
      
      <main className="flex-1 p-4 ">

        <div className="flex justify-end">
          <button className="btn" onClick={() => navigate("/login")}>Login</button>
          <button className="btn" onClick={() => navigate("/register")}>Register</button>
        </div>
        <br />
        <h4 className="text-white">International Artists</h4>
        <div className="card" >
          <img src="/img/levy.jpg" alt="" className="card " />

        </div>
        <br />
        <br />

        <h4 className="text-white">National Artists</h4>

        <div className="card">
          <img src="/img/ubakka.jpg" alt="" className="card " />
        </div>


      </main>
      <Footer />
    </div>

  );
};