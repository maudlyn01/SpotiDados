<<<<<<< HEAD

import { Footer } from "../components/footer"
import { Header } from "../components/header"

export const Register = () => {
    return(
        <div className="bg-black">
            <Header />
            <h2 style={{position:"relative", top:"189px", left:"150px"}}>Create new acount</h2>
            < input type="name" placeholder="name" style={{position:"relative", top:"1px", left:"350px", backgroundColor:"blue", borderRadius:"15px"}} />
            <input type="surname" placeholder="surname" style={{position:"relative", top:"50px", left:"170px" , backgroundColor:"white", borderRadius:"15px"}} />
            <input type="username" placeholder="username" style={{position:"relative", top:"112px", left:"px", backgroundColor:"brown", borderRadius:"15px" }}/>
            <input type="password" placeholder="Password" style={{position:"relative", top:"160px", right:"180px", backgroundColor:"brown", borderRadius:"15px"}}/>
            <input type="confirm password" placeholder="password"/>
            <img src="" alt="" />

            <button style={{ }}>Registar</button>
            <p></p>
            <Footer />
        </div>
    )
}
=======
const styleInput = "bg-white p-2 w-80";
export const Register = () => {
  return (
    <>
      <div className="bg-black">
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
>>>>>>> b59878be548c2709db4d1e817056b10684d02591
