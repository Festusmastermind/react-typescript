//using a file to manage to incoming PropTypes ..makes our code clean and manageable..

export type Name = {
    first: string
    last: string 
}

export type PersonProps = { 
    name: Name
}


// we can abstract the types below for re-usability and cleaner code approach....
// export type PersonProps = {
//     name: {
//         first: string;
//         last: string;
//     };
// };

