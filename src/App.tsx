import { Greet } from "./components/Greet"
import { Person } from "./components/Person"
import { PersonList } from "./components/PersonList"
import { Status } from "./components/Status"
import { Heading } from "./components/Heading"
import { Oscar } from "./components/Oscar"
import { Button } from "./components/Button"
import { Input } from "./components/Input"
import { Container } from "./components/Container"
import { User } from "./state/User"
import { UserAssertion } from "./state/UserAssertion"
import "./App.css";
import { MutableRef } from "./ref/MutableRef"
import { Private } from "./auth/Private"
import { Profile } from "./auth/Profile"
import { GenericList } from "./generics/GenericList"
import { CustomButton } from "./html/Button"

function App() {
    const personName = {
        first: "Bruce",
        last: "Wayne",
    };

    const namesList = [
        {
            first: "Bruce", 
            last: "Wayne", 
        },
        {
            first: "James", 
            last: "Bond", 
        },
        {
            first: "JAckie", 
            last: "Chan", 
        },
    ]
    return (
        <div className="App">
        
            {/* <Greet name="Olasunkanmi" messageCount={10} isLoggedIn={false} />
            <Person name={personName} />
            <PersonList names={namesList} /> */}
            {/* <Status status="loading"/> */}
            {/* <Heading> This is heading children text</Heading>
            <Oscar>
                <Heading>Heading as a children to oscar Component</Heading>
            </Oscar>
            <Greet name='Festus' isLoggedIn={true} /> */}
            {/* <Button handleClick={(event, id)=>{console.log('Button clicked', event, id)}} /> */}
            {/* <Input value="" handleChange={(event) => console.log(event)} /> */}
            {/* <Container styles={{border: '1px solid black', padding: '1rem'}} /> */}
            {/* <User />*/}
            {/* <UserAssertion />  */}
            {/* {<MutableRef />} */}
            {/* <Private isLoggedIn={true} component={Profile}/> */}
            {/* <List items={['Batman', 'Superman', 'Wonderwoma']} onClick={(item)=>console.log(item)}/> */}
            {/* <GenericList 
            items={[
                {
                    id: 1, 
                    first: 'Bruce',
                    last: 'Wayne',
                },
                {
                    id: 1, 
                    first: 'Clark',
                    last: 'kent',
                },
                
        ]} onClick = {(item)=> console.log(item)} /> */}
        <CustomButton variant="primary" onClick={()=>console.log('clicked')} >
            Primary Button
        </CustomButton>
        </div>
    );
}

export default App;
