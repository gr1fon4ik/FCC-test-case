import React from "react";
import styles from "./styles.module.scss"

type HeadetPropsTypes = {
    step: number;

};

const FormHeader = (props: HeadetPropsTypes) => {
    return (
        <div className={styles.item}>
            <div className={styles.progressLine}>
                <hr className={styles.lineLeft} />
                <hr className={styles.lineRight} />
            </div>
        </div>
    )

};

export default FormHeader;