import { Name } from "./Person.types"



//define the type /interface for the props coming in 

// type PersonListProps = {
//     names: {
//         first: string, 
//         last: string, 
//     }[]  //this is how we specify array ...
// }

type PersonListProps = {
    names: Name[] 
}
export const PersonList = (props: PersonListProps) => {
    return (
        <div>
           { props.names.map( name=> {
               return (
                <h2 key={name.first}>
                    {name.first} {name.last}
                </h2>
               )
           })}
        </div>
    );
};
