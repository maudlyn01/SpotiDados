
import { Footer } from "../components/footer"
import { Header } from "../components/header"

export const Register = () => {
    return(
        <div className="bg-black">
            <Header />
            <h2>Create new acount</h2>
            < input type="name" placeholder="name" />
            <input type="surname" placeholder="surname"/>
            <input type="username" placeholder="username"/>
            <input type="password" placeholder="Password"/>
            <input type="confirm password" placeholder="password"/>
            <img src="" alt="" />

            <button style={{width:"20px", height:"7px", borderRadius:"6px" }}>Registar</button>
            <p></p>
            <Footer />
        </div>
    )
}