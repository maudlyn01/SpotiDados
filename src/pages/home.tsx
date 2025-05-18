import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { StatusBar } from "../components/networkTimeBar";

export const Home = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <StatusBar />
      <Header />
      <main className="flex-1">
        {/* coloque aqui o codigo de home */}
      </main>
      <Footer />
    </div>
  );
};
