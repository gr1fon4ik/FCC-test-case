import React, { useState, useContext } from "react";
import FormHeader from "../FormHeader/FormHeader.tsx"
import { useForm } from "react-hook-form"
import { StateContext, StateType } from "../../../../App.tsx";

import styles from "./styles.module.scss"

const Step3 = (props) => {
    const { state, setState } = useContext(StateContext)
    const { register, handleSubmit, formState: { errors }, formState, control } = useForm<StateType["step3"]>({
        mode: 'onBlur',
        defaultValues: state.step3
    });

    const [forward, setForward] = useState(true);

    const onSubmit = data => {
        if (forward) { props.sendForm() }
        else { props.previousStep() }
    };

    const [aboutCount, setAboutCount] = useState(0)
    const onChangeAbout = (e) => {
        setState({
            ...state,
            step3: { about: e.target.value }
        })
        setAboutCount(e.target.value.replace(/ /g, '').length);
    };


    return (
        <form className={styles.formStep3} onSubmit={handleSubmit(onSubmit)} >
            <FormHeader step={props.step} />
            <div className={styles.aboutMaster}>
                <label className={styles.label}> About </label>
                <div className={styles.area}>
                    <textarea className={styles.aboutInput} id="field-about" placeholder=""
                        {...register("about",
                            {
                                maxLength: 200
                            })}
                        onChange={onChangeAbout}
                    />
                    <output className={styles.counter} >{aboutCount}</output>
                </div>
                <div className={styles.tip}>Tip</div>
            </div>
            <div className={styles.buttonBox}>
                <button className={styles.backButton} id="button-back" onClick={() => setForward(false)}>Назад</button>
                <button className={styles.sendButton} id="button-send" onClick={() => setForward(true)} >Отправить</button>
            </div>
        </form>
    );
};

export default Step3;