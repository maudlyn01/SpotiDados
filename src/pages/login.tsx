import { useState } from "react";
import { Navigation } from "../components/buttons";

const bd= [{username:"chil", email:"mchil@gmail.com", password:"mamm"}];


export const Login = () => {

  const [username, setUsername] =useState("");
  const [email, setEmail] =useState("");
  const [password, setPassword] =useState("");

function validateField(e:React.FormEvent){
  e.preventDefault();
  

if (!username || !email || ! password){
  alert ("preencha os campos");
  return;
}
const foundUser=bd.find((user) => username===username && user.email===email && user.password===password);
if (foundUser){
  alert("sucess");

} else{
  alert( "input invalid")
}

if (!email.trim()){
  alert("email required");
  return;
}
if (!password.trim()){
  alert("password required");
  return;
} 
}

  return (
    <>
      <div className="bg-black min-h-screen">
        {/**<Navigation backTo="/home" /> */}
        
       

        <main>
           <Navigation backTo="/home" />
          <img src="/img/Spoti.png" alt="logo" className="p-4 mx-auto" />
          <p>Create </p>
          <form className="flex flex-col p-5 items-center" onSubmit={validateField}>
            <input type="text" placeholder="username" className="input" value={username} onChange={(ev) => setUsername(ev.target.value)}/><br />
            <input type="email" placeholder="email" className="input"  value={email} onChange={(ev) => setEmail(ev.target.value)}/><br />
            <input type="password" placeholder="password" className="input" value={password} onChange={(ev) => setPassword(ev.target.value)}/><br />
            <p className="text-white">Forgot Password?</p>
            <br />
            <button type="submit" className="btn" >
              Login
            </button>

          </form>
        </main>
      </div>
    </>
  );
};