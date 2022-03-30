import { Login } from "./Login"
import { ProfileProps } from "./Profile"

type PrivateProps = {
    isLoggedIn: boolean
    component: React.ComponentType<ProfileProps>
}
//you can always specify or rename how your prop should be used in your code ..e.g renaming component as Component.
export const Private = ({isLoggedIn, component: Component}: PrivateProps) => {
    if(isLoggedIn){
        return <Component name="Olasunkanmi"/> //Returning the Profile component and passing the props needed...
    }else{
        return <Login />
    }
}