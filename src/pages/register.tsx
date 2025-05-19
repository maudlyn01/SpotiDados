export const Register = () => {
  return (
    <>
      <div className="bg-black min-h-screen">
        <main>
          <img
            src="/img/logo.png"
            alt=""
            width={350}
            height={350}
            className="p-4 mx-auto"
          />
          <p>Create </p>
          <form className="flex flex-col p-5 items-center">
            <input type="text" placeholder="name" className="input" />
            <br />
            <input type="text" placeholder="surname" className="input" />
            <br />
            <input type="text" placeholder="username" className="input" />
            <br />
            <input type="email" placeholder="email" className="input" />
            <br />
            <input type="password" placeholder="password" className="input" />
            <br />
            <input
              type="password"
              placeholder="comfirm password"
              className="input"
            />
            <br />
            <button className="btn">Registar</button>
          </form>
        </main>
      </div>
    </>
  );
};
