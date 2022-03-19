import { Children } from "react";

//declare the type of prop pass down in here
type HeadingProps = {
    children: string;
};

export const Heading = (props: HeadingProps) => {
    return (
        <div>
            <h2> {props.children}</h2>
        </div>
    );
};
