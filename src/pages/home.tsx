import { useNavigate } from "react-router-dom";

import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black p-16 min-h-screen flex">

      <Header />
      <main className="p-9 flex justify-end gap 4">
        <button className="btn" onClick={() => navigate("/login")}>login</button> <button className="btn" onClick={() => navigate("/register")}>sing-in</button>
        
      </main>
      <Footer />
    </div>
  );
};