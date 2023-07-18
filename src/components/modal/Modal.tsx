import React, { useContext } from "react";
import {   useNavigate } from "react-router-dom";
import { StateContext } from "../../App.tsx";

import success from "../../assets/icons/ModalCheckSmall.svg"
import cancel from "../../assets/icons/CircleCancelFilled.svg"
import close from "../../assets/icons/Close.svg"

import styles from "./styles.module.scss"


const Modal = ( props ) => {
    const { state, setState } = useContext(StateContext)

    const navigate = useNavigate();

    const closeModal=()=>{
        setState({...state,
            modal:{active:false, error:0}})
    }

    const toMain = () =>{
        navigate("/", { replace: true });
        closeModal();
    }

    return (
        <div className={styles.modal}>
            <div className={styles.body}>
                {!props.error?
                    <div className={styles.modalHeader}> Форма успешно отправлена</div>
                    : <div className={styles.headerContainer}>
                        <div className={styles.modalHeader}>Ошибка</div>
                        <img src={close} className={styles.closeIcon} onClick={closeModal}/>
                    </div>
                }

                <div className={styles.modalContainer}>
                    <div className={!props.error? styles.iconDecorSucces : styles.iconDecorCancel}>

                        {!props.error?
                            <img src={success} className={styles.iconSucces} />
                            : <img src={cancel} className={styles.iconCancel} />
                        }

                    </div>
                </div>
                <div className={styles.modalFooter}>
                    {!props.error?
                        <button className={styles.toMainButton} id="button-to-main" onClick={toMain}> На главную</button>
                        :<button className={styles.closeButton} id="button-close" onClick={closeModal}> Закрыть</button>

                    }


                </div>
            </div>
        </div>
    );
};

export default Modal;