import { useState } from "react";

type AuthUser = {
    name: string
    email: string 
}
/**
 * 
 * an important key to note here is what we called type inference 
 * type inference: is the ability of typescript to determine the data-type of the variable or states used by default..
 */
export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null)  //explicitly tell typescript that the user is either of Authuser object or null.
    const handleLogin = () => {
        setUser({
            name: 'Vishwas', 
            email: 'festus@gmail.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login </button>   
            <button onClick={handleLogout}>Logout</button> 
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div> 
        </div>
        
    )
}