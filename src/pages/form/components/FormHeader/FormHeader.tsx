import React from "react";
import styles from "./styles.module.scss"

import dot from "../../../../assets/icons/DotSmall.svg"
import check from "../../../../assets/icons/ProgressCheckSmall.svg"

type HeadetPropsTypes = {
    step: number;

};

const FormHeader = (props: HeadetPropsTypes) => {
    return (
        <div className={styles.item}>
            <div className={styles.progressLine}>
                <div className={styles.progressdot1}><img src={dot}/></div>
                <hr className={styles.lineLeft} /> 
                <div className={styles.progressdot2}><img src={check}/></div>
                <hr className={styles.lineRight} />
                <div className={styles.progressdot3}><img src={check}/></div>
            </div>
        </div>
    )

};

export default FormHeader;