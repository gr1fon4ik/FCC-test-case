import React from "react";

import styles from "./styles.module.scss"

const Modal = ({active,setActive}) =>{
    return(
        <div className={styles.modal}>
            <div className={styles.body}>
                <div className={styles.modalHeader}> Форма успешно отправлена</div>
                <div className={styles.modalContainer}>
                    <div className={styles.iconDecor}>
                        <div className={styles.icon}>

                        </div>
                    </div>
                </div>
                <div className={styles.modalFooter}>
                    <button className={styles.toMainButton} id="button-to-main"> На главную</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;