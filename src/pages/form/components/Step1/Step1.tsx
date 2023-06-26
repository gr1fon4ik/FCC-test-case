import React, {useContext, useState } from "react";
import FormHeader from "../FormHeader/FormHeader.tsx"
import { useForm } from "react-hook-form"
import { StateContext, StateType } from "../../../../App.tsx";

import styles from "./styles.module.scss"

const Step1 = (props) => {
    const { state, setState } = useContext(StateContext);

    const { register, handleSubmit, formState: { errors }, formState } = useForm<StateType['step1']>({
        mode: 'onBlur',
        defaultValues: state.step1
    });

    const [forward, setForward] = useState(true);

    const onSubmit = data => {
        setState({
            ...state,
            step1: { ...data }
        });
        if (forward){props.nextStep()}
        else {props.previousStep()}
    };

    return (
        <form className={styles.formStep1} onSubmit={handleSubmit(onSubmit)}>
            <FormHeader step={props.step} />
            <div className={styles.inputMaster}>
                <label className={styles.label}>Nickname</label>
                <input
                    placeholder="Nickname"
                    className={styles.inputArea}
                    id="field-nickname"
                    {...register("nickname",
                        {
                            required: 'Поле не заполнено',
                            maxLength: 30,
                            pattern: /[^!@#$%^&*()_]/
                        })}
                />
                <div className={styles.tip}>Tip
                        <div className={styles.tipText}>{errors.nickname?.message}</div>
                </div>
            </div>


            <div className={styles.inputMaster}>
                <label className={styles.label} >Name</label>
                <input
                    type="text"
                    placeholder="Name"
                    className={styles.inputArea}
                    id="field-name"
                    {...register("name",
                        {
                            required: 'Поле не заполнено',
                            maxLength: 50,
                            pattern: /[A-Za-z]/
                        })}
                />
                <div className={styles.tip}>Tip
                        <div className={styles.tipText}>{errors.name?.message}</div>
                </div>
            </div>


            <div className={styles.inputMaster}>
                <label className={styles.label}>Surname</label>
                <input
                    type="text"
                    placeholder="Surname"
                    className={styles.inputArea}
                    id="field-name"
                    {...register("surname",
                        {
                            required: 'Поле не заполнено',
                            maxLength: 50
                        })}
                />
                <div className={styles.tip}>Tip
                        <div className={styles.tipText}>{errors.surname?.message}</div>
                </div>
            </div>

            <div className={styles.selectMaster}>
                <label className={styles.label}>Sex</label>
                <select
                    className={styles.selectArea}
                    id="field-sex"
                    {...register("sex")}>
                    <option value="" disabled selected hidden>Не выбрано</option>
                    <option className={styles.option} value="woman">female</option>
                    <option className={styles.option} value="man">male</option>
                </select>
            </div>
            <div className={styles.buttonBox}>
                <button className={styles.backButton} id="button-back" onClick={()=>setForward(false)}>Назад</button>
                <button className={styles.nextButton} id="button-next" onClick={()=>setForward(true)} >Далее</button>
            </div>
        </form>);
};

export default Step1;