import { Navigation } from "../components/buttons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import type { ValidationProps } from "../types/allProps";
//import {  AddUsers } from "../data/userdata";

export const Register = () => {
  const navigate = useNavigate()
  //Props and form data for user
  const [formData, setFormData] = useState<ValidationProps>({
    name: '',
    surname:'',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  //catch error for validarion form
  const [errors, setErrors] = useState({
    name: '',
    surname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChenge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    console.log(formData)
  }

  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    //message for error 
    const newErrors = {
      name: '',
      surname: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    }

    //name,surname,username validation and error message
    if (!formData.name.trim()) newErrors.name = 'Required Name!'
    if (!formData.surname.trim()) {
      newErrors.surname = 'Required Surname!';}
    if (!formData.username.trim()) {
      newErrors.username = 'Required username!'
    } else if (!/^[a-zA-Z0-9_]{3,15}$/.test(formData.username)) {
      newErrors.username = 'Invalid username please insert (3-15 leter/numbers/_ )'
    }
    //email validation and error message
    if (!formData.email.trim()) {
      newErrors.email = 'Required Email!'
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Invalid email'
    }

    //password validation and error message
    if (!formData.password.trim()) {
      newErrors.password = 'Required password!'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Minimum 6 characters'
    }
    
    //confirm-password validation and error message
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match!'
    }

    setErrors(newErrors)

    const hasError = Object.values(newErrors).some((error) => error !== '')
    if (hasError)return;

    localStorage.setItem("currentUser", 
    JSON.stringify(formData.username));
    navigate("/homeUser");
  	return
  }



      
    /*const userData: ValidationProps = {
      name: formData.name,
      surname: formData.surname,
      username: formData.username,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    }
    
    AddUsers(userData)
    localStorage.setItem('currentUser', JSON.stringify(formData.username))
    navigate('/homeUser')*/
  

  return (
    <div className="bg-surface min-h-screen">
      <main className=" flex-1 gap-4 p-4 max-w-paragraph mx-auto">
        <img src="/img/Spoti.webp" alt="logo" className="logo m-auto" />      
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
          onChange={handleChenge}
          className="input hover:bg-sky-800"
        />
        {errors.name && <p className="text-error text-paragraph">{errors.name}</p>}

        <input
          type="text"
          name="surname"
          placeholder="Surname"
          value={formData.surname}
          onChange={handleChenge}
          className="input w-full hover:bg-sky-800"
          />
          {errors.surname && <p className="text-error text-paragraph">{errors.surname}</p>}

          <input type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChenge}
            className="input hover:bg-sky-800" 
          />
          {errors.username && <p className="text-error text-paragraph">{errors.username}</p>}

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChenge}
            className="input hover:bg-sky-800"
          />
          {errors.email && <p className="text-error text-paragraph">{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChenge}
            className="input hover:bg-sky-800"
          />
          {errors.password && <p className="text-error text-paragraph">{errors.password}</p>}

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChenge}
            className="input hover:bg-sky-800"
          />
          {errors.confirmPassword && <p className="text-error text-paragraph">{errors.confirmPassword}</p>}

          <button type="submit" className="btn hover:bg-sky-800">
            Register
          </button>
        </form>
      </main>
      <Navigation backTo="/home" />
    </div>
  )
}
