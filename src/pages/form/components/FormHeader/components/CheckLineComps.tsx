import React from "react";
import styles from "./styles.module.scss"

import dot from "../../../../../assets/icons/DotSmall.svg"
import check from "../../../../../assets/icons/ProgressCheckSmall.svg"

export const Dot=(props)=>{
    return(
        <div className={props.active?styles.progressdotActive:styles.progressdot}>{props.active && <img src={dot}/>}</div>
    )
}

export const Check=()=>{
    return(
        <div className={styles.progressdotCheck}><img src={check}/></div>
    )
}

export const Line=(props)=>{
    return(
        <hr  className={props.active?styles.lineActive:styles.line}/>
    )
}