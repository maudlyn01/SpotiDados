import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { GetUsers } from '../data/userdata'
import { Navigation } from '../components/buttons'

export const Login = () => {
  //state for user register
  const navigate = useNavigate()

  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  //state for error
  const [errors, setErrors] = useState({
    identifier: '',
    password: '',
    general: '',
  })
  //state for user pass in all validatio and the router
  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser')
    if (currentUser) {
      navigate('/homeUser')
    }
  }, [navigate])
  
  //validation for register form, identifer and password error
  const validate = () => {
  const newErrors = {
    identifier: '',
    password: '',
    general: '',
  }
    if (!identifier.trim()) newErrors.identifier = 'Please enter your email or username'
    if (!password.trim()) newErrors.password = 'Password is required'

    setErrors(newErrors)
    return Object.values(newErrors).every((error) => error === '')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    const users = GetUsers()
    const foundUser = users.find(
      (u) =>
        (u.email === identifier || u.name === identifier) &&
        u.password === password
        
    );
    console.log(foundUser);

    //stage for remember and general error
    if (foundUser) {
      if (remember) {
        localStorage.setItem('currentUser', foundUser.username)
      }
      navigate('/homeUser')
    } else {
      setErrors((prev) => ({
        ...prev,
        general: 'Invalid credentials. Please check.',
      }))
    }
    console.log(identifier, password);

  }

   return (
    <div className='bg-surface min-h-screen'>

      <main className="flex-1">
        {errors.general && (
          <span className="text-error text-paragraph">{errors.general}</span>
        )}
        <img src="/img/Spoti.webp" alt="logo" className="logo m-auto" />      
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <section className="">
          <input
            type="text"
            placeholder="E-mail or username"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            className="input hover:bg-sky-800"
          />
      
        </section>
            {errors.identifier && (
            <span className="text-error text-paragraph">{errors.identifier}</span>
          )}

        <section>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input hover:bg-sky-800"
          />
        </section>
        {errors.password && (
            <span className="text-error text-paragraph">{errors.password}</span>
          )}
          

        <label className="flex items-center text-color gap-2 text-paragraph">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          Remenber User
        </label>

        

        <button
          type="submit"
          className="btn hover:bg-sky-800"
        >
          Login
        </button>
      </form>
    </main>
    <Navigation backTo='/home' />

  </div> 
  )
}