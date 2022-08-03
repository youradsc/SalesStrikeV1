import * as React from 'react';
import { useState } from 'react';
import { CAStep1 } from './CreateAccount/CAStep1';
import CAStep2 from './CreateAccount/CAStep2';
import CAStep3 from './CreateAccount/CAStep3';
import CAStep4 from './CreateAccount/CAStep4';
import CAStep5 from './CreateAccount/CAStep5';
import CAStep6 from './CreateAccount/CAStep6';



export function CreateAccount() {
    console.log("This happens again")
    let [formData, setFormData] = useState({})
    let [step, setStep] = useState("Step1")
    

    switch (step) {
        case 'Step1':
            return <CAStep1 buttonf={setStep} setData={setFormData} />
        case 'Step2':
            return <CAStep2 buttonf={setStep} data={formData} setData={setFormData}/>
        case 'Step3':
            return <CAStep3 buttonf={setStep} data={formData} setData={setFormData}/>
        case 'Step4':
            return <CAStep4 buttonf={setStep} data={formData} setData={setFormData}/>
        case 'Step5':
            return <CAStep5 buttonf={setStep} data={formData} setData={setFormData}/>
        case 'Step6':
            return <CAStep6 buttonf={setStep} data={formData} setData={setFormData}/>
        default:
            return <CAStep1 buttonf={setStep} setData={setFormData}/>
    }
}
