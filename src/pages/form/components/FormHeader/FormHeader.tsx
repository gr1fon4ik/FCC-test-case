import React from "react";
import styles from "./styles.module.scss"

import {Dot,Check,Line} from "./components/CheckLineComps.tsx"

type HeadetPropsTypes = {
    step: number;

};

const FormHeader = (props: HeadetPropsTypes) => {
    return (
        <div className={styles.item}>
            <div className={styles.progressLine}>
                {props.step ===1 ? <Dot active ={true}/>: <Check/>}
                <Line active ={props.step>1}/>
                {props.step <= 2 ? <Dot active={props.step === 2}/>: <Check/>}
                <Line active ={props.step>2}/>
                {props.step <= 3 ? <Dot active={props.step === 3}/>: <Check/>}
            </div>
        </div>
    )

};

export default FormHeader;