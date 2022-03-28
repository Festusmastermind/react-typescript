import React from "react"

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id:number) => void
}
//when passing an button event action as a parameter we usee the inference type above..


export const Button = (props: ButtonProps) => {
    return <div>
        <button onClick={(event)=>props.handleClick(event, 1)}>Click</button>
    </div>
}