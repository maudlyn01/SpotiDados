export const Login = () => {
    return(

        <div className="bg-black">
         
            <main>
                <div className="input-button ">
                    <input type="username" placeholder="username" />
                </div>
                <div>
                    <input type="email"  placeholder="email"/>
                </div>
                <div>
                    <input type="password" placeholder="password"/>
                </div>
                <div>
                    <button className="" type="submit">sig in</button>
                </div>
            </main>
        </div>
    )
}