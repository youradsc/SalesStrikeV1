import * as React from 'react';
import { useState } from 'react';
import UserNameOTP from './ResetPassword/UsernameOTP';
import ResponsiveAppBar from "./NavBar"
import ResetPassword from './ResetPassword/ResetPassword';




export default function MainReset() {
    console.log("This happens again")
    let [step, setStep] = useState("Step1")
    

    switch (step) {
        case 'Step1':
            return (<div><ResponsiveAppBar/><UserNameOTP buttonf={setStep}/></div>)
        case 'Step2':
            return (<div><ResponsiveAppBar/><ResetPassword /></div>)
        default:
            return (<div><ResponsiveAppBar/><UserNameOTP buttonf={setStep}/></div>)
    }
}
