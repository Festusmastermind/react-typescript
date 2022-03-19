import React, { ReactHTML } from "react"

type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}


export const Input = (props: InputProps) => {
   
    //when processing the handleChange event inside the component we still specified the event type 
    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
    //we can use eithers ways to specified the event types...
    return (
        <div>
            <input type='text' value={props.value} onChange={props.handleChange} />
        </div>
    )
}

