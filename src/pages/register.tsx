import { Navigation } from "../components/buttons";
import { useState } from "react";

import type { ValidationProps } from "../types/allProps";
import { AddUsers } from "../data/userdata";

export const Register = () => {
  const [formData, setFormData] = useState<ValidationProps>({
    name: '',
    surname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value } = e.target
    setFormData((prev) => ({...prev,[name]: value}))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    AddUsers(formData)
    alert("User registered successfully!")
    setFormData({name: '', surname: '', username: '', email: '', password: '', confirmPassword: '' })
  }
  
  return (
    <>
      <div className="bg-surface min-h-screen flex-1">
        <main className="p-2">
          <img src="/img/Spoti.png" alt="" className="logo m-auto " />
          <p>Create</p>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input type="text" 
              name="name"
              placeholder="Name"
              onChange={handleChange} 
              className="input" 
            />

            <br />

            <input type="text" 
              name="surname"
              placeholder="Surname"
              onChange={handleChange}
              className="input" 
            />

            <br />

            <input type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              className="input" 
            />

            <br />

            <input type="email"
              name="email"
              placeholder="email"
              onChange={handleChange}
              className="input" 
            />
            <br />

            <input type="password"
              name="password" 
              placeholder="Password"
              onChange={handleChange}
              className="input" 
            />

            <br />

            <input
              type="password"
              name="confirm Password"
              placeholder="confirm password"
              onChange={handleChange}
              className="input"
            />

            <br />

            <button
              type="submit"
              className="btn"
            >
              Register
            </button>
          </form>
        </main>
        <Navigation backTo="/home" />
      </div>
    </>
  );
};
