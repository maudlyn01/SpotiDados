import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { GetUsers, SaveSession } from '../data/userdata'
import { Navigation } from '../components/buttons'

export const Login = () => {

  useEffect(() => {
  const users = localStorage.getItem('users')
  if (!users) {
    const defaultUsers = [
      {
        name: "Chilzia",
        surname: "Macamo",
        username: "chilzia",
        email: "chilzia@gmail.com",
        password: "123456",
        confirmPassword: "123456",
      },
      {
        name: "Gabriel",
        surname: "Cuna",
        username: "gabriel",
        email: "gabriel@gmail.com",
        password: "123456",
        confirmPassword: "123456",
      }
    ]
    localStorage.setItem('users', JSON.stringify(defaultUsers))
  }
  }, [])

  const navigate = useNavigate()
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const [errors, setErrors] = useState({
    identifier: '',
    password: '',
    general: '',
  })

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser')
    if (currentUser) {
      navigate('/homeUser')
    }
  }, [navigate])

  const validate = () => {
    const newErrors = { identifier: '', password: '', general: '' }
    if (!identifier.trim()) newErrors.identifier = 'Please enter email or username'
    if (!password.trim()) newErrors.password = 'Password is required'
    setErrors(newErrors)
    return Object.values(newErrors).every((err) => err === '')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const users = GetUsers()
    const foundUser = users.find(
      (u) =>
        (u.email === identifier.trim() || u.username === identifier.trim()) &&
        u.password === password.trim()
    )

    if (foundUser) {
      SaveSession(foundUser)
      if (remember) {
        localStorage.setItem('rememberedUser', JSON.stringify(foundUser))
      }
      navigate('/homeUser')
    } else {
      setErrors((prev) => ({
        ...prev,
        general: 'Invalid credentials. Try again.',
      }))
    }
  }

  return (
    <div className="bg-surface min-h-screen">
      <main className="flex-1">
        {errors.general && (
          <span className="text-error text-paragraph">{errors.general}</span>
        )}
        <img src="/img/Spoti.webp" alt="logo" className="logo m-auto" />
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <section>
            <input
              type="text"
              placeholder="E-mail or username"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="input hover:bg-sky-800"
            />
            {errors.identifier && (
              <span className="text-error text-paragraph">{errors.identifier}</span>
            )}
          </section>


          <section>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input hover:bg-sky-800"
            />
            {errors.password && (
              <span className="text-error text-paragraph">{errors.password}</span>
            )}
          </section>


          <label className="flex items-center text-color gap-2 text-paragraph">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Remember Me
          </label>

          <button type="submit" className="btn hover:bg-sky-800">
            Login
          </button>
        </form>
      </main>
      <Navigation backTo="/home" />
    </div>
  )
}