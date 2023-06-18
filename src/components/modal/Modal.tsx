import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss"
import success from "../../assets/icons/ModalCheckSmall.svg"
import cancel from "../../assets/icons/CircleCancelFilled.svg"
import close from "../../assets/icons/Close.svg"

const Modal = ({ active, setActive, fail = 0 }) => {
    console.log(fail)
    return (
        <div className={styles.modal}>
            <div className={styles.body}>
                {fail === 0 ?
                    <div className={styles.modalHeader}> Форма успешно отправлена</div>
                    : <div className={styles.headerContainer}>
                        <div className={styles.modalHeader}>Ошибка</div>
                        <img src={close} className={styles.closeIcon} />
                    </div>
                }

                <div className={styles.modalContainer}>
                    <div className={fail === 0 ? styles.iconDecorSucces : styles.iconDecorCancel}>

                        {fail === 0 ?
                            <img src={success} className={styles.iconSucces} />
                            : <img src={cancel} className={styles.iconCancel} />
                        }

                    </div>
                </div>
                <div className={styles.modalFooter}>
                    {fail === 0 ?
                        <Link to="/">
                            <button className={styles.toMainButton} id="button-to-main"> На главную</button>
                        </Link>
                        :<button className={styles.closeButton} id="button-close"> Закрыть</button>

                    }


                </div>
            </div>
        </div>
    );
};

export default Modal;