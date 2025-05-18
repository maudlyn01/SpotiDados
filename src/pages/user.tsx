import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { StatusBar } from "../components/networkTimeBar"
import { type UserProps } from "../types/allProps"


export const User = (user: UserProps) => {

    return (
        <div className="relative min-h-screen bg-black text-white">
            <StatusBar />
            <div className="bg-black">
                <Header />
                <main className="flex-1 p-8">
                    <h1 className="text-2xl font-bold mb-4">Perfil</h1>
                    <p className="font-semibold">
                         ID: {user.id}
                    </p>
                    <p className="font-semibold">
                        Nome: {user.name}
                    </p>
                    <p className="font-semibold">
                       Email: {user.email}
                    </p>

                </main>
                <Footer />
            </div>
        </div>

    )
}