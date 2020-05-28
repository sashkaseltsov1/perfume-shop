import React, {useEffect} from "react";
import SignIn from "./sign-in/sign-in";
import SignUp from "./sign-up/sign-up";

const Authentication = ()=>{
    useEffect(()=>{console.log('mounted')},[])
    return(
        <div>
            <SignIn />
            <SignUp />
        </div>
    )
};

export default Authentication;