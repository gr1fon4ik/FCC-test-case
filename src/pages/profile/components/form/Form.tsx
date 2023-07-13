import React, { useContext } from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import InputMask from 'react-input-mask';

import styles from "./styles.module.scss"
import { StateContext, StateType } from "../../../../App.tsx";

function Form() {
    const { state, setState } = useContext(StateContext)
    const { register, handleSubmit, formState: { errors }, formState } = useForm<StateType['mainPage']>({
        mode: 'onBlur',
        defaultValues: state.mainPage
        
    });
    const navigate = useNavigate();

    const onSubmit = data => {
        setState({
            ...state,
            mainPage: { ...data }
        })
        navigate("/create", { replace: true })
    };
    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputMaster}>
                <label className={styles.label}>Номер телефона</label>
                <InputMask
                    placeholder="+7 (000) 000-00-00"
                    className={styles.inputArea}
                    mask="+7 (999) 999-99-99"
                    {...register("phoneNumber",
                        {
                            required: 'Поле не заполнено'
                        })}
                />
            </div>
            <div className={styles.inputMaster}>
                <label className={styles.label}>Email</label>
                <input
                    type="text"
                    placeholder="Email"
                    className={styles.inputArea}
                    {...register("email",
                        {
                            required: 'Поле не заполнено',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Entered value does not match email format"
                            }
                        })}
                />
            </div>
            <button className={styles.startButton} id="button-start" type="submit" >Начать</button>
        </form>
    );
};

export default Form;