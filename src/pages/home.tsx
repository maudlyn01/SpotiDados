import { useNavigate } from "react-router-dom";

import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-black p-16 min-h-screen">
      <Header />

      <main className="flex flex-1">
        <button className="btn" onClick={() => navigate("/login")}>login</button>
        <button className="btn" onClick={() => navigate("/register")}>sing-in</button>
        <img src="/img/logo1.png" alt="" />
      </main>
      <Footer />
    </div>
    
  );
};