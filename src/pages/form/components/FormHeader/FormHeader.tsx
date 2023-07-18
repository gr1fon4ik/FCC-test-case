import React from "react";

import {Dot,Check,Line} from "./components/CheckLineComps.tsx"

import styles from "./styles.module.scss"

type HeadetPropsTypes = {
    step: number;

};

const FormHeader = ({step}: HeadetPropsTypes) => {
    return (
        <div className={styles.item}>
            <div className={styles.progressLine}>
                {step ===1 ? <Dot active ={true}/>: <Check/>}
                <Line active ={step>1}/>
                {step <= 2 ? <Dot active={step === 2}/>: <Check/>}
                <Line active ={step>2}/>
                {step <= 3 ? <Dot active={step === 3}/>: <Check/>}
            </div>
        </div>
    )

};

export default FormHeader;