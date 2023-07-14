import React from "react";
import styles from "./styles.module.scss"

import dot from "../../../../assets/icons/DotSmall.svg"
import check from "../../../../assets/icons/ProgressCheckSmall.svg"

import {Dot,Check,Line} from "./component/ProgressLine.tsx"

type HeadetPropsTypes = {
    step: number;

};

const FormHeader = (props: HeadetPropsTypes) => {
    return (
        <div className={styles.item}>
            <div className={styles.progressLine}>
                {props.step ===1 ? <Dot active ={true}/>: <Check/>}
                <Line active ={props.step>1&& true}/>
                {props.step <= 2 ? <Dot active={props.step === 2&& true}/>: <Check/>}
                <Line active ={props.step>2&& true}/>
                {props.step <= 3 ? <Dot active={props.step === 3&& true}/>: <Check/>}
            </div>
        </div>
    )

};

export default FormHeader;