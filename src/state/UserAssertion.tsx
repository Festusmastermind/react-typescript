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
export const UserAssertion = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)  //this is called type assertion ..making sure its uses AuthUser obj..
    const handleLogin = () => {
        setUser({
            name: 'Vishwas', 
            email: 'festus@gmail.com'
        })
    }

    return (
        <div>
            <button onClick={handleLogin}>Login </button>   
            <div>User name is {user.name}</div>
            <div>User email is {user.email}</div> 
        </div>
        
    )
}