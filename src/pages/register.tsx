
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