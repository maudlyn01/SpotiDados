import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const LogOut = () => {
    const [, setUsername] = useState(''); // Definir estado para username
    const navigate = useNavigate()   
    
    useEffect(() => {
        const storedUser = localStorage.getItem('currentUser')
        if (storedUser) {
            setUsername(storedUser)
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('currentUser')
        setUsername('')
        navigate('/home')
    }

    return (
        <button className="btn hover: bg-sky-800 flex items-end" onClick={handleLogout}>
            Log-out
        </button>
    )
}