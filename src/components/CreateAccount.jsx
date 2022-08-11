import * as React from 'react';
import { useState } from 'react';
import { CAStep1 } from './CreateAccount/CAStep1';
import CAStep2 from './CreateAccount/CAStep2';
import CAStep3 from './CreateAccount/CAStep3';
import CAStep4 from './CreateAccount/CAStep4';
import CAStep5 from './CreateAccount/CAStep5';
import CAStep6 from './CreateAccount/CAStep6';
import ResponsiveAppBar from "./NavBar"




export function CreateAccount() {
    console.log("This happens again")
    let [formData, setFormData] = useState({})
    let [step, setStep] = useState("Step1")
    

    switch (step) {
        case 'Step1':
            return (<div><ResponsiveAppBar/><CAStep1 buttonf={setStep} setData={setFormData} data={formData} /></div>)
        case 'Step2':
            return (<div><ResponsiveAppBar/><CAStep2 buttonf={setStep} setData={setFormData} data={formData}/></div>)
        case 'Step3':
            return (<div><ResponsiveAppBar/><CAStep3 buttonf={setStep} setData={setFormData} data={formData}/></div>)
        case 'Step4':
            return (<div><ResponsiveAppBar/><CAStep4 buttonf={setStep} setData={setFormData} data={formData}/></div>)
        case 'Step5':
            return (<div><ResponsiveAppBar/><CAStep5 buttonf={setStep} setData={setFormData} data={formData}/></div>)
        case 'Step6':
            return (<div><ResponsiveAppBar/><CAStep6 buttonf={setStep} setData={setFormData} data={formData}/></div>)
        default:
            return (<div><ResponsiveAppBar/><CAStep1 buttonf={setStep} setData={setFormData} data={formData}/></div>)
    }
}
