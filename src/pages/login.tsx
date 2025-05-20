import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigation } from '../components/buttons'
import { GetUsers } from '../data/userdata'

export const Login = () => {
  const navigate = useNavigate()

  const [identifier, setIdentifier] = useState('') // username ou email
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!identifier.trim() || !password.trim()) {
      setError('All fields are required.')
      return
    }

    const users = GetUsers()

    const foundUser = users.find(
      (user) =>
        (user.email === identifier || user.name === identifier) &&
        user.password === password
    )

    if (foundUser) {
      localStorage.setItem('currentUser', foundUser.name)
      alert(`Bem-vindo, ${foundUser.name}!`)
      navigate('/homeUser')
    } else {
      setError('User does not exist')
    }
  }

  return (
    <div className="bg-surface min-h-screen ">
      <main className="p-2  flex-1">
        <img src="/img/Spoti.png" alt="logo" className="logo m-auto" />
        <br />
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
          <input
            type="text"
            placeholder="E-mail our Username"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            className="input"
          
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            
          />
          {error && <p className="text-red-400 mb-2">{error}</p>}
          <p className="text-paragraph text-color">Forgot Password?</p>
          <button
            type="submit"
            className="btn"
          >
            Login
          </button>
        </form>
      </main>

      <Navigation backTo="/home" />
    </div>
  )
}