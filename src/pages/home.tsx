import { Header } from "../components/header";
import { Footer } from "../components/footer";
export const Home = () => {
  return (
    <>
      <div className="bg-black min-h-screen">
        <Header />
        <main className="  flex-1"></main>
        <Footer />
      </div>
    </>
  );
};
