import React from "react";

import styles from "./styles.module.scss"
import socials from "../../../../assets/icons/Socials.svg"

type SocialPropsTypes = {
    href:string;
    link:string;
  };

const SocialItem = (props:SocialPropsTypes) => {
    return (
        <div className={styles.item}>
            <img src={socials} className={styles.icon}></img>
            <a href={props.href} className={styles.link}>{props.link}</a>
        </div>
    );
};

export default SocialItem;