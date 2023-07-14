import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss"
import Modal from "../../components/modal/Modal.tsx";
import { StateContext, StateType } from "../../App.tsx";
import Step1 from "./components/Step1/Step1.tsx";
import Step2 from "./components/Step2/Step2.tsx";
import Step3 from "./components/Step3/Step3.tsx";


function BigForm() {
    const { state, setState } = useContext(StateContext)
    const [step, setStep] = useState(1);


    const navigate = useNavigate();
 
    const previousStep = () => {
        step > 1 ? setStep(step - 1) : navigate("/", { replace: true });
    };

    const nextStep = () => {
        setStep(step+1);
    };


    const collectData=()=>{
        let textArr=Object.values(state.step2.text)
        const newData={...state.mainPage, ...state.step1, ...state.step2, ...state.step3};
        return newData;
    }

    const sendForm = async () =>{
        const data = collectData()
        console.log(data)
        setStep(1);
        setState({...state,
        modal:{active:true,error:0}});

    }

    return(
        <div className={styles.wrapper}>
            {step === 1?<Step1 step={step} previousStep={previousStep} nextStep={nextStep}/>:
             step === 2?<Step2 step={step} previousStep={previousStep} nextStep={nextStep} />:
             <Step3 step={step} previousStep={previousStep} sendForm={sendForm}/>}
             {state.modal.active && <Modal error={state.modal.error}/>}
        </div>
    )

}

export default BigForm;