const styleInput = "bg-white p-2 w-80";
export const Regiter = () => {
  return (
    <>
      <div>
        <img src="/img/logo.png" alt="" width={384} height={384} />
        <p>Create </p>
        <form className="flex flex-col p-5 items-center">
          <input type="text" placeholder="name" className={styleInput} />
          <br />
          <input type="text" placeholder="surname" className={styleInput} />
          <br />
          <input type="text" placeholder="username" className={styleInput} />
          <br />
          <input type="text" placeholder="password" className={styleInput} />
          <br />
          <input
            type="text"
            placeholder="comfirm password"
            className={styleInput}
          />
          <button className="bg-blue-500 p-2 m-4 flex rounded-full text-white">
            Registar
          </button>
        </form>
      </div>
    </>
  );
};
