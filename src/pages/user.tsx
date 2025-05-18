import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { StatusBar } from "../components/networkTimeBar"


export const User = () => {
    return(
         <div className="relative min-h-screen bg-black text-white">
      <StatusBar />
      {<div className="bg-black">
            <Header />
            <Footer />
        </div>}
    </div>
        
    )
}