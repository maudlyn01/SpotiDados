import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { type UserProps } from "../types/allProps";

export const User = ({ id, name, email }: UserProps) => {
  return (
    <div className="relative min-h-screen bg-surface text-color">
      <div className="bg-surface">
        <Header />
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-bold mb-4">Perfil</h1>
          <p className="font-semibold">ID: {id}</p>
          <p className="font-semibold">Nome: {name}</p>
          <p className="font-semibold">Email: {email}</p>
        </main>
        <Footer />
      </div>
    </div>
  );
};
