import React from "react";
import { isPropertyAccessChain } from "typescript";

type StatusProps = {
    status: "loading" | "success" | "error";  //this is called string literal union operator....to specify specific data expected.
};
export const Status = (props: StatusProps) => {

     let message //just declate the variabe message 
     if(props.status == 'loading'){
         message = 'Loading'
     }else if(props.status == 'success'){
         message = 'Data is fetched successfully'
     }else if(props.status == 'error'){
         message = 'Error fetching data'
     }

    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    );
};
