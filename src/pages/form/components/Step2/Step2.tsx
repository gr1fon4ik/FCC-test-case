import React, { useState, useContext } from "react";
import FormHeader from "../FormHeader/FormHeader.tsx"
import { useFieldArray, useForm } from "react-hook-form"
import { StateContext, StateType } from "../../../../App.tsx";

import styles from "./styles.module.scss"
import deleteicon from "../../../../assets/icons/Delete.svg"
import plusicon from "../../../../assets/icons/Plus.svg"
import { Value } from "sass";

const Step2 = (props) => {
    const { state, setState } = useContext(StateContext);
    const { register, handleSubmit, formState: { errors }, formState, control } = useForm<StateType['step2']>({
        mode: 'onBlur',
        defaultValues: { ...state.step2 }
    });

    const [forward, setForward] = useState(true);

    const onSubmit = data => {
        console.log(data)
        setState({
            ...state,
            step2: { ...data }
        });
        if (forward) { props.nextStep() }
        else { props.previousStep() };
    };

    const { fields, append, remove } = useFieldArray({
        control,
        name: "text"
    });



    return (
        <form className={styles.formStep2} onSubmit={handleSubmit(onSubmit)}>
            <FormHeader step={props.step} />
            <div className={styles.advantagesMaster}>
                <label className={styles.label}> Advantages</label>
                {fields.map((_, i) => {
                    return (
                        <div>
                            <input key={`text.${i}`} {...register(`text.${i}.value`)} className={styles.inputArea} type="text" />
                            <img className={styles.binIcon} src={deleteicon} onClick={() => remove(i)} />
                        </div>
                    )
                })}
                <img src={plusicon} className={styles.newAreaButton} onClick={() => append('')} />
            </div>


            <div className={styles.checkboxGroup}>
                <label className={styles.label}> Checkbox group</label>
                <label htmlFor="field-checkbox-group-option-1">
                    <input type="checkbox" {...register("checkbox1")} name="checkbox1" id="field-checkbox-group-option-1" />
                    1
                </label>
                <label htmlFor="field-checkbox-group-option-2">
                    <input type="checkbox" {...register("checkbox2")} name="checkbox2" id="field-checkbox-group-option-2" />
                    2
                </label>
                <label htmlFor="field-checkbox-group-option-3">
                    <input type="checkbox" {...register("checkbox3")} name="checkbox3" id="field-checkbox-group-option-3" />
                    3
                </label>
            </div>
            <div className={styles.radioGroup}>
                <label className={styles.label}>Radio group</label>
                <label htmlFor="field-radio-group-option-1">
                    <input type="radio" {...register("radio")} id="field-radio-group-option-1" value="1" />
                    1
                </label>
                <label htmlFor="field-radio-group-option-2">
                    <input type="radio" {...register("radio")} id="field-radio-group-option-2" value="2" />
                    2
                </label>

                <label htmlFor="field-radio-group-option-3">
                    <input type="radio" {...register("radio")} id="field-radio-group-option-3" value="3" />
                    3
                </label>
            </div>
            <div className={styles.buttonBox}>
                <button className={styles.backButton} id="button-back" onClick={() => setForward(false)}>Назад</button>
                <button className={styles.nextButton} id="button-next" onClick={() => setForward(true)} >Далее</button>
            </div>
        </form>
    )
};

export default Step2;