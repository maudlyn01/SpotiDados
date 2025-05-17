const styleInput = "bg-white p-2 w-70 relative mx-auto  rounded-[15px]";
export const Login = () => {
    return(
        <>
             <div className="bg-black min-h-screen">
        <main>
          <img src="/img/logo.png" alt="" width={350} height={350}  className="p-4 mx-auto"/>
        <p>Create </p>
        <form className="flex flex-col p-5 items-center">
          <input type="text" placeholder="username" className={styleInput} /><br/>
          <input type="email"  placeholder="email"  className={styleInput}/><br/>
          <input type="password" placeholder="password" className={styleInput} /><br/>
          <p className="text-white">Esqueceu a Password?</p>
          <button className="bg-blue-500 p-2 m-4 flex rounded-full text-white">
            Login
          </button>
        </form>
        </main>
      </div>
        </>
        
    );
};