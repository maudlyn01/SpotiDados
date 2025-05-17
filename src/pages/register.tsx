
const styleInput = "bg-white p-2 w-70 relative  rounded-[15px]";
export const Register = () => {
  return (
    <>
      <div className="bg-black min-h-screen">
        <main>
          <img src="/img/logo.png" alt="" width={350} height={350}  className="p-4 mx-auto"/>
        <p>Create </p>
        <form className="flex flex-col p-5 items-center">
          <input type="text" placeholder="name" className={styleInput} /><br/>
          <input type="text" placeholder="surname" className={styleInput} /><br/>
          <input type="text" placeholder="username" className={styleInput} /><br/>
          <input type="email"  placeholder="email"  className={styleInput}/><br/>
          <input type="password" placeholder="password" className={styleInput} /><br/>
          <input type="password" placeholder="comfirm password" className={styleInput}/><br/>
          <button className="bg-blue-500 p-2 m-4 flex rounded-full text-white">
            Registar
          </button>
        </form>
        </main>
      </div>
    </>
  );
};

