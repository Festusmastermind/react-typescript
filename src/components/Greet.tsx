

type GreetProps = {
    name: string
    messageCount?: number   //Adding a question mark sign in from of the property makes it optional
    isLoggedIn: boolean
}


//we can destructured the props....straight 
export const Greet = ({name, messageCount, isLoggedIn}: GreetProps) => {
    //lets destructured out the messageCount and assigned a default value to it ..
    return (
        <div>
            <h2>
                {
                    isLoggedIn ? `Welcome ${name} You have ${messageCount} Unread messages` 
                    : 'Welcome Guest'
                }
            </h2>
        </div>
    );
};








/**
 * This is a brand new series of using Typescript with REact ....which gives 
 * static type checkig 
 * more structured code in terms of passing props down 
 * properties suggestions out of the box ..
 * NB: type or interface is almost same thing in declaring the object that consists of our prop data..
 * NB: TypeScript is very intersting ..inshort you are going to love very much than ordinary javascript 
 * once you get the hang of it ...
 */

