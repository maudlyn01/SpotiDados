import { Navigation } from "../components/buttons";

export const Login = () => {
  return (
    <>
      <div className="bg-black min-h-screen">

      
        <main className="flex-1">
          <img src="/img/Spoti.png" alt="logo" className="p-4 mx-auto" />
          <p>Create </p>
          <form className="flex flex-col p-5 items-center">
            <input type="text" placeholder="username" className="input" /><br />
            <input type="email" placeholder="email" className="input" /><br />
            <input type="password" placeholder="password" className="input" /><br />
            <p className="text-color ml-7">Forgot Password?</p>
            <br />
            
            <button className="btn">
              Login
            </button>
          </form>
        </main>
        <Navigation backTo="/home" />
      </div>
    </>
  );
};
